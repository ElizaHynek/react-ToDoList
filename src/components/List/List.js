import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState, } from 'react';
import shortid from 'shortid';

const List = () => {

  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', icon: 'list' },
    { id: 2, title: 'In progress', icon: 'hourglass' },
    { id: 3, title: 'Done', icon: 'check' },
  ]);

  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon }]);
  };


  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rzeczy do zrobienia<span>soon</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <div className={styles.columns}>
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
      </div>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;