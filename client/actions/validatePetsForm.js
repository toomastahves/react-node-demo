import * as action from '../constants/validate';

export const validateName = (name) => {
  if(name.length < 1) {
    return {
      type: action.VALIDATE_PET_NAME_ERROR,
      error: 'Pet name too short'
    };
  }
  return {
    type: action.VALIDATE_PET_NAME_SUCCESS
  };
};

export const validateSpecies = (species) => {
  if(species === 0) {
    return {
      type: action.VALIDATE_PET_SPECIES_ERROR,
      error: 'Select pet species'
    };
  }
  return {
    type: action.VALIDATE_PET_SPECIES_SUCCESS
  };
};

export const validateLat = (lat) => {
  if(lat && !isNaN(lat)) {
    return {
      type: action.VALIDATE_PET_LAT_ERROR,
      error: 'lat has to be a number'
    };
  }
  return {
    type: action.VALIDATE_PET_LAT_SUCCESS
  };
};

export const validateLng = (lng) => {
  if(lng && !isNaN(lng)) {
    return {
      type: action.VALIDATE_PET_LNG_ERROR,
      error: 'lng has to be a number'
    };
  }
  return {
    type: action.VALIDATE_PET_LNG_SUCCESS
  };
};
