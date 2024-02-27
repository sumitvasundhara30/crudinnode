const express=require('express');
const homeRoute=require('./routes/home');
const mongoose=require('mongoose');
const app=new express();
const port=5000;
const bodyParser=require('body-parser');
const keys = {
    mongoURI: 'mongodb://localhost:27017'
  };
  
mongoose.connect(keys.mongoURI,{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',(err)=>
{
    console.log("error to connect to database:",err);
});
db.once('open',()=>{
    console.log("mongodb connected successfully")
});

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',homeRoute);
app.get('/',(req,res)=>
{
    res.send('hello world');    
});
app.listen(port,()=>
{
    console.log(`listening on port :${port}`)
});