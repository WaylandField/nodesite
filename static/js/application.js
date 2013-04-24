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
                      record["_label"]?record["_label"]:(record["label"]?record["label"]: k) ,'</a></div>');
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
                if(k=='id'){
                    html.push(k,' -- ',attr,'<input type="hidden" dataType="',(typeof attr),'" id="',newId,'" value="',attr,'">');
                }else if(k!=='desc'){
                    html.push(k,' -- <input id="',newId,'" dataType="',(typeof attr),'" type="text" value="',attr,'">');
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
        var _formatData = function(dataType, value){
            var result = value;
            switch(dataType){
                case "number":
                result = (new Number(value)).valueOf();
                break;
                case "boolean":
                result = (value==""||value=="0"||value=="false")?0:1;
                break;
            }
            return result;
        };
		var _createJson = function(root, path, value, dataType){
			var obj = root;
			var strs = path.split(".");
			for(var k=1;k<strs.length;k++){
				if(strs[k]=='items'||strs[k]=='rows'){
					if(obj[strs[k]]==null){
						obj[strs[k]] = [];
					}
					obj = obj[strs[k]];
				}else if(!isNaN(strs[k])){
					if(obj[strs[k]]==null){
                        if((strs.length-1>k)&&!isNaN(strs[k+1])){
                            obj.push([]);
                        }else{
						    obj.push({});
                        }
					}
					obj = obj[strs[k]];
				}else{
					if(k==strs.length-1){
						obj[strs[k]]=_formatData(dataType, value);
					}else{
						if(obj[strs[k]]==null){
							obj[strs[k]] = {};
						}
						obj = obj[strs[k]];
					}
				}
			}
		};
   		var obj = {};
    	$("input").each(function(){
    		_createJson(obj,this.id,this.value, $(this).attr("dataType"));
    	});
    	return obj;
    };
    

    var renderSingle = function(json, collection){
        var html = [];
        var action = "/api/"+collection+"/"+json.id;
        html.push('<form method="post" action="'+action+'">');
        getJsonHtml('', html, json, collection);
        html.push('<button type="button" id="saveBtn" class="btn btn-primary" data-loading-text="Loading...">Save</button></form>');
        mainArea.html(html.join(''));
        $('#saveBtn').click(function(){
			var obj = generateJson();
            saveRecord(obj,collection);
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

    var saveRecord = function(obj, collection){
        $.ajax({
            data:JSON.stringify({"data":obj}),
            contentType: 'application/json',
            type:'post',
            dataType : 'json',
            success: function(data){
				if(data.success){
                    alert('saved');
                }
            },
            url:'/api/'+collection+'/'+obj.id
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