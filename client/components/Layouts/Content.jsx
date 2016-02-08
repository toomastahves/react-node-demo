import React from 'react';
import Menu from '../Parts/Menu';
import Footer from '../Parts/Footer';
import '../styles/github.css';
import GithubRibbon from '../Parts/GithubRibbon';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {
    return (
      <div>
        <Menu />
        <SubComponent {...props} />
        <Footer />
        <GithubRibbon />
      </div>
    );
  };
  return Sub;

};

export default ContentLayout;
