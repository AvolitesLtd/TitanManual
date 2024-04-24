import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import './style.css'

export default function DocSidebarWrapper(props) {
  const isPrism = props.path.includes('prism')
  
  //Use the props to grab data from the sidebar config
  console.log(props);

  return (
      isPrism ?
        <>
          <div className='sideBarHeader'>
            <span className='theme-doc-version-badge badge badge--secondary'>
              Version: insert here!
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
