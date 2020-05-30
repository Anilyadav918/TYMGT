const express = require('express');

const { getEmployees, createEmployee } = require('../controllers/employees');

const router = express.Router();

router
    .route('/')
    .get(getEmployees)
    .post(createEmployee);


module.exports = router;    