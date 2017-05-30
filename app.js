'use strict';

const express = require('express');
const app = express();
const jobs = require('./api/jobs');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.get('/jobs/all',(req,res) => {
    res.status(200).json(jobs);
})

app.listen(5000,()=>{
    console.log('server running');
});
