import React from 'react';
import styles from './Social.module.css';
import commonStyles from '../../common/CommonStyles.module.css';

type PropsType = {};


export const Social = ( props: PropsType ) => {
  return (
      <div className={ styles.social }>
        <div className={ styles.social__item }>
          <img
              className={ styles.social__icon }
              src="/123.png"
              alt="facebook"/>
          <a
              href={ '/#' }
              className={ styles.social__name }>Facebook</a>
        </div>
        <div className={ styles.social__item }>
          <img
              className={ styles.social__icon }
              src="/123.png"
              alt="linkedin"/>
          <a
              href={ '/#' }
              className={ styles.social__name }>Linkedin</a>
        </div>
        <div className={ styles.social__item }>
          <img
              className={ styles.social__icon }
              src="/123.png"
              alt="github"/>
          <a
              href={ '/#' }
              className={ styles.social__name }>GitHub</a>
        </div>
        <div className={ styles.social__item }>
          <img
              className={ styles.social__icon }
              src="/123.png"
              alt="vk"/>
          <a
              href={ '/#' }
              className={ styles.social__name }>VK</a>
        </div>
        <div className={ styles.social__item }>
          <img
              className={ styles.social__icon }
              src="/123.png"
              alt="it-in"/>
          <a
              href={ '/#' }
              className={ styles.social__name }>It-In</a>
        </div>
      </div>
  );
};