/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Menu, Avatar, Typography, Col, Row } from 'antd';
import Socials from '../Socials';
import Contact from '../Contact';

const { Title } = Typography;

function Navbar({
  links = [],
  socials = [],
  contact = [],
  mode = 'horizontal',
  handleClick,
  current,
  title = 'Elias Rahmani',
  profession = 'Full-stack Developer',
  src,
  alt,
  size = 64,
  style,
  ...props
}) {
  return (
    <div style={style}>
      <Row align="middle" justify="center" gutter={4}>
        <Col
          span={2}
          sm={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          lg={{ span: 2, offset: 0 }}
        >
          <Avatar
            {...{ src, alt, size }}
            style={{ marginLeft: 20, marginTop: 5 }}
          />
        </Col>
        <Col
          span={2}
          sm={{ span: 5, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          lg={{ span: 3, offset: 0 }}
        >
          <Title style={{ marginTop: 15 }} level={4} strong>
            {title}
          </Title>
        </Col>
        <Col span={8}>
          <Title
            style={{ marginTop: 15 }}
            level={4}
            strong
            className="navContact-print"
          >
            {profession}
          </Title>
        </Col>
        <Col
          className="navMenu-print"
          span={12}
          sm={{ span: 8, offset: 0 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 13, offset: 1 }}
        >
          <Menu
            className="navMenu-print"
            onClick={handleClick}
            selectedKeys={[current]}
            mode={mode}
            style={{ borderBottom: 0, marginTop: 10 }}
            {...props}
          >
            {links.map(i => (
              <Menu.Item key={i}>
                <a href={`#${i}`}>{i}</a>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col
          span={6}
          sm={{ span: 6, offset: 0 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
        >
          <Socials socials={socials} />
        </Col>
      </Row>
      <Row>
        <Contact
          className="navContact-print"
          layout="vertical"
          size="small"
          column={4}
          data={Object.keys(contact).map(item => ({
            label: item,
            value: contact[item],
          }))}
        />
      </Row>
    </div>
  );
}

Navbar.propTypes = {
  links: PropTypes.array,
  socials: PropTypes.array,
  contact: PropTypes.array,
  profession: PropTypes.string,
  mode: PropTypes.string,
  handleClick: PropTypes.func,
  current: PropTypes.string,
  props: PropTypes.any,
  avatarURL: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string,
  style: PropTypes.object,
};

export default memo(Navbar);
