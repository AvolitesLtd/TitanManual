import React, {ReactNode} from 'react';


const Key = (tag: string): ReactNode => {
    return function (props) {
      return React.createElement('span', {className: `${tag}`, ...props});
    };
  };


export default {
    ContextKey: Key('context'),
    SoftKey: Key('softkey'),
    HardKey: Key('key'),
    RedKey: Key('key red'),
};