import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import CreatePetForm from '../Parts/CreatePetForm';
import { connect } from 'react-redux';
import { toggleDatepickerVisibility, petFormChange, validateAndSubmit } from '../../actions/validatePetForm';
import { resetPetForm } from '../../actions/createPet';

export const CreatePetPage = ({ datepickerVisibility, dispatch, petForm, username }) => {
  const handleCreate = (e) => {
    e.preventDefault();
    const newForm = Object.assign({}, petForm, { created_by: username, updated_by: username });
    dispatch(validateAndSubmit(newForm, 'create'));
  };
  const handleNameChange = (e) => {
    const newForm = Object.assign({}, petForm, { name: e.target.value });
    dispatch(petFormChange(newForm));
  };
  const handleSpeciesChange = (e) => {
    const newForm = Object.assign({}, petForm, { species: e.target.value });
    dispatch(petFormChange(newForm));
  };
  const handleDatepickerVisiblity = () => {
    const newForm = Object.assign({}, petForm, { birthday: document.getElementById('birthday').value });
    dispatch(toggleDatepickerVisibility());
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
      <SubHeader header={'Create page'} description={'New pet'} />
      <CreatePetForm
        handleDatepickerVisiblity={handleDatepickerVisiblity}
        datepickerVisibility={datepickerVisibility}
        pet={petForm}
        handleNameChange={handleNameChange}
        handleSpeciesChange={handleSpeciesChange}
        handleHomestatusChange={handleHomestatusChange}
        handleLatChange={handleLatChange}
        handleLngChange={handleLngChange}
        handleCreate={handleCreate}
      />
    </div>
  );
};

CreatePetPage.propTypes = {
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

const mapDispatchToProps = (dispatch) => {
  dispatch(resetPetForm());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(CreatePetPage));
