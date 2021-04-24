const uploadLibrary = library => {
  console.log(library);
  return ({
    type: 'UPLOAD_LIBRARY',
    payload: library,
  });
};

const updateComment = (_id, comment) => (
  {
    type: 'UPDATE_COMMENT',
    payload: {
      _id,
      comment,
    },
  }
);

module.exports = { updateComment, uploadLibrary };
