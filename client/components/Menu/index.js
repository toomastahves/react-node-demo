import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/signout';
import './menu.css';

const handleSignout = (props, e) => {
  e.preventDefault();
  props.dispatch(signout(props));
};

export const Menu = (props) => {
  let userinfo = (
    <ul className='pure-menu-list'>
      <li className='pure-menu-item'><a href='#signin' className='pure-menu-link'>{'Signin'}</a></li>
      <li className='pure-menu-item'><a href='#signup' className='pure-menu-link'>{'Signup'}</a></li>
    </ul>
  );

  if(props.username) {
    userinfo = (
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>{props.username}</li>
        <li className='pure-menu-item'><a onClick={handleSignout.bind(this, props)} href='#' className='pure-menu-link'>{'Signout'}</a></li>
      </ul>
    );
  }

  return (
    <div classNameName='custom-wrapper pure-g' id='menu'>
      <div className='pure-u-1 pure-u-md-1-3'>
        <div className='pure-menu'>
          <a href='#' className='pure-menu-heading custom-brand'>{'LOGO'}</a>
          <a href='#' className='custom-toggle' id='toggle'><s className='bar'></s><s className='bar'></s></a>
        </div>
      </div>
      <div className='pure-u-1 pure-u-md-1-3 align-menuitems-center'>
        <div className='pure-menu pure-menu-horizontal custom-can-transform'>
          <ul className='pure-menu-list'>
            <li className='pure-menu-item'><a href='#home' className='pure-menu-link'>{'Home'}</a></li>
            <li className='pure-menu-item'><a href='#table' className='pure-menu-link'>{'Table'}</a></li>
            <li className='pure-menu-item'><a href='#chart' className='pure-menu-link'>{'Chart'}</a></li>
            <li className='pure-menu-item'><a href='#map' className='pure-menu-link'>{'Map'}</a></li>
            <li className='pure-menu-item'><a href='#about' className='pure-menu-link'>{'About'}</a></li>
          </ul>
        </div>
      </div>
      <div className='pure-u-1 pure-u-md-1-3'>
        <div className='pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform'>
          {userinfo}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username
  };
};

export default connect(mapStateToProps)(Menu);
