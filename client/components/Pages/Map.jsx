import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';
import './pages.css';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export const Map = () => {
  return (
    <div>
      <Menu />
      <div>
        <div className='header'>
          <h1>{'About demo app'}</h1>
          <h2>{'Basic web application'}</h2>
        </div>
        <div className='content'>
          <div className='content-subheader'>
            {'Front-end'}
          </div>
          <div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Map;
