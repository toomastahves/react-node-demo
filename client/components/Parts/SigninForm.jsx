import React, { PropTypes } from 'react';
import Spinner from './Spinner';

export const SigninForm = ({ model }) => {
  const errorClass = model.errorMessage ? 'auth-message-error' : '';

  const usernameErrorMessage = model.usernameError;
  const usernameClassname = model.usernameError ? 'auth-message-error' : 'auth-message-success';
  const passwordErrorMesage = model.passwordError;
  const passwordClassname = model.passwordError ? 'auth-message-error' : 'auth-message-success';

  return (
    <div>
      <form onSubmit={model.handleSubmit} className='flex-form-container pure-form'>
        <div className='flex-form-item'>
          <div className={errorClass}>
            {model.errorMessage}
          </div>
          <div className={usernameClassname}>
            {usernameErrorMessage}
          </div>
          <input name='username' type='text' placeholder='Username' />
        </div>
        <div className='flex-form-item'>
          <div className={passwordClassname}>
            {passwordErrorMesage}
          </div>
          <input name='password' type='text' placeholder='Password' />
        </div>
        <div className='flex-form-item'>
          <button className='pure-button' type='submit'>{'Sign in'}</button>
        </div>
        {model.fetchingAuth && <Spinner />}
      </form>
    </div>
  );
};

SigninForm.propTypes = {
  model: PropTypes.object.isRequired,
  serversideMessage: PropTypes.string
};

export default SigninForm;
