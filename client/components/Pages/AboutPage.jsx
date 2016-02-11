import React from 'react';
import '../styles/pages.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';

export const About = () => {
  return (
    <div>
      <SubHeader header={'About demo app'} description={'Basic web application'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Front-end'}
        </div>
        <div className='content-subcontent'>
          {'Describe later'}
        </div>
        <div className='content-subheader'>
          {'Back-end'}
        </div>
        <div className='content-subcontent'>
          {'Describe later'}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout(About);
