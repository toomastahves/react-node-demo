import Lockr from 'lockr';

export const setValue = (key, value) => {
  Lockr.set(key, value);
  return true;
};

export const getValue = (key) => {
  return Lockr.get(key);
};

export const removeValue = (key) => {
  Lockr.rm(key);
  return true;
};
