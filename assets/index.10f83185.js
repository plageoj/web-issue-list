import{Octokit as Pe}from"https://cdn.skypack.dev/octokit";const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const _ of i)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const _={};return i.integrity&&(_.integrity=i.integrity),i.referrerpolicy&&(_.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?_.credentials="include":i.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(i){if(i.ep)return;i.ep=!0;const _=n(i);fetch(i.href,_)}};Ee();var A,u,re,oe,P,ie,B,le,O={},ce=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var n in t)e[n]=t[n];return e}function ue(e){var t=e.parentNode;t&&t.removeChild(e)}function N(e,t,n){var r,i,_,l={};for(_ in t)_=="key"?r=t[_]:_=="ref"?i=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)l[_]===void 0&&(l[_]=e.defaultProps[_]);return E(e,l,r,i,null)}function E(e,t,n,r,i){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++re:i};return i==null&&u.vnode!=null&&u.vnode(_),_}function Ae(){return{current:null}}function S(e){return e.children}function w(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?x(e):null}function se(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return se(e)}}function M(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!D.__r++||B!==u.debounceRendering)&&((B=u.debounceRendering)||ie)(D)}function D(){for(var e;D.__r=P.length;)e=P.sort(function(t,n){return t.__v.__b-n.__v.__b}),P=[],e.some(function(t){var n,r,i,_,l,a;t.__d&&(l=(_=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=k({},_)).__v=_.__v+1,I(a,_,i,n.__n,a.ownerSVGElement!==void 0,_.__h!=null?[l]:null,r,l==null?x(_):l,_.__h),he(r,_),_.__e!=l&&se(_)))})}function fe(e,t,n,r,i,_,l,a,p,d){var o,h,s,c,f,$,v,m=r&&r.__k||ce,g=m.length;for(n.__k=[],o=0;o<t.length;o++)if((c=n.__k[o]=(c=t[o])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?E(null,c,null,null,c):Array.isArray(c)?E(S,{children:c},null,null,null):c.__b>0?E(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(s=m[o])===null||s&&c.key==s.key&&c.type===s.type)m[o]=void 0;else for(h=0;h<g;h++){if((s=m[h])&&c.key==s.key&&c.type===s.type){m[h]=void 0;break}s=null}I(e,c,s=s||O,i,_,l,a,p,d),f=c.__e,(h=c.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,c),v.push(h,c.__c||f,c)),f!=null?($==null&&($=f),typeof c.type=="function"&&c.__k===s.__k?c.__d=p=ae(c,p,e):p=de(e,c,s,m,f,p),typeof n.type=="function"&&(n.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=x(s))}for(n.__e=$,o=g;o--;)m[o]!=null&&(typeof n.type=="function"&&m[o].__e!=null&&m[o].__e==n.__d&&(n.__d=x(r,o+1)),me(m[o],m[o]));if(v)for(o=0;o<v.length;o++)ve(v[o],v[++o],v[++o])}function ae(e,t,n){for(var r,i=e.__k,_=0;i&&_<i.length;_++)(r=i[_])&&(r.__=e,t=typeof r.type=="function"?ae(r,t,n):de(n,r,r,i,r.__e,t));return t}function pe(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){pe(n,t)}):t.push(e)),t}function de(e,t,n,r,i,_){var l,a,p;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(i),l=null;else{for(a=_,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==i)break e;e.insertBefore(i,_),l=_}return l!==void 0?l:i.nextSibling}function Se(e,t,n,r,i){var _;for(_ in n)_==="children"||_==="key"||_ in t||L(e,_,null,n[_],r);for(_ in t)i&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||L(e,_,t[_],n[_],r)}function z(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||we.test(t)?n:n+"px"}function L(e,t,n,r,i){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||z(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||z(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?V:G,_):e.removeEventListener(t,_?V:G,_);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function G(e){this.l[e.type+!1](u.event?u.event(e):e)}function V(e){this.l[e.type+!0](u.event?u.event(e):e)}function I(e,t,n,r,i,_,l,a,p){var d,o,h,s,c,f,$,v,m,g,H,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,a=t.__e=n.__e,t.__h=null,_=[a]),(d=u.__b)&&d(t);try{e:if(typeof b=="function"){if(v=t.props,m=(d=b.contextType)&&r[d.__c],g=d?m?m.props.value:d.__:r,n.__c?$=(o=t.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?t.__c=o=new b(v,g):(t.__c=o=new w(v,g),o.constructor=b,o.render=Fe),m&&m.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=r,h=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(v,o.__s))),s=o.props,c=o.state,h)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||t.__v===n.__v){o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,c,f)})}o.context=g,o.props=v,o.state=o.__s,(d=u.__r)&&d(t),o.__d=!1,o.__v=t,o.__P=e,d=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=k(k({},r),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(s,c)),H=d!=null&&d.type===S&&d.key==null?d.props.children:d,fe(e,Array.isArray(H)?H:[H],t,n,r,i,_,l,a,p),o.base=t.__e,t.__h=null,o.__h.length&&l.push(o),$&&(o.__E=o.__=null),o.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=He(n.__e,t,n,r,i,_,l,p);(d=u.diffed)&&d(t)}catch(F){t.__v=null,(p||_!=null)&&(t.__e=a,t.__h=!!p,_[_.indexOf(a)]=null),u.__e(F,t,n)}}function he(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){u.__e(r,n.__v)}})}function He(e,t,n,r,i,_,l,a){var p,d,o,h=n.props,s=t.props,c=t.type,f=0;if(c==="svg"&&(i=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,_[f]=null;break}}if(e==null){if(c===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,s.is&&s),_=null,a=!1}if(c===null)h===s||a&&e.data===s||(e.data=s);else{if(_=_&&A.call(e.childNodes),d=(h=n.props||O).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!a){if(_!=null)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Se(e,s,h,i,a),o)t.__k=[];else if(f=t.props.children,fe(e,Array.isArray(f)?f:[f],t,n,r,i&&c!=="foreignObject",_,l,_?_[0]:n.__k&&x(n,0),a),_!=null)for(f=_.length;f--;)_[f]!=null&&ue(_[f]);a||("value"in s&&(f=s.value)!==void 0&&(f!==e.value||c==="progress"&&!f||c==="option"&&f!==h.value)&&L(e,"value",f,h.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==e.checked&&L(e,"checked",f,h.checked,!1))}return e}function ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function me(e,t,n){var r,i;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ve(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){u.__e(_,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&me(r[i],t,typeof e.type!="function");n||e.__e==null||ue(e.__e),e.__e=e.__d=void 0}function Fe(e,t,n){return this.constructor(e,n)}function q(e,t,n){var r,i,_;u.__&&u.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],I(t,e=(!r&&n||t).__k=N(S,null,[e]),i||O,O,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?A.call(t.childNodes):null,_,!r&&n?n:i?i.__e:t.firstChild,r),he(_,e)}function ye(e,t){q(e,t,ye)}function Te(e,t,n){var r,i,_,l=k({},e.props);for(_ in t)_=="key"?r=t[_]:_=="ref"?i=t[_]:l[_]=t[_];return arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),E(e.type,l,r||e.key,i||e.ref,null)}function Oe(e,t){var n={__c:t="__cC"+le++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,_;return this.getChildContext||(i=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(M)},this.sub=function(l){i.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),a&&a.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}A=ce.slice,u={__e:function(e,t,n,r){for(var i,_,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(a){e=a}throw e}},re=0,oe=function(e){return e!=null&&e.constructor===void 0},w.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),M(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),M(this))},w.prototype.render=S,P=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,le=0;var De=Object.freeze(Object.defineProperty({__proto__:null,render:q,hydrate:ye,createElement:N,h:N,Fragment:S,createRef:Ae,get isValidElement(){return oe},Component:w,cloneElement:Te,createContext:Oe,toChildArray:pe,get options(){return u}},Symbol.toStringTag,{value:"Module"})),R,y,K,U=0,ge=[],J=u.__b,Q=u.__r,X=u.diffed,Y=u.__c,Z=u.unmount;function be(e,t){u.__h&&u.__h(y,e,U||t),U=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Le(e){return U=1,Ne(ke,e)}function Ne(e,t,n){var r=be(R++,2);return r.t=e,r.__c||(r.__=[n?n(t):ke(void 0,t),function(i){var _=r.t(r.__[0],i);r.__[0]!==_&&(r.__=[_,r.__[1]],r.__c.setState({}))}],r.__c=y),r.__}function Me(e,t){var n=be(R++,3);!u.__s&&je(n.__H,t)&&(n.__=e,n.__H=t,y.__H.__h.push(n))}function Ue(){for(var e;e=ge.shift();)if(e.__P)try{e.__H.__h.forEach(T),e.__H.__h.forEach(j),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){y=null,J&&J(e)},u.__r=function(e){Q&&Q(e),R=0;var t=(y=e.__c).__H;t&&(t.__h.forEach(T),t.__h.forEach(j),t.__h=[])},u.diffed=function(e){X&&X(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ge.push(t)!==1&&K===u.requestAnimationFrame||((K=u.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(_),ee&&cancelAnimationFrame(r),setTimeout(n)},_=setTimeout(i,100);ee&&(r=requestAnimationFrame(i))})(Ue)),y=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(r){return!r.__||j(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],u.__e(r,n.__v)}}),Y&&Y(e,t)},u.unmount=function(e){Z&&Z(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{T(r)}catch(i){t=i}}),t&&u.__e(t,n.__v))};var ee=typeof requestAnimationFrame=="function";function T(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function j(e){var t=y;e.__c=e.__(),y=t}function je(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ke(e,t){return typeof t=="function"?t(e):t}function We(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var Ie=We(De),$e,xe,Ce,W=Ie,qe=0;function te(e,t,n,r,i){var _,l,a={};for(l in t)l=="ref"?_=t[l]:a[l]=t[l];var p={type:e,props:a,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--qe,__source:i,__self:r};if(typeof e=="function"&&(_=e.defaultProps))for(l in _)a[l]===void 0&&(a[l]=_[l]);return W.options.vnode&&W.options.vnode(p),p}Ce=W.Fragment,xe=te,$e=te;const C=xe,ne=$e,_e=Ce;function Re(){const[e,t]=Le([]);return Me(()=>{(async()=>{const r=await Be("uta8a","grss");t(r)})()},[]),ne(_e,{children:[C("p",{children:"HiCoder web\u4F1A"}),C("p",{children:"issue list"}),e.map(n=>ne(_e,{children:[C("a",{href:n.url,children:n.title}),n.labels.map(r=>C("p",{children:r}))]}))]})}const Be=async(e,t)=>(await new Pe().request("GET /repos/{owner}/{repo}/issues",{owner:e,repo:t})).data.map(i=>{const _=[];for(const l of i.labels)typeof l!="string"&&l.name!==void 0&&_.push(l.name);return{title:i.title,url:i.html_url,labels:_}});q(C(Re,{}),document.getElementById("app"));
