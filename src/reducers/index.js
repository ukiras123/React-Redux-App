import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ErrorReduce from './error_reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  error: ErrorReduce
});

export default rootReducer;
