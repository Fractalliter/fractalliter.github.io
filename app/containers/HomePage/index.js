/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { database } from 'firebase/app';
import {
  Navbar,
  Summary,
  Experiences,
  Education,
  Skills,
  Projects,
  Communication,
  Footer,
  Loading,
} from 'components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { BackTop } from 'antd';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectRepos,
  makeSelectError,
  makeSelectLoading,
} from './selector';
import { loadReposAction } from './actions';

function HomePage({ loadRepositories, repos = [], loadRepos, error }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    loadRepositories(true);
    try {
      database()
        .ref()
        .on('value', snap => {
          setLoading(false);
          setData(snap.val());
        });
    } catch (e) {
      console.error(e, loadRepos, error);
    }
  }, []);
  const {
    links,
    socials,
    info,
    summary,
    experiences,
    education,
    contact,
    skills,
  } = data;

  return (
    <Loading>
      <BackTop />
      <Navbar
        {...{ contact, socials, links }}
        src={info && info.avatar.url}
        alt={info && info.avatar.alt}
        style={{ backgroundColor: '#ffffff' }}
      />
      <Summary {...{ summary, loading }} />
      <Experiences {...{ experiences, loading }} />
      <Education {...{ education, loading }} />
      <Skills {...{ skills, loading }} />
      <Projects {...{ project: repos.filter(item => !item.fork), loading }} />
      <Communication loading={loading} />
      <Footer />
    </Loading>
  );
}

HomePage.propTypes = {
  repos: PropTypes.array,
  loadRepos: PropTypes.bool,
  error: PropTypes.object,
  loadRepositories: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loadRepos: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadRepositories: options => dispatch(loadReposAction(options)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
