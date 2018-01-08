import { combineReducers } from 'redux';
import TimezoneReducer from './TimezoneReducer';

export default combineReducers({
  timezone: TimezoneReducer
});
