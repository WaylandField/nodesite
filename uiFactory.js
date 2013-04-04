/***
 * This method is to create all kind of UI components
 * 
 */

var uiMap = {
//    'layout': 
};


exports.create = function(uiId, options){
    var ejs = require('ejs');
    var templates = require('./templates');
    var html = templates.getTemplate(uiId);
    return ejs.render(html, options);
};