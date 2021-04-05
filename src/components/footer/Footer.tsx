import React from 'react';
import styles from './Footer.module.css';
import commonStyles from '../../common/CommonStyles.module.css';

type PropsType = {};

export const Footer = ( props: PropsType ) => {
  return (
      <footer className={ styles.footer }>
        <div className={ commonStyles.container }>
          Container
        </div>
      </footer>
  );
};