import * as action from '../constants/validate';
import { createPet } from './createPet';

export const toggleDatepickerVisibility = () => {
  return {
    type: action.TOGGLE_DATEPICKER_VISIBILITY
  };
};

export const petFormChange = (petForm) => {
  console.log(petForm);
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
