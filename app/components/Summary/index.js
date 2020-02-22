/**
 *
 * Summary
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Tag, Descriptions } from 'antd';

function Summary({
  summary = { brief: '', stack: [], enthu: '' },
  descTitle = 'Stack:',
  ...props
}) {
  const { brief, stack, enthu } = summary;
  return (
    <Card {...props}>
      {brief.split('<p>').map(i => (
        <p key={Math.random() * i.length}>{i}</p>
      ))}
      <p>{enthu}</p>
      <Descriptions title={descTitle}>
        <Descriptions.Item>
          {stack.length > 0 &&
            stack.map(item => (
              <Tag key={item} color="blue">
                {item}
              </Tag>
            ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

Summary.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.object,
  props: PropTypes.object,
  descTitle: PropTypes.string,
};

export default memo(Summary);
