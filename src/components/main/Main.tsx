import React from 'react';
import styles from './Main.module.css';
import Greeting from '../greeting/Greeting';
import { Skills } from '../skills/Skills';
import { Projects } from '../projects/Projects';
import { FeedbackForm } from '../feedbackForm/FeedbackForm';
import { Footer } from '../footer/Footer';

type PropsType = {};

const Main = ( props: PropsType ) => {
  return (
      <main className={ styles.main }>
        <Greeting/>
        <Skills/>
        <Projects/>
        <FeedbackForm/>
        <Footer/>
      </main>
  );
};

export default Main;