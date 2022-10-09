const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('Database synced!');
    await userSeeds();
    console.log('Users seeded');
    await postSeeds();
    console.log('Posts seeded');
    await commentSeeds();
    console.log('Comments seeded');

    process.exit(0);
};

seedAll();