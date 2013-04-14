$(document).ready(function(){
    var naviBtn = $('#naviBtn');
    var mainArea = $('#mainArea');
    var renderJson = function(html, json){
        html.push('<ul>');
        for(var k in json){
            var attr = json[k];
            switch(typeof attr){
                case 'number':
                case 'string':
                case 'boolean':
                html.push('<li>',k," -- ",attr,'</li>');
                break;
                case 'object':
                html.push('<li>',k);
                renderJson(html, attr);
                html.push('</li>');
                break;
            }
        }
        html.push('</ul>');
    };

    var createTab = function(tabId, items){
        var tabs = [], contents=[];
        tabs.push('<ul class="nav nav-tabs" id="',tabId,'">');
        contents.push('<div class="tab-content" id="myTabContent">');
        for(var k in items){
            var item = items[k];
            tabs.push('<li class=""><a data-toggle="tab" href="#',item.id,'">',item.label,'</a></li>');
            contents.push('<div id="',item.id,'" class="tab-pane fade"><p>',item.content,'</p></div>');
            
        }
        tabs.push('</ul>');
        contents.push('</div>');
        return tabs.join('')+contents.join('');
    };

    var createEditor = function(json){
        var html = [];
        html.push('<div><textarea name="jsonEditor" id="editor" class="span10">');
        html.push(JSON.stringify(json));
        html.push('</textarea></div>');
        html.push('<button type="button" id="saveBtn" class="btn btn-primary" data-loading-text="Loading...">Save</button>');
        return html.join('');
    };

    var loadNavi = function(){
        $.ajax({dataType:'json', 
                success: function(data){
                    $('ul.bs-docs-sidenav > li.active').removeClass('active');
                    naviBtn.parent().addClass('active');
                    var html = [];
                    var tabId = 'editorTab';
                    renderJson(html, data);
                    mainArea.html(createTab(tabId, [
                        {id:'view', label:'view' ,content:html.join('')},
                        {id:'edit', label:'edit', content:createEditor(data)}]));
                    
                    $('#'+tabId+' a').click(function (e) {
                        e.preventDefault();
                        $(this).tab('show');
                        $('#'+tabId+' a:first').tab('show'); // Select first tab
                    });
                    
                    $('#saveBtn').click(function(){
                    	//var json = JSON.parse($('#editor').val());
                        saveNavi($('#editor').val());
                    });

                },
                url:'/api/navi'
               });
    };

    var saveNavi = function(data){
    	var json = JSON.parse(data);
        $.ajax({
            data:{'k':json},
            type:'post',
            success: function(data){
                alert(data);
            },
            url:'/api/navi'
        });
    };

    naviBtn.click(loadNavi);
});