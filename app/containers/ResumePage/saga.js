import { all, put, takeEvery } from 'redux-saga/effects';
import { database } from 'firebase/app';
import { loadDataFailedAction, loadDataSucceedAction } from './actions';
import { LOAD_DATA_ACTION } from './constants';

export function* loadDataSaga() {
  try {
    let data = {};
    database()
      .ref()
      .on('value', snap => {
        data = snap.val();
      });
    yield put(loadDataSucceedAction(data));
  } catch (error) {
    yield put(loadDataFailedAction(error.message || error));
  }
}
// Individual exports for testing
export default function* resumePageSaga() {
  yield all(yield takeEvery(LOAD_DATA_ACTION, loadDataSaga));
}
