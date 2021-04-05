import React from 'react';
import styles from './Footer.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import { Social } from '../social/Social';

type PropsType = {};

export const Footer = ( props: PropsType ) => {
  return (
      <footer className={ styles.footer }>
        <div className={ commonStyles.container }>
          <h2 className={ commonStyles.section__title }>Social Links</h2>
          <Social/>
        </div>
      </footer>
  );
};