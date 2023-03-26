import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
//import shortid from 'shortid';
import listsReducer from './listsRedux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import searchStringReducer from './searchStringRedux';


//selectors
//export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
//export const getAllColumns = state => state.columns;
//export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
//export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
//export const getAllLists = state => state.lists;
//export const getSearchString = state => state.searchString;
//export const getFavoriteCard = state => state.cards.filter((card) => card.isFavorite === true);

// action creators
//export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
//export const addCard = payload => ({ type: 'ADD_CARD', payload });
//export const updateSearchString = payload => ({ type: 'FILTER_SEARCHSTRING', payload });
//export const addList = payload => ({ type: 'ADD_LIST', payload });
//export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });


/*const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
}; */

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;