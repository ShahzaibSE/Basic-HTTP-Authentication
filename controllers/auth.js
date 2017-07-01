const auth = require('basic-auth');

exports.authReq = function(req,res){
    res.send({
        status: true,
        resCode: 200,
        isError: false,
        message: "Authentication successful"
    });
};