import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {

  const cards = useSelector(getFavoriteCard);

  if (cards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>No cards...</PageTitle>
      </div>
    );
  }

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;