import {all} from 'redux-saga/effects';
import {watchQuiz} from './quiz';
// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watchQuiz(),
    // ADD WATCHER
  ]);
}
