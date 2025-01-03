(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var qp={exports:{}},tu={},Hp={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lE;function sA(){if(lE)return Ne;lE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,V={};function b(M,G,pe){this.props=M,this.context=G,this.refs=V,this.updater=pe||C}b.prototype.isReactComponent={},b.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},b.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function q(){}q.prototype=b.prototype;function Q(M,G,pe){this.props=M,this.context=G,this.refs=V,this.updater=pe||C}var te=Q.prototype=new q;te.constructor=Q,P(te,b.prototype),te.isPureReactComponent=!0;var se=Array.isArray,Se=Object.prototype.hasOwnProperty,ve={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(M,G,pe){var Ae,Pe={},Ve=null,ze=null;if(G!=null)for(Ae in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(Ve=""+G.key),G)Se.call(G,Ae)&&!D.hasOwnProperty(Ae)&&(Pe[Ae]=G[Ae]);var $e=arguments.length-2;if($e===1)Pe.children=pe;else if(1<$e){for(var Je=Array($e),Nt=0;Nt<$e;Nt++)Je[Nt]=arguments[Nt+2];Pe.children=Je}if(M&&M.defaultProps)for(Ae in $e=M.defaultProps,$e)Pe[Ae]===void 0&&(Pe[Ae]=$e[Ae]);return{$$typeof:n,type:M,key:Ve,ref:ze,props:Pe,_owner:ve.current}}function A(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function L(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(pe){return G[pe]})}var F=/\/+/g;function k(M,G){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):G.toString(36)}function dt(M,G,pe,Ae,Pe){var Ve=typeof M;(Ve==="undefined"||Ve==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(Ve){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,Pe=Pe(ze),M=Ae===""?"."+k(ze,0):Ae,se(Pe)?(pe="",M!=null&&(pe=M.replace(F,"$&/")+"/"),dt(Pe,G,pe,"",function(Nt){return Nt})):Pe!=null&&(x(Pe)&&(Pe=A(Pe,pe+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(F,"$&/")+"/")+M)),G.push(Pe)),1;if(ze=0,Ae=Ae===""?".":Ae+":",se(M))for(var $e=0;$e<M.length;$e++){Ve=M[$e];var Je=Ae+k(Ve,$e);ze+=dt(Ve,G,pe,Je,Pe)}else if(Je=w(M),typeof Je=="function")for(M=Je.call(M),$e=0;!(Ve=M.next()).done;)Ve=Ve.value,Je=Ae+k(Ve,$e++),ze+=dt(Ve,G,pe,Je,Pe);else if(Ve==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function Kt(M,G,pe){if(M==null)return M;var Ae=[],Pe=0;return dt(M,Ae,"","",function(Ve){return G.call(pe,Ve,Pe++)}),Ae}function Qt(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(pe){(M._status===0||M._status===-1)&&(M._status=1,M._result=pe)},function(pe){(M._status===0||M._status===-1)&&(M._status=2,M._result=pe)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var Qe={current:null},ie={transition:null},ge={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:ve};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Kt,forEach:function(M,G,pe){Kt(M,function(){G.apply(this,arguments)},pe)},count:function(M){var G=0;return Kt(M,function(){G++}),G},toArray:function(M){return Kt(M,function(G){return G})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ne.Component=b,Ne.Fragment=t,Ne.Profiler=s,Ne.PureComponent=Q,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ne.act=ae,Ne.cloneElement=function(M,G,pe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=P({},M.props),Pe=M.key,Ve=M.ref,ze=M._owner;if(G!=null){if(G.ref!==void 0&&(Ve=G.ref,ze=ve.current),G.key!==void 0&&(Pe=""+G.key),M.type&&M.type.defaultProps)var $e=M.type.defaultProps;for(Je in G)Se.call(G,Je)&&!D.hasOwnProperty(Je)&&(Ae[Je]=G[Je]===void 0&&$e!==void 0?$e[Je]:G[Je])}var Je=arguments.length-2;if(Je===1)Ae.children=pe;else if(1<Je){$e=Array(Je);for(var Nt=0;Nt<Je;Nt++)$e[Nt]=arguments[Nt+2];Ae.children=$e}return{$$typeof:n,type:M.type,key:Pe,ref:Ve,props:Ae,_owner:ze}},Ne.createContext=function(M){return M={$$typeof:l,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Ne.createElement=S,Ne.createFactory=function(M){var G=S.bind(null,M);return G.type=M,G},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(M){return{$$typeof:h,render:M}},Ne.isValidElement=x,Ne.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Qt}},Ne.memo=function(M,G){return{$$typeof:p,type:M,compare:G===void 0?null:G}},Ne.startTransition=function(M){var G=ie.transition;ie.transition={};try{M()}finally{ie.transition=G}},Ne.unstable_act=ae,Ne.useCallback=function(M,G){return Qe.current.useCallback(M,G)},Ne.useContext=function(M){return Qe.current.useContext(M)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(M){return Qe.current.useDeferredValue(M)},Ne.useEffect=function(M,G){return Qe.current.useEffect(M,G)},Ne.useId=function(){return Qe.current.useId()},Ne.useImperativeHandle=function(M,G,pe){return Qe.current.useImperativeHandle(M,G,pe)},Ne.useInsertionEffect=function(M,G){return Qe.current.useInsertionEffect(M,G)},Ne.useLayoutEffect=function(M,G){return Qe.current.useLayoutEffect(M,G)},Ne.useMemo=function(M,G){return Qe.current.useMemo(M,G)},Ne.useReducer=function(M,G,pe){return Qe.current.useReducer(M,G,pe)},Ne.useRef=function(M){return Qe.current.useRef(M)},Ne.useState=function(M){return Qe.current.useState(M)},Ne.useSyncExternalStore=function(M,G,pe){return Qe.current.useSyncExternalStore(M,G,pe)},Ne.useTransition=function(){return Qe.current.useTransition()},Ne.version="18.3.1",Ne}var uE;function dg(){return uE||(uE=1,Hp.exports=sA()),Hp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE;function oA(){if(cE)return tu;cE=1;var n=dg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(h,f,p){var y,E={},w=null,C=null;p!==void 0&&(w=""+p),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(C=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(E[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)E[y]===void 0&&(E[y]=f[y]);return{$$typeof:e,type:h,key:w,ref:C,props:E,_owner:s.current}}return tu.Fragment=t,tu.jsx=l,tu.jsxs=l,tu}var hE;function aA(){return hE||(hE=1,qp.exports=oA()),qp.exports}var Z=aA(),$=dg(),Ih={},Gp={exports:{}},En={},Kp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dE;function lA(){return dE||(dE=1,function(n){function e(ie,ge){var ae=ie.length;ie.push(ge);e:for(;0<ae;){var M=ae-1>>>1,G=ie[M];if(0<s(G,ge))ie[M]=ge,ie[ae]=G,ae=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ge=ie[0],ae=ie.pop();if(ae!==ge){ie[0]=ae;e:for(var M=0,G=ie.length,pe=G>>>1;M<pe;){var Ae=2*(M+1)-1,Pe=ie[Ae],Ve=Ae+1,ze=ie[Ve];if(0>s(Pe,ae))Ve<G&&0>s(ze,Pe)?(ie[M]=ze,ie[Ve]=ae,M=Ve):(ie[M]=Pe,ie[Ae]=ae,M=Ae);else if(Ve<G&&0>s(ze,ae))ie[M]=ze,ie[Ve]=ae,M=Ve;else break e}}return ge}function s(ie,ge){var ae=ie.sortIndex-ge.sortIndex;return ae!==0?ae:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,h=l.now();n.unstable_now=function(){return l.now()-h}}var f=[],p=[],y=1,E=null,w=3,C=!1,P=!1,V=!1,b=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ie){for(var ge=t(p);ge!==null;){if(ge.callback===null)r(p);else if(ge.startTime<=ie)r(p),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(p)}}function se(ie){if(V=!1,te(ie),!P)if(t(f)!==null)P=!0,Qt(Se);else{var ge=t(p);ge!==null&&Qe(se,ge.startTime-ie)}}function Se(ie,ge){P=!1,V&&(V=!1,q(S),S=-1),C=!0;var ae=w;try{for(te(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||ie&&!L());){var M=E.callback;if(typeof M=="function"){E.callback=null,w=E.priorityLevel;var G=M(E.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&r(f),te(ge)}else r(f);E=t(f)}if(E!==null)var pe=!0;else{var Ae=t(p);Ae!==null&&Qe(se,Ae.startTime-ge),pe=!1}return pe}finally{E=null,w=ae,C=!1}}var ve=!1,D=null,S=-1,A=5,x=-1;function L(){return!(n.unstable_now()-x<A)}function F(){if(D!==null){var ie=n.unstable_now();x=ie;var ge=!0;try{ge=D(!0,ie)}finally{ge?k():(ve=!1,D=null)}}else ve=!1}var k;if(typeof Q=="function")k=function(){Q(F)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,Kt=dt.port2;dt.port1.onmessage=F,k=function(){Kt.postMessage(null)}}else k=function(){b(F,0)};function Qt(ie){D=ie,ve||(ve=!0,k())}function Qe(ie,ge){S=b(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){P||C||(P=!0,Qt(Se))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ie){switch(w){case 1:case 2:case 3:var ge=3;break;default:ge=w}var ae=w;w=ge;try{return ie()}finally{w=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=w;w=ie;try{return ge()}finally{w=ae}},n.unstable_scheduleCallback=function(ie,ge,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,ie={id:y++,callback:ge,priorityLevel:ie,startTime:ae,expirationTime:G,sortIndex:-1},ae>M?(ie.sortIndex=ae,e(p,ie),t(f)===null&&ie===t(p)&&(V?(q(S),S=-1):V=!0,Qe(se,ae-M))):(ie.sortIndex=G,e(f,ie),P||C||(P=!0,Qt(Se))),ie},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(ie){var ge=w;return function(){var ae=w;w=ge;try{return ie.apply(this,arguments)}finally{w=ae}}}}(Qp)),Qp}var fE;function uA(){return fE||(fE=1,Kp.exports=lA()),Kp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pE;function cA(){if(pE)return En;pE=1;var n=dg(),e=uA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},E={};function w(i){return f.call(E,i)?!0:f.call(y,i)?!1:p.test(i)?E[i]=!0:(y[i]=!0,!1)}function C(i,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function P(i,o,u,d){if(o===null||typeof o>"u"||C(i,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function V(i,o,u,d,m,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){b[i]=new V(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];b[o]=new V(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){b[i]=new V(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){b[i]=new V(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){b[i]=new V(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){b[i]=new V(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){b[i]=new V(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){b[i]=new V(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){b[i]=new V(i,5,!1,i.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function Q(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(q,Q);b[o]=new V(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(q,Q);b[o]=new V(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(q,Q);b[o]=new V(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){b[i]=new V(i,1,!1,i.toLowerCase(),null,!1,!1)}),b.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){b[i]=new V(i,1,!1,i.toLowerCase(),null,!0,!0)});function te(i,o,u,d){var m=b.hasOwnProperty(o)?b[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(P(o,u,m,d)&&(u=null),d||m===null?w(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):m.mustUseProperty?i[m.propertyName]=u===null?m.type===3?!1:"":u:(o=m.attributeName,d=m.attributeNamespace,u===null?i.removeAttribute(o):(m=m.type,u=m===3||m===4&&u===!0?"":""+u,d?i.setAttributeNS(d,o,u):i.setAttribute(o,u))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),ve=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var pe=!1;function Ae(i,o){if(!i||pe)return"";pe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(z){var d=z}Reflect.construct(i,[],o)}else{try{o.call()}catch(z){d=z}i.call(o.prototype)}else{try{throw Error()}catch(z){d=z}i()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var m=z.stack.split(`
`),_=d.stack.split(`
`),T=m.length-1,R=_.length-1;1<=T&&0<=R&&m[T]!==_[R];)R--;for(;1<=T&&0<=R;T--,R--)if(m[T]!==_[R]){if(T!==1||R!==1)do if(T--,R--,0>R||m[T]!==_[R]){var N=`
`+m[T].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=T&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?G(i):""}function Pe(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function Ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case ve:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case dt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case L:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case F:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Kt:return o=i.displayName||null,o!==null?o:Ve(i.type)||"Memo";case Qt:o=i._payload,i=i._init;try{return Ve(i(o))}catch{}}return null}function ze(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Nt(i){var o=Je(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,_=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return m.call(this)},set:function(T){d=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function zr(i){i._valueTracker||(i._valueTracker=Nt(i))}function Co(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return i&&(d=Je(i)?i.checked?"true":"false":i.value),i=d,i!==u?(o.setValue(i),!0):!1}function Si(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ts(i,o){var u=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function So(i,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=$e(o.value!=null?o.value:u),i._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function al(i,o){o=o.checked,o!=null&&te(i,"checked",o,!1)}function ll(i,o){al(i,o);var u=$e(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ro(i,o.type,u):o.hasOwnProperty("defaultValue")&&Ro(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function lc(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Ro(i,o,u){(o!=="number"||Si(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var $r=Array.isArray;function Wr(i,o,u,d){if(i=i.options,o){o={};for(var m=0;m<u.length;m++)o["$"+u[m]]=!0;for(u=0;u<i.length;u++)m=o.hasOwnProperty("$"+i[u].value),i[u].selected!==m&&(i[u].selected=m),m&&d&&(i[u].defaultSelected=!0)}else{for(u=""+$e(u),o=null,m=0;m<i.length;m++){if(i[m].value===u){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}o!==null||i[m].disabled||(o=i[m])}o!==null&&(o.selected=!0)}}function ul(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Ao(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if($r(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:$e(u)}}function ko(i,o){var u=$e(o.value),d=$e(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),d!=null&&(i.defaultValue=""+d)}function cl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var qr,hl=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,m){MSApp.execUnsafeLocalFunction(function(){return i(o,u,d,m)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=qr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ri(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cs=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(i){Cs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Is[o]=Is[i]})});function dl(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Is.hasOwnProperty(i)&&Is[i]?(""+o).trim():o+"px"}function fl(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,m=dl(u,o[u],d);u==="float"&&(u="cssFloat"),d?i.setProperty(u,m):i[u]=m}}var pl=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(i,o){if(o){if(pl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function gl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Po(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var No=null,Vn=null,Tr=null;function xo(i){if(i=jl(i)){if(typeof No!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Fc(o),No(i.stateNode,i.type,o))}}function Ir(i){Vn?Tr?Tr.push(i):Tr=[i]:Vn=i}function _l(){if(Vn){var i=Vn,o=Tr;if(Tr=Vn=null,xo(i),o)for(i=0;i<o.length;i++)xo(o[i])}}function Rs(i,o){return i(o)}function yl(){}var Hr=!1;function vl(i,o,u){if(Hr)return i(o,u);Hr=!0;try{return Rs(i,o,u)}finally{Hr=!1,(Vn!==null||Tr!==null)&&(yl(),_l())}}function ft(i,o){var u=i.stateNode;if(u===null)return null;var d=Fc(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var Do=!1;if(h)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Do=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Do=!1}function As(i,o,u,d,m,_,T,R,N){var z=Array.prototype.slice.call(arguments,3);try{o.apply(u,z)}catch(X){this.onError(X)}}var ks=!1,Oo=null,Zn=!1,El=null,vf={onError:function(i){ks=!0,Oo=i}};function bo(i,o,u,d,m,_,T,R,N){ks=!1,Oo=null,As.apply(vf,arguments)}function uc(i,o,u,d,m,_,T,R,N){if(bo.apply(this,arguments),ks){if(ks){var z=Oo;ks=!1,Oo=null}else throw Error(t(198));Zn||(Zn=!0,El=z)}}function er(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Ps(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function tr(i){if(er(i)!==i)throw Error(t(188))}function cc(i){var o=i.alternate;if(!o){if(o=er(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,d=o;;){var m=u.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){u=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===u)return tr(m),i;if(_===d)return tr(m),o;_=_.sibling}throw Error(t(188))}if(u.return!==d.return)u=m,d=_;else{for(var T=!1,R=m.child;R;){if(R===u){T=!0,u=m,d=_;break}if(R===d){T=!0,d=m,u=_;break}R=R.sibling}if(!T){for(R=_.child;R;){if(R===u){T=!0,u=_,d=m;break}if(R===d){T=!0,d=_,u=m;break}R=R.sibling}if(!T)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function wl(i){return i=cc(i),i!==null?Lo(i):null}function Lo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Lo(i);if(o!==null)return o;i=i.sibling}return null}var Mo=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,hc=e.unstable_shouldYield,Ef=e.unstable_requestPaint,Ze=e.unstable_now,dc=e.unstable_getCurrentPriorityLevel,Ns=e.unstable_ImmediatePriority,Ai=e.unstable_UserBlockingPriority,Fn=e.unstable_NormalPriority,Il=e.unstable_LowPriority,fc=e.unstable_IdlePriority,xs=null,An=null;function pc(i){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(xs,i,void 0,(i.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:gc,Cl=Math.log,mc=Math.LN2;function gc(i){return i>>>=0,i===0?32:31-(Cl(i)/mc|0)|0}var Vo=64,Fo=4194304;function ki(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ds(i,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,m=i.suspendedLanes,_=i.pingedLanes,T=u&268435455;if(T!==0){var R=T&~m;R!==0?d=ki(R):(_&=T,_!==0&&(d=ki(_)))}else T=u&~m,T!==0?d=ki(T):_!==0&&(d=ki(_));if(d===0)return 0;if(o!==0&&o!==d&&!(o&m)&&(m=d&-d,_=o&-o,m>=_||m===16&&(_&4194240)!==0))return o;if(d&4&&(d|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)u=31-un(o),m=1<<u,d|=i[u],o&=~m;return d}function wf(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(i,o){for(var u=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-un(_),R=1<<T,N=m[T];N===-1?(!(R&u)||R&d)&&(m[T]=wf(R,o)):N<=o&&(i.expiredLanes|=R),_&=~R}}function kn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Os(){var i=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),i}function Pi(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function Ni(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-un(o),i[o]=u}function Ye(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<u;){var m=31-un(u),_=1<<m;o[m]=0,d[m]=-1,i[m]=-1,u&=~_}}function xi(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var d=31-un(u),m=1<<d;m&o|i[d]&o&&(i[d]|=o),u&=~m}}var Le=0;function Di(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var _c,Uo,yc,vc,Ec,Sl=!1,Cr=[],jt=null,nr=null,rr=null,Oi=new Map,Un=new Map,Sr=[],Tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(i,o){switch(i){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Oi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(o.pointerId)}}function fn(i,o,u,d,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},o!==null&&(o=jl(o),o!==null&&Uo(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),i)}function If(i,o,u,d,m){switch(o){case"focusin":return jt=fn(jt,i,o,u,d,m),!0;case"dragenter":return nr=fn(nr,i,o,u,d,m),!0;case"mouseover":return rr=fn(rr,i,o,u,d,m),!0;case"pointerover":var _=m.pointerId;return Oi.set(_,fn(Oi.get(_)||null,i,o,u,d,m)),!0;case"gotpointercapture":return _=m.pointerId,Un.set(_,fn(Un.get(_)||null,i,o,u,d,m)),!0}return!1}function Tc(i){var o=Fs(i.target);if(o!==null){var u=er(o);if(u!==null){if(o=u.tag,o===13){if(o=Ps(u),o!==null){i.blockedOn=o,Ec(i.priority,function(){yc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Kr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var d=new u.constructor(u.type,u);Ss=d,u.target.dispatchEvent(d),Ss=null}else return o=jl(u),o!==null&&Uo(o),i.blockedOn=u,!1;o.shift()}return!0}function bs(i,o,u){Kr(i)&&u.delete(o)}function Ic(){Sl=!1,jt!==null&&Kr(jt)&&(jt=null),nr!==null&&Kr(nr)&&(nr=null),rr!==null&&Kr(rr)&&(rr=null),Oi.forEach(bs),Un.forEach(bs)}function ir(i,o){i.blockedOn===o&&(i.blockedOn=null,Sl||(Sl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ic)))}function sr(i){function o(m){return ir(m,i)}if(0<Cr.length){ir(Cr[0],i);for(var u=1;u<Cr.length;u++){var d=Cr[u];d.blockedOn===i&&(d.blockedOn=null)}}for(jt!==null&&ir(jt,i),nr!==null&&ir(nr,i),rr!==null&&ir(rr,i),Oi.forEach(o),Un.forEach(o),u=0;u<Sr.length;u++)d=Sr[u],d.blockedOn===i&&(d.blockedOn=null);for(;0<Sr.length&&(u=Sr[0],u.blockedOn===null);)Tc(u),u.blockedOn===null&&Sr.shift()}var Qr=se.ReactCurrentBatchConfig,bi=!0;function st(i,o,u,d){var m=Le,_=Qr.transition;Qr.transition=null;try{Le=1,Rl(i,o,u,d)}finally{Le=m,Qr.transition=_}}function Cf(i,o,u,d){var m=Le,_=Qr.transition;Qr.transition=null;try{Le=4,Rl(i,o,u,d)}finally{Le=m,Qr.transition=_}}function Rl(i,o,u,d){if(bi){var m=jo(i,o,u,d);if(m===null)Lf(i,o,d,Ls,u),wc(i,d);else if(If(m,i,o,u,d))d.stopPropagation();else if(wc(i,d),o&4&&-1<Tf.indexOf(i)){for(;m!==null;){var _=jl(m);if(_!==null&&_c(_),_=jo(i,o,u,d),_===null&&Lf(i,o,d,Ls,u),_===m)break;m=_}m!==null&&d.stopPropagation()}else Lf(i,o,d,null,u)}}var Ls=null;function jo(i,o,u,d){if(Ls=null,i=Po(d),i=Fs(i),i!==null)if(o=er(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Ps(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ls=i,null}function Al(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dc()){case Ns:return 1;case Ai:return 4;case Fn:case Il:return 16;case fc:return 536870912;default:return 16}default:return 16}}var Pn=null,Bo=null,pn=null;function kl(){if(pn)return pn;var i,o=Bo,u=o.length,d,m="value"in Pn?Pn.value:Pn.textContent,_=m.length;for(i=0;i<u&&o[i]===m[i];i++);var T=u-i;for(d=1;d<=T&&o[u-d]===m[_-d];d++);return pn=m.slice(i,1<d?1-d:void 0)}function zo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Rr(){return!0}function Pl(){return!1}function Bt(i){function o(u,d,m,_,T){this._reactName=u,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(u=i[R],this[R]=u?u(_):_[R]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Rr:Pl,this.isPropagationStopped=Pl,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),o}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Bt(or),Ar=ae({},or,{view:0,detail:0}),Sf=Bt(Ar),Wo,Yr,Li,Ms=ae({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(Wo=i.screenX-Li.screenX,Yr=i.screenY-Li.screenY):Yr=Wo=0,Li=i),Wo)},movementY:function(i){return"movementY"in i?i.movementY:Yr}}),qo=Bt(Ms),Nl=ae({},Ms,{dataTransfer:0}),Cc=Bt(Nl),Ho=ae({},Ar,{relatedTarget:0}),Go=Bt(Ho),Sc=ae({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Xr=Bt(Sc),Rc=ae({},or,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ac=Bt(Rc),kc=ae({},or,{data:0}),xl=Bt(kc),Ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Pc[i])?!!o[i]:!1}function kr(){return Nc}var c=ae({},Ar,{key:function(i){if(i.key){var o=Ko[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=zo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(i){return i.type==="keypress"?zo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?zo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Bt(c),v=ae({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Bt(v),U=ae({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr}),W=Bt(U),re=ae({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Bt(re),Rt=ae({},Ms,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Bt(Rt),xt=[9,13,27,32],yt=h&&"CompositionEvent"in window,jn=null;h&&"documentMode"in document&&(jn=document.documentMode);var Nn=h&&"TextEvent"in window&&!jn,Vs=h&&(!yt||jn&&8<jn&&11>=jn),Qo=" ",ny=!1;function ry(i,o){switch(i){case"keyup":return xt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iy(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Yo=!1;function nR(i,o){switch(i){case"compositionend":return iy(o);case"keypress":return o.which!==32?null:(ny=!0,Qo);case"textInput":return i=o.data,i===Qo&&ny?null:i;default:return null}}function rR(i,o){if(Yo)return i==="compositionend"||!yt&&ry(i,o)?(i=kl(),pn=Bo=Pn=null,Yo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Vs&&o.locale!=="ko"?null:o.data;default:return null}}var iR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sy(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!iR[i.type]:o==="textarea"}function oy(i,o,u,d){Ir(d),o=Lc(o,"onChange"),0<o.length&&(u=new $o("onChange","change",null,u,d),i.push({event:u,listeners:o}))}var Dl=null,Ol=null;function sR(i){Cy(i,0)}function xc(i){var o=ta(i);if(Co(o))return i}function oR(i,o){if(i==="change")return o}var ay=!1;if(h){var Rf;if(h){var Af="oninput"in document;if(!Af){var ly=document.createElement("div");ly.setAttribute("oninput","return;"),Af=typeof ly.oninput=="function"}Rf=Af}else Rf=!1;ay=Rf&&(!document.documentMode||9<document.documentMode)}function uy(){Dl&&(Dl.detachEvent("onpropertychange",cy),Ol=Dl=null)}function cy(i){if(i.propertyName==="value"&&xc(Ol)){var o=[];oy(o,Ol,i,Po(i)),vl(sR,o)}}function aR(i,o,u){i==="focusin"?(uy(),Dl=o,Ol=u,Dl.attachEvent("onpropertychange",cy)):i==="focusout"&&uy()}function lR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return xc(Ol)}function uR(i,o){if(i==="click")return xc(o)}function cR(i,o){if(i==="input"||i==="change")return xc(o)}function hR(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ar=typeof Object.is=="function"?Object.is:hR;function bl(i,o){if(ar(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var m=u[d];if(!f.call(o,m)||!ar(i[m],o[m]))return!1}return!0}function hy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function dy(i,o){var u=hy(i);i=0;for(var d;u;){if(u.nodeType===3){if(d=i+u.textContent.length,i<=o&&d>=o)return{node:u,offset:o-i};i=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=hy(u)}}function fy(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?fy(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function py(){for(var i=window,o=Si();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Si(i.document)}return o}function kf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function dR(i){var o=py(),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&fy(u.ownerDocument.documentElement,u)){if(d!==null&&kf(u)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var m=u.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!i.extend&&_>d&&(m=d,d=_,_=m),m=dy(u,_);var T=dy(u,d);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),i.removeAllRanges(),_>d?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var fR=h&&"documentMode"in document&&11>=document.documentMode,Xo=null,Pf=null,Ll=null,Nf=!1;function my(i,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Nf||Xo==null||Xo!==Si(d)||(d=Xo,"selectionStart"in d&&kf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ll&&bl(Ll,d)||(Ll=d,d=Lc(Pf,"onSelect"),0<d.length&&(o=new $o("onSelect","select",null,o,u),i.push({event:o,listeners:d}),o.target=Xo)))}function Dc(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var Jo={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},xf={},gy={};h&&(gy=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function Oc(i){if(xf[i])return xf[i];if(!Jo[i])return i;var o=Jo[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in gy)return xf[i]=o[u];return i}var _y=Oc("animationend"),yy=Oc("animationiteration"),vy=Oc("animationstart"),Ey=Oc("transitionend"),wy=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(i,o){wy.set(i,o),a(o,[i])}for(var Df=0;Df<Ty.length;Df++){var Of=Ty[Df],pR=Of.toLowerCase(),mR=Of[0].toUpperCase()+Of.slice(1);Mi(pR,"on"+mR)}Mi(_y,"onAnimationEnd"),Mi(yy,"onAnimationIteration"),Mi(vy,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ey,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ml));function Iy(i,o,u){var d=i.type||"unknown-event";i.currentTarget=u,uc(d,o,void 0,i),i.currentTarget=null}function Cy(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var d=i[u],m=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var T=d.length-1;0<=T;T--){var R=d[T],N=R.instance,z=R.currentTarget;if(R=R.listener,N!==_&&m.isPropagationStopped())break e;Iy(m,R,z),_=N}else for(T=0;T<d.length;T++){if(R=d[T],N=R.instance,z=R.currentTarget,R=R.listener,N!==_&&m.isPropagationStopped())break e;Iy(m,R,z),_=N}}}if(Zn)throw i=El,Zn=!1,El=null,i}function tt(i,o){var u=o[Bf];u===void 0&&(u=o[Bf]=new Set);var d=i+"__bubble";u.has(d)||(Sy(o,i,2,!1),u.add(d))}function bf(i,o,u){var d=0;o&&(d|=4),Sy(u,i,d,o)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Vl(i){if(!i[bc]){i[bc]=!0,r.forEach(function(u){u!=="selectionchange"&&(gR.has(u)||bf(u,!1,i),bf(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[bc]||(o[bc]=!0,bf("selectionchange",!1,o))}}function Sy(i,o,u,d){switch(Al(o)){case 1:var m=st;break;case 4:m=Cf;break;default:m=Rl}u=m.bind(null,o,u,i),m=void 0,!Do||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(o,u,{capture:!0,passive:m}):i.addEventListener(o,u,!0):m!==void 0?i.addEventListener(o,u,{passive:m}):i.addEventListener(o,u,!1)}function Lf(i,o,u,d,m){var _=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var R=d.stateNode.containerInfo;if(R===m||R.nodeType===8&&R.parentNode===m)break;if(T===4)for(T=d.return;T!==null;){var N=T.tag;if((N===3||N===4)&&(N=T.stateNode.containerInfo,N===m||N.nodeType===8&&N.parentNode===m))return;T=T.return}for(;R!==null;){if(T=Fs(R),T===null)return;if(N=T.tag,N===5||N===6){d=_=T;continue e}R=R.parentNode}}d=d.return}vl(function(){var z=_,X=Po(u),J=[];e:{var Y=wy.get(i);if(Y!==void 0){var oe=$o,he=i;switch(i){case"keypress":if(zo(u)===0)break e;case"keydown":case"keyup":oe=g;break;case"focusin":he="focus",oe=Go;break;case"focusout":he="blur",oe=Go;break;case"beforeblur":case"afterblur":oe=Go;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=W;break;case _y:case yy:case vy:oe=Xr;break;case Ey:oe=He;break;case"scroll":oe=Sf;break;case"wheel":oe=Fe;break;case"copy":case"cut":case"paste":oe=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=I}var de=(o&4)!==0,pt=!de&&i==="scroll",j=de?Y!==null?Y+"Capture":null:Y;de=[];for(var O=z,B;O!==null;){B=O;var ee=B.stateNode;if(B.tag===5&&ee!==null&&(B=ee,j!==null&&(ee=ft(O,j),ee!=null&&de.push(Fl(O,ee,B)))),pt)break;O=O.return}0<de.length&&(Y=new oe(Y,he,null,u,X),J.push({event:Y,listeners:de}))}}if(!(o&7)){e:{if(Y=i==="mouseover"||i==="pointerover",oe=i==="mouseout"||i==="pointerout",Y&&u!==Ss&&(he=u.relatedTarget||u.fromElement)&&(Fs(he)||he[Jr]))break e;if((oe||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(he=u.relatedTarget||u.toElement,oe=z,he=he?Fs(he):null,he!==null&&(pt=er(he),he!==pt||he.tag!==5&&he.tag!==6)&&(he=null)):(oe=null,he=z),oe!==he)){if(de=qo,ee="onMouseLeave",j="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(de=I,ee="onPointerLeave",j="onPointerEnter",O="pointer"),pt=oe==null?Y:ta(oe),B=he==null?Y:ta(he),Y=new de(ee,O+"leave",oe,u,X),Y.target=pt,Y.relatedTarget=B,ee=null,Fs(X)===z&&(de=new de(j,O+"enter",he,u,X),de.target=B,de.relatedTarget=pt,ee=de),pt=ee,oe&&he)t:{for(de=oe,j=he,O=0,B=de;B;B=Zo(B))O++;for(B=0,ee=j;ee;ee=Zo(ee))B++;for(;0<O-B;)de=Zo(de),O--;for(;0<B-O;)j=Zo(j),B--;for(;O--;){if(de===j||j!==null&&de===j.alternate)break t;de=Zo(de),j=Zo(j)}de=null}else de=null;oe!==null&&Ry(J,Y,oe,de,!1),he!==null&&pt!==null&&Ry(J,pt,he,de,!0)}}e:{if(Y=z?ta(z):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var fe=oR;else if(sy(Y))if(ay)fe=cR;else{fe=lR;var _e=aR}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(fe=uR);if(fe&&(fe=fe(i,z))){oy(J,fe,u,X);break e}_e&&_e(i,Y,z),i==="focusout"&&(_e=Y._wrapperState)&&_e.controlled&&Y.type==="number"&&Ro(Y,"number",Y.value)}switch(_e=z?ta(z):window,i){case"focusin":(sy(_e)||_e.contentEditable==="true")&&(Xo=_e,Pf=z,Ll=null);break;case"focusout":Ll=Pf=Xo=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,my(J,u,X);break;case"selectionchange":if(fR)break;case"keydown":case"keyup":my(J,u,X)}var ye;if(yt)e:{switch(i){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Yo?ry(i,u)&&(Te="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(Te="onCompositionStart");Te&&(Vs&&u.locale!=="ko"&&(Yo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Yo&&(ye=kl()):(Pn=X,Bo="value"in Pn?Pn.value:Pn.textContent,Yo=!0)),_e=Lc(z,Te),0<_e.length&&(Te=new xl(Te,i,null,u,X),J.push({event:Te,listeners:_e}),ye?Te.data=ye:(ye=iy(u),ye!==null&&(Te.data=ye)))),(ye=Nn?nR(i,u):rR(i,u))&&(z=Lc(z,"onBeforeInput"),0<z.length&&(X=new xl("onBeforeInput","beforeinput",null,u,X),J.push({event:X,listeners:z}),X.data=ye))}Cy(J,o)})}function Fl(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Lc(i,o){for(var u=o+"Capture",d=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=ft(i,u),_!=null&&d.unshift(Fl(i,_,m)),_=ft(i,o),_!=null&&d.push(Fl(i,_,m))),i=i.return}return d}function Zo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ry(i,o,u,d,m){for(var _=o._reactName,T=[];u!==null&&u!==d;){var R=u,N=R.alternate,z=R.stateNode;if(N!==null&&N===d)break;R.tag===5&&z!==null&&(R=z,m?(N=ft(u,_),N!=null&&T.unshift(Fl(u,N,R))):m||(N=ft(u,_),N!=null&&T.push(Fl(u,N,R)))),u=u.return}T.length!==0&&i.push({event:o,listeners:T})}var _R=/\r\n?/g,yR=/\u0000|\uFFFD/g;function Ay(i){return(typeof i=="string"?i:""+i).replace(_R,`
`).replace(yR,"")}function Mc(i,o,u){if(o=Ay(o),Ay(i)!==o&&u)throw Error(t(425))}function Vc(){}var Mf=null,Vf=null;function Ff(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,vR=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,ER=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(i){return ky.resolve(null).then(i).catch(wR)}:Uf;function wR(i){setTimeout(function(){throw i})}function jf(i,o){var u=o,d=0;do{var m=u.nextSibling;if(i.removeChild(u),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(d===0){i.removeChild(m),sr(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=m}while(u);sr(o)}function Vi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function Py(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Pr="__reactFiber$"+ea,Ul="__reactProps$"+ea,Jr="__reactContainer$"+ea,Bf="__reactEvents$"+ea,TR="__reactListeners$"+ea,IR="__reactHandles$"+ea;function Fs(i){var o=i[Pr];if(o)return o;for(var u=i.parentNode;u;){if(o=u[Jr]||u[Pr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=Py(i);i!==null;){if(u=i[Pr])return u;i=Py(i)}return o}i=u,u=i.parentNode}return null}function jl(i){return i=i[Pr]||i[Jr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ta(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fc(i){return i[Ul]||null}var zf=[],na=-1;function Fi(i){return{current:i}}function nt(i){0>na||(i.current=zf[na],zf[na]=null,na--)}function et(i,o){na++,zf[na]=i.current,i.current=o}var Ui={},Yt=Fi(Ui),mn=Fi(!1),Us=Ui;function ra(i,o){var u=i.type.contextTypes;if(!u)return Ui;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in u)m[_]=o[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=m),m}function gn(i){return i=i.childContextTypes,i!=null}function Uc(){nt(mn),nt(Yt)}function Ny(i,o,u){if(Yt.current!==Ui)throw Error(t(168));et(Yt,o),et(mn,u)}function xy(i,o,u){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,ze(i)||"Unknown",m));return ae({},u,d)}function jc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ui,Us=Yt.current,et(Yt,i),et(mn,mn.current),!0}function Dy(i,o,u){var d=i.stateNode;if(!d)throw Error(t(169));u?(i=xy(i,o,Us),d.__reactInternalMemoizedMergedChildContext=i,nt(mn),nt(Yt),et(Yt,i)):nt(mn),et(mn,u)}var Zr=null,Bc=!1,$f=!1;function Oy(i){Zr===null?Zr=[i]:Zr.push(i)}function CR(i){Bc=!0,Oy(i)}function ji(){if(!$f&&Zr!==null){$f=!0;var i=0,o=Le;try{var u=Zr;for(Le=1;i<u.length;i++){var d=u[i];do d=d(!0);while(d!==null)}Zr=null,Bc=!1}catch(m){throw Zr!==null&&(Zr=Zr.slice(i+1)),Mo(Ns,ji),m}finally{Le=o,$f=!1}}return null}var ia=[],sa=0,zc=null,$c=0,Bn=[],zn=0,js=null,ei=1,ti="";function Bs(i,o){ia[sa++]=$c,ia[sa++]=zc,zc=i,$c=o}function by(i,o,u){Bn[zn++]=ei,Bn[zn++]=ti,Bn[zn++]=js,js=i;var d=ei;i=ti;var m=32-un(d)-1;d&=~(1<<m),u+=1;var _=32-un(o)+m;if(30<_){var T=m-m%5;_=(d&(1<<T)-1).toString(32),d>>=T,m-=T,ei=1<<32-un(o)+m|u<<m|d,ti=_+i}else ei=1<<_|u<<m|d,ti=i}function Wf(i){i.return!==null&&(Bs(i,1),by(i,1,0))}function qf(i){for(;i===zc;)zc=ia[--sa],ia[sa]=null,$c=ia[--sa],ia[sa]=null;for(;i===js;)js=Bn[--zn],Bn[zn]=null,ti=Bn[--zn],Bn[zn]=null,ei=Bn[--zn],Bn[zn]=null}var xn=null,Dn=null,ot=!1,lr=null;function Ly(i,o){var u=Hn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function My(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,xn=i,Dn=Vi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,xn=i,Dn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=js!==null?{id:ei,overflow:ti}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Hn(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,xn=i,Dn=null,!0):!1;default:return!1}}function Hf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Gf(i){if(ot){var o=Dn;if(o){var u=o;if(!My(i,o)){if(Hf(i))throw Error(t(418));o=Vi(u.nextSibling);var d=xn;o&&My(i,o)?Ly(d,u):(i.flags=i.flags&-4097|2,ot=!1,xn=i)}}else{if(Hf(i))throw Error(t(418));i.flags=i.flags&-4097|2,ot=!1,xn=i}}}function Vy(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xn=i}function Wc(i){if(i!==xn)return!1;if(!ot)return Vy(i),ot=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Ff(i.type,i.memoizedProps)),o&&(o=Dn)){if(Hf(i))throw Fy(),Error(t(418));for(;o;)Ly(i,o),o=Vi(o.nextSibling)}if(Vy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){Dn=Vi(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}Dn=null}}else Dn=xn?Vi(i.stateNode.nextSibling):null;return!0}function Fy(){for(var i=Dn;i;)i=Vi(i.nextSibling)}function oa(){Dn=xn=null,ot=!1}function Kf(i){lr===null?lr=[i]:lr.push(i)}var SR=se.ReactCurrentBatchConfig;function Bl(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,i));var m=d,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var R=m.refs;T===null?delete R[_]:R[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function qc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Uy(i){var o=i._init;return o(i._payload)}function jy(i){function o(j,O){if(i){var B=j.deletions;B===null?(j.deletions=[O],j.flags|=16):B.push(O)}}function u(j,O){if(!i)return null;for(;O!==null;)o(j,O),O=O.sibling;return null}function d(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function m(j,O){return j=Ki(j,O),j.index=0,j.sibling=null,j}function _(j,O,B){return j.index=B,i?(B=j.alternate,B!==null?(B=B.index,B<O?(j.flags|=2,O):B):(j.flags|=2,O)):(j.flags|=1048576,O)}function T(j){return i&&j.alternate===null&&(j.flags|=2),j}function R(j,O,B,ee){return O===null||O.tag!==6?(O=Up(B,j.mode,ee),O.return=j,O):(O=m(O,B),O.return=j,O)}function N(j,O,B,ee){var fe=B.type;return fe===D?X(j,O,B.props.children,ee,B.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Qt&&Uy(fe)===O.type)?(ee=m(O,B.props),ee.ref=Bl(j,O,B),ee.return=j,ee):(ee=mh(B.type,B.key,B.props,null,j.mode,ee),ee.ref=Bl(j,O,B),ee.return=j,ee)}function z(j,O,B,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=jp(B,j.mode,ee),O.return=j,O):(O=m(O,B.children||[]),O.return=j,O)}function X(j,O,B,ee,fe){return O===null||O.tag!==7?(O=Qs(B,j.mode,ee,fe),O.return=j,O):(O=m(O,B),O.return=j,O)}function J(j,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Up(""+O,j.mode,B),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Se:return B=mh(O.type,O.key,O.props,null,j.mode,B),B.ref=Bl(j,null,O),B.return=j,B;case ve:return O=jp(O,j.mode,B),O.return=j,O;case Qt:var ee=O._init;return J(j,ee(O._payload),B)}if($r(O)||ge(O))return O=Qs(O,j.mode,B,null),O.return=j,O;qc(j,O)}return null}function Y(j,O,B,ee){var fe=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return fe!==null?null:R(j,O,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Se:return B.key===fe?N(j,O,B,ee):null;case ve:return B.key===fe?z(j,O,B,ee):null;case Qt:return fe=B._init,Y(j,O,fe(B._payload),ee)}if($r(B)||ge(B))return fe!==null?null:X(j,O,B,ee,null);qc(j,B)}return null}function oe(j,O,B,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return j=j.get(B)||null,R(O,j,""+ee,fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Se:return j=j.get(ee.key===null?B:ee.key)||null,N(O,j,ee,fe);case ve:return j=j.get(ee.key===null?B:ee.key)||null,z(O,j,ee,fe);case Qt:var _e=ee._init;return oe(j,O,B,_e(ee._payload),fe)}if($r(ee)||ge(ee))return j=j.get(B)||null,X(O,j,ee,fe,null);qc(O,ee)}return null}function he(j,O,B,ee){for(var fe=null,_e=null,ye=O,Te=O=0,bt=null;ye!==null&&Te<B.length;Te++){ye.index>Te?(bt=ye,ye=null):bt=ye.sibling;var Be=Y(j,ye,B[Te],ee);if(Be===null){ye===null&&(ye=bt);break}i&&ye&&Be.alternate===null&&o(j,ye),O=_(Be,O,Te),_e===null?fe=Be:_e.sibling=Be,_e=Be,ye=bt}if(Te===B.length)return u(j,ye),ot&&Bs(j,Te),fe;if(ye===null){for(;Te<B.length;Te++)ye=J(j,B[Te],ee),ye!==null&&(O=_(ye,O,Te),_e===null?fe=ye:_e.sibling=ye,_e=ye);return ot&&Bs(j,Te),fe}for(ye=d(j,ye);Te<B.length;Te++)bt=oe(ye,j,Te,B[Te],ee),bt!==null&&(i&&bt.alternate!==null&&ye.delete(bt.key===null?Te:bt.key),O=_(bt,O,Te),_e===null?fe=bt:_e.sibling=bt,_e=bt);return i&&ye.forEach(function(Qi){return o(j,Qi)}),ot&&Bs(j,Te),fe}function de(j,O,B,ee){var fe=ge(B);if(typeof fe!="function")throw Error(t(150));if(B=fe.call(B),B==null)throw Error(t(151));for(var _e=fe=null,ye=O,Te=O=0,bt=null,Be=B.next();ye!==null&&!Be.done;Te++,Be=B.next()){ye.index>Te?(bt=ye,ye=null):bt=ye.sibling;var Qi=Y(j,ye,Be.value,ee);if(Qi===null){ye===null&&(ye=bt);break}i&&ye&&Qi.alternate===null&&o(j,ye),O=_(Qi,O,Te),_e===null?fe=Qi:_e.sibling=Qi,_e=Qi,ye=bt}if(Be.done)return u(j,ye),ot&&Bs(j,Te),fe;if(ye===null){for(;!Be.done;Te++,Be=B.next())Be=J(j,Be.value,ee),Be!==null&&(O=_(Be,O,Te),_e===null?fe=Be:_e.sibling=Be,_e=Be);return ot&&Bs(j,Te),fe}for(ye=d(j,ye);!Be.done;Te++,Be=B.next())Be=oe(ye,j,Te,Be.value,ee),Be!==null&&(i&&Be.alternate!==null&&ye.delete(Be.key===null?Te:Be.key),O=_(Be,O,Te),_e===null?fe=Be:_e.sibling=Be,_e=Be);return i&&ye.forEach(function(iA){return o(j,iA)}),ot&&Bs(j,Te),fe}function pt(j,O,B,ee){if(typeof B=="object"&&B!==null&&B.type===D&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Se:e:{for(var fe=B.key,_e=O;_e!==null;){if(_e.key===fe){if(fe=B.type,fe===D){if(_e.tag===7){u(j,_e.sibling),O=m(_e,B.props.children),O.return=j,j=O;break e}}else if(_e.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Qt&&Uy(fe)===_e.type){u(j,_e.sibling),O=m(_e,B.props),O.ref=Bl(j,_e,B),O.return=j,j=O;break e}u(j,_e);break}else o(j,_e);_e=_e.sibling}B.type===D?(O=Qs(B.props.children,j.mode,ee,B.key),O.return=j,j=O):(ee=mh(B.type,B.key,B.props,null,j.mode,ee),ee.ref=Bl(j,O,B),ee.return=j,j=ee)}return T(j);case ve:e:{for(_e=B.key;O!==null;){if(O.key===_e)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){u(j,O.sibling),O=m(O,B.children||[]),O.return=j,j=O;break e}else{u(j,O);break}else o(j,O);O=O.sibling}O=jp(B,j.mode,ee),O.return=j,j=O}return T(j);case Qt:return _e=B._init,pt(j,O,_e(B._payload),ee)}if($r(B))return he(j,O,B,ee);if(ge(B))return de(j,O,B,ee);qc(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(u(j,O.sibling),O=m(O,B),O.return=j,j=O):(u(j,O),O=Up(B,j.mode,ee),O.return=j,j=O),T(j)):u(j,O)}return pt}var aa=jy(!0),By=jy(!1),Hc=Fi(null),Gc=null,la=null,Qf=null;function Yf(){Qf=la=Gc=null}function Xf(i){var o=Hc.current;nt(Hc),i._currentValue=o}function Jf(i,o,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===u)break;i=i.return}}function ua(i,o){Gc=i,Qf=la=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(_n=!0),i.firstContext=null)}function $n(i){var o=i._currentValue;if(Qf!==i)if(i={context:i,memoizedValue:o,next:null},la===null){if(Gc===null)throw Error(t(308));la=i,Gc.dependencies={lanes:0,firstContext:i}}else la=la.next=i;return o}var zs=null;function Zf(i){zs===null?zs=[i]:zs.push(i)}function zy(i,o,u,d){var m=o.interleaved;return m===null?(u.next=u,Zf(o)):(u.next=m.next,m.next=u),o.interleaved=u,ni(i,d)}function ni(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var Bi=!1;function ep(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $y(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ri(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function zi(i,o,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,je&2){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,ni(i,u)}return m=d.interleaved,m===null?(o.next=o,Zf(d)):(o.next=m.next,m.next=o),d.interleaved=o,ni(i,u)}function Kc(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,xi(i,u)}}function Wy(i,o){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var m=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var T={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?m=_=T:_=_.next=T,u=u.next}while(u!==null);_===null?m=_=o:_=_.next=o}else m=_=o;u={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function Qc(i,o,u,d){var m=i.updateQueue;Bi=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,R=m.shared.pending;if(R!==null){m.shared.pending=null;var N=R,z=N.next;N.next=null,T===null?_=z:T.next=z,T=N;var X=i.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==T&&(R===null?X.firstBaseUpdate=z:R.next=z,X.lastBaseUpdate=N))}if(_!==null){var J=m.baseState;T=0,X=z=N=null,R=_;do{var Y=R.lane,oe=R.eventTime;if((d&Y)===Y){X!==null&&(X=X.next={eventTime:oe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var he=i,de=R;switch(Y=o,oe=u,de.tag){case 1:if(he=de.payload,typeof he=="function"){J=he.call(oe,J,Y);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,Y=typeof he=="function"?he.call(oe,J,Y):he,Y==null)break e;J=ae({},J,Y);break e;case 2:Bi=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,Y=m.effects,Y===null?m.effects=[R]:Y.push(R))}else oe={eventTime:oe,lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(z=X=oe,N=J):X=X.next=oe,T|=Y;if(R=R.next,R===null){if(R=m.shared.pending,R===null)break;Y=R,R=Y.next,Y.next=null,m.lastBaseUpdate=Y,m.shared.pending=null}}while(!0);if(X===null&&(N=J),m.baseState=N,m.firstBaseUpdate=z,m.lastBaseUpdate=X,o=m.shared.interleaved,o!==null){m=o;do T|=m.lane,m=m.next;while(m!==o)}else _===null&&(m.shared.lanes=0);qs|=T,i.lanes=T,i.memoizedState=J}}function qy(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],m=d.callback;if(m!==null){if(d.callback=null,d=u,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var zl={},Nr=Fi(zl),$l=Fi(zl),Wl=Fi(zl);function $s(i){if(i===zl)throw Error(t(174));return i}function tp(i,o){switch(et(Wl,o),et($l,i),et(Nr,zl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:St(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=St(o,i)}nt(Nr),et(Nr,o)}function ca(){nt(Nr),nt($l),nt(Wl)}function Hy(i){$s(Wl.current);var o=$s(Nr.current),u=St(o,i.type);o!==u&&(et($l,i),et(Nr,u))}function np(i){$l.current===i&&(nt(Nr),nt($l))}var lt=Fi(0);function Yc(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var rp=[];function ip(){for(var i=0;i<rp.length;i++)rp[i]._workInProgressVersionPrimary=null;rp.length=0}var Xc=se.ReactCurrentDispatcher,sp=se.ReactCurrentBatchConfig,Ws=0,ut=null,At=null,Dt=null,Jc=!1,ql=!1,Hl=0,RR=0;function Xt(){throw Error(t(321))}function op(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!ar(i[u],o[u]))return!1;return!0}function ap(i,o,u,d,m,_){if(Ws=_,ut=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Xc.current=i===null||i.memoizedState===null?NR:xR,i=u(d,m),ql){_=0;do{if(ql=!1,Hl=0,25<=_)throw Error(t(301));_+=1,Dt=At=null,o.updateQueue=null,Xc.current=DR,i=u(d,m)}while(ql)}if(Xc.current=th,o=At!==null&&At.next!==null,Ws=0,Dt=At=ut=null,Jc=!1,o)throw Error(t(300));return i}function lp(){var i=Hl!==0;return Hl=0,i}function xr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ut.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function Wn(){if(At===null){var i=ut.alternate;i=i!==null?i.memoizedState:null}else i=At.next;var o=Dt===null?ut.memoizedState:Dt.next;if(o!==null)Dt=o,At=i;else{if(i===null)throw Error(t(310));At=i,i={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?ut.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function Gl(i,o){return typeof o=="function"?o(i):o}function up(i){var o=Wn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=At,m=d.baseQueue,_=u.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}d.baseQueue=m=_,u.pending=null}if(m!==null){_=m.next,d=d.baseState;var R=T=null,N=null,z=_;do{var X=z.lane;if((Ws&X)===X)N!==null&&(N=N.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:i(d,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};N===null?(R=N=J,T=d):N=N.next=J,ut.lanes|=X,qs|=X}z=z.next}while(z!==null&&z!==_);N===null?T=d:N.next=R,ar(d,o.memoizedState)||(_n=!0),o.memoizedState=d,o.baseState=T,o.baseQueue=N,u.lastRenderedState=d}if(i=u.interleaved,i!==null){m=i;do _=m.lane,ut.lanes|=_,qs|=_,m=m.next;while(m!==i)}else m===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function cp(i){var o=Wn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=u.dispatch,m=u.pending,_=o.memoizedState;if(m!==null){u.pending=null;var T=m=m.next;do _=i(_,T.action),T=T.next;while(T!==m);ar(_,o.memoizedState)||(_n=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),u.lastRenderedState=_}return[_,d]}function Gy(){}function Ky(i,o){var u=ut,d=Wn(),m=o(),_=!ar(d.memoizedState,m);if(_&&(d.memoizedState=m,_n=!0),d=d.queue,hp(Xy.bind(null,u,d,i),[i]),d.getSnapshot!==o||_||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,Kl(9,Yy.bind(null,u,d,m,o),void 0,null),Ot===null)throw Error(t(349));Ws&30||Qy(u,o,m)}return m}function Qy(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=ut.updateQueue,o===null?(o={lastEffect:null,stores:null},ut.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function Yy(i,o,u,d){o.value=u,o.getSnapshot=d,Jy(o)&&Zy(i)}function Xy(i,o,u){return u(function(){Jy(o)&&Zy(i)})}function Jy(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!ar(i,u)}catch{return!0}}function Zy(i){var o=ni(i,1);o!==null&&dr(o,i,1,-1)}function ev(i){var o=xr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:i},o.queue=i,i=i.dispatch=PR.bind(null,ut,i),[o.memoizedState,i]}function Kl(i,o,u,d){return i={tag:i,create:o,destroy:u,deps:d,next:null},o=ut.updateQueue,o===null?(o={lastEffect:null,stores:null},ut.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,o.lastEffect=i)),i}function tv(){return Wn().memoizedState}function Zc(i,o,u,d){var m=xr();ut.flags|=i,m.memoizedState=Kl(1|o,u,void 0,d===void 0?null:d)}function eh(i,o,u,d){var m=Wn();d=d===void 0?null:d;var _=void 0;if(At!==null){var T=At.memoizedState;if(_=T.destroy,d!==null&&op(d,T.deps)){m.memoizedState=Kl(o,u,_,d);return}}ut.flags|=i,m.memoizedState=Kl(1|o,u,_,d)}function nv(i,o){return Zc(8390656,8,i,o)}function hp(i,o){return eh(2048,8,i,o)}function rv(i,o){return eh(4,2,i,o)}function iv(i,o){return eh(4,4,i,o)}function sv(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function ov(i,o,u){return u=u!=null?u.concat([i]):null,eh(4,4,sv.bind(null,o,i),u)}function dp(){}function av(i,o){var u=Wn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&op(o,d[1])?d[0]:(u.memoizedState=[i,o],i)}function lv(i,o){var u=Wn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&op(o,d[1])?d[0]:(i=i(),u.memoizedState=[i,o],i)}function uv(i,o,u){return Ws&21?(ar(u,o)||(u=Os(),ut.lanes|=u,qs|=u,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,_n=!0),i.memoizedState=u)}function AR(i,o){var u=Le;Le=u!==0&&4>u?u:4,i(!0);var d=sp.transition;sp.transition={};try{i(!1),o()}finally{Le=u,sp.transition=d}}function cv(){return Wn().memoizedState}function kR(i,o,u){var d=Hi(i);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},hv(i))dv(o,u);else if(u=zy(i,o,u,d),u!==null){var m=dn();dr(u,i,d,m),fv(u,o,d)}}function PR(i,o,u){var d=Hi(i),m={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(hv(i))dv(o,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,R=_(T,u);if(m.hasEagerState=!0,m.eagerState=R,ar(R,T)){var N=o.interleaved;N===null?(m.next=m,Zf(o)):(m.next=N.next,N.next=m),o.interleaved=m;return}}catch{}finally{}u=zy(i,o,m,d),u!==null&&(m=dn(),dr(u,i,d,m),fv(u,o,d))}}function hv(i){var o=i.alternate;return i===ut||o!==null&&o===ut}function dv(i,o){ql=Jc=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function fv(i,o,u){if(u&4194240){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,xi(i,u)}}var th={readContext:$n,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},NR={readContext:$n,useCallback:function(i,o){return xr().memoizedState=[i,o===void 0?null:o],i},useContext:$n,useEffect:nv,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,Zc(4194308,4,sv.bind(null,o,i),u)},useLayoutEffect:function(i,o){return Zc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Zc(4,2,i,o)},useMemo:function(i,o){var u=xr();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var d=xr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=kR.bind(null,ut,i),[d.memoizedState,i]},useRef:function(i){var o=xr();return i={current:i},o.memoizedState=i},useState:ev,useDebugValue:dp,useDeferredValue:function(i){return xr().memoizedState=i},useTransition:function(){var i=ev(!1),o=i[0];return i=AR.bind(null,i[1]),xr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var d=ut,m=xr();if(ot){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Ot===null)throw Error(t(349));Ws&30||Qy(d,o,u)}m.memoizedState=u;var _={value:u,getSnapshot:o};return m.queue=_,nv(Xy.bind(null,d,_,i),[i]),d.flags|=2048,Kl(9,Yy.bind(null,d,_,u,o),void 0,null),u},useId:function(){var i=xr(),o=Ot.identifierPrefix;if(ot){var u=ti,d=ei;u=(d&~(1<<32-un(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Hl++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=RR++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},xR={readContext:$n,useCallback:av,useContext:$n,useEffect:hp,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:up,useRef:tv,useState:function(){return up(Gl)},useDebugValue:dp,useDeferredValue:function(i){var o=Wn();return uv(o,At.memoizedState,i)},useTransition:function(){var i=up(Gl)[0],o=Wn().memoizedState;return[i,o]},useMutableSource:Gy,useSyncExternalStore:Ky,useId:cv,unstable_isNewReconciler:!1},DR={readContext:$n,useCallback:av,useContext:$n,useEffect:hp,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:cp,useRef:tv,useState:function(){return cp(Gl)},useDebugValue:dp,useDeferredValue:function(i){var o=Wn();return At===null?o.memoizedState=i:uv(o,At.memoizedState,i)},useTransition:function(){var i=cp(Gl)[0],o=Wn().memoizedState;return[i,o]},useMutableSource:Gy,useSyncExternalStore:Ky,useId:cv,unstable_isNewReconciler:!1};function ur(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function fp(i,o,u,d){o=i.memoizedState,u=u(d,o),u=u==null?o:ae({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var nh={isMounted:function(i){return(i=i._reactInternals)?er(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var d=dn(),m=Hi(i),_=ri(d,m);_.payload=o,u!=null&&(_.callback=u),o=zi(i,_,m),o!==null&&(dr(o,i,m,d),Kc(o,i,m))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var d=dn(),m=Hi(i),_=ri(d,m);_.tag=1,_.payload=o,u!=null&&(_.callback=u),o=zi(i,_,m),o!==null&&(dr(o,i,m,d),Kc(o,i,m))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=dn(),d=Hi(i),m=ri(u,d);m.tag=2,o!=null&&(m.callback=o),o=zi(i,m,d),o!==null&&(dr(o,i,d,u),Kc(o,i,d))}};function pv(i,o,u,d,m,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,T):o.prototype&&o.prototype.isPureReactComponent?!bl(u,d)||!bl(m,_):!0}function mv(i,o,u){var d=!1,m=Ui,_=o.contextType;return typeof _=="object"&&_!==null?_=$n(_):(m=gn(o)?Us:Yt.current,d=o.contextTypes,_=(d=d!=null)?ra(i,m):Ui),o=new o(u,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),o}function gv(i,o,u,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==i&&nh.enqueueReplaceState(o,o.state,null)}function pp(i,o,u,d){var m=i.stateNode;m.props=u,m.state=i.memoizedState,m.refs={},ep(i);var _=o.contextType;typeof _=="object"&&_!==null?m.context=$n(_):(_=gn(o)?Us:Yt.current,m.context=ra(i,_)),m.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(fp(i,o,_,u),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&nh.enqueueReplaceState(m,m.state,null),Qc(i,u,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function ha(i,o){try{var u="",d=o;do u+=Pe(d),d=d.return;while(d);var m=u}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:m,digest:null}}function mp(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function gp(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var OR=typeof WeakMap=="function"?WeakMap:Map;function _v(i,o,u){u=ri(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){uh||(uh=!0,xp=d),gp(i,o)},u}function yv(i,o,u){u=ri(-1,u),u.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;u.payload=function(){return d(m)},u.callback=function(){gp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){gp(i,o),typeof d!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),u}function vv(i,o,u){var d=i.pingCache;if(d===null){d=i.pingCache=new OR;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(u)||(m.add(u),i=GR.bind(null,i,o,u),o.then(i,i))}function Ev(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function wv(i,o,u,d,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=ri(-1,1),o.tag=2,zi(u,o,1))),u.lanes|=1),i)}var bR=se.ReactCurrentOwner,_n=!1;function hn(i,o,u,d){o.child=i===null?By(o,null,u,d):aa(o,i.child,u,d)}function Tv(i,o,u,d,m){u=u.render;var _=o.ref;return ua(o,m),d=ap(i,o,u,d,_,m),u=lp(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,ii(i,o,m)):(ot&&u&&Wf(o),o.flags|=1,hn(i,o,d,m),o.child)}function Iv(i,o,u,d,m){if(i===null){var _=u.type;return typeof _=="function"&&!Fp(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=_,Cv(i,o,_,d,m)):(i=mh(u.type,null,d,o,o.mode,m),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&m)){var T=_.memoizedProps;if(u=u.compare,u=u!==null?u:bl,u(T,d)&&i.ref===o.ref)return ii(i,o,m)}return o.flags|=1,i=Ki(_,d),i.ref=o.ref,i.return=o,o.child=i}function Cv(i,o,u,d,m){if(i!==null){var _=i.memoizedProps;if(bl(_,d)&&i.ref===o.ref)if(_n=!1,o.pendingProps=d=_,(i.lanes&m)!==0)i.flags&131072&&(_n=!0);else return o.lanes=i.lanes,ii(i,o,m)}return _p(i,o,u,d,m)}function Sv(i,o,u){var d=o.pendingProps,m=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(fa,On),On|=u;else{if(!(u&1073741824))return i=_!==null?_.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,et(fa,On),On|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:u,et(fa,On),On|=d}else _!==null?(d=_.baseLanes|u,o.memoizedState=null):d=u,et(fa,On),On|=d;return hn(i,o,m,u),o.child}function Rv(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function _p(i,o,u,d,m){var _=gn(u)?Us:Yt.current;return _=ra(o,_),ua(o,m),u=ap(i,o,u,d,_,m),d=lp(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,ii(i,o,m)):(ot&&d&&Wf(o),o.flags|=1,hn(i,o,u,m),o.child)}function Av(i,o,u,d,m){if(gn(u)){var _=!0;jc(o)}else _=!1;if(ua(o,m),o.stateNode===null)ih(i,o),mv(o,u,d),pp(o,u,d,m),d=!0;else if(i===null){var T=o.stateNode,R=o.memoizedProps;T.props=R;var N=T.context,z=u.contextType;typeof z=="object"&&z!==null?z=$n(z):(z=gn(u)?Us:Yt.current,z=ra(o,z));var X=u.getDerivedStateFromProps,J=typeof X=="function"||typeof T.getSnapshotBeforeUpdate=="function";J||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==d||N!==z)&&gv(o,T,d,z),Bi=!1;var Y=o.memoizedState;T.state=Y,Qc(o,d,T,m),N=o.memoizedState,R!==d||Y!==N||mn.current||Bi?(typeof X=="function"&&(fp(o,u,X,d),N=o.memoizedState),(R=Bi||pv(o,u,R,d,Y,N,z))?(J||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=N),T.props=d,T.state=N,T.context=z,d=R):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{T=o.stateNode,$y(i,o),R=o.memoizedProps,z=o.type===o.elementType?R:ur(o.type,R),T.props=z,J=o.pendingProps,Y=T.context,N=u.contextType,typeof N=="object"&&N!==null?N=$n(N):(N=gn(u)?Us:Yt.current,N=ra(o,N));var oe=u.getDerivedStateFromProps;(X=typeof oe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(R!==J||Y!==N)&&gv(o,T,d,N),Bi=!1,Y=o.memoizedState,T.state=Y,Qc(o,d,T,m);var he=o.memoizedState;R!==J||Y!==he||mn.current||Bi?(typeof oe=="function"&&(fp(o,u,oe,d),he=o.memoizedState),(z=Bi||pv(o,u,z,d,Y,he,N)||!1)?(X||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,he,N),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,he,N)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),T.props=d,T.state=he,T.context=N,d=z):(typeof T.componentDidUpdate!="function"||R===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),d=!1)}return yp(i,o,u,d,_,m)}function yp(i,o,u,d,m,_){Rv(i,o);var T=(o.flags&128)!==0;if(!d&&!T)return m&&Dy(o,u,!1),ii(i,o,_);d=o.stateNode,bR.current=o;var R=T&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&T?(o.child=aa(o,i.child,null,_),o.child=aa(o,null,R,_)):hn(i,o,R,_),o.memoizedState=d.state,m&&Dy(o,u,!0),o.child}function kv(i){var o=i.stateNode;o.pendingContext?Ny(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Ny(i,o.context,!1),tp(i,o.containerInfo)}function Pv(i,o,u,d,m){return oa(),Kf(m),o.flags|=256,hn(i,o,u,d),o.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function Ep(i){return{baseLanes:i,cachePool:null,transitions:null}}function Nv(i,o,u){var d=o.pendingProps,m=lt.current,_=!1,T=(o.flags&128)!==0,R;if((R=T)||(R=i!==null&&i.memoizedState===null?!1:(m&2)!==0),R?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),et(lt,m&1),i===null)return Gf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(T=d.children,i=d.fallback,_?(d=o.mode,_=o.child,T={mode:"hidden",children:T},!(d&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=gh(T,d,0,null),i=Qs(i,d,u,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Ep(u),o.memoizedState=vp,i):wp(o,T));if(m=i.memoizedState,m!==null&&(R=m.dehydrated,R!==null))return LR(i,o,T,d,R,m,u);if(_){_=d.fallback,T=o.mode,m=i.child,R=m.sibling;var N={mode:"hidden",children:d.children};return!(T&1)&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=N,o.deletions=null):(d=Ki(m,N),d.subtreeFlags=m.subtreeFlags&14680064),R!==null?_=Ki(R,_):(_=Qs(_,T,u,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,T=i.child.memoizedState,T=T===null?Ep(u):{baseLanes:T.baseLanes|u,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~u,o.memoizedState=vp,d}return _=i.child,i=_.sibling,d=Ki(_,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=u),d.return=o,d.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=d,o.memoizedState=null,d}function wp(i,o){return o=gh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function rh(i,o,u,d){return d!==null&&Kf(d),aa(o,i.child,null,u),i=wp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function LR(i,o,u,d,m,_,T){if(u)return o.flags&256?(o.flags&=-257,d=mp(Error(t(422))),rh(i,o,T,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=d.fallback,m=o.mode,d=gh({mode:"visible",children:d.children},m,0,null),_=Qs(_,m,T,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,o.mode&1&&aa(o,i.child,null,T),o.child.memoizedState=Ep(T),o.memoizedState=vp,_);if(!(o.mode&1))return rh(i,o,T,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var R=d.dgst;return d=R,_=Error(t(419)),d=mp(_,d,void 0),rh(i,o,T,d)}if(R=(T&i.childLanes)!==0,_n||R){if(d=Ot,d!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(d.suspendedLanes|T)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,ni(i,m),dr(d,i,m,-1))}return Vp(),d=mp(Error(t(421))),rh(i,o,T,d)}return m.data==="$?"?(o.flags|=128,o.child=i.child,o=KR.bind(null,i),m._reactRetry=o,null):(i=_.treeContext,Dn=Vi(m.nextSibling),xn=o,ot=!0,lr=null,i!==null&&(Bn[zn++]=ei,Bn[zn++]=ti,Bn[zn++]=js,ei=i.id,ti=i.overflow,js=o),o=wp(o,d.children),o.flags|=4096,o)}function xv(i,o,u){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Jf(i.return,o,u)}function Tp(i,o,u,d,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:m}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=u,_.tailMode=m)}function Dv(i,o,u){var d=o.pendingProps,m=d.revealOrder,_=d.tail;if(hn(i,o,d.children,u),d=lt.current,d&2)d=d&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&xv(i,u,o);else if(i.tag===19)xv(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(et(lt,d),!(o.mode&1))o.memoizedState=null;else switch(m){case"forwards":for(u=o.child,m=null;u!==null;)i=u.alternate,i!==null&&Yc(i)===null&&(m=u),u=u.sibling;u=m,u===null?(m=o.child,o.child=null):(m=u.sibling,u.sibling=null),Tp(o,!1,m,u,_);break;case"backwards":for(u=null,m=o.child,o.child=null;m!==null;){if(i=m.alternate,i!==null&&Yc(i)===null){o.child=m;break}i=m.sibling,m.sibling=u,u=m,m=i}Tp(o,!0,u,null,_);break;case"together":Tp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ih(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ii(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),qs|=o.lanes,!(u&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=Ki(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=Ki(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function MR(i,o,u){switch(o.tag){case 3:kv(o),oa();break;case 5:Hy(o);break;case 1:gn(o.type)&&jc(o);break;case 4:tp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;et(Hc,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(et(lt,lt.current&1),o.flags|=128,null):u&o.child.childLanes?Nv(i,o,u):(et(lt,lt.current&1),i=ii(i,o,u),i!==null?i.sibling:null);et(lt,lt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,i.flags&128){if(d)return Dv(i,o,u);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),et(lt,lt.current),d)break;return null;case 22:case 23:return o.lanes=0,Sv(i,o,u)}return ii(i,o,u)}var Ov,Ip,bv,Lv;Ov=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Ip=function(){},bv=function(i,o,u,d){var m=i.memoizedProps;if(m!==d){i=o.stateNode,$s(Nr.current);var _=null;switch(u){case"input":m=Ts(i,m),d=Ts(i,d),_=[];break;case"select":m=ae({},m,{value:void 0}),d=ae({},d,{value:void 0}),_=[];break;case"textarea":m=ul(i,m),d=ul(i,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Vc)}ml(u,d);var T;u=null;for(z in m)if(!d.hasOwnProperty(z)&&m.hasOwnProperty(z)&&m[z]!=null)if(z==="style"){var R=m[z];for(T in R)R.hasOwnProperty(T)&&(u||(u={}),u[T]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?_||(_=[]):(_=_||[]).push(z,null));for(z in d){var N=d[z];if(R=m!=null?m[z]:void 0,d.hasOwnProperty(z)&&N!==R&&(N!=null||R!=null))if(z==="style")if(R){for(T in R)!R.hasOwnProperty(T)||N&&N.hasOwnProperty(T)||(u||(u={}),u[T]="");for(T in N)N.hasOwnProperty(T)&&R[T]!==N[T]&&(u||(u={}),u[T]=N[T])}else u||(_||(_=[]),_.push(z,u)),u=N;else z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(_=_||[]).push(z,N)):z==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(z,""+N):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(N!=null&&z==="onScroll"&&tt("scroll",i),_||R===N||(_=[])):(_=_||[]).push(z,N))}u&&(_=_||[]).push("style",u);var z=_;(o.updateQueue=z)&&(o.flags|=4)}},Lv=function(i,o,u,d){u!==d&&(o.flags|=4)};function Ql(i,o){if(!ot)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Jt(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(o)for(var m=i.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=u,o}function VR(i,o,u){var d=o.pendingProps;switch(qf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(o),null;case 1:return gn(o.type)&&Uc(),Jt(o),null;case 3:return d=o.stateNode,ca(),nt(mn),nt(Yt),ip(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Wc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,lr!==null&&(bp(lr),lr=null))),Ip(i,o),Jt(o),null;case 5:np(o);var m=$s(Wl.current);if(u=o.type,i!==null&&o.stateNode!=null)bv(i,o,u,d,m),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Jt(o),null}if(i=$s(Nr.current),Wc(o)){d=o.stateNode,u=o.type;var _=o.memoizedProps;switch(d[Pr]=o,d[Ul]=_,i=(o.mode&1)!==0,u){case"dialog":tt("cancel",d),tt("close",d);break;case"iframe":case"object":case"embed":tt("load",d);break;case"video":case"audio":for(m=0;m<Ml.length;m++)tt(Ml[m],d);break;case"source":tt("error",d);break;case"img":case"image":case"link":tt("error",d),tt("load",d);break;case"details":tt("toggle",d);break;case"input":So(d,_),tt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},tt("invalid",d);break;case"textarea":Ao(d,_),tt("invalid",d)}ml(u,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var R=_[T];T==="children"?typeof R=="string"?d.textContent!==R&&(_.suppressHydrationWarning!==!0&&Mc(d.textContent,R,i),m=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(_.suppressHydrationWarning!==!0&&Mc(d.textContent,R,i),m=["children",""+R]):s.hasOwnProperty(T)&&R!=null&&T==="onScroll"&&tt("scroll",d)}switch(u){case"input":zr(d),lc(d,_,!0);break;case"textarea":zr(d),cl(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Vc)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=T.createElement(u,{is:d.is}):(i=T.createElement(u),u==="select"&&(T=i,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):i=T.createElementNS(i,u),i[Pr]=o,i[Ul]=d,Ov(i,o,!1,!1),o.stateNode=i;e:{switch(T=gl(u,d),u){case"dialog":tt("cancel",i),tt("close",i),m=d;break;case"iframe":case"object":case"embed":tt("load",i),m=d;break;case"video":case"audio":for(m=0;m<Ml.length;m++)tt(Ml[m],i);m=d;break;case"source":tt("error",i),m=d;break;case"img":case"image":case"link":tt("error",i),tt("load",i),m=d;break;case"details":tt("toggle",i),m=d;break;case"input":So(i,d),m=Ts(i,d),tt("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=ae({},d,{value:void 0}),tt("invalid",i);break;case"textarea":Ao(i,d),m=ul(i,d),tt("invalid",i);break;default:m=d}ml(u,m),R=m;for(_ in R)if(R.hasOwnProperty(_)){var N=R[_];_==="style"?fl(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&hl(i,N)):_==="children"?typeof N=="string"?(u!=="textarea"||N!=="")&&Ri(i,N):typeof N=="number"&&Ri(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&tt("scroll",i):N!=null&&te(i,_,N,T))}switch(u){case"input":zr(i),lc(i,d,!1);break;case"textarea":zr(i),cl(i);break;case"option":d.value!=null&&i.setAttribute("value",""+$e(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Wr(i,!!d.multiple,_,!1):d.defaultValue!=null&&Wr(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Vc)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Jt(o),null;case 6:if(i&&o.stateNode!=null)Lv(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=$s(Wl.current),$s(Nr.current),Wc(o)){if(d=o.stateNode,u=o.memoizedProps,d[Pr]=o,(_=d.nodeValue!==u)&&(i=xn,i!==null))switch(i.tag){case 3:Mc(d.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Mc(d.nodeValue,u,(i.mode&1)!==0)}_&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Pr]=o,o.stateNode=d}return Jt(o),null;case 13:if(nt(lt),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&Dn!==null&&o.mode&1&&!(o.flags&128))Fy(),oa(),o.flags|=98560,_=!1;else if(_=Wc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Pr]=o}else oa(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Jt(o),_=!1}else lr!==null&&(bp(lr),lr=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(i===null||lt.current&1?kt===0&&(kt=3):Vp())),o.updateQueue!==null&&(o.flags|=4),Jt(o),null);case 4:return ca(),Ip(i,o),i===null&&Vl(o.stateNode.containerInfo),Jt(o),null;case 10:return Xf(o.type._context),Jt(o),null;case 17:return gn(o.type)&&Uc(),Jt(o),null;case 19:if(nt(lt),_=o.memoizedState,_===null)return Jt(o),null;if(d=(o.flags&128)!==0,T=_.rendering,T===null)if(d)Ql(_,!1);else{if(kt!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(T=Yc(i),T!==null){for(o.flags|=128,Ql(_,!1),d=T.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)_=u,i=d,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return et(lt,lt.current&1|2),o.child}i=i.sibling}_.tail!==null&&Ze()>pa&&(o.flags|=128,d=!0,Ql(_,!1),o.lanes=4194304)}else{if(!d)if(i=Yc(T),i!==null){if(o.flags|=128,d=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Ql(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!ot)return Jt(o),null}else 2*Ze()-_.renderingStartTime>pa&&u!==1073741824&&(o.flags|=128,d=!0,Ql(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(u=_.last,u!==null?u.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Ze(),o.sibling=null,u=lt.current,et(lt,d?u&1|2:u&1),o):(Jt(o),null);case 22:case 23:return Mp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?On&1073741824&&(Jt(o),o.subtreeFlags&6&&(o.flags|=8192)):Jt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function FR(i,o){switch(qf(o),o.tag){case 1:return gn(o.type)&&Uc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ca(),nt(mn),nt(Yt),ip(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return np(o),null;case 13:if(nt(lt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));oa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return nt(lt),null;case 4:return ca(),null;case 10:return Xf(o.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var sh=!1,Zt=!1,UR=typeof WeakSet=="function"?WeakSet:Set,ue=null;function da(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){ht(i,o,d)}else u.current=null}function Cp(i,o,u){try{u()}catch(d){ht(i,o,d)}}var Mv=!1;function jR(i,o){if(Mf=bi,i=py(),kf(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var T=0,R=-1,N=-1,z=0,X=0,J=i,Y=null;t:for(;;){for(var oe;J!==u||m!==0&&J.nodeType!==3||(R=T+m),J!==_||d!==0&&J.nodeType!==3||(N=T+d),J.nodeType===3&&(T+=J.nodeValue.length),(oe=J.firstChild)!==null;)Y=J,J=oe;for(;;){if(J===i)break t;if(Y===u&&++z===m&&(R=T),Y===_&&++X===d&&(N=T),(oe=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=oe}u=R===-1||N===-1?null:{start:R,end:N}}else u=null}u=u||{start:0,end:0}}else u=null;for(Vf={focusedElem:i,selectionRange:u},bi=!1,ue=o;ue!==null;)if(o=ue,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ue=i;else for(;ue!==null;){o=ue;try{var he=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,pt=he.memoizedState,j=o.stateNode,O=j.getSnapshotBeforeUpdate(o.elementType===o.type?de:ur(o.type,de),pt);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){ht(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,ue=i;break}ue=o.return}return he=Mv,Mv=!1,he}function Yl(i,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&Cp(o,u,_)}m=m.next}while(m!==d)}}function oh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Sp(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function Vv(i){var o=i.alternate;o!==null&&(i.alternate=null,Vv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Pr],delete o[Ul],delete o[Bf],delete o[TR],delete o[IR])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Fv(i){return i.tag===5||i.tag===3||i.tag===4}function Uv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Fv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Rp(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Vc));else if(d!==4&&(i=i.child,i!==null))for(Rp(i,o,u),i=i.sibling;i!==null;)Rp(i,o,u),i=i.sibling}function Ap(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Ap(i,o,u),i=i.sibling;i!==null;)Ap(i,o,u),i=i.sibling}var zt=null,cr=!1;function $i(i,o,u){for(u=u.child;u!==null;)jv(i,o,u),u=u.sibling}function jv(i,o,u){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(xs,u)}catch{}switch(u.tag){case 5:Zt||da(u,o);case 6:var d=zt,m=cr;zt=null,$i(i,o,u),zt=d,cr=m,zt!==null&&(cr?(i=zt,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):zt.removeChild(u.stateNode));break;case 18:zt!==null&&(cr?(i=zt,u=u.stateNode,i.nodeType===8?jf(i.parentNode,u):i.nodeType===1&&jf(i,u),sr(i)):jf(zt,u.stateNode));break;case 4:d=zt,m=cr,zt=u.stateNode.containerInfo,cr=!0,$i(i,o,u),zt=d,cr=m;break;case 0:case 11:case 14:case 15:if(!Zt&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&Cp(u,o,T),m=m.next}while(m!==d)}$i(i,o,u);break;case 1:if(!Zt&&(da(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(R){ht(u,o,R)}$i(i,o,u);break;case 21:$i(i,o,u);break;case 22:u.mode&1?(Zt=(d=Zt)||u.memoizedState!==null,$i(i,o,u),Zt=d):$i(i,o,u);break;default:$i(i,o,u)}}function Bv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new UR),o.forEach(function(d){var m=QR.bind(null,i,d);u.has(d)||(u.add(d),d.then(m,m))})}}function hr(i,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var m=u[d];try{var _=i,T=o,R=T;e:for(;R!==null;){switch(R.tag){case 5:zt=R.stateNode,cr=!1;break e;case 3:zt=R.stateNode.containerInfo,cr=!0;break e;case 4:zt=R.stateNode.containerInfo,cr=!0;break e}R=R.return}if(zt===null)throw Error(t(160));jv(_,T,m),zt=null,cr=!1;var N=m.alternate;N!==null&&(N.return=null),m.return=null}catch(z){ht(m,o,z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)zv(o,i),o=o.sibling}function zv(i,o){var u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hr(o,i),Dr(i),d&4){try{Yl(3,i,i.return),oh(3,i)}catch(de){ht(i,i.return,de)}try{Yl(5,i,i.return)}catch(de){ht(i,i.return,de)}}break;case 1:hr(o,i),Dr(i),d&512&&u!==null&&da(u,u.return);break;case 5:if(hr(o,i),Dr(i),d&512&&u!==null&&da(u,u.return),i.flags&32){var m=i.stateNode;try{Ri(m,"")}catch(de){ht(i,i.return,de)}}if(d&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,T=u!==null?u.memoizedProps:_,R=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{R==="input"&&_.type==="radio"&&_.name!=null&&al(m,_),gl(R,T);var z=gl(R,_);for(T=0;T<N.length;T+=2){var X=N[T],J=N[T+1];X==="style"?fl(m,J):X==="dangerouslySetInnerHTML"?hl(m,J):X==="children"?Ri(m,J):te(m,X,J,z)}switch(R){case"input":ll(m,_);break;case"textarea":ko(m,_);break;case"select":var Y=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var oe=_.value;oe!=null?Wr(m,!!_.multiple,oe,!1):Y!==!!_.multiple&&(_.defaultValue!=null?Wr(m,!!_.multiple,_.defaultValue,!0):Wr(m,!!_.multiple,_.multiple?[]:"",!1))}m[Ul]=_}catch(de){ht(i,i.return,de)}}break;case 6:if(hr(o,i),Dr(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(de){ht(i,i.return,de)}}break;case 3:if(hr(o,i),Dr(i),d&4&&u!==null&&u.memoizedState.isDehydrated)try{sr(o.containerInfo)}catch(de){ht(i,i.return,de)}break;case 4:hr(o,i),Dr(i);break;case 13:hr(o,i),Dr(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Np=Ze())),d&4&&Bv(i);break;case 22:if(X=u!==null&&u.memoizedState!==null,i.mode&1?(Zt=(z=Zt)||X,hr(o,i),Zt=z):hr(o,i),Dr(i),d&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!X&&i.mode&1)for(ue=i,X=i.child;X!==null;){for(J=ue=X;ue!==null;){switch(Y=ue,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:Yl(4,Y,Y.return);break;case 1:da(Y,Y.return);var he=Y.stateNode;if(typeof he.componentWillUnmount=="function"){d=Y,u=Y.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){ht(d,u,de)}}break;case 5:da(Y,Y.return);break;case 22:if(Y.memoizedState!==null){qv(J);continue}}oe!==null?(oe.return=Y,ue=oe):qv(J)}X=X.sibling}e:for(X=null,J=i;;){if(J.tag===5){if(X===null){X=J;try{m=J.stateNode,z?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(R=J.stateNode,N=J.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=dl("display",T))}catch(de){ht(i,i.return,de)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(de){ht(i,i.return,de)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:hr(o,i),Dr(i),d&4&&Bv(i);break;case 21:break;default:hr(o,i),Dr(i)}}function Dr(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(Fv(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Ri(m,""),d.flags&=-33);var _=Uv(i);Ap(i,_,m);break;case 3:case 4:var T=d.stateNode.containerInfo,R=Uv(i);Rp(i,R,T);break;default:throw Error(t(161))}}catch(N){ht(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function BR(i,o,u){ue=i,$v(i)}function $v(i,o,u){for(var d=(i.mode&1)!==0;ue!==null;){var m=ue,_=m.child;if(m.tag===22&&d){var T=m.memoizedState!==null||sh;if(!T){var R=m.alternate,N=R!==null&&R.memoizedState!==null||Zt;R=sh;var z=Zt;if(sh=T,(Zt=N)&&!z)for(ue=m;ue!==null;)T=ue,N=T.child,T.tag===22&&T.memoizedState!==null?Hv(m):N!==null?(N.return=T,ue=N):Hv(m);for(;_!==null;)ue=_,$v(_),_=_.sibling;ue=m,sh=R,Zt=z}Wv(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,ue=_):Wv(i)}}function Wv(i){for(;ue!==null;){var o=ue;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Zt||oh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!Zt)if(u===null)d.componentDidMount();else{var m=o.elementType===o.type?u.memoizedProps:ur(o.type,u.memoizedProps);d.componentDidUpdate(m,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&qy(o,_,d);break;case 3:var T=o.updateQueue;if(T!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}qy(o,T,u)}break;case 5:var R=o.stateNode;if(u===null&&o.flags&4){u=R;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&u.focus();break;case"img":N.src&&(u.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var z=o.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&sr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zt||o.flags&512&&Sp(o)}catch(Y){ht(o,o.return,Y)}}if(o===i){ue=null;break}if(u=o.sibling,u!==null){u.return=o.return,ue=u;break}ue=o.return}}function qv(i){for(;ue!==null;){var o=ue;if(o===i){ue=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ue=u;break}ue=o.return}}function Hv(i){for(;ue!==null;){var o=ue;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{oh(4,o)}catch(N){ht(o,u,N)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(N){ht(o,m,N)}}var _=o.return;try{Sp(o)}catch(N){ht(o,_,N)}break;case 5:var T=o.return;try{Sp(o)}catch(N){ht(o,T,N)}}}catch(N){ht(o,o.return,N)}if(o===i){ue=null;break}var R=o.sibling;if(R!==null){R.return=o.return,ue=R;break}ue=o.return}}var zR=Math.ceil,ah=se.ReactCurrentDispatcher,kp=se.ReactCurrentOwner,qn=se.ReactCurrentBatchConfig,je=0,Ot=null,vt=null,$t=0,On=0,fa=Fi(0),kt=0,Xl=null,qs=0,lh=0,Pp=0,Jl=null,yn=null,Np=0,pa=1/0,si=null,uh=!1,xp=null,Wi=null,ch=!1,qi=null,hh=0,Zl=0,Dp=null,dh=-1,fh=0;function dn(){return je&6?Ze():dh!==-1?dh:dh=Ze()}function Hi(i){return i.mode&1?je&2&&$t!==0?$t&-$t:SR.transition!==null?(fh===0&&(fh=Os()),fh):(i=Le,i!==0||(i=window.event,i=i===void 0?16:Al(i.type)),i):1}function dr(i,o,u,d){if(50<Zl)throw Zl=0,Dp=null,Error(t(185));Ni(i,u,d),(!(je&2)||i!==Ot)&&(i===Ot&&(!(je&2)&&(lh|=u),kt===4&&Gi(i,$t)),vn(i,d),u===1&&je===0&&!(o.mode&1)&&(pa=Ze()+500,Bc&&ji()))}function vn(i,o){var u=i.callbackNode;Gr(i,o);var d=Ds(i,i===Ot?$t:0);if(d===0)u!==null&&Tl(u),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(u!=null&&Tl(u),o===1)i.tag===0?CR(Kv.bind(null,i)):Oy(Kv.bind(null,i)),ER(function(){!(je&6)&&ji()}),u=null;else{switch(Di(d)){case 1:u=Ns;break;case 4:u=Ai;break;case 16:u=Fn;break;case 536870912:u=fc;break;default:u=Fn}u=nE(u,Gv.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function Gv(i,o){if(dh=-1,fh=0,je&6)throw Error(t(327));var u=i.callbackNode;if(ma()&&i.callbackNode!==u)return null;var d=Ds(i,i===Ot?$t:0);if(d===0)return null;if(d&30||d&i.expiredLanes||o)o=ph(i,d);else{o=d;var m=je;je|=2;var _=Yv();(Ot!==i||$t!==o)&&(si=null,pa=Ze()+500,Gs(i,o));do try{qR();break}catch(R){Qv(i,R)}while(!0);Yf(),ah.current=_,je=m,vt!==null?o=0:(Ot=null,$t=0,o=kt)}if(o!==0){if(o===2&&(m=kn(i),m!==0&&(d=m,o=Op(i,m))),o===1)throw u=Xl,Gs(i,0),Gi(i,d),vn(i,Ze()),u;if(o===6)Gi(i,d);else{if(m=i.current.alternate,!(d&30)&&!$R(m)&&(o=ph(i,d),o===2&&(_=kn(i),_!==0&&(d=_,o=Op(i,_))),o===1))throw u=Xl,Gs(i,0),Gi(i,d),vn(i,Ze()),u;switch(i.finishedWork=m,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Ks(i,yn,si);break;case 3:if(Gi(i,d),(d&130023424)===d&&(o=Np+500-Ze(),10<o)){if(Ds(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){dn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Uf(Ks.bind(null,i,yn,si),o);break}Ks(i,yn,si);break;case 4:if(Gi(i,d),(d&4194240)===d)break;for(o=i.eventTimes,m=-1;0<d;){var T=31-un(d);_=1<<T,T=o[T],T>m&&(m=T),d&=~_}if(d=m,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*zR(d/1960))-d,10<d){i.timeoutHandle=Uf(Ks.bind(null,i,yn,si),d);break}Ks(i,yn,si);break;case 5:Ks(i,yn,si);break;default:throw Error(t(329))}}}return vn(i,Ze()),i.callbackNode===u?Gv.bind(null,i):null}function Op(i,o){var u=Jl;return i.current.memoizedState.isDehydrated&&(Gs(i,o).flags|=256),i=ph(i,o),i!==2&&(o=yn,yn=u,o!==null&&bp(o)),i}function bp(i){yn===null?yn=i:yn.push.apply(yn,i)}function $R(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var m=u[d],_=m.getSnapshot;m=m.value;try{if(!ar(_(),m))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Gi(i,o){for(o&=~Pp,o&=~lh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-un(o),d=1<<u;i[u]=-1,o&=~d}}function Kv(i){if(je&6)throw Error(t(327));ma();var o=Ds(i,0);if(!(o&1))return vn(i,Ze()),null;var u=ph(i,o);if(i.tag!==0&&u===2){var d=kn(i);d!==0&&(o=d,u=Op(i,d))}if(u===1)throw u=Xl,Gs(i,0),Gi(i,o),vn(i,Ze()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Ks(i,yn,si),vn(i,Ze()),null}function Lp(i,o){var u=je;je|=1;try{return i(o)}finally{je=u,je===0&&(pa=Ze()+500,Bc&&ji())}}function Hs(i){qi!==null&&qi.tag===0&&!(je&6)&&ma();var o=je;je|=1;var u=qn.transition,d=Le;try{if(qn.transition=null,Le=1,i)return i()}finally{Le=d,qn.transition=u,je=o,!(je&6)&&ji()}}function Mp(){On=fa.current,nt(fa)}function Gs(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,vR(u)),vt!==null)for(u=vt.return;u!==null;){var d=u;switch(qf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Uc();break;case 3:ca(),nt(mn),nt(Yt),ip();break;case 5:np(d);break;case 4:ca();break;case 13:nt(lt);break;case 19:nt(lt);break;case 10:Xf(d.type._context);break;case 22:case 23:Mp()}u=u.return}if(Ot=i,vt=i=Ki(i.current,null),$t=On=o,kt=0,Xl=null,Pp=lh=qs=0,yn=Jl=null,zs!==null){for(o=0;o<zs.length;o++)if(u=zs[o],d=u.interleaved,d!==null){u.interleaved=null;var m=d.next,_=u.pending;if(_!==null){var T=_.next;_.next=m,d.next=T}u.pending=d}zs=null}return i}function Qv(i,o){do{var u=vt;try{if(Yf(),Xc.current=th,Jc){for(var d=ut.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Jc=!1}if(Ws=0,Dt=At=ut=null,ql=!1,Hl=0,kp.current=null,u===null||u.return===null){kt=1,Xl=o,vt=null;break}e:{var _=i,T=u.return,R=u,N=o;if(o=$t,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var z=N,X=R,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var oe=Ev(T);if(oe!==null){oe.flags&=-257,wv(oe,T,R,_,o),oe.mode&1&&vv(_,z,o),o=oe,N=z;var he=o.updateQueue;if(he===null){var de=new Set;de.add(N),o.updateQueue=de}else he.add(N);break e}else{if(!(o&1)){vv(_,z,o),Vp();break e}N=Error(t(426))}}else if(ot&&R.mode&1){var pt=Ev(T);if(pt!==null){!(pt.flags&65536)&&(pt.flags|=256),wv(pt,T,R,_,o),Kf(ha(N,R));break e}}_=N=ha(N,R),kt!==4&&(kt=2),Jl===null?Jl=[_]:Jl.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var j=_v(_,N,o);Wy(_,j);break e;case 1:R=N;var O=_.type,B=_.stateNode;if(!(_.flags&128)&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Wi===null||!Wi.has(B)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=yv(_,R,o);Wy(_,ee);break e}}_=_.return}while(_!==null)}Jv(u)}catch(fe){o=fe,vt===u&&u!==null&&(vt=u=u.return);continue}break}while(!0)}function Yv(){var i=ah.current;return ah.current=th,i===null?th:i}function Vp(){(kt===0||kt===3||kt===2)&&(kt=4),Ot===null||!(qs&268435455)&&!(lh&268435455)||Gi(Ot,$t)}function ph(i,o){var u=je;je|=2;var d=Yv();(Ot!==i||$t!==o)&&(si=null,Gs(i,o));do try{WR();break}catch(m){Qv(i,m)}while(!0);if(Yf(),je=u,ah.current=d,vt!==null)throw Error(t(261));return Ot=null,$t=0,kt}function WR(){for(;vt!==null;)Xv(vt)}function qR(){for(;vt!==null&&!hc();)Xv(vt)}function Xv(i){var o=tE(i.alternate,i,On);i.memoizedProps=i.pendingProps,o===null?Jv(i):vt=o,kp.current=null}function Jv(i){var o=i;do{var u=o.alternate;if(i=o.return,o.flags&32768){if(u=FR(u,o),u!==null){u.flags&=32767,vt=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{kt=6,vt=null;return}}else if(u=VR(u,o,On),u!==null){vt=u;return}if(o=o.sibling,o!==null){vt=o;return}vt=o=i}while(o!==null);kt===0&&(kt=5)}function Ks(i,o,u){var d=Le,m=qn.transition;try{qn.transition=null,Le=1,HR(i,o,u,d)}finally{qn.transition=m,Le=d}return null}function HR(i,o,u,d){do ma();while(qi!==null);if(je&6)throw Error(t(327));u=i.finishedWork;var m=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=u.lanes|u.childLanes;if(Ye(i,_),i===Ot&&(vt=Ot=null,$t=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||ch||(ch=!0,nE(Fn,function(){return ma(),null})),_=(u.flags&15990)!==0,u.subtreeFlags&15990||_){_=qn.transition,qn.transition=null;var T=Le;Le=1;var R=je;je|=4,kp.current=null,jR(i,u),zv(u,i),dR(Vf),bi=!!Mf,Vf=Mf=null,i.current=u,BR(u),Ef(),je=R,Le=T,qn.transition=_}else i.current=u;if(ch&&(ch=!1,qi=i,hh=m),_=i.pendingLanes,_===0&&(Wi=null),pc(u.stateNode),vn(i,Ze()),o!==null)for(d=i.onRecoverableError,u=0;u<o.length;u++)m=o[u],d(m.value,{componentStack:m.stack,digest:m.digest});if(uh)throw uh=!1,i=xp,xp=null,i;return hh&1&&i.tag!==0&&ma(),_=i.pendingLanes,_&1?i===Dp?Zl++:(Zl=0,Dp=i):Zl=0,ji(),null}function ma(){if(qi!==null){var i=Di(hh),o=qn.transition,u=Le;try{if(qn.transition=null,Le=16>i?16:i,qi===null)var d=!1;else{if(i=qi,qi=null,hh=0,je&6)throw Error(t(331));var m=je;for(je|=4,ue=i.current;ue!==null;){var _=ue,T=_.child;if(ue.flags&16){var R=_.deletions;if(R!==null){for(var N=0;N<R.length;N++){var z=R[N];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:Yl(8,X,_)}var J=X.child;if(J!==null)J.return=X,ue=J;else for(;ue!==null;){X=ue;var Y=X.sibling,oe=X.return;if(Vv(X),X===z){ue=null;break}if(Y!==null){Y.return=oe,ue=Y;break}ue=oe}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var pt=de.sibling;de.sibling=null,de=pt}while(de!==null)}}ue=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,ue=T;else e:for(;ue!==null;){if(_=ue,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Yl(9,_,_.return)}var j=_.sibling;if(j!==null){j.return=_.return,ue=j;break e}ue=_.return}}var O=i.current;for(ue=O;ue!==null;){T=ue;var B=T.child;if(T.subtreeFlags&2064&&B!==null)B.return=T,ue=B;else e:for(T=O;ue!==null;){if(R=ue,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:oh(9,R)}}catch(fe){ht(R,R.return,fe)}if(R===T){ue=null;break e}var ee=R.sibling;if(ee!==null){ee.return=R.return,ue=ee;break e}ue=R.return}}if(je=m,ji(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(xs,i)}catch{}d=!0}return d}finally{Le=u,qn.transition=o}}return!1}function Zv(i,o,u){o=ha(u,o),o=_v(i,o,1),i=zi(i,o,1),o=dn(),i!==null&&(Ni(i,1,o),vn(i,o))}function ht(i,o,u){if(i.tag===3)Zv(i,i,u);else for(;o!==null;){if(o.tag===3){Zv(o,i,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Wi===null||!Wi.has(d))){i=ha(u,i),i=yv(o,i,1),o=zi(o,i,1),i=dn(),o!==null&&(Ni(o,1,i),vn(o,i));break}}o=o.return}}function GR(i,o,u){var d=i.pingCache;d!==null&&d.delete(o),o=dn(),i.pingedLanes|=i.suspendedLanes&u,Ot===i&&($t&u)===u&&(kt===4||kt===3&&($t&130023424)===$t&&500>Ze()-Np?Gs(i,0):Pp|=u),vn(i,o)}function eE(i,o){o===0&&(i.mode&1?(o=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):o=1);var u=dn();i=ni(i,o),i!==null&&(Ni(i,o,u),vn(i,u))}function KR(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),eE(i,u)}function QR(i,o){var u=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(u=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),eE(i,u)}var tE;tE=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||mn.current)_n=!0;else{if(!(i.lanes&u)&&!(o.flags&128))return _n=!1,MR(i,o,u);_n=!!(i.flags&131072)}else _n=!1,ot&&o.flags&1048576&&by(o,$c,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;ih(i,o),i=o.pendingProps;var m=ra(o,Yt.current);ua(o,u),m=ap(null,o,d,i,m,u);var _=lp();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,gn(d)?(_=!0,jc(o)):_=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,ep(o),m.updater=nh,o.stateNode=m,m._reactInternals=o,pp(o,d,i,u),o=yp(null,o,d,!0,_,u)):(o.tag=0,ot&&_&&Wf(o),hn(null,o,m,u),o=o.child),o;case 16:d=o.elementType;e:{switch(ih(i,o),i=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=XR(d),i=ur(d,i),m){case 0:o=_p(null,o,d,i,u);break e;case 1:o=Av(null,o,d,i,u);break e;case 11:o=Tv(null,o,d,i,u);break e;case 14:o=Iv(null,o,d,ur(d.type,i),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:ur(d,m),_p(i,o,d,m,u);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:ur(d,m),Av(i,o,d,m,u);case 3:e:{if(kv(o),i===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,m=_.element,$y(i,o),Qc(o,d,null,u);var T=o.memoizedState;if(d=T.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){m=ha(Error(t(423)),o),o=Pv(i,o,d,u,m);break e}else if(d!==m){m=ha(Error(t(424)),o),o=Pv(i,o,d,u,m);break e}else for(Dn=Vi(o.stateNode.containerInfo.firstChild),xn=o,ot=!0,lr=null,u=By(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(oa(),d===m){o=ii(i,o,u);break e}hn(i,o,d,u)}o=o.child}return o;case 5:return Hy(o),i===null&&Gf(o),d=o.type,m=o.pendingProps,_=i!==null?i.memoizedProps:null,T=m.children,Ff(d,m)?T=null:_!==null&&Ff(d,_)&&(o.flags|=32),Rv(i,o),hn(i,o,T,u),o.child;case 6:return i===null&&Gf(o),null;case 13:return Nv(i,o,u);case 4:return tp(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=aa(o,null,d,u):hn(i,o,d,u),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:ur(d,m),Tv(i,o,d,m,u);case 7:return hn(i,o,o.pendingProps,u),o.child;case 8:return hn(i,o,o.pendingProps.children,u),o.child;case 12:return hn(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,_=o.memoizedProps,T=m.value,et(Hc,d._currentValue),d._currentValue=T,_!==null)if(ar(_.value,T)){if(_.children===m.children&&!mn.current){o=ii(i,o,u);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var R=_.dependencies;if(R!==null){T=_.child;for(var N=R.firstContext;N!==null;){if(N.context===d){if(_.tag===1){N=ri(-1,u&-u),N.tag=2;var z=_.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?N.next=N:(N.next=X.next,X.next=N),z.pending=N}}_.lanes|=u,N=_.alternate,N!==null&&(N.lanes|=u),Jf(_.return,u,o),R.lanes|=u;break}N=N.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=u,R=T.alternate,R!==null&&(R.lanes|=u),Jf(T,u,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}hn(i,o,m.children,u),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,ua(o,u),m=$n(m),d=d(m),o.flags|=1,hn(i,o,d,u),o.child;case 14:return d=o.type,m=ur(d,o.pendingProps),m=ur(d.type,m),Iv(i,o,d,m,u);case 15:return Cv(i,o,o.type,o.pendingProps,u);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:ur(d,m),ih(i,o),o.tag=1,gn(d)?(i=!0,jc(o)):i=!1,ua(o,u),mv(o,d,m),pp(o,d,m,u),yp(null,o,d,!0,i,u);case 19:return Dv(i,o,u);case 22:return Sv(i,o,u)}throw Error(t(156,o.tag))};function nE(i,o){return Mo(i,o)}function YR(i,o,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(i,o,u,d){return new YR(i,o,u,d)}function Fp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function XR(i){if(typeof i=="function")return Fp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===Kt)return 14}return 2}function Ki(i,o){var u=i.alternate;return u===null?(u=Hn(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function mh(i,o,u,d,m,_){var T=2;if(d=i,typeof i=="function")Fp(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case D:return Qs(u.children,m,_,o);case S:T=8,m|=8;break;case A:return i=Hn(12,u,o,m|2),i.elementType=A,i.lanes=_,i;case k:return i=Hn(13,u,o,m),i.elementType=k,i.lanes=_,i;case dt:return i=Hn(19,u,o,m),i.elementType=dt,i.lanes=_,i;case Qe:return gh(u,m,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:T=10;break e;case L:T=9;break e;case F:T=11;break e;case Kt:T=14;break e;case Qt:T=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Hn(T,u,o,m),o.elementType=i,o.type=d,o.lanes=_,o}function Qs(i,o,u,d){return i=Hn(7,i,d,o),i.lanes=u,i}function gh(i,o,u,d){return i=Hn(22,i,d,o),i.elementType=Qe,i.lanes=u,i.stateNode={isHidden:!1},i}function Up(i,o,u){return i=Hn(6,i,null,o),i.lanes=u,i}function jp(i,o,u){return o=Hn(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function JR(i,o,u,d,m){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Bp(i,o,u,d,m,_,T,R,N){return i=new JR(i,o,u,R,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Hn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(_),i}function ZR(i,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:d==null?null:""+d,children:i,containerInfo:o,implementation:u}}function rE(i){if(!i)return Ui;i=i._reactInternals;e:{if(er(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(gn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(gn(u))return xy(i,u,o)}return o}function iE(i,o,u,d,m,_,T,R,N){return i=Bp(u,d,!0,i,m,_,T,R,N),i.context=rE(null),u=i.current,d=dn(),m=Hi(u),_=ri(d,m),_.callback=o??null,zi(u,_,m),i.current.lanes=m,Ni(i,m,d),vn(i,d),i}function _h(i,o,u,d){var m=o.current,_=dn(),T=Hi(m);return u=rE(u),o.context===null?o.context=u:o.pendingContext=u,o=ri(_,T),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=zi(m,o,T),i!==null&&(dr(i,m,T,_),Kc(i,m,T)),T}function yh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function sE(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function zp(i,o){sE(i,o),(i=i.alternate)&&sE(i,o)}function eA(){return null}var oE=typeof reportError=="function"?reportError:function(i){console.error(i)};function $p(i){this._internalRoot=i}vh.prototype.render=$p.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));_h(i,o,null,null)},vh.prototype.unmount=$p.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Hs(function(){_h(null,i,null,null)}),o[Jr]=null}};function vh(i){this._internalRoot=i}vh.prototype.unstable_scheduleHydration=function(i){if(i){var o=vc();i={blockedOn:null,target:i,priority:o};for(var u=0;u<Sr.length&&o!==0&&o<Sr[u].priority;u++);Sr.splice(u,0,i),u===0&&Tc(i)}};function Wp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Eh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function aE(){}function tA(i,o,u,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var z=yh(T);_.call(z)}}var T=iE(o,d,i,0,null,!1,!1,"",aE);return i._reactRootContainer=T,i[Jr]=T.current,Vl(i.nodeType===8?i.parentNode:i),Hs(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var R=d;d=function(){var z=yh(N);R.call(z)}}var N=Bp(i,0,!1,null,null,!1,!1,"",aE);return i._reactRootContainer=N,i[Jr]=N.current,Vl(i.nodeType===8?i.parentNode:i),Hs(function(){_h(o,N,u,d)}),N}function wh(i,o,u,d,m){var _=u._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var R=m;m=function(){var N=yh(T);R.call(N)}}_h(o,T,i,m)}else T=tA(u,o,i,m,d);return yh(T)}_c=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=ki(o.pendingLanes);u!==0&&(xi(o,u|1),vn(o,Ze()),!(je&6)&&(pa=Ze()+500,ji()))}break;case 13:Hs(function(){var d=ni(i,1);if(d!==null){var m=dn();dr(d,i,1,m)}}),zp(i,1)}},Uo=function(i){if(i.tag===13){var o=ni(i,134217728);if(o!==null){var u=dn();dr(o,i,134217728,u)}zp(i,134217728)}},yc=function(i){if(i.tag===13){var o=Hi(i),u=ni(i,o);if(u!==null){var d=dn();dr(u,i,o,d)}zp(i,o)}},vc=function(){return Le},Ec=function(i,o){var u=Le;try{return Le=i,o()}finally{Le=u}},No=function(i,o,u){switch(o){case"input":if(ll(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==i&&d.form===i.form){var m=Fc(d);if(!m)throw Error(t(90));Co(d),ll(d,m)}}}break;case"textarea":ko(i,u);break;case"select":o=u.value,o!=null&&Wr(i,!!u.multiple,o,!1)}},Rs=Lp,yl=Hs;var nA={usingClientEntryPoint:!1,Events:[jl,ta,Fc,Ir,_l,Lp]},eu={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rA={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=wl(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||eA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Th.isDisabled&&Th.supportsFiber)try{xs=Th.inject(rA),An=Th}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nA,En.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(o))throw Error(t(200));return ZR(i,o,null,u)},En.createRoot=function(i,o){if(!Wp(i))throw Error(t(299));var u=!1,d="",m=oE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Bp(i,1,!1,null,null,u,!1,d,m),i[Jr]=o.current,Vl(i.nodeType===8?i.parentNode:i),new $p(o)},En.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=wl(o),i=i===null?null:i.stateNode,i},En.flushSync=function(i){return Hs(i)},En.hydrate=function(i,o,u){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!0,u)},En.hydrateRoot=function(i,o,u){if(!Wp(i))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,m=!1,_="",T=oE;if(u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(T=u.onRecoverableError)),o=iE(o,null,i,1,u??null,m,!1,_,T),i[Jr]=o.current,Vl(i),d)for(i=0;i<d.length;i++)u=d[i],m=u._getVersion,m=m(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,m]:o.mutableSourceEagerHydrationData.push(u,m);return new vh(o)},En.render=function(i,o,u){if(!Eh(o))throw Error(t(200));return wh(null,i,o,!1,u)},En.unmountComponentAtNode=function(i){if(!Eh(i))throw Error(t(40));return i._reactRootContainer?(Hs(function(){wh(null,null,i,!1,function(){i._reactRootContainer=null,i[Jr]=null})}),!0):!1},En.unstable_batchedUpdates=Lp,En.unstable_renderSubtreeIntoContainer=function(i,o,u,d){if(!Eh(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wh(i,o,u,!1,d)},En.version="18.3.1-next-f1338f8080-20240426",En}var mE;function hA(){if(mE)return Gp.exports;mE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gp.exports=cA(),Gp.exports}var gE;function dA(){if(gE)return Ih;gE=1;var n=hA();return Ih.createRoot=n.createRoot,Ih.hydrateRoot=n.hydrateRoot,Ih}var fA=dA(),_E={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw Ha(e)},Ha=function(n){return new Error("Firebase Database ("+U0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,h=l?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,y=a>>2,E=(a&3)<<4|h>>4;let w=(h&15)<<2|p>>6,C=p&63;f||(C=64,l||(w=64)),r.push(t[y],t[E],t[w],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(j0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||p==null||E==null)throw new mA;const w=a<<2|h>>4;if(r.push(w),p!==64){const C=h<<4&240|p>>2;if(r.push(C),E!==64){const P=p<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B0=function(n){const e=j0(n);return fg.encodeByteArray(e,!0)},Kh=function(n){return B0(n).replace(/\./g,"")},Qh=function(n){try{return fg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n){return z0(void 0,n)}function z0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!_A(t)||(n[t]=z0(n[t],e[t]));return n}function _A(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=()=>yA().__FIREBASE_DEFAULTS__,EA=()=>{if(typeof process>"u"||typeof _E>"u")return;const n=_E.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},Dd=()=>{try{return vA()||EA()||wA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$0=n=>{var e,t;return(t=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},pg=n=>{const e=$0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},W0=()=>{var n;return(n=Dd())===null||n===void 0?void 0:n.config},q0=n=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kh(JSON.stringify(t)),Kh(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function TA(){var n;const e=(n=Dd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function H0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function G0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const n=an();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function K0(){return U0.NODE_ADMIN===!0}function SA(){return!TA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q0(){try{return typeof indexedDB=="object"}catch{return!1}}function Y0(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function RA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="FirebaseError";class Xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=AA,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?kA(a,r):"Error",h=`${this.serviceName}: ${l} (${s}).`;return new Xn(s,h,r)}}function kA(n,e){return n.replace(PA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Ru(Qh(a[0])||""),t=Ru(Qh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},NA=function(n){const e=X0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},xA=function(n){const e=X0(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Na(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function xa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],l=e[s];if(yE(a)&&yE(l)){if(!xa(a,l))return!1}else if(a!==l)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function yE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function uu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(w<<1|w>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],l=this.chain_[2],h=this.chain_[3],f=this.chain_[4],p,y;for(let E=0;E<80;E++){E<40?E<20?(p=h^a&(l^h),y=1518500249):(p=a^l^h,y=1859775393):E<60?(p=a&l|h&(a|l),y=2400959708):(p=a^l^h,y=3395469782);const w=(s<<5|s>>>27)+p+f+y+r[E]&4294967295;f=h,h=l,l=(a<<30|a>>>2)&4294967295,a=s,s=w}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let l=this.inbuf_;for(;s<t;){if(l===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[l]=e.charCodeAt(s),++l,++s,l===this.blockSize){this.compress_(a),l=0;break}}else for(;s<t;)if(a[l]=e[s],++l,++s,l===this.blockSize){this.compress_(a),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function OA(n,e){const t=new bA(n,e);return t.subscribe.bind(t)}class bA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");LA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yp),s.error===void 0&&(s.error=Yp),s.complete===void 0&&(s.complete=Yp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yp(){}function Da(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(r)-56320;s=65536+(a<<10)+l}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Od=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1e3,FA=2,UA=4*60*60*1e3,jA=.5;function vE(n,e=VA,t=FA){const r=e*Math.pow(t,n),s=Math.round(jA*r*(Math.random()-.5)*2);return Math.min(UA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ai;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($A(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&l.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zA(n){return n===Ys?void 0:n}function $A(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const qA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},HA=Oe.INFO,GA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},KA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=GA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=HA,this._logHandler=KA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const QA=(n,e)=>e.some(t=>n instanceof t);let EE,wE;function YA(){return EE||(EE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XA(){return wE||(wE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J0=new WeakMap,Tm=new WeakMap,Z0=new WeakMap,Xp=new WeakMap,_g=new WeakMap;function JA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(ns(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&J0.set(t,n)}).catch(()=>{}),_g.set(e,n),e}function ZA(n){if(Tm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Tm.set(n,e)}let Im={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Z0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ns(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ek(n){Im=n(Im)}function tk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jp(this),e,...t);return Z0.set(r,e.sort?e.sort():[e]),ns(r)}:XA().includes(n)?function(...e){return n.apply(Jp(this),e),ns(J0.get(this))}:function(...e){return ns(n.apply(Jp(this),e))}}function nk(n){return typeof n=="function"?tk(n):(n instanceof IDBTransaction&&ZA(n),QA(n,YA())?new Proxy(n,Im):n)}function ns(n){if(n instanceof IDBRequest)return JA(n);if(Xp.has(n))return Xp.get(n);const e=nk(n);return e!==n&&(Xp.set(n,e),_g.set(e,n)),e}const Jp=n=>_g.get(n);function eT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),h=ns(l);return r&&l.addEventListener("upgradeneeded",f=>{r(ns(l.result),f.oldVersion,f.newVersion,ns(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const rk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],Zp=new Map;function TE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zp.get(e))return Zp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ik.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rk.includes(t)))return;const a=async function(l,...h){const f=this.transaction(l,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),s&&f.done]))[0]};return Zp.set(e,a),a}ek(n=>({...n,get:(e,t,r)=>TE(e,t)||n.get(e,t,r),has:(e,t)=>!!TE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ok(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ok(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cm="@firebase/app",IE="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new $u("@firebase/app"),ak="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",ck="@firebase/app-check-compat",hk="@firebase/app-check",dk="@firebase/auth",fk="@firebase/auth-compat",pk="@firebase/database",mk="@firebase/data-connect",gk="@firebase/database-compat",_k="@firebase/functions",yk="@firebase/functions-compat",vk="@firebase/installations",Ek="@firebase/installations-compat",wk="@firebase/messaging",Tk="@firebase/messaging-compat",Ik="@firebase/performance",Ck="@firebase/performance-compat",Sk="@firebase/remote-config",Rk="@firebase/remote-config-compat",Ak="@firebase/storage",kk="@firebase/storage-compat",Pk="@firebase/firestore",Nk="@firebase/vertexai",xk="@firebase/firestore-compat",Dk="firebase",Ok="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="[DEFAULT]",bk={[Cm]:"fire-core",[ak]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[hk]:"fire-app-check",[ck]:"fire-app-check-compat",[dk]:"fire-auth",[fk]:"fire-auth-compat",[pk]:"fire-rtdb",[mk]:"fire-data-connect",[gk]:"fire-rtdb-compat",[_k]:"fire-fn",[yk]:"fire-fn-compat",[vk]:"fire-iid",[Ek]:"fire-iid-compat",[wk]:"fire-fcm",[Tk]:"fire-fcm-compat",[Ik]:"fire-perf",[Ck]:"fire-perf-compat",[Sk]:"fire-rc",[Rk]:"fire-rc-compat",[Ak]:"fire-gcs",[kk]:"fire-gcs-compat",[Pk]:"fire-fst",[xk]:"fire-fst-compat",[Nk]:"fire-vertex","fire-js":"fire-js",[Dk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map,Lk=new Map,Rm=new Map;function CE(n,e){try{n.container.addComponent(e)}catch(t){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(Rm.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;Rm.set(e,n);for(const t of Jh.values())CE(t,n);for(const t of Lk.values())CE(t,n);return!0}function Ii(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new _o("app","Firebase",Mk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=Ok;function tT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sm,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rs.create("bad-app-name",{appName:String(s)});if(t||(t=W0()),!t)throw rs.create("no-options");const a=Jh.get(s);if(a){if(xa(t,a.options)&&xa(r,a.config))return a;throw rs.create("duplicate-app",{appName:s})}const l=new WA(s);for(const f of Rm.values())l.addComponent(f);const h=new Vk(t,r,l);return Jh.set(s,h),h}function Wu(n=Sm){const e=Jh.get(n);if(!e&&n===Sm&&W0())return tT();if(!e)throw rs.create("no-app",{appName:n});return e}function sn(n,e,t){var r;let s=(r=bk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(h.join(" "));return}Qn(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="firebase-heartbeat-database",Uk=1,Au="firebase-heartbeat-store";let em=null;function nT(){return em||(em=eT(Fk,Uk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Au)}catch(t){console.warn(t)}}}}).catch(n=>{throw rs.create("idb-open",{originalErrorMessage:n.message})})),em}async function jk(n){try{const t=(await nT()).transaction(Au),r=await t.objectStore(Au).get(rT(n));return await t.done,r}catch(e){if(e instanceof Xn)_i.warn(e.message);else{const t=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(t.message)}}}async function SE(n,e){try{const r=(await nT()).transaction(Au,"readwrite");await r.objectStore(Au).put(e,rT(n)),await r.done}catch(t){if(t instanceof Xn)_i.warn(t.message);else{const r=rs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_i.warn(r.message)}}}function rT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=1024,zk=30*24*60*60*1e3;class $k{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=RE();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const h=new Date(l.date).valueOf();return Date.now()-h<=zk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_i.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=RE(),{heartbeatsToSend:r,unsentEntries:s}=Wk(this._heartbeatsCache.heartbeats),a=Kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return _i.warn(t),""}}}function RE(){return new Date().toISOString().substring(0,10)}function Wk(n,e=Bk){const t=[];let r=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),AE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),AE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q0()?Y0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return SE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return SE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function AE(n){return Kh(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(n){Qn(new Mn("platform-logger",e=>new sk(e),"PRIVATE")),Qn(new Mn("heartbeat",e=>new $k(e),"PRIVATE")),sn(Cm,IE,n),sn(Cm,IE,"esm2017"),sn("fire-js","")}Hk("");var Gk="firebase",Kk="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(Gk,Kk,"app");const iT="@firebase/installations",yg="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1e4,oT=`w:${yg}`,aT="FIS_v2",Qk="https://firebaseinstallations.googleapis.com/v1",Yk=60*60*1e3,Xk="installations",Jk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},so=new _o(Xk,Jk,Zk);function lT(n){return n instanceof Xn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT({projectId:n}){return`${Qk}/projects/${n}/installations`}function cT(n){return{token:n.token,requestStatus:2,expiresIn:tP(n.expiresIn),creationTime:Date.now()}}async function hT(n,e){const r=(await e.json()).error;return so.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function eP(n,{refreshToken:e}){const t=dT(n);return t.append("Authorization",nP(e)),t}async function fT(n){const e=await n();return e.status>=500&&e.status<600?n():e}function tP(n){return Number(n.replace("s","000"))}function nP(n){return`${aT} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=uT(n),s=dT(n),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={fid:t,authVersion:aT,appId:n.appId,sdkVersion:oT},h={method:"POST",headers:s,body:JSON.stringify(l)},f=await fT(()=>fetch(r,h));if(f.ok){const p=await f.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:cT(p.authToken)}}else throw await hT("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=/^[cdef][\w-]{21}$/,Am="";function oP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=aP(n);return sP.test(t)?t:Am}catch{return Am}}function aP(n){return iP(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Map;function gT(n,e){const t=bd(n);_T(t,e),lP(t,e)}function _T(n,e){const t=mT.get(n);if(t)for(const r of t)r(e)}function lP(n,e){const t=uP();t&&t.postMessage({key:n,fid:e}),cP()}let Js=null;function uP(){return!Js&&"BroadcastChannel"in self&&(Js=new BroadcastChannel("[Firebase] FID Change"),Js.onmessage=n=>{_T(n.data.key,n.data.fid)}),Js}function cP(){mT.size===0&&Js&&(Js.close(),Js=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="firebase-installations-database",dP=1,oo="firebase-installations-store";let tm=null;function vg(){return tm||(tm=eT(hP,dP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(oo)}}})),tm}async function Zh(n,e){const t=bd(n),s=(await vg()).transaction(oo,"readwrite"),a=s.objectStore(oo),l=await a.get(t);return await a.put(e,t),await s.done,(!l||l.fid!==e.fid)&&gT(n,e.fid),e}async function yT(n){const e=bd(n),r=(await vg()).transaction(oo,"readwrite");await r.objectStore(oo).delete(e),await r.done}async function Ld(n,e){const t=bd(n),s=(await vg()).transaction(oo,"readwrite"),a=s.objectStore(oo),l=await a.get(t),h=e(l);return h===void 0?await a.delete(t):await a.put(h,t),await s.done,h&&(!l||l.fid!==h.fid)&&gT(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(n){let e;const t=await Ld(n.appConfig,r=>{const s=fP(r),a=pP(n,s);return e=a.registrationPromise,a.installationEntry});return t.fid===Am?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function fP(n){const e=n||{fid:oP(),registrationStatus:0};return vT(e)}function pP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(so.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mP(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gP(n)}:{installationEntry:e}}async function mP(n,e){try{const t=await rP(n,e);return Zh(n.appConfig,t)}catch(t){throw lT(t)&&t.customData.serverCode===409?await yT(n.appConfig):await Zh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function gP(n){let e=await kE(n.appConfig);for(;e.registrationStatus===1;)await pT(100),e=await kE(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Eg(n);return r||t}return e}function kE(n){return Ld(n,e=>{if(!e)throw so.create("installation-not-found");return vT(e)})}function vT(n){return _P(n)?{fid:n.fid,registrationStatus:0}:n}function _P(n){return n.registrationStatus===1&&n.registrationTime+sT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP({appConfig:n,heartbeatServiceProvider:e},t){const r=vP(n,t),s=eP(n,t),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={installation:{sdkVersion:oT,appId:n.appId}},h={method:"POST",headers:s,body:JSON.stringify(l)},f=await fT(()=>fetch(r,h));if(f.ok){const p=await f.json();return cT(p)}else throw await hT("Generate Auth Token",f)}function vP(n,{fid:e}){return`${uT(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(n,e=!1){let t;const r=await Ld(n.appConfig,a=>{if(!ET(a))throw so.create("not-registered");const l=a.authToken;if(!e&&TP(l))return a;if(l.requestStatus===1)return t=EP(n,e),a;{if(!navigator.onLine)throw so.create("app-offline");const h=CP(a);return t=wP(n,h),h}});return t?await t:r.authToken}async function EP(n,e){let t=await PE(n.appConfig);for(;t.authToken.requestStatus===1;)await pT(100),t=await PE(n.appConfig);const r=t.authToken;return r.requestStatus===0?wg(n,e):r}function PE(n){return Ld(n,e=>{if(!ET(e))throw so.create("not-registered");const t=e.authToken;return SP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wP(n,e){try{const t=await yP(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Zh(n.appConfig,r),t}catch(t){if(lT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await yT(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zh(n.appConfig,r)}throw t}}function ET(n){return n!==void 0&&n.registrationStatus===2}function TP(n){return n.requestStatus===2&&!IP(n)}function IP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Yk}function CP(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function SP(n){return n.requestStatus===1&&n.requestTime+sT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(n){const e=n,{installationEntry:t,registrationPromise:r}=await Eg(e);return r?r.catch(console.error):wg(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(n,e=!1){const t=n;return await kP(t),(await wg(t,e)).token}async function kP(n){const{registrationPromise:e}=await Eg(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(n){if(!n||!n.options)throw nm("App Configuration");if(!n.name)throw nm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw nm(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function nm(n){return so.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="installations",NP="installations-internal",xP=n=>{const e=n.getProvider("app").getImmediate(),t=PP(e),r=Ii(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DP=n=>{const e=n.getProvider("app").getImmediate(),t=Ii(e,wT).getImmediate();return{getId:()=>RP(t),getToken:s=>AP(t,s)}};function OP(){Qn(new Mn(wT,xP,"PUBLIC")),Qn(new Mn(NP,DP,"PRIVATE"))}OP();sn(iT,yg);sn(iT,yg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="analytics",bP="firebase_id",LP="origin",MP=60*1e3,VP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new $u("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new _o("analytics","Analytics",FP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(n){if(!n.startsWith(Tg)){const e=Ln.create("invalid-gtag-resource",{gtagURL:n});return Sn.warn(e.message),""}return n}function TT(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function jP(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function BP(n,e){const t=jP("firebase-js-sdk-policy",{createScriptURL:UP}),r=document.createElement("script"),s=`${Tg}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function zP(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $P(n,e,t,r,s,a){const l=r[s];try{if(l)await e[l];else{const f=(await TT(t)).find(p=>p.measurementId===s);f&&await e[f.appId]}}catch(h){Sn.error(h)}n("config",s,a)}async function WP(n,e,t,r,s){try{let a=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const h=await TT(t);for(const f of l){const p=h.find(E=>E.measurementId===f),y=p&&e[p.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,s||{})}catch(a){Sn.error(a)}}function qP(n,e,t,r){async function s(a,...l){try{if(a==="event"){const[h,f]=l;await WP(n,e,t,h,f)}else if(a==="config"){const[h,f]=l;await $P(n,e,t,r,h,f)}else if(a==="consent"){const[h,f]=l;n("consent",h,f)}else if(a==="get"){const[h,f,p]=l;n("get",h,f,p)}else if(a==="set"){const[h]=l;n("set",h)}else n(a,...l)}catch(h){Sn.error(h)}}return s}function HP(n,e,t,r,s){let a=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=qP(a,n,e,t),{gtagCore:a,wrappedGtag:window[s]}}function GP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tg)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=30,QP=1e3;class YP{constructor(e={},t=QP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const IT=new YP;function XP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function JP(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:XP(r)},a=VP.replace("{app-id}",t),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();!((e=f.error)===null||e===void 0)&&e.message&&(h=f.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function ZP(n,e=IT,t){const{appId:r,apiKey:s,measurementId:a}=n.options;if(!r)throw Ln.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw Ln.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new n1;return setTimeout(async()=>{h.abort()},MP),CT({appId:r,apiKey:s,measurementId:a},l,h,e)}async function CT(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=IT){var a;const{appId:l,measurementId:h}=n;try{await e1(r,e)}catch(f){if(h)return Sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:h};throw f}try{const f=await JP(n);return s.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!t1(p)){if(s.deleteThrottleMetadata(l),h)return Sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:h};throw f}const y=Number((a=p==null?void 0:p.customData)===null||a===void 0?void 0:a.httpStatus)===503?vE(t,s.intervalMillis,KP):vE(t,s.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return s.setThrottleMetadata(l,E),Sn.debug(`Calling attemptFetch again in ${y} millis`),CT(n,E,r,s)}}function e1(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(a),r(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function t1(n){if(!(n instanceof Xn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class n1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function r1(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const a=await e,l=Object.assign(Object.assign({},r),{send_to:a});n("event",t,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(){if(Q0())try{await Y0()}catch(n){return Sn.warn(Ln.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Sn.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function s1(n,e,t,r,s,a,l){var h;const f=ZP(n);f.then(C=>{t[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&Sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Sn.error(C)),e.push(f);const p=i1().then(C=>{if(C)return r.getId()}),[y,E]=await Promise.all([f,p]);GP(a)||BP(a,y.measurementId),s("js",new Date);const w=(h=l==null?void 0:l.config)!==null&&h!==void 0?h:{};return w[LP]="firebase",w.update=!0,E!=null&&(w[bP]=E),s("config",y.measurementId,w),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.app=e}_delete(){return delete mu[this.app.options.appId],Promise.resolve()}}let mu={},NE=[];const xE={};let rm="dataLayer",a1="gtag",DE,ST,OE=!1;function l1(){const n=[];if(H0()&&n.push("This is a browser extension environment."),RA()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Ln.create("invalid-analytics-context",{errorInfo:e});Sn.warn(t.message)}}function u1(n,e,t){l1();const r=n.options.appId;if(!r)throw Ln.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(mu[r]!=null)throw Ln.create("already-exists",{id:r});if(!OE){zP(rm);const{wrappedGtag:a,gtagCore:l}=HP(mu,NE,xE,rm,a1);ST=a,DE=l,OE=!0}return mu[r]=s1(n,NE,xE,e,DE,rm,t),new o1(n)}function c1(n=Wu()){n=Ge(n);const e=Ii(n,ed);return e.isInitialized()?e.getImmediate():h1(n)}function h1(n,e={}){const t=Ii(n,ed);if(t.isInitialized()){const s=t.getImmediate();if(xa(e,t.getOptions()))return s;throw Ln.create("already-initialized")}return t.initialize({options:e})}function d1(n,e,t,r){n=Ge(n),r1(ST,mu[n.app.options.appId],e,t,r).catch(s=>Sn.error(s))}const bE="@firebase/analytics",LE="0.10.10";function f1(){Qn(new Mn(ed,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return u1(r,s,t)},"PUBLIC")),Qn(new Mn("analytics-internal",n,"PRIVATE")),sn(bE,LE),sn(bE,LE,"esm2017");function n(e){try{const t=e.getProvider(ed).getImmediate();return{logEvent:(r,s,a)=>d1(t,r,s,a)}}catch(t){throw Ln.create("interop-component-reg-failed",{reason:t})}}}f1();function Ig(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function RT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p1=RT,AT=new _o("auth","Firebase",RT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new $u("@firebase/auth");function m1(n,...e){td.logLevel<=Oe.WARN&&td.warn(`Auth (${ms}): ${n}`,...e)}function bh(n,...e){td.logLevel<=Oe.ERROR&&td.error(`Auth (${ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,...e){throw Sg(n,...e)}function _r(n,...e){return Sg(n,...e)}function Cg(n,e,t){const r=Object.assign(Object.assign({},p1()),{[e]:t});return new _o("auth","Firebase",r).create(e,{appName:n.name})}function fi(n){return Cg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function g1(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yn(n,"argument-error"),Cg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return AT.create(n,...e)}function Ee(n,e,...t){if(!n)throw Sg(e,...t)}function ui(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bh(e),new Error(e)}function yi(n,e){n||ui(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _1(){return ME()==="http:"||ME()==="https:"}function ME(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_1()||H0()||"connection"in navigator)?navigator.onLine:!0}function v1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.shortDelay=e,this.longDelay=t,yi(t>e,"Short delay should be less than long delay!"),this.isMobile=gg()||G0()}get(){return y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e){yi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new qu(3e4,6e4);function gs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ci(n,e,t,r,s={}){return PT(n,s,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const h=Ga(Object.assign({key:n.config.apiKey},l)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:f},a);return IA()||(p.referrerPolicy="no-referrer"),kT.fetch()(NT(n,n.config.apiHost,t,h),p)})}async function PT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},E1),e);try{const s=new I1(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ch(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const h=a.ok?l.errorMessage:l.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ch(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw Ch(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw Ch(n,"user-disabled",l);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Cg(n,y,p);Yn(n,y)}}catch(s){if(s instanceof Xn)throw s;Yn(n,"network-request-failed",{message:String(s)})}}async function Hu(n,e,t,r,s={}){const a=await Ci(n,e,t,r,s);return"mfaPendingCredential"in a&&Yn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function NT(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Rg(n.config,s):`${n.config.apiScheme}://${s}`}function T1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),w1.get())})}}function Ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=_r(n,e,r);return s.customData._tokenResponse=t,s}function VE(n){return n!==void 0&&n.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return T1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S1(n,e){return Ci(n,"GET","/v2/recaptchaConfig",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return Ci(n,"POST","/v1/accounts:delete",e)}async function xT(n,e){return Ci(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A1(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),s=Ag(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:gu(im(s.auth_time)),issuedAtTime:gu(im(s.iat)),expirationTime:gu(im(s.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function im(n){return Number(n)*1e3}function Ag(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(bh("Failed to decode base64 JWT payload"),null)}catch(s){return bh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function FE(n){const e=Ag(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xn&&k1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function k1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Oa(n,xT(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?DT(a.providerUserInfo):[],h=x1(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Pm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function N1(n){const e=Ge(n);await nd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x1(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DT(n){return n.map(e=>{var{providerId:t}=e,r=Ig(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(n,e){const t=await PT(n,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=NT(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",kT.fetch()(l,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function O1(n,e){return Ci(n,"POST","/v2/accounts:revokeToken",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=FE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await D1(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,l=new Ia;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ia,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Pm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A1(this,e)}reload(){return N1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await nd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pr(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await Oa(this,R1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,l,h,f,p,y;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,C=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,P=(l=t.photoURL)!==null&&l!==void 0?l:void 0,V=(h=t.tenantId)!==null&&h!==void 0?h:void 0,b=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,q=(p=t.createdAt)!==null&&p!==void 0?p:void 0,Q=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:se,isAnonymous:Se,providerData:ve,stsTokenManager:D}=t;Ee(te&&D,e,"internal-error");const S=Ia.fromJSON(this.name,D);Ee(typeof te=="string",e,"internal-error"),Yi(E,e.name),Yi(w,e.name),Ee(typeof se=="boolean",e,"internal-error"),Ee(typeof Se=="boolean",e,"internal-error"),Yi(C,e.name),Yi(P,e.name),Yi(V,e.name),Yi(b,e.name),Yi(q,e.name),Yi(Q,e.name);const A=new ci({uid:te,auth:e,email:w,emailVerified:se,displayName:E,isAnonymous:Se,photoURL:P,phoneNumber:C,tenantId:V,stsTokenManager:S,createdAt:q,lastLoginAt:Q});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(x=>Object.assign({},x))),b&&(A._redirectEventId=b),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ia;s.updateFromServerResponse(t);const a=new ci({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await nd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?DT(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new Ia;h.updateFromIdToken(r);const f=new ci({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:l}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,p),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Map;function hi(n){yi(n instanceof Function,"Expected a class definition");let e=UE.get(n);return e?(yi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,UE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}OT.type="NONE";const jE=OT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ca{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Lh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Lh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ca(hi(jE),e,r);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=s[0]||hi(jE);const l=Lh(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(l);if(y){const E=ci._fromJSON(e,y);p!==a&&(h=E),a=p;break}}catch{}const f=s.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ca(a,e,r):(a=f[0],h&&await a._set(l,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new Ca(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UT(e))return"Blackberry";if(jT(e))return"Webos";if(LT(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(FT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bT(n=an()){return/firefox\//i.test(n)}function LT(n=an()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(n=an()){return/crios\//i.test(n)}function VT(n=an()){return/iemobile/i.test(n)}function FT(n=an()){return/android/i.test(n)}function UT(n=an()){return/blackberry/i.test(n)}function jT(n=an()){return/webos/i.test(n)}function kg(n=an()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function b1(n=an()){var e;return kg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L1(){return CA()&&document.documentMode===10}function BT(n=an()){return kg(n)||FT(n)||jT(n)||UT(n)||/windows phone/i.test(n)||VT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n,e=[]){let t;switch(n){case"Browser":t=BE(an());break;case"Worker":t=`${BE(an())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,h)=>{try{const f=e(a);l(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(n,e={}){return Ci(n,"GET","/v2/passwordPolicy",gs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=6;class U1{constructor(e){var t,r,s,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:F1,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,l,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zE(this),this.idTokenSubscription=new zE(this),this.beforeStateQueue=new M1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hi(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ca.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xT(this,{idToken:e}),r=await ci._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pr(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=v1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pr(this.app))return Promise.reject(fi(this));const t=e?Ge(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pr(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pr(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V1(this),t=new U1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await O1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hi(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ca.create(this,[hi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(h,this,"internal-error"),h.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&m1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _s(n){return Ge(n)}class zE{constructor(e){this.auth=e,this.observer=null,this.addObserver=OA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B1(n){Md=n}function $T(n){return Md.loadJS(n)}function z1(){return Md.recaptchaEnterpriseScript}function $1(){return Md.gapiScript}function W1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class q1{constructor(){this.enterprise=new H1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class H1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const G1="recaptcha-enterprise",WT="NO_RECAPTCHA";class K1{constructor(e){this.type=G1,this.auth=_s(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,h)=>{S1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new C1(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(f=>{h(f)})})}function s(a,l,h){const f=window.grecaptcha;VE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(WT)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new q1().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(h=>{if(!t&&VE(window.grecaptcha))s(h,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=z1();f.length!==0&&(f+=h),$T(f).then(()=>{s(h,a,l)}).catch(p=>{l(p)})}}).catch(h=>{l(h)})})}}async function $E(n,e,t,r=!1,s=!1){const a=new K1(n);let l;if(s)l=WT;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Nm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await $E(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await $E(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(n,e){const t=Ii(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(xa(a,e??{}))return s;Yn(s,"already-initialized")}return t.initialize({options:e})}function Y1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(hi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function X1(n,e,t){const r=_s(n);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=qT(e),{host:l,port:h}=J1(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${l}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),Z1()}function qT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J1(n){const e=qT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:WE(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:WE(l)}}}function WE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Z1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,t){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function eN(n,e){return Ci(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(n,e){return Hu(n,"POST","/v1/accounts:signInWithPassword",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(n,e){return Hu(n,"POST","/v1/accounts:signInWithEmailLink",gs(n,e))}async function rN(n,e){return Hu(n,"POST","/v1/accounts:signInWithEmailLink",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Pg{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ku(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ku(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,t,"signInWithPassword",tN);case"emailLink":return nN(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,r,"signUpPassword",eN);case"emailLink":return rN(e,{idToken:t,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(n,e){return Hu(n,"POST","/v1/accounts:signInWithIdp",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="http://localhost";class ao extends Pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=Ig(t,["providerId","signInMethod"]);if(!r||!s)return null;const l=new ao(r,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Sa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sa(e,t)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oN(n){const e=lu(uu(n)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(n)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||n}class Ng{constructor(e){var t,r,s,a,l,h;const f=lu(uu(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,E=sN((s=f.mode)!==null&&s!==void 0?s:null);Ee(p&&y&&E,"argument-error"),this.apiKey=p,this.operation=E,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=oN(e);try{return new Ng(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.providerId=Ka.PROVIDER_ID}static credential(e,t){return ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ng.parseLink(t);return Ee(r,"argument-error"),ku._fromEmailAndCode(e,r.code,r.tenantId)}}Ka.PROVIDER_ID="password";Ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Gu{constructor(){super("facebook.com")}static credential(e){return ao._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xi.credential(e.oauthAccessToken)}catch{return null}}}Xi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ao._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return li.credential(t,r)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Gu{constructor(){super("github.com")}static credential(e){return ao._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ji.credential(e.oauthAccessToken)}catch{return null}}}Ji.GITHUB_SIGN_IN_METHOD="github.com";Ji.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Gu{constructor(){super("twitter.com")}static credential(e,t){return ao._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zi.credential(t,r)}catch{return null}}}Zi.TWITTER_SIGN_IN_METHOD="twitter.com";Zi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(n,e){return Hu(n,"POST","/v1/accounts:signUp",gs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await ci._fromIdTokenResponse(e,r,s),l=qE(r);return new lo({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=qE(r);return new lo({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function qE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends Xn{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,rd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new rd(e,t,r,s)}}function HT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?rd._fromErrorAndOperation(n,a,e,r):a})}async function lN(n,e,t=!1){const r=await Oa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lo._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e,t=!1){const{auth:r}=n;if(pr(r.app))return Promise.reject(fi(r));const s="reauthenticate";try{const a=await Oa(n,HT(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const l=Ag(a.idToken);Ee(l,r,"internal-error");const{sub:h}=l;return Ee(n.uid===h,r,"user-mismatch"),lo._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Yn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,e,t=!1){if(pr(n.app))return Promise.reject(fi(n));const r="signIn",s=await HT(n,r,e),a=await lo._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function cN(n,e){return GT(_s(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(n){const e=_s(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hN(n,e,t){if(pr(n.app))return Promise.reject(fi(n));const r=_s(n),l=await Nm(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&KT(n),f}),h=await lo._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(h.user),h}function dN(n,e,t){return pr(n.app)?Promise.reject(fi(n)):cN(Ge(n),Ka.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&KT(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(n,e){return Ci(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ge(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await Oa(r,fN(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const h=r.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function mN(n,e,t,r){return Ge(n).onIdTokenChanged(e,t,r)}function gN(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function _N(n,e,t,r){return Ge(n).onAuthStateChanged(e,t,r)}function yN(n){return Ge(n).signOut()}const id="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(id,"1"),this.storage.removeItem(id),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=1e3,EN=10;class YT extends QT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,h,f)=>{this.notifyListeners(l,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);L1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EN):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}YT.type="LOCAL";const wN=YT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends QT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}XT.type="SESSION";const JT=XT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(l).map(async p=>p(t.origin,a)),f=await TN(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((h,f)=>{const p=Dg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(E){const w=E;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(){return window}function CN(n){Or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){return typeof Or().WorkerGlobalScope<"u"&&typeof Or().importScripts=="function"}async function SN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function AN(){return ZT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="firebaseLocalStorageDb",kN=1,sd="firebaseLocalStorage",tI="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fd(n,e){return n.transaction([sd],e?"readwrite":"readonly").objectStore(sd)}function PN(){const n=indexedDB.deleteDatabase(eI);return new Ku(n).toPromise()}function xm(){const n=indexedDB.open(eI,kN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(sd,{keyPath:tI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(sd)?e(r):(r.close(),await PN(),e(await xm()))})})}async function HE(n,e,t){const r=Fd(n,!0).put({[tI]:e,value:t});return new Ku(r).toPromise()}async function NN(n,e){const t=Fd(n,!1).get(e),r=await new Ku(t).toPromise();return r===void 0?null:r.value}function GE(n,e){const t=Fd(n,!0).delete(e);return new Ku(t).toPromise()}const xN=800,DN=3;class nI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>DN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(AN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await SN(),!this.activeServiceWorker)return;this.sender=new IN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xm();return await HE(e,id,"1"),await GE(e,id),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>HE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>NN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>GE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Fd(s,!1).getAll();return new Ku(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nI.type="LOCAL";const ON=nI;new qu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n,e){return e?hi(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends Pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bN(n){return GT(n.auth,new Og(n),n.bypassAuthState)}function LN(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),uN(t,new Og(n),n.bypassAuthState)}async function MN(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),lN(t,new Og(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:l,type:h}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bN;case"linkViaPopup":case"linkViaRedirect":return MN;case"reauthViaPopup":case"reauthViaRedirect":return LN;default:Yn(this.auth,"internal-error")}}resolve(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new qu(2e3,1e4);async function FN(n,e,t){if(pr(n.app))return Promise.reject(_r(n,"operation-not-supported-in-this-environment"));const r=_s(n);g1(n,e,xg);const s=rI(r,t);return new Zs(r,"signInViaPopup",e,s).executeNotNull()}class Zs extends iI{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Zs.currentPopupAction&&Zs.currentPopupAction.cancel(),Zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){yi(this.filter.length===1,"Popup operations only handle one event");const e=Dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VN.get())};e()}}Zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="pendingRedirect",Mh=new Map;class jN extends iI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mh.get(this.auth._key());if(!e){try{const r=await BN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mh.set(this.auth._key(),e)}return this.bypassAuthState||Mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(n,e){const t=WN(e),r=$N(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function zN(n,e){Mh.set(n._key(),e)}function $N(n){return hi(n._redirectPersistence)}function WN(n){return Lh(UN,n.config.apiKey,n.name)}async function qN(n,e,t=!1){if(pr(n.app))return Promise.reject(fi(n));const r=_s(n),s=rI(r,e),l=await new jN(r,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=10*60*1e3;class GN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_r(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HN&&this.cachedEventUids.clear(),this.cachedEventUids.has(KE(e))}saveEventToCache(e){this.cachedEventUids.add(KE(e)),this.lastProcessedEventTime=Date.now()}}function KE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(n,e={}){return Ci(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XN=/^https?/;async function JN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QN(n);for(const t of e)try{if(ZN(t))return}catch{}Yn(n,"unauthorized-domain")}function ZN(n){const e=km(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!XN.test(t))return!1;if(YN.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new qu(3e4,6e4);function QE(){const n=Or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tx(n){return new Promise((e,t)=>{var r,s,a;function l(){QE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QE(),t(_r(n,"network-request-failed"))},timeout:ex.get()})}if(!((s=(r=Or().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Or().gapi)===null||a===void 0)&&a.load)l();else{const h=W1("iframefcb");return Or()[h]=()=>{gapi.load?l():t(_r(n,"network-request-failed"))},$T(`${$1()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Vh=null,e})}let Vh=null;function nx(n){return Vh=Vh||tx(n),Vh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new qu(5e3,15e3),ix="__/auth/iframe",sx="emulator/auth/iframe",ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lx(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rg(e,sx):`https://${n.config.authDomain}/${ix}`,r={apiKey:e.apiKey,appName:n.name,v:ms},s=ax.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ga(r).slice(1)}`}async function ux(n){const e=await nx(n),t=Or().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:lx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ox,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const l=_r(n,"network-request-failed"),h=Or().setTimeout(()=>{a(l)},rx.get());function f(){Or().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hx=500,dx=600,fx="_blank",px="http://localhost";class YE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mx(n,e,t,r=hx,s=dx){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},cx),{width:r.toString(),height:s.toString(),top:a,left:l}),p=an().toLowerCase();t&&(h=MT(p)?fx:t),bT(p)&&(e=e||px,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[C,P])=>`${w}${C}=${P},`,"");if(b1(p)&&h!=="_self")return gx(e||"",h),new YE(null);const E=window.open(e||"",h,y);Ee(E,n,"popup-blocked");try{E.focus()}catch{}return new YE(E)}function gx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="__/auth/handler",yx="emulator/auth/handler",vx=encodeURIComponent("fac");async function XE(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ms,eventId:s};if(e instanceof xg){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Yh(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))l[y]=E}if(e instanceof Gu){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const h=l;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),p=f?`#${vx}=${encodeURIComponent(f)}`:"";return`${Ex(n)}?${Ga(h).slice(1)}${p}`}function Ex({config:n}){return n.emulator?Rg(n,yx):`https://${n.authDomain}/${_x}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="webStorageSupport";class wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JT,this._completeRedirectFn=qN,this._overrideRedirectResult=zN}async _openPopup(e,t,r,s){var a;yi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await XE(e,t,r,km(),s);return mx(e,l,Dg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await XE(e,t,r,km(),s);return CN(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(yi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ux(e),r=new GN(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sm,{type:sm},s=>{var a;const l=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[sm];l!==void 0&&t(!!l),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return BT()||LT()||kg()}}const Tx=wx;var JE="@firebase/auth",ZE="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sx(n){Qn(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;Ee(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zT(n)},p=new j1(r,s,a,f);return Y1(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new Mn("auth-internal",e=>{const t=_s(e.getProvider("auth").getImmediate());return(r=>new Ix(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(JE,ZE,Cx(n)),sn(JE,ZE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=5*60,Ax=q0("authIdTokenMaxAge")||Rx;let ew=null;const kx=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ax)return;const s=t==null?void 0:t.token;ew!==s&&(ew=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Px(n=Wu()){const e=Ii(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Q1(n,{popupRedirectResolver:Tx,persistence:[ON,wN,JT]}),r=q0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=kx(a.toString());gN(t,l,()=>l(t.currentUser)),mN(t,h=>l(h))}}const s=$0("auth");return s&&X1(t,`http://${s}`),t}function Nx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}B1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=_r("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Nx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sx("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",xx="storageBucket",Dx=2*60*1e3,Ox=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Xn{constructor(e,t,r=0){super(om(e),`Firebase Storage: ${t} (${om(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return om(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vr||(Vr={}));function om(n){return"storage/"+n}function bx(){const n="An unknown error occurred, please check the error payload for server response.";return new jr(Vr.UNKNOWN,n)}function Lx(){return new jr(Vr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mx(){return new jr(Vr.CANCELED,"User canceled the upload/download.")}function Vx(n){return new jr(Vr.INVALID_URL,"Invalid URL '"+n+"'.")}function Fx(n){return new jr(Vr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tw(n){return new jr(Vr.INVALID_ARGUMENT,n)}function aI(){return new jr(Vr.APP_DELETED,"The Firebase app was deleted.")}function Ux(n){return new jr(Vr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=mr.makeFromUrl(e,t)}catch{return new mr(e,"")}if(r.path==="")return r;throw Fx(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+s+l,"i"),f={bucket:1,path:3};function p(se){se.path_=decodeURIComponent(se.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${E}/${y}/b/${s}/o${w}`,"i"),P={bucket:1,path:3},V=t===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",q=new RegExp(`^https?://${V}/${s}/${b}`,"i"),te=[{regex:h,indices:f,postModify:a},{regex:C,indices:P,postModify:p},{regex:q,indices:{bucket:1,path:2},postModify:p}];for(let se=0;se<te.length;se++){const Se=te[se],ve=Se.regex.exec(e);if(ve){const D=ve[Se.indices.bucket];let S=ve[Se.indices.path];S||(S=""),r=new mr(D,S),Se.postModify(r);break}}if(r==null)throw Vx(e);return r}}class jx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(n,e,t){let r=1,s=null,a=null,l=!1,h=0;function f(){return h===2}let p=!1;function y(...b){p||(p=!0,e.apply(null,b))}function E(b){s=setTimeout(()=>{s=null,n(C,f())},b)}function w(){a&&clearTimeout(a)}function C(b,...q){if(p){w();return}if(b){w(),y.call(null,b,...q);return}if(f()||l){w(),y.call(null,b,...q);return}r<64&&(r*=2);let te;h===1?(h=2,te=0):te=(r+Math.random())*1e3,E(te)}let P=!1;function V(b){P||(P=!0,w(),!p&&(s!==null?(b||(h=2),clearTimeout(s),E(0)):b||(h=1)))}return E(0),a=setTimeout(()=>{l=!0,V(!0)},t),V}function zx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(n){return n!==void 0}function nw(n,e,t,r){if(r<e)throw tw(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw tw(`Invalid value for '${n}'. Expected ${t} or less.`)}function Wx(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var od;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(od||(od={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,t,r,s,a,l,h,f,p,y,E,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=E,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=h=>{const f=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const h=a.getErrorCode()===od.NO_ERROR,f=a.getStatus();if(!h||qx(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===od.ABORT;r(!1,new Sh(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new Sh(p,a))})},t=(r,s)=>{const a=this.resolve_,l=this.reject_,h=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());$x(f)?a(f):a()}catch(f){l(f)}else if(h!==null){const f=bx();f.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,f)):l(f)}else if(s.canceled){const f=this.appDelete_?aI():Mx();l(f)}else{const f=Lx();l(f)}};this.canceled_?t(!1,new Sh(!1,null,!0)):this.backoffId_=Bx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Gx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Kx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Yx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Xx(n,e,t,r,s,a,l=!0){const h=Wx(n.urlParams),f=n.url+h,p=Object.assign({},n.headers);return Qx(p,e),Gx(p,t),Kx(p,a),Yx(p,r),new Hx(f,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Zx(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this._service=e,t instanceof mr?this._location=t:this._location=mr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ad(e,t)}get root(){const e=new mr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zx(this._location.path)}get storage(){return this._service}get parent(){const e=Jx(this._location.path);if(e===null)return null;const t=new mr(this._location.bucket,e);return new ad(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ux(e)}}function rw(n,e){const t=e==null?void 0:e[xx];return t==null?null:mr.makeFromBucketSpec(t,n)}function eD(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:mg(s,n.app.options.projectId))}class tD{constructor(e,t,r,s,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dx,this._maxUploadRetryTime=Ox,this._requests=new Set,s!=null?this._bucket=mr.makeFromBucketSpec(s,this._host):this._bucket=rw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mr.makeFromBucketSpec(this._url,e):this._bucket=rw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ad(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new jx(aI());{const l=Xx(e,this._appId,r,s,t,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const iw="@firebase/storage",sw="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="storage";function nD(n=Wu(),e){n=Ge(n);const r=Ii(n,lI).getImmediate({identifier:e}),s=pg("storage");return s&&rD(r,...s),r}function rD(n,e,t,r={}){eD(n,e,t,r)}function iD(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new tD(t,r,s,e,ms)}function sD(){Qn(new Mn(lI,iD,"PUBLIC").setMultipleInstances(!0)),sn(iw,sw,""),sn(iw,sw,"esm2017")}sD();var ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ro,uI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function A(){}A.prototype=S.prototype,D.D=S.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,L,F){for(var k=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)k[dt-2]=arguments[dt];return S.prototype[L].apply(x,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,S,A){A||(A=0);var x=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)x[L]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(L=0;16>L;++L)x[L]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=D.g[0],A=D.g[1],L=D.g[2];var F=D.g[3],k=S+(F^A&(L^F))+x[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=F+(L^S&(A^L))+x[1]+3905402710&4294967295,F=S+(k<<12&4294967295|k>>>20),k=L+(A^F&(S^A))+x[2]+606105819&4294967295,L=F+(k<<17&4294967295|k>>>15),k=A+(S^L&(F^S))+x[3]+3250441966&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(F^A&(L^F))+x[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=F+(L^S&(A^L))+x[5]+1200080426&4294967295,F=S+(k<<12&4294967295|k>>>20),k=L+(A^F&(S^A))+x[6]+2821735955&4294967295,L=F+(k<<17&4294967295|k>>>15),k=A+(S^L&(F^S))+x[7]+4249261313&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(F^A&(L^F))+x[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=F+(L^S&(A^L))+x[9]+2336552879&4294967295,F=S+(k<<12&4294967295|k>>>20),k=L+(A^F&(S^A))+x[10]+4294925233&4294967295,L=F+(k<<17&4294967295|k>>>15),k=A+(S^L&(F^S))+x[11]+2304563134&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(F^A&(L^F))+x[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=F+(L^S&(A^L))+x[13]+4254626195&4294967295,F=S+(k<<12&4294967295|k>>>20),k=L+(A^F&(S^A))+x[14]+2792965006&4294967295,L=F+(k<<17&4294967295|k>>>15),k=A+(S^L&(F^S))+x[15]+1236535329&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(L^F&(A^L))+x[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=F+(A^L&(S^A))+x[6]+3225465664&4294967295,F=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(F^S))+x[11]+643717713&4294967295,L=F+(k<<14&4294967295|k>>>18),k=A+(F^S&(L^F))+x[0]+3921069994&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^F&(A^L))+x[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=F+(A^L&(S^A))+x[10]+38016083&4294967295,F=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(F^S))+x[15]+3634488961&4294967295,L=F+(k<<14&4294967295|k>>>18),k=A+(F^S&(L^F))+x[4]+3889429448&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^F&(A^L))+x[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=F+(A^L&(S^A))+x[14]+3275163606&4294967295,F=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(F^S))+x[3]+4107603335&4294967295,L=F+(k<<14&4294967295|k>>>18),k=A+(F^S&(L^F))+x[8]+1163531501&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^F&(A^L))+x[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=F+(A^L&(S^A))+x[2]+4243563512&4294967295,F=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(F^S))+x[7]+1735328473&4294967295,L=F+(k<<14&4294967295|k>>>18),k=A+(F^S&(L^F))+x[12]+2368359562&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(A^L^F)+x[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=F+(S^A^L)+x[8]+2272392833&4294967295,F=S+(k<<11&4294967295|k>>>21),k=L+(F^S^A)+x[11]+1839030562&4294967295,L=F+(k<<16&4294967295|k>>>16),k=A+(L^F^S)+x[14]+4259657740&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^F)+x[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=F+(S^A^L)+x[4]+1272893353&4294967295,F=S+(k<<11&4294967295|k>>>21),k=L+(F^S^A)+x[7]+4139469664&4294967295,L=F+(k<<16&4294967295|k>>>16),k=A+(L^F^S)+x[10]+3200236656&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^F)+x[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=F+(S^A^L)+x[0]+3936430074&4294967295,F=S+(k<<11&4294967295|k>>>21),k=L+(F^S^A)+x[3]+3572445317&4294967295,L=F+(k<<16&4294967295|k>>>16),k=A+(L^F^S)+x[6]+76029189&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^F)+x[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=F+(S^A^L)+x[12]+3873151461&4294967295,F=S+(k<<11&4294967295|k>>>21),k=L+(F^S^A)+x[15]+530742520&4294967295,L=F+(k<<16&4294967295|k>>>16),k=A+(L^F^S)+x[2]+3299628645&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(L^(A|~F))+x[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=F+(A^(S|~L))+x[7]+1126891415&4294967295,F=S+(k<<10&4294967295|k>>>22),k=L+(S^(F|~A))+x[14]+2878612391&4294967295,L=F+(k<<15&4294967295|k>>>17),k=A+(F^(L|~S))+x[5]+4237533241&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~F))+x[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=F+(A^(S|~L))+x[3]+2399980690&4294967295,F=S+(k<<10&4294967295|k>>>22),k=L+(S^(F|~A))+x[10]+4293915773&4294967295,L=F+(k<<15&4294967295|k>>>17),k=A+(F^(L|~S))+x[1]+2240044497&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~F))+x[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=F+(A^(S|~L))+x[15]+4264355552&4294967295,F=S+(k<<10&4294967295|k>>>22),k=L+(S^(F|~A))+x[6]+2734768916&4294967295,L=F+(k<<15&4294967295|k>>>17),k=A+(F^(L|~S))+x[13]+1309151649&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~F))+x[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=F+(A^(S|~L))+x[11]+3174756917&4294967295,F=S+(k<<10&4294967295|k>>>22),k=L+(S^(F|~A))+x[2]+718787259&4294967295,L=F+(k<<15&4294967295|k>>>17),k=A+(F^(L|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(L+(k<<21&4294967295|k>>>11))&4294967295,D.g[2]=D.g[2]+L&4294967295,D.g[3]=D.g[3]+F&4294967295}r.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var A=S-this.blockSize,x=this.B,L=this.h,F=0;F<S;){if(L==0)for(;F<=A;)s(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<S;)if(x[L++]=D.charCodeAt(F++),L==this.blockSize){s(this,x),L=0;break}}else for(;F<S;)if(x[L++]=D[F++],L==this.blockSize){s(this,x),L=0;break}}this.h=L,this.o+=S},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var A=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=A&255,A/=256;for(this.u(D),D=Array(16),S=A=0;4>S;++S)for(var x=0;32>x;x+=8)D[A++]=this.g[S]>>>x&255;return D};function a(D,S){var A=h;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=S(D)}function l(D,S){this.h=S;for(var A=[],x=!0,L=D.length-1;0<=L;L--){var F=D[L]|0;x&&F==S||(A[L]=F,x=!1)}this.g=A}var h={};function f(D){return-128<=D&&128>D?a(D,function(S){return new l([S|0],0>S?-1:0)}):new l([D|0],0>D?-1:0)}function p(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return b(p(-D));for(var S=[],A=1,x=0;D>=A;x++)S[x]=D/A|0,A*=4294967296;return new l(S,0)}function y(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return b(y(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(S,8)),x=E,L=0;L<D.length;L+=8){var F=Math.min(8,D.length-L),k=parseInt(D.substring(L,L+F),S);8>F?(F=p(Math.pow(S,F)),x=x.j(F).add(p(k))):(x=x.j(A),x=x.add(p(k)))}return x}var E=f(0),w=f(1),C=f(16777216);n=l.prototype,n.m=function(){if(V(this))return-b(this).m();for(var D=0,S=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(V(this))return"-"+b(this).toString(D);for(var S=p(Math.pow(D,6)),A=this,x="";;){var L=se(A,S).g;A=q(A,L.j(S));var F=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=L,P(A))return F+x;for(;6>F.length;)F="0"+F;x=F+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function V(D){return D.h==-1}n.l=function(D){return D=q(this,D),V(D)?-1:P(D)?0:1};function b(D){for(var S=D.g.length,A=[],x=0;x<S;x++)A[x]=~D.g[x];return new l(A,~D.h).add(w)}n.abs=function(){return V(this)?b(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0,L=0;L<=S;L++){var F=x+(this.i(L)&65535)+(D.i(L)&65535),k=(F>>>16)+(this.i(L)>>>16)+(D.i(L)>>>16);x=k>>>16,F&=65535,k&=65535,A[L]=k<<16|F}return new l(A,A[A.length-1]&-2147483648?-1:0)};function q(D,S){return D.add(b(S))}n.j=function(D){if(P(this)||P(D))return E;if(V(this))return V(D)?b(this).j(b(D)):b(b(this).j(D));if(V(D))return b(this.j(b(D)));if(0>this.l(C)&&0>D.l(C))return p(this.m()*D.m());for(var S=this.g.length+D.g.length,A=[],x=0;x<2*S;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var L=0;L<D.g.length;L++){var F=this.i(x)>>>16,k=this.i(x)&65535,dt=D.i(L)>>>16,Kt=D.i(L)&65535;A[2*x+2*L]+=k*Kt,Q(A,2*x+2*L),A[2*x+2*L+1]+=F*Kt,Q(A,2*x+2*L+1),A[2*x+2*L+1]+=k*dt,Q(A,2*x+2*L+1),A[2*x+2*L+2]+=F*dt,Q(A,2*x+2*L+2)}for(x=0;x<S;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=S;x<2*S;x++)A[x]=0;return new l(A,0)};function Q(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function te(D,S){this.g=D,this.h=S}function se(D,S){if(P(S))throw Error("division by zero");if(P(D))return new te(E,E);if(V(D))return S=se(b(D),S),new te(b(S.g),b(S.h));if(V(S))return S=se(D,b(S)),new te(b(S.g),S.h);if(30<D.g.length){if(V(D)||V(S))throw Error("slowDivide_ only works with positive integers.");for(var A=w,x=S;0>=x.l(D);)A=Se(A),x=Se(x);var L=ve(A,1),F=ve(x,1);for(x=ve(x,2),A=ve(A,2);!P(x);){var k=F.add(x);0>=k.l(D)&&(L=L.add(A),F=k),x=ve(x,1),A=ve(A,1)}return S=q(D,L.j(S)),new te(L,S)}for(L=E;0<=D.l(S);){for(A=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),F=p(A),k=F.j(S);V(k)||0<k.l(D);)A-=x,F=p(A),k=F.j(S);P(F)&&(F=w),L=L.add(F),D=q(D,k)}return new te(L,D)}n.A=function(D){return se(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)&D.i(x);return new l(A,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)|D.i(x);return new l(A,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)^D.i(x);return new l(A,this.h^D.h)};function Se(D){for(var S=D.g.length+1,A=[],x=0;x<S;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new l(A,D.h)}function ve(D,S){var A=S>>5;S%=32;for(var x=D.g.length-A,L=[],F=0;F<x;F++)L[F]=0<S?D.i(F+A)>>>S|D.i(F+A+1)<<32-S:D.i(F+A);return new l(L,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uI=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,ro=l}).apply(typeof ow<"u"?ow:typeof self<"u"?self:typeof window<"u"?window:{});var Rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cI,cu,hI,Fh,Dm,dI,fI,pI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rh=="object"&&Rh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in v))break e;v=v[U]}c=c[c.length-1],I=v[c],g=g(I),g!=I&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,I=!1,U={next:function(){if(!I&&v<c.length){var W=v++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function C(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function P(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(I,U,W){for(var re=Array(arguments.length-2),He=2;He<arguments.length;He++)re[He-2]=arguments[He];return g.prototype[U].apply(I,re)}}function V(c){const g=c.length;if(0<g){const v=Array(g);for(let I=0;I<g;I++)v[I]=c[I];return v}return[]}function b(c,g){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(f(I)){const U=c.length||0,W=I.length||0;c.length=U+W;for(let re=0;re<W;re++)c[U+re]=I[re]}else c.push(I)}}class q{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Q(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var Se=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ve(c,g,v){for(const I in c)g.call(v,c[I],I,c)}function D(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function S(c){const g={};for(const v in c)g[v]=c[v];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,g){let v,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(v in I)c[v]=I[v];for(let W=0;W<A.length;W++)v=A[W],Object.prototype.hasOwnProperty.call(I,v)&&(c[v]=I[v])}}function L(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function F(c){h.setTimeout(()=>{throw c},0)}function k(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class dt{constructor(){this.h=this.g=null}add(g,v){const I=Kt.get();I.set(g,v),this.h?this.h.next=I:this.g=I,this.h=I}}var Kt=new q(()=>new Qt,c=>c.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,ie=!1,ge=new dt,ae=()=>{const c=h.Promise.resolve(void 0);Qe=()=>{c.then(M)}};var M=()=>{for(var c;c=k();){try{c.h.call(c.g)}catch(v){F(v)}var g=Kt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};h.addEventListener("test",v,g),h.removeEventListener("test",v,g)}catch{}return c}();function Pe(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Se){e:{try{se(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Pe.aa.h.call(this)}}P(Pe,pe);var Ve={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Je(c,g,v,I,U){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!I,this.ha=U,this.key=++$e,this.da=this.fa=!1}function Nt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function zr(c){this.src=c,this.g={},this.h=0}zr.prototype.add=function(c,g,v,I,U){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var re=Si(c,g,I,U);return-1<re?(g=c[re],v||(g.fa=!1)):(g=new Je(g,this.src,W,!!I,U),g.fa=v,c.push(g)),g};function Co(c,g){var v=g.type;if(v in c.g){var I=c.g[v],U=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=U)&&Array.prototype.splice.call(I,U,1),W&&(Nt(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Si(c,g,v,I){for(var U=0;U<c.length;++U){var W=c[U];if(!W.da&&W.listener==g&&W.capture==!!v&&W.ha==I)return U}return-1}var Ts="closure_lm_"+(1e6*Math.random()|0),So={};function al(c,g,v,I,U){if(Array.isArray(g)){for(var W=0;W<g.length;W++)al(c,g[W],v,I,U);return null}return v=cl(v),c&&c[ze]?c.K(g,v,p(I)?!!I.capture:!!I,U):ll(c,g,v,!1,I,U)}function ll(c,g,v,I,U,W){if(!g)throw Error("Invalid event type");var re=p(U)?!!U.capture:!!U,He=Ao(c);if(He||(c[Ts]=He=new zr(c)),v=He.add(g,v,I,re,W),v.proxy)return v;if(I=lc(),v.proxy=I,I.src=c,I.listener=v,c.addEventListener)Ae||(U=re),U===void 0&&(U=!1),c.addEventListener(g.toString(),I,U);else if(c.attachEvent)c.attachEvent(Wr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function lc(){function c(v){return g.call(c.src,c.listener,v)}const g=ul;return c}function Ro(c,g,v,I,U){if(Array.isArray(g))for(var W=0;W<g.length;W++)Ro(c,g[W],v,I,U);else I=p(I)?!!I.capture:!!I,v=cl(v),c&&c[ze]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],v=Si(W,v,I,U),-1<v&&(Nt(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ao(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Si(g,v,I,U)),(v=-1<c?g[c]:null)&&$r(v))}function $r(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ze])Co(g.i,c);else{var v=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(v,I,c.capture):g.detachEvent?g.detachEvent(Wr(v),I):g.addListener&&g.removeListener&&g.removeListener(I),(v=Ao(g))?(Co(v,c),v.h==0&&(v.src=null,g[Ts]=null)):Nt(c)}}}function Wr(c){return c in So?So[c]:So[c]="on"+c}function ul(c,g){if(c.da)c=!0;else{g=new Pe(g,this);var v=c.listener,I=c.ha||c.src;c.fa&&$r(c),c=v.call(I,g)}return c}function Ao(c){return c=c[Ts],c instanceof zr?c:null}var ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(c){return typeof c=="function"?c:(c[ko]||(c[ko]=function(g){return c.handleEvent(g)}),c[ko])}function Ct(){G.call(this),this.i=new zr(this),this.M=this,this.F=null}P(Ct,G),Ct.prototype[ze]=!0,Ct.prototype.removeEventListener=function(c,g,v,I){Ro(this,c,g,v,I)};function St(c,g){var v,I=c.F;if(I)for(v=[];I;I=I.F)v.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var U=g;g=new pe(I,c),x(g,U)}if(U=!0,v)for(var W=v.length-1;0<=W;W--){var re=g.g=v[W];U=qr(re,I,!0,g)&&U}if(re=g.g=c,U=qr(re,I,!0,g)&&U,U=qr(re,I,!1,g)&&U,v)for(W=0;W<v.length;W++)re=g.g=v[W],U=qr(re,I,!1,g)&&U}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],I=0;I<v.length;I++)Nt(v[I]);delete c.g[g],c.h--}}this.F=null},Ct.prototype.K=function(c,g,v,I){return this.i.add(String(c),g,!1,v,I)},Ct.prototype.L=function(c,g,v,I){return this.i.add(String(c),g,!0,v,I)};function qr(c,g,v,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,W=0;W<g.length;++W){var re=g[W];if(re&&!re.da&&re.capture==v){var He=re.listener,Rt=re.ha||re.src;re.fa&&Co(c.i,re),U=He.call(Rt,I)!==!1&&U}}return U&&!I.defaultPrevented}function hl(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function Ri(c){c.g=hl(()=>{c.g=null,c.i&&(c.i=!1,Ri(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Is extends G{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(c){G.call(this),this.h=c,this.g={}}P(Cs,G);var dl=[];function fl(c){ve(c.g,function(g,v){this.g.hasOwnProperty(v)&&$r(g)},c),c.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),fl(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pl=h.JSON.stringify,ml=h.JSON.parse,gl=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function Ss(){}Ss.prototype.h=null;function Po(c){return c.h||(c.h=c.i())}function No(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){pe.call(this,"d")}P(Tr,pe);function xo(){pe.call(this,"c")}P(xo,pe);var Ir={},_l=null;function Rs(){return _l=_l||new Ct}Ir.La="serverreachability";function yl(c){pe.call(this,Ir.La,c)}P(yl,pe);function Hr(c){const g=Rs();St(g,new yl(g))}Ir.STAT_EVENT="statevent";function vl(c,g){pe.call(this,Ir.STAT_EVENT,c),this.stat=g}P(vl,pe);function ft(c){const g=Rs();St(g,new vl(g,c))}Ir.Ma="timingevent";function Do(c,g){pe.call(this,Ir.Ma,c),this.size=g}P(Do,pe);function Jn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function ks(c,g,v,I,U,W){c.info(function(){if(c.g)if(W)for(var re="",He=W.split("&"),Rt=0;Rt<He.length;Rt++){var Fe=He[Rt].split("=");if(1<Fe.length){var xt=Fe[0];Fe=Fe[1];var yt=xt.split("_");re=2<=yt.length&&yt[1]=="type"?re+(xt+"="+Fe+"&"):re+(xt+"=redacted&")}}else re=null;else re=W;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+g+`
`+v+`
`+re})}function Oo(c,g,v,I,U,W,re){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+g+`
`+v+`
`+W+" "+re})}function Zn(c,g,v,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+vf(c,v)+(I?" "+I:"")})}function El(c,g){c.info(function(){return"TIMEOUT: "+g})}As.prototype.info=function(){};function vf(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var I=v[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var W=U[0];if(W!="noop"&&W!="stop"&&W!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return pl(v)}catch{return g}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},er;function Ps(){}P(Ps,Ss),Ps.prototype.g=function(){return new XMLHttpRequest},Ps.prototype.i=function(){return{}},er=new Ps;function tr(c,g,v,I){this.j=c,this.i=g,this.l=v,this.R=I||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var wl={},Lo={};function Mo(c,g,v){c.L=1,c.v=xi(kn(g)),c.m=v,c.P=!0,Tl(c,null)}function Tl(c,g){c.F=Date.now(),Ze(c),c.A=kn(c.v);var v=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Oi(v.i,"t",I),c.C=0,v=c.j.J,c.h=new cc,c.g=kc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new Is(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(dl[0]=U.toString()),U=dl);for(var W=0;W<U.length;W++){var re=al(v,U[W],I||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Hr(),ks(c.i,c.u,c.A,c.l,c.R,c.m)}tr.prototype.ca=function(c){c=c.target;const g=this.M;g&&pn(c)==3?g.j():this.Y(c)},tr.prototype.Y=function(c){try{if(c==this.g)e:{const yt=pn(this.g);var g=this.g.Ba();const jn=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||yt!=4||g==7||(g==8||0>=jn?Hr(3):Hr(2)),Ns(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var I=kl(this.g);c="";var U=I.length,W=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Ai(this);var re="";break t}this.h.i=new h.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==U-1)});I.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Oo(this.i,this.u,this.A,this.l,this.R,yt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var He,Rt=this.g;if((He=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(He)){var Fe=He;break t}}Fe=null}if(v=Fe)Zn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Il(this,v);else{this.o=!1,this.s=3,ft(12),Fn(this),Ai(this);break e}}if(this.P){v=!0;let Nn;for(;!this.J&&this.C<re.length;)if(Nn=Ef(this,re),Nn==Lo){yt==4&&(this.s=4,ft(14),v=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==wl){this.s=4,ft(15),Zn(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Zn(this.i,this.l,Nn,null),Il(this,Nn);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||re.length!=0||this.h.h||(this.s=1,ft(16),v=!1),this.o=this.o&&v,!v)Zn(this.i,this.l,re,"[Invalid Chunked Response]"),Fn(this),Ai(this);else if(0<re.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Nl(xt),xt.M=!0,ft(11))}}else Zn(this.i,this.l,re,null),Il(this,re);yt==4&&Fn(this),this.o&&!this.J&&(yt==4?Go(this.j,this):(this.o=!1,Ze(this)))}else zo(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Fn(this),Ai(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ef(c,g){var v=c.C,I=g.indexOf(`
`,v);return I==-1?Lo:(v=Number(g.substring(v,I)),isNaN(v)?wl:(I+=1,I+v>g.length?Lo:(g=g.slice(I,I+v),c.C=I+v,g)))}tr.prototype.cancel=function(){this.J=!0,Fn(this)};function Ze(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Jn(w(c.ba,c),g)}function Ns(c){c.B&&(h.clearTimeout(c.B),c.B=null)}tr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(El(this.i,this.A),this.L!=2&&(Hr(),ft(17)),Fn(this),this.s=2,Ai(this)):dc(this,this.S-c)};function Ai(c){c.j.G==0||c.J||Go(c.j,c)}function Fn(c){Ns(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,fl(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Il(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||un(v.h,c))){if(!c.K&&un(v.h,c)&&v.G==3){try{var I=v.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Ho(v),or(v);else break e;qo(v),ft(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Jn(w(v.Za,v),6e3));if(1>=pc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Xr(v,11)}else if((c.K||v.g==c)&&Ho(v),!Q(g))for(U=v.Da.g.parse(g),g=0;g<U.length;g++){let Fe=U[g];if(v.T=Fe[0],Fe=Fe[1],v.G==2)if(Fe[0]=="c"){v.K=Fe[1],v.ia=Fe[2];const xt=Fe[3];xt!=null&&(v.la=xt,v.j.info("VER="+v.la));const yt=Fe[4];yt!=null&&(v.Aa=yt,v.j.info("SVER="+v.Aa));const jn=Fe[5];jn!=null&&typeof jn=="number"&&0<jn&&(I=1.5*jn,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const Nn=c.g;if(Nn){const Vs=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vs){var W=I.h;W.g||Vs.indexOf("spdy")==-1&&Vs.indexOf("quic")==-1&&Vs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Cl(W,W.h),W.h=null))}if(I.D){const Qo=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(I.ya=Qo,Ye(I.I,I.D,Qo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var re=c;if(I.qa=Ac(I,I.J?I.ia:null,I.W),re.K){mc(I.h,re);var He=re,Rt=I.L;Rt&&(He.I=Rt),He.B&&(Ns(He),Ze(He)),I.g=re}else Ms(I);0<v.i.length&&Ar(v)}else Fe[0]!="stop"&&Fe[0]!="close"||Xr(v,7);else v.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Xr(v,7):Bt(v):Fe[0]!="noop"&&v.l&&v.l.ta(Fe),v.v=0)}}Hr(4)}catch{}}var fc=class{constructor(c,g){this.g=c,this.map=g}};function xs(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function An(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pc(c){return c.h?1:c.g?c.g.size:0}function un(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Cl(c,g){c.g?c.g.add(g):c.h=g}function mc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}xs.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return V(c.i)}function Vo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,I=0;I<v;I++)g.push(c[I]);return g}g=[],v=0;for(I in c)g[v++]=c[I];return g}function Fo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const I in c)g[v++]=I;return g}}}function ki(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Fo(c),I=Vo(c),U=I.length,W=0;W<U;W++)g.call(void 0,I[W],v&&v[W],c)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var I=c[v].indexOf("="),U=null;if(0<=I){var W=c[v].substring(0,I);U=c[v].substring(I+1)}else W=c[v];g(W,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Gr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Gr){this.h=c.h,Os(this,c.j),this.o=c.o,this.g=c.g,Pi(this,c.s),this.l=c.l;var g=c.i,v=new Cr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Ni(this,v),this.m=c.m}else c&&(g=String(c).match(Ds))?(this.h=!1,Os(this,g[1]||"",!0),this.o=Le(g[2]||""),this.g=Le(g[3]||"",!0),Pi(this,g[4]),this.l=Le(g[5]||"",!0),Ni(this,g[6]||"",!0),this.m=Le(g[7]||"")):(this.h=!1,this.i=new Cr(null,this.h))}Gr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Di(g,Uo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Di(g,Uo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Di(v,v.charAt(0)=="/"?vc:yc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Di(v,Sl)),c.join("")};function kn(c){return new Gr(c)}function Os(c,g,v){c.j=v?Le(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Pi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ni(c,g,v){g instanceof Cr?(c.i=g,Sr(c.i,c.h)):(v||(g=Di(g,Ec)),c.i=new Cr(g,c.h))}function Ye(c,g,v){c.i.set(g,v)}function xi(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Le(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Di(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,_c),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _c(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Uo=/[#\/\?@]/g,yc=/[#\?:]/g,vc=/[#\?]/g,Ec=/[#\?@]/g,Sl=/#/g;function Cr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function jt(c){c.g||(c.g=new Map,c.h=0,c.i&&wf(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Cr.prototype,n.add=function(c,g){jt(this),this.i=null,c=Un(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function nr(c,g){jt(c),g=Un(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function rr(c,g){return jt(c),g=Un(c,g),c.g.has(g)}n.forEach=function(c,g){jt(this),this.g.forEach(function(v,I){v.forEach(function(U){c.call(g,U,I,this)},this)},this)},n.na=function(){jt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let I=0;I<g.length;I++){const U=c[I];for(let W=0;W<U.length;W++)v.push(g[I])}return v},n.V=function(c){jt(this);let g=[];if(typeof c=="string")rr(this,c)&&(g=g.concat(this.g.get(Un(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return jt(this),this.i=null,c=Un(this,c),rr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Oi(c,g,v){nr(c,g),0<v.length&&(c.i=null,c.g.set(Un(c,g),V(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var I=g[v];const W=encodeURIComponent(String(I)),re=this.V(I);for(I=0;I<re.length;I++){var U=W;re[I]!==""&&(U+="="+encodeURIComponent(String(re[I]))),c.push(U)}}return this.i=c.join("&")};function Un(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Sr(c,g){g&&!c.j&&(jt(c),c.i=null,c.g.forEach(function(v,I){var U=I.toLowerCase();I!=U&&(nr(this,I),Oi(this,U,v))},c)),c.j=g}function Tf(c,g){const v=new As;if(h.Image){const I=new Image;I.onload=C(fn,v,"TestLoadImage: loaded",!0,g,I),I.onerror=C(fn,v,"TestLoadImage: error",!1,g,I),I.onabort=C(fn,v,"TestLoadImage: abort",!1,g,I),I.ontimeout=C(fn,v,"TestLoadImage: timeout",!1,g,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function wc(c,g){const v=new As,I=new AbortController,U=setTimeout(()=>{I.abort(),fn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(U),W.ok?fn(v,"TestPingServer: ok",!0,g):fn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),fn(v,"TestPingServer: error",!1,g)})}function fn(c,g,v,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(v)}catch{}}function If(){this.g=new gl}function Tc(c,g,v){const I=v||"";try{ki(c,function(U,W){let re=U;p(U)&&(re=pl(U)),g.push(I+W+"="+encodeURIComponent(re))})}catch(U){throw g.push(I+"type="+encodeURIComponent("_badmap")),U}}function Kr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Kr,Ss),Kr.prototype.g=function(){return new bs(this.l,this.j)},Kr.prototype.i=function(c){return function(){return c}}({});function bs(c,g){Ct.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(bs,Ct),n=bs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,sr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ir(this):sr(this),this.readyState==3&&Ic(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,ir(this))},n.Qa=function(c){this.g&&(this.response=c,ir(this))},n.ga=function(){this.g&&ir(this)};function ir(c){c.readyState=4,c.l=null,c.j=null,c.v=null,sr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function sr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Qr(c){let g="";return ve(c,function(v,I){g+=I,g+=":",g+=v,g+=`\r
`}),g}function bi(c,g,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=Qr(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ye(c,g,v))}function st(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(st,Ct);var Cf=/^https?$/i,Rl=["POST","PUT"];n=st.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():er.g(),this.v=this.o?Po(this.o):Po(er),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){Ls(this,W);return}if(c=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)v.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())v.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),U=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Rl,g,void 0))||I||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,re]of v)this.g.setRequestHeader(W,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bo(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){Ls(this,W)}};function Ls(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,jo(c),Pn(c)}function jo(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),Pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Al(this):this.bb())},n.bb=function(){Al(this)};function Al(c){if(c.h&&typeof l<"u"&&(!c.v[1]||pn(c)!=4||c.Z()!=2)){if(c.u&&pn(c)==4)hl(c.Ea,0,c);else if(St(c,"readystatechange"),pn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var I;if(I=re===0){var U=String(c.D).match(Ds)[1]||null;!U&&h.self&&h.self.location&&(U=h.self.location.protocol.slice(0,-1)),I=!Cf.test(U?U.toLowerCase():"")}v=I}if(v)St(c,"complete"),St(c,"success");else{c.m=6;try{var W=2<pn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",jo(c)}}finally{Pn(c)}}}}function Pn(c,g){if(c.g){Bo(c);const v=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||St(c,"ready");try{v.onreadystatechange=I}catch{}}}function Bo(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function pn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ml(g)}};function kl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zo(c){const g={};c=(c.g&&2<=pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(Q(c[I]))continue;var v=L(c[I]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=g[U]||[];g[U]=W,W.push(v)}D(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Pl(c){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rr("baseRetryDelayMs",5e3,c),this.cb=Rr("retryDelaySeedMs",1e4,c),this.Wa=Rr("forwardChannelMaxRetries",2,c),this.wa=Rr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new xs(c&&c.concurrentRequestLimit),this.Da=new If,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,I){ft(0),this.W=c,this.H=g||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=Ac(this,null,this.W),Ar(this)};function Bt(c){if($o(c),c.G==3){var g=c.U++,v=kn(c.I);if(Ye(v,"SID",c.K),Ye(v,"RID",g),Ye(v,"TYPE","terminate"),Yr(c,v),g=new tr(c,c.j,g),g.L=2,g.v=xi(kn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=g.v,v=!0),v||(g.g=kc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}Rc(c)}function or(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function $o(c){or(c),c.u&&(h.clearTimeout(c.u),c.u=null),Ho(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function Ar(c){if(!An(c.h)&&!c.s){c.s=!0;var g=c.Ga;Qe||ae(),ie||(Qe(),ie=!0),ge.add(g,c),c.B=0}}function Sf(c,g){return pc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Jn(w(c.Ga,c,g),Sc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new tr(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),x(W,this.S)):W=this.S),this.m!==null||this.O||(U.H=W,W=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Li(this,U,g),v=kn(this.I),Ye(v,"RID",c),Ye(v,"CVER",22),this.D&&Ye(v,"X-HTTP-Session-Id",this.D),Yr(this,v),W&&(this.O?g="headers="+encodeURIComponent(String(Qr(W)))+"&"+g:this.m&&bi(v,this.m,W)),Cl(this.h,U),this.Ua&&Ye(v,"TYPE","init"),this.P?(Ye(v,"$req",g),Ye(v,"SID","null"),U.T=!0,Mo(U,v,null)):Mo(U,v,g),this.G=2}}else this.G==3&&(c?Wo(this,c):this.i.length==0||An(this.h)||Wo(this))};function Wo(c,g){var v;g?v=g.l:v=c.U++;const I=kn(c.I);Ye(I,"SID",c.K),Ye(I,"RID",v),Ye(I,"AID",c.T),Yr(c,I),c.m&&c.o&&bi(I,c.m,c.o),v=new tr(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Li(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Cl(c.h,v),Mo(v,I,g)}function Yr(c,g){c.H&&ve(c.H,function(v,I){Ye(g,I,v)}),c.l&&ki({},function(v,I){Ye(g,I,v)})}function Li(c,g,v){v=Math.min(c.i.length,v);var I=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let W=-1;for(;;){const re=["count="+v];W==-1?0<v?(W=U[0].g,re.push("ofs="+W)):W=0:re.push("ofs="+W);let He=!0;for(let Rt=0;Rt<v;Rt++){let Fe=U[Rt].g;const xt=U[Rt].map;if(Fe-=W,0>Fe)W=Math.max(0,U[Rt].g-100),He=!1;else try{Tc(xt,re,"req"+Fe+"_")}catch{I&&I(xt)}}if(He){I=re.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,I}function Ms(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Qe||ae(),ie||(Qe(),ie=!0),ge.add(g,c),c.v=0}}function qo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Jn(w(c.Fa,c),Sc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Jn(w(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),or(this),Cc(this))};function Nl(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Cc(c){c.g=new tr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=kn(c.qa);Ye(g,"RID","rpc"),Ye(g,"SID",c.K),Ye(g,"AID",c.T),Ye(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(g,"TO",c.ja),Ye(g,"TYPE","xmlhttp"),Yr(c,g),c.m&&c.o&&bi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=xi(kn(g)),v.m=null,v.P=!0,Tl(v,c)}n.Za=function(){this.C!=null&&(this.C=null,or(this),qo(this),ft(19))};function Ho(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function Go(c,g){var v=null;if(c.g==g){Ho(c),Nl(c),c.g=null;var I=2}else if(un(c.h,g))v=g.D,mc(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;I=Rs(),St(I,new Do(I,v)),Ar(c)}else Ms(c);else if(U=g.s,U==3||U==0&&0<g.X||!(I==1&&Sf(c,g)||I==2&&qo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),U){case 1:Xr(c,5);break;case 4:Xr(c,10);break;case 3:Xr(c,6);break;default:Xr(c,2)}}}function Sc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Xr(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),I=c.Xa;const U=!I;I=new Gr(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Os(I,"https"),xi(I),U?Tf(I.toString(),v):wc(I.toString(),v)}else ft(2);c.G=0,c.l&&c.l.sa(g),Rc(c),$o(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Rc(c){if(c.G=0,c.ka=[],c.l){const g=gc(c.h);(g.length!=0||c.i.length!=0)&&(b(c.ka,g),b(c.ka,c.i),c.h.i.length=0,V(c.i),c.i.length=0),c.l.ra()}}function Ac(c,g,v){var I=v instanceof Gr?kn(v):new Gr(v);if(I.g!="")g&&(I.g=g+"."+I.g),Pi(I,I.s);else{var U=h.location;I=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var W=new Gr(null);I&&Os(W,I),g&&(W.g=g),U&&Pi(W,U),v&&(W.l=v),I=W}return v=c.D,g=c.ya,v&&g&&Ye(I,v,g),Ye(I,"VER",c.la),Yr(c,I),I}function kc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new st(new Kr({eb:v})):new st(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xl(){}n=xl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ko(){}Ko.prototype.g=function(c,g){return new cn(c,g)};function cn(c,g){Ct.call(this),this.g=new Pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Q(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Q(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new kr(this)}P(cn,Ct),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Bt(this.g)},cn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=pl(c),c=v);g.i.push(new fc(g.Ya++,c)),g.G==3&&Ar(g)},cn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,cn.aa.N.call(this)};function Pc(c){Tr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}P(Pc,Tr);function Nc(){xo.call(this),this.status=1}P(Nc,xo);function kr(c){this.g=c}P(kr,xl),kr.prototype.ua=function(){St(this.g,"a")},kr.prototype.ta=function(c){St(this.g,new Pc(c))},kr.prototype.sa=function(c){St(this.g,new Nc)},kr.prototype.ra=function(){St(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,pI=function(){return new Ko},fI=function(){return Rs()},dI=Ir,Dm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,Fh=bo,uc.COMPLETE="complete",hI=uc,No.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,cu=No,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,cI=st}).apply(typeof Rh<"u"?Rh:typeof self<"u"?self:typeof window<"u"?window:{});const aw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new $u("@firebase/firestore");function _a(){return uo.logLevel}function le(n,...e){if(uo.logLevel<=Oe.DEBUG){const t=e.map(bg);uo.debug(`Firestore (${Qa}): ${n}`,...t)}}function vi(n,...e){if(uo.logLevel<=Oe.ERROR){const t=e.map(bg);uo.error(`Firestore (${Qa}): ${n}`,...t)}}function ba(n,...e){if(uo.logLevel<=Oe.WARN){const t=e.map(bg);uo.warn(`Firestore (${Qa}): ${n}`,...t)}}function bg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n="Unexpected state"){const e=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: `+n;throw vi(e),new Error(e)}function qe(n,e){n||Ie()}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class aD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lD{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new pi,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new pi)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new mI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new tn(e)}}class uD{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cD{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new uD(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){qe(this.o===void 0);const r=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,le("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(qe(typeof t.token=="string"),this.R=t.token,new hD(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fD(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function Me(n,e){return n<e?-1:n>e?1:0}function La(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _t(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new _t(0,0))}static max(){return new Ce(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(),r===void 0?r=e.length-t:r>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pu?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=e.get(s),l=t.get(s);if(a<l)return-1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class it extends Pu{construct(e,t,r){return new it(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new it(t)}static emptyPath(){return new it([])}}const pD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Pu{construct(e,t,r){return new Ht(e,t,r)}static isValidIdentifier(e){return pD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new ce(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ce(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(l=!l,s++):h!=="."||l?(r+=h,s++):(a(),s++)}if(a(),l)throw new ce(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(t)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(it.fromString(e))}static fromName(e){return new me(it.fromString(e).popFirst(5))}static empty(){return new me(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new it(e.slice()))}}function mD(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ce.fromTimestamp(r===1e9?new _t(t+1,0):new _t(t,r));return new as(s,me.empty(),e)}function gD(n){return new as(n.readTime,n.key,-1)}class as{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new as(Ce.min(),me.empty(),-1)}static max(){return new as(Ce.max(),me.empty(),-1)}}function _D(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==yD)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,r)=>{t(e)})}static reject(e){return new H((t,r)=>{r(e)})}static waitFor(e){return new H((t,r)=>{let s=0,a=0,l=!1;e.forEach(h=>{++s,h.next(()=>{++a,l&&a===s&&t()},f=>r(f))}),l=!0,a===s&&t()})}static or(e){let t=H.resolve(!1);for(const r of e)t=t.next(s=>s?H.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new H((r,s)=>{const a=e.length,l=new Array(a);let h=0;for(let f=0;f<a;f++){const p=f;t(e[p]).next(y=>{l[p]=y,++h,h===a&&r(l)},y=>s(y))}})}static doWhile(e,t){return new H((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function ED(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xa(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ud.oe=-1;function jd(n){return n==null}function ld(n){return n===0&&1/n==-1/0}function wD(n){return typeof n=="number"&&Number.isInteger(n)&&!ld(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lw(e)),e=ID(n.get(t),e);return lw(e)}function ID(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function lw(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ys(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _I(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It=class Om{constructor(e,t){this.comparator=e,this.root=t||is.EMPTY}insert(e,t){return new Om(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,is.BLACK,null,null))}remove(e){return new Om(this.comparator,this.root.remove(e,this.comparator).copy(null,null,is.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},is=class oi{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??oi.RED,this.left=s??oi.EMPTY,this.right=a??oi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new oi(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return oi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return oi.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}};is.EMPTY=null,is.RED=!0,is.BLACK=!1;is.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,r,s,a){return this}insert(e,t,r){return new is(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cw(this.data.getIterator())}getIteratorFrom(e){return new cw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class cw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new bn([])}unionWith(e){let t=new Pt(Ht.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return La(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new yI("Invalid base64 string: "+a):a}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const CD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(n){if(qe(!!n),typeof n=="string"){let e=0;const t=CD.exec(n);if(qe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function us(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bd(n){const e=n.mapValue.fields.__previous_value__;return Lg(e)?Bd(e):e}function Nu(n){const e=ls(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,t,r,s,a,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p}}class xu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new xu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lg(n)?4:AD(n)?9007199254740991:RD(n)?10:11:Ie()}function Fr(n,e){if(n===e)return!0;const t=cs(n);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nu(n).isEqual(Nu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=ls(s.timestampValue),h=ls(a.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return us(s.bytesValue).isEqual(us(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return mt(s.geoPointValue.latitude)===mt(a.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return mt(s.integerValue)===mt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=mt(s.doubleValue),h=mt(a.doubleValue);return l===h?ld(l)===ld(h):isNaN(l)&&isNaN(h)}return!1}(n,e);case 9:return La(n.arrayValue.values||[],e.arrayValue.values||[],Fr);case 10:case 11:return function(s,a){const l=s.mapValue.fields||{},h=a.mapValue.fields||{};if(uw(l)!==uw(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Fr(l[f],h[f])))return!1;return!0}(n,e);default:return Ie()}}function Du(n,e){return(n.values||[]).find(t=>Fr(t,e))!==void 0}function Ma(n,e){if(n===e)return 0;const t=cs(n),r=cs(e);if(t!==r)return Me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return function(a,l){const h=mt(a.integerValue||a.doubleValue),f=mt(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return hw(n.timestampValue,e.timestampValue);case 4:return hw(Nu(n),Nu(e));case 5:return Me(n.stringValue,e.stringValue);case 6:return function(a,l){const h=us(a),f=us(l);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const h=a.split("/"),f=l.split("/");for(let p=0;p<h.length&&p<f.length;p++){const y=Me(h[p],f[p]);if(y!==0)return y}return Me(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const h=Me(mt(a.latitude),mt(l.latitude));return h!==0?h:Me(mt(a.longitude),mt(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dw(n.arrayValue,e.arrayValue);case 10:return function(a,l){var h,f,p,y;const E=a.fields||{},w=l.fields||{},C=(h=E.value)===null||h===void 0?void 0:h.arrayValue,P=(f=w.value)===null||f===void 0?void 0:f.arrayValue,V=Me(((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0,((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0);return V!==0?V:dw(C,P)}(n.mapValue,e.mapValue);case 11:return function(a,l){if(a===kh.mapValue&&l===kh.mapValue)return 0;if(a===kh.mapValue)return 1;if(l===kh.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),p=l.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let E=0;E<f.length&&E<y.length;++E){const w=Me(f[E],y[E]);if(w!==0)return w;const C=Ma(h[f[E]],p[y[E]]);if(C!==0)return C}return Me(f.length,y.length)}(n.mapValue,e.mapValue);default:throw Ie()}}function hw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=ls(n),r=ls(e),s=Me(t.seconds,r.seconds);return s!==0?s:Me(t.nanos,r.nanos)}function dw(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Ma(t[s],r[s]);if(a)return a}return Me(t.length,r.length)}function Va(n){return bm(n)}function bm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ls(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return us(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=bm(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const l of r)a?a=!1:s+=",",s+=`${l}:${bm(t.fields[l])}`;return s+"}"}(n.mapValue):Ie()}function Uh(n){switch(cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bd(n);return e?16+Uh(e):16;case 5:return 2*n.stringValue.length;case 6:return us(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+Uh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ys(r.fields,(a,l)=>{s+=a.length+Uh(l)}),s}(n.mapValue);default:throw Ie()}}function fw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lm(n){return!!n&&"integerValue"in n}function Mg(n){return!!n&&"arrayValue"in n}function pw(n){return!!n&&"nullValue"in n}function mw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jh(n){return!!n&&"mapValue"in n}function RD(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function _u(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ys(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_u(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_u(n.arrayValue.values[t]);return e}return Object.assign({},n)}function AD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_u(t)}setAll(e){let t=Ht.emptyPath(),r={},s=[];e.forEach((l,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}l?r[h.lastSegment()]=_u(l):s.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];jh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ys(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new Tn(_u(this.value))}}function vI(n){const e=[];return ys(n.fields,(t,r)=>{const s=new Ht([t]);if(jh(r)){const a=vI(r.mapValue).fields;if(a.length===0)e.push(s);else for(const l of a)e.push(s.child(l))}else e.push(s)}),new bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,s,a,l,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=l,this.documentState=h}static newInvalidDocument(e){return new rn(e,0,Ce.min(),Ce.min(),Ce.min(),Tn.empty(),0)}static newFoundDocument(e,t,r,s){return new rn(e,1,t,Ce.min(),r,s,0)}static newNoDocument(e,t){return new rn(e,2,t,Ce.min(),Ce.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new rn(e,3,t,Ce.min(),Ce.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.position=e,this.inclusive=t}}function gw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],l=n.position[s];if(a.field.isKeyField()?r=me.comparator(me.fromName(l.referenceValue),t.key):r=Ma(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function _w(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t="asc"){this.field=e,this.dir=t}}function kD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{}class Tt extends EI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ND(e,t,r):t==="array-contains"?new OD(e,r):t==="in"?new bD(e,r):t==="not-in"?new LD(e,r):t==="array-contains-any"?new MD(e,r):new Tt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new xD(e,r):new DD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ma(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(Ma(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vr extends EI{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new vr(e,t)}matches(e){return wI(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wI(n){return n.op==="and"}function TI(n){return PD(n)&&wI(n)}function PD(n){for(const e of n.filters)if(e instanceof vr)return!1;return!0}function Mm(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+Va(n.value);if(TI(n))return n.filters.map(e=>Mm(e)).join(",");{const e=n.filters.map(t=>Mm(t)).join(",");return`${n.op}(${e})`}}function II(n,e){return n instanceof Tt?function(r,s){return s instanceof Tt&&r.op===s.op&&r.field.isEqual(s.field)&&Fr(r.value,s.value)}(n,e):n instanceof vr?function(r,s){return s instanceof vr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,l,h)=>a&&II(l,s.filters[h]),!0):!1}(n,e):void Ie()}function CI(n){return n instanceof Tt?function(t){return`${t.field.canonicalString()} ${t.op} ${Va(t.value)}`}(n):n instanceof vr?function(t){return t.op.toString()+" {"+t.getFilters().map(CI).join(" ,")+"}"}(n):"Filter"}class ND extends Tt{constructor(e,t,r){super(e,t,r),this.key=me.fromName(r.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class xD extends Tt{constructor(e,t){super(e,"in",t),this.keys=SI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DD extends Tt{constructor(e,t){super(e,"not-in",t),this.keys=SI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function SI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>me.fromName(r.referenceValue))}class OD extends Tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mg(t)&&Du(t.arrayValue,this.value)}}class bD extends Tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Du(this.value.arrayValue,t)}}class LD extends Tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Du(this.value.arrayValue,t)}}class MD extends Tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Du(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,t=null,r=[],s=[],a=null,l=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=l,this.endAt=h,this.ue=null}}function yw(n,e=null,t=[],r=[],s=null,a=null,l=null){return new VD(n,e,t,r,s,a,l)}function Vg(n){const e=Re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Mm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),jd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Va(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Va(r)).join(",")),e.ue=t}return e.ue}function Fg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!II(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_w(n.startAt,e.startAt)&&_w(n.endAt,e.endAt)}function Vm(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t=null,r=[],s=[],a=null,l="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=l,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FD(n,e,t,r,s,a,l,h){return new Qu(n,e,t,r,s,a,l,h)}function zd(n){return new Qu(n)}function vw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RI(n){return n.collectionGroup!==null}function yu(n){const e=Re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new Pt(Ht.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new cd(a,r))}),t.has(Ht.keyField().canonicalString())||e.ce.push(new cd(Ht.keyField(),r))}return e.ce}function br(n){const e=Re(n);return e.le||(e.le=UD(e,yu(n))),e.le}function UD(n,e){if(n.limitType==="F")return yw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new cd(s.field,a)});const t=n.endAt?new ud(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ud(n.startAt.position,n.startAt.inclusive):null;return yw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fm(n,e){const t=n.filters.concat([e]);return new Qu(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Um(n,e,t){return new Qu(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $d(n,e){return Fg(br(n),br(e))&&n.limitType===e.limitType}function AI(n){return`${Vg(br(n))}|lt:${n.limitType}`}function ya(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>CI(s)).join(", ")}]`),jd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Va(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Va(s)).join(",")),`Target(${r})`}(br(n))}; limitType=${n.limitType})`}function Wd(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):me.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of yu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(l,h,f){const p=gw(l,h,f);return l.inclusive?p<=0:p<0}(r.startAt,yu(r),s)||r.endAt&&!function(l,h,f){const p=gw(l,h,f);return l.inclusive?p>=0:p>0}(r.endAt,yu(r),s))}(n,e)}function jD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kI(n){return(e,t)=>{let r=!1;for(const s of yu(n)){const a=BD(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function BD(n,e,t){const r=n.field.isKeyField()?me.comparator(e.key,t.key):function(a,l,h){const f=l.data.field(a),p=h.data.field(a);return f!==null&&p!==null?Ma(f,p):Ie()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return _I(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=new It(me.comparator);function Ei(){return zD}const PI=new It(me.comparator);function hu(...n){let e=PI;for(const t of n)e=e.insert(t.key,t);return e}function NI(n){let e=PI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function eo(){return vu()}function xI(){return vu()}function vu(){return new yo(n=>n.toString(),(n,e)=>n.isEqual(e))}const $D=new It(me.comparator),WD=new Pt(me.comparator);function be(...n){let e=WD;for(const t of n)e=e.add(t);return e}const qD=new Pt(Me);function HD(){return qD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ld(e)?"-0":e}}function DI(n){return{integerValue:""+n}}function GD(n,e){return wD(e)?DI(e):Ug(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this._=void 0}}function KD(n,e,t){return n instanceof Ou?function(s,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Lg(a)&&(a=Bd(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(t,e):n instanceof Fa?bI(n,e):n instanceof bu?LI(n,e):function(s,a){const l=OI(s,a),h=Ew(l)+Ew(s.Pe);return Lm(l)&&Lm(s.Pe)?DI(h):Ug(s.serializer,h)}(n,e)}function QD(n,e,t){return n instanceof Fa?bI(n,e):n instanceof bu?LI(n,e):t}function OI(n,e){return n instanceof hd?function(r){return Lm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Ou extends qd{}class Fa extends qd{constructor(e){super(),this.elements=e}}function bI(n,e){const t=MI(e);for(const r of n.elements)t.some(s=>Fr(s,r))||t.push(r);return{arrayValue:{values:t}}}class bu extends qd{constructor(e){super(),this.elements=e}}function LI(n,e){let t=MI(e);for(const r of n.elements)t=t.filter(s=>!Fr(s,r));return{arrayValue:{values:t}}}class hd extends qd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ew(n){return mt(n.integerValue||n.doubleValue)}function MI(n){return Mg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.field=e,this.transform=t}}function YD(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Fa&&s instanceof Fa||r instanceof bu&&s instanceof bu?La(r.elements,s.elements,Fr):r instanceof hd&&s instanceof hd?Fr(r.Pe,s.Pe):r instanceof Ou&&s instanceof Ou}(n.transform,e.transform)}class XD{constructor(e,t){this.version=e,this.transformResults=t}}class Lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hd{}function FI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jI(n.key,Lr.none()):new Yu(n.key,n.data,Lr.none());{const t=n.data,r=Tn.empty();let s=new Pt(Ht.comparator);for(let a of e.fields)if(!s.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),s=s.add(a)}return new vs(n.key,r,new bn(s.toArray()),Lr.none())}}function JD(n,e,t){n instanceof Yu?function(s,a,l){const h=s.value.clone(),f=Tw(s.fieldTransforms,a,l.transformResults);h.setAll(f),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):n instanceof vs?function(s,a,l){if(!Bh(s.precondition,a))return void a.convertToUnknownDocument(l.version);const h=Tw(s.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(UI(s)),f.setAll(h),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Eu(n,e,t,r){return n instanceof Yu?function(a,l,h,f){if(!Bh(a.precondition,l))return h;const p=a.value.clone(),y=Iw(a.fieldTransforms,f,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof vs?function(a,l,h,f){if(!Bh(a.precondition,l))return h;const p=Iw(a.fieldTransforms,f,l),y=l.data;return y.setAll(UI(a)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(a,l,h){return Bh(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,e,t)}function ZD(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=OI(r.transform,s||null);a!=null&&(t===null&&(t=Tn.empty()),t.set(r.field,a))}return t||null}function ww(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&La(r,s,(a,l)=>YD(a,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yu extends Hd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vs extends Hd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function UI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tw(n,e,t){const r=new Map;qe(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],l=a.transform,h=e.data.field(a.field);r.set(a.field,QD(l,h,t[s]))}return r}function Iw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,l=t.data.field(s.field);r.set(s.field,KD(a,l,e))}return r}class jI extends Hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eO extends Hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&JD(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Eu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xI();return this.mutations.forEach(s=>{const a=e.get(s.key),l=a.overlayedDocument;let h=this.applyToLocalView(l,a.mutatedFields);h=t.has(s.key)?null:h;const f=FI(l,h);f!==null&&r.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&La(this.mutations,e.mutations,(t,r)=>ww(t,r))&&La(this.baseMutations,e.baseMutations,(t,r)=>ww(t,r))}}class jg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){qe(e.mutations.length===r.length);let s=function(){return $D}();const a=e.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,r[l].version);return new jg(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,Ue;function iO(n){switch(n){default:return Ie();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function BI(n){if(n===void 0)return vi("GRPC error has no .code"),K.UNKNOWN;switch(n){case Et.OK:return K.OK;case Et.CANCELLED:return K.CANCELLED;case Et.UNKNOWN:return K.UNKNOWN;case Et.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Et.INTERNAL:return K.INTERNAL;case Et.UNAVAILABLE:return K.UNAVAILABLE;case Et.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Et.NOT_FOUND:return K.NOT_FOUND;case Et.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Et.ABORTED:return K.ABORTED;case Et.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Et.DATA_LOSS:return K.DATA_LOSS;default:return Ie()}}(Ue=Et||(Et={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new ro([4294967295,4294967295],0);function Cw(n){const e=sO().encode(n),t=new uI;return t.update(e),new Uint8Array(t.digest())}function Sw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ro([t,r],0),new ro([s,a],0)]}class Bg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(r<0)throw new du(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ro.fromNumber(this.Te)}Ee(e,t,r){let s=e.add(t.multiply(ro.fromNumber(r)));return s.compare(oO)===1&&(s=new ro([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Cw(e),[r,s]=Sw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);if(!this.de(l))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new Bg(a,s,t);return r.forEach(h=>l.insert(h)),l}insert(e){if(this.Te===0)return;const t=Cw(e),[r,s]=Sw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gd(Ce.min(),s,new It(Me),Ei(),be())}}class Xu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xu(r,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class zI{constructor(e,t){this.targetId=e,this.me=t}}class $I{constructor(e,t,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Rw{constructor(){this.fe=0,this.ge=Aw(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),r=be();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ie()}}),new Xu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Aw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ei(),this.qe=Ph(),this.Qe=Ph(),this.Ke=new It(Me)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(Vm(a))if(r===0){const l=new me(a.path);this.We(t,l,rn.newNoDocument(l,Ce.min()))}else qe(r===1);else{const l=this.Ze(t);if(l!==r){const h=this.Xe(e),f=h?this.et(h,e,l):1;if(f!==0){this.He(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let l,h;try{l=us(r).toUint8Array()}catch(f){if(f instanceof yI)return ba("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Bg(l,s,a)}catch(f){return ba(f instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Te===0?null:h}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const l=this.Le.nt(),h=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((a,l)=>{const h=this.Ye(l);if(h){if(a.current&&Vm(h.target)){const f=new me(h.target.path);this.st(f).has(l)||this.ot(l,f)||this.We(l,f,rn.newNoDocument(f,e))}a.be&&(t.set(l,a.ve()),a.Ce())}});let r=be();this.Qe.forEach((a,l)=>{let h=!0;l.forEachWhile(f=>{const p=this.Ye(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.ke.forEach((a,l)=>l.setReadTime(e));const s=new Gd(e,t,this.Ke,this.ke,r);return this.ke=Ei(),this.qe=Ph(),this.Qe=Ph(),this.Ke=new It(Me),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Rw,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Pt(Me),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pt(Me),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Rw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ph(){return new It(me.comparator)}function Aw(){return new It(me.comparator)}const lO={asc:"ASCENDING",desc:"DESCENDING"},uO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cO={and:"AND",or:"OR"};class hO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jm(n,e){return n.useProto3Json||jd(e)?e:{value:e}}function dd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dO(n,e){return dd(n,e.toTimestamp())}function Mr(n){return qe(!!n),Ce.fromTimestamp(function(t){const r=ls(t);return new _t(r.seconds,r.nanos)}(n))}function zg(n,e){return Bm(n,e).canonicalString()}function Bm(n,e){const t=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qI(n){const e=it.fromString(n);return qe(YI(e)),e}function zm(n,e){return zg(n.databaseId,e.path)}function am(n,e){const t=qI(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(GI(t))}function HI(n,e){return zg(n.databaseId,e)}function fO(n){const e=qI(n);return e.length===4?it.emptyPath():GI(e)}function $m(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function GI(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kw(n,e,t){return{name:zm(n,e),fields:t.value.mapValue.fields}}function pO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(qe(y===void 0||typeof y=="string"),Gt.fromBase64String(y||"")):(qe(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Gt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,h=l&&function(p){const y=p.code===void 0?K.UNKNOWN:BI(p.code);return new ce(y,p.message||"")}(l);t=new $I(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=am(n,r.document.name),a=Mr(r.document.updateTime),l=r.document.createTime?Mr(r.document.createTime):Ce.min(),h=new Tn({mapValue:{fields:r.document.fields}}),f=rn.newFoundDocument(s,a,l,h),p=r.targetIds||[],y=r.removedTargetIds||[];t=new zh(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=am(n,r.document),a=r.readTime?Mr(r.readTime):Ce.min(),l=rn.newNoDocument(s,a),h=r.removedTargetIds||[];t=new zh([],h,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=am(n,r.document),a=r.removedTargetIds||[];t=new zh([],a,s,null)}else{if(!("filter"in e))return Ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,l=new rO(s,a),h=r.targetId;t=new zI(h,l)}}return t}function mO(n,e){let t;if(e instanceof Yu)t={update:kw(n,e.key,e.value)};else if(e instanceof jI)t={delete:zm(n,e.key)};else if(e instanceof vs)t={update:kw(n,e.key,e.data),updateMask:CO(e.fieldMask)};else{if(!(e instanceof eO))return Ie();t={verify:zm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const h=l.transform;if(h instanceof Ou)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Fa)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof bu)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof hd)return{fieldPath:l.field.canonicalString(),increment:h.Pe};throw Ie()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:dO(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ie()}(n,e.precondition)),t}function gO(n,e){return n&&n.length>0?(qe(e!==void 0),n.map(t=>function(s,a){let l=s.updateTime?Mr(s.updateTime):Mr(a);return l.isEqual(Ce.min())&&(l=Mr(a)),new XD(l,s.transformResults||[])}(t,e))):[]}function _O(n,e){return{documents:[HI(n,e.path)]}}function yO(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=HI(n,s);const a=function(p){if(p.length!==0)return QI(vr.create(p,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:va(w.field),direction:wO(w.dir)}}(y))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const h=jm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ct:t,parent:s}}function vO(n){let e=fO(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){qe(r===1);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(E){const w=KI(E);return w instanceof vr&&TI(w)?w.getFilters():[w]}(t.where));let l=[];t.orderBy&&(l=function(E){return E.map(w=>function(P){return new cd(Ea(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let h=null;t.limit&&(h=function(E){let w;return w=typeof E=="object"?E.value:E,jd(w)?null:w}(t.limit));let f=null;t.startAt&&(f=function(E){const w=!!E.before,C=E.values||[];return new ud(C,w)}(t.startAt));let p=null;return t.endAt&&(p=function(E){const w=!E.before,C=E.values||[];return new ud(C,w)}(t.endAt)),FD(e,s,l,a,h,"F",f,p)}function EO(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function KI(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ea(t.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ea(t.unaryFilter.field);return Tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ea(t.unaryFilter.field);return Tt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ea(t.unaryFilter.field);return Tt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(n):n.fieldFilter!==void 0?function(t){return Tt.create(Ea(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vr.create(t.compositeFilter.filters.map(r=>KI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(n):Ie()}function wO(n){return lO[n]}function TO(n){return uO[n]}function IO(n){return cO[n]}function va(n){return{fieldPath:n.canonicalString()}}function Ea(n){return Ht.fromServerFormat(n.fieldPath)}function QI(n){return n instanceof Tt?function(t){if(t.op==="=="){if(mw(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NAN"}};if(pw(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mw(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NOT_NAN"}};if(pw(t.value))return{unaryFilter:{field:va(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:va(t.field),op:TO(t.op),value:t.value}}}(n):n instanceof vr?function(t){const r=t.getFilters().map(s=>QI(s));return r.length===1?r[0]:{compositeFilter:{op:IO(t.op),filters:r}}}(n):Ie()}function CO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function YI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s,a=Ce.min(),l=Ce.min(),h=Gt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.ht=e}}function RO(n){const e=vO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Um(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.ln=new kO}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(as.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(as.min())}updateCollectionGroup(e,t,r){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class kO{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Pt(it.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(41943040,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ua(0)}static Qn(){return new Ua(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw([n,e],[t,r]){const s=Me(n,t);return s===0?Me(e,r):s}class PO{constructor(e){this.Gn=e,this.buffer=new Pt(Nw),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class NO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xa(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ya(t)}await this.Yn(3e5)})}}class xO{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Ud.oe);const r=new PO(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Pw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pw):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,a,l,h,f,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,l=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,h=Date.now(),this.removeTargets(e,r,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(p=Date.now(),_a()<=Oe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${s} in `+(h-l)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${E} documents in `+(p-f)+`ms
Total Duration: ${p-y}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E})))}}function DO(n,e){return new xO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.changes=new yo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?H.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Eu(r.mutation,s,bn.empty(),_t.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,t,r=be()){const s=eo();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let l=hu();return a.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=eo();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,be()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((l,h)=>{t.set(l,h)})})}computeViews(e,t,r,s){let a=Ei();const l=vu(),h=function(){return vu()}();return t.forEach((f,p)=>{const y=r.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof vs)?a=a.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),Eu(y.mutation,p,y.mutation.getFieldMask(),_t.now())):l.set(p.key,bn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,y)=>l.set(p,y)),t.forEach((p,y)=>{var E;return h.set(p,new bO(y,(E=l.get(p))!==null&&E!==void 0?E:null))}),h))}recalculateAndSaveOverlays(e,t){const r=vu();let s=new It((l,h)=>l-h),a=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const h of l)h.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||bn.empty();y=h.applyToLocalView(p,y),r.set(f,y);const E=(s.get(h.batchId)||be()).add(f);s=s.insert(h.batchId,E)})}).next(()=>{const l=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,y=f.value,E=xI();y.forEach(w=>{if(!a.has(w)){const C=FI(t.get(w),r.get(w));C!==null&&E.set(w,C),a=a.add(w)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,E))}return H.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(l){return me.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):H.resolve(eo());let h=-1,f=a;return l.next(p=>H.forEach(p,(y,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),a.get(y)?H.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{f=f.insert(y,w)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,be())).next(y=>({batchId:h,changes:NI(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let l=hu();return this.indexManager.getCollectionParents(e,a).next(h=>H.forEach(h,f=>{const p=function(E,w){return new Qu(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,s).next(y=>{y.forEach((E,w)=>{l=l.insert(E,w)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(l=>{a.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,rn.newInvalidDocument(y)))});let h=hu();return l.forEach((f,p)=>{const y=a.get(f);y!==void 0&&Eu(y.mutation,p,bn.empty(),_t.now()),Wd(t,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mr(s.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:RO(s.bundledQuery),readTime:Mr(s.readTime)}}(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.overlays=new It(me.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const r=eo();return H.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Tt(e,t,a)}),H.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Er.delete(r)),H.resolve()}getOverlaysForCollection(e,t,r){const s=eo(),a=t.length+1,l=new me(t.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return H.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new It((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=eo(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=eo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=s)););return H.resolve(h)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new nO(t,r));let a=this.Er.get(t);a===void 0&&(a=be(),this.Er.set(t,a)),this.Er.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.dr=new Pt(Mt.Ar),this.Rr=new Pt(Mt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new Mt(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Mt(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new me(new it([])),r=new Mt(t,e),s=new Mt(t,e+1),a=[];return this.Rr.forEachInRange([r,s],l=>{this.gr(l),a.push(l.key)}),a}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new me(new it([])),r=new Mt(t,e),s=new Mt(t,e+1);let a=be();return this.Rr.forEachInRange([r,s],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new Mt(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return me.comparator(e.key,t.key)||Me(e.br,t.br)}static Vr(e,t){return Me(e.br,t.br)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Pt(Mt.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new tO(a,t,r,s);this.mutationQueue.push(l);for(const h of s)this.vr=this.vr.add(new Mt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return H.resolve(l)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),a=s<0?0:s;return H.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Mt(t,0),s=new Mt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([r,s],l=>{const h=this.Cr(l.br);a.push(h)}),H.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pt(Me);return t.forEach(s=>{const a=new Mt(s,0),l=new Mt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,l],h=>{r=r.add(h.br)})}),H.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;me.isDocumentKey(a)||(a=a.child(""));const l=new Mt(new me(a),0);let h=new Pt(Me);return this.vr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(h=h.add(f.br)),!0)},l),H.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){qe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return H.forEach(t.mutations,s=>{const a=new Mt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new Mt(t,0),s=this.vr.firstAfterOrEqual(r);return H.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.Nr=e,this.docs=function(){return new It(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,l=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return H.resolve(r?r.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let r=Ei();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():rn.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Ei();const l=t.path,h=new me(l.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||_D(gD(y),r)<=0||(s.has(y.key)||Wd(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return H.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ie()}Lr(e,t){return H.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BO(this)}getSize(e){return H.resolve(this.size)}}class BO extends OO{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.persistence=e,this.Br=new yo(t=>Vg(t),Fg),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.kr=0,this.qr=new $g,this.targetCount=0,this.Qr=Ua.qn()}forEachTarget(e,t){return this.Br.forEach((r,s)=>t(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ua(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Br.forEach((l,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Br.delete(l),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),H.waitFor(a).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return H.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),H.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(l=>{a.push(s.markPotentiallyOrphaned(e,l))}),H.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return H.resolve(r)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ud(0),this.Ur=!1,this.Ur=!0,this.Wr=new FO,this.referenceDelegate=e(this),this.Gr=new zO(this),this.indexManager=new AO,this.remoteDocumentCache=function(s){return new jO(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new SO(t),this.jr=new MO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new VO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new UO(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){le("MemoryPersistence","Starting transaction:",e);const s=new $O(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return H.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class $O extends vD{constructor(e){super(),this.currentSequenceNumber=e}}class Wg{constructor(e){this.persistence=e,this.Zr=new $g,this.Xr=null}static ei(e){return new Wg(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),H.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,r=>{const s=me.fromPath(r);return this.ni(e,s).next(a=>{a||t.removeEntry(s,Ce.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class fd{constructor(e,t){this.persistence=e,this.ri=new yo(r=>TD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=DO(this,t)}static ei(e,t){return new fd(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(a=>a?H.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Lr(e,l=>this.ir(e,l,t).next(h=>{h||(r++,a.removeEntry(l,Ce.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uh(e.data.value)),t}ir(e,t,r){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return H.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=be(),s=be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new qg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return SA()?8:ED(an())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Xi(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.es(e,t,s,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new WO;return this.ts(e,t,l).next(h=>{if(a.result=h,this.Hi)return this.ns(e,t,l,h.size)})}).next(()=>a.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(_a()<=Oe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",ya(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(_a()<=Oe.DEBUG&&le("QueryEngine","Query:",ya(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(_a()<=Oe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",ya(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,br(t))):H.resolve())}Xi(e,t){if(vw(t))return H.resolve(null);let r=br(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Um(t,null,"F"),r=br(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=be(...a);return this.Zi.getDocuments(e,l).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.rs(t,h);return this.ss(t,p,l,f.readTime)?this.Xi(e,Um(t,null,"F")):this.os(e,p,t,f)}))})))}es(e,t,r,s){return vw(t)||s.isEqual(Ce.min())?H.resolve(null):this.Zi.getDocuments(e,r).next(a=>{const l=this.rs(t,a);return this.ss(t,l,r,s)?H.resolve(null):(_a()<=Oe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ya(t)),this.os(e,l,t,mD(s,-1)).next(h=>h))})}rs(e,t){let r=new Pt(kI(e));return t.forEach((s,a)=>{Wd(e,a)&&(r=r.add(a))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,r){return _a()<=Oe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",ya(t)),this.Zi.getDocumentsMatchingQuery(e,t,as.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new It(Me),this.cs=new yo(a=>Vg(a),Fg),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LO(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function GO(n,e,t,r){return new HO(n,e,t,r)}async function JI(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],h=[];let f=be();for(const p of s){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of a){h.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({Ts:p,removedBatchIds:l,addedBatchIds:h}))})})}function KO(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,f,p,y){const E=p.batch,w=E.keys();let C=H.resolve();return w.forEach(P=>{C=C.next(()=>y.getEntry(f,P)).next(V=>{const b=p.docVersions.get(P);qe(b!==null),V.version.compareTo(b)<0&&(E.applyToRemoteDocument(V,p),V.isValidDocument()&&(V.setReadTime(p.commitVersion),y.addEntry(V)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(f,E))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=be();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ZI(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function QO(n,e){const t=Re(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const h=[];e.targetChanges.forEach((y,E)=>{const w=s.get(E);if(!w)return;h.push(t.Gr.removeMatchingKeys(a,y.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(a,y.addedDocuments,E)));let C=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?C=C.withResumeToken(Gt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):y.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(y.resumeToken,r)),s=s.insert(E,C),function(V,b,q){return V.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(w,C,y)&&h.push(t.Gr.updateTargetData(a,C))});let f=Ei(),p=be();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),h.push(YO(a,l,e.documentUpdates).next(y=>{f=y.Is,p=y.Es})),!r.isEqual(Ce.min())){const y=t.Gr.getLastRemoteSnapshotVersion(a).next(E=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(y)}return H.waitFor(h).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,p)).next(()=>f)}).then(a=>(t.us=s,a))}function YO(n,e,t){let r=be(),s=be();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let l=Ei();return t.forEach((h,f)=>{const p=a.get(h);f.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(Ce.min())?(e.removeEntry(h,f.readTime),l=l.insert(h,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),l=l.insert(h,f)):le("LocalStore","Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",f.version)}),{Is:l,Es:s}})}function XO(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JO(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(a=>a?(s=a,H.resolve(s)):t.Gr.allocateTargetId(r).next(l=>(s=new ts(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Wm(n,e,t){const r=Re(n),s=r.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,s))}catch(l){if(!Xa(l))throw l;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function xw(n,e,t){const r=Re(n);let s=Ce.min(),a=be();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,p,y){const E=Re(f),w=E.cs.get(y);return w!==void 0?H.resolve(E.us.get(w)):E.Gr.getTargetData(p,y)}(r,l,br(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(l,h.targetId).next(f=>{a=f})}).next(()=>r._s.getDocumentsMatchingQuery(l,e,t?s:Ce.min(),t?a:be())).next(h=>(ZO(r,jD(e),h),{documents:h,ds:a})))}function ZO(n,e,t){let r=n.ls.get(e)||Ce.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.ls.set(e,r)}class Dw{constructor(){this.activeTargetIds=HD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eb{constructor(){this._o=new Dw,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Dw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh=null;function lm(){return Nh===null?Nh=function(){return 268435456+Math.round(2147483648*Math.random())}():Nh++,"0x"+Nh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="WebChannelConnection";class ib extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,r,s,a,l){const h=lm(),f=this.No(t,r.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${h}:`,f,s);const p={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(p,a,l),this.Bo(t,f,p,s).then(y=>(le("RestConnection",`Received RPC '${t}' ${h}: `,y),y),y=>{throw ba("RestConnection",`RPC '${t}' ${h} failed with error: `,y,"url: ",f,"request:",s),y})}ko(t,r,s,a,l,h){return this.Oo(t,r,s,a,l)}Lo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,l)=>t[l]=a),s&&s.headers.forEach((a,l)=>t[l]=a)}No(t,r){const s=nb[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,s){const a=lm();return new Promise((l,h)=>{const f=new cI;f.setWithCredentials(!0),f.listenOnce(hI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Fh.NO_ERROR:const y=f.getResponseJson();le(en,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Fh.TIMEOUT:le(en,`RPC '${e}' ${a} timed out`),h(new ce(K.DEADLINE_EXCEEDED,"Request time out"));break;case Fh.HTTP_ERROR:const E=f.getStatus();if(le(en,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let w=f.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const P=function(b){const q=b.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(q)>=0?q:K.UNKNOWN}(C.status);h(new ce(P,C.message))}else h(new ce(K.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new ce(K.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{le(en,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);le(en,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",p,r,15)})}qo(e,t,r){const s=lm(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=pI(),h=fI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Lo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");le(en,`Creating RPC '${e}' stream ${s}: ${y}`,f);const E=l.createWebChannel(y,f);let w=!1,C=!1;const P=new rb({Eo:b=>{C?le(en,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(w||(le(en,`Opening RPC '${e}' stream ${s} transport.`),E.open(),w=!0),le(en,`RPC '${e}' stream ${s} sending:`,b),E.send(b))},Ao:()=>E.close()}),V=(b,q,Q)=>{b.listen(q,te=>{try{Q(te)}catch(se){setTimeout(()=>{throw se},0)}})};return V(E,cu.EventType.OPEN,()=>{C||(le(en,`RPC '${e}' stream ${s} transport opened.`),P.So())}),V(E,cu.EventType.CLOSE,()=>{C||(C=!0,le(en,`RPC '${e}' stream ${s} transport closed`),P.Do())}),V(E,cu.EventType.ERROR,b=>{C||(C=!0,ba(en,`RPC '${e}' stream ${s} transport errored:`,b),P.Do(new ce(K.UNAVAILABLE,"The operation could not be completed")))}),V(E,cu.EventType.MESSAGE,b=>{var q;if(!C){const Q=b.data[0];qe(!!Q);const te=Q,se=(te==null?void 0:te.error)||((q=te[0])===null||q===void 0?void 0:q.error);if(se){le(en,`RPC '${e}' stream ${s} received error:`,se);const Se=se.status;let ve=function(A){const x=Et[A];if(x!==void 0)return BI(x)}(Se),D=se.message;ve===void 0&&(ve=K.INTERNAL,D="Unknown error status: "+Se+" with message "+se.message),C=!0,P.Do(new ce(ve,D)),E.close()}else le(en,`RPC '${e}' stream ${s} received:`,Q),P.vo(Q)}}),V(h,dI.STAT_EVENT,b=>{b.stat===Dm.PROXY?le(en,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Dm.NOPROXY&&le(en,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function um(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){return new hO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t,r=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t,r,s,a,l,h,f){this.li=e,this.Yo=r,this.Zo=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new eC(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(vi(t.toString()),vi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new ce(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends tC{constructor(e,t,r,s,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,l),this.serializer=a}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=pO(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ce.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ce.min():l.readTime?Mr(l.readTime):Ce.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=$m(this.serializer),t.addTarget=function(a,l){let h;const f=l.target;if(h=Vm(f)?{documents:_O(a,f)}:{query:yO(a,f).ct},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=WI(a,l.resumeToken);const p=jm(a,l.expectedCount);p!==null&&(h.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ce.min())>0){h.readTime=dd(a,l.snapshotVersion.toTimestamp());const p=jm(a,l.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const r=EO(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=$m(this.serializer),t.removeTarget=e,this.c_(t)}}class ob extends tC{constructor(e,t,r,s,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,l),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=gO(e.writeResults,e.commitTime),r=Mr(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=$m(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mO(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Oo(e,Bm(t,r),s,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ce(K.UNKNOWN,a.toString())})}ko(e,t,r,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.ko(e,Bm(t,r),s,l,h,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(K.UNKNOWN,l.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class lb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(vi(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(l=>{r.enqueueAndForget(async()=>{vo(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=Re(f);p.k_.add(4),await Ju(p),p.K_.set("Unknown"),p.k_.delete(4),await Qd(p)}(this))})}),this.K_=new lb(r,s)}}async function Qd(n){if(vo(n))for(const e of n.q_)await e(!0)}async function Ju(n){for(const e of n.q_)await e(!1)}function nC(n,e){const t=Re(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Qg(t)?Kg(t):Ja(t).s_()&&Gg(t,e))}function Hg(n,e){const t=Re(n),r=Ja(t);t.B_.delete(e),r.s_()&&rC(t,e),t.B_.size===0&&(r.s_()?r.a_():vo(t)&&t.K_.set("Unknown"))}function Gg(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ja(n).V_(e)}function rC(n,e){n.U_.xe(e),Ja(n).m_(e)}function Kg(n){n.U_=new aO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ja(n).start(),n.K_.F_()}function Qg(n){return vo(n)&&!Ja(n).i_()&&n.B_.size>0}function vo(n){return Re(n).k_.size===0}function iC(n){n.U_=void 0}async function cb(n){n.K_.set("Online")}async function hb(n){n.B_.forEach((e,t)=>{Gg(n,e)})}async function db(n,e){iC(n),Qg(n)?(n.K_.O_(e),Kg(n)):n.K_.set("Unknown")}async function fb(n,e,t){if(n.K_.set("Online"),e instanceof $I&&e.state===2&&e.cause)try{await async function(s,a){const l=a.cause;for(const h of a.targetIds)s.B_.has(h)&&(await s.remoteSyncer.rejectListen(h,l),s.B_.delete(h),s.U_.removeTarget(h))}(n,e)}catch(r){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pd(n,r)}else if(e instanceof zh?n.U_.$e(e):e instanceof zI?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ce.min()))try{const r=await ZI(n.localStore);t.compareTo(r)>=0&&await function(a,l){const h=a.U_.it(l);return h.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.B_.get(p);y&&a.B_.set(p,y.withResumeToken(f.resumeToken,l))}}),h.targetMismatches.forEach((f,p)=>{const y=a.B_.get(f);if(!y)return;a.B_.set(f,y.withResumeToken(Gt.EMPTY_BYTE_STRING,y.snapshotVersion)),rC(a,f);const E=new ts(y.target,f,p,y.sequenceNumber);Gg(a,E)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){le("RemoteStore","Failed to raise snapshot:",r),await pd(n,r)}}async function pd(n,e,t){if(!Xa(e))throw e;n.k_.add(1),await Ju(n),n.K_.set("Offline"),t||(t=()=>ZI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Qd(n)})}function sC(n,e){return e().catch(t=>pd(n,t,e))}async function Yd(n){const e=Re(n),t=hs(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;pb(e);)try{const s=await XO(e.localStore,r);if(s===null){e.L_.length===0&&t.a_();break}r=s.batchId,mb(e,s)}catch(s){await pd(e,s)}oC(e)&&aC(e)}function pb(n){return vo(n)&&n.L_.length<10}function mb(n,e){n.L_.push(e);const t=hs(n);t.s_()&&t.f_&&t.g_(e.mutations)}function oC(n){return vo(n)&&!hs(n).i_()&&n.L_.length>0}function aC(n){hs(n).start()}async function gb(n){hs(n).w_()}async function _b(n){const e=hs(n);for(const t of n.L_)e.g_(t.mutations)}async function yb(n,e,t){const r=n.L_.shift(),s=jg.from(r,e,t);await sC(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yd(n)}async function vb(n,e){e&&hs(n).f_&&await async function(r,s){if(function(l){return iO(l)&&l!==K.ABORTED}(s.code)){const a=r.L_.shift();hs(r).__(),await sC(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Yd(r)}}(n,e),oC(n)&&aC(n)}async function bw(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const r=vo(t);t.k_.add(3),await Ju(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Qd(t)}async function Eb(n,e){const t=Re(n);e?(t.k_.delete(2),await Qd(t)):e||(t.k_.add(2),await Ju(t),t.K_.set("Unknown"))}function Ja(n){return n.W_||(n.W_=function(t,r,s){const a=Re(t);return a.b_(),new sb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:cb.bind(null,n),mo:hb.bind(null,n),po:db.bind(null,n),R_:fb.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Qg(n)?Kg(n):n.K_.set("Unknown")):(await n.W_.stop(),iC(n))})),n.W_}function hs(n){return n.G_||(n.G_=function(t,r,s){const a=Re(t);return a.b_(),new ob(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:gb.bind(null,n),po:vb.bind(null,n),p_:_b.bind(null,n),y_:yb.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Yd(n)):(await n.G_.stop(),n.L_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const l=Date.now()+r,h=new Yg(e,t,l,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xg(n,e){if(vi("AsyncQueue",`${e}: ${n}`),Xa(n))return new ce(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{static emptySet(e){return new Ra(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||me.comparator(t.key,r.key):(t,r)=>me.comparator(t.key,r.key),this.keyedMap=hu(),this.sortedSet=new It(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ra)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ra;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.z_=new It(me.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ie():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ja{constructor(e,t,r,s,a,l,h,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,s,a){const l=[];return t.forEach(h=>{l.push({type:0,doc:h})}),new ja(e,t,Ra.emptySet(t),l,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Tb{constructor(){this.queries=Mw(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=Re(t),a=s.queries;s.queries=Mw(),a.forEach((l,h)=>{for(const f of h.J_)f.onError(r)})})(this,new ce(K.ABORTED,"Firestore shutting down"))}}function Mw(){return new yo(n=>AI(n),$d)}async function Jg(n,e){const t=Re(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(r=2):(a=new wb,r=e.Z_()?0:1);try{switch(r){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(l){const h=Xg(l,`Initialization of query '${ya(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&e_(t)}async function Zg(n,e){const t=Re(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const l=a.J_.indexOf(e);l>=0&&(a.J_.splice(l,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ib(n,e){const t=Re(n);let r=!1;for(const s of e){const a=s.query,l=t.queries.get(a);if(l){for(const h of l.J_)h.ta(s)&&(r=!0);l.H_=s}}r&&e_(t)}function Cb(n,e,t){const r=Re(n),s=r.queries.get(e);if(s)for(const a of s.J_)a.onError(t);r.queries.delete(e)}function e_(n){n.X_.forEach(e=>{e.next()})}var qm,Vw;(Vw=qm||(qm={})).na="default",Vw.Cache="cache";class t_{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ja(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ja.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==qm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.key=e}}class uC{constructor(e){this.key=e}}class Sb{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=kI(e),this.ma=new Ra(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new Lw,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,l=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,E)=>{const w=s.get(y),C=Wd(this.query,E)?E:null,P=!!w&&this.mutatedKeys.has(w.key),V=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;w&&C?w.data.isEqual(C.data)?P!==V&&(r.track({type:3,doc:C}),b=!0):this.ya(w,C)||(r.track({type:2,doc:C}),b=!0,(f&&this.Va(C,f)>0||p&&this.Va(C,p)<0)&&(h=!0)):!w&&C?(r.track({type:0,doc:C}),b=!0):w&&!C&&(r.track({type:1,doc:w}),b=!0,(f||p)&&(h=!0)),b&&(C?(l=l.add(C),a=V?a.add(y):a.delete(y)):(l=l.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{ma:l,pa:r,ss:h,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const l=e.pa.j_();l.sort((y,E)=>function(C,P){const V=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return V(C)-V(P)}(y.type,E.type)||this.Va(y.doc,E.doc)),this.wa(r),s=s!=null&&s;const h=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,p=f!==this.Aa;return this.Aa=f,l.length!==0||p?{snapshot:new ja(this.query,e.ma,a,l,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Lw,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new uC(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new lC(r))}),t}va(e){this.da=e.ds,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ja.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Rb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ab{constructor(e){this.key=e,this.Fa=!1}}class kb{constructor(e,t,r,s,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ma={},this.xa=new yo(h=>AI(h),$d),this.Oa=new Map,this.Na=new Set,this.La=new It(me.comparator),this.Ba=new Map,this.ka=new $g,this.qa={},this.Qa=new Map,this.Ka=Ua.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Pb(n,e,t=!0){const r=mC(n);let s;const a=r.xa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await cC(r,e,t,!0),s}async function Nb(n,e){const t=mC(n);await cC(t,e,!0,!1)}async function cC(n,e,t,r){const s=await JO(n.localStore,br(e)),a=s.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await xb(n,e,a,l==="current",s.resumeToken)),n.isPrimaryClient&&t&&nC(n.remoteStore,s),h}async function xb(n,e,t,r,s){n.Ua=(E,w,C)=>async function(V,b,q,Q){let te=b.view.ga(q);te.ss&&(te=await xw(V.localStore,b.query,!1).then(({documents:D})=>b.view.ga(D,te)));const se=Q&&Q.targetChanges.get(b.targetId),Se=Q&&Q.targetMismatches.get(b.targetId)!=null,ve=b.view.applyChanges(te,V.isPrimaryClient,se,Se);return Uw(V,b.targetId,ve.ba),ve.snapshot}(n,E,w,C);const a=await xw(n.localStore,e,!0),l=new Sb(e,a.ds),h=l.ga(a.documents),f=Xu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),p=l.applyChanges(h,n.isPrimaryClient,f);Uw(n,t,p.ba);const y=new Rb(e,t,l);return n.xa.set(e,y),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),p.snapshot}async function Db(n,e,t){const r=Re(n),s=r.xa.get(e),a=r.Oa.get(s.targetId);if(a.length>1)return r.Oa.set(s.targetId,a.filter(l=>!$d(l,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Hg(r.remoteStore,s.targetId),Hm(r,s.targetId)}).catch(Ya)):(Hm(r,s.targetId),await Wm(r.localStore,s.targetId,!0))}async function Ob(n,e){const t=Re(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Hg(t.remoteStore,r.targetId))}async function bb(n,e,t){const r=Bb(n);try{const s=await function(l,h){const f=Re(l),p=_t.now(),y=h.reduce((C,P)=>C.add(P.key),be());let E,w;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=Ei(),V=be();return f.hs.getEntries(C,y).next(b=>{P=b,P.forEach((q,Q)=>{Q.isValidDocument()||(V=V.add(q))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,P)).next(b=>{E=b;const q=[];for(const Q of h){const te=ZD(Q,E.get(Q.key).overlayedDocument);te!=null&&q.push(new vs(Q.key,te,vI(te.value.mapValue),Lr.exists(!0)))}return f.mutationQueue.addMutationBatch(C,p,q,h)}).next(b=>{w=b;const q=b.applyToLocalDocumentSet(E,V);return f.documentOverlayCache.saveOverlays(C,b.batchId,q)})}).then(()=>({batchId:w.batchId,changes:NI(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(l,h,f){let p=l.qa[l.currentUser.toKey()];p||(p=new It(Me)),p=p.insert(h,f),l.qa[l.currentUser.toKey()]=p}(r,s.batchId,t),await Zu(r,s.changes),await Yd(r.remoteStore)}catch(s){const a=Xg(s,"Failed to persist write");t.reject(a)}}async function hC(n,e){const t=Re(n);try{const r=await QO(t.localStore,e);e.targetChanges.forEach((s,a)=>{const l=t.Ba.get(a);l&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?l.Fa=!0:s.modifiedDocuments.size>0?qe(l.Fa):s.removedDocuments.size>0&&(qe(l.Fa),l.Fa=!1))}),await Zu(t,r,e)}catch(r){await Ya(r)}}function Fw(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((a,l)=>{const h=l.view.ea(e);h.snapshot&&s.push(h.snapshot)}),function(l,h){const f=Re(l);f.onlineState=h;let p=!1;f.queries.forEach((y,E)=>{for(const w of E.J_)w.ea(h)&&(p=!0)}),p&&e_(f)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lb(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ba.get(e),a=s&&s.key;if(a){let l=new It(me.comparator);l=l.insert(a,rn.newNoDocument(a,Ce.min()));const h=be().add(a),f=new Gd(Ce.min(),new Map,new It(Me),l,h);await hC(r,f),r.La=r.La.remove(a),r.Ba.delete(e),n_(r)}else await Wm(r.localStore,e,!1).then(()=>Hm(r,e,t)).catch(Ya)}async function Mb(n,e){const t=Re(n),r=e.batch.batchId;try{const s=await KO(t.localStore,e);fC(t,r,null),dC(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(t,s)}catch(s){await Ya(s)}}async function Vb(n,e,t){const r=Re(n);try{const s=await function(l,h){const f=Re(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,h).next(E=>(qe(E!==null),y=E.keys(),f.mutationQueue.removeMutationBatch(p,E))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);fC(r,e,t),dC(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zu(r,s)}catch(s){await Ya(s)}}function dC(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function fC(n,e,t){const r=Re(n);let s=r.qa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Hm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||pC(n,r)})}function pC(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Hg(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),n_(n))}function Uw(n,e,t){for(const r of t)r instanceof lC?(n.ka.addReference(r.key,e),Fb(n,r)):r instanceof uC?(le("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||pC(n,r.key)):Ie()}function Fb(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(r),n_(n))}function n_(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new me(it.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Ab(t)),n.La=n.La.insert(t,r),nC(n.remoteStore,new ts(br(zd(t.path)),r,"TargetPurposeLimboResolution",Ud.oe))}}async function Zu(n,e,t){const r=Re(n),s=[],a=[],l=[];r.xa.isEmpty()||(r.xa.forEach((h,f)=>{l.push(r.Ua(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const E=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(p){s.push(p);const E=qg.zi(f.targetId,p);a.push(E)}}))}),await Promise.all(l),r.Ma.R_(s),await async function(f,p){const y=Re(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>H.forEach(p,w=>H.forEach(w.Wi,C=>y.persistence.referenceDelegate.addReference(E,w.targetId,C)).next(()=>H.forEach(w.Gi,C=>y.persistence.referenceDelegate.removeReference(E,w.targetId,C)))))}catch(E){if(!Xa(E))throw E;le("LocalStore","Failed to update sequence numbers: "+E)}for(const E of p){const w=E.targetId;if(!E.fromCache){const C=y.us.get(w),P=C.snapshotVersion,V=C.withLastLimboFreeSnapshotVersion(P);y.us=y.us.insert(w,V)}}}(r.localStore,a))}async function Ub(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const r=await JI(t.localStore,e);t.currentUser=e,function(a,l){a.Qa.forEach(h=>{h.forEach(f=>{f.reject(new ce(K.CANCELLED,l))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zu(t,r.Ts)}}function jb(n,e){const t=Re(n),r=t.Ba.get(e);if(r&&r.Fa)return be().add(r.key);{let s=be();const a=t.Oa.get(e);if(!a)return s;for(const l of a){const h=t.xa.get(l);s=s.unionWith(h.view.fa)}return s}}function mC(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lb.bind(null,e),e.Ma.R_=Ib.bind(null,e.eventManager),e.Ma.Wa=Cb.bind(null,e.eventManager),e}function Bb(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vb.bind(null,e),e}class md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return GO(this.persistence,new qO,e.initialUser,this.serializer)}ja(e){return new XI(Wg.ei,this.serializer)}za(e){return new eb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}md.provider={build:()=>new md};class zb extends md{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){qe(this.persistence.referenceDelegate instanceof fd);const r=this.persistence.referenceDelegate.garbageCollector;return new NO(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new XI(r=>fd.ei(r,t),this.serializer)}}class Gm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ub.bind(null,this.syncEngine),await Eb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tb}()}createDatastore(e){const t=Kd(e.databaseInfo.databaseId),r=function(a){return new ib(a)}(e.databaseInfo);return function(a,l,h,f){return new ab(a,l,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,l,h){return new ub(r,s,a,l,h)}(this.localStore,this.datastore,e.asyncQueue,t=>Fw(this.syncEngine,t,0),function(){return Ow.p()?new Ow:new tb}())}createSyncEngine(e,t){return function(s,a,l,h,f,p,y){const E=new kb(s,a,l,h,f,p);return y&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Re(s);le("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await Ju(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gm.provider={build:()=>new Gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):vi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tn.UNAUTHENTICATED,this.clientId=gI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{le("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(le("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Xg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cm(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await JI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wb(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bw(e.remoteStore,s)),n._onlineComponents=e}async function Wb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await cm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ba("Error using user provided cache. Falling back to memory cache: "+t),await cm(n,new md)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await cm(n,new zb(void 0));return n._offlineComponents}async function gC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await jw(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await jw(n,new Gm))),n._onlineComponents}function qb(n){return gC(n).then(e=>e.syncEngine)}async function gd(n){const e=await gC(n),t=e.eventManager;return t.onListen=Pb.bind(null,e.syncEngine),t.onUnlisten=Db.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ob.bind(null,e.syncEngine),t}function Hb(n,e,t={}){const r=new pi;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,p){const y=new r_({next:w=>{y.eu(),l.enqueueAndForget(()=>Zg(a,E));const C=w.docs.has(h);!C&&w.fromCache?p.reject(new ce(K.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&f&&f.source==="server"?p.reject(new ce(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new t_(zd(h.path),y,{includeMetadataChanges:!0,ua:!0});return Jg(a,E)}(await gd(n),n.asyncQueue,e,t,r)),r.promise}function Gb(n,e,t={}){const r=new pi;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,h,f,p){const y=new r_({next:w=>{y.eu(),l.enqueueAndForget(()=>Zg(a,E)),w.fromCache&&f.source==="server"?p.reject(new ce(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new t_(h,y,{includeMetadataChanges:!0,ua:!0});return Jg(a,E)}(await gd(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n,e,t){if(!t)throw new ce(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kb(n,e,t,r){if(e===!0&&r===!0)throw new ce(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zw(n){if(!me.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $w(n){if(me.isDocumentKey(n))throw new ce(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie()}function Kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(n);throw new ce(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_C((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ce(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ww({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ww(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oD;switch(r.type){case"firstParty":return new cD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Bw.get(t);r&&(le("ComponentProvider","Removing Datastore"),Bw.delete(t),r.terminate())}(this),Promise.resolve()}}function Qb(n,e,t,r={}){var s;const a=(n=Kn(n,Jd))._getSettings(),l=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&ba("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=tn.MOCK_USER;else{h=mg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ce(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new tn(p)}n._authCredentials=new aD(new mI(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Eo(this.firestore,e,this._query)}}class on{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class ss extends Eo{constructor(e,t,r){super(e,t,zd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new me(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function vC(n,e,...t){if(n=Ge(n),yC("collection","path",e),n instanceof Jd){const r=it.fromString(e,...t);return $w(r),new ss(n,null,r)}{if(!(n instanceof on||n instanceof ss))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...t));return $w(r),new ss(n.firestore,null,r)}}function nn(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=gI.newId()),yC("doc","path",e),n instanceof Jd){const r=it.fromString(e,...t);return zw(r),new on(n,null,new me(r))}{if(!(n instanceof on||n instanceof ss))throw new ce(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(e,...t));return zw(r),new on(n.firestore,n instanceof ss?n.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new eC(this,"async_queue_retry"),this.fu=()=>{const r=um();r&&le("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=um();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=um();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new pi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Xa(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw vi("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Yg.createAndSchedule(this,e,t,r,a=>this.Su(a));return this.du.push(s),s}pu(){this.Au&&Ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Hw(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class co extends Jd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new qw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qw(e),this._firestoreClient=void 0,await e}}}function Yb(n,e){const t=Wu(),r="(default)",s=Ii(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=pg("firestore");a&&Qb(s,...a)}return s}function Zd(n){if(n._terminated)throw new ce(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xb(n),n._firestoreClient}function Xb(n){var e,t,r;const s=n._freezeSettings(),a=function(h,f,p,y){return new SD(h,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,_C(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $b(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ba(Gt.fromBase64String(e))}catch(t){throw new ce(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ba(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=/^__.*__$/;class Zb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yu(e,this.data,t,this.fieldTransforms)}}class EC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new vs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class tf{constructor(e,t,r,s,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return _d(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(wC(this.Mu)&&Jb.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class eL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Kd(e)}$u(e,t,r,s=!1){return new tf({Mu:e,methodName:t,Ku:r,path:Ht.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o_(n){const e=n._freezeSettings(),t=Kd(n._databaseId);return new eL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tL(n,e,t,r,s,a={}){const l=n.$u(a.merge||a.mergeFields?2:0,e,t,s);u_("Data must be an object, but it was:",l,r);const h=TC(r,l);let f,p;if(a.merge)f=new bn(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const E of a.mergeFields){const w=Km(e,E,t);if(!l.contains(w))throw new ce(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);CC(y,w)||y.push(w)}f=new bn(y),p=l.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,p=l.fieldTransforms;return new Zb(new Tn(h),f,p)}class nf extends ec{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nf}}function nL(n,e,t){return new tf({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class a_ extends ec{_toFieldTransform(e){return new VI(e.path,new Ou)}isEqual(e){return e instanceof a_}}class l_ extends ec{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=nL(this,e,!0),r=this.Uu.map(a=>Za(a,t)),s=new Fa(r);return new VI(e.path,s)}isEqual(e){return e instanceof l_&&xa(this.Uu,e.Uu)}}function rL(n,e,t,r){const s=n.$u(1,e,t);u_("Data must be an object, but it was:",s,r);const a=[],l=Tn.empty();ys(r,(f,p)=>{const y=c_(e,f,t);p=Ge(p);const E=s.Bu(y);if(p instanceof nf)a.push(y);else{const w=Za(p,E);w!=null&&(a.push(y),l.set(y,w))}});const h=new bn(a);return new EC(l,h,s.fieldTransforms)}function iL(n,e,t,r,s,a){const l=n.$u(1,e,t),h=[Km(e,r,t)],f=[s];if(a.length%2!=0)throw new ce(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)h.push(Km(e,a[w])),f.push(a[w+1]);const p=[],y=Tn.empty();for(let w=h.length-1;w>=0;--w)if(!CC(p,h[w])){const C=h[w];let P=f[w];P=Ge(P);const V=l.Bu(C);if(P instanceof nf)p.push(C);else{const b=Za(P,V);b!=null&&(p.push(C),y.set(C,b))}}const E=new bn(p);return new EC(y,E,l.fieldTransforms)}function sL(n,e,t,r=!1){return Za(t,n.$u(r?4:3,e))}function Za(n,e){if(IC(n=Ge(n)))return u_("Unsupported field value:",e,n),TC(n,e);if(n instanceof ec)return function(r,s){if(!wC(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const a=[];let l=0;for(const h of r){let f=Za(h,s.ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=_t.fromDate(r);return{timestampValue:dd(s.serializer,a)}}if(r instanceof _t){const a=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dd(s.serializer,a)}}if(r instanceof i_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ba)return{bytesValue:WI(s.serializer,r._byteString)};if(r instanceof on){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.qu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:zg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof s_)return function(l,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw h.qu("VectorValues must only contain numeric values.");return Ug(h.serializer,f)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Xd(r)}`)}(n,e)}function TC(n,e){const t={};return _I(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(n,(r,s)=>{const a=Za(s,e.Ou(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function IC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof i_||n instanceof Ba||n instanceof on||n instanceof ec||n instanceof s_)}function u_(n,e,t){if(!IC(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xd(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Km(n,e,t){if((e=Ge(e))instanceof ef)return e._internalPath;if(typeof e=="string")return c_(n,e);throw _d("Field path arguments must be of type string or ",n,!1,void 0,t)}const oL=new RegExp("[~\\*/\\[\\]]");function c_(n,e,t){if(e.search(oL)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _d(n,e,t,r,s){const a=r&&!r.isEmpty(),l=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${r}`),l&&(f+=` in document ${s}`),f+=")"),new ce(K.INVALID_ARGUMENT,h+n+f)}function CC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(h_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aL extends SC{data(){return super.data()}}function h_(n,e){return typeof e=="string"?c_(n,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class d_{}class lL extends d_{}function uL(n,e,...t){let r=[];e instanceof d_&&r.push(e),r=r.concat(t),function(a){const l=a.filter(f=>f instanceof f_).length,h=a.filter(f=>f instanceof rf).length;if(l>1||l>0&&h>0)throw new ce(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class rf extends lL{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new rf(e,t,r)}_apply(e){const t=this._parse(e);return AC(e._query,t),new Eo(e.firestore,e.converter,Fm(e._query,t))}_parse(e){const t=o_(e.firestore);return function(a,l,h,f,p,y,E){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ce(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Kw(E,y);const C=[];for(const P of E)C.push(Gw(f,a,P));w={arrayValue:{values:C}}}else w=Gw(f,a,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Kw(E,y),w=sL(h,l,E,y==="in"||y==="not-in");return Tt.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cL(n,e,t){const r=e,s=h_("where",n);return rf._create(s,r,t)}class f_ extends d_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new f_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:vr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let l=s;const h=a.getFlattenedFilters();for(const f of h)AC(l,f),l=Fm(l,f)}(e._query,t),new Eo(e.firestore,e.converter,Fm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gw(n,e,t){if(typeof(t=Ge(t))=="string"){if(t==="")throw new ce(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RI(e)&&t.indexOf("/")!==-1)throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(it.fromString(t));if(!me.isDocumentKey(r))throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fw(n,new me(r))}if(t instanceof on)return fw(n,t._key);throw new ce(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xd(t)}.`)}function Kw(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AC(n,e){const t=function(s,a){for(const l of s)for(const h of l.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class hL{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ys(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(l=>mt(l.doubleValue));return new s_(a)}convertGeoPoint(e){return new i_(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nu(e));default:return null}}convertTimestamp(e){const t=ls(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=it.fromString(e);qe(YI(r));const s=new xu(r.get(1),r.get(3)),a=new me(r.popFirst(5));return s.isEqual(t)||vi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kC extends SC{constructor(e,t,r,s,a,l){super(e,t,r,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(h_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class $h extends kC{data(e={}){return super.data(e)}}class PC{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fu(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new $h(this._firestore,this._userDataWriter,r.key,r,new fu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map(h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fu(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new $h(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fu(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,y=-1;return h.type!==0&&(p=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),y=l.indexOf(h.doc.key)),{type:fL(h.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n){n=Kn(n,on);const e=Kn(n.firestore,co);return Hb(Zd(e),n._key).then(t=>OC(e,n,t))}class p_ extends hL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ba(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,t)}}function pL(n){n=Kn(n,Eo);const e=Kn(n.firestore,co),t=Zd(e),r=new p_(e);return RC(n._query),Gb(t,n._query).then(s=>new PC(e,r,n,s))}function io(n,e,t){n=Kn(n,on);const r=Kn(n.firestore,co),s=dL(n.converter,e,t);return DC(r,[tL(o_(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Lr.none())])}function es(n,e,t,...r){n=Kn(n,on);const s=Kn(n.firestore,co),a=o_(s);let l;return l=typeof(e=Ge(e))=="string"||e instanceof ef?iL(a,"updateDoc",n._key,e,t,r):rL(a,"updateDoc",n._key,e),DC(s,[l.toMutation(n._key,Lr.exists(!0))])}function xC(n,...e){var t,r,s;n=Ge(n);let a={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||Hw(e[l])||(a=e[l],l++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Hw(e[l])){const E=e[l];e[l]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[l+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[l+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,p,y;if(n instanceof on)p=Kn(n.firestore,co),y=zd(n._key.path),f={next:E=>{e[l]&&e[l](OC(p,n,E))},error:e[l+1],complete:e[l+2]};else{const E=Kn(n,Eo);p=Kn(E.firestore,co),y=E._query;const w=new p_(p);f={next:C=>{e[l]&&e[l](new PC(p,w,E,C))},error:e[l+1],complete:e[l+2]},RC(n._query)}return function(w,C,P,V){const b=new r_(V),q=new t_(C,b,P);return w.asyncQueue.enqueueAndForget(async()=>Jg(await gd(w),q)),()=>{b.eu(),w.asyncQueue.enqueueAndForget(async()=>Zg(await gd(w),q))}}(Zd(p),y,h,f)}function DC(n,e){return function(r,s){const a=new pi;return r.asyncQueue.enqueueAndForget(async()=>bb(await qb(r),s,a)),a.promise}(Zd(n),e)}function OC(n,e,t){const r=t.docs.get(e._key),s=new p_(n);return new kC(n,s,e._key,r,new fu(t.hasPendingWrites,t.fromCache),e.converter)}function wa(){return new a_("serverTimestamp")}function mL(...n){return new l_("arrayUnion",n)}(function(e,t=!0){(function(s){Qa=s})(ms),Qn(new Mn("firestore",(r,{instanceIdentifier:s,options:a})=>{const l=r.getProvider("app").getImmediate(),h=new co(new lD(r.getProvider("auth-internal")),new dD(r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new ce(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xu(p.options.projectId,y)}(l,s),l);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),sn(aw,"4.7.5",e),sn(aw,"4.7.5","esm2017")})();const gL={apiKey:"AIzaSyCptx2rVC70XSEeH--Nt6bwOnYjq0Qc73c",authDomain:"chatapp-d494a.firebaseapp.com",projectId:"chatapp-d494a",storageBucket:"chatapp-d494a.firebasestorage.app",messagingSenderId:"798826592422",appId:"1:798826592422:web:6edfab05e70dfccc6e5c67",measurementId:"G-M8JR2LDNHN"},_L=tT(gL);c1(_L);const ho=Px();nD();const Ft=Yb(),wo=$.createContext(),yL=({children:n})=>{const[e,t]=$.useState({});return $.useEffect(()=>{const r=_N(ho,s=>{t(s),console.log(s)});return()=>r()},[]),Z.jsxs(wo.Provider,{value:{currentUser:e},children:[n," "]})};var nu={},Qw;function vL(){if(Qw)return nu;Qw=1,Object.defineProperty(nu,"__esModule",{value:!0}),nu.parse=l,nu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function l(w,C){const P=new a,V=w.length;if(V<2)return P;const b=(C==null?void 0:C.decode)||y;let q=0;do{const Q=w.indexOf("=",q);if(Q===-1)break;const te=w.indexOf(";",q),se=te===-1?V:te;if(Q>se){q=w.lastIndexOf(";",Q-1)+1;continue}const Se=h(w,q,Q),ve=f(w,Q,Se),D=w.slice(Se,ve);if(P[D]===void 0){let S=h(w,Q+1,se),A=f(w,se,S);const x=b(w.slice(S,A));P[D]=x}q=se+1}while(q<V);return P}function h(w,C,P){do{const V=w.charCodeAt(C);if(V!==32&&V!==9)return C}while(++C<P);return P}function f(w,C,P){for(;C>P;){const V=w.charCodeAt(--C);if(V!==32&&V!==9)return C+1}return P}function p(w,C,P){const V=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const b=V(C);if(!e.test(b))throw new TypeError(`argument val is invalid: ${C}`);let q=w+"="+b;if(!P)return q;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);q+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);q+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);q+="; Path="+P.path}if(P.expires){if(!E(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);q+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(q+="; HttpOnly"),P.secure&&(q+="; Secure"),P.partitioned&&(q+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return q}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return s.call(w)==="[object Date]"}return nu}vL();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yw="popstate";function EL(n={}){function e(r,s){let{pathname:a,search:l,hash:h}=r.location;return Qm("",{pathname:a,search:l,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Lu(s)}return TL(e,t,null,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Er(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wL(){return Math.random().toString(36).substring(2,10)}function Xw(n,e){return{usr:n.state,key:n.key,idx:e}}function Qm(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?el(e):e,state:t,key:e&&e.key||r||wL()}}function Lu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function el(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function TL(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:a=!1}=r,l=s.history,h="POP",f=null,p=y();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function y(){return(l.state||{idx:null}).idx}function E(){h="POP";let b=y(),q=b==null?null:b-p;p=b,f&&f({action:h,location:V.location,delta:q})}function w(b,q){h="PUSH";let Q=Qm(V.location,b,q);p=y()+1;let te=Xw(Q,p),se=V.createHref(Q);try{l.pushState(te,"",se)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;s.location.assign(se)}a&&f&&f({action:h,location:V.location,delta:1})}function C(b,q){h="REPLACE";let Q=Qm(V.location,b,q);p=y();let te=Xw(Q,p),se=V.createHref(Q);l.replaceState(te,"",se),a&&f&&f({action:h,location:V.location,delta:0})}function P(b){let q=s.location.origin!=="null"?s.location.origin:s.location.href,Q=typeof b=="string"?b:Lu(b);return Q=Q.replace(/ $/,"%20"),at(q,`No window.location.(origin|href) available to create URL for href: ${Q}`),new URL(Q,q)}let V={get action(){return h},get location(){return n(s,l)},listen(b){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Yw,E),f=b,()=>{s.removeEventListener(Yw,E),f=null}},createHref(b){return e(s,b)},createURL:P,encodeLocation(b){let q=P(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:C,go(b){return l.go(b)}};return V}function bC(n,e,t="/"){return IL(n,e,t,!1)}function IL(n,e,t,r){let s=typeof e=="string"?el(e):e,a=ds(s.pathname||"/",t);if(a==null)return null;let l=LC(n);CL(l);let h=null;for(let f=0;h==null&&f<l.length;++f){let p=LL(a);h=OL(l[f],p,r)}return h}function LC(n,e=[],t=[],r=""){let s=(a,l,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(at(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let p=mi([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(at(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),LC(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:xL(p,a.index),routesMeta:y})};return n.forEach((a,l)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))s(a,l);else for(let f of MC(a.path))s(a,l,f)}),e}function MC(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let l=MC(r.join("/")),h=[];return h.push(...l.map(f=>f===""?a:[a,f].join("/"))),s&&h.push(...l),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function CL(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:DL(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var SL=/^:[\w-]+$/,RL=3,AL=2,kL=1,PL=10,NL=-2,Jw=n=>n==="*";function xL(n,e){let t=n.split("/"),r=t.length;return t.some(Jw)&&(r+=NL),e&&(r+=AL),t.filter(s=>!Jw(s)).reduce((s,a)=>s+(SL.test(a)?RL:a===""?kL:PL),r)}function DL(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function OL(n,e,t=!1){let{routesMeta:r}=n,s={},a="/",l=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",E=yd({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),w=f.route;if(!E&&p&&t&&!r[r.length-1].route.index&&(E=yd({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!E)return null;Object.assign(s,E.params),l.push({params:s,pathname:mi([a,E.pathname]),pathnameBase:UL(mi([a,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(a=mi([a,E.pathnameBase]))}return l}function yd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=bL(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:E},w)=>{if(y==="*"){let P=h[w]||"";l=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const C=h[w];return E&&!C?p[y]=void 0:p[y]=(C||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:n}}function bL(n,e=!1,t=!0){Er(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function LL(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Er(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ds(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function ML(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?el(n):n;return{pathname:t?t.startsWith("/")?t:VL(t,e):e,search:jL(r),hash:BL(s)}}function VL(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function hm(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FL(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m_(n){let e=FL(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function g_(n,e,t,r=!1){let s;typeof n=="string"?s=el(n):(s={...n},at(!s.pathname||!s.pathname.includes("?"),hm("?","pathname","search",s)),at(!s.pathname||!s.pathname.includes("#"),hm("#","pathname","hash",s)),at(!s.search||!s.search.includes("#"),hm("#","search","hash",s)));let a=n===""||s.pathname==="",l=a?"/":s.pathname,h;if(l==null)h=t;else{let E=e.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),E-=1;s.pathname=w.join("/")}h=E>=0?e[E]:"/"}let f=ML(s,h),p=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}var mi=n=>n.join("/").replace(/\/\/+/g,"/"),UL=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jL=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,BL=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zL(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var VC=["POST","PUT","PATCH","DELETE"];new Set(VC);var $L=["GET",...VC];new Set($L);var tl=$.createContext(null);tl.displayName="DataRouter";var sf=$.createContext(null);sf.displayName="DataRouterState";var FC=$.createContext({isTransitioning:!1});FC.displayName="ViewTransition";var WL=$.createContext(new Map);WL.displayName="Fetchers";var qL=$.createContext(null);qL.displayName="Await";var wr=$.createContext(null);wr.displayName="Navigation";var tc=$.createContext(null);tc.displayName="Location";var Br=$.createContext({outlet:null,matches:[],isDataRoute:!1});Br.displayName="Route";var __=$.createContext(null);__.displayName="RouteError";function HL(n,{relative:e}={}){at(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=$.useContext(wr),{hash:s,pathname:a,search:l}=nc(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:mi([t,a])),r.createHref({pathname:h,search:l,hash:s})}function nl(){return $.useContext(tc)!=null}function Es(){return at(nl(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(tc).location}var UC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jC(n){$.useContext(wr).static||$.useLayoutEffect(n)}function of(){let{isDataRoute:n}=$.useContext(Br);return n?sM():GL()}function GL(){at(nl(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(tl),{basename:e,navigator:t}=$.useContext(wr),{matches:r}=$.useContext(Br),{pathname:s}=Es(),a=JSON.stringify(m_(r)),l=$.useRef(!1);return jC(()=>{l.current=!0}),$.useCallback((f,p={})=>{if(Er(l.current,UC),!l.current)return;if(typeof f=="number"){t.go(f);return}let y=g_(f,JSON.parse(a),s,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:mi([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,a,s,n])}$.createContext(null);function nc(n,{relative:e}={}){let{matches:t}=$.useContext(Br),{pathname:r}=Es(),s=JSON.stringify(m_(t));return $.useMemo(()=>g_(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function KL(n,e){return BC(n,e)}function BC(n,e,t,r){var q;at(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=$.useContext(wr),{matches:a}=$.useContext(Br),l=a[a.length-1],h=l?l.params:{},f=l?l.pathname:"/",p=l?l.pathnameBase:"/",y=l&&l.route;{let Q=y&&y.path||"";zC(f,!y||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let E=Es(),w;if(e){let Q=typeof e=="string"?el(e):e;at(p==="/"||((q=Q.pathname)==null?void 0:q.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),w=Q}else w=E;let C=w.pathname||"/",P=C;if(p!=="/"){let Q=p.replace(/^\//,"").split("/");P="/"+C.replace(/^\//,"").split("/").slice(Q.length).join("/")}let V=bC(n,{pathname:P});Er(y||V!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Er(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=ZL(V&&V.map(Q=>Object.assign({},Q,{params:Object.assign({},h,Q.params),pathname:mi([p,s.encodeLocation?s.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?p:mi([p,s.encodeLocation?s.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),a,t,r);return e&&b?$.createElement(tc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},b):b}function QL(){let n=iM(),e=zL(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",n),l=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:a},"ErrorBoundary")," or"," ",$.createElement("code",{style:a},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:s},t):null,l)}var YL=$.createElement(QL,null),XL=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Br.Provider,{value:this.props.routeContext},$.createElement(__.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JL({routeContext:n,match:e,children:t}){let r=$.useContext(tl);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Br.Provider,{value:n},t)}function ZL(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t==null?void 0:t.errors;if(a!=null){let f=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);at(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,h=-1;if(t)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:y,errors:E}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||w){l=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((f,p,y)=>{let E,w=!1,C=null,P=null;t&&(E=a&&p.route.id?a[p.route.id]:void 0,C=p.route.errorElement||YL,l&&(h<0&&y===0?(zC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):h===y&&(w=!0,P=p.route.hydrateFallbackElement||null)));let V=e.concat(s.slice(0,y+1)),b=()=>{let q;return E?q=C:w?q=P:p.route.Component?q=$.createElement(p.route.Component,null):p.route.element?q=p.route.element:q=f,$.createElement(JL,{match:p,routeContext:{outlet:f,matches:V,isDataRoute:t!=null},children:q})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?$.createElement(XL,{location:t.location,revalidation:t.revalidation,component:C,error:E,children:b(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):b()},null)}function y_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eM(n){let e=$.useContext(tl);return at(e,y_(n)),e}function tM(n){let e=$.useContext(sf);return at(e,y_(n)),e}function nM(n){let e=$.useContext(Br);return at(e,y_(n)),e}function v_(n){let e=nM(n),t=e.matches[e.matches.length-1];return at(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function rM(){return v_("useRouteId")}function iM(){var r;let n=$.useContext(__),e=tM("useRouteError"),t=v_("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function sM(){let{router:n}=eM("useNavigate"),e=v_("useNavigate"),t=$.useRef(!1);return jC(()=>{t.current=!0}),$.useCallback(async(s,a={})=>{Er(t.current,UC),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...a}))},[n,e])}var Zw={};function zC(n,e,t){!e&&!Zw[n]&&(Zw[n]=!0,Er(!1,t))}$.memo(oM);function oM({routes:n,future:e,state:t}){return BC(n,void 0,t,e)}function aM({to:n,replace:e,state:t,relative:r}){at(nl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=$.useContext(wr);Er(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=$.useContext(Br),{pathname:l}=Es(),h=of(),f=g_(n,m_(a),l,r==="path"),p=JSON.stringify(f);return $.useEffect(()=>{h(JSON.parse(p),{replace:e,state:t,relative:r})},[h,p,r,e,t]),null}function Wh(n){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lM({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:a=!1}){at(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),h=$.useMemo(()=>({basename:l,navigator:s,static:a,future:{}}),[l,s,a]);typeof t=="string"&&(t=el(t));let{pathname:f="/",search:p="",hash:y="",state:E=null,key:w="default"}=t,C=$.useMemo(()=>{let P=ds(f,l);return P==null?null:{location:{pathname:P,search:p,hash:y,state:E,key:w},navigationType:r}},[l,f,p,y,E,w,r]);return Er(C!=null,`<Router basename="${l}"> is not able to match the URL "${f}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:$.createElement(wr.Provider,{value:h},$.createElement(tc.Provider,{children:e,value:C}))}function uM({children:n,location:e}){return KL(Ym(n),e)}function Ym(n,e=[]){let t=[];return $.Children.forEach(n,(r,s)=>{if(!$.isValidElement(r))return;let a=[...e,s];if(r.type===$.Fragment){t.push.apply(t,Ym(r.props.children,a));return}at(r.type===Wh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ym(r.props.children,a)),t.push(l)}),t}var qh="get",Hh="application/x-www-form-urlencoded";function af(n){return n!=null&&typeof n.tagName=="string"}function cM(n){return af(n)&&n.tagName.toLowerCase()==="button"}function hM(n){return af(n)&&n.tagName.toLowerCase()==="form"}function dM(n){return af(n)&&n.tagName.toLowerCase()==="input"}function fM(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function pM(n,e){return n.button===0&&(!e||e==="_self")&&!fM(n)}var xh=null;function mM(){if(xh===null)try{new FormData(document.createElement("form"),0),xh=!1}catch{xh=!0}return xh}var gM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dm(n){return n!=null&&!gM.has(n)?(Er(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hh}"`),null):n}function _M(n,e){let t,r,s,a,l;if(hM(n)){let h=n.getAttribute("action");r=h?ds(h,e):null,t=n.getAttribute("method")||qh,s=dm(n.getAttribute("enctype"))||Hh,a=new FormData(n)}else if(cM(n)||dM(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(r=f?ds(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||qh,s=dm(n.getAttribute("formenctype"))||dm(h.getAttribute("enctype"))||Hh,a=new FormData(h,n),!mM()){let{name:p,type:y,value:E}=n;if(y==="image"){let w=p?`${p}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else p&&a.append(p,E)}}else{if(af(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=qh,r=null,s=Hh,l=n}return a&&s==="text/plain"&&(l=a,a=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:a,body:l}}function E_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function yM(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vM(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function EM(n,e,t){let r=await Promise.all(n.map(async s=>{let a=e.routes[s.route.id];if(a){let l=await yM(a,t);return l.links?l.links():[]}return[]}));return CM(r.flat(1).filter(vM).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function e0(n,e,t,r,s,a){let l=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,h=(f,p)=>{var y;return t[p].pathname!==f.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,p)=>l(f,p)||h(f,p)):a==="data"?e.filter((f,p)=>{var E;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(l(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let w=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function wM(n,e){return TM(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function TM(n){return[...new Set(n)]}function IM(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function CM(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let a=JSON.stringify(IM(s));return t.has(a)||(t.add(a),r.push({key:a,link:s})),r},[])}function SM(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function RM(){let n=$.useContext(tl);return E_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function AM(){let n=$.useContext(sf);return E_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var w_=$.createContext(void 0);w_.displayName="FrameworkContext";function $C(){let n=$.useContext(w_);return E_(n,"You must render this element inside a <HydratedRouter> element"),n}function kM(n,e){let t=$.useContext(w_),[r,s]=$.useState(!1),[a,l]=$.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:y,onTouchStart:E}=e,w=$.useRef(null);$.useEffect(()=>{if(n==="render"&&l(!0),n==="viewport"){let V=q=>{q.forEach(Q=>{l(Q.isIntersecting)})},b=new IntersectionObserver(V,{threshold:.5});return w.current&&b.observe(w.current),()=>{b.disconnect()}}},[n]),$.useEffect(()=>{if(r){let V=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(V)}}},[r]);let C=()=>{s(!0)},P=()=>{s(!1),l(!1)};return t?n!=="intent"?[a,w,{}]:[a,w,{onFocus:ru(h,C),onBlur:ru(f,P),onMouseEnter:ru(p,C),onMouseLeave:ru(y,P),onTouchStart:ru(E,C)}]:[!1,w,{}]}function ru(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function PM({page:n,...e}){let{router:t}=RM(),r=$.useMemo(()=>bC(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?$.createElement(xM,{page:n,matches:r,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function NM(n){let{manifest:e,routeModules:t}=$C(),[r,s]=$.useState([]);return $.useEffect(()=>{let a=!1;return EM(n,e,t).then(l=>{a||s(l)}),()=>{a=!0}},[n,e,t]),r}function xM({page:n,matches:e,...t}){let r=Es(),{manifest:s,routeModules:a}=$C(),{loaderData:l,matches:h}=AM(),f=$.useMemo(()=>e0(n,e,h,s,r,"data"),[n,e,h,s,r]),p=$.useMemo(()=>e0(n,e,h,s,r,"assets"),[n,e,h,s,r]),y=$.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let C=new Set,P=!1;if(e.forEach(b=>{var Q;let q=s.routes[b.route.id];!q||!q.hasLoader||(!f.some(te=>te.route.id===b.route.id)&&b.route.id in l&&((Q=a[b.route.id])!=null&&Q.shouldRevalidate)||q.hasClientLoader?P=!0:C.add(b.route.id))}),C.size===0)return[];let V=SM(n);return P&&C.size>0&&V.searchParams.set("_routes",e.filter(b=>C.has(b.route.id)).map(b=>b.route.id).join(",")),[V.pathname+V.search]},[l,r,s,f,e,n,a]),E=$.useMemo(()=>wM(p,s),[p,s]),w=NM(p);return $.createElement($.Fragment,null,y.map(C=>$.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),E.map(C=>$.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),w.map(({key:C,link:P})=>$.createElement("link",{key:C,...P})))}function DM(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var WC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{WC&&(window.__reactRouterVersion="7.0.2")}catch{}function OM({basename:n,children:e,window:t}){let r=$.useRef();r.current==null&&(r.current=EL({window:t,v5Compat:!0}));let s=r.current,[a,l]=$.useState({action:s.action,location:s.location}),h=$.useCallback(f=>{$.startTransition(()=>l(f))},[l]);return $.useLayoutEffect(()=>s.listen(h),[s,h]),$.createElement(lM,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s})}var qC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lf=$.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:a,replace:l,state:h,target:f,to:p,preventScrollReset:y,viewTransition:E,...w},C){let{basename:P}=$.useContext(wr),V=typeof p=="string"&&qC.test(p),b,q=!1;if(typeof p=="string"&&V&&(b=p,WC))try{let A=new URL(window.location.href),x=p.startsWith("//")?new URL(A.protocol+p):new URL(p),L=ds(x.pathname,P);x.origin===A.origin&&L!=null?p=L+x.search+x.hash:q=!0}catch{Er(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=HL(p,{relative:s}),[te,se,Se]=kM(r,w),ve=VM(p,{replace:l,state:h,target:f,preventScrollReset:y,relative:s,viewTransition:E});function D(A){e&&e(A),A.defaultPrevented||ve(A)}let S=$.createElement("a",{...w,...Se,href:b||Q,onClick:q||a?e:D,ref:DM(C,se),target:f,"data-discover":!V&&t==="render"?"true":void 0});return te&&!V?$.createElement($.Fragment,null,S,$.createElement(PM,{page:Q})):S});lf.displayName="Link";var bM=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:a,to:l,viewTransition:h,children:f,...p},y){let E=nc(l,{relative:p.relative}),w=Es(),C=$.useContext(sf),{navigator:P,basename:V}=$.useContext(wr),b=C!=null&&zM(E)&&h===!0,q=P.encodeLocation?P.encodeLocation(E).pathname:E.pathname,Q=w.pathname,te=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(Q=Q.toLowerCase(),te=te?te.toLowerCase():null,q=q.toLowerCase()),te&&V&&(te=ds(te,V)||te);const se=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let Se=Q===q||!s&&Q.startsWith(q)&&Q.charAt(se)==="/",ve=te!=null&&(te===q||!s&&te.startsWith(q)&&te.charAt(q.length)==="/"),D={isActive:Se,isPending:ve,isTransitioning:b},S=Se?e:void 0,A;typeof r=="function"?A=r(D):A=[r,Se?"active":null,ve?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(D):a;return $.createElement(lf,{...p,"aria-current":S,className:A,ref:y,style:x,to:l,viewTransition:h},typeof f=="function"?f(D):f)});bM.displayName="NavLink";var LM=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:a,method:l=qh,action:h,onSubmit:f,relative:p,preventScrollReset:y,viewTransition:E,...w},C)=>{let P=jM(),V=BM(h,{relative:p}),b=l.toLowerCase()==="get"?"get":"post",q=typeof h=="string"&&qC.test(h),Q=te=>{if(f&&f(te),te.defaultPrevented)return;te.preventDefault();let se=te.nativeEvent.submitter,Se=(se==null?void 0:se.getAttribute("formmethod"))||l;P(se||te.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:s,state:a,relative:p,preventScrollReset:y,viewTransition:E})};return $.createElement("form",{ref:C,method:b,action:V,onSubmit:r?f:Q,...w,"data-discover":!q&&n==="render"?"true":void 0})});LM.displayName="Form";function MM(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function HC(n){let e=$.useContext(tl);return at(e,MM(n)),e}function VM(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:a,viewTransition:l}={}){let h=of(),f=Es(),p=nc(n,{relative:a});return $.useCallback(y=>{if(pM(y,e)){y.preventDefault();let E=t!==void 0?t:Lu(f)===Lu(p);h(n,{replace:E,state:r,preventScrollReset:s,relative:a,viewTransition:l})}},[f,h,p,t,r,e,n,s,a,l])}var FM=0,UM=()=>`__${String(++FM)}__`;function jM(){let{router:n}=HC("useSubmit"),{basename:e}=$.useContext(wr),t=rM();return $.useCallback(async(r,s={})=>{let{action:a,method:l,encType:h,formData:f,body:p}=_M(r,e);if(s.navigate===!1){let y=s.fetcherKey||UM();await n.fetch(y,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||l,formEncType:s.encType||h,flushSync:s.flushSync})}else await n.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||l,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function BM(n,{relative:e}={}){let{basename:t}=$.useContext(wr),r=$.useContext(Br);at(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),a={...nc(n||".",{relative:e})},l=Es();if(n==null){a.search=l.search;let h=new URLSearchParams(a.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(E=>E).forEach(E=>h.append("index",E));let y=h.toString();a.search=y?`?${y}`:""}}return(!n||n===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:mi([t,a.pathname])),Lu(a)}function zM(n,e={}){let t=$.useContext(FC);at(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=HC("useViewTransitionState"),s=nc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ds(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=ds(t.nextLocation.pathname,r)||t.nextLocation.pathname;return yd(s.pathname,l)!=null||yd(s.pathname,a)!=null}new TextEncoder;function $M(){const{currentUser:n}=$.useContext(wo),e=async()=>{try{const t=ho.currentUser;t&&await io(nn(Ft,"users",t.uid),{status:"offline"},{merge:!0}),await yN(ho),console.log("User logged out successfully.")}catch(t){console.error("Error during logout:",t)}};return Z.jsx(Z.Fragment,{children:Z.jsxs("div",{className:"userdiv",children:[Z.jsx("p",{children:n==null?void 0:n.photoURL}),Z.jsx("p",{children:n==null?void 0:n.displayName}),Z.jsx("button",{onClick:e,children:"Sign Out"})]})})}const rl=$.createContext(),WM=({children:n})=>{const{currentUser:e}=$.useContext(wo),t={chatId:"null",user:{}},r=(l,h)=>{switch(h.type){case"CHANGE_USER":return{...l,user:h.payload,chatId:e.uid>h.payload.uid?e.uid+h.payload.uid:h.payload.uid+e.uid};default:return l}},[s,a]=$.useReducer(r,t);return Z.jsx(rl.Provider,{value:{data:s,dispatch:a},children:n})};var t0={};const n0="@firebase/database",r0="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GC="";function qM(n){GC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ru(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HM(e)}}catch{}return new GM},to=KC("localStorage"),KM=KC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new $u("@firebase/database"),QM=function(){let n=1;return function(){return n++}}(),QC=function(n){const e=MA(n),t=new DA;t.update(e);const r=t.digest();return fg.encodeByteArray(r)},rc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=rc.apply(null,r):typeof r=="object"?e+=Ut(r):e+=r,e+=" "}return e};let wu=null,i0=!0;const YM=function(n,e){ne(!e,"Can't turn on custom loggers persistently."),Aa.logLevel=Oe.VERBOSE,wu=Aa.log.bind(Aa)},qt=function(...n){if(i0===!0&&(i0=!1,wu===null&&KM.get("logging_enabled")===!0&&YM()),wu){const e=rc.apply(null,n);wu(e)}},ic=function(n){return function(...e){qt(n,...e)}},Xm=function(...n){const e="FIREBASE INTERNAL ERROR: "+rc(...n);Aa.error(e)},wi=function(...n){const e=`FIREBASE FATAL ERROR: ${rc(...n)}`;throw Aa.error(e),new Error(e)},Rn=function(...n){const e="FIREBASE WARNING: "+rc(...n);Aa.warn(e)},XM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},JM=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},za="[MIN_NAME]",fo="[MAX_NAME]",To=function(n,e){if(n===e)return 0;if(n===za||e===fo)return-1;if(e===za||n===fo)return 1;{const t=s0(n),r=s0(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},ZM=function(n,e){return n===e?0:n<e?-1:1},iu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},T_=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ut(e[r]),t+=":",t+=T_(n[e[r]]);return t+="}",t},YC=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function ln(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const XC=function(n){ne(!uf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,l,h,f;n===0?(a=0,l=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,l=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,l=Math.round(n/Math.pow(2,1-r-t))));const p=[];for(f=t;f;f-=1)p.push(l%2?1:0),l=Math.floor(l/2);for(f=e;f;f-=1)p.push(a%2?1:0),a=Math.floor(a/2);p.push(s?1:0),p.reverse();const y=p.join("");let E="";for(f=0;f<64;f+=8){let w=parseInt(y.substr(f,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},eV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nV(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const rV=new RegExp("^-?(0*)\\d{1,10}$"),iV=-2147483648,sV=2147483647,s0=function(n){if(rV.test(n)){const e=Number(n);if(e>=iV&&e<=sV)return e}return null},il=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Rn("Exception was thrown by user callback.",t),e},Math.floor(0))}},oV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Rn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rn(e)}}class Gh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="5",JC="v",ZC="s",eS="r",tS="f",nS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rS="ls",iS="p",Jm="ac",sS="websocket",oS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,r,s,a=!1,l="",h=!1,f=!1){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=l,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=to.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&to.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function uV(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function lS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===sS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===oS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uV(n)&&(t.ns=n.namespace);const s=[];return ln(t,(a,l)=>{s.push(a+"="+l)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(){this.counters_={}}incrementCounter(e,t=1){Ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return gA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={},pm={};function C_(n){const e=n.toString();return fm[e]||(fm[e]=new cV),fm[e]}function hV(n,e){const t=n.toString();return pm[t]||(pm[t]=e()),pm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&il(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="start",fV="close",pV="pLPCommand",mV="pRTLPCB",uS="id",cS="pw",hS="ser",gV="cb",_V="seg",yV="ts",vV="d",EV="dframe",dS=1870,fS=30,wV=dS-fS,TV=25e3,IV=3e4;class Ta{constructor(e,t,r,s,a,l,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=l,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ic(e),this.stats_=C_(t),this.urlFn=f=>(this.appCheckToken&&(f[Jm]=this.appCheckToken),lS(t,oS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IV)),JM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new S_((...a)=>{const[l,h,f,p,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===o0)this.id=h,this.password=f;else if(l===fV)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...a)=>{const[l,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(l,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[o0]="t",r[hS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[JC]=I_,this.transportSessionId&&(r[ZC]=this.transportSessionId),this.lastSessionId&&(r[rS]=this.lastSessionId),this.applicationId&&(r[iS]=this.applicationId),this.appCheckToken&&(r[Jm]=this.appCheckToken),typeof location<"u"&&location.hostname&&nS.test(location.hostname)&&(r[eS]=tS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ta.forceAllow_=!0}static forceDisallow(){Ta.forceDisallow_=!0}static isAvailable(){return Ta.forceAllow_?!0:!Ta.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eV()&&!tV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=B0(t),s=YC(r,wV);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[EV]="t",r[uS]=e,r[cS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class S_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QM(),window[pV+this.uniqueCallbackIdentifier]=e,window[mV+this.uniqueCallbackIdentifier]=t,this.myIFrame=S_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(h){qt("frame writing exception"),h.stack&&qt(h.stack),qt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uS]=this.myID,e[cS]=this.myPW,e[hS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fS+r.length<=dS;){const l=this.pendingSegs.shift();r=r+"&"+_V+s+"="+l.seg+"&"+yV+s+"="+l.ts+"&"+vV+s+"="+l.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(TV)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=16384,SV=45e3;let vd=null;typeof MozWebSocket<"u"?vd=MozWebSocket:typeof WebSocket<"u"&&(vd=WebSocket);class fr{constructor(e,t,r,s,a,l,h){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ic(this.connId),this.stats_=C_(t),this.connURL=fr.connectionURL_(t,l,h,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const l={};return l[JC]=I_,typeof location<"u"&&location.hostname&&nS.test(location.hostname)&&(l[eS]=tS),t&&(l[ZC]=t),r&&(l[rS]=r),s&&(l[Jm]=s),a&&(l[iS]=a),lS(e,sS,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,to.set("previous_websocket_failure",!0);try{let r;K0(),this.mySock=new vd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vd!==null&&!fr.forceDisallow_}static previouslyFailed(){return to.isInMemoryStorage||to.get("previous_websocket_failure")===!0}markConnectionHealthy(){to.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ru(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=YC(t,CV);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SV))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fr.responsesRequiredToBeHealthy=2;fr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{static get ALL_TRANSPORTS(){return[Ta,fr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=fr&&fr.isAvailable();let r=t&&!fr.previouslyFailed();if(e.webSocketOnly&&(t||Rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fr];else{const s=this.transports_=[];for(const a of Mu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Mu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=6e4,AV=5e3,kV=10*1024,PV=100*1024,mm="t",a0="d",NV="s",l0="r",xV="e",u0="o",c0="a",h0="n",d0="p",DV="h";class OV{constructor(e,t,r,s,a,l,h,f,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=l,this.onReady_=h,this.onDisconnect_=f,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ic("c:"+this.id+":"),this.transportManager_=new Mu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mm in e){const t=e[mm];t===c0?this.upgradeIfSecondaryHealthy_():t===l0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===u0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:d0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:c0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:h0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=iu(mm,e);if(a0 in e){const r=e[a0];if(t===DV){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===h0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===NV?this.onConnectionShutdown_(r):t===l0?this.onReset_(r):t===xV?Xm("Server Error: "+r):t===u0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),I_!==r&&Rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Tu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:d0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(to.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends mS{static getInstance(){return new Ed}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=32,p0=768;class Ke{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function We(){return new Ke("")}function ke(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function fs(n){return n.pieces_.length-n.pieceNum_}function Xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ke(n.pieces_,e)}function R_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bV(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function gS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ke(e,0)}function gt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ke(t,0)}function xe(n){return n.pieceNum_>=n.pieces_.length}function In(n,e){const t=ke(n),r=ke(e);if(t===null)return e;if(t===r)return In(Xe(n),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function LV(n,e){const t=Vu(n,0),r=Vu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=To(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function A_(n,e){if(fs(n)!==fs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Gn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(fs(n)>fs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class MV{constructor(e,t){this.errorPrefix_=t,this.parts_=Vu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Od(this.parts_[r]);_S(this)}}function VV(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Od(e),_S(n)}function FV(n){const e=n.parts_.pop();n.byteLength_-=Od(e),n.parts_.length>0&&(n.byteLength_-=1)}function _S(n){if(n.byteLength_>p0)throw new Error(n.errorPrefix_+"has a key path longer than "+p0+" bytes ("+n.byteLength_+").");if(n.parts_.length>f0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+f0+") or object contains a cycle "+Xs(n))}function Xs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends mS{static getInstance(){return new k_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=1e3,UV=60*5*1e3,m0=30*1e3,jV=1.3,BV=3e4,zV="server_kill",g0=3;class gi extends pS{constructor(e,t,r,s,a,l,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=l,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=gi.nextPersistentConnectionId_++,this.log_=ic("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=su,this.maxReconnectDelay_=UV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f&&!K0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");k_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ed.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Ut(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new ai,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const h=l.d;l.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+a),this.listens.has(l)||this.listens.set(l,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(l).has(a),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(l).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},l="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(l,a,h=>{const f=h.d,p=h.s;gi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",h),p!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(p,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ur(e,"w")){const r=Na(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=m0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=NA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,l=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},l="n";s&&(a.q=r,a.t=s),this.sendRequest(l,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,l=>{s&&setTimeout(()=>{s(l.s,l.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const l={p:t,d:r};a!==void 0&&(l.h=a),this.outstandingPuts_.push({action:e,request:l,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xm("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BV&&(this.reconnectDelay_=su),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gi.nextConnectionId_++,a=this.lastSessionId;let l=!1,h=null;const f=function(){h?h.close():(l=!0,r())},p=function(E){ne(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(E)};this.realtime_={close:f,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);l?qt("getToken() completed but was canceled"):(qt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,h=new OV(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,C=>{Rn(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(zV)},a))}catch(E){this.log_("Failed to get token: "+E),l||(this.repoInfo_.nodeAdmin&&Rn(E),f())}}}interrupt(e){qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=su,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>T_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ke(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){qt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=g0&&(this.reconnectDelay_=m0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){qt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=g0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+GC.replace(/\./g,"-")]=1,gg()?e["framework.cordova"]=1:G0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ed.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}gi.nextPersistentConnectionId_=0;gi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new De(za,e),s=new De(za,t);return this.compare(r,s)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;class yS extends cf{static get __EMPTY_NODE(){return Dh}static set __EMPTY_NODE(e){Dh=e}compare(e,t){return To(e.name,t.name)}isDefinedOn(e){throw Ha("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(fo,Dh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,Dh)}toString(){return".key"}}const ka=new yS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?r(e.key,t):1,s&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Vt.RED,this.left=s??Cn.EMPTY_NODE,this.right=a??Cn.EMPTY_NODE}copy(e,t,r,s,a){return new Vt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Cn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class $V{copy(e,t,r,s,a){return this}insert(e,t,r){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Cn{constructor(e,t=Cn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Cn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Cn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oh(this.root_,null,this.comparator_,!0,e)}}Cn.EMPTY_NODE=new $V;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(n,e){return To(n.name,e.name)}function P_(n,e){return To(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm;function qV(n){Zm=n}const vS=function(n){return typeof n=="number"?"number:"+XC(n):"string:"+n},ES=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ur(e,".sv"),"Priority must be a string or number.")}else ne(n===Zm||n.isEmpty(),"priority of unexpected type.");ne(n===Zm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _0;class Lt{static set __childrenNodeConstructor(e){_0=e}static get __childrenNodeConstructor(){return _0}constructor(e,t=Lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ES(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:ke(e)===".priority"?this.priorityNode_:Lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ke(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=XC(this.value_):e+=this.value_,this.lazyHash_=QC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Lt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Lt.VALUE_TYPE_ORDER.indexOf(t),a=Lt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wS,TS;function HV(n){wS=n}function GV(n){TS=n}class KV extends cf{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?To(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(fo,new Lt("[PRIORITY-POST]",TS))}makePost(e,t){const r=wS(e);return new De(t,new Lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ct=new KV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV=Math.log(2);class YV{constructor(e){const t=a=>parseInt(Math.log(a)/QV,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wd=function(n,e,t,r){n.sort(e);const s=function(f,p){const y=p-f;let E,w;if(y===0)return null;if(y===1)return E=n[f],w=t?t(E):E,new Vt(w,E.node,Vt.BLACK,null,null);{const C=parseInt(y/2,10)+f,P=s(f,C),V=s(C+1,p);return E=n[C],w=t?t(E):E,new Vt(w,E.node,Vt.BLACK,P,V)}},a=function(f){let p=null,y=null,E=n.length;const w=function(P,V){const b=E-P,q=E;E-=P;const Q=s(b+1,q),te=n[b],se=t?t(te):te;C(new Vt(se,te.node,V,null,Q))},C=function(P){p?(p.left=P,p=P):(y=P,p=P)};for(let P=0;P<f.count;++P){const V=f.nextBitIsOne(),b=Math.pow(2,f.count-(P+1));V?w(b,Vt.BLACK):(w(b,Vt.BLACK),w(b,Vt.RED))}return y},l=new YV(n.length),h=a(l);return new Cn(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gm;const ga={};class di{static get Default(){return ne(ga&&ct,"ChildrenNode.ts has not been loaded"),gm=gm||new di({".priority":ga},{".priority":ct}),gm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Na(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cn?t:null}hasIndex(e){return Ur(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==ka,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(De.Wrap);let l=a.getNext();for(;l;)s=s||e.isDefinedOn(l.node),r.push(l),l=a.getNext();let h;s?h=wd(r,e.getCompare()):h=ga;const f=e.toString(),p=Object.assign({},this.indexSet_);p[f]=e;const y=Object.assign({},this.indexes_);return y[f]=h,new di(y,p)}addToIndexes(e,t){const r=Xh(this.indexes_,(s,a)=>{const l=Na(this.indexSet_,a);if(ne(l,"Missing index implementation for "+a),s===ga)if(l.isDefinedOn(e.node)){const h=[],f=t.getIterator(De.Wrap);let p=f.getNext();for(;p;)p.name!==e.name&&h.push(p),p=f.getNext();return h.push(e),wd(h,l.getCompare())}else return ga;else{const h=t.get(e.name);let f=s;return h&&(f=f.remove(new De(e.name,h))),f.insert(e,e.node)}});return new di(r,this.indexSet_)}removeFromIndexes(e,t){const r=Xh(this.indexes_,s=>{if(s===ga)return s;{const a=t.get(e.name);return a?s.remove(new De(e.name,a)):s}});return new di(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;class we{static get EMPTY_NODE(){return ou||(ou=new we(new Cn(P_),null,di.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ES(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ou}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ou:t}}getChild(e){const t=ke(e);return t===null?this:this.getImmediateChild(t).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new De(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const l=s.isEmpty()?ou:this.priorityNode_;return new we(s,l,a)}}updateChild(e,t){const r=ke(e);if(r===null)return t;{ne(ke(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Xe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(ct,(l,h)=>{t[l]=h.val(e),r++,a&&we.INTEGER_REGEXP_.test(l)?s=Math.max(s,Number(l)):a=!1}),!e&&a&&s<2*r){const l=[];for(const h in t)l[h]=t[h];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vS(this.getPriority().val())+":"),this.forEachChild(ct,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":QC(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new De(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,De.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sc?-1:0}withIndex(e){if(e===ka||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ka||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ct),s=t.getIterator(ct);let a=r.getNext(),l=s.getNext();for(;a&&l;){if(a.name!==l.name||!a.node.equals(l.node))return!1;a=r.getNext(),l=s.getNext()}return a===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===ka?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XV extends we{constructor(){super(new Cn(P_),we.EMPTY_NODE,di.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const sc=new XV;Object.defineProperties(De,{MIN:{value:new De(za,we.EMPTY_NODE)},MAX:{value:new De(fo,sc)}});yS.__EMPTY_NODE=we.EMPTY_NODE;Lt.__childrenNodeConstructor=we;qV(sc);GV(sc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=!0;function wt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Lt(t,wt(e))}if(!(n instanceof Array)&&JV){const t=[];let r=!1;if(ln(n,(l,h)=>{if(l.substring(0,1)!=="."){const f=wt(h);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new De(l,f)))}}),t.length===0)return we.EMPTY_NODE;const a=wd(t,WV,l=>l.name,P_);if(r){const l=wd(t,ct.getCompare());return new we(a,wt(e),new di({".priority":l},{".priority":ct}))}else return new we(a,wt(e),di.Default)}else{let t=we.EMPTY_NODE;return ln(n,(r,s)=>{if(Ur(n,r)&&r.substring(0,1)!=="."){const a=wt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(wt(e))}}HV(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV extends cf{constructor(e){super(),this.indexPath_=e,ne(!xe(e)&&ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?To(e.name,t.name):a}makePost(e,t){const r=wt(e),s=we.EMPTY_NODE.updateChild(this.indexPath_,r);return new De(t,s)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,sc);return new De(fo,e)}toString(){return Vu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2 extends cf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?To(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const r=wt(e);return new De(t,r)}toString(){return".value"}}const t2=new e2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(n){return{type:"value",snapshotNode:n}}function $a(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Fu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Uu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function n2(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,l){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(s).equals(r.getChild(s))&&h.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(t)?l.trackChildChange(Fu(t,h)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?l.trackChildChange($a(t,r)):l.trackChildChange(Uu(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ct,(s,a)=>{t.hasChild(s)||r.trackChildChange(Fu(s,a))}),t.isLeafNode()||t.forEachChild(ct,(s,a)=>{if(e.hasChild(s)){const l=e.getImmediateChild(s);l.equals(a)||r.trackChildChange(Uu(s,a,l))}else r.trackChildChange($a(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.indexedFilter_=new N_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ju.getStartPost_(e),this.endPost_=ju.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,l){return this.matches(new De(t,r))||(r=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,l)}updateFullNode(e,t,r){t.isLeafNode()&&(t=we.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(we.EMPTY_NODE);const a=this;return t.forEachChild(ct,(l,h)=>{a.matches(new De(l,h))||(s=s.updateImmediateChild(l,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ju(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,l){return this.rangedFilter_.matches(new De(t,r))||(r=we.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,l):this.fullLimitUpdateChild_(e,t,r,a,l)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=we.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;a.hasNext()&&l<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))s=s.updateImmediateChild(h.name,h.node),l++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(we.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let l=0;for(;a.hasNext();){const h=a.getNext();l<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?l++:s=s.updateImmediateChild(h.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let l;if(this.reverse_){const E=this.index_.getCompare();l=(w,C)=>E(C,w)}else l=this.index_.getCompare();const h=e;ne(h.numChildren()===this.limit_,"");const f=new De(t,r),p=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const E=h.getImmediateChild(t);let w=s.getChildAfterChild(this.index_,p,this.reverse_);for(;w!=null&&(w.name===t||h.hasChild(w.name));)w=s.getChildAfterChild(this.index_,w,this.reverse_);const C=w==null?1:l(w,f);if(y&&!r.isEmpty()&&C>=0)return a!=null&&a.trackChildChange(Uu(t,r,E)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Fu(t,E));const V=h.updateImmediateChild(t,we.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange($a(w.name,w.node)),V.updateImmediateChild(w.name,w.node)):V}}else return r.isEmpty()?e:y&&l(p,f)>=0?(a!=null&&(a.trackChildChange(Fu(p.name,p.node)),a.trackChildChange($a(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(p.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new x_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i2(n){return n.loadsAllData()?new N_(n.getIndex()):n.hasLimit()?new r2(n):new ju(n)}function y0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ct?t="$priority":n.index_===t2?t="$value":n.index_===ka?t="$key":(ne(n.index_ instanceof ZV,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ut(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ut(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ut(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function v0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ct&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends pS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ic("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const l=Td.getListenId_(e,r),h={};this.listens_[l]=h;const f=y0(e._queryParams);this.restRequest_(a+".json",f,(p,y)=>{let E=y;if(p===404&&(E=null,p=null),p===null&&this.onDataUpdate_(a,E,!1,r),Na(this.listens_,l)===h){let w;p?p===401?w="permission_denied":w="rest_error:"+p:w="ok",s(w,null)}})}unlisten(e,t){const r=Td.getListenId_(e,t);delete this.listens_[r]}get(e){const t=y0(e._queryParams),r=e._path.toString(),s=new ai;return this.restRequest_(r+".json",t,(a,l)=>{let h=l;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ga(t);this.log_("Sending REST request for "+l);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Ru(h.responseText)}catch{Rn("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,f)}else h.status!==401&&h.status!==404&&Rn("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){return{value:null,children:new Map}}function sl(n,e,t){if(xe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ke(e);n.children.has(r)||n.children.set(r,Id());const s=n.children.get(r);e=Xe(e),sl(s,e,t)}}function eg(n,e){if(xe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ct,(r,s)=>{sl(n,new Ke(r),s)}),eg(n,e)}}else if(n.children.size>0){const t=ke(e);return e=Xe(e),n.children.has(t)&&eg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function tg(n,e,t){n.value!==null?t(e,n.value):o2(n,(r,s)=>{const a=new Ke(e.toString()+"/"+r);tg(s,a,t)})}function o2(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ln(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=10*1e3,l2=30*1e3,u2=5*60*1e3;class c2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new a2(e);const r=E0+(l2-E0)*Math.random();Tu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ln(e,(s,a)=>{a>0&&Ur(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Tu(this.reportStats_.bind(this),Math.floor(Math.random()*2*u2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gr||(gr={}));function CS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function D_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function O_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=gr.ACK_USER_WRITE,this.source=CS()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ke(e));return new Cd(We(),t,this.revert)}}else return ne(ke(this.path)===e,"operationForChild called for unrelated child."),new Cd(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.source=e,this.path=t,this.type=gr.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new Bu(this.source,We()):new Bu(this.source,Xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=gr.OVERWRITE}operationForChild(e){return xe(this.path)?new po(this.source,We(),this.snap.getImmediateChild(e)):new po(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=gr.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new Ke(e));return t.isEmpty()?null:t.value?new po(this.source,We(),t.value):new zu(this.source,We(),t)}else return ne(ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zu(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ke(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function d2(n,e,t,r){const s=[],a=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&a.push(n2(l.childName,l.snapshotNode))}),au(n,s,"child_removed",e,r,t),au(n,s,"child_added",e,r,t),au(n,s,"child_moved",a,r,t),au(n,s,"child_changed",e,r,t),au(n,s,"value",e,r,t),s}function au(n,e,t,r,s,a){const l=r.filter(h=>h.type===t);l.sort((h,f)=>p2(n,h,f)),l.forEach(h=>{const f=f2(n,h,a);s.forEach(p=>{p.respondsTo(h.type)&&e.push(p.createEvent(f,n.query_))})})}function f2(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function p2(n,e,t){if(e.childName==null||t.childName==null)throw Ha("Should only compare child_ events.");const r=new De(e.childName,e.snapshotNode),s=new De(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e){return{eventCache:n,serverCache:e}}function Iu(n,e,t,r){return hf(new mo(e,t,r),n.serverCache)}function SS(n,e,t,r){return hf(n.eventCache,new mo(e,t,r))}function ng(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function go(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _m;const m2=()=>(_m||(_m=new Cn(ZM)),_m);class rt{static fromObject(e){let t=new rt(null);return ln(e,(r,s)=>{t=t.set(new Ke(r),s)}),t}constructor(e,t=m2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:We(),value:this.value};if(xe(e))return null;{const r=ke(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(Xe(e),t);return a!=null?{path:gt(new Ke(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=ke(e),r=this.children.get(t);return r!==null?r.subtree(Xe(e)):new rt(null)}}set(e,t){if(xe(e))return new rt(t,this.children);{const r=ke(e),a=(this.children.get(r)||new rt(null)).set(Xe(e),t),l=this.children.insert(r,a);return new rt(this.value,l)}}remove(e){if(xe(e))return this.children.isEmpty()?new rt(null):new rt(null,this.children);{const t=ke(e),r=this.children.get(t);if(r){const s=r.remove(Xe(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new rt(null):new rt(this.value,a)}else return this}}get(e){if(xe(e))return this.value;{const t=ke(e),r=this.children.get(t);return r?r.get(Xe(e)):null}}setTree(e,t){if(xe(e))return t;{const r=ke(e),a=(this.children.get(r)||new rt(null)).setTree(Xe(e),t);let l;return a.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,a),new rt(this.value,l)}}fold(e){return this.fold_(We(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(gt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,We(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(xe(e))return null;{const a=ke(e),l=this.children.get(a);return l?l.findOnPath_(Xe(e),gt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,We(),t)}foreachOnPath_(e,t,r){if(xe(e))return this;{this.value&&r(t,this.value);const s=ke(e),a=this.children.get(s);return a?a.foreachOnPath_(Xe(e),gt(t,s),r):new rt(null)}}foreach(e){this.foreach_(We(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(gt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.writeTree_=e}static empty(){return new yr(new rt(null))}}function Cu(n,e,t){if(xe(e))return new yr(new rt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const l=In(s,e);return a=a.updateChild(l,t),new yr(n.writeTree_.set(s,a))}else{const s=new rt(t),a=n.writeTree_.setTree(e,s);return new yr(a)}}}function w0(n,e,t){let r=n;return ln(t,(s,a)=>{r=Cu(r,gt(e,s),a)}),r}function T0(n,e){if(xe(e))return yr.empty();{const t=n.writeTree_.setTree(e,new rt(null));return new yr(t)}}function rg(n,e){return Io(n,e)!=null}function Io(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(In(t.path,e)):null}function I0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ct,(r,s)=>{e.push(new De(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new De(r,s.value))}),e}function os(n,e){if(xe(e))return n;{const t=Io(n,e);return t!=null?new yr(new rt(t)):new yr(n.writeTree_.subtree(e))}}function ig(n){return n.writeTree_.isEmpty()}function Wa(n,e){return RS(We(),n.writeTree_,e)}function RS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=RS(gt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(gt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,e){return NS(e,n)}function g2(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Cu(n.visibleWrites,e,t)),n.lastWriteId=r}function _2(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function y2(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,l=n.allWrites.length-1;for(;s&&l>=0;){const h=n.allWrites[l];h.visible&&(l>=t&&v2(h,r.path)?s=!1:Gn(r.path,h.path)&&(a=!0)),l--}if(s){if(a)return E2(n),!0;if(r.snap)n.visibleWrites=T0(n.visibleWrites,r.path);else{const h=r.children;ln(h,f=>{n.visibleWrites=T0(n.visibleWrites,gt(r.path,f))})}return!0}else return!1}function v2(n,e){if(n.snap)return Gn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Gn(gt(n.path,t),e))return!0;return!1}function E2(n){n.visibleWrites=AS(n.allWrites,w2,We()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function w2(n){return n.visible}function AS(n,e,t){let r=yr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const l=a.path;let h;if(a.snap)Gn(t,l)?(h=In(t,l),r=Cu(r,h,a.snap)):Gn(l,t)&&(h=In(l,t),r=Cu(r,We(),a.snap.getChild(h)));else if(a.children){if(Gn(t,l))h=In(t,l),r=w0(r,h,a.children);else if(Gn(l,t))if(h=In(l,t),xe(h))r=w0(r,We(),a.children);else{const f=Na(a.children,ke(h));if(f){const p=f.getChild(Xe(h));r=Cu(r,We(),p)}}}else throw Ha("WriteRecord should have .snap or .children")}}return r}function kS(n,e,t,r,s){if(!r&&!s){const a=Io(n.visibleWrites,e);if(a!=null)return a;{const l=os(n.visibleWrites,e);if(ig(l))return t;if(t==null&&!rg(l,We()))return null;{const h=t||we.EMPTY_NODE;return Wa(l,h)}}}else{const a=os(n.visibleWrites,e);if(!s&&ig(a))return t;if(!s&&t==null&&!rg(a,We()))return null;{const l=function(p){return(p.visible||s)&&(!r||!~r.indexOf(p.writeId))&&(Gn(p.path,e)||Gn(e,p.path))},h=AS(n.allWrites,l,e),f=t||we.EMPTY_NODE;return Wa(h,f)}}}function T2(n,e,t){let r=we.EMPTY_NODE;const s=Io(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ct,(a,l)=>{r=r.updateImmediateChild(a,l)}),r;if(t){const a=os(n.visibleWrites,e);return t.forEachChild(ct,(l,h)=>{const f=Wa(os(a,new Ke(l)),h);r=r.updateImmediateChild(l,f)}),I0(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const a=os(n.visibleWrites,e);return I0(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function I2(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=gt(e,t);if(rg(n.visibleWrites,a))return null;{const l=os(n.visibleWrites,a);return ig(l)?s.getChild(t):Wa(l,s.getChild(t))}}function C2(n,e,t,r){const s=gt(e,t),a=Io(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const l=os(n.visibleWrites,s);return Wa(l,r.getNode().getImmediateChild(t))}else return null}function S2(n,e){return Io(n.visibleWrites,e)}function R2(n,e,t,r,s,a,l){let h;const f=os(n.visibleWrites,e),p=Io(f,We());if(p!=null)h=p;else if(t!=null)h=Wa(f,t);else return[];if(h=h.withIndex(l),!h.isEmpty()&&!h.isLeafNode()){const y=[],E=l.getCompare(),w=a?h.getReverseIteratorFrom(r,l):h.getIteratorFrom(r,l);let C=w.getNext();for(;C&&y.length<s;)E(C,r)!==0&&y.push(C),C=w.getNext();return y}else return[]}function A2(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function Sd(n,e,t,r){return kS(n.writeTree,n.treePath,e,t,r)}function L_(n,e){return T2(n.writeTree,n.treePath,e)}function C0(n,e,t,r){return I2(n.writeTree,n.treePath,e,t,r)}function Rd(n,e){return S2(n.writeTree,gt(n.treePath,e))}function k2(n,e,t,r,s,a){return R2(n.writeTree,n.treePath,e,t,r,s,a)}function M_(n,e,t){return C2(n.writeTree,n.treePath,e,t)}function PS(n,e){return NS(gt(n.treePath,e),n.writeTree)}function NS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Fu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,$a(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Uu(r,e.snapshotNode,s.oldSnap));else throw Ha("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const xS=new N2;class V_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return M_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:go(this.viewCache_),a=k2(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(n){return{filter:n}}function D2(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function O2(n,e,t,r,s){const a=new P2;let l,h;if(t.type===gr.OVERWRITE){const p=t;p.source.fromUser?l=sg(n,e,p.path,p.snap,r,s,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered()&&!xe(p.path),l=Ad(n,e,p.path,p.snap,r,s,h,a))}else if(t.type===gr.MERGE){const p=t;p.source.fromUser?l=L2(n,e,p.path,p.children,r,s,a):(ne(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered(),l=og(n,e,p.path,p.children,r,s,h,a))}else if(t.type===gr.ACK_USER_WRITE){const p=t;p.revert?l=F2(n,e,p.path,r,s,a):l=M2(n,e,p.path,p.affectedTree,r,s,a)}else if(t.type===gr.LISTEN_COMPLETE)l=V2(n,e,t.path,r,a);else throw Ha("Unknown operation type: "+t.type);const f=a.getChanges();return b2(e,l,f),{viewCache:l,changes:f}}function b2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=ng(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(IS(ng(e)))}}function DS(n,e,t,r,s,a){const l=e.eventCache;if(Rd(r,t)!=null)return e;{let h,f;if(xe(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=go(e),y=p instanceof we?p:we.EMPTY_NODE,E=L_(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const p=Sd(r,go(e));h=n.filter.updateFullNode(e.eventCache.getNode(),p,a)}else{const p=ke(t);if(p===".priority"){ne(fs(t)===1,"Can't have a priority with additional path components");const y=l.getNode();f=e.serverCache.getNode();const E=C0(r,t,y,f);E!=null?h=n.filter.updatePriority(y,E):h=l.getNode()}else{const y=Xe(t);let E;if(l.isCompleteForChild(p)){f=e.serverCache.getNode();const w=C0(r,t,l.getNode(),f);w!=null?E=l.getNode().getImmediateChild(p).updateChild(y,w):E=l.getNode().getImmediateChild(p)}else E=M_(r,p,e.serverCache);E!=null?h=n.filter.updateChild(l.getNode(),p,E,y,s,a):h=l.getNode()}}return Iu(e,h,l.isFullyInitialized()||xe(t),n.filter.filtersNodes())}}function Ad(n,e,t,r,s,a,l,h){const f=e.serverCache;let p;const y=l?n.filter:n.filter.getIndexedFilter();if(xe(t))p=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const C=f.getNode().updateChild(t,r);p=y.updateFullNode(f.getNode(),C,null)}else{const C=ke(t);if(!f.isCompleteForPath(t)&&fs(t)>1)return e;const P=Xe(t),b=f.getNode().getImmediateChild(C).updateChild(P,r);C===".priority"?p=y.updatePriority(f.getNode(),b):p=y.updateChild(f.getNode(),C,b,P,xS,null)}const E=SS(e,p,f.isFullyInitialized()||xe(t),y.filtersNodes()),w=new V_(s,E,a);return DS(n,E,t,s,w,h)}function sg(n,e,t,r,s,a,l){const h=e.eventCache;let f,p;const y=new V_(s,e,a);if(xe(t))p=n.filter.updateFullNode(e.eventCache.getNode(),r,l),f=Iu(e,p,!0,n.filter.filtersNodes());else{const E=ke(t);if(E===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),r),f=Iu(e,p,h.isFullyInitialized(),h.isFiltered());else{const w=Xe(t),C=h.getNode().getImmediateChild(E);let P;if(xe(w))P=r;else{const V=y.getCompleteChild(E);V!=null?R_(w)===".priority"&&V.getChild(gS(w)).isEmpty()?P=V:P=V.updateChild(w,r):P=we.EMPTY_NODE}if(C.equals(P))f=e;else{const V=n.filter.updateChild(h.getNode(),E,P,w,y,l);f=Iu(e,V,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function S0(n,e){return n.eventCache.isCompleteForChild(e)}function L2(n,e,t,r,s,a,l){let h=e;return r.foreach((f,p)=>{const y=gt(t,f);S0(e,ke(y))&&(h=sg(n,h,y,p,s,a,l))}),r.foreach((f,p)=>{const y=gt(t,f);S0(e,ke(y))||(h=sg(n,h,y,p,s,a,l))}),h}function R0(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function og(n,e,t,r,s,a,l,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,p;xe(t)?p=r:p=new rt(null).setTree(t,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const C=e.serverCache.getNode().getImmediateChild(E),P=R0(n,C,w);f=Ad(n,f,new Ke(E),P,s,a,l,h)}}),p.children.inorderTraversal((E,w)=>{const C=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!C){const P=e.serverCache.getNode().getImmediateChild(E),V=R0(n,P,w);f=Ad(n,f,new Ke(E),V,s,a,l,h)}}),f}function M2(n,e,t,r,s,a,l){if(Rd(s,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(xe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Ad(n,e,t,f.getNode().getChild(t),s,a,h,l);if(xe(t)){let p=new rt(null);return f.getNode().forEachChild(ka,(y,E)=>{p=p.set(new Ke(y),E)}),og(n,e,t,p,s,a,h,l)}else return e}else{let p=new rt(null);return r.foreach((y,E)=>{const w=gt(t,y);f.isCompleteForPath(w)&&(p=p.set(y,f.getNode().getChild(w)))}),og(n,e,t,p,s,a,h,l)}}function V2(n,e,t,r,s){const a=e.serverCache,l=SS(e,a.getNode(),a.isFullyInitialized()||xe(t),a.isFiltered());return DS(n,l,t,r,xS,s)}function F2(n,e,t,r,s,a){let l;if(Rd(r,t)!=null)return e;{const h=new V_(r,e,s),f=e.eventCache.getNode();let p;if(xe(t)||ke(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Sd(r,go(e));else{const E=e.serverCache.getNode();ne(E instanceof we,"serverChildren would be complete if leaf node"),y=L_(r,E)}y=y,p=n.filter.updateFullNode(f,y,a)}else{const y=ke(t);let E=M_(r,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=f.getImmediateChild(y)),E!=null?p=n.filter.updateChild(f,y,E,Xe(t),h,a):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(f,y,we.EMPTY_NODE,Xe(t),h,a):p=f,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=Sd(r,go(e)),l.isLeafNode()&&(p=n.filter.updateFullNode(p,l,a)))}return l=e.serverCache.isFullyInitialized()||Rd(r,We())!=null,Iu(e,p,l,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new N_(r.getIndex()),a=i2(r);this.processor_=x2(a);const l=t.serverCache,h=t.eventCache,f=s.updateFullNode(we.EMPTY_NODE,l.getNode(),null),p=a.updateFullNode(we.EMPTY_NODE,h.getNode(),null),y=new mo(f,l.isFullyInitialized(),s.filtersNodes()),E=new mo(p,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=hf(E,y),this.eventGenerator_=new h2(this.query_)}get query(){return this.query_}}function j2(n){return n.viewCache_.serverCache.getNode()}function B2(n,e){const t=go(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(ke(e)).isEmpty())?t.getChild(e):null}function A0(n){return n.eventRegistrations_.length===0}function z2(n,e){n.eventRegistrations_.push(e)}function k0(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const l=a.createCancelEvent(t,s);l&&r.push(l)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const l=n.eventRegistrations_[a];if(!l.matches(e))s.push(l);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function P0(n,e,t,r){e.type===gr.MERGE&&e.source.queryId!==null&&(ne(go(n.viewCache_),"We should always have a full cache before handling merges"),ne(ng(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=O2(n.processor_,s,e,t,r);return D2(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,OS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function $2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ct,(a,l)=>{r.push($a(a,l))}),t.isFullyInitialized()&&r.push(IS(t.getNode())),OS(n,r,t.getNode(),e)}function OS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return d2(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd;class W2{constructor(){this.views=new Map}}function q2(n){ne(!kd,"__referenceConstructor has already been defined"),kd=n}function H2(){return ne(kd,"Reference.ts has not been loaded"),kd}function G2(n){return n.views.size===0}function F_(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),P0(a,e,t,r)}else{let a=[];for(const l of n.views.values())a=a.concat(P0(l,e,t,r));return a}}function K2(n,e,t,r,s){const a=e._queryIdentifier,l=n.views.get(a);if(!l){let h=Sd(t,s?r:null),f=!1;h?f=!0:r instanceof we?(h=L_(t,r),f=!1):(h=we.EMPTY_NODE,f=!1);const p=hf(new mo(h,f,!1),new mo(r,s,!1));return new U2(e,p)}return l}function Q2(n,e,t,r,s,a){const l=K2(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),z2(l,t),$2(l,t)}function Y2(n,e,t,r){const s=e._queryIdentifier,a=[];let l=[];const h=ps(n);if(s==="default")for(const[f,p]of n.views.entries())l=l.concat(k0(p,t,r)),A0(p)&&(n.views.delete(f),p.query._queryParams.loadsAllData()||a.push(p.query));else{const f=n.views.get(s);f&&(l=l.concat(k0(f,t,r)),A0(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return h&&!ps(n)&&a.push(new(H2())(e._repo,e._path)),{removed:a,events:l}}function bS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pa(n,e){let t=null;for(const r of n.views.values())t=t||B2(r,e);return t}function LS(n,e){if(e._queryParams.loadsAllData())return df(n);{const r=e._queryIdentifier;return n.views.get(r)}}function MS(n,e){return LS(n,e)!=null}function ps(n){return df(n)!=null}function df(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;function X2(n){ne(!Pd,"__referenceConstructor has already been defined"),Pd=n}function J2(){return ne(Pd,"Reference.ts has not been loaded"),Pd}let Z2=1;class N0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new rt(null),this.pendingWriteTree_=A2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function VS(n,e,t,r,s){return g2(n.pendingWriteTree_,e,t,r,s),s?oc(n,new po(CS(),e,t)):[]}function no(n,e,t=!1){const r=_2(n.pendingWriteTree_,e);if(y2(n.pendingWriteTree_,e)){let a=new rt(null);return r.snap!=null?a=a.set(We(),!0):ln(r.children,l=>{a=a.set(new Ke(l),!0)}),oc(n,new Cd(r.path,a,t))}else return[]}function ff(n,e,t){return oc(n,new po(D_(),e,t))}function eF(n,e,t){const r=rt.fromObject(t);return oc(n,new zu(D_(),e,r))}function tF(n,e){return oc(n,new Bu(D_(),e))}function nF(n,e,t){const r=j_(n,t);if(r){const s=B_(r),a=s.path,l=s.queryId,h=In(a,e),f=new Bu(O_(l),h);return z_(n,a,f)}else return[]}function ag(n,e,t,r,s=!1){const a=e._path,l=n.syncPointTree_.get(a);let h=[];if(l&&(e._queryIdentifier==="default"||MS(l,e))){const f=Y2(l,e,t,r);G2(l)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const p=f.removed;if(h=f.events,!s){const y=p.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(w,C)=>ps(C));if(y&&!E){const w=n.syncPointTree_.subtree(a);if(!w.isEmpty()){const C=sF(w);for(let P=0;P<C.length;++P){const V=C[P],b=V.query,q=jS(n,V);n.listenProvider_.startListening(Su(b),Nd(n,b),q.hashFn,q.onComplete)}}}!E&&p.length>0&&!r&&(y?n.listenProvider_.stopListening(Su(e),null):p.forEach(w=>{const C=n.queryToTagMap.get(pf(w));n.listenProvider_.stopListening(Su(w),C)}))}oF(n,p)}return h}function rF(n,e,t,r){const s=j_(n,r);if(s!=null){const a=B_(s),l=a.path,h=a.queryId,f=In(l,e),p=new po(O_(h),f,t);return z_(n,l,p)}else return[]}function iF(n,e,t,r){const s=j_(n,r);if(s){const a=B_(s),l=a.path,h=a.queryId,f=In(l,e),p=rt.fromObject(t),y=new zu(O_(h),f,p);return z_(n,l,y)}else return[]}function x0(n,e,t,r=!1){const s=e._path;let a=null,l=!1;n.syncPointTree_.foreachOnPath(s,(w,C)=>{const P=In(w,s);a=a||Pa(C,P),l=l||ps(C)});let h=n.syncPointTree_.get(s);h?(l=l||ps(h),a=a||Pa(h,We())):(h=new W2,n.syncPointTree_=n.syncPointTree_.set(s,h));let f;a!=null?f=!0:(f=!1,a=we.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((C,P)=>{const V=Pa(P,We());V&&(a=a.updateImmediateChild(C,V))}));const p=MS(h,e);if(!p&&!e._queryParams.loadsAllData()){const w=pf(e);ne(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const C=aF();n.queryToTagMap.set(w,C),n.tagToQueryMap.set(C,w)}const y=b_(n.pendingWriteTree_,s);let E=Q2(h,e,t,y,a,f);if(!p&&!l&&!r){const w=LS(h,e);E=E.concat(lF(n,e,w))}return E}function U_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(l,h)=>{const f=In(l,e),p=Pa(h,f);if(p)return p});return kS(s,e,a,t,!0)}function oc(n,e){return FS(e,n.syncPointTree_,null,b_(n.pendingWriteTree_,We()))}function FS(n,e,t,r){if(xe(n.path))return US(n,e,t,r);{const s=e.get(We());t==null&&s!=null&&(t=Pa(s,We()));let a=[];const l=ke(n.path),h=n.operationForChild(l),f=e.children.get(l);if(f&&h){const p=t?t.getImmediateChild(l):null,y=PS(r,l);a=a.concat(FS(h,f,p,y))}return s&&(a=a.concat(F_(s,n,r,t))),a}}function US(n,e,t,r){const s=e.get(We());t==null&&s!=null&&(t=Pa(s,We()));let a=[];return e.children.inorderTraversal((l,h)=>{const f=t?t.getImmediateChild(l):null,p=PS(r,l),y=n.operationForChild(l);y&&(a=a.concat(US(y,h,f,p)))}),s&&(a=a.concat(F_(s,n,r,t))),a}function jS(n,e){const t=e.query,r=Nd(n,t);return{hashFn:()=>(j2(e)||we.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?nF(n,t._path,r):tF(n,t._path);{const a=nV(s,t);return ag(n,t,null,a)}}}}function Nd(n,e){const t=pf(e);return n.queryToTagMap.get(t)}function pf(n){return n._path.toString()+"$"+n._queryIdentifier}function j_(n,e){return n.tagToQueryMap.get(e)}function B_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ke(n.substr(0,e))}}function z_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=b_(n.pendingWriteTree_,e);return F_(r,t,s,null)}function sF(n){return n.fold((e,t,r)=>{if(t&&ps(t))return[df(t)];{let s=[];return t&&(s=bS(t)),ln(r,(a,l)=>{s=s.concat(l)}),s}})}function Su(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(J2())(n._repo,n._path):n}function oF(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=pf(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function aF(){return Z2++}function lF(n,e,t){const r=e._path,s=Nd(n,e),a=jS(n,t),l=n.listenProvider_.startListening(Su(e),s,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(s)ne(!ps(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((p,y,E)=>{if(!xe(p)&&y&&ps(y))return[df(y).query];{let w=[];return y&&(w=w.concat(bS(y).map(C=>C.query))),ln(E,(C,P)=>{w=w.concat(P)}),w}});for(let p=0;p<f.length;++p){const y=f[p];n.listenProvider_.stopListening(Su(y),Nd(n,y))}}return l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $_(t)}node(){return this.node_}}class W_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new W_(this.syncTree_,t)}node(){return U_(this.syncTree_,this.path_)}}const uF=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},D0=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cF(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hF(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cF=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},hF=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const l=s.getValue();return typeof l!="number"?r:l+r},dF=function(n,e,t,r){return q_(e,new W_(t,n),r)},BS=function(n,e,t){return q_(n,new $_(e),t)};function q_(n,e,t){const r=n.getPriority().val(),s=D0(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const l=n,h=D0(l.getValue(),e,t);return h!==l.getValue()||s!==l.getPriority().val()?new Lt(h,wt(s)):n}else{const l=n;return a=l,s!==l.getPriority().val()&&(a=a.updatePriority(new Lt(s))),l.forEachChild(ct,(h,f)=>{const p=q_(f,e.getImmediateChild(h),t);p!==f&&(a=a.updateImmediateChild(h,p))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function G_(n,e){let t=e instanceof Ke?e:new Ke(e),r=n,s=ke(t);for(;s!==null;){const a=Na(r.node.children,s)||{children:{},childCount:0};r=new H_(s,r,a),t=Xe(t),s=ke(t)}return r}function ol(n){return n.node.value}function zS(n,e){n.node.value=e,lg(n)}function $S(n){return n.node.childCount>0}function fF(n){return ol(n)===void 0&&!$S(n)}function mf(n,e){ln(n.node.children,(t,r)=>{e(new H_(t,n,r))})}function WS(n,e,t,r){t&&!r&&e(n),mf(n,s=>{WS(s,e,!0,r)}),t&&r&&e(n)}function pF(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ac(n){return new Ke(n.parent===null?n.name:ac(n.parent)+"/"+n.name)}function lg(n){n.parent!==null&&mF(n.parent,n.name,n)}function mF(n,e,t){const r=fF(t),s=Ur(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,lg(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,lg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=/[\[\].#$\/\u0000-\u001F\u007F]/,_F=/[\[\].#$\u0000-\u001F\u007F]/,ym=10*1024*1024,K_=function(n){return typeof n=="string"&&n.length!==0&&!gF.test(n)},qS=function(n){return typeof n=="string"&&n.length!==0&&!_F.test(n)},yF=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qS(n)},HS=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!uf(n)||n&&typeof n=="object"&&Ur(n,".sv")},ug=function(n,e,t,r){gf(Da(n,"value"),e,t)},gf=function(n,e,t){const r=t instanceof Ke?new MV(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Xs(r)+" with contents = "+e.toString());if(uf(e))throw new Error(n+"contains "+e.toString()+" "+Xs(r));if(typeof e=="string"&&e.length>ym/3&&Od(e)>ym)throw new Error(n+"contains a string greater than "+ym+" utf8 bytes "+Xs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(ln(e,(l,h)=>{if(l===".value")s=!0;else if(l!==".priority"&&l!==".sv"&&(a=!0,!K_(l)))throw new Error(n+" contains an invalid key ("+l+") "+Xs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VV(r,l),gf(n,h,r),FV(r)}),s&&a)throw new Error(n+' contains ".value" child '+Xs(r)+" in addition to actual children.")}},vF=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Vu(r);for(let l=0;l<a.length;l++)if(!(a[l]===".priority"&&l===a.length-1)){if(!K_(a[l]))throw new Error(n+"contains an invalid key ("+a[l]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(LV);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&Gn(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},EF=function(n,e,t,r){const s=Da(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];ln(e,(l,h)=>{const f=new Ke(l);if(gf(s,h,gt(t,f)),R_(f)===".priority"&&!HS(h))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),vF(s,a)},wF=function(n,e,t){if(uf(e))throw new Error(Da(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!HS(e))throw new Error(Da(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},GS=function(n,e,t,r){if(!qS(t))throw new Error(Da(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TF=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),GS(n,e,t)},pu=function(n,e){if(ke(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},IF=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!K_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!yF(t))throw new Error(Da(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Q_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!A_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function KS(n,e,t){Q_(n,t),QS(n,r=>A_(r,e))}function Ti(n,e,t){Q_(n,t),QS(n,r=>Gn(r,e)||Gn(e,r))}function QS(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(SF(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function SF(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();wu&&qt("event: "+t.toString()),il(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF="repo_interrupt",AF=25;class kF{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Id(),this.transactionQueueTree_=new H_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PF(n,e,t){if(n.stats_=C_(n.repoInfo_),n.forceRestClient_||oV())n.server_=new Td(n.repoInfo_,(r,s,a,l)=>{O0(n,r,s,a,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>b0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new gi(n.repoInfo_,e,(r,s,a,l)=>{O0(n,r,s,a,l)},r=>{b0(n,r)},r=>{xF(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=hV(n.repoInfo_,()=>new c2(n.stats_,n.server_)),n.infoData_=new s2,n.infoSyncTree_=new N0({startListening:(r,s,a,l)=>{let h=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(h=ff(n.infoSyncTree_,r._path,f),setTimeout(()=>{l("ok")},0)),h},stopListening:()=>{}}),X_(n,"connected",!1),n.serverSyncTree_=new N0({startListening:(r,s,a,l)=>(n.server_.listen(r,a,s,(h,f)=>{const p=l(h,f);Ti(n.eventQueue_,r._path,p)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function NF(n){const t=n.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Y_(n){return uF({timestamp:NF(n)})}function O0(n,e,t,r,s){n.dataUpdateCount++;const a=new Ke(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(s)if(r){const f=Xh(t,p=>wt(p));l=iF(n.serverSyncTree_,a,f,s)}else{const f=wt(t);l=rF(n.serverSyncTree_,a,f,s)}else if(r){const f=Xh(t,p=>wt(p));l=eF(n.serverSyncTree_,a,f)}else{const f=wt(t);l=ff(n.serverSyncTree_,a,f)}let h=a;l.length>0&&(h=_f(n,a)),Ti(n.eventQueue_,h,l)}function b0(n,e){X_(n,"connected",e),e===!1&&OF(n)}function xF(n,e){ln(e,(t,r)=>{X_(n,t,r)})}function X_(n,e,t){const r=new Ke("/.info/"+e),s=wt(t);n.infoData_.updateSnapshot(r,s);const a=ff(n.infoSyncTree_,r,s);Ti(n.eventQueue_,r,a)}function YS(n){return n.nextWriteId_++}function DF(n,e,t,r,s){J_(n,"set",{path:e.toString(),value:t,priority:r});const a=Y_(n),l=wt(t,r),h=U_(n.serverSyncTree_,e),f=BS(l,h,a),p=YS(n),y=VS(n.serverSyncTree_,e,f,p,!0);Q_(n.eventQueue_,y),n.server_.put(e.toString(),l.val(!0),(w,C)=>{const P=w==="ok";P||Rn("set at "+e+" failed: "+w);const V=no(n.serverSyncTree_,p,!P);Ti(n.eventQueue_,e,V),qa(n,s,w,C)});const E=tR(n,e);_f(n,E),Ti(n.eventQueue_,E,[])}function OF(n){J_(n,"onDisconnectEvents");const e=Y_(n),t=Id();tg(n.onDisconnect_,We(),(s,a)=>{const l=dF(s,a,n.serverSyncTree_,e);sl(t,s,l)});let r=[];tg(t,We(),(s,a)=>{r=r.concat(ff(n.serverSyncTree_,s,a));const l=tR(n,s);_f(n,l)}),n.onDisconnect_=Id(),Ti(n.eventQueue_,We(),r)}function bF(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&eg(n.onDisconnect_,e),qa(n,t,r,s)})}function L0(n,e,t,r){const s=wt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,l)=>{a==="ok"&&sl(n.onDisconnect_,e,s),qa(n,r,a,l)})}function LF(n,e,t,r,s){const a=wt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,h)=>{l==="ok"&&sl(n.onDisconnect_,e,a),qa(n,s,l,h)})}function MF(n,e,t,r){if(Yh(t)){qt("onDisconnect().update() called with empty data.  Don't do anything."),qa(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&ln(t,(l,h)=>{const f=wt(h);sl(n.onDisconnect_,gt(e,l),f)}),qa(n,r,s,a)})}function VF(n,e,t){let r;ke(e._path)===".info"?r=x0(n.infoSyncTree_,e,t):r=x0(n.serverSyncTree_,e,t),KS(n.eventQueue_,e._path,r)}function FF(n,e,t){let r;ke(e._path)===".info"?r=ag(n.infoSyncTree_,e,t):r=ag(n.serverSyncTree_,e,t),KS(n.eventQueue_,e._path,r)}function UF(n){n.persistentConnection_&&n.persistentConnection_.interrupt(RF)}function J_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),qt(t,...e)}function qa(n,e,t,r){e&&il(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const l=new Error(a);l.code=s,e(l)}})}function XS(n,e,t){return U_(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Z_(n,e=n.transactionQueueTree_){if(e||yf(n,e),ol(e)){const t=ZS(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&jF(n,ac(e),t)}else $S(e)&&mf(e,t=>{Z_(n,t)})}function jF(n,e,t){const r=t.map(p=>p.currentWriteId),s=XS(n,e,r);let a=s;const l=s.hash();for(let p=0;p<t.length;p++){const y=t[p];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=In(e,y.path);a=a.updateChild(E,y.currentOutputSnapshotRaw)}const h=a.val(!0),f=e;n.server_.put(f.toString(),h,p=>{J_(n,"transaction put response",{path:f.toString(),status:p});let y=[];if(p==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(no(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();yf(n,G_(n.transactionQueueTree_,e)),Z_(n,n.transactionQueueTree_),Ti(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)il(E[w])}else{if(p==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Rn("transaction at "+f.toString()+" failed: "+p);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=p}_f(n,e)}},l)}function _f(n,e){const t=JS(n,e),r=ac(t),s=ZS(n,t);return BF(n,s,r),r}function BF(n,e,t){if(e.length===0)return;const r=[];let s=[];const l=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],p=In(t,f.path);let y=!1,E;if(ne(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,E=f.abortReason,s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=AF)y=!0,E="maxretry",s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0));else{const w=XS(n,f.path,l);f.currentInputSnapshot=w;const C=e[h].update(w.val());if(C!==void 0){gf("transaction failed: Data returned ",C,f.path);let P=wt(C);typeof C=="object"&&C!=null&&Ur(C,".priority")||(P=P.updatePriority(w.getPriority()));const b=f.currentWriteId,q=Y_(n),Q=BS(P,w,q);f.currentOutputSnapshotRaw=P,f.currentOutputSnapshotResolved=Q,f.currentWriteId=YS(n),l.splice(l.indexOf(b),1),s=s.concat(VS(n.serverSyncTree_,f.path,Q,f.currentWriteId,f.applyLocally)),s=s.concat(no(n.serverSyncTree_,b,!0))}else y=!0,E="nodata",s=s.concat(no(n.serverSyncTree_,f.currentWriteId,!0))}Ti(n.eventQueue_,t,s),s=[],y&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(E==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(E),!1,null))))}yf(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)il(r[h]);Z_(n,n.transactionQueueTree_)}function JS(n,e){let t,r=n.transactionQueueTree_;for(t=ke(e);t!==null&&ol(r)===void 0;)r=G_(r,t),e=Xe(e),t=ke(e);return r}function ZS(n,e){const t=[];return eR(n,e,t),t.sort((r,s)=>r.order-s.order),t}function eR(n,e,t){const r=ol(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);mf(e,s=>{eR(n,s,t)})}function yf(n,e){const t=ol(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,zS(e,t.length>0?t:void 0)}mf(e,r=>{yf(n,r)})}function tR(n,e){const t=ac(JS(n,e)),r=G_(n.transactionQueueTree_,e);return pF(r,s=>{vm(n,s)}),vm(n,r),WS(r,s=>{vm(n,s)}),t}function vm(n,e){const t=ol(e);if(t){const r=[];let s=[],a=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(ne(a===l-1,"All SENT items should be at beginning of queue."),a=l,t[l].status=3,t[l].abortReason="set"):(ne(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),s=s.concat(no(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&r.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));a===-1?zS(e,void 0):t.length=a+1,Ti(n.eventQueue_,ac(e),s);for(let l=0;l<r.length;l++)il(r[l])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $F(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Rn(`Invalid query segment '${t}' in query '${n}'`)}return e}const M0=function(n,e){const t=WF(n),r=t.namespace;t.domain==="firebase.com"&&wi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&wi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XM();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new aS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ke(t.pathString)}},WF=function(n){let e="",t="",r="",s="",a="",l=!0,h="https",f=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(h=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(s=zF(n.substring(y,E)));const w=$F(n.substring(Math.min(n.length,E)));p=e.indexOf(":"),p>=0?(l=h==="https"||h==="wss",f=parseInt(e.substring(p+1),10)):p=e.length;const C=e.slice(0,p);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const P=e.indexOf(".");r=e.substring(0,P).toLowerCase(),t=e.substring(P+1),a=r}"ns"in w&&(a=w.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:l,scheme:h,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class HF{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ai;return bF(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pu("OnDisconnect.remove",this._path);const e=new ai;return L0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pu("OnDisconnect.set",this._path),ug("OnDisconnect.set",e,this._path);const t=new ai;return L0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){pu("OnDisconnect.setWithPriority",this._path),ug("OnDisconnect.setWithPriority",e,this._path),wF("OnDisconnect.setWithPriority",t);const r=new ai;return LF(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){pu("OnDisconnect.update",this._path),EF("OnDisconnect.update",e,this._path);const t=new ai;return MF(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return xe(this._path)?null:R_(this._path)}get ref(){return new ws(this._repo,this._path)}get _queryIdentifier(){const e=v0(this._queryParams),t=T_(e);return t==="{}"?"default":t}get _queryObject(){return v0(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof ey))return!1;const t=this._repo===e._repo,r=A_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+bV(this._path)}}class ws extends ey{constructor(e,t){super(e,t,new x_,!1)}get parent(){const e=gS(this._path);return e===null?null:new ws(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ke(e),r=cg(this.ref,e);return new xd(this._node.getChild(t),r,ct)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new xd(s,cg(this.ref,r),ct)))}hasChild(e){const t=new Ke(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Em(n,e){return n=Ge(n),n._checkNotDeleted("ref"),e!==void 0?cg(n._root,e):n._root}function cg(n,e){return n=Ge(n),ke(n._path)===null?TF("child","path",e):GS("child","path",e),new ws(n._repo,gt(n._path,e))}function QF(n){return n=Ge(n),new KF(n._repo,n._path)}function YF(n,e){n=Ge(n),pu("set",n._path),ug("set",e,n._path);const t=new ai;return DF(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ty{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new qF("value",this,new xd(e.snapshotNode,new ws(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new HF(this,e,t):null}matches(e){return e instanceof ty?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XF(n,e,t,r,s){const a=new GF(t,void 0),l=new ty(a);return VF(n._repo,n,l),()=>FF(n._repo,n,l)}function JF(n,e,t,r){return XF(n,"value",e)}q2(ws);X2(ws);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF="FIREBASE_DATABASE_EMULATOR_HOST",hg={};let eU=!1;function tU(n,e,t,r){n.repoInfo_=new aS(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function nU(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||wi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=M0(a,s),h=l.repoInfo,f;typeof process<"u"&&t0&&(f=t0[ZF]),f?(a=`http://${f}?ns=${h.namespace}`,l=M0(a,s),h=l.repoInfo):l.repoInfo.secure;const p=new lV(n.name,n.options,e);IF("Invalid Firebase Database URL",l),xe(l.path)||wi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=iU(h,n,p,new aV(n.name,t));return new sU(y,n)}function rU(n,e){const t=hg[e];(!t||t[n.key]!==n)&&wi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),UF(n),delete t[n.key]}function iU(n,e,t,r){let s=hg[e.name];s||(s={},hg[e.name]=s);let a=s[n.toURLString()];return a&&wi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new kF(n,eU,t,r),s[n.toURLString()]=a,a}class sU{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ws(this._repo,We())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wi("Cannot call "+e+" on a deleted database.")}}function oU(n=Wu(),e){const t=Ii(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=pg("database");r&&aU(t,...r)}return t}function aU(n,e,t,r={}){n=Ge(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&wi("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&wi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Gh(Gh.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:mg(r.mockUserToken,n.app.options.projectId);a=new Gh(l)}tU(s,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lU(n){qM(ms),Qn(new Mn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return nU(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),sn(n0,r0,n),sn(n0,r0,"esm2017")}gi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};gi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};lU();const uU=({openchat:n})=>{const[e,t]=$.useState([]),{dispatch:r}=$.useContext(rl),[s,a]=$.useState({});$.useEffect(()=>{const h=vC(Ft,"users"),f=xC(h,p=>{const y=p.docs.map(E=>({...E.data(),uid:E.id}));t(y)});return()=>f()},[]),$.useEffect(()=>{const h=oU();e.forEach(f=>{const p=Em(h,`users/${f.uid}/status`);JF(p,y=>{const E=y.val();a(w=>({...w,[f.uid]:E||"offline"}))}),YF(Em(h,`users/${f.uid}/status`),"online"),QF(Em(h,`users/${f.uid}/status`)).set("offline")})},[e]);const l=h=>{r({type:"CHANGE_USER",payload:h}),console.log("user clicked")};return Z.jsx("div",{style:{width:"94%",display:"flex",flexDirection:"column",gap:"10px"},children:e.map(h=>Z.jsxs("div",{onClick:()=>l(h),style:{cursor:"pointer",padding:"10px",border:"1px solid #ccc",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-evenly"},children:[Z.jsx("h3",{children:h.displayName||"Anonymous User"}),Z.jsx("span",{children:s[h.uid]||"Offline"})," "]},h.uid))})},cU=()=>{const[n,e]=$.useState(""),[t,r]=$.useState(null),[s,a]=$.useState(!1),{currentUser:l}=$.useContext(wo),h=async()=>{const y=uL(vC(Ft,"users"),cL("displayName","==",n));try{(await pL(y)).forEach(w=>{r(w.data())})}catch{a(!0)}},f=y=>{y.code==="Enter"&&h()},p=async()=>{const y=l.uid>t.uid?l.uid+t.uid:t.uid+l.uid;try{(await NC(nn(Ft,"chats",y))).exists()||(await io(nn(Ft,"chats",y),{messages:[]}),await es(nn(Ft,"userChats",l.uid),{[y+".userInfo"]:{uid:t.uid,displayName:t.displayName},[y+".date"]:wa()}),await es(nn(Ft,"userChats",t.uid),{[y+".userInfo"]:{uid:l.uid,displayName:l.displayName,photoURL:l.photoURL},[y+".date"]:wa()}))}catch{}r(null),e("")};return Z.jsxs("div",{className:"search",children:[Z.jsx("div",{className:"searchForm",children:Z.jsx("input",{type:"text",placeholder:"Find a user",onKeyDown:f,onChange:y=>e(y.target.value),value:n})}),s&&Z.jsx("span",{children:"User not found!"}),t&&Z.jsx("div",{className:"userChat",onClick:p,children:Z.jsx("div",{className:"userChatInfo",children:Z.jsx("span",{children:t.displayName})})})]})};function hU(){return Z.jsx(Z.Fragment,{children:Z.jsxs("div",{className:"sidebar",children:[Z.jsx($M,{}),Z.jsx(cU,{}),Z.jsx(uU,{})]})})}const dU=({message:n})=>{const{currentUser:e}=$.useContext(wo),{data:t}=$.useContext(rl),r=$.useRef(),s=a=>{const l=new Date(a.seconds*1e3),h=l.getHours(),f=l.getMinutes();l.getDay(),l.getMonth()+1,l.getFullYear();const p=h%12||12,y=h>=12?"AM":"PM",E=f<10?"0":f+f;return`${p}:${E} ${y}`};return $.useEffect(()=>{var a;(a=r.current)==null||a.scrollIntoView({behavior:"smooth"})},[n]),Z.jsxs("div",{ref:r,className:`message ${n.senderId===e.uid&&"owner"}`,children:[Z.jsxs("div",{className:"messageInfo",children:[Z.jsx("img",{src:n.senderId===e.uid?e.photoURL:t.user.photoURL,alt:""}),Z.jsx("span",{children:s(n.date)})]}),Z.jsxs("div",{className:"messageContent",children:[Z.jsx("p",{children:n.text}),n.img&&Z.jsx("img",{src:n.img,alt:""})]})]})},fU=()=>{const[n,e]=$.useState([]),{data:t}=$.useContext(rl);return $.useEffect(()=>{const r=xC(nn(Ft,"chats",t.chatId),s=>{s.exists()&&e(s.data().messages||[])});return()=>r()},[t.chatId]),Z.jsx("div",{className:"messages",children:n.length===0?Z.jsx("p",{children:"No messages yet. Start chatting!"}):n.map(r=>Z.jsx(dU,{message:r},r.id))})},Wt=[];for(let n=0;n<256;++n)Wt.push((n+256).toString(16).slice(1));function pU(n,e=0){return(Wt[n[e+0]]+Wt[n[e+1]]+Wt[n[e+2]]+Wt[n[e+3]]+"-"+Wt[n[e+4]]+Wt[n[e+5]]+"-"+Wt[n[e+6]]+Wt[n[e+7]]+"-"+Wt[n[e+8]]+Wt[n[e+9]]+"-"+Wt[n[e+10]]+Wt[n[e+11]]+Wt[n[e+12]]+Wt[n[e+13]]+Wt[n[e+14]]+Wt[n[e+15]]).toLowerCase()}let wm;const mU=new Uint8Array(16);function gU(){if(!wm){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");wm=crypto.getRandomValues.bind(crypto)}return wm(mU)}const _U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),V0={randomUUID:_U};function F0(n,e,t){if(V0.randomUUID&&!e&&!n)return V0.randomUUID();n=n||{};const r=n.random||(n.rng||gU)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,pU(r)}const yU=()=>{const[n,e]=$.useState(""),{currentUser:t}=$.useContext(wo),{data:r}=$.useContext(rl),s=async()=>{try{const a=t.uid>r.user.uid?t.uid+r.user.uid:r.user.uid+t.uid,l=nn(Ft,"chats",a);(await NC(l)).exists()?(await es(l,{messages:mL({id:F0(),text:n,senderId:t.uid,date:_t.now()})}),await es(nn(Ft,"userChats",t.uid),{[a+".lastMessage"]:{text:n},[a+".date"]:wa()}),await es(nn(Ft,"userChats",r.user.uid),{[a+".lastMessage"]:{text:n},[a+".date"]:wa()})):(await io(l,{messages:[{id:F0(),text:n,senderId:t.uid,date:_t.now()}]}),await io(nn(Ft,"userChats",t.uid),{},{merge:!0}),await io(nn(Ft,"userChats",r.user.uid),{},{merge:!0}),await es(nn(Ft,"userChats",t.uid),{[a+".userInfo"]:{uid:r.user.uid,displayName:r.user.displayName||"Unknown User",photoURL:r.user.photoURL||"https://example.com/default-avatar.png"},[a+".lastMessage"]:{text:n},[a+".date"]:wa()}),await es(nn(Ft,"userChats",r.user.uid),{[a+".userInfo"]:{uid:t.uid,displayName:t.displayName||"Unknown User",photoURL:t.photoURL||"https://example.com/default-avatar.png"},[a+".lastMessage"]:{text:n},[a+".date"]:wa()})),e("")}catch(a){console.error("Error sending message: ",a)}};return Z.jsxs("div",{className:"input",children:[Z.jsx("input",{type:"text",placeholder:"Type something...",onChange:a=>e(a.target.value),value:n}),Z.jsx("div",{className:"send",children:Z.jsx("button",{onClick:s,children:"Send "})})]})},vU=()=>{var t;const{data:n}=$.useContext(rl),e=()=>{console.log("toggle button clicked")};return Z.jsxs("div",{className:"chat",children:[Z.jsxs("div",{className:"chatInfo",children:[Z.jsx("button",{className:"backButton",onClick:e,children:"←"}),Z.jsx("span",{children:((t=n.user)==null?void 0:t.displayName)||"Select a user to chat"})]}),n.chatId!=="null"?Z.jsxs(Z.Fragment,{children:[Z.jsx(fU,{}),Z.jsx(yU,{})]}):Z.jsx("p",{style:{padding:"20px"},children:"No user selected."})]})};function EU(){return Z.jsx(Z.Fragment,{children:Z.jsxs("div",{className:"homepage",children:[Z.jsx(hU,{}),Z.jsx(vU,{})]})})}function wU(){const[n,e]=$.useState(!1),[t,r]=$.useState(!1),s=of(),a=async l=>{l.preventDefault();const h=l.target[0].value,f=l.target[1].value;try{await dN(ho,h,f);const p=ho.currentUser;await es(nn(Ft,"users",p.uid),{status:"online"}),s("/")}catch{e(!0)}};return Z.jsxs(Z.Fragment,{children:[Z.jsx("center",{children:Z.jsx("h1",{children:"Login"})}),Z.jsxs("form",{onSubmit:a,children:[Z.jsx("input",{required:!0,type:"email",placeholder:"Email"}),Z.jsx("input",{required:!0,type:"password",placeholder:"Password"}),Z.jsx("button",{disabled:t,children:"Login"}),t&&"Uploading, please wait...",n&&Z.jsx("span",{children:"Something went wrong..."}),Z.jsxs("p",{children:["Have an account? ",Z.jsx(lf,{to:"/register",children:"register"})]})]})]})}const TU=new li;function IU(){const[n,e]=$.useState(!1),[t,r]=$.useState(!1),s=of(),a=async()=>{try{const f=(await FN(ho,TU)).user;await io(nn(Ft,"users",f.uid),{displayName:f.displayName,email:f.email,status:"offline"}),s("/")}catch(h){console.error("Google Sign-In Error:",h.message),e(!0)}},l=async h=>{h.preventDefault(),r(!0);const f=h.target[0].value,p=h.target[1].value,y=h.target[2].value;try{const w=(await hN(ho,p,y)).user;await pN(w,{displayName:f}),await io(nn(Ft,"users",w.uid),{displayName:f,email:p,status:"offline"}),console.log("User registered successfully"),s("/")}catch(E){console.error("Registration Error:",E.message),e(!0)}finally{r(!1)}};return Z.jsx(Z.Fragment,{children:Z.jsxs("div",{className:"register-div",children:[Z.jsx("center",{children:Z.jsx("h1",{children:"Register"})}),Z.jsxs("form",{onSubmit:l,children:[Z.jsx("input",{required:!0,type:"text",placeholder:"Display Name"}),Z.jsx("input",{required:!0,type:"email",placeholder:"Email"}),Z.jsx("input",{required:!0,type:"password",placeholder:"Password"}),Z.jsx("button",{disabled:t,children:"Signup"}),Z.jsx("button",{type:"button",onClick:a,children:"Sign up with Google"}),t&&"Uploading, please wait...",n&&Z.jsx("span",{children:"Something went wrong..."}),Z.jsxs("p",{children:["Have an account? ",Z.jsx(lf,{to:"/login",children:"Login"})]})]})]})})}function CU(){const{currentUser:n}=$.useContext(wo),e=({children:t})=>n?t:Z.jsx(aM,{to:"/login"});return Z.jsx(OM,{basename:"/openchat/",children:Z.jsxs(uM,{children:[Z.jsx(Wh,{path:"/",element:Z.jsx(e,{children:Z.jsx(EU,{})})}),Z.jsx(Wh,{path:"/login",element:Z.jsx(wU,{})}),Z.jsx(Wh,{path:"/register",element:Z.jsx(IU,{})})]})})}fA.createRoot(document.getElementById("root")).render(Z.jsx(yL,{children:Z.jsx(WM,{children:Z.jsx($.StrictMode,{children:Z.jsx(CU,{})})})}));
