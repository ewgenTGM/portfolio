import React from 'react';
import styles from './Nav.module.css';

type PropsType = {};

const Nav = ( props: PropsType ) => {
  return (
      <nav className={ styles.nav }>
        <ul>
          <li><a href="/#">Главная</a></li>
          <li><a href="/#">Скилы</a></li>
          <li><a href="/#">Проекты</a></li>
          <li><a href="/#">Контакты</a></li>
        </ul>
      </nav>
  );
};

export default Nav;