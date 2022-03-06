const express=require("express");
const app=express();
app.use(logger);

// app.get('/books',GameOfThrones,arryPotter,(req,res)=>{
//     console.log("last check");
//     return res.send({route:"/books",role:req.name });
// });


// function GameOfThrones(req,res,next){
//     console.log("test 1");
//     next()
//     console.log("test2 ");
// };
// function arryPotter(req,res,next){
//     console.log("test 3");
//     next()
//     console.log("test 4");
// };
app.get('/books',(req,res)=>{
    console.log("Fetching all books1");
});
app.get('/books/GameOfThrones',(req,res)=>{
    console.log("Fetching all books2");
    res.send({name:"/books/HarryPotter"})
});
app.get('/books/HarryPotter',(req,res)=>{
    console.log("Fetching all books3");
});




function logger(req,res,next)
{

    if(req.name==="/books"){
        req.name="books";
    }
    else if(req.name==="/books/GameOfThrones")
    {
        req.name="/books/GameOfThrones";
    }
    else{
        req.name="/books/HarryPotter";
    }
    console.log("before route handler");
    next();
}


app.listen(5000,()=>{
    console.log("listing on port 50000");
})