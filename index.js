import express from 'express';

const app = express();

const port = process.env.PORT || 3002;

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});

app.get('/api',(req,res)=>{
    res.send('Welcome to my API');
})

app.get('/hello',(req,res)=>{
    res.send('Hello World');
})

app.get("*",(req,res)=>{
    res.status(404)
    .send("There is no content at this route")
});


