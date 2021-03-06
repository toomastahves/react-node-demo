import React, { PropTypes } from 'react';
import { Gmaps, InfoWindow } from 'react-gmaps';
import '../styles/map.css';
import shortid from 'shortid';

export const ShowMap = ({ pets }) => {
  const infoWindows = [];
  for(let i = 0, len = pets.length; i < len; i++) {
    if(pets[i].lat && pets[i].lng) {
      infoWindows.push(
        <InfoWindow
          key={shortid.generate()}
          lat={pets[i].lat}
          lng={pets[i].lng}
          content={`<a href='#/pet/${pets[i]._id}'>${pets[i].name}</a>`}
        />);
    }
  }
  return (
    <div className='center-map'>
      <Gmaps
        width={'800px'}
        height={'500px'}
        lat={58.85}
        lng={25.27}
        zoom={7}
        loadingMessage={'Be happy'}
      >
        {infoWindows}
      </Gmaps>
    </div>
  );
};

ShowMap.propTypes = {
  pets: PropTypes.array
};

export default ShowMap;
