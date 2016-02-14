import * as actions from '../constants/validate';

const initialState = {
  fetching: false,
  available: {},
  usernameError: '',
  passwordError: '',
  serverError: '',
  petNameError: '',
  petBirthdayError: '',
  petSpeciesError: ''
};

export const validateReducer = (state = initialState, action) => {
  switch(action.type) {

    case actions.CHECK_USERNAME_AVAILABILITY_REQUEST:
      return Object.assign({}, state, { fetching: true, serverError: '' });
    case actions.CHECK_USERNAME_AVAILABILITY_SUCCESS:
      return Object.assign({}, state, { fetching: false, serverError: '', available: action.available });
    case actions.CHECK_USERNAME_AVAILABILITY_ERROR:
      return Object.assign({}, state, { fetching: false, serverError: action.error });

    case actions.VALIDATE_USERNAME_SUCCESS:
      return Object.assign({}, state, { usernameError: '' });
    case actions.VALIDATE_USERNAME_ERROR:
      return Object.assign({}, state, { usernameError: action.error, available: {} });

    case actions.VALIDATE_PASSWORD_SUCCESS:
      return Object.assign({}, state, { passwordError: '' });
    case actions.VALIDATE_PASSWORD_ERROR:
      return Object.assign({}, state, { passwordError: action.error });

    case actions.VALIDATE_PET_NAME_SUCCESS:
      return Object.assign({}, state, { petNameError: '' });
    case actions.VALIDATE_PET_NAME_ERROR:
      return Object.assign({}, state, { petNameError: action.error });

    case actions.VALIDATE_PET_BIRTHDAY_SUCCESS:
      return Object.assign({}, state, { petBirthdayError: '' });
    case actions.VALIDATE_PET_BIRTHDAY_ERROR:
      return Object.assign({}, state, { petBirthdayError: action.error });

    case actions.VALIDATE_PET_SPECIES_SUCCESS:
      return Object.assign({}, state, { petSpeciesError: '' });
    case actions.VALIDATE_PET_SPECIES_ERROR:
      return Object.assign({}, state, { petSpeciesError: action.error });

    case actions.VALIDATE_PET_LAT_SUCCESS:
      return Object.assign({}, state, { petLatError: '' });
    case actions.VALIDATE_PET_LAT_ERROR:
      return Object.assign({}, state, { petLatError: action.error });

    case actions.VALIDATE_PET_LNG_SUCCESS:
      return Object.assign({}, state, { petLngError: '' });
    case actions.VALIDATE_PET_LNG_ERROR:
      return Object.assign({}, state, { petLngError: action.error });

    default:
      return state;
  }
};
