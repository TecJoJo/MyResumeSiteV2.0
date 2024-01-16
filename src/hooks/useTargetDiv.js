// this hook may not going to be called inside the nav bar, a state will be called instead?
// this hook is going to be call in every section 

import React, { useContext } from 'react'
import { useRef,useEffect } from 'react'
import {ScrollNavContext} from '../context/ScrollNavContext'
function useTargetDiv() {
    const {targetDivs,setTargetDivs} = useContext(ScrollNavContext)
    const targetDiv = useRef(null)
    
    useEffect(() => {
        
        const key = targetDiv.current.id;
        const observer = new IntersectionObserver(([object])=>{
            setTargetDivs((prevDivs)=>({
                ...prevDivs,
                [key]:{...prevDivs[key],onScreen:object.isIntersecting}
            }))
        },{threshold:0.5})

        observer.observe(targetDiv.current)

      if (targetDiv.current) {
          
          setTargetDivs((prevDivs) => ({
              ...prevDivs,
              [key]: {...prevDivs[key],div:targetDiv.current},
          }));
      }
      return () => observer.disconnect()
  }, [targetDiv,setTargetDivs]);
  
    
    
  return targetDiv
    
}

export default useTargetDiv

