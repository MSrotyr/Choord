import { combineReducers } from 'redux';

const INITIAL_STATE_LIBRARY = [];

const library = (state = INITIAL_STATE_LIBRARY, action) => {
  switch (action.type) {
    case 'UPLOAD_LIBRARY':
      return action.payload;

    case 'UPDATE_COMMENT':
      return (state.map(chord => {
        if (chord._id === action.payload._id) {
          const updatedChord = { ...chord, comment: action.payload.comment };
          return updatedChord;
        }
        return chord;
      }));

    case 'REMOVE_FROM_LIBRARY':
      return (state.filter(chord => chord._id !== action.payload._id));

    case 'ADD_TO_LIBRARY':
      return [...state, action.payload];

    default:
      return state;
  }
};

const INITIAL_STATE_CHORDFINDER = { key: '', suffix: '' };
const chordFinder = (state = INITIAL_STATE_CHORDFINDER, action) => {
  switch (action.type) {
    case 'UPDATE_KEY_OR_SUFFIX':
      return action.payload.mode === 'key'
        ? { key: action.payload.key, suffix: state.suffix }
        : { key: state.key, suffix: action.payload.suffix };
    case 'FOUND_CHORD':
      return { ...state, chordData: action.payload };
    default: return state;
  }
};

export default combineReducers({
  library,
  chordFinder,
});
