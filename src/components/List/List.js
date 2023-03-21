import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';

const List = props => {

  const columns = useSelector(getAllColumns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rzeczy do zrobienia<span>soon</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <div className={styles.columns}>
        {columns.map(column => 
        <Column 
          key={column.id} 
          {...column} />)}
      </div>
      <ColumnForm />
    </div>
  );
};

export default List;