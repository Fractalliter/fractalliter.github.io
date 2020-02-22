/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from 'antd/es/menu';
import 'antd/es/menu/style/css';

const StyledMenu = styled(Menu)``;

function MenuEx(props) {
  return <StyledMenu {...props} />;
}

MenuEx.Item = function(props) {
  return <StyledMenu.Item {...props} />;
};

MenuEx.ItemGroup = function(props) {
  return <StyledMenu.ItemGroup {...props} />;
};

MenuEx.propTypes = {
  props: PropTypes.any,
};

export default MenuEx;
