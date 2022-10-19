const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'https://www.acs-md.com/wp-content/uploads/2015/09/Unpictured.png'
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            isDecimal: true,
            min: 0.0,
            max: 4.0,
        },
    }
});

module.exports = Student