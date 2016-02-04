import React, { PropTypes } from 'react';

export const Card = (props) => {
  return (
    <div className='l-box'>
      <div className='information-head'>
        {props.heading}
      </div>
      <div className='card-content'>
        {props.content}
      </div>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Card;
