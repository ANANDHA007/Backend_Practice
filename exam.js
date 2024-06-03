const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.get('/',function(req,res){
    res.send("hello");
})
app.post('/login',function(req,res){
    var a=req.body.username;
    var b=req.body.password;
    console.log(a+" "+b+" post done");
    res.send(a+" "+b);
})

app.listen(5000,function(){
    console.log("sever is running");
})