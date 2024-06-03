const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')


const app=express()

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({
   extended:true 
}))

app.get('/pallindrome',function(req,res){
    var str=req.query.string
    var string="";
    for(var i=str.length-1;i>=0;i--){
        string+=str[i]

    }
    if(string===str){
        res.send("It is a pallindrome"+ string)
    }
    else{
        res.send("not a pallindrome "+ string)
    }
})
app.listen(5000,function(){
    console.log("serving is deployed")
})