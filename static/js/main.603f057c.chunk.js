(this["webpackJsonpmap-design"]=this["webpackJsonpmap-design"]||[]).push([[0],{118:function(t,e,a){},120:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),i=a(22),l=a.n(i),u=(a(91),a(32)),o=a(124),s=a(126),r=a(131),d=a(132),j=a(133),b=a(134),v=a(135),g=(a(92),a(128)),O=a(130),h=a(129),x=a(47),p=a(83),m=a(9),f=function(t){var e=t.mapStyle,a=t.defaultLatitude,n=t.defaultLongitude,i=t.defaultCity,l={latitude:a,longitude:n,zoom:11,width:"400px",height:"400px",labels:!1},o=Object(c.useState)(l),s=Object(u.a)(o,2),r=s[0],d=s[1];return Object(c.useEffect)((function(){d(Object(x.a)(Object(x.a)({},l),{},{latitude:a,longitude:n}))}),[a,n]),Object(m.jsxs)("div",{className:"map-box-wrapper",children:[Object(m.jsx)(p.a,Object(x.a)(Object(x.a)({},r),{},{style:{margin:"0 auto"},mapStyle:e,mapboxApiAccessToken:"pk.eyJ1IjoiaXZhbmRyYWdvIiwiYSI6ImNrcG9odnc2eTBscGgzMXA0dTdseHh3Z2oifQ.BcuLTD0qDBvUY1tYyXzDEA",onViewportChange:function(t){return d(t)}})),Object(m.jsx)("div",{className:"map-box-city",children:Object(m.jsx)("p",{className:"map-box-city-title",children:i})})]})},y=a(125),S=a(127),L=a(123),N=y.a.Search,D=[{value:{latitude:50.4501,longitude:30.5234},title:"Kyiv"},{value:{latitude:52.3676,longitude:4.9041},title:"Amsterdam"},{value:{latitude:41.0082,longitude:28.9784},title:"Istanbul"},{value:{latitude:41.9028,longitude:12.4964},title:"Rome"},{value:{latitude:48.8566,longitude:2.3522},title:"Paris"}],C=function(t){var e=t.setDefaultLatitude,a=t.setDefaultLongitude,c=t.setDefaultCity;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{placeholder:"input city",style:{paddingBottom:"10px"},onSearch:function(t){return console.log(t)},enterButton:!0}),Object(m.jsx)(S.a.Group,{defaultValue:"Kyiv",buttonStyle:"solid",onChange:function(t){e(t.target.latitude),a(t.target.longitude),c(t.target.value)},children:Object(m.jsx)(h.b,{direction:"horizontal",wrap:!0,children:D.map((function(t){return Object(m.jsx)(S.a.Button,{value:t.title,latitude:t.value.latitude,longitude:t.value.longitude,children:t.title},t.title)}))})}),Object(m.jsx)(L.a,{})]})},k=function(t){var e=t.mapStyle,a=t.setMapStyle,c=t.navList;return Object(m.jsx)(h.b,{children:Object(m.jsx)(g.a,{gutter:24,children:Object(m.jsx)(O.a,{xs:24,children:Object(m.jsx)(S.a.Group,{defaultValue:e,buttonStyle:"solid",onChange:function(t){return a(t.target.value)},children:Object(m.jsx)(h.b,{direction:"horizontal",wrap:!0,children:c.map((function(t){return Object(m.jsx)(S.a.Button,{value:t.value,children:t.title},t.value)}))})})})})})},w="mapbox://styles/mapbox",I="streets-v11",B=[{value:"".concat(w,"/").concat(I),title:"Simple"},{value:"".concat(w,"/").concat("light-v10"),title:"Light"},{value:"".concat(w,"/").concat("dark-v10"),title:"Dark"},{value:"".concat(w,"/").concat("outdoors-v11"),title:"Green"},{value:"".concat(w,"/").concat("satellite-v9"),title:"Satellite"},{value:"".concat(w,"/").concat("satellite-streets-v11"),title:"Earth"},{value:"".concat(w,"/").concat("navigation-preview-day-v4"),title:"Navy Day"},{value:"".concat(w,"/").concat("navigation-preview-night-v4"),title:"Navy Night"},{value:"".concat(w,"/").concat("navigation-guidance-day-v4"),title:"Guidance Day"},{value:"".concat(w,"/").concat("navigation-guidance-night-v4"),title:"Guidance Night"}],G=function(){var t=Object(c.useState)("".concat(w,"/").concat(I)),e=Object(u.a)(t,2),a=e[0],n=e[1],i=Object(c.useState)(50.4501),l=Object(u.a)(i,2),o=l[0],s=l[1],r=Object(c.useState)(30.5234),d=Object(u.a)(r,2),j=d[0],b=d[1],v=Object(c.useState)("Kyiv"),x=Object(u.a)(v,2),p=x[0],y=x[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g.a,{gutter:24,children:[Object(m.jsx)(O.a,{xs:24,md:8,children:Object(m.jsxs)(h.b,{direction:"vertical",children:[Object(m.jsx)(C,{setDefaultLatitude:s,setDefaultLongitude:b,setDefaultCity:y}),Object(m.jsx)(k,{mapStyle:a,setMapStyle:n,navList:B})]})}),Object(m.jsx)(O.a,{xs:24,md:16,children:Object(m.jsx)(f,{mapStyle:a,defaultLatitude:o,defaultLongitude:j,defaultCity:p})})]})})},A=o.a.Header,F=o.a.Sider,T=o.a.Content,z=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),a=e[0],i=e[1];return Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(F,{trigger:null,collapsible:!0,collapsed:a,children:[Object(m.jsx)("div",{className:"logo"}),Object(m.jsxs)(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(m.jsx)(s.a.Item,{icon:Object(m.jsx)(r.a,{}),children:"nav 1"},"1"),Object(m.jsx)(s.a.Item,{icon:Object(m.jsx)(d.a,{}),children:"nav 2"},"2"),Object(m.jsx)(s.a.Item,{icon:Object(m.jsx)(j.a,{}),children:"nav 3"},"3")]})]}),Object(m.jsxs)(o.a,{className:"site-layout",children:[Object(m.jsx)(A,{className:"site-layout-background",children:n.a.createElement(a?b.a:v.a,{className:"trigger",onClick:function(){return i(!a)}})}),Object(m.jsx)(T,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(m.jsx)(G,{})})]})]})};a(118);var E=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(z,{})})},K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,l=e.getTTFB;a(t),c(t),n(t),i(t),l(t)}))};a(119);l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),K()},91:function(t,e,a){},92:function(t,e,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.603f057c.chunk.js.map