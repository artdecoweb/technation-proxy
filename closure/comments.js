function k(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:k(a)}}function v(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},w;
if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var x;a:{var ba={G:!0},z={};try{z.__proto__=ba;x=z.G;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var A=w;
function B(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(A)A(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.N=b.prototype}var C="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,D="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function E(a,b){if(b){var c=C;a=a.split(".");for(var e=0;e<a.length-1;e++){var g=a[e];g in c||(c[g]={});c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&D(c,a,{configurable:!0,writable:!0,value:b})}}
E("Promise",function(a){function b(f){this.b=0;this.i=void 0;this.a=[];var d=this.c();try{f(d.resolve,d.reject)}catch(l){d.reject(l)}}function c(){this.a=null}function e(f){return f instanceof b?f:new b(function(d){d(f)})}if(a)return a;c.prototype.b=function(f){if(null==this.a){this.a=[];var d=this;this.c(function(){d.i()})}this.a.push(f)};var g=C.setTimeout;c.prototype.c=function(f){g(f,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var f=this.a;this.a=[];for(var d=0;d<f.length;++d){var l=
f[d];f[d]=null;try{l()}catch(m){this.g(m)}}}this.a=null};c.prototype.g=function(f){this.c(function(){throw f;})};b.prototype.c=function(){function f(m){return function(n){l||(l=!0,m.call(d,n))}}var d=this,l=!1;return{resolve:f(this.J),reject:f(this.g)}};b.prototype.J=function(f){if(f===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.K(f);else{a:switch(typeof f){case "object":var d=null!=f;break a;case "function":d=!0;break a;default:d=!1}d?this.w(f):this.j(f)}};
b.prototype.w=function(f){var d=void 0;try{d=f.then}catch(l){this.g(l);return}"function"==typeof d?this.L(d,f):this.j(f)};b.prototype.g=function(f){this.l(2,f)};b.prototype.j=function(f){this.l(1,f)};b.prototype.l=function(f,d){if(0!=this.b)throw Error("Cannot settle("+f+", "+d+"): Promise already settled in state"+this.b);this.b=f;this.i=d;this.u()};b.prototype.u=function(){if(null!=this.a){for(var f=0;f<this.a.length;++f)h.b(this.a[f]);this.a=null}};var h=new c;b.prototype.K=function(f){var d=this.c();
f.v(d.resolve,d.reject)};b.prototype.L=function(f,d){var l=this.c();try{f.call(d,l.resolve,l.reject)}catch(m){l.reject(m)}};b.prototype.then=function(f,d){function l(p,r){return"function"==typeof p?function(u){try{m(p(u))}catch(y){n(y)}}:r}var m,n,q=new b(function(p,r){m=p;n=r});this.v(l(f,m),l(d,n));return q};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.v=function(f,d){function l(){switch(m.b){case 1:f(m.i);break;case 2:d(m.i);break;default:throw Error("Unexpected state: "+
m.b);}}var m=this;null==this.a?h.b(l):this.a.push(l)};b.resolve=e;b.reject=function(f){return new b(function(d,l){l(f)})};b.race=function(f){return new b(function(d,l){for(var m=t(f),n=m.next();!n.done;n=m.next())e(n.value).v(d,l)})};b.all=function(f){var d=t(f),l=d.next();return l.done?e([]):new b(function(m,n){function q(u){return function(y){p[u]=y;r--;0==r&&m(p)}}var p=[],r=0;do p.push(void 0),r++,e(l.value).v(q(p.length-1),n),l=d.next();while(!l.done)})};return b});
function F(){F=function(){};C.Symbol||(C.Symbol=ca)}function G(a,b){this.a=a;D(this,"description",{configurable:!0,writable:!0,value:b})}G.prototype.toString=function(){return this.a};var ca=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new G("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function H(){F();var a=C.Symbol.iterator;a||(a=C.Symbol.iterator=C.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&D(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(k(this))}});H=function(){}}function da(a){H();a={next:a};a[C.Symbol.iterator]=function(){return this};return a}function I(){this.j=!1;this.c=null;this.l=void 0;this.a=1;this.g=this.i=0;this.w=this.b=null}function J(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}
I.prototype.u=function(a){this.l=a};function K(a,b){a.b={B:b,C:!0};a.a=a.i||a.g}I.prototype.return=function(a){this.b={return:a};this.a=this.g};function L(a,b,c){a.a=c;return{value:b}}I.prototype.s=function(a){this.a=a};function ea(a){this.a=new I;this.b=a}function fa(a,b){J(a.a);var c=a.a.c;if(c)return M(a,"return"in c?c["return"]:function(e){return{value:e,done:!0}},b,a.a.return);a.a.return(b);return N(a)}
function M(a,b,c,e){try{var g=b.call(a.a.c,c);if(!(g instanceof Object))throw new TypeError("Iterator result "+g+" is not an object");if(!g.done)return a.a.j=!1,g;var h=g.value}catch(f){return a.a.c=null,K(a.a,f),N(a)}a.a.c=null;e.call(a.a,h);return N(a)}function N(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.j=!1,{value:b.value,done:!1}}catch(c){a.a.l=void 0,K(a.a,c)}a.a.j=!1;if(a.a.b){b=a.a.b;a.a.b=null;if(b.C)throw b.B;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ha(a){this.next=function(b){J(a.a);a.a.c?b=M(a,a.a.c.next,b,a.a.u):(a.a.u(b),b=N(a));return b};this.throw=function(b){J(a.a);a.a.c?b=M(a,a.a.c["throw"],b,a.a.u):(K(a.a,b),b=N(a));return b};this.return=function(b){return fa(a,b)};H();this[Symbol.iterator]=function(){return this}}function ia(a){function b(e){return a.next(e)}function c(e){return a.throw(e)}return new Promise(function(e,g){function h(f){f.done?e(f.value):Promise.resolve(f.value).then(b,c).then(h,g)}h(a.next())})}
function ja(a,b){H();a instanceof String&&(a+="");var c=0,e={next:function(){if(c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e}E("Array.prototype.values",function(a){return a?a:function(){return ja(this,function(b,c){return c})}});var O=preact,P=O.h,Q=O.Component,ka=O.render;function la(a,b){var c=this.props,e=c.name,g=a.value;if(this.context.values[e]!=b.values[e])return!0;if(c.value!=g){if(b.onChange)b.onChange(a.name,g);return!1}};function R(){var a=Q.call(this)||this;a.props=a.props;return a}B(R,Q);R.prototype.shouldComponentUpdate=function(a,b,c){return la.call(this,a,c)};R.prototype.componentDidMount=function(){var a=this.props,b=t(a.children).next().value;a=a.name;var c=this.context.onChange;b&&c(a,b.trim())};
R.prototype.render=function(a){var b=a.name,c=a.children,e=this.context,g=e.onChange,h=void 0===e.values?{}:e.values;return P("textarea",{required:a.required,name:b,placeholder:a.placeholder,"aria-describedby":e.o,className:"form-control",id:e.id,onChange:function(f){g(b,f.currentTarget.value)},rows:void 0===a.rows?3:a.rows},b in h?h[b]:c)};function S(){var a=Q.call(this)||this;a.props=a.props;return a}B(S,Q);S.prototype.shouldComponentUpdate=function(a,b,c){return la.call(this,a,c)};S.prototype.componentDidMount=function(){var a=this.props,b=a.value;a=a.name;var c=this.context.onChange;void 0!==b&&c&&c(a,b)};
S.prototype.render=function(a){var b=Object.assign({},a),c=a.required,e=a.name,g=a.placeholder,h=void 0===a.type?"text":a.type,f=a.file;a=a.value;b=(delete b.required,delete b.name,delete b.placeholder,delete b.type,delete b.file,delete b.value,b);var d=this.context,l=d.onChange,m=void 0===d.values?{}:d.values;return P("input",Object.assign({},b,{required:c,name:e,placeholder:g,className:"form-control"+(f?"-file":""),value:e in m?m[e]:a,type:h,"aria-describedby":d.o,id:d.id,onChange:function(n){l(e,
n.currentTarget.value)}}))};function ma(a,b){return b=b||{},new Promise(function(c,e){function g(){return{ok:2==(h.status/100|0),statusText:h.statusText,status:h.status,url:h.responseURL,text:function(){return Promise.resolve(h.responseText)},json:function(){return Promise.resolve(JSON.parse(h.responseText))},blob:function(){return Promise.resolve(new Blob([h.response]))},clone:g,headers:{keys:function(){return f},entries:function(){return d},get:function(n){return l[n.toLowerCase()]},has:function(n){return n.toLowerCase()in
l}}}}var h=new XMLHttpRequest,f=[],d=[],l={},m;for(m in h.open(b.method||"get",a,!0),h.onload=function(){h.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(n,q,p){f.push(q=q.toLowerCase());d.push([q,p]);l[q]=l[q]?l[q]+","+p:p});c(g())},h.onerror=e,h.withCredentials="include"==b.credentials,b.headers)h.setRequestHeader(m,b.headers[m]);h.send(b.body||null)})};function T(){var a=Q.call(this)||this;a.props=a.props;a.state={formLoading:!1,error:null,success:null};a.a={};return a}B(T,Q);
T.prototype.b=function(a){var b=this,c,e,g,h,f;return ia(new ha(new ea(function(d){switch(d.a){case 1:a.preventDefault();if(!b.props.path)return b.setState({error:"Path is not set in the properties of the form."}),d.return(!1);b.setState({error:null,success:null});c=new FormData(a.target);b.setState({formLoading:!0});d.i=2;d.g=3;return L(d,ma(b.props.path,Object.assign({},{method:"POST",body:c},b.a)),5);case 5:return e=d.l,L(d,e.json(),6);case 6:g=d.l,(h=g.error)?b.setState({error:h}):b.setState({success:1});
case 3:d.w=[d.b];d.i=0;d.g=0;b.setState({formLoading:!1});var l=d.w.splice(0)[0];(l=d.b=d.b||l)?l.C?d.a=d.i||d.g:void 0!=l.s&&d.g<l.s?(d.a=l.s,d.b=null):d.a=d.g:d.a=4;break;case 2:d.i=0;l=d.b.B;d.b=null;f=l;b.setState({error:f});d.s(3);break;case 4:if(!b.props.submitFinish){d.s(7);break}return L(d,b.props.submitFinish(e),7);case 7:return d.return(!1)}})))};function U(){var a=Q.call(this)||this;a.state={values:{}};a.props=a.props;return a}B(U,Q);U.prototype.getChildContext=function(){return{values:this.state.values,onChange:this.onChange.bind(this)}};U.prototype.onChange=function(a,b){var c={};this.setState({values:Object.assign({},this.state.values,(c[a]=b,c))});if(this.props.onChange)this.props.onChange(this.state.values)};
U.prototype.render=function(a){var b=Object.assign({},a),c=a.children,e=a.formRef;a=a.onSubmit;b=(delete b.children,delete b.formRef,delete b.onSubmit,delete b.onChange,b);return P("form",Object.assign({},b,{ref:e,onSubmit:a}),c)};function V(){var a=Q.call(this)||this;a.id="i"+Math.floor(1E5*Math.random());a.o="h"+a.id;a.props=a.props;return a}B(V,Q);V.prototype.getChildContext=function(){return{id:this.id,o:this.o}};
V.prototype.render=function(a){var b=a.children,c=a.label;a=a.help;return P("div",{className:"form-group"},c&&P("label",{htmlFor:this.id},c),b,a&&P("small",{id:this.o,dangerouslySetInnerHTML:{__html:a},className:"form-text text-muted"}))};
function na(a){var b=a.loading,c=a.confirmText,e=void 0===a.loadingText?c:a.loadingText;a=["btn","btn-"+((void 0===a.outline?0:a.outline)?"outline-":"")+(void 0===a.type?"primary":a.type),a.className].filter(Boolean);return P("button",{className:a.join(" "),type:"submit",disabled:b},b&&P("span",{className:"spinner-border spinner-border-sm"+(e?" mr-2":""),role:"status","aria-hidden":"true"}),b?e:c)};function oa(a){var b=a.linkedin_user;a=a.github_user;var c;if(b)var e=b.profilePicture;else a&&(e=a.avatar_url);b?c=b.firstName+" "+b.lastName:a&&(c=a.name||a.login);return{F:e,name:c}};function W(){var a=T.call(this)||this;a.a={credentials:"include"};return a}B(W,T);
W.prototype.render=function(a){var b=this,c=Object.assign({},a),e=a.onChange;a=a.f;c=(delete c.onChange,delete c.f,c);var g=this.state,h=g.formLoading,f=g.error;g=g.success;var d=oa(a),l=d.F;d=d.name;return P(U,Object.assign({},c,{onSubmit:this.b.bind(this),onChange:function(m){b.setState({error:null,success:null});e&&e(m)}}),l&&P(S,{value:l,type:"hidden",name:"photo"}),P(S,{value:a.csrf,type:"hidden",name:"csrf"}),P(V,{label:"Name*",help:"This will appear on the website"},P(S,{value:d,name:"name"})),
P(V,{help:a.github_user?"GitHub username, sign out to remove":"Please sign in with GitHub",label:"GitHub"},P(S,{value:a.github_user?a.github_user.html_url:null,name:"github",disabled:!0})),P(V,{label:"Comment*",help:"Please enter your opinion"},P(R,{required:!0,name:"comment"},"I think you're right/wrong because...")),P(na,{loading:h,type:"warning",confirmText:"Submit Data"}),f&&"Error: "+f,g&&"Comment has been submitted!")};function pa(a){var b=void 0===b?{}:b;var c=window.top,e=c.outerHeight,g=c.screenY,h=[];h.push("width=500","left="+(c.outerWidth/2+c.screenX-250));h.push("top="+(e/2+g-305-50),"height=610");c=Object.keys(b).map(function(f){return f+"="+b[f]});h.push.apply(h,v(c));window.open(a,"Sign In",h.join(","))};function qa(a){a=void 0===a?"":a;var b=document.head,c=document.createElement("style");c.type="text/css";c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));b.appendChild(c)};qa(".LinkedInButton {\n  background: #0077B5;\n  display: inline-table;\n  border-radius: 3px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  text-decoration: none;\n  color: white !important;\n  cursor: pointer;\n}\n.LinkedInButton .LinkedInIn {\n  font-family: 'Myriad Pro', 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\n  padding-left: 6px;\n  padding-right: 5px;\n  border-right: 1px solid #0369A0;\n  border-radius: 3px;\n  font-weight: 600;\n  background: #0077B5;\n  display: table-cell;\n  vertical-align: middle;\n}\n.LinkedInButton .LinkedInText {\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: smaller;\n  display: table-cell;\n  vertical-align: middle;\n}");function ra(a){var b=void 0===a.size?"medium":a.size,c=a.host,e=void 0===a.A?"/linkedin":a.A,g;"medium"==b?g=1.5:"large"==b&&(g=2);return P("a",{onClick:function(h){h.preventDefault();pa(""+c+e);return!1},onMouseOver:function(h){h.currentTarget.style.background="#0369A0"},onMouseOut:function(h){h.currentTarget.style.background="#0077B5"},className:"LinkedInButton"},P("div",{style:"font-size:"+g+"rem;",className:"LinkedInIn"},"in"),P("div",{className:"LinkedInText"},"Sign In With LinkedIn"))};function sa(a){return P("svg",Object.assign({},a,{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),P("title",{},"GitHub icon"),P("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}
;qa(".GitHubButton {\n  background: #dfdfdf;\n  display: inline-table;\n  border-radius: 3px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  text-decoration: none;\n  color: black !important;\n  cursor: pointer;\n}\n.GitHubButton .GitHubLogo {\n  padding: 0px 6px 0px 5px;\n  border-right: 1px solid #bcbcbc;\n  border-radius: 3px;\n  font-weight: 600;\n  background: rgb(223, 223, 223);\n  display: table-cell;\n  vertical-align: middle;\n}\n.GitHubButton .GitHubText {\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: smaller;\n  display: table-cell;\n  vertical-align: middle;\n}");function ta(a){var b=void 0===a.size?"medium":a.size,c=a.host,e=void 0===a.A?"/github":a.A,g;"medium"==b?g=1.5:"large"==b&&(g=2);return P("a",{onClick:function(h){h.preventDefault();pa(""+c+e);return!1},onMouseOver:function(h){h.currentTarget.style.background="#bcbcbc"},onMouseOut:function(h){h.currentTarget.style.background="#DFDFDF"},className:"GitHubButton"},P("div",{style:"height:"+g+"rem;font-size:"+g+"rem",className:"GitHubLogo"},P(sa,{height:"100%",style:"margin-top:-4px"})),P("div",{className:"GitHubText"},
"Sign In With GitHub"))};function X(a,b,c){function e(){var m=[],n=[],q={},p;d.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,u,y){m.push(u=u.toLowerCase());n.push([u,y]);p=q[u];q[u]=p?p+","+y:y});return{ok:2==(d.status/100|0),status:d.status,statusText:d.statusText,url:d.responseURL,clone:e,text:function(){return d.responseText},json:function(){return JSON.parse(d.responseText)},blob:function(){return new Blob([d.response])},headers:{keys:function(){return m},entries:function(){return n},get:function(r){return q[r.toLowerCase()]},
has:function(r){return r.toLowerCase()in q}}}}c=void 0===c?{}:c;var g=void 0===c.headers?{}:c.headers,h=c.credentials,f=void 0===c.body?null:c.body,d=new XMLHttpRequest;d.open(void 0===c.method?"get":c.method,a,!0);for(var l in g)d.setRequestHeader(l,g[l]);d.withCredentials="include"==h;d.onload=function(){b(null,e())};d.onerror=function(){b("Could not load the resource at "+a+".")};d.send(f)};function ua(a,b,c){var e=new FormData;e.append("csrf",b);X(a+"/signout",function(g,h){if(g)return c(g.message);g=h.json().error;c(g)},{method:"POST",headers:{M:"application/json"},body:e,credentials:"include"})}
function va(a){var b=a.f,c=void 0===a.D?function(){}:a.D,e=a.host;a=b.github_user;var g=b.csrf;if(!b.linkedin_user&&!a)return null;b=oa(b);a=b.name;return P("div",{},P("img",{src:b.F,width:"50"}),"Hello, ",a,"!"," ",P("a",{onClick:function(h){h.preventDefault();ua(e,g,function(f){f?alert("Could not sign out: "+f+". Please refresh the page and try again. Alternatively, clear your cookies."):c()});return!1},href:"#"},"Sign Out"))};function Y(){var a=Q.call(this)||this;a.state={m:[],page:0,csrf:null};return a}B(Y,Q);Y.prototype.componentDidMount=function(){this.fetch()};Y.prototype.fetch=function(a){var b=this;this.setState({loading:!0});X(this.props.host+"/json-comments"+(a?"?id="+a:""),function(c,e){b.setState({loading:!1});if(c)return b.setState({error:c});c=e.json();e=c.csrf;b.setState({m:[].concat(v(c.comments),v(b.state.m)),csrf:e})})};
Y.prototype.render=function(){var a=this,b=this.state,c=b.error,e=b.loading,g=b.m,h=b.csrf;return c?P("div",{},"Error loading list: ",c):e?P("div",{},"Loading list..."):P("div",{className:"CommentsList"},g.map(function(f){return P(wa,{key:f._id,comment:f,csrf:h,host:a.props.host,H:function(d){a.setState({m:a.state.m.filter(function(l){return l._id!=d})})}})}))};function xa(a){return(a=a.github_user)?P("span",{}," (",P("a",{href:a.html_url},a.login),")"):null}
function wa(a){var b=a.comment,c=b._id,e=b.isAuthor,g=b.photo,h=b.comment,f=b.date,d=b.github_user,l=a.H,m=a.csrf,n=a.host;return P("div",{className:"comment"},P("strong",{},b.name),P(xa,{github_user:d})," ","on ",P("em",{},(new Date(f)).toLocaleString())," ",e&&P("a",{onClick:function(q){q.preventDefault();confirm("Are you sure you want to delete comment?")&&X(n+"/remove-comment?csrf="+m+"&id="+c,function(p,r){(p=r.json().error)?alert(p):r&&l(c)});return!1},href:"#"},"Remove"),P("div",{style:"display:table;",
className:"CommentBlock"},g&&P("div",{style:"display:table-cell"},P("img",{src:g,width:"50"})),P("div",{style:"display:table-cell"},h)))};function Z(){var a=Q.call(this)||this;a.state={loading:!0,error:null,f:{}};a.a=a.b.bind(a);a.list=null;window.addEventListener("message",a.a,!1);return a}B(Z,Q);Z.prototype.componentDidMount=function(){this.f()};Z.prototype.f=function(){var a=this;this.setState({loading:!0});X(this.props.host+"/auth",function(b,c){a.setState({loading:!1});if(b)return a.setState({error:b});b=c.json();a.setState({f:b})},{credentials:"include"})};
Z.prototype.b=function(a){a.origin==this.props.host&&"signedin"==a.data&&this.f()};Z.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.a)};
Z.prototype.render=function(){var a=this;return P("div",{},P(ya,{error:this.state.error,loading:this.state.loading,f:this.state.f,host:this.props.host,I:function(){a.setState({f:{}})}}),P(W,{path:this.props.host+"/comment",f:this.state.f,submitFinish:function(b){var c,e,g;return ia(new ha(new ea(function(h){if(1==h.a)return L(h,b.json(),2);c=h.l;e=c.error;g=c.id;!e&&g&&a.list&&a.list.fetch(g);h.a=0})))}}),P(Y,{host:this.props.host,ref:function(b){a.list=b}}))};
function ya(a){var b=a.error,c=a.loading,e=a.f,g=a.I;a=a.host;return b?P("div",{},"Error: ",b):c?P("div",{},"Loading..."):P("div",{},!(e.linkedin_user||e.github_user)&&P("span",{style:"display:block"},"To display the profile image and validate your GitHub profile, sign in. No advanced permissions are required other than default ones (no email). Your public LinkedIn ID remains unknown. You will not be able to delete/edit your comment as a guest. ",P("a",{href:"/privacy-policy.html"},"Privacy Policy")),
P(va,{f:e,D:g,host:a}),!e.linkedin_user&&P(ra,{host:a}),!e.linkedin_user&&" ",!e.github_user&&P(ta,{host:a}))}window.comments=function(a){var b=void 0===a.container?"preact":a.container;ka(P(Z,{host:void 0===a.host?"https://api.technation.sucks":a.host}),document.getElementById(b))};

//# sourceMappingURL=comments.js.map