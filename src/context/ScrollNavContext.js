import React, { createContext, useRef, useState } from 'react'


export const ScrollNavContext = createContext({})

function ScrollNavProvider({children}) {
    const [targetDivs,setTargetDivs] = useState({})
const values = {targetDivs:targetDivs,setTargetDivs:setTargetDivs}
  return (
    <ScrollNavContext.Provider value={values}>
    {children}
    </ScrollNavContext.Provider>
    
  )
}

export default ScrollNavProvider