/**
 *
 * Loading
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Infinity from '../../images/Infinity.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  justify-items: center;
  top: 50%;
  left: 50%;
  margin: -100px 0px 0px -100px;
`;

function Loading({ loading, children }) {
  return loading ? (
    <StyledDiv>
      <img src={Infinity} alt="Loading" />
    </StyledDiv>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.any,
};

export default memo(Loading);
