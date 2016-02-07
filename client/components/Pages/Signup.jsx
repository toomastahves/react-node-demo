import React from 'react';
import { connect } from 'react-redux';
import { AuthLayout } from '../Layouts/Auth';
import { signup } from '../../actions/signup';
import './auth.css';

const handleSubmit = (props, e) => {
  e.preventDefault();
  const username = e.target.querySelector('[name="username"]').value;
  const password = e.target.querySelector('[name="password"]').value;
  props.dispatch(signup({ username, password }));
};

export const Signup = (props) => {
  return (
    <div>
      <form onSubmit={handleSubmit.bind(this, props)} className='flex-form-container pure-form'>
        <div className='flex-form-item'>
          {props.error}
        </div>
        <div className='flex-form-item'>
          <input name='username' type='text' placeholder='Username' />
        </div>
        <div className='flex-form-item'>
          <input name='password' type='text' placeholder='Password' /></div>
        <div className='flex-form-item'>
          <button className='pure-button' type='submit'>{'Sign up'}</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps)(AuthLayout(Signup));
