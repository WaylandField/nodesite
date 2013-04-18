var dao = require('./../dao/base');
exports.getSingle = {
    path: '/api/:collectionId/:id',
    method:'get',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
    	var collectionId = req.params["collectionId"];
        dao.findOne(collectionId, {"id":req.params.id}, function(err, docs){
            if(err){
                res.send("{success:0, msg:'Error to find navigations'}");
            }else{
                res.send({success:1, collectionId:collectionId, data:docs});
            }
        });
    }
};

exports.get = {
    path: '/api/:collectionId',
    method:'get',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
    	var collectionId = req.params["collectionId"];
        dao.find(collectionId, {}, function(err, docs){
            if(err){
                res.send("{success:0, msg:'Error to find navigations'}");
            }else{
                res.send({success:1, collectionId:collectionId, data:docs});
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
    	var json = req.body.k;
        console.log(req.body.k);
        dao.updateMulti("navi",json,function(err,docs){});
        res.send("success");
    }
};