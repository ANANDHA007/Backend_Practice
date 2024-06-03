
const mongoose=require('mongoose');
const url="mongodb://localhost:27017/assessment";

mongoose.connect(url).then(()=>{
    
    console.log("jellp");   
    // Your code to interact with the database goes here
});
