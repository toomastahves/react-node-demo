import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';

export const ContentLayout = (SubComponent) => {

  const A = (props) => {
    const data = 'hello';
    return (
      <div>
        <Menu />
        <SubComponent {...props} data={data} />
        <Footer />
      </div>
    );
  };
  return A;

};

export default ContentLayout;
