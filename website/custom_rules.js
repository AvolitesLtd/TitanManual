module.exports = {
  keyRule: function (md, name, open, close, render_open, render_close, max) {
    md.inline.ruler.before('text',name, function(state,silent) {
      const {pos: start, src, posMax} = state
      if (src.charCodeAt(start) !== open.charCodeAt(0)) return false
      if (start + 4 >= posMax) return false
      if (src.charCodeAt(start + 1) !== open.charCodeAt(1)) return false

      state.pos = start + 2
      let found = false
      if (max == null) {
        max = 100;
      }

      while (state.pos + 1 < posMax && state.pos < start + max) {
        if (src.charCodeAt(state.pos) === close.charCodeAt(0)) {
          if (src.charCodeAt(state.pos + 1) === close.charCodeAt(1)) {
            found = true
            break
          }
        }
        state.parser.skipToken(state)
      }

      if (!found) {
        state.pos = start
        return false
      }

      state.posMax = state.pos
      state.pos = start + 2
      if (!silent) {
        state.push({ type: render_open, level: state.level++ })
        state.linkLevel++
        state.parser.tokenize(state)
        state.linkLevel--
        state.push({ type: render_close, level: --state.level })
      }

      state.pos = state.posMax + 2
      state.posMax = posMax
      return true
    })
  },

  softkey_open: function(tokens, idx, options /*, env */) {
    return `<span class="softkey">`;
  },

  softkey_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },

  key_open: function(tokens, idx, options /*, env */) {
    const redKeys = ["avo","locate"];
    let keyClass = '';
    if(redKeys.includes(tokens[idx+1].content.toLowerCase())) {
      keyClass += " red";
    }

    return `<span class="key ${keyClass}">`;
  },

  key_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },

  context_open: function(tokens, idx, options /*, env */) {
    let keyClass = ' ';

    switch (tokens[idx+1].content.toLowerCase()) {
      case "+":
        keyClass += "plus"
        break;

      case "i":
        keyClass += "i"
        break;

      case "sun":
      case "sonne": // german
        keyClass += "key-with-icon sun"
        break;

      case "rubbish bin":
      case "mülleimer": //german
        keyClass += "key-with-icon rubbish"
        break;

      case "pencil":
      case "bleistift": // german
        keyClass += "key-with-icon pencil"
        break;

      case "link":
      case "verknüpfung": // german
        keyClass += "key-with-icon link"
        break;
    
      default:
        break;
    }

    return `<span class="context ${keyClass}">`;
  },

  context_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },

  annotate_open: function(tokens, idx, options /*, env */) {
    return `<span class="annotate">`;
  },

  annotate_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },

  externalLinks: function(md) {
    const originalLinkOpenRenderer = md.renderer.rules.link_open;

    md.renderer.rules.link_open = (tokens, idx, options, env) => {
        const href = tokens[idx].href;
        const match = /^((http|)s?:?\/\/|mailto:)/mi.exec(href);

        if (match) {
          options.linkTarget = "_blank";
          return originalLinkOpenRenderer(tokens, idx, options, env)
        }

        options.linkTarget = "";
        return originalLinkOpenRenderer(tokens, idx, options, env);
    };
  }
}
