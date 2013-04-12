var assert =  require('assert');
var dao = require('./../dao/base');
var tenant1 ='tenant1';
var collectionId = 'user';
dao.addNew(tenant1, collectionId, {username:'user1', age:23}, function(err, docs){
    console.log(err);
    console.log(docs);
});
try{
dao.addNew(null, collectionId, {username:'user1', age:23}, function(err, docs){
});
}catch(e){
    assert(e);
}