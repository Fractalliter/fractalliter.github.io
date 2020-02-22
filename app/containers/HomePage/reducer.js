/*
 *
 * ResumePage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_REPOS_ACTION,
  LOAD_REPOS_FAILED_ACTION,
  LOAD_REPOS_SUCCEED_ACTION,
} from './constants';

export const initialState = {
  loading: true,
  repos: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS_ACTION:
        draft.loading = action.payload;
        break;
      case LOAD_REPOS_SUCCEED_ACTION:
        draft.error = null;
        draft.loading = false;
        draft.repos = action.payload;
        break;
      case LOAD_REPOS_FAILED_ACTION:
        draft.repos = [];
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });

export default homePageReducer;
