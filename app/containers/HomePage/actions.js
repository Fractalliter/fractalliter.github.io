/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_REPOS_ACTION,
  LOAD_REPOS_FAILED_ACTION,
  LOAD_REPOS_SUCCEED_ACTION,
} from './constants';

export function loadReposAction(options) {
  console.log('action', options);

  return {
    type: LOAD_REPOS_ACTION,
    payload: options,
  };
}

export function loadReposSucceedAction(data) {
  console.log('action', data);

  return {
    type: LOAD_REPOS_SUCCEED_ACTION,
    payload: data,
  };
}

export function loadReposFailedAction(error) {
  return {
    type: LOAD_REPOS_FAILED_ACTION,
    payload: error,
  };
}
