'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

var RouteLink = function RouteLink(props) {
  return props.toggleSubMenu || props.target ? _react2.default.createElement(
    'a',
    {
      className: 'metismenu-link',
      target: props.target,
      href: props.to,
      onClick: props.toggleSubMenu
    },
    props.children
  ) : _react2.default.createElement(
    _reactRouter.Link,
    { className: 'metismenu-link', to: props.to },
    props.children
  );
};

RouteLink.propTypes = {
  target: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.boolean]),
  to: _react.PropTypes.string,
  toggleSubMenu: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.boolean]),
  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element]).isRequired
};

exports.default = RouteLink;