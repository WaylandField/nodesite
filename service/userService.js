var db = require('../dbFactory').getDb();
var users = db.collection('user');
exports.auth =  function(user, pwd, callback){
    users.findOne({username:user},function(err, doc){
        callback(err, doc);
    });
};

exports.addNew = function(user, callback){
    users.save(user, callback);
};

exports.update = function(user, callback){
    users.findAndModify({
        query: { username: user.username },
        update: { $set: user },
        new: true
    }, callback);
};

exports.delete = function(query, callback){
    users.remove(query, callback);
};

exports.find = function(query, callback){
    users.find(query, function(err, docs){
        callback(err, docs);
    });
};