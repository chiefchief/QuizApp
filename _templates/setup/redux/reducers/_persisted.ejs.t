---
to: src/reducers/_persisted.ts
unless_exists: true
---
import {takeLatest} from 'redux-saga/effects';
import {INITIAL_PERSISTED} from './__proto__';

const LOG_OUT = '[_persisted] LOG_OUT';
const LOG_IN = '[_persisted] LOG_IN';
const CHANGE_TOKEN = '[_persisted] CHANGE_SPLASH';
const RESET_ADDITIONAL = '[_persisted] RESET_ADDITIONAL';

const initialstate = new INITIAL_PERSISTED();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return Object.assign({}, {...state, token: action.token});
    case RESET_ADDITIONAL:
      return initialstate;
    default:
      return state;
  }
};

export const logOut = () => ({type: LOG_OUT});
export const logIn = () => ({type: LOG_IN});
export const changeSplash = (token: string) => ({token, type: CHANGE_TOKEN});

export function* watch_persisted() {
  yield takeLatest(LOG_OUT, logOutAsync);
  yield takeLatest(LOG_IN, logInAsync);
}

export function* logOutAsync() {
  console.log('logOutAsync');
}

export function* logInAsync() {
  try {
    // yield all([call(logOutAsync), call(logOut)]);
    // yield navigate('Home');
  } catch (e) {
    console.log(e, 'logInAsync ERROR');
  }
}
