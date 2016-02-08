import React from 'react';
import Menu from '../Parts/Menu';
import Banner from '../Parts/Banner';
import BoxWrap from '../Parts/BoxWrap';
import CardWrap from '../Parts/CardWrap';
import Footer from '../Parts/Footer';

export const HomeLayout = () => {

  const Sub = () => {
    return (
      <div>
        <Menu />
        <Banner />
        <BoxWrap />
        <CardWrap />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default HomeLayout;
