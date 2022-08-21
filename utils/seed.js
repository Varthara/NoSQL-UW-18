const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
    users,
    thoughts
} = require('./data');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});


    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    process.exit(0);
})