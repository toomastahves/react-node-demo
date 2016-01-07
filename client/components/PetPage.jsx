import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/pets';
import PetList from './PetList';

class PetPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPets());
  }
  render() {
    const pets = this.props.pets;
    const isFetching = this.props.isFetching;
    const isError = this.props.isError;
    return(
      <div>
        <button onClick={e => this.handleClick(e)}>Get data</button>
        {!isFetching && <PetList pets={pets} />}
        {isError && <div>Error</div>}
      </div>
    );
  }
  handleClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchPets());
  }
}

PetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pets: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    pets: state.petReducer.pets,
    isFetching: state.petReducer.isFetching,
    isError: state.petReducer.isError,
    errorMessage: state.petReducer.errorMessage
  }
};

export default connect(mapStateToProps)(PetPage);
