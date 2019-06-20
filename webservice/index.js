const express = require('express');
const app = express();
const port = 8000;

app.set('port', process.env.port || port); // set express to use this port

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});