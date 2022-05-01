let bodyParser = require('body-parser');
let express = require('express');
let app = express();

const port = 3000

console.log("Hello World!");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
})
