/**
 *
 * Hobbies
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Hobbies() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Hobbies.propTypes = {};

export default memo(Hobbies);
