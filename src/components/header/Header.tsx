import React from 'react';
import styles from './Header.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import Nav from '../nav/Nav';

type PropsType = {};

const Header = ( props: PropsType ) => {
  return (
      <header className={ styles.header }>
        <div className={ commonStyles.container }>
          <Nav/>
        </div>
      </header>
  );
};

export default Header;