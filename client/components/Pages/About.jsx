import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';
import './pages.css';
import CardWrap from '../Info/Card/CardWrap';
import BoxWrap from '../Info/Box/BoxWrap';

export const About = () => {
  return (
    <div>
      <Menu />
      <div>
        <div className='header'>
          <h1>{'About demo app'}</h1>
          <h2>{'Basic web application'}</h2>
        </div>
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
      <Footer />
    </div>
  );
};

export default About;
