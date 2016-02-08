import React from 'react';
import Menu from '../Menu/';
import Banner from '../Banner/';
import Info from '../Info/';
import Footer from '../Footer';

export const HomeLayout = () => {

  const Sub = () => {
    return (
      <div>
        <Menu />
        <Banner />
        <Info />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default HomeLayout;
