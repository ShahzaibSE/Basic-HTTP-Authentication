'use strict'

const express = require('express');
const auth = require('basic-auth');

module.exports.isAuthenticated = function(req,res,next){
  var credientials = auth(req);
  console.log(auth);
  console.log("Basic Authentication Request");

  if(credientials && credientials.name == "Shahzaib" && credientials == "123"){
      console.log({
          status: true,
          resCode: 200,
          isError: false,
          message: "Request Authenticated Successfully"
      });
  }else if(credientials.name !== "Shahzaib" || credientials !== "123"){
      res.send({
          status: false,
          resCode: 400,
          isError: true,
          message: "Request Authentication Failed"
      });

      return;
  }
  next();
};