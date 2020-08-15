const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const port = 3000;
const app = new express();
let newItem= ["Eat Food", "Take Enough Sleep"];
let workItem = [""];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get("/", function(req , res){

    
let formatTime = date.getDate();

res.render("list",{typeOfList : formatTime , newItems : newItem});
});

app.get("/work" , function(req , res){
    res.render("list", {typeOfList : "Work List" , newItems : workItem});
});

app.post("/", function(req , res){
    console.log(req.body);
    var item = req.body.item;
    if(req.body.list === "work"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        newItem.push(item);
        console.log(newItem);
        res.redirect("/");
    }
    
    
})

app.listen(port , function(){
    console.log("App is listening at port "+port);
});