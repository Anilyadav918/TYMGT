const express = require('express');

const { getSurveys } = require('../controllers/surveys');

const router = express.Router();

router
    .route('/')
    .get(getSurveys);


module.exports = router;    