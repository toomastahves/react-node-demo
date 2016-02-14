import * as actions from '../constants/pets';

const initialState = {
  fetching: false,
  error: '',
  pets: [],
  pet: {}
};

export const petReducer = (state = initialState, action) => {
  switch(action.type) {

    case actions.GET_PETS_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.GET_PETS_SUCCESS:
      return Object.assign({}, state, { fetching: false, pets: action.pets });
    case actions.GET_PETS_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.GET_PET_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.GET_PET_SUCCESS:
      return Object.assign({}, state, { fetching: false, pet: action.pet });
    case actions.GET_PET_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.CREATE_PET_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.CREATE_PET_SUCCESS:
      return Object.assign({}, state, { fetching: false, pets: [...state.pets, action.pet] });
    case actions.CREATE_PET_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.DELETE_PET_SUCCESS:
      return Object.assign({}, state, { pets: state.pets.filter(pet => pet._id !== action._id) });

    default:
      return state;
  }
};
