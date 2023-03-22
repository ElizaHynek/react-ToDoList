import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Moja pierwsza React App</PageTitle>
      <p className={styles.subtitle}>Prosta aplikacja ToDo z listami, kolumnami i kartami</p>
    </div>
  );
};

export default Hero;