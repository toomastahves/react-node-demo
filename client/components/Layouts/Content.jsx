import React from 'react';
import Footer from '../Parts/Footer';
import MenuContainer from './MenuContainer';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {

    return (
      <div>
        <MenuContainer />
        <SubComponent {...props} />
        <Footer />
      </div>
    );
  };
  return Sub;

};


export default ContentLayout;
