import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; //for storing environment variable

import PublicRoute from './routes/v1/public/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb connection url
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.usk5q3y.mongodb.net/`;

// Database name
const mongoDB_database_name = "blogAssignment";

// mongoDB connection
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: mongoDB_database_name
})
    .then(() => {
        console.log('Mongoose/ mongodb connection is ok.');
    })
    .catch((error) => {
        console.error('Error in mongoose connection. Error: ', error);
    });


//Welcome route
app.get('/', (req, res) => {
    res.send('Welcome in Blog Website!');
})

// All public routes
app.use('/v1/public', PublicRoute);


//No route
app.all("*", (req, res) => {
    const route = req.params;
    res.send(`No Route found in "${route[0]}" !`);
})


// listening app
app.listen(port, () => {
    console.log(`Blog Website Server is running`);
})