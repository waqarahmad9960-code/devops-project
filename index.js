const express = require('express');
const os = require('os');

const app = express();

let visitors = 0;

app.get('/', (req, res) => {
    visitors++;

    res.send(`
        <h1>DevOps Project Running</h1>
        <p>Timestamp: ${new Date()}</p>
        <p>Container ID: ${os.hostname()}</p>
        <p>Visitors: ${visitors}</p>
    `);
});

app.get('/health', (req, res) => {
    res.send('Healthy');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});