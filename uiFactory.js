/***
 * This method is to create all kind of UI components
 * 
 */

var postRenderMap = {
    menu:{
        file:'',
        func:'$(".dropdown-toggle").dropdown();'
    },
    carousel:{
        file:'',
        func:'$(".carousel").carousel();'
    }
};


exports.create = function(name, options){
    var ejs = require('ejs');
    var templates = require('./templates');
    var html = templates.getTemplate(name);
    if(options&&!options.uiId){
        var uiId = (new Date()).getTime();
        options.uiId = uiId;
    }
    return {
        uiId:options.uiId,
        html: ejs.render(html, options)
    };
};

exports.getJsDeps = function(page){
    var jsSet = {};
    var result = [];
    if(page&&page.structure){
        for(var i=0;i<page.structure.length;i++){
            var sect = page.structure[i];
            switch(sect.ui){
                case 'navibar':
                case 'navi':
                case 'menu':
                jsSet['menu'] = 1;
                break;
                case 'carousel':
                jsSet['carousel'] = 1;
                break;
            }
        }
    }
    for(var k in jsSet){
        result.push(postRenderMap[k].func);
    }
    return result.join('\n');
};