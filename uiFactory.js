/***
 * This method is to create all kind of UI components
 * 
 */

var uiMap = {
    menu:{
        postRender:''
    },
    navibar:{
        postRender:''
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