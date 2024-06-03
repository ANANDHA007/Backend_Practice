const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')


const app=express()
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
app.use(express.json())

app.get('/convert',function(req,res){
    var farh=req.query.farh
    var cel=Number((farh-32)*5/9)
    console.log(cel)
    res.send("<h1>"+cel+"</h1>")

})

app.listen(5000,function(){
    console.log("Server is running")
})