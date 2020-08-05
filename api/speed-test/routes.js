const express = require('express');
const validator = require('express-validation');
const controllers = require('./controller');
const validations = require('./validate');

const router = express.Router();

// download speed test
router.route('/speed-test').get(
    controllers.downloadTest
);

// upload speed test
router.route('/speed-test').post(
    validator.validate(validations.uploadTest),
    controllers.uploadTest
);

module.exports = router;