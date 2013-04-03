var fs = require('fs');
module.exports = function(app, options){
    var verbose = options.verbose;
    fs.readdirSync(__dirname+ '/controller').forEach(function(name){
        if(!name){
            verbose && console.log('\n  Ignore %s:', name);
            return;
        }
        var filetype = name.substr(name.lastIndexOf('.'));
        if(filetype.toLowerCase()!=='.js'){
            verbose && console.log('\n  Ignore %s:', name);
            return;
        }
        verbose && console.log('\n   %s:', name);
        var actions = require('./controller/'+name);
        for(var k in actions){
            var action = actions[k];
            var path = action.path?action.path:'/'+name;
            var method = action.method?action.method:'all';
            if(action.before){
                app[method](path, action.before);
                verbose && console.log('\n '+method+':'+path+': -- Before' );
            }
            if(action.run){
                app[method](path, action.run);
                verbose && console.log('\n '+method+':'+path+': -- RUN' );
            }
        }
    });
};