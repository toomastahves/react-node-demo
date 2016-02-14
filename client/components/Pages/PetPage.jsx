import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import SubHeader from '../Parts/SubHeader';
import { getPet } from '../../actions/getPet';
import PetInfo from '../Parts/PetInfo';

export const PetPage = (props) => {
  return (
    <div>
      <SubHeader header={'Pet details page'} description={'Updated or delete pet here'} />
      <PetInfo pet={props.pet} />
    </div>
  );
};

PetPage.propTypes = {
  pet: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    pet: state.petReducer.pet
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getPet(ownProps.params._id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(PetPage));
