/**
 *
 * Socials
 *
 */

import React, { memo, Fragment } from 'react';
import { Tooltip, Avatar } from 'antd';
import PropTypes from 'prop-types';

function Socials({ socials, style }) {
  return (
    <Fragment>
      {socials.map(i => (
        <a href={i.profileURL} key={i.name}>
          <Tooltip title={i.name}>
            <Avatar
              src={i.icon}
              alt={`Elias Rahmani ${i.name}`}
              height={35}
              width={35}
              key={i.icon}
              style={{ marginTop: 15, ...style }}
            />
          </Tooltip>
        </a>
      ))}
    </Fragment>
  );
}

Socials.propTypes = {
  socials: PropTypes.array,
  style: PropTypes.string,
};

export default memo(Socials);
