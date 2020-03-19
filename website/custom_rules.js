module.exports = {
  softkeyRule: function (state, silent) {
    const {pos: start, src, posMax} = state
    const ch = src.charCodeAt(start)
    if (ch !== 0x5C/* \ */) return false
    if (start + 4 >= posMax) return false
    if (src.charCodeAt(start + 1) !== 0x5b /* [ */) return false
  
    const labelStart = start + 2
    let labelEnd = start + 2
    state.pos = start + 2
    let found = false
    while (state.pos + 1 < posMax) {
      if (src.charCodeAt(state.pos) === 0x5C/* \ */) {
        if (src.charCodeAt(state.pos + 1) === 0x5d /* ] */) {
          labelEnd = state.pos
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
      state.push({ type: 'softkey_open', level: state.level++ })
      state.linkLevel++
      state.parser.tokenize(state)
      state.linkLevel--
      state.push({ type: 'softkey_close', level: --state.level })
    }
  
    state.pos = state.posMax + 2
    state.posMax = posMax
    return true
  },
  
  softkey_open: function(tokens, idx, options /*, env */) {
    return `<span class="softkey">`;
  },

  softkey_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  },
  
  buttonRule: function (state, silent) {
    const {pos: start, src, posMax} = state
    const ch = src.charCodeAt(start)
    if (ch !== 0x5C/* \ */) return false
    if (start + 4 >= posMax) return false
    if (src.charCodeAt(start + 1) !== 0x3C/* < */) return false
  
    const labelStart = start + 2
    let labelEnd = start + 2
    state.pos = start + 2
    let found = false
    while (state.pos + 1 < posMax) {
      if (src.charCodeAt(state.pos) === 0x5C/* \ */) {
        if (src.charCodeAt(state.pos + 1) === 0x3E/* > */) {
          labelEnd = state.pos
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
      state.push({ type: 'button_open', level: state.level++ })
      state.linkLevel++
      state.parser.tokenize(state)
      state.linkLevel--
      state.push({ type: 'button_close', level: --state.level })
    }
  
    state.pos = state.posMax + 2
    state.posMax = posMax
    return true
  },
  
  button_open: function(tokens, idx, options /*, env */) {
    return `<span class="key">`;
  },
  
  button_close: function(/* tokens, idx, options, env */) {
    return '</span>';
  }
}