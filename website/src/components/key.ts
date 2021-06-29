import React, {ReactNode} from 'react';
const transButtons = require('../../languages-buttons.json')


const Key = (tag: string): ReactNode => {
    return function (props) {
      let extraClass = '';
      for (const [cls, trans] of Object.entries(transButtons.context))
        for (const [lang, tran] of Object.entries(trans['lang']))
         if(typeof props.children == 'string' && props.children.toLowerCase() == tran)
           extraClass += cls;
      return React.createElement('span', {className: `${tag} ${extraClass}`, ...props});
    };
  };


export default {
    ContextKey: Key('context'),
    SoftKey: Key('softkey'),
    HardKey: Key('key'),
    RedKey: Key('key red'),
    Annotation: Key('annotate')
};