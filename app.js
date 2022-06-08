const express=require("express");
const bodyparser=require("body-parser");

const app = express();
const port = 80
app.set('view engine', 'pug');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){

res.render("index");
    })


app.get('/Login',function(req,res){

    res.render("Login");
})
app.get('/Register',function(req,res){

    res.render("Register");
})
app.post('/Register',function(req,res){

    //console.log(reg.body)
    const newUser=new user();
    newUser.username=req.body.username;
    newUser.password=req.body.password;
    newUser.age=req.body.age;
    newUser.mobile=req.body.mobile;

    newUser.save(function(err,result){
    if(err){

        console.log(err);
        }
        else{
         console.log(result);   
        res.render("Login");
        }
    })
        })

        app.post('/Login',function(req,res){
            
            user.findOne({username:"req.body.username"},function(err,docs){
            if(err)
            {
                console.log(err)

            }
            else{
                if(docs.username==req.body.username && docs.username==req.body.password){
                    res.send("welcome");
                }
                else{
                    //res.send("invalid username or password")
                    res.redirect("Register");
                }
            }
            })
            })
    

app.listen(port,() => {console.log(`app is listening on http://localhost:${port}`)})