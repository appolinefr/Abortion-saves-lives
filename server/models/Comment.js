const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  commentTitle: {
    type: String,
    maxLength: 30,
    required: true,
    trim: true,
  },
  commentBody: {
    type: String,
    minLength: 20,
    maxLength: 300,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
