/*
 *
 * ResumePage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_DATA_ACTION,
  LOAD_DATA_SUCCEED_ACTION,
  LOAD_DATA_FAILED_ACTION,
  CHANGE_CURRENT_KEY_ACTION,
} from './constants';

export const initialState = {
  current: 'Summary',
  loading: true,
  data: {},
  loadDataError: null,
};

/* eslint-disable default-case, no-param-reassign */
const resumePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA_ACTION:
        draft.loading = action.payload;
        break;
      case LOAD_DATA_SUCCEED_ACTION:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case LOAD_DATA_FAILED_ACTION:
        draft.loading = false;
        draft.loadDataError = action.payload;
        break;
      case CHANGE_CURRENT_KEY_ACTION:
        draft.current = action.payload;
        break;
    }
  });

export default resumePageReducer;
