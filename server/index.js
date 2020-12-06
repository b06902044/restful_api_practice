const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');

//set up express app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.connection.on('error', err => {
    console.log(err);
})
mongoose.connection.once('open', () => {
    console.log("connection make");
})

//app.use(cors());
//app.use(express.static('../public'));

app.use(express.json());

app.use('/api', routes);

//error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})

//listen for requests
app.listen(process.env.port || 3000, () => {
    console.log("listening the port 3000");
})