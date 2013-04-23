var express = require('express');
var app = express();
var i18n = require("i18n");
app.use('/web', express.static(__dirname+'/static'));

app.use(express.bodyParser());
app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());

//app.use(app.router);
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
require('./templates').load('templates',{verbose: true});
i18n.configure({
    locales:['zh', 'en'],
    defaultLocale: 'zh'
});
require('./dynamicPage')(app, {verbose:true});
//start server is moved to dynamic page loading call back
//app.listen(3000);