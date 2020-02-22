/**
 *
 * Icon
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style/css';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const StyledIcon = styled(Icon)``;

function IconEx(props) {
  return <StyledIcon {...props} />;
}

IconEx.propTypes = {
  props: PropTypes.any,
};

export default memo(IconEx);
