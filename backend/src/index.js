const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


const routes = require('./routes');

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routes);

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})