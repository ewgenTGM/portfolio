import React from 'react';
import styles from './Project.module.css';

export type ProjectPropsType = {
  id: string
  title: string
  icon: string
  desc: string
};

export const Project: React.VFC<ProjectPropsType> = props => {
  const {
    title,
    icon,
    desc
  } = props;

  return (
      <div className={ styles.project }>
        <div className={ styles.project__icon_box }>
          <div className={ styles.project__icon }/>
        </div>
        <div className={ styles.project__title }>
          <h3>{ title }</h3>
        </div>
        <div className={ styles.project__desc }>
          <span>{ desc }</span>
        </div>
      </div>
  );
};