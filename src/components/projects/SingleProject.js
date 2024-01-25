import React from 'react'

function SingleProject({img, isDarkBackGround,title,description}) {
  return (
    <div className={`row single-project align-items-lg-stretch ${isDarkBackGround&&"dark-background"}`}>
      <div className="  col-md-7  ">
        <div className="image-container">

        <img src={img} alt="project" className='object-fit-contain'/>
        </div>
      </div>
      <div className=" col-md-5 d-flex flex-column justify-content-center">
        <h3 className={`mb-2 merriweather ${isDarkBackGround?"gradient-text-wy":"gradient-text-bb"} `} >{title}</h3>
        <p className=' mt-2 '>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SingleProject