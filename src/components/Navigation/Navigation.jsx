import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';
import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: #e72c45;
  }
`;

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.wrap}>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
}
