import React, { PropTypes } from 'react';

export const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
