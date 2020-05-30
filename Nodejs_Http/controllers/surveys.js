
const Survey = require('../models/Survey');

exports.getSurveys = async (req, res, next) => {
    try {
        const surveys = await Survey;
        res.status(200).json({success: true, count: surveys.length, data: surveys});
    } catch (err) {
        res.status(400).json({success:false});
    }
}