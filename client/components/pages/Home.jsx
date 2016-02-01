import React from 'react';
import style from '../../style.css';

export const Home = () => {
  return (
    <div className={style.libraries}>
      <div>
        {'Front-end:'}
        <ul>
          <li><a href='https://github.com/facebook/react'>{'react'}</a></li>
          <li><a href='https://github.com/rackt/redux'>{'redux'}</a></li>
          <li><a href='https://github.com/rackt/react-redux'>{'react-redux'}</a></li>
          <li><a href='https://github.com/gaearon/redux-thunk'>{'redux-thunk'}</a></li>
          <li><a href='https://github.com/matthew-andrews/isomorphic-fetch'>{'isomorphic-fetch'}</a></li>
          <li><a href='https://github.com/rackt/react-router'>{'react-router'}</a></li>
          <li><a href='https://github.com/jhudson8/react-chartjs'>{'react-chartjs'}</a></li>
          <li><a href='https://github.com/nnnick/Chart.js'>{'chart.js'}</a></li>
          <li><a href='https://github.com/glittershark/reactable'>{'reactable'}</a></li>
          <li><a href='https://github.com/MicheleBertoli/react-gmaps'>{'react-gmaps'}</a></li>
        </ul>
      </div>
      <div>
        {'Back-end:'}
        <ul>
          <li><a href='https://github.com/nodejs/node'>{'node'}</a></li>
          <li><a href='https://github.com/strongloop/express'>{'express'}</a></li>
          <li><a href='https://github.com/Automattic/mongoose'>{'mongoose'}</a></li>
          <li><a href='https://www.mongolab.com/'>{'mongolab'}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
