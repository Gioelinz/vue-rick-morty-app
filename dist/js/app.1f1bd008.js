(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{filterContact:t.newKey}}),n("Main",{attrs:{"key-filter":t.keyFilter},on:{callApi:t.getApiArray,callApiPage:t.newUrls}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container-fluid"},[n("h1",{staticClass:"text-center my-4"},[t._v("App di Rick & Morty")]),n("div",{staticClass:"container d-flex flex-column align-items-center"},[n("div",{staticClass:"input-group mb-3 mb-5"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.key,expression:"key",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cerca Personaggio.."},domProps:{value:t.key},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendEmit(t.key)},input:function(e){e.target.composing||(t.key=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.sendEmit(t.key)}}},[t._v(" Cerca ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.sendEmit(t.key="")}}},[t._v(" Reset ")])])])])},c=[],o={name:"Header",data:function(){return{key:""}},methods:{sendEmit:function(t){this.$emit("filterContact",t)}}},l=o,u=n("2877"),p=Object(u["a"])(l,s,c,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Pagination",{attrs:{prev:t.infoPage.prev,next:t.infoPage.next},on:{changePage:t.takeUrl}}),n("div",{staticClass:"row g-4"},t._l(t.filteredContacts,(function(t,e){return n("div",{key:e,staticClass:"col-3"},[n("CharCard",{attrs:{char:t}})],1)})),0)],1)},h=[],m=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),n("bc3a")),g=n.n(m),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("img",{staticClass:"rounded-circle img-fluid shadow",attrs:{src:t.char.image,alt:""}}),n("h3",{staticClass:"my-2 fw-bold"},[t._v(t._s(t.char.name))]),n("div",{staticClass:"line"}),n("p",{staticClass:"fs-5 fw-bold"},[t._v(t._s(t.char.species))]),n("p",{staticClass:"fs-5"},[t._v(t._s(t.char.location.name))])])},y=[],b={name:"CharCard",props:["char"]},C=b,k=(n("5c29"),Object(u["a"])(C,v,y,!1,null,"bc7a017e",null)),_=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"pagination justify-content-center"},[n("li",{staticClass:"page-item",class:{disabled:!t.prev},attrs:{role:"button"},on:{click:function(e){return t.setPage(t.prev)}}},[n("a",{staticClass:"page-link"},[t._v("Previous")])]),n("li",{staticClass:"page-item",class:{disabled:!t.next},attrs:{role:"button"},on:{click:function(e){return t.setPage(t.next)}}},[n("span",{staticClass:"page-link"},[t._v("Next")])])])])},x=[],w={name:"Pagination",props:["prev","next"],methods:{setPage:function(t){t&&this.$emit("changePage",t)}}},O=w,j=Object(u["a"])(O,P,x,!1,null,"a68e8e60",null),A=j.exports,$={name:"Main",components:{CharCard:_,Pagination:A},props:["keyFilter"],data:function(){return{chars:[],infoPage:{},getUrl:"",url:"https://rickandmortyapi.com/api/character"}},methods:{getApiDiscs:function(t){var e=this;g.a.get(t).then((function(t){e.chars=t.data.results;var n=t.data.info,r=n.prev,a=n.next;e.infoPage={prev:r,next:a},e.$emit("callApiPage",e.infoPage),e.$emit("callApi",e.chars)}))},takeUrl:function(t){this.getUrl=t,this.getApiDiscs(this.getUrl)}},computed:{filteredContacts:function(){var t=this;return this.chars.filter((function(e){if(e.name.toLowerCase().includes(t.keyFilter.toLowerCase()))return!0}))}},mounted:function(){this.getApiDiscs(this.url)}},E=$,M=Object(u["a"])(E,d,h,!1,null,"d007c176",null),U=M.exports,F={name:"App",components:{Header:f,Main:U},data:function(){return{chars:[],newPage:{},keyFilter:""}},methods:{getApiArray:function(t){this.chars=t},newKey:function(t){this.keyFilter=t},newUrls:function(t){this.newPage=t}}},S=F,D=(n("5c0b"),Object(u["a"])(S,a,i,!1,null,null,null)),H=D.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c29":function(t,e,n){"use strict";n("992c")},"992c":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.1f1bd008.js.map