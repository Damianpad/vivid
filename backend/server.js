require('dotenv').config({path: './config/.env'})
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')

app.use(express.json());
app.use((req, res, next) => {
    // log out the path every time we get a request (for testing routes only)
    // console.log(req.path, req.method);
    next();
});

// grabs all of the different routes that are attached to the express router in the routes.js file
app.use("/api", routes);

app.use(express.urlencoded({extended: true}))

//connect to db
        // listen for requests - PORT defined in .env file
        app.listen(process.env.PORT, () => console.log(`🚀 Connected to DB & server ready at http://localhost:${process.env.PORT}`))