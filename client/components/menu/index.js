import React from 'react';
import style from '../../style.css';

export const Menu = () => {
  return (
    <div className={style.menu}>
      <a className={style.menuItem} href='#home'>{'Home'}</a>
      <a className={style.menuItem} href='#table'>{'Table'}</a>
      <a className={style.menuItem} href='#line'>{'Line'}</a>
      <a className={style.menuItem} href='#map'>{'Map'}</a>
    </div>
  );
};

export default Menu;
