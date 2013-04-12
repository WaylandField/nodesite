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

exports.getObjectId = function(){
    return db.ObjectId();
};