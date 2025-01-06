(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var jd={exports:{}},Ya={},zd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function tT(){if(Xg)return Ce;Xg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,$={};function V(b,K,fe){this.props=b,this.context=K,this.refs=$,this.updater=fe||x}V.prototype.isReactComponent={},V.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function H(){}H.prototype=V.prototype;function Y(b,K,fe){this.props=b,this.context=K,this.refs=$,this.updater=fe||x}var ne=Y.prototype=new H;ne.constructor=Y,L(ne,V.prototype),ne.isPureReactComponent=!0;var se=Array.isArray,Ie=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(b,K,fe){var Re,Ae={},De=null,Me=null;if(K!=null)for(Re in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(De=""+K.key),K)Ie.call(K,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=K[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=fe;else if(1<Fe){for(var $e=Array(Fe),vt=0;vt<Fe;vt++)$e[vt]=arguments[vt+2];Ae.children=$e}if(b&&b.defaultProps)for(Re in Fe=b.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:n,type:b,key:De,ref:Me,props:Ae,_owner:_e.current}}function A(b,K){return{$$typeof:n,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function O(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return K[fe]})}var M=/\/+/g;function C(b,K){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):K.toString(36)}function rt(b,K,fe,Re,Ae){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case n:case e:Me=!0}}if(Me)return Me=b,Ae=Ae(Me),b=Re===""?"."+C(Me,0):Re,se(Ae)?(fe="",b!=null&&(fe=b.replace(M,"$&/")+"/"),rt(Ae,K,fe,"",function(vt){return vt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,fe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+b)),K.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",se(b))for(var Fe=0;Fe<b.length;Fe++){De=b[Fe];var $e=Re+C(De,Fe);Me+=rt(De,K,fe,$e,Ae)}else if($e=I(b),typeof $e=="function")for(b=$e.call(b),Fe=0;!(De=b.next()).done;)De=De.value,$e=Re+C(De,Fe++),Me+=rt(De,K,fe,$e,Ae);else if(De==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(b,K,fe){if(b==null)return b;var Re=[],Ae=0;return rt(b,Re,"","",function(De){return K.call(fe,De,Ae++)}),Re}function Vt(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var ze={current:null},re={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:_e};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Lt,forEach:function(b,K,fe){Lt(b,function(){K.apply(this,arguments)},fe)},count:function(b){var K=0;return Lt(b,function(){K++}),K},toArray:function(b){return Lt(b,function(K){return K})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=V,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=Y,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(b,K,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Re=L({},b.props),Ae=b.key,De=b.ref,Me=b._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,Me=_e.current),K.key!==void 0&&(Ae=""+K.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for($e in K)Ie.call(K,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=K[$e]===void 0&&Fe!==void 0?Fe[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Re.children=fe;else if(1<$e){Fe=Array($e);for(var vt=0;vt<$e;vt++)Fe[vt]=arguments[vt+2];Re.children=Fe}return{$$typeof:n,type:b.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ce.createElement=S,Ce.createFactory=function(b){var K=S.bind(null,b);return K.type=b,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:d,render:b}},Ce.isValidElement=k,Ce.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Vt}},Ce.memo=function(b,K){return{$$typeof:y,type:b,compare:K===void 0?null:K}},Ce.startTransition=function(b){var K=re.transition;re.transition={};try{b()}finally{re.transition=K}},Ce.unstable_act=oe,Ce.useCallback=function(b,K){return ze.current.useCallback(b,K)},Ce.useContext=function(b){return ze.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return ze.current.useDeferredValue(b)},Ce.useEffect=function(b,K){return ze.current.useEffect(b,K)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(b,K,fe){return ze.current.useImperativeHandle(b,K,fe)},Ce.useInsertionEffect=function(b,K){return ze.current.useInsertionEffect(b,K)},Ce.useLayoutEffect=function(b,K){return ze.current.useLayoutEffect(b,K)},Ce.useMemo=function(b,K){return ze.current.useMemo(b,K)},Ce.useReducer=function(b,K,fe){return ze.current.useReducer(b,K,fe)},Ce.useRef=function(b){return ze.current.useRef(b)},Ce.useState=function(b){return ze.current.useState(b)},Ce.useSyncExternalStore=function(b,K,fe){return ze.current.useSyncExternalStore(b,K,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var Jg;function Uf(){return Jg||(Jg=1,zd.exports=tT()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function nT(){if(Zg)return Ya;Zg=1;var n=Uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,T={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:x,props:T,_owner:o.current}}return Ya.Fragment=t,Ya.jsx=c,Ya.jsxs=c,Ya}var ey;function rT(){return ey||(ey=1,jd.exports=nT()),jd.exports}var J=rT(),B=Uf(),Qu={},Bd={exports:{}},nn={},$d={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function iT(){return ty||(ty=1,function(n){function e(re,me){var oe=re.length;re.push(me);e:for(;0<oe;){var b=oe-1>>>1,K=re[b];if(0<o(K,me))re[b]=me,re[oe]=K,oe=b;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],oe=re.pop();if(oe!==me){re[0]=oe;e:for(var b=0,K=re.length,fe=K>>>1;b<fe;){var Re=2*(b+1)-1,Ae=re[Re],De=Re+1,Me=re[De];if(0>o(Ae,oe))De<K&&0>o(Me,Ae)?(re[b]=Me,re[De]=oe,b=De):(re[b]=Ae,re[Re]=oe,b=Re);else if(De<K&&0>o(Me,oe))re[b]=Me,re[De]=oe,b=De;else break e}}return me}function o(re,me){var oe=re.sortIndex-me.sortIndex;return oe!==0?oe:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,T=null,I=3,x=!1,L=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function se(re){if($=!1,ne(re),!L)if(t(p)!==null)L=!0,Vt(Ie);else{var me=t(y);me!==null&&ze(se,me.startTime-re)}}function Ie(re,me){L=!1,$&&($=!1,H(S),S=-1),x=!0;var oe=I;try{for(ne(me),T=t(p);T!==null&&(!(T.expirationTime>me)||re&&!O());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var K=b(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),ne(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Re=t(y);Re!==null&&ze(se,Re.startTime-me),fe=!1}return fe}finally{T=null,I=oe,x=!1}}var _e=!1,N=null,S=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function M(){if(N!==null){var re=n.unstable_now();k=re;var me=!0;try{me=N(!0,re)}finally{me?C():(_e=!1,N=null)}}else _e=!1}var C;if(typeof Y=="function")C=function(){Y(M)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Lt=rt.port2;rt.port1.onmessage=M,C=function(){Lt.postMessage(null)}}else C=function(){V(M,0)};function Vt(re){N=re,_e||(_e=!0,C())}function ze(re,me){S=V(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){L||x||(L=!0,Vt(Ie))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var oe=I;I=me;try{return re()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=I;I=re;try{return me()}finally{I=oe}},n.unstable_scheduleCallback=function(re,me,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,re){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=oe+K,re={id:v++,callback:me,priorityLevel:re,startTime:oe,expirationTime:K,sortIndex:-1},oe>b?(re.sortIndex=oe,e(y,re),t(p)===null&&re===t(y)&&($?(H(S),S=-1):$=!0,ze(se,oe-b))):(re.sortIndex=K,e(p,re),L||x||(L=!0,Vt(Ie))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var me=I;return function(){var oe=I;I=me;try{return re.apply(this,arguments)}finally{I=oe}}}}(qd)),qd}var ny;function sT(){return ny||(ny=1,$d.exports=iT()),$d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function oT(){if(ry)return nn;ry=1;var n=Uf(),e=sT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function x(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,h){if(s===null||typeof s>"u"||x(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Y(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,Y);V[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,Y);V[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,Y);V[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,a,h){var f=V.hasOwnProperty(s)?V[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function K(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var fe=!1;function Re(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var P=`
`+f[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=R);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ae(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case _e:return"Portal";case A:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case rt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function _r(r){r._valueTracker||(r._valueTracker=vt(r))}function Os(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=$e(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function zi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ls(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function na(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function ra(r,s){na(r,s);var a=Fe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Vs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Vs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ll(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Vs(r,s,a){(s!=="number"||Qr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function wr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ia(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function Ms(r,s){var a=Fe(s.value),h=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function sa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Er,oa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Er.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Yr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$i=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){$i.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function aa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function la(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=aa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ua=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(r,s){if(s){if(ua[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ha(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=null;function Fs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Us=null,yn=null,Zn=null;function js(r){if(r=Va(r)){if(typeof Us!="function")throw Error(t(280));var s=r.stateNode;s&&(s=cu(s),Us(r.stateNode,r.type,s))}}function er(r){yn?Zn?Zn.push(r):Zn=[r]:yn=r}function da(){if(yn){var r=yn,s=Zn;if(Zn=yn=null,js(r),s)for(r=0;r<s.length;r++)js(s[r])}}function Hi(r,s){return r(s)}function fa(){}var Tr=!1;function pa(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return Hi(r,s,a)}finally{Tr=!1,(yn!==null||Zn!==null)&&(fa(),da())}}function it(r,s){var a=r.stateNode;if(a===null)return null;var h=cu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var zs=!1;if(d)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{zs=!1}function Wi(r,s,a,h,f,g,w,R,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var Ki=!1,Bs=null,Dn=!1,ma=null,ph={onError:function(r){Ki=!0,Bs=r}};function $s(r,s,a,h,f,g,w,R,P){Ki=!1,Bs=null,Wi.apply(ph,arguments)}function Vl(r,s,a,h,f,g,w,R,P){if($s.apply(this,arguments),Ki){if(Ki){var z=Bs;Ki=!1,Bs=null}else throw Error(t(198));Dn||(Dn=!0,ma=z)}}function On(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Gi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ln(r){if(On(r)!==r)throw Error(t(188))}function bl(r){var s=r.alternate;if(!s){if(s=On(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ln(f),r;if(g===h)return Ln(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===a){w=!0,a=f,h=g;break}if(R===h){w=!0,h=f,a=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===a){w=!0,a=g,h=f;break}if(R===h){w=!0,h=g,a=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ga(r){return r=bl(r),r!==null?qs(r):null}function qs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=qs(r);if(s!==null)return s;r=r.sibling}return null}var Hs=e.unstable_scheduleCallback,ya=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,mh=e.unstable_requestPaint,qe=e.unstable_now,Fl=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,Xr=e.unstable_UserBlockingPriority,_n=e.unstable_NormalPriority,_a=e.unstable_LowPriority,Ul=e.unstable_IdlePriority,Yi=null,ln=null;function jl(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Bl,va=Math.log,zl=Math.LN2;function Bl(r){return r>>>=0,r===0?32:31-(va(r)/zl|0)|0}var Ws=64,Ks=4194304;function Jr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var R=w&~f;R!==0?h=Jr(R):(g&=w,g!==0&&(h=Jr(g)))}else w=a&~f,w!==0?h=Jr(w):g!==0&&(h=Jr(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Ht(s),f=1<<a,h|=r[a],s&=~f;return h}function gh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Ht(g),R=1<<w,P=f[w];P===-1?(!(R&a)||R&h)&&(f[w]=gh(R,s)):P<=s&&(r.expiredLanes|=R),g&=~R}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ji(){var r=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),r}function Zr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ei(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Ht(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function ti(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Ht(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ne=0;function ni(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var $l,Gs,ql,Hl,Wl,wa=!1,tr=[],Rt=null,Vn=null,bn=null,ri=new Map,vn=new Map,nr=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ri.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(s.pointerId)}}function Qt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Va(s),s!==null&&Gs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function _h(r,s,a,h,f){switch(s){case"focusin":return Rt=Qt(Rt,r,s,a,h,f),!0;case"dragenter":return Vn=Qt(Vn,r,s,a,h,f),!0;case"mouseover":return bn=Qt(bn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return ri.set(g,Qt(ri.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,vn.set(g,Qt(vn.get(g)||null,r,s,a,h,f)),!0}return!1}function Gl(r){var s=rs(r.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=Gi(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){ql(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Qs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);qi=h,a.target.dispatchEvent(h),qi=null}else return s=Va(a),s!==null&&Gs(s),r.blockedOn=a,!1;s.shift()}return!0}function Zi(r,s,a){Sr(r)&&a.delete(s)}function Ql(){wa=!1,Rt!==null&&Sr(Rt)&&(Rt=null),Vn!==null&&Sr(Vn)&&(Vn=null),bn!==null&&Sr(bn)&&(bn=null),ri.forEach(Zi),vn.forEach(Zi)}function Mn(r,s){r.blockedOn===s&&(r.blockedOn=null,wa||(wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ql)))}function Fn(r){function s(f){return Mn(f,r)}if(0<tr.length){Mn(tr[0],r);for(var a=1;a<tr.length;a++){var h=tr[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Rt!==null&&Mn(Rt,r),Vn!==null&&Mn(Vn,r),bn!==null&&Mn(bn,r),ri.forEach(s),vn.forEach(s),a=0;a<nr.length;a++)h=nr[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)Gl(a),a.blockedOn===null&&nr.shift()}var Rr=se.ReactCurrentBatchConfig,ii=!0;function Qe(r,s,a,h){var f=Ne,g=Rr.transition;Rr.transition=null;try{Ne=1,Ea(r,s,a,h)}finally{Ne=f,Rr.transition=g}}function vh(r,s,a,h){var f=Ne,g=Rr.transition;Rr.transition=null;try{Ne=4,Ea(r,s,a,h)}finally{Ne=f,Rr.transition=g}}function Ea(r,s,a,h){if(ii){var f=Qs(r,s,a,h);if(f===null)Nh(r,s,h,es,a),Kl(r,h);else if(_h(f,r,s,a,h))h.stopPropagation();else if(Kl(r,h),s&4&&-1<yh.indexOf(r)){for(;f!==null;){var g=Va(f);if(g!==null&&$l(g),g=Qs(r,s,a,h),g===null&&Nh(r,s,h,es,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else Nh(r,s,h,null,a)}}var es=null;function Qs(r,s,a,h){if(es=null,r=Fs(h),r=rs(r),r!==null)if(s=On(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Gi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return es=r,null}function Ta(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fl()){case Qi:return 1;case Xr:return 4;case _n:case _a:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var cn=null,Ys=null,Yt=null;function Ia(){if(Yt)return Yt;var r,s=Ys,a=s.length,h,f="value"in cn?cn.value:cn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return Yt=f.slice(r,1<h?1-h:void 0)}function Xs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function rr(){return!0}function Sa(){return!1}function At(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?rr:Sa,this.isPropagationStopped=Sa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),s}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=At(Un),ir=oe({},Un,{view:0,detail:0}),wh=At(ir),Zs,Ar,si,ts=oe({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==si&&(si&&r.type==="mousemove"?(Zs=r.screenX-si.screenX,Ar=r.screenY-si.screenY):Ar=Zs=0,si=r),Zs)},movementY:function(r){return"movementY"in r?r.movementY:Ar}}),eo=At(ts),Ra=oe({},ts,{dataTransfer:0}),Yl=At(Ra),to=oe({},ir,{relatedTarget:0}),no=At(to),Xl=oe({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Cr=At(Xl),Jl=oe({},Un,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Zl=At(Jl),eu=oe({},Un,{data:0}),Aa=At(eu),ro={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=tu[r])?!!s[r]:!1}function sr(){return nu}var u=oe({},ir,{key:function(r){if(r.key){var s=ro[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=oe({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(_),F=oe({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),q=At(F),te=oe({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(te),pt=oe({},ts,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(pt),wt=[9,13,27,32],lt=d&&"CompositionEvent"in window,wn=null;d&&"documentMode"in document&&(wn=document.documentMode);var hn=d&&"TextEvent"in window&&!wn,ns=d&&(!lt||wn&&8<wn&&11>=wn),io=" ",Hp=!1;function Wp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var so=!1;function Jw(r,s){switch(r){case"compositionend":return Kp(s);case"keypress":return s.which!==32?null:(Hp=!0,io);case"textInput":return r=s.data,r===io&&Hp?null:r;default:return null}}function Zw(r,s){if(so)return r==="compositionend"||!lt&&Wp(r,s)?(r=Ia(),Yt=Ys=cn=null,so=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ns&&s.locale!=="ko"?null:s.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!eE[r.type]:s==="textarea"}function Qp(r,s,a,h){er(h),s=au(s,"onChange"),0<s.length&&(a=new Js("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ca=null,Pa=null;function tE(r){fm(r,0)}function ru(r){var s=co(r);if(Os(s))return r}function nE(r,s){if(r==="change")return s}var Yp=!1;if(d){var Eh;if(d){var Th="oninput"in document;if(!Th){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Th=typeof Xp.oninput=="function"}Eh=Th}else Eh=!1;Yp=Eh&&(!document.documentMode||9<document.documentMode)}function Jp(){Ca&&(Ca.detachEvent("onpropertychange",Zp),Pa=Ca=null)}function Zp(r){if(r.propertyName==="value"&&ru(Pa)){var s=[];Qp(s,Pa,r,Fs(r)),pa(tE,s)}}function rE(r,s,a){r==="focusin"?(Jp(),Ca=s,Pa=a,Ca.attachEvent("onpropertychange",Zp)):r==="focusout"&&Jp()}function iE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ru(Pa)}function sE(r,s){if(r==="click")return ru(s)}function oE(r,s){if(r==="input"||r==="change")return ru(s)}function aE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var jn=typeof Object.is=="function"?Object.is:aE;function ka(r,s){if(jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!jn(r[f],s[f]))return!1}return!0}function em(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tm(r,s){var a=em(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?nm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var r=window,s=Qr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Qr(r.document)}return s}function Ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function lE(r){var s=rm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&nm(a.ownerDocument.documentElement,a)){if(h!==null&&Ih(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=tm(a,g);var w=tm(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var uE=d&&"documentMode"in document&&11>=document.documentMode,oo=null,Sh=null,Na=null,Rh=!1;function im(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rh||oo==null||oo!==Qr(h)||(h=oo,"selectionStart"in h&&Ih(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Na&&ka(Na,h)||(Na=h,h=au(Sh,"onSelect"),0<h.length&&(s=new Js("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=oo)))}function iu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ao={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},Ah={},sm={};d&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function su(r){if(Ah[r])return Ah[r];if(!ao[r])return r;var s=ao[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in sm)return Ah[r]=s[a];return r}var om=su("animationend"),am=su("animationiteration"),lm=su("animationstart"),um=su("transitionend"),cm=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(r,s){cm.set(r,s),l(s,[r])}for(var Ch=0;Ch<hm.length;Ch++){var Ph=hm[Ch],cE=Ph.toLowerCase(),hE=Ph[0].toUpperCase()+Ph.slice(1);oi(cE,"on"+hE)}oi(om,"onAnimationEnd"),oi(am,"onAnimationIteration"),oi(lm,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(um,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function dm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Vl(h,s,void 0,r),r.currentTarget=null}function fm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],P=R.instance,z=R.currentTarget;if(R=R.listener,P!==g&&f.isPropagationStopped())break e;dm(f,R,z),g=P}else for(w=0;w<h.length;w++){if(R=h[w],P=R.instance,z=R.currentTarget,R=R.listener,P!==g&&f.isPropagationStopped())break e;dm(f,R,z),g=P}}}if(Dn)throw r=ma,Dn=!1,ma=null,r}function We(r,s){var a=s[bh];a===void 0&&(a=s[bh]=new Set);var h=r+"__bubble";a.has(h)||(pm(s,r,2,!1),a.add(h))}function kh(r,s,a){var h=0;s&&(h|=4),pm(a,r,h,s)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Da(r){if(!r[ou]){r[ou]=!0,i.forEach(function(a){a!=="selectionchange"&&(dE.has(a)||kh(a,!1,r),kh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ou]||(s[ou]=!0,kh("selectionchange",!1,s))}}function pm(r,s,a,h){switch(Ta(s)){case 1:var f=Qe;break;case 4:f=vh;break;default:f=Ea}a=f.bind(null,s,a,r),f=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Nh(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;w=w.return}for(;R!==null;){if(w=rs(R),w===null)return;if(P=w.tag,P===5||P===6){h=g=w;continue e}R=R.parentNode}}h=h.return}pa(function(){var z=g,X=Fs(a),Z=[];e:{var Q=cm.get(r);if(Q!==void 0){var ie=Js,ce=r;switch(r){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ce="focus",ie=no;break;case"focusout":ce="blur",ie=no;break;case"beforeblur":case"afterblur":ie=no;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Yl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=q;break;case om:case am:case lm:ie=Cr;break;case um:ie=je;break;case"scroll":ie=wh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=Zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var he=(s&4)!==0,st=!he&&r==="scroll",U=he?Q!==null?Q+"Capture":null:Q;he=[];for(var D=z,j;D!==null;){j=D;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,U!==null&&(ee=it(D,U),ee!=null&&he.push(Oa(D,ee,j)))),st)break;D=D.return}0<he.length&&(Q=new ie(Q,ce,null,a,X),Z.push({event:Q,listeners:he}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Q&&a!==qi&&(ce=a.relatedTarget||a.fromElement)&&(rs(ce)||ce[Pr]))break e;if((ie||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ce=a.relatedTarget||a.toElement,ie=z,ce=ce?rs(ce):null,ce!==null&&(st=On(ce),ce!==st||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(ie=null,ce=z),ie!==ce)){if(he=eo,ee="onMouseLeave",U="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(he=E,ee="onPointerLeave",U="onPointerEnter",D="pointer"),st=ie==null?Q:co(ie),j=ce==null?Q:co(ce),Q=new he(ee,D+"leave",ie,a,X),Q.target=st,Q.relatedTarget=j,ee=null,rs(X)===z&&(he=new he(U,D+"enter",ce,a,X),he.target=j,he.relatedTarget=st,ee=he),st=ee,ie&&ce)t:{for(he=ie,U=ce,D=0,j=he;j;j=lo(j))D++;for(j=0,ee=U;ee;ee=lo(ee))j++;for(;0<D-j;)he=lo(he),D--;for(;0<j-D;)U=lo(U),j--;for(;D--;){if(he===U||U!==null&&he===U.alternate)break t;he=lo(he),U=lo(U)}he=null}else he=null;ie!==null&&mm(Z,Q,ie,he,!1),ce!==null&&st!==null&&mm(Z,st,ce,he,!0)}}e:{if(Q=z?co(z):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var de=nE;else if(Gp(Q))if(Yp)de=oE;else{de=iE;var ge=rE}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(de=sE);if(de&&(de=de(r,z))){Qp(Z,de,a,X);break e}ge&&ge(r,Q,z),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&Vs(Q,"number",Q.value)}switch(ge=z?co(z):window,r){case"focusin":(Gp(ge)||ge.contentEditable==="true")&&(oo=ge,Sh=z,Na=null);break;case"focusout":Na=Sh=oo=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,im(Z,a,X);break;case"selectionchange":if(uE)break;case"keydown":case"keyup":im(Z,a,X)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else so?Wp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ns&&a.locale!=="ko"&&(so||we!=="onCompositionStart"?we==="onCompositionEnd"&&so&&(ye=Ia()):(cn=X,Ys="value"in cn?cn.value:cn.textContent,so=!0)),ge=au(z,we),0<ge.length&&(we=new Aa(we,r,null,a,X),Z.push({event:we,listeners:ge}),ye?we.data=ye:(ye=Kp(a),ye!==null&&(we.data=ye)))),(ye=hn?Jw(r,a):Zw(r,a))&&(z=au(z,"onBeforeInput"),0<z.length&&(X=new Aa("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:z}),X.data=ye))}fm(Z,s)})}function Oa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function au(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=it(r,a),g!=null&&h.unshift(Oa(r,g,f)),g=it(r,s),g!=null&&h.push(Oa(r,g,f))),r=r.return}return h}function lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mm(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var R=a,P=R.alternate,z=R.stateNode;if(P!==null&&P===h)break;R.tag===5&&z!==null&&(R=z,f?(P=it(a,g),P!=null&&w.unshift(Oa(a,P,R))):f||(P=it(a,g),P!=null&&w.push(Oa(a,P,R)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var fE=/\r\n?/g,pE=/\u0000|\uFFFD/g;function gm(r){return(typeof r=="string"?r:""+r).replace(fE,`
`).replace(pE,"")}function lu(r,s,a){if(s=gm(s),gm(r)!==s&&a)throw Error(t(425))}function uu(){}var xh=null,Dh=null;function Oh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lh=typeof setTimeout=="function"?setTimeout:void 0,mE=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,gE=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(r){return ym.resolve(null).then(r).catch(yE)}:Lh;function yE(r){setTimeout(function(){throw r})}function Vh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Fn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Fn(s)}function ai(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function _m(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var uo=Math.random().toString(36).slice(2),or="__reactFiber$"+uo,La="__reactProps$"+uo,Pr="__reactContainer$"+uo,bh="__reactEvents$"+uo,_E="__reactListeners$"+uo,vE="__reactHandles$"+uo;function rs(r){var s=r[or];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Pr]||a[or]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=_m(r);r!==null;){if(a=r[or])return a;r=_m(r)}return s}r=a,a=r.parentNode}return null}function Va(r){return r=r[or]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function co(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function cu(r){return r[La]||null}var Mh=[],ho=-1;function li(r){return{current:r}}function Ke(r){0>ho||(r.current=Mh[ho],Mh[ho]=null,ho--)}function He(r,s){ho++,Mh[ho]=r.current,r.current=s}var ui={},bt=li(ui),Xt=li(!1),is=ui;function fo(r,s){var a=r.type.contextTypes;if(!a)return ui;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Jt(r){return r=r.childContextTypes,r!=null}function hu(){Ke(Xt),Ke(bt)}function vm(r,s,a){if(bt.current!==ui)throw Error(t(168));He(bt,s),He(Xt,a)}function wm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return oe({},a,h)}function du(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ui,is=bt.current,He(bt,r),He(Xt,Xt.current),!0}function Em(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=wm(r,s,is),h.__reactInternalMemoizedMergedChildContext=r,Ke(Xt),Ke(bt),He(bt,r)):Ke(Xt),He(Xt,a)}var kr=null,fu=!1,Fh=!1;function Tm(r){kr===null?kr=[r]:kr.push(r)}function wE(r){fu=!0,Tm(r)}function ci(){if(!Fh&&kr!==null){Fh=!0;var r=0,s=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}kr=null,fu=!1}catch(f){throw kr!==null&&(kr=kr.slice(r+1)),Hs(Qi,ci),f}finally{Ne=s,Fh=!1}}return null}var po=[],mo=0,pu=null,mu=0,En=[],Tn=0,ss=null,Nr=1,xr="";function os(r,s){po[mo++]=mu,po[mo++]=pu,pu=r,mu=s}function Im(r,s,a){En[Tn++]=Nr,En[Tn++]=xr,En[Tn++]=ss,ss=r;var h=Nr;r=xr;var f=32-Ht(h)-1;h&=~(1<<f),a+=1;var g=32-Ht(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Nr=1<<32-Ht(s)+f|a<<f|h,xr=g+r}else Nr=1<<g|a<<f|h,xr=r}function Uh(r){r.return!==null&&(os(r,1),Im(r,1,0))}function jh(r){for(;r===pu;)pu=po[--mo],po[mo]=null,mu=po[--mo],po[mo]=null;for(;r===ss;)ss=En[--Tn],En[Tn]=null,xr=En[--Tn],En[Tn]=null,Nr=En[--Tn],En[Tn]=null}var dn=null,fn=null,Ye=!1,zn=null;function Sm(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Rm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=ai(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ss!==null?{id:Nr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,dn=r,fn=null,!0):!1;default:return!1}}function zh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bh(r){if(Ye){var s=fn;if(s){var a=s;if(!Rm(r,s)){if(zh(r))throw Error(t(418));s=ai(a.nextSibling);var h=dn;s&&Rm(r,s)?Sm(h,a):(r.flags=r.flags&-4097|2,Ye=!1,dn=r)}}else{if(zh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,dn=r}}}function Am(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function gu(r){if(r!==dn)return!1;if(!Ye)return Am(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Oh(r.type,r.memoizedProps)),s&&(s=fn)){if(zh(r))throw Cm(),Error(t(418));for(;s;)Sm(r,s),s=ai(s.nextSibling)}if(Am(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){fn=ai(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?ai(r.stateNode.nextSibling):null;return!0}function Cm(){for(var r=fn;r;)r=ai(r.nextSibling)}function go(){fn=dn=null,Ye=!1}function $h(r){zn===null?zn=[r]:zn.push(r)}var EE=se.ReactCurrentBatchConfig;function ba(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function yu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Pm(r){var s=r._init;return s(r._payload)}function km(r){function s(U,D){if(r){var j=U.deletions;j===null?(U.deletions=[D],U.flags|=16):j.push(D)}}function a(U,D){if(!r)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function h(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function f(U,D){return U=_i(U,D),U.index=0,U.sibling=null,U}function g(U,D,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<D?(U.flags|=2,D):j):(U.flags|=2,D)):(U.flags|=1048576,D)}function w(U){return r&&U.alternate===null&&(U.flags|=2),U}function R(U,D,j,ee){return D===null||D.tag!==6?(D=Ld(j,U.mode,ee),D.return=U,D):(D=f(D,j),D.return=U,D)}function P(U,D,j,ee){var de=j.type;return de===N?X(U,D,j.props.children,ee,j.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Pm(de)===D.type)?(ee=f(D,j.props),ee.ref=ba(U,D,j),ee.return=U,ee):(ee=zu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=ba(U,D,j),ee.return=U,ee)}function z(U,D,j,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Vd(j,U.mode,ee),D.return=U,D):(D=f(D,j.children||[]),D.return=U,D)}function X(U,D,j,ee,de){return D===null||D.tag!==7?(D=ps(j,U.mode,ee,de),D.return=U,D):(D=f(D,j),D.return=U,D)}function Z(U,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Ld(""+D,U.mode,j),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ie:return j=zu(D.type,D.key,D.props,null,U.mode,j),j.ref=ba(U,null,D),j.return=U,j;case _e:return D=Vd(D,U.mode,j),D.return=U,D;case Vt:var ee=D._init;return Z(U,ee(D._payload),j)}if(vr(D)||me(D))return D=ps(D,U.mode,j,null),D.return=U,D;yu(U,D)}return null}function Q(U,D,j,ee){var de=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:R(U,D,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:return j.key===de?P(U,D,j,ee):null;case _e:return j.key===de?z(U,D,j,ee):null;case Vt:return de=j._init,Q(U,D,de(j._payload),ee)}if(vr(j)||me(j))return de!==null?null:X(U,D,j,ee,null);yu(U,j)}return null}function ie(U,D,j,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(j)||null,R(D,U,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ie:return U=U.get(ee.key===null?j:ee.key)||null,P(D,U,ee,de);case _e:return U=U.get(ee.key===null?j:ee.key)||null,z(D,U,ee,de);case Vt:var ge=ee._init;return ie(U,D,j,ge(ee._payload),de)}if(vr(ee)||me(ee))return U=U.get(j)||null,X(D,U,ee,de,null);yu(D,ee)}return null}function ce(U,D,j,ee){for(var de=null,ge=null,ye=D,we=D=0,It=null;ye!==null&&we<j.length;we++){ye.index>we?(It=ye,ye=null):It=ye.sibling;var be=Q(U,ye,j[we],ee);if(be===null){ye===null&&(ye=It);break}r&&ye&&be.alternate===null&&s(U,ye),D=g(be,D,we),ge===null?de=be:ge.sibling=be,ge=be,ye=It}if(we===j.length)return a(U,ye),Ye&&os(U,we),de;if(ye===null){for(;we<j.length;we++)ye=Z(U,j[we],ee),ye!==null&&(D=g(ye,D,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return Ye&&os(U,we),de}for(ye=h(U,ye);we<j.length;we++)It=ie(ye,U,we,j[we],ee),It!==null&&(r&&It.alternate!==null&&ye.delete(It.key===null?we:It.key),D=g(It,D,we),ge===null?de=It:ge.sibling=It,ge=It);return r&&ye.forEach(function(vi){return s(U,vi)}),Ye&&os(U,we),de}function he(U,D,j,ee){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=D,we=D=0,It=null,be=j.next();ye!==null&&!be.done;we++,be=j.next()){ye.index>we?(It=ye,ye=null):It=ye.sibling;var vi=Q(U,ye,be.value,ee);if(vi===null){ye===null&&(ye=It);break}r&&ye&&vi.alternate===null&&s(U,ye),D=g(vi,D,we),ge===null?de=vi:ge.sibling=vi,ge=vi,ye=It}if(be.done)return a(U,ye),Ye&&os(U,we),de;if(ye===null){for(;!be.done;we++,be=j.next())be=Z(U,be.value,ee),be!==null&&(D=g(be,D,we),ge===null?de=be:ge.sibling=be,ge=be);return Ye&&os(U,we),de}for(ye=h(U,ye);!be.done;we++,be=j.next())be=ie(ye,U,we,be.value,ee),be!==null&&(r&&be.alternate!==null&&ye.delete(be.key===null?we:be.key),D=g(be,D,we),ge===null?de=be:ge.sibling=be,ge=be);return r&&ye.forEach(function(eT){return s(U,eT)}),Ye&&os(U,we),de}function st(U,D,j,ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ie:e:{for(var de=j.key,ge=D;ge!==null;){if(ge.key===de){if(de=j.type,de===N){if(ge.tag===7){a(U,ge.sibling),D=f(ge,j.props.children),D.return=U,U=D;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Pm(de)===ge.type){a(U,ge.sibling),D=f(ge,j.props),D.ref=ba(U,ge,j),D.return=U,U=D;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===N?(D=ps(j.props.children,U.mode,ee,j.key),D.return=U,U=D):(ee=zu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=ba(U,D,j),ee.return=U,U=ee)}return w(U);case _e:e:{for(ge=j.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(U,D.sibling),D=f(D,j.children||[]),D.return=U,U=D;break e}else{a(U,D);break}else s(U,D);D=D.sibling}D=Vd(j,U.mode,ee),D.return=U,U=D}return w(U);case Vt:return ge=j._init,st(U,D,ge(j._payload),ee)}if(vr(j))return ce(U,D,j,ee);if(me(j))return he(U,D,j,ee);yu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(U,D.sibling),D=f(D,j),D.return=U,U=D):(a(U,D),D=Ld(j,U.mode,ee),D.return=U,U=D),w(U)):a(U,D)}return st}var yo=km(!0),Nm=km(!1),_u=li(null),vu=null,_o=null,qh=null;function Hh(){qh=_o=vu=null}function Wh(r){var s=_u.current;Ke(_u),r._currentValue=s}function Kh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function vo(r,s){vu=r,qh=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zt=!0),r.firstContext=null)}function In(r){var s=r._currentValue;if(qh!==r)if(r={context:r,memoizedValue:s,next:null},_o===null){if(vu===null)throw Error(t(308));_o=r,vu.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return s}var as=null;function Gh(r){as===null?as=[r]:as.push(r)}function xm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Gh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Dr(r,h)}function Dr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var hi=!1;function Qh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Or(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function di(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Ve&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Dr(r,a)}return f=h.interleaved,f===null?(s.next=s,Gh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Dr(r,a)}function wu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ti(r,a)}}function Om(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Eu(r,s,a,h){var f=r.updateQueue;hi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var P=R,z=P.next;P.next=null,w===null?g=z:w.next=z,w=P;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==w&&(R===null?X.firstBaseUpdate=z:R.next=z,X.lastBaseUpdate=P))}if(g!==null){var Z=f.baseState;w=0,X=z=P=null,R=g;do{var Q=R.lane,ie=R.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(Q=s,ie=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Z=ce.call(ie,Z,Q);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Q=typeof ce=="function"?ce.call(ie,Z,Q):ce,Q==null)break e;Z=oe({},Z,Q);break e;case 2:hi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[R]:Q.push(R))}else ie={eventTime:ie,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(z=X=ie,P=Z):X=X.next=ie,w|=Q;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(X===null&&(P=Z),f.baseState=P,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);cs|=w,r.lanes=w,r.memoizedState=Z}}function Lm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ma={},ar=li(Ma),Fa=li(Ma),Ua=li(Ma);function ls(r){if(r===Ma)throw Error(t(174));return r}function Yh(r,s){switch(He(Ua,s),He(Fa,r),He(ar,Ma),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ke(ar),He(ar,s)}function wo(){Ke(ar),Ke(Fa),Ke(Ua)}function Vm(r){ls(Ua.current);var s=ls(ar.current),a=ft(s,r.type);s!==a&&(He(Fa,r),He(ar,a))}function Xh(r){Fa.current===r&&(Ke(ar),Ke(Fa))}var Je=li(0);function Tu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Zh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Iu=se.ReactCurrentDispatcher,ed=se.ReactCurrentBatchConfig,us=0,Ze=null,mt=null,Et=null,Su=!1,ja=!1,za=0,TE=0;function Mt(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!jn(r[a],s[a]))return!1;return!0}function nd(r,s,a,h,f,g){if(us=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Iu.current=r===null||r.memoizedState===null?AE:CE,r=a(h,f),ja){g=0;do{if(ja=!1,za=0,25<=g)throw Error(t(301));g+=1,Et=mt=null,s.updateQueue=null,Iu.current=PE,r=a(h,f)}while(ja)}if(Iu.current=Cu,s=mt!==null&&mt.next!==null,us=0,Et=mt=Ze=null,Su=!1,s)throw Error(t(300));return r}function rd(){var r=za!==0;return za=0,r}function lr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=r:Et=Et.next=r,Et}function Sn(){if(mt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Et===null?Ze.memoizedState:Et.next;if(s!==null)Et=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Ze.memoizedState=Et=r:Et=Et.next=r}return Et}function Ba(r,s){return typeof s=="function"?s(r):s}function id(r){var s=Sn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=mt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,P=null,z=g;do{var X=z.lane;if((us&X)===X)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(R=P=Z,w=h):P=P.next=Z,Ze.lanes|=X,cs|=X}z=z.next}while(z!==null&&z!==g);P===null?w=h:P.next=R,jn(h,s.memoizedState)||(Zt=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,cs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=Sn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);jn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function bm(){}function Mm(r,s){var a=Ze,h=Sn(),f=s(),g=!jn(h.memoizedState,f);if(g&&(h.memoizedState=f,Zt=!0),h=h.queue,od(jm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,$a(9,Um.bind(null,a,h,f,s),void 0,null),Tt===null)throw Error(t(349));us&30||Fm(a,s,f)}return f}function Fm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Um(r,s,a,h){s.value=a,s.getSnapshot=h,zm(s)&&Bm(r)}function jm(r,s,a){return a(function(){zm(s)&&Bm(r)})}function zm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!jn(r,a)}catch{return!0}}function Bm(r){var s=Dr(r,1);s!==null&&Hn(s,r,1,-1)}function $m(r){var s=lr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:r},s.queue=r,r=r.dispatch=RE.bind(null,Ze,r),[s.memoizedState,r]}function $a(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function qm(){return Sn().memoizedState}function Ru(r,s,a,h){var f=lr();Ze.flags|=r,f.memoizedState=$a(1|s,a,void 0,h===void 0?null:h)}function Au(r,s,a,h){var f=Sn();h=h===void 0?null:h;var g=void 0;if(mt!==null){var w=mt.memoizedState;if(g=w.destroy,h!==null&&td(h,w.deps)){f.memoizedState=$a(s,a,g,h);return}}Ze.flags|=r,f.memoizedState=$a(1|s,a,g,h)}function Hm(r,s){return Ru(8390656,8,r,s)}function od(r,s){return Au(2048,8,r,s)}function Wm(r,s){return Au(4,2,r,s)}function Km(r,s){return Au(4,4,r,s)}function Gm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Qm(r,s,a){return a=a!=null?a.concat([r]):null,Au(4,4,Gm.bind(null,s,r),a)}function ad(){}function Ym(r,s){var a=Sn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Xm(r,s){var a=Sn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Jm(r,s,a){return us&21?(jn(a,s)||(a=Ji(),Ze.lanes|=a,cs|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a)}function IE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var h=ed.transition;ed.transition={};try{r(!1),s()}finally{Ne=a,ed.transition=h}}function Zm(){return Sn().memoizedState}function SE(r,s,a){var h=gi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},eg(r))tg(s,a);else if(a=xm(r,s,a,h),a!==null){var f=Gt();Hn(a,r,h,f),ng(a,s,h)}}function RE(r,s,a){var h=gi(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(eg(r))tg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,a);if(f.hasEagerState=!0,f.eagerState=R,jn(R,w)){var P=s.interleaved;P===null?(f.next=f,Gh(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=xm(r,s,f,h),a!==null&&(f=Gt(),Hn(a,r,h,f),ng(a,s,h))}}function eg(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function tg(r,s){ja=Su=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function ng(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ti(r,a)}}var Cu={readContext:In,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},AE={readContext:In,useCallback:function(r,s){return lr().memoizedState=[r,s===void 0?null:s],r},useContext:In,useEffect:Hm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,Gm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var a=lr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=lr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=SE.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=lr();return r={current:r},s.memoizedState=r},useState:$m,useDebugValue:ad,useDeferredValue:function(r){return lr().memoizedState=r},useTransition:function(){var r=$m(!1),s=r[0];return r=IE.bind(null,r[1]),lr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Ze,f=lr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));us&30||Fm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Hm(jm.bind(null,h,g,r),[r]),h.flags|=2048,$a(9,Um.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=lr(),s=Tt.identifierPrefix;if(Ye){var a=xr,h=Nr;a=(h&~(1<<32-Ht(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=za++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=TE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},CE={readContext:In,useCallback:Ym,useContext:In,useEffect:od,useImperativeHandle:Qm,useInsertionEffect:Wm,useLayoutEffect:Km,useMemo:Xm,useReducer:id,useRef:qm,useState:function(){return id(Ba)},useDebugValue:ad,useDeferredValue:function(r){var s=Sn();return Jm(s,mt.memoizedState,r)},useTransition:function(){var r=id(Ba)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:bm,useSyncExternalStore:Mm,useId:Zm,unstable_isNewReconciler:!1},PE={readContext:In,useCallback:Ym,useContext:In,useEffect:od,useImperativeHandle:Qm,useInsertionEffect:Wm,useLayoutEffect:Km,useMemo:Xm,useReducer:sd,useRef:qm,useState:function(){return sd(Ba)},useDebugValue:ad,useDeferredValue:function(r){var s=Sn();return mt===null?s.memoizedState=r:Jm(s,mt.memoizedState,r)},useTransition:function(){var r=sd(Ba)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:bm,useSyncExternalStore:Mm,useId:Zm,unstable_isNewReconciler:!1};function Bn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ld(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Pu={isMounted:function(r){return(r=r._reactInternals)?On(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Gt(),f=gi(r),g=Or(h,f);g.payload=s,a!=null&&(g.callback=a),s=di(r,g,f),s!==null&&(Hn(s,r,f,h),wu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Gt(),f=gi(r),g=Or(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=di(r,g,f),s!==null&&(Hn(s,r,f,h),wu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Gt(),h=gi(r),f=Or(a,h);f.tag=2,s!=null&&(f.callback=s),s=di(r,f,h),s!==null&&(Hn(s,r,h,a),wu(s,r,h))}};function rg(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!ka(a,h)||!ka(f,g):!0}function ig(r,s,a){var h=!1,f=ui,g=s.contextType;return typeof g=="object"&&g!==null?g=In(g):(f=Jt(s)?is:bt.current,h=s.contextTypes,g=(h=h!=null)?fo(r,f):ui),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function sg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Pu.enqueueReplaceState(s,s.state,null)}function ud(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Qh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=In(g):(g=Jt(s)?is:bt.current,f.context=fo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ld(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Pu.enqueueReplaceState(f,f.state,null),Eu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Eo(r,s){try{var a="",h=s;do a+=Ae(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function hd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var kE=typeof WeakMap=="function"?WeakMap:Map;function og(r,s,a){a=Or(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Vu||(Vu=!0,Ad=h),hd(r,s)},a}function ag(r,s,a){a=Or(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){hd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){hd(r,s),typeof h!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function lg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new kE;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=$E.bind(null,r,s,a),s.then(r,r))}function ug(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function cg(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Or(-1,1),s.tag=2,di(a,s,1))),a.lanes|=1),r)}var NE=se.ReactCurrentOwner,Zt=!1;function Kt(r,s,a,h){s.child=r===null?Nm(s,null,a,h):yo(s,r.child,a,h)}function hg(r,s,a,h,f){a=a.render;var g=s.ref;return vo(s,f),h=nd(r,s,a,h,g,f),a=rd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Lr(r,s,f)):(Ye&&a&&Uh(s),s.flags|=1,Kt(r,s,h,f),s.child)}function dg(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!Od(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,fg(r,s,g,h,f)):(r=zu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ka,a(w,h)&&r.ref===s.ref)return Lr(r,s,f)}return s.flags|=1,r=_i(g,h),r.ref=s.ref,r.return=s,s.child=r}function fg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(ka(g,h)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(Zt=!0);else return s.lanes=r.lanes,Lr(r,s,f)}return dd(r,s,a,h,f)}function pg(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Io,pn),pn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(Io,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,He(Io,pn),pn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,He(Io,pn),pn|=h;return Kt(r,s,f,a),s.child}function mg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(r,s,a,h,f){var g=Jt(a)?is:bt.current;return g=fo(s,g),vo(s,f),a=nd(r,s,a,h,g,f),h=rd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Lr(r,s,f)):(Ye&&h&&Uh(s),s.flags|=1,Kt(r,s,a,f),s.child)}function gg(r,s,a,h,f){if(Jt(a)){var g=!0;du(s)}else g=!1;if(vo(s,f),s.stateNode===null)Nu(r,s),ig(s,a,h),ud(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var P=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=In(z):(z=Jt(a)?is:bt.current,z=fo(s,z));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||P!==z)&&sg(s,w,h,z),hi=!1;var Q=s.memoizedState;w.state=Q,Eu(s,h,w,f),P=s.memoizedState,R!==h||Q!==P||Xt.current||hi?(typeof X=="function"&&(ld(s,a,X,h),P=s.memoizedState),(R=hi||rg(s,a,R,h,Q,P,z))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),w.props=h,w.state=P,w.context=z,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Dm(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Bn(s.type,R),w.props=z,Z=s.pendingProps,Q=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=In(P):(P=Jt(a)?is:bt.current,P=fo(s,P));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==Z||Q!==P)&&sg(s,w,h,P),hi=!1,Q=s.memoizedState,w.state=Q,Eu(s,h,w,f);var ce=s.memoizedState;R!==Z||Q!==ce||Xt.current||hi?(typeof ie=="function"&&(ld(s,a,ie,h),ce=s.memoizedState),(z=hi||rg(s,a,z,h,Q,ce,P)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=P,h=z):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),h=!1)}return fd(r,s,a,h,g,f)}function fd(r,s,a,h,f,g){mg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Em(s,a,!1),Lr(r,s,g);h=s.stateNode,NE.current=s;var R=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=yo(s,r.child,null,g),s.child=yo(s,null,R,g)):Kt(r,s,R,g),s.memoizedState=h.state,f&&Em(s,a,!0),s.child}function yg(r){var s=r.stateNode;s.pendingContext?vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&vm(r,s.context,!1),Yh(r,s.containerInfo)}function _g(r,s,a,h,f){return go(),$h(f),s.flags|=256,Kt(r,s,a,h),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function vg(r,s,a){var h=s.pendingProps,f=Je.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),He(Je,f&1),r===null)return Bh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Bu(w,h,0,null),r=ps(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=md(a),s.memoizedState=pd,r):gd(s,w));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return xE(r,s,w,h,R,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,R=f.sibling;var P={mode:"hidden",children:h.children};return!(w&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=_i(f,P),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=_i(R,g):(g=ps(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?md(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=pd,h}return g=r.child,r=g.sibling,h=_i(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function gd(r,s){return s=Bu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function ku(r,s,a,h){return h!==null&&$h(h),yo(s,r.child,null,a),r=gd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function xE(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=cd(Error(t(422))),ku(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Bu({mode:"visible",children:h.children},f,0,null),g=ps(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&yo(s,r.child,null,w),s.child.memoizedState=md(w),s.memoizedState=pd,g);if(!(s.mode&1))return ku(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=cd(g,h,void 0),ku(r,s,w,h)}if(R=(w&r.childLanes)!==0,Zt||R){if(h=Tt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Dr(r,f),Hn(h,r,f,-1))}return Dd(),h=cd(Error(t(421))),ku(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=qE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,fn=ai(f.nextSibling),dn=s,Ye=!0,zn=null,r!==null&&(En[Tn++]=Nr,En[Tn++]=xr,En[Tn++]=ss,Nr=r.id,xr=r.overflow,ss=s),s=gd(s,h.children),s.flags|=4096,s)}function wg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Kh(r.return,s,a)}function yd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Eg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Kt(r,s,h.children,a),h=Je.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wg(r,a,s);else if(r.tag===19)wg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(He(Je,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Tu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),yd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Tu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}yd(s,!0,a,null,g);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Lr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=_i(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=_i(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function DE(r,s,a){switch(s.tag){case 3:yg(s),go();break;case 5:Vm(s);break;case 1:Jt(s.type)&&du(s);break;case 4:Yh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;He(_u,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):a&s.child.childLanes?vg(r,s,a):(He(Je,Je.current&1),r=Lr(r,s,a),r!==null?r.sibling:null);He(Je,Je.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return Eg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Je,Je.current),h)break;return null;case 22:case 23:return s.lanes=0,pg(r,s,a)}return Lr(r,s,a)}var Tg,_d,Ig,Sg;Tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_d=function(){},Ig=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ls(ar.current);var g=null;switch(a){case"input":f=zi(r,f),h=zi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ia(r,f),h=ia(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=uu)}ca(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var R=f[z];for(w in R)R.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var P=h[z];if(R=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&P!==R&&(P!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&R[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,R=R?R.__html:void 0,P!=null&&R!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",r),g||R===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Sg=function(r,s,a,h){a!==h&&(s.flags|=4)};function qa(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function OE(r,s,a){var h=s.pendingProps;switch(jh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&hu(),Ft(s),null;case 3:return h=s.stateNode,wo(),Ke(Xt),Ke(bt),Zh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(gu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,zn!==null&&(kd(zn),zn=null))),_d(r,s),Ft(s),null;case 5:Xh(s);var f=ls(Ua.current);if(a=s.type,r!==null&&s.stateNode!=null)Ig(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ls(ar.current),gu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[or]=s,h[La]=g,r=(s.mode&1)!==0,a){case"dialog":We("cancel",h),We("close",h);break;case"iframe":case"object":case"embed":We("load",h);break;case"video":case"audio":for(f=0;f<xa.length;f++)We(xa[f],h);break;case"source":We("error",h);break;case"img":case"image":case"link":We("error",h),We("load",h);break;case"details":We("toggle",h);break;case"input":Ls(h,g),We("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},We("invalid",h);break;case"textarea":bs(h,g),We("invalid",h)}ca(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&We("scroll",h)}switch(a){case"input":_r(h),Ll(h,g,!0);break;case"textarea":_r(h),sa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=uu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[or]=s,r[La]=h,Tg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ha(a,h),a){case"dialog":We("cancel",r),We("close",r),f=h;break;case"iframe":case"object":case"embed":We("load",r),f=h;break;case"video":case"audio":for(f=0;f<xa.length;f++)We(xa[f],r);f=h;break;case"source":We("error",r),f=h;break;case"img":case"image":case"link":We("error",r),We("load",r),f=h;break;case"details":We("toggle",r),f=h;break;case"input":Ls(r,h),f=zi(r,h),We("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),We("invalid",r);break;case"textarea":bs(r,h),f=ia(r,h),We("invalid",r);break;default:f=h}ca(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var P=R[g];g==="style"?la(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&oa(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Yr(r,P):typeof P=="number"&&Yr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&We("scroll",r):P!=null&&ne(r,g,P,w))}switch(a){case"input":_r(r),Ll(r,h,!1);break;case"textarea":_r(r),sa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?wr(r,!!h.multiple,g,!1):h.defaultValue!=null&&wr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=uu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Sg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ls(Ua.current),ls(ar.current),gu(s)){if(h=s.stateNode,a=s.memoizedProps,h[or]=s,(g=h.nodeValue!==a)&&(r=dn,r!==null))switch(r.tag){case 3:lu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&lu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[or]=s,s.stateNode=h}return Ft(s),null;case 13:if(Ke(Je),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&fn!==null&&s.mode&1&&!(s.flags&128))Cm(),go(),s.flags|=98560,g=!1;else if(g=gu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[or]=s}else go(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else zn!==null&&(kd(zn),zn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Je.current&1?gt===0&&(gt=3):Dd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return wo(),_d(r,s),r===null&&Da(s.stateNode.containerInfo),Ft(s),null;case 10:return Wh(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&hu(),Ft(s),null;case 19:if(Ke(Je),g=s.memoizedState,g===null)return Ft(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)qa(g,!1);else{if(gt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Tu(r),w!==null){for(s.flags|=128,qa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>So&&(s.flags|=128,h=!0,qa(g,!1),s.lanes=4194304)}else{if(!h)if(r=Tu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ye)return Ft(s),null}else 2*qe()-g.renderingStartTime>So&&a!==1073741824&&(s.flags|=128,h=!0,qa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Je.current,He(Je,h?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return xd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?pn&1073741824&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function LE(r,s){switch(jh(s),s.tag){case 1:return Jt(s.type)&&hu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return wo(),Ke(Xt),Ke(bt),Zh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Xh(s),null;case 13:if(Ke(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));go()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Je),null;case 4:return wo(),null;case 10:return Wh(s.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var xu=!1,Ut=!1,VE=typeof WeakSet=="function"?WeakSet:Set,le=null;function To(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){nt(r,s,h)}else a.current=null}function vd(r,s,a){try{a()}catch(h){nt(r,s,h)}}var Rg=!1;function bE(r,s){if(xh=ii,r=rm(),Ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,R=-1,P=-1,z=0,X=0,Z=r,Q=null;t:for(;;){for(var ie;Z!==a||f!==0&&Z.nodeType!==3||(R=w+f),Z!==g||h!==0&&Z.nodeType!==3||(P=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(ie=Z.firstChild)!==null;)Q=Z,Z=ie;for(;;){if(Z===r)break t;if(Q===a&&++z===f&&(R=w),Q===g&&++X===h&&(P=w),(ie=Z.nextSibling)!==null)break;Z=Q,Q=Z.parentNode}Z=ie}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dh={focusedElem:r,selectionRange:a},ii=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,st=ce.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:Bn(s.type,he),st);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){nt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=Rg,Rg=!1,ce}function Ha(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&vd(s,a,g)}f=f.next}while(f!==h)}}function Du(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ag(r){var s=r.alternate;s!==null&&(r.alternate=null,Ag(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[or],delete s[La],delete s[bh],delete s[_E],delete s[vE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Cg(r){return r.tag===5||r.tag===3||r.tag===4}function Pg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Cg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ed(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=uu));else if(h!==4&&(r=r.child,r!==null))for(Ed(r,s,a),r=r.sibling;r!==null;)Ed(r,s,a),r=r.sibling}function Td(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Td(r,s,a),r=r.sibling;r!==null;)Td(r,s,a),r=r.sibling}var Ct=null,$n=!1;function fi(r,s,a){for(a=a.child;a!==null;)kg(r,s,a),a=a.sibling}function kg(r,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:Ut||To(a,s);case 6:var h=Ct,f=$n;Ct=null,fi(r,s,a),Ct=h,$n=f,Ct!==null&&($n?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&($n?(r=Ct,a=a.stateNode,r.nodeType===8?Vh(r.parentNode,a):r.nodeType===1&&Vh(r,a),Fn(r)):Vh(Ct,a.stateNode));break;case 4:h=Ct,f=$n,Ct=a.stateNode.containerInfo,$n=!0,fi(r,s,a),Ct=h,$n=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&vd(a,s,w),f=f.next}while(f!==h)}fi(r,s,a);break;case 1:if(!Ut&&(To(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){nt(a,s,R)}fi(r,s,a);break;case 21:fi(r,s,a);break;case 22:a.mode&1?(Ut=(h=Ut)||a.memoizedState!==null,fi(r,s,a),Ut=h):fi(r,s,a);break;default:fi(r,s,a)}}function Ng(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new VE),s.forEach(function(h){var f=HE.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function qn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,$n=!1;break e;case 3:Ct=R.stateNode.containerInfo,$n=!0;break e;case 4:Ct=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));kg(g,w,f),Ct=null,$n=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(z){nt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)xg(s,r),s=s.sibling}function xg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qn(s,r),ur(r),h&4){try{Ha(3,r,r.return),Du(3,r)}catch(he){nt(r,r.return,he)}try{Ha(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:qn(s,r),ur(r),h&512&&a!==null&&To(a,a.return);break;case 5:if(qn(s,r),ur(r),h&512&&a!==null&&To(a,a.return),r.flags&32){var f=r.stateNode;try{Yr(f,"")}catch(he){nt(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,R=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&na(f,g),ha(R,w);var z=ha(R,g);for(w=0;w<P.length;w+=2){var X=P[w],Z=P[w+1];X==="style"?la(f,Z):X==="dangerouslySetInnerHTML"?oa(f,Z):X==="children"?Yr(f,Z):ne(f,X,Z,z)}switch(R){case"input":ra(f,g);break;case"textarea":Ms(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?wr(f,!!g.multiple,ie,!1):Q!==!!g.multiple&&(g.defaultValue!=null?wr(f,!!g.multiple,g.defaultValue,!0):wr(f,!!g.multiple,g.multiple?[]:"",!1))}f[La]=g}catch(he){nt(r,r.return,he)}}break;case 6:if(qn(s,r),ur(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){nt(r,r.return,he)}}break;case 3:if(qn(s,r),ur(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:qn(s,r),ur(r);break;case 13:qn(s,r),ur(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Rd=qe())),h&4&&Ng(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||X,qn(s,r),Ut=z):qn(s,r),ur(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(Z=le=X;le!==null;){switch(Q=le,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ha(4,Q,Q.return);break;case 1:To(Q,Q.return);var ce=Q.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Q,a=Q.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(h,a,he)}}break;case 5:To(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Lg(Z);continue}}ie!==null?(ie.return=Q,le=ie):Lg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{f=Z.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=Z.stateNode,P=Z.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,R.style.display=aa("display",w))}catch(he){nt(r,r.return,he)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(he){nt(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:qn(s,r),ur(r),h&4&&Ng(r);break;case 21:break;default:qn(s,r),ur(r)}}function ur(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Cg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Yr(f,""),h.flags&=-33);var g=Pg(r);Td(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=Pg(r);Ed(r,R,w);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function ME(r,s,a){le=r,Dg(r)}function Dg(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||xu;if(!w){var R=f.alternate,P=R!==null&&R.memoizedState!==null||Ut;R=xu;var z=Ut;if(xu=w,(Ut=P)&&!z)for(le=f;le!==null;)w=le,P=w.child,w.tag===22&&w.memoizedState!==null?Vg(f):P!==null?(P.return=w,le=P):Vg(f);for(;g!==null;)le=g,Dg(g),g=g.sibling;le=f,xu=R,Ut=z}Og(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):Og(r)}}function Og(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ut||Du(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Bn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Lm(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Lm(s,w,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Fn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&wd(s)}catch(Q){nt(s,s.return,Q)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Lg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Vg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Du(4,s)}catch(P){nt(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(P){nt(s,f,P)}}var g=s.return;try{wd(s)}catch(P){nt(s,g,P)}break;case 5:var w=s.return;try{wd(s)}catch(P){nt(s,w,P)}}}catch(P){nt(s,s.return,P)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var FE=Math.ceil,Ou=se.ReactCurrentDispatcher,Id=se.ReactCurrentOwner,Rn=se.ReactCurrentBatchConfig,Ve=0,Tt=null,ut=null,Pt=0,pn=0,Io=li(0),gt=0,Wa=null,cs=0,Lu=0,Sd=0,Ka=null,en=null,Rd=0,So=1/0,Vr=null,Vu=!1,Ad=null,pi=null,bu=!1,mi=null,Mu=0,Ga=0,Cd=null,Fu=-1,Uu=0;function Gt(){return Ve&6?qe():Fu!==-1?Fu:Fu=qe()}function gi(r){return r.mode&1?Ve&2&&Pt!==0?Pt&-Pt:EE.transition!==null?(Uu===0&&(Uu=Ji()),Uu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:Ta(r.type)),r):1}function Hn(r,s,a,h){if(50<Ga)throw Ga=0,Cd=null,Error(t(185));ei(r,a,h),(!(Ve&2)||r!==Tt)&&(r===Tt&&(!(Ve&2)&&(Lu|=a),gt===4&&yi(r,Pt)),tn(r,h),a===1&&Ve===0&&!(s.mode&1)&&(So=qe()+500,fu&&ci()))}function tn(r,s){var a=r.callbackNode;Ir(r,s);var h=Xi(r,r===Tt?Pt:0);if(h===0)a!==null&&ya(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ya(a),s===1)r.tag===0?wE(Mg.bind(null,r)):Tm(Mg.bind(null,r)),gE(function(){!(Ve&6)&&ci()}),a=null;else{switch(ni(h)){case 1:a=Qi;break;case 4:a=Xr;break;case 16:a=_n;break;case 536870912:a=Ul;break;default:a=_n}a=Hg(a,bg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function bg(r,s){if(Fu=-1,Uu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(Ro()&&r.callbackNode!==a)return null;var h=Xi(r,r===Tt?Pt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=ju(r,h);else{s=h;var f=Ve;Ve|=2;var g=Ug();(Tt!==r||Pt!==s)&&(Vr=null,So=qe()+500,ds(r,s));do try{zE();break}catch(R){Fg(r,R)}while(!0);Hh(),Ou.current=g,Ve=f,ut!==null?s=0:(Tt=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(f=un(r),f!==0&&(h=f,s=Pd(r,f))),s===1)throw a=Wa,ds(r,0),yi(r,h),tn(r,qe()),a;if(s===6)yi(r,h);else{if(f=r.current.alternate,!(h&30)&&!UE(f)&&(s=ju(r,h),s===2&&(g=un(r),g!==0&&(h=g,s=Pd(r,g))),s===1))throw a=Wa,ds(r,0),yi(r,h),tn(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:fs(r,en,Vr);break;case 3:if(yi(r,h),(h&130023424)===h&&(s=Rd+500-qe(),10<s)){if(Xi(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Gt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Lh(fs.bind(null,r,en,Vr),s);break}fs(r,en,Vr);break;case 4:if(yi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Ht(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*FE(h/1960))-h,10<h){r.timeoutHandle=Lh(fs.bind(null,r,en,Vr),h);break}fs(r,en,Vr);break;case 5:fs(r,en,Vr);break;default:throw Error(t(329))}}}return tn(r,qe()),r.callbackNode===a?bg.bind(null,r):null}function Pd(r,s){var a=Ka;return r.current.memoizedState.isDehydrated&&(ds(r,s).flags|=256),r=ju(r,s),r!==2&&(s=en,en=a,s!==null&&kd(s)),r}function kd(r){en===null?en=r:en.push.apply(en,r)}function UE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!jn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function yi(r,s){for(s&=~Sd,s&=~Lu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),h=1<<a;r[a]=-1,s&=~h}}function Mg(r){if(Ve&6)throw Error(t(327));Ro();var s=Xi(r,0);if(!(s&1))return tn(r,qe()),null;var a=ju(r,s);if(r.tag!==0&&a===2){var h=un(r);h!==0&&(s=h,a=Pd(r,h))}if(a===1)throw a=Wa,ds(r,0),yi(r,s),tn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,fs(r,en,Vr),tn(r,qe()),null}function Nd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(So=qe()+500,fu&&ci())}}function hs(r){mi!==null&&mi.tag===0&&!(Ve&6)&&Ro();var s=Ve;Ve|=1;var a=Rn.transition,h=Ne;try{if(Rn.transition=null,Ne=1,r)return r()}finally{Ne=h,Rn.transition=a,Ve=s,!(Ve&6)&&ci()}}function xd(){pn=Io.current,Ke(Io)}function ds(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,mE(a)),ut!==null)for(a=ut.return;a!==null;){var h=a;switch(jh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&hu();break;case 3:wo(),Ke(Xt),Ke(bt),Zh();break;case 5:Xh(h);break;case 4:wo();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Wh(h.type._context);break;case 22:case 23:xd()}a=a.return}if(Tt=r,ut=r=_i(r.current,null),Pt=pn=s,gt=0,Wa=null,Sd=Lu=cs=0,en=Ka=null,as!==null){for(s=0;s<as.length;s++)if(a=as[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}as=null}return r}function Fg(r,s){do{var a=ut;try{if(Hh(),Iu.current=Cu,Su){for(var h=Ze.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Su=!1}if(us=0,Et=mt=Ze=null,ja=!1,za=0,Id.current=null,a===null||a.return===null){gt=1,Wa=s,ut=null;break}e:{var g=r,w=a.return,R=a,P=s;if(s=Pt,R.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,X=R,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=ug(w);if(ie!==null){ie.flags&=-257,cg(ie,w,R,g,s),ie.mode&1&&lg(g,z,s),s=ie,P=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if(!(s&1)){lg(g,z,s),Dd();break e}P=Error(t(426))}}else if(Ye&&R.mode&1){var st=ug(w);if(st!==null){!(st.flags&65536)&&(st.flags|=256),cg(st,w,R,g,s),$h(Eo(P,R));break e}}g=P=Eo(P,R),gt!==4&&(gt=2),Ka===null?Ka=[g]:Ka.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=og(g,P,s);Om(g,U);break e;case 1:R=P;var D=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(pi===null||!pi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=ag(g,R,s);Om(g,ee);break e}}g=g.return}while(g!==null)}zg(a)}catch(de){s=de,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Ug(){var r=Ou.current;return Ou.current=Cu,r===null?Cu:r}function Dd(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||!(cs&268435455)&&!(Lu&268435455)||yi(Tt,Pt)}function ju(r,s){var a=Ve;Ve|=2;var h=Ug();(Tt!==r||Pt!==s)&&(Vr=null,ds(r,s));do try{jE();break}catch(f){Fg(r,f)}while(!0);if(Hh(),Ve=a,Ou.current=h,ut!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function jE(){for(;ut!==null;)jg(ut)}function zE(){for(;ut!==null&&!Ml();)jg(ut)}function jg(r){var s=qg(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?zg(r):ut=s,Id.current=null}function zg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=LE(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ut=null;return}}else if(a=OE(a,s,pn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);gt===0&&(gt=5)}function fs(r,s,a){var h=Ne,f=Rn.transition;try{Rn.transition=null,Ne=1,BE(r,s,a,h)}finally{Rn.transition=f,Ne=h}return null}function BE(r,s,a,h){do Ro();while(mi!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===Tt&&(ut=Tt=null,Pt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||bu||(bu=!0,Hg(_n,function(){return Ro(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Rn.transition,Rn.transition=null;var w=Ne;Ne=1;var R=Ve;Ve|=4,Id.current=null,bE(r,a),xg(a,r),lE(Dh),ii=!!xh,Dh=xh=null,r.current=a,ME(a),mh(),Ve=R,Ne=w,Rn.transition=g}else r.current=a;if(bu&&(bu=!1,mi=r,Mu=f),g=r.pendingLanes,g===0&&(pi=null),jl(a.stateNode),tn(r,qe()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Vu)throw Vu=!1,r=Ad,Ad=null,r;return Mu&1&&r.tag!==0&&Ro(),g=r.pendingLanes,g&1?r===Cd?Ga++:(Ga=0,Cd=r):Ga=0,ci(),null}function Ro(){if(mi!==null){var r=ni(Mu),s=Rn.transition,a=Ne;try{if(Rn.transition=null,Ne=16>r?16:r,mi===null)var h=!1;else{if(r=mi,mi=null,Mu=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,w=g.child;if(le.flags&16){var R=g.deletions;if(R!==null){for(var P=0;P<R.length;P++){var z=R[P];for(le=z;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Ha(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var Q=X.sibling,ie=X.return;if(Ag(X),X===z){le=null;break}if(Q!==null){Q.return=ie,le=Q;break}le=ie}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var st=he.sibling;he.sibling=null,he=st}while(he!==null)}}le=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ha(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var D=r.current;for(le=D;le!==null;){w=le;var j=w.child;if(w.subtreeFlags&2064&&j!==null)j.return=w,le=j;else e:for(w=D;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:Du(9,R)}}catch(de){nt(R,R.return,de)}if(R===w){le=null;break e}var ee=R.sibling;if(ee!==null){ee.return=R.return,le=ee;break e}le=R.return}}if(Ve=f,ci(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Yi,r)}catch{}h=!0}return h}finally{Ne=a,Rn.transition=s}}return!1}function Bg(r,s,a){s=Eo(a,s),s=og(r,s,1),r=di(r,s,1),s=Gt(),r!==null&&(ei(r,1,s),tn(r,s))}function nt(r,s,a){if(r.tag===3)Bg(r,r,a);else for(;s!==null;){if(s.tag===3){Bg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(pi===null||!pi.has(h))){r=Eo(a,r),r=ag(s,r,1),s=di(s,r,1),r=Gt(),s!==null&&(ei(s,1,r),tn(s,r));break}}s=s.return}}function $E(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>qe()-Rd?ds(r,0):Sd|=a),tn(r,s)}function $g(r,s){s===0&&(r.mode&1?(s=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):s=1);var a=Gt();r=Dr(r,s),r!==null&&(ei(r,s,a),tn(r,a))}function qE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),$g(r,a)}function HE(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),$g(r,a)}var qg;qg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Zt=!1,DE(r,s,a);Zt=!!(r.flags&131072)}else Zt=!1,Ye&&s.flags&1048576&&Im(s,mu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Nu(r,s),r=s.pendingProps;var f=fo(s,bt.current);vo(s,a),f=nd(null,s,h,r,f,a);var g=rd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(h)?(g=!0,du(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qh(s),f.updater=Pu,s.stateNode=f,f._reactInternals=s,ud(s,h,r,a),s=fd(null,s,h,!0,g,a)):(s.tag=0,Ye&&g&&Uh(s),Kt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Nu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=KE(h),r=Bn(h,r),f){case 0:s=dd(null,s,h,r,a);break e;case 1:s=gg(null,s,h,r,a);break e;case 11:s=hg(null,s,h,r,a);break e;case 14:s=dg(null,s,h,Bn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),dd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),gg(r,s,h,f,a);case 3:e:{if(yg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Dm(r,s),Eu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Eo(Error(t(423)),s),s=_g(r,s,h,a,f);break e}else if(h!==f){f=Eo(Error(t(424)),s),s=_g(r,s,h,a,f);break e}else for(fn=ai(s.stateNode.containerInfo.firstChild),dn=s,Ye=!0,zn=null,a=Nm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(go(),h===f){s=Lr(r,s,a);break e}Kt(r,s,h,a)}s=s.child}return s;case 5:return Vm(s),r===null&&Bh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Oh(h,f)?w=null:g!==null&&Oh(h,g)&&(s.flags|=32),mg(r,s),Kt(r,s,w,a),s.child;case 6:return r===null&&Bh(s),null;case 13:return vg(r,s,a);case 4:return Yh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=yo(s,null,h,a):Kt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),hg(r,s,h,f,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,He(_u,h._currentValue),h._currentValue=w,g!==null)if(jn(g.value,w)){if(g.children===f.children&&!Xt.current){s=Lr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var P=R.firstContext;P!==null;){if(P.context===h){if(g.tag===1){P=Or(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?P.next=P:(P.next=X.next,X.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Kh(g.return,a,s),R.lanes|=a;break}P=P.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,R=w.alternate,R!==null&&(R.lanes|=a),Kh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Kt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,vo(s,a),f=In(f),h=h(f),s.flags|=1,Kt(r,s,h,a),s.child;case 14:return h=s.type,f=Bn(h,s.pendingProps),f=Bn(h.type,f),dg(r,s,h,f,a);case 15:return fg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),Nu(r,s),s.tag=1,Jt(h)?(r=!0,du(s)):r=!1,vo(s,a),ig(s,h,f),ud(s,h,f,a),fd(null,s,h,!0,r,a);case 19:return Eg(r,s,a);case 22:return pg(r,s,a)}throw Error(t(156,s.tag))};function Hg(r,s){return Hs(r,s)}function WE(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,h){return new WE(r,s,a,h)}function Od(r){return r=r.prototype,!(!r||!r.isReactComponent)}function KE(r){if(typeof r=="function")return Od(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Lt)return 14}return 2}function _i(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function zu(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")Od(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case N:return ps(a.children,f,g,s);case S:w=8,f|=8;break;case A:return r=An(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case C:return r=An(13,a,s,f),r.elementType=C,r.lanes=g,r;case rt:return r=An(19,a,s,f),r.elementType=rt,r.lanes=g,r;case ze:return Bu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:w=10;break e;case O:w=9;break e;case M:w=11;break e;case Lt:w=14;break e;case Vt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ps(r,s,a,h){return r=An(7,r,h,s),r.lanes=a,r}function Bu(r,s,a,h){return r=An(22,r,h,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function Ld(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Vd(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function GE(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bd(r,s,a,h,f,g,w,R,P){return r=new GE(r,s,a,R,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=An(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(g),r}function QE(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Wg(r){if(!r)return ui;r=r._reactInternals;e:{if(On(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return wm(r,a,s)}return s}function Kg(r,s,a,h,f,g,w,R,P){return r=bd(a,h,!0,r,f,g,w,R,P),r.context=Wg(null),a=r.current,h=Gt(),f=gi(a),g=Or(h,f),g.callback=s??null,di(a,g,f),r.current.lanes=f,ei(r,f,h),tn(r,h),r}function $u(r,s,a,h){var f=s.current,g=Gt(),w=gi(f);return a=Wg(a),s.context===null?s.context=a:s.pendingContext=a,s=Or(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=di(f,s,w),r!==null&&(Hn(r,f,w,g),wu(r,f,w)),w}function qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Md(r,s){Gg(r,s),(r=r.alternate)&&Gg(r,s)}function YE(){return null}var Qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Fd(r){this._internalRoot=r}Hu.prototype.render=Fd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));$u(r,s,null,null)},Hu.prototype.unmount=Fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;hs(function(){$u(null,r,null,null)}),s[Pr]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<nr.length&&s!==0&&s<nr[a].priority;a++);nr.splice(a,0,r),a===0&&Gl(r)}};function Ud(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function XE(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=qu(w);g.call(z)}}var w=Kg(s,h,r,0,null,!1,!1,"",Yg);return r._reactRootContainer=w,r[Pr]=w.current,Da(r.nodeType===8?r.parentNode:r),hs(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var z=qu(P);R.call(z)}}var P=bd(r,0,!1,null,null,!1,!1,"",Yg);return r._reactRootContainer=P,r[Pr]=P.current,Da(r.nodeType===8?r.parentNode:r),hs(function(){$u(s,P,a,h)}),P}function Ku(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var P=qu(w);R.call(P)}}$u(s,w,r,f)}else w=XE(a,s,r,f,h);return qu(w)}$l=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Jr(s.pendingLanes);a!==0&&(ti(s,a|1),tn(s,qe()),!(Ve&6)&&(So=qe()+500,ci()))}break;case 13:hs(function(){var h=Dr(r,1);if(h!==null){var f=Gt();Hn(h,r,1,f)}}),Md(r,1)}},Gs=function(r){if(r.tag===13){var s=Dr(r,134217728);if(s!==null){var a=Gt();Hn(s,r,134217728,a)}Md(r,134217728)}},ql=function(r){if(r.tag===13){var s=gi(r),a=Dr(r,s);if(a!==null){var h=Gt();Hn(a,r,s,h)}Md(r,s)}},Hl=function(){return Ne},Wl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Us=function(r,s,a){switch(s){case"input":if(ra(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=cu(h);if(!f)throw Error(t(90));Os(h),ra(h,f)}}}break;case"textarea":Ms(r,a);break;case"select":s=a.value,s!=null&&wr(r,!!a.multiple,s,!1)}},Hi=Nd,fa=hs;var JE={usingClientEntryPoint:!1,Events:[Va,co,cu,er,da,Nd]},Qa={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZE={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ga(r),r===null?null:r.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||YE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Yi=Gu.inject(ZE),ln=Gu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(s))throw Error(t(200));return QE(r,s,null,a)},nn.createRoot=function(r,s){if(!Ud(r))throw Error(t(299));var a=!1,h="",f=Qg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=bd(r,1,!1,null,null,a,!1,h,f),r[Pr]=s.current,Da(r.nodeType===8?r.parentNode:r),new Fd(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ga(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return hs(r)},nn.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Ud(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=Qg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Kg(s,null,r,1,a??null,f,!1,g,w),r[Pr]=s.current,Da(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Hu(s)},nn.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){Ku(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},nn.unstable_batchedUpdates=Nd,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ku(r,s,a,!1,h)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var iy;function aT(){if(iy)return Bd.exports;iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bd.exports=oT(),Bd.exports}var sy;function lT(){if(sy)return Qu;sy=1;var n=aT();return Qu.createRoot=n.createRoot,Qu.hydrateRoot=n.hydrateRoot,Qu}var uT=lT(),oy={};/**
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
 */const W_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},cT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},K_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[v],t[T],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(W_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new hT;const I=l<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dT=function(n){const e=W_(n);return K_.encodeByteArray(e,!0)},gc=function(n){return dT(n).replace(/\./g,"")},G_=function(n){try{return K_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pT=()=>fT().__FIREBASE_DEFAULTS__,mT=()=>{if(typeof process>"u"||typeof oy>"u")return;const n=oy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&G_(n[1]);return e&&JSON.parse(e)},Fc=()=>{try{return pT()||mT()||gT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Q_=n=>{var e,t;return(t=(e=Fc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Y_=n=>{const e=Q_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},X_=()=>{var n;return(n=Fc())===null||n===void 0?void 0:n.config},J_=n=>{var e;return(e=Fc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Z_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gc(JSON.stringify(t)),gc(JSON.stringify(c)),""].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _T(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function vT(){var n;const e=(n=Fc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ev(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ET(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TT(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function IT(){return!vT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tv(){try{return typeof indexedDB=="object"}catch{return!1}}function nv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const RT="FirebaseError";class Nn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=RT,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?AT(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Nn(o,d,i)}}function AT(n,e){return n.replace(CT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const CT=/\{\$([^}]+)}/g;function PT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(ay(l)&&ay(c)){if(!Vo(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ay(n){return n!==null&&typeof n=="object"}/**
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
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function el(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kT(n,e){const t=new NT(n,e);return t.subscribe.bind(t)}class NT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Hd),o.error===void 0&&(o.error=Hd),o.complete===void 0&&(o.complete=Hd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hd(){}/**
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
 */const DT=1e3,OT=2,LT=4*60*60*1e3,VT=.5;function ly(n,e=DT,t=OT){const i=e*Math.pow(t,n),o=Math.round(VT*i*(Math.random()-.5)*2);return Math.min(LT,i+o)}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class bT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new yT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FT(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:MT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MT(n){return n===ms?void 0:n}function FT(n){return n.instantiationMode==="EAGER"}/**
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
 */class UT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const jT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},zT=Pe.INFO,BT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},$T=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=BT[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=zT,this._logHandler=$T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const qT=(n,e)=>e.some(t=>n instanceof t);let uy,cy;function HT(){return uy||(uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WT(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,cf=new WeakMap,iv=new WeakMap,Wd=new WeakMap,jf=new WeakMap;function KT(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ai(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&rv.set(t,n)}).catch(()=>{}),jf.set(e,n),e}function GT(n){if(cf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});cf.set(n,e)}let hf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QT(n){hf=n(hf)}function YT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Kd(this),e,...t);return iv.set(i,e.sort?e.sort():[e]),Ai(i)}:WT().includes(n)?function(...e){return n.apply(Kd(this),e),Ai(rv.get(this))}:function(...e){return Ai(n.apply(Kd(this),e))}}function XT(n){return typeof n=="function"?YT(n):(n instanceof IDBTransaction&&GT(n),qT(n,HT())?new Proxy(n,hf):n)}function Ai(n){if(n instanceof IDBRequest)return KT(n);if(Wd.has(n))return Wd.get(n);const e=XT(n);return e!==n&&(Wd.set(n,e),jf.set(e,n)),e}const Kd=n=>jf.get(n);function sv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Ai(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ai(c.result),p.oldVersion,p.newVersion,Ai(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const JT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],Gd=new Map;function hy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ZT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||JT.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Gd.set(e,l),l}QT(n=>({...n,get:(e,t,i)=>hy(e,t)||n.get(e,t,i),has:(e,t)=>!!hy(e,t)||n.has(e,t)}));/**
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
 */class eI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function tI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const df="@firebase/app",dy="0.10.17";/**
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
 */const $r=new Uc("@firebase/app"),nI="@firebase/app-compat",rI="@firebase/analytics-compat",iI="@firebase/analytics",sI="@firebase/app-check-compat",oI="@firebase/app-check",aI="@firebase/auth",lI="@firebase/auth-compat",uI="@firebase/database",cI="@firebase/data-connect",hI="@firebase/database-compat",dI="@firebase/functions",fI="@firebase/functions-compat",pI="@firebase/installations",mI="@firebase/installations-compat",gI="@firebase/messaging",yI="@firebase/messaging-compat",_I="@firebase/performance",vI="@firebase/performance-compat",wI="@firebase/remote-config",EI="@firebase/remote-config-compat",TI="@firebase/storage",II="@firebase/storage-compat",SI="@firebase/firestore",RI="@firebase/vertexai",AI="@firebase/firestore-compat",CI="firebase",PI="11.1.0";/**
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
 */const ff="[DEFAULT]",kI={[df]:"fire-core",[nI]:"fire-core-compat",[iI]:"fire-analytics",[rI]:"fire-analytics-compat",[oI]:"fire-app-check",[sI]:"fire-app-check-compat",[aI]:"fire-auth",[lI]:"fire-auth-compat",[uI]:"fire-rtdb",[cI]:"fire-data-connect",[hI]:"fire-rtdb-compat",[dI]:"fire-fn",[fI]:"fire-fn-compat",[pI]:"fire-iid",[mI]:"fire-iid-compat",[gI]:"fire-fcm",[yI]:"fire-fcm-compat",[_I]:"fire-perf",[vI]:"fire-perf-compat",[wI]:"fire-rc",[EI]:"fire-rc-compat",[TI]:"fire-gcs",[II]:"fire-gcs-compat",[SI]:"fire-fst",[AI]:"fire-fst-compat",[RI]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
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
 */const yc=new Map,NI=new Map,pf=new Map;function fy(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(pf.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,n);for(const t of yc.values())fy(t,n);for(const t of NI.values())fy(t,n);return!0}function Vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n.settings!==void 0}/**
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
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new Ps("app","Firebase",xI);/**
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
 */class DI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=PI;function ov(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ff,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=X_()),!t)throw Ci.create("no-options");const l=yc.get(o);if(l){if(Vo(t,l.options)&&Vo(i,l.config))return l;throw Ci.create("duplicate-app",{appName:o})}const c=new UT(o);for(const p of pf.values())c.addComponent(p);const d=new DI(t,i,c);return yc.set(o,d),d}function jc(n=ff){const e=yc.get(n);if(!e&&n===ff&&X_())return ov();if(!e)throw Ci.create("no-app",{appName:n});return e}function on(n,e,t){var i;let o=(i=kI[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(d.join(" "));return}Qn(new Pn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const OI="firebase-heartbeat-database",LI=1,dl="firebase-heartbeat-store";let Qd=null;function av(){return Qd||(Qd=sv(OI,LI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ci.create("idb-open",{originalErrorMessage:n.message})})),Qd}async function VI(n){try{const t=(await av()).transaction(dl),i=await t.objectStore(dl).get(lv(n));return await t.done,i}catch(e){if(e instanceof Nn)$r.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function py(n,e){try{const i=(await av()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,lv(n)),await i.done}catch(t){if(t instanceof Nn)$r.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(i.message)}}}function lv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bI=1024,MI=30*24*60*60*1e3;class FI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=my();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=MI}),this._storage.overwrite(this._heartbeatsCache))}catch(i){$r.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=my(),{heartbeatsToSend:i,unsentEntries:o}=UI(this._heartbeatsCache.heartbeats),l=gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $r.warn(t),""}}}function my(){return new Date().toISOString().substring(0,10)}function UI(n,e=bI){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),gy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),gy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tv()?nv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await VI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return py(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return py(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function gy(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zI(n){Qn(new Pn("platform-logger",e=>new eI(e),"PRIVATE")),Qn(new Pn("heartbeat",e=>new FI(e),"PRIVATE")),on(df,dy,n),on(df,dy,"esm2017"),on("fire-js","")}zI("");var BI="firebase",$I="11.1.0";/**
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
 */on(BI,$I,"app");const uv="@firebase/installations",zf="0.6.11";/**
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
 */const cv=1e4,hv=`w:${zf}`,dv="FIS_v2",qI="https://firebaseinstallations.googleapis.com/v1",HI=60*60*1e3,WI="installations",KI="Installations";/**
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
 */const GI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Ps(WI,KI,GI);function fv(n){return n instanceof Nn&&n.code.includes("request-failed")}/**
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
 */function pv({projectId:n}){return`${qI}/projects/${n}/installations`}function mv(n){return{token:n.token,requestStatus:2,expiresIn:YI(n.expiresIn),creationTime:Date.now()}}async function gv(n,e){const i=(await e.json()).error;return Es.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function yv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function QI(n,{refreshToken:e}){const t=yv(n);return t.append("Authorization",XI(e)),t}async function _v(n){const e=await n();return e.status>=500&&e.status<600?n():e}function YI(n){return Number(n.replace("s","000"))}function XI(n){return`${dv} ${n}`}/**
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
 */async function JI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=pv(n),o=yv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:dv,appId:n.appId,sdkVersion:hv},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await _v(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:mv(y.authToken)}}else throw await gv("Create Installation",p)}/**
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
 */function vv(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ZI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eS=/^[cdef][\w-]{21}$/,mf="";function tS(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nS(n);return eS.test(t)?t:mf}catch{return mf}}function nS(n){return ZI(n).substr(0,22)}/**
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
 */function zc(n){return`${n.appName}!${n.appId}`}/**
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
 */const wv=new Map;function Ev(n,e){const t=zc(n);Tv(t,e),rS(t,e)}function Tv(n,e){const t=wv.get(n);if(t)for(const i of t)i(e)}function rS(n,e){const t=iS();t&&t.postMessage({key:n,fid:e}),sS()}let gs=null;function iS(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=n=>{Tv(n.data.key,n.data.fid)}),gs}function sS(){wv.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const oS="firebase-installations-database",aS=1,Ts="firebase-installations-store";let Yd=null;function Bf(){return Yd||(Yd=sv(oS,aS,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ts)}}})),Yd}async function _c(n,e){const t=zc(n),o=(await Bf()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Ev(n,e.fid),e}async function Iv(n){const e=zc(n),i=(await Bf()).transaction(Ts,"readwrite");await i.objectStore(Ts).delete(e),await i.done}async function Bc(n,e){const t=zc(n),o=(await Bf()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&Ev(n,d.fid),d}/**
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
 */async function $f(n){let e;const t=await Bc(n.appConfig,i=>{const o=lS(i),l=uS(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===mf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lS(n){const e=n||{fid:tS(),registrationStatus:0};return Sv(e)}function uS(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Es.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cS(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hS(n)}:{installationEntry:e}}async function cS(n,e){try{const t=await JI(n,e);return _c(n.appConfig,t)}catch(t){throw fv(t)&&t.customData.serverCode===409?await Iv(n.appConfig):await _c(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function hS(n){let e=await yy(n.appConfig);for(;e.registrationStatus===1;)await vv(100),e=await yy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await $f(n);return i||t}return e}function yy(n){return Bc(n,e=>{if(!e)throw Es.create("installation-not-found");return Sv(e)})}function Sv(n){return dS(n)?{fid:n.fid,registrationStatus:0}:n}function dS(n){return n.registrationStatus===1&&n.registrationTime+cv<Date.now()}/**
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
 */async function fS({appConfig:n,heartbeatServiceProvider:e},t){const i=pS(n,t),o=QI(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:hv,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await _v(()=>fetch(i,d));if(p.ok){const y=await p.json();return mv(y)}else throw await gv("Generate Auth Token",p)}function pS(n,{fid:e}){return`${pv(n)}/${e}/authTokens:generate`}/**
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
 */async function qf(n,e=!1){let t;const i=await Bc(n.appConfig,l=>{if(!Rv(l))throw Es.create("not-registered");const c=l.authToken;if(!e&&yS(c))return l;if(c.requestStatus===1)return t=mS(n,e),l;{if(!navigator.onLine)throw Es.create("app-offline");const d=vS(l);return t=gS(n,d),d}});return t?await t:i.authToken}async function mS(n,e){let t=await _y(n.appConfig);for(;t.authToken.requestStatus===1;)await vv(100),t=await _y(n.appConfig);const i=t.authToken;return i.requestStatus===0?qf(n,e):i}function _y(n){return Bc(n,e=>{if(!Rv(e))throw Es.create("not-registered");const t=e.authToken;return wS(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gS(n,e){try{const t=await fS(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await _c(n.appConfig,i),t}catch(t){if(fv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Iv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _c(n.appConfig,i)}throw t}}function Rv(n){return n!==void 0&&n.registrationStatus===2}function yS(n){return n.requestStatus===2&&!_S(n)}function _S(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+HI}function vS(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wS(n){return n.requestStatus===1&&n.requestTime+cv<Date.now()}/**
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
 */async function ES(n){const e=n,{installationEntry:t,registrationPromise:i}=await $f(e);return i?i.catch(console.error):qf(e).catch(console.error),t.fid}/**
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
 */async function TS(n,e=!1){const t=n;return await IS(t),(await qf(t,e)).token}async function IS(n){const{registrationPromise:e}=await $f(n);e&&await e}/**
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
 */function SS(n){if(!n||!n.options)throw Xd("App Configuration");if(!n.name)throw Xd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xd(n){return Es.create("missing-app-config-values",{valueName:n})}/**
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
 */const Av="installations",RS="installations-internal",AS=n=>{const e=n.getProvider("app").getImmediate(),t=SS(e),i=Vi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},CS=n=>{const e=n.getProvider("app").getImmediate(),t=Vi(e,Av).getImmediate();return{getId:()=>ES(t),getToken:o=>TS(t,o)}};function PS(){Qn(new Pn(Av,AS,"PUBLIC")),Qn(new Pn(RS,CS,"PRIVATE"))}PS();on(uv,zf);on(uv,zf,"esm2017");/**
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
 */const vc="analytics",kS="firebase_id",NS="origin",xS=60*1e3,DS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hf="https://www.googletagmanager.com/gtag/js";/**
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
 */const an=new Uc("@firebase/analytics");/**
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
 */const OS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new Ps("analytics","Analytics",OS);/**
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
 */function LS(n){if(!n.startsWith(Hf)){const e=gn.create("invalid-gtag-resource",{gtagURL:n});return an.warn(e.message),""}return n}function Cv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function VS(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function bS(n,e){const t=VS("firebase-js-sdk-policy",{createScriptURL:LS}),i=document.createElement("script"),o=`${Hf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function MS(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function FS(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await Cv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){an.error(d)}n("config",o,l)}async function US(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await Cv(t);for(const p of c){const y=d.find(T=>T.measurementId===p),v=y&&e[y.appId];if(v)l.push(v);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){an.error(l)}}function jS(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[d,p]=c;await US(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await FS(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,y]=c;n("get",d,p,y)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){an.error(d)}}return o}function zS(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=jS(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function BS(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Hf)&&t.src.includes(n))return t;return null}/**
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
 */const $S=30,qS=1e3;class HS{constructor(e={},t=qS){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Pv=new HS;function WS(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function KS(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:WS(i)},l=DS.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function GS(n,e=Pv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw gn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw gn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new XS;return setTimeout(async()=>{d.abort()},xS),kv({appId:i,apiKey:o,measurementId:l},c,d,e)}async function kv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Pv){var l;const{appId:c,measurementId:d}=n;try{await QS(i,e)}catch(p){if(d)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await KS(n);return o.deleteThrottleMetadata(c),p}catch(p){const y=p;if(!YS(y)){if(o.deleteThrottleMetadata(c),d)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw p}const v=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?ly(t,o.intervalMillis,$S):ly(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(c,T),an.debug(`Calling attemptFetch again in ${v} millis`),kv(n,T,i,o)}}function QS(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YS(n){if(!(n instanceof Nn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class XS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JS(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
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
 */async function ZS(){if(tv())try{await nv()}catch(n){return an.warn(gn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return an.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eR(n,e,t,i,o,l,c){var d;const p=GS(n);p.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>an.error(x)),e.push(p);const y=ZS().then(x=>{if(x)return i.getId()}),[v,T]=await Promise.all([p,y]);BS(l)||bS(l,v.measurementId),o("js",new Date);const I=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return I[NS]="firebase",I.update=!0,T!=null&&(I[kS]=T),o("config",v.measurementId,I),v.measurementId}/**
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
 */class tR{constructor(e){this.app=e}_delete(){return delete ol[this.app.options.appId],Promise.resolve()}}let ol={},vy=[];const wy={};let Jd="dataLayer",nR="gtag",Ey,Nv,Ty=!1;function rR(){const n=[];if(ev()&&n.push("This is a browser extension environment."),ST()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=gn.create("invalid-analytics-context",{errorInfo:e});an.warn(t.message)}}function iR(n,e,t){rR();const i=n.options.appId;if(!i)throw gn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(ol[i]!=null)throw gn.create("already-exists",{id:i});if(!Ty){MS(Jd);const{wrappedGtag:l,gtagCore:c}=zS(ol,vy,wy,Jd,nR);Nv=l,Ey=c,Ty=!0}return ol[i]=eR(n,vy,wy,e,Ey,Jd,t),new tR(n)}function sR(n=jc()){n=et(n);const e=Vi(n,vc);return e.isInitialized()?e.getImmediate():oR(n)}function oR(n,e={}){const t=Vi(n,vc);if(t.isInitialized()){const o=t.getImmediate();if(Vo(e,t.getOptions()))return o;throw gn.create("already-initialized")}return t.initialize({options:e})}function aR(n,e,t,i){n=et(n),JS(Nv,ol[n.app.options.appId],e,t,i).catch(o=>an.error(o))}const Iy="@firebase/analytics",Sy="0.10.10";function lR(){Qn(new Pn(vc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return iR(i,o,t)},"PUBLIC")),Qn(new Pn("analytics-internal",n,"PRIVATE")),on(Iy,Sy),on(Iy,Sy,"esm2017");function n(e){try{const t=e.getProvider(vc).getImmediate();return{logEvent:(i,o,l)=>aR(t,i,o,l)}}catch(t){throw gn.create("interop-component-reg-failed",{reason:t})}}}lR();function Wf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uR=xv,Dv=new Ps("auth","Firebase",xv());/**
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
 */const wc=new Uc("@firebase/auth");function cR(n,...e){wc.logLevel<=Pe.WARN&&wc.warn(`Auth (${ks}): ${n}`,...e)}function ic(n,...e){wc.logLevel<=Pe.ERROR&&wc.error(`Auth (${ks}): ${n}`,...e)}/**
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
 */function kn(n,...e){throw Gf(n,...e)}function Gn(n,...e){return Gf(n,...e)}function Kf(n,e,t){const i=Object.assign(Object.assign({},uR()),{[e]:t});return new Ps("auth","Firebase",i).create(e,{appName:n.name})}function jr(n){return Kf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hR(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&kn(n,"argument-error"),Kf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Dv.create(n,...e)}function ve(n,e,...t){if(!n)throw Gf(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function qr(n,e){n||Mr(e)}/**
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
 */function gf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dR(){return Ry()==="http:"||Ry()==="https:"}function Ry(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dR()||ev()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,qr(t>e,"Short delay should be less than long delay!"),this.isMobile=_T()||ET()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qf(n,e){qr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ov{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gR=new Tl(3e4,6e4);function bi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kr(n,e,t,i,o={}){return Lv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=El(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return wT()||(y.referrerPolicy="no-referrer"),Ov.fetch()(Vv(n,n.config.apiHost,t,d),y)})}async function Lv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mR),e);try{const o=new _R(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Yu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Yu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Yu(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Kf(n,v,y);kn(n,v)}}catch(o){if(o instanceof Nn)throw o;kn(n,"network-request-failed",{message:String(o)})}}async function Il(n,e,t,i,o={}){const l=await Kr(n,e,t,i,o);return"mfaPendingCredential"in l&&kn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Vv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Qf(n.config,o):`${n.config.apiScheme}://${o}`}function yR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _R{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Gn(this.auth,"network-request-failed")),gR.get())})}}function Yu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Gn(n,e,i);return o.customData._tokenResponse=t,o}function Ay(n){return n!==void 0&&n.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wR(n,e){return Kr(n,"GET","/v2/recaptchaConfig",bi(n,e))}/**
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
 */async function ER(n,e){return Kr(n,"POST","/v1/accounts:delete",e)}async function bv(n,e){return Kr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function al(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TR(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=Yf(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:al(Zd(o.auth_time)),issuedAtTime:al(Zd(o.iat)),expirationTime:al(Zd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Zd(n){return Number(n)*1e3}function Yf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=G_(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Cy(n){const e=Yf(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Nn&&IR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function IR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class SR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ec(n){var e;const t=n.auth,i=await n.getIdToken(),o=await bo(n,bv(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Mv(l.providerUserInfo):[],d=AR(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new yf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function RR(n){const e=et(n);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Mv(n){return n.map(e=>{var{providerId:t}=e,i=Wf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function CR(n,e){const t=await Lv(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=Vv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PR(n,e){return Kr(n,"POST","/v2/accounts:revokeToken",bi(n,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Cy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await CR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new xo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
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
 */function wi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new yf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await bo(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TR(this,e)}reload(){return RR(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await bo(this,ER(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Y=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ne,emailVerified:se,isAnonymous:Ie,providerData:_e,stsTokenManager:N}=t;ve(ne&&N,e,"internal-error");const S=xo.fromJSON(this.name,N);ve(typeof ne=="string",e,"internal-error"),wi(T,e.name),wi(I,e.name),ve(typeof se=="boolean",e,"internal-error"),ve(typeof Ie=="boolean",e,"internal-error"),wi(x,e.name),wi(L,e.name),wi($,e.name),wi(V,e.name),wi(H,e.name),wi(Y,e.name);const A=new Fr({uid:ne,auth:e,email:I,emailVerified:se,displayName:T,isAnonymous:Ie,photoURL:L,phoneNumber:x,tenantId:$,stsTokenManager:S,createdAt:H,lastLoginAt:Y});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(k=>Object.assign({},k))),V&&(A._redirectEventId=V),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new xo;o.updateFromServerResponse(t);const l=new Fr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ec(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Mv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new xo;d.updateFromIdToken(i);const p=new Fr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new yf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Py=new Map;function Ur(n){qr(n instanceof Function,"Expected a class definition");let e=Py.get(n);return e?(qr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Py.set(n,e),e)}/**
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
 */class Fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fv.type="NONE";const ky=Fv;/**
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
 */function sc(n,e,t){return`firebase:${n}:${e}:${t}`}class Do{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=sc(this.userKey,o.apiKey,l),this.fullPersistenceKey=sc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Do(Ur(ky),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Ur(ky);const c=sc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const T=Fr._fromJSON(e,v);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Do(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Do(l,e,i))}}/**
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
 */function Ny(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qv(e))return"Blackberry";if(Hv(e))return"Webos";if(jv(e))return"Safari";if((e.includes("chrome/")||zv(e))&&!e.includes("edge/"))return"Chrome";if($v(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Uv(n=qt()){return/firefox\//i.test(n)}function jv(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zv(n=qt()){return/crios\//i.test(n)}function Bv(n=qt()){return/iemobile/i.test(n)}function $v(n=qt()){return/android/i.test(n)}function qv(n=qt()){return/blackberry/i.test(n)}function Hv(n=qt()){return/webos/i.test(n)}function Xf(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kR(n=qt()){var e;return Xf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NR(){return TT()&&document.documentMode===10}function Wv(n=qt()){return Xf(n)||$v(n)||Hv(n)||qv(n)||/windows phone/i.test(n)||Bv(n)}/**
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
 */function Kv(n,e=[]){let t;switch(n){case"Browser":t=Ny(qt());break;case"Worker":t=`${Ny(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ks}/${i}`}/**
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
 */class xR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function DR(n,e={}){return Kr(n,"GET","/v2/passwordPolicy",bi(n,e))}/**
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
 */const OR=6;class LR{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:OR,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class VR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new xR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ur(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bv(this,{idToken:e}),i=await Fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Wn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(jr(this));const t=e?et(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DR(this),t=new LR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await PR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ur(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Ur(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mi(n){return et(n)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=kT(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bR(n){$c=n}function Gv(n){return $c.loadJS(n)}function MR(){return $c.recaptchaEnterpriseScript}function FR(){return $c.gapiScript}function UR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jR{constructor(){this.enterprise=new zR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const BR="recaptcha-enterprise",Qv="NO_RECAPTCHA";class $R{constructor(e){this.type=BR,this.auth=Mi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{wR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new vR(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;Ay(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Qv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jR().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&Ay(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=MR();p.length!==0&&(p+=d),Gv(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function Dy(n,e,t,i=!1,o=!1){const l=new $R(n);let c;if(o)c=Qv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function _f(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Dy(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Dy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
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
 */function qR(n,e){const t=Vi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Vo(l,e??{}))return o;kn(o,"already-initialized")}return t.initialize({options:e})}function HR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ur);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function WR(n,e,t){const i=Mi(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Yv(e),{host:c,port:d}=KR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),GR()}function Yv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function KR(n){const e=Yv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Oy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Oy(c)}}}function Oy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function GR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function QR(n,e){return Kr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YR(n,e){return Il(n,"POST","/v1/accounts:signInWithPassword",bi(n,e))}/**
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
 */async function XR(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}async function JR(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",bi(n,e))}/**
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
 */class fl extends Jf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new fl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new fl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,t,"signInWithPassword",YR);case"emailLink":return XR(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,i,"signUpPassword",QR);case"emailLink":return JR(e,{idToken:t,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oo(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",bi(n,e))}/**
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
 */const ZR="http://localhost";class Is extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Wf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Is(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:ZR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
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
 */function e1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t1(n){const e=Za(el(n)).link,t=e?Za(el(e)).deep_link_id:null,i=Za(el(n)).deep_link_id;return(i?Za(el(i)).link:null)||i||t||e||n}class Zf{constructor(e){var t,i,o,l,c,d;const p=Za(el(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=e1((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=t1(e);try{return new Zf(t)}catch{return null}}}/**
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
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,t){return fl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Zf.parseLink(t);return ve(i,"argument-error"),fl._fromEmailAndCode(e,i.code,i.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ep{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends ep{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends Sl{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class br extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return br.credential(t,i)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Ti extends Sl{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends Sl{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function n1(n,e){return Il(n,"POST","/v1/accounts:signUp",bi(n,e))}/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Fr._fromIdTokenResponse(e,i,o),c=Ly(i);return new Ss({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ly(i);return new Ss({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ly(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tc extends Nn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function Xv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,i):l})}async function r1(n,e,t=!1){const i=await bo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ss._forOperation(n,"link",i)}/**
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
 */async function i1(n,e,t=!1){const{auth:i}=n;if(Wn(i.app))return Promise.reject(jr(i));const o="reauthenticate";try{const l=await bo(n,Xv(i,o,e,n),t);ve(l.idToken,i,"internal-error");const c=Yf(l.idToken);ve(c,i,"internal-error");const{sub:d}=c;return ve(n.uid===d,i,"user-mismatch"),Ss._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&kn(i,"user-mismatch"),l}}/**
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
 */async function Jv(n,e,t=!1){if(Wn(n.app))return Promise.reject(jr(n));const i="signIn",o=await Xv(n,i,e),l=await Ss._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function s1(n,e){return Jv(Mi(n),e)}/**
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
 */async function Zv(n){const e=Mi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o1(n,e,t){if(Wn(n.app))return Promise.reject(jr(n));const i=Mi(n),c=await _f(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Zv(n),p}),d=await Ss._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function a1(n,e,t){return Wn(n.app)?Promise.reject(jr(n)):s1(et(n),Ho.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Zv(n),i})}/**
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
 */async function l1(n,e){return Kr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function u1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=et(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await bo(i,l1(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function c1(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function h1(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function d1(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function f1(n){return et(n).signOut()}const Ic="__sak";/**
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
 */class e0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const p1=1e3,m1=10;class t0 extends e0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);NR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,m1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},p1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t0.type="LOCAL";const g1=t0;/**
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
 */class n0 extends e0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}n0.type="SESSION";const r0=n0;/**
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
 */function y1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new qc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await y1(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function tp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=tp("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function cr(){return window}function v1(n){cr().location.href=n}/**
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
 */function i0(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function w1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function T1(){return i0()?self:null}/**
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
 */const s0="firebaseLocalStorageDb",I1=1,Sc="firebaseLocalStorage",o0="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hc(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function S1(){const n=indexedDB.deleteDatabase(s0);return new Rl(n).toPromise()}function vf(){const n=indexedDB.open(s0,I1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sc,{keyPath:o0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sc)?e(i):(i.close(),await S1(),e(await vf()))})})}async function Vy(n,e,t){const i=Hc(n,!0).put({[o0]:e,value:t});return new Rl(i).toPromise()}async function R1(n,e){const t=Hc(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function by(n,e){const t=Hc(n,!0).delete(e);return new Rl(t).toPromise()}const A1=800,C1=3;class a0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>C1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(T1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await w1(),!this.activeServiceWorker)return;this.sender=new _1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Vy(e,Ic,"1"),await by(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>R1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>by(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Hc(o,!1).getAll();return new Rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a0.type="LOCAL";const P1=a0;new Tl(3e4,6e4);/**
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
 */function l0(n,e){return e?Ur(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class np extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k1(n){return Jv(n.auth,new np(n),n.bypassAuthState)}function N1(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),i1(t,new np(n),n.bypassAuthState)}async function x1(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),r1(t,new np(n),n.bypassAuthState)}/**
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
 */class u0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return x1;case"reauthViaPopup":case"reauthViaRedirect":return N1;default:kn(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D1=new Tl(2e3,1e4);async function O1(n,e,t){if(Wn(n.app))return Promise.reject(Gn(n,"operation-not-supported-in-this-environment"));const i=Mi(n);hR(n,e,ep);const o=l0(i,t);return new ys(i,"signInViaPopup",e,o).executeNotNull()}class ys extends u0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D1.get())};e()}}ys.currentPopupAction=null;/**
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
 */const L1="pendingRedirect",oc=new Map;class V1 extends u0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await b1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b1(n,e){const t=U1(e),i=F1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function M1(n,e){oc.set(n._key(),e)}function F1(n){return Ur(n._redirectPersistence)}function U1(n){return sc(L1,n.config.apiKey,n.name)}async function j1(n,e,t=!1){if(Wn(n.app))return Promise.reject(jr(n));const i=Mi(n),o=l0(i,e),c=await new V1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const z1=10*60*1e3;class B1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!c0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(My(e))}saveEventToCache(e){this.cachedEventUids.add(My(e)),this.lastProcessedEventTime=Date.now()}}function My(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function c0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c0(n);default:return!1}}/**
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
 */async function q1(n,e={}){return Kr(n,"GET","/v1/projects",e)}/**
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
 */const H1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W1=/^https?/;async function K1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await q1(n);for(const t of e)try{if(G1(t))return}catch{}kn(n,"unauthorized-domain")}function G1(n){const e=gf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!W1.test(t))return!1;if(H1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Q1=new Tl(3e4,6e4);function Fy(){const n=cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Y1(n){return new Promise((e,t)=>{var i,o,l;function c(){Fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fy(),t(Gn(n,"network-request-failed"))},timeout:Q1.get()})}if(!((o=(i=cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)c();else{const d=UR("iframefcb");return cr()[d]=()=>{gapi.load?c():t(Gn(n,"network-request-failed"))},Gv(`${FR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw ac=null,e})}let ac=null;function X1(n){return ac=ac||Y1(n),ac}/**
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
 */const J1=new Tl(5e3,15e3),Z1="__/auth/iframe",eA="emulator/auth/iframe",tA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rA(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qf(e,eA):`https://${n.config.authDomain}/${Z1}`,i={apiKey:e.apiKey,appName:n.name,v:ks},o=nA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function iA(n){const e=await X1(n),t=cr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:rA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=Gn(n,"network-request-failed"),d=cr().setTimeout(()=>{l(c)},J1.get());function p(){cr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const sA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oA=500,aA=600,lA="_blank",uA="http://localhost";class Uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cA(n,e,t,i=oA,o=aA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},sA),{width:i.toString(),height:o.toString(),top:l,left:c}),y=qt().toLowerCase();t&&(d=zv(y)?lA:t),Uv(y)&&(e=e||uA,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[x,L])=>`${I}${x}=${L},`,"");if(kR(y)&&d!=="_self")return hA(e||"",d),new Uy(null);const T=window.open(e||"",d,v);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new Uy(T)}function hA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const dA="__/auth/handler",fA="emulator/auth/handler",pA=encodeURIComponent("fac");async function jy(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ks,eventId:o};if(e instanceof ep){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",PT(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Sl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${pA}=${encodeURIComponent(p)}`:"";return`${mA(n)}?${El(d).slice(1)}${y}`}function mA({config:n}){return n.emulator?Qf(n,fA):`https://${n.authDomain}/${dA}`}/**
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
 */const ef="webStorageSupport";class gA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r0,this._completeRedirectFn=j1,this._overrideRedirectResult=M1}async _openPopup(e,t,i,o){var l;qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await jy(e,t,i,gf(),o);return cA(e,c,tp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await jy(e,t,i,gf(),o);return v1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await iA(e),i=new B1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ef,{type:ef},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[ef];c!==void 0&&t(!!c),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=K1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wv()||jv()||Xf()}}const yA=gA;var zy="@firebase/auth",By="1.8.1";/**
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
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wA(n){Qn(new Pn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ve(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(n)},y=new VR(i,o,l,p);return HR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qn(new Pn("auth-internal",e=>{const t=Mi(e.getProvider("auth").getImmediate());return(i=>new _A(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(zy,By,vA(n)),on(zy,By,"esm2017")}/**
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
 */const EA=5*60,TA=J_("authIdTokenMaxAge")||EA;let $y=null;const IA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>TA)return;const o=t==null?void 0:t.token;$y!==o&&($y=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function SA(n=jc()){const e=Vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qR(n,{popupRedirectResolver:yA,persistence:[P1,g1,r0]}),i=J_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=IA(l.toString());h1(t,c,()=>c(t.currentUser)),c1(t,d=>c(d))}}const o=Q_("auth");return o&&WR(t,`http://${o}`),t}function RA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}bR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Gn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",RA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wA("Browser");/**
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
 */const h0="firebasestorage.googleapis.com",AA="storageBucket",CA=2*60*1e3,PA=10*60*1e3;/**
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
 */class gr extends Nn{constructor(e,t,i=0){super(tf(e),`Firebase Storage: ${t} (${tf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pr||(pr={}));function tf(n){return"storage/"+n}function kA(){const n="An unknown error occurred, please check the error payload for server response.";return new gr(pr.UNKNOWN,n)}function NA(){return new gr(pr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xA(){return new gr(pr.CANCELED,"User canceled the upload/download.")}function DA(n){return new gr(pr.INVALID_URL,"Invalid URL '"+n+"'.")}function OA(n){return new gr(pr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qy(n){return new gr(pr.INVALID_ARGUMENT,n)}function d0(){return new gr(pr.APP_DELETED,"The Firebase app was deleted.")}function LA(n){return new gr(pr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Kn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Kn.makeFromUrl(e,t)}catch{return new Kn(e,"")}if(i.path==="")return i;throw OA(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(se){se.path_=decodeURIComponent(se.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",x=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),L={bucket:1,path:3},$=t===h0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",H=new RegExp(`^https?://${$}/${o}/${V}`,"i"),ne=[{regex:d,indices:p,postModify:l},{regex:x,indices:L,postModify:y},{regex:H,indices:{bucket:1,path:2},postModify:y}];for(let se=0;se<ne.length;se++){const Ie=ne[se],_e=Ie.regex.exec(e);if(_e){const N=_e[Ie.indices.bucket];let S=_e[Ie.indices.path];S||(S=""),i=new Kn(N,S),Ie.postModify(i);break}}if(i==null)throw DA(e);return i}}class VA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bA(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...V){y||(y=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,n(x,p())},V)}function I(){l&&clearTimeout(l)}function x(V,...H){if(y){I();return}if(V){I(),v.call(null,V,...H);return}if(p()||c){I(),v.call(null,V,...H);return}i<64&&(i*=2);let ne;d===1?(d=2,ne=0):ne=(i+Math.random())*1e3,T(ne)}let L=!1;function $(V){L||(L=!0,I(),!y&&(o!==null?(V||(d=2),clearTimeout(o),T(0)):V||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,$(!0)},t),$}function MA(n){n(!1)}/**
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
 */function FA(n){return n!==void 0}function Hy(n,e,t,i){if(i<e)throw qy(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qy(`Invalid value for '${n}'. Expected ${t} or less.`)}function UA(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Rc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Rc||(Rc={}));/**
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
 */function jA(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class zA{constructor(e,t,i,o,l,c,d,p,y,v,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,L)=>{this.resolve_=x,this.reject_=L,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Xu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Rc.NO_ERROR,p=l.getStatus();if(!d||jA(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Rc.ABORT;i(!1,new Xu(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Xu(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());FA(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=kA();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?d0():xA();c(p)}else{const p=NA();c(p)}};this.canceled_?t(!1,new Xu(!1,null,!0)):this.backoffId_=bA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function BA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $A(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function WA(n,e,t,i,o,l,c=!0){const d=UA(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return qA(y,e),BA(y,t),$A(y,l),HA(y,i),new zA(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function KA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function GA(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Ac{constructor(e,t){this._service=e,t instanceof Kn?this._location=t:this._location=Kn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ac(e,t)}get root(){const e=new Kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GA(this._location.path)}get storage(){return this._service}get parent(){const e=KA(this._location.path);if(e===null)return null;const t=new Kn(this._location.bucket,e);return new Ac(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LA(e)}}function Wy(n,e){const t=e==null?void 0:e[AA];return t==null?null:Kn.makeFromBucketSpec(t,n)}function QA(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Z_(o,n.app.options.projectId))}class YA{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=h0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CA,this._maxUploadRetryTime=PA,this._requests=new Set,o!=null?this._bucket=Kn.makeFromBucketSpec(o,this._host):this._bucket=Wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,e):this._bucket=Wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ac(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new VA(d0());{const c=WA(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Ky="@firebase/storage",Gy="0.13.4";/**
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
 */const f0="storage";function XA(n=jc(),e){n=et(n);const i=Vi(n,f0).getImmediate({identifier:e}),o=Y_("storage");return o&&JA(i,...o),i}function JA(n,e,t,i={}){QA(n,e,t,i)}function ZA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new YA(t,i,o,e,ks)}function eC(){Qn(new Pn(f0,ZA,"PUBLIC").setMultipleInstances(!0)),on(Ky,Gy,""),on(Ky,Gy,"esm2017")}eC();var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,p0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,O,M){for(var C=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)C[rt-2]=arguments[rt];return S.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,A){A||(A=0);var k=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)k[O]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],O=N.g[2];var M=N.g[3],C=S+(M^A&(O^M))+k[0]+3614090360&4294967295;S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[4]+4118548399&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[8]+1770035416&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[12]+1804603682&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(A^O))+k[1]+4129170786&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[5]+3593408605&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[9]+568446438&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[13]+2850285829&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(A^O^M)+k[5]+4294588738&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[1]+2763975236&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[13]+681279174&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[9]+3654602809&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(O^(A|~M))+k[0]+4096336452&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[12]+1700485571&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[8]+1873313359&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[4]+4149444226&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,k=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=A;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<S;)if(k[O++]=N.charCodeAt(M++),O==this.blockSize){o(this,k),O=0;break}}else for(;M<S;)if(k[O++]=N[M++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var k=0;32>k;k+=8)N[A++]=this.g[S]>>>k&255;return N};function l(N,S){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function c(N,S){this.h=S;for(var A=[],k=!0,O=N.length-1;0<=O;O--){var M=N[O]|0;k&&M==S||(A[O]=M,k=!1)}this.g=A}var d={};function p(N){return-128<=N&&128>N?l(N,function(S){return new c([S|0],0>S?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return V(y(-N));for(var S=[],A=1,k=0;N>=A;k++)S[k]=N/A|0,A*=4294967296;return new c(S,0)}function v(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return V(v(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),k=T,O=0;O<N.length;O+=8){var M=Math.min(8,N.length-O),C=parseInt(N.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),k=k.j(M).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if($(this))return-V(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(L(this))return"0";if($(this))return"-"+V(this).toString(N);for(var S=y(Math.pow(N,6)),A=this,k="";;){var O=se(A,S).g;A=H(A,O.j(S));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=O,L(A))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function L(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=H(this,N),$(N)?-1:L(N)?0:1};function V(N){for(var S=N.g.length,A=[],k=0;k<S;k++)A[k]=~N.g[k];return new c(A,~N.h).add(I)}n.abs=function(){return $(this)?V(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0,O=0;O<=S;O++){var M=k+(this.i(O)&65535)+(N.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);k=C>>>16,M&=65535,C&=65535,A[O]=C<<16|M}return new c(A,A[A.length-1]&-2147483648?-1:0)};function H(N,S){return N.add(V(S))}n.j=function(N){if(L(this)||L(N))return T;if($(this))return $(N)?V(this).j(V(N)):V(V(this).j(N));if($(N))return V(this.j(V(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],k=0;k<2*S;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<N.g.length;O++){var M=this.i(k)>>>16,C=this.i(k)&65535,rt=N.i(O)>>>16,Lt=N.i(O)&65535;A[2*k+2*O]+=C*Lt,Y(A,2*k+2*O),A[2*k+2*O+1]+=M*Lt,Y(A,2*k+2*O+1),A[2*k+2*O+1]+=C*rt,Y(A,2*k+2*O+1),A[2*k+2*O+2]+=M*rt,Y(A,2*k+2*O+2)}for(k=0;k<S;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=S;k<2*S;k++)A[k]=0;return new c(A,0)};function Y(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ne(N,S){this.g=N,this.h=S}function se(N,S){if(L(S))throw Error("division by zero");if(L(N))return new ne(T,T);if($(N))return S=se(V(N),S),new ne(V(S.g),V(S.h));if($(S))return S=se(N,V(S)),new ne(V(S.g),S.h);if(30<N.g.length){if($(N)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,k=S;0>=k.l(N);)A=Ie(A),k=Ie(k);var O=_e(A,1),M=_e(k,1);for(k=_e(k,2),A=_e(A,2);!L(k);){var C=M.add(k);0>=C.l(N)&&(O=O.add(A),M=C),k=_e(k,1),A=_e(A,1)}return S=H(N,O.j(S)),new ne(O,S)}for(O=T;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(A),C=M.j(S);$(C)||0<C.l(N);)A-=k,M=y(A),C=M.j(S);L(M)&&(M=I),O=O.add(M),N=H(N,C)}return new ne(O,N)}n.A=function(N){return se(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)&N.i(k);return new c(A,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)|N.i(k);return new c(A,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)^N.i(k);return new c(A,this.h^N.h)};function Ie(N){for(var S=N.g.length+1,A=[],k=0;k<S;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new c(A,N.h)}function _e(N,S){var A=S>>5;S%=32;for(var k=N.g.length-A,O=[],M=0;M<k;M++)O[M]=0<S?N.i(M+A)>>>S|N.i(M+A+1)<<32-S:N.i(M+A);return new c(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,p0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,vs=c}).apply(typeof Qy<"u"?Qy:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,tl,g0,lc,wf,y0,_0,v0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var F=u[E];if(!(F in _))break e;_=_[F]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,F={next:function(){if(!E&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return E=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,E),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,F,q){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[F].apply(E,te)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function V(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const F=u.length||0,q=E.length||0;u.length=F+q;for(let te=0;te<q;te++)u[F+te]=E[te]}else u.push(E)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function se(u){return se[" "](u),u}se[" "]=function(){};var Ie=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function _e(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,E;for(let F=1;F<arguments.length;F++){E=arguments[F];for(_ in E)u[_]=E[_];for(let q=0;q<A.length;q++)_=A[q],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class rt{constructor(){this.h=this.g=null}add(m,_){const E=Lt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Lt=new H(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,me=new rt,oe=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(b)}};var b=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Lt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{se(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}L(Ae,fe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,E,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=F,this.key=++Fe,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,m,_,E,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var te=Qr(u,m,E,F);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,q,!!E,F),m.fa=_,u.push(m)),m};function Os(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],F=Array.prototype.indexOf.call(E,m,void 0),q;(q=0<=F)&&Array.prototype.splice.call(E,F,1),q&&(vt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Qr(u,m,_,E){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==E)return F}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),Ls={};function na(u,m,_,E,F){if(Array.isArray(m)){for(var q=0;q<m.length;q++)na(u,m[q],_,E,F);return null}return _=sa(_),u&&u[Me]?u.K(m,_,y(E)?!!E.capture:!!E,F):ra(u,m,_,!1,E,F)}function ra(u,m,_,E,F,q){if(!m)throw Error("Invalid event type");var te=y(F)?!!F.capture:!!F,je=bs(u);if(je||(u[zi]=je=new _r(u)),_=je.add(m,_,E,te,q),_.proxy)return _;if(E=Ll(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Re||(F=te),F===void 0&&(F=!1),u.addEventListener(m.toString(),E,F);else if(u.attachEvent)u.attachEvent(wr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ll(){function u(_){return m.call(u.src,u.listener,_)}const m=ia;return u}function Vs(u,m,_,E,F){if(Array.isArray(m))for(var q=0;q<m.length;q++)Vs(u,m[q],_,E,F);else E=y(E)?!!E.capture:!!E,_=sa(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Qr(q,_,E,F),-1<_&&(vt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Qr(m,_,E,F)),(_=-1<u?m[u]:null)&&vr(_))}function vr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Os(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(wr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=bs(m))?(Os(_,u),_.h==0&&(_.src=null,m[zi]=null)):vt(u)}}}function wr(u){return u in Ls?Ls[u]:Ls[u]="on"+u}function ia(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&vr(u),u=_.call(E,m)}return u}function bs(u){return u=u[zi],u instanceof _r?u:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(u){return typeof u=="function"?u:(u[Ms]||(u[Ms]=function(m){return u.handleEvent(m)}),u[Ms])}function dt(){K.call(this),this.i=new _r(this),this.M=this,this.F=null}L(dt,K),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,m,_,E){Vs(this,u,m,_,E)};function ft(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var F=m;m=new fe(E,u),k(m,F)}if(F=!0,_)for(var q=_.length-1;0<=q;q--){var te=m.g=_[q];F=Er(te,E,!0,m)&&F}if(te=m.g=u,F=Er(te,E,!0,m)&&F,F=Er(te,E,!1,m)&&F,_)for(q=0;q<_.length;q++)te=m.g=_[q],F=Er(te,E,!1,m)&&F}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)vt(_[E]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},dt.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Er(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,q=0;q<m.length;++q){var te=m[q];if(te&&!te.da&&te.capture==_){var je=te.listener,pt=te.ha||te.src;te.fa&&Os(u.i,te),F=je.call(pt,E)!==!1&&F}}return F&&!E.defaultPrevented}function oa(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Yr(u){u.g=oa(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Bi extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(u){K.call(this),this.h=u,this.g={}}L($i,K);var aa=[];function la(u){_e(u.g,function(m,_){this.g.hasOwnProperty(_)&&vr(m)},u),u.g={}}$i.prototype.N=function(){$i.aa.N.call(this),la(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=d.JSON.stringify,ca=d.JSON.parse,ha=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function qi(){}qi.prototype.h=null;function Fs(u){return u.h||(u.h=u.i())}function Us(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zn(){fe.call(this,"d")}L(Zn,fe);function js(){fe.call(this,"c")}L(js,fe);var er={},da=null;function Hi(){return da=da||new dt}er.La="serverreachability";function fa(u){fe.call(this,er.La,u)}L(fa,fe);function Tr(u){const m=Hi();ft(m,new fa(m))}er.STAT_EVENT="statevent";function pa(u,m){fe.call(this,er.STAT_EVENT,u),this.stat=m}L(pa,fe);function it(u){const m=Hi();ft(m,new pa(m,u))}er.Ma="timingevent";function zs(u,m){fe.call(this,er.Ma,u),this.size=m}L(zs,fe);function xn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Ki(u,m,_,E,F,q){u.info(function(){if(u.g)if(q)for(var te="",je=q.split("&"),pt=0;pt<je.length;pt++){var Oe=je[pt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var lt=wt.split("_");te=2<=lt.length&&lt[1]=="type"?te+(wt+"="+Oe+"&"):te+(wt+"=redacted&")}}else te=null;else te=q;return"XMLHTTP REQ ("+E+") [attempt "+F+"]: "+m+`
`+_+`
`+te})}function Bs(u,m,_,E,F,q,te){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+F+"]: "+m+`
`+_+`
`+q+" "+te})}function Dn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ph(u,_)+(E?" "+E:"")})}function ma(u,m){u.info(function(){return"TIMEOUT: "+m})}Wi.prototype.info=function(){};function ph(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var F=E[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var te=1;te<F.length;te++)F[te]=""}}}}return ua(_)}catch{return m}}var $s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Gi(){}L(Gi,qi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},On=new Gi;function Ln(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var ga={},qs={};function Hs(u,m,_){u.L=1,u.v=ti(un(m)),u.m=_,u.P=!0,ya(u,null)}function ya(u,m){u.F=Date.now(),qe(u),u.A=un(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),ri(_.i,"t",E),u.C=0,_=u.j.J,u.h=new bl,u.g=eu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Bi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(aa[0]=F.toString()),F=aa);for(var q=0;q<F.length;q++){var te=na(_,F[q],E||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Tr(),Ki(u.i,u.u,u.A,u.l,u.R,u.m)}Ln.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Ln.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Yt(this.g);var m=this.g.Ba();const wn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Ia(this.g)))){this.J||lt!=4||m==7||(m==8||0>=wn?Tr(3):Tr(2)),Qi(this);var _=this.g.Z();this.X=_;t:if(Ml(this)){var E=Ia(this.g);u="";var F=E.length,q=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Xr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(q&&m==F-1)});E.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Bs(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,pt=this.g;if((je=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(je)){var Oe=je;break t}}Oe=null}if(_=Oe)Dn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,_);else{this.o=!1,this.s=3,it(12),_n(this),Xr(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<te.length;)if(hn=mh(this,te),hn==qs){lt==4&&(this.s=4,it(14),_=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==ga){this.s=4,it(15),Dn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else Dn(this.i,this.l,hn,null),_a(this,hn);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||te.length!=0||this.h.h||(this.s=1,it(16),_=!1),this.o=this.o&&_,!_)Dn(this.i,this.l,te,"[Invalid Chunked Response]"),_n(this),Xr(this);else if(0<te.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Ra(wt),wt.M=!0,it(11))}}else Dn(this.i,this.l,te,null),_a(this,te);lt==4&&_n(this),this.o&&!this.J&&(lt==4?no(this.j,this):(this.o=!1,qe(this)))}else Xs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),_n(this),Xr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function mh(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?qs:(_=Number(m.substring(_,E)),isNaN(_)?ga:(E+=1,E+_>m.length?qs:(m=m.slice(E,E+_),u.C=E+_,m)))}Ln.prototype.cancel=function(){this.J=!0,_n(this)};function qe(u){u.S=Date.now()+u.I,Fl(u,u.I)}function Fl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=xn(I(u.ba,u),m)}function Qi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Ln.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ma(this.i,this.A),this.L!=2&&(Tr(),it(17)),_n(this),this.s=2,Xr(this)):Fl(this,this.S-u)};function Xr(u){u.j.G==0||u.J||no(u.j,u)}function _n(u){Qi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,la(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function _a(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var F=E;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)to(_),Un(_);else break e;eo(_),it(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=xn(I(_.Za,_),6e3));if(1>=jl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Cr(_,11)}else if((u.K||_.g==u)&&to(_),!Y(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Oe=F[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const wt=Oe[3];wt!=null&&(_.la=wt,_.j.info("VER="+_.la));const lt=Oe[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const wn=Oe[5];wn!=null&&typeof wn=="number"&&0<wn&&(E=1.5*wn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const hn=u.g;if(hn){const ns=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var q=E.h;q.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(va(q,q.h),q.h=null))}if(E.D){const io=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(E.ya=io,Be(E.I,E.D,io))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var te=u;if(E.qa=Zl(E,E.J?E.ia:null,E.W),te.K){zl(E.h,te);var je=te,pt=E.L;pt&&(je.I=pt),je.B&&(Qi(je),qe(je)),E.g=te}else ts(E);0<_.i.length&&ir(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Cr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Cr(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Tr(4)}catch{}}var Ul=class{constructor(u,m){this.g=u,this.map=m}};function Yi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function jl(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function va(u,m){u.g?u.g.add(m):u.h=m}function zl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Yi.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function Ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Ks(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function Jr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ks(u),E=Ws(u),F=E.length,q=0;q<F;q++)m.call(void 0,E[q],_&&_[q],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),F=null;if(0<=E){var q=u[_].substring(0,E);F=u[_].substring(E+1)}else q=u[_];m(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,Zr(this,u.s),this.l=u.l;var m=u.i,_=new tr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ei(this,_),this.m=u.m}else u&&(m=String(u).match(Xi))?(this.h=!1,Ji(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Zr(this,m[4]),this.l=Ne(m[5]||"",!0),ei(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Ir.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ni(m,Gs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ni(m,Gs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ni(_,_.charAt(0)=="/"?Hl:ql,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ni(_,wa)),u.join("")};function un(u){return new Ir(u)}function Ji(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Zr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ei(u,m,_){m instanceof tr?(u.i=m,nr(u.i,u.h)):(_||(m=ni(m,Wl)),u.i=new tr(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function ti(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ni(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,$l),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function $l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gs=/[#\/\?@]/g,ql=/[#\?:]/g,Hl=/[#\?]/g,Wl=/[#\?@]/g,wa=/#/g;function tr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&gh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=tr.prototype,n.add=function(u,m){Rt(this),this.i=null,u=vn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Vn(u,m){Rt(u),m=vn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function bn(u,m){return Rt(u),m=vn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,E){_.forEach(function(F){u.call(m,F,E,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const F=u[E];for(let q=0;q<F.length;q++)_.push(m[E])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")bn(this,u)&&(m=m.concat(this.g.get(vn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=vn(this,u),bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ri(u,m,_){Vn(u,m),0<_.length&&(u.i=null,u.g.set(vn(u,m),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const q=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var F=q;te[E]!==""&&(F+="="+encodeURIComponent(String(te[E]))),u.push(F)}}return this.i=u.join("&")};function vn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function nr(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,E){var F=E.toLowerCase();E!=F&&(Vn(this,E),ri(this,F,_))},u)),u.j=m}function yh(u,m){const _=new Wi;if(d.Image){const E=new Image;E.onload=x(Qt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=x(Qt,_,"TestLoadImage: error",!1,m,E),E.onabort=x(Qt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=x(Qt,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Kl(u,m){const _=new Wi,E=new AbortController,F=setTimeout(()=>{E.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(q=>{clearTimeout(F),q.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,E,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),E(_)}catch{}}function _h(){this.g=new ha}function Gl(u,m,_){const E=_||"";try{Jr(u,function(F,q){let te=F;y(F)&&(te=ua(F)),m.push(E+q+"="+encodeURIComponent(te))})}catch(F){throw m.push(E+"type="+encodeURIComponent("_badmap")),F}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}L(Sr,qi),Sr.prototype.g=function(){return new Zi(this.l,this.j)},Sr.prototype.i=function(u){return function(){return u}}({});function Zi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Zi,dt),n=Zi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Fn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Mn(this):Fn(this),this.readyState==3&&Ql(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Mn(this))},n.Qa=function(u){this.g&&(this.response=u,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Rr(u){let m="";return _e(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function ii(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Rr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Qe(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Qe,dt);var vh=/^https?$/i,Ea=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?Fs(this.o):Fs(On),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){es(this,q);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var F in E)_.set(F,E[F]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())_.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ea,m,void 0))||E||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of _)this.g.setRequestHeader(q,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){es(this,q)}};function es(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Qs(u),cn(u)}function Qs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ta(this):this.bb())},n.bb=function(){Ta(this)};function Ta(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)oa(u.Ea,0,u);else if(ft(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=te===0){var F=String(u.D).match(Xi)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),E=!vh.test(F?F.toLowerCase():"")}_=E}if(_)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var q=2<Yt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Qs(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){Ys(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{_.onreadystatechange=E}catch{}}}function Ys(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ca(m)}};function Ia(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(Y(u[E]))continue;var _=O(u[E]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[F]||[];m[F]=q,q.push(_)}N(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Sa(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,u),this.cb=rr("retryDelaySeedMs",1e4,u),this.Wa=rr("forwardChannelMaxRetries",2,u),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new _h,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){it(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=Zl(this,null,this.W),ir(this)};function At(u){if(Js(u),u.G==3){var m=u.U++,_=un(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),Ar(u,_),m=new Ln(u,u.j,m),m.L=2,m.v=ti(un(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=eu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Jl(u)}function Un(u){u.g&&(Ra(u),u.g.cancel(),u.g=null)}function Js(u){Un(u),u.u&&(d.clearTimeout(u.u),u.u=null),to(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function ir(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||oe(),re||(ze(),re=!0),me.add(m,u),u.B=0}}function wh(u,m){return jl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=xn(I(u.Ga,u,m),Xl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Ln(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=si(this,F,m),_=un(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Ar(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Rr(q)))+"&"+m:this.m&&ii(_,this.m,q)),va(this.h,F),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),F.T=!0,Hs(F,_,null)):Hs(F,_,m),this.G=2}}else this.G==3&&(u?Zs(this,u):this.i.length==0||ln(this.h)||Zs(this))};function Zs(u,m){var _;m?_=m.l:_=u.U++;const E=un(u.I);Be(E,"SID",u.K),Be(E,"RID",_),Be(E,"AID",u.T),Ar(u,E),u.m&&u.o&&ii(E,u.m,u.o),_=new Ln(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=si(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),va(u.h,_),Hs(_,E,m)}function Ar(u,m){u.H&&_e(u.H,function(_,E){Be(m,E,_)}),u.l&&Jr({},function(_,E){Be(m,E,_)})}function si(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const te=["count="+_];q==-1?0<_?(q=F[0].g,te.push("ofs="+q)):q=0:te.push("ofs="+q);let je=!0;for(let pt=0;pt<_;pt++){let Oe=F[pt].g;const wt=F[pt].map;if(Oe-=q,0>Oe)q=Math.max(0,F[pt].g-100),je=!1;else try{Gl(wt,te,"req"+Oe+"_")}catch{E&&E(wt)}}if(je){E=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function ts(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||oe(),re||(ze(),re=!0),me.add(m,u),u.v=0}}function eo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=xn(I(u.Fa,u),Xl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=xn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Un(this),Yl(this))};function Ra(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Yl(u){u.g=new Ln(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),Ar(u,m),u.m&&u.o&&ii(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ti(un(m)),_.m=null,_.P=!0,ya(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Un(this),eo(this),it(19))};function to(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function no(u,m){var _=null;if(u.g==m){to(u),Ra(u),u.g=null;var E=2}else if(Ht(u.h,m))_=m.D,zl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;E=Hi(),ft(E,new zs(E,_)),ir(u)}else ts(u);else if(F=m.s,F==3||F==0&&0<m.X||!(E==1&&wh(u,m)||E==2&&eo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function Xl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Cr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const F=!E;E=new Ir(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ji(E,"https"),ti(E),F?yh(E.toString(),_):Kl(E.toString(),_)}else it(2);u.G=0,u.l&&u.l.sa(m),Jl(u),Js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const m=Bl(u.h);(m.length!=0||u.i.length!=0)&&(V(u.ka,m),V(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Zl(u,m,_){var E=_ instanceof Ir?un(_):new Ir(_);if(E.g!="")m&&(E.g=m+"."+E.g),Zr(E,E.s);else{var F=d.location;E=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var q=new Ir(null);E&&Ji(q,E),m&&(q.g=m),F&&Zr(q,F),_&&(q.l=_),E=q}return _=u.D,m=u.ya,_&&m&&Be(E,_,m),Be(E,"VER",u.la),Ar(u,E),E}function eu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new Sr({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Aa(){}n=Aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){dt.call(this),this.g=new Sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Y(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new sr(this)}L(Wt,dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){At(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ua(u),u=_);m.i.push(new Ul(m.Ya++,u)),m.G==3&&ir(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Wt.aa.N.call(this)};function tu(u){Zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(tu,Zn);function nu(){js.call(this),this.status=1}L(nu,js);function sr(u){this.g=u}L(sr,Aa),sr.prototype.ua=function(){ft(this.g,"a")},sr.prototype.ta=function(u){ft(this.g,new tu(u))},sr.prototype.sa=function(u){ft(this.g,new nu)},sr.prototype.ra=function(){ft(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,v0=function(){return new ro},_0=function(){return Hi()},y0=er,wf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,lc=$s,Vl.COMPLETE="complete",g0=Vl,Us.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,tl=Us,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,m0=Qe}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const Yy="@firebase/firestore";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Wo="11.0.2";/**
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
 */const Rs=new Uc("@firebase/firestore");function Ao(){return Rs.logLevel}function ae(n,...e){if(Rs.logLevel<=Pe.DEBUG){const t=e.map(rp);Rs.debug(`Firestore (${Wo}): ${n}`,...t)}}function Hr(n,...e){if(Rs.logLevel<=Pe.ERROR){const t=e.map(rp);Rs.error(`Firestore (${Wo}): ${n}`,...t)}}function Mo(n,...e){if(Rs.logLevel<=Pe.WARN){const t=e.map(rp);Rs.warn(`Firestore (${Wo}): ${n}`,...t)}}function rp(n){if(typeof n=="string")return n;try{/**
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
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+n;throw Hr(e),new Error(e)}function Ue(n,e){n||Ee()}function Se(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class w0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class nC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new zr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new zr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new w0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new zt(e)}}class iC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new iC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new oC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=lC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function Fo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new at(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new at(0,0))}static max(){return new Te(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pl{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends pl{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends pl{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}function cC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new at(t+1,0):new at(t,i));return new ki(o,pe.empty(),e)}function hC(n){return new ki(n.readTime,n.key,-1)}class ki{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ki(Te.min(),pe.empty(),-1)}static max(){return new ki(Te.max(),pe.empty(),-1)}}function dC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
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
 */const fC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ko(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==fC)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,i)=>{t(e)})}static reject(e){return new W((t,i)=>{i(e)})}static waitFor(e){return new W((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next(o=>o?W.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new W((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new W((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function mC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wc.oe=-1;function Kc(n){return n==null}function Cc(n){return n===0&&1/n==-1/0}function gC(n){return typeof n=="number"&&Number.isInteger(n)&&!Cc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function yC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xy(e)),e=_C(n.get(t),e);return Xy(e)}function _C(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Xy(n){return n+""}/**
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
 */function Jy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function T0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new mn([])}unionWith(e){let t=new _t(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class I0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new I0("Invalid base64 string: "+l):l}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const vC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=vC.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function ip(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Gc(n){const e=n.mapValue.fields.__previous_value__;return ip(e)?Gc(e):e}function ml(n){const e=Ni(n.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class wC{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class gl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ec={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ip(n)?4:TC(n)?9007199254740991:EC(n)?10:11:Ee()}function mr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ni(o.timestampValue),d=Ni(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return xi(o.bytesValue).isEqual(xi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ot(o.doubleValue),d=ot(l.doubleValue);return c===d?Cc(c)===Cc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Fo(n.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Jy(c)!==Jy(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!mr(c[p],d[p])))return!1;return!0}(n,e);default:return Ee()}}function yl(n,e){return(n.values||[]).find(t=>mr(t,e))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=ot(l.integerValue||l.doubleValue),p=ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return e_(n.timestampValue,e.timestampValue);case 4:return e_(ml(n),ml(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,c){const d=xi(l),p=xi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=xe(d[y],p[y]);if(v!==0)return v}return xe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=xe(ot(l.latitude),ot(c.latitude));return d!==0?d:xe(ot(l.longitude),ot(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return t_(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const T=l.fields||{},I=c.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,L=(p=I.value)===null||p===void 0?void 0:p.arrayValue,$=xe(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((v=L==null?void 0:L.values)===null||v===void 0?void 0:v.length)||0);return $!==0?$:t_(x,L)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===ec.mapValue&&c===ec.mapValue)return 0;if(l===ec.mapValue)return 1;if(c===ec.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=xe(p[T],v[T]);if(I!==0)return I;const x=Uo(d[p[T]],y[v[T]]);if(x!==0)return x}return xe(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function e_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Ni(n),i=Ni(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function t_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Uo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function jo(n){return Ef(n)}function Ef(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Ef(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Ef(t.fields[c])}`;return o+"}"}(n.mapValue):Ee()}function uc(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+uc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Fi(i.fields,(l,c)=>{o+=l.length+uc(c)}),o}(n.mapValue);default:throw Ee()}}function n_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tf(n){return!!n&&"integerValue"in n}function sp(n){return!!n&&"arrayValue"in n}function r_(n){return!!n&&"nullValue"in n}function i_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function EC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ll(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ll(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ll(n.arrayValue.values[t]);return e}return Object.assign({},n)}function TC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ll(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Fi(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new sn(ll(this.value))}}function S0(n){const e=[];return Fi(n.fields,(t,i)=>{const o=new Dt([t]);if(cc(i)){const l=S0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new mn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,Te.min(),Te.min(),Te.min(),sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Te.min(),Te.min(),sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Te.min(),Te.min(),sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pc{constructor(e,t){this.position=e,this.inclusive=t}}function s_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=Uo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function o_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kc{constructor(e,t="asc"){this.field=e,this.dir=t}}function IC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class R0{}class ht extends R0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new RC(e,t,i):t==="array-contains"?new PC(e,i):t==="in"?new kC(e,i):t==="not-in"?new NC(e,i):t==="array-contains-any"?new xC(e,i):new ht(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new AC(e,i):new CC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends R0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Yn(e,t)}matches(e){return A0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function A0(n){return n.op==="and"}function C0(n){return SC(n)&&A0(n)}function SC(n){for(const e of n.filters)if(e instanceof Yn)return!1;return!0}function If(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+jo(n.value);if(C0(n))return n.filters.map(e=>If(e)).join(",");{const e=n.filters.map(t=>If(t)).join(",");return`${n.op}(${e})`}}function P0(n,e){return n instanceof ht?function(i,o){return o instanceof ht&&i.op===o.op&&i.field.isEqual(o.field)&&mr(i.value,o.value)}(n,e):n instanceof Yn?function(i,o){return o instanceof Yn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&P0(c,o.filters[d]),!0):!1}(n,e):void Ee()}function k0(n){return n instanceof ht?function(t){return`${t.field.canonicalString()} ${t.op} ${jo(t.value)}`}(n):n instanceof Yn?function(t){return t.op.toString()+" {"+t.getFilters().map(k0).join(" ,")+"}"}(n):"Filter"}class RC extends ht{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class AC extends ht{constructor(e,t){super(e,"in",t),this.keys=N0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CC extends ht{constructor(e,t){super(e,"not-in",t),this.keys=N0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function N0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class PC extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sp(t)&&yl(t.arrayValue,this.value)}}class kC extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class NC extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yl(this.value.arrayValue,t)}}class xC extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>yl(this.value.arrayValue,i))}}/**
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
 */class DC{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function a_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new DC(n,e,t,i,o,l,c)}function op(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>If(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Kc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>jo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>jo(i)).join(",")),e.ue=t}return e.ue}function ap(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!P0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!o_(n.startAt,e.startAt)&&o_(n.endAt,e.endAt)}function Sf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Al{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OC(n,e,t,i,o,l,c,d){return new Al(n,e,t,i,o,l,c,d)}function Qc(n){return new Al(n)}function l_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function x0(n){return n.collectionGroup!==null}function ul(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new _t(Dt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new kc(l,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new kc(Dt.keyField(),i))}return e.ce}function hr(n){const e=Se(n);return e.le||(e.le=LC(e,ul(n))),e.le}function LC(n,e){if(n.limitType==="F")return a_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new kc(o.field,l)});const t=n.endAt?new Pc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Pc(n.startAt.position,n.startAt.inclusive):null;return a_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Rf(n,e){const t=n.filters.concat([e]);return new Al(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Af(n,e,t){return new Al(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yc(n,e){return ap(hr(n),hr(e))&&n.limitType===e.limitType}function D0(n){return`${op(hr(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>k0(o)).join(", ")}]`),Kc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>jo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>jo(o)).join(",")),`Target(${i})`}(hr(n))}; limitType=${n.limitType})`}function Xc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of ul(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=s_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,ul(i),o)||i.endAt&&!function(c,d,p){const y=s_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,ul(i),o))}(n,e)}function VC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function O0(n){return(e,t)=>{let i=!1;for(const o of ul(n)){const l=bC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function bC(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Uo(p,y):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
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
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return T0(this.inner)}size(){return this.innerSize}}/**
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
 */const MC=new tt(pe.comparator);function Wr(){return MC}const L0=new tt(pe.comparator);function nl(...n){let e=L0;for(const t of n)e=e.insert(t.key,t);return e}function V0(n){let e=L0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function _s(){return cl()}function b0(){return cl()}function cl(){return new Ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const FC=new tt(pe.comparator),UC=new _t(pe.comparator);function ke(...n){let e=UC;for(const t of n)e=e.add(t);return e}const jC=new _t(xe);function zC(){return jC}/**
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
 */function lp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cc(e)?"-0":e}}function M0(n){return{integerValue:""+n}}function BC(n,e){return gC(e)?M0(e):lp(n,e)}/**
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
 */class Jc{constructor(){this._=void 0}}function $C(n,e,t){return n instanceof _l?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ip(l)&&(l=Gc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof zo?U0(n,e):n instanceof vl?j0(n,e):function(o,l){const c=F0(o,l),d=u_(c)+u_(o.Pe);return Tf(c)&&Tf(o.Pe)?M0(d):lp(o.serializer,d)}(n,e)}function qC(n,e,t){return n instanceof zo?U0(n,e):n instanceof vl?j0(n,e):t}function F0(n,e){return n instanceof Nc?function(i){return Tf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class _l extends Jc{}class zo extends Jc{constructor(e){super(),this.elements=e}}function U0(n,e){const t=z0(e);for(const i of n.elements)t.some(o=>mr(o,i))||t.push(i);return{arrayValue:{values:t}}}class vl extends Jc{constructor(e){super(),this.elements=e}}function j0(n,e){let t=z0(e);for(const i of n.elements)t=t.filter(o=>!mr(o,i));return{arrayValue:{values:t}}}class Nc extends Jc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function u_(n){return ot(n.integerValue||n.doubleValue)}function z0(n){return sp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class B0{constructor(e,t){this.field=e,this.transform=t}}function HC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof zo&&o instanceof zo||i instanceof vl&&o instanceof vl?Fo(i.elements,o.elements,mr):i instanceof Nc&&o instanceof Nc?mr(i.Pe,o.Pe):i instanceof _l&&o instanceof _l}(n.transform,e.transform)}class WC{constructor(e,t){this.version=e,this.transformResults=t}}class dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dr}static exists(e){return new dr(void 0,e)}static updateTime(e){return new dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zc{}function $0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new H0(n.key,dr.none()):new Cl(n.key,n.data,dr.none());{const t=n.data,i=sn.empty();let o=new _t(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Ui(n.key,i,new mn(o.toArray()),dr.none())}}function KC(n,e,t){n instanceof Cl?function(o,l,c){const d=o.value.clone(),p=h_(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ui?function(o,l,c){if(!hc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=h_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(q0(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function hl(n,e,t,i){return n instanceof Cl?function(l,c,d,p){if(!hc(l.precondition,c))return d;const y=l.value.clone(),v=d_(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ui?function(l,c,d,p){if(!hc(l.precondition,c))return d;const y=d_(l.fieldTransforms,p,c),v=c.data;return v.setAll(q0(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return hc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function GC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=F0(i.transform,o||null);l!=null&&(t===null&&(t=sn.empty()),t.set(i.field,l))}return t||null}function c_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Fo(i,o,(l,c)=>HC(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cl extends Zc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ui extends Zc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function q0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function h_(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,qC(c,d,t[o]))}return i}function d_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,$C(l,c,e))}return i}class H0 extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QC extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&KC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=hl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=hl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=b0();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=$0(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(t,i)=>c_(t,i))&&Fo(this.baseMutations,e.baseMutations,(t,i)=>c_(t,i))}}class up{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return FC}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new up(e,t,i,o)}}/**
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
 */class XC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,Le;function ZC(n){switch(n){default:return Ee();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function W0(n){if(n===void 0)return Hr("GRPC error has no .code"),G.UNKNOWN;switch(n){case ct.OK:return G.OK;case ct.CANCELLED:return G.CANCELLED;case ct.UNKNOWN:return G.UNKNOWN;case ct.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ct.INTERNAL:return G.INTERNAL;case ct.UNAVAILABLE:return G.UNAVAILABLE;case ct.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ct.NOT_FOUND:return G.NOT_FOUND;case ct.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ct.ABORTED:return G.ABORTED;case ct.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ct.DATA_LOSS:return G.DATA_LOSS;default:return Ee()}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eP(){return new TextEncoder}/**
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
 */const tP=new vs([4294967295,4294967295],0);function f_(n){const e=eP().encode(n),t=new p0;return t.update(e),new Uint8Array(t.digest())}function p_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new vs([t,i],0),new vs([o,l],0)]}class cp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new rl(`Invalid padding: ${t}`);if(i<0)throw new rl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new rl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=vs.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(vs.fromNumber(i)));return o.compare(tP)===1&&(o=new vs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=f_(e),[i,o]=p_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new cp(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=f_(e),[i,o]=p_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new eh(Te.min(),o,new tt(xe),Wr(),ke())}}class Pl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Pl(i,t,ke(),ke(),ke())}}/**
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
 */class dc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class K0{constructor(e,t){this.targetId=e,this.me=t}}class G0{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class m_{constructor(){this.fe=0,this.ge=g_(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new Pl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=g_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wr(),this.qe=tc(),this.Qe=tc(),this.Ke=new tt(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Sf(l))if(i===0){const c=new pe(l.path);this.We(t,c,Bt.newNoDocument(c,Te.min()))}else Ue(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=xi(i).toUint8Array()}catch(p){if(p instanceof I0)return Mo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new cp(c,o,l)}catch(p){return Mo(p instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Ye(c);if(d){if(l.current&&Sf(d.target)){const p=new pe(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Bt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new eh(e,t,this.Ke,this.ke,i);return this.ke=Wr(),this.qe=tc(),this.Qe=tc(),this.Ke=new tt(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new m_,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new _t(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _t(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new m_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tc(){return new tt(pe.comparator)}function g_(){return new tt(pe.comparator)}const rP={asc:"ASCENDING",desc:"DESCENDING"},iP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sP={and:"AND",or:"OR"};class oP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cf(n,e){return n.useProto3Json||Kc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Q0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aP(n,e){return xc(n,e.toTimestamp())}function fr(n){return Ue(!!n),Te.fromTimestamp(function(t){const i=Ni(t);return new at(i.seconds,i.nanos)}(n))}function hp(n,e){return Pf(n,e).canonicalString()}function Pf(n,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Y0(n){const e=Ge.fromString(n);return Ue(tw(e)),e}function kf(n,e){return hp(n.databaseId,e.path)}function nf(n,e){const t=Y0(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(J0(t))}function X0(n,e){return hp(n.databaseId,e)}function lP(n){const e=Y0(n);return e.length===4?Ge.emptyPath():J0(e)}function Nf(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function J0(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function y_(n,e,t){return{name:kf(n,e),fields:t.value.mapValue.fields}}function uP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(Ue(v===void 0||typeof v=="string"),Ot.fromBase64String(v||"")):(Ue(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Ot.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?G.UNKNOWN:W0(y.code);return new ue(v,y.message||"")}(c);t=new G0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=nf(n,i.document.name),l=fr(i.document.updateTime),c=i.document.createTime?fr(i.document.createTime):Te.min(),d=new sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new dc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=nf(n,i.document),l=i.readTime?fr(i.readTime):Te.min(),c=Bt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new dc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=nf(n,i.document),l=i.removedTargetIds||[];t=new dc([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new JC(o,l),d=i.targetId;t=new K0(d,c)}}return t}function cP(n,e){let t;if(e instanceof Cl)t={update:y_(n,e.key,e.value)};else if(e instanceof H0)t={delete:kf(n,e.key)};else if(e instanceof Ui)t={update:y_(n,e.key,e.data),updateMask:vP(e.fieldMask)};else{if(!(e instanceof QC))return Ee();t={verify:kf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof _l)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof zo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof vl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Nc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:aP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(n,e.precondition)),t}function hP(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?fr(o.updateTime):fr(l);return c.isEqual(Te.min())&&(c=fr(l)),new WC(c,o.transformResults||[])}(t,e))):[]}function dP(n,e){return{documents:[X0(n,e.path)]}}function fP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=X0(n,o);const l=function(y){if(y.length!==0)return ew(Yn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:Po(I.field),direction:gP(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Cf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function pP(n){let e=lP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const I=Z0(T);return I instanceof Yn&&C0(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(L){return new kc(ko(L.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,Kc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,x=T.values||[];return new Pc(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,x=T.values||[];return new Pc(x,I)}(t.endAt)),OC(e,o,c,l,d,"F",p,y)}function mP(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Z0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ko(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ko(t.unaryFilter.field);return ht.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return ht.create(ko(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yn.create(t.compositeFilter.filters.map(i=>Z0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function gP(n){return rP[n]}function yP(n){return iP[n]}function _P(n){return sP[n]}function Po(n){return{fieldPath:n.canonicalString()}}function ko(n){return Dt.fromServerFormat(n.fieldPath)}function ew(n){return n instanceof ht?function(t){if(t.op==="=="){if(i_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(r_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(i_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(r_(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:yP(t.op),value:t.value}}}(n):n instanceof Yn?function(t){const i=t.getFilters().map(o=>ew(o));return i.length===1?i[0]:{compositeFilter:{op:_P(t.op),filters:i}}}(n):Ee()}function vP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ri{constructor(e,t,i,o,l=Te.min(),c=Te.min(),d=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wP{constructor(e){this.ht=e}}function EP(n){const e=pP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
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
 */class TP{constructor(){this.ln=new IP}addToCollectionParentIndex(e,t){return this.ln.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(ki.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class IP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(Ge.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(Ge.comparator)).toArray()}}/**
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
 */const __={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Bo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Bo(0)}static Qn(){return new Bo(-1)}}/**
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
 */function v_([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class SP{constructor(e){this.Gn=e,this.buffer=new _t(v_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();v_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.Yn(3e5)})}}class AP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Wc.oe);const i=new SP(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(__)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),__):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Ao()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function CP(n,e){return new AP(n,e)}/**
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
 */class PP{constructor(){this.changes=new Ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class NP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&hl(i.mutation,o,mn.empty(),at.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=_s();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=nl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=_s();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Wr();const c=cl(),d=function(){return cl()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Ui)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),hl(v.mutation,y,v.mutation.getFieldMask(),at.now())):c.set(y.key,mn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new kP(v,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=cl();let o=new tt((c,d)=>c-d),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||mn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=b0();v.forEach(I=>{if(!l.has(I)){const x=$0(t.get(I),i.get(I));x!==null&&T.set(I,x),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):x0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(_s());let d=-1,p=l;return c.next(y=>W.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(v=>({batchId:d,changes:V0(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=nl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=nl();return this.indexManager.getCollectionParents(e,l).next(d=>W.forEach(d,p=>{const y=function(T,I){return new Al(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Bt.newInvalidDocument(v)))});let d=nl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&hl(v.mutation,y,mn.empty(),at.now()),Xc(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class xP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return W.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:EP(o.bundledQuery),readTime:fr(o.readTime)}}(t)),W.resolve()}}/**
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
 */class DP{constructor(){this.overlays=new tt(pe.comparator),this.Er=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=_s();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=_s(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=_s(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=_s(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return W.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new XC(t,i));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
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
 */class OP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class dp{constructor(){this.dr=new _t(St.Ar),this.Rr=new _t(St.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new St(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Ge([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),l.push(c.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ge([])),i=new St(t,e),o=new St(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new St(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
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
 */class LP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new _t(St.Ar)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new YC(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);l.push(d)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(xe);return t.forEach(o=>{const l=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],d=>{i=i.add(d.br)})}),W.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const c=new St(new pe(l),0);let d=new _t(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),W.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return W.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class VP{constructor(e){this.Nr=e,this.docs=function(){return new tt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Wr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Wr();const c=t.path,d=new pe(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||dC(hC(v),i)<=0||(o.has(v.key)||Xc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}Lr(e,t){return W.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new bP(this)}getSize(e){return W.resolve(this.size)}}class bP extends PP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),W.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class MP{constructor(e){this.persistence=e,this.Br=new Ns(t=>op(t),ap),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new dp,this.targetCount=0,this.Qr=Bo.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),W.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Bo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Un(t),W.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.qr.containsKey(t))}}/**
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
 */class nw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new OP,this.referenceDelegate=e(this),this.Gr=new MP(this),this.indexManager=new TP,this.remoteDocumentCache=function(o){return new VP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new wP(t),this.jr=new xP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new LP(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new FP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return W.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class FP extends pC{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Zr=new dp,this.Xr=null}static ei(e){return new fp(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),W.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return W.or([()=>W.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Dc{constructor(e,t){this.persistence=e,this.ri=new Ns(i=>yC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=CP(this,t)}static ei(e,t){return new Dc(e,t)}Hr(){}Jr(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return W.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,c=>this.ir(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Te.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}ir(e,t,i){return W.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new pp(e,t.fromCache,i,o)}}/**
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
 */class UP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return IT()?8:mC(qt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new UP;return this.ts(e,t,c).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Ao()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),W.resolve()):(Ao()<=Pe.DEBUG&&ae("QueryEngine","Query:",Co(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Ao()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):W.resolve())}Xi(e,t){if(l_(t))return W.resolve(null);let i=hr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Af(t,null,"F"),i=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=ke(...l);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,Af(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return l_(t)||o.isEqual(Te.min())?W.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?W.resolve(null):(Ao()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.os(e,c,t,cC(o,-1)).next(d=>d))})}rs(e,t){let i=new _t(O0(e));return t.forEach((o,l)=>{Xc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return Ao()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Co(t)),this.Zi.getDocumentsMatchingQuery(e,t,ki.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */class zP{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new tt(xe),this.cs=new Ns(l=>op(l),ap),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function BP(n,e,t,i){return new zP(n,e,t,i)}async function rw(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=ke();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function $P(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let x=W.resolve();return I.forEach(L=>{x=x.next(()=>v.getEntry(p,L)).next($=>{const V=y.docVersions.get(L);Ue(V!==null),$.version.compareTo(V)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),v.addEntry($)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function iw(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function qP(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,v.addedDocuments,T)));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(T,x),function($,V,H){return $.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,x,v)&&d.push(t.Gr.updateTargetData(l,x))});let p=Wr(),y=ke();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(HP(l,c,e.documentUpdates).next(v=>{p=v.Is,y=v.Es})),!i.isEqual(Te.min())){const v=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return W.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function HP(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Wr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,Es:o}})}function WP(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function KP(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,W.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new Ri(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function xf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Go(c))throw c;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function w_(n,e,t){const i=Se(n);let o=Te.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const T=Se(p),I=T.cs.get(v);return I!==void 0?W.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,c,hr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Te.min(),t?l:ke())).next(d=>(GP(i,VC(e),d),{documents:d,ds:l})))}function GP(n,e,t){let i=n.ls.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class E_{constructor(){this.activeTargetIds=zC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QP{constructor(){this._o=new E_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new E_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YP{uo(e){}shutdown(){}}/**
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
 */class T_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function rf(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
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
 */const XP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class ZP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const d=rf(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,c),this.Bo(t,p,y,o).then(v=>(ae("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Mo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}ko(t,i,o,l,c,d){return this.Oo(t,i,o,l,c)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}No(t,i){const o=XP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=rf();return new Promise((c,d)=>{const p=new m0;p.setWithCredentials(!0),p.listenOnce(g0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case lc.NO_ERROR:const v=p.getResponseJson();ae(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case lc.TIMEOUT:ae(jt,`RPC '${e}' ${l} timed out`),d(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const T=p.getStatus();if(ae(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const L=function(V){const H=V.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(H)>=0?H:G.UNKNOWN}(x.status);d(new ue(L,x.message))}else d(new ue(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ue(G.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ae(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=rf(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=v0(),d=_0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=c.createWebChannel(v,p);let I=!1,x=!1;const L=new JP({Eo:V=>{x?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(I||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Ao:()=>T.close()}),$=(V,H,Y)=>{V.listen(H,ne=>{try{Y(ne)}catch(se){setTimeout(()=>{throw se},0)}})};return $(T,tl.EventType.OPEN,()=>{x||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),L.So())}),$(T,tl.EventType.CLOSE,()=>{x||(x=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),L.Do())}),$(T,tl.EventType.ERROR,V=>{x||(x=!0,Mo(jt,`RPC '${e}' stream ${o} transport errored:`,V),L.Do(new ue(G.UNAVAILABLE,"The operation could not be completed")))}),$(T,tl.EventType.MESSAGE,V=>{var H;if(!x){const Y=V.data[0];Ue(!!Y);const ne=Y,se=(ne==null?void 0:ne.error)||((H=ne[0])===null||H===void 0?void 0:H.error);if(se){ae(jt,`RPC '${e}' stream ${o} received error:`,se);const Ie=se.status;let _e=function(A){const k=ct[A];if(k!==void 0)return W0(k)}(Ie),N=se.message;_e===void 0&&(_e=G.INTERNAL,N="Unknown error status: "+Ie+" with message "+se.message),x=!0,L.Do(new ue(_e,N)),T.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,Y),L.vo(Y)}}),$(d,y0.STAT_EVENT,V=>{V.stat===wf.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===wf.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.bo()},0),L}}function sf(){return typeof document<"u"?document:null}/**
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
 */function th(n){return new oP(n,!0)}/**
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
 */class sw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class ow{constructor(e,t,i,o,l,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ue(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ek extends ow{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=uP(this.serializer,e),i=function(l){if(!("targetChange"in l))return Te.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Te.min():c.readTime?fr(c.readTime):Te.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Nf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Sf(p)?{documents:dP(l,p)}:{query:fP(l,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Q0(l,c.resumeToken);const y=Cf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Te.min())>0){d.readTime=xc(l,c.snapshotVersion.toTimestamp());const y=Cf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=mP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Nf(this.serializer),t.removeTarget=e,this.c_(t)}}class tk extends ow{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=hP(e.writeResults,e.commitTime),i=fr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Nf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>cP(this.serializer,i))};this.c_(t)}}/**
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
 */class nk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Oo(e,Pf(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(G.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,Pf(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(G.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class rk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Hr(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class ik{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{xs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await kl(y),y.K_.set("Unknown"),y.k_.delete(4),await nh(y)}(this))})}),this.K_=new rk(i,o)}}async function nh(n){if(xs(n))for(const e of n.q_)await e(!0)}async function kl(n){for(const e of n.q_)await e(!1)}function aw(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),_p(t)?yp(t):Qo(t).s_()&&gp(t,e))}function mp(n,e){const t=Se(n),i=Qo(t);t.B_.delete(e),i.s_()&&lw(t,e),t.B_.size===0&&(i.s_()?i.a_():xs(t)&&t.K_.set("Unknown"))}function gp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(n).V_(e)}function lw(n,e){n.U_.xe(e),Qo(n).m_(e)}function yp(n){n.U_=new nP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Qo(n).start(),n.K_.F_()}function _p(n){return xs(n)&&!Qo(n).i_()&&n.B_.size>0}function xs(n){return Se(n).k_.size===0}function uw(n){n.U_=void 0}async function sk(n){n.K_.set("Online")}async function ok(n){n.B_.forEach((e,t)=>{gp(n,e)})}async function ak(n,e){uw(n),_p(n)?(n.K_.O_(e),yp(n)):n.K_.set("Unknown")}async function lk(n,e,t){if(n.K_.set("Online"),e instanceof G0&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Oc(n,i)}else if(e instanceof dc?n.U_.$e(e):e instanceof K0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Te.min()))try{const i=await iw(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.B_.get(y);v&&l.B_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.B_.get(p);if(!v)return;l.B_.set(p,v.withResumeToken(Ot.EMPTY_BYTE_STRING,v.snapshotVersion)),lw(l,p);const T=new Ri(v.target,p,y,v.sequenceNumber);gp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Oc(n,i)}}async function Oc(n,e,t){if(!Go(e))throw e;n.k_.add(1),await kl(n),n.K_.set("Offline"),t||(t=()=>iw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await nh(n)})}function cw(n,e){return e().catch(t=>Oc(n,t,e))}async function rh(n){const e=Se(n),t=Oi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;uk(e);)try{const o=await WP(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,ck(e,o)}catch(o){await Oc(e,o)}hw(e)&&dw(e)}function uk(n){return xs(n)&&n.L_.length<10}function ck(n,e){n.L_.push(e);const t=Oi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function hw(n){return xs(n)&&!Oi(n).i_()&&n.L_.length>0}function dw(n){Oi(n).start()}async function hk(n){Oi(n).w_()}async function dk(n){const e=Oi(n);for(const t of n.L_)e.g_(t.mutations)}async function fk(n,e,t){const i=n.L_.shift(),o=up.from(i,e,t);await cw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await rh(n)}async function pk(n,e){e&&Oi(n).f_&&await async function(i,o){if(function(c){return ZC(c)&&c!==G.ABORTED}(o.code)){const l=i.L_.shift();Oi(i).__(),await cw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await rh(i)}}(n,e),hw(n)&&dw(n)}async function I_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=xs(t);t.k_.add(3),await kl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await nh(t)}async function mk(n,e){const t=Se(n);e?(t.k_.delete(2),await nh(t)):e||(t.k_.add(2),await kl(t),t.K_.set("Unknown"))}function Qo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new ek(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:sk.bind(null,n),mo:ok.bind(null,n),po:ak.bind(null,n),R_:lk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),_p(n)?yp(n):n.K_.set("Unknown")):(await n.W_.stop(),uw(n))})),n.W_}function Oi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new tk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:hk.bind(null,n),po:pk.bind(null,n),p_:dk.bind(null,n),y_:fk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await rh(n)):(await n.G_.stop(),n.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class vp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new vp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(n,e){if(Hr("AsyncQueue",`${e}: ${n}`),Go(n))return new ue(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=nl(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Lo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class S_{constructor(){this.z_=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class $o{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new $o(e,t,Lo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class gk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class yk{constructor(){this.queries=R_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=R_(),l.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function R_(){return new Ns(n=>D0(n),Yc)}async function Ep(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new gk,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=wp(c,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Ip(t)}async function Tp(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function _k(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&Ip(t)}function vk(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Ip(n){n.X_.forEach(e=>{e.next()})}var Df,A_;(A_=Df||(Df={})).na="default",A_.Cache="cache";class Sp{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new $o(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Df.Cache}}/**
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
 */class fw{constructor(e){this.key=e}}class pw{constructor(e){this.key=e}}class wk{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=O0(e),this.ma=new Lo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new S_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),x=Xc(this.query,T)?T:null,L=!!I&&this.mutatedKeys.has(I.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;I&&x?I.data.isEqual(x.data)?L!==$&&(i.track({type:3,doc:x}),V=!0):this.ya(I,x)||(i.track({type:2,doc:x}),V=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),V=!0):I&&!x&&(i.track({type:1,doc:I}),V=!0,(p||y)&&(d=!0)),V&&(x?(c=c.add(x),l=$?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((v,T)=>function(x,L){const $=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return $(x)-$(L)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new $o(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new S_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new pw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new fw(i))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return $o.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Ek{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Tk{constructor(e){this.key=e,this.Fa=!1}}class Ik{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Ns(d=>D0(d),Yc),this.Oa=new Map,this.Na=new Set,this.La=new tt(pe.comparator),this.Ba=new Map,this.ka=new dp,this.qa={},this.Qa=new Map,this.Ka=Bo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Sk(n,e,t=!0){const i=ww(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await mw(i,e,t,!0),o}async function Rk(n,e){const t=ww(n);await mw(t,e,!0,!1)}async function mw(n,e,t,i){const o=await KP(n.localStore,hr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await Ak(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&aw(n.remoteStore,o),d}async function Ak(n,e,t,i,o){n.Ua=(T,I,x)=>async function($,V,H,Y){let ne=V.view.ga(H);ne.ss&&(ne=await w_($.localStore,V.query,!1).then(({documents:N})=>V.view.ga(N,ne)));const se=Y&&Y.targetChanges.get(V.targetId),Ie=Y&&Y.targetMismatches.get(V.targetId)!=null,_e=V.view.applyChanges(ne,$.isPrimaryClient,se,Ie);return P_($,V.targetId,_e.ba),_e.snapshot}(n,T,I,x);const l=await w_(n.localStore,e,!0),c=new wk(e,l.ds),d=c.ga(l.documents),p=Pl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);P_(n,t,y.ba);const v=new Ek(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function Ck(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(c=>!Yc(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await xf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&mp(i.remoteStore,o.targetId),Of(i,o.targetId)}).catch(Ko)):(Of(i,o.targetId),await xf(i.localStore,o.targetId,!0))}async function Pk(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),mp(t.remoteStore,i.targetId))}async function kk(n,e,t){const i=bk(n);try{const o=await function(c,d){const p=Se(c),y=at.now(),v=d.reduce((x,L)=>x.add(L.key),ke());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let L=Wr(),$=ke();return p.hs.getEntries(x,v).next(V=>{L=V,L.forEach((H,Y)=>{Y.isValidDocument()||($=$.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,L)).next(V=>{T=V;const H=[];for(const Y of d){const ne=GC(Y,T.get(Y.key).overlayedDocument);ne!=null&&H.push(new Ui(Y.key,ne,S0(ne.value.mapValue),dr.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,H,d)}).next(V=>{I=V;const H=V.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(x,V.batchId,H)})}).then(()=>({batchId:I.batchId,changes:V0(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new tt(xe)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Nl(i,o.changes),await rh(i.remoteStore)}catch(o){const l=wp(o,"Failed to persist write");t.reject(l)}}async function gw(n,e){const t=Se(n);try{const i=await qP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Ba.get(l);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?Ue(c.Fa):o.removedDocuments.size>0&&(Ue(c.Fa),c.Fa=!1))}),await Nl(t,i,e)}catch(i){await Ko(i)}}function C_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&Ip(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Nk(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let c=new tt(pe.comparator);c=c.insert(l,Bt.newNoDocument(l,Te.min()));const d=ke().add(l),p=new eh(Te.min(),new Map,new tt(xe),c,d);await gw(i,p),i.La=i.La.remove(l),i.Ba.delete(e),Rp(i)}else await xf(i.localStore,e,!1).then(()=>Of(i,e,t)).catch(Ko)}async function xk(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await $P(t.localStore,e);_w(t,i,null),yw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Nl(t,o)}catch(o){await Ko(o)}}async function Dk(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);_w(i,e,t),yw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Nl(i,o)}catch(o){await Ko(o)}}function yw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function _w(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Of(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||vw(n,i)})}function vw(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(mp(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Rp(n))}function P_(n,e,t){for(const i of t)i instanceof fw?(n.ka.addReference(i.key,e),Ok(n,i)):i instanceof pw?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||vw(n,i.key)):Ee()}function Ok(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),Rp(n))}function Rp(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Ge.fromString(e)),i=n.Ka.next();n.Ba.set(i,new Tk(t)),n.La=n.La.insert(t,i),aw(n.remoteStore,new Ri(hr(Qc(t.path)),i,"TargetPurposeLimboResolution",Wc.oe))}}async function Nl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=pp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const v=Se(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(y,I=>W.forEach(I.Wi,x=>v.persistence.referenceDelegate.addReference(T,I.targetId,x)).next(()=>W.forEach(I.Gi,x=>v.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))}catch(T){if(!Go(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const x=v.us.get(I),L=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(L);v.us=v.us.insert(I,$)}}}(i.localStore,l))}async function Lk(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await rw(t.localStore,e);t.currentUser=e,function(l,c){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ue(G.CANCELLED,c))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Nl(t,i.Ts)}}function Vk(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function ww(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nk.bind(null,e),e.Ma.R_=_k.bind(null,e.eventManager),e.Ma.Wa=vk.bind(null,e.eventManager),e}function bk(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dk.bind(null,e),e}class Lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=th(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return BP(this.persistence,new jP,e.initialUser,this.serializer)}ja(e){return new nw(fp.ei,this.serializer)}za(e){return new QP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lc.provider={build:()=>new Lc};class Mk extends Lc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof Dc);const i=this.persistence.referenceDelegate.garbageCollector;return new RP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new nw(i=>Dc.ei(i,t),this.serializer)}}class Lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>C_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lk.bind(null,this.syncEngine),await mk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yk}()}createDatastore(e){const t=th(e.databaseInfo.databaseId),i=function(l){return new ZP(l)}(e.databaseInfo);return function(l,c,d,p){return new nk(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new ik(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>C_(this.syncEngine,t,0),function(){return T_.p()?new T_:new YP}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const T=new Ik(o,l,c,d,p,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await kl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Lf.provider={build:()=>new Lf};/**
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
 */class Ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Fk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ae("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ae("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=wp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function of(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await rw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function k_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Uk(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>I_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>I_(e.remoteStore,o)),n._onlineComponents=e}async function Uk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await of(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Mo("Error using user provided cache. Falling back to memory cache: "+t),await of(n,new Lc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await of(n,new Mk(void 0));return n._offlineComponents}async function Ew(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await k_(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await k_(n,new Lf))),n._onlineComponents}function jk(n){return Ew(n).then(e=>e.syncEngine)}async function Vc(n){const e=await Ew(n),t=e.eventManager;return t.onListen=Sk.bind(null,e.syncEngine),t.onUnlisten=Ck.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Pk.bind(null,e.syncEngine),t}function zk(n,e,t={}){const i=new zr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new Ap({next:I=>{v.eu(),c.enqueueAndForget(()=>Tp(l,T));const x=I.docs.has(d);!x&&I.fromCache?y.reject(new ue(G.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&I.fromCache&&p&&p.source==="server"?y.reject(new ue(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Sp(Qc(d.path),v,{includeMetadataChanges:!0,ua:!0});return Ep(l,T)}(await Vc(n),n.asyncQueue,e,t,i)),i.promise}function Bk(n,e,t={}){const i=new zr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new Ap({next:I=>{v.eu(),c.enqueueAndForget(()=>Tp(l,T)),I.fromCache&&p.source==="server"?y.reject(new ue(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Sp(d,v,{includeMetadataChanges:!0,ua:!0});return Ep(l,T)}(await Vc(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Tw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const N_=new Map;/**
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
 */function Iw(n,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $k(n,e,t,i){if(e===!0&&i===!0)throw new ue(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function x_(n){if(!pe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function D_(n){if(pe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ih(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ih(n);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class O_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$k("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new tC;switch(i.type){case"firstParty":return new sC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=N_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),N_.delete(t),i.terminate())}(this),Promise.resolve()}}function qk(n,e,t,i={}){var o;const l=(n=Cn(n,sh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=zt.MOCK_USER;else{d=Z_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new zt(y)}n._authCredentials=new nC(new w0(d,p))}}/**
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
 */class Ds{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class $t{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Pi extends Ds{constructor(e,t,i){super(e,t,Qc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new pe(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function Sw(n,e,...t){if(n=et(n),Iw("collection","path",e),n instanceof sh){const i=Ge.fromString(e,...t);return D_(i),new Pi(n,null,i)}{if(!(n instanceof $t||n instanceof Pi))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return D_(i),new Pi(n.firestore,null,i)}}function xt(n,e,...t){if(n=et(n),arguments.length===1&&(e=E0.newId()),Iw("doc","path",e),n instanceof sh){const i=Ge.fromString(e,...t);return x_(i),new $t(n,null,new pe(i))}{if(!(n instanceof $t||n instanceof Pi))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return x_(i),new $t(n.firestore,n instanceof Pi?n.converter:null,new pe(i))}}/**
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
 */class L_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sw(this,"async_queue_retry"),this.fu=()=>{const i=sf();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new zr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Go(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Hr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=vp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function V_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class As extends sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new L_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new L_(e),this._firestoreClient=void 0,await e}}}function Hk(n,e){const t=jc(),i="(default)",o=Vi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Y_("firestore");l&&qk(o,...l)}return o}function oh(n){if(n._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wk(n),n._firestoreClient}function Wk(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new wC(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Tw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Fk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(Ot.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ah{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xl{constructor(e){this._methodName=e}}/**
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
 */class Cp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class Pp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const Kk=/^__.*__$/;class Gk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cl(e,this.data,t,this.fieldTransforms)}}class Rw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Aw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class lh{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return bc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Aw(this.Mu)&&Kk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Qk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||th(e)}$u(e,t,i,o=!1){return new lh({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(n){const e=n._freezeSettings(),t=th(n._databaseId);return new Qk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yk(n,e,t,i,o,l={}){const c=n.$u(l.merge||l.mergeFields?2:0,e,t,o);Dp("Data must be an object, but it was:",c,i);const d=Cw(i,c);let p,y;if(l.merge)p=new mn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=Vf(e,T,t);if(!c.contains(I))throw new ue(G.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);kw(v,I)||v.push(I)}p=new mn(v),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new Gk(new sn(d),p,y)}class uh extends xl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}function Xk(n,e,t){return new lh({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Np extends xl{_toFieldTransform(e){return new B0(e.path,new _l)}isEqual(e){return e instanceof Np}}class xp extends xl{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=Xk(this,e,!0),i=this.Uu.map(l=>Yo(l,t)),o=new zo(i);return new B0(e.path,o)}isEqual(e){return e instanceof xp&&Vo(this.Uu,e.Uu)}}function Jk(n,e,t,i){const o=n.$u(1,e,t);Dp("Data must be an object, but it was:",o,i);const l=[],c=sn.empty();Fi(i,(p,y)=>{const v=Op(e,p,t);y=et(y);const T=o.Bu(v);if(y instanceof uh)l.push(v);else{const I=Yo(y,T);I!=null&&(l.push(v),c.set(v,I))}});const d=new mn(l);return new Rw(c,d,o.fieldTransforms)}function Zk(n,e,t,i,o,l){const c=n.$u(1,e,t),d=[Vf(e,i,t)],p=[o];if(l.length%2!=0)throw new ue(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Vf(e,l[I])),p.push(l[I+1]);const y=[],v=sn.empty();for(let I=d.length-1;I>=0;--I)if(!kw(y,d[I])){const x=d[I];let L=p[I];L=et(L);const $=c.Bu(x);if(L instanceof uh)y.push(x);else{const V=Yo(L,$);V!=null&&(y.push(x),v.set(x,V))}}const T=new mn(y);return new Rw(v,T,c.fieldTransforms)}function eN(n,e,t,i=!1){return Yo(t,n.$u(i?4:3,e))}function Yo(n,e){if(Pw(n=et(n)))return Dp("Unsupported field value:",e,n),Cw(n,e);if(n instanceof xl)return function(i,o){if(!Aw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=Yo(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return BC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=at.fromDate(i);return{timestampValue:xc(o.serializer,l)}}if(i instanceof at){const l=new at(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,l)}}if(i instanceof Cp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof qo)return{bytesValue:Q0(o.serializer,i._byteString)};if(i instanceof $t){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:hp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Pp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return lp(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${ih(i)}`)}(n,e)}function Cw(n,e){const t={};return T0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(n,(i,o)=>{const l=Yo(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Pw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof Cp||n instanceof qo||n instanceof $t||n instanceof xl||n instanceof Pp)}function Dp(n,e,t){if(!Pw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=ih(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Vf(n,e,t){if((e=et(e))instanceof ah)return e._internalPath;if(typeof e=="string")return Op(n,e);throw bc("Field path arguments must be of type string or ",n,!1,void 0,t)}const tN=new RegExp("[~\\*/\\[\\]]");function Op(n,e,t){if(e.search(tN)>=0)throw bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ah(...e.split("."))._internalPath}catch{throw bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ue(G.INVALID_ARGUMENT,d+n+p)}function kw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Nw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nN extends Nw{data(){return super.data()}}function Lp(n,e){return typeof e=="string"?Op(n,e):e instanceof ah?e._internalPath:e._delegate._internalPath}/**
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
 */function xw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vp{}class rN extends Vp{}function iN(n,e,...t){let i=[];e instanceof Vp&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof bp).length,d=l.filter(p=>p instanceof ch).length;if(c>1||c>0&&d>0)throw new ue(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class ch extends rN{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new ch(e,t,i)}_apply(e){const t=this._parse(e);return Dw(e._query,t),new Ds(e.firestore,e.converter,Rf(e._query,t))}_parse(e){const t=kp(e.firestore);return function(l,c,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ue(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){M_(T,v);const x=[];for(const L of T)x.push(b_(p,l,L));I={arrayValue:{values:x}}}else I=b_(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||M_(T,v),I=eN(d,c,T,v==="in"||v==="not-in");return ht.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sN(n,e,t){const i=e,o=Lp("where",n);return ch._create(o,i,t)}class bp extends Vp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Yn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)Dw(c,p),c=Rf(c,p)}(e._query,t),new Ds(e.firestore,e.converter,Rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function b_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ue(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!x0(e)&&t.indexOf("/")!==-1)throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(i))throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return n_(n,new pe(i))}if(t instanceof $t)return n_(n,t._key);throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ih(t)}.`)}function M_(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dw(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oN{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Fi(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ot(c.doubleValue));return new Pp(l)}convertGeoPoint(e){return new Cp(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Gc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Ue(tw(i));const o=new gl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Hr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function aN(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class il{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ow extends Nw{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Lp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class fc extends Ow{data(e={}){return super.data(e)}}class Lw{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new il(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new fc(this._firestore,this._userDataWriter,i.key,i,new il(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new fc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new fc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:lN(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
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
 */function Vw(n){n=Cn(n,$t);const e=Cn(n.firestore,As);return zk(oh(e),n._key).then(t=>Mw(e,n,t))}class Mp extends oN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,t)}}function uN(n){n=Cn(n,Ds);const e=Cn(n.firestore,As),t=oh(e),i=new Mp(e);return xw(n._query),Bk(t,n._query).then(o=>new Lw(e,i,n,o))}function ws(n,e,t){n=Cn(n,$t);const i=Cn(n.firestore,As),o=aN(n.converter,e,t);return bw(i,[Yk(kp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,dr.none())])}function Si(n,e,t,...i){n=Cn(n,$t);const o=Cn(n.firestore,As),l=kp(o);let c;return c=typeof(e=et(e))=="string"||e instanceof ah?Zk(l,"updateDoc",n._key,e,t,i):Jk(l,"updateDoc",n._key,e),bw(o,[c.toMutation(n._key,dr.exists(!0))])}function bf(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||V_(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(V_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,v;if(n instanceof $t)y=Cn(n.firestore,As),v=Qc(n._key.path),p={next:T=>{e[c]&&e[c](Mw(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Cn(n,Ds);y=Cn(T.firestore,As),v=T._query;const I=new Mp(y);p={next:x=>{e[c]&&e[c](new Lw(y,I,T,x))},error:e[c+1],complete:e[c+2]},xw(n._query)}return function(I,x,L,$){const V=new Ap($),H=new Sp(x,V,L);return I.asyncQueue.enqueueAndForget(async()=>Ep(await Vc(I),H)),()=>{V.eu(),I.asyncQueue.enqueueAndForget(async()=>Tp(await Vc(I),H))}}(oh(y),v,d,p)}function bw(n,e){return function(i,o){const l=new zr;return i.asyncQueue.enqueueAndForget(async()=>kk(await jk(i),o,l)),l.promise}(oh(n),e)}function Mw(n,e,t){const i=t.docs.get(e._key),o=new Mp(n);return new Ow(n,o,e._key,i,new il(t.hasPendingWrites,t.fromCache),e.converter)}function No(){return new Np("serverTimestamp")}function cN(...n){return new xp("arrayUnion",n)}(function(e,t=!0){(function(o){Wo=o})(ks),Qn(new Pn("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new As(new rC(i.getProvider("auth-internal")),new aC(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),on(Yy,"4.7.5",e),on(Yy,"4.7.5","esm2017")})();const hN={apiKey:"AIzaSyCptx2rVC70XSEeH--Nt6bwOnYjq0Qc73c",authDomain:"chatapp-d494a.firebaseapp.com",projectId:"chatapp-d494a",storageBucket:"chatapp-d494a.firebasestorage.app",messagingSenderId:"798826592422",appId:"1:798826592422:web:6edfab05e70dfccc6e5c67",measurementId:"G-M8JR2LDNHN"},dN=ov(hN);sR(dN);const Cs=SA();XA();const yt=Hk(),ji=B.createContext(),fN=({children:n})=>{const[e,t]=B.useState({});return B.useEffect(()=>{const i=d1(Cs,o=>{t(o),console.log(o)});return()=>i()},[]),J.jsx(ji.Provider,{value:{currentUser:e},children:n})};var Xa={},F_;function pN(){if(F_)return Xa;F_=1,Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.parse=c,Xa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,x){const L=new l,$=I.length;if($<2)return L;const V=(x==null?void 0:x.decode)||v;let H=0;do{const Y=I.indexOf("=",H);if(Y===-1)break;const ne=I.indexOf(";",H),se=ne===-1?$:ne;if(Y>se){H=I.lastIndexOf(";",Y-1)+1;continue}const Ie=d(I,H,Y),_e=p(I,Y,Ie),N=I.slice(Ie,_e);if(L[N]===void 0){let S=d(I,Y+1,se),A=p(I,se,S);const k=V(I.slice(S,A));L[N]=k}H=se+1}while(H<$);return L}function d(I,x,L){do{const $=I.charCodeAt(x);if($!==32&&$!==9)return x}while(++x<L);return L}function p(I,x,L){for(;x>L;){const $=I.charCodeAt(--x);if($!==32&&$!==9)return x+1}return L}function y(I,x,L){const $=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const V=$(x);if(!e.test(V))throw new TypeError(`argument val is invalid: ${x}`);let H=I+"="+V;if(!L)return H;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);H+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);H+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);H+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);H+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(H+="; HttpOnly"),L.secure&&(H+="; Secure"),L.partitioned&&(H+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return H}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Xa}pN();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var U_="popstate";function mN(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return Mf("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:wl(o)}return yN(e,t,null,n)}function Xe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Xn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gN(){return Math.random().toString(36).substring(2,10)}function j_(n,e){return{usr:n.state,key:n.key,idx:e}}function Mf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||i||gN()}}function wl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function yN(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=v();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let V=v(),H=V==null?null:V-y;y=V,p&&p({action:d,location:$.location,delta:H})}function I(V,H){d="PUSH";let Y=Mf($.location,V,H);y=v()+1;let ne=j_(Y,y),se=$.createHref(Y);try{c.pushState(ne,"",se)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(se)}l&&p&&p({action:d,location:$.location,delta:1})}function x(V,H){d="REPLACE";let Y=Mf($.location,V,H);y=v();let ne=j_(Y,y),se=$.createHref(Y);c.replaceState(ne,"",se),l&&p&&p({action:d,location:$.location,delta:0})}function L(V){let H=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof V=="string"?V:wl(V);return Y=Y.replace(/ $/,"%20"),Xe(H,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,H)}let $={get action(){return d},get location(){return n(o,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(U_,T),p=V,()=>{o.removeEventListener(U_,T),p=null}},createHref(V){return e(o,V)},createURL:L,encodeLocation(V){let H=L(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:x,go(V){return c.go(V)}};return $}function Fw(n,e,t="/"){return _N(n,e,t,!1)}function _N(n,e,t,i){let o=typeof e=="string"?Xo(e):e,l=Li(o.pathname||"/",t);if(l==null)return null;let c=Uw(n);vN(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=NN(l);d=PN(c[p],y,i)}return d}function Uw(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Xe(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Br([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Xe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Uw(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:AN(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of jw(l.path))o(l,c,p)}),e}function jw(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=jw(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function vN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:CN(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var wN=/^:[\w-]+$/,EN=3,TN=2,IN=1,SN=10,RN=-2,z_=n=>n==="*";function AN(n,e){let t=n.split("/"),i=t.length;return t.some(z_)&&(i+=RN),e&&(i+=TN),t.filter(o=>!z_(o)).reduce((o,l)=>o+(wN.test(l)?EN:l===""?IN:SN),i)}function CN(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function PN(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=Mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Br([l,T.pathname]),pathnameBase:LN(Br([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Br([l,T.pathnameBase]))}return c}function Mc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=kN(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let L=d[I]||"";c=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const x=d[I];return T&&!x?y[v]=void 0:y[v]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function kN(n,e=!1,t=!0){Xn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function NN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Li(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function xN(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Xo(n):n;return{pathname:t?t.startsWith("/")?t:DN(t,e):e,search:VN(i),hash:bN(o)}}function DN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function af(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ON(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fp(n){let e=ON(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Up(n,e,t,i=!1){let o;typeof n=="string"?o=Xo(n):(o={...n},Xe(!o.pathname||!o.pathname.includes("?"),af("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),af("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),af("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=xN(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var Br=n=>n.join("/").replace(/\/\/+/g,"/"),LN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),VN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,bN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function MN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var zw=["POST","PUT","PATCH","DELETE"];new Set(zw);var FN=["GET",...zw];new Set(FN);var Jo=B.createContext(null);Jo.displayName="DataRouter";var hh=B.createContext(null);hh.displayName="DataRouterState";var Bw=B.createContext({isTransitioning:!1});Bw.displayName="ViewTransition";var UN=B.createContext(new Map);UN.displayName="Fetchers";var jN=B.createContext(null);jN.displayName="Await";var Jn=B.createContext(null);Jn.displayName="Navigation";var Dl=B.createContext(null);Dl.displayName="Location";var yr=B.createContext({outlet:null,matches:[],isDataRoute:!1});yr.displayName="Route";var jp=B.createContext(null);jp.displayName="RouteError";function zN(n,{relative:e}={}){Xe(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(Jn),{hash:o,pathname:l,search:c}=Ol(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Br([t,l])),i.createHref({pathname:d,search:c,hash:o})}function Zo(){return B.useContext(Dl)!=null}function Gr(){return Xe(Zo(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(Dl).location}var $w="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qw(n){B.useContext(Jn).static||B.useLayoutEffect(n)}function ea(){let{isDataRoute:n}=B.useContext(yr);return n?ex():BN()}function BN(){Xe(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Jo),{basename:e,navigator:t}=B.useContext(Jn),{matches:i}=B.useContext(yr),{pathname:o}=Gr(),l=JSON.stringify(Fp(i)),c=B.useRef(!1);return qw(()=>{c.current=!0}),B.useCallback((p,y={})=>{if(Xn(c.current,$w),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=Up(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Br([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,l,o,n])}B.createContext(null);function Ol(n,{relative:e}={}){let{matches:t}=B.useContext(yr),{pathname:i}=Gr(),o=JSON.stringify(Fp(t));return B.useMemo(()=>Up(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function $N(n,e){return Hw(n,e)}function Hw(n,e,t,i){var H;Xe(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=B.useContext(Jn),{matches:l}=B.useContext(yr),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",y=c?c.pathnameBase:"/",v=c&&c.route;{let Y=v&&v.path||"";Ww(p,!v||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=Gr(),I;if(e){let Y=typeof e=="string"?Xo(e):e;Xe(y==="/"||((H=Y.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),I=Y}else I=T;let x=I.pathname||"/",L=x;if(y!=="/"){let Y=y.replace(/^\//,"").split("/");L="/"+x.replace(/^\//,"").split("/").slice(Y.length).join("/")}let $=Fw(n,{pathname:L});Xn(v||$!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Xn($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=GN($&&$.map(Y=>Object.assign({},Y,{params:Object.assign({},d,Y.params),pathname:Br([y,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?y:Br([y,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),l,t,i);return e&&V?B.createElement(Dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},V):V}function qN(){let n=ZN(),e=MN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,c)}var HN=B.createElement(qN,null),WN=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?B.createElement(yr.Provider,{value:this.props.routeContext},B.createElement(jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KN({routeContext:n,match:e,children:t}){let i=B.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(yr.Provider,{value:n},t)}function GN(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Xe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,x=null,L=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||HN,c&&(d<0&&v===0?(Ww("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,L=null):d===v&&(I=!0,L=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,v+1)),V=()=>{let H;return T?H=x:I?H=L:y.route.Component?H=B.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,B.createElement(KN,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?B.createElement(WN,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:V(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):V()},null)}function zp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QN(n){let e=B.useContext(Jo);return Xe(e,zp(n)),e}function YN(n){let e=B.useContext(hh);return Xe(e,zp(n)),e}function XN(n){let e=B.useContext(yr);return Xe(e,zp(n)),e}function Bp(n){let e=XN(n),t=e.matches[e.matches.length-1];return Xe(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function JN(){return Bp("useRouteId")}function ZN(){var i;let n=B.useContext(jp),e=YN("useRouteError"),t=Bp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function ex(){let{router:n}=QN("useNavigate"),e=Bp("useNavigate"),t=B.useRef(!1);return qw(()=>{t.current=!0}),B.useCallback(async(o,l={})=>{Xn(t.current,$w),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var B_={};function Ww(n,e,t){!e&&!B_[n]&&(B_[n]=!0,Xn(!1,t))}B.memo(tx);function tx({routes:n,future:e,state:t}){return Hw(n,void 0,t,e)}function nx({to:n,replace:e,state:t,relative:i}){Xe(Zo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=B.useContext(Jn);Xn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=B.useContext(yr),{pathname:c}=Gr(),d=ea(),p=Up(n,Fp(l),c,i==="path"),y=JSON.stringify(p);return B.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function sl(n){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rx({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Xe(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Xo(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,x=B.useMemo(()=>{let L=Li(p,c);return L==null?null:{location:{pathname:L,search:y,hash:v,state:T,key:I},navigationType:i}},[c,p,y,v,T,I,i]);return Xn(x!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:B.createElement(Jn.Provider,{value:d},B.createElement(Dl.Provider,{children:e,value:x}))}function ix({children:n,location:e}){return $N(Ff(n),e)}function Ff(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let l=[...e,o];if(i.type===B.Fragment){t.push.apply(t,Ff(i.props.children,l));return}Xe(i.type===sl,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ff(i.props.children,l)),t.push(c)}),t}var pc="get",mc="application/x-www-form-urlencoded";function dh(n){return n!=null&&typeof n.tagName=="string"}function sx(n){return dh(n)&&n.tagName.toLowerCase()==="button"}function ox(n){return dh(n)&&n.tagName.toLowerCase()==="form"}function ax(n){return dh(n)&&n.tagName.toLowerCase()==="input"}function lx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ux(n,e){return n.button===0&&(!e||e==="_self")&&!lx(n)}var rc=null;function cx(){if(rc===null)try{new FormData(document.createElement("form"),0),rc=!1}catch{rc=!0}return rc}var hx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lf(n){return n!=null&&!hx.has(n)?(Xn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mc}"`),null):n}function dx(n,e){let t,i,o,l,c;if(ox(n)){let d=n.getAttribute("action");i=d?Li(d,e):null,t=n.getAttribute("method")||pc,o=lf(n.getAttribute("enctype"))||mc,l=new FormData(n)}else if(sx(n)||ax(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Li(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||pc,o=lf(n.getAttribute("formenctype"))||lf(d.getAttribute("enctype"))||mc,l=new FormData(d,n),!cx()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(dh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=pc,i=null,o=mc,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function $p(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function fx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function px(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function mx(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await fx(l,t);return c.links?c.links():[]}return[]}));return vx(i.flat(1).filter(px).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $_(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function gx(n,e){return yx(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function yx(n){return[...new Set(n)]}function _x(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function vx(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(_x(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function wx(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Ex(){let n=B.useContext(Jo);return $p(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Tx(){let n=B.useContext(hh);return $p(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var qp=B.createContext(void 0);qp.displayName="FrameworkContext";function Kw(){let n=B.useContext(qp);return $p(n,"You must render this element inside a <HydratedRouter> element"),n}function Ix(n,e){let t=B.useContext(qp),[i,o]=B.useState(!1),[l,c]=B.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=B.useRef(null);B.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let $=H=>{H.forEach(Y=>{c(Y.isIntersecting)})},V=new IntersectionObserver($,{threshold:.5});return I.current&&V.observe(I.current),()=>{V.disconnect()}}},[n]),B.useEffect(()=>{if(i){let $=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout($)}}},[i]);let x=()=>{o(!0)},L=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Ja(d,x),onBlur:Ja(p,L),onMouseEnter:Ja(y,x),onMouseLeave:Ja(v,L),onTouchStart:Ja(T,x)}]:[!1,I,{}]}function Ja(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function Sx({page:n,...e}){let{router:t}=Ex(),i=B.useMemo(()=>Fw(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(Ax,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function Rx(n){let{manifest:e,routeModules:t}=Kw(),[i,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return mx(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function Ax({page:n,matches:e,...t}){let i=Gr(),{manifest:o,routeModules:l}=Kw(),{loaderData:c,matches:d}=Tx(),p=B.useMemo(()=>$_(n,e,d,o,i,"data"),[n,e,d,o,i]),y=B.useMemo(()=>$_(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,L=!1;if(e.forEach(V=>{var Y;let H=o.routes[V.route.id];!H||!H.hasLoader||(!p.some(ne=>ne.route.id===V.route.id)&&V.route.id in c&&((Y=l[V.route.id])!=null&&Y.shouldRevalidate)||H.hasClientLoader?L=!0:x.add(V.route.id))}),x.size===0)return[];let $=wx(n);return L&&x.size>0&&$.searchParams.set("_routes",e.filter(V=>x.has(V.route.id)).map(V=>V.route.id).join(",")),[$.pathname+$.search]},[c,i,o,p,e,n,l]),T=B.useMemo(()=>gx(y,o),[y,o]),I=Rx(y);return B.createElement(B.Fragment,null,v.map(x=>B.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>B.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),I.map(({key:x,link:L})=>B.createElement("link",{key:x,...L})))}function Cx(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Gw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gw&&(window.__reactRouterVersion="7.0.2")}catch{}function Px({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=mN({window:t,v5Compat:!0}));let o=i.current,[l,c]=B.useState({action:o.action,location:o.location}),d=B.useCallback(p=>{B.startTransition(()=>c(p))},[c]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.createElement(rx,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var Qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fh=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},x){let{basename:L}=B.useContext(Jn),$=typeof y=="string"&&Qw.test(y),V,H=!1;if(typeof y=="string"&&$&&(V=y,Gw))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),O=Li(k.pathname,L);k.origin===A.origin&&O!=null?y=O+k.search+k.hash:H=!0}catch{Xn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=zN(y,{relative:o}),[ne,se,Ie]=Ix(i,I),_e=Dx(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||_e(A)}let S=B.createElement("a",{...I,...Ie,href:V||Y,onClick:H||l?e:N,ref:Cx(x,se),target:p,"data-discover":!$&&t==="render"?"true":void 0});return ne&&!$?B.createElement(B.Fragment,null,S,B.createElement(Sx,{page:Y})):S});fh.displayName="Link";var kx=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},v){let T=Ol(c,{relative:y.relative}),I=Gr(),x=B.useContext(hh),{navigator:L,basename:$}=B.useContext(Jn),V=x!=null&&Mx(T)&&d===!0,H=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,Y=I.pathname,ne=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),ne=ne?ne.toLowerCase():null,H=H.toLowerCase()),ne&&$&&(ne=Li(ne,$)||ne);const se=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Ie=Y===H||!o&&Y.startsWith(H)&&Y.charAt(se)==="/",_e=ne!=null&&(ne===H||!o&&ne.startsWith(H)&&ne.charAt(H.length)==="/"),N={isActive:Ie,isPending:_e,isTransitioning:V},S=Ie?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Ie?"active":null,_e?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return B.createElement(fh,{...y,"aria-current":S,className:A,ref:v,style:k,to:c,viewTransition:d},typeof p=="function"?p(N):p)});kx.displayName="NavLink";var Nx=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=pc,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},x)=>{let L=Vx(),$=bx(d,{relative:y}),V=c.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&Qw.test(d),Y=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let se=ne.nativeEvent.submitter,Ie=(se==null?void 0:se.getAttribute("formmethod"))||c;L(se||ne.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:v,viewTransition:T})};return B.createElement("form",{ref:x,method:V,action:$,onSubmit:i?p:Y,...I,"data-discover":!H&&n==="render"?"true":void 0})});Nx.displayName="Form";function xx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yw(n){let e=B.useContext(Jo);return Xe(e,xx(n)),e}function Dx(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=ea(),p=Gr(),y=Ol(n,{relative:l});return B.useCallback(v=>{if(ux(v,e)){v.preventDefault();let T=t!==void 0?t:wl(p)===wl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var Ox=0,Lx=()=>`__${String(++Ox)}__`;function Vx(){let{router:n}=Yw("useSubmit"),{basename:e}=B.useContext(Jn),t=JN();return B.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=dx(i,e);if(o.navigate===!1){let v=o.fetcherKey||Lx();await n.fetch(v,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function bx(n,{relative:e}={}){let{basename:t}=B.useContext(Jn),i=B.useContext(yr);Xe(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Ol(n||".",{relative:e})},c=Gr();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();l.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Br([t,l.pathname])),wl(l)}function Mx(n,e={}){let t=B.useContext(Bw);Xe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Yw("useViewTransitionState"),o=Ol(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Li(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Li(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Mc(o.pathname,c)!=null||Mc(o.pathname,l)!=null}new TextEncoder;function Fx(){const{currentUser:n}=B.useContext(ji),e=async()=>{try{const t=Cs.currentUser;t&&await ws(xt(yt,"users",t.uid),{status:"offline"},{merge:!0}),await f1(Cs),console.log("User logged out successfully.")}catch(t){console.error("Error during logout:",t)}};return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"userdiv1",children:[J.jsx("p",{children:n==null?void 0:n.displayName}),J.jsx("button",{onClick:e,style:{marginLeft:"10px"},children:"Sign Out"})]})})}const ta=B.createContext(),Ux=({children:n})=>{const{currentUser:e}=B.useContext(ji),t={chatId:"null",user:{}},i=(c,d)=>{switch(d.type){case"CHANGE_USER":return{...c,user:d.payload,chatId:e.uid>d.payload.uid?e.uid+d.payload.uid:d.payload.uid+e.uid};default:return c}},[o,l]=B.useReducer(i,t);return J.jsx(ta.Provider,{value:{data:o,dispatch:l},children:n})},jx=()=>{const n=ea(),[e,t]=B.useState([]),[i,o]=B.useState({}),{dispatch:l}=B.useContext(ta),{currentUser:c}=B.useContext(ji),d=c==null?void 0:c.uid;B.useEffect(()=>{const y=bf(Sw(yt,"users"),v=>{const T=v.docs.map(I=>({...I.data(),uid:I.id}));t(T)});return()=>y()},[]),B.useEffect(()=>{if(!d)return;const y=xt(yt,"userChats",d),v=bf(y,T=>{if(T.exists()){const I=T.data();o(I)}});return()=>v()},[d]);const p=y=>{l({type:"CHANGE_USER",payload:y}),window.innerWidth<=768&&n(`/chat/${y.uid}`)};return d?J.jsx("div",{className:"chatsdiv",children:e.map(y=>{var v,T;return J.jsx("div",{className:"userdiv",onClick:()=>p(y),children:J.jsxs("div",{className:"userdiv-1",children:[J.jsxs("div",{className:"userdiv-2",style:{display:"flex"},children:[J.jsx("h4",{className:"usernameh3",children:y.displayName}),J.jsx("span",{style:{color:"#2cb32c"},children:y.status})]}),J.jsx("p",{className:"lastMessage",style:{marginLeft:"10px"},children:((T=(v=i[y.uid])==null?void 0:v.lastMessage)==null?void 0:T.text)||"No messages yet"})]})},y.uid)})}):J.jsx("p",{children:"Loading chats..."})},zx=()=>{const[n,e]=B.useState(""),[t,i]=B.useState(null),[o,l]=B.useState(!1),{currentUser:c}=B.useContext(ji),d=async()=>{const v=iN(Sw(yt,"users"),sN("displayName","==",n));try{(await uN(v)).forEach(I=>{i(I.data())})}catch{l(!0)}},p=v=>{v.code==="Enter"&&d()},y=async()=>{const v=c.uid>t.uid?c.uid+t.uid:t.uid+c.uid;try{(await Vw(xt(yt,"chats",v))).exists()||(await ws(xt(yt,"chats",v),{messages:[]}),await Si(xt(yt,"userChats",c.uid),{[v+".userInfo"]:{uid:t.uid,displayName:t.displayName},[v+".date"]:No()}),await Si(xt(yt,"userChats",t.uid),{[v+".userInfo"]:{uid:c.uid,displayName:c.displayName,photoURL:c.photoURL},[v+".date"]:No()}))}catch{}i(null),e("")};return J.jsxs("div",{className:"search",children:[J.jsx("div",{className:"searchForm",children:J.jsx("input",{type:"text",placeholder:"Find a user",onKeyDown:p,onChange:v=>e(v.target.value),value:n})}),o&&J.jsx("span",{children:"User not found!"}),t&&J.jsx("div",{className:"userChat",onClick:y,children:J.jsx("div",{className:"userChatInfo",children:J.jsx("span",{children:t.displayName})})})]})};function Bx(){return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"sidebar-heading",children:[J.jsx(Fx,{}),J.jsx(zx,{}),J.jsx("div",{className:"sidebar",children:J.jsx(jx,{})})]})})}const $x=({message:n})=>{const{currentUser:e}=B.useContext(ji);B.useContext(ta);const t=B.useRef(),i=o=>{const l=new Date(o.seconds*1e3),c=l.getHours(),d=l.getMinutes(),p=c%12||12,y=c>=12?"AM":"PM",v=d<10?"0":d+d;return`${p}:${v} ${y}`};return B.useEffect(()=>{var o;(o=t.current)==null||o.scrollIntoView({behavior:"smooth"})},[n]),J.jsxs("div",{ref:t,className:`message ${n.senderId===e.uid&&"owner"}`,children:[J.jsx("div",{className:"messageInfo",children:J.jsx("span",{children:i(n.date)})}),J.jsxs("div",{className:"messageContent",children:[J.jsx("p",{children:n.text}),n.img&&J.jsx("img",{src:n.img,alt:""})]})]})},qx=()=>{const[n,e]=B.useState([]),{data:t}=B.useContext(ta);return B.useEffect(()=>{const i=bf(xt(yt,"chats",t.chatId),o=>{o.exists()&&e(o.data().messages||[])});return()=>i()},[t.chatId]),J.jsx("div",{className:"messages",children:n.length===0?J.jsx("p",{children:"No messages yet. Start chatting!"}):n.map(i=>J.jsx($x,{message:i},i.id))})},kt=[];for(let n=0;n<256;++n)kt.push((n+256).toString(16).slice(1));function Hx(n,e=0){return(kt[n[e+0]]+kt[n[e+1]]+kt[n[e+2]]+kt[n[e+3]]+"-"+kt[n[e+4]]+kt[n[e+5]]+"-"+kt[n[e+6]]+kt[n[e+7]]+"-"+kt[n[e+8]]+kt[n[e+9]]+"-"+kt[n[e+10]]+kt[n[e+11]]+kt[n[e+12]]+kt[n[e+13]]+kt[n[e+14]]+kt[n[e+15]]).toLowerCase()}let uf;const Wx=new Uint8Array(16);function Kx(){if(!uf){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");uf=crypto.getRandomValues.bind(crypto)}return uf(Wx)}const Gx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),q_={randomUUID:Gx};function H_(n,e,t){if(q_.randomUUID&&!e&&!n)return q_.randomUUID();n=n||{};const i=n.random||(n.rng||Kx)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Hx(i)}const Qx=()=>{const[n,e]=B.useState(""),{currentUser:t}=B.useContext(ji),{data:i}=B.useContext(ta),o=async()=>{try{const l=t.uid>i.user.uid?t.uid+i.user.uid:i.user.uid+t.uid,c=xt(yt,"chats",l);(await Vw(c)).exists()?(await Si(c,{messages:cN({id:H_(),text:n,senderId:t.uid,date:at.now()})}),await Si(xt(yt,"userChats",t.uid),{[l+".lastMessage"]:{text:n},[l+".date"]:No()}),await Si(xt(yt,"userChats",i.user.uid),{[l+".lastMessage"]:{text:n},[l+".date"]:No()})):(await ws(c,{messages:[{id:H_(),text:n,senderId:t.uid,date:at.now()}]}),await ws(xt(yt,"userChats",t.uid),{},{merge:!0}),await ws(xt(yt,"userChats",i.user.uid),{},{merge:!0}),await Si(xt(yt,"userChats",t.uid),{[l+".userInfo"]:{uid:i.user.uid,displayName:i.user.displayName||"Unknown User",photoURL:i.user.photoURL||"https://example.com/default-avatar.png"},[l+".lastMessage"]:{text:n},[l+".date"]:No()}),await Si(xt(yt,"userChats",i.user.uid),{[l+".userInfo"]:{uid:t.uid,displayName:t.displayName||"Unknown User",photoURL:t.photoURL||"https://example.com/default-avatar.png"},[l+".lastMessage"]:{text:n},[l+".date"]:No()})),e("")}catch(l){console.error("Error sending message: ",l)}};return J.jsxs("div",{className:"input",children:[J.jsx("input",{type:"text",placeholder:"Type something...",onChange:l=>e(l.target.value),value:n}),J.jsx("div",{className:"send",children:J.jsx("button",{onClick:o,children:"Send "})})]})},Xw=()=>{var l,c;const{data:n}=B.useContext(ta),e=Gr(),t=ea(),i=e.pathname.startsWith("/chat");function o(){t("/")}return J.jsxs("div",{className:`chat ${i?"visible":""}`,children:[J.jsxs("div",{className:"chatInfo",children:[J.jsx("button",{className:"backbutton",onClick:o,children:"←"}),J.jsx("span",{children:((l=n.user)==null?void 0:l.displayName)||"Select a user to chat"}),J.jsx("span",{style:{color:"#29ff29",fontSize:"1rem"},children:((c=n.user)==null?void 0:c.status)||""})]}),n.chatId!=="null"?J.jsxs(J.Fragment,{children:[J.jsx(qx,{}),J.jsx(Qx,{})]}):J.jsx("p",{style:{padding:"20px"},children:"No user selected."})]})};function Yx(){return J.jsxs("div",{className:"homepage",children:[J.jsx(Bx,{}),J.jsx(Xw,{})]})}function Xx(){const[n,e]=B.useState(!1),[t,i]=B.useState(!1),o=ea(),l=async c=>{c.preventDefault();const d=c.target[0].value,p=c.target[1].value;try{await a1(Cs,d,p);const y=Cs.currentUser;await Si(xt(yt,"users",y.uid),{status:"online"}),o("/")}catch{e(!0)}};return J.jsxs(J.Fragment,{children:[J.jsx("center",{children:J.jsx("h1",{children:"Login"})}),J.jsxs("form",{onSubmit:l,style:{width:"340px",height:"34vh"},children:[J.jsx("input",{required:!0,type:"email",placeholder:"Email"}),J.jsx("input",{required:!0,type:"password",placeholder:"Password"}),J.jsx("button",{disabled:t,children:"Login"}),t&&"Uploading, please wait...",n&&J.jsx("span",{children:"Something went wrong..."}),J.jsxs("p",{children:["Have an account? ",J.jsx(fh,{to:"/register",children:"register"})]})]})]})}const Jx=new br;function Zx(){const[n,e]=B.useState(!1),[t,i]=B.useState(!1),o=ea(),l=async()=>{try{const p=(await O1(Cs,Jx)).user;await ws(xt(yt,"users",p.uid),{displayName:p.displayName,email:p.email,status:"offline"}),o("/")}catch(d){console.error("Google Sign-In Error:",d.message),e(!0)}},c=async d=>{d.preventDefault(),i(!0);const p=d.target[0].value,y=d.target[1].value,v=d.target[2].value;try{const I=(await o1(Cs,y,v)).user;await u1(I,{displayName:p}),await ws(xt(yt,"users",I.uid),{displayName:p,email:y,status:"offline"}),console.log("User registered successfully"),o("/")}catch(T){console.error("Registration Error:",T.message),e(!0)}finally{i(!1)}};return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"register-div",children:[J.jsx("center",{children:J.jsx("h1",{children:"Register"})}),J.jsxs("form",{onSubmit:c,children:[J.jsx("input",{required:!0,type:"text",placeholder:"Display Name"}),J.jsx("input",{required:!0,type:"email",placeholder:"Email"}),J.jsx("input",{required:!0,type:"password",placeholder:"Password"}),J.jsx("button",{disabled:t,children:"Signup"}),J.jsx("button",{type:"button",onClick:l,children:"Sign up with Google"}),t&&"Uploading, please wait...",n&&J.jsx("span",{children:"Something went wrong..."}),J.jsxs("p",{children:["Have an account? ",J.jsx(fh,{to:"/login",children:"Login"})]})]})]})})}function eD(){const{currentUser:n}=B.useContext(ji),e=({children:t})=>n?t:J.jsx(nx,{to:"/login"});return J.jsx(Px,{basename:"/openchat/",children:J.jsxs(ix,{children:[J.jsx(sl,{path:"/",element:J.jsx(e,{children:J.jsx(Yx,{})})}),J.jsx(sl,{path:"/login",element:J.jsx(Xx,{})}),J.jsx(sl,{path:"/register",element:J.jsx(Zx,{})}),J.jsx(sl,{path:"/chat/:userId",element:J.jsx(e,{children:J.jsx(Xw,{})})})]})})}uT.createRoot(document.getElementById("root")).render(J.jsx(fN,{children:J.jsx(Ux,{children:J.jsx(B.StrictMode,{children:J.jsx(eD,{})})})}));
