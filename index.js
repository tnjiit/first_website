let express = require('express');
let app = express();

const port = process.env.PORT || 8080;

console.log("Hello World!");

app.get('/', (req, res) => {
    console.log('Saw a request');
    res.json({
        status: 200,
        message: "Hello World!"
    })
    // res.sendFile(__dirname + '../views/index.html');
});

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
});
