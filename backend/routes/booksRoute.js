import express from "express";
import { Book } from "../models/bookModel.js";

const router= express.Router();


//save books with mongoose
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||                              //if the user doesnt fill all the details then an error messageis displayed 
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newBook={
            title: request.body.title,
            author: request.body.title,
            publishYear: request.body.publishYear,
        };

        const book= await Book.create(newBook);      

        return response.status(201).send(book);

    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
    //we delete '/books' because now we r doing it thru middleware in index.js
//get books with mongoose
router.get('/', async(request,response)=>{
    try{
        const books=await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books,
    });
    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one book by id
router.get('/:id', async(request,response)=>{
    try{

        const {id}= request.params; //parameters to send additional data in REST APIs


        const bookid=await Book.findById(id);

        return response.status(200).json(bookid);
    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to update a book
router.put('/:id',async(reques,response)=>{
    try{

        if(!request.body.title ||
           !request.body.author ||
           !request.body.publishYear)
           {
             return response.status(400).send({
                message: 'Send all required fields'
             });
           }

           const {id} =request.params;

           const result = await Book.findByIdAndUpdate(id, request.body);

           if(!result)
           {
            return response.status(404).json({message: 'Book not found'});
           }
           return response.status(200).send({message: 'Book updated successfully'});
    }
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to delete a book
router.delete('/:id',async(request,response)=>{
    
    try{

        const {id}= request.params;

        const result= await Book.findByIdAndDelete(id);

        if(!result)
        {
         return response.status(404).json({message: 'Book not found'});
        }
        return response.status(200).send({message: 'Book deleted successfully'});

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


export default router;