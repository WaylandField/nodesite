/**
 * New node file
 */
var dao = require("../dao/base");
var test = "testdb";
/*
dao.delete(test,{},function(){
	dao.addNew(test,[
	    {	
	    	id:1,
	    	name:test,
	    	age:8},
	    {
	    	test:{a:1,b:2}}
	    
	]);
	
});
dao.find(test,{},function(err,date){
	if(err){
		console.log("报错了");
	}else{
		console.log(date);
	}
});
dao.delete(test,{},function(err,data){
	if(err){
		console.log("报错了");
	}else{
		dao.addNew(test,{a:1},function(){
			dao.update(test,{b:2},function(){
				dao.find(test,{},function(err,data){
					console.log(data);
				}
				);
			});
		});
	}
});
dao.addNew(test,{a:1},function(){
});
dao.update(test,{b:1},function(){});
dao.find(test,{},function(err,data){
	console.log(data);
});
*/
dao.update("navi",[{"_id":"about","label":"about","url":"/about"}],function(err,docs){});