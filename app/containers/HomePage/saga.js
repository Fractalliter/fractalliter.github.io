import { put, takeEvery, call } from 'redux-saga/effects';
import { loadReposFailedAction, loadReposSucceedAction } from './actions';
import { LOAD_REPOS_ACTION } from './constants';
import request from '../../utils/request';

export function* loadReposSaga() {
  try {
    const data = yield call(
      request,
      'https://api.github.com/users/fractalliter/repos',
    );
    yield put(loadReposSucceedAction(data));
  } catch (error) {
    yield put(loadReposFailedAction(error));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  yield takeEvery(LOAD_REPOS_ACTION, loadReposSaga);
}
