import apiService from './apiService';

function uploadLibrary() {
  return async (dispatch) => {
    const library = await apiService.getLibrary();
    dispatch({
      type: 'UPLOAD_LIBRARY',
      payload: library,
    });
  };
}

function updateComment(_id, comment) {
  return async (dispatch, getState) => {
    const chord = await apiService.updateComment(_id, comment);
    dispatch({
      type: 'UPDATE_COMMENT',
      payload: chord,
    });
  };
}

function removeFromLibrary(_id) {
  return async (dispatch, getState) => {
    apiService.removeFromLibrary(_id);
    dispatch({ type: 'REMOVE_FROM_LIBRARY', payload: { _id } });
  };
}

function addToLibrary(chordData) {
  return async (dispatch, getState) => {
    const chord = await apiService.addToLibrary(chordData);
    dispatch({ type: 'ADD_TO_LIBRARY', payload: chord });
  };
}

module.exports = {
  updateComment, uploadLibrary, removeFromLibrary, addToLibrary,
};
