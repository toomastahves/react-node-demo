import React from 'react';
import './pages.css';
import CardWrap from '../../Info/Card/CardWrap';
import BoxWrap from '../../Info/Box/BoxWrap';
import ContentLayout from '../../Layouts/Content';
import SubHeader from '../../SubHeader/SubHeader';

export const About = () => {
  return (
    <div>
      <div>
        <SubHeader header={'About demo app'} description={'Basic web application'} />
        <div className='content'>
          <div className='content-subheader'>
            {'Front-end'}
          </div>
          <div className='content-subcontent'>
            {'Descibe later'}
          </div>
          <div className='content-subheader'>
            {'Back-end'}
          </div>
          <div className='content-subcontent'>
            {'Descibe later'}
          </div>
        </div>
      </div>
      <CardWrap />
      <BoxWrap />
    </div>
  );
};

export default ContentLayout(About);
