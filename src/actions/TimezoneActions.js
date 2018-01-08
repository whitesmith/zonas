import {
  SEARCH_TEXT_CHANGED,
  SET_TIMEZONE_SEARCH_LIST,
  DELETE_TIMEZONE_SEARCH_LIST,
  SET_TIMEZONE_LIST,
  DELETE_TIMEZONE_LIST,
  ADD_TIMEZONE,
  REMOVE_TIMEZONE
} from './types';

export const loadTimezonesToStore = jsonList => {
  console.log(jsonList);
  return {
    type: SET_TIMEZONE_LIST,
    payload: jsonList
  };
};

export const searchTextChanged = text => {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: text
  };
};

export const addTimezone = timezone => {
  return {
    type: ADD_TIMEZONE,
    payload: timezone
  };
};

export const removeTimezone = timezone => {
  return {
    type: REMOVE_TIMEZONE,
    payload: timezone
  };
};
