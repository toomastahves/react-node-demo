import React, { Component } from 'react';
import PetPage from './PetPage';
import { Provider } from 'react-redux';
import config from '../store/config';

class App extends Component {
  render() {
    return(
      <Provider store={config}>
        <PetPage />
      </Provider>
    );
  }
}

export default App;
