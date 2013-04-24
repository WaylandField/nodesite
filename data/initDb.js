var dao = require('./../dao/base');
var naviId = 'navi';
var quickAccessId = 'quickAccess';
var carouselId = "carousel1";
var step1 = "step1";
var step2 = "step2";
var step3 = "step3";
var step4 = "step4";

var footstep1 = "foot";

var thumb1 = "thumb1";
var thumb2 = "thumb2";
var thumb3 = "thum3";

var customer1 = "customer1";
var customer2 = "customer2";
var customer3 = "customer3";
var customer4 = "customer4";

var about = "about";
var follow = "follow";
var news = "news";


var addPage = function(){
//add pages
dao.delete('page', {}, function(){
    dao.addNew('page', [
        {
            id:'home',
            path:'/',
            label:'主页',
            config:{
                 css:'fixed_navi_body'
                },
            items:[
                {id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand: "Algoblu云CDN",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
                    right:1
                }},
                {id:'carousel', ui:'carousel', dataId:carouselId, config:{
                    container:1,
                    css:'container-lead'
                }},
                {ui:'grid', rows:[[
                    {dataId: thumb1, span:4, config:{level:4}},
                    {dataId: thumb2, span:4, config:{level:4}},
                    {dataId: thumb3, span:4, config:{level:4}}]
                ],config:{
                    container:1
                }},
                {id:'steps', ui:'thumbnails', items:[
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
                    {span:4, dataId: follow, config:{level:5}}
                ],[{span:10, dataId: footstep1}]],config:{
                    css:'footer',
                    container:1
                }}
                
            ]
        },
        {
        id:'product',
        path:'/product',
        label:'产品',
        config:{
        	css:'fixed_navi_body'
        },
        items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'solution',
        path:'/solution',
        label:'解决方案',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'customer',
        path:'/customer',
        label:'客户&案例',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'product1',
        path:'/product1',
        label:'product1',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'product2',
        path:'/prod2',
        label:'product2',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'partner',
        path:'/partner',
        label:'合作伙伴',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        id:'about',
        path:'/about',
        label:'关于我们',
        config:{
        	css:'fixed_navi_body'
        },
         items:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
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
        {id: thumb1, src:'/web/img/dollar.png', url:'/...', alt:'Powerful', caption:{label:'More Powerful', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary' }}},
        {id: thumb2, src:'/web/img/rocket.png', url:'/...', alt:'Faster', caption:{label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success' }}},
        {id: thumb3, src:'/web/img/dollar.png', url:'/...', alt:'Cheaper',caption: {label:'Less Fee', desc:"With our cloud CDN, only increase the virutal severs when needed, this will cut unesscessray cost...", btn:{label:'Register today...', url:'/go', style:'info'}}},
        {id: customer1, src:'/web/upload/customer1.png', url:'/...', alt:'customer1'},
        {id: customer2, src:'/web/upload/customer2.png', url:'/...', alt:'Customer2'},
        {id: customer3, src:'/web/upload/customer3.png', url:'/...', alt:'Customer3'},
        {id: customer4, src:'/web/upload/customer4.png', url:'/...', alt:'Customer4'},
        {id: step1, label:'More Powerfull', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary', right:1 }},
        {id: step2, label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success', right:1 }},
        {id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {id: step4, label:'Product', desc:"<img src=\"/web/img/Compare.png\"/>this is product"},
        {id: about, label:'联系我们', desc:"电话：010-65694176-800<br>传真：010-65694176-329<br>Email: support@algoblu.com</p>"},
        {id: news, label:'产品和服务', desc:'<a href="#">Cloud CDN</a><br><a href="#">CDN More Product</a>'},
        {id: follow, label:'Algoblu动态', desc:"<img src=\"/web/img/icon-facebook-32.png\"/> <img src=\"/web/img/icon-google-plus-32.png\"/> <img src=\"/web/img/icon-rss-32.png\"/> <img src=\"/web/img/icon-twitter-32.png\"/>"},
        {id: footstep1, _label:'网站页脚', desc:"北京肇煜宏泰信息科技有限公司版权所有 京ICP备案号 123343444"}
    ], function(){
        console.log("Add article completed");
        addPage();
    });
});
};

var addCarousel = function(){
dao.delete('carousel',{}, function(){
    dao.addNew('carousel', 
        {id: carouselId, 
	label:'首页滚动新闻',
         items:[
            {src:'/web/img/cloud_solutions.png', title:'', desc:''},
            {src:'/web/img/cloud_solutions.jpg', title:'Deployment Optimization', desc:'Make the max use of your cloud resource, and only pay for that you needed...'}
        ]}
    , function(){
        console.log("Add carousel completed");
        addArticle();
    });
});
};

var addNavi = function(){
dao.delete('navi', {}, function(){
    // add navigation
    dao.addNew('navi', [{id:naviId, label:'默认导航', items:[
        {id:'home',
         label:'主页',
         url:'/'},
        {id:'product',
         label:'产品',
         url:'/product'},
        {id:'solution',
         label:'解决方案',
         url:'/solution'},
        {id:'customer',
         label:'客户&案例',
         url:'/customer',
         items:[{id:'prod1',
                 label:'product1',
                 url:'/product'},
                {id:'prod2',
                 label:'product2',
                 url:'/prod2'}]},
        {id:'partner',
         label:'合作伙伴',
         url:'/partner'},
        {id:'关于我们',
         label:'about',
         url:'/about'}
    ]}], function(){
        console.log("Add navigation completed");
        addCarousel();
    });
});
};

addNavi();
