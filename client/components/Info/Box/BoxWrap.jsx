import React from 'react';
import Box from './Box';
import './box.css';

export const BoxWrap = () => {
  return (
    <div className='box-wrap pure-g'>
      <div className='pure-u-1 pure-u-md-1-3'>
        <Box
          header={'Chart'}
          link={'chart'}
          linkname={'Go to chart page'}
          qualities={['Line', 'Bar', 'Pie']}
        />
      </div>
      <div className='pure-u-1 pure-u-md-1-3'>
        <Box
          header={'Table'}
          link={'table'}
          linkname={'Go to table page'}
          qualities={['Sortable', 'Filters', 'Paging']}
        />
      </div>
      <div className='pure-u-1 pure-u-md-1-3'>
        <Box
          header={'Map'}
          link={'map'}
          linkname={'Go to map page'}
          qualities={['Zoomable', 'Markers', 'Events']}
        />
      </div>
    </div>
  );
};

export default BoxWrap;
