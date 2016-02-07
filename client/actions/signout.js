import { SIGNOUT_SUCCESS, LOCALSTORAGE_TOKEN_KEY } from '../constants/auth';
import { removeValue } from '../services/storage';

export const signout = () => {
  removeValue(LOCALSTORAGE_TOKEN_KEY);
  return {
    type: SIGNOUT_SUCCESS
  };
};
