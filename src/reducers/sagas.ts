import {all} from 'redux-saga/effects';
import {watch_persisted} from './_persisted';
// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watch_persisted(),
    // ADD WATCHER
  ]);
}
