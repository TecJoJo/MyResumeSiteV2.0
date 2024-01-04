import React from 'react'
import company from "../../sources/companyLogos/beamex.jpg"
import logical from "../../sources/companyLogos/Logical.jpg"
import {companiesWorked} from "./messages"
function Company() {
  return (
    <>
    <div className=' container-lg my-5  '>
      <div className=' row justify-content-center  '>
        <h2 className='col-6 gradient-text-bb'>{companiesWorked}</h2>
        <div className='row justify-content-center '>
          <img className='col-5  object-fit-contain  ' src={company} alt="" />
          {/* <img className='col-5  object-fit-contain  ' src={logical} alt="" /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Company