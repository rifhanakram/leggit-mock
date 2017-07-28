//timing

var express = require('express');
var app = express();
var jobs = require('./api/jobs');
var completedJobs = require('./api/jobs-completed')


app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
next();
});
app.get('/',function(req,res) {
res.status(200).json({
    "message":"success"
});
});

app.get('/jobrequests',function(req,res) {
if(req.query.job_status == 4) 
    res.status(200).json({data: completedJobs});
else if(req.query.job_status == 0) 
    res.status(200).json({data: jobs})
})




app.listen(process.env.PORT || 3000,function(){
console.log('server running');
});
