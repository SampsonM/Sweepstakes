(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function o(e){return i.p+"js/"+({dashboard:"dashboard",login:"login"}[e]||e)+"."+{dashboard:"d7c478f6",login:"bcf67799"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"09be":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"sweep-steaks"}},[r("router-view")],1)},s=[],o=(r("5c0b"),r("2877")),i={},c=Object(o["a"])(i,a,s,!1,null,null,null),u=c.exports,l=(r("96cf"),r("3b8d")),p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"landing-page",attrs:{itemscope:"",itemtype:"http://schema.org/Brand"}},[r("div",{staticClass:"landing-page__banner"},[e._m(0),e.$sweepAccessAllowed?r("h1",{staticClass:"landing-page__title",attrs:{itemprop:"name"}},[e._v("Sweepsteaks")]):e._e(),e.$sweepAccessAllowed?r("button",{staticClass:"landing-page__login"},[e.allwd?r("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]):r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1):e._e()]),e.$sweepAccessAllowed?r("LandingPageContent"):r("div",{staticClass:"coming-soon"},[r("h1",{attrs:{itemprop:"name"}},[e._v("Sweepsteaks, Coming soon!!")]),r("p",[e._v("Online sweepstakes for you and your mates!")])])],1)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"landing-page__logo"},[n("img",{staticClass:"brush",attrs:{itemprop:"logo",alt:"Sweepsteaks",src:r("c792")}}),n("img",{staticClass:"steak",attrs:{itemprop:"logo",alt:"Sweepsteaks",src:r("c098")}}),n("img",{staticClass:"steak",attrs:{itemprop:"logo",alt:"Sweepsteaks",src:r("c098")}})])}],m=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),b=r("2f62"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"landing-content"},[r("section",{staticClass:"main-content"},[e._v("\n\t\tLanding page content\n\t")]),r("SignupForm")],1)},g=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.allwd?e._e():r("form",{staticClass:"sign-up",attrs:{id:"signup",autocomplete:"on"}},[r("h2",{staticClass:"sign-up__title"},[e._v("Sign up")]),e._l(e.formFields,(function(t){return r("MyInput",{key:t.label,class:[t.name+"-input",{error:e.$v[t.errClass].$error}],attrs:{label:t.label,name:t.name,type:t.type||"text",hint:t.hint,hasError:e.$v[t.errClass].$error,error:e.$v[t.errClass]},on:{blur:function(r){return e.handleInput(t.name,r)}}})})),e._v("\n\n  "+e._s(e.firstServerError)+"\n\n  "),r("button",{staticClass:"sign-up__btn",on:{click:function(t){return t.preventDefault(),e.handleSignup(t)}}},[r("p",[e._v("Sign-up")])])],2)},w=[],_=(r("3b2b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input"},[r("label",{attrs:{for:e.name}},[e._v(e._s(e.label))]),e.hint?r("i",{staticClass:"input__hint"},[e._v("\n      "+e._s(e.hint)+"\n    ")]):e._e(),r("span",{staticClass:"input__input-wrapper"},[r("input",e._b({class:{error:e.hasError},attrs:{name:e.name,id:e.name,type:e.type},on:{blur:function(t){return e.$emit("blur",t.target.value)}}},"input",e.$attrs,!1)),!e.error.minLength&&e.error.$params.minLength&&e.hasError?r("p",{staticClass:"input__input-error"},[e._v("\n          "+e._s(e.label)+" must be atleast "+e._s(e.error.$params.minLength.min)+" characters\n        ")]):e._e(),e.hasError&&!1===e.error.isUnique?r("p",{staticClass:"input__input-error"},[e._v("\n          Entered username currently exists, please choose another\n        ")]):e._e(),e.hasError&&!1===e.error.password?r("p",{staticClass:"input__input-error"},[e._v("\n          Password must contain atleast 1 lower & uppercase letter, number, special character and be between 6-20 characters\n        ")]):e._e(),e.hasError&&!1===e.error.userNameFormat?r("p",{staticClass:"input__input-error"},[e._v("\n          Username must contain atleast 2 numbers and be 6 characters long\n        ")]):e._e(),e.hasError&&!1===e.error.email?r("p",{staticClass:"input__input-error"},[e._v("\n          Entered email is invalid\n        ")]):e._e(),!e.error.required&&e.error.$params.required&&e.hasError?r("p",{staticClass:"input__input-error"},[e._v("\n          "+e._s(e.label)+" is required\n        ")]):e._e()])])}),y=[],O={inheritAttrs:!1,props:{label:{type:String,required:!0},hint:{type:String,required:!1},name:{type:String,required:!0},type:{type:String,required:!1,default:"text"},hasError:{type:Boolean,required:!1,default:!1},error:{type:Object,required:!1}}},k=O,j=(r("a112"),Object(o["a"])(k,_,y,!1,null,"7f616f9d",null)),x=j.exports,E=r("b5ae"),C=r("bc3a"),$=r.n(C),P=$.a.create({baseURL:"https://sweep-steaks.herokuapp.com/api",headers:{"Content-Type":"application/json"},withCredentials:!0}),S={hasSeenAnimation:!1,allwd:!1,serverErrors:[]},L=r("5935"),A={UPDATE_ALLWD:function(e,t){e.allwd=t},UPDATE_SERVER_ERR:function(e,t){e.serverErrors=t},updateField:L["b"]},U={signup:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r){var a,s,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,e.next=4,T.createUser(r);case 4:s=e.sent,o=s.data.user,n["a"].$cookies.set("ssTok",o.token),a("UPDATE_ALLWD",o.authenticated),te.push("/dashboard"),e.next=17;break;case 11:for(u in e.prev=11,e.t0=e["catch"](1),i=e.t0.response.data,c=[],i)c.push(i[u].message);a("UPDATE_SERVER_ERR",c);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logUserIn:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,e.next=4,T.logUserIn(r);case 4:s=e.sent,o=s.data.user,a("UPDATE_ALLWD",o.authenticated),n["a"].$cookies.set("ssTok",o.token,43200),te.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),te.push("/");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,T.logUserOut();case 4:a=e.sent,s=a.data.user,n["a"].$cookies.remove("ssTok"),r("UPDATE_ALLWD",s.authenticated),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),n["a"].$cookies.remove("ssTok"),r("UPDATE_ALLWD",!1);case 14:te.push("/");case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}()},q={firstServerError:function(e){return e.serverErrors[0]},getField:L["a"]};n["a"].use(b["a"]);var R=new b["a"].Store({state:S,getters:q,actions:U,mutations:A}),D="/users",T={getUserByUserName:function(e){return P.get("".concat(D,"/").concat(e))},isUserNameUnique:function(e){return P.get("".concat(D,"/unique/").concat(e))},getUserLoginState:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n["a"].$cookies.get("ssTok")){e.next=16;break}return e.prev=1,e.next=4,P.get("".concat(D,"/status/"));case 4:return t=e.sent,r=t.data,R.commit("UPDATE_ALLWD",r.user.authenticated),n["a"].$cookies.set("ssTok",r.user.token,43200),e.abrupt("return",r.user.authenticated);case 11:return e.prev=11,e.t0=e["catch"](1),e.abrupt("return",!1);case 14:e.next=17;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(){return e.apply(this,arguments)}return t}(),createUser:function(e){var t=JSON.stringify(e);return P.post("".concat(D,"/"),t)},logUserIn:function(e){var t=JSON.stringify(e);return P.post("".concat(D,"/status/login"),t)},logUserOut:function(){return P.patch("".concat(D,"/status/logout"),null,{headers:{authorisation:n["a"].$cookies.get("ssTok")}})},updateUser:function(e,t){return P.post("".concat(D,"/").concat(e),t)},deleteUser:function(e){return P.delete("".concat(D,"/").concat(e))}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(m["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={components:{MyInput:x},data:function(){return{firstName:"",lastName:"",email:"",username:"",password:"",formFields:[{name:"firstName",label:"First name",errClass:"firstName"},{name:"lastName",label:"Last name",errClass:"lastName"},{name:"email",label:"Email",errClass:"email"},{name:"username",label:"Username",hint:"Must be at least 6 characters and include 2 numbers",errClass:"username"},{name:"password",label:"Password",hint:"Password must contain 1 lower & uppercase letter, 1 number and be between 8-20 characters",errClass:"password",type:"password"}]}},validations:{firstName:{required:E["required"],minLength:Object(E["minLength"])(2)},lastName:{required:E["required"],minLength:Object(E["minLength"])(2)},email:{required:E["required"],email:function(e){if(""===e)return!0;var t=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/g;return t.test(e)}},username:{required:E["required"],minLength:Object(E["minLength"])(6),userNameFormat:function(e){var t=new RegExp(/[0-9]{2}/);return t.test(e)},isUnique:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,T.isUserNameUnique(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.unique);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},password:{required:E["required"],minLength:Object(E["minLength"])(8),password:function(e){if(""===e)return!0;var t=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})/g;return t.test(e)}}},methods:F({},Object(b["b"])(["signup"]),{handleSignup:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$v.$touch();case 2:this.$v.$error||(t={firstName:this.firstName,lastName:this.lastName,username:this.username,email:this.email,password:this.password},this.signup(t));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleInput:function(e,t){this[e]=t,this.$v[e].$touch()}}),computed:F({},Object(b["c"])(["firstServerError"]),{},Object(b["d"])(["allwd"]))},M=I,W=(r("e714"),Object(o["a"])(M,v,w,!1,null,"079b5dec",null)),B=W.exports,J={components:{SignupForm:B}},z=J,Z=(r("650a"),Object(o["a"])(z,h,g,!1,null,null,null)),V=Z.exports;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){Object(m["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={name:"home",components:{LandingPageContent:V},computed:H({},Object(b["d"])(["allwd"]))},Q=K,X=(r("ecd5"),Object(o["a"])(Q,f,d,!1,null,"37eae96a",null)),Y=X.exports;n["a"].use(p["a"]);var ee=new p["a"]({mode:"history",base:"",scrollBehavior:function(e){if(!e.hash)return window.scrollTo({top:0,behavior:"smooth"});var t=document.querySelector(e.hash);return t?window.scrollTo({top:t.offsetTop,behavior:"smooth"}):void 0},routes:[{path:"/",name:"home",component:Y},{path:"/login",name:"login",component:function(){return r.e("login").then(r.bind(null,"a55b"))}},{path:"/dashboard",name:"dashboard",component:function(){return r.e("dashboard").then(r.bind(null,"7277"))}},{path:"*",redirect:"/"}]});ee.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r,a){var s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n["a"].prototype.$sweepAccessAllowed){e.next=30;break}if("/login"!==t.path){e.next=14;break}if(!R.state.allwd){e.next=6;break}return e.abrupt("return",a("/dashboard"));case 6:return e.next=8,T.getUserLoginState();case 8:if(s=e.sent,!s){e.next=11;break}return e.abrupt("return",a("/dashboard"));case 11:return e.abrupt("return",a());case 12:e.next=28;break;case 14:if("/dashboard"!==t.path){e.next=27;break}if(!R.state.allwd){e.next=19;break}a(),e.next=25;break;case 19:return e.next=21,T.getUserLoginState();case 21:if(o=e.sent,!o){e.next=24;break}return e.abrupt("return",a());case 24:return e.abrupt("return",a("/"));case 25:e.next=28;break;case 27:return e.abrupt("return",a());case 28:e.next=35;break;case 30:if("/"!==t.path){e.next=34;break}return e.abrupt("return",a());case 34:return e.abrupt("return",a("/"));case 35:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var te=ee,re=r("9483");Object(re["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ne=r("ecee"),ae=r("c074"),se=r("ad3d");ne["c"].add(ae["b"]),ne["c"].add(ae["a"]),n["a"].component("font-awesome-icon",se["a"]);var oe=r("1dce"),ie=r.n(oe),ce=(r("4917"),r("d225")),ue=r("b0b4"),le=function(){function e(){Object(ce["a"])(this,e)}return Object(ue["a"])(e,null,[{key:"enableFeatureFlags",value:function(){var e=n["a"].$cookies.keys(),t=new RegExp(/sweep/);e.forEach((function(e){var r=e.match(t);r&&(n["a"].prototype["$".concat(e)]=!0)}))}}]),e}(),pe=r("2b27"),fe=r.n(pe);n["a"].use(fe.a),n["a"].use(ie.a);var de="sweepsteaks.co.uk";n["a"].$cookies.config(21600,null,de,!0),le.enableFeatureFlags(),n["a"].config.productionTip=!1;var me=new n["a"]({router:te,store:R,render:function(e){return e(u)}});me.$mount("#sweep-steaks")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"650a":function(e,t,r){"use strict";var n=r("fab8"),a=r.n(n);a.a},"6b12":function(e,t,r){},a112:function(e,t,r){"use strict";var n=r("f93c"),a=r.n(n);a.a},c098:function(e,t,r){e.exports=r.p+"img/meat.82a3c7cd.svg"},c792:function(e,t,r){e.exports=r.p+"img/broom.6fd4c1b2.svg"},e332:function(e,t,r){},e714:function(e,t,r){"use strict";var n=r("09be"),a=r.n(n);a.a},ecd5:function(e,t,r){"use strict";var n=r("6b12"),a=r.n(n);a.a},f93c:function(e,t,r){},fab8:function(e,t,r){}});
//# sourceMappingURL=app.d3902163.js.map