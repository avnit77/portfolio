import React from 'react';
import styles from './Tali.css';
import Icon from '../assets/Me.png';

const Tali = () => {

  return (
    <section className={styles.Tali}>
      <img width='500px' src={Icon} alt='software developer'/>
      <h1>Tali Avni</h1>
      <p>Software Developer</p>
    </section>
  );

};

export default Tali;
