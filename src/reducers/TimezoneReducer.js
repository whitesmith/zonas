import {
  SEARCH_TEXT_CHANGED,
  SET_TIMEZONE_SEARCH_LIST,
  DELETE_TIMEZONE_SEARCH_LIST,
  SET_TIMEZONE_LIST,
  DELETE_TIMEZONE_LIST,
  ADD_TIMEZONE,
  REMOVE_TIMEZONE
} from 'actions/types';

const INITIAL_STATE = {
  searchText: '',
  searchList: [],
  timezoneList: [],
  myTimezoneList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return {
        ...state,
        searchText: action.payload,
        searchList: state.timezoneList.filter(timezone =>
          timezone.utc
            .join()
            .concat(timezone.text)
            .replace('_', ' ')
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        )
      };
    case SET_TIMEZONE_SEARCH_LIST:
      return { ...state, searchList: action.payload };
    case DELETE_TIMEZONE_SEARCH_LIST:
      return { ...state, searchList: [] };
    case SET_TIMEZONE_LIST:
      return { ...state, timezoneList: action.payload };
    case DELETE_TIMEZONE_LIST:
      return { ...state, timezoneList: [] };
    case ADD_TIMEZONE:
      return {
        ...state,
        myTimezoneList: [...state.myTimezoneList, action.payload],
        searchList: [],
        searchText: ''
      };
    case REMOVE_TIMEZONE:
      return {
        ...state,
        myTimezoneList: state.myTimezoneList.filter(
          timezone => timezone.value !== action.payload.value
        )
      };
    default:
      return state;
  }
};
