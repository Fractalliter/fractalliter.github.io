import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resumePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResumePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectRepos = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.repos,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.error,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
};
