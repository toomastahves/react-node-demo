import React, { PropTypes } from 'react';
import DatePickerWrapper from './DatepickerWrapper';
import fecha from 'fecha';
import '../styles/petform.css';

export const UpdatePetForm = ({ pet, handleDelete, handleUpdate, handleDatepickerVisiblity, datepickerVisibility,
  handleNameChange, handleSpeciesChange, handleHomestatusChange, handleLatChange, handleLngChange }) => {
  const birthday = fecha.format(new Date(pet.birthday), 'DD MMM YYYY');
  return (
    <div className='content'>
      <form onSubmit={handleUpdate} className='pure-form'>
        <fieldset>
          <div className='create-pet-input-wrap'>
            <div>
              <div className='form-error'>{pet.errors ? pet.errors.name : ''}</div>
              <input onChange={handleNameChange} value={pet.name} className='selectbox-aligned' name='petname' id='petname' type='text' placeholder={'Name'} />
            </div>
            <div>
              <input
                value={birthday}
                onClick={handleDatepickerVisiblity}
                className='selectbox-aligned disabled' type='text' placeholder={'Birthday'} name='birthday' id='birthday' disabled autoComplete='off'
              />
              {datepickerVisibility && <DatePickerWrapper resultLocationId='birthday' />}
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{pet.errors ? pet.errors.species : ''}</div>
              <select onChange={handleSpeciesChange} value={pet.species} className='selectbox-aligned' name='species' id='species'>
                <option value=''>{'Select species'}</option>
                <option value='cat'>{'Cat'}</option>
                <option value='dog'>{'Dog'}</option>
                <option value='pony'>{'Pony'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <select onChange={handleHomestatusChange} value={pet.homestatus} className='selectbox-aligned' name='homestatus' id='homestatus'>
                <option value='0'>{'Homeless'}</option>
                <option value='1'>{'Has home'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <div className='form-error'>{pet.errors ? pet.errors.latlng : ''}</div>
              <input onChange={handleLatChange} value={pet.lat} className='coordinate-input' type='number' name='lat' id='lat' placeholder='lat' />
              <input onChange={handleLngChange} value={pet.lng} className='coordinate-input' type='number' name='lng' id='lng' placeholder='lng' />
            </div>
            <div className='pure-control-group'>
              <button className='pure-input-1 pure-button button-secondary' type='submit'>{'Update'}</button>
              <button onClick={handleDelete} className='pure-input-1 pure-button button-error' type='submit'>{'Delete'}</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

UpdatePetForm.propTypes = {
  pet: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  datepickerVisibility: PropTypes.bool.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
  handleHomestatusChange: PropTypes.func.isRequired,
  handleLatChange: PropTypes.func.isRequired,
  handleLngChange: PropTypes.func.isRequired
};

export default UpdatePetForm;
