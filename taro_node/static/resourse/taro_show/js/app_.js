(function(t){function e(e){for(var i,c,r=e[0],o=e[1],l=e[2],u=0,f=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"061a":function(t,e,a){t.exports=a.p+"img/six_.08403817.png"},"13f6":function(t,e,a){t.exports=a.p+"img/main.8072b1b9.png"},"28ad":function(t,e,a){t.exports=a.p+"img/instroduction_01.a9927cac.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[];function c(){var t=document.body.clientWidth||document.documentElement.clientWidth,e=window.devicePixelRatio,a=document.getElementById("theme"),i=document.getElementById("foot");document.documentElement.style.fontSize="100px",t*e>751&&(a.style.width="360px",i.style.width="360px",i.style.left="calc(( 100% - 360px )/2)"),window.onresize=function(){console.log("---尺寸改变---"),clearTimeout(this.time),this.time=setTimeout((function(){console.log(document.body.clientWidth),console.log(window.devicePixelRatio),console.log(document.body.clientWidth*window.devicePixelRatio)}),500)}}var r=c,o={name:"App",components:{},data:function(){return{navList:[{class:"active",icon:"icon-1",name:"每日",path:"Index"},{class:"active",icon:"icon-2",name:"每日",path:"Index"},{class:"active",icon:"icon-3",name:"每日",path:"Index"},{class:"active",icon:"icon-4",name:"每日",path:"Index"},{class:"active",icon:"icon-5",name:"每日",path:"Index"}]}},methods:{rem:r},created:function(){},mounted:function(){this.rem()}},l=o,d=(a("034f"),a("2877")),u=Object(d["a"])(l,n,s,!1,null,null,null),f=u.exports,v=(a("90c2"),a("f33e"),a("8c4f")),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme",attrs:{id:"theme"}},[i("div",{staticClass:"theme-title"},[t._v("今日塔罗")]),i("div",{staticClass:"svg-wrap"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"100%",width:"100%"}},[i("image",{attrs:{"xlink:href":a("13f6"),width:"100%",height:"100%"}}),i("image",{staticClass:"svg-img",attrs:{x:"1.2rem",y:"0.5rem","xlink:href":t.detail.image_face,width:"1.7rem",height:"3rem"}}),i("line",{staticStyle:{stroke:"#949599"},attrs:{x1:"80",y1:"2%",x2:"80",y2:"98%","stroke-width":"2"}}),i("line",{staticStyle:{stroke:"#949599"},attrs:{x1:"10%",y1:"85%",x2:"90%",y2:"85%","stroke-width":"2"}}),i("text",{attrs:{x:"50%",y:"8%",fill:"#ffffff"}},[t._v("女皇正位")]),i("text",{attrs:{x:"8%",y:"8%",fill:"#ffffff",transform:"rotate(90 , 45 ,45 )"}},[t._v(t._s(t.detail.calender))]),i("text",{attrs:{x:"18%",y:"8%",fill:"#ffffff",transform:"rotate(90 , 85 ,54 )"}},[t._v(t._s(t.detail.date_string))]),i("text",{attrs:{x:"12%",y:"90%",fill:"#949599"}},[t._v("每日")]),i("text",{attrs:{x:"12%",y:"94%",fill:"#949599"}},[t._v("一言")]),i("a",{attrs:{"xlink:href":"./card_detail.html"}},[i("text",{attrs:{x:"42%",y:"79%",fill:"#73b1d8"}},[t._v("点击查看牌面详解 > ")])]),i("text",{attrs:{x:"28%",y:"90%",fill:"#ffffff"}},[t._v(" "+t._s(t.detail.saying)+" ")]),i("text",{attrs:{x:"28%",y:"94%",fill:"#ffffff"}},[t._v(" 若存若亡 ")])])])])},h=[],p=a("53ca"),_=(a("99af"),a("ac1f"),a("5319"),"http://139.224.230.131/");function g(t,e,a){t=_+t;var i=new XMLHttpRequest,n="";if(i.open("get",t),e){if(e&&"object"==Object(p["a"])(e)){for(var s in e)n+="".concat(s,"=").concat(e[s],"&");e=n}i.send(e)}else i.send();i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){console.log(i.responseText);var t=JSON.parse(i.responseText);a&&a(t)}}}function C(t,e,a){t=_+t;var i=new XMLHttpRequest,n="";if(i.open("post",t),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e&&"object"==Object(p["a"])(e)){for(var s in e)n+="".concat(s,"=").concat(e[s],"&");e=n,i.send(e)}else console.log("there is need data typeof json");i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var t=i.responseText.replace(/\\/,"");t=JSON.parse(t),a&&a(t)}}}function x(t,e,a){t=_+t;var i=new XMLHttpRequest,n="";if(i.open("post",t),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e&&"object"==Object(p["a"])(e)){for(var s in e)n+="".concat(s,"=").concat(e[s],"&");e=n,i.send(e)}else console.log("there is need data typeof json");i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var t=JSON.parse(i.responseText);a&&a(t)}}}function y(){}var b={get:g,post:C,file:x,download:y},w=b,k={name:"Index",data:function(){return{detail:{title:"",image_face:"",calender:"",data_string:"",saying:""},col:{}}},methods:{getCardDay:function(){var t=this,e=1;w.post("card_day",{id:e},(function(e){console.log(Object(p["a"])(e)),1==e.code&&(t.detail=e.detail,t.path_1=t.detail.image_face)}))}},created:function(){this.getCardDay()}},I=k,D=Object(d["a"])(I,m,h,!1,null,"0f124dba",null),j=D.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme",attrs:{id:"theme"}},[a("ul",{staticClass:"intro-nav"},t._l(t.introduction,(function(e,i){return a("li",{key:e.name,class:t.activeIndex==i?"active":"",on:{click:function(e){return t.changeIndex(i)}}},[t._v(" "+t._s(e.name)+" "),a("span",{staticClass:"line"})])})),0),a("div",{staticClass:"class-wrap"},t._l(t.introduction,(function(e,i){return a("div",{key:e.name,staticClass:"class-item ",class:t.activeIndex==i?"active":""},t._l(e.child_class,(function(e,i){return a("div",{key:e.name,staticClass:"card-array-wrap ",class:0==i?"":"no-radius"},[a("h1",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("ul",{staticClass:"card-array"},t._l(e.list,(function(e,n){return a("li",{key:e.name,class:t.contentBool&&n===t.contentIndex&&i==t.childIndex?"active":"",on:{click:function(e){return t.changeContentIndex(n,i)}}},[a("div",{staticClass:"wrap"},[t._m(0,!0),a("div",{staticClass:"title"},[a("h2",[t._v(t._s(e.title))]),a("div",{staticClass:"content"},[t._v(" "+t._s(e.tag)+" ")])])]),a("div",{staticClass:"main"},[a("p",{staticStyle:{"text-align":"center","margin-bottom":"0.1rem"}},[t._v("--"+t._s(e.title)+"--")]),t._v(" "+t._s(e.content)+" ")])])})),0)])})),0)})),0)])},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("img",{attrs:{src:a("28ad")}})])}],E={name:"Introduction",data:function(){return{introduction:[{name:"塔罗简介",child_class:[{name:"起源|分类",list:[{image_face:"",title:"题目",tag:"标签"},{image_face:"",title:"题目",tag:"标签"}]}]},{name:"视频介绍",childClass:[{name:"起源|分类",list:[]}]}],activeIndex:0,contentIndex:0,childIndex:0,contentBool:!1}},methods:{changeIndex:function(t){this.activeIndex=t},getIntroduction:function(){var t=this;w.get("intro_all_list","",(function(e){1==e.code?t.introduction=e.list:console.log(e.message)}))},changeContentIndex:function(t,e){this.contentIndex!=t?(this.contentIndex=t,this.contentBool=!0):this.contentBool=!this.contentBool,this.childIndex=e}},computed:{},created:function(){this.getIntroduction()}},S=E,L=Object(d["a"])(S,O,$,!1,null,"a10136a0",null),A=L.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme",attrs:{id:"theme"}},[a("div",{staticClass:"divine all"},[a("h1",{staticClass:"title"},[t._v("占卜")]),a("ul",{staticClass:"divine-nav"},t._l(t.list,(function(e,i){return a("li",{key:i,class:t.activeIndex==i?"active":"",on:{click:function(e){return t.changeIndex(i)}}},[t._v(" "+t._s(e.class_name)+" "),a("span",{staticClass:"line"})])})),0),a("div",t._l(t.list,(function(e,i){return a("ul",{key:i,staticClass:"divine-list",class:t.activeIndex==i?"active":""},t._l(e.child_list,(function(e,i){return a("li",{key:i,on:{click:t.taroDetail}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image_face}})]),a("div",{staticClass:"title"},[a("h2",[t._v(t._s(e.title))]),a("span",{staticClass:"type"},[t._v("所用排阵：时间占卜法")]),a("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])])])})),0)})),0)])])},T=[],R={name:"Divine",data:function(){return{list:[{class_name:"",child_list:[{image_face:"",title:"",tag:"",id:"",content:""}]}],activeIndex:0}},methods:{getDivineList:function(){var t=this;w.get("taro_list","",(function(e){1==e.code?t.list=e.list:console.log(e.message)}))},changeIndex:function(t){this.activeIndex=t},taroDetail:function(){this.$router.push({path:"/DivineDetail"})}},computed:{},created:function(){this.getDivineList()}},B=R,M=Object(d["a"])(B,P,T,!1,null,"59657e9f",null),q=M.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme",attrs:{id:"theme"}},[a("div",{staticClass:"wrap"},[t._m(0),t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"card-face-list"},[a("p",{staticClass:"card-class"},[t._v(" "+t._s(e.class_name)+" ")]),a("ul",{staticClass:"card-face-listitem"},t._l(e.child_list,(function(e,i){return a("li",{key:i,on:{click:function(a){return t.cardDetail(e.id)}}},[a("a",[a("img",{attrs:{src:e.image_face}})])])})),0)])}))],2)])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-face"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:a("9562")}})]),i("div",{staticClass:"card-explain-box"},[i("p",{staticClass:"explain"},[t._v("塔罗牌牌面")]),i("p",[t._v("塔罗共有七十八张,每张精致的纸牌都有它独特的图案和象征的含义")]),i("p",[t._v("每一张塔罗牌都有它的象征,指出你的内在思想，潜意识动机，隐藏的恐惧和渴望")])])])}],F={name:"CardFace",data:function(){return{list:[{class_name:"大阿卡纳牌",child_list:[{image_face:"",card_name:""}]},{class_name:"小阿卡纳牌",child_list:[{image_face:"",card_name:""}]}]}},methods:{getCardList:function(){var t=this;w.get("card_list_all","",(function(e){1==e.code?(t.list=e.list,console.log("-----"),console.log(t.list)):console.log(e.message)}))},cardDetail:function(t){this.$router.push({path:"/CardDetail/".concat(t)})}},created:function(){this.getCardList()}},W=F,N=Object(d["a"])(W,H,J,!1,null,"017e3344",null),X=N.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme",attrs:{id:"theme"}},[a("div",{staticClass:"divine"},[a("h1",{staticClass:"title"},[t._v("塔罗牌阵")]),t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"card-array-wrap",class:0==i?"":"no-radius"},[a("h1",{staticClass:"card-title"},[t._v(t._s(e.class_name))]),a("ul",{staticClass:"card-array"},t._l(e.child_list,(function(e,i){return a("li",{key:i,on:{click:function(a){return t.cardArrayDetail(e.id)}}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image_face}})]),a("div",{staticClass:"title"},[a("h2",[t._v(t._s(e.title))]),a("div",{staticClass:"content"},[t._v(" "+t._s(e.tag)+" ")])])])])})),0)])}))],2)])},G=[],K={name:"CardArray",data:function(){return{list:[{class_name:"综合牌阵",child_list:[{image_face:"",title:"感情发展",tag:"是非判断 ，单日运运程"}]},{class_name:"爱情牌阵",child_list:[{image_face:"",title:"感情发展",tag:"是非判断 ，单日运运程"}]}]}},methods:{getCardList:function(){var t=this;w.get("card_array_all","",(function(e){1==e.code?(t.list=e.list,console.log("-----"),console.log(t.list)):console.log(e.message)}))},cardArrayDetail:function(t){this.$router.push({path:"/CardArrayDetail/".concat(t)})}},created:function(){this.getCardList()}},Q=K,U=Object(d["a"])(Q,z,G,!1,null,"d2388ed8",null),V=U.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme gray",attrs:{id:"theme"}},[a("div",{staticClass:"back-line"},[a("a",{staticClass:"back",on:{click:t.goback}}),t._v(" "+t._s(t.detail.card_name)+" ")]),a("div",{staticClass:"card-detail"},[a("div",{staticClass:"card-image"},[a("img",{attrs:{src:t.detail.image_face}})]),a("div",{staticClass:"card-content"},[a("h2",{staticClass:"card-name"},[t._v(t._s(t.detail.english_name))]),a("span",[t._v("关键词")]),a("ul",{staticClass:"card-tag"},t._l(t.tag_group,(function(e,i){return a("li",{key:i},[t._v(t._s(e))])})),0),a("div",{staticClass:"card-line"}),a("div",{staticClass:"card-info"},[a("ul",t._l(t.article,(function(e,i){return a("li",{key:i},[a("h3",[t._v(t._s(e.section_title))]),a("div",[a("p",[t._v(t._s(e.content))])])])})),0)])])])])},Z=[],tt=(a("4160"),a("1276"),a("159b"),{name:"CardDetail",data:function(){return{detail:{},tag_group:[],article:[{section_title:"",content:""}]}},methods:{getCardDetail:function(t){var e=this;w.post("card_detail",{id:t},(function(t){if(1==t.code){e.detail=t.detail,e.tag_group=e.detail.tag.split(",");var a=e.detail.section_title.split("$"),i=e.detail.content.split("$");a.forEach((function(t,n){e.article.push({section_title:a[n],content:i[n]})}))}else console.log(t.message)}))},goback:function(){this.$router.go(-1)}},created:function(){if(void 0!=this.$route.params.id){var t=this.$route.params.id;this.getCardDetail(t)}}}),et=tt,at=Object(d["a"])(et,Y,Z,!1,null,"1b7c5b72",null),it=at.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("router-view"),a("footer",{staticClass:"foot",attrs:{id:"foot"}},t._l(t.tabList,(function(e,i){return a("div",{key:i,class:t.activeIndex==i?"active":"",on:{click:function(a){return t.changeIndex(i,e.path)}}},[a("a",[a("span",{class:e.icon},[t._v(t._s(e.title))])])])})),0)],1)},st=[],ct={name:"Container",data:function(){return{tabList:[{path:"",icon:"icon-1",title:"每日"},{path:"Introduction",icon:"icon-2",title:"简介"},{path:"Divine",icon:"icon-3",title:"占卜"},{path:"CardFace",icon:"icon-4",title:"牌面"},{path:"CardArray",icon:"icon-5",title:"牌阵"}],activeIndex:0}},methods:{changeIndex:function(t,e){this.activeIndex=t,this.$router.push({path:"/".concat(e)})},initIndex:function(){}},created:function(){this.initIndex()}},rt=ct,ot=Object(d["a"])(rt,nt,st,!1,null,"ee9e5e7e",null),lt=ot.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme gray",attrs:{id:"theme"}},[a("div",{staticClass:"back-line"},[a("a",{staticClass:"back",on:{click:t.goback}}),t._v(" "+t._s(t.detail.title)+" ")]),a("div",{staticClass:"card-array-detail"},[a("div",{staticClass:"card-array-para"},[t._v(t._s(t.detail.content))]),a("div",{staticClass:"image"},[a("img",{attrs:{src:t.detail.image_face}})]),a("p",{staticClass:"card-array-para"},[t._v(t._s(t.detail.para))])])])},ut=[],ft={name:"CardArrayDetail",data:function(){return{detail:{content:"",image_face:"",para:""}}},methods:{getCardDetail:function(t){var e=this;w.post("card_array_detail",{id:t},(function(t){1==t.code?e.detail=t.detail:console.log(t.message)}))},goback:function(){this.$router.go(-1)}},created:function(){if(void 0!=this.$route.params.id){var t=this.$route.params.id;this.getCardDetail(t)}}},vt=ft,mt=Object(d["a"])(vt,dt,ut,!1,null,"5070ef21",null),ht=mt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme gray",attrs:{id:"theme"}},[a("div",{staticClass:"back-line"},[a("a",{staticClass:"back",on:{click:t.goback}}),t._v(" 占卜方法 ")]),t._m(0)])},_t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"taro-bg"},[i("div",{staticClass:"taro-array-title"},[t._v("占卜你的事业")]),i("div",{staticClass:"taro-array"},[i("div",[i("img",{attrs:{src:a("061a")}})]),i("div",[i("img",{attrs:{src:a("061a")}})]),i("div",[i("img",{attrs:{src:a("061a")}})])]),i("div",{staticClass:"taro-action"},[i("div",{staticClass:"button"},[t._v(" 开始洗牌 ")])])])}],gt={name:"DivineDetail",data:function(){return{}},methods:{goback:function(){this.$router.go(-1)}},created:function(){}},Ct=gt,xt=Object(d["a"])(Ct,pt,_t,!1,null,"8109b758",null),yt=xt.exports;i["a"].use(v["a"]);var bt=new v["a"]({mode:"hash",routes:[{name:"Container",redirect:"Index",component:lt,path:"/",children:[{name:"Index",component:j,path:"Index"},{name:"Introduction",component:A,path:"Introduction"},{name:"Divine",component:q,path:"Divine"},{name:"CardFace",component:X,path:"CardFace"},{name:"CardArray",component:V,path:"CardArray"}]},{name:"CardDetail",component:it,path:"/CardDetail/:id"},{name:"CardArrayDetail",component:ht,path:"/CardArrayDetail/:id"},{name:"DivineDetail",component:yt,path:"/DivineDetail"}]});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)},router:bt}).$mount("#app")},"85ec":function(t,e,a){},"90c2":function(t,e,a){},9562:function(t,e,a){t.exports=a.p+"img/six.1dba0f6e.png"},f33e:function(t,e,a){}});
//# sourceMappingURL=app_.js.map