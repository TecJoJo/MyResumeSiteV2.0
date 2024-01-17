import React from 'react'

function SingleProject({img}) {
  return (
    <div className="row single-project align-items-lg-stretch ">
      <div className="  col-md-7  ">

        <img src={img} alt="project" className='object-fit-contain'/>
      </div>
      <div className=" col-md-5 d-flex flex-column ">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          deserunt placeat similique quae perspiciatis veniam praesentium iure
          voluptas reprehenderit voluptatibus!
        </p>
      </div>
    </div>
  );
}

export default SingleProject