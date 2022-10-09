const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Hello! I love commenting!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "These comments are sexy!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Don't make me give you rabies! >:(",
    user_id: 3,
    post_id: 3,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;