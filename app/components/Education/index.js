/**
 *
 * Education
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Timeline } from 'antd';
import messages from './messages';
import months from '../../utils/months';

const { Title, Text, Paragraph } = Typography;
function Education({ education = [], ...props }) {
  return (
    <Card title={messages.header.defaultMessage} id="Education" {...props}>
      <Timeline>
        {education.map(i => (
          <Timeline.Item>
            <Typography key={i.university}>
              <Title level={4}>
                <a href={i.universityURL} alt={i.university} target="_blank">
                  {i.university}
                </a>
              </Title>
              <Text strong>{i.degree}</Text>, <Text>{i.field}</Text>,{' '}
              <Text>{`${months[i.start.month - 1]} ${i.start.year}`}</Text>
              {`  ${'to'}  `}
              <Text>{`${months[i.end.month - 1]} ${i.end.year}`}</Text>
              <Paragraph>{i.description}</Paragraph>
            </Typography>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
}

Education.propTypes = {
  education: PropTypes.array,
  props: PropTypes.object,
};

export default memo(Education);
