import React from 'react';
import styles from './Skills.module.css';
import commonStyles from '../../common/CommonStyles.module.css';
import Skill, {SkillPropsType} from '../skill/Skill';
import css_img from './img/css.svg';
import dotnet_img from './img/dotnet.svg';
import html_img from './img/html.svg';
import js_img from './img/js.svg';
import nodejs_img from './img/nodejs.svg';
import react_img from './img/react.svg';

type PropsType = {};

const skillsList: Array<SkillPropsType> = [
    {
        id: '001',
        title: 'Html',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: html_img
    },
    {
        id: '002',
        title: 'Css',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: css_img
    },
    {
        id: '003',
        title: 'JavaScript',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: js_img
    },
    {
        id: '004',
        title: 'React',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: react_img
    },
    {
        id: '005',
        title: 'NodeJS',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: nodejs_img
    },
    {
        id: '006',
        title: '.Net',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet autem beatae commodi consectetur cumque distinctio enim fuga fugiat ipsum libero',
        icon: dotnet_img
    }
];

export const Skills: React.VFC<PropsType> = props => {
    return (
        <section className={[commonStyles.container, styles.skills].join(' ')}>
            <h2 className={commonStyles.section__title}>Мои навыки</h2>
            <div className={styles.skills__box}>
                {skillsList.map(skill => (
                    <Skill
                        key={skill.id}
                        id={skill.id}
                        title={skill.title}
                        icon={skill.icon}
                        desc={skill.desc}/>
                ))}
            </div>
        </section>
    );
};