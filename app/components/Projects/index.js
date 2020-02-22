/**
 *
 * Projects
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Col, Row, Icon, Tag } from 'antd';
// import { FormattedMessage } from 'react-intl';
import messages from './messages';

const { Meta } = Card;
function Projects({ project = [], tags = [], ...props }) {
  return (
    <Card
      title={messages.header.defaultMessage}
      id={messages.header.defaultMessage}
      {...props}
    >
      <Row gutter={16}>
        {project.reverse().map(item => (
          <Col span={8} key={item.id}>
            <Card
              style={{ marginTop: 8 }}
              actions={[
                <a href={item.html_url} alt={item.name} target="_blank">
                  <Icon type="github" key="setting" />
                </a>,
                <Icon type="gitlab" key="edit" />,
              ]}
            >
              <Meta
                title={item.name
                  .split('-')
                  .reduce((a, b) => `${a} ${b}`)
                  .toUpperCase()}
                description={item.description}
              />
              {tags.map(i => (
                <Tag color="lime">{i}</Tag>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}

Projects.propTypes = {
  project: PropTypes.array,
  tags: PropTypes.array,
  props: PropTypes.object,
};

export default memo(Projects);
