const express = require("express");

const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    console.log("books ")
    return res.send({ route: "/books",role:req.role});
});
app.get("/libraries",(req,res)=>{
    console.log("libraries");
    return res.send({ route: "/libraries",Permission:req.role});
});

app.get("/authors",(req,res)=>{
    return res.send({route:"/authors",permission:req.role});
})


function logger(req,res,next){
    if(req.path==="/books"){
        req.role="true";
    }
    else  if(req.path==="/libraries"){
        req.role="true";
    }
    else if(req.path==="/authors"){
        req.role="true";
    }
    next();
}



app.listen(50000,()=>{
    console.log("check check");

});