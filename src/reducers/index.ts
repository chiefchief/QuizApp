import {combineReducers} from 'redux';
import {
  INITIAL_GLOBAL,
  INITIAL_QUIZ,
  // ADD IMPORT TYPE
} from './__proto__';

export default combineReducers({
  _global: require('./_global').default,
  quiz: require('./quiz').default,
  // ADD NEW REDUCER
});

export type TAppState = {
  _global: INITIAL_GLOBAL;
  quiz: INITIAL_QUIZ;
  // ADD TYPE
};
