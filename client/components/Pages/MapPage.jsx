import React from 'react';
import '../styles/pages.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import HandleMap from '../Parts/HandleMap';

export const Map = () => {
  return (
    <div>
      <SubHeader header={'Map demo'} description={'Created using react-gmaps library'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Pets locations on Google maps'}
        </div>
        <HandleMap />
      </div>
    </div>
  );
};

export default ContentLayout(Map);
