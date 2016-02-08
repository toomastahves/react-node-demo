import React, { PropTypes } from 'react';
import './subheader.css';

export const SubHeader = (props) => {
  return (
    <div className='header'>
      <h1>{props.header}</h1>
      <h2>{props.description}</h2>
    </div>
  );
};

SubHeader.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string
};

export default SubHeader;
