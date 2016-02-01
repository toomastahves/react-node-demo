import * as actions from '../constants/petConstants';

const initialState = {
  fetching: false,
  pets: []
};

const petReducers = (state = initialState, action) => {
  switch(action.type) {

    case actions.PETS_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.PETS_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', pets: action.pets });
    case actions.PETS_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};

export default petReducers;
