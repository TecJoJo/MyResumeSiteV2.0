// this hook may not going to be called inside the nav bar, a state will be called instead?
// this hook is going to be call in every section 

import React, { useContext } from 'react'
import { useRef,useEffect } from 'react'
import {ScrollNavContext} from '../context/ScrollNavContext'
function useTargetDiv() {
    const {setTargetDivs} = useContext(ScrollNavContext)
    const targetDiv = useRef(null)
    
    useEffect(() => {
        
        const key = targetDiv.current.id;
        //create a observer object to observe the div and update the one screen state to the targetDivs object 
        const observer = new IntersectionObserver(([object])=>{
            setTargetDivs((prevDivs)=>({
                ...prevDivs,
                [key]:{...prevDivs[key],onScreen:object.isIntersecting}
            }))
        },{threshold:0.5})

        observer.observe(targetDiv.current)

      if (targetDiv.current) {
          //put the target div into the targetDivs object so we have access globally via context API
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

