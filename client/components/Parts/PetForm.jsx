import React, { PropTypes } from 'react';
import '../styles/petform.css';
import { connect } from 'react-redux';
import { validatePetForm } from '../../actions/validatePetForm';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const PetForm = ({ dispatch, petForm, username }) => {
  const handleNameChange = (e) => {
    const newForm = Object.assign({}, petForm, { name: { value: e.target.value } });
    dispatch(validatePetForm(newForm));
  };

  const handleDatepickerChange = (date) => {
    const newForm = Object.assign({}, petForm, { birthday: { value: date } });
    dispatch(validatePetForm(newForm));
  };

  const handleSpeciesChange = (e) => {
    const newForm = Object.assign({}, petForm, { species: { value: e.target.value } });
    dispatch(validatePetForm(newForm));
  };

  const handleLatChange = (e) => {
    const newForm = Object.assign({}, petForm, { lat: { value: e.target.value }, latlng: {} });
    dispatch(validatePetForm(newForm));
  };

  const handleLngChange = (e) => {
    const newForm = Object.assign({}, petForm, { lng: { value: e.target.value }, latlng: {} });
    dispatch(validatePetForm(newForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameNode = e.target.querySelector('[name="petname"]');
    const birthday = petForm.birthday.value ? petForm.birthday.value : null;
    const speciesNode = e.target.querySelector('[name="species"]');
    const homestatusNode = e.target.querySelector('[name="homestatus"]');
    const latNode = e.target.querySelector('[name="lat"]');
    const lngNode = e.target.querySelector('[name="lng"]');
    const newPet = {
      name: { value: nameNode.value },
      birthday: { value: birthday },
      species: { value: speciesNode.value },
      homestatus: { value: homestatusNode.value },
      lat: { value: latNode.value },
      lng: { value: lngNode.value },
      created_by: { value: username },
      updated_by: { value: username }
    };
    const newForm = Object.assign({}, petForm, newPet );
    dispatch(validatePetForm(newForm, true));
    nameNode.value = '';
    speciesNode.value = '';
    homestatusNode.value = '0';
    latNode.value = '';
    lngNode.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='pure-form'>
        <fieldset>
          <div className='create-pet-input-wrap'>
            <div className='pure-control-group'>
              <div className='form-error'>{petForm.name.error}</div>
              <input onChange={handleNameChange} className='selectbox-aligned' name='petname' id='petname' type='text' placeholder={'Name'} />
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{petForm.birthday.error}</div>
              <DatePicker
                onChange={handleDatepickerChange}
                selected={petForm.birthday.value}
                placeholderText='Birthday'
                className='selectbox-aligned datepicker-custom'
              />
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{petForm.species.error}</div>
              <select onChange={handleSpeciesChange} className='selectbox-aligned' name='species' id='species'>
                <option value=''>{'Select species'}</option>
                <option value='cat'>{'Cat'}</option>
                <option value='dog'>{'Dog'}</option>
                <option value='pony'>{'Pony'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <select className='selectbox-aligned' name='homestatus' id='homestatus'>
                <option value='0'>{'Homeless'}</option>
                <option value='1'>{'Has home'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{petForm.latlng.error}</div>
              <input onChange={handleLatChange} className='coordinate-input' type='text' name='lat' id='lat' placeholder='lat' />
              <input onChange={handleLngChange} className='coordinate-input' type='text' name='lng' id='lng' placeholder='lng' />
            </div>
            <div className='pure-control-group'>
              <button className='pure-input-1 pure-button button-secondary' type='submit'>{'Add'}</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

PetForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  petForm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    petForm: state.validateReducer.petForm,
    username: state.authReducer.username
  };
};

export default connect(mapStateToProps)(PetForm);
