import React from 'react';
const BasicInfo = () => {
  // return(
  //   <div className='col-sm-8 basic-info'>
  //     <div className='rubberBand'>
  //       <h2>Hello World! I&#39;m Anh Ho</h2>
  //     </div>
  //     <h4>Web Developer</h4>
  //     <div className='basic-info'>
  //       <div className='row'>
  //         <div className='col-sm-4'><span>Phone</span></div>
  //         <div className='col-sm-8'><span>(415) 742-2535</span></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-sm-4'><span>Email</span></div>
  //         <div className='col-sm-8'><a href='mailto:AnhPhanHo@gmail.com'>AnhPhanHo@gmail.com</a></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-sm-4'><span>Location</span></div>
  //         <div className='col-sm-8'><span>San Francisco Bay Area</span></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-sm-4'><span>Current</span></div>
  //         <div className='col-sm-8'><span>Web Developer at Wells Fargo</span></div>
  //       </div>
  //       <div className='row'>
  //         <div className='col-sm-4'><span>GitHub</span></div>
  //         <div className='col-sm-8'><a href='https://github.com/stenwolf'>https://github.com/stenwolf</a></div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return(
    <div className='col-sm-8 basic-info'>
      <div className='rubberBand'>
        <h2>Hello World! I&#39;m Anh Ho</h2>
      </div>
      <h4>Web Developer</h4>
      <ul className='basic-info-ul'>
        <li>
          <ul className='info-row'>
            <li>Phone</li>
            <li>(415) 742-2535</li>
          </ul>

        </li>
        <li>
          <ul className='info-row'>
            <li>Email</li>
            <li><a href='mailto:AnhPhanHo@gmail.com'>AnhPhanHo@gmail.com</a></li>
          </ul>

        </li>
        <li>
          <ul className='info-row'>
            <li>Location</li>
            <li>San Francisco Bay Area</li>
          </ul>

        </li>
        <li>
          <ul className='info-row'>
            <li>Current</li>
            <li>Web Developer at Wells Fargo</li>
          </ul>

        </li>
        <li>
          <ul className='info-row'>
            <li>GitHub</li>
            <li><a href='https://github.com/stenwolf'>https://github.com/stenwolf</a></li>
          </ul>

        </li>
      </ul>
    </div>
  );
}

export default BasicInfo;
