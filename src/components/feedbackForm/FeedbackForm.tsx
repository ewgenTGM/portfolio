import React from 'react';
import styles from './FeedbackForm.module.css';
import commonStyles from '../../common/CommonStyles.module.css';


type PropsType = {};

export const FeedbackForm = ( props: PropsType ) => {
  return (
      <div className={ [commonStyles.container, styles.feedback].join(' ') }>
        <h2 className={ commonStyles.section__title }>Связаться со мной</h2>
        <form className={ styles.form }>
          <input
              className={styles.form__input}
              type="text"
              placeholder={ 'Ваше имя' }/>
          <input
              className={styles.form__input}
              type="text"
              placeholder={ 'Ваш email' }/>
          <textarea
              className={styles.form__input}
              name=""
              id=""
              cols={ 30 }
              rows={ 10 }
              placeholder={ 'Ваше сообщение' }
          />
          <button className={ styles.button }>Отправить</button>
        </form>
      </div>
  );
};