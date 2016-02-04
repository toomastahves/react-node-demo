import React from 'react';
import './menu.css';

export const Menu = () => {
  return (
    <div>
      <div className='pure-menu pure-menu-horizontal'>
        <a href='#home' className='pure-menu-heading'>{'Logo'}</a>
        <ul className='pure-menu-list'>
          <li className='pure-menu-item pure-menu-selected'><a href='#home' className='pure-menu-link'>{'Home'}</a></li>
          <li className='pure-menu-item'><a href='#chart' className='pure-menu-link'>{'Chart'}</a></li>
          <li className='pure-menu-item'><a href='#table' className='pure-menu-link'>{'Table'}</a></li>
          <li className='pure-menu-item'><a href='#map' className='pure-menu-link'>{'Map'}</a></li>
          <li className='pure-menu-item'><a href='#about' className='pure-menu-link'>{'About'}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
