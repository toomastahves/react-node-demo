import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import SubHeader from '../Parts/SubHeader';
import { getPet } from '../../actions/getPet';
import { deletePet } from '../../actions/deletePet';
import { updatePet } from '../../actions/updatePet';
import UpdatePetForm from '../Parts/UpdatePetForm';
import { toggleDatepickerVisibility, petFormChange } from '../../actions/validatePetForm';

export const ManagePetPage = ({ datepickerVisibility, dispatch, petForm, username }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const newForm = Object.assign({}, petForm, { updated_by: username });
    dispatch(updatePet(newForm));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePet(petForm._id));
  };
  const handleDatepickerVisiblity = () => {
    const newForm = Object.assign({}, petForm, { birthday: document.getElementById('birthday').value });
    dispatch(toggleDatepickerVisibility());
    dispatch(petFormChange(newForm));
  };
  const handleNameChange = (e) => {
    const newForm = Object.assign({}, petForm, { name: e.target.value });
    dispatch(petFormChange(newForm));
  };
  const handleSpeciesChange = (e) => {
    const newForm = Object.assign({}, petForm, { species: e.target.value });
    dispatch(petFormChange(newForm));
  };
  const handleHomestatusChange = (e) => {
    const newForm = Object.assign({}, petForm, { homestatus: e.target.value });
    dispatch(petFormChange(newForm));
  };
  const handleLatChange = (e) => {
    const newForm = Object.assign({}, petForm, { lat: Number(e.target.value) });
    dispatch(petFormChange(newForm));
  };
  const handleLngChange = (e) => {
    const newForm = Object.assign({}, petForm, { lng: Number(e.target.value) });
    dispatch(petFormChange(newForm));
  };
  return (
    <div>
      <SubHeader header={'Pet details page'} description={'Updated or delete pet here'} />
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
    </div>
  );
};

ManagePetPage.propTypes = {
  pet: PropTypes.object
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
