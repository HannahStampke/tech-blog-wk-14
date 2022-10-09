const { User } = require("../models");

const userData = [
  {
    username: "olgaBolga69",
    password: "password69",
  },
  {
    username: "OzziBatChomper",
    password: "password123",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;