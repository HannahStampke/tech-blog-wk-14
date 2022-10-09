const {Post} = require("../models");

const postData = [
    {
        post_title: "I accidentally pooped on the bus!",
        post_content: "It was a stormy night and I'd drunk too much coffee that day...",
        user_id: 1,
        created_at: '2022-06-12T04:00:00.000Z'
    },
    {
        post_title: "I also pooped on the bus.",
        post_content: "I did it on purpose though...",
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;