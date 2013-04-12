var assert = require('assert');
var userService = require('./../service/userService');
var dbFactory = require('./../dbFactory');
var db = dbFactory.getDb();

userService.addNew({username:'killkkijj', age:123, password:'123123'},function(err, doc, arg2){
    console.log(err);
    console.log(doc);
    console.log(arg2);
});

userService.update({username:'killkkijj', age:333},function(err, doc, arg2){
    assert(!err);
    assert(doc.age==333);
    console.log(arg2);
});

userService.delete({username:'killkkijj'});

//db.close();