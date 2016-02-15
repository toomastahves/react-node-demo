import React from 'react';
import MenuContainer from './MenuContainer';
import Banner from '../Parts/Banner';
import BoxWrap from '../Parts/BoxWrap';
import CardWrap from '../Parts/CardWrap';
import Footer from '../Parts/Footer';

export const Landing = () => {

  const Sub = () => {
    return (
      <div>
        <MenuContainer />
        <Banner />
        <BoxWrap />
        <CardWrap />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default Landing;
