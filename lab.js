const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client =new MongoClient(url);
const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:true
}))
var nodemailer=require('nodemailer')
app.use(express.json())
const mail=require('nodemailer')
let transporter=mail.createTransport({
    service:'Outlook365',
    auth:{
    user:'anandhakrishnan.21it@sonatech.ac.in',
    pass:'12302Krishnan'
    }
})
app.get('/mailcheck',function(req,res){
    var mail=req.query.mail
    var mail1="anandha@gmail.com"
    if(mail==mail1){
        res.send("it is already exist")
    }
    else {
        res.send("it doesnt exist go ahead")
    }
})
app.get('/message',function(req,res){
    var message=req.query.mess
    let mailOptions={
        from:'anandhakrishnan.21it@sonatech.ac.in',
        to:'12302anandhakrishnanas@gmail.com',
        subject:'Hello',
        text:message
    }

    transporter.sendMail(mailOptions,function(error,info){
        if(info){
            res.send(info.response)
        }
        if(error){
            res.send(error.message)
        }
    })
})
app.get('/',function(req,res){
    var name=req.query.name
    res.send("<h1> Hi "+name+ " Welcome  to Node JS</h1>");
})
app.get('/:name/:number',function(req,res){
    var name=req.params['name']
    var number=req.params['number']
    res.send("<h1> Hi "+name+" Welcome  to Node JS "+number+" is added</h1>");
})
app.get('/oddeven',function(req,res){
    var a=req.query.number;
    if(Number(a)%2==0){
        res.send("even number");
    }
    else{
        res.send("odd number");
    }
})
app.get("/string",function(req,res){
    var  a=req.query.inputstring
    let rev=''
    for (let i = a.length - 1; i >= 0; i--) {
        rev += a[i];
    }
    var message="NOT A PALLINDROME";
    if (rev === a) {
        message="PALLINDROME";
    } 
    res.send(message);
    
})

app.get('/countstring',function(req,res){
    var string=req.query.inputString
    var lowerstring=string.toLowerCase()
    var countvowel=0;
    var countcons=0;
    for(let i=0;i<lowerstring.length;i++){
        if(lowerstring[i]=='a'||lowerstring[i]=='e'||lowerstring[i]=='i'||lowerstring[i]=='o'||lowerstring[i]=='u'){
            countvowel++;
        }
        else{
            countcons++;
        }
       
    }
    const array = string.trim().split(/\s+/); 
    res.send("<h1>vowels"+countvowel+"cons"+countcons+"Size"+array.length+"<h1>")
})


app.get('/meaning',function(req,res){
    var inputString=req.query.inputString
    client.db('Dictionary').collection('words').find({word:inputString}).toArray()
    .then(result=>{
        res.send(result[0].meaning);
    })
})
app.post('/insertemployee',function(req,res){
    var name=req.body.name
    var id=req.body.id
    var exp=req.body.experience
    console.log(name+" "+id+" "+exp)
    var obj={name:name,id:id,experience:exp}
    client.db('Employee').collection('details').insertOne(obj)
   res.send("recieved");
})


app.post('/updateemployee',function(req,res){
    var name=req.body.name
    var id=req.body.id
    var exp=req.body.experience
    console.log(name+" "+id+" "+exp)
    var obj={id:id}
    var obj2={$set:{name:name,id:id,experience:exp}}
    client.db('Employee').collection('details').updateMany(obj,obj2)
   res.send("recieved");
})

app.post('/selectemployee',function(req,res){
  
    var id=req.body.id
    client.db('Employee').collection('details').find({id:id}).toArray()
    .then(res=>{
        console.log(res[0].id+" "+res[0].name+" "+res[0].experience)
    })
   res.send("recieved");
})
app.post('/deleteemployee',function(req,res){
  
    var id=req.body.id
    client.db("Employee").collection('details').deleteOne({id:id})
    
   res.send("deleted");
})


app.get('/sendmail',function(req,res){
    console.log("started")
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
          user: '12403akalyansb@gmail.com',
          pass: 'Akalyansb@123'
        }
      });
      
      var mailOptions = {
        from: '12403akalyansb@gmail.com',
        to: 'jayasimma2580@gmail.com',
        subject: 'marks in cie',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})
app.listen(5000,function(){
    console.log("server is running ");
})
