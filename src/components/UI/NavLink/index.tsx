import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  to: string;
  className: string;
  childClassName: string;
  children: Object;
  location: {
    pathname: string;
  };
}

class UINavLink extends React.Component<IProps> {
  render() {
    const { to, className = '', childClassName = '', location } = this.props;
    const isActive = location.pathname === to;
    const parentClassName = className + (isActive ? ' active' : '');

    return (
      <li className={parentClassName}>
        <Link className={childClassName} to={to}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

export default UINavLink;
