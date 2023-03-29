import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: #e72c45;
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.wrap}>
      <Link className={css.link} to="/login">
        Log In
      </Link>
      <Link className={css.link} to="/register">
        Sign Up
      </Link>
    </div>
  );
};
