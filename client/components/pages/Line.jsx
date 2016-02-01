import React from 'react';
import { Line } from 'react-chartjs';
import { connect } from 'react-redux';
import { getData } from '../../actions/dataActions';

export const LinePage = (props) => {
  let line = <div></div>;
  if(props.data.datasets) {
    line = <Line data={props.data} options={{ responsive: true }} />;
  }
  return (
    <div>
      <div>{'Line Chart'}</div>
      {line}
    </div>
  );
};

LinePage.propTypes = {
  data: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    fetching: state.dataReducers.fetching,
    data: state.dataReducers.data
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getData());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LinePage);
