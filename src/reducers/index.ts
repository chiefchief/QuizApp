import {combineReducers} from 'redux';
import {
  INITIAL_GLOBAL,
  INITIAL_PERSISTED,
  // ADD IMPORT TYPE
} from './__proto__';

export default combineReducers({
  _global: require('./_global').default,
  _persisted: require('./_persisted').default,
  // ADD NEW REDUCER
});

export type TAppState = {
  _global: INITIAL_GLOBAL;
  _persisted: INITIAL_PERSISTED;
  // ADD TYPE
};
