var uiFactory = require('./../uiFactory');
var dao = require('./../dao/base');
//var i18n = //i18n.setLocale ;
var renderAdmin = function(req, res){
    var admin = uiFactory.create('admin', {
        user: req.session.user
    });
    res.send(admin.html);
};
var renderLogin =  function(req, res, err){
    var ui = uiFactory.create('form', {
        err:err,
        items:[{type:'input', label:'username', id:'username'},
               {type:'password', label:'password', id:'password'},
               {type:'submit', label:'username'}],
        config:{action:"/__provisioning_login"}
    });
    res.send(ui.html);
};
exports.provision =  {
    path: '/__provisioning_login',
    method: 'get',
    run: function(req, res){
        if(req.session.user){
            renderAdmin(req, res);
        }else{
            renderLogin(req, res);
        }
    }
};

exports.login = {
    path: '/__provisioning_login',
    method:'post',
    run: function(req, res){
        var username= req.body.username;
        var password = req.body.password;
        if(username==='ximo'&&password==='geigei'){
            req.session.user = {username:username};
            renderAdmin(req, res);
        }else{
            renderLogin(req, res, 1);
        }

    }
};