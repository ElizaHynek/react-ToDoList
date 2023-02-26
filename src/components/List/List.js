import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rzeczy do zrobienia<span>wkrótce</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <div className={styles.columns}>
        <Column title="Do zrobienia" icon="list" />
        <Column title="W trakcie" icon="hourglass" />
        <Column title="Zrobione" icon="check" />
      </div>
    </div>
  );
};

export default List;