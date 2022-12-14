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

// DELETE for /api/students/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteStudent = await Student.findByPk(id);
        res.send(await deleteStudent.destroy());
    } catch (err) {
        next(err)
    }
});

// PUT for /api/students/:id
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateStudent = await Student.findByPk(id);
        res.send(await updateStudent.update(req.body));
    } catch (err) {
        next(err)
    }
});

module.exports = router