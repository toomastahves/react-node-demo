import React, { PropTypes } from 'react';
import '../styles/petform.css';
import DatePickerWrapper from './DatepickerWrapper';

export const CreatePetForm = ({ pet, handleNameChange, handleSpeciesChange, handleDatepickerVisiblity, datepickerVisibility,
  handleHomestatusChange, handleLatChange, handleLngChange, handleCreate }) => {

  return (
    <div className='content'>
      <form onSubmit={handleCreate} className='pure-form'>
        <fieldset>
          <div className='create-pet-input-wrap'>
            <div>
              <div className='form-error'>{pet.errors ? pet.errors.name : ''}</div>
              <input onChange={handleNameChange} className='selectbox-aligned' id='petname' type='text' placeholder={'Name'} />
            </div>
            <div>
              <div className='form-error'>{pet.errors ? pet.errors.birthday : ''}</div>
              <input
                value={pet.birthday}
                onClick={handleDatepickerVisiblity}
                className='selectbox-aligned disabled' type='text' placeholder={'Birthday'} id='birthday' disabled autoComplete='off'
              />
              {datepickerVisibility && <DatePickerWrapper resultLocationId='birthday' />}
            </div>
            <div>
              <div className='form-error'>{pet.errors ? pet.errors.species : ''}</div>
              <select onChange={handleSpeciesChange} value={pet.species} className='selectbox-aligned' id='species'>
                <option value=''>{'Select species'}</option>
                <option value='cat'>{'Cat'}</option>
                <option value='dog'>{'Dog'}</option>
                <option value='pony'>{'Pony'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <select onChange={handleHomestatusChange} value={pet.homestatus} className='selectbox-aligned' id='homestatus'>
                <option value={false}>{'Homeless'}</option>
                <option value={true}>{'Has home'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{pet.errors ? pet.errors.latlng : ''}</div>
              <input onChange={handleLatChange} value={pet.lat} className='coordinate-input' type='number' id='lat' placeholder='lat' />
              <input onChange={handleLngChange} value={pet.lng} className='coordinate-input' type='number' id='lng' placeholder='lng' />
            </div>
            <div className='pure-control-group'>
              <button className='pure-input-1 pure-button button-secondary' type='submit'>{'Create'}</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

CreatePetForm.propTypes = {
  pet: PropTypes.object.isRequired,
  handleCreate: PropTypes.func.isRequired,
  datepickerVisibility: PropTypes.bool.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
  handleHomestatusChange: PropTypes.func.isRequired,
  handleLatChange: PropTypes.func.isRequired,
  handleLngChange: PropTypes.func.isRequired
};

export default CreatePetForm;
