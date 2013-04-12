exports.loginUI = {
    path:'/login',
    method:'get',
    run : function(req, res){
        res.send('login from here');
    }
};

exports.loginAct = {
    path:'/login',
    method:'post',
    run: function(req, res){
        var user;
        res.session.user = user;
    }
};

exports.registerUI = {
    path:'/register',
    method:'get'
};

exports.registerAct = {
    path:'/register',
    method:'post'
};