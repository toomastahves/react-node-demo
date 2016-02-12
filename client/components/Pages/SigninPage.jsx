import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../Layouts/Content';
import { signin } from '../../actions/signin';
import { checkUsernameAvailability } from '../../actions/checkUsername';
import '../styles/auth.css';
import HandleAuthForm from '../Parts/HandleAuthForm';

export class SigninPage extends Component {
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
    this.props.dispatch(signin({ username, password }));
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
    console.log(this.props);
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

SigninPage.propTypes = {
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

export default connect(mapStateToProps)(ContentLayout(SigninPage));
