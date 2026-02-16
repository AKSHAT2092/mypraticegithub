var express = require('express');
var app = express();
app.get('/', function(req,resp){  // / is a rootword
    resp.send('Hello Akshat');
});

app.get('/time', function(req, resp){  //time is a endpoint
    var time = new Date().toLocaleTimeString();
    resp.send(`Time is : ${time}`);
});

app.get('/date', function(req, resp){
    var date = new Date().toLocaleDateString();
    resp.send(`Date is : ${date}`);
});


app.listen(9000,()=>console.log('server started at 9000'));