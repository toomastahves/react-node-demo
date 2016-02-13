import React, { PropTypes } from 'react';
import Spinner from './Spinner';

export const SignupForm = ({ model }) => {
  const usernameErrorMessage = model.usernameError;
  let usernameAvailabilityMessage = '';
  if(Object.keys(model.available).length !== 0)
    usernameAvailabilityMessage = model.available.taken ? 'Username not available' : 'Username available';

  const usernameClassname = (model.usernameError || model.available.taken) ? 'auth-message-error' : 'auth-message-success';
  const passwordErrorMesage = model.passwordError;
  const passwordClassname = model.passwordError ? 'auth-message-error' : 'auth-message-success';

  return (
    <div>
      <form onSubmit={model.handleSubmit} className='flex-form-container pure-form'>
        <div className='flex-form-item'>
          <div className={usernameClassname}>
            {usernameErrorMessage}{usernameAvailabilityMessage}
          </div>
          <input onChange={model.handleUsernameChange} name='username' type='text' placeholder='Username' />
        </div>
        <div className='flex-form-item'>
          <div className={passwordClassname}>
            {passwordErrorMesage}
          </div>
          <input onChange={model.handlePasswordChange} name='password' type='text' placeholder='Password' />
        </div>
        <div className='flex-form-item'>
          <button className='pure-button' type='submit'>{'Sign up'}</button>
        </div>
        {(model.fetchingAuth || model.fetchingUsernameAvailability) && <Spinner />}
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  model: PropTypes.object.isRequired,
  serversideMessage: PropTypes.string
};

export default SignupForm;
