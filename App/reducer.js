import { combineReducers } from 'redux';

const INITIAL_STATE = [];

const library = (state = INITIAL_STATE, action) => {
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

export default combineReducers({
  library,
});
