var EntityForm = function(){};

EntityForm.prototype.getForm = function(formId, obj){
    return this._mappings[formId];
};

EntityForm.prototype._getNaviForm = function(obj){
    var html = [];
    html.push("");
    return html.join();
};

EntityForm.prototype._getCarouselForm = function(obj){
    var html = [];
    html.push("");
    return html.join();
};

EntityForm.prototype._getArticleForm = function(obj){
    var html = [];
    html.push("");
    return html.join();
};

EntityForm.prototype._getThumbForm = function(obj){
    var html = [];
    html.push("");
    return html.join();
};

EntityForm.prototype._getPageForm = function(obj){
    var html = [];
    html.push("");
    return html.join();
};

