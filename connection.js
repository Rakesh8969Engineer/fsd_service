const mongoose=require('mongoose');
// creating a database
mongoose.connect("mongodb://localhost:27017/Rakeshdynamic").then(()=>{
    console.log("connection with database is established successfully");

}).catch((err)=>{
console.log("there is some error while connecting with databse"+err);


});
