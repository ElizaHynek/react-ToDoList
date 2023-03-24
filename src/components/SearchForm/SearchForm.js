import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, getSearchString } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();

  const defaultPhrase = useSelector(getSearchString);
  const [phrase, setPhrase] = useState(defaultPhrase);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(phrase));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Wpisz tekst..." value={phrase} onChange={e => setPhrase(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;