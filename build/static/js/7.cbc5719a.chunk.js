(this.webpackJsonpcustomer_require=this.webpackJsonpcustomer_require||[]).push([[7],{703:function(e,t,a){"use strict";var r=a(0),l=a.n(r);a(704);t.a=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",minHeight:"calc(100vh - 65px - 105px)",alignItems:"center"}},l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}},704:function(e,t,a){},749:function(e,t,a){"use strict";a.r(t);var r=a(71),l=a(0),n=a.n(l),s=a(22),c=a(714),o=a.n(c),i=a(202),m=a(748),d=a(703),u=a(27);t.default=Object(s.b)((function(e){return{user:e.auth.user}}),null)((function(e){var t=Object(l.useState)([]),a=Object(r.a)(t,2),s=a[0],c=a[1],f=Object(l.useState)(!1),g=Object(r.a)(f,2),h=g[0],b=g[1];Object(l.useEffect)((function(){v()}),[]);var v=function(){b(!0),Object(i.a)("get","report/getReportDashboard").then((function(e){var t=e.data;if(t.signal){for(var a=[],r=0;r<t.data.listUserAnswers.length;r++){var l={totalForm:t.data.totalForms[r],totalUser:t.data.totalUsers[r],title:t.data.listTitle[r],dataLabel:{chart:{zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{floating:!0,axisTicks:{show:!1},axisBorder:{show:!1},labels:{show:!1},categories:t.data.listForms[r].listForm},yaxis:{labels:{formatter:function(e){return"".concat(e," ng\u01b0\u1eddi")},background:{enabled:!0,foreColor:"#fff",padding:4,borderRadius:2,borderWidth:1,borderColor:"#fff",opacity:.9,dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}}}}},data:[{name:"S\u1ed1 ng\u01b0\u1eddi tham gia",data:t.data.listUserAnswers[r].listUserAnswer}]};a.push(l)}c([].concat(a))}b(!1)}))};return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"kt-section"},n.a.createElement(m.a,null,n.a.createElement(m.a.Body,null,h?n.a.createElement(d.a,null):n.a.createElement(n.a.Fragment,null,s&&s.length&&s.map((function(e,t){return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("div",{className:"row",style:{marginTop:"20px",marginBottom:"20px"}},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{style:{margin:"auto",textAlign:"center",fontSize:"30px",font:"bold",marginBottom:"10px",color:"#122352"}},"Bi\u1ec3u \u0111\u1ed3 \u0111\u1ee3t kh\u1ea3o s\xe1t ",e.title),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"card card-custom bg-success gutter-b",style:{height:"150px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("i",{className:"flaticon2-analytics-2 text-white icon-2x"}," "),n.a.createElement("div",{className:"text-inverse-success font-weight-bolder font-size-h2 mt-3"},e.totalForm||0),n.a.createElement(u.Link,{href:"#",className:"text-inverse-success font-weight-bold font-size-lg mt-1"},"T\u1ed5ng s\u1ed1 form trong \u0111\u1ee3t")))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"card card-custom bg-primary gutter-b",style:{height:"150px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("i",{className:"flaticon2-shopping-cart-1 text-white icon-2x"}," "),n.a.createElement("div",{className:"text-inverse-success font-weight-bolder font-size-h2 mt-3"}," ",e.totalUser||0," "),n.a.createElement(u.Link,{href:"#",className:"text-inverse-success font-weight-bold font-size-lg mt-1"},"T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi tham gia"))))))),n.a.createElement("div",{id:"chart",style:{borderBottom:"solid",borderWidth:"thin",marginBottom:"50px",borderColor:"#B9F8FB"}},n.a.createElement(o.a,{options:e.dataLabel,series:e.data,type:"bar",height:350})))}))))))))}))}}]);
//# sourceMappingURL=7.cbc5719a.chunk.js.map