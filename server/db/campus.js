const Sequelize = require('sequelize');
const db = require('./database');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'https://img2.storyblok.com//f/64062/992x736/b1f6d2c25f/campus-a1.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: Sequelize.TEXT,
    }
});

module.exports = Campus