const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')


const app=express()
app.use(cors())
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(express.json())


const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client =new MongoClient(url);
app.get('/',function(req,res){
    client.db('Employee').collection('details').insertOne({id:10})
    .then(response=>{
        console.log("recieved")
    })
})
app.listen(5000,function(){
    console.log("sever is running")
})