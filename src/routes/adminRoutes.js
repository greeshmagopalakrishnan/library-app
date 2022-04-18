const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');



adminRouter.post('/add',async function (req, res) {
    try {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
    
        }
        var book = await Bookdata(item);
        book.save();
        res.redirect('/books'); 
    } catch (error) {
        console.log(error)
    }
}) ;


module.exports = adminRouter;