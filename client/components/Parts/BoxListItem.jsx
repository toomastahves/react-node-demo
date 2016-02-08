import React, { PropTypes } from 'react';

export const BoxListItem = (props) => {
  return (
    <li>{props.quality}</li>
  );
};

BoxListItem.propTypes = {
  quality: PropTypes.string.isRequired
};

export default BoxListItem;
