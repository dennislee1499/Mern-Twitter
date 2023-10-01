const { check } = require('express-validator');
const handleValidationErrors = require('./handleValidationErrors');

const validateTweetInput = [
    check('text')
        .exists({checkFalsy: true})
        .isLength({min: 5, max: 200})
        .withMessage("Tweets must be between 5 and 200 characters"),
    handleValidationErrors
];

 

module.exports = validateTweetInput;