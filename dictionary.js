const express=require('express')

const bodyParser=require('body-parser');

const app=express();
const cors=require('cors')
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended:true
}))

app.post("/dictsearch",function(req,res){


    let word=req.body.word;
    
    console.log("uuuuu"+word)

    

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      vardbo = db.db("Dictionary");

      var query = { word:word };
      dbo.collection("words").find(query).toArray(function(err, result) {
        if (err) throwerr;
        console.log(result);
      res.send("<h1> Meaning of the  word "+word+" is "+result[0].meaning+"</h1>");

          
      

        db.close();

       
      });
    });


})

 
app.listen(5000,function(){
    console.log("Server is running on port number 5000")
})
