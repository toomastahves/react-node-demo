import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import SubHeader from '../Parts/SubHeader';
import { getPet } from '../../actions/getPet';
import { deletePet } from '../../actions/deletePet';
import UpdatePetForm from '../Parts/UpdatePetForm';
import PetInfo from '../Parts/PetInfo';
import { toggleDatepickerVisibility, validatePetForm } from '../../actions/validatePetForm';

export const ManagePetPage = ({ datepickerVisibility, dispatch, petForm, username }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const newForm = Object.assign({}, petForm, { updated_by: username });
    dispatch(validatePetForm(newForm, 'update'));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePet(petForm._id));
  };
  const handleDatepickerVisiblity = () => {
    const newForm = Object.assign({}, petForm, { birthday: document.getElementById('birthday').value });
    dispatch(toggleDatepickerVisibility());
    dispatch(validatePetForm(newForm));
  };
  const handleNameChange = (e) => {
    const newForm = Object.assign({}, petForm, { name: e.target.value });
    dispatch(validatePetForm(newForm));
  };
  const handleSpeciesChange = (e) => {
    const newForm = Object.assign({}, petForm, { species: e.target.value });
    dispatch(validatePetForm(newForm));
  };
  const handleHomestatusChange = (e) => {
    const newForm = Object.assign({}, petForm, { homestatus: e.target.value });
    dispatch(validatePetForm(newForm));
  };
  const handleLatChange = (e) => {
    const newForm = Object.assign({}, petForm, { lat: Number(e.target.value) });
    dispatch(validatePetForm(newForm));
  };
  const handleLngChange = (e) => {
    const newForm = Object.assign({}, petForm, { lng: Number(e.target.value) });
    dispatch(validatePetForm(newForm));
  };

  const updatePetForm = (
    <UpdatePetForm
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleDatepickerVisiblity={handleDatepickerVisiblity}
      datepickerVisibility={datepickerVisibility}
      pet={petForm}
      handleNameChange={handleNameChange}
      handleSpeciesChange={handleSpeciesChange}
      handleHomestatusChange={handleHomestatusChange}
      handleLatChange={handleLatChange}
      handleLngChange={handleLngChange}
    />
  );

  const petInfo = <PetInfo pet={petForm} />;

  return (
    <div>
      <SubHeader header={'Pet details page'} description={'Updated or delete pet here'} />
      {username ? updatePetForm : petInfo}
    </div>
  );
};

ManagePetPage.propTypes = {
  datepickerVisibility: PropTypes.bool,
  dispatch: PropTypes.func,
  petForm: PropTypes.object,
  username: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    datepickerVisibility: state.validateReducer.datepickerVisibility,
    petForm: state.validateReducer.petForm,
    username: state.authReducer.username
  };
};

const mapDispatchToProps = (dispatchOnLoad, ownProps) => {
  dispatchOnLoad(getPet(ownProps.params._id));
  return dispatch => ({ dispatch });
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ManagePetPage));
