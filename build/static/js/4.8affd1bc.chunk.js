(this.webpackJsonpcustomer_require=this.webpackJsonpcustomer_require||[]).push([[4],{703:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(704);t.a=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",minHeight:"calc(100vh - 65px - 105px)",alignItems:"center"}},l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}},704:function(e,t,a){},705:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(15);t.a=function(e){return l.a.createElement("button",{type:e.type||"default",className:"".concat(Object(c.a)({"kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light":e.loading})," ").concat(e.className||""),onClick:e.onClick?e.onClick:null,style:e.style||null,disabled:!0===e.disabled},e.children)}},708:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){e.focus&&t.current.focus()}),[]),l.a.createElement("input",{type:e.type||"text",className:"form-control inline-block ".concat(e.className||""),placeholder:e.placeholder||"",value:e.value,min:e.min||"",maxLength:e.maxLength||"",onChange:function(t){e.onChangeValue(t.target.value)},onKeyPress:e.onKeyPress?function(t){e.onKeyPress(t)}:null,required:e.isRequired||!1,readOnly:e.isReadOnly||!1,ref:t,style:e.style})}},745:function(e,t,a){},757:function(e,t,a){"use strict";a.r(t);var n=a(115),l=a(18),c=a(82),r=a(0),i=a.n(r),m=a(717),o=a(694),u=a(751),s=a(752),d=a(753),b=a(754),p=a(755),g=a(756),E=(a(745),a(713)),h=a(759),f=a(697),v=a(747),O=a(708),j=a(703),y=a(705),w=a(24),N=a(198),C=a(242),k=E.a.Option,S=Object(m.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},row:{},row1:{backgroundColor:"#f2e6ff"}}}));t.default=Object(w.b)((function(e){return{user:e.auth.user}}),null)((function(e){var t=S(),a=Object(r.useState)(1),m=Object(c.a)(a,2),w=m[0],T=m[1],x=Object(r.useState)([]),_=Object(c.a)(x,2),B=_[0],K=_[1],Y=Object(r.useState)({}),D=Object(c.a)(Y,2),R=D[0],V=D[1],X=Object(r.useState)({visible:!1}),q=Object(c.a)(X,2),L=q[0],P=q[1],z=Object(r.useState)({visible:!1}),H=Object(c.a)(z,2),M=H[0],A=H[1],I=Object(r.useState)({}),J=Object(c.a)(I,2),F=J[0],G=J[1],Q=Object(r.useState)(!1),U=Object(c.a)(Q,2),W=U[0],Z=U[1],$=Object(r.useState)(0),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(!0),le=Object(c.a)(ne,2),ce=le[0],re=le[1],ie=Object(r.useState)(!1),me=Object(c.a)(ie,2),oe=me[0],ue=me[1],se=Object(r.useState)("name"),de=Object(c.a)(se,2),be=de[0],pe=de[1],ge=Object(r.useState)("up"),Ee=Object(c.a)(ge,2),he=Ee[0],fe=Ee[1],ve=Object(r.useState)("up"),Oe=Object(c.a)(ve,2),je=Oe[0],ye=Oe[1],we=Object(r.useState)("up"),Ne=Object(c.a)(we,2),Ce=Ne[0],ke=Ne[1],Se=Object(r.useState)("up"),Te=Object(c.a)(Se,2),xe=Te[0],_e=Te[1],Be=Object(r.useState)("up"),Ke=Object(c.a)(Be,2),Ye=Ke[0],De=Ke[1],Re=Object(r.useState)("up"),Ve=Object(c.a)(Re,2),Xe=Ve[0],qe=Ve[1];Object(r.useEffect)((function(){Le({page:1,limit:10,typeOrder:be,stateOrder:he})}),[]);var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};re(!0),Object(N.a)("get","customer/search",e).then((function(e){var t=e.data;if(t.signal){var a=t.data,n=a.allCustomer,l=a.total;K(n),ae(l)}re(!1)})).catch((function(e){re(!1),console.log(e)}))},Pe=function(e,t){V(Object(l.a)(Object(l.a)({},R),{},Object(n.a)({},e,t)))},ze=function(){P(Object(l.a)(Object(l.a)({},L),{},{visible:!1,idDel:0}))},He=function(e){ue(!0),ze(),ue(!1),Object(N.a)("get","customer/delete",{id:L.id}).then((function(e){if(e.data.signal){Object(C.b)("X\xf3a th\xe0nh c\xf4ng");var t=B.filter((function(e){return e.id!==L.id}));K(t),ze()}})).catch((function(e){Object(C.a)("X\xf3a th\u1ea5t b\u1ea1i"),console.log(e)}))},Me=function(){A(Object(l.a)(Object(l.a)({},M),{},{visible:!1,idDel:0}))},Ae=function(e){Z(!0),Me(),Z(!1),Object(N.a)("get","customer/seen",{id:M.id}).then((function(e){e.data.signal&&(V({}),Le(Object(l.a)(Object(l.a)({},R),{},{page:1,limit:10})),Me())})).catch((function(e){console.log(e)}))},Ie=function(e,t){pe(e),fe(t),"seen"===e&&qe(t),"name"===e&&ye(t),"company_name"===e&&ke(t),"email"===e&&_e(t),"type"===e&&De(t),T(1),Le(Object(l.a)(Object(l.a)({},R),{},{page:1,limit:10,typeOrder:e,stateOrder:t}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"kt-section"},i.a.createElement("div",{className:"kt-section__content"},i.a.createElement(o.a,{className:t.root,elevation:4},i.a.createElement("div",{className:"labelList1"},i.a.createElement("label",null,"Danh S\xe1ch Y\xeau C\u1ea7u Kh\xe1ch H\xe0ng")),i.a.createElement("div",{className:"col-md-12 part"},i.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),T(1),Le(Object(l.a)(Object(l.a)({},R),{},{page:1,limit:10}))}},i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-2 searchBox"},i.a.createElement("div",{className:"form-group"},i.a.createElement(O.a,{type:"text",placeholder:"T\xecm theo t\xean kh\xe1ch h\xe0ng",value:R.name||"",onChangeValue:function(e){Pe("name",e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement(O.a,{type:"text",placeholder:"T\xecm theo email kh\xe1ch h\xe0ng",value:R.email||"",onChangeValue:function(e){Pe("email",e)}}))),i.a.createElement("div",{className:"form-group col-md-2 searchBox"},i.a.createElement("div",{className:"form-group"},i.a.createElement(O.a,{type:"text",placeholder:"T\xecm theo t\xean c\xf4ng ty",value:R.company_name||"",onChangeValue:function(e){Pe("company_name",e)}})),i.a.createElement("div",{className:"form-group"},i.a.createElement(O.a,{type:"text",placeholder:"T\xecm theo s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ",value:R.phone||"",onChangeValue:function(e){Pe("phone",e)}}))),i.a.createElement("div",{className:"form-group col-md-2 searchBox"},i.a.createElement("div",{className:"form-group"},i.a.createElement(E.a,{value:R.type||"Y\xeau C\u1ea7u T\u1eeb",onChange:function(e){return Pe("type",e)},className:"selectBox"},i.a.createElement(k,{value:"0"},"M\xe1y T\xednh "),i.a.createElement(k,{value:"1"},"\u0110i\u1ec7n Tho\u1ea1i"))),i.a.createElement("div",{className:"form-group"},i.a.createElement(E.a,{value:R.seen||"Tr\u1ea1ng th\xe1i",onChange:function(e){return Pe("seen",e)},className:"selectBox"},i.a.createElement(k,{value:"0"},"Ch\u01b0a \u0110\u1ecdc "),i.a.createElement(k,{value:"1"},"\u0110\xe3 \u0110\u1ecdc")))),i.a.createElement("div",{className:"form-group col-md-2"},i.a.createElement("div",Object(n.a)({className:"form-group"},"className","sacButton"),i.a.createElement("button",{className:"btn btn-label-primary btn-bold btn-sm btn-icon-h kt-margin-l-10",onClick:function(e){V({}),T(1),Le({page:1,limit:10})},type:"button"},i.a.createElement("span",null,"B\u1ecf l\u1ecdc")),i.a.createElement(y.a,{type:"submit",className:"btn btn-label-primary btn-bold btn-sm btn-icon-h kt-margin-l-10",loading:ce},i.a.createElement("span",null,"T\xecm ki\u1ebfm"))))))),ce?i.a.createElement(j.a,null):i.a.createElement(o.a,{className:"tablePaper",elevation:0},i.a.createElement(u.a,{className:"table"},i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null,"T\xean kh\xe1ch h\xe0ng (","down"===je&&i.a.createElement("img",{onClick:function(){return Ie("name","up")},src:"/images/down-arrow.png",width:10,height:15})||i.a.createElement("img",{onClick:function(){return Ie("name","down")},src:"/images/up-arrow.png",width:10,height:15}),")"),i.a.createElement(b.a,null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),i.a.createElement(b.a,null,"Email kh\xe1ch h\xe0ng (","down"===xe&&i.a.createElement("img",{onClick:function(){return Ie("email","up")},src:"/images/down-arrow.png",width:10,height:15})||i.a.createElement("img",{onClick:function(){return Ie("email","down")},src:"/images/up-arrow.png",width:10,height:15}),")"),i.a.createElement(b.a,null,"T\xean C\xf4ng Ty (","down"===Ce&&i.a.createElement("img",{onClick:function(){return Ie("company_name","up")},src:"/images/down-arrow.png",width:10,height:15})||i.a.createElement("img",{onClick:function(){return Ie("company_name","down")},src:"/images/up-arrow.png",width:10,height:15}),")"),i.a.createElement(b.a,null," Y\xeau c\u1ea7u t\u1eeb (","down"===Ye&&i.a.createElement("img",{onClick:function(){return Ie("type","up")},src:"/images/down-arrow.png",width:10,height:15})||i.a.createElement("img",{onClick:function(){return Ie("type","down")},src:"/images/up-arrow.png",width:10,height:15}),")"),i.a.createElement(b.a,null,"Tr\u1ea1ng th\xe1i (","down"===Xe&&i.a.createElement("img",{onClick:function(){return Ie("seen","up")},src:"/images/down-arrow.png",width:10,height:15})||i.a.createElement("img",{onClick:function(){return Ie("seen","down")},src:"/images/up-arrow.png",width:10,height:15}),")"),i.a.createElement(b.a,{className:"btnAction"},"Action"))),i.a.createElement(p.a,null,B&&B.length?B.map((function(e,a){return i.a.createElement(d.a,{className:e.seen?t.row:t.row1,key:"customer-".concat(a)},i.a.createElement(b.a,null," ",i.a.createElement("div",{className:"cell"},e.name)),i.a.createElement(b.a,null,i.a.createElement("div",{className:"cell"},e.phone)),i.a.createElement(b.a,null,i.a.createElement("div",{className:"cell"},e.email)),i.a.createElement(b.a,null,i.a.createElement("div",{className:"cell"},e.company_name)),i.a.createElement(b.a,null,0==e.type?"M\xe1y T\xednh":"\u0110i\u1ec7n Tho\u1ea1i"),i.a.createElement(b.a,null,1===e.seen?i.a.createElement("span",{className:"btn btn-label-primary btn-bold btn-sm btn-icon-h",style:{borderRadius:".42rem"}},"\u0110\xe3 \u0110\u1ecdc"):i.a.createElement("span",{className:"btn btn-label-warning btn-bold btn-sm btn-icon-h",style:{borderRadius:".42rem"}},"Ch\u01b0a \u0110\u1ecdc")),i.a.createElement(b.a,null,i.a.createElement("span",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Detail"},i.a.createElement(g.a,{className:"fa fa-info-circle",onClick:function(t){var a;a=e.id,Object(N.a)("get","customer/getbyId",{id:a}).then((function(e){var t=e.data;t.signal&&G(t.data)})).catch((function(e){console.log(e)})),A({id:a,visible:!0})},style:{color:"#0000ff",fontSize:15}})),i.a.createElement("span",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Delete"},i.a.createElement(g.a,{className:"fa fa-trash",onClick:function(){return t=e.id,void P({id:t,visible:!0});var t},style:{color:"rgb(220, 0, 78)",fontSize:15,marginLeft:15}}))))})):i.a.createElement(d.a,null,i.a.createElement(b.a,{colSpan:10,align:"center"},"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"))))),te>10&&i.a.createElement("div",{className:"custom-svg customSelector"},i.a.createElement(h.a,{className:"pagination-crm",current:w,pageSize:10,total:te,onChange:function(e,t){return T(a=e),void Le(Object(l.a)(Object(l.a)({},R),{},{page:a,limit:10}));var a}})))),i.a.createElement(f.a,{title:"X\xf3a Y\xeau C\u1ea7u",visible:L.visible,onOk:He,onCancel:ze,footer:[i.a.createElement(y.a,{type:"default",onClick:ze,className:"btn btn-label-secondary btn-secondary"},"\u0110\xf3ng"),i.a.createElement(y.a,{className:"btn btn-label-danger btn-danger",onClick:He,loading:oe},i.a.createElement("span",null,"X\xf3a"))]},i.a.createElement("p",null,"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a y\xeau c\u1ea7u n\xe0y?")),i.a.createElement(f.a,{width:1200,title:"Y\xeau C\u1ea7u C\u1ee7a Kh\xe1ch H\xe0ng",visible:M.visible,onOk:Ae,onCancel:Ae,footer:[i.a.createElement(y.a,{className:"btn btn-label-primary btn-primary",onClick:Ae,loading:W},i.a.createElement("span",null,"OK"))]},i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("td",null,"T\xean "),i.a.createElement("td",null,": ",F.name)),i.a.createElement("tr",null,i.a.createElement("td",null,"Email  "),i.a.createElement("td",null,": ",F.email)),i.a.createElement("tr",null,i.a.createElement("td",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i "),i.a.createElement("td",null,": ",F.phone)),i.a.createElement("tr",null,i.a.createElement("td",null,"T\xean C\xf4ng Ty :"),i.a.createElement("td",null,": ",F.company_name," ")),i.a.createElement("tr",null,i.a.createElement("td",null,"Y\xeau c\u1ea7u t\u1eeb "),i.a.createElement("td",null,": ",0==F.type?"M\xe1y T\xednh":"\u0110i\u1ec7n Tho\u1ea1i")),i.a.createElement("tr",null,i.a.createElement("td",null,"Y\xeau C\u1ea7u "),i.a.createElement("td",{id:"des"},": ",F.description))))))))}))}}]);
//# sourceMappingURL=4.8affd1bc.chunk.js.map