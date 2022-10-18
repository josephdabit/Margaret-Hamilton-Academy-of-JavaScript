const router = require('express').Router();
const { Student, Campus } = require('../db');

// GET for /api/campuses
router.get('/', async (req, res, next) => {
    try {
        res.send(await Campus.findAll())
    } catch (err) {
        next(err)
    }
});

// GET for /api/campuses/:id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        res.send(await Campus.findByPk(id, {include: [Student]}))
    } catch (err) {
        next(err)
    }
});

module.exports = router