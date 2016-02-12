import React, { PropTypes } from 'react';

export const HandleAuthForm = ({ error, onSubmit, onChange, available }) => {
  console.log(available);
  let availabilityMessage = available.available ? <div>{'Username available'}</div> : <div>{'Username not available'}</div>;
  const usernameMessageClassname = available.available ? 'username-success' : 'username-error';
  if(Object.keys(available).length === 0) {
    availabilityMessage = '';
  }
  return (
    <div>
      <form onSubmit={onSubmit} className='flex-form-container pure-form'>
        <div className='flex-form-item'>
          {error}
        </div>
        <div className='flex-form-item'>
          <div className={usernameMessageClassname}>{availabilityMessage}</div>
          <input onChange={onChange} name='username' type='text' placeholder='Username' />
        </div>
        <div className='flex-form-item'>
          <input onChange={onChange} name='password' type='text' placeholder='Password' /></div>
        <div className='flex-form-item'>
          <button className='pure-button' type='submit'>{'Sign in'}</button>
        </div>
      </form>
    </div>
  );
};

HandleAuthForm.propTypes = {
  available: PropTypes.object.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default HandleAuthForm;
