import {httpGet, push} from '@services';
import {TAnswerItem, TRequestItem, TRequestParams} from '@types';
import {cloneDeep} from 'lodash';
import {Alert} from 'react-native';
import {takeLatest, put, call, select} from 'redux-saga/effects';
import {TAppState} from './index';
import {setLoader} from './_global';
import {INITIAL_QUIZ} from './__proto__';

const GET_QUIZ = '[quiz] GET_QUIZ';
const SET_INITIAL = '[quiz] SET_INITIAL';
const SET_RESULT_ITEM = '[quiz] SET_RESULT_ITEM';
const SET_CURRENT = '[quiz] SET_CURRENT';
const ADD_ANSWER = '[quiz] ADD_ANSWER';
const RESET_QUIZ = '[quiz] RESET_QUIZ';

const initialstate = new INITIAL_QUIZ();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_INITIAL:
      return new INITIAL_QUIZ({...state, initialData: action.initialData});
    case SET_RESULT_ITEM:
      return new INITIAL_QUIZ({...state, resultData: action.resultData});
    case SET_CURRENT:
      return new INITIAL_QUIZ({...state, currentQuestion: action.currentQuestion});
    case RESET_QUIZ:
      return initialstate;
    default:
      return state;
  }
};

export const getQuiz = (params: TRequestParams) => ({params, type: GET_QUIZ});
export const setInitial = (initialData: TRequestItem[]) => ({initialData, type: SET_INITIAL});
export const setResultItem = (resultData: TAnswerItem[]) => ({resultData, type: SET_RESULT_ITEM});
export const setCurrent = (currentQuestion: number) => ({currentQuestion, type: SET_CURRENT});
export const addAnswer = (correct: boolean) => ({correct, type: ADD_ANSWER});
export const resetQuiz = () => ({type: RESET_QUIZ});

export function* watchQuiz() {
  yield takeLatest(GET_QUIZ, getQuizAsync);
  yield takeLatest(ADD_ANSWER, addAnswerAsync);
}

export function* getQuizAsync(action: {params: TRequestParams; type: string}) {
  const {params} = action;
  yield put(setLoader(true));
  try {
    const {data} = yield call(() => httpGet('', params));
    if (!data.response_code && data.results?.length) {
      yield put(setInitial(data.results));
      push('Quiz');
    } else {
      Alert.alert('Something went wrong');
    }
    yield put(setLoader(false));
  } catch (e) {
    console.log(e, 'getQuizAsync ERROR');
    yield put(setLoader(false));
  }
}

export function* addAnswerAsync(action: {correct: boolean; type: string}) {
  const {correct} = action;
  const {
    initialData,
    currentQuestion,
    resultData,
  }: {initialData: TRequestItem[]; resultData: TAnswerItem[]; currentQuestion: number} = yield select(
    (state: TAppState) => state.quiz,
  );

  const item = {
    correct,
    id: Date.now(),
    question: initialData[currentQuestion].question,
  };

  const result = cloneDeep(resultData);
  console.log(currentQuestion + 1, 'CURR');
  console.log(initialData.length, 'LENGTH');
  if (currentQuestion + 1 >= initialData.length) {
    // will be push
    push('QuizResult');
  } else {
    yield put(setCurrent(currentQuestion + 1));
  }
  yield put(setResultItem([...result, item]));
}
