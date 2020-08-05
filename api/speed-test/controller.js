const config = require('../../config/config');

function generateRandomData(sizeInBytes) {
    let data = '';
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    for (let index = 0; index < sizeInBytes; index += 1) {
        data += charSet[Math.round(Math.random() * (charSet.length - 1))];
    }
    return data;
}

async function downloadTest(req, res) {
    return res.send(generateRandomData(config.DATA_SIZE_KB * 1024));
}

async function uploadTest(req, res) {
    return res.sendStatus(200);
}

module.exports = {
    downloadTest,
    uploadTest
};
