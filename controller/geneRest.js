var dao = require('./../dao/base');
var collectionSet = {
    'navi':1, 
    'page':1,
    'article':1,
    'carousel':1
};

exports.authRestDetail = {
    path:'/api/:collectionId/*',
    method:'all',
    before: function(req, res, next){
        if(!collectionSet[req.params.collectionId]){
            res.send("you can't access this collection");
        }
        next();
    }
};
exports.authRest = {
    path:'/api/:collectionId',
    method:'all',
    before: function(req, res, next){
        if(!collectionSet[req.params.collectionId]){
            res.send("you can't access this collection");
        }
        next();
    }
};

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
                res.send("{success:0, msg:'Error to find "+collectionId+"'}");
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
                res.send("{success:0, msg:'Error to find "+collectionId+"'}");
            }else{
                res.send({success:1, collectionId:collectionId, data:docs});
            }
        });
    }
};

exports.update = {
    path: '/api/:collectionId/:id',
    method:'post',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
    	var collectionId = req.params["collectionId"];
    	var id = req.params["id"];
        var data = req.body.data;
        dao.update(collectionId, {"id":req.params.id}, data, function(err, docs){
            if(err){
                res.send("{success:0, msg:'Error to update "+collectionId+"'}");
            }else{
                res.send({success:1, collectionId:collectionId});
            }
        });
    }
};

exports.add = {
    path: '/api/:collectionId',
    method:'post',
    before: function(req, res, next){
        // to do authentication
        next();
    },
    run: function(req, res){
    	var collectionId = req.params["collectionId"];
        var data = req.body.data;
        dao.addNew(collectionId, data, function(err, docs){
            if(err){
                res.send("{success:0, msg:'Error to add "+collectionId+"'}");
            }else{
                res.send({success:1, collectionId:collectionId});
            }
        });
    }
};
