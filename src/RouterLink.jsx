/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class RouterLink extends React.Component {
  componentWillMount() {
    this.to = this.props.to;
    if (this.to[0] !== '/') this.to = `/${this.to}`;

    this.context.router.history.listen(this.onLocationChange.bind(this));
    this.onLocationChange(this.context.router.route);
  }
  onLocationChange(e) {
    if ((e.pathname || '/') === this.to) {
      this.props.activateMe();
    }
  }
  render() {
    const {
      className,
      classNameActive,
      classNameHasActiveChild,
      active,
      hasActiveChild,
      to,
      externalLink,
      hasSubMenu,
      toggleSubMenu,
      children,
    } = this.props;

    return (
      hasSubMenu || externalLink
      ? (
        <a
          className={classnames(
            className,
            hasActiveChild && classNameHasActiveChild
          )}
          target={externalLink ? '_blank' : undefined}
          href={to}
          onClick={toggleSubMenu}
        >
          {children}
        </a>
      )
      : (
        <Link
          className={classnames(
            className,
            active && classNameActive
          )}
          to={to}
        >
          {children}
        </Link>
      )
    );
  }
}

RouterLink.propTypes = {
  className: PropTypes.string.isRequired,
  classNameActive: PropTypes.string.isRequired,
  classNameHasActiveChild: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

RouterLink.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default RouterLink;
