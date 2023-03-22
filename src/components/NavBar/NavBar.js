import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.nav}>
          <span className={styles.icon + ' fa fa-tasks' } />
          <div className={styles.menu}>
            <a href="/">Home</a>
            <a href="/favorite">Favorite</a>
            <a href="/about">About</a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;