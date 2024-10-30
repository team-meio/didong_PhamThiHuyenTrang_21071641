import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure } from '../actions';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://67219fde98bbb4d93ca9043e.mockapi.io/todo'); // replace with actual endpoint
    console.log(response)
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default rootSaga;
