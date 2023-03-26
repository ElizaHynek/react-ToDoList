//selectors
export const getSearchString = state => state.searchString;

// action
const createActionName = actionName => `app/lists/${actionName}`;
const FILTER_SEARCHSTRING = createActionName('FILTER_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({ type: FILTER_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case FILTER_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;