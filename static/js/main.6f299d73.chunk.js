(this["webpackJsonpmap-design"]=this["webpackJsonpmap-design"]||[]).push([[0],{107:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(16),l=a.n(n),s=(a(85),a(23)),o=a(117),j=a(118),r=a(121),b=a(119),u=a(120),d=a(21),O=a(53),x=a.p+"static/media/building-level-all.ae146d5b.geojson",h=a.p+"static/media/building-level-9-16.00bcc48c.geojson",f=a.p+"static/media/building-level-17-20.fe362619.geojson",p=a.p+"static/media/building-level-21-29.4dba5190.geojson",g=a(9),m=function(e){var t=e.mapStyle,a=e.defaultLatitude,c=e.defaultLongitude,n=e.activeMenuKey,l={latitude:a,longitude:c,zoom:14,pitch:45,container:"map",antialias:!0,width:"100%",height:"500px",labels:!1},o={id:"extrusion",type:"fill-extrusion",source:{type:"geojson",data:{type:"FeatureCollection",features:[]}},paint:{"fill-extrusion-color":"#fff","fill-extrusion-height":20,"fill-extrusion-opacity":.9}},j=Object(i.useState)(l),r=Object(s.a)(j,2),b=r[0],u=r[1],m=Object(i.useState)(o),y=Object(s.a)(m,2),v=y[0],S=y[1],k=Object(i.useState)(x),w=Object(s.a)(k,2),I=w[0],C=w[1];Object(i.useEffect)((function(){u(Object(d.a)(Object(d.a)({},l),{},{latitude:a,longitude:c}))}),[a,c]),Object(i.useEffect)((function(){F(n)}),[n]);var F=function(e){switch(e.activeMenuKey){case"all":S(o),C(x);break;case"9-16":S(Object(d.a)(Object(d.a)({},o),{},{paint:{"fill-extrusion-color":"yellow","fill-extrusion-height":45.5}})),C(h);break;case"17-20":S(Object(d.a)(Object(d.a)({},o),{},{paint:{"fill-extrusion-color":"orange","fill-extrusion-height":63}})),C(f);break;case"21-29":S(Object(d.a)(Object(d.a)({},o),{},{paint:{"fill-extrusion-color":"red","fill-extrusion-height":87.5}})),C(p);break;default:S(o),C(x)}};return Object(g.jsx)("div",{className:"map-box-wrapper",children:Object(g.jsx)(O.c,Object(d.a)(Object(d.a)({},b),{},{style:{margin:"0 auto"},mapStyle:t,mapboxApiAccessToken:"pk.eyJ1IjoiaXZhbmRyYWdvIiwiYSI6ImNrZ2Rzdng3dzEwam4yeXFhNmtkM2FlejMifQ.lhT4dTPZIMEBqm6wLQtxaQ",onViewportChange:function(e){return u(e)},children:Object(g.jsx)(O.b,{type:"geojson",data:I,children:Object(g.jsx)(O.a,Object(d.a)({},v))})}))})},y=function(e){var t=Object(i.useState)(50.38603),a=Object(s.a)(t,2),c=a[0],n=(a[1],Object(i.useState)(30.47211)),l=Object(s.a)(n,2),o=l[0];l[1];return Object(g.jsx)(b.a,{gutter:24,children:Object(g.jsx)(u.a,{xs:24,children:Object(g.jsx)(m,{mapStyle:"mapbox://styles/mapbox/streets-v8",defaultLatitude:c,defaultLongitude:o,activeMenuKey:e})})})},v=(a(107),o.a.Header),S=o.a.Content,k=o.a.Footer,w=o.a.Sider,I=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)("all"),l=Object(s.a)(n,2),b=l[0],u=l[1];return Object(g.jsxs)(o.a,{style:{minHeight:"100vh"},children:[Object(g.jsxs)(w,{collapsible:!0,collapsed:a,onCollapse:function(){return c(!a)},children:[Object(g.jsx)("div",{className:"logo"}),Object(g.jsxs)(j.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",onClick:function(e){var t=e.key;return u(t)},children:[Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(r.a,{}),children:"Show All"},"all"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(r.a,{}),children:"Show 9-16"},"9-16"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(r.a,{}),children:"Show 17-20"},"17-20"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(r.a,{}),children:"Show 21-29"},"21-29")]})]}),Object(g.jsxs)(o.a,{className:"site-layout",children:[Object(g.jsx)(v,{className:"site-layout-background",style:{padding:0}}),Object(g.jsx)(S,{style:{margin:"0 16px"},children:Object(g.jsx)(y,{activeMenuKey:b})}),Object(g.jsx)(k,{style:{textAlign:"center"},children:"MapBox Kyiv buildings height Created by Filkovskyi Sergey"})]})]})};a(112);var C=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(I,{})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),i(e),c(e),n(e),l(e)}))};a(113);l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),F()},85:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.6f299d73.chunk.js.map