import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Moja pierwsza React App</h1>
      <p className={styles.subtitle}>Prosta aplikacja ToDo z listami, kolumnami i kartami</p>
    </div>
  );
};

export default Hero;