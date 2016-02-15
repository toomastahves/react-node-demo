import React, { PropTypes } from 'react';
import { signout } from '../../actions/signout';
import { connect } from 'react-redux';
import Menu from '../Parts/Menu';
import GithubRibbon from '../Parts/GithubRibbon';
import '../styles/github.css';

export const MenuContainer = ({ dispatch, username }) => {
  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  return (
    <div>
      <Menu handleSignout={handleSignout} username={username} />
      <GithubRibbon />
    </div>
  );
};

MenuContainer.propTypes = {
  username: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username
  };
};

export default connect(mapStateToProps)(MenuContainer);
