import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resumePage state domain
 */

const selectResumePageDomain = state => state.resumePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResumePage
 */

const makeSelectResumePage = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate,
  );

const selectCurrent = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate.current,
  );

const selectLoading = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate.loading,
  );

const selectData = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate.data,
  );

const selectLoadingError = () =>
  createSelector(
    selectResumePageDomain,
    substate => substate.loadDataError,
  );

export default makeSelectResumePage;
export {
  selectResumePageDomain,
  selectCurrent,
  selectData,
  selectLoading,
  selectLoadingError,
};
