import * as action from '../constants/validate';

import { createPet } from './createPet';
import { updatePet } from './updatePet';

export const toggleDatepickerVisibility = () => {
  return {
    type: action.TOGGLE_DATEPICKER_VISIBILITY
  };
};

export const validatePetForm = (petForm, submit) => {
  petForm.errors = {};
  if(petForm.name.length < 3) {
    petForm.errors.name = 'Name too short';
  }
  if(petForm.species.length === 0) {
    petForm.errors.species = 'Select species';
  }
  if(petForm.birthday.length === 0) {
    petForm.errors.birthday = 'Select birthday';
  }
  if((petForm.lat < -90 || petForm.lat > 90) || (petForm.lng < -180 || petForm.lng > 180)) {
    petForm.errors.latlng = 'Insert valid LAT and LNG';
  }
  if(Object.keys(petForm.errors).length === 0 && submit === 'create') {
    console.log(petForm, submit);
    return dispatch => {
      dispatch(createPet(petForm));
    };
  }
  if(Object.keys(petForm.errors).length === 0 && submit === 'update') {
    console.log(petForm, submit);
    return dispatch => {
      dispatch(updatePet(petForm));
    };
  }
  return {
    type: action.PET_FORM_CHANGE,
    petForm
  };
};
