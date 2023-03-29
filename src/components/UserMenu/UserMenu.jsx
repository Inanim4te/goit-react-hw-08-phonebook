import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <b>{user.email}</b>

      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
