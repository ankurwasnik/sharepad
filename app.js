const express = require("express");
const bodyParser = require("body-parser");
var shortid = require('shortid');
const app = express();
app.use(express.static("public"));
var sharepadId = -1;
app.use(bodyParser.urlencoded({extended : true }));
app.set('view engine' , 'ejs');
app.get('/:id',function(req,res){
    // to be written 
    let id = req.params.id;
    console.log("Landed on page with sharepadid = ",id);
    //res.sendFile(__dirname+'/index.html');
    res.render('index',{sharepadId:sharepadId});
});
app.post('/:id', function(req,res){ 
    let id = req.params.id;
    let postContent = req.body.sharepadContent;
    console.log("***Post Content | SharePadId:"+id+"***\n"+postContent);
});
app.get('/' , function(req , res){
    let genid = shortid.generate();
    sharepadId = genid;
    console.log("***SharepadId *** : "+sharepadId);
    let redirectLink = '/'+sharepadId;
    res.redirect(redirectLink);
    //res.sendFile(__dirname+'/index.html');
  });
app.post('/', function(req,res){
    let postContent = req.body.sharepadContent;
    let formSharepadId = req.body.formsharepadID;
    console.log("***sharepadId***\n"+formSharepadId);
    console.log("***Post Content***\n"+postContent+"\n");
    //save to mongodb database {formSharepadId : postContent}

});
app.listen(8888 , function() {
    console.log("serving waiting at port 8888 ");
});
