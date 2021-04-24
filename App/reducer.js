import { combineReducers } from 'redux';
import apiService from './apiService';

const INITIAL_STATE = [];

const library = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPLOAD_LIBRARY':
      return action.payload;

    case 'UPDATE_COMMENT':
      apiService.updateComment(action.payload._id, action.payload.comment);
      return (state.map((chord) => {
        if (chord._id === action.payload._id) {
          const updatedChord = { ...chord, comment: action.payload.comment };
          return updatedChord;
        }
        return chord;
      }));

    default: return state;
  }
};

export default combineReducers({
  library,
});
