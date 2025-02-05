import React from 'react';
import { useLocation } from "react-router";
import DocVersionBadge from '@theme-original/DocVersionBadge';

export default function DocVersionBadgeWrapper(props) {
  const pathName = useLocation().pathname;
  const isPrism = pathName.includes('prism')
  
  return (
    isPrism ?
        <span className='theme-doc-version-badge badge badge--secondary'>
          Version: 1.4
        </span>
      : 
    <DocVersionBadge {...props} />
  );
}
