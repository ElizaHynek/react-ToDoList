import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';


const Card = props => {

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };
  const removeClick = e => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.cards}>
      {props.title}
      <div>
        <button
          onClick={handleClick}
          className={clsx(styles.button, props.isFavorite && styles.isActive)}>
          <i className={'fa fa-star-o'} />
        </button>
        <button onClick={removeClick } className={styles.button}>
          <i className={styles.icon + ' fa fa-trash-o'} />
        </button>
      </div>
    </li>
  );
};

export default Card;
