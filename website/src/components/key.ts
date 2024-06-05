import React from 'react';
const transButtons = require('../../languages-buttons.json')

const Key = (tag: string) => {
    return (props) => {
      
      const buttons = tag === 'prism' ? transButtons.prism : transButtons.context;
      
      let extraClass = ''; 

      for (const [cls, trans] of Object.entries(buttons))
        for (const [_, tran] of Object.entries(trans['lang']))
          if(typeof props.children == 'string' && props.children.toLowerCase() == tran)
            extraClass += cls;
          
      //We want to style things inside PrismKeys without icons
      if (tag === 'prism' && extraClass === '')
        extraClass = 'prism-custom'
      
      return React.createElement('span', {className: `${tag} ${extraClass}`, ...props});
    };
  };


export default {
    ContextKey: Key('context'),
    SoftKey: Key('softkey'),
    HardKey: Key('key'),
    RedKey: Key('key red'),
    Annotation: Key('annotate'),
    PrismKey: Key('prism'),
};