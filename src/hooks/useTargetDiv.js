// this hook may not going to be called inside the nav bar, a state will be called instead?
// this hook is going to be call in every section 

import React, { useContext } from 'react'
import { useRef,useEffect } from 'react'
import { ScrollNavContext } from '../context/ScrollNavContext'
function useTargetDiv() {
    const {targetDivs,setTargetDivs} = useContext(ScrollNavContext)
    
    const targetDiv = useRef(null)
    
    
    useEffect(() => {
      if (targetDiv.current) {
          const key = targetDiv.current.id;
          setTargetDivs((prevDivs) => ({
              ...prevDivs,
              [key]: targetDiv.current,
          }));
      }
  }, [targetDiv]);
  
    
    
  return [targetDiv,targetDivs]
    
}

export default useTargetDiv

