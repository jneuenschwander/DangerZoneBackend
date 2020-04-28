const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/crime')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/danger_zone',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('db is connected'))
.catch(err => console.log(err));

// settings 
app.set('port',process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json({type: "application/json"}))
//routes
app.use('/crimes', usersRoutes)

// start the server
app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});