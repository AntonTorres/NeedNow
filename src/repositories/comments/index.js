const selectCommentBySerAndUser = require("./selectCommentBySerAndUSer");
const insertComment = require("./insertComment");
const deleteCommentBySerAndUser = require("./deleteCommentBySerAndUser");
const deleteComment = require("./deleteComment");
const updateComment = require("./updateComment");

module.exports = {
  selectCommentBySerAndUser,
  insertComment,
  deleteCommentBySerAndUser,
  deleteComment,
  updateComment,
};
