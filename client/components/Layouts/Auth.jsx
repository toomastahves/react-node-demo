import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';

export const AuthLayout = (SubComponent) => {

  const A = (props) => {
    return (
      <div>
        <Menu />
        <SubComponent {...props} />
        <Footer />
      </div>
    );
  };
  return A;

};

export default AuthLayout;
