import React, { PropTypes } from 'react';
import '../styles/pages.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import ShowMap from '../Parts/ShowMap';
import { getPets } from '../../actions/getpets';
import { connect } from 'react-redux';
import Spinner from '../Parts/Spinner';

export const MapPage = ({ pets, fetching }) => {
  return (
    <div>
      <SubHeader header={'Map demo'} description={'Created using react-gmaps library'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Pets locations on Google maps'}
        </div>
        {fetching ? <Spinner /> : <ShowMap pets={pets} />}
      </div>
    </div>
  );
};

MapPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(MapPage));
