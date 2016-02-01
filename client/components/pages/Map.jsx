import React from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import style from '../../style.css';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const Map = () => {
  return (
    <div className={style.centerMap}>
      <div>{'Google Maps'}</div>
      <Gmaps
        width={'400px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{ v: '3.exp' }}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
        />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
        />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
        />
      </Gmaps>
    </div>

  );
};

export default Map;
