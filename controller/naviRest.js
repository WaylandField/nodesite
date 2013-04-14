var dao = require('./../dao/base');
exports.get = {
    path: '/api/navi',
    method:'get',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
        dao.find('navi', {}, function(err, docs){
            if(err){
                res.send("{success:0, msg:'Error to find navigations'}");
            }else{
                res.send(docs);
            }
        });
    }
};

exports.post = {
    path: '/api/navi',
    method:'post',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
        console.log(req.body.k);
    }
};