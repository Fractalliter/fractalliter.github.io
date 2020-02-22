/*
 *
 * ResumePage actions
 *
 */

import {
  LOAD_DATA_ACTION,
  LOAD_DATA_FAILED_ACTION,
  LOAD_DATA_SUCCEED_ACTION,
  CHANGE_CURRENT_KEY_ACTION,
} from './constants';

export function loadDataAction(options) {
  return {
    type: LOAD_DATA_ACTION,
    payload: options,
  };
}

export function loadDataSucceedAction(data) {
  return {
    type: LOAD_DATA_SUCCEED_ACTION,
    payload: data,
  };
}

export function loadDataFailedAction(error) {
  return {
    type: LOAD_DATA_FAILED_ACTION,
    payload: error,
  };
}

export function changeCurrentKeyAction(key) {
  return {
    type: CHANGE_CURRENT_KEY_ACTION,
    payload: key,
  };
}
