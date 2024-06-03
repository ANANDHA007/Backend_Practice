const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const client =new MongoClient(url);
const ans=client.db('product').collection('details');
client.db('Dictionary').collection('words').insertOne({id:1,name:'ANANDHA KRISHNAN'});
var a=ans.find({id:1}).toArray()
.then(function(result){
    result.map(ak=>{
        console.log(ak.name);
    })
})

