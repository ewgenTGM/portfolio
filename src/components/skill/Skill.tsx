import React from 'react';
import styles from './Skill.module.css';

export type SkillPropsType = {
  id: string
  title: string
  icon: string
  desc: string
};

const Skill: React.VFC<SkillPropsType> = props => {
  const {
    title,
    icon,
    desc
  } = props;

  return (
      <div className={ styles.skill }>
        <div>
          <img
              className={ styles.skill__icon }
              src={ icon }
              alt={ title }/>
        </div>
        <div className={ styles.skill__title }>
          <h3>{ title }</h3>
        </div>
        <div className={ styles.skill__desc }>
          <span>{ desc }</span>
        </div>
      </div>
  );
};

export default Skill;