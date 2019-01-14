// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bootstrap-solid.svg';
import UINavLink from 'components/UI/NavLink';
import routes from 'screens/pathUtils.js';

const Navigation = (props: Object) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to={routes.ROOT}>
        <img src={logo} width="30" height="30" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <UINavLink
            className="nav-item"
            childClassName="nav-link"
            to={routes.ROOT}
            {...props}
          >
            Home
          </UINavLink>
          <UINavLink
            className="nav-item"
            childClassName="nav-link"
            to={routes.STRATEGY}
            {...props}
          >
            Strategy
          </UINavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
