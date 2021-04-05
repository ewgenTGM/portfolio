import React from 'react';
import styles from './Remote.module.css';
import commonStyles from '../../common/CommonStyles.module.css';

type PropsType = {

};

export const Remote = ( props: PropsType ) => {
  return (
      <div className={[ commonStyles.container, styles.remote ].join( ' ' )}>
        <h2 className={commonStyles.section__title}>Рассматриваю варианты удаленной работы</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis culpa dolores dolorum enim molestias
           omnis pariatur, provident qui rem rerum sequi, soluta veniam. Deserunt nisi non soluta unde ut!</span>
      </div>
  );
};