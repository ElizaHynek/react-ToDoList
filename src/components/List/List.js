import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState, } from 'react';
import shortid from 'shortid';

const List = props => {

  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do',
      icon: 'list',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'In progress',
      icon: 'hourglass',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Done',
      icon: 'check',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
      else
        return column
    })
  
    setColumns(columnsUpdated);
  };
  

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rzeczy do zrobienia<span>soon</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <div className={styles.columns}>
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} cards={column.cards} action={addCard} />)}
      </div>
      <ColumnForm columnId={props.id} action={addColumn} />
    </div>
  );
};

export default List;