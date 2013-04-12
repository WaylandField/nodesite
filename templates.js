var templates = [];

exports.load = function(path, options){
    var fs = require('fs');
    var verbose = options.verbose;
    verbose && console.log("----------Load Templates Started--------------------------");
    fs.readdirSync(__dirname+ '/'+ path).forEach(function(name){
        if(!name){
            return;
        }
        var id = name.substr(0, name.indexOf('.'));
        var re = /\w+\.ejs$/ig;
        if(!re.test(name)){
//            verbose && console.log('\n  Ignore %s:', name);
            return;
        }
        verbose && console.log('Load Template %s:', name);
        str = fs.readFileSync(__dirname + '/' + path +'/' + name, 'utf8');
        templates[id] = str;
//        verbose && console.log(templates);
    });
    verbose && console.log("----------Load Templates Completed--------------------------");
};

exports.getTemplate = function(id){
    return templates[id];
};