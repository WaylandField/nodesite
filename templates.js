var templates = [];

exports.load = function(path, options){
    var fs = require('fs');
    var verbose = options.verbose;
    fs.readdirSync(__dirname+ '/'+ path).forEach(function(name){
        if(!name){
            return;
        }
        var id = name.substr(0, name.indexOf('.'));
        var re = /\w+\.ejs$/ig;
        if(!re.test(name)){
            verbose && console.log('\n  Ignore %s:', name);
            return;
        }
        str = fs.readFileSync(__dirname + '/' + path +'/' + name, 'utf8');
        templates[id] = str;
        verbose && console.log(templates);
    });
};

exports.getTemplate = function(id){
    return templates[id];
};