---
to: src/reducers/_global.ts
unless_exists: true
---
// USES FOR GLOBAL NOT PERSISTED ITEMS

import {INITIAL_GLOBAL} from './__proto__';

const SET_USER_NAME = '[_global] SET_USER_NAME';
const RESET_GLOBAL = '[_global] RESET_GLOBAL';

const initialstate = new INITIAL_GLOBAL();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, {...state, userName: action.userName});
    case RESET_GLOBAL:
      return initialstate;
    default:
      return state;
  }
};

export const setUserName = (userName: string) => ({userName, type: SET_USER_NAME});
export const resetGlobal = () => ({type: RESET_GLOBAL});

export function* watch_Global() {
  // yield takeLatest(SET_USER_NAME, setUserNameAsync);
}

export function* setUserNameAsync() {
  try {
  } catch (e) {
    console.log(e, 'setUserNameAsync ERROR');
  }
}
