import * as actions from '../constants/dataConstants';

const initialState = {
  fetching: false,
  data: {}
};

const dataReducers = (state = initialState, action) => {
  switch(action.type) {

    case actions.DATA_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.DATA_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', data: action.data });
    case actions.DATA_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};

export default dataReducers;
