/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Row, Col, Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const { Text } = Typography;
function Footer() {
  return (
    <Card className="footer-print">
      <Row>
        <Col span={8} offset={8}>
          <Typography>
            <Text strong>
              <FormattedMessage {...messages.header} />
            </Text>
          </Typography>
        </Col>
      </Row>
    </Card>
  );
}

Footer.propTypes = {};

export default memo(Footer);
