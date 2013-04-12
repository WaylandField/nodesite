exports.auth = {
    path : '*',
    before: function(req, res, next){
//        if(!req.session||!req.session.user){
            //res.send("Not autherized");
//        }
        next();
    }
};