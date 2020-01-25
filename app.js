const express = require('express');
const path = require('path');
const PORT = process.env.PORT || '8000';

const app = express();

app
.use(express.static(path.join(__dirname, 'public')));

const http = require('http');
app.set('port',PORT);
const server = http.createServer(app);

server.listen(PORT);

server.on('listening', () => {
    console.log(`Listening at port ${PORT}`);
});