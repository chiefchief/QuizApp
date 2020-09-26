---
to: src/reducers/logout.ts
unless_exists: true
---
import {addReducer} from 'reactn';

addReducer('logout', async (global, dispatch, params) => ({
  authToken: '',
  isAuthorized: false
}));
