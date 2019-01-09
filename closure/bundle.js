function h(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:h(a)}}var l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={w:!0},r={};try{r.__proto__=q;p=r.w;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n,u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function x(a,b){if(b){var c=u;a=a.split(".");for(var f=0;f<a.length-1;f++){var d=a[f];d in c||(c[d]={});c=c[d]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
x("Promise",function(a){function b(a){this.b=0;this.g=void 0;this.a=[];var b=this.c();try{a(b.resolve,b.reject)}catch(w){b.reject(w)}}function c(){this.a=null}function f(a){return a instanceof b?a:new b(function(b){b(a)})}if(a)return a;c.prototype.b=function(a){null==this.a&&(this.a=[],this.f());this.a.push(a)};c.prototype.f=function(){var a=this;this.c(function(){a.i()})};var d=u.setTimeout;c.prototype.c=function(a){d(a,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=
[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(m){this.g(m)}}}this.a=null};c.prototype.g=function(a){this.c(function(){throw a;})};b.prototype.c=function(){function a(a){return function(g){c||(c=!0,a.call(b,g))}}var b=this,c=!1;return{resolve:a(this.D),reject:a(this.f)}};b.prototype.D=function(a){if(a===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.G(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;
break a;default:c=!1}c?this.C(a):this.i(a)}};b.prototype.C=function(a){var b=void 0;try{b=a.then}catch(w){this.f(w);return}"function"==typeof b?this.H(b,a):this.i(a)};b.prototype.f=function(a){this.l(2,a)};b.prototype.i=function(a){this.l(1,a)};b.prototype.l=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.b);this.b=a;this.g=b;this.o()};b.prototype.o=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)e.b(this.a[a]);this.a=null}};
var e=new c;b.prototype.G=function(a){var b=this.c();a.m(b.resolve,b.reject)};b.prototype.H=function(a,b){var c=this.c();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{f(a(b))}catch(P){e(P)}}:b}var f,e,g=new b(function(a,b){f=a;e=b});this.m(d(a,f),d(c,e));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.m=function(a,b){function c(){switch(d.b){case 1:a(d.g);break;case 2:b(d.g);
break;default:throw Error("Unexpected state: "+d.b);}}var d=this;null==this.a?e.b(c):this.a.push(c)};b.resolve=f;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var d=k(a),e=d.next();!e.done;e=d.next())f(e.value).m(b,c)})};b.all=function(a){var c=k(a),d=c.next();return d.done?f([]):new b(function(a,b){function e(b){return function(c){g[b]=c;m--;0==m&&a(g)}}var g=[],m=0;do g.push(void 0),m++,f(d.value).m(e(g.length-1),b),d=c.next();while(!d.done)})};
return b});function y(){y=function(){};u.Symbol||(u.Symbol=z)}var z=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function A(){y();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&v(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return B(h(this))}});A=function(){}}function B(a){A();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}
function C(){this.g=!1;this.b=null;this.c=void 0;this.a=1;this.o=this.i=0;this.f=null}function D(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}C.prototype.l=function(a){this.c=a};function E(a,b){a.f={A:b,B:!0};a.a=a.i||a.o}C.prototype.return=function(a){this.f={return:a};this.a=this.o};function F(a,b,c){a.a=c;return{value:b}}function G(a){this.a=new C;this.b=a}
function H(a,b){D(a.a);var c=a.a.b;if(c)return I(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return J(a)}function I(a,b,c,f){try{var d=b.call(a.a.b,c);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.g=!1,d;var e=d.value}catch(g){return a.a.b=null,E(a.a,g),J(a)}a.a.b=null;f.call(a.a,e);return J(a)}
function J(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(c){a.a.c=void 0,E(a.a,c)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.B)throw b.A;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function K(a){this.next=function(b){D(a.a);a.a.b?b=I(a,a.a.b.next,b,a.a.l):(a.a.l(b),b=J(a));return b};this.throw=function(b){D(a.a);a.a.b?b=I(a,a.a.b["throw"],b,a.a.l):(E(a.a,b),b=J(a));return b};this.return=function(b){return H(a,b)};A();this[Symbol.iterator]=function(){return this}}function L(a){function b(b){return a.next(b)}function c(b){return a.throw(b)}return new Promise(function(f,d){function e(a){a.done?f(a.value):Promise.resolve(a.value).then(b,c).then(e,d)}e(a.next())})}
function M(a){return L(new K(new G(a)))}var N="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var f=arguments[c];if(f)for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&(a[d]=f[d])}return a};x("Object.assign",function(a){return a||N});var O=window.preact.h;
function Q(a){var b=void 0===a.size?"medium":a.size,c=a.host,f=void 0===a.F?"/linkedin":a.F,d;"medium"==b?d=1.5:"large"==b&&(d=2);return O("a",{onclick:function(){window.open(""+c+f,"Sign in","height=610,width=500,top="+(window.top.outerHeight/2+window.top.screenY-305)+",left="+(window.top.outerWidth/2+window.top.screenX-250))},onmouseover:function(a){a.currentTarget.style.background="#0369A0"},onmouseout:function(a){a.currentTarget.style.background="#0077B5"},style:"\n      background: #0077B5;\n      display: table;\n      border-radius: 3px;\n      font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n      text-decoration: none;\n      color: white;\n      cursor: pointer;"},
O("div",{style:"\n      font-family: 'Myriad Pro', 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\n      font-size: "+d+"rem;\n      padding-left: 6px;\n      padding-right: 5px;\n      border-right: 1px solid #0369A0;\n      border-radius: 3px;\n      font-weight: 600;\n      background: #0077B5;\n      display: table-cell;\n      vertical-align: middle;"},"in"),O("div",{style:"\n      padding-left:0.5em; padding-right:0.5em;font-size:smaller;\n      display: table-cell;\n      vertical-align: middle;"},
"Sign In With LinkedIn"))};var R=window.preact.h;function S(a){var b,c,f;return M(function(d){switch(d.a){case 1:return F(d,fetch("/signout",{method:"POST",headers:{I:"application/json","Content-Type":"application/json"},body:JSON.stringify({csrf:a})}),2);case 2:return b=d.c,d.i=3,F(d,b.json(),5);case 5:c=d.c;if(f=c.error)return d.return(f);d.a=0;d.i=0;break;case 3:return d.i=0,d.f=null,d.return("unknown error")}})}
function T(a){var b=a.user,c=b.firstName,f=b.lastName,d=a.csrf,e=void 0===a.v?function(){}:a.v;return R("div",{J:"CommentsUser"},R("img",{src:b.profilePicture,width:50})," Hello, "+c+" "+f+"! ",R("a",{href:"#",onclick:function(){var a;return M(function(b){if(1==b.a)return F(b,S(d),2);(a=b.c)?alert("Could not sign out: "+a+". Please refresh the page and try again. Alternatively, clear your cookies."):e();b.a=0})}},"Sign Out"))};function aa(a,b){b=b||{};return new Promise(function(c,f){function d(){var a=[],b=[],c={},f;e.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(d,e,g){a.push(e=e.toLowerCase());b.push([e,g]);f=c[e];c[e]=f?f+","+g:g});return{ok:2==(e.status/100|0),status:e.status,statusText:e.statusText,url:e.responseURL,clone:d,text:function(){return e.responseText},json:function(){return JSON.parse(e.responseText)},blob:function(){return new Blob([e.response])},headers:{keys:function(){return a},
entries:function(){return b},get:function(a){return c[a.toLowerCase()]},has:function(a){return a.toLowerCase()in c}}}}var e=new XMLHttpRequest;e.open(b.method||"get",a,!0);for(var g in b.headers)e.setRequestHeader(g,b.headers[g]);e.withCredentials="include"==b.credentials;e.onload=function(){c(d())};e.onerror=f;e.send(b.body||null)})};"fetch"in window||(window.fetch=aa);var U=window.preact,V=U.Component,W=U.h,ba=U.render;function ca(){var a,b;return M(function(c){if(1==c.a)return F(c,fetch("/user"),2);if(3!=c.a)return a=c.c,F(c,a.json(),3);b=c.c;return c.return(b)})}function X(){var a=V.call(this)||this;a.state={u:!0,j:{}};a.s=a.s.bind(a);window.addEventListener("message",a.s,!1);return a}X.prototype=l(V.prototype);X.prototype.constructor=X;
if(t)t(X,V);else for(var Y in V)if("prototype"!=Y)if(Object.defineProperties){var Z=Object.getOwnPropertyDescriptor(V,Y);Z&&Object.defineProperty(X,Y,Z)}else X[Y]=V[Y];X.a=V.prototype;X.prototype.componentDidMount=function(){var a=this;return M(function(b){if(1==b.a)return F(b,a.j(),2);a.setState({u:!1});b.a=0})};X.prototype.j=function(){var a=this,b;return M(function(c){if(1==c.a)return F(c,ca(),2);b=c.c;a.setState({j:b});c.a=0})};
X.prototype.s=function(a){var b=this,c,f,d;return M(function(e){c=a;f=c.data;d=c.origin;d!=b.props.host?e=e.return():"linkedin-signedin"!=f?(e.a=0,e=void 0):e=F(e,b.j(),0);return e})};X.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.s)};X.prototype.render=function(){var a=this;return this.state.u?W("div",null,"Loading..."):this.state.j.user?W("div",null,W(T,Object.assign({},this.state.j,{v:function(){a.setState({j:{}})}}))):W("div",null,W(Q,{host:this.props.host}))};
ba(W(X,{host:"http://localhost:5000"}),document.getElementById("preact"));
