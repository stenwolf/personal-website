import React from 'react';
import ProfilePic from './profile-pic';
import BasicInfo from './basic-info';

const Banner = () => {
  return(
    <header>
      <div className='container-fluid'>
        <div className='row profile'>
          <ProfilePic />
          <BasicInfo />
        </div>
      </div>
    </header>
  );
}

export default Banner;
