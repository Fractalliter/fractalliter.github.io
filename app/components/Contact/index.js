/**
 *
 * Contact
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { Descriptions } from 'antd';
// import messages from './messages';

function Contact({ data, ...props }) {
  return (
    <Descriptions {...{ layout: 'horizontal', ...props }}>
      {data.map(i => (
        <Descriptions.Item label={i.label} key={i.label}>
          {i.value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
}

Contact.propTypes = {
  data: PropTypes.array,
  props: PropTypes.object,
};

export default memo(Contact);
