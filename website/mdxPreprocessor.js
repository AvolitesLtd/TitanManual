/**
 * MDX 3 (Docusaurus 3) treats `{...}` as JS and `<...>` as JSX.
 * Titan/Prism docs use `{Select}` as handle labels, `<Enter>` / `<View/Open>`
 * as typed key names, and comparisons like `Dimmer <50%`.
 * Keep real components (`Keys.*`, `Video`) and HTML tags.
 */
const ALLOWED_TAG =
  /^(?:Keys\.(?:HardKey|SoftKey|PrismKey|RedKey|ContextKey|Annotation)|Video|br|img|p|strong|em|span|div|a|table|thead|tbody|tr|td|th|ul|ol|li|code|pre|hr|h[1-6]|blockquote|details|summary|sup|sub|i|b|u|small)$/i;

function isAllowedOpen(rest) {
  if (rest.startsWith('!--') || rest.startsWith('!')) {
    return true;
  }
  const match = rest.match(/^(\/?[A-Za-z][\w.-]*)/);
  if (!match) {
    return false;
  }
  const name = match[1].replace(/^\//, '');
  return ALLOWED_TAG.test(name);
}

function processLine(raw) {
  // `<strong>\</strong>` was used to bold a backslash; MDX treats `\</` as an
  // escaped closer, so the <strong> never closes.
  let line = raw.replace(/<strong>\\<\/strong>/g, '<strong>\\\\</strong>');

  let out = '';
  let i = 0;
  let inInline = false;
  while (i < line.length) {
    const ch = line[i];

    if (ch === '`') {
      inInline = !inInline;
      out += ch;
      i += 1;
      continue;
    }

    if (!inInline && ch === '<' && (i === 0 || line[i - 1] !== '\\')) {
      if (!isAllowedOpen(line.slice(i + 1))) {
        out += '\\<';
        i += 1;
        continue;
      }
    }

    if (!inInline && line.startsWith('={{', i)) {
      const end = line.indexOf('}}', i);
      if (end !== -1) {
        out += line.slice(i, end + 2);
        i = end + 2;
        continue;
      }
    }

    if (!inInline && (ch === '{' || ch === '}') && (i === 0 || line[i - 1] !== '\\')) {
      out += '\\' + ch;
      i += 1;
      continue;
    }

    out += ch;
    i += 1;
  }

  return out;
}

module.exports = function mdxPreprocessor({ fileContent }) {
  const lines = fileContent.split('\n');
  let inFence = false;

  return lines
    .map((line) => {
      const eol = line.endsWith('\r') ? '\r' : '';
      const raw = eol ? line.slice(0, -1) : line;
      const trimmed = raw.trim();

      if (trimmed.startsWith('```')) {
        inFence = !inFence;
        return line;
      }
      if (inFence) {
        return line;
      }
      if (/^\s*import\s/.test(raw) || /^\s*export\s/.test(raw)) {
        return line;
      }

      return processLine(raw) + eol;
    })
    .join('\n');
};
