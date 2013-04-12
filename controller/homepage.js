exports.index =  {
    path: '/home',
    method: 'get',
    before: function(req, res, next){
        //res.send("Before <br>");
        console.log("before");
        next();
    },
    run: function(req, res){
        var uiFactory = require('../uiFactory');
        var html= [];
        var navibar = uiFactory.create('navibar',{
            config:{
                brand: "Brand",
                container: "container",
                fixedTop:1
            },
            items: [
                {active:1,
                label:'Products',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {
                label:'Solutions',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {
                label:'Customers',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {active:1,
                label:'Partners',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]}
            ]
        });
        html.push(navibar.html);
        var navi = uiFactory.create('navi',{
            config:{
                pill: 1                
            },
            items: [
                {active:1,
                label:'Products',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {
                label:'Solutions',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {
                label:'Customers',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]},
                {active:1,
                label:'Partners',
                items: [
                    {label:'Cloud VPN',
                     url:'/vpn'
                    },
                    {label:'Cloud Router',
                     url:'/router'
                    }
                ]}
            ]
        });
        html.push(navi.html);
        var menu = uiFactory.create('menu',{
            labelBy:'123123',
            config:{
                
            },
            items:[
                {label:'Produce', url:'/product/'},
                {seperator:1},
                {label:'link2'},
                {label:'link3', items:[
                    {label:'link1'},
                    {label:'link2'},
                    {seperator:1},
                    {label:'link3' }
                ]
                }
            ]
        });
        html.push(menu.html);
        var table = uiFactory.create('grid',  {
            fluid : true,
            rows:[
                [{span:2, offset:1, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:1, body: 'Span 4'}],
                [{span:1, offset:1, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:2, body: 'Span 4'}],
                [{span:1, offset:2, body:'span1, offset2'},
                {span:4, body: 'Span 4'},
                {span:4, body: 'Span 4'},
                {span:1, body: 'Span 2'}]
            ]
        });
        var body = uiFactory.create('layout', {
            config:{fluid: 0},
            body: table.html
        });
        html.push(body.html);
        html.push('<script language="javascript">$(".dropdown-toggle").dropdown()</script>');
        var ui = uiFactory.create('page', {
            title : 'node site home page',
            body: html.join(''),
            description:'node site home page'
        });
        res.set({
            'Content-Length': ui.html.length
        });
        
        res.send(ui.html);
    },
    after: function(req, res){
        res.send('After');
    }
};
