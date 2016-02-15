import * as actions from '../constants/validate';

const initialState = {
  fetching: false,
  available: {},
  usernameError: '',
  passwordError: '',
  serverError: '',
  datepickerVisibility: false,
  petForm: {}
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

    case actions.VALIDATE_PET_FORM_ERROR:
      return Object.assign({}, state, { petForm: action.form });
    case actions.VALIDATE_PET_FORM_SUCCESS:
      return Object.assign({}, state, { petForm: action.form });

    case actions.RESET_PET_FORM:
      return Object.assign({}, initialState);

    case actions.TOGGLE_DATEPICKER_VISIBILITY:
      return Object.assign({}, state, { datepickerVisibility: !state.datepickerVisibility });

    case actions.PET_NAME_CHANGE:
      return Object.assign({}, state, { petForm: action.petForm });

    case actions.PET_FORM_CHANGE:
      return Object.assign({}, state, { petForm: action.petForm });

    case actions.INIT_PET_FORM:
      return Object.assign({}, state, { petForm: action.petForm });

    default:
      return state;
  }
};
