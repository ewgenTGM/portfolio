import React from 'react';
import styles from './Skills.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import Skill, { SkillPropsType } from '../skill/Skill';

type PropsType = {};

const skillsList: Array<SkillPropsType> = [
  {
    title: 'Html',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/html.svg'
  },
  {
    title: 'Css',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/css.svg'
  },
  {
    title: 'JavaScript',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/js.svg'
  },
  {
    title: 'React',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/react.svg'
  },
  {
    title: 'NodeJS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/nodejs.svg'
  },
  {
    title: '.Net',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/dotnet.svg'
  }
];

export const Skills: React.VFC<PropsType> = props => {
  return (
      <section className={ [ commonStyles.container, styles.skills ].join( ' ' ) }>
        <h2 className={ commonStyles.section__title }>Мои навыки</h2>
        <div className={ styles.skills__box }>
          { skillsList.map( skill => (
              <Skill
                  title={ skill.title }
                  icon={ skill.icon }
                  desc={ skill.desc }/>
          ) ) }
        </div>
      </section>
  );
};