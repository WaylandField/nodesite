exports.users =  {
    path: '/users',
    method: 'get',
//    before: function(req, res, next){
//        res.send("Before users");
//        next();
//    },
    run: function(req, res, next){
        //res.redirect("/users");
        //res.send("user");
        var users = [
            { name: 'tobi', email: 'tobi@learnboost.com' }
            , { name: 'loki', email: 'loki@learnboost.com' }
            , { name: 'jane', email: 'jane@learnboost.com' }
        ];

        res.render('users', {users: users});
        next();
    },
    after: function(req, res){
        res.send('After');
    }
};
