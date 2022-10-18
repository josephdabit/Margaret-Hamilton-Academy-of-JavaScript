const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET for /api/campuses
router.get('/', async (req, res, next) => {
    try {
        res.send(await Campus.findAll({include: [Student]}))
    } catch (err) {
        next(err)
    }
});

module.exports = router