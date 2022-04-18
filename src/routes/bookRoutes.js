const express=require('express');
const booksRouter=express.Router();
// var books=[
//     {
//         title:'Tom and Jerry',
//         author:'Joseph Barbers',
//         genre:'Cartoon',
//         img:"tom.jpg"
//     },
//     {
//         title:'Harry Potter',
//         author:'J K Rowling',
//         genre:'Fantasy',
//         img:"harry.jpg"
//     },
//     {
//         title:'Balyakala Sakhi',
//         author:'Basheer',
//         genre:'Fiction',
//         img:"basheer.jpg"
//     }
// ]
booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,
        title:'Library',
        books
    });
});
booksRouter.get('/:id',function(req,res){
    const id=req.params.id
    res.render("book",{
        nav,
        title:'Library',
        book:books[id]
    });
});
module.exports=booksRouter;