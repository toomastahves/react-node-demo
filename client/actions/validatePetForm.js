import * as action from '../constants/validate';
import { createPet } from './createPet';

export const toggleDatepickerVisibility = () => {
  return {
    type: action.TOGGLE_DATEPICKER_VISIBILITY
  };
};

export const petFormChange = (petForm) => {
  petForm.errors = {};
  if(petForm.name.length < 3) {
    petForm.errors.name = 'Name too short';
  }
  if(petForm.species.length === 0) {
    petForm.errors.species = 'Select species';
  }
  if((petForm.lat < -90 || petForm.lat > 90) || (petForm.lng < -180 || petForm.lng > 180)) {
    petForm.errors.latlng = 'Insert valid LAT and LNG';
  }
  return {
    type: action.PET_FORM_CHANGE,
    petForm
  };
};

export const validatePetForm = (form, submit = false) => {

  if(form.name.value.length < 3) {
    form.name.error = 'Name too short';
  }
  if(!form.birthday.value) {
    form.birthday.error = 'Select birthday';
  }
  if(form.species.value.length === 0) {
    form.species.error = 'Select species';
  }

  if((form.lat.value && !form.lng.value) ||
      (!form.lat.value && form.lng.value) ||
      isNaN(form.lng.value) ||
      isNaN(form.lat.value)) {
    form.latlng.error = 'LAT and LNG need to be numbers';
  }

  if(form.name.error || form.birthday.error || form.species.error || form.latlng.error) {
    return {
      type: action.VALIDATE_PET_FORM_ERROR,
      form
    };
  }

  if(submit) {
    const newPet = {
      name: form.name.value,
      birthday: form.birthday.value._d,
      species: form.species.value,
      homestatus: form.homestatus.value,
      lat: form.lat.value,
      lng: form.lng.value,
      created_by: form.created_by.value,
      updated_by: form.updated_by.value
    };
    return dispatch => {
      dispatch(createPet(newPet));
    };
  }

  return {
    type: action.VALIDATE_PET_FORM_SUCCESS,
    form
  };

};
