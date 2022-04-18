// const express=require('express');
// const app=new express();
// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/src/views/index.html");
// });
// app.listen(5000);

const express=require('express');
const app=new express();
const nav=[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/admin',name:'Add Book'}
    
];
const PORT = process.env.PORT || 5000;
//  const booksRouter=require('./src/routes/bookRoutes')(nav);
  const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use(express.urlencoded({extended:true}));
 app.use(express.static('./public'));
 app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
//  app.use('/books',booksRouter);
  app.use('/admin',adminRouter);
app.get('/',function(req,res){
   // res.render("index",{
    //     nav,
    //     title:'Library'
    // }); 
    res.send("working")
});



app.listen(PORT, () => {
    console.log(`.....SERVER started at ${PORT}`)
});