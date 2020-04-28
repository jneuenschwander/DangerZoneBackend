const Crime = require('../models/crime');


module.exports = {
    index: async(req, res, next) => {
        const crimes = await Crime.find({});
        res.status(200).json(crimes);
    },






};