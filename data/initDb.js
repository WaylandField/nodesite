var dao = require('./../dao/base');
var carouselId = dao.getObjectId();
//add pages
dao.delete('page', {}, function(){
    dao.addNew('page', [
        {
            pageId:'home',
            path:'/',
            label:'home',
            config:{
                'fluid':1, container:1, css:'fixed_navi_body'
                },
            structure:[
                {id:'navi', ui:'navibar'},
                {id:'carousel', ui:'carousel', dataId:carouselId}
            ]
        }
    ]);
});

dao.delete('carousel',{}, function(){
    dao.addNew('carousel', [
        {_id: carouselId, 
         items:[
            {title:'Cloud VPN Structure', desc:'This is our core product', src:'/web/img/cloudVpnStru.png'},
            {title:'Cloud VPN Logic', desc:'This is our core product', src:'/web/img/cloudVpnTopo.png'}
        ]}
    ]);
});

dao.delete('navi', {}, function(){
    // add navigation
    dao.addNew('navi', [
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
    ]);
});