

var express = require('express');
var app = express();
var jobs = require('./api/jobs');


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.get('/jobs/all',function(req,res) {
    res.status(200).json(jobs);
})

app.listen(5000,function(){
    console.log('server running');
});
