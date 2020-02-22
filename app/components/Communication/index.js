/**
 *
 * Communication
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Descriptions } from 'antd';
// import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Communication(props) {
  return (
    <Card
      title={messages.header.defaultMessage}
      id={messages.header.defaultMessage}
      {...props}
    >
      <Descriptions>
        <Descriptions.Item label="English">
          Working proficency
        </Descriptions.Item>
        <Descriptions.Item label="Persian">Native</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

Communication.propTypes = {};

export default memo(Communication);
