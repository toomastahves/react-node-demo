import React, { PropTypes } from 'react';
import Tabs from '../Parts/Tabs';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';

import { validateUsername, validatePassword, validateAndSubmit } from '../../actions/validateAuthForm';
import '../styles/auth.css';

export const AuthPage = (props) => {
  const handleSigninSubmit = (e) => {
    e.preventDefault();
    const username = e.target.querySelector('[name="username"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    props.dispatch(validateAndSubmit(username, password, 'signin'));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const username = e.target.querySelector('[name="username"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    props.dispatch(validateAndSubmit(username, password, 'signup'));
  };

  const handleUsernameChange = (e) => {
    props.dispatch(validateUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    props.dispatch(validatePassword(e.target.value));
  };

  const signinModel = {
    handleSubmit: handleSigninSubmit,
    fetchingAuth: props.authReducer.fetching,
    errorMessage: props.authReducer.error,
    usernameError: props.validateReducer.usernameError,
    passwordError: props.validateReducer.passwordError
  };

  const signupModel = {
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit: handleSignupSubmit,
    fetchingAuth: props.authReducer.fetching,
    usernameError: props.validateReducer.usernameError,
    passwordError: props.validateReducer.passwordError,
    fetchingUsernameAvailability: props.validateReducer.fetching,
    available: props.validateReducer.available
  };

  return (
    <div>
      <Tabs signup={signupModel} signin={signinModel} />
    </div>
  );
};

AuthPage.propTypes = {
  authReducer: PropTypes.object.isRequired,
  validateReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
    validateReducer: state.validateReducer
  };
};

export default connect(mapStateToProps)(ContentLayout(AuthPage));
