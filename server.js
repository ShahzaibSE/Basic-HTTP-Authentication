'use strict'

const express = require('express');

const app = require('./app');

var port = process.env.PORT | 3002;
var server = app.listen(port, function(){
    console.log("|-----------------------------|");
    console.log("Listening on port:"+" "+server.address().port);
    console.log("|-----------------------------|");
});