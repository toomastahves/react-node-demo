import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';

export const AuthLayout = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div>
        <Menu />
        <SubComponent {...props} />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default AuthLayout;
