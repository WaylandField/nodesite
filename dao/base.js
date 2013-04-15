var db = require('../dbFactory').getDb();

exports.addNew = function(collectionId, objects, callback){
    var collection = db.collection(collectionId);
    collection.save(objects, callback);
};

exports.update = function(collectionId, query, object, callback){
    var collection = db.collection(collectionId);
    collection.findAndModify({
        query: query, 
        update: { $set: object },
        new: false
    }, callback);
};

exports.updateMulti = function(collectionId, objects, callback){
    var collection = db.collection(collectionId);
    for(var k in objects){
    	var id = objects[k].id;
    	delete objects[k].id;
     collection.findAndModify({
<<<<<<< HEAD
        query: {"id":objects[k].id}, 
=======
        query: {_id:id},
>>>>>>> 095c1c8... 修改后台保存报错
        update: { $set: objects[k] },
        upsert: 1
     }, function(arg1, arg2, arg3, arg4){
         console.log(arg1);
         console.log(arg2);
         console.log(arg3);
     });
     break;
    }
};

exports.delete = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.remove(query, callback);
};

exports.find = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.find(query, function(err, docs){
        callback(err, docs);
    });
};

exports.findOne = function(collectionId, query, callback){
    var collection = db.collection(collectionId);
    collection.findOne(query, function(err, doc){
        callback(err, doc);
    });
};

exports.getObjectId = function(id){
    return id?db.ObjectId(id):db.ObjectId();
};

exports.close = function(){
    db.close();
};