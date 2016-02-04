import React, { PropTypes } from 'react';
import BoxListItem from './BoxListItem';
import shortid from 'shortid';

export const Box = (props) => {
  return (
    <div className='box-table'>
      <div className='box-table-header'>
          {props.header}
      </div>
      <ul className='box-table-list'>
        {props.qualities.map(q => <BoxListItem key={shortid.generate()} quality={q} />)}
      </ul>
      <a href={`#${props.link}`} className='box-button-choose pure-button'>
        {props.linkname}
      </a>
    </div>
  );
};

Box.propTypes = {
  header: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkname: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired
};

export default Box;
