const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET for /api/students
router.get('/', async (req, res, next) => {
    try {
        res.send(await Student.findAll())
    } catch (err) {
        next(err)
    }
});

// GET for /api/students/:id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        res.send(await Student.findByPk(id, {include: [Campus]}))
    } catch (err) {
        next(err)
    }
});

// POST for /api/students
router.post('/', async (req, res, next) => {
    try {
        res.send(await Student.create(req.body))
    } catch (err) {
        next(err)
    }
});

module.exports = router