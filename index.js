let express = require('express');
let app = express();

const port = process.env.PORT || 8080;

console.log("Hello World!");

app.use('/public', express.static(__dirname + '/public'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get('/', (req, res) => {
    console.log('Saw a request');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    res.json({
        message: "Hello json"
    });
});

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
});

module.exports = app;
