import React, { PropTypes } from 'react';
import '../styles/tabs.css';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

export const Tabs = ({ signup, signin }) => {
  return (
    <div className='tabs'>
      <input type='radio' name='tabs' id='signup' defaultChecked />
      <label htmlFor='signup'>{'Sign up'}</label>
      <input type='radio' name='tabs' id='signin' />
      <label htmlFor='signin'>{'Sign in'}</label>
      <div id='tab-signup-form' className='tab-content'>
        <SignupForm model={signup} />
      </div>
      <div id='tab-signin-form' className='tab-content'>
        <SigninForm model={signin} />
      </div>
    </div>
  );
};

Tabs.propTypes = {
  signup: PropTypes.object.isRequired,
  signin: PropTypes.object.isRequired
};

export default Tabs;
