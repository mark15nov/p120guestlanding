(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},wi={},ys={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Lc=Symbol.for("react.portal"),Ic=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),$c=Symbol.for("react.memo"),Vc=Symbol.for("react.lazy"),ia=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,js={};function En(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=En.prototype;function ao(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}var so=ao.prototype=new Ns;so.constructor=ao;ws(so,En.prototype);so.isPureReactComponent=!0;var la=Array.isArray,Ss=Object.prototype.hasOwnProperty,uo={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Ss.call(t,r)&&!Es.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:fr,type:e,key:l,ref:o,props:i,_owner:uo.current}}function Wc(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function co(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Qc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function Fi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qc(""+e.key):t.toString(36)}function Or(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fr:case Lc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fi(o,0):r,la(i)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),Or(i,t,n,"",function(d){return d})):i!=null&&(co(i)&&(i=Wc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",la(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Fi(l,s);o+=Or(l,t,n,u,i)}else if(u=Hc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Fi(l,s++),o+=Or(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function kr(e,t,n){if(e==null)return e;var r=[],i=0;return Or(e,r,"","",function(l){return t.call(n,l,i++)}),r}function qc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Br={transition:null},Yc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Br,ReactCurrentOwner:uo};function Cs(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!co(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=En;A.Fragment=Ic;A.Profiler=Fc;A.PureComponent=ao;A.StrictMode=Mc;A.Suspense=Uc;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yc;A.act=Cs;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=uo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ss.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:fr,type:e.type,key:i,ref:l,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Oc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dc,_context:e},e.Consumer=e};A.createElement=bs;A.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Bc,render:e}};A.isValidElement=co;A.lazy=function(e){return{$$typeof:Vc,_payload:{_status:-1,_result:e},_init:qc}};A.memo=function(e,t){return{$$typeof:$c,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}};A.unstable_act=Cs;A.useCallback=function(e,t){return ge.current.useCallback(e,t)};A.useContext=function(e){return ge.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};A.useEffect=function(e,t){return ge.current.useEffect(e,t)};A.useId=function(){return ge.current.useId()};A.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ge.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};A.useRef=function(e){return ge.current.useRef(e)};A.useState=function(e){return ge.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ge.current.useTransition()};A.version="18.3.1";ys.exports=A;var Z=ys.exports;const Kc=Ac(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Z,Gc=Symbol.for("react.element"),Jc=Symbol.for("react.fragment"),Zc=Object.prototype.hasOwnProperty,ed=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,td={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Zc.call(t,r)&&!td.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gc,type:e,key:l,ref:o,props:i,_owner:ed.current}}wi.Fragment=Jc;wi.jsx=zs;wi.jsxs=zs;vs.exports=wi;var a=vs.exports,ml={},Ps={exports:{}},Pe={},_s={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,_){var R=N.length;N.push(_);e:for(;0<R;){var B=R-1>>>1,D=N[B];if(0<i(D,_))N[B]=_,N[R]=D,R=B;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],R=N.pop();if(R!==_){N[0]=R;e:for(var B=0,D=N.length,Ze=D>>>1;B<Ze;){var Te=2*(B+1)-1,Tt=N[Te],Ne=Te+1,At=N[Ne];if(0>i(Tt,R))Ne<D&&0>i(At,Tt)?(N[B]=At,N[Ne]=R,B=Ne):(N[B]=Tt,N[Te]=R,B=Te);else if(Ne<D&&0>i(At,R))N[B]=At,N[Ne]=R,B=Ne;else break e}}return _}function i(N,_){var R=N.sortIndex-_.sortIndex;return R!==0?R:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],m=1,g=null,h=3,k=!1,w=!1,j=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=N)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function x(N){if(j=!1,p(N),!w)if(n(u)!==null)w=!0,_t(S);else{var _=n(d);_!==null&&Rt(x,_.startTime-N)}}function S(N,_){w=!1,j&&(j=!1,f(z),z=-1),k=!0;var R=h;try{for(p(_),g=n(u);g!==null&&(!(g.expirationTime>_)||N&&!re());){var B=g.callback;if(typeof B=="function"){g.callback=null,h=g.priorityLevel;var D=B(g.expirationTime<=_);_=e.unstable_now(),typeof D=="function"?g.callback=D:g===n(u)&&r(u),p(_)}else r(u);g=n(u)}if(g!==null)var Ze=!0;else{var Te=n(d);Te!==null&&Rt(x,Te.startTime-_),Ze=!1}return Ze}finally{g=null,h=R,k=!1}}var P=!1,E=null,z=-1,O=5,T=-1;function re(){return!(e.unstable_now()-T<O)}function Re(){if(E!==null){var N=e.unstable_now();T=N;var _=!0;try{_=E(!0,N)}finally{_?Qe():(P=!1,E=null)}}else P=!1}var Qe;if(typeof c=="function")Qe=function(){c(Re)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,xr=Xt.port2;Xt.port1.onmessage=Re,Qe=function(){xr.postMessage(null)}}else Qe=function(){F(Re,0)};function _t(N){E=N,P||(P=!0,Qe())}function Rt(N,_){z=F(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,_t(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var R=h;h=_;try{return N()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=h;h=N;try{return _()}finally{h=R}},e.unstable_scheduleCallback=function(N,_,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=R+D,N={id:m++,callback:_,priorityLevel:N,startTime:R,expirationTime:D,sortIndex:-1},R>B?(N.sortIndex=R,t(d,N),n(u)===null&&N===n(d)&&(j?(f(z),z=-1):j=!0,Rt(x,R-B))):(N.sortIndex=D,t(u,N),w||k||(w=!0,_t(S))),N},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(N){var _=h;return function(){var R=h;h=_;try{return N.apply(this,arguments)}finally{h=R}}}})(Rs);_s.exports=Rs;var nd=_s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=Z,ze=nd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,Kn={};function Yt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=Object.prototype.hasOwnProperty,id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},sa={};function ld(e){return hl.call(sa,e)?!0:hl.call(aa,e)?!1:id.test(e)?sa[e]=!0:(aa[e]=!0,!1)}function od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ad(e,t,n,r){if(t===null||typeof t>"u"||od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fo=/[\-:]([a-z])/g;function po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fo,po);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fo,po);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fo,po);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mo(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ad(t,n,i,r)&&(n=null),r||i===null?ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),As=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),go=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),xo=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Is=Symbol.for("react.offscreen"),ua=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Di;function Mn(e){if(Di===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Di=t&&t[1]||""}return`
`+Di+e}var Oi=!1;function Bi(e,t){if(!e||Oi)return"";Oi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Oi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function sd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Bi(e.type,!1),e;case 11:return e=Bi(e.type.render,!1),e;case 1:return e=Bi(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case Zt:return"Portal";case gl:return"Profiler";case ho:return"StrictMode";case xl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ls:return(e.displayName||"Context")+".Consumer";case As:return(e._context.displayName||"Context")+".Provider";case go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xo:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cd(e){var t=Ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=cd(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ds(e,t){t=t.checked,t!=null&&mo(e,"checked",t,!1)}function wl(e,t){Ds(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Fn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Os(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){dd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function El(e,t){if(t){if(fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,pn=null,mn=null;function ma(e){if(e=hr(e)){if(typeof zl!="function")throw Error(y(280));var t=e.stateNode;t&&(t=bi(t),zl(e.stateNode,e.type,t))}}function Hs(e){pn?mn?mn.push(e):mn=[e]:pn=e}function Ws(){if(pn){var e=pn,t=mn;if(mn=pn=null,ma(e),t)for(e=0;e<t.length;e++)ma(t[e])}}function Qs(e,t){return e(t)}function qs(){}var Ui=!1;function Ys(e,t,n){if(Ui)return e(t,n);Ui=!0;try{return Qs(e,t,n)}finally{Ui=!1,(pn!==null||mn!==null)&&(qs(),Ws())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Pl=!1;if(lt)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Pl=!1}function pd(e,t,n,r,i,l,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Un=!1,Jr=null,Zr=!1,_l=null,md={onError:function(e){Un=!0,Jr=e}};function hd(e,t,n,r,i,l,o,s,u){Un=!1,Jr=null,pd.apply(md,arguments)}function gd(e,t,n,r,i,l,o,s,u){if(hd.apply(this,arguments),Un){if(Un){var d=Jr;Un=!1,Jr=null}else throw Error(y(198));Zr||(Zr=!0,_l=d)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(Kt(e)!==e)throw Error(y(188))}function xd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ha(i),e;if(l===r)return ha(i),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Xs(e){return e=xd(e),e!==null?Gs(e):null}function Gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gs(e);if(t!==null)return t;e=e.sibling}return null}var Js=ze.unstable_scheduleCallback,ga=ze.unstable_cancelCallback,vd=ze.unstable_shouldYield,yd=ze.unstable_requestPaint,J=ze.unstable_now,kd=ze.unstable_getCurrentPriorityLevel,yo=ze.unstable_ImmediatePriority,Zs=ze.unstable_UserBlockingPriority,ei=ze.unstable_NormalPriority,wd=ze.unstable_LowPriority,eu=ze.unstable_IdlePriority,ji=null,Ge=null;function jd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Ed,Nd=Math.log,Sd=Math.LN2;function Ed(e){return e>>>=0,e===0?32:31-(Nd(e)/Sd|0)|0}var Sr=64,Er=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Dn(s):(l&=o,l!==0&&(r=Dn(l)))}else o=n&~i,o!==0?r=Dn(o):l!==0&&(r=Dn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ve(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=bd(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ru,wo,iu,lu,ou,Tl=!1,br=[],xt=null,vt=null,yt=null,Jn=new Map,Zn=new Map,pt=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function _n(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=hr(t),t!==null&&wo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _d(e,t,n,r,i){switch(t){case"focusin":return xt=_n(xt,e,t,n,r,i),!0;case"dragenter":return vt=_n(vt,e,t,n,r,i),!0;case"mouseover":return yt=_n(yt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Jn.set(l,_n(Jn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Zn.set(l,_n(Zn.get(l)||null,e,t,n,r,i)),!0}return!1}function au(e){var t=Dt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ks(n),t!==null){e.blockedOn=t,ou(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=hr(n),t!==null&&wo(t),e.blockedOn=n,!1;t.shift()}return!0}function va(e,t,n){Ur(e)&&n.delete(t)}function Rd(){Tl=!1,xt!==null&&Ur(xt)&&(xt=null),vt!==null&&Ur(vt)&&(vt=null),yt!==null&&Ur(yt)&&(yt=null),Jn.forEach(va),Zn.forEach(va)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Rd)))}function er(e){function t(i){return Rn(i,e)}if(0<br.length){Rn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&Rn(xt,e),vt!==null&&Rn(vt,e),yt!==null&&Rn(yt,e),Jn.forEach(t),Zn.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)au(n),n.blockedOn===null&&pt.shift()}var hn=ut.ReactCurrentBatchConfig,ni=!0;function Td(e,t,n,r){var i=$,l=hn.transition;hn.transition=null;try{$=1,jo(e,t,n,r)}finally{$=i,hn.transition=l}}function Ad(e,t,n,r){var i=$,l=hn.transition;hn.transition=null;try{$=4,jo(e,t,n,r)}finally{$=i,hn.transition=l}}function jo(e,t,n,r){if(ni){var i=Al(e,t,n,r);if(i===null)Ji(e,t,r,ri,n),xa(e,r);else if(_d(i,e,t,n,r))r.stopPropagation();else if(xa(e,r),t&4&&-1<Pd.indexOf(e)){for(;i!==null;){var l=hr(i);if(l!==null&&ru(l),l=Al(e,t,n,r),l===null&&Ji(e,t,r,ri,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ji(e,t,r,null,n)}}var ri=null;function Al(e,t,n,r){if(ri=null,e=vo(r),e=Dt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ks(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case yo:return 1;case Zs:return 4;case ei:case wd:return 16;case eu:return 536870912;default:return 16}default:return 16}}var ht=null,No=null,$r=null;function uu(){if($r)return $r;var e,t=No,n=t.length,r,i="value"in ht?ht.value:ht.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return $r=i.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ya(){return!1}function _e(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cr:ya,this.isPropagationStopped=ya,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=_e(bn),mr=X({},bn,{view:0,detail:0}),Ld=_e(mr),Vi,Hi,Tn,Ni=X({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Vi=e.screenX-Tn.screenX,Hi=e.screenY-Tn.screenY):Hi=Vi=0,Tn=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),ka=_e(Ni),Id=X({},Ni,{dataTransfer:0}),Md=_e(Id),Fd=X({},mr,{relatedTarget:0}),Wi=_e(Fd),Dd=X({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=_e(Dd),Bd=X({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=_e(Bd),$d=X({},bn,{data:0}),wa=_e($d),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wd[e])?!!t[e]:!1}function Eo(){return Qd}var qd=X({},mr,{key:function(e){if(e.key){var t=Vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yd=_e(qd),Kd=X({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=_e(Kd),Xd=X({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),Gd=_e(Xd),Jd=X({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zd=_e(Jd),ef=X({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=_e(ef),nf=[9,13,27,32],bo=lt&&"CompositionEvent"in window,$n=null;lt&&"documentMode"in document&&($n=document.documentMode);var rf=lt&&"TextEvent"in window&&!$n,cu=lt&&(!bo||$n&&8<$n&&11>=$n),Na=" ",Sa=!1;function du(e,t){switch(e){case"keyup":return nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function lf(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(Sa=!0,Na);case"textInput":return e=t.data,e===Na&&Sa?null:e;default:return null}}function of(e,t){if(tn)return e==="compositionend"||!bo&&du(e,t)?(e=uu(),$r=No=ht=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!af[e.type]:t==="textarea"}function pu(e,t,n,r){Hs(r),t=ii(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,tr=null;function sf(e){Su(e,0)}function Si(e){var t=ln(e);if(Fs(t))return e}function uf(e,t){if(e==="change")return t}var mu=!1;if(lt){var Qi;if(lt){var qi="oninput"in document;if(!qi){var ba=document.createElement("div");ba.setAttribute("oninput","return;"),qi=typeof ba.oninput=="function"}Qi=qi}else Qi=!1;mu=Qi&&(!document.documentMode||9<document.documentMode)}function Ca(){Vn&&(Vn.detachEvent("onpropertychange",hu),tr=Vn=null)}function hu(e){if(e.propertyName==="value"&&Si(tr)){var t=[];pu(t,tr,e,vo(e)),Ys(sf,t)}}function cf(e,t,n){e==="focusin"?(Ca(),Vn=t,tr=n,Vn.attachEvent("onpropertychange",hu)):e==="focusout"&&Ca()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(tr)}function ff(e,t){if(e==="click")return Si(t)}function pf(e,t){if(e==="input"||e==="change")return Si(t)}function mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:mf;function nr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hl.call(t,i)||!We(e[i],t[i]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gu(n.ownerDocument.documentElement,n)){if(r!==null&&Co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Pa(n,l);var o=Pa(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=lt&&"documentMode"in document&&11>=document.documentMode,nn=null,Ll=null,Hn=null,Il=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||nn==null||nn!==Gr(r)||(r=nn,"selectionStart"in r&&Co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&nr(Hn,r)||(Hn=r,r=ii(Ll,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Yi={},vu={};lt&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ei(e){if(Yi[e])return Yi[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vu)return Yi[e]=t[n];return e}var yu=Ei("animationend"),ku=Ei("animationiteration"),wu=Ei("animationstart"),ju=Ei("transitionend"),Nu=new Map,Ra="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Nu.set(e,t),Yt(t,[e])}for(var Ki=0;Ki<Ra.length;Ki++){var Xi=Ra[Ki],xf=Xi.toLowerCase(),vf=Xi[0].toUpperCase()+Xi.slice(1);Ct(xf,"on"+vf)}Ct(yu,"onAnimationEnd");Ct(ku,"onAnimationIteration");Ct(wu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(ju,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Su(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;Ta(i,s,d),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;Ta(i,s,d),l=u}}}if(Zr)throw e=_l,Zr=!1,_l=null,e}function W(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(Eu(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),Eu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Pr]){e[Pr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(yf.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Gi("selectionchange",!1,t))}}function Eu(e,t,n,r){switch(su(t)){case 1:var i=Td;break;case 4:i=Ad;break;default:i=jo}n=i.bind(null,t,n,e),i=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ji(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Dt(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Ys(function(){var d=l,m=vo(n),g=[];e:{var h=Nu.get(e);if(h!==void 0){var k=So,w=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":k=Yd;break;case"focusin":w="focus",k=Wi;break;case"focusout":w="blur",k=Wi;break;case"beforeblur":case"afterblur":k=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gd;break;case yu:case ku:case wu:k=Od;break;case ju:k=Zd;break;case"scroll":k=Ld;break;case"wheel":k=tf;break;case"copy":case"cut":case"paste":k=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ja}var j=(t&4)!==0,F=!j&&e==="scroll",f=j?h!==null?h+"Capture":null:h;j=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Gn(c,f),x!=null&&j.push(ir(c,x,p)))),F)break;c=c.return}0<j.length&&(h=new k(h,w,null,n,m),g.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==Cl&&(w=n.relatedTarget||n.fromElement)&&(Dt(w)||w[ot]))break e;if((k||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=d,w=w?Dt(w):null,w!==null&&(F=Kt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(j=ka,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=ja,x="onPointerLeave",f="onPointerEnter",c="pointer"),F=k==null?h:ln(k),p=w==null?h:ln(w),h=new j(x,c+"leave",k,n,m),h.target=F,h.relatedTarget=p,x=null,Dt(m)===d&&(j=new j(f,c+"enter",w,n,m),j.target=p,j.relatedTarget=F,x=j),F=x,k&&w)t:{for(j=k,f=w,c=0,p=j;p;p=Gt(p))c++;for(p=0,x=f;x;x=Gt(x))p++;for(;0<c-p;)j=Gt(j),c--;for(;0<p-c;)f=Gt(f),p--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=Gt(j),f=Gt(f)}j=null}else j=null;k!==null&&Aa(g,h,k,j,!1),w!==null&&F!==null&&Aa(g,F,w,j,!0)}}e:{if(h=d?ln(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var S=uf;else if(Ea(h))if(mu)S=pf;else{S=df;var P=cf}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=ff);if(S&&(S=S(e,d))){pu(g,S,n,m);break e}P&&P(e,h,d),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&jl(h,"number",h.value)}switch(P=d?ln(d):window,e){case"focusin":(Ea(P)||P.contentEditable==="true")&&(nn=P,Ll=d,Hn=null);break;case"focusout":Hn=Ll=nn=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,_a(g,n,m);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":_a(g,n,m)}var E;if(bo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else tn?du(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(cu&&n.locale!=="ko"&&(tn||z!=="onCompositionStart"?z==="onCompositionEnd"&&tn&&(E=uu()):(ht=m,No="value"in ht?ht.value:ht.textContent,tn=!0)),P=ii(d,z),0<P.length&&(z=new wa(z,e,null,n,m),g.push({event:z,listeners:P}),E?z.data=E:(E=fu(n),E!==null&&(z.data=E)))),(E=rf?lf(e,n):of(e,n))&&(d=ii(d,"onBeforeInput"),0<d.length&&(m=new wa("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=E))}Su(g,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Gn(e,n),l!=null&&r.unshift(ir(e,l,i)),l=Gn(e,t),l!=null&&r.push(ir(e,l,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Gn(n,l),u!=null&&o.unshift(ir(n,u,s))):i||(u=Gn(n,l),u!=null&&o.push(ir(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(wf,"")}function _r(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(y(425))}function li(){}var Ml=null,Fl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,jf=typeof clearTimeout=="function"?clearTimeout:void 0,Ia=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ia<"u"?function(e){return Ia.resolve(null).then(e).catch(Sf)}:Ol;function Sf(e){setTimeout(function(){throw e})}function Zi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);er(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Cn,lr="__reactProps$"+Cn,ot="__reactContainer$"+Cn,Bl="__reactEvents$"+Cn,Ef="__reactListeners$"+Cn,bf="__reactHandles$"+Cn;function Dt(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Xe])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Xe]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function bi(e){return e[lr]||null}var Ul=[],on=-1;function zt(e){return{current:e}}function Q(e){0>on||(e.current=Ul[on],Ul[on]=null,on--)}function H(e,t){on++,Ul[on]=e.current,e.current=t}var bt={},pe=zt(bt),ke=zt(!1),Vt=bt;function yn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function oi(){Q(ke),Q(pe)}function Fa(e,t,n){if(pe.current!==bt)throw Error(y(168));H(pe,t),H(ke,n)}function bu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,ud(e)||"Unknown",i));return X({},n,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Vt=pe.current,H(pe,e),H(ke,ke.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=bu(e,t,Vt),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(pe),H(pe,e)):Q(ke),H(ke,n)}var tt=null,Ci=!1,el=!1;function Cu(e){tt===null?tt=[e]:tt.push(e)}function Cf(e){Ci=!0,Cu(e)}function Pt(){if(!el&&tt!==null){el=!0;var e=0,t=$;try{var n=tt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Ci=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Js(yo,Pt),i}finally{$=t,el=!1}}return null}var an=[],sn=0,si=null,ui=0,Ae=[],Le=0,Ht=null,nt=1,rt="";function Mt(e,t){an[sn++]=ui,an[sn++]=si,si=e,ui=t}function zu(e,t,n){Ae[Le++]=nt,Ae[Le++]=rt,Ae[Le++]=Ht,Ht=e;var r=nt;e=rt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var l=32-Ve(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nt=1<<32-Ve(t)+i|n<<i|r,rt=l+e}else nt=1<<l|n<<i|r,rt=e}function zo(e){e.return!==null&&(Mt(e,1),zu(e,1,0))}function Po(e){for(;e===si;)si=an[--sn],an[sn]=null,ui=an[--sn],an[sn]=null;for(;e===Ht;)Ht=Ae[--Le],Ae[Le]=null,rt=Ae[--Le],Ae[Le]=null,nt=Ae[--Le],Ae[Le]=null}var Ce=null,be=null,q=!1,$e=null;function Pu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,be=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,be=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(q){var t=be;if(t){var n=t;if(!Oa(e,t)){if($l(e))throw Error(y(418));t=kt(n.nextSibling);var r=Ce;t&&Oa(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,q=!1,Ce=e)}}else{if($l(e))throw Error(y(418));e.flags=e.flags&-4097|2,q=!1,Ce=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Rr(e){if(e!==Ce)return!1;if(!q)return Ba(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=be)){if($l(e))throw _u(),Error(y(418));for(;t;)Pu(e,t),t=kt(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ce?kt(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=be;e;)e=kt(e.nextSibling)}function kn(){be=Ce=null,q=!1}function _o(e){$e===null?$e=[e]:$e.push(e)}var zf=ut.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Ru(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=St(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=al(p,f.mode,x),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,x){var S=p.type;return S===en?m(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&Ua(S)===c.type)?(x=i(c,p.props),x.ref=An(f,c,p),x.return=f,x):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=An(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sl(p,f.mode,x),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function m(f,c,p,x,S){return c===null||c.tag!==7?(c=$t(p,f.mode,x,S),c.return=f,c):(c=i(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=al(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return p=Xr(c.type,c.key,c.props,null,f.mode,p),p.ref=An(f,null,c),p.return=f,p;case Zt:return c=sl(c,f.mode,p),c.return=f,c;case dt:var x=c._init;return g(f,x(c._payload),p)}if(Fn(c)||zn(c))return c=$t(c,f.mode,p,null),c.return=f,c;Tr(f,c)}return null}function h(f,c,p,x){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:return p.key===S?u(f,c,p,x):null;case Zt:return p.key===S?d(f,c,p,x):null;case dt:return S=p._init,h(f,c,S(p._payload),x)}if(Fn(p)||zn(p))return S!==null?null:m(f,c,p,x,null);Tr(f,p)}return null}function k(f,c,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wr:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,S);case Zt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,S);case dt:var P=x._init;return k(f,c,p,P(x._payload),S)}if(Fn(x)||zn(x))return f=f.get(p)||null,m(c,f,x,S,null);Tr(c,x)}return null}function w(f,c,p,x){for(var S=null,P=null,E=c,z=c=0,O=null;E!==null&&z<p.length;z++){E.index>z?(O=E,E=null):O=E.sibling;var T=h(f,E,p[z],x);if(T===null){E===null&&(E=O);break}e&&E&&T.alternate===null&&t(f,E),c=l(T,c,z),P===null?S=T:P.sibling=T,P=T,E=O}if(z===p.length)return n(f,E),q&&Mt(f,z),S;if(E===null){for(;z<p.length;z++)E=g(f,p[z],x),E!==null&&(c=l(E,c,z),P===null?S=E:P.sibling=E,P=E);return q&&Mt(f,z),S}for(E=r(f,E);z<p.length;z++)O=k(E,f,z,p[z],x),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?z:O.key),c=l(O,c,z),P===null?S=O:P.sibling=O,P=O);return e&&E.forEach(function(re){return t(f,re)}),q&&Mt(f,z),S}function j(f,c,p,x){var S=zn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var P=S=null,E=c,z=c=0,O=null,T=p.next();E!==null&&!T.done;z++,T=p.next()){E.index>z?(O=E,E=null):O=E.sibling;var re=h(f,E,T.value,x);if(re===null){E===null&&(E=O);break}e&&E&&re.alternate===null&&t(f,E),c=l(re,c,z),P===null?S=re:P.sibling=re,P=re,E=O}if(T.done)return n(f,E),q&&Mt(f,z),S;if(E===null){for(;!T.done;z++,T=p.next())T=g(f,T.value,x),T!==null&&(c=l(T,c,z),P===null?S=T:P.sibling=T,P=T);return q&&Mt(f,z),S}for(E=r(f,E);!T.done;z++,T=p.next())T=k(E,f,z,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?z:T.key),c=l(T,c,z),P===null?S=T:P.sibling=T,P=T);return e&&E.forEach(function(Re){return t(f,Re)}),q&&Mt(f,z),S}function F(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===en&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:e:{for(var S=p.key,P=c;P!==null;){if(P.key===S){if(S=p.type,S===en){if(P.tag===7){n(f,P.sibling),c=i(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&Ua(S)===P.type){n(f,P.sibling),c=i(P,p.props),c.ref=An(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===en?(c=$t(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Xr(p.type,p.key,p.props,null,f.mode,x),x.ref=An(f,c,p),x.return=f,f=x)}return o(f);case Zt:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=sl(p,f.mode,x),c.return=f,f=c}return o(f);case dt:return P=p._init,F(f,c,P(p._payload),x)}if(Fn(p))return w(f,c,p,x);if(zn(p))return j(f,c,p,x);Tr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=al(p,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return F}var wn=Ru(!0),Tu=Ru(!1),ci=zt(null),di=null,un=null,Ro=null;function To(){Ro=un=di=null}function Ao(e){var t=ci.current;Q(ci),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){di=e,Ro=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(di===null)throw Error(y(308));un=e,di.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Ot=null;function Lo(e){Ot===null?Ot=[e]:Ot.push(e)}function Au(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lo(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,Lo(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;ft=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?l=d:o.next=d,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(l!==null){var g=i.baseState;o=0,m=d=u=null,s=l;do{var h=s.lane,k=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,j=s;switch(h=t,k=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){g=w.call(k,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,h=typeof w=="function"?w.call(k,g,h):w,h==null)break e;g=X({},g,h);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=k,u=g):m=m.next=k,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Qt|=o,e.lanes=o,e.memoizedState=g}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var gr={},Je=zt(gr),or=zt(gr),ar=zt(gr);function Bt(e){if(e===gr)throw Error(y(174));return e}function Mo(e,t){switch(H(ar,t),H(or,e),H(Je,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}Q(Je),H(Je,t)}function jn(){Q(Je),Q(or),Q(ar)}function Iu(e){Bt(ar.current);var t=Bt(Je.current),n=Sl(t,e.type);t!==n&&(H(or,e),H(Je,n))}function Fo(e){or.current===e&&(Q(Je),Q(or))}var Y=zt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function Do(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Wr=ut.ReactCurrentDispatcher,nl=ut.ReactCurrentBatchConfig,Wt=0,K=null,te=null,ie=null,mi=!1,Wn=!1,sr=0,Pf=0;function ce(){throw Error(y(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,i,l){if(Wt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?Af:Lf,e=n(r,i),Wn){l=0;do{if(Wn=!1,sr=0,25<=l)throw Error(y(301));l+=1,ie=te=null,t.updateQueue=null,Wr.current=If,e=n(r,i)}while(Wn)}if(Wr.current=hi,t=te!==null&&te.next!==null,Wt=0,ie=te=K=null,mi=!1,t)throw Error(y(300));return e}function Uo(){var e=sr!==0;return sr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(y(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function ur(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=De(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,d=l;do{var m=d.lane;if((Wt&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,o=r):u=u.next=g,K.lanes|=m,Qt|=m}d=d.next}while(d!==null&&d!==l);u===null?o=r:u.next=s,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,K.lanes|=l,Qt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=De(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);We(l,t.memoizedState)||(ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Mu(){}function Fu(e,t){var n=K,r=De(),i=t(),l=!We(r.memoizedState,i);if(l&&(r.memoizedState=i,ye=!0),r=r.queue,$o(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,cr(9,Ou.bind(null,n,r,i,t),void 0,null),le===null)throw Error(y(349));Wt&30||Du(n,t,i)}return i}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ou(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&$u(e)}function Bu(e,t,n){return n(function(){Uu(t)&&$u(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function $u(e){var t=at(e,1);t!==null&&He(t,e,1,-1)}function Ha(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,K,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vu(){return De().memoizedState}function Qr(e,t,n,r){var i=Ke();K.flags|=e,i.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function zi(e,t,n,r){var i=De();r=r===void 0?null:r;var l=void 0;if(te!==null){var o=te.memoizedState;if(l=o.destroy,r!==null&&Oo(r,o.deps)){i.memoizedState=cr(t,n,l,r);return}}K.flags|=e,i.memoizedState=cr(1|t,n,l,r)}function Wa(e,t){return Qr(8390656,8,e,t)}function $o(e,t){return zi(2048,8,e,t)}function Hu(e,t){return zi(4,2,e,t)}function Wu(e,t){return zi(4,4,e,t)}function Qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,zi(4,4,Qu.bind(null,t,e),n)}function Vo(){}function Yu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ku(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t,n){return Wt&21?(We(n,t)||(n=tu(),K.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function _f(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{$=n,nl.transition=r}}function Gu(){return De().memoizedState}function Rf(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ju(e))Zu(t,n);else if(n=Au(e,t,n,r),n!==null){var i=he();He(n,e,r,i),ec(n,t,r)}}function Tf(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))Zu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,We(s,o)){var u=t.interleaved;u===null?(i.next=i,Lo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Au(e,t,i,r),n!==null&&(i=he(),He(n,e,r,i),ec(n,t,r))}}function Ju(e){var t=e.alternate;return e===K||t!==null&&t===K}function Zu(e,t){Wn=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ec(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}var hi={readContext:Fe,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Af={readContext:Fe,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Qu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:Vo,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=_f.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Ke();if(q){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),le===null)throw Error(y(349));Wt&30||Du(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Wa(Bu.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,Ou.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ke(),t=le.identifierPrefix;if(q){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:Fe,useCallback:Yu,useContext:Fe,useEffect:$o,useImperativeHandle:qu,useInsertionEffect:Hu,useLayoutEffect:Wu,useMemo:Ku,useReducer:rl,useRef:Vu,useState:function(){return rl(ur)},useDebugValue:Vo,useDeferredValue:function(e){var t=De();return Xu(t,te.memoizedState,e)},useTransition:function(){var e=rl(ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Fu,useId:Gu,unstable_isNewReconciler:!1},If={readContext:Fe,useCallback:Yu,useContext:Fe,useEffect:$o,useImperativeHandle:qu,useInsertionEffect:Hu,useLayoutEffect:Wu,useMemo:Ku,useReducer:il,useRef:Vu,useState:function(){return il(ur)},useDebugValue:Vo,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Xu(t,te.memoizedState,e)},useTransition:function(){var e=il(ur)[0],t=De().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Fu,useId:Gu,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),l=it(r,i);l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,i),t!==null&&(He(t,e,i,r),Hr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),l=it(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,i),t!==null&&(He(t,e,i,r),Hr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Nt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=wt(e,i,r),t!==null&&(He(t,e,r,n),Hr(t,e,r))}};function Qa(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(i,l):!0}function tc(e,t,n){var r=!1,i=bt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(i=we(t)?Vt:pe.current,r=t.contextTypes,l=(r=r!=null)?yn(e,i):bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Io(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Fe(l):(l=we(t)?Vt:pe.current,i.context=yn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Wl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pi.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=sd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function nc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xi||(xi=!0,ro=r),ql(e,t)},n}function rc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xf.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Ff=ut.ReactCurrentOwner,ye=!1;function me(e,t,n,r){t.child=e===null?Tu(t,null,n,r):wn(t,e.child,n,r)}function Ga(e,t,n,r,i){n=n.render;var l=t.ref;return gn(t,i),r=Bo(e,t,n,r,l,i),n=Uo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(q&&n&&zo(t),t.flags|=1,me(e,t,r,i),t.child)}function Ja(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Go(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ic(e,t,l,r,i)):(e=Xr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(o,r)&&e.ref===t.ref)return st(e,t,i)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(nr(l,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,st(e,t,i)}return Yl(e,t,n,r,i)}function lc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(dn,Ee),Ee|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(dn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,H(dn,Ee),Ee|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,H(dn,Ee),Ee|=r;return me(e,t,i,n),t.child}function oc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var l=we(n)?Vt:pe.current;return l=yn(t,l),gn(t,i),n=Bo(e,t,n,r,l,i),r=Uo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(q&&r&&zo(t),t.flags|=1,me(e,t,n,i),t.child)}function Za(e,t,n,r,i){if(we(n)){var l=!0;ai(t)}else l=!1;if(gn(t,i),t.stateNode===null)qr(e,t),tc(t,n,r),Ql(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Fe(d):(d=we(n)?Vt:pe.current,d=yn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&qa(t,o,r,d),ft=!1;var h=t.memoizedState;o.state=h,fi(t,r,o,i),u=t.memoizedState,s!==r||h!==u||ke.current||ft?(typeof m=="function"&&(Wl(t,n,m,r),u=t.memoizedState),(s=ft||Qa(t,n,s,r,h,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Lu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Be(t.type,s),o.props=d,g=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=we(n)?Vt:pe.current,u=yn(t,u));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||h!==u)&&qa(t,o,r,u),ft=!1,h=t.memoizedState,o.state=h,fi(t,r,o,i);var w=t.memoizedState;s!==g||h!==w||ke.current||ft?(typeof k=="function"&&(Wl(t,n,k,r),w=t.memoizedState),(d=ft||Qa(t,n,d,r,h,w,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,i)}function Kl(e,t,n,r,i,l){oc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Da(t,n,!1),st(e,t,l);r=t.stateNode,Ff.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=wn(t,e.child,null,l),t.child=wn(t,null,s,l)):me(e,t,s,l),t.memoizedState=r.state,i&&Da(t,n,!0),t.child}function ac(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),Mo(e,t.containerInfo)}function es(e,t,n,r,i){return kn(),_o(i),t.flags|=256,me(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,i=Y.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Y,i&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ti(o,r,0,null),e=$t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(n),t.memoizedState=Xl,e):Ho(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Df(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=St(s,l):(l=$t(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Gl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&_o(r),wn(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Df(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(y(422))),Ar(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=$t(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wn(t,e.child,null,o),t.child.memoizedState=Gl(o),t.memoizedState=Xl,l);if(!(t.mode&1))return Ar(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(y(419)),r=ll(l,r,void 0),Ar(e,t,o,r)}if(s=(o&e.childLanes)!==0,ye||s){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,at(e,i),He(r,e,i,-1))}return Xo(),r=ll(Error(y(421))),Ar(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,be=kt(i.nextSibling),Ce=t,q=!0,$e=null,e!==null&&(Ae[Le++]=nt,Ae[Le++]=rt,Ae[Le++]=Ht,nt=e.id,rt=e.overflow,Ht=t),t=Ho(t,r.children),t.flags|=4096,t)}function ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function ol(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function uc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(me(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,n,t);else if(e.tag===19)ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,l);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Of(e,t,n){switch(t.tag){case 3:ac(t),kn();break;case 5:Iu(t);break;case 1:we(t.type)&&ai(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(ci,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(H(Y,Y.current&1),e=st(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return st(e,t,n)}var cc,Jl,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jl=function(){};dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bt(Je.current);var l=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}El(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(Po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return we(t.type)&&oi(),de(t),null;case 3:return r=t.stateNode,jn(),Q(ke),Q(pe),Do(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(oo($e),$e=null))),Jl(e,t),de(t),null;case 5:Fo(t);var i=Bt(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return de(t),null}if(e=Bt(Je.current),Rr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Xe]=t,r[lr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<On.length;i++)W(On[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ca(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":fa(r,l),W("invalid",r)}El(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),i=["children",""+s]):Kn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":jr(r),da(r,l,!0);break;case"textarea":jr(r),pa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Xe]=t,e[lr]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(o=bl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<On.length;i++)W(On[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":ca(e,r),i=kl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":fa(e,r),i=Nl(e,r),W("invalid",e);break;default:i=r}El(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Vs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Us(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",e):u!=null&&mo(e,l,u,o))}switch(n){case"input":jr(e),da(e,r,!1);break;case"textarea":jr(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Bt(ar.current),Bt(Je.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(l=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return de(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&be!==null&&t.mode&1&&!(t.flags&128))_u(),kn(),t.flags|=98560,l=!1;else if(l=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[Xe]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else $e!==null&&(oo($e),$e=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):Xo())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return jn(),Jl(e,t),e===null&&rr(t.stateNode.containerInfo),de(t),null;case 10:return Ao(t.type._context),de(t),null;case 17:return we(t.type)&&oi(),de(t),null;case 19:if(Q(Y),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Ln(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pi(e),o!==null){for(t.flags|=128,Ln(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>Sn&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304)}else{if(!r)if(e=pi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!q)return de(t),null}else 2*J()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Y.current,H(Y,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Uf(e,t){switch(Po(t),t.tag){case 1:return we(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),Q(ke),Q(pe),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return jn(),null;case 10:return Ao(t.type._context),null;case 22:case 23:return Ko(),null;case 24:return null;default:return null}}var Lr=!1,fe=!1,$f=typeof WeakSet=="function"?WeakSet:Set,C=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){G(e,t,r)}}var ns=!1;function Vf(e,t){if(Ml=ni,e=xu(),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,m=0,g=e,h=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(s=o+i),g!==l||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===i&&(s=o),h===l&&++m===r&&(u=o),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},ni=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,F=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Be(t.type,j),F);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=ns,ns=!1,w}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Zl(t,n,l)}i=i.next}while(i!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[lr],delete t[Bl],delete t[Ef],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function to(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(to(e,t,n),e=e.sibling;e!==null;)to(e,t,n),e=e.sibling}function no(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(no(e,t,n),e=e.sibling;e!==null;)no(e,t,n),e=e.sibling}var ae=null,Ue=!1;function ct(e,t,n){for(n=n.child;n!==null;)hc(e,t,n),n=n.sibling}function hc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ji,n)}catch{}switch(n.tag){case 5:fe||cn(n,t);case 6:var r=ae,i=Ue;ae=null,ct(e,t,n),ae=r,Ue=i,ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ue?(e=ae,n=n.stateNode,e.nodeType===8?Zi(e.parentNode,n):e.nodeType===1&&Zi(e,n),er(e)):Zi(ae,n.stateNode));break;case 4:r=ae,i=Ue,ae=n.stateNode.containerInfo,Ue=!0,ct(e,t,n),ae=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Zl(n,t,o),i=i.next}while(i!==r)}ct(e,t,n);break;case 1:if(!fe&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ct(e,t,n),fe=r):ct(e,t,n);break;default:ct(e,t,n)}}function is(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $f),t.forEach(function(r){var i=Jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ue=!1;break e;case 3:ae=s.stateNode.containerInfo,Ue=!0;break e;case 4:ae=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(ae===null)throw Error(y(160));hc(l,o,i),ae=null,Ue=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){G(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gc(t,e),t=t.sibling}function gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ye(e),r&4){try{Qn(3,e,e.return),_i(3,e)}catch(j){G(e,e.return,j)}try{Qn(5,e,e.return)}catch(j){G(e,e.return,j)}}break;case 1:Oe(t,e),Ye(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Oe(t,e),Ye(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var i=e.stateNode;try{Xn(i,"")}catch(j){G(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ds(i,l),bl(s,o);var d=bl(s,l);for(o=0;o<u.length;o+=2){var m=u[o],g=u[o+1];m==="style"?Vs(i,g):m==="dangerouslySetInnerHTML"?Us(i,g):m==="children"?Xn(i,g):mo(i,m,g,d)}switch(s){case"input":wl(i,l);break;case"textarea":Os(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?fn(i,!!l.multiple,k,!1):h!==!!l.multiple&&(l.defaultValue!=null?fn(i,!!l.multiple,l.defaultValue,!0):fn(i,!!l.multiple,l.multiple?[]:"",!1))}i[lr]=l}catch(j){G(e,e.return,j)}}break;case 6:if(Oe(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(j){G(e,e.return,j)}}break;case 3:if(Oe(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(j){G(e,e.return,j)}break;case 4:Oe(t,e),Ye(e);break;case 13:Oe(t,e),Ye(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(qo=J())),r&4&&is(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(d=fe)||m,Oe(t,e),fe=d):Oe(t,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(g=C=m;C!==null;){switch(h=C,k=h.child,h.tag){case 0:case 11:case 14:case 15:Qn(4,h,h.return);break;case 1:cn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){G(r,n,j)}}break;case 5:cn(h,h.return);break;case 22:if(h.memoizedState!==null){os(g);continue}}k!==null?(k.return=h,C=k):os(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$s("display",o))}catch(j){G(e,e.return,j)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){G(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Ye(e),r&4&&is(e);break;case 21:break;default:Oe(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xn(i,""),r.flags&=-33);var l=rs(e);no(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=rs(e);to(e,s,o);break;default:throw Error(y(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e,t,n){C=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||fe;s=Lr;var d=fe;if(Lr=o,(fe=u)&&!d)for(C=i;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?as(i):u!==null?(u.return=o,C=u):as(i);for(;l!==null;)C=l,xc(l),l=l.sibling;C=i,Lr=s,fe=d}ls(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):ls(e)}}function ls(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Va(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&er(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}fe||t.flags&512&&eo(t)}catch(h){G(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function os(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function as(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var l=t.return;try{eo(t)}catch(u){G(t,l,u)}break;case 5:var o=t.return;try{eo(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Wf=Math.ceil,gi=ut.ReactCurrentDispatcher,Wo=ut.ReactCurrentOwner,Me=ut.ReactCurrentBatchConfig,I=0,le=null,ee=null,se=0,Ee=0,dn=zt(0),ne=0,dr=null,Qt=0,Ri=0,Qo=0,qn=null,ve=null,qo=0,Sn=1/0,et=null,xi=!1,ro=null,jt=null,Ir=!1,gt=null,vi=0,Yn=0,io=null,Yr=-1,Kr=0;function he(){return I&6?J():Yr!==-1?Yr:Yr=J()}function Nt(e){return e.mode&1?I&2&&se!==0?se&-se:zf.transition!==null?(Kr===0&&(Kr=tu()),Kr):(e=$,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e):1}function He(e,t,n,r){if(50<Yn)throw Yn=0,io=null,Error(y(185));pr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Ri|=n),ne===4&&mt(e,se)),je(e,r),n===1&&I===0&&!(t.mode&1)&&(Sn=J()+500,Ci&&Pt()))}function je(e,t){var n=e.callbackNode;Cd(e,t);var r=ti(e,e===le?se:0);if(r===0)n!==null&&ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ga(n),t===1)e.tag===0?Cf(ss.bind(null,e)):Cu(ss.bind(null,e)),Nf(function(){!(I&6)&&Pt()}),n=null;else{switch(nu(r)){case 1:n=yo;break;case 4:n=Zs;break;case 16:n=ei;break;case 536870912:n=eu;break;default:n=ei}n=Ec(n,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vc(e,t){if(Yr=-1,Kr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=ti(e,e===le?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yi(e,r);else{t=r;var i=I;I|=2;var l=kc();(le!==e||se!==t)&&(et=null,Sn=J()+500,Ut(e,t));do try{Yf();break}catch(s){yc(e,s)}while(!0);To(),gi.current=l,I=i,ee!==null?t=0:(le=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=Rl(e),i!==0&&(r=i,t=lo(e,i))),t===1)throw n=dr,Ut(e,0),mt(e,r),je(e,J()),n;if(t===6)mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qf(i)&&(t=yi(e,r),t===2&&(l=Rl(e),l!==0&&(r=l,t=lo(e,l))),t===1))throw n=dr,Ut(e,0),mt(e,r),je(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Ft(e,ve,et);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=qo+500-J(),10<t)){if(ti(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Ft.bind(null,e,ve,et),t);break}Ft(e,ve,et);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wf(r/1960))-r,10<r){e.timeoutHandle=Ol(Ft.bind(null,e,ve,et),r);break}Ft(e,ve,et);break;case 5:Ft(e,ve,et);break;default:throw Error(y(329))}}}return je(e,J()),e.callbackNode===n?vc.bind(null,e):null}function lo(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=yi(e,t),e!==2&&(t=ve,ve=n,t!==null&&oo(t)),e}function oo(e){ve===null?ve=e:ve.push.apply(ve,e)}function Qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!We(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~Qo,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if(I&6)throw Error(y(327));xn();var t=ti(e,0);if(!(t&1))return je(e,J()),null;var n=yi(e,t);if(e.tag!==0&&n===2){var r=Rl(e);r!==0&&(t=r,n=lo(e,r))}if(n===1)throw n=dr,Ut(e,0),mt(e,t),je(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,ve,et),je(e,J()),null}function Yo(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Sn=J()+500,Ci&&Pt())}}function qt(e){gt!==null&&gt.tag===0&&!(I&6)&&xn();var t=I;I|=1;var n=Me.transition,r=$;try{if(Me.transition=null,$=1,e)return e()}finally{$=r,Me.transition=n,I=t,!(I&6)&&Pt()}}function Ko(){Ee=dn.current,Q(dn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:jn(),Q(ke),Q(pe),Do();break;case 5:Fo(r);break;case 4:jn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ao(r.type._context);break;case 22:case 23:Ko()}n=n.return}if(le=e,ee=e=St(e.current,null),se=Ee=t,ne=0,dr=null,Qo=Ri=Qt=0,ve=qn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Ot=null}return e}function yc(e,t){do{var n=ee;try{if(To(),Wr.current=hi,mi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mi=!1}if(Wt=0,ie=te=K=null,Wn=!1,sr=0,Wo.current=null,n===null||n.return===null){ne=1,dr=t,ee=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Ka(o);if(k!==null){k.flags&=-257,Xa(k,o,s,l,t),k.mode&1&&Ya(l,d,t),t=k,u=d;var w=t.updateQueue;if(w===null){var j=new Set;j.add(u),t.updateQueue=j}else w.add(u);break e}else{if(!(t&1)){Ya(l,d,t),Xo();break e}u=Error(y(426))}}else if(q&&s.mode&1){var F=Ka(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Xa(F,o,s,l,t),_o(Nn(u,s));break e}}l=u=Nn(u,s),ne!==4&&(ne=2),qn===null?qn=[l]:qn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=nc(l,u,t);$a(l,f);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jt===null||!jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=rc(l,s,t);$a(l,x);break e}}l=l.return}while(l!==null)}jc(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function kc(){var e=gi.current;return gi.current=hi,e===null?hi:e}function Xo(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Qt&268435455)&&!(Ri&268435455)||mt(le,se)}function yi(e,t){var n=I;I|=2;var r=kc();(le!==e||se!==t)&&(et=null,Ut(e,t));do try{qf();break}catch(i){yc(e,i)}while(!0);if(To(),I=n,gi.current=r,ee!==null)throw Error(y(261));return le=null,se=0,ne}function qf(){for(;ee!==null;)wc(ee)}function Yf(){for(;ee!==null&&!vd();)wc(ee)}function wc(e){var t=Sc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?jc(e):ee=t,Wo.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Bf(n,t,Ee),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ft(e,t,n){var r=$,i=Me.transition;try{Me.transition=null,$=1,Kf(e,t,n,r)}finally{Me.transition=i,$=r}return null}function Kf(e,t,n,r){do xn();while(gt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(zd(e,l),e===le&&(ee=le=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Ec(ei,function(){return xn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var o=$;$=1;var s=I;I|=4,Wo.current=null,Vf(e,n),gc(n,e),hf(Fl),ni=!!Ml,Fl=Ml=null,e.current=n,Hf(n),yd(),I=s,$=o,Me.transition=l}else e.current=n;if(Ir&&(Ir=!1,gt=e,vi=i),l=e.pendingLanes,l===0&&(jt=null),jd(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xi)throw xi=!1,e=ro,ro=null,e;return vi&1&&e.tag!==0&&xn(),l=e.pendingLanes,l&1?e===io?Yn++:(Yn=0,io=e):Yn=0,Pt(),null}function xn(){if(gt!==null){var e=nu(vi),t=Me.transition,n=$;try{if(Me.transition=null,$=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,vi=0,I&6)throw Error(y(331));var i=I;for(I|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(C=d;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Qn(8,m,l)}var g=m.child;if(g!==null)g.return=m,C=g;else for(;C!==null;){m=C;var h=m.sibling,k=m.return;if(pc(m),m===d){C=null;break}if(h!==null){h.return=k,C=h;break}C=k}}}var w=l.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var F=j.sibling;j.sibling=null,j=F}while(j!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Qn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_i(9,s)}}catch(S){G(s,s.return,S)}if(s===o){C=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,C=x;break e}C=s.return}}if(I=i,Pt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ji,e)}catch{}r=!0}return r}finally{$=n,Me.transition=t}}return!1}function us(e,t,n){t=Nn(n,t),t=nc(e,t,1),e=wt(e,t,1),t=he(),e!==null&&(pr(e,1,t),je(e,t))}function G(e,t,n){if(e.tag===3)us(e,e,n);else for(;t!==null;){if(t.tag===3){us(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=Nn(n,e),e=rc(t,e,1),t=wt(t,e,1),e=he(),t!==null&&(pr(t,1,e),je(t,e));break}}t=t.return}}function Xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-qo?Ut(e,0):Qo|=n),je(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=he();e=at(e,t),e!==null&&(pr(e,t,n),je(e,n))}function Gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function Jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Nc(e,n)}var Sc;Sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Of(e,t,n);ye=!!(e.flags&131072)}else ye=!1,q&&t.flags&1048576&&zu(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var i=yn(t,pe.current);gn(t,n),i=Bo(null,t,r,e,i,n);var l=Uo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(l=!0,ai(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Io(t),i.updater=Pi,t.stateNode=i,i._reactInternals=t,Ql(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,q&&l&&zo(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ep(r),e=Be(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=Za(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Ja(null,t,r,Be(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Za(e,t,r,i,n);case 3:e:{if(ac(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Lu(e,t),fi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Nn(Error(y(423)),t),t=es(e,t,r,n,i);break e}else if(r!==i){i=Nn(Error(y(424)),t),t=es(e,t,r,n,i);break e}else for(be=kt(t.stateNode.containerInfo.firstChild),Ce=t,q=!0,$e=null,n=Tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===i){t=st(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Iu(t),e===null&&Vl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Dl(r,i)?o=null:l!==null&&Dl(r,l)&&(t.flags|=32),oc(e,t),me(e,t,o,n),t.child;case 6:return e===null&&Vl(t),null;case 13:return sc(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ga(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,H(ci,r._currentValue),r._currentValue=o,l!==null)if(We(l.value,o)){if(l.children===i.children&&!ke.current){t=st(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=it(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Hl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gn(t,n),i=Fe(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Ja(e,t,r,i,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),qr(e,t),t.tag=1,we(r)?(e=!0,ai(t)):e=!1,gn(t,n),tc(t,r,i),Ql(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return uc(e,t,n);case 22:return lc(e,t,n)}throw Error(y(156,t.tag))};function Ec(e,t){return Js(e,t)}function Zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Zf(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ep(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===go)return 11;if(e===xo)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case en:return $t(n.children,i,l,t);case ho:o=8,i|=8;break;case gl:return e=Ie(12,n,t,i|2),e.elementType=gl,e.lanes=l,e;case xl:return e=Ie(13,n,t,i),e.elementType=xl,e.lanes=l,e;case vl:return e=Ie(19,n,t,i),e.elementType=vl,e.lanes=l,e;case Is:return Ti(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case As:o=10;break e;case Ls:o=9;break e;case go:o=11;break e;case xo:o=14;break e;case dt:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ie(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function $t(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Is,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jo(e,t,n,r,i,l,o,s,u){return e=new tp(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ie(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(l),e}function np(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return bt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(we(n))return bu(e,n,t)}return t}function Cc(e,t,n,r,i,l,o,s,u){return e=Jo(n,r,!0,e,i,l,o,s,u),e.context=bc(null),n=e.current,r=he(),i=Nt(n),l=it(r,i),l.callback=t??null,wt(n,l,i),e.current.lanes=i,pr(e,i,r),je(e,r),e}function Ai(e,t,n,r){var i=t.current,l=he(),o=Nt(i);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(i,t,o),e!==null&&(He(e,i,o,l),Hr(e,i,o)),o}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zo(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function rp(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Li.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Ai(e,t,null,null)};Li.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Ai(null,e,null,null)}),t[ot]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&au(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function ip(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ki(o);l.call(d)}}var o=Cc(t,r,e,0,null,!1,!1,"",ds);return e._reactRootContainer=o,e[ot]=o.current,rr(e.nodeType===8?e.parentNode:e),qt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ki(u);s.call(d)}}var u=Jo(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=u,e[ot]=u.current,rr(e.nodeType===8?e.parentNode:e),qt(function(){Ai(t,u,n,r)}),u}function Mi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=ki(o);s.call(u)}}Ai(t,o,e,i)}else o=ip(n,t,e,i,r);return ki(o)}ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(ko(t,n|1),je(t,J()),!(I&6)&&(Sn=J()+500,Pt()))}break;case 13:qt(function(){var r=at(e,1);if(r!==null){var i=he();He(r,e,1,i)}}),Zo(e,1)}};wo=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=he();He(t,e,134217728,n)}Zo(e,134217728)}};iu=function(e){if(e.tag===13){var t=Nt(e),n=at(e,t);if(n!==null){var r=he();He(n,e,t,r)}Zo(e,t)}};lu=function(){return $};ou=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};zl=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bi(r);if(!i)throw Error(y(90));Fs(r),wl(r,i)}}}break;case"textarea":Os(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};Qs=Yo;qs=qt;var lp={usingClientEntryPoint:!1,Events:[hr,ln,bi,Hs,Ws,Yo]},In={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},op={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xs(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ji=Mr.inject(op),Ge=Mr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(y(200));return np(e,t,null,n)};Pe.createRoot=function(e,t){if(!ta(e))throw Error(y(299));var n=!1,r="",i=zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jo(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,rr(e.nodeType===8?e.parentNode:e),new ea(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Xs(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return qt(e)};Pe.hydrate=function(e,t,n){if(!Ii(t))throw Error(y(200));return Mi(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=zc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cc(t,null,e,1,n??null,i,!1,l,o),e[ot]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Li(t)};Pe.render=function(e,t,n){if(!Ii(t))throw Error(y(200));return Mi(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(y(40));return e._reactRootContainer?(qt(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Pe.unstable_batchedUpdates=Yo;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Mi(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Pe;var ap=Ps.exports,fs=ap;ml.createRoot=fs.createRoot,ml.hydrateRoot=fs.hydrateRoot;function ps(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)}function ul(e,t,n){let r=ps(e,e.VERTEX_SHADER,t),i=ps(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let l=e.createProgram();return e.attachShader(l,r),e.attachShader(l,i),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)?(e.deleteShader(r),e.deleteShader(i),l):(e.deleteProgram(l),null)}function cl(e,t,n){let r={};for(let i of n)r[i]=e.getUniformLocation(t,i);return r}function ms(e,t,n){let r={};for(let i of n)r[i]=e.getAttribLocation(t,i);return r}function sp(e){let t={},n={},r={},i=document.createElement("style");function l(o,s,u,d){let m=o[s];m||(m=document.createElement("div"),m.style.cssText="position:absolute;width:1px;height:1px;pointer-events:none;anchor-name:"+u,e.append(m),o[s]=m),m.style.left=100*d.x+"%",m.style.top=100*d.y+"%"}return document.head.append(i),{m:function(o,s){let u={};for(let d of o){let m=d.id;if(!m)continue;let g=s(d.location);u[m]=1,l(t,m,"--cobe-"+m,g),g.visible?r["--cobe-visible-"+m]="N":delete r["--cobe-visible-"+m]}for(let d in t)u[d]||(t[d].remove(),delete t[d],delete r["--cobe-visible-"+d])},a:function(o,s){let u={};for(let d of o){let m=d.id;if(!m)continue;let g=s(d);u[m]=1,l(n,m,"--cobe-arc-"+m,g),g.visible?r["--cobe-visible-arc-"+m]="N":delete r["--cobe-visible-arc-"+m]}for(let d in n)u[d]||(n[d].remove(),delete n[d],delete r["--cobe-visible-arc-"+d])},r:function(){for(let o in t)t[o].remove();for(let o in n)n[o].remove();i.remove()},s:function(){let o="";for(let s in r)o+=s+":"+r[s]+";";i.textContent=":root{"+o+"}"}}}var{PI:dl,sin:hs,cos:gs}=Math,up="attribute vec2 a;void main(){gl_Position=vec4(a,0,1);}",cp="precision highp float;uniform vec2 t,v,s;uniform vec3 F,w;uniform vec4 n;uniform float k,x,y;uniform sampler2D z;float u;mat3 A(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0,c,e,f,d*-e,d*c);}vec3 B(vec3 c,out float G){c=c.xzy;float q=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,q)/2.236068*vec2(1,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),r=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float o=3.141593;vec3 C;for(float h=0.;h<4.;h+=1.){vec2 D=vec2(mod(h,2.),floor(h*.5));float j=dot(g,r+D);if(j>k)continue;float a=j,b=0.;a>=16384.?(a-=16384.,b+=.868872):0.,a>=8192.?(a-=8192.,b+=.934436):0.,a>=4096.?(a-=4096.,b+=.467218):0.,a>=2048.?(a-=2048.,b+=.733609):0.,a>=1024.?(a-=1024.,b+=.866804):0.,a>=512.?(a-=512.,b+=.433402):0.,a>=256.?(a-=256.,b+=.216701):0.,a>=128.?(a-=128.,b+=.108351):0.,a>=64.?(a-=64.,b+=.554175):0.,a>=32.?(a-=32.,b+=.777088):0.,a>=16.?(a-=16.,b+=.888544):0.,a>=8.?(a-=8.,b+=.944272):0.,a>=4.?(a-=4.,b+=.472136):0.,a>=2.?(a-=2.,b+=.236068):0.,a>=1.?(a-=1.,b+=.618034):0.;float l=fract(b)*6.283185,i=1.-2.*j*u,m=sqrt(1.-i*i);vec3 p=vec3(cos(l)*m,sin(l)*m,i);float E=length(c-p);if(E<o)o=E,C=p;}G=o;return C.xzy;}void main(){u=1./k;vec2 c=1./t,b=(gl_FragCoord.xy*c*2.-1.)/x-v*vec2(1,-1)*c;b.x*=t.x*c.y;float a=dot(b,b),f=0.;vec4 l=vec4(0);if(a<=.64){float g;vec4 m=vec4(0);vec3 h=normalize(vec3(b,sqrt(.64-a)));mat3 o=A(s.y,s.x);float i=h.z;vec3 d=B(h*o,g);float j=asin(d.y),e=acos(-d.x/cos(j));e=d.z<0.?-e:e;float p=max(texture2D(z,vec2(e*.5/3.141593,-(j/3.141593+.5))).x,y),q=p*smoothstep(8e-3,0.,g)*pow(i,n.y)*n.x;m+=vec4(F*(mix((1.-q)*pow(i,.4),q,n.z)+.1)+pow(1.-i,4.)*w,1),l+=m*(1.+n.w)*.5,f=(1.-a)*(1.-a)*smoothstep(0.,1.,.2/(a-.64));}else{float r=sqrt(.2/(a-.64));f=smoothstep(.5,1.,r/(r+1.));}gl_FragColor=l+vec4(f*w,f);}",dp="varying vec2 m;varying vec3 g;varying float h;attribute vec2 n;attribute vec3 p,w;attribute float q,x;uniform vec2 b,r;uniform float i,j,k,s;void main(){float c=cos(j),d=sin(j),e=cos(i),f=sin(i);vec3 a=p*(.8+s),l=vec3(e*a.x+f*a.z,f*d*a.x+c*a.y-e*d*a.z,-f*c*a.x+d*a.y+e*c*a.z);if(l.z<0.&&length(l.xy)<.8){gl_Position=vec4(2,2,0,1);return;}float t=b.y/b.x;vec2 y=(l.xy+n*q*2.)*vec2(t,1)*k+r*vec2(1,-1)*k/b;gl_Position=vec4(y,0,1),m=n,g=w,h=x;}",fp="precision highp float;varying vec2 m;varying vec3 g;varying float h;uniform vec3 v;void main(){if(length(m)>.25)discard;vec3 a=h>.5?g:v;gl_FragColor=vec4(a,1);}",pp="varying vec3 i;varying float j,s,t;attribute vec2 k;attribute vec3 l,m,N;attribute float v,w,O;uniform vec2 g,x;uniform float y,z,h,A;mat3 B(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0,c,e,f,d*-e,d*c);}vec3 C(vec3 c,vec3 d,vec3 e,float a){float b=1.-a;return b*b*c+2.*b*a*d+a*a*e;}vec3 D(vec3 c,vec3 b,vec3 d,float a){float e=1.-a;return 2.*e*(b-c)+2.*a*(d-b);}void main(){mat3 b=B(z,y);float c=.8+A;vec3 d=l*c,e=m*c,f=l+m;float n=length(f);vec3 E=n>1e-3?f/n:vec3(0,1,0),o=E*(.8+v);float p=k.x;vec3 F=C(d,o,e,p),q=b*F,G=D(d,o,e,p),H=b*G;vec2 a=H.xy;float r=length(a);vec2 I=r>1e-3?vec2(-a.y,a.x)/r:vec2(1,0);float J=g.x/g.y;vec2 K=q.xy*vec2(1./J,1)*h+x*vec2(1,-1)*h/g,P=K+I*w*k.y*h;gl_Position=vec4(P,0,1),i=N,j=O,s=q.z,t=length(q.xy);}",mp="precision highp float;varying vec3 i;varying float j,s,t;uniform vec3 M;void main(){if(s<0.&&t<.8)discard;vec3 a=j>.5?i:M;gl_FragColor=vec4(a,1);}",fl=.8;function Jt([e,t]){let n=e*dl/180,r=t*dl/180-dl,i=gs(n);return[-i*gs(r),hs(n),i*hs(r)]}var hp=(e,t)=>{var ra;let n={alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1,...t.context},r=e.getContext("webgl2",n),i=!!r;if(r||(r=e.getContext("webgl",n)),!r)return{destroy:()=>{},update:()=>{}};let l=i?null:r.getExtension("ANGLE_instanced_arrays"),o=t.devicePixelRatio||1;e.width=t.width*o,e.height=t.height*o;let s=t.phi||0,u=t.theta||0,d=t.markers||[],m=t.arcs||[],g=t.mapSamples||1e4,h=t.mapBrightness||1,k=t.mapBaseBrightness||0,w=t.baseColor||[1,1,1],j=t.markerColor||[1,.5,0],F=t.glowColor||[1,1,1],f=t.arcColor||[.3,.6,1],c=t.arcWidth??1,p=t.arcHeight??.2,x=t.diffuse||1,S=t.dark||0,P=t.opacity??1,E=t.offset||[0,0],z=t.scale||1,O=t.markerElevation??.05,T=ul(r,up,cp),re=ul(r,dp,fp),Re=ul(r,pp,mp);if(!T)return{destroy:()=>{},update:()=>{}};let Qe=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,Qe),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let Xt=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,Xt);let xr=[];for(let b=0;b<=32;b++){let M=b/32;xr.push(M,-1,M,1)}r.bufferData(r.ARRAY_BUFFER,new Float32Array(xr),r.STATIC_DRAW);let _t=r.createBuffer(),Rt=r.createBuffer(),N=cl(r,T,["t","s","k","x","v","F","w","n","y","z"]),_=cl(r,re,["i","j","b","k","r","v","s"]),R=ms(r,re,["n","p","q","w","x"]),B=cl(r,Re,["y","z","g","h","x","M","A"]),D=ms(r,Re,["k","l","m","v","w","N","O"]),Ze=r.getAttribLocation(T,"a"),Te=r.createTexture();r.bindTexture(r.TEXTURE_2D,Te),r.texImage2D(r.TEXTURE_2D,0,r.RGB,1,1,0,r.RGB,r.UNSIGNED_BYTE,new Uint8Array([0,0,0])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST);let Tt=new Image;Tt.onload=()=>{r.bindTexture(r.TEXTURE_2D,Te),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,Tt),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Te)},Tt.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAECklEQVR42u3VsW4jRRzH8d94gzfF4Q0VQaC4vBLTRTp0mze4ggfAPAE5XQEFsGNAVIjwBrmW7h7gJE+giKjyABTZE4g06LKJETdRJvtD65kdz6yduKABiW+TVfzRf2bXYxtcE/59YJCz6YdbgQF6ACSRrwYKYImmh5PbwOewlV3wlQNbAN6SEExjUOO+BU0aCSnxReHABUlK4YFQeJeUT3da8IIkZ6NGoSnFY5KsMoVzMKfECUnqxgPYRArarmUCndHwzIEaQEpg5xVdBXROl8mpAQx5dUgPiHoYAAkg5w3JABR06byGAVgcRGAz5bznj6phBQNRFwyqgdxebH6gshJAesWoFhgYpApAFoG8BIZ/fEhSox5jDjQXmV0Ar5XJfAIrALi3URVs09gHIL4XJCkLC5LH9JWiArABFCSrQjdgkBzRJ0WJeUOSNyQAfJJwUSWUBRlJQ8oGHATACGlBynnzy2kEYLNjrxouigD8BZcgOeVPqh12RtufaCN5wCPVDpvQ9lsIrqndsJtDcWqBCpf4hWN7OdWHBw58FwIaNOU/n1TpMW2DFaD48cmr4185T8NHkpUFX749pQPVdgRKC/DGoQPVeAEKv+WHvY8OOWNTPRp5kHuwSf8wzXtVBKR7YwEH9H3lQUaypUfSATOALyVNu5vZJW31Bnx98nkLfDUWJaz6ixvm+RIQRdl3kmRxxiaDoGnZW4CpPfkaQadlcPim1xOSvETQo7Lv75enVAXJ3xGUlony4KQBBWUM1NiDc6qhyS8RgQs18OCMMtPDaAUIyg0PZkRWDqs+wnKJBTDI1Js6BolegOsKmUxNDBAAKqQyMQmidhegBlLZ+wwKYdv5M/8x1khkb1cgKqP2H+MKyV5vS+whrE8DQDgAlUAoRBX056EElJCjJVACeJBZgNfVp+iCCm4RBWCgKsRxASSA9KgDhDtCiTuMyfHsKXzhC6wNAIjjWb8LKAOA2ctk3FmCOlgKFy8f1N0JJtgsxinYnVAHt4t3gPzZXSCTyCWCQmBT91QE3B5yarSN40dNHYPka4TlDhTUI8zLvl0JSL3vZn6DsCFZOeB2yROEpR68sECQQA++xIGCR2X7DwlEoLRgUrZrqlUg50S1uy43YqDcN6UFBVkhAjWiCV2Q0jgQPdplMKxvBXodcOfAwJYvgdL+1etA1YJJfBcZlQV7sO1i2gHoNiyxtQ5sBsCgWyoxCHiFFd2L5nUTCqMAqGUgsQ9f5kCcCiZgRYkMgMTd5WsB1rTzj0Em14BE4r+QxN1lCEsVur2PoF5Wbg8RJXR4djgvBgauhLywoEZQrt1KKRdVS4CdlJ8qafyP+9KIj/nE/d7kKwH9jgS72e9DV+kvfTWgct4ZyP8Byb8BPG7MaaIIkAQAAAAASUVORK5CYII=";let Ne=0;function At(b){let M=Math.cos(u),V=Math.cos(s),U=Math.sin(u),Se=Math.sin(s),Lt=V*b[0]+Se*b[2],It=Se*U*b[0]+M*b[1]-V*U*b[2];return[(Lt/(e.width/e.height)*z+E[0]*z*o/e.width+1)/2,(-It*z+E[1]*z*o/e.height+1)/2,-Se*M*b[0]+U*b[1]+V*M*b[2]>=0||Lt*Lt+It*It>=.64]}function Rc(b){let M=Jt(b),V=fl+O,U=At([M[0]*V,M[1]*V,M[2]*V]);return{x:U[0],y:U[1],visible:U[2]}}function Tc(b){let M=Jt(b.from),V=Jt(b.to),U=[M[0]+V[0],M[1]+V[1],M[2]+V[2]],Se=(U[0]**2+U[1]**2+U[2]**2)**.5;if(Se<.001)return null;let Lt=.25*(fl+O)+.5*(fl+p+O)/Se,It=At([U[0]*Lt,U[1]*Lt,U[2]*Lt]);return{x:It[0],y:It[1],visible:It[2]}}function qe(b,M,V,U,Se){b<0||(r.enableVertexAttribArray(b),r.vertexAttribPointer(b,M,r.FLOAT,!1,V,U),i?r.vertexAttribDivisor(b,Se):l&&l.vertexAttribDivisorANGLE(b,Se))}let oe,vr=document.createElement("div");vr.style.cssText="position:relative;width:100%;height:100%",(ra=e.parentElement)==null||ra.insertBefore(vr,e),vr.append(e);let yr=sp(vr);function na(b){if(b.phi!=oe&&(s=b.phi),b.theta!=oe&&(u=b.theta),b.markers&&function(M){d=M;let V=new Float32Array(8*d.length);d.forEach((U,Se)=>{V.set([...Jt(U.location),U.size,...U.color||[0,0,0],U.color?1:0],8*Se)}),r.bindBuffer(r.ARRAY_BUFFER,_t),r.bufferData(r.ARRAY_BUFFER,V,r.DYNAMIC_DRAW)}(b.markers),b.arcs&&function(M){m=M,Ne=m.length;let V=new Float32Array(12*m.length);m.forEach((U,Se)=>{V.set([...Jt(U.from),...Jt(U.to),p+O,.005*c,...U.color||[0,0,0],U.color?1:0],12*Se)}),r.bindBuffer(r.ARRAY_BUFFER,Rt),r.bufferData(r.ARRAY_BUFFER,V,r.DYNAMIC_DRAW)}(b.arcs),b.width&&b.height&&(e.width=b.width*o,e.height=b.height*o),b.mapSamples!=oe&&(g=b.mapSamples),b.mapBrightness!=oe&&(h=b.mapBrightness),b.mapBaseBrightness!=oe&&(k=b.mapBaseBrightness),b.baseColor!=oe&&(w=b.baseColor),b.markerColor!=oe&&(j=b.markerColor),b.glowColor!=oe&&(F=b.glowColor),b.arcColor!=oe&&(f=b.arcColor),b.arcWidth!=oe&&(c=b.arcWidth),b.arcHeight!=oe&&(p=b.arcHeight),b.diffuse!=oe&&(x=b.diffuse),b.dark!=oe&&(S=b.dark),b.opacity!=oe&&(P=b.opacity),b.offset!=oe&&(E=b.offset),b.scale!=oe&&(z=b.scale),b.markerElevation!=oe&&(O=b.markerElevation),yr.m(d,Rc),yr.a(m,Tc),yr.s(),r.viewport(0,0,e.width,e.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.useProgram(T),r.bindBuffer(r.ARRAY_BUFFER,Qe),r.enableVertexAttribArray(Ze),r.vertexAttribPointer(Ze,2,r.FLOAT,!1,0,0),i?r.vertexAttribDivisor(Ze,0):l&&l.vertexAttribDivisorANGLE(Ze,0),r.uniform2f(N.t,e.width,e.height),r.uniform2f(N.s,s,u),r.uniform1f(N.k,g),r.uniform1f(N.x,z),r.uniform2f(N.v,E[0]*o,E[1]*o),r.uniform3fv(N.F,w),r.uniform3fv(N.w,F),r.uniform4f(N.n,h,x,S,P),r.uniform1f(N.y,k),r.uniform1i(N.z,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Te),r.drawArrays(r.TRIANGLES,0,6),Re&&Ne>0){r.useProgram(Re),r.bindBuffer(r.ARRAY_BUFFER,Xt),D.k>=0&&(r.enableVertexAttribArray(D.k),r.vertexAttribPointer(D.k,2,r.FLOAT,!1,0,0),i?r.vertexAttribDivisor(D.k,0):l&&l.vertexAttribDivisorANGLE(D.k,0)),r.bindBuffer(r.ARRAY_BUFFER,Rt);let M=48;if(qe(D.l,3,M,0,1),qe(D.m,3,M,12,1),qe(D.v,1,M,24,1),qe(D.w,1,M,28,1),qe(D.N,3,M,32,1),qe(D.O,1,M,44,1),r.uniform1f(B.y,s),r.uniform1f(B.z,u),r.uniform2f(B.g,e.width,e.height),r.uniform1f(B.h,z),r.uniform2f(B.x,E[0]*o,E[1]*o),r.uniform3fv(B.M,f),r.uniform1f(B.A,O),i)r.drawArraysInstanced(r.TRIANGLE_STRIP,0,66,Ne);else if(l)l.drawArraysInstancedANGLE(r.TRIANGLE_STRIP,0,66,Ne);else for(let V=0;V<Ne;V++)r.drawArrays(r.TRIANGLE_STRIP,0,66)}if(re&&d.length>0){r.useProgram(re),r.bindBuffer(r.ARRAY_BUFFER,Qe),R.n>=0&&(r.enableVertexAttribArray(R.n),r.vertexAttribPointer(R.n,2,r.FLOAT,!1,0,0),i?r.vertexAttribDivisor(R.n,0):l&&l.vertexAttribDivisorANGLE(R.n,0)),r.bindBuffer(r.ARRAY_BUFFER,_t);let M=32;qe(R.p,3,M,0,1),qe(R.q,1,M,12,1),qe(R.w,3,M,16,1),qe(R.x,1,M,28,1),r.uniform1f(_.i,s),r.uniform1f(_.j,u),r.uniform2f(_.b,e.width,e.height),r.uniform1f(_.k,z),r.uniform2f(_.r,E[0]*o,E[1]*o),r.uniform3fv(_.v,j),r.uniform1f(_.s,O),function(V){if(i)r.drawArraysInstanced(r.TRIANGLES,0,6,V);else if(l)l.drawArraysInstancedANGLE(r.TRIANGLES,0,6,V);else for(let U=0;U<V;U++)r.drawArrays(r.TRIANGLES,0,6)}(d.length)}}return na({markers:d,arcs:m}),{update:na,destroy:()=>{r.deleteBuffer(Qe),r.deleteBuffer(Xt),r.deleteBuffer(_t),r.deleteBuffer(Rt),r.deleteProgram(T),re&&r.deleteProgram(re),Re&&r.deleteProgram(Re),yr.r()}}};const gp=[];function xp({markers:e=gp,className:t="",speed:n=.0026}){const r=Z.useRef(null),i=Z.useRef(null),l=Z.useRef({phi:0,theta:0}),o=Z.useRef(0),s=Z.useRef(0),u=Z.useRef(!1),d=Z.useCallback(g=>{i.current={x:g.clientX,y:g.clientY},r.current&&(r.current.style.cursor="grabbing"),u.current=!0},[]),m=Z.useCallback(()=>{i.current!==null&&(o.current+=l.current.phi,s.current+=l.current.theta,l.current={phi:0,theta:0}),i.current=null,r.current&&(r.current.style.cursor="grab"),u.current=!1},[]);return Z.useEffect(()=>{const g=h=>{i.current!==null&&(l.current={phi:(h.clientX-i.current.x)/320,theta:(h.clientY-i.current.y)/1200})};return window.addEventListener("pointermove",g,{passive:!0}),window.addEventListener("pointerup",m,{passive:!0}),()=>{window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",m)}},[m]),Z.useEffect(()=>{if(!r.current)return;const g=r.current;let h=null,k=0,w=0,j;const F=()=>{const f=g.offsetWidth;if(!f||h)return;h=hp(g,{devicePixelRatio:Math.min(window.devicePixelRatio||1,2),width:f,height:f,phi:0,theta:.18,dark:0,diffuse:1.2,mapSamples:12e3,mapBrightness:7,baseColor:[.96,.96,.95],markerColor:[.15,.62,.21],glowColor:[1,1,1],opacity:.95,markerElevation:.02,markers:e.map(p=>({location:p.location,size:.07})),arcs:[]});const c=()=>{u.current||(w+=n),h.update({phi:w+o.current+l.current.phi,theta:.18+s.current+l.current.theta}),k=window.requestAnimationFrame(c)};c(),window.setTimeout(()=>{g&&(g.style.opacity="1")},40)};return g.offsetWidth>0?F():(j=new ResizeObserver(f=>{f[0]&&f[0].contentRect.width>0&&(j.disconnect(),F())}),j.observe(g)),()=>{j&&j.disconnect(),k&&window.cancelAnimationFrame(k),h&&h.destroy()}},[e,n,m]),a.jsx("div",{className:t,style:{position:"relative",aspectRatio:"1 / 1"},children:a.jsx("canvas",{ref:r,onPointerDown:d,style:{width:"100%",height:"100%",opacity:0,cursor:"grab",transition:"opacity 1s ease",touchAction:"none"}})})}const v={bg:"#ffffff",bgAlt:"#ffffff",green:"#27c927",greenLight:"#52df52",greenDim:"#1e9f1e",textPrimary:"#191712",textSecondary:"#5f5a52",textMuted:"#7d766d",border:"rgba(25,23,18,0.1)"};function _c(e=.15){const t=Z.useRef(null),[n,r]=Z.useState(!1);return Z.useEffect(()=>{const i=t.current;if(!i)return;const l=new IntersectionObserver(([o])=>{o.isIntersecting&&(r(!0),l.disconnect())},{threshold:e});return l.observe(i),()=>l.disconnect()},[e]),[t,n]}function L({children:e,delay:t=0,direction:n="up",className:r=""}){const[i,l]=_c(.1),o={up:"translateY(40px)",down:"translateY(-40px)",left:"translateX(40px)",right:"translateX(-40px)",none:"none"};return a.jsx("div",{ref:i,className:r,style:{opacity:l?1:0,transform:l?"none":o[n],transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s`},children:e})}function Fr({end:e,suffix:t="",duration:n=2e3}){const[r,i]=Z.useState(0),[l,o]=_c(.3);return Z.useEffect(()=>{if(!o)return;let s=0;const u=e/(n/16),d=setInterval(()=>{s+=u,s>=e?(i(e),clearInterval(d)):i(Math.floor(s))},16);return()=>clearInterval(d)},[o,e,n]),a.jsxs("span",{ref:l,children:[r.toLocaleString(),t]})}const vp=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: ${v.bg};
    color: ${v.textPrimary};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ::selection {
    background: rgba(39,201,39,0.3);
    color: #052905;
  }

  .page {
    min-height: 100vh;
    position: relative;
  }

  /* ── Marquee ticker ── */
  .marquee-strip {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 120;
    height: 38px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: rgba(248,248,248,0.97);
    border-bottom: 1px solid rgba(25,23,18,0.06);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .marquee-track {
    display: flex;
    animation: marqueeScroll 35s linear infinite;
    white-space: nowrap;
  }

  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 28px;
    font-size: 12px;
    font-weight: 700;
    color: ${v.textPrimary};
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .marquee-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${v.green};
    box-shadow: 0 0 6px rgba(39,201,39,0.4);
    flex-shrink: 0;
  }

  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── Navigation ── */
  .nav {
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 48px;
    transition: all 0.3s ease;
  }

  .nav.scrolled {
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-bottom: 1px solid ${v.border};
  }

  .nav-logo {
    display: flex;
    align-items: center;
    line-height: 0;
  }

  .nav-logo img {
    display: block;
    height: 34px;
    width: auto;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .nav-link {
    font-size: 13px;
    font-weight: 500;
    color: ${v.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
    letter-spacing: 0.01em;
  }

  .nav-link:hover {
    color: ${v.textPrimary};
  }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: #052905;
    background: ${v.bgAlt};
    padding: 12px 20px;
    border-radius: 999px;
    border: 1px solid rgba(25,23,18,0.12);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: none;
  }

  .nav-cta:hover {
    transform: translateY(-1px);
    border-color: rgba(39,201,39,0.28);
    background: rgba(39,201,39,0.04);
  }

  /* ── Hero ── */
  .hero {
    position: relative;
    z-index: 5;
    display: grid;
    grid-template-columns: minmax(0, 760px) 340px;
    column-gap: 36px;
    row-gap: 4px;
    align-items: center;
    padding: 182px 16px 72px;
    max-width: 1260px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .hero-copy {
    position: relative;
    width: 100%;
    max-width: 760px;
    margin: -8px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    min-height: 0;
    z-index: 1;
    justify-self: start;
  }

  .hero-media {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 520px;
    z-index: 1;
    justify-self: end;
    width: 340px;
  }

  .hero-globe {
    position: absolute;
    inset: 58% auto auto 50%;
    transform: translate(-50%, -50%);
    width: min(132vw, 1320px);
    opacity: 0.1;
    filter: saturate(0.7);
    pointer-events: auto;
    z-index: 0;
  }

  .hero-headline {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 4.35vw, 64px);
    line-height: 0.98;
    letter-spacing: -2px;
    color: ${v.textPrimary};
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    text-align: left;
  }

  .hero-line { display: block; }
  .hero-line.top { white-space: nowrap; }
  .hero-line.middle {
    color: ${v.green};
    white-space: nowrap;
  }
  .hero-line.bottom { white-space: nowrap; }

  .hero-sub {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    font-size: clamp(13px, 1.15vw, 14px);
    font-weight: 700;
    color: #083108;
    line-height: 1.3;
    max-width: none;
    margin: 0 0 28px;
    padding: 10px 16px;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.55), rgba(39,201,39,0.2) 38%, rgba(82,223,82,0.42));
    border: 1px solid rgba(255,255,255,0.68);
    border-radius: 999px;
    box-shadow:
      0 14px 34px rgba(39,201,39,0.16),
      0 0 0 1px rgba(39,201,39,0.12),
      inset 0 1px 0 rgba(255,255,255,0.92),
      inset 0 -10px 24px rgba(39,201,39,0.12);
    z-index: 1;
    overflow: hidden;
    letter-spacing: 0;
    text-align: left;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    transform: translateY(-34px);
  }

  .hero-sub::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.76), rgba(255,255,255,0.14) 48%, transparent 70%);
    pointer-events: none;
  }

  .hero-sub::after {
    content: '';
    position: absolute;
    inset: auto 14px 7px 14px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    opacity: 0.55;
  }

  .hero-cta-row {
    display: flex;
    align-items: stretch;
    gap: 12px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 42px;
    width: 100%;
    max-width: 940px;
  }

  .hero-vsl {
    width: 100%;
    max-width: 340px;
    justify-self: end;
    margin-left: auto;
  }

  .hero-vsl .vsl-card { max-width: 340px; }

  .hero-vsl .vsl-frame {
    border-radius: 24px;
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .hero-vsl-embed {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 24px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(39,201,39,0.12);
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .hero-vsl-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .hero-offer-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 74px;
    flex: 1 1 auto;
    padding: 0 22px;
    border-radius: 22px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.92);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.26)),
      linear-gradient(135deg, rgba(39,201,39,0.06), rgba(255,255,255,0.16));
    backdrop-filter: blur(22px) saturate(180%);
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.98),
      inset 0 -18px 30px rgba(255,255,255,0.16),
      0 12px 28px rgba(25,23,18,0.06),
      0 1px 0 rgba(255,255,255,0.65);
  }

  .hero-offer-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.18) 38%, transparent 74%),
      radial-gradient(circle at top left, rgba(39,201,39,0.08), transparent 38%);
    opacity: 1;
    pointer-events: none;
  }

  .hero-offer-card::after {
    content: '';
    position: absolute;
    inset: auto 18px 1px 18px;
    height: 1px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.86), transparent);
    pointer-events: none;
  }

  .hero-offer-card .glass-flare {
    position: absolute;
    top: 7px;
    left: 16px;
    width: 34%;
    height: 42%;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.14));
    filter: blur(10px);
    opacity: 0.8;
    pointer-events: none;
  }

  .hero-offer-title {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 8px;
    text-align: center;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.9px;
    white-space: nowrap;
  }

  .hero-offer-title strong {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${v.textPrimary};
  }

  .hero-offer-title span {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${v.green};
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${v.green};
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: clamp(18px, 1.55vw, 22px);
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: none;
    padding: 0 28px;
    min-height: 74px;
    min-width: 250px;
    border-radius: 22px;
    border: 1px solid rgba(17,55,17,0.08);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.26),
      0 10px 22px rgba(39,201,39,0.16);
    animation: heroCtaPulse 2.2s ease-in-out infinite;
    flex: 0 0 248px;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 10%, rgba(255,255,255,0.26) 38%, rgba(255,255,255,0.08) 52%, transparent 72%);
    transform: translateX(-100%);
    animation: heroCtaSweep 2.8s ease-in-out infinite;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    background: ${v.greenDim};
  }

  .btn-primary:active { transform: scale(0.98); }

  @keyframes heroCtaPulse {
    0%, 100% {
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.26), 0 10px 22px rgba(39,201,39,0.16);
    }
    50% {
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px rgba(39,201,39,0.2);
    }
  }

  @keyframes heroCtaSweep {
    0%, 25% { transform: translateX(-100%); }
    60%, 100% { transform: translateX(120%); }
  }

  .btn-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: transparent;
    border-radius: 0;
    transition: transform 0.2s ease;
    position: relative;
    z-index: 1;
    line-height: 1;
  }

  .btn-arrow svg { width: 100%; height: 100%; display: block; }
  .btn-primary:hover .btn-arrow { transform: translateX(3px); }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 760px;
    justify-self: start;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: ${v.textMuted};
  }

  .trust-check {
    width: 16px;
    height: 16px;
    color: ${v.green};
    flex-shrink: 0;
  }

  /* ── Stats strip (light) ── */
  .stats-strip {
    position: relative;
    z-index: 5;
    padding: 48px 24px;
    border-top: 1px solid ${v.border};
    border-bottom: 1px solid ${v.border};
    background: rgba(250,250,248,0.6);
  }

  .stats-strip-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .stat-item {
    text-align: center;
    padding: 0 16px;
    position: relative;
  }

  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    height: 70%;
    width: 1px;
    background: ${v.border};
  }

  .stat-number {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 48px);
    letter-spacing: -2px;
    color: ${v.green};
    margin-bottom: 6px;
    display: block;
  }

  .stat-label {
    font-size: 13px;
    color: ${v.textMuted};
    font-weight: 500;
  }

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    color: ${v.green};
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .eyebrow-line {
    width: 24px;
    height: 2px;
    background: ${v.green};
    border-radius: 2px;
    opacity: 0.35;
  }

  .section-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 5vw, 60px);
    letter-spacing: -1.8px;
    color: ${v.textPrimary};
    line-height: 1.05;
    margin-bottom: 20px;
  }

  .section-desc {
    font-size: 17px;
    color: ${v.textSecondary};
    line-height: 1.7;
    max-width: 520px;
  }

  /* ── Features / Product Showcase ── */
  .features {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 48px 40px;
  }

  .features-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .features-header .section-desc { margin: 0 auto; }

  /* ── Product row ── */
  .product-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    padding: 60px 0;
    border-top: 1px solid ${v.border};
  }

  .product-row:last-child {
    border-bottom: 1px solid ${v.border};
  }

  .product-row.reverse .product-info { order: 2; }
  .product-row.reverse .product-mockup { order: 1; }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.15);
    font-size: 11px;
    font-weight: 700;
    color: ${v.green};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    width: fit-content;
  }

  .product-name {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(28px, 3vw, 38px);
    letter-spacing: -1.2px;
    color: ${v.textPrimary};
    line-height: 1.1;
  }

  .product-desc {
    font-size: 16px;
    line-height: 1.7;
    color: ${v.textSecondary};
    max-width: 420px;
  }

  .product-features-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
  }

  .product-feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${v.textSecondary};
    font-weight: 500;
  }

  .product-feature-check {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: rgba(39,201,39,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${v.green};
    font-size: 11px;
  }

  .product-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${v.green};
    text-decoration: none;
    margin-top: 8px;
    transition: gap 0.3s ease;
  }

  .product-cta:hover { gap: 12px; }

  /* ── Mockup window ── */
  .product-mockup {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${v.border};
    box-shadow: 0 20px 60px rgba(15,23,42,0.08), 0 0 0 1px rgba(0,0,0,0.03);
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .product-mockup:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .mockup-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    background: #f8f8f8;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .mockup-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ddd;
  }

  .mockup-dot.red { background: #ff5f57; }
  .mockup-dot.yellow { background: #febc2e; }
  .mockup-dot.green { background: #28c840; }

  .mockup-url {
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: #999;
    font-weight: 500;
    margin-right: 30px;
  }

  /* ── BRAIN mockup (dark dashboard) ── */
  .mock-brain {
    background: #1a1530;
    padding: 20px;
    min-height: 340px;
  }

  .mock-brain-header {
    text-align: center;
    margin-bottom: 16px;
  }

  .mock-brain-title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }

  .mock-brain-sub {
    font-size: 10px;
    color: rgba(255,255,255,0.45);
  }

  .mock-brain-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .mock-brain-tab {
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 600;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.06);
  }

  .mock-brain-tab.active {
    background: rgba(255,255,255,0.12);
    color: #fff;
    border-color: rgba(255,255,255,0.15);
  }

  .mock-brain-search {
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    font-size: 11px;
    color: rgba(255,255,255,0.3);
    margin-bottom: 16px;
  }

  .mock-brain-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .mock-brain-card {
    padding: 14px 10px;
    border-radius: 12px;
    text-align: center;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .mock-brain-card-title {
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
  }

  .mock-brain-card-sub {
    font-size: 8px;
    color: rgba(255,255,255,0.5);
    line-height: 1.3;
  }

  .mock-brain-card-cat {
    font-size: 7px;
    font-weight: 700;
    color: rgba(255,255,255,0.35);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  /* ── CHAT mockup ── */
  .mock-chat {
    background: #f8fafc;
    padding: 24px;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mock-chat-greeting {
    font-size: 18px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 4px;
    text-align: center;
  }

  .mock-chat-sub {
    font-size: 11px;
    color: #64748b;
    margin-bottom: 20px;
    text-align: center;
  }

  .mock-chat-input {
    width: 100%;
    max-width: 380px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    margin-bottom: 20px;
  }

  .mock-chat-input span {
    font-size: 11px;
    color: #94a3b8;
    flex: 1;
  }

  .mock-chat-send {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${v.green};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    flex-shrink: 0;
  }

  .mock-chat-suggestions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 100%;
    max-width: 380px;
  }

  .mock-chat-suggestion {
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #e2e8f0;
    font-size: 9px;
    color: #475569;
    line-height: 1.4;
  }

  .mock-chat-suggestion strong {
    display: block;
    font-size: 10px;
    color: #1e293b;
    margin-bottom: 3px;
  }

  /* ── BOOST mockup ── */
  .mock-boost {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-boost-section-title {
    font-size: 13px;
    font-weight: 700;
    color: ${v.textPrimary};
    margin-bottom: 10px;
  }

  .mock-boost-categories {
    display: flex;
    gap: 6px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .mock-boost-cat {
    width: 64px;
    height: 52px;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 5px 3px;
    font-size: 7px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }

  .mock-boost-cat::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.45));
    border-radius: 8px;
  }

  .mock-boost-cat span {
    position: relative;
    z-index: 1;
  }

  .mock-boost-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    margin-bottom: 14px;
  }

  .mock-boost-card {
    aspect-ratio: 3 / 4;
    border-radius: 8px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

  .mock-boost-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55));
    border-radius: 8px;
  }

  .mock-boost-card-title {
    font-size: 7px;
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
  }

  .mock-boost-card-plus {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255,255,255,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #333;
    z-index: 2;
    line-height: 1;
  }

  /* ── LABS mockup ── */
  .mock-labs {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-labs-header {
    text-align: center;
    margin-bottom: 16px;
  }

  .mock-labs-title {
    font-size: 16px;
    font-weight: 800;
    color: ${v.textPrimary};
    margin-bottom: 4px;
  }

  .mock-labs-sub {
    font-size: 9px;
    color: ${v.textMuted};
  }

  .mock-labs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .mock-labs-card {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
  }

  .mock-labs-card-img {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .mock-labs-card-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.45));
  }

  .mock-labs-badge {
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 7px;
    font-weight: 700;
    z-index: 2;
    text-transform: uppercase;
  }

  .mock-labs-card-body {
    padding: 8px;
  }

  .mock-labs-card-title {
    font-size: 8px;
    font-weight: 600;
    color: ${v.textPrimary};
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .mock-labs-card-meta {
    font-size: 7px;
    color: ${v.textMuted};
    line-height: 1.5;
  }

  /* ── TALKS mockup (video grid) ── */
  .mock-talks {
    background: #fff;
    padding: 20px;
    min-height: 340px;
  }

  .mock-talks-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .mock-talks-logo {
    font-size: 15px;
    font-weight: 800;
    color: ${v.textPrimary};
  }

  .mock-talks-logo span { color: ${v.green}; }

  .mock-talks-sort {
    font-size: 9px;
    color: ${v.textMuted};
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid #e5e5e5;
  }

  .mock-talks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .mock-talks-card {
    border-radius: 10px;
    overflow: hidden;
  }

  .mock-talks-thumb {
    position: relative;
    aspect-ratio: 16 / 10;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mock-talks-thumb-title {
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 6px rgba(0,0,0,0.5);
    z-index: 1;
    line-height: 1.2;
    padding: 0 6px;
  }

  .mock-talks-thumb-num {
    position: absolute;
    top: 4px;
    left: 4px;
    background: rgba(39,201,39,0.9);
    color: #000;
    font-size: 7px;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
    z-index: 2;
  }

  .mock-talks-thumb-dur {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    font-size: 7px;
    font-weight: 600;
    padding: 1px 5px;
    border-radius: 3px;
    z-index: 2;
  }

  .mock-talks-card-meta {
    padding: 6px 2px;
  }

  .mock-talks-card-title {
    font-size: 8px;
    font-weight: 600;
    color: ${v.textPrimary};
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .mock-talks-card-date {
    font-size: 7px;
    color: ${v.textMuted};
  }

  /* ── Promo offer (light) ── */
  .promo-offer {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px 100px;
  }

  .promo-offer-shell {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 28px;
    padding: 48px;
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(255,253,248,0.98), rgba(247,245,239,0.92));
    border: 1px solid rgba(25,23,18,0.08);
    overflow: hidden;
    position: relative;
  }

  .promo-offer-shell::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
  }

  .promo-copy {
    position: relative;
    z-index: 1;
  }

  .promo-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
    padding: 10px 16px;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(25,23,18,0.1);
    color: ${v.textMuted};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .promo-kicker-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${v.green};
    box-shadow: 0 0 8px rgba(39,201,39,0.4);
    animation: livePulse 2s infinite;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  .promo-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(34px, 5vw, 54px);
    font-weight: 800;
    line-height: 1.03;
    letter-spacing: -1.4px;
    margin-bottom: 18px;
  }

  .promo-title span { color: ${v.textPrimary}; }
  .promo-title .green-text { color: ${v.green}; }

  .promo-desc {
    max-width: 620px;
    font-size: 17px;
    line-height: 1.75;
    color: ${v.textSecondary};
    margin-bottom: 26px;
  }

  .promo-points {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 30px;
  }

  .promo-point {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 16px;
    border-radius: 14px;
    background: rgba(255,255,255,0.65);
    border: 1px solid rgba(15,23,42,0.06);
    transition: all 0.3s ease;
  }

  .promo-point:hover {
    background: rgba(255,255,255,0.95);
    border-color: rgba(39,201,39,0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(39,201,39,0.06);
  }

  .promo-point-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(39,201,39,0.1);
    border: 1px solid rgba(39,201,39,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  .promo-point strong {
    display: block;
    font-size: 15px;
    color: ${v.textPrimary};
    margin-bottom: 4px;
  }

  .promo-point span {
    font-size: 13px;
    line-height: 1.6;
    color: ${v.textSecondary};
  }

  .promo-visual {
    position: relative;
    min-height: 100%;
    display: flex;
    align-items: stretch;
  }

  .signal-panel {
    width: 100%;
    min-height: 320px;
    border-radius: 20px;
    padding: 24px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,245,245,0.92)),
      ${v.bgAlt};
    border: 1px solid rgba(25,23,18,0.08);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 20px 50px rgba(15,23,42,0.08);
    position: relative;
    overflow: hidden;
  }

  .signal-panel::before {
    content: '';
    position: absolute;
    inset: auto -40px -70px auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, rgba(39,201,39,0.2), transparent 65%);
    pointer-events: none;
  }

  .signal-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .signal-label {
    font-size: 12px;
    color: ${v.textMuted};
    text-transform: uppercase;
    letter-spacing: 1.6px;
  }

  .signal-live {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.1);
    color: ${v.greenDim};
    font-size: 12px;
    font-weight: 600;
  }

  .signal-bars {
    height: 170px;
    display: flex;
    align-items: end;
    gap: 12px;
    margin-bottom: 24px;
  }

  .signal-bar {
    flex: 1;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, ${v.greenLight}, rgba(39,201,39,0.25));
    box-shadow: 0 0 20px rgba(39,201,39,0.16);
    animation: barPulse 3s ease-in-out infinite;
    transform-origin: bottom;
  }

  .signal-bar:nth-child(2) { animation-delay: 0.2s; }
  .signal-bar:nth-child(3) { animation-delay: 0.4s; }
  .signal-bar:nth-child(4) { animation-delay: 0.6s; }
  .signal-bar:nth-child(5) { animation-delay: 0.8s; }

  @keyframes barPulse {
    0%, 100% { transform: scaleY(0.9); opacity: 0.8; }
    50% { transform: scaleY(1.05); opacity: 1; }
  }

  .signal-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .signal-card {
    padding: 14px;
    border-radius: 16px;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(15,23,42,0.06);
  }

  .signal-card strong {
    display: block;
    color: ${v.textPrimary};
    font-size: 20px;
    margin-bottom: 4px;
  }

  .signal-card span {
    font-size: 12px;
    color: ${v.textSecondary};
    line-height: 1.5;
  }

  /* ── Inline shorts ── */
  .short-inline {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px 56px;
  }

  .short-inline.float-left { display: flex; justify-content: flex-start; }
  .short-inline.float-right { display: flex; justify-content: flex-end; }

  .short-embed {
    width: 100%;
    max-width: 280px;
    aspect-ratio: 9 / 16;
    border-radius: 24px;
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(39,201,39,0.12);
    box-shadow: 0 20px 44px rgba(15,23,42,0.12), 0 0 0 1px rgba(39,201,39,0.08);
  }

  .short-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .short-inline-asset {
    width: 100%;
    max-width: 280px;
  }

  .vsl-card {
    position: relative;
    width: 100%;
    max-width: 280px;
    border-radius: 18px;
    padding: 0;
    background: transparent;
    border: none;
    overflow: hidden;
  }

  .vsl-frame {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 18px;
    overflow: hidden;
    background: #dfe8d8;
    border: 1px solid rgba(39,201,39,0.18);
    box-shadow: 0 14px 34px rgba(15,23,42,0.1), 0 0 0 1px rgba(39,201,39,0.08);
    transition: all 0.4s ease;
  }

  .vsl-card:hover .vsl-frame {
    box-shadow: 0 20px 50px rgba(15,23,42,0.16), 0 0 0 2px rgba(39,201,39,0.2);
    transform: translateY(-4px);
  }

  .vsl-frame img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .vsl-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .vsl-play {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(39,201,39,0.18);
    color: ${v.textPrimary};
    font-size: 11px;
    font-weight: 600;
    backdrop-filter: blur(12px);
    z-index: 2;
  }

  .vsl-center-play {
    position: absolute;
    inset: auto auto 16px 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 999px;
    background: rgba(255,255,255,0.88);
    border: 1px solid rgba(39,201,39,0.22);
    color: ${v.textPrimary};
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(15,23,42,0.1);
    z-index: 2;
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-play {
    background: ${v.green};
    color: #000;
    box-shadow: 0 10px 30px rgba(39,201,39,0.2);
  }

  .vsl-center-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${v.green};
    color: #041204;
    font-size: 12px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-icon {
    background: #000;
    color: ${v.green};
  }

  /* ── How it works ── */
  .howto {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 120px;
  }

  .howto-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .howto-header .section-desc { margin: 0 auto; }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    position: relative;
  }

  .steps::before {
    content: '';
    position: absolute;
    top: 42px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.2), rgba(39,201,39,0.2), transparent);
    z-index: 0;
  }

  .step-card {
    text-align: left;
    position: relative;
    z-index: 1;
    background: ${v.bg};
    border: 1px solid rgba(25,23,18,0.08);
    border-radius: 20px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  }

  .step-card:hover {
    border-color: rgba(39,201,39,0.2);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(39,201,39,0.06);
  }

  .step-num {
    width: 64px;
    height: 64px;
    margin: 0 0 20px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: ${v.green};
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.12);
    transition: all 0.3s ease;
  }

  .step-card:hover .step-num {
    background: ${v.green};
    color: #000;
    border-color: ${v.green};
    box-shadow: 0 0 30px rgba(39,201,39,0.2);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${v.textPrimary};
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    color: ${v.textSecondary};
    line-height: 1.65;
    max-width: none;
    margin: 0;
  }

  /* ── Testimonials ── */
  .testimonials {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 100px;
  }

  .testimonials-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .testimonials-header .section-desc { margin: 0 auto; }

  .t-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .t-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${v.border};
    border-radius: 20px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
  }

  .t-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${v.green}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .t-card:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(39,201,39,0.06);
  }

  .t-card:hover::before { opacity: 1; }

  .t-stars {
    color: #fbbf24;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .t-quote {
    font-size: 15px;
    color: ${v.textSecondary};
    line-height: 1.7;
    margin-bottom: 20px;
    font-style: italic;
  }

  .t-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .t-avatar {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(39,201,39,0.2), rgba(82,223,82,0.12));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: ${v.green};
  }

  .t-name {
    font-weight: 600;
    font-size: 14px;
    color: ${v.textPrimary};
  }

  .t-role {
    font-size: 12px;
    color: ${v.textMuted};
  }

  /* ── CTA section (light) ── */
  .final-cta {
    position: relative;
    z-index: 5;
    margin: 0 48px 80px;
    border-radius: 28px;
    padding: 80px 48px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(39,201,39,0.06), rgba(255,255,255,0.98));
    border: 1px solid rgba(25,23,18,0.08);
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
  }

  .final-cta::after {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(39,201,39,0.1), transparent 70%);
    pointer-events: none;
  }

  .final-cta-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -1.8px;
    color: ${v.textPrimary};
    margin-bottom: 16px;
    position: relative;
    line-height: 1.05;
  }

  .final-cta-title .green-text { color: ${v.green}; }

  .final-cta-sub {
    font-size: 18px;
    color: ${v.textSecondary};
    margin-bottom: 40px;
    position: relative;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .cta-benefits {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    position: relative;
  }

  .benefit-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${v.textSecondary};
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(10px);
    border: 1px solid ${v.border};
    padding: 10px 20px;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .benefit-chip:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
  }

  .benefit-dot {
    width: 6px;
    height: 6px;
    background: ${v.green};
    border-radius: 50%;
    flex-shrink: 0;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${v.textSecondary};
    text-decoration: none;
    padding: 16px 24px;
    border-radius: 14px;
    border: 1px solid ${v.border};
    transition: all 0.3s ease;
    background: transparent;
  }

  .btn-secondary:hover {
    color: ${v.textPrimary};
    border-color: rgba(39,201,39,0.2);
    background: rgba(39,201,39,0.04);
  }

  /* ── Footer ── */
  .footer {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 48px;
    border-top: 1px solid ${v.border};
    font-size: 13px;
    color: ${v.textMuted};
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: ${v.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover { color: ${v.green}; }

  /* ── Objections ── */
  .objections {
    position: relative;
    z-index: 5;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px 100px;
  }

  .objections-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .obj-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .obj-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${v.border};
    border-radius: 20px;
    padding: 28px;
    transition: all 0.3s ease;
  }

  .obj-card:hover {
    border-color: rgba(39,201,39,0.15);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(39,201,39,0.06);
  }

  .obj-question {
    font-size: 16px;
    font-weight: 700;
    color: ${v.textPrimary};
    margin-bottom: 8px;
  }

  .obj-answer {
    font-size: 14px;
    color: ${v.textSecondary};
    line-height: 1.65;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .marquee-strip { height: 34px; }
    .marquee-item { padding: 0 18px; font-size: 11px; }
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
    .nav-cta span { display: none; }
    .hero { grid-template-columns: 1fr; row-gap: 8px; column-gap: 0; padding: 142px 20px 60px; }
    .hero-headline { letter-spacing: -1.3px; font-size: clamp(34px, 8vw, 52px); }
    .hero-copy { margin-bottom: -14px; }
    .hero-media { min-height: 0; justify-content: center; }
    .hero-globe { width: min(156vw, 860px); opacity: 0.1; inset: 67% auto auto 50%; }
    .hero-headline { margin-bottom: 0; }
    .hero-sub { padding: 12px 16px; border-radius: 999px; margin: 0 0 20px; transform: translateY(-20px); }
    .hero-cta-row { gap: 10px; margin-top: 18px; flex-wrap: wrap; }
    .hero-vsl { max-width: 260px; justify-self: center; }
    .hero-offer-card { min-height: 64px; padding: 0 18px; border-radius: 20px; flex-basis: 100%; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(20px, 6vw, 28px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top, .hero-line.middle, .hero-line.bottom { white-space: normal; }
    .stats-strip-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .stat-item:nth-child(2)::after { display: none; }
    .features { padding: 60px 20px 20px; }
    .product-row { grid-template-columns: 1fr; gap: 32px; padding: 40px 0; }
    .product-row.reverse .product-info { order: 1; }
    .product-row.reverse .product-mockup { order: 2; }
    .mock-brain-cards { grid-template-columns: repeat(2, 1fr); }
    .mock-chat-suggestions { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: repeat(3, 1fr); }
    .mock-labs-grid { grid-template-columns: 1fr; }
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .signal-panel { min-height: 320px; }
    .howto { padding: 0 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 16px; }
    .steps::before { display: none; }
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left, .short-inline.float-right { justify-content: center; }
    .short-inline-asset, .vsl-card { max-width: 220px; }
    .testimonials { padding: 0 20px 80px; }
    .objections { padding: 0 20px 80px; }
    .obj-grid { grid-template-columns: 1fr; }
    .t-grid { grid-template-columns: 1fr; }
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; }
    .hero-trust { flex-direction: column; gap: 8px; }
    .stats-strip-inner { grid-template-columns: 1fr; gap: 20px; }
    .stat-item::after { display: none !important; }
  }
`,yp=[{stars:5,quote:"Nunca pensé que una herramienta de IA realmente entendiera mi negocio. Profit120 me ayudó a reestructurar mis precios en 20 minutos.",name:"Carlos M.",role:"Dueño de restaurante",initials:"CM"},{stars:5,quote:"Lo probé como invitado por curiosidad y terminé comprando el plan completo. La sección de finanzas sola vale oro.",name:"Ana L.",role:"Fundadora de e-commerce",initials:"AL"},{stars:5,quote:"Mi contador me cobra por lo que Profit120 me da en segundos. El análisis de flujo de caja me ahorró miles de pesos.",name:"Roberto S.",role:"Director de agencia",initials:"RS"},{stars:5,quote:"Activé los 60 días sin costo pensando que no iba a usar todo. A la semana ya tenía a mi equipo completo dentro de la plataforma.",name:"Laura G.",role:"COO de startup",initials:"LG"},{stars:5,quote:"Profit CHAT me resolvió en 5 minutos lo que mi consultor no pudo en 3 semanas. Literal le mandé screenshot.",name:"Diego R.",role:"Dueño de franquicia",initials:"DR"},{stars:5,quote:"Los Profit LABS cambiaron la forma en que mi equipo piensa. Salimos con una estrategia real, no con teoría de libro.",name:"Patricia V.",role:"Directora de operaciones",initials:"PV"}],xs=["60 días sin costo","Acceso ilimitado para ti y toda tu empresa","5 módulos estratégicos desbloqueados","Sin tarjeta de crédito requerida","Cero riesgo. Cero compromiso.","IA aplicada a tu negocio","Todo tu equipo incluido","Promoción por tiempo limitado — actívala hoy"],kp=[{title:"Short 1: Que es Profit120",thumbUrl:"https://i.ytimg.com/vi/MMIO5xuowgg/hqdefault.jpg",watchUrl:"https://www.youtube.com/shorts/MMIO5xuowgg"},{title:"Short 2: Promoción 60 días sin costo",thumbUrl:"https://i.ytimg.com/vi/cb7jEJX1i9A/hqdefault.jpg",watchUrl:"https://www.youtube.com/shorts/cb7jEJX1i9A"}],Dr=()=>a.jsxs("svg",{className:"trust-check",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.2"}),a.jsx("path",{d:"M5 8.5l2 2 4-4",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),pl=()=>a.jsxs("svg",{viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M3.75 14.25 13.2 4.8",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round"}),a.jsx("path",{d:"M7.2 4.8h6v6",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round",strokeLinejoin:"round"})]});function wp(){const[e,t]=Z.useState(!1);return Z.useEffect(()=>{const n=()=>t(window.scrollY>20);return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:vp}),a.jsxs("div",{className:"page",children:[a.jsx("div",{className:"marquee-strip",children:a.jsx("div",{className:"marquee-track",children:[...xs,...xs].map((n,r)=>a.jsxs("span",{className:"marquee-item",children:[a.jsx("span",{className:"marquee-dot"}),n]},r))})}),a.jsxs("nav",{className:`nav${e?" scrolled":""}`,children:[a.jsx("div",{className:"nav-logo",children:a.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"})}),a.jsxs("div",{className:"nav-links",children:[a.jsx("a",{href:"#productos",className:"nav-link",children:"Productos"}),a.jsx("a",{href:"#como-funciona",className:"nav-link",children:"Cómo funciona"}),a.jsx("a",{href:"#testimonios",className:"nav-link",children:"Testimonios"})]}),a.jsxs("a",{href:"https://app.profit120.com/guest",className:"nav-cta",target:"_blank",rel:"noopener noreferrer",children:["Ingresa ahora ",a.jsx("span",{children:"→"})]})]}),a.jsxs("section",{className:"hero",children:[a.jsx("div",{className:"hero-globe",children:a.jsx(xp,{speed:.0026})}),a.jsx(L,{delay:0,children:a.jsxs("div",{className:"hero-copy",children:[a.jsx("p",{className:"hero-sub",children:"Oferta limitada: acceso completo para ti y todo tu equipo. 60 días. $0. Sin tarjeta."}),a.jsxs("h1",{className:"hero-headline",children:[a.jsx("span",{className:"hero-line top",children:"La plataforma de"}),a.jsx("span",{className:"hero-line middle",children:"Inteligencia Empresarial"}),a.jsx("span",{className:"hero-line bottom",children:"más avanzada de LATAM"})]}),a.jsx(L,{delay:.1,children:a.jsxs("div",{className:"hero-cta-row",children:[a.jsxs("div",{className:"hero-offer-card",children:[a.jsx("span",{className:"glass-flare","aria-hidden":"true"}),a.jsxs("div",{className:"hero-offer-title",children:[a.jsx("strong",{children:"60 días"}),a.jsx("span",{children:"sin costo"})]})]}),a.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",target:"_blank",rel:"noopener noreferrer",children:["Entra Ahora",a.jsx("span",{className:"btn-arrow",children:a.jsx(pl,{})})]})]})}),a.jsx(L,{delay:.18,children:a.jsxs("div",{className:"hero-trust",children:[a.jsxs("div",{className:"trust-item",children:[a.jsx(Dr,{})," 60 días sin costo"]}),a.jsxs("div",{className:"trust-item",children:[a.jsx(Dr,{})," Sin tarjeta de crédito"]}),a.jsxs("div",{className:"trust-item",children:[a.jsx(Dr,{})," Todo tu equipo incluido"]}),a.jsxs("div",{className:"trust-item",children:[a.jsx(Dr,{})," Cancela cuando quieras"]})]})})]})}),a.jsx(L,{delay:.18,children:a.jsx("div",{className:"hero-media",children:a.jsx("div",{className:"hero-vsl",children:a.jsx("div",{className:"hero-vsl-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/MMIO5xuowgg?rel=0&modestbranding=1&playsinline=1",title:kp[0].title,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})})})})]}),a.jsx("section",{className:"stats-strip",children:a.jsxs("div",{className:"stats-strip-inner",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:a.jsx(Fr,{end:5})}),a.jsx("span",{className:"stat-label",children:"Módulos incluidos en tu prueba"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:a.jsx(Fr,{end:60,suffix:" días"})}),a.jsx("span",{className:"stat-label",children:"Sin costo — para todo tu equipo"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:a.jsx(Fr,{end:24,suffix:"/7"})}),a.jsx("span",{className:"stat-label",children:"Consultor IA disponible"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"stat-number",children:a.jsx(Fr,{end:20,suffix:" min"})}),a.jsx("span",{className:"stat-label",children:"Para resolver problemas reales"})]})]})}),a.jsxs("section",{className:"howto",id:"como-funciona",children:[a.jsxs("div",{className:"howto-header",children:[a.jsx(L,{children:a.jsxs("div",{className:"section-eyebrow",children:[a.jsx("span",{className:"eyebrow-line"}),"Cómo funciona",a.jsx("span",{className:"eyebrow-line"})]})}),a.jsx(L,{delay:.1,children:a.jsxs("h2",{className:"section-heading",children:["Empieza en 2 minutos.",a.jsx("br",{}),"Sin tarjeta. Sin compromiso."]})}),a.jsx(L,{delay:.15,children:a.jsx("p",{className:"section-desc",children:"Activa tu prueba de 60 días sin costo y desbloquea los 5 módulos para todo tu equipo."})})]}),a.jsxs("div",{className:"steps",children:[a.jsx(L,{delay:0,children:a.jsxs("div",{className:"step-card",children:[a.jsx("div",{className:"step-num",children:"1"}),a.jsx("h3",{className:"step-title",children:"Crea tu cuenta gratis"}),a.jsx("p",{className:"step-desc",children:"Regístrate con tu correo. No necesitas tarjeta de crédito ni aprobación de nadie."})]})}),a.jsx(L,{delay:.1,children:a.jsxs("div",{className:"step-card",children:[a.jsx("div",{className:"step-num",children:"2"}),a.jsx("h3",{className:"step-title",children:"Invita a tu equipo"}),a.jsx("p",{className:"step-desc",children:"Agrega a todos los que necesites. Sin límite de usuarios durante tus 60 días sin costo."})]})}),a.jsx(L,{delay:.2,children:a.jsxs("div",{className:"step-card",children:[a.jsx("div",{className:"step-num",children:"3"}),a.jsx("h3",{className:"step-title",children:"Resuelve problemas reales"}),a.jsx("p",{className:"step-desc",children:"Usa los 5 módulos para tomar mejores decisiones desde el primer día. 60 días completos para probarlo todo."})]})})]})]}),a.jsxs("section",{className:"features",id:"productos",children:[a.jsxs("div",{className:"features-header",children:[a.jsx(L,{children:a.jsxs("div",{className:"section-eyebrow",children:[a.jsx("span",{className:"eyebrow-line"}),"Productos",a.jsx("span",{className:"eyebrow-line"})]})}),a.jsx(L,{delay:.1,children:a.jsxs("h2",{className:"section-heading",children:["5 módulos. Un solo objetivo:",a.jsx("br",{}),"hacer crecer tu empresa."]})}),a.jsx(L,{delay:.15,children:a.jsx("p",{className:"section-desc",children:"Cada módulo resuelve un problema real de tu negocio. Con tus 60 días sin costo, desbloqueas los 5 desde el primer minuto."})})]}),a.jsx(L,{children:a.jsxs("div",{className:"product-row",children:[a.jsxs("div",{className:"product-info",children:[a.jsx("div",{className:"product-badge",children:"IA"}),a.jsx("h3",{className:"product-name",children:"Profit BRAIN"}),a.jsx("p",{className:"product-desc",children:"Tu centro de mando inteligente. Más de 200 herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa."}),a.jsxs("div",{className:"product-features-list",children:[a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," +200 herramientas por categoría"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Favoritos y recomendaciones personalizadas"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Finanzas, Marketing, Ventas, RRHH y más"]})]})]}),a.jsxs("div",{className:"product-mockup",children:[a.jsxs("div",{className:"mockup-bar",children:[a.jsx("span",{className:"mockup-dot red"}),a.jsx("span",{className:"mockup-dot yellow"}),a.jsx("span",{className:"mockup-dot green"}),a.jsx("span",{className:"mockup-url",children:"app.profit120.com"})]}),a.jsxs("div",{className:"mock-brain",children:[a.jsxs("div",{className:"mock-brain-header",children:[a.jsx("div",{className:"mock-brain-title",children:"Tu propio PROFIT BRAIN"}),a.jsx("div",{className:"mock-brain-sub",children:"Selecciona la categoría con la que te gustaría comenzar"})]}),a.jsxs("div",{className:"mock-brain-tabs",children:[a.jsx("span",{className:"mock-brain-tab active",children:"Inicio 202"}),a.jsx("span",{className:"mock-brain-tab",children:"Finanzas 3"}),a.jsx("span",{className:"mock-brain-tab",children:"Marketing 42"}),a.jsx("span",{className:"mock-brain-tab",children:"Operaciones 64"}),a.jsx("span",{className:"mock-brain-tab",children:"Ventas 29"}),a.jsx("span",{className:"mock-brain-tab",children:"RRHH 37"})]}),a.jsx("div",{className:"mock-brain-search",children:"Escribe tu pregunta o necesidad..."}),a.jsxs("div",{className:"mock-brain-cards",children:[a.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #22c55e, #16a34a)"},children:[a.jsx("div",{className:"mock-brain-card-title",children:"Flujo de Caja Inteligente"}),a.jsx("div",{className:"mock-brain-card-sub",children:"Registro semanal de flujo de efectivo"}),a.jsx("div",{className:"mock-brain-card-cat",children:"FINANZAS"})]}),a.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #3b82f6, #2563eb)"},children:[a.jsx("div",{className:"mock-brain-card-title",children:"Centro de Costos"}),a.jsx("div",{className:"mock-brain-card-sub",children:"Agrupa gastos por área"}),a.jsx("div",{className:"mock-brain-card-cat",children:"FINANZAS"})]}),a.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #a855f7, #7c3aed)"},children:[a.jsx("div",{className:"mock-brain-card-title",children:"Generador de Anuncios con IA"}),a.jsx("div",{className:"mock-brain-card-sub",children:"Copy e imágenes para redes"}),a.jsx("div",{className:"mock-brain-card-cat",children:"MARKETING"})]}),a.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #f43f5e, #e11d48)"},children:[a.jsx("div",{className:"mock-brain-card-title",children:"Análisis de Compensación"}),a.jsx("div",{className:"mock-brain-card-sub",children:"Benchmarks internos y de mercado"}),a.jsx("div",{className:"mock-brain-card-cat",children:"RRHH"})]})]})]})]})]})}),a.jsx(L,{children:a.jsxs("div",{className:"product-row reverse",children:[a.jsxs("div",{className:"product-info",children:[a.jsx("div",{className:"product-badge",children:"24/7"}),a.jsx("h3",{className:"product-name",children:"Profit CHAT"}),a.jsx("p",{className:"product-desc",children:"Tu consultor 24/7 con IA. Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante."}),a.jsxs("div",{className:"product-features-list",children:[a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Chat especializado en PYMES"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Adjunta archivos para análisis"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Respuestas con contexto empresarial"]})]})]}),a.jsxs("div",{className:"product-mockup",children:[a.jsxs("div",{className:"mockup-bar",children:[a.jsx("span",{className:"mockup-dot red"}),a.jsx("span",{className:"mockup-dot yellow"}),a.jsx("span",{className:"mockup-dot green"}),a.jsx("span",{className:"mockup-url",children:"app.profit120.com/chat"})]}),a.jsxs("div",{className:"mock-chat",children:[a.jsx("div",{className:"mock-chat-greeting",children:"¡Hola! 👋"}),a.jsx("div",{className:"mock-chat-sub",children:"Soy el primer chat especializado para PYMES, ¿qué solución necesitas hoy?"}),a.jsxs("div",{className:"mock-chat-input",children:[a.jsx("span",{children:"Escribe tu pregunta o adjunta archivos para analizar"}),a.jsx("div",{className:"mock-chat-send",children:"↑"})]}),a.jsxs("div",{className:"mock-chat-suggestions",children:[a.jsxs("div",{className:"mock-chat-suggestion",children:[a.jsx("strong",{children:"Actualmente tengo este problema en mi empresa..."}),"¡Sin miedo! Estoy aquí para ayudarte a resolver los problemas que enfrenta tu empresa."]}),a.jsxs("div",{className:"mock-chat-suggestion",children:[a.jsx("strong",{children:"Necesito saber más acerca de..."}),"Nadie nace sabiéndolo todo... ¿Qué información estás buscando?"]}),a.jsxs("div",{className:"mock-chat-suggestion",children:[a.jsx("strong",{children:"Explícame más de Profit120"}),"¡No escondemos nada! Pregúntanos lo que quieras para ayudarte mejor."]})]})]})]})]})}),a.jsx(L,{children:a.jsxs("div",{className:"product-row",children:[a.jsxs("div",{className:"product-info",children:[a.jsx("div",{className:"product-badge",children:"20 MIN"}),a.jsx("h3",{className:"product-name",children:"Profit BOOST"}),a.jsx("p",{className:"product-desc",children:"Soluciones en 20 minutos. Un problema real con una solución accionable. Frameworks, plantillas y herramientas para ejecutar hoy."}),a.jsxs("div",{className:"product-features-list",children:[a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Top 10 en tendencias diarias"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Explorar por categoría"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Frameworks listos para aplicar"]})]})]}),a.jsxs("div",{className:"product-mockup",children:[a.jsxs("div",{className:"mockup-bar",children:[a.jsx("span",{className:"mockup-dot red"}),a.jsx("span",{className:"mockup-dot yellow"}),a.jsx("span",{className:"mockup-dot green"}),a.jsx("span",{className:"mockup-url",children:"app.profit120.com/boost"})]}),a.jsxs("div",{className:"mock-boost",children:[a.jsx("div",{className:"mock-boost-section-title",children:"Top 10 en Tendencias Hoy"}),a.jsx("div",{className:"mock-boost-grid",children:[{title:"La Necesidad de Contratar",bg:"linear-gradient(135deg, #e8f5e9, #c8e6c9)",color:"#2e7d32"},{title:"Balance General",bg:"linear-gradient(135deg, #e3f2fd, #bbdefb)",color:"#1565c0"},{title:"Margen de Contribución",bg:"linear-gradient(135deg, #1a237e, #283593)",color:"#fff"},{title:"La Deuda Financiera",bg:"linear-gradient(135deg, #3e2723, #5d4037)",color:"#fff"},{title:"Capital de Trabajo",bg:"linear-gradient(135deg, #e8f5e9, #a5d6a7)",color:"#1b5e20"}].map((n,r)=>a.jsxs("div",{className:"mock-boost-card",style:{background:n.bg},children:[a.jsx("span",{className:"mock-boost-card-plus",children:"+"}),a.jsx("div",{className:"mock-boost-card-title",style:{color:n.color},children:n.title})]},r))}),a.jsx("div",{className:"mock-boost-section-title",children:"Explorar por Categoría"}),a.jsx("div",{className:"mock-boost-categories",children:[{name:"Finanzas",bg:"linear-gradient(135deg, #1e3a5f, #2d5986)"},{name:"Operaciones",bg:"linear-gradient(135deg, #374151, #4b5563)"},{name:"RRHH",bg:"linear-gradient(135deg, #7c2d12, #9a3412)"},{name:"Startups",bg:"linear-gradient(135deg, #065f46, #047857)"},{name:"Marketing",bg:"linear-gradient(135deg, #581c87, #7c3aed)"},{name:"Ventas",bg:"linear-gradient(135deg, #0c4a6e, #0369a1)"},{name:"Liderazgo",bg:"linear-gradient(135deg, #78350f, #a16207)"}].map(n=>a.jsx("div",{className:"mock-boost-cat",style:{background:n.bg},children:a.jsx("span",{children:n.name})},n.name))})]})]})]})}),a.jsx(L,{children:a.jsxs("div",{className:"product-row reverse",children:[a.jsxs("div",{className:"product-info",children:[a.jsx("div",{className:"product-badge",children:"NEWS"}),a.jsx("h3",{className:"product-name",children:"Profit TALKS"}),a.jsx("p",{className:"product-desc",children:"El newsletter que forma criterio. Cada semana recibes análisis, tendencias, casos reales y marcos de decisión que se aplican de inmediato."}),a.jsxs("div",{className:"product-features-list",children:[a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Contenido semanal curado"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Casos reales de empresas LATAM"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Marcos de decisión aplicables"]})]})]}),a.jsxs("div",{className:"product-mockup",children:[a.jsxs("div",{className:"mockup-bar",children:[a.jsx("span",{className:"mockup-dot red"}),a.jsx("span",{className:"mockup-dot yellow"}),a.jsx("span",{className:"mockup-dot green"}),a.jsx("span",{className:"mockup-url",children:"app.profit120.com/talks"})]}),a.jsxs("div",{className:"mock-talks",children:[a.jsxs("div",{className:"mock-talks-header",children:[a.jsxs("div",{className:"mock-talks-logo",children:["Profit ",a.jsx("span",{children:"TALKS"})]}),a.jsx("div",{className:"mock-talks-sort",children:"Ordenar: Más recientes"})]}),a.jsx("div",{className:"mock-talks-grid",children:[{num:"#55",title:"Narcos Inc. 3",bg:"linear-gradient(135deg, #1a1a2e, #3d3d5c)",dur:"10:32",date:"17 Mar 2026",sub:"Narcos Inc. 3"},{num:"#54",title:"Narcos Inc. 2",bg:"linear-gradient(135deg, #2d2d3f, #4a4a6a)",dur:"11:52",date:"08 Mar 2026",sub:"Narcos Inc. 2"},{num:"#53",title:"Narcos Inc.",bg:"linear-gradient(135deg, #1e293b, #475569)",dur:"13:26",date:"03 Mar 2026",sub:"Narcos Inc. 1"},{num:"#52",title:"Los Sesgos Conductuales",bg:"linear-gradient(135deg, #0f172a, #1e3a5f)",dur:"12:43",date:"03 Mar 2026",sub:"Riesgo Empresarial 4"},{num:"#51",title:"Skin In The Game",bg:"linear-gradient(135deg, #78350f, #92400e)",dur:"12:00",date:"02 Mar 2026",sub:"Riesgo Empresarial 3"},{num:"#50",title:"Cisnes Negros vs Blancos",bg:"linear-gradient(135deg, #374151, #6b7280)",dur:"13:15",date:"20 Feb 2026",sub:"Riesgo Empresarial 2"}].map((n,r)=>a.jsxs("div",{className:"mock-talks-card",children:[a.jsxs("div",{className:"mock-talks-thumb",style:{background:n.bg},children:[a.jsx("span",{className:"mock-talks-thumb-num",children:n.num}),a.jsx("span",{className:"mock-talks-thumb-title",children:n.title}),a.jsx("span",{className:"mock-talks-thumb-dur",children:n.dur})]}),a.jsxs("div",{className:"mock-talks-card-meta",children:[a.jsx("div",{className:"mock-talks-card-title",children:n.sub}),a.jsx("div",{className:"mock-talks-card-date",children:n.date})]})]},r))})]})]})]})}),a.jsx(L,{children:a.jsxs("div",{className:"product-row",children:[a.jsxs("div",{className:"product-info",children:[a.jsx("div",{className:"product-badge",children:"LIVE"}),a.jsx("h3",{className:"product-name",children:"Profit LABS"}),a.jsx("p",{className:"product-desc",children:"Estrategia colaborativa en vivo. Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales, IA y estructura accionable."}),a.jsxs("div",{className:"product-features-list",children:[a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Sesiones en vivo con expertos"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Cupo limitado por sesión"]}),a.jsxs("div",{className:"product-feature-item",children:[a.jsx("span",{className:"product-feature-check",children:"✓"})," Estrategias aplicables inmediatas"]})]})]}),a.jsxs("div",{className:"product-mockup",children:[a.jsxs("div",{className:"mockup-bar",children:[a.jsx("span",{className:"mockup-dot red"}),a.jsx("span",{className:"mockup-dot yellow"}),a.jsx("span",{className:"mockup-dot green"}),a.jsx("span",{className:"mockup-url",children:"app.profit120.com/labs"})]}),a.jsxs("div",{className:"mock-labs",children:[a.jsxs("div",{className:"mock-labs-header",children:[a.jsx("div",{className:"mock-labs-title",children:"Profit LABS"}),a.jsx("div",{className:"mock-labs-sub",children:"Programa colaborativo donde el empresario y su equipo construyen estrategias de puesta en práctica inmediata."})]}),a.jsx("div",{className:"mock-labs-grid",children:[{title:"Marketing Inteligente",bg:"#1e293b",badge:"CUPO LLENO",badgeBg:"#ef4444",desc:"Ventas con IA",meta:"4 sesiones · 10/10"},{title:"La Rentabilidad Empresarial",bg:"#92400e",badge:"CUPO LLENO",badgeBg:"#ef4444",desc:"Ingresos y costos",meta:"4 sesiones · 15/15"},{title:"Roles y Responsabilidades",bg:"#1e3a5f",badge:"DISPONIBLE",badgeBg:v.green,badgeColor:"#000",desc:"Define roles con tu equipo",meta:"5 sesiones · 4/15"},{title:"Flujo de Caja",bg:"#065f46",badge:"DISPONIBLE",badgeBg:v.green,badgeColor:"#000",desc:"Controla tu efectivo",meta:"4 sesiones · 6/15"},{title:"Estrategia de Ventas",bg:"#581c87",badge:"PRÓXIMO",badgeBg:"#f59e0b",badgeColor:"#000",desc:"Pipeline y conversión",meta:"5 sesiones · 2/15"},{title:"Liderazgo Efectivo",bg:"#0c4a6e",badge:"PRÓXIMO",badgeBg:"#f59e0b",badgeColor:"#000",desc:"Gestión de equipos",meta:"4 sesiones · 0/15"}].map((n,r)=>a.jsxs("div",{className:"mock-labs-card",children:[a.jsxs("div",{className:"mock-labs-card-img",style:{background:`linear-gradient(135deg, ${n.bg}, ${n.bg}dd)`},children:[a.jsx("span",{className:"mock-labs-badge",style:{background:n.badgeBg,color:n.badgeColor||"#fff"},children:n.badge}),a.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:9,zIndex:2,textAlign:"center",lineHeight:1.3},children:n.title})]}),a.jsxs("div",{className:"mock-labs-card-body",children:[a.jsx("div",{className:"mock-labs-card-title",children:n.desc}),a.jsx("div",{className:"mock-labs-card-meta",children:n.meta})]})]},r))})]})]})]})})]}),a.jsx("section",{className:"promo-offer",children:a.jsxs("div",{className:"promo-offer-shell",children:[a.jsxs("div",{className:"promo-copy",children:[a.jsx(L,{children:a.jsxs("div",{className:"promo-kicker",children:[a.jsx("span",{className:"promo-kicker-dot"}),"Oferta activa"]})}),a.jsx(L,{delay:.1,children:a.jsxs("h2",{className:"promo-title",children:[a.jsx("span",{children:"Todo esto es tuyo."}),a.jsx("br",{}),a.jsx("span",{className:"green-text",children:"60 días. $0."})]})}),a.jsx(L,{delay:.15,children:a.jsx("p",{className:"promo-desc",children:"No es una demo limitada. Es la plataforma completa — los 5 módulos, para ti y todo tu equipo, durante 60 días sin costo."})}),a.jsx(L,{delay:.2,children:a.jsxs("div",{className:"promo-points",children:[a.jsxs("div",{className:"promo-point",children:[a.jsx("div",{className:"promo-point-icon",children:"🔓"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Acceso completo"}),a.jsx("span",{children:"Los 5 módulos desbloqueados desde el día 1"})]})]}),a.jsxs("div",{className:"promo-point",children:[a.jsx("div",{className:"promo-point-icon",children:"👥"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Todo tu equipo"}),a.jsx("span",{children:"Sin límite de usuarios durante la prueba"})]})]}),a.jsxs("div",{className:"promo-point",children:[a.jsx("div",{className:"promo-point-icon",children:"💳"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Sin tarjeta"}),a.jsx("span",{children:"No pedimos datos de pago para empezar"})]})]}),a.jsxs("div",{className:"promo-point",children:[a.jsx("div",{className:"promo-point-icon",children:"⏰"}),a.jsxs("div",{children:[a.jsx("strong",{children:"60 días completos"}),a.jsx("span",{children:"No 7. No 14. Sesenta días para probarlo todo."})]})]})]})}),a.jsx(L,{delay:.25,children:a.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",style:{minHeight:56,minWidth:200,fontSize:16,flex:"none"},target:"_blank",rel:"noopener noreferrer",children:["Empieza tus 60 días gratis",a.jsx("span",{className:"btn-arrow",children:a.jsx(pl,{})})]})})]}),a.jsx(L,{delay:.12,direction:"left",className:"promo-visual",children:a.jsxs("div",{className:"signal-panel",children:[a.jsxs("div",{className:"signal-top",children:[a.jsx("span",{className:"signal-label",children:"Impacto en empresas"}),a.jsxs("span",{className:"signal-live",children:[a.jsx("span",{className:"promo-kicker-dot"})," En vivo"]})]}),a.jsxs("div",{className:"signal-bars","aria-hidden":"true",children:[a.jsx("div",{className:"signal-bar",style:{height:"55%"}}),a.jsx("div",{className:"signal-bar",style:{height:"78%"}}),a.jsx("div",{className:"signal-bar",style:{height:"62%"}}),a.jsx("div",{className:"signal-bar",style:{height:"88%"}}),a.jsx("div",{className:"signal-bar",style:{height:"100%"}})]}),a.jsxs("div",{className:"signal-cards",children:[a.jsxs("div",{className:"signal-card",children:[a.jsx("strong",{children:"+200"}),a.jsx("span",{children:"Herramientas IA incluidas"})]}),a.jsxs("div",{className:"signal-card",children:[a.jsx("strong",{children:"24/7"}),a.jsx("span",{children:"Consultor IA disponible"})]}),a.jsxs("div",{className:"signal-card",children:[a.jsx("strong",{children:"60 días"}),a.jsx("span",{children:"Sin costo para tu equipo"})]}),a.jsxs("div",{className:"signal-card",children:[a.jsx("strong",{children:"$0"}),a.jsx("span",{children:"Sin tarjeta requerida"})]})]})]})})]})}),a.jsx("div",{className:"short-inline float-right",children:a.jsx(L,{children:a.jsx("div",{className:"short-embed",children:a.jsx("iframe",{src:"https://www.youtube.com/embed/cb7jEJX1i9A?rel=0&modestbranding=1&playsinline=1",title:"Promoción 60 días sin costo",loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})})}),a.jsxs("section",{className:"testimonials",id:"testimonios",children:[a.jsxs("div",{className:"testimonials-header",children:[a.jsx(L,{children:a.jsxs("div",{className:"section-eyebrow",children:[a.jsx("span",{className:"eyebrow-line"}),"Testimonios",a.jsx("span",{className:"eyebrow-line"})]})}),a.jsx(L,{delay:.1,children:a.jsxs("h2",{className:"section-heading",children:["Empezaron con 60 días gratis.",a.jsx("br",{}),"Se quedaron por los resultados."]})}),a.jsx(L,{delay:.15,children:a.jsx("p",{className:"section-desc",children:"Activaron su prueba sin costo, probaron los módulos y decidieron quedarse."})})]}),a.jsx("div",{className:"t-grid",children:yp.map((n,r)=>a.jsx(L,{delay:.08*r,children:a.jsxs("div",{className:"t-card",children:[a.jsx("div",{className:"t-stars",children:"★".repeat(n.stars)}),a.jsxs("p",{className:"t-quote",children:['"',n.quote,'"']}),a.jsxs("div",{className:"t-author",children:[a.jsx("div",{className:"t-avatar",children:n.initials}),a.jsxs("div",{children:[a.jsx("div",{className:"t-name",children:n.name}),a.jsx("div",{className:"t-role",children:n.role})]})]})]})},r))})]}),a.jsxs("section",{className:"objections",children:[a.jsxs("div",{className:"objections-header",children:[a.jsx(L,{children:a.jsxs("div",{className:"section-eyebrow",children:[a.jsx("span",{className:"eyebrow-line"}),"Sin letra chica",a.jsx("span",{className:"eyebrow-line"})]})}),a.jsx(L,{delay:.1,children:a.jsxs("h2",{className:"section-heading",children:["Las preguntas que",a.jsx("br",{}),"todos se hacen."]})})]}),a.jsx("div",{className:"obj-grid",children:[{q:"¿Necesito tarjeta de crédito?",a:"No. Cero datos de pago. Entras, activas tus 60 días sin costo y listo."},{q:"¿Cuántos usuarios puedo agregar?",a:"Todos los que necesites. La prueba de 60 días es para ti y todo tu equipo, sin límite."},{q:"¿Qué pasa después de los 60 días?",a:"Tú decides si continuar. Sin renovación automática. Sin sorpresas. Sin compromisos."},{q:"¿Y si no me gusta?",a:"Cancela cuando quieras. No hay penalidad, no hay letra chica. Tienes 60 días completos para decidir."},{q:"¿Es para mi tipo de empresa?",a:"Sí. +200 herramientas cubren Finanzas, Marketing, Ventas, RRHH, Operaciones y más. Desde startups hasta empresas consolidadas."},{q:"¿Cuánto tiempo toma empezar?",a:"2 minutos. Solo necesitas un correo. Entras directo a la plataforma con los 5 módulos desbloqueados por 60 días."}].map((n,r)=>a.jsx(L,{delay:.06*r,children:a.jsxs("div",{className:"obj-card",children:[a.jsx("div",{className:"obj-question",children:n.q}),a.jsx("div",{className:"obj-answer",children:n.a})]})},r))})]}),a.jsx(L,{children:a.jsxs("div",{className:"final-cta",children:[a.jsxs("h2",{className:"final-cta-title",children:["Tu empresa merece",a.jsx("br",{}),a.jsx("span",{className:"green-text",children:"60 días sin costo."})]}),a.jsx("p",{className:"final-cta-sub",children:"5 módulos de IA. Todo tu equipo. Sin tarjeta de crédito. Empieza hoy."}),a.jsx("div",{className:"cta-benefits",children:["60 días sin costo","Sin tarjeta de crédito","Usuarios ilimitados","5 módulos completos","Cancela cuando quieras"].map((n,r)=>a.jsxs("div",{className:"benefit-chip",children:[a.jsx("span",{className:"benefit-dot"}),n]},r))}),a.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",style:{fontSize:18,padding:"20px 48px",minHeight:"auto",flex:"none",animation:"heroCtaPulse 2.2s ease-in-out infinite"},target:"_blank",rel:"noopener noreferrer",children:["Empieza Gratis — 60 Días",a.jsx("span",{className:"btn-arrow",children:a.jsx(pl,{})})]})]})}),a.jsxs("footer",{className:"footer",children:[a.jsxs("span",{children:["© ",new Date().getFullYear()," Profit120. Todos los derechos reservados."]}),a.jsx("div",{className:"footer-links",children:a.jsx("a",{href:"https://app.profit120.com/guest",target:"_blank",rel:"noopener noreferrer",children:"Activa tus 60 días sin costo"})})]})]})]})}ml.createRoot(document.getElementById("root")).render(a.jsx(Kc.StrictMode,{children:a.jsx(wp,{})}));
