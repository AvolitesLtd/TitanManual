import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import './style.css'

export default function DocSidebarWrapper(props) {
  const isPrism = props.path.includes('prism/prism')
  const isZero = props.path.includes('prism/zero')
  const isPlayer = props.path.includes('prism/player')

  //Use the props to grab data from the sidebar config
  console.log(props);

  const version = (isZero || isPlayer) ? "v1.2" : isPrism ? "v1.3" : ""; 

  return (
      (isPrism || isZero || isPlayer) ?
        <>
          <div className='sideBarHeader'>
            <span className='theme-doc-version-badge badge badge--secondary'>
              Version: {version}
            </span>
          </div>
          <div className='sidebarOffset'>
            <DocSidebar {...props} />
          </div>
        </>
        : 
      <DocSidebar {...props} />
  )
}
