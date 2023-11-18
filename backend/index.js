import express, { request, response } from "express";
import { PORT } from "./config.js";
import {mongoDBURL} from './config.js';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
 
const app=express();

app.use(express.json()); //Middleware for parsing request body

//Middleware for using the cors policy :cross oriogin resource sharing 
//1.Allow all origins with the use of *
//2.allow only specified origins 
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('this is a tutorial')
}); //to get the routes and display error messages

//middleware to get the book routes
//i.e for each /books handle them with the routes thru this middleware

app.use('/books',booksRoute);

//connecting database to the project by using mongoose connect

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
    console.log('app is running on port: ${PORT}');
    });   //now app runs only if database is connected
})
.catch((error)=>{    //these blocks just there to check whether successfully connected or not
    console.log(error);
});

