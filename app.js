const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const app = express();
// const port = process.env.PORT || 9000 ;  
// setting path
const staticpath = path.join(__dirname ,"../public");
const templatepath = path.join(__dirname ,"../templates/views");
const partialpath = path.join(__dirname , "../templates/partials");
//middleware 
// app.use(express.json());
app.use( '/css',express.static(__dirname + "../public/css"));
app.use('/js',express.static(__dirname +  "../node_modules/bootstrap/dist/js"));
app.use('/jq',express.static(__dirname + "../node_modules/jquery"));
// app.use('/img',express.static(__dirname +  "../public/images"))

app.use(express.urlencoded({extended : false}));


app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);


// using images 


app.use(express.static("images"));


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/index",(req,res)=>{
    res.render("index");
})

app.get("/course",(req,res)=>{
    res.render( "course");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

// app.get("/blog",(req,res)=>{
//     res.render("blog");
// })

app.get("/admission",(req,res)=>{
    res.render( "admission")
})

app.get("/about",(req,res)=>{
    res.render( "about")
})


app.post("/contact",async(req,res)=>{
     try {
        // res.send( req.body)
        const userData = User(req.body);
         await userData.save();
         res.status(201).render("index");
     } catch (error) {
        res.status(500).send(error);
     }
})


app.listen(9000 , ()=>{
    console.log("server connected ...") ;
})