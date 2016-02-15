import React, { PropTypes } from 'react';
import '../styles/pages.css';
import '../styles/chartpage.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import ShowCharts from '../Parts/ShowCharts';
import { connect } from 'react-redux';
import { getPets } from '../../actions/getpets';
import Spinner from '../Parts/Spinner';

export const ChartPage = ({ pets, fetching }) => {
  return (
    <div>
      <SubHeader header={'Chart demo'} description={'Created using react-chartjs library'} />
      <div className='content'>
        {fetching ? <Spinner /> : <ShowCharts pets={pets} />}
      </div>
    </div>
  );
};

ChartPage.propTypes = {
  pets: PropTypes.array,
  fetching: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    pets: state.petReducer.pets,
    fetching: state.petReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPets());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ChartPage));
