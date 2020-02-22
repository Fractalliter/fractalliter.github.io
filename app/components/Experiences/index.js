/**
 *
 * Experiences
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Timeline, Icon, Typography } from 'antd';
// import { FormattedMessage } from 'react-intl';
import messages from './messages';
import months from '../../utils/months';

const { Title, Text } = Typography;
function iconHandler(status) {
  return status ? (
    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
  ) : (
    <Icon type="stop" />
  );
}

function Experiences({ experiences = [], ...props }) {
  const renderWorkDuration = item => {
    if (Math.floor(item.duration / 12) > 0 && !item.workThere)
      return `, ${Math.floor(item.duration / 12)} year and ${item.duration %
        12} months`;
    if (item.workThere) return `- Present`;
    return `,  ${item.duration % 12} months`;
  };
  return (
    <Card
      title={messages.header.defaultMessage}
      id={messages.header.defaultMessage}
      {...props}
    >
      <Timeline {...props}>
        {experiences.reverse().map(i => (
          <Timeline.Item dot={iconHandler(i.workThere)} key={i.company}>
            <Title level={4}>{i.company}</Title>
            <Text strong>{`${months[i.start.month - 1]} ${
              i.start.year
            } `}</Text>
            <Text strong>
              {!i.workThere && `- ${months[i.end.month - 1]} ${i.end.year}`}
            </Text>
            <Text strong>{renderWorkDuration(i)}</Text>
            <Text strong>{` - ${i.status}`}</Text>
            <br />
            <Text>{i.desc}</Text>
            <ul>
              {i.responsibilities.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
}

Experiences.propTypes = {
  experiences: PropTypes.array,
  props: PropTypes.any,
};

export default memo(Experiences);
