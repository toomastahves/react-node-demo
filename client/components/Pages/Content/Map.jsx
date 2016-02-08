import React from 'react';
import './pages.css';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import ContentLayout from '../../Layouts/Content';
import SubHeader from '../../SubHeader/SubHeader';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

export const Map = () => {
  return (
    <div>
      <div>
        <SubHeader header={'Map demo'} description={'Created using react-gmaps library'} />
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
    </div>
  );
};

export default ContentLayout(Map);
