/**
 *
 * ResumePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Navbar,
  Summary,
  Experiences,
  Education,
  Skills,
  Projects,
  Communication,
  Footer,
} from 'components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  selectCurrent,
  selectData,
  selectLoading,
  selectLoadingError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeCurrentKeyAction, loadDataAction } from './actions';

export function ResumePage({
  loading,
  current,
  loadData,
  data,
  handleCurrentMenu,
  loadDataError,
}) {
  useInjectReducer({ key: 'resumePage', reducer });
  useInjectSaga({ key: 'resumePage', saga });
  useEffect(() => {
    loadData({});
  }, []);
  console.error(loadDataError);
  const { links, socials, info, summary, experiences, education } = data;

  return (
    <div>
      <Helmet>
        <title>ResumePage</title>
        <meta name="description" content="Description of ResumePage" />
      </Helmet>
      <Navbar
        onClick={({ key }) => handleCurrentMenu(key)}
        selectedKeys={[current]}
        mode="horizontal"
        links={links}
        socials={socials}
        src={info && info.avatar.url}
        alt={info && info.avatar.alt}
        size={64}
      />
      <Summary {...{ summary, loading }} />
      <Experiences {...{ experiences, loading }} />
      <Education {...{ education, loading }} />
      <Skills loading={loading} />
      <Projects loading={loading} />
      <Communication loading={loading} />
      <Footer />
    </div>
  );
}

ResumePage.propTypes = {
  loadData: PropTypes.func.isRequired,
  handleCurrentMenu: PropTypes.func.isRequired,
  current: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.object,
  loadDataError: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  current: selectCurrent(),
  loading: selectLoading(),
  data: selectData(),
  loadDataError: selectLoadingError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadData: options => dispatch(loadDataAction(options)),
    handleCurrentMenu: key => dispatch(changeCurrentKeyAction(key)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ResumePage);
