import React from 'react';
import styles from './Projects.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import { Project, ProjectPropsType } from '../project/Project';

type ProjectsPropsType = {};

const projectsList: Array<ProjectPropsType> = [
  {
    title: 'Project 001',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/project.jpg'
  },
  {
    title: 'Project 002',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/project.jpg'
  },
  {
    title: 'Project 003',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/project.jpg'
  },
  {
    title: 'Project 004',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/project.jpg'
  },
  {
    title: 'Project 005',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
    icon: 'img/project.jpg'
  }

];

export const Projects: React.VFC<ProjectsPropsType> = props => {
  return (
      <section className={ [ commonStyles.container, styles.projects ].join( ' ' ) }>
        <h2 className={ commonStyles.section__title }>Мои проекты</h2>
        <div className={ styles.projects__box }>
          { projectsList.map( project => (
              <Project
                  title={ project.title }
                  icon={ project.icon }
                  desc={ project.desc }/>
          ) ) }
        </div>
      </section>
  );
};