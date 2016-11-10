import React from 'react';

const Slide = ({picture}) => {

  // if(!picture){
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='slideshow'>
      <div className='row'>
        <img className='slide-item' src={picture.url} alt={picture.caption} />
      </div>
      <div className='row row-caption'>
        <span className='caption'>{picture.caption}</span>
      </div>
    </div>
  );
};

export default Slide;
