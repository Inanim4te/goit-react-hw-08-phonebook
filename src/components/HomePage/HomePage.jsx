import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>This is your personal Phonebook</h1>
      {!isLoggedIn ? (
        <p className={css.text}>
          To continue please{' '}
          <Link className={css.link} to="/login">
            Log In
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="/register">
            Sign Up
          </Link>
        </p>
      ) : (
        <p className={css.text}>Hi, {user.name}!</p>
      )}
    </div>
  );
}
