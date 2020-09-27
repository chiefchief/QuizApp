import {INITIAL_GLOBAL} from './__proto__';

const SET_LOADER = '[_global] SET_LOADER';
const RESET_GLOBAL = '[_global] RESET_GLOBAL';

const initialstate = new INITIAL_GLOBAL();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_LOADER:
      return new INITIAL_GLOBAL({...state, loader: action.loader});
    case RESET_GLOBAL:
      return initialstate;
    default:
      return state;
  }
};

export const setLoader = (loader: boolean) => ({loader, type: SET_LOADER});
export const resetGlobal = () => ({type: RESET_GLOBAL});
