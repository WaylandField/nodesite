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
var thumb4 = "thumb4";

var customer1 = "customer1";
var customer2 = "customer2";
var customer3 = "customer3";
var customer4 = "customer4";

var accord1 = "accord1";

var feature1 = "feature1";
var feature2 = "feature2";
var feature3 = "feature3";

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
                    brand: "<img src=\"/web/img/logo.png\"/>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
                    right:1
                }},
                {ui:'grid', rows:[[
                    {dataId: thumb4, config:{span:8}},
                    {ui:'accordion', config:{span:4, css:'homepage_accord'}, dataId:accord1}
		]], config:{
                    container:1,
                    css:'container-lead'
                }},
/**                {id:'carousel', ui:'carousel1212', dataId:carouselId, config:{
                    container:1,
                    css:'container-lead'
                }},**/
                {ui:'grid', rows:[[
                    {dataId: feature1, config:{level:4, span:4 }},
                    {dataId: feature2, config:{level:4, span:4, }},
                    {dataId: feature3, config:{span:4, level:4}}]
                ],config:{
                    container:1
                }},
                {ui:'thumbnails', items:[
                    {dataId: customer1, config:{span:3}},
                    {dataId: customer2, config:{span:3}},
                    {dataId: customer3, config:{span:3}},
                    {dataId: customer4, config:{span:3}}
                ],config:{
                    container:1, title:'云CDN客户'
                }},
                {ui:'grid', rows:[[
                    {dataId: about, config:{span:4, level:5 }},
                    {dataId: news, config:{span:4, level:5}},
                    {dataId: follow, config:{span:4, level:5}}
                ],[{dataId: footstep1, config:{span:10}}]],config:{
                    css:'footer',
                    container:1
                }}
                
            ]
        },
        {
            id:'product',
            path:'/product',
            label:'Algoblu云CDN产品',
            config:{
                 css:'fixed_navi_body'
                },
            items:[
                {id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand: "<img src=\"/web/img/logo.png\"/>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:1,
                    inverse:0,
                    right:1
                }},
                {ui:'bread', items:[{url:'/', label:'首页'},{label:'产品'}], config:{
                    container:1,
                    css:'container-lead'
                }},
                {ui:'grid', rows:[[
                    {dataId: step1, config:{level:4, span:8 }},
                    {dataId: feature2, config:{level:4, span:4, }}]
                ],config:{
                    container:1
                }},
                {ui:'grid', rows:[[
                    {dataId: about, config:{span:4, level:5 }},
                    {dataId: news, config:{span:4, level:5}},
                    {dataId: follow, config:{span:4, level:5}}
                ],[{dataId: footstep1, config:{span:10}}]],config:{
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
        path:'/customer',
        label:'客户',
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
        path:'/cases',
        label:'成功案例',
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
        {id: thumb1, entity:'thumb', src:'/web/img/dollar.png', url:'/...', alt:'Powerful', caption:{label:'More Powerful', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary' }}},
        {id: thumb2, entity:'thumb', src:'/web/img/rocket.png', url:'/...', alt:'Faster', caption:{label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success' }}},
        {id: thumb3, entity:'thumb', src:'/web/img/dollar.png', url:'/...', alt:'Cheaper',caption: {label:'Less Fee', desc:"With our cloud CDN, only increase the virutal severs when needed, this will cut unesscessray cost...", btn:{label:'Register today...', url:'/go', style:'info'}}},
        {id: thumb4, entity:'thumb', src:'/web/img/cloud_solutions.png', url:'/...'},
        {id: customer1, entity:'thumb', src:'/web/img/fengxing.jpg', url:'/...', alt:'customer1'},
        {id: customer2, entity:'thumb', src:'/web/img/fengxing.jpg', url:'/...', alt:'Customer2'},
        {id: customer3, entity:'thumb', src:'/web/img/fengxing.jpg', url:'/...', alt:'Customer3'},
        {id: customer4, entity:'thumb', src:'/web/img/fengxing.jpg', url:'/...', alt:'Customer4'},
        {id: step1, label:'More Powerfull', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary', right:1 }},
        {id: step2, label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success', right:1 }},
        {id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {id: step4, label:'Product', desc:"<img src=\"/web/img/Compare.png\"/>this is product"},
        {id: about, label:'联系我们', desc:"电话：010-65694176-800<br>传真：010-65694176-329<br>Email: support@algoblu.com</p>"},
        {id: news, label:'产品和服务', desc:'<a href="#">Cloud CDN</a><br><a href="#">CDN More Product</a>'},
        {id: follow, label:'Algoblu动态', desc:"<img src=\"/web/img/icon-facebook-32.png\"/> <img src=\"/web/img/icon-google-plus-32.png\"/> <img src=\"/web/img/icon-rss-32.png\"/> <img src=\"/web/img/icon-twitter-32.png\"/>"},
        {id: footstep1, _label:'网站页脚', desc:"北京肇煜宏泰信息科技有限公司版权所有 京ICP备案号 123343444"},
        {id: feature1, label:'<img src="/web/img/cloud.png"> 云加速服务', desc:'支持全方位网站加速服务，包括WEB网站加速、文件下载加速、流媒体加速、小文件加速、动态内容加速...', btn:{label:'了解更多...', url:'/go', style:'info' }},
        {id: feature2, label:'<img src="/web/img/puzzle.png"> 自定义CDN网络', desc:'可根据网站访问情况对CDN网络做深度自定义，可根据地域、运营商、网站加速内容等自定义云CDN节点从而形成完全自定义CDN网络...', btn:{label:'了解更多...', url:'/go', style:'success'}},
        {id: feature3, label:'<img src="/web/img/chart.png"> 反馈报表', desc:'我们将在云端存储每一条客户访问请求，通过多种分析算法，为客户提供海量数据的全面分析报表，并实时反馈给用户...', btn:{label:'了解更多...', url:'/go', style:'primary'}},
	{id: accord1, _label:'首页图片可收缩内容', items:[
                    {label:'为什么云CDN', desc:'<li><a href="/product#virtual">虚拟化</a></li><li><a href="/product#virtual">虚拟化</a></li>'},
                    {label:'成功案例', desc:'<li><a href="/product#virtual">风行网</a></li>'},
                    {label:'我要试用', desc:'<li><a href="/product#virtual">演示</a></li><li><a href="/product#virtual">马上注册</a></li>'}]}
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
         items:[{id:'prod1',
                 label:'客户',
                 url:'/customers'},
                {id:'prod2',
                 label:'成功案例',
                 url:'/cases'}]},
        {id:'partner',
         label:'合作伙伴',
         url:'/partner'},
        {id:'about',
         label:'关于我们',
         url:'/about'}
    ]}], function(){
        console.log("Add navigation completed");
        addCarousel();
    });
});
};

addNavi();
