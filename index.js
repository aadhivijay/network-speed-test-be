const app = require('./config/express');
const config = require('./config/config');

const port = config.port;

app.get('/', (req, res) => {
    res.send('Speed test is running!');
});

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

// request timeout
server.timeout = 30000;