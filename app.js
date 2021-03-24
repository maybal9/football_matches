const express = require('express');
const matchesRouter = require('./routes/matches');

const app = express();

//Middlewares
app.use('/', matchesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});

