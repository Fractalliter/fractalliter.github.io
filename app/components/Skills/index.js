/**
 *
 * Skills
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Tag, Tooltip } from 'antd';
// import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Skills({ skills = [], ...props }) {
  return (
    <Card
      title={messages.header.defaultMessage}
      id={messages.header.defaultMessage}
      {...props}
    >
      {skills
        .sort((a, b) => {
          if (a.category < b.category) return 1;
          if (a.category > b.category) return -1;
          return 0;
        })
        .sort((a, b) => {
          if (a.value < b.value) return 1;
          if (a.value > b.value) return -1;
          return 0;
        })
        .map(i => (
          <Tooltip text={<span>{i.category}</span>}>
            <Tag style={{ marginTop: 5 }} color="geekblue">
              {i.label}
            </Tag>
          </Tooltip>
        ))}
    </Card>
  );
}

Skills.propTypes = {
  skills: PropTypes.array,
  props: PropTypes.object,
};

export default memo(Skills);
