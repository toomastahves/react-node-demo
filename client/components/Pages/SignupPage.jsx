import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../Layouts/Content';
import { signup } from '../../actions/signup';
import { checkUsernameAvailability } from '../../actions/checkUsername';
import '../styles/auth.css';
import HandleAuthForm from '../Parts/HandleAuthForm';

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    username: '',
    usernameErrorMessage: '',
    usernameDebounce: null
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.querySelector('[name="username"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    this.props.dispatch(signup({ username, password }));
  };
  handleUsernameChange = (e) => {
    e.preventDefault();
    const username = e.target.value;
    clearTimeout(this.state.usernameDebounce);
    this.setState({
      usernameDebounce: setTimeout(() => {
        this.props.dispatch(checkUsernameAvailability(username));
      }, 1000)
    });
  };
  render() {
    return (
      <div>
        <HandleAuthForm
          available={this.props.available}
          onChange={this.handleUsernameChange}
          onSubmit={this.handleSubmit}
          error={this.props.error}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  error: PropTypes.string,
  available: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error,
    available: state.userReducer.available
  };
};

export default connect(mapStateToProps)(ContentLayout(SignupPage));
