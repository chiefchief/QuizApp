---
to: src/reducers/_initialGlobal.ts
unless_exists: true
---
import {REHIDRATED_KEY} from 'reactn-persist';

const global: TGlobal = {
  authToken: '',
  isAuthorized: false,
  // ...
  [REHIDRATED_KEY]: false,
};

export default global;

export type TGlobal = {
  authToken: string;
  isAuthorized: boolean;
  // ...
};
