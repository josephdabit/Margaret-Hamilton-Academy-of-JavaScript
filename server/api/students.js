const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET for /api/students
router.get('/', async (req, res, next) => {
    try {
        res.send(await Student.findAll({include: [Campus]}))
    } catch (err) {
        next(err)
    }
});

module.exports = router