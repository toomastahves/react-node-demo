import * as action from '../constants/validate';
import { createPet } from './createPet';

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
