---
to: src/reducers/index.ts
unless_exists: true
---
  # <%=h.changeCase.camelCase(name)%>: require('./<%=h.changeCase.camelCase(name)%>').default,
// Reactn documentation: https://github.com/CharlesStover/reactn#table-of-contents
import addReactNDevTools from 'reactn-devtools';
import init from 'reactn-persist';
import AsyncStorage from '@react-native-community/async-storage';
import _initialGlobal, {TGlobal} from './_initialGlobal';
import {addCallback} from 'reactn';
import './logout';

export {
  getGlobal, // const token = getGlobal().auth.token
  resetGlobal, // resetGlobal()
  setGlobal, // setGlobal({ value: 3 })
  addCallback, // const callback = global => null; addCallback(callback)
  removeCallback, // removeCallback()
  useGlobal, // const [count, setCount] = useGlobal('count')
  useDispatch, // const add = useDispatch((count, n) => count + n, 'count'); add(9);
  getDispatch, // getDispatch().reducerName('hello');
  withInit, // withInit(INITIAL_STATE, INITIAL_REDUCERS)(AppComponent)
  withGlobal,
} from 'reactn';

init({
  storage: AsyncStorage,
  whitelist: ['authToken'],
  initialValue: _initialGlobal,
});

// Enable devtools.
addReactNDevTools();

// Add auth listener
const callbackAuth = (global: TGlobal) => {
  const isAuthorized = !!global.authToken;
  return global.isAuthorized !== isAuthorized ? {isAuthorized} : null;
};
addCallback(callbackAuth);
