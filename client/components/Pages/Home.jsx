import React from 'react';
import Menu from '../Menu/';
import Banner from '../Banner/';
import Info from '../Info/';
import Footer from '../Footer';

export const Home = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
