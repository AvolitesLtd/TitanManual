import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";

function Root({children}) {
  const pathName = useLocation().pathname;
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (pathName.startsWith("/prism")) 
      setClassName("prism");
    else
      setClassName("");
  }, [pathName]);
  

  return <div className={className}>{children}</div>;
}

export default Root;