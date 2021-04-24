

const updateComment = (_id, comment) => (
  {
    type: 'UPDATE_COMMENT',
    payload: {
      _id,
      comment,
    },
  }
);

module.exports = { updateComment };
