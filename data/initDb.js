var dao = require('./../dao/base');
var naviId = dao.getObjectId();
var quickAccessId = dao.getObjectId();
var carouselId = dao.getObjectId();
var step1 = dao.getObjectId();
var step2 = dao.getObjectId();
var step3 = dao.getObjectId();

var addPage = function(){
//add pages
dao.delete('page', {}, function(){
    dao.addNew('page', [
        {
            pageId:'home',
            path:'/',
            label:'home',
            config:{
                 css:'fixed_navi_body'
                },
            structure:[
                {id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
                }},
                {id:'carousel', ui:'carousel', dataId:carouselId, config:{
                    container:1,
                    css:'container-lead'
                }},
                {id:'steps', ui:'grid', rows:[[
                    {span:4, dataId: step1},
                    {span:4, dataId: step2},
                    {span:4, dataId: step3}
                ]],config:{
                    container:1
                }},
                {ui:'grid', rows:[[
                    {ui:'hero', span:4, dataId: step1},
                    {ui:'hero', span:4, dataId: step2},
                    {ui:'hero', span:4, dataId: step3}
                ]],config:{
                    container:1
                }},
                {ui:'grid', rows:[[
                    {span:4, dataId: step1},
                    {span:4, dataId: step2},
                    {span:4, dataId: step3}
                ]],config:{
                    css:'footer',
                    container:1
                }}
                
            ]
        }
    ], function(){
        console.log("Add page completed");
        dao.close();
    });
});
};
var addArticle = function(){
dao.delete('article',{},function(){
    dao.addNew('article', [
        {_id: step1, label:'Step1', desc:"Step1 Desc", btn:{label:'Go', url:'/go', style:'primary', size:'large'}},
        {_id: step2, label:'Step2', desc:"Step2 Desc"},
        {_id: step3, label:'Step3', desc:"Step3 Desc"}
    ], function(){
        console.log("Add article completed");
        addPage();
    });
});
};

var addCarousel = function(){
dao.delete('carousel',{}, function(){
    dao.addNew('carousel', [
        {_id: carouselId, 
         items:[
            {title:'Cloud VPN Structure', desc:'This is our core product', src:'/web/img/cloudVpnStru.png'},
            {title:'Cloud VPN Logic', desc:'This is our core product', src:'/web/img/cloudVpnTopo.png'}
        ]}
    ], function(){
        console.log("Add carousel completed");
        addArticle();
    });
});
};

var addNavi = function(){
dao.delete('navi', {}, function(){
    // add navigation
    dao.addNew('navi', [{_id:naviId, items:[
        {_id:'home',
         label:'home',
         url:'/'},
        {_id:'product',
         label:'product',
         url:'/product'},
        {_id:'solution',
         label:'solution',
         url:'/solution'},
        {_id:'customer',
         label:'customer',
         url:'/customer',
         items:[{_id:'prod1',
                 label:'product1',
                 url:'/product'},
                {_id:'prod2',
                 label:'product2',
                 url:'/prod2'}]},
        {_id:'partner',
         label:'partner',
         url:'/partner'},
        {_id:'about',
         label:'about',
         url:'/about'}
    ]},
      {_id:quickAccessId, items:[
          {label:'contact', url:'/contact'}
      ]}], function(){
        console.log("Add navigation completed");
        addCarousel();
    });
});
};

addNavi();