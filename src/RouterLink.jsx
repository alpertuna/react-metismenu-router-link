/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RouterLink = props => (
  props.toggleSubMenu || props.target
  ? (
    <a
      className={props.className}
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

RouterLink.propTypes = {
  className: PropTypes.string.isRequired,
  target: PropTypes.string,
  to: PropTypes.string,
  toggleSubMenu: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default RouterLink;
