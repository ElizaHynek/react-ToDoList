import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

  const dispatch = useDispatch();
  const [phrase, setPhrase] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'FILTER_SEARCHPHRASE', payload : phrase });
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