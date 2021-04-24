import { combineReducers } from 'redux';
import apiService from './apiService';

const INITIAL_STATE = [];

const library = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOAD_LIBRARY':
      return action.payload;

    case 'UPDATE_COMMENT':
      apiService.updateComment(action.payload._id, action.payload.comment);
      return (state.map(chord => {
        if (chord._id === action.payload._id) {
          const updatedChord = { ...chord, comment: action.payload.comment };
          return updatedChord;
        }
        return chord;
      }));

    case 'REMOVE_FROM_LIBRARY':
      apiService.removeFromLibrary(action.payload._id);
      return (state.filter(chord => chord._id !== action.payload._id));

    default: return state;
  }
};

export default combineReducers({
  library,
});
