var dao = require('./../dao/base');
var naviId = dao.getObjectId();
var quickAccessId = dao.getObjectId();
var carouselId = dao.getObjectId();
var step1 = dao.getObjectId();
var step2 = dao.getObjectId();
var step3 = dao.getObjectId();
var step4 = dao.getObjectId();

var footstep1 = dao.getObjectId();

var thumb1 = dao.getObjectId();
var thumb2 = dao.getObjectId();
var thumb3 = dao.getObjectId();

var customer1 = dao.getObjectId();
var customer2 = dao.getObjectId();
var customer3 = dao.getObjectId();
var customer4 = dao.getObjectId();

var about = dao.getObjectId();
var follow = dao.getObjectId();
var news = dao.getObjectId();


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
                    brand: "Algoblu Cloud CDN <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
                }},
                {id:'carousel', ui:'carousel', dataId:carouselId, config:{
                    container:1,
                    css:'container-lead'
                }},
                {ui:'thumbnails', row:[
                    {dataId: thumb1, config:{span:4}},
                    {dataId: thumb2, config:{span:4}},
                    {dataId: thumb3, config:{span:4}}
                ],config:{
                    container:1, title: 'Why Cloud CDN'
                }},
                {id:'steps', ui:'thumbnails', row:[
                    {dataId: customer1, config:{span:3}},
                    {dataId: customer2, config:{span:3}},
                    {dataId: customer3, config:{span:3}},
                    {dataId: customer4, config:{span:3}}
                ],config:{
                    container:1, title: 'Customers'
                }},
                {ui:'grid', rows:[[
                    {span:4, dataId: about, config:{level:5}},
                    {span:4, dataId: news, config:{level:5}},
                    {span:4, dataId: follow, config:{level:5}},
                ]],config:{
                    css:'footer',
                    container:1
                }}
                
            ]
        },
        {
        pageId:'product',
        path:'/product',
        label:'product',
        config:{
        	css:'fixed_navi_body'
        },
        structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {id:'steps', ui:'grid', rows:[[
                    {span:8, dataId: step4},
                    {span:4, dataId: step2}
                ]],config:{
                    container:1
              }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
        ]
        },
         {
        pageId:'solution',
        path:'/solution',
        label:'solution',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'customer',
        path:'/customer',
        label:'customer',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}}
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'product1',
        path:'/product1',
        label:'product1',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'product2',
        path:'/prod2',
        label:'product2',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'partner',
        path:'/partner',
        label:'partner',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'about',
        path:'/about',
        label:'about',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:1,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
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
        {_id: thumb1, src:'/web/img/dollar.png', url:'/...', alt:'Powerful', caption:{label:'More Powerful', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary' }}},
        {_id: thumb2, src:'/web/img/rocket.png', url:'/...', alt:'Faster', caption:{label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success' }}},
        {_id: thumb3, src:'/web/img/dollar.png', url:'/...', alt:'Cheaper',caption: {label:'Less Fee', desc:"With our cloud CDN, only increase the virutal severs when needed, this will cut unesscessray cost...", btn:{label:'Register today...', url:'/go', style:'info'}}},
        {_id: customer1, src:'/web/upload/customer1.png', url:'/...', alt:'customer1'},
        {_id: customer2, src:'/web/upload/customer2.png', url:'/...', alt:'Customer2'},
        {_id: customer3, src:'/web/upload/customer3.png', url:'/...', alt:'Customer3'},
        {_id: customer4, src:'/web/upload/customer4.png', url:'/...', alt:'Customer4'},
        {_id: step1, label:'More Powerfull', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary', right:1 }},
        {_id: step2, label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success', right:1 }},
        {_id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {_id: step4, label:'Product', desc:"<img src=\"/web/img/Compare.png\"/>this is product"},
        {_id: about, label:'About Us', desc:"Algoblu was started....<hr> Phone: 010-65694176-800<br>Fax: 010-65694176-329<br>Email: support@algoblu.com<br>"},
        {_id: news, label:'News', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {_id: follow, label:'Follow Us', desc:"<img src=\"/web/img/Compare.png\"/>this is product"},
        {_id: footstep1, label:'whate is cloud CDN', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }}
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
            {src:'/web/img/cloudVpnStru.png'},
            {src:'/web/img/cloudVpnTopo.png'}
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
