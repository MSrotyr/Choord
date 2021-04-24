const uploadLibrary = library => ({
  type: 'UPLOAD_LIBRARY',
  payload: library,
});


const updateComment = (_id, comment) => (
  {
    type: 'UPDATE_COMMENT',
    payload: {
      _id,
      comment,
    },
  }
);

const removeFromLibrary = _id => (
  {
    type: 'REMOVE_FROM_LIBRARY',
    payload: {
      _id,
    },
  });

module.exports = { updateComment, uploadLibrary, removeFromLibrary };
