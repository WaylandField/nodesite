module.exports = function(app, verbose){
    verbose && console.log("----------Load Dynamic Page Started--------------------------");

    var dao = require('./dao/base');
    var uiFactory = require('./uiFactory');

    var renderPage = function(page, req, res){
        if(page&&page.structure){
            var html = [];
            for(var i=0;i<page.structure.length;i++){
                var sect = page.structure[i];
                verbose && console.log("render UI : "+sect.ui);
                switch(sect.ui){
                case 'navibar':
                    html.push(uiFactory.create('navibar',{
                        config:sect.config?sect.config:{},
                        items:sect.data
                    }).html);
                    break;
                case 'carousel':
                    html.push(uiFactory.create('carousel',{
                        config:sect.config?sect.config:{},
                        items: sect.data
                    }).html);
                    break;
                case 'grid':
                    var rows = sect.rows;
                    if(rows){
                        for(var _i in rows){
                            var row = rows[_i];
                            for(var _ii in row){
                                var column = row[_ii];
                                column.body = uiFactory.create(column.ui?column.ui:'simple',{
                                    config:column.config?column.config:{},
                                    item: column.data
                                }).html;
                            }
                        }
                    }
                    html.push(uiFactory.create('grid',{
                        config:sect.config?sect.config:{},
                        rows: sect.rows
                    }).html);
                    break;
                 default:
                    html.push('page@'+page.id +", path:"+page.path);
                }
            }
            var jsFuncs = uiFactory.getJsDeps(page);
            var ui = uiFactory.create('page', {
                title : page.label,
                body: html.join('\n'),
                jsFuncs:jsFuncs,
                description:page.label,
                config: page.config
            });
            res.set({
                'Content-Length': ui.html.length
            });

            res.send(ui.html);
        }else{
            res.send('page not existed');
        }
    };

    // fetch page data and put it to page object
    var loadData = function(page, callback){
        if(page&&page.structure){
            var html = [];
            var cmd = callback, cmd1;
            var chain = [];
            for(var i=0;i<page.structure.length;i++){
                var sect = page.structure[i];
                if(!sect){
                    continue;
                }
                cmd1 = cmd;
                switch(sect.ui){
                case 'navibar':
                    cmd = {
                        col : 'navi',
                        sect : sect,
                        callbackObj : cmd1,
                        run :function(){
                            var that = this;
                            dao.findOne(this.col, {'_id':this.sect.dataId}, function(err, doc){
                                if(err){
                                    verbose && console.log('fail to load navigation');
                                }else{
                                    that.sect.data = doc.items;
                                }
                                that.callbackObj.run.apply(that.callbackObj);
                            });
                        }
                    };
                    break;
                case 'carousel':
                    cmd = {
                        col : 'carousel',
                        sect : sect,
                        callbackObj : cmd1,
                        run :function(){
                            var that = this;
                            dao.findOne(this.col, {_id:this.sect.dataId}, function(err, doc){
                                if(err){
                                    verbose && console.log('fail to load navigation');
                                }else{
                                    that.sect.data = doc.items;
                                }
                                that.callbackObj.run.apply(that.callbackObj);
                            });
                        }
                    };
                    break;
                case 'grid':
                    var rows = sect.rows;
                    if(rows){
                        for(var j=0;j<rows.length;j++){
                            var row = rows[j];
                            for(var _jj=0;_jj<row.length;_jj++){
                                var collumn = row[_jj];
                                cmd = {
                                    col : 'article',
                                    sect : collumn,
                                    callbackObj : cmd,
                                    run :function(){
                                        var that = this;
                                        dao.findOne(this.col, {_id:this.sect.dataId}, function(err, doc){
                                            if(err){
                                                verbose && console.log('fail to load navigation');
                                            }else{
                                                that.sect.data = doc;
                                            }
                                            that.callbackObj.run.apply(that.callbackObj);
                                        });
                                    }
                                };
                            }
                        }
                    }
                    break;
                }
            }
            verbose && console.log(cmd);
            cmd && cmd.run && cmd.run.apply(cmd);
        }else{
            res.send('page not existed');
        }
    };
    
    var loadPageData = function(page, req, res){
        if(page&&page.structure){
            loadData(page, {
                page:page,
                req: req, 
                res: res,
                run : function(){
                    renderPage(this.page, this.req, this.res);
                }
            });
        }else{
            res.send('page not existed');
        }
    };

    dao.find('page', {}, function(err, pages){
        if(pages){
            pages.forEach(function(page){
                console.log("Load Page "+page.pageId+'--'+page.path);
                app.get(page.path, function(req, res){
                    // todo cache support
                    console.log('process request@'+page.path);
                    loadPageData(page, req, res);
                });
            });
        }
        console.log("----------Load Dynamic Page Completed--------------------------");
        app.listen(3000);
        console.log("----------Server started--------------------------");
    });
};