exports.index =  {
    path: '/',
    method: 'get',
    before: function(req, res, next){
        //res.send("Before <br>");
        console.log("before");
        next();
    },
    run: function(req, res){
        //res.redirect("/users");
        res.send("Index");
    },
    after: function(req, res){
        res.send('After');
    }
};
