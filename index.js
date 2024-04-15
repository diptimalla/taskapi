
const http=require('node:http');
const express=require('express');
const dotenv=require('dotenv');
dotenv.config();  //load the environment variable from the .env file
//var { expressjwt: jwt } = require("express-jwt");

//
const {tasksRouter}=require('./routes/task-route');
//const {authRouter}=require('./routes/auth-routes');
const mongoose=require('mongoose');
const cors=require('cors');



//connect to database 
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database');
        console.error(error);
        process.exit(1);
    });




//create express app
const app=express();



//configure the middleware 
app.use(cors());
app.use(express.json());
//app.use("/api/books",jwt({secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), booksRouter);
app.use("/api/tasks",tasksRouter);





//start the server
const port = process.env.PORT ||5000;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`);
});