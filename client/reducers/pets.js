import * as actions from '../constants/pets';

const initialState = {
  fetching: false,
  pets: []
};

export const petReducer = (state = initialState, action) => {
  switch(action.type) {

    case actions.GET_PETS_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case actions.GET_PETS_SUCCESS:
      return Object.assign({}, state, { fetching: false, pets: action.pets });
    case actions.GET_PETS_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.CREATE_PET_SUCCESS:
      return Object.assign({}, state, { fetching: false, pets: [...state.pets, action.pet] });

    case actions.DELETE_PET_SUCCESS:
      return Object.assign({}, state, { pets: state.pets.filter(pet => pet._id !== action._id) });

    default:
      return state;
  }
};
