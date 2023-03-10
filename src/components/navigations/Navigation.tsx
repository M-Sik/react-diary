import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/navigations/Navigation.module.scss';
import LogoIcon from '../icons/LogoIcon';
const cx = classNames.bind(styles);

function Navigation() {
  return (
    <>
      <nav className={cx('wrap-navigation')}>
        <div>
          <Link className={cx('brand-color')} to="/">
            <LogoIcon />
          </Link>
        </div>
        <div>
          <NavLink className={({ isActive }) => (isActive ? cx('active-color') : '')} to="/diarys">
            Diarys
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? cx('active-color') : '')}
            to="/add-diary"
          >
            AddDiary
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
