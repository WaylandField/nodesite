exports.index =  {
    path: '/',
    method: 'get',
    before: function(req, res, next){
        //res.send("Before <br>");
        console.log("before");
        next();
    },
    run: function(req, res){
        var uiFactory = require('../uiFactory');
        var table = uiFactory.create('grid',  {
            fluid : true,
            rows:[
                [{span:1, offset:2, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'}],
                [{span:1, offset:2, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'}],
                [{span:1, offset:2, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'}]
            ]
        });
        var body = uiFactory.create('layout', {
            fluid: true,
            body: table
        });
        var html = uiFactory.create('page', {
            title : 'node site home page',
            body: body,
            description:'node site home page'
        });
        res.set({
            'Content-Length': html.length
        });
        
        res.send(html);
    },
    after: function(req, res){
        res.send('After');
    }
};
