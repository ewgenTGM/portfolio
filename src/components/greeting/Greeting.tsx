import React from 'react';
import styles from './Greeting.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import photo from './avatar_sm.jpg';

type PropsType = {};

const Greeting = ( props: PropsType ) => {
  return (

      <section className={ [ commonStyles.container, styles.greeting ].join( ' ' ) }>
        <div className={ styles.greeting__text }>
          <span>Привет всем!</span>
          <h1>Меня зовут Евгений!</h1>
          <p>Я Junior Fullstack разработчик.</p>
        </div>
        <div className={ styles.greeting__photo }>
          <img
              src={ photo }
              alt="avatar"/>
        </div>
      </section>

  );
};

export default Greeting;