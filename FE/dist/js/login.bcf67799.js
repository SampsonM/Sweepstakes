(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,s,a){"use strict";a.r(s);var r=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"login"},[a("label",{attrs:{for:"username"}},[e._v("Username:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",type:"text",placeholder:"Password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),a("button",{on:{click:e.logUserIn}},[e._v("Login")])])},t=[],n=(a("2f62"),{data:function(){return{username:"",password:""}},methods:{logUserIn:function(){this.$store.dispatch("logUserIn",{username:this.username,password:this.password})}}}),o=n,u=a("2877"),i=Object(u["a"])(o,r,t,!1,null,"5ee02004",null);s["default"]=i.exports}}]);
//# sourceMappingURL=login.bcf67799.js.map