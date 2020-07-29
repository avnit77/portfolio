import React from 'react';
import styles from './Tali.css';
import Icon from '../assets/Me.png';
import Arrow from '../assets/Arrow.png';

const Tali = () => {

  return (
    <section className={styles.Tali}>
      <img className={styles.Photo} src={Icon} alt='software developer'/>
      <img width='15%' height='35%' className={styles.Arrow} src={Arrow} alt='software developer'/>
      <div className={styles.Text}>
        <h1>Tali Avni</h1>
        <p>Software Developer</p>
      </div>
    </section>
  );

};

export default Tali;
