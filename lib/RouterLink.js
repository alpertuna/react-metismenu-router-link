'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/RouterLink.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 08.09.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var RouterLink = function (_React$Component) {
  _inherits(RouterLink, _React$Component);

  function RouterLink() {
    _classCallCheck(this, RouterLink);

    return _possibleConstructorReturn(this, (RouterLink.__proto__ || Object.getPrototypeOf(RouterLink)).apply(this, arguments));
  }

  _createClass(RouterLink, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.context.router.isActive({ pathname: this.props.to })) {
        this.props.activateMe();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var classNameActive = _props.classNameActive;
      var classNameHasActiveChild = _props.classNameHasActiveChild;
      var active = _props.active;
      var hasActiveChild = _props.hasActiveChild;
      var to = _props.to;
      var externalLink = _props.externalLink;
      var hasSubMenu = _props.hasSubMenu;
      var toggleSubMenu = _props.toggleSubMenu;
      var activateMe = _props.activateMe;
      var children = _props.children;


      return hasSubMenu || externalLink ? _react2.default.createElement(
        'a',
        {
          className: (0, _classnames2.default)(className, hasActiveChild && classNameHasActiveChild),
          target: externalLink ? '_blank' : undefined,
          href: to,
          onClick: toggleSubMenu
        },
        children
      ) : _react2.default.createElement(
        _reactRouter.Link,
        {
          className: (0, _classnames2.default)(className, active && classNameActive),
          to: to,
          onClick: activateMe
        },
        children
      );
    }
  }]);

  return RouterLink;
}(_react2.default.Component);

RouterLink.propTypes = {
  className: _react.PropTypes.string.isRequired,
  classNameActive: _react.PropTypes.string.isRequired,
  classNameHasActiveChild: _react.PropTypes.string.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  to: _react.PropTypes.string.isRequired,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array]).isRequired
};

RouterLink.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired
};

exports.default = RouterLink;