webpackJsonp([1],{0:function(t,e){},Ax2x:function(t,e){},LlGb:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("hmeE")}function n(t){s("n5y4")}function r(t){s("Qp/Q")}function i(t){s("XJtq")}function l(t){s("LlGb")}function o(t){s("Ri/i")}function c(t){s("Ax2x")}function u(t,e,s,a){var n={text:null,targetStart:null,targetLength:a},r=t.length;if(t.length<=e||a>=e)n.text=t,n.targetStart=s;else{var i=Math.ceil((e-a)/2),l=s-i;l=l>0?l:0;var o=s+a+i;o=o>r-1?r-1:o;var c=0;c=0===l?s:i,n.text=t.substring(l,o),n.targetStart=c}return n}Object.defineProperty(e,"__esModule",{value:!0});var h=s("7+uW"),d=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},m=[],f={render:d,staticRenderFns:m},v=f,g=s("VU/8"),p=g(null,v,!1,null,null,null),_=p.exports,A=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},b=[],x={render:A,staticRenderFns:b},R=x,T=s("VU/8"),w=T(null,R,!1,null,null,null),S=w.exports,y={data:function(){return{}},methods:{sidebarActive:function(){this.$store.commit("setSidebar","active")}},computed:{showToggleButtonByRoute:function(){var t=this.$route.name;return"blog"===t||"blog_id"===t}},mounted:function(){}},C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav justify-content-end"},[t.showToggleButtonByRoute?s("li",{staticClass:"nav-item",attrs:{id:"toggleButton"}},[s("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0);"},on:{click:t.sidebarActive}},[s("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])]):t._e(),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/me"}},[t._v(t._s(this.$store.state.navText[0]))])],1),t._v(" "),this.$store.state.enableResume?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/resume"}},[t._v(t._s(this.$store.state.navText[1]))])],1):t._e(),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/blog/"}},[t._v(t._s(this.$store.state.navText[2]))])],1)])},F=[],k={render:C,staticRenderFns:F},D=k,L=s("VU/8"),N=a,I=L(y,D,!1,N,"data-v-0fcbd244",null),M=I.exports,E={name:"app",components:{appHeader:_,appNav:M,appFooter:S},methods:{},data:function(){return{}},computed:{contentClass:function(){return this.$store.state.contentClass}},mounted:function(){}},U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"contianer-fluid",class:t.contentClass},[s("appHeader"),t._v(" "),s("appNav"),t._v(" "),s("div",{staticClass:"row content"},[s("router-view")],1),t._v(" "),s("appFooter")],1)])},H=[],B={render:U,staticRenderFns:H},O=B,V=s("VU/8"),j=n,P=V(E,O,!1,j,"data-v-716d9262",null),W=P.exports,q=s("/ocq"),J={data:function(){return{}},mounted:function(){},computed:{getAvatarImg:function(){return this.$store.state.meImg?this.$store.state.meImg:"avatar.jpg"},getMeText:function(){return this.$store.state.meText?this.$store.state.meText:"Hello I'm Blog Man."}}},Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:"../../static/data/img/"+t.getAvatarImg,alt:"Wait for it ...",id:"avatar"}}),t._v(" "),s("p",[t._v(t._s(t.getMeText))])])},G=[],X={render:Q,staticRenderFns:G},z=X,K=s("VU/8"),Y=r,Z=K(J,z,!1,Y,"data-v-7d58db8b",null),tt=Z.exports,et=s("HKE2"),st=s.n(et),at=new st.a.Converter,nt={data:function(){return{}},mounted:function(){},computed:{getResume:function(){if(this.$store.state.resumeData)return at.makeHtml(this.$store.state.resumeData)}}},rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return this.$store.state.enableResume?s("div",{staticClass:"resume",domProps:{innerHTML:t._s(t.getResume)}}):t._e()},it=[],lt={render:rt,staticRenderFns:it},ot=lt,ct=s("VU/8"),ut=i,ht=ct(nt,ot,!1,ut,"data-v-6682babc",null),dt=ht.exports,mt=s("C4MV"),ft=s.n(mt),vt=s("BO1k"),gt=s.n(vt),pt={data:function(){return{}},methods:{clear:function(){window.scrollTo(0,0),this.$store.commit("setSearch",null),this.$store.commit("setShowSearch",!1)}},props:["title"],watch:{allArticles:function(t){console.log("123"),this.getAllTypes()}},computed:{getAllTypes:function(){var t={};if(this.$store.state.allArticlesFetched){var e=!0,s=!1,a=void 0;try{for(var n,r=gt()(this.$store.state.allTypes);!(e=(n=r.next()).done);e=!0){var i=n.value;t[i]||ft()(t,i,{value:[],writable:!0,enumerable:!0,configurable:!0})}}catch(t){s=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(s)throw a}}var l=!0,o=!1,c=void 0;try{for(var u,h=gt()(this.$store.state.allArticleTitle);!(l=(u=h.next()).done);l=!0){var d=u.value,m=this.$store.state.allDetails[d];t[m.type].push(m)}}catch(t){o=!0,c=t}finally{try{!l&&h.return&&h.return()}finally{if(o)throw c}}}return t},sidebarStatus:function(){return this.$store.state.sidebarStatus},getActiveTitle:function(){if(this.title)return this.title},getActiveType:function(){var t="";return this.$store.state.allDetails&&this.title&&(t=this.$store.state.allDetails[this.title].type),t},search:{get:function(){return this.$store.state.search},set:function(t){this.$store.dispatch("actionSetSearch",{value:t})}}},mounted:function(){$(window).on("resize",function(){$(this).width()<768&&($("#sidebar").addClass("disable"),$("#sidebar").removeClass("active"))})}},_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.sidebarStatus,attrs:{id:"sidebar"}},[s("div",{staticClass:"sidebar-header"},[s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Type to search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),this.$store.state.enableAddNew?s("div",{staticClass:"addNew"},[s("router-link",{attrs:{to:"/new"}},[t._v(" Add New\n            ")])],1):t._e()]),t._v(" "),s("hr"),t._v(" "),t.getAllTypes?s("ul",{staticClass:"list-unstyled components"},t._l(t.getAllTypes,function(e,a){return s("li",{class:a==t.getActiveType?"active":""},[s("a",{attrs:{href:e.length>0?"#"+a.trim().replace(" ",""):"javascript:void(0);","data-toggle":e.length>0?"collapse":"","aria-expanded":e.length>0?"false":""}},[t._v("\n               "+t._s(a)+"\n            ")]),t._v(" "),e.length>0?s("ul",{staticClass:"list-unstyled collapse",class:a==t.getActiveType?"show":"",attrs:{id:a.trim().replace(" ","")}},t._l(e,function(e,a){return s("li",{class:e.title==t.getActiveTitle?"active":"",on:{click:function(e){t.clear()}}},[s("router-link",{attrs:{to:{name:"blog_title",params:{title:e.title}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)})):t._e()])})):t._e()])},At=[],bt={render:_t,staticRenderFns:At},$t=bt,xt=s("VU/8"),Rt=l,Tt=xt(pt,$t,!1,Rt,"data-v-0d086c72",null),wt=Tt.exports;st.a.setFlavor("github");var St=new st.a.Converter({headerLevelStart:2,strikethrough:!0,tables:!0,tasklists:!0,smartIndentationFix:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,openLinksInNewWindow:!0,emoji:!0}),yt={props:["title"],data:function(){return{allArticles:this.$store.state.allArticles}},methods:{sidebarDisable:function(){"active"==this.$store.state.sidebarStatus&&this.$store.commit("setSidebar","disable")},clear:function(){window.scrollTo(0,0),this.$store.commit("setSearch",null),this.$store.commit("setShowSearch",!1)}},computed:{getOneTitle:function(){if(this.title)return this.title},getOneDate:function(){if(this.$store.state.allArticlesFetched)return this.$store.state.allDetails[this.title].date},getOneArticle:function(){if(this.$store.state.allArticlesFetched){for(var t=St.makeHtml(this.$store.state.allArticles[this.title]),e=/<img[^>]+src="?([^"\s]+)"?[^\/]*\/>/g,s="",a=this.$store.state.imgPath;s=e.exec(t);){var n=s[1];n.startsWith("http")||n.startsWith("https")||(t=t.replace(s[1],a+s[1]))}return t}},showSearch:function(){return this.$store.state.searchResults.showSearch},hasSearchResult:function(){return this.$store.state.searchResults.hasResult},getSearchResult:function(){return this.$store.state.searchResults.results}},mounted:function(){}},Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article",on:{click:t.sidebarDisable}},[t.showSearch?s("div",{staticClass:"article-inner"},[t.hasSearchResult?s("ul",t._l(t.getSearchResult,function(e,a){return s("li",[s("p",{on:{click:function(e){t.clear()}}},[s("router-link",{attrs:{to:encodeURI("/blog/"+a)}},[t._v(t._s(a))])],1),t._v(" "),s("p",{domProps:{innerHTML:t._s(e.content)}})])})):s("h2",[t._v("\n            No result found for '"+t._s(this.$store.state.search)+"'\n        ")])]):t.getOneTitle?s("div",{staticClass:"article-inner"},[s("p",{staticClass:"date"},[t._v("Date: "+t._s(t.getOneDate))]),t._v(" "),s("h1",{attrs:{id:"title"}},[t._v(t._s(t.getOneTitle))]),t._v(" "),s("div",[s("p",{staticClass:"article-text",domProps:{innerHTML:t._s(t.getOneArticle)}})])]):t._e()])},Ft=[],kt={render:Ct,staticRenderFns:Ft},Dt=kt,Lt=s("VU/8"),Nt=o,It=Lt(yt,Dt,!1,Nt,"data-v-28df3425",null),Mt=It.exports,Et={data:function(){return{}},components:{sidebar:wt,blogarticle:Mt},methods:{},mounted:function(){this.$store.commit("setSidebar","disable")},computed:{getArticleTitle:function(){var t=null;if(this.$route.params.title)t=this.$route.params.title;else{var e=this.$store.state.allArticleTitle;e&&(t=e[Math.floor(Math.random()*e.length)],this.$route.params.title=t)}return t}}},Ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog col-12"},[s("sidebar",{attrs:{title:t.getArticleTitle}}),t._v(" "),s("blogarticle",{attrs:{title:t.getArticleTitle}})],1)},Ht=[],Bt={render:Ut,staticRenderFns:Ht},Ot=Bt,Vt=s("VU/8"),jt=c,Pt=Vt(Et,Ot,!1,jt,"data-v-200f6c03",null),Wt=Pt.exports,qt=s("5x2J"),Jt=s.n(qt),Qt={mounted:function(){new Jt.a({element:document.getElementById("simplemed")})}},Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("textarea",{attrs:{id:"simplemed"}})])}],zt={render:Gt,staticRenderFns:Xt},Kt=zt,Yt=s("VU/8"),Zt=Yt(Qt,Kt,!1,null,null,null),te=Zt.exports;h.a.use(q.a);var ee=new q.a({routes:[{path:"/",name:"home",redirect:"/me"},{path:"/me",name:"me",component:tt},{path:"/resume",name:"resume",component:dt},{path:"/blog",name:"blog",component:Wt},{path:"/blog/:title",name:"blog_title",component:Wt},{path:"/new",name:"newBlog",component:te}]}),se=s("fZjL"),ae=s.n(se),ne=s("gRE1"),re=s.n(ne),ie=s("NYxO"),le=s("mtWM"),oe=s.n(le);h.a.use(ie.a);var ce={sidebarStatus:"",allTypes:[],allDetails:{},allArticles:{},allArticleTitle:[],articlePath:"../../static/data/articles/",allArticlesFetched:!1,imgPath:"static/data/img/",resumeData:"",enableResume:!1,enableAddNew:!1,meImg:"avatar.jpg",meText:"Hello",navText:["Me","Resume","Blog"],maxReturnLength:200,search:null,searchResults:{showSearch:!1}},ue={getAllArticles:function(t){return t.allArticles}},he={setSearch:function(t,e){t.search=e},setSearchResults:function(t,e){t.searchResults=e},setShowSearch:function(t,e){t.searchResults.showSearch=e},setSidebar:function(t,e){t.sidebarStatus=e},setResume:function(t,e){t.enableResume=e},setAddNew:function(t,e){t.enableAddNew=e},setNavText:function(t,e){t.navText=e},setMeImg:function(t,e){t.meImg=e},setMeText:function(t,e){t.meText=e},setResumeData:function(t,e){t.resumeData=e},setAllDetails:function(t,e){t.allDetails[e.title]=e},setAllTypes:function(t,e){t.allTypes.push(e)},setAllArticles:function(t,e){t.allArticles[e.title]=e.content},setAllArticleTitle:function(t,e){t.allArticleTitle.push(e)},setAllArticlesFetched:function(t,e){t.allArticlesFetched=e}},de={actionFetch:function(t){oe.a.get("../../static/config/config.json").then(function(e){var s=e.data.enable_resume,a=e.data.enable_add_new;!0===s||"true"===s?t.commit("setResume",!0):t.commit("setResume",!1),!0===a||"true"===a?t.commit("setAddNew",!0):t.commit("setAddNew",!1);var n=e.data.nav_text;3!==n.length?console.log("nav_text must be a length 3 array"):t.commit("setNavText",n),t.commit("setMeImg",e.data.me_img),t.commit("setMeText",e.data.me_text),t.state.enableResume&&oe.a.get("../../static/data/resume/resume.md").then(function(e){t.commit("setResumeData",e.data)},function(t){console.log(t)})},function(t){console.log(t)}),oe.a.get("../../static/data/article_info.json").then(function(e){for(var s=re()(e.data.articles),a=s.length,n=0;n<a;n++)!function(e){var n=s[e];t.commit("setAllDetails",n),t.commit("setAllTypes",n.type),t.commit("setAllArticleTitle",n.title),oe.a.get(ce.articlePath+n.filename).then(function(s){t.commit("setAllArticles",{title:n.title,content:s.data}),e==a-1&&t.commit("setAllArticlesFetched",!0)},function(t){console.log(error)})}(n)},function(t){console.log(t)})},actionSetSearch:function(t,e){t.commit("setSearch",e.value),console.log(e);var s={};if(e.value.trim().length>0){var a=t.state.allArticles,n=t.state.search.toLowerCase();s={showSearch:!0,hasResult:!1,results:{}};for(var r in a)if(a[r]=a[r].toLowerCase(),-1!==a[r].indexOf(n)){var i={},l=u(a[r],t.state.maxReturnLength,a[r].indexOf(n),n.length),o="<span class='search_value'>",c=l.text;c=c.slice(0,l.targetStart)+o+c.slice(l.targetStart),c=c.slice(0,l.targetStart+o.length+l.targetLength)+"</span>"+c.slice(l.targetStart+o.length+l.targetLength),i.content=c,i.resultStart=l.targetStart,i.resultLength=l.targetLength,s.results[r]=i}0!==ae()(s.results).length?s.hasResult=!0:s.hasResult=!1}else s={showSearch:!1};t.commit("setSearchResults",s)}},me=new ie.a.Store({state:ce,getters:ue,mutations:he,actions:de});h.a.config.productionTip=!1;new h.a({el:"#app",router:ee,store:me,template:"<App></App>",components:{App:W},mounted:function(){this.$store.dispatch("actionFetch")}});h.a.filter("encodeURI",function(t){return encodeURI(t)}),h.a.filter("decodeURI",function(t){return decodeURI(t)})},"Qp/Q":function(t,e){},"Ri/i":function(t,e){},XJtq:function(t,e){},hmeE:function(t,e){},n5y4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d4040fb0b4bbacf06133.js.map