const Joi = require('joi');

module.exports = {
    uploadTest: {
        body: Joi.object({
            message: Joi.string().required()
        })
    }
};
