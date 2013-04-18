$(document).ready(function(){
    var naviBtn = $('#naviBtn');
    var pageBtn = $("#pageBtn");
    var carouselBtn = $("#carouselBtn");
    var articleBtn = $("#articleBtn");
    var recordsArea = $('#recordsArea');
    var mainArea = $('#mainArea');
    var renderRecords = function(json, collection){
        var html = [];
         html.push('<div>');
        for(var k in json){
            var record = json[k];
            html.push('<div ><a href="/api/'+collection+'/'+record["id"]+'" class="records">',
                      record["label"]?record["label"]: k ,'</a></div>');
        }
        html.push('</div>');
        recordsArea.html(html.join(''));
        $('.records').click(function(e){
            e.preventDefault();
            $('ul.nav > li').parent().removeClass('active');
            $(this).parent().addClass('active');
            loadSingle($(this).attr('href'));
        });
    };

    var getJsonHtml = function(id, html, json){
        html.push('<ul class="nav nav-list">');
        for(var k in json){
            var attr = json[k];
            var newId = id + '.'+ k;
            switch(typeof attr){
                case 'number':
                case 'string':
                case 'boolean':
                html.push('<li >');
                if(k!=='desc'){
                    html.push(k,' -- <input id="',newId,'" type="text" value="',attr,'">');
                }else{
                    html.push(k,' -- <textarea id="',newId,'">',attr,'</textarea>');
                }
                html.push('</li>');
                break;
                case 'object':
                html.push('<li>');
                getJsonHtml(newId, html, attr);
                html.push('</li>');
                break;
            }
        }
        html.push('</ul>');
    };

    var generateJson = function(){
        // visit form input element 
    };

    var renderSingle = function(json, collection){
        var html = [];
        var action = "/api/"+collection+"/"+json.id;
        html.push('<form method="post" action="'+action+'">');
        getJsonHtml('', html, json, collection);
        html.push('<button type="button" id="saveBtn" class="btn btn-primary" data-loading-text="Loading...">Save</button></form>');
        mainArea.html(html.join(''));
        $('#saveBtn').click(function(){
            //var json = JSON.parse($('#editor').val());
            saveNavi($('#editor').val());
        });
    };

    var loadSingle = function(res){
        $.ajax({dataType:'json', 
                success: function(json){
                    renderSingle(json.data, json.collectionId);
                },
                url:res
               });
    };

    var loadRecords = function(res){
        $.ajax({dataType:'json', 
                success: function(json){
                    renderRecords(json.data, json.collectionId);
                },
                url:res
               });
    };

    var saveNavi = function(data){
    	var json = JSON.parse(data);
        $.ajax({
            data:{'k':json},
            type:'post',
            success: function(data){

            },
            url:'/api/navi'
        });
    };
    $('ul.nav > li > a').click(function(e){
        e.preventDefault();
        var collection = $(this).attr("href").substring(1);
        $('ul.nav > li.active').removeClass('active');
        $(this).parent().addClass("active");
        loadRecords(collection);
    });
});