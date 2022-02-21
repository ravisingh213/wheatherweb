const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");

// serve static file
let staticpath = path.join(__dirname,"../public");
// console.log(staticpath);
app.use(express.static(staticpath))

// set the template engine
app.set('view engine','hbs');

//set the path of views dir
let viewpath = path.join(__dirname,'../templates/views');
app.set('views',viewpath);

//register partial file
let partialspath = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialspath);

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/about',(req,res)=>{
    res.render("about");
})

app.get('/wheather',(req,res)=>{
    res.render("wheather");
})

app.get('*',(req,res)=>{
    res.render("404");
})

app.listen(3000,'127.0.0.1');