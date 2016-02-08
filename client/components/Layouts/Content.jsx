import React from 'react';
import Menu from '../Parts/Menu';
import Footer from '../Parts/Footer';

export const ContentLayout = (SubComponent) => {

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

export default ContentLayout;
