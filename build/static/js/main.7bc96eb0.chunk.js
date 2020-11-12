(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),l=t.n(r),i=(t(86),t(14)),o=t(38),u=t(12),s=t(105),m=t(150),d=t(135),f=t(136),E=t(147),p=t(27),b=t(18),v=t(65),h=function e(a){Object(v.a)(this,e),this.name=a,this.checked=!1,this.tags={dairy:!1,vegetable:!1,fruit:!1,meat:!1,sweet:!1,fiber:!1,other:!1}};t(91);var g=function(e){var a=e.setFilter,t=e.toggleFilterMenu,n=e.setToggleFilterMenu;return c.a.createElement("div",{className:"FilterMenu",style:{display:"".concat(t?"initial":"none")}},c.a.createElement(s.a,{elevation:5},c.a.createElement(p.a,{icon:b.j,onClick:function(){return n(!t)}}),c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,null,"All",c.a.createElement(E.a,{value:"",onChange:function(e){a(e.currentTarget.value)}})),Object.entries((new h).tags).map((function(e,t){var n=Object(i.a)(e,1)[0];return c.a.createElement(f.a,{key:t},n,c.a.createElement(E.a,{value:n,onChange:function(e){a(e.currentTarget.value)}}))}))))))},y=t(137),O=t(138),j=t(16),k=t.n(j),C={dairy:b.d,vegetable:b.c,fruit:b.a,meat:b.f,sweet:b.e,fiber:b.b,other:b.i};t(93);var w=function(e){var a=e.list,t=e.filter,n=e.user,r=Object(u.f)();return c.a.createElement(d.a,{className:"CheckList"},Object.keys(a).filter((function(e){var n=a[e].tags;return!t||n[t]})).map((function(e,t){var l=a[e],o=l.name,u=l.checked,s=l.tags;return c.a.createElement(f.a,{key:t},c.a.createElement(y.a,{style:{textDecoration:"".concat(u?"line-through":"none")},primary:o,secondary:c.a.createElement("span",null,Object.entries(s).map((function(e,a){var t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement(p.a,{key:a,icon:C[n],style:{opacity:"".concat(r?1:.4)}})}))),onClick:function(){k.a.database().ref("".concat(n.uid,"/").concat(e,"/checked")).set(!u)}}),c.a.createElement(O.a,{onClick:function(){return r.push("/edit/".concat(e))}},c.a.createElement(p.a,{icon:b.g})))})))},S=t(139),A=t(140),I=t(141),N=t(142),M=t(149);t(95);var x=function(e){var a=e.list,t=e.user,r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],s=l[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),f=d[0],E=d[1],v=Object(u.f)();return t||v.push("/"),c.a.createElement("div",{className:"Home"},c.a.createElement(S.a,{position:"fixed"},c.a.createElement(A.a,null,c.a.createElement(I.a,{startIcon:c.a.createElement(p.a,{icon:b.h}),onClick:function(){return E(!f)}},"filter"),c.a.createElement(I.a,{color:"inherit",onClick:function(){return k.a.auth().signOut()}},"Sign Out"))),c.a.createElement(w,{list:a,filter:o,user:t}),c.a.createElement(N.a,{color:"primary","aria-label":"add",onClick:function(){return v.push("/edit/0")}},c.a.createElement(M.a,null)),c.a.createElement(g,{filter:o,setFilter:s,toggleFilterMenu:f,setToggleFilterMenu:E}))},F=(t(96),t(143)),P=t(134),B=t(146);t(98);var T=function(e){var a=e.user,t=Object(u.f)(),r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],s=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),f=d[0],E=d[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){a&&t.push("/home")}),[a,t]),c.a.createElement("div",{className:"Login"},c.a.createElement(F.a,null,c.a.createElement("h1",null,"PANTRY"),c.a.createElement(P.a,null,c.a.createElement("div",null,c.a.createElement(B.a,{label:"Email",variant:"outlined",color:"primary",value:o,onChange:function(e){return s(e.target.value)}}),c.a.createElement(B.a,{label:"Password",variant:"outlined",color:"primary",type:"password",value:f,onChange:function(e){return E(e.target.value)}})),c.a.createElement("span",null,v),c.a.createElement("div",null,c.a.createElement(I.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){return k.a.auth().signInWithEmailAndPassword(o,f).catch((function(e){return h(e.message)}))}},"Sign In"),c.a.createElement("br",null),c.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){return k.a.auth().createUserWithEmailAndPassword(o,f).catch((function(e){return h(e.message)}))}},"Create Account"))),c.a.createElement("footer",null,"PANTRY | Developed by @claytoncook")))},U=t(71),D=t(144),J=t(145),L=t(148);t(99);var W=function(e){var a=e.params,t=e.user,r=e.list,l=Object(u.f)();t||l.push("/");var o=a.key,s=Object(n.useState)(r[o]||new h("")),m=Object(i.a)(s,2),d=m[0],f=(m[1],Object(n.useState)(null===d||void 0===d?void 0:d.name)),E=Object(i.a)(f,2),b=E[0],v=E[1],g=Object(n.useState)(null===d||void 0===d?void 0:d.tags),y=Object(i.a)(g,2),O=y[0],j=y[1];return c.a.createElement("div",{className:"Edit"},c.a.createElement(S.a,{position:"fixed"},c.a.createElement(A.a,null,c.a.createElement("h3",null,"Add Item"),c.a.createElement(I.a,{color:"inherit",onClick:function(){return k.a.auth().signOut()}},"Sign Out"))),c.a.createElement(F.a,null,c.a.createElement(P.a,null,c.a.createElement(B.a,{variant:"outlined",label:"Name",value:b,onChange:function(e){return v(e.target.value)}}),c.a.createElement(D.a,null),Object.entries(O).map((function(e,a){var t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement(J.a,{key:a,control:c.a.createElement(L.a,{checked:r,onChange:function(){var e=Object(U.a)({},O);e[n]=!r,j(e)}}),label:c.a.createElement("span",null,c.a.createElement("span",null,n),c.a.createElement(p.a,{icon:C[n],style:{opacity:"".concat(r?1:.4)}}))})})),c.a.createElement(D.a,null),c.a.createElement("div",null,c.a.createElement(I.a,{disabled:!b,variant:"contained",color:"primary",type:"submit",onClick:function(){r[o]?(console.log("Update"),k.a.database().ref("".concat(t.uid,"/").concat(o)).set({name:b,checked:!1,tags:O})):(console.log("Add"),k.a.database().ref("".concat(t.uid,"/")).push({name:b,checked:!1,tags:O})),l.goBack()}},r[o]?"Update":"Add"),c.a.createElement("br",null),c.a.createElement(I.a,{disabled:!d.name,variant:"contained",color:"primary",type:"submit",onClick:function(){k.a.database().ref("".concat(t.uid,"/").concat(o)).remove(),l.goBack()}},"Delete"),c.a.createElement("br",null),c.a.createElement(I.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){l.goBack()}},"Cancel")))))},z=t(69);t(100),t(104),t(102);k.a.initializeApp(z),k.a.analytics();var H=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)({}),s=Object(i.a)(l,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){k.a.auth().onAuthStateChanged((function(e){r(e)}))}),[]),Object(n.useEffect)((function(){t&&k.a.database().ref(t.uid).on("value",(function(e){var a=e.val();d(a||{})}))}),[t]),c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(T,{user:t})),c.a.createElement(u.a,{exact:!0,path:"/home"},c.a.createElement(x,{list:m,user:t})),c.a.createElement(u.a,{exact:!0,path:"/edit/:key",component:function(e){var a=e.match;return c.a.createElement(W,{params:a.params,user:t,list:m})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAQwwYHPkvUXEJmSZuZ5bE3nMA0VHzPorg","authDomain":"pantry-5afe3.firebaseapp.com","databaseURL":"https://pantry-5afe3.firebaseio.com","projectId":"pantry-5afe3","storageBucket":"pantry-5afe3.appspot.com","messagingSenderId":"459728399580","appId":"1:459728399580:web:ca1addfc787c82538f1819","measurementId":"G-L0KZV5M8X0"}')},86:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},95:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.7bc96eb0.chunk.js.map