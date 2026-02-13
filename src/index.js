const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/BaseError');
const errorHandler = require('./utils/errorHandler');
const { connect } = require('mongoose');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ message: "problem service is alive" });
});


//last middleware if error came
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB();
    console.log('successfully connected to db');
});