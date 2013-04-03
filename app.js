var express = require('express');
var app = express();

app.use('/web', express.static(__dirname+'/static'));

app.use(express.bodyParser());
app.use(app.router);
app.use(express.logger());
app.use(express.logger({format:':method :url'}));

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(err.stack);
    res.send(500, "Expected Error, Please send error messages to admin");
});

//app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
require('./mvc')(app, {verbose:true});
app.listen(3000);

console.log("server started");