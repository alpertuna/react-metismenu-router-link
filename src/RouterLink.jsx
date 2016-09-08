/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RouteLink = props => (
  props.toggleSubMenu || props.target
  ? (
    <a
      className="metismenu-link"
      target={props.target}
      href={props.to}
      onClick={props.toggleSubMenu}
    >
      {props.children}
    </a>
  )
  : (
    <Link className="metismenu-link" to={props.to}>
      {props.children}
    </Link>
  )
);

RouteLink.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean,
  ]),
  to: PropTypes.string,
  toggleSubMenu: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.boolean,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default RouteLink;
