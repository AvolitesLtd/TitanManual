module.exports = {
  keyRule: function (md,name,open,close,render_open,render_close) {
    md.inline.ruler.before('text',name, function(state,silent) {
      const {pos: start, src, posMax} = state
      if (src.charCodeAt(start) !== open.charCodeAt(0)) return false
      if (start + 4 >= posMax) return false
      if (src.charCodeAt(start + 1) !== open.charCodeAt(1)) return false
    
      state.pos = start + 2
      let found = false
      while (state.pos + 1 < posMax && state.pos < start + 40) {
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
  
  button_open: function(tokens, idx, options /*, env */) {
    return `<span class="key">`;
  },
  
  button_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },  
  annotate_open: function(tokens, idx, options /*, env */) {
    return `<span class="annotate">`;
  },
  
  annotate_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  }

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
  },
}