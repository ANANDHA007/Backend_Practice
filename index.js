const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const sql=require('mysql');
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ita"
});




const app=express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.post('/signin',function(req,res){
    var user=req.body.username;
    var pass=req.body.password;
    client.db('assessment').collection('signin').insertOne({
        username: user,
        password: pass
    })
    res.send("successfully registered");
    
})

app.get('/nandhitha',function(req,res){
    var emailid="nandhithart@gmail.com"
    var a=req.query.email
    if(emailid==a){
        res.send("already exist")
    }
    else{
        res.send("successfull inserted")
    }
})

app.post('/checking',function(req,res){
    pass=req.body.password
    res.send(pass)
})

app.get('/',function(req,res){
    var name=req.query.name;
    var number=req.query.number;
    console.log(name);
    
    con.connect(function(err,result){
        var sql="insert into details (id,address) values ?";
        var sql2="SELECT address from details where id=10";
       
        
        var values=[[number,name]];
        con.query(sql,[values]);
        console.log("done");
        con.query(sql2,function(err,result){
            if (err) throw err;
            console.log("connected");
        });
        
    })
})
app.get('/mon', function(req, res) {
    console.log("got inside");
   

    res.send("completed");
});

app.post('/palindrome',function(req,res){
    var sme=req.body.name;
    var smd=req.body.id;
    console.log(sme+""+smd);
    res.send(sme);
    
})
app.post("/blooddonar",function(req,res){
    var name=req.body.name;
  
    var age=req.body.age
    var bloodGroup=req.body.bloodGroup
    var city=req.body.city

    var phonenumber=req.body.phonenumber
    client.db('bloodapp').collection('donar').insertOne({name:name,age:age,bloodGroup:bloodGroup,city:city,phonenumber:phonenumber})
    .then(respons=>{
        console.log("inserted");
        res.send("true")
    })

})
app.post('/finddonar',function(req,res){
    var bloodGroup=req.body.bloodGroup
    client.db('bloodapp').collection('donar').find({bloodGroup:bloodGroup}).toArray()
    .then(response=>{
        res.send(response)
        console.log("founded")
    })
})

app.listen(5000,function(){
    console.log("sever is running");
})

app.post('/predict',function(req,res){
    var a=req.body.review
    console.log(a)
    res.send(a);
})
app.get('/oddeven',function(req,res){
    var number = req.query.number
    if(number%2==0){
        res.send("<h1>It is a even number</h1>")
    }
    else{
        res.send("<h1>odd number</h1>")
    }
})

