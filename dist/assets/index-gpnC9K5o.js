(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},zo={},Zd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),eg=Symbol.for("react.portal"),tg=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),rg=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),og=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),lg=Symbol.for("react.memo"),ug=Symbol.for("react.lazy"),Pu=Symbol.iterator;function cg(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var Jd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Jd}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Qn.prototype;function ol(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Jd}var sl=ol.prototype=new np;sl.constructor=ol;ep(sl,Qn.prototype);sl.isPureReactComponent=!0;var Cu=Array.isArray,rp=Object.prototype.hasOwnProperty,al={current:null},ip={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rp.call(t,r)&&!ip.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zr,type:e,key:o,ref:s,props:i,_owner:al.current}}function dg(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function pg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nu=/\/+/g;function Jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pg(""+e.key):t.toString(36)}function Ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zr:case eg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Jo(s,0):r,Cu(i)?(n="",e!=null&&(n=e.replace(Nu,"$&/")+"/"),Ai(i,t,n,"",function(c){return c})):i!=null&&(ll(i)&&(i=dg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Nu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Cu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Jo(o,a);s+=Ai(o,t,n,l,i)}else if(l=cg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Jo(o,a++),s+=Ai(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ci(e,t,n){if(e==null)return e;var r=[],i=0;return Ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Di={transition:null},hg={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Di,ReactCurrentOwner:al};function sp(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Qn;I.Fragment=tg;I.Profiler=rg;I.PureComponent=ol;I.StrictMode=ng;I.Suspense=ag;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;I.act=sp;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=al.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rp.call(t,l)&&!ip.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zr,type:e.type,key:i,ref:o,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:og,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ig,_context:e},e.Consumer=e};I.createElement=op;I.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:sg,render:e}};I.isValidElement=ll;I.lazy=function(e){return{$$typeof:ug,_payload:{_status:-1,_result:e},_init:fg}};I.memo=function(e,t){return{$$typeof:lg,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};I.unstable_act=sp;I.useCallback=function(e,t){return ke.current.useCallback(e,t)};I.useContext=function(e){return ke.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};I.useEffect=function(e,t){return ke.current.useEffect(e,t)};I.useId=function(){return ke.current.useId()};I.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ke.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};I.useRef=function(e){return ke.current.useRef(e)};I.useState=function(e){return ke.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ke.current.useTransition()};I.version="18.3.1";Zd.exports=I;var A=Zd.exports;const mg=Jm(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=A,xg=Symbol.for("react.element"),yg=Symbol.for("react.fragment"),vg=Object.prototype.hasOwnProperty,wg=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bg={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)vg.call(t,r)&&!bg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xg,type:e,key:o,ref:s,props:i,_owner:wg.current}}zo.Fragment=yg;zo.jsx=ap;zo.jsxs=ap;Qd.exports=zo;var u=Qd.exports,Bs={},lp={exports:{}},Ie={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var R=P.length;P.push(D);e:for(;0<R;){var B=R-1>>>1,te=P[B];if(0<i(te,D))P[B]=D,P[R]=te,R=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],R=P.pop();if(R!==D){P[0]=R;e:for(var B=0,te=P.length,li=te>>>1;B<li;){var qt=2*(B+1)-1,Zo=P[qt],Xt=qt+1,ui=P[Xt];if(0>i(Zo,R))Xt<te&&0>i(ui,Zo)?(P[B]=ui,P[Xt]=R,B=Xt):(P[B]=Zo,P[qt]=R,B=qt);else if(Xt<te&&0>i(ui,R))P[B]=ui,P[Xt]=R,B=Xt;else break e}}return D}function i(P,D){var R=P.sortIndex-D.sortIndex;return R!==0?R:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,p=null,f=3,x=!1,y=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=P)r(c),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(c)}}function w(P){if(b=!1,g(P),!y)if(n(l)!==null)y=!0,je(S);else{var D=n(c);D!==null&&ai(w,D.startTime-P)}}function S(P,D){y=!1,b&&(b=!1,m(T),T=-1),x=!0;var R=f;try{for(g(D),p=n(l);p!==null&&(!(p.expirationTime>D)||P&&!O());){var B=p.callback;if(typeof B=="function"){p.callback=null,f=p.priorityLevel;var te=B(p.expirationTime<=D);D=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(l)&&r(l),g(D)}else r(l);p=n(l)}if(p!==null)var li=!0;else{var qt=n(c);qt!==null&&ai(w,qt.startTime-D),li=!1}return li}finally{p=null,f=R,x=!1}}var N=!1,E=null,T=-1,V=5,C=-1;function O(){return!(e.unstable_now()-C<V)}function ee(){if(E!==null){var P=e.unstable_now();C=P;var D=!0;try{D=E(!0,P)}finally{D?Me():(N=!1,E=null)}}else N=!1}var Me;if(typeof h=="function")Me=function(){h(ee)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Ye=ze.port2;ze.port1.onmessage=ee,Me=function(){Ye.postMessage(null)}}else Me=function(){k(ee,0)};function je(P){E=P,N||(N=!0,Me())}function ai(P,D){T=k(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,je(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var R=f;f=D;try{return P()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=f;f=P;try{return D()}finally{f=R}},e.unstable_scheduleCallback=function(P,D,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,P={id:d++,callback:D,priorityLevel:P,startTime:R,expirationTime:te,sortIndex:-1},R>B?(P.sortIndex=R,t(c,P),n(l)===null&&P===n(c)&&(b?(m(T),T=-1):b=!0,ai(w,R-B))):(P.sortIndex=te,t(l,P),y||x||(y=!0,je(S))),P},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(P){var D=f;return function(){var R=f;f=D;try{return P.apply(this,arguments)}finally{f=R}}}})(cp);up.exports=cp;var kg=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=A,Ve=kg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,zr={};function xn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(zr[e]=t,e=0;e<t.length;e++)dp.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=Object.prototype.hasOwnProperty,jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Mu={};function Tg(e){return Us.call(Mu,e)?!0:Us.call(Eu,e)?!1:jg.test(e)?Mu[e]=!0:(Eu[e]=!0,!1)}function Pg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cg(e,t,n,r){if(t===null||typeof t>"u"||Pg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ul,cl);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ul,cl);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ul,cl);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function dl(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cg(t,n,i,r)&&(n=null),r||i===null?Tg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),Ws=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),Hs=Symbol.for("react.suspense"),Ks=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),hp=Symbol.for("react.offscreen"),zu=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,es;function pr(e){if(es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);es=t&&t[1]||""}return`
`+es+e}var ts=!1;function ns(e,t){if(!e||ts)return"";ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function Ng(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=ns(e.type,!1),e;case 11:return e=ns(e.type.render,!1),e;case 1:return e=ns(e.type,!0),e;default:return""}}function Ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case Ws:return"Profiler";case pl:return"StrictMode";case Hs:return"Suspense";case Ks:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fp:return(e.displayName||"Context")+".Consumer";case pp:return(e._context.displayName||"Context")+".Provider";case fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return t=e.displayName||null,t!==null?t:Ys(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Ys(e(t))}catch{}}return null}function Eg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ys(t);case 8:return t===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mg(e){var t=mp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pi(e){e._valueTracker||(e._valueTracker=Mg(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gs(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xp(e,t){t=t.checked,t!=null&&dl(e,"checked",t,!1)}function qs(e,t){xp(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xs(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Du(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xs(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(fr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function yp(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zg=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){zg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function bp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function kp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ag=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Js(e,t){if(t){if(Ag[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,_n=null,On=null;function Vu(e){if(e=ti(e)){if(typeof na!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Vo(t),na(e.stateNode,e.type,t))}}function Sp(e){_n?On?On.push(e):On=[e]:_n=e}function jp(){if(_n){var e=_n,t=On;if(On=_n=null,Vu(e),t)for(e=0;e<t.length;e++)Vu(t[e])}}function Tp(e,t){return e(t)}function Pp(){}var rs=!1;function Cp(e,t,n){if(rs)return e(t,n);rs=!0;try{return Tp(e,t,n)}finally{rs=!1,(_n!==null||On!==null)&&(Pp(),jp())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ra=!1;if(vt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ra=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ra=!1}function Dg(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var vr=!1,Zi=null,Ji=!1,ia=null,Rg={onError:function(e){vr=!0,Zi=e}};function Lg(e,t,n,r,i,o,s,a,l){vr=!1,Zi=null,Dg.apply(Rg,arguments)}function Vg(e,t,n,r,i,o,s,a,l){if(Lg.apply(this,arguments),vr){if(vr){var c=Zi;vr=!1,Zi=null}else throw Error(j(198));Ji||(Ji=!0,ia=c)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(yn(e)!==e)throw Error(j(188))}function Ig(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Iu(i),e;if(o===r)return Iu(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ep(e){return e=Ig(e),e!==null?Mp(e):null}function Mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mp(e);if(t!==null)return t;e=e.sibling}return null}var zp=Ve.unstable_scheduleCallback,_u=Ve.unstable_cancelCallback,_g=Ve.unstable_shouldYield,Og=Ve.unstable_requestPaint,J=Ve.unstable_now,Fg=Ve.unstable_getCurrentPriorityLevel,gl=Ve.unstable_ImmediatePriority,Ap=Ve.unstable_UserBlockingPriority,eo=Ve.unstable_NormalPriority,$g=Ve.unstable_LowPriority,Dp=Ve.unstable_IdlePriority,Ao=null,ut=null;function Bg(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Hg,Ug=Math.log,Wg=Math.LN2;function Hg(e){return e>>>=0,e===0?32:31-(Ug(e)/Wg|0)|0}var hi=64,mi=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=hr(a):(o&=s,o!==0&&(r=hr(o)))}else s=n&~i,s!==0?r=hr(s):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Kg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Kg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rp(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Gg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Lp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vp,yl,Ip,_p,Op,sa=!1,gi=[],Rt=null,Lt=null,Vt=null,Rr=new Map,Lr=new Map,Et=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xg(e,t,n,r,i){switch(t){case"focusin":return Rt=or(Rt,e,t,n,r,i),!0;case"dragenter":return Lt=or(Lt,e,t,n,r,i),!0;case"mouseover":return Vt=or(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,or(Rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,or(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function Fp(e){var t=tn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Np(n),t!==null){e.blockedOn=t,Op(e.priority,function(){Ip(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=ti(n),t!==null&&yl(t),e.blockedOn=n,!1;t.shift()}return!0}function Fu(e,t,n){Ri(e)&&n.delete(t)}function Qg(){sa=!1,Rt!==null&&Ri(Rt)&&(Rt=null),Lt!==null&&Ri(Lt)&&(Lt=null),Vt!==null&&Ri(Vt)&&(Vt=null),Rr.forEach(Fu),Lr.forEach(Fu)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Qg)))}function Vr(e){function t(i){return sr(i,e)}if(0<gi.length){sr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&sr(Rt,e),Lt!==null&&sr(Lt,e),Vt!==null&&sr(Vt,e),Rr.forEach(t),Lr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)Fp(n),n.blockedOn===null&&Et.shift()}var Fn=St.ReactCurrentBatchConfig,no=!0;function Zg(e,t,n,r){var i=$,o=Fn.transition;Fn.transition=null;try{$=1,vl(e,t,n,r)}finally{$=i,Fn.transition=o}}function Jg(e,t,n,r){var i=$,o=Fn.transition;Fn.transition=null;try{$=4,vl(e,t,n,r)}finally{$=i,Fn.transition=o}}function vl(e,t,n,r){if(no){var i=aa(e,t,n,r);if(i===null)hs(e,t,r,ro,n),Ou(e,r);else if(Xg(i,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<qg.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&Vp(o),o=aa(e,t,n,r),o===null&&hs(e,t,r,ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hs(e,t,r,null,n)}}var ro=null;function aa(e,t,n,r){if(ro=null,e=ml(r),e=tn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ro=e,null}function $p(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fg()){case gl:return 1;case Ap:return 4;case eo:case $g:return 16;case Dp:return 536870912;default:return 16}default:return 16}}var zt=null,wl=null,Li=null;function Bp(){if(Li)return Li;var e,t=wl,n=t.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function $u(){return!1}function _e(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:$u,this.isPropagationStopped=$u,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=_e(Zn),ei=X({},Zn,{view:0,detail:0}),e0=_e(ei),os,ss,ar,Do=X({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(os=e.screenX-ar.screenX,ss=e.screenY-ar.screenY):ss=os=0,ar=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Bu=_e(Do),t0=X({},Do,{dataTransfer:0}),n0=_e(t0),r0=X({},ei,{relatedTarget:0}),as=_e(r0),i0=X({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=_e(i0),s0=X({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=_e(s0),l0=X({},Zn,{data:0}),Uu=_e(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d0[e])?!!t[e]:!1}function kl(){return p0}var f0=X({},ei,{key:function(e){if(e.key){var t=u0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h0=_e(f0),m0=X({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=_e(m0),g0=X({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),x0=_e(g0),y0=X({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=_e(y0),w0=X({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=_e(w0),k0=[9,13,27,32],Sl=vt&&"CompositionEvent"in window,wr=null;vt&&"documentMode"in document&&(wr=document.documentMode);var S0=vt&&"TextEvent"in window&&!wr,Up=vt&&(!Sl||wr&&8<wr&&11>=wr),Hu=" ",Ku=!1;function Wp(e,t){switch(e){case"keyup":return k0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function j0(e,t){switch(e){case"compositionend":return Hp(t);case"keypress":return t.which!==32?null:(Ku=!0,Hu);case"textInput":return e=t.data,e===Hu&&Ku?null:e;default:return null}}function T0(e,t){if(jn)return e==="compositionend"||!Sl&&Wp(e,t)?(e=Bp(),Li=wl=zt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Up&&t.locale!=="ko"?null:t.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P0[e.type]:t==="textarea"}function Kp(e,t,n,r){Sp(r),t=io(t,"onChange"),0<t.length&&(n=new bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Ir=null;function C0(e){rf(e,0)}function Ro(e){var t=Cn(e);if(gp(t))return e}function N0(e,t){if(e==="change")return t}var Yp=!1;if(vt){var ls;if(vt){var us="oninput"in document;if(!us){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),us=typeof Gu.oninput=="function"}ls=us}else ls=!1;Yp=ls&&(!document.documentMode||9<document.documentMode)}function qu(){br&&(br.detachEvent("onpropertychange",Gp),Ir=br=null)}function Gp(e){if(e.propertyName==="value"&&Ro(Ir)){var t=[];Kp(t,Ir,e,ml(e)),Cp(C0,t)}}function E0(e,t,n){e==="focusin"?(qu(),br=t,Ir=n,br.attachEvent("onpropertychange",Gp)):e==="focusout"&&qu()}function M0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(Ir)}function z0(e,t){if(e==="click")return Ro(t)}function A0(e,t){if(e==="input"||e==="change")return Ro(t)}function D0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:D0;function _r(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Us.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Xu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xp(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R0(e){var t=Xp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qu(n,o);var s=Qu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L0=vt&&"documentMode"in document&&11>=document.documentMode,Tn=null,la=null,kr=null,ua=!1;function Zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Tn==null||Tn!==Qi(r)||(r=Tn,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&_r(kr,r)||(kr=r,r=io(la,"onSelect"),0<r.length&&(t=new bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},cs={},Qp={};vt&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Lo(e){if(cs[e])return cs[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qp)return cs[e]=t[n];return e}var Zp=Lo("animationend"),Jp=Lo("animationiteration"),ef=Lo("animationstart"),tf=Lo("transitionend"),nf=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){nf.set(e,t),xn(t,[e])}for(var ds=0;ds<Ju.length;ds++){var ps=Ju[ds],V0=ps.toLowerCase(),I0=ps[0].toUpperCase()+ps.slice(1);Ht(V0,"on"+I0)}Ht(Zp,"onAnimationEnd");Ht(Jp,"onAnimationIteration");Ht(ef,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(tf,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vg(r,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ec(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ec(i,a,c),o=l}}}if(Ji)throw e=ia,Ji=!1,ia=null,e}function W(e,t){var n=t[ha];n===void 0&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(of(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),of(n,e,r,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[vi]){e[vi]=!0,dp.forEach(function(n){n!=="selectionchange"&&(_0.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,fs("selectionchange",!1,t))}}function of(e,t,n,r){switch($p(t)){case 1:var i=Zg;break;case 4:i=Jg;break;default:i=vl}n=i.bind(null,t,n,e),i=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=tn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Cp(function(){var c=o,d=ml(n),p=[];e:{var f=nf.get(e);if(f!==void 0){var x=bl,y=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":x=h0;break;case"focusin":y="focus",x=as;break;case"focusout":y="blur",x=as;break;case"beforeblur":case"afterblur":x=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=x0;break;case Zp:case Jp:case ef:x=o0;break;case tf:x=v0;break;case"scroll":x=e0;break;case"wheel":x=b0;break;case"copy":case"cut":case"paste":x=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wu}var b=(t&4)!==0,k=!b&&e==="scroll",m=b?f!==null?f+"Capture":null:f;b=[];for(var h=c,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Dr(h,m),w!=null&&b.push(Fr(h,w,g)))),k)break;h=h.return}0<b.length&&(f=new x(f,y,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==ta&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[wt]))break e;if((x||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?tn(y):null,y!==null&&(k=yn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(b=Bu,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=Wu,w="onPointerLeave",m="onPointerEnter",h="pointer"),k=x==null?f:Cn(x),g=y==null?f:Cn(y),f=new b(w,h+"leave",x,n,d),f.target=k,f.relatedTarget=g,w=null,tn(d)===c&&(b=new b(m,h+"enter",y,n,d),b.target=g,b.relatedTarget=k,w=b),k=w,x&&y)t:{for(b=x,m=y,h=0,g=b;g;g=vn(g))h++;for(g=0,w=m;w;w=vn(w))g++;for(;0<h-g;)b=vn(b),h--;for(;0<g-h;)m=vn(m),g--;for(;h--;){if(b===m||m!==null&&b===m.alternate)break t;b=vn(b),m=vn(m)}b=null}else b=null;x!==null&&tc(p,f,x,b,!1),y!==null&&k!==null&&tc(p,k,y,b,!0)}}e:{if(f=c?Cn(c):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var S=N0;else if(Yu(f))if(Yp)S=A0;else{S=M0;var N=E0}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=z0);if(S&&(S=S(e,c))){Kp(p,S,n,d);break e}N&&N(e,f,c),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Xs(f,"number",f.value)}switch(N=c?Cn(c):window,e){case"focusin":(Yu(N)||N.contentEditable==="true")&&(Tn=N,la=c,kr=null);break;case"focusout":kr=la=Tn=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,Zu(p,n,d);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":Zu(p,n,d)}var E;if(Sl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else jn?Wp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Up&&n.locale!=="ko"&&(jn||T!=="onCompositionStart"?T==="onCompositionEnd"&&jn&&(E=Bp()):(zt=d,wl="value"in zt?zt.value:zt.textContent,jn=!0)),N=io(c,T),0<N.length&&(T=new Uu(T,e,null,n,d),p.push({event:T,listeners:N}),E?T.data=E:(E=Hp(n),E!==null&&(T.data=E)))),(E=S0?j0(e,n):T0(e,n))&&(c=io(c,"onBeforeInput"),0<c.length&&(d=new Uu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}rf(p,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Dr(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Dr(n,o),l!=null&&s.unshift(Fr(n,l,a))):i||(l=Dr(n,o),l!=null&&s.push(Fr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var O0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(O0,`
`).replace(F0,"")}function wi(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(j(425))}function oo(){}var ca=null,da=null;function pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(U0)}:fa;function U0(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Jn,$r="__reactProps$"+Jn,wt="__reactContainer$"+Jn,ha="__reactEvents$"+Jn,W0="__reactListeners$"+Jn,H0="__reactHandles$"+Jn;function tn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[lt])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[lt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Vo(e){return e[$r]||null}var ma=[],Nn=-1;function Kt(e){return{current:e}}function K(e){0>Nn||(e.current=ma[Nn],ma[Nn]=null,Nn--)}function U(e,t){Nn++,ma[Nn]=e.current,e.current=t}var Ut={},xe=Kt(Ut),Ce=Kt(!1),dn=Ut;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function so(){K(Ce),K(xe)}function oc(e,t,n){if(xe.current!==Ut)throw Error(j(168));U(xe,t),U(Ce,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Eg(e)||"Unknown",i));return X({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,dn=xe.current,U(xe,e),U(Ce,Ce.current),!0}function sc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=sf(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,K(Ce),K(xe),U(xe,e)):K(Ce),U(Ce,n)}var mt=null,Io=!1,gs=!1;function af(e){mt===null?mt=[e]:mt.push(e)}function K0(e){Io=!0,af(e)}function Yt(){if(!gs&&mt!==null){gs=!0;var e=0,t=$;try{var n=mt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Io=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),zp(gl,Yt),i}finally{$=t,gs=!1}}return null}var En=[],Mn=0,lo=null,uo=0,Oe=[],Fe=0,pn=null,gt=1,xt="";function Zt(e,t){En[Mn++]=uo,En[Mn++]=lo,lo=e,uo=t}function lf(e,t,n){Oe[Fe++]=gt,Oe[Fe++]=xt,Oe[Fe++]=pn,pn=e;var r=gt;e=xt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-et(t)+i|n<<i|r,xt=o+e}else gt=1<<o|n<<i|r,xt=e}function Tl(e){e.return!==null&&(Zt(e,1),lf(e,1,0))}function Pl(e){for(;e===lo;)lo=En[--Mn],En[Mn]=null,uo=En[--Mn],En[Mn]=null;for(;e===pn;)pn=Oe[--Fe],Oe[Fe]=null,xt=Oe[--Fe],Oe[Fe]=null,gt=Oe[--Fe],Oe[Fe]=null}var Re=null,De=null,Y=!1,Je=null;function uf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,De=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:gt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,De=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(Y){var t=De;if(t){var n=t;if(!ac(e,t)){if(ga(e))throw Error(j(418));t=It(n.nextSibling);var r=Re;t&&ac(e,t)?uf(r,n):(e.flags=e.flags&-4097|2,Y=!1,Re=e)}}else{if(ga(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,Re=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function bi(e){if(e!==Re)return!1;if(!Y)return lc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pa(e.type,e.memoizedProps)),t&&(t=De)){if(ga(e))throw cf(),Error(j(418));for(;t;)uf(e,t),t=It(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Re?It(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=De;e;)e=It(e.nextSibling)}function Hn(){De=Re=null,Y=!1}function Cl(e){Je===null?Je=[e]:Je.push(e)}var Y0=St.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function df(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=$t(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,w){return h===null||h.tag!==6?(h=Ss(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,w){var S=g.type;return S===Sn?d(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&uc(S)===h.type)?(w=i(h,g.props),w.ref=lr(m,h,g),w.return=m,w):(w=Ui(g.type,g.key,g.props,null,m.mode,w),w.ref=lr(m,h,g),w.return=m,w)}function c(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=js(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,w,S){return h===null||h.tag!==7?(h=ln(g,m.mode,w,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function p(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ss(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case di:return g=Ui(h.type,h.key,h.props,null,m.mode,g),g.ref=lr(m,null,h),g.return=m,g;case kn:return h=js(h,m.mode,g),h.return=m,h;case Ct:var w=h._init;return p(m,w(h._payload),g)}if(fr(h)||rr(h))return h=ln(h,m.mode,g,null),h.return=m,h;ki(m,h)}return null}function f(m,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case di:return g.key===S?l(m,h,g,w):null;case kn:return g.key===S?c(m,h,g,w):null;case Ct:return S=g._init,f(m,h,S(g._payload),w)}if(fr(g)||rr(g))return S!==null?null:d(m,h,g,w,null);ki(m,g)}return null}function x(m,h,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(h,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case di:return m=m.get(w.key===null?g:w.key)||null,l(h,m,w,S);case kn:return m=m.get(w.key===null?g:w.key)||null,c(h,m,w,S);case Ct:var N=w._init;return x(m,h,g,N(w._payload),S)}if(fr(w)||rr(w))return m=m.get(g)||null,d(h,m,w,S,null);ki(h,w)}return null}function y(m,h,g,w){for(var S=null,N=null,E=h,T=h=0,V=null;E!==null&&T<g.length;T++){E.index>T?(V=E,E=null):V=E.sibling;var C=f(m,E,g[T],w);if(C===null){E===null&&(E=V);break}e&&E&&C.alternate===null&&t(m,E),h=o(C,h,T),N===null?S=C:N.sibling=C,N=C,E=V}if(T===g.length)return n(m,E),Y&&Zt(m,T),S;if(E===null){for(;T<g.length;T++)E=p(m,g[T],w),E!==null&&(h=o(E,h,T),N===null?S=E:N.sibling=E,N=E);return Y&&Zt(m,T),S}for(E=r(m,E);T<g.length;T++)V=x(E,m,T,g[T],w),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?T:V.key),h=o(V,h,T),N===null?S=V:N.sibling=V,N=V);return e&&E.forEach(function(O){return t(m,O)}),Y&&Zt(m,T),S}function b(m,h,g,w){var S=rr(g);if(typeof S!="function")throw Error(j(150));if(g=S.call(g),g==null)throw Error(j(151));for(var N=S=null,E=h,T=h=0,V=null,C=g.next();E!==null&&!C.done;T++,C=g.next()){E.index>T?(V=E,E=null):V=E.sibling;var O=f(m,E,C.value,w);if(O===null){E===null&&(E=V);break}e&&E&&O.alternate===null&&t(m,E),h=o(O,h,T),N===null?S=O:N.sibling=O,N=O,E=V}if(C.done)return n(m,E),Y&&Zt(m,T),S;if(E===null){for(;!C.done;T++,C=g.next())C=p(m,C.value,w),C!==null&&(h=o(C,h,T),N===null?S=C:N.sibling=C,N=C);return Y&&Zt(m,T),S}for(E=r(m,E);!C.done;T++,C=g.next())C=x(E,m,T,C.value,w),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?T:C.key),h=o(C,h,T),N===null?S=C:N.sibling=C,N=C);return e&&E.forEach(function(ee){return t(m,ee)}),Y&&Zt(m,T),S}function k(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Sn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case di:e:{for(var S=g.key,N=h;N!==null;){if(N.key===S){if(S=g.type,S===Sn){if(N.tag===7){n(m,N.sibling),h=i(N,g.props.children),h.return=m,m=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&uc(S)===N.type){n(m,N.sibling),h=i(N,g.props),h.ref=lr(m,N,g),h.return=m,m=h;break e}n(m,N);break}else t(m,N);N=N.sibling}g.type===Sn?(h=ln(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=Ui(g.type,g.key,g.props,null,m.mode,w),w.ref=lr(m,h,g),w.return=m,m=w)}return s(m);case kn:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=js(g,m.mode,w),h.return=m,m=h}return s(m);case Ct:return N=g._init,k(m,h,N(g._payload),w)}if(fr(g))return y(m,h,g,w);if(rr(g))return b(m,h,g,w);ki(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Ss(g,m.mode,w),h.return=m,m=h),s(m)):n(m,h)}return k}var Kn=df(!0),pf=df(!1),co=Kt(null),po=null,zn=null,Nl=null;function El(){Nl=zn=po=null}function Ml(e){var t=co.current;K(co),e._currentValue=t}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){po=e,Nl=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(po===null)throw Error(j(308));zn=e,po.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var nn=null;function zl(e){nn===null?nn=[e]:nn.push(e)}function ff(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zl(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,zl(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=c=l=null,a=o;do{var f=a.lane,x=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,b=a;switch(f=t,x=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(x,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(x,p,f):y,f==null)break e;p=X({},p,f);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else x={eventTime:x,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,l=p):d=d.next=x,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);hn|=s,e.lanes=s,e.memoizedState=p}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ni={},ct=Kt(ni),Br=Kt(ni),Ur=Kt(ni);function rn(e){if(e===ni)throw Error(j(174));return e}function Dl(e,t){switch(U(Ur,t),U(Br,e),U(ct,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}K(ct),U(ct,t)}function Yn(){K(ct),K(Br),K(Ur)}function mf(e){rn(Ur.current);var t=rn(ct.current),n=Zs(t,e.type);t!==n&&(U(Br,e),U(ct,n))}function Rl(e){Br.current===e&&(K(ct),K(Br))}var G=Kt(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xs=[];function Ll(){for(var e=0;e<xs.length;e++)xs[e]._workInProgressVersionPrimary=null;xs.length=0}var _i=St.ReactCurrentDispatcher,ys=St.ReactCurrentBatchConfig,fn=0,q=null,oe=null,le=null,mo=!1,Sr=!1,Wr=0,G0=0;function he(){throw Error(j(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Il(e,t,n,r,i,o){if(fn=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?Z0:J0,e=n(r,i),Sr){o=0;do{if(Sr=!1,Wr=0,25<=o)throw Error(j(301));o+=1,le=oe=null,t.updateQueue=null,_i.current=ex,e=n(r,i)}while(Sr)}if(_i.current=go,t=oe!==null&&oe.next!==null,fn=0,le=oe=q=null,mo=!1,t)throw Error(j(300));return e}function _l(){var e=Wr!==0;return Wr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?q.memoizedState=le=e:le=le.next=e,le}function Ke(){if(oe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?q.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(j(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?q.memoizedState=le=e:le=le.next=e}return le}function Hr(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((fn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,q.lanes|=d,hn|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ws(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gf(){}function xf(e,t){var n=q,r=Ke(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,Ol(wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Kr(9,vf.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(j(349));fn&30||yf(n,t,i)}return i}function yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vf(e,t,n,r){t.value=n,t.getSnapshot=r,bf(t)&&kf(e)}function wf(e,t,n){return n(function(){bf(t)&&kf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function kf(e){var t=bt(e,1);t!==null&&tt(t,e,1,-1)}function pc(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Q0.bind(null,q,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return Ke().memoizedState}function Oi(e,t,n,r){var i=ot();q.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Vl(r,s.deps)){i.memoizedState=Kr(t,n,o,r);return}}q.flags|=e,i.memoizedState=Kr(1|t,n,o,r)}function fc(e,t){return Oi(8390656,8,e,t)}function Ol(e,t){return _o(2048,8,e,t)}function jf(e,t){return _o(4,2,e,t)}function Tf(e,t){return _o(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Pf.bind(null,t,e),n)}function Fl(){}function Nf(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ef(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mf(e,t,n){return fn&21?(rt(n,t)||(n=Rp(),q.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function q0(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{$=n,ys.transition=r}}function zf(){return Ke().memoizedState}function X0(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Df(t,n);else if(n=ff(e,t,n,r),n!==null){var i=be();tt(n,e,r,i),Rf(n,t,r)}}function Q0(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Df(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var l=t.interleaved;l===null?(i.next=i,zl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ff(e,t,i,r),n!==null&&(i=be(),tt(n,e,r,i),Rf(n,t,r))}}function Af(e){var t=e.alternate;return e===q||t!==null&&t===q}function Df(e,t){Sr=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}var go={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Z0={readContext:He,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=X0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:pc,useDebugValue:Fl,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=pc(!1),t=e[0];return e=q0.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=ot();if(Y){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ue===null)throw Error(j(349));fn&30||yf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fc(wf.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,vf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=ue.identifierPrefix;if(Y){var n=xt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=G0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J0={readContext:He,useCallback:Nf,useContext:He,useEffect:Ol,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Tf,useMemo:Ef,useReducer:vs,useRef:Sf,useState:function(){return vs(Hr)},useDebugValue:Fl,useDeferredValue:function(e){var t=Ke();return Mf(t,oe.memoizedState,e)},useTransition:function(){var e=vs(Hr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1},ex={readContext:He,useCallback:Nf,useContext:He,useEffect:Ol,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Tf,useMemo:Ef,useReducer:ws,useRef:Sf,useState:function(){return ws(Hr)},useDebugValue:Fl,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:Mf(t,oe.memoizedState,e)},useTransition:function(){var e=ws(Hr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ft(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(tt(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ft(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(tt(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Ft(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(tt(t,e,r,n),Ii(t,e,r))}};function hc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,o):!0}function Lf(e,t,n){var r=!1,i=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Ne(t)?dn:xe.current,r=t.contextTypes,o=(r=r!=null)?Wn(e,i):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Al(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Ne(t)?dn:xe.current,i.context=Wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(va(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Ng(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function Vf(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,za=r),ba(e,t)},n}function If(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ba(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mx.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var nx=St.ReactCurrentOwner,Pe=!1;function ye(e,t,n,r){t.child=e===null?pf(t,null,n,r):Kn(t,e.child,n,r)}function vc(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Il(e,t,n,r,o,i),n=_l(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Y&&n&&Tl(t),t.flags|=1,ye(e,t,r,i),t.child)}function wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Gl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_f(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=$t(o,r),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_r(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,kt(e,t,i)}return ka(e,t,n,r,i)}function Of(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Dn,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Dn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Dn,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Dn,Ae),Ae|=r;return ye(e,t,i,n),t.child}function Ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,r,i){var o=Ne(n)?dn:xe.current;return o=Wn(t,o),$n(t,i),n=Il(e,t,n,r,o,i),r=_l(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Y&&r&&Tl(t),t.flags|=1,ye(e,t,n,i),t.child)}function bc(e,t,n,r,i){if(Ne(n)){var o=!0;ao(t)}else o=!1;if($n(t,i),t.stateNode===null)Fi(e,t),Lf(t,n,r),wa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Ne(n)?dn:xe.current,c=Wn(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&mc(t,s,r,c),Nt=!1;var f=t.memoizedState;s.state=f,fo(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ce.current||Nt?(typeof d=="function"&&(va(t,n,d,r),l=t.memoizedState),(a=Nt||hc(t,n,a,r,f,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),s.props=c,p=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Ne(n)?dn:xe.current,l=Wn(t,l));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==l)&&mc(t,s,r,l),Nt=!1,f=t.memoizedState,s.state=f,fo(t,r,s,i);var y=t.memoizedState;a!==p||f!==y||Ce.current||Nt?(typeof x=="function"&&(va(t,n,x,r),y=t.memoizedState),(c=Nt||hc(t,n,c,r,f,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Sa(e,t,n,r,o,i)}function Sa(e,t,n,r,i,o){Ff(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&sc(t,n,!1),kt(e,t,o);r=t.stateNode,nx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kn(t,e.child,null,o),t.child=Kn(t,null,a,o)):ye(e,t,a,o),t.memoizedState=r.state,i&&sc(t,n,!0),t.child}function $f(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Dl(e,t.containerInfo)}function kc(e,t,n,r,i){return Hn(),Cl(i),t.flags|=256,ye(e,t,n,r),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,i=G.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(G,i&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Bo(s,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ta(n),t.memoizedState=ja,e):$l(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rx(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$t(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=$t(a,o):(o=ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ta(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ja,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $l(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Si(e,t,n,r){return r!==null&&Cl(r),Kn(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rx(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=bs(Error(j(422))),Si(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bo({mode:"visible",children:r.children},i,0,null),o=ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kn(t,e.child,null,s),t.child.memoizedState=Ta(s),t.memoizedState=ja,o);if(!(t.mode&1))return Si(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=bs(o,r,void 0),Si(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),tt(r,e,i,-1))}return Yl(),r=bs(Error(j(421))),Si(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=It(i.nextSibling),Re=t,Y=!0,Je=null,e!==null&&(Oe[Fe++]=gt,Oe[Fe++]=xt,Oe[Fe++]=pn,gt=e.id,xt=e.overflow,pn=t),t=$l(t,r.children),t.flags|=4096,t)}function Sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function ks(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,n,t);else if(e.tag===19)Sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ks(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ks(t,!0,n,null,o);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ix(e,t,n){switch(t.tag){case 3:$f(t),Hn();break;case 5:mf(t);break;case 1:Ne(t.type)&&ao(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Bf(e,t,n):(U(G,G.current&1),e=kt(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,n)}return kt(e,t,n)}var Wf,Pa,Hf,Kf;Wf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pa=function(){};Hf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(ct.current);var o=null;switch(n){case"input":i=Gs(e,i),r=Gs(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Qs(e,i),r=Qs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Js(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&W("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ox(e,t,n){var r=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&so(),me(t),null;case 3:return r=t.stateNode,Yn(),K(Ce),K(xe),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Ra(Je),Je=null))),Pa(e,t),me(t),null;case 5:Rl(t);var i=rn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return me(t),null}if(e=rn(ct.current),bi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)W(mr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Au(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ru(r,o),W("invalid",r)}Js(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):zr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":pi(r),Du(r,o,!0);break;case"textarea":pi(r),Lu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lt]=t,e[$r]=r,Wf(e,t,!1,!1),t.stateNode=e;e:{switch(s=ea(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)W(mr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Au(e,r),i=Gs(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ru(e,r),i=Qs(e,r),W("invalid",e);break;default:i=r}Js(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?kp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ar(e,l):typeof l=="number"&&Ar(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",e):l!=null&&dl(e,o,l,s))}switch(n){case"input":pi(e),Du(e,r,!1);break;case"textarea":pi(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?In(e,!!r.multiple,o,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=rn(Ur.current),rn(ct.current),bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return me(t),null;case 13:if(K(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&De!==null&&t.mode&1&&!(t.flags&128))cf(),Hn(),t.flags|=98560,o=!1;else if(o=bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[lt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Je!==null&&(Ra(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?se===0&&(se=3):Yl())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Yn(),Pa(e,t),e===null&&Or(t.stateNode.containerInfo),me(t),null;case 10:return Ml(t.type._context),me(t),null;case 17:return Ne(t.type)&&so(),me(t),null;case 19:if(K(G),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ur(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ho(e),s!==null){for(t.flags|=128,ur(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>qn&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return me(t),null}else 2*J()-o.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Kl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function sx(e,t){switch(Pl(t),t.tag){case 1:return Ne(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),K(Ce),K(xe),Ll(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(K(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(G),null;case 4:return Yn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var ji=!1,ge=!1,ax=typeof WeakSet=="function"?WeakSet:Set,M=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Ca(e,t,n){try{n()}catch(r){Z(e,t,r)}}var jc=!1;function lx(e,t){if(ca=no,e=Xp(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++d===r&&(l=s),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},no=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,k=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Qe(t.type,b),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=jc,jc=!1,y}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ca(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yf(e){var t=e.alternate;t!==null&&(e.alternate=null,Yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[$r],delete t[ha],delete t[W0],delete t[H0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function Ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}var ce=null,Ze=!1;function jt(e,t,n){for(n=n.child;n!==null;)qf(e,t,n),n=n.sibling}function qf(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:ge||An(n,t);case 6:var r=ce,i=Ze;ce=null,jt(e,t,n),ce=r,Ze=i,ce!==null&&(Ze?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ze?(e=ce,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),Vr(e)):ms(ce,n.stateNode));break;case 4:r=ce,i=Ze,ce=n.stateNode.containerInfo,Ze=!0,jt(e,t,n),ce=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ca(n,t,s),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ge&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,jt(e,t,n),ge=r):jt(e,t,n);break;default:jt(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ax),t.forEach(function(r){var i=xx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ze=!1;break e;case 3:ce=a.stateNode.containerInfo,Ze=!0;break e;case 4:ce=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(ce===null)throw Error(j(160));qf(o,s,i),ce=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),it(e),r&4){try{jr(3,e,e.return),Fo(3,e)}catch(b){Z(e,e.return,b)}try{jr(5,e,e.return)}catch(b){Z(e,e.return,b)}}break;case 1:Ge(t,e),it(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Ge(t,e),it(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(b){Z(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xp(i,o),ea(a,s);var c=ea(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?kp(i,p):d==="dangerouslySetInnerHTML"?wp(i,p):d==="children"?Ar(i,p):dl(i,d,p,c)}switch(a){case"input":qs(i,o);break;case"textarea":yp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?In(i,!!o.multiple,x,!1):f!==!!o.multiple&&(o.defaultValue!=null?In(i,!!o.multiple,o.defaultValue,!0):In(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(b){Z(e,e.return,b)}}break;case 6:if(Ge(t,e),it(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Z(e,e.return,b)}}break;case 3:if(Ge(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(b){Z(e,e.return,b)}break;case 4:Ge(t,e),it(e);break;case 13:Ge(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wl=J())),r&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||d,Ge(t,e),ge=c):Ge(t,e),it(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(p=M=d;M!==null;){switch(f=M,x=f.child,f.tag){case 0:case 11:case 14:case 15:jr(4,f,f.return);break;case 1:An(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){Z(r,n,b)}}break;case 5:An(f,f.return);break;case 22:if(f.memoizedState!==null){Nc(p);continue}}x!==null?(x.return=f,M=x):Nc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bp("display",s))}catch(b){Z(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(b){Z(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),it(e),r&4&&Pc(e);break;case 21:break;default:Ge(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=Tc(e);Ma(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Tc(e);Ea(e,a,s);break;default:throw Error(j(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ux(e,t,n){M=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ji;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=ji;var c=ge;if(ji=s,(ge=l)&&!c)for(M=i;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?Ec(i):l!==null?(l.return=s,M=l):Ec(i);for(;o!==null;)M=o,Qf(o),o=o.sibling;M=i,ji=a,ge=c}Cc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):Cc(e)}}function Cc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&Na(t)}catch(f){Z(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Nc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Ec(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var o=t.return;try{Na(t)}catch(l){Z(t,o,l)}break;case 5:var s=t.return;try{Na(t)}catch(l){Z(t,s,l)}}}catch(l){Z(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var cx=Math.ceil,xo=St.ReactCurrentDispatcher,Bl=St.ReactCurrentOwner,Ue=St.ReactCurrentBatchConfig,_=0,ue=null,re=null,pe=0,Ae=0,Dn=Kt(0),se=0,Yr=null,hn=0,$o=0,Ul=0,Tr=null,Te=null,Wl=0,qn=1/0,ht=null,yo=!1,za=null,Ot=null,Ti=!1,At=null,vo=0,Pr=0,Aa=null,$i=-1,Bi=0;function be(){return _&6?J():$i!==-1?$i:$i=J()}function Ft(e){return e.mode&1?_&2&&pe!==0?pe&-pe:Y0.transition!==null?(Bi===0&&(Bi=Rp()),Bi):(e=$,e!==0||(e=window.event,e=e===void 0?16:$p(e.type)),e):1}function tt(e,t,n,r){if(50<Pr)throw Pr=0,Aa=null,Error(j(185));Jr(e,n,r),(!(_&2)||e!==ue)&&(e===ue&&(!(_&2)&&($o|=n),se===4&&Mt(e,pe)),Ee(e,r),n===1&&_===0&&!(t.mode&1)&&(qn=J()+500,Io&&Yt()))}function Ee(e,t){var n=e.callbackNode;Yg(e,t);var r=to(e,e===ue?pe:0);if(r===0)n!==null&&_u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_u(n),t===1)e.tag===0?K0(Mc.bind(null,e)):af(Mc.bind(null,e)),B0(function(){!(_&6)&&Yt()}),n=null;else{switch(Lp(r)){case 1:n=gl;break;case 4:n=Ap;break;case 16:n=eo;break;case 536870912:n=Dp;break;default:n=eo}n=oh(n,Zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zf(e,t){if($i=-1,Bi=0,_&6)throw Error(j(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=to(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wo(e,r);else{t=r;var i=_;_|=2;var o=eh();(ue!==e||pe!==t)&&(ht=null,qn=J()+500,an(e,t));do try{fx();break}catch(a){Jf(e,a)}while(!0);El(),xo.current=o,_=i,re!==null?t=0:(ue=null,pe=0,t=se)}if(t!==0){if(t===2&&(i=oa(e),i!==0&&(r=i,t=Da(e,i))),t===1)throw n=Yr,an(e,0),Mt(e,r),Ee(e,J()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!dx(i)&&(t=wo(e,r),t===2&&(o=oa(e),o!==0&&(r=o,t=Da(e,o))),t===1))throw n=Yr,an(e,0),Mt(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Jt(e,Te,ht);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Wl+500-J(),10<t)){if(to(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fa(Jt.bind(null,e,Te,ht),t);break}Jt(e,Te,ht);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cx(r/1960))-r,10<r){e.timeoutHandle=fa(Jt.bind(null,e,Te,ht),r);break}Jt(e,Te,ht);break;case 5:Jt(e,Te,ht);break;default:throw Error(j(329))}}}return Ee(e,J()),e.callbackNode===n?Zf.bind(null,e):null}function Da(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=wo(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ra(t)),e}function Ra(e){Te===null?Te=e:Te.push.apply(Te,e)}function dx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Ul,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Mc(e){if(_&6)throw Error(j(327));Bn();var t=to(e,0);if(!(t&1))return Ee(e,J()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=oa(e);r!==0&&(t=r,n=Da(e,r))}if(n===1)throw n=Yr,an(e,0),Mt(e,t),Ee(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Te,ht),Ee(e,J()),null}function Hl(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(qn=J()+500,Io&&Yt())}}function mn(e){At!==null&&At.tag===0&&!(_&6)&&Bn();var t=_;_|=1;var n=Ue.transition,r=$;try{if(Ue.transition=null,$=1,e)return e()}finally{$=r,Ue.transition=n,_=t,!(_&6)&&Yt()}}function Kl(){Ae=Dn.current,K(Dn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$0(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Yn(),K(Ce),K(xe),Ll();break;case 5:Rl(r);break;case 4:Yn();break;case 13:K(G);break;case 19:K(G);break;case 10:Ml(r.type._context);break;case 22:case 23:Kl()}n=n.return}if(ue=e,re=e=$t(e.current,null),pe=Ae=t,se=0,Yr=null,Ul=$o=hn=0,Te=Tr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}nn=null}return e}function Jf(e,t){do{var n=re;try{if(El(),_i.current=go,mo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(fn=0,le=oe=q=null,Sr=!1,Wr=0,Bl.current=null,n===null||n.return===null){se=1,Yr=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=xc(s);if(x!==null){x.flags&=-257,yc(x,s,a,o,t),x.mode&1&&gc(o,c,t),t=x,l=c;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if(!(t&1)){gc(o,c,t),Yl();break e}l=Error(j(426))}}else if(Y&&a.mode&1){var k=xc(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yc(k,s,a,o,t),Cl(Gn(l,a));break e}}o=l=Gn(l,a),se!==4&&(se=2),Tr===null?Tr=[o]:Tr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Vf(o,l,t);cc(o,m);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ot===null||!Ot.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=If(o,a,t);cc(o,w);break e}}o=o.return}while(o!==null)}nh(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function eh(){var e=xo.current;return xo.current=go,e===null?go:e}function Yl(){(se===0||se===3||se===2)&&(se=4),ue===null||!(hn&268435455)&&!($o&268435455)||Mt(ue,pe)}function wo(e,t){var n=_;_|=2;var r=eh();(ue!==e||pe!==t)&&(ht=null,an(e,t));do try{px();break}catch(i){Jf(e,i)}while(!0);if(El(),_=n,xo.current=r,re!==null)throw Error(j(261));return ue=null,pe=0,se}function px(){for(;re!==null;)th(re)}function fx(){for(;re!==null&&!_g();)th(re)}function th(e){var t=ih(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?nh(e):re=t,Bl.current=null}function nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sx(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=ox(n,t,Ae),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Jt(e,t,n){var r=$,i=Ue.transition;try{Ue.transition=null,$=1,hx(e,t,n,r)}finally{Ue.transition=i,$=r}return null}function hx(e,t,n,r){do Bn();while(At!==null);if(_&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gg(e,o),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ti||(Ti=!0,oh(eo,function(){return Bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var s=$;$=1;var a=_;_|=4,Bl.current=null,lx(e,n),Xf(n,e),R0(da),no=!!ca,da=ca=null,e.current=n,ux(n),Og(),_=a,$=s,Ue.transition=o}else e.current=n;if(Ti&&(Ti=!1,At=e,vo=i),o=e.pendingLanes,o===0&&(Ot=null),Bg(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=za,za=null,e;return vo&1&&e.tag!==0&&Bn(),o=e.pendingLanes,o&1?e===Aa?Pr++:(Pr=0,Aa=e):Pr=0,Yt(),null}function Bn(){if(At!==null){var e=Lp(vo),t=Ue.transition,n=$;try{if(Ue.transition=null,$=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,vo=0,_&6)throw Error(j(331));var i=_;for(_|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:jr(8,d,o)}var p=d.child;if(p!==null)p.return=d,M=p;else for(;M!==null;){d=M;var f=d.sibling,x=d.return;if(Yf(d),d===c){M=null;break}if(f!==null){f.return=x,M=f;break}M=x}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,M=m;break e}M=o.return}}var h=e.current;for(M=h;M!==null;){s=M;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,M=g;else e:for(s=h;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fo(9,a)}}catch(S){Z(a,a.return,S)}if(a===s){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(_=i,Yt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{$=n,Ue.transition=t}}return!1}function zc(e,t,n){t=Gn(n,t),t=Vf(e,t,1),e=_t(e,t,1),t=be(),e!==null&&(Jr(e,1,t),Ee(e,t))}function Z(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Gn(n,e),e=If(t,e,1),t=_t(t,e,1),e=be(),t!==null&&(Jr(t,1,e),Ee(t,e));break}}t=t.return}}function mx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>J()-Wl?an(e,0):Ul|=n),Ee(e,t)}function rh(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(Jr(e,t,n),Ee(e,n))}function gx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function xx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),rh(e,n)}var ih;ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,ix(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&lf(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Wn(t,xe.current);$n(t,n),i=Il(null,t,r,e,i,n);var o=_l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,ao(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Al(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,wa(t,r,e,n),t=Sa(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Tl(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vx(r),e=Qe(r,e),i){case 0:t=ka(null,t,r,e,n);break e;case 1:t=bc(null,t,r,e,n);break e;case 11:t=vc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,Qe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ka(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),bc(e,t,r,i,n);case 3:e:{if($f(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hf(e,t),fo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gn(Error(j(423)),t),t=kc(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(j(424)),t),t=kc(e,t,r,n,i);break e}else for(De=It(t.stateNode.containerInfo.firstChild),Re=t,Y=!0,Je=null,n=pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=kt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return mf(t),e===null&&xa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,pa(r,i)?s=null:o!==null&&pa(r,o)&&(t.flags|=32),Ff(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&xa(t),null;case 13:return Bf(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),vc(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,U(co,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Ce.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ya(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ya(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=He(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),wc(e,t,r,i,n);case 15:return _f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Fi(e,t),t.tag=1,Ne(r)?(e=!0,ao(t)):e=!1,$n(t,n),Lf(t,r,i),wa(t,r,i,n),Sa(null,t,r,!0,e,n);case 19:return Uf(e,t,n);case 22:return Of(e,t,n)}throw Error(j(156,t.tag))};function oh(e,t){return zp(e,t)}function yx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new yx(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vx(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===hl)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Gl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return ln(n.children,i,o,t);case pl:s=8,i|=8;break;case Ws:return e=$e(12,n,t,i|2),e.elementType=Ws,e.lanes=o,e;case Hs:return e=$e(13,n,t,i),e.elementType=Hs,e.lanes=o,e;case Ks:return e=$e(19,n,t,i),e.elementType=Ks,e.lanes=o,e;case hp:return Bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pp:s=10;break e;case fp:s=9;break e;case fl:s=11;break e;case hl:s=14;break e;case Ct:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=hp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ql(e,t,n,r,i,o,s,a,l){return e=new wx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(o),e}function bx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sh(e){if(!e)return Ut;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ne(n))return sf(e,n,t)}return t}function ah(e,t,n,r,i,o,s,a,l){return e=ql(n,r,!0,e,i,o,s,a,l),e.context=sh(null),n=e.current,r=be(),i=Ft(n),o=yt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Jr(e,i,r),Ee(e,r),e}function Uo(e,t,n,r){var i=t.current,o=be(),s=Ft(i);return n=sh(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,s),e!==null&&(tt(e,i,s,o),Ii(e,i,s)),s}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function kx(){return null}var lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}Wo.prototype.render=Ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Uo(e,t,null,null)};Wo.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Uo(null,e,null,null)}),t[wt]=null}};function Wo(e){this._internalRoot=e}Wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_p();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&Fp(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Sx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=bo(s);o.call(c)}}var s=ah(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=s,e[wt]=s.current,Or(e.nodeType===8?e.parentNode:e),mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bo(l);a.call(c)}}var l=ql(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=l,e[wt]=l.current,Or(e.nodeType===8?e.parentNode:e),mn(function(){Uo(t,l,n,r)}),l}function Ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=bo(s);a.call(l)}}Uo(t,s,e,i)}else s=Sx(n,t,e,i,r);return bo(s)}Vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(xl(t,n|1),Ee(t,J()),!(_&6)&&(qn=J()+500,Yt()))}break;case 13:mn(function(){var r=bt(e,1);if(r!==null){var i=be();tt(r,e,1,i)}}),Xl(e,1)}};yl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();tt(t,e,134217728,n)}Xl(e,134217728)}};Ip=function(e){if(e.tag===13){var t=Ft(e),n=bt(e,t);if(n!==null){var r=be();tt(n,e,t,r)}Xl(e,t)}};_p=function(){return $};Op=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};na=function(e,t,n){switch(t){case"input":if(qs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vo(r);if(!i)throw Error(j(90));gp(r),qs(r,i)}}}break;case"textarea":yp(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};Tp=Hl;Pp=mn;var jx={usingClientEntryPoint:!1,Events:[ti,Cn,Vo,Sp,jp,Hl]},cr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tx={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ep(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Ao=Pi.inject(Tx),ut=Pi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(t))throw Error(j(200));return bx(e,t,null,n)};Ie.createRoot=function(e,t){if(!Zl(e))throw Error(j(299));var n=!1,r="",i=lh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ql(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Or(e.nodeType===8?e.parentNode:e),new Ql(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ep(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return mn(e)};Ie.hydrate=function(e,t,n){if(!Ho(t))throw Error(j(200));return Ko(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Zl(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ah(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wo(t)};Ie.render=function(e,t,n){if(!Ho(t))throw Error(j(200));return Ko(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Ho(e))throw Error(j(40));return e._reactRootContainer?(mn(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Hl;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ho(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ko(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh)}catch(e){console.error(e)}}uh(),lp.exports=Ie;var Px=lp.exports,Rc=Px;Bs.createRoot=Rc.createRoot,Bs.hydrateRoot=Rc.hydrateRoot;const ch=A.createContext({});function dh(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const Cx=typeof window<"u",ph=Cx?A.useLayoutEffect:A.useEffect,Jl=A.createContext(null);function eu(e,t){e.indexOf(t)===-1&&e.push(t)}function ko(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const pt=(e,t,n)=>n>t?t:n<e?e:n;let tu=()=>{};const Wt={},fh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function hh(e){return typeof e=="object"&&e!==null}const mh=e=>/^0[^.\s]+$/u.test(e);function gh(e){let t;return()=>(t===void 0&&(t=e()),t)}const We=e=>e,Nx=(e,t)=>n=>t(e(n)),ri=(...e)=>e.reduce(Nx),Gr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class nu{constructor(){this.subscriptions=[]}add(t){return eu(this.subscriptions,t),()=>ko(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Le=e=>e*1e3,Be=e=>e/1e3;function xh(e,t){return t?e*(1e3/t):0}const yh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ex=1e-7,Mx=12;function zx(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=yh(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Ex&&++a<Mx);return s}function ii(e,t,n,r){if(e===t&&n===r)return We;const i=o=>zx(o,0,1,e,n);return o=>o===0||o===1?o:yh(i(o),t,r)}const vh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,wh=e=>t=>1-e(1-t),bh=ii(.33,1.53,.69,.99),ru=wh(bh),kh=vh(ru),Sh=e=>e>=1?1:(e*=2)<1?.5*ru(e):.5*(2-Math.pow(2,-10*(e-1))),iu=e=>1-Math.sin(Math.acos(e)),jh=wh(iu),Th=vh(iu),Ax=ii(.42,0,1,1),Dx=ii(0,0,.58,1),Ph=ii(.42,0,.58,1),Rx=e=>Array.isArray(e)&&typeof e[0]!="number",Ch=e=>Array.isArray(e)&&typeof e[0]=="number",Lx={linear:We,easeIn:Ax,easeInOut:Ph,easeOut:Dx,circIn:iu,circInOut:Th,circOut:jh,backIn:ru,backInOut:kh,backOut:bh,anticipate:Sh},Vx=e=>typeof e=="string",Lc=e=>{if(Ch(e)){tu(e.length===4);const[t,n,r,i]=e;return ii(t,n,r,i)}else if(Vx(e))return Lx[e];return e},Ci=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ix(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(d){s.has(d)&&(c.schedule(d),e()),d(a)}const c={schedule:(d,p=!1,f=!1)=>{const y=f&&i?n:r;return p&&s.add(d),y.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(a=d,i){o=!0;return}i=!0;const p=n;n=r,r=p,n.forEach(l),n.clear(),i=!1,o&&(o=!1,c.process(d))}};return c}const _x=40;function Nh(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ci.reduce((g,w)=>(g[w]=Ix(o),g),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:p,preRender:f,render:x,postRender:y}=s,b=()=>{const g=Wt.useManualTiming,w=g?i.timestamp:performance.now();n=!1,g||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,_x),1)),i.timestamp=w,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),p.process(i),f.process(i),x.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(b))},k=()=>{n=!0,r=!0,i.isProcessing||e(b)};return{schedule:Ci.reduce((g,w)=>{const S=s[w];return g[w]=(N,E=!1,T=!1)=>(n||k(),S.schedule(N,E,T)),g},{}),cancel:g=>{for(let w=0;w<Ci.length;w++)s[Ci[w]].cancel(g)},state:i,steps:s}}const{schedule:F,cancel:ft,state:de,steps:Ts}=Nh(typeof requestAnimationFrame<"u"?requestAnimationFrame:We,!0);let Wi;function Ox(){Wi=void 0}const ve={now:()=>(Wi===void 0&&ve.set(de.isProcessing||Wt.useManualTiming?de.timestamp:performance.now()),Wi),set:e=>{Wi=e,queueMicrotask(Ox)}},Eh=e=>t=>typeof t=="string"&&t.startsWith(e),Mh=Eh("--"),Fx=Eh("var(--"),ou=e=>Fx(e)?$x.test(e.split("/*")[0].trim()):!1,$x=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Vc(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const er={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},qr={...er,transform:e=>pt(0,1,e)},Ni={...er,default:1},Cr=e=>Math.round(e*1e5)/1e5,su=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Bx(e){return e==null}const Ux=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,au=(e,t)=>n=>!!(typeof n=="string"&&Ux.test(n)&&n.startsWith(e)||t&&!Bx(n)&&Object.prototype.hasOwnProperty.call(n,t)),zh=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(su);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Wx=e=>pt(0,255,e),Ps={...er,transform:e=>Math.round(Wx(e))},on={test:au("rgb","red"),parse:zh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ps.transform(e)+", "+Ps.transform(t)+", "+Ps.transform(n)+", "+Cr(qr.transform(r))+")"};function Hx(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const La={test:au("#"),parse:Hx,transform:on.transform},oi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Tt=oi("deg"),dt=oi("%"),z=oi("px"),Kx=oi("vh"),Yx=oi("vw"),Ic={...dt,parse:e=>dt.parse(e)/100,transform:e=>dt.transform(e*100)},Rn={test:au("hsl","hue"),parse:zh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+dt.transform(Cr(t))+", "+dt.transform(Cr(n))+", "+Cr(qr.transform(r))+")"},ne={test:e=>on.test(e)||La.test(e)||Rn.test(e),parse:e=>on.test(e)?on.parse(e):Rn.test(e)?Rn.parse(e):La.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?on.transform(e):Rn.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},Gx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qx(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(su))==null?void 0:t.length)||0)+(((n=e.match(Gx))==null?void 0:n.length)||0)>0}const Ah="number",Dh="color",Xx="var",Qx="var(",_c="${}",Zx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xn(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(Zx,l=>(ne.test(l)?(r.color.push(o),i.push(Dh),n.push(ne.parse(l))):l.startsWith(Qx)?(r.var.push(o),i.push(Xx),n.push(l)):(r.number.push(o),i.push(Ah),n.push(parseFloat(l))),++o,_c)).split(_c);return{values:n,split:a,indexes:r,types:i}}function Jx(e){return Xn(e).values}function Rh({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===Ah?i+=Cr(r[o]):s===Dh?i+=ne.transform(r[o]):i+=r[o]}return i}}function ey(e){return Rh(Xn(e))}const ty=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e,ny=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:ty(e);function ry(e){const t=Xn(e);return Rh(t)(t.values.map((r,i)=>ny(r,t.split[i])))}const nt={test:qx,parse:Jx,createTransformer:ey,getAnimatableNone:ry};function Cs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function iy({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Cs(l,a,e+1/3),o=Cs(l,a,e),s=Cs(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function So(e,t){return n=>n>0?t:e}const H=(e,t,n)=>e+(t-e)*n,Ns=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},oy=[La,on,Rn],sy=e=>oy.find(t=>t.test(e));function Oc(e){const t=sy(e);if(!t)return!1;let n=t.parse(e);return t===Rn&&(n=iy(n)),n}const Fc=(e,t)=>{const n=Oc(e),r=Oc(t);if(!n||!r)return So(e,t);const i={...n};return o=>(i.red=Ns(n.red,r.red,o),i.green=Ns(n.green,r.green,o),i.blue=Ns(n.blue,r.blue,o),i.alpha=H(n.alpha,r.alpha,o),on.transform(i))},Va=new Set(["none","hidden"]);function ay(e,t){return Va.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function ly(e,t){return n=>H(e,t,n)}function lu(e){return typeof e=="number"?ly:typeof e=="string"?ou(e)?So:ne.test(e)?Fc:dy:Array.isArray(e)?Lh:typeof e=="object"?ne.test(e)?Fc:uy:So}function Lh(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>lu(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function uy(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=lu(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function cy(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const dy=(e,t)=>{const n=nt.createTransformer(t),r=Xn(e),i=Xn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Va.has(e)&&!i.values.length||Va.has(t)&&!r.values.length?ay(e,t):ri(Lh(cy(r,i),i.values),n):So(e,t)};function Vh(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?H(e,t,n):lu(e)(e,t)}const py=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>F.update(t,n),stop:()=>ft(t),now:()=>de.isProcessing?de.timestamp:ve.now()}},Ih=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},jo=2e4;function uu(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<jo;)t+=n,r=e.next(t);return t>=jo?1/0:t}function fy(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(uu(r),jo);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Be(i)}}const Q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ia(e,t){return e*Math.sqrt(1-t*t)}const hy=12;function my(e,t,n){let r=n;for(let i=1;i<hy;i++)r=r-e(r)/t(r);return r}const Es=.001;function gy({duration:e=Q.duration,bounce:t=Q.bounce,velocity:n=Q.velocity,mass:r=Q.mass}){let i,o,s=1-t;s=pt(Q.minDamping,Q.maxDamping,s),e=pt(Q.minDuration,Q.maxDuration,Be(e)),s<1?(i=c=>{const d=c*s,p=d*e,f=d-n,x=Ia(c,s),y=Math.exp(-p);return Es-f/x*y},o=c=>{const p=c*s*e,f=p*n+n,x=Math.pow(s,2)*Math.pow(c,2)*e,y=Math.exp(-p),b=Ia(Math.pow(c,2),s);return(-i(c)+Es>0?-1:1)*((f-x)*y)/b}):(i=c=>{const d=Math.exp(-c*e),p=(c-n)*e+1;return-Es+d*p},o=c=>{const d=Math.exp(-c*e),p=(n-c)*(e*e);return d*p});const a=5/e,l=my(i,o,a);if(e=Le(e),isNaN(l))return{stiffness:Q.stiffness,damping:Q.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const xy=["duration","bounce"],yy=["stiffness","damping","mass"];function $c(e,t){return t.some(n=>e[n]!==void 0)}function vy(e){let t={velocity:Q.velocity,stiffness:Q.stiffness,damping:Q.damping,mass:Q.mass,isResolvedFromDuration:!1,...e};if(!$c(e,yy)&&$c(e,xy))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*pt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Q.mass,stiffness:i,damping:o}}else{const n=gy({...e,velocity:0});t={...t,...n,mass:Q.mass},t.isResolvedFromDuration=!0}return t}function To(e=Q.visualDuration,t=Q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:p,velocity:f,isResolvedFromDuration:x}=vy({...n,velocity:-Be(n.velocity||0)}),y=f||0,b=c/(2*Math.sqrt(l*d)),k=s-o,m=Be(Math.sqrt(l/d)),h=Math.abs(k)<5;r||(r=h?Q.restSpeed.granular:Q.restSpeed.default),i||(i=h?Q.restDelta.granular:Q.restDelta.default);let g,w,S,N,E,T;if(b<1)S=Ia(m,b),N=(y+b*m*k)/S,g=C=>{const O=Math.exp(-b*m*C);return s-O*(N*Math.sin(S*C)+k*Math.cos(S*C))},E=b*m*N+k*S,T=b*m*k-N*S,w=C=>Math.exp(-b*m*C)*(E*Math.sin(S*C)+T*Math.cos(S*C));else if(b===1){g=O=>s-Math.exp(-m*O)*(k+(y+m*k)*O);const C=y+m*k;w=O=>Math.exp(-m*O)*(m*C*O-y)}else{const C=m*Math.sqrt(b*b-1);g=ze=>{const Ye=Math.exp(-b*m*ze),je=Math.min(C*ze,300);return s-Ye*((y+b*m*k)*Math.sinh(je)+C*k*Math.cosh(je))/C};const O=(y+b*m*k)/C,ee=b*m*O-k*C,Me=b*m*k-O*C;w=ze=>{const Ye=Math.exp(-b*m*ze),je=Math.min(C*ze,300);return Ye*(ee*Math.sinh(je)+Me*Math.cosh(je))}}const V={calculatedDuration:x&&p||null,velocity:C=>Le(w(C)),next:C=>{if(!x&&b<1){const ee=Math.exp(-b*m*C),Me=Math.sin(S*C),ze=Math.cos(S*C),Ye=s-ee*(N*Me+k*ze),je=Le(ee*(E*Me+T*ze));return a.done=Math.abs(je)<=r&&Math.abs(s-Ye)<=i,a.value=a.done?s:Ye,a}const O=g(C);if(x)a.done=C>=p;else{const ee=Le(w(C));a.done=Math.abs(ee)<=r&&Math.abs(s-O)<=i}return a.value=a.done?s:O,a},toString:()=>{const C=Math.min(uu(V),jo),O=Ih(ee=>V.next(C*ee).value,C,30);return C+"ms "+O},toTransition:()=>{}};return V}To.applyToOptions=e=>{const t=fy(e,100,To);return e.ease=t.ease,e.duration=Le(t.duration),e.type="keyframes",e};const wy=5;function _h(e,t,n){const r=Math.max(t-wy,0);return xh(n-e(r),t-r)}function _a({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},x=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let b=n*t;const k=p+b,m=s===void 0?k:s(k);m!==k&&(b=m-p);const h=T=>-b*Math.exp(-T/r),g=T=>m+h(T),w=T=>{const V=h(T),C=g(T);f.done=Math.abs(V)<=c,f.value=f.done?m:C};let S,N;const E=T=>{x(f.value)&&(S=T,N=To({keyframes:[f.value,y(f.value)],velocity:_h(g,T,f.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return E(0),{calculatedDuration:null,next:T=>{let V=!1;return!N&&S===void 0&&(V=!0,w(T),E(T)),S!==void 0&&T>=S?N.next(T-S):(!V&&w(T),f)}}}function by(e,t,n){const r=[],i=n||Wt.mix||Vh,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||We:t;a=ri(l,a)}r.push(a)}return r}function ky(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(tu(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=by(t,r,i),l=a.length,c=d=>{if(s&&d<e[0])return t[0];let p=0;if(l>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const f=Gr(e[p],e[p+1],d);return a[p](f)};return n?d=>c(pt(e[0],e[o-1],d)):c}function Sy(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Gr(0,t,r);e.push(H(n,1,i))}}function jy(e){const t=[0];return Sy(t,e.length-1),t}function Ty(e,t){return e.map(n=>n*t)}function Py(e,t){return e.map(()=>t||Ph).splice(0,e.length-1)}function Nr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Rx(r)?r.map(Lc):Lc(r),o={done:!1,value:t[0]},s=Ty(n&&n.length===t.length?n:jy(t),e),a=ky(s,t,{ease:Array.isArray(i)?i:Py(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Cy=e=>e!==null;function Yo(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(Cy),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const Ny={decay:_a,inertia:_a,tween:Nr,keyframes:Nr,spring:To};function Oh(e){typeof e.type=="string"&&(e.type=Ny[e.type])}class cu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const Ey=e=>e/100;class Po extends cu{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ve.now()&&this.tick(ve.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Oh(t);const{type:n=Nr,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||Nr;l!==Nr&&typeof a[0]!="number"&&(this.mixKeyframes=ri(Ey,Vh(a[0],a[1])),a=[0,100]);const c=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=uu(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:p,repeatType:f,repeatDelay:x,type:y,onUpdate:b,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const m=this.currentTime-c*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?m<0:m>i;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let g=this.currentTime,w=r;if(p){const T=Math.min(this.currentTime,i)/a;let V=Math.floor(T),C=T%1;!C&&T>=1&&(C=1),C===1&&V--,V=Math.min(V,p+1),!!(V%2)&&(f==="reverse"?(C=1-C,x&&(C-=x/a)):f==="mirror"&&(w=s)),g=pt(0,1,C)*a}let S;h?(this.delayState.value=d[0],S=this.delayState):S=w.next(g),o&&!h&&(S.value=o(S.value));let{done:N}=S;!h&&l!==null&&(N=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return E&&y!==_a&&(S.value=Yo(d,this.options,k,this.speed)),b&&b(S.value),E&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return Be(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(this.currentTime)}set time(t){t=Le(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return _h(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(ve.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Be(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=py,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ve.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function My(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const sn=e=>e*180/Math.PI,Oa=e=>{const t=sn(Math.atan2(e[1],e[0]));return Fa(t)},zy={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Oa,rotateZ:Oa,skewX:e=>sn(Math.atan(e[1])),skewY:e=>sn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fa=e=>(e=e%360,e<0&&(e+=360),e),Bc=Oa,Uc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Wc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ay={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Uc,scaleY:Wc,scale:e=>(Uc(e)+Wc(e))/2,rotateX:e=>Fa(sn(Math.atan2(e[6],e[5]))),rotateY:e=>Fa(sn(Math.atan2(-e[2],e[0]))),rotateZ:Bc,rotate:Bc,skewX:e=>sn(Math.atan(e[4])),skewY:e=>sn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function $a(e){return e.includes("scale")?1:0}function Ba(e,t){if(!e||e==="none")return $a(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Ay,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=zy,i=a}if(!i)return $a(t);const o=r[t],s=i[1].split(",").map(Ry);return typeof o=="function"?o(s):s[o]}const Dy=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ba(n,t)};function Ry(e){return parseFloat(e.trim())}const tr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],nr=new Set(tr),Hc=e=>e===er||e===z,Ly=new Set(["x","y","z"]),Vy=tr.filter(e=>!Ly.has(e));function Iy(e){const t=[];return Vy.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Dt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ba(t,"x"),y:(e,{transform:t})=>Ba(t,"y")};Dt.translateX=Dt.x;Dt.translateY=Dt.y;const un=new Set;let Ua=!1,Wa=!1,Ha=!1;function Fh(){if(Wa){const e=Array.from(un).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Iy(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Wa=!1,Ua=!1,un.forEach(e=>e.complete(Ha)),un.clear()}function $h(){un.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wa=!0)})}function _y(){Ha=!0,$h(),Fh(),Ha=!1}class du{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(un.add(this),Ua||(Ua=!0,F.read($h),F.resolveKeyframes(Fh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}My(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),un.delete(this)}cancel(){this.state==="scheduled"&&(un.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Oy=e=>e.startsWith("--");function Bh(e,t,n){Oy(t)?e.style.setProperty(t,n):e.style[t]=n}const Fy={};function Uh(e,t){const n=gh(e);return()=>Fy[t]??n()}const $y=Uh(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Wh=Uh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),gr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Kc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:gr([0,.65,.55,1]),circOut:gr([.55,0,1,.45]),backIn:gr([.31,.01,.66,-.59]),backOut:gr([.33,1.53,.69,.99])};function Hh(e,t){if(e)return typeof e=="function"?Wh()?Ih(e,t):"ease-out":Ch(e)?gr(e):Array.isArray(e)?e.map(n=>Hh(n,t)||Kc.easeOut):Kc[e]}function By(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const d={[t]:n};l&&(d.offset=l);const p=Hh(a,i);Array.isArray(p)&&(d.easing=p);const f={delay:r,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),e.animate(d,f)}function Kh(e){return typeof e=="function"&&"applyToOptions"in e}function Uy({type:e,...t}){return Kh(e)&&Wh()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Yh extends cu{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,tu(typeof t.type!="string");const c=Uy(t);this.animation=By(n,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Yo(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Bh(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Be(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Le(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&$y()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),We):i(this)}}const Gh={anticipate:Sh,backInOut:kh,circInOut:Th};function Wy(e){return e in Gh}function Hy(e){typeof e.ease=="string"&&Wy(e.ease)&&(e.ease=Gh[e.ease])}const Ms=10;class Ky extends Yh{constructor(t){Hy(t),Oh(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Po({...s,autoplay:!1}),l=Math.max(Ms,ve.now()-this.startTime),c=pt(0,Ms,l-Ms),d=a.sample(l).value,{name:p}=this.options;o&&p&&Bh(o,p,d),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,d,c),a.stop()}}const Yc=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(nt.test(e)||e==="0")&&!e.startsWith("url("));function Yy(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Gy(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Yc(i,t),a=Yc(o,t);return!s||!a?!1:Yy(e)||(n==="spring"||Kh(n))&&r}function Ka(e){e.duration=0,e.type="keyframes"}const qh=new Set(["opacity","clipPath","filter","transform"]),qy=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Xy(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&qy.test(e[t]))return!0;return!1}const Qy=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Zy=gh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Jy(e){var p;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:a}=e;if(!(((p=t==null?void 0:t.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return Zy()&&n&&(qh.has(n)||Qy.has(n)&&Xy(a))&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const e1=40;class t1 extends cu{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:d,...p}){var y;super(),this.stop=()=>{var b,k;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=ve.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:d,...p},x=(d==null?void 0:d.KeyframeResolver)||du;this.keyframeResolver=new x(a,(b,k,m)=>this.onKeyframesResolved(b,k,f,!m),l,c,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var m,h;this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=r;this.resolvedAt=ve.now();let p=!0;Gy(t,o,s,a)||(p=!1,(Wt.instantAnimations||!l)&&(d==null||d(Yo(t,r,n))),t[0]=t[t.length-1],Ka(r),r.repeat=0);const x={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>e1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=p&&!c&&Jy(x),b=(h=(m=x.motionValue)==null?void 0:m.owner)==null?void 0:h.current;let k;if(y)try{k=new Ky({...x,element:b})}catch{k=new Po(x)}else k=new Po(x);k.finished.then(()=>{this.notifyFinished()}).catch(We),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),_y()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Xh(e,t,n,r=0,i=1){const o=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const n1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function r1(e){const t=n1.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Qh(e,t,n=1){const[r,i]=r1(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return fh(s)?parseFloat(s):s}return ou(i)?Qh(i,t,n+1):i}const i1={type:"spring",stiffness:500,damping:25,restSpeed:10},o1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),s1={type:"keyframes",duration:.8},a1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},l1=(e,{keyframes:t})=>t.length>2?s1:nr.has(e)?e.startsWith("scale")?o1(t[1]):i1:a1;function Zh(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function pu(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Zh(n,e):n}const u1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function c1(e){for(const t in e)if(!u1.has(t))return!0;return!1}const fu=(e,t,n,r={},i,o)=>s=>{const a=pu(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Le(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};c1(a)||Object.assign(d,l1(e,d)),d.duration&&(d.duration=Le(d.duration)),d.repeatDelay&&(d.repeatDelay=Le(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Ka(d),d.delay===0&&(p=!0)),(Wt.instantAnimations||Wt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(p=!0,Ka(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,p&&!o&&t.get()!==void 0){const f=Yo(d.keyframes,a);if(f!==void 0){F.update(()=>{d.onUpdate(f),d.onComplete()});return}}return a.isSync?new Po(d):new t1(d)};function Gc(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function hu(e,t,n,r){if(typeof t=="function"){const[i,o]=Gc(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Gc(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function cn(e,t,n){const r=e.getProps();return hu(r,t,n!==void 0?n:r.custom,e)}const Jh=new Set(["width","height","top","left","right","bottom",...tr]),qc=30,d1=e=>!isNaN(parseFloat(e));class p1{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=ve.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ve.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=d1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new nu);const r=this.events[t].add(n);return t==="change"?()=>{r(),F.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ve.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>qc)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,qc);return xh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gn(e,t){return new p1(e,t)}const Ya=e=>Array.isArray(e);function f1(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gn(n))}function h1(e){return Ya(e)?e[e.length-1]||0:e}function m1(e,t){const n=cn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=h1(o[s]);f1(e,s,a)}}const ae=e=>!!(e&&e.getVelocity);function g1(e){return!!(ae(e)&&e.add)}function Ga(e,t){const n=e.getValue("willChange");if(g1(n))return n.add(t);if(!n&&Wt.WillChange){const r=new Wt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function mu(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const x1="framerAppearId",em="data-"+mu(x1);function tm(e){return e.props[em]}function y1({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function nm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...a}=t;const l=e.getDefaultTransition();o=o?Zh(o,l):l;const c=o==null?void 0:o.reduceMotion;r&&(o=r);const d=[],p=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const x=e.getValue(f,e.latestValues[f]??null),y=a[f];if(y===void 0||p&&y1(p,f))continue;const b={delay:n,...pu(o||{},f)},k=x.get();if(k!==void 0&&!x.isAnimating()&&!Array.isArray(y)&&y===k&&!b.velocity){F.update(()=>x.set(y));continue}let m=!1;if(window.MotionHandoffAnimation){const w=tm(e);if(w){const S=window.MotionHandoffAnimation(w,f,F);S!==null&&(b.startTime=S,m=!0)}}Ga(e,f);const h=c??e.shouldReduceMotion;x.start(fu(f,x,y,h&&Jh.has(f)?{type:!1}:b,e,m));const g=x.animation;g&&d.push(g)}if(s){const f=()=>F.update(()=>{s&&m1(e,s)});d.length?Promise.all(d).then(f):f()}return d}function qa(e,t,n={}){var l;const r=cn(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(nm(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=i;return v1(e,t,c,d,p,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function v1(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(qa(l,t,{...s,delay:n+(typeof r=="function"?0:r)+Xh(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function w1(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>qa(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=qa(e,t,n);else{const i=typeof t=="function"?cn(e,t,n.custom):t;r=Promise.all(nm(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const b1={test:e=>e==="auto",parse:e=>e},rm=e=>t=>t.test(e),im=[er,z,dt,Tt,Yx,Kx,b1],Xc=e=>im.find(rm(e));function k1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||mh(e):!0}const S1=new Set(["brightness","contrast","saturate","opacity"]);function j1(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(su)||[];if(!r)return e;const i=n.replace(r,"");let o=S1.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const T1=/\b([a-z-]*)\(.*?\)/gu,Xa={...nt,getAnimatableNone:e=>{const t=e.match(T1);return t?t.map(j1).join(" "):e}},Qa={...nt,getAnimatableNone:e=>{const t=nt.parse(e);return nt.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Qc={...er,transform:Math.round},P1={rotate:Tt,rotateX:Tt,rotateY:Tt,rotateZ:Tt,scale:Ni,scaleX:Ni,scaleY:Ni,scaleZ:Ni,skew:Tt,skewX:Tt,skewY:Tt,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:qr,originX:Ic,originY:Ic,originZ:z},gu={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,inset:z,insetBlock:z,insetBlockStart:z,insetBlockEnd:z,insetInline:z,insetInlineStart:z,insetInlineEnd:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,paddingBlock:z,paddingBlockStart:z,paddingBlockEnd:z,paddingInline:z,paddingInlineStart:z,paddingInlineEnd:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,marginBlock:z,marginBlockStart:z,marginBlockEnd:z,marginInline:z,marginInlineStart:z,marginInlineEnd:z,fontSize:z,backgroundPositionX:z,backgroundPositionY:z,...P1,zIndex:Qc,fillOpacity:qr,strokeOpacity:qr,numOctaves:Qc},C1={...gu,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:Xa,WebkitFilter:Xa,mask:Qa,WebkitMask:Qa},om=e=>C1[e],N1=new Set([Xa,Qa]);function sm(e,t){let n=om(e);return N1.has(n)||(n=nt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const E1=new Set(["auto","none","0"]);function M1(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!E1.has(o)&&Xn(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=sm(n,i)}class z1 extends du{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let p=t[d];if(typeof p=="string"&&(p=p.trim(),ou(p))){const f=Qh(p,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Jh.has(r)||t.length!==2)return;const[i,o]=t,s=Xc(i),a=Xc(o),l=Vc(i),c=Vc(o);if(l!==c&&Dt[r]){this.needsMeasurement=!0;return}if(s!==a)if(Hc(s)&&Hc(a))for(let d=0;d<t.length;d++){const p=t[d];typeof p=="string"&&(t[d]=parseFloat(p))}else Dt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||k1(t[i]))&&r.push(i);r.length&&M1(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Dt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Dt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function am(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const lm=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function A1(e){return hh(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:xu}=Nh(queueMicrotask,!1),Xe={x:!1,y:!1};function um(){return Xe.x||Xe.y}function D1(e){return e==="x"||e==="y"?Xe[e]?null:(Xe[e]=!0,()=>{Xe[e]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function cm(e,t){const n=am(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function R1(e){return!(e.pointerType==="touch"||um())}function L1(e,t,n={}){const[r,i,o]=cm(e,n);return r.forEach(s=>{let a=!1,l=!1,c;const d=()=>{s.removeEventListener("pointerleave",y)},p=k=>{c&&(c(k),c=void 0),d()},f=k=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,p(k))},x=()=>{a=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},y=k=>{if(k.pointerType!=="touch"){if(a){l=!0;return}p(k)}},b=k=>{if(!R1(k))return;l=!1;const m=t(s,k);typeof m=="function"&&(c=m,s.addEventListener("pointerleave",y,i))};s.addEventListener("pointerenter",b,i),s.addEventListener("pointerdown",x,i)}),o}const dm=(e,t)=>t?e===t?!0:dm(e,t.parentElement):!1,yu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,V1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function I1(e){return V1.has(e.tagName)||e.isContentEditable===!0}const _1=new Set(["INPUT","SELECT","TEXTAREA"]);function O1(e){return _1.has(e.tagName)||e.isContentEditable===!0}const Hi=new WeakSet;function Zc(e){return t=>{t.key==="Enter"&&e(t)}}function zs(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const F1=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Zc(()=>{if(Hi.has(n))return;zs(n,"down");const i=Zc(()=>{zs(n,"up")}),o=()=>zs(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Jc(e){return yu(e)&&!um()}const ed=new WeakSet;function $1(e,t,n={}){const[r,i,o]=cm(e,n),s=a=>{const l=a.currentTarget;if(!Jc(a)||ed.has(a))return;Hi.add(l),n.stopPropagation&&ed.add(a);const c=t(l,a),d=(x,y)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",f),Hi.has(l)&&Hi.delete(l),Jc(x)&&typeof c=="function"&&c(x,{success:y})},p=x=>{d(x,l===window||l===document||n.useGlobalTarget||dm(l,x.target))},f=x=>{d(x,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),A1(a)&&(a.addEventListener("focus",c=>F1(c,i)),!I1(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function vu(e){return hh(e)&&"ownerSVGElement"in e}const Ki=new WeakMap;let Pt;const pm=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:vu(r)&&"getBBox"in r?r.getBBox()[t]:r[n],B1=pm("inline","width","offsetWidth"),U1=pm("block","height","offsetHeight");function W1({target:e,borderBoxSize:t}){var n;(n=Ki.get(e))==null||n.forEach(r=>{r(e,{get width(){return B1(e,t)},get height(){return U1(e,t)}})})}function H1(e){e.forEach(W1)}function K1(){typeof ResizeObserver>"u"||(Pt=new ResizeObserver(H1))}function Y1(e,t){Pt||K1();const n=am(e);return n.forEach(r=>{let i=Ki.get(r);i||(i=new Set,Ki.set(r,i)),i.add(t),Pt==null||Pt.observe(r)}),()=>{n.forEach(r=>{const i=Ki.get(r);i==null||i.delete(t),i!=null&&i.size||Pt==null||Pt.unobserve(r)})}}const Yi=new Set;let Ln;function G1(){Ln=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Yi.forEach(t=>t(e))},window.addEventListener("resize",Ln)}function q1(e){return Yi.add(e),Ln||G1(),()=>{Yi.delete(e),!Yi.size&&typeof Ln=="function"&&(window.removeEventListener("resize",Ln),Ln=void 0)}}function td(e,t){return typeof e=="function"?q1(e):Y1(e,t)}function X1(e){return vu(e)&&e.tagName==="svg"}const Q1=[...im,ne,nt],Z1=e=>Q1.find(rm(e)),nd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vn=()=>({x:nd(),y:nd()}),rd=()=>({min:0,max:0}),ie=()=>({x:rd(),y:rd()}),J1=new WeakMap;function Go(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Xr(e){return typeof e=="string"||Array.isArray(e)}const wu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bu=["initial",...wu];function qo(e){return Go(e.animate)||bu.some(t=>Xr(e[t]))}function fm(e){return!!(qo(e)||e.variants)}function ev(e,t,n){for(const r in t){const i=t[r],o=n[r];if(ae(i))e.addValue(r,i);else if(ae(o))e.addValue(r,gn(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,gn(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Za={current:null},hm={current:!1},tv=typeof window<"u";function nv(){if(hm.current=!0,!!tv)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Za.current=e.matches;e.addEventListener("change",t),t()}else Za.current=!1}const id=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Co={};function mm(e){Co=e}function rv(){return Co}class iv{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=du,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ve.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,F.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=qo(n),this.isVariantNode=fm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in f){const y=f[x];c[x]!==void 0&&ae(y)&&y.set(c[x])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,J1.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hm.current||nv(),this.shouldReduceMotion=Za.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),ft(this.notifyUpdate),ft(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&qh.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:a,times:l,ease:c,duration:d}=n.accelerate,p=new Yh({element:this.current,name:t,keyframes:a,times:l,ease:c,duration:Le(d)}),f=s(p);this.valueSubscriptions.set(t,()=>{f(),p.cancel()});return}const r=nr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&F.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Co){const n=Co[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<id.length;r++){const i=id[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=ev(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=gn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(fh(r)||mh(r))?r=parseFloat(r):!Z1(r)&&nt.test(n)&&(r=sm(t,n)),this.setBaseTarget(t,ae(r)?r.get():r)),ae(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=hu(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!ae(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new nu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){xu.render(this.render)}}class gm extends iv{constructor(){super(...arguments),this.KeyframeResolver=z1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ae(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Gt{constructor(t){this.isMounted=!1,this.node=t}update(){}}function xm({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ov({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function sv(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function As(e){return e===void 0||e===1}function Ja({scale:e,scaleX:t,scaleY:n}){return!As(e)||!As(t)||!As(n)}function en(e){return Ja(e)||ym(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ym(e){return od(e.x)||od(e.y)}function od(e){return e&&e!=="0%"}function No(e,t,n){const r=e-n,i=t*r;return n+i}function sd(e,t,n,r,i){return i!==void 0&&(e=No(e,i,r)),No(e,n,r)+t}function el(e,t=0,n=1,r,i){e.min=sd(e.min,t,n,r,i),e.max=sd(e.max,t,n,r,i)}function vm(e,{x:t,y:n}){el(e.x,t.translate,t.scale,t.originPoint),el(e.y,n.translate,n.scale,n.originPoint)}const ad=.999999999999,ld=1.0000000000001;function av(e,t,n,r=!1){var a;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(at(e.x,-o.scroll.offset.x),at(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,vm(e,s)),r&&en(o.latestValues)&&Gi(e,o.latestValues,(a=o.layout)==null?void 0:a.layoutBox))}t.x<ld&&t.x>ad&&(t.x=1),t.y<ld&&t.y>ad&&(t.y=1)}function at(e,t){e.min+=t,e.max+=t}function ud(e,t,n,r,i=.5){const o=H(e.min,e.max,i);el(e,t,n,o,r)}function cd(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Gi(e,t,n){const r=n??e;ud(e.x,cd(t.x,r.x),t.scaleX,t.scale,t.originX),ud(e.y,cd(t.y,r.y),t.scaleY,t.scale,t.originY)}function wm(e,t){return xm(sv(e.getBoundingClientRect(),t))}function lv(e,t,n){const r=wm(e,n),{scroll:i}=t;return i&&(at(r.x,i.offset.x),at(r.y,i.offset.y)),r}const uv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cv=tr.length;function dv(e,t,n){let r="",i=!0;for(let o=0;o<cv;o++){const s=tr[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(s.startsWith("scale")?1:0);else{const c=parseFloat(a);l=s.startsWith("scale")?c===1:c===0}if(!l||n){const c=lm(a,gu[s]);if(!l){i=!1;const d=uv[s]||s;r+=`${d}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function ku(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(nr.has(l)){s=!0;continue}else if(Mh(l)){i[l]=c;continue}else{const d=lm(c,gu[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=dv(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function bm(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function dd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const dr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=dd(e,t.target.x),r=dd(e,t.target.y);return`${n}% ${r}%`}},pv={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=nt.parse(e);if(i.length>5)return r;const o=nt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=H(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},tl={borderRadius:{...dr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:dr,borderTopRightRadius:dr,borderBottomLeftRadius:dr,borderBottomRightRadius:dr,boxShadow:pv};function km(e,{layout:t,layoutId:n}){return nr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!tl[e]||e==="opacity")}function Su(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(ae(r[a])||i&&ae(i[a])||km(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function fv(e){return window.getComputedStyle(e)}class hv extends gm{constructor(){super(...arguments),this.type="html",this.renderInstance=bm}readValueFromInstance(t,n){var r;if(nr.has(n))return(r=this.projection)!=null&&r.isProjecting?$a(n):Dy(t,n);{const i=fv(t),o=(Mh(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return wm(t,n)}build(t,n,r){ku(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Su(t,n,r)}}const mv={offset:"stroke-dashoffset",array:"stroke-dasharray"},gv={offset:"strokeDashoffset",array:"strokeDasharray"};function xv(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?mv:gv;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const yv=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Sm(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(ku(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:f}=e;p.transform&&(f.transform=p.transform,delete p.transform),(f.transform||p.transformOrigin)&&(f.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete p.transformBox);for(const x of yv)p[x]!==void 0&&(f[x]=p[x],delete p[x]);t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),i!==void 0&&xv(p,i,o,s,!1)}const jm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Tm=e=>typeof e=="string"&&e.toLowerCase()==="svg";function vv(e,t,n,r){bm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(jm.has(i)?i:mu(i),t.attrs[i])}function Pm(e,t,n){const r=Su(e,t,n);for(const i in e)if(ae(e[i])||ae(t[i])){const o=tr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class wv extends gm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(nr.has(n)){const r=om(n);return r&&r.default||0}return n=jm.has(n)?n:mu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Pm(t,n,r)}build(t,n,r){Sm(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){vv(t,n,r,i)}mount(t){this.isSVGTag=Tm(t.tagName),super.mount(t)}}const bv=bu.length;function Cm(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Cm(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<bv;n++){const r=bu[n],i=e.props[r];(Xr(i)||i===!1)&&(t[r]=i)}return t}function Nm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const kv=[...wu].reverse(),Sv=wu.length;function jv(e){return t=>Promise.all(t.map(({animation:n,options:r})=>w1(e,n,r)))}function Tv(e){let t=jv(e),n=pd(),r=!0,i=!1;const o=c=>(d,p)=>{var x;const f=cn(e,p,c==="exit"?(x=e.presenceContext)==null?void 0:x.custom:void 0);if(f){const{transition:y,transitionEnd:b,...k}=f;d={...d,...k,...b}}return d};function s(c){t=c(e)}function a(c){const{props:d}=e,p=Cm(e.parent)||{},f=[],x=new Set;let y={},b=1/0;for(let m=0;m<Sv;m++){const h=kv[m],g=n[h],w=d[h]!==void 0?d[h]:p[h],S=Xr(w),N=h===c?g.isActive:null;N===!1&&(b=m);let E=w===p[h]&&w!==d[h]&&S;if(E&&(r||i)&&e.manuallyAnimateOnMount&&(E=!1),g.protectedKeys={...y},!g.isActive&&N===null||!w&&!g.prevProp||Go(w)||typeof w=="boolean")continue;if(h==="exit"&&g.isActive&&N!==!0){g.prevResolvedValues&&(y={...y,...g.prevResolvedValues});continue}const T=Pv(g.prevProp,w);let V=T||h===c&&g.isActive&&!E&&S||m>b&&S,C=!1;const O=Array.isArray(w)?w:[w];let ee=O.reduce(o(h),{});N===!1&&(ee={});const{prevResolvedValues:Me={}}=g,ze={...Me,...ee},Ye=P=>{V=!0,x.has(P)&&(C=!0,x.delete(P)),g.needsAnimating[P]=!0;const D=e.getValue(P);D&&(D.liveStyle=!1)};for(const P in ze){const D=ee[P],R=Me[P];if(y.hasOwnProperty(P))continue;let B=!1;Ya(D)&&Ya(R)?B=!Nm(D,R):B=D!==R,B?D!=null?Ye(P):x.add(P):D!==void 0&&x.has(P)?Ye(P):g.protectedKeys[P]=!0}g.prevProp=w,g.prevResolvedValues=ee,g.isActive&&(y={...y,...ee}),(r||i)&&e.blockInitialAnimation&&(V=!1);const je=E&&T;V&&(!je||C)&&f.push(...O.map(P=>{const D={type:h};if(typeof P=="string"&&(r||i)&&!je&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,B=cn(R,P);if(R.enteringChildren&&B){const{delayChildren:te}=B.transition||{};D.delay=Xh(R.enteringChildren,e,te)}}return{animation:P,options:D}}))}if(x.size){const m={};if(typeof d.initial!="boolean"){const h=cn(e,Array.isArray(d.initial)?d.initial[0]:d.initial);h&&h.transition&&(m.transition=h.transition)}x.forEach(h=>{const g=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),m[h]=g??null}),f.push({animation:m})}let k=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?t(f):Promise.resolve()}function l(c,d){var f;if(n[c].isActive===d)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(x=>{var y;return(y=x.animationState)==null?void 0:y.setActive(c,d)}),n[c].isActive=d;const p=a(c);for(const x in n)n[x].protectedKeys={};return p}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=pd(),i=!0}}}function Pv(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Nm(t,e):!1}function Qt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pd(){return{animate:Qt(!0),whileInView:Qt(),whileHover:Qt(),whileTap:Qt(),whileDrag:Qt(),whileFocus:Qt(),exit:Qt()}}function nl(e,t){e.min=t.min,e.max=t.max}function qe(e,t){nl(e.x,t.x),nl(e.y,t.y)}function fd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Em=1e-4,Cv=1-Em,Nv=1+Em,Mm=.01,Ev=0-Mm,Mv=0+Mm;function we(e){return e.max-e.min}function zv(e,t,n){return Math.abs(e-t)<=n}function hd(e,t,n,r=.5){e.origin=r,e.originPoint=H(t.min,t.max,e.origin),e.scale=we(n)/we(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Cv&&e.scale<=Nv||isNaN(e.scale))&&(e.scale=1),(e.translate>=Ev&&e.translate<=Mv||isNaN(e.translate))&&(e.translate=0)}function Er(e,t,n,r){hd(e.x,t.x,n.x,r?r.originX:void 0),hd(e.y,t.y,n.y,r?r.originY:void 0)}function md(e,t,n,r=0){const i=r?H(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+we(t)}function Av(e,t,n,r){md(e.x,t.x,n.x,r==null?void 0:r.x),md(e.y,t.y,n.y,r==null?void 0:r.y)}function gd(e,t,n,r=0){const i=r?H(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+we(t)}function Eo(e,t,n,r){gd(e.x,t.x,n.x,r==null?void 0:r.x),gd(e.y,t.y,n.y,r==null?void 0:r.y)}function xd(e,t,n,r,i){return e-=t,e=No(e,1/n,r),i!==void 0&&(e=No(e,1/i,r)),e}function Dv(e,t=0,n=1,r=.5,i,o=e,s=e){if(dt.test(t)&&(t=parseFloat(t),t=H(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=H(o.min,o.max,r);e===o&&(a-=t),e.min=xd(e.min,t,n,a,i),e.max=xd(e.max,t,n,a,i)}function yd(e,t,[n,r,i],o,s){Dv(e,t[n],t[r],t[i],t.scale,o,s)}const Rv=["x","scaleX","originX"],Lv=["y","scaleY","originY"];function vd(e,t,n,r){yd(e.x,t,Rv,n?n.x:void 0,r?r.x:void 0),yd(e.y,t,Lv,n?n.y:void 0,r?r.y:void 0)}function wd(e){return e.translate===0&&e.scale===1}function zm(e){return wd(e.x)&&wd(e.y)}function bd(e,t){return e.min===t.min&&e.max===t.max}function Vv(e,t){return bd(e.x,t.x)&&bd(e.y,t.y)}function kd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Am(e,t){return kd(e.x,t.x)&&kd(e.y,t.y)}function Sd(e){return we(e.x)/we(e.y)}function jd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function st(e){return[e("x"),e("y")]}function Iv(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:p,rotateY:f,skewX:x,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),x&&(r+=`skewX(${x}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Dm=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],_v=Dm.length,Td=e=>typeof e=="string"?parseFloat(e):e,Pd=e=>typeof e=="number"||z.test(e);function Ov(e,t,n,r,i,o){i?(e.opacity=H(0,n.opacity??1,Fv(r)),e.opacityExit=H(t.opacity??1,0,$v(r))):o&&(e.opacity=H(t.opacity??1,n.opacity??1,r));for(let s=0;s<_v;s++){const a=Dm[s];let l=Cd(t,a),c=Cd(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Pd(l)===Pd(c)?(e[a]=Math.max(H(Td(l),Td(c),r),0),(dt.test(c)||dt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,r))}function Cd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Fv=Rm(0,.5,jh),$v=Rm(.5,.95,We);function Rm(e,t,n){return r=>r<e?0:r>t?1:n(Gr(e,t,r))}function Bv(e,t,n){const r=ae(e)?e:gn(e);return r.start(fu("",r,t,n)),r.animation}function Qr(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Uv=(e,t)=>e.depth-t.depth;class Wv{constructor(){this.children=[],this.isDirty=!1}add(t){eu(this.children,t),this.isDirty=!0}remove(t){ko(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Uv),this.isDirty=!1,this.children.forEach(t)}}function Hv(e,t){const n=ve.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(ft(r),e(o-t))};return F.setup(r,!0),()=>ft(r)}function qi(e){return ae(e)?e.get():e}class Kv{constructor(){this.members=[]}add(t){eu(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(ko(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(ko(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Xi={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ds=["","X","Y","Z"],Yv=1e3;let Gv=0;function Rs(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Lm(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=tm(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",F,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Lm(r)}function Vm({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Gv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Qv),this.nodes.forEach(r2),this.nodes.forEach(i2),this.nodes.forEach(Zv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wv)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new nu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=vu(s)&&!X1(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,p=0;const f=()=>this.root.updateBlockedByResize=!1;F.read(()=>{p=window.innerWidth}),e(s,()=>{const x=window.innerWidth;x!==p&&(p=x,this.root.updateBlockedByResize=!0,d&&d(),d=Hv(f,250),Xi.hasAnimatedSinceResize&&(Xi.hasAnimatedSinceResize=!1,this.nodes.forEach(Md)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:f,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||u2,{onLayoutAnimationStart:b,onLayoutAnimationComplete:k}=c.getProps(),m=!this.targetLayout||!Am(this.targetLayout,x),h=!p&&f;if(this.options.layoutRoot||this.resumeFrom||h||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...pu(y,"layout"),onPlay:b,onComplete:k};(c.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(d,h)}else p||Md(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ft(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(o2),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Lm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(e2),this.nodes.forEach(Nd);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ed);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(t2),this.nodes.forEach(n2),this.nodes.forEach(qv),this.nodes.forEach(Xv)):this.nodes.forEach(Ed),this.clearAllSnapshots();const a=ve.now();de.delta=pt(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,Ts.update.process(de),Ts.preRender.process(de),Ts.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Jv),this.sharedNodes.forEach(s2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!we(this.snapshot.measuredBox.x)&&!we(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ie()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!zm(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||en(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),c2(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return ie();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(d2))){const{scroll:d}=this.root;d&&(at(a.x,d.offset.x),at(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=ie();if(qe(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&qe(a,s),at(a.x,p.offset.x),at(a.y,p.offset.y))}return a}applyTransform(s,a=!1,l){var d,p;const c=l||ie();qe(c,s);for(let f=0;f<this.path.length;f++){const x=this.path[f];!a&&x.options.layoutScroll&&x.scroll&&x!==x.root&&(at(c.x,-x.scroll.offset.x),at(c.y,-x.scroll.offset.y)),en(x.latestValues)&&Gi(c,x.latestValues,(d=x.layout)==null?void 0:d.layoutBox)}return en(this.latestValues)&&Gi(c,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),c}removeTransform(s){var l;const a=ie();qe(a,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!en(d.latestValues))continue;let p;d.instance&&(Ja(d.latestValues)&&d.updateSnapshot(),p=ie(),qe(p,d.measurePageBox())),vd(a,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,p)}return en(this.latestValues)&&vd(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var x;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!this.layout||!(d||p))return;this.resolvedRelativeTargetAt=de.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Av(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qe(this.target,this.layout.layoutBox),vm(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ja(this.parent.latestValues)||ym(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),Eo(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===de.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,f=this.treeScale.y;av(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=ie());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fd(this.prevProjectionDelta.x,this.projectionDelta.x),fd(this.prevProjectionDelta.y,this.projectionDelta.y)),Er(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==f||!jd(this.projectionDelta.x,this.prevProjectionDelta.x)||!jd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Vn(),this.projectionDelta=Vn(),this.projectionDeltaWithTransform=Vn()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},p=Vn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ie(),x=l?l.source:void 0,y=this.layout?this.layout.source:void 0,b=x!==y,k=this.getStack(),m=!k||k.members.length<=1,h=!!(b&&!m&&this.options.crossfade===!0&&!this.path.some(l2));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const S=w/1e3;zd(p.x,s.x,S),zd(p.y,s.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Eo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),a2(this.relativeTarget,this.relativeTargetOrigin,f,S),g&&Vv(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ie()),qe(g,this.relativeTarget)),b&&(this.animationValues=d,Ov(d,c,this.latestValues,S,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(ft(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=F.update(()=>{Xi.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gn(0)),this.motionValue.jump(0,!1),this.currentAnimation=Bv(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Im(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const p=we(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+p;const f=we(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}qe(a,l),Gi(a,d),Er(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Kv),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Rs("z",s,c,this.animationValues);for(let d=0;d<Ds.length;d++)Rs(`rotate${Ds[d]}`,s,c,this.animationValues),Rs(`skew${Ds[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=qi(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=qi(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!en(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let p=Iv(this.projectionDeltaWithTransform,this.treeScale,d);l&&(p=l(d,p)),s.transform=p;const{x:f,y:x}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${x.origin*100}% 0`,c.animationValues?s.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in tl){if(d[y]===void 0)continue;const{correct:b,applyTo:k,isCSSVariable:m}=tl[y],h=p==="none"?d[y]:b(d[y],c);if(k){const g=k.length;for(let w=0;w<g;w++)s[k[w]]=h}else m?this.options.visualElement.renderState.vars[y]=h:s[y]=h}this.options.layoutId&&(s.pointerEvents=c===this?qi(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Nd),this.root.sharedNodes.clear()}}}function qv(e){e.updateLayout()}function Xv(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")st(p=>{const f=s?t.measuredBox[p]:t.layoutBox[p],x=we(f);f.min=r[p].min,f.max=f.min+x});else if(o==="x"||o==="y"){const p=o==="x"?"y":"x";nl(s?t.measuredBox[p]:t.layoutBox[p],r[p])}else Im(o,t.layoutBox,r)&&st(p=>{const f=s?t.measuredBox[p]:t.layoutBox[p],x=we(r[p]);f.max=f.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+x)});const a=Vn();Er(a,r,t.layoutBox);const l=Vn();s?Er(l,e.applyTransform(i,!0),t.measuredBox):Er(l,r,t.layoutBox);const c=!zm(a);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:x}=p;if(f&&x){const y=e.options.layoutAnchor||void 0,b=ie();Eo(b,t.layoutBox,f.layoutBox,y);const k=ie();Eo(k,r,x.layoutBox,y),Am(b,k)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=b,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Qv(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Zv(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Jv(e){e.clearSnapshot()}function Nd(e){e.clearMeasurements()}function e2(e){e.isLayoutDirty=!0,e.updateLayout()}function Ed(e){e.isLayoutDirty=!1}function t2(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function n2(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Md(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function r2(e){e.resolveTargetDelta()}function i2(e){e.calcProjection()}function o2(e){e.resetSkewAndRotation()}function s2(e){e.removeLeadSnapshot()}function zd(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ad(e,t,n,r){e.min=H(t.min,n.min,r),e.max=H(t.max,n.max,r)}function a2(e,t,n,r){Ad(e.x,t.x,n.x,r),Ad(e.y,t.y,n.y,r)}function l2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const u2={duration:.45,ease:[.4,0,.1,1]},Dd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Rd=Dd("applewebkit/")&&!Dd("chrome/")?Math.round:We;function Ld(e){e.min=Rd(e.min),e.max=Rd(e.max)}function c2(e){Ld(e.x),Ld(e.y)}function Im(e,t,n){return e==="position"||e==="preserve-aspect"&&!zv(Sd(t),Sd(n),.2)}function d2(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const p2=Vm({attachResizeListener:(e,t)=>Qr(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ls={current:void 0},_m=Vm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ls.current){const e=new p2({});e.mount(window),e.setOptions({layoutScroll:!0}),Ls.current=e}return Ls.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Xo=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function f2(e=!0){const t=A.useContext(Jl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=A.useId();A.useEffect(()=>{if(e)return i(o)},[e]);const s=A.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Om=A.createContext({strict:!1}),Vd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Id=!1;function h2(){if(Id)return;const e={};for(const t in Vd)e[t]={isEnabled:n=>Vd[t].some(r=>!!n[r])};mm(e),Id=!0}function Fm(){return h2(),rv()}function m2(e){const t=Fm();for(const n in e)t[n]={...t[n],...e[n]};mm(t)}const g2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||g2.has(e)}let $m=e=>!Mo(e);function x2(e){typeof e=="function"&&($m=t=>t.startsWith("on")?!Mo(t):e(t))}try{x2(require("@emotion/is-prop-valid").default)}catch{}function y2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||ae(e[i])||($m(i)||n===!0&&Mo(i)||!t&&!Mo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Qo=A.createContext({});function v2(e,t){if(qo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Xr(n)?n:void 0,animate:Xr(r)?r:void 0}}return e.inherit!==!1?t:{}}function w2(e){const{initial:t,animate:n}=v2(e,A.useContext(Qo));return A.useMemo(()=>({initial:t,animate:n}),[_d(t),_d(n)])}function _d(e){return Array.isArray(e)?e.join(" "):e}const ju=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bm(e,t,n){for(const r in t)!ae(t[r])&&!km(r,n)&&(e[r]=t[r])}function b2({transformTemplate:e},t){return A.useMemo(()=>{const n=ju();return ku(n,t,e),Object.assign({},n.vars,n.style)},[t])}function k2(e,t){const n=e.style||{},r={};return Bm(r,n,e),Object.assign(r,b2(e,t)),r}function S2(e,t){const n={},r=k2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Um=()=>({...ju(),attrs:{}});function j2(e,t,n,r){const i=A.useMemo(()=>{const o=Um();return Sm(o,t,Tm(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Bm(o,e.style,e),i.style={...o,...i.style}}return i}const T2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Tu(e){return typeof e!="string"||e.includes("-")?!1:!!(T2.indexOf(e)>-1||/[A-Z]/u.test(e))}function P2(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??Tu(e)?j2:S2)(t,r,i,e),c=y2(t,typeof e=="string",o),d=e!==A.Fragment?{...c,...l,ref:n}:{},{children:p}=t,f=A.useMemo(()=>ae(p)?p.get():p,[p]);return A.createElement(e,{...d,children:f})}function C2({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:N2(n,r,i,e),renderState:t()}}function N2(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=qi(o[f]);let{initial:s,animate:a}=e;const l=qo(e),c=fm(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const p=d?a:s;if(p&&typeof p!="boolean"&&!Go(p)){const f=Array.isArray(p)?p:[p];for(let x=0;x<f.length;x++){const y=hu(e,f[x]);if(y){const{transitionEnd:b,transition:k,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const w=d?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in b)i[h]=b[h]}}}return i}const Wm=e=>(t,n)=>{const r=A.useContext(Qo),i=A.useContext(Jl),o=()=>C2(e,t,r,i);return n?o():dh(o)},E2=Wm({scrapeMotionValuesFromProps:Su,createRenderState:ju}),M2=Wm({scrapeMotionValuesFromProps:Pm,createRenderState:Um}),z2=Symbol.for("motionComponentSymbol");function A2(e,t,n){const r=A.useRef(n);A.useInsertionEffect(()=>{r.current=n});const i=A.useRef(null);return A.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o));const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o);t&&(o?t.mount(o):t.unmount())},[t])}const Hm=A.createContext({});function bn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function D2(e,t,n,r,i,o){var g,w;const{visualElement:s}=A.useContext(Qo),a=A.useContext(Om),l=A.useContext(Jl),c=A.useContext(Xo),d=c.reducedMotion,p=c.skipAnimations,f=A.useRef(null),x=A.useRef(!1);r=r||a.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:p,isSVG:o}),x.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const y=f.current,b=A.useContext(Hm);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&R2(f.current,n,i,b);const k=A.useRef(!1);A.useInsertionEffect(()=>{y&&k.current&&y.update(n,l)});const m=n[em],h=A.useRef(!!m&&typeof window<"u"&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,m))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,m)));return ph(()=>{x.current=!0,y&&(k.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),h.current&&y.animationState&&y.animationState.animateChanges())}),A.useEffect(()=>{y&&(!h.current&&y.animationState&&y.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)==null||S.call(window,m)}),h.current=!1),y.enteringChildren=void 0)}),y}function R2(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:d,layoutCrossfade:p}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Km(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&bn(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:l,layoutRoot:c,layoutAnchor:d})}function Km(e){if(e)return e.options.allowProjection!==!1?e.projection:Km(e.parent)}function Vs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&m2(r);const o=n?n==="svg":Tu(e),s=o?M2:E2;function a(c,d){let p;const f={...A.useContext(Xo),...c,layoutId:L2(c)},{isStatic:x}=f,y=w2(c),b=s(c,x);if(!x&&typeof window<"u"){V2();const k=I2(f);p=k.MeasureLayout,y.visualElement=D2(e,b,f,i,k.ProjectionNode,o)}return u.jsxs(Qo.Provider,{value:y,children:[p&&y.visualElement?u.jsx(p,{visualElement:y.visualElement,...f}):null,P2(e,c,A2(b,y.visualElement,d),b,x,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=A.forwardRef(a);return l[z2]=e,l}function L2({layoutId:e}){const t=A.useContext(ch).id;return t&&e!==void 0?t+"-"+e:e}function V2(e,t){A.useContext(Om).strict}function I2(e){const t=Fm(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function _2(e,t){if(typeof Proxy>"u")return Vs;const n=new Map,r=(o,s)=>Vs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Vs(s,void 0,e,t)),n.get(s))})}const O2=(e,t)=>t.isSVG??Tu(e)?new wv(t):new hv(t,{allowProjection:e!==A.Fragment});class F2 extends Gt{constructor(t){super(t),t.animationState||(t.animationState=Tv(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Go(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let $2=0;class B2 extends Gt{constructor(){super(...arguments),this.id=$2++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:a}=this.node.getProps();if(typeof s=="string"){const l=cn(this.node,s,a);if(l){const{transition:c,transitionEnd:d,...p}=l;for(const f in p)(o=this.node.getValue(f))==null||o.jump(p[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const U2={animation:{Feature:F2},exit:{Feature:B2}};function si(e){return{point:{x:e.pageX,y:e.pageY}}}const W2=e=>t=>yu(t)&&e(t,si(t));function Mr(e,t,n,r){return Qr(e,t,W2(n),r)}const Ym=({current:e})=>e?e.ownerDocument.defaultView:null,Od=(e,t)=>Math.abs(e-t);function H2(e,t){const n=Od(e.x,t.x),r=Od(e.y,t.y);return Math.sqrt(n**2+r**2)}const Fd=new Set(["auto","scroll"]);class Gm{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ei(this.lastRawMoveEventInfo,this.transformPagePoint));const x=Is(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,b=H2(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!b)return;const{point:k}=x,{timestamp:m}=de;this.history.push({...k,timestamp:m});const{onStart:h,onMove:g}=this.handlers;y||(h&&h(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,x)},this.handlePointerMove=(x,y)=>{this.lastMoveEvent=x,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=Ei(y,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(x,y)=>{this.end();const{onEnd:b,onSessionEnd:k,resumeAnimation:m}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Is(x.type==="pointercancel"?this.lastMoveEventInfo:Ei(y,this.transformPagePoint),this.history);this.startEvent&&b&&b(x,h),k&&k(x,h)},!yu(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=si(t),c=Ei(l,this.transformPagePoint),{point:d}=c,{timestamp:p}=de;this.history=[{...d,timestamp:p}];const{onSessionStart:f}=n;f&&f(t,Is(c,this.history)),this.removeListeners=ri(Mr(this.contextWindow,"pointermove",this.handlePointerMove),Mr(this.contextWindow,"pointerup",this.handlePointerUp),Mr(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Fd.has(r.overflowX)||Fd.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),F.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ft(this.updatePoint)}}function Ei(e,t){return t?{point:t(e.point)}:e}function $d(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Is({point:e},t){return{point:e,delta:$d(e,qm(t)),offset:$d(e,K2(t)),velocity:Y2(t,.1)}}function K2(e){return e[0]}function qm(e){return e[e.length-1]}function Y2(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=qm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Le(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Le(t)*2&&(r=e[1]);const o=Be(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function G2(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?H(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?H(n,e,r.max):Math.min(e,n)),e}function Bd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function q2(e,{top:t,left:n,bottom:r,right:i}){return{x:Bd(e.x,n,i),y:Bd(e.y,t,r)}}function Ud(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function X2(e,t){return{x:Ud(e.x,t.x),y:Ud(e.y,t.y)}}function Q2(e,t){let n=.5;const r=we(e),i=we(t);return i>r?n=Gr(t.min,t.max-r,e.min):r>i&&(n=Gr(e.min,e.max-i,t.min)),pt(0,1,n)}function Z2(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const rl=.35;function J2(e=rl){return e===!1?e=0:e===!0&&(e=rl),{x:Wd(e,"left","right"),y:Wd(e,"top","bottom")}}function Wd(e,t,n){return{min:Hd(e,t),max:Hd(e,n)}}function Hd(e,t){return typeof e=="number"?e:e[t]||0}const ew=new WeakMap;class tw{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=p=>{n&&this.snapToCursor(si(p).point),this.stopAnimation()},s=(p,f)=>{const{drag:x,dragPropagation:y,onDragStart:b}=this.getProps();if(x&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=D1(x),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),st(m=>{let h=this.getAxisMotionValue(m).get()||0;if(dt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const w=g.layout.layoutBox[m];w&&(h=we(w)*(parseFloat(h)/100))}}this.originPoint[m]=h}),b&&F.update(()=>b(p,f),!1,!0),Ga(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},a=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f;const{dragPropagation:x,dragDirectionLock:y,onDirectionLock:b,onDrag:k}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:m}=f;if(y&&this.currentDirection===null){this.currentDirection=rw(m),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),k&&F.update(()=>k(p,f),!1,!0)},l=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f,this.stop(p,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Gm(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Ym(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&F.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Mi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=G2(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&bn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=q2(r.layoutBox,t):this.constraints=!1,this.elastic=J2(n),i!==this.constraints&&!bn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&st(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=Z2(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!bn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=lv(r,i.root,this.visualElement.getTransformPagePoint());let s=X2(i.layout.layoutBox,o);if(n){const a=n(ov(s));this.hasMutatedConstraints=!!a,a&&(s=xm(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=st(d=>{if(!Mi(d,n,this.currentDirection))return;let p=l&&l[d]||{};(s===!0||s===d)&&(p={min:0,max:0});const f=i?200:1e6,x=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ga(this.visualElement,t),r.start(fu(t,r,0,n,this.visualElement,!1))}stopAnimation(){st(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){st(n=>{const{drag:r}=this.getProps();if(!Mi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-H(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!bn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};st(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=Q2({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),st(s=>{if(!Mi(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(H(l,c,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ew.set(this.visualElement,this);const t=this.visualElement.current,n=Mr(t,"pointerdown",c=>{const{drag:d,dragListener:p=!0}=this.getProps(),f=c.target,x=f!==t&&O1(f);d&&p&&!x&&this.start(c)});let r;const i=()=>{const{dragConstraints:c}=this.getProps();bn(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),r||(r=nw(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),F.read(i);const a=Qr(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(st(p=>{const f=this.getAxisMotionValue(p);f&&(this.originPoint[p]+=c[p].translate,f.set(f.get()+c[p].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=rl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Kd(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function nw(e,t,n){const r=td(e,Kd(n)),i=td(t,Kd(n));return()=>{r(),i()}}function Mi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function rw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class iw extends Gt{constructor(t){super(t),this.removeGroupControls=We,this.removeListeners=We,this.controls=new tw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const _s=e=>(t,n)=>{e&&F.update(()=>e(t,n),!1,!0)};class ow extends Gt{constructor(){super(...arguments),this.removePointerDownListener=We}onPointerDown(t){this.session=new Gm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ym(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_s(t),onStart:_s(n),onMove:_s(r),onEnd:(o,s)=>{delete this.session,i&&F.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Mr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Os=!1;class sw extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Os&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Xi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Os=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||F.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),xu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Os=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Xm(e){const[t,n]=f2(),r=A.useContext(ch);return u.jsx(sw,{...e,layoutGroup:r,switchLayoutGroup:A.useContext(Hm),isPresent:t,safeToRemove:n})}const aw={pan:{Feature:ow},drag:{Feature:iw,ProjectionNode:_m,MeasureLayout:Xm}};function Yd(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&F.postRender(()=>o(t,si(t)))}class lw extends Gt{mount(){const{current:t}=this.node;t&&(this.unmount=L1(t,(n,r)=>(Yd(this.node,r,"Start"),i=>Yd(this.node,i,"End"))))}unmount(){}}class uw extends Gt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ri(Qr(this.node.current,"focus",()=>this.onFocus()),Qr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Gd(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&F.postRender(()=>o(t,si(t)))}class cw extends Gt{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=$1(t,(i,o)=>(Gd(this.node,o,"Start"),(s,{success:a})=>Gd(this.node,s,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const il=new WeakMap,Fs=new WeakMap,dw=e=>{const t=il.get(e.target);t&&t(e)},pw=e=>{e.forEach(dw)};function fw({root:e,...t}){const n=e||document;Fs.has(n)||Fs.set(n,{});const r=Fs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(pw,{root:e,...t})),r[i]}function hw(e,t,n){const r=fw(t);return il.set(e,n),r.observe(e),()=>{il.delete(e),r.unobserve(e)}}const mw={some:0,all:1};class gw extends Gt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:mw[i]},a=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:f}=this.node.getProps(),x=d?p:f;x&&x(c)};this.stopObserver=hw(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(xw(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function xw({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const yw={inView:{Feature:gw},tap:{Feature:cw},focus:{Feature:uw},hover:{Feature:lw}},vw={layout:{ProjectionNode:_m,MeasureLayout:Xm}},ww={...U2,...yw,...aw,...vw},Qm=_2(ww,O2);function xr(e){const t=dh(()=>gn(e)),{isStatic:n}=A.useContext(Xo);if(n){const[,r]=A.useState(e);A.useEffect(()=>t.on("change",r),[])}return t}function bw(e,t){const n=xr(t()),r=()=>n.set(t());return r(),ph(()=>{const i=()=>F.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),ft(r)}}),n}function kw(e,...t){const n=e.length;function r(){let i="";for(let o=0;o<n;o++){i+=e[o];const s=t[o];s&&(i+=ae(s)?s.get():s)}return i}return bw(t.filter(ae),r)}function Sw(e){const t=A.useRef(0),{isStatic:n}=A.useContext(Xo);A.useEffect(()=>{if(n)return;const r=({timestamp:i,delta:o})=>{t.current||(t.current=i),e(i-t.current,o)};return F.update(r,!0),()=>ft(r)},[e])}const jw=()=>{const e=A.useRef(null),t=xr(-9999),n=xr(-9999);A.useEffect(()=>{const s=a=>{if(!e.current)return;const l=e.current.getBoundingClientRect();t.set(a.clientX-l.left),n.set(a.clientY-l.top)};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[t,n]);const r=xr(0),i=xr(0);Sw(()=>{r.set((r.get()+.4)%40),i.set((i.get()+.4)%40)});const o=kw`radial-gradient(380px circle at ${t}px ${n}px, black, transparent)`;return u.jsxs("div",{ref:e,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:[u.jsx("div",{style:{position:"absolute",inset:0,opacity:.06},children:u.jsx(qd,{offsetX:r,offsetY:i,color:"#191712",id:"grid-base"})}),u.jsx(Qm.div,{style:{position:"absolute",inset:0,opacity:.45,maskImage:o,WebkitMaskImage:o},children:u.jsx(qd,{offsetX:r,offsetY:i,color:"#27c927",id:"grid-reveal"})}),u.jsx("div",{style:{position:"absolute",top:"-20%",right:"-10%",width:"45%",height:"70%",borderRadius:"50%",background:"rgba(39,201,39,0.10)",filter:"blur(130px)"}}),u.jsx("div",{style:{position:"absolute",top:"5%",right:"18%",width:"18%",height:"30%",borderRadius:"50%",background:"rgba(39,201,39,0.05)",filter:"blur(90px)"}})]})},qd=({offsetX:e,offsetY:t,color:n,id:r})=>u.jsxs("svg",{style:{width:"100%",height:"100%"},children:[u.jsx("defs",{children:u.jsx(Qm.pattern,{id:r,width:"40",height:"40",patternUnits:"userSpaceOnUse",x:e,y:t,children:u.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:n,strokeWidth:"1"})})}),u.jsx("rect",{width:"100%",height:"100%",fill:`url(#${r})`})]}),v={bg:"#ffffff",bgAlt:"#ffffff",green:"#27c927",greenLight:"#52df52",greenDim:"#1e9f1e",greenGlow:"rgba(39,201,39,0.12)",textPrimary:"#191712",textSecondary:"#5f5a52",textMuted:"#7d766d",border:"rgba(25,23,18,0.1)",borderHover:"rgba(39,201,39,0.3)"};function Zm(e=.15){const t=A.useRef(null),[n,r]=A.useState(!1);return A.useEffect(()=>{const i=t.current;if(!i)return;const o=new IntersectionObserver(([s])=>{s.isIntersecting&&(r(!0),o.disconnect())},{threshold:e});return o.observe(i),()=>o.disconnect()},[e]),[t,n]}function L({children:e,delay:t=0,direction:n="up",className:r=""}){const[i,o]=Zm(.1),s={up:"translateY(40px)",down:"translateY(-40px)",left:"translateX(40px)",right:"translateX(-40px)",none:"none"};return u.jsx("div",{ref:i,className:r,style:{opacity:o?1:0,transform:o?"none":s[n],transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s`},children:e})}function zi({end:e,suffix:t="",duration:n=2e3}){const[r,i]=A.useState(e),[o,s]=Zm(.3);return A.useEffect(()=>{if(!s)return;let a=0;const l=e/(n/16),c=setInterval(()=>{a+=l,a>=e?(i(e),clearInterval(c)):i(Math.floor(a))},16);return()=>clearInterval(c)},[s,e,n]),u.jsxs("span",{ref:o,children:[r.toLocaleString(),t]})}const Tw=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; overflow-x: hidden; }

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
    overflow-x: hidden;
    max-width: 100vw;
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

  .nav-login {
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: ${v.textPrimary};
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid ${v.border};
    background: transparent;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  .nav-login:hover {
    border-color: rgba(25,23,18,0.25);
    background: rgba(25,23,18,0.03);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-cta-mobile { display: none; }
  .nav-cta-desktop { display: inline; }

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
  .hero-line.middle {
    color: ${v.green};
  }

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
    max-width: 1000px;
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
    grid-template-columns: minmax(0, 420px) minmax(0, 480px);
    gap: 32px;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }

  .product-row.reverse { grid-template-columns: minmax(0, 480px) minmax(0, 420px); }
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

  .product-cta-row {
    margin-top: 22px;
  }

  .product-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 56px;
    min-width: 0;
    padding: 0 22px;
    border-radius: 18px;
    font-size: 15px;
    font-weight: 800;
    color: #000;
    text-decoration: none;
    flex: none;
    animation: none;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.22),
      0 10px 20px rgba(39,201,39,0.12);
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

  .product-cta:hover { gap: 12px; color: #000; }

  /* ── Mockup window ── */
  .product-mockup {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${v.border};
    box-shadow: none;
    transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  }

  .product-mockup:hover {
    transform: translateY(-6px);
    box-shadow: none;
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
      linear-gradient(180deg, rgba(255,255,255,0.99), rgba(251,252,249,0.97));
    border: 1px solid rgba(25,23,18,0.06);
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 60px rgba(15,23,42,0.04);
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
    background: rgba(255,255,255,0.88);
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
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${v.greenDim};
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
      linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,251,248,0.97)),
      ${v.bgAlt};
    border: 1px solid rgba(25,23,18,0.06);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 20px 50px rgba(15,23,42,0.05);
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
    padding: 48px 48px 120px;
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

  /* ── B2B upsell ── */
  .b2b-upsell {
    background: #0f0f1a;
    padding: 72px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    overflow: hidden;
  }

  .b2b-upsell::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .b2b-badge {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #22c55e;
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.2);
    padding: 6px 14px;
    border-radius: 999px;
    text-transform: uppercase;
  }

  .b2b-headline {
    font-size: clamp(22px, 2.8vw, 36px);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -1px;
    line-height: 1.15;
    max-width: 640px;
    margin: 0;
  }

  .b2b-desc {
    font-size: 15px;
    color: #a1a1aa;
    line-height: 1.65;
    max-width: 520px;
    margin: 0;
  }

  .b2b-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 4px;
  }

  .b2b-tag {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 7px 14px;
    border-radius: 999px;
    white-space: nowrap;
  }

  .b2b-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.25);
    padding: 12px 28px;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0.2px;
    transition: border-color 0.2s, background 0.2s, color 0.2s;
  }

  .b2b-btn:hover {
    border-color: #22c55e;
    color: #22c55e;
    background: rgba(34,197,94,0.06);
  }

  @media (max-width: 768px) {
    .b2b-upsell { padding: 56px 20px; gap: 16px; }
    .b2b-headline { font-size: clamp(24px, 6vw, 36px); }
    .b2b-desc { font-size: 15px; padding: 0 8px; }
    .b2b-tags { flex-direction: column; align-items: center; }
    .b2b-tag { white-space: normal; text-align: center; font-size: 13px; }
    .b2b-btn { font-size: 13px; padding: 10px 24px; }
  }

  /* ── Video section ── */
  .video-section {
    padding: 80px 48px;
    border-top: 1px solid ${v.border};
    border-bottom: 1px solid ${v.border};
  }

  .video-section-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .video-section-embed {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #000;
    box-shadow: 0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px ${v.border};
  }

  @media (max-width: 768px) {
    .video-section { padding: 60px 20px; }
    .video-section-grid { grid-template-columns: 1fr; gap: 32px; }
    .video-section-embed { border-radius: 16px; }
  }

  @media (max-width: 480px) {
    .video-section { padding: 48px 16px; }
    .video-section-grid { gap: 24px; }
    .video-section-embed { border-radius: 14px; }
  }

  /* ── CTA section (light) ── */
  .final-cta {
    position: relative;
    z-index: 5;
    padding: 80px 48px;
    text-align: center;
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
    align-items: stretch;
  }

  .obj-grid > div { display: flex; flex-direction: column; }

  .obj-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${v.border};
    border-radius: 20px;
    padding: 28px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
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

  /* ── Responsive: All sections clamped ── */
  section, .features, .promo-offer, .howto, .testimonials, .objections,
  .for-whom, .value-stack, .comparison-section, .problem-section,
  .b2b-upsell, .final-cta, .footer-full, .video-section, .diff-section {
    max-width: 100%;
    overflow-x: hidden;
  }

  .product-mockup, .mock-brain, .mock-chat, .mock-boost, .mock-talks, .mock-labs {
    max-width: 100%;
    overflow: hidden;
  }

  /* ── Responsive: Tablet ── */
  @media (max-width: 1024px) {
    .nav { padding: 16px 28px; }
    .nav-cta { font-size: 13px; padding: 10px 16px; }
    .promo-offer-shell { grid-template-columns: 1fr; }
    .promo-points { grid-template-columns: 1fr; }
    .comparison-row { grid-template-columns: 1.2fr 1fr 0.6fr; padding: 14px 20px; }
    .product-row { gap: 32px; }
  }

  /* ── Responsive: Mobile ── */
  @media (max-width: 768px) {
    /* Global mobile overflow fix */
    .marquee-strip { height: 34px; }
    .marquee-item { padding: 0 18px; font-size: 11px; }

    /* Nav */
    .nav { padding: 14px 20px; }
    .nav-links { display: none; }
    /* Nav mobile */
    .nav-logo img { height: 22px; }
    .nav-login { font-size: 10px; padding: 6px 10px; white-space: normal; text-align: center; line-height: 1.3; max-width: 80px; color: ${v.textMuted}; }
    .nav-cta { font-size: 11px; font-weight: 700; padding: 8px 14px; gap: 4px; color: #fff; background: ${v.green}; border-color: rgba(17,55,17,0.08); box-shadow: 0 4px 12px rgba(39,201,39,0.2); }
    .nav-cta:hover { background: ${v.greenDim}; }
    .nav-cta span:last-child { display: none; }
    .nav-cta-desktop { display: none; }
    .nav-cta-mobile { display: inline; }
    .nav-actions { gap: 10px; }

    /* Hero */
    .hero { grid-template-columns: 1fr; row-gap: 8px; column-gap: 0; padding: 142px 20px 60px; }
    .hero-headline { letter-spacing: -1.3px; font-size: clamp(34px, 8vw, 52px); margin-bottom: 0; }
    .hero-copy { margin-bottom: -14px; }
    .hero-media { min-height: 0; justify-content: center; }
    .hero-globe { width: min(156vw, 860px); opacity: 0.1; inset: 67% auto auto 50%; }
    .hero-sub { padding: 12px 16px; border-radius: 999px; margin: 0 0 20px; transform: translateY(-20px); }
    .hero-cta-row { gap: 10px; margin-top: 18px; flex-wrap: wrap; }
    .hero-vsl { max-width: 260px; justify-self: center; }
    .hero-offer-card { min-height: 64px; padding: 0 18px; border-radius: 20px; flex-basis: 100%; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(16px, 5vw, 22px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top, .hero-line.middle, .hero-line.bottom { white-space: normal; }

    /* Stats */
    .stats-strip-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .stat-item:nth-child(2)::after { display: none; }

    /* Products */
    .features { padding: 60px 20px 20px; }
    .product-row { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
    .product-info { order: 1; }
    .product-mockup { order: 2; }
    .product-name { font-size: clamp(24px, 6vw, 32px); }
    .product-desc { font-size: 15px; max-width: 100%; }
    .product-badge { font-size: 10px; padding: 5px 12px; }
    .product-feature-item { font-size: 13px; }
    .mock-brain-cards { grid-template-columns: repeat(2, 1fr); }
    .mock-chat-suggestions { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: repeat(2, 1fr); }
    .mock-boost-categories { flex-wrap: wrap; }
    .mock-labs-grid { grid-template-columns: 1fr; }
    .mock-talks-grid { grid-template-columns: repeat(2, 1fr); }

    /* Promo offer */
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .promo-title { font-size: clamp(28px, 7vw, 40px); }
    .promo-desc { font-size: 15px; }
    .signal-panel { min-height: 280px; }

    /* How it works */
    .howto { padding: 40px 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 16px; }
    .steps::before { display: none; }

    /* Shorts */
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left, .short-inline.float-right { justify-content: center; }
    .short-inline-asset, .vsl-card { max-width: 220px; }

    /* Testimonials */
    .testimonials { padding: 0 20px 80px; }
    .t-grid { grid-template-columns: 1fr; }

    /* Objections */
    .objections { padding: 0 20px 80px; }
    .obj-grid { grid-template-columns: 1fr; }

    /* Value stack / Pricing */
    .value-stack { padding: 0 20px 80px; }
    .value-item { padding: 14px 16px; flex-wrap: wrap; }
    .value-item-name { font-size: 13px; gap: 6px; }
    .value-item-badge { font-size: 8px; padding: 2px 6px; }
    .value-item-price { font-size: 12px; }
    .value-total { flex-direction: column; align-items: center; gap: 12px; text-align: center; padding: 20px 16px; }
    .value-total-now { font-size: 26px; }
    .value-total-was { font-size: 14px; }

    /* Comparison */
    .comparison-section { padding: 60px 20px; }
    .comparison-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 16px; }
    .comparison-row.comp-header { display: none; }
    .comp-tool { font-size: 14px; font-weight: 700; }
    .comp-price { font-size: 13px; }
    .comp-learns { text-align: left; font-size: 12px; }

    /* CTA */
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .final-cta-title { font-size: clamp(26px, 7vw, 40px); letter-spacing: -1.2px; }
    .final-cta-sub { font-size: 15px; }
    .cta-benefits { gap: 8px; }
    .benefit-chip { font-size: 12px; padding: 8px 14px; }

    /* Footer */
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }

    /* Section headings */
    .section-heading { font-size: clamp(26px, 7vw, 38px); letter-spacing: -1px; }
    .section-desc { font-size: 15px; padding: 0 4px; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; font-size: 16px; min-height: 58px; }
    .btn-hero { min-width: 0; width: 100%; font-size: 16px; min-height: 58px; padding: 0 24px; }
    .hero-trust { flex-direction: column; gap: 8px; }
    .hero-anchor-proof { flex-direction: column; text-align: center; gap: 6px; }
    .stats-strip-inner { grid-template-columns: 1fr; gap: 20px; }
    .stat-item::after { display: none !important; }
    .mock-brain-cards { grid-template-columns: 1fr; }
    .mock-boost-grid { grid-template-columns: 1fr; }
    .mock-boost-categories { gap: 6px; }
    .mock-talks-grid { grid-template-columns: 1fr; }
    .product-row { gap: 20px; padding: 28px 0; }
    .promo-offer-shell { padding: 16px; }
    .promo-point { padding: 12px; }
    .promo-point strong { font-size: 14px; }
    .promo-point span { font-size: 12px; }
    .signal-panel { min-height: 240px; padding: 16px; }
    .value-item-name { font-size: 12px; }
    .comparison-row { padding: 12px 14px; }
    .b2b-upsell { padding: 48px 16px; }
    .b2b-headline { font-size: clamp(22px, 6vw, 32px); }
    .for-whom-card { padding: 20px; }
    .for-whom-title { font-size: 15px; }
    .for-whom-desc { font-size: 13px; }
    .obj-card { padding: 20px; }
    .obj-question { font-size: 15px; }
    .obj-answer { font-size: 13px; }
    .pain-card { padding: 20px; flex-direction: column; }
  }

  /* ── Problem / Pain section ── */
  .problem-section {
    position: relative;
    z-index: 5;
    background: #f9f9f7;
    border-top: 1px solid ${v.border};
    border-bottom: 1px solid ${v.border};
    padding: 80px 48px;
  }
  .problem-inner { max-width: 1100px; margin: 0 auto; }
  .problem-header { text-align: center; margin-bottom: 56px; }
  .pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pain-card {
    background: #fff;
    border: 1px solid ${v.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s ease;
  }
  .pain-card:hover { border-color: rgba(239,68,68,0.15); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(239,68,68,0.04); }
  .pain-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(239,68,68,0.06); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
  .pain-title { font-weight: 700; font-size: 16px; color: ${v.textPrimary}; margin-bottom: 6px; }
  .pain-desc { font-size: 14px; color: ${v.textSecondary}; line-height: 1.65; }

  /* ── "¿Para quién es?" ── */
  .for-whom { position: relative; z-index: 5; max-width: 1100px; margin: 0 auto; padding: 80px 48px 100px; }
  .for-whom-header { text-align: center; margin-bottom: 56px; }
  .for-whom-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px; }
  .for-whom-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${v.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;
  }
  .for-whom-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(39,201,39,0.06); }
  .for-whom-check { width: 28px; height: 28px; border-radius: 8px; background: rgba(39,201,39,0.1); display: flex; align-items: center; justify-content: center; color: ${v.green}; font-size: 13px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
  .for-whom-title { font-size: 16px; font-weight: 700; color: ${v.textPrimary}; margin-bottom: 4px; }
  .for-whom-desc { font-size: 14px; color: ${v.textSecondary}; line-height: 1.6; }
  .not-for-whom { background: rgba(249,249,247,0.8); border: 1px solid ${v.border}; border-radius: 20px; padding: 24px 32px; text-align: center; }
  .not-for-whom-title { font-size: 12px; font-weight: 700; color: ${v.textMuted}; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
  .not-for-list { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .not-for-item { font-size: 13px; color: ${v.textMuted}; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.1); padding: 6px 14px; border-radius: 999px; }

  /* ── Value stack ── */
  .value-stack { position: relative; z-index: 5; max-width: 780px; margin: 0 auto; padding: 0 48px 100px; text-align: center; }
  .value-stack-header { margin-bottom: 40px; }
  .value-items { display: flex; flex-direction: column; border: 1px solid ${v.border}; border-radius: 20px; overflow: hidden; margin-bottom: 16px; }
  .value-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(255,255,255,0.9); border-bottom: 1px solid ${v.border}; gap: 12px; }
  .value-item:last-child { border-bottom: none; }
  .value-item-name { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: ${v.textPrimary}; flex: 1; flex-wrap: wrap; }
  .value-item-badge { font-size: 9px; font-weight: 700; color: ${v.green}; background: rgba(39,201,39,0.1); border: 1px solid rgba(39,201,39,0.15); padding: 3px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }
  .value-item-price { font-size: 13px; font-weight: 700; color: ${v.textMuted}; text-decoration: line-through; white-space: nowrap; }
  .value-total { background: rgba(39,201,39,0.05); border: 1px solid rgba(39,201,39,0.15); border-radius: 16px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
  .value-total-label { font-size: 16px; font-weight: 700; color: ${v.textPrimary}; }
  .value-total-price { display: flex; align-items: baseline; gap: 10px; }
  .value-total-was { font-size: 15px; font-weight: 600; color: ${v.textMuted}; text-decoration: line-through; }
  .value-total-now { font-size: 30px; font-weight: 800; color: ${v.green}; letter-spacing: -1px; }
  .value-total-period { font-size: 12px; color: ${v.textMuted}; }

  /* ── Compact modules mini grid ── */
  .modules-grid-section { padding: 0 0 20px; }
  .modules-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
  .module-mini-card { background: rgba(255,255,255,0.88); border: 1px solid ${v.border}; border-radius: 20px; padding: 28px; transition: all 0.3s ease; display: flex; flex-direction: column; gap: 12px; }
  .module-mini-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(39,201,39,0.06); }
  .module-mini-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); font-size: 10px; font-weight: 700; color: ${v.green}; letter-spacing: 1.5px; text-transform: uppercase; width: fit-content; }
  .module-mini-name { font-weight: 800; font-size: 20px; color: ${v.textPrimary}; letter-spacing: -0.5px; }
  .module-mini-desc { font-size: 14px; color: ${v.textSecondary}; line-height: 1.6; }
  .module-mini-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: ${v.green}; text-decoration: none; margin-top: auto; }
  .module-mini-link:hover { opacity: 0.75; }

  /* ── Testimonial improvements ── */
  .t-avatar-img { width: 42px; height: 42px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
  .t-company { font-size: 11px; color: ${v.textMuted}; margin-top: 1px; }
  .t-result { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: ${v.green}; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }

  /* ── Full footer ── */
  .footer-full { position: relative; z-index: 5; border-top: 1px solid ${v.border}; padding: 48px 48px 32px; }
  .footer-top { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid ${v.border}; margin-bottom: 28px; }
  .footer-brand p { font-size: 13px; color: ${v.textMuted}; line-height: 1.6; margin-top: 12px; max-width: 240px; }
  .footer-brand img { height: 28px; width: auto; }
  .footer-col-title { font-size: 11px; font-weight: 700; color: ${v.textPrimary}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
  .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
  .footer-col-links a { font-size: 13px; color: ${v.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-col-links a:hover { color: ${v.green}; }
  .footer-social { display: flex; gap: 8px; margin-top: 16px; }
  .footer-social a { width: 34px; height: 34px; border-radius: 10px; background: rgba(25,23,18,0.05); border: 1px solid ${v.border}; display: flex; align-items: center; justify-content: center; color: ${v.textMuted}; text-decoration: none; transition: all 0.2s ease; }
  .footer-social a:hover { background: rgba(39,201,39,0.08); border-color: rgba(39,201,39,0.2); color: ${v.green}; }
  .footer-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: ${v.textMuted}; }
  .footer-legal { display: flex; gap: 20px; }
  .footer-legal a { color: ${v.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-legal a:hover { color: ${v.green}; }

  @media (max-width: 768px) {
    .pain-grid { grid-template-columns: 1fr; }
    .for-whom { padding: 60px 20px 80px; }
    .for-whom-grid { grid-template-columns: 1fr; }
    .modules-mini-grid { grid-template-columns: 1fr; }
    .value-stack { padding: 0 20px 80px; }
    .problem-section { padding: 60px 20px; }
    .footer-full { padding: 40px 20px 24px; }
    .footer-top { grid-template-columns: 1fr; gap: 28px; }
    .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
    .footer-legal { justify-content: center; }
    .not-for-whom { padding: 20px; }
    .not-for-list { flex-direction: column; gap: 8px; }
  }

  /* ════════════════════════════════
     MODULES 2×2 GRID
     ════════════════════════════════ */
  .modules-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 48px;
  }

  .module-card-2x2 {
    background: #fff;
    border: 1px solid ${v.border};
    border-radius: 20px;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .module-card-2x2:hover {
    box-shadow: 0 20px 48px rgba(0,0,0,0.07);
    transform: translateY(-3px);
  }

  .module-card-2x2 .product-mockup {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }

  .module-card-2x2-info {
    padding: 24px;
  }

  @media (max-width: 768px) {
    .modules-2x2 { grid-template-columns: 1fr; }
  }

  /* ════════════════════════════════
     HERO REDESIGN — centered single-column
     ════════════════════════════════ */
  .hero {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 260px 16px 130px;
    max-width: 980px;
    grid-template-columns: unset !important;
  }

  .hero-anchor-proof {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    color: ${v.textMuted};
    margin-bottom: 36px;
    letter-spacing: 0;
  }

  .hero-anchor-proof strong {
    color: ${v.textPrimary};
    font-weight: 700;
  }

  .hero-anchor-avatars {
    display: flex;
    align-items: center;
  }

  .hero-anchor-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: linear-gradient(135deg, rgba(39,201,39,0.25), rgba(82,223,82,0.35));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: ${v.greenDim};
    margin-left: -8px;
    flex-shrink: 0;
  }

  .hero-anchor-avatar:first-child { margin-left: 0; }

  .hero-headline {
    font-size: clamp(44px, 6vw, 80px) !important;
    text-align: center !important;
    letter-spacing: -3px !important;
    line-height: 0.97 !important;
    margin-bottom: 32px;
  }

  .hero-line.middle { white-space: nowrap; }

  .hero-line.top, .hero-line.bottom { color: ${v.textPrimary} !important; }
  .hero-line.middle { color: ${v.green} !important; }

  .hero-subtext {
    font-size: clamp(16px, 1.4vw, 18px);
    color: ${v.textSecondary};
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto 48px;
  }

  .hero-cta-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 36px;
  }

  .btn-hero {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${v.green};
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: clamp(16px, 1.4vw, 19px);
    font-weight: 800;
    letter-spacing: -0.4px;
    padding: 0 36px;
    min-height: 68px;
    min-width: 320px;
    border-radius: 22px;
    border: 1px solid rgba(17,55,17,0.08);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.26), 0 12px 28px rgba(39,201,39,0.22);
    animation: heroCtaPulse 2.2s ease-in-out infinite;
  }

  .btn-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 10%, rgba(255,255,255,0.26) 38%, rgba(255,255,255,0.08) 52%, transparent 72%);
    transform: translateX(-100%);
    animation: heroCtaSweep 2.8s ease-in-out infinite;
  }

  .btn-hero:hover { transform: translateY(-2px); background: ${v.greenDim}; }
  .btn-hero:active { transform: scale(0.98); }
  .btn-hero:hover .btn-arrow { transform: translateX(3px); }

  .hero-video-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${v.textMuted};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .hero-video-trigger:hover { color: ${v.textPrimary}; }

  .hero-play-circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(39,201,39,0.1);
    border: 1px solid rgba(39,201,39,0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center !important;
    flex-wrap: wrap;
    max-width: none !important;
    justify-self: unset !important;
  }

  .hero-globe {
    inset: 70% auto auto 50% !important;
    width: min(120vw, 1200px) !important;
    opacity: 0.12 !important;
  }

  /* ── Video modal ── */
  .hero-video-modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(10,10,10,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .hero-video-modal-inner {
    position: relative;
    width: min(340px, 88vw);
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  }

  .hero-video-modal-inner iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .hero-video-modal-close {
    position: absolute;
    top: -44px;
    right: 0;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .hero-video-modal-close:hover { background: rgba(255,255,255,0.22); }

  @media (max-width: 768px) {
    .hero { padding: 155px 20px 72px; }
    .hero-headline { font-size: clamp(32px, 8.5vw, 50px) !important; letter-spacing: -1.8px !important; }
    .hero-subtext { font-size: 15px; margin-bottom: 32px !important; padding: 0 8px; }
    .btn-hero { min-width: 0; width: 100%; font-size: 16px; min-height: 58px; padding: 0 24px; }
    .hero-trust { gap: 10px; }
    .hero-cta-block { gap: 12px; margin-bottom: 28px; }
    .hero-sponsors { gap: 6px 14px; margin-top: 28px; }
    .hero-sponsor-name { font-size: 11px; padding: 3px 10px; }
    .hero-sponsors-label { font-size: 10px; }
    .shorts-grid { grid-template-columns: 1fr !important; max-width: 320px !important; }
  }

  @media (max-width: 480px) {
    .hero { padding: 140px 16px 60px; }
    .hero-headline { font-size: clamp(28px, 8vw, 42px) !important; letter-spacing: -1.5px !important; line-height: 1.02 !important; }
    .hero-subtext { font-size: 14px; margin-bottom: 28px !important; }
    .hero-video-trigger { font-size: 13px; }
  }

  /* ════════════════════════════════
     ANIMATIONS & SUBTLE EFFECTS
     ════════════════════════════════ */

  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes scan-h {
    0% { transform: translateX(-200%); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateX(600%); opacity: 0; }
  }
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* ── Hero bg ───────────────────────── */

  /* ── Hero bg (particles) ──────────── */
  .hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }
  .hero-glow-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-glow-orb-1 {
    width: 700px; height: 700px;
    top: -250px; left: -120px;
    background: radial-gradient(circle, rgba(39,201,39,0.04) 0%, transparent 65%);
  }
  .hero-glow-orb-2 {
    width: 400px; height: 400px;
    bottom: -80px; right: -80px;
    background: radial-gradient(circle, rgba(39,201,39,0.03) 0%, transparent 65%);
  }
  .hero-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: rgba(39,201,39,0.4);
    box-shadow: 0 0 6px rgba(39,201,39,0.5);
  }
  .hero-particle:nth-child(1) { width:3px;height:3px;top:18%;left:7%; animation:float 5s ease-in-out infinite; }
  .hero-particle:nth-child(2) { width:4px;height:4px;top:55%;left:88%; animation:float 7s ease-in-out infinite 1s; }
  .hero-particle:nth-child(3) { width:2px;height:2px;top:32%;right:14%; animation:float 6.5s ease-in-out infinite 2s; }
  .hero-particle:nth-child(4) { width:5px;height:5px;top:75%;left:38%; animation:float 4s ease-in-out infinite 0.5s; }
  .hero-particle:nth-child(5) { width:3px;height:3px;top:12%;right:26%; animation:float 8s ease-in-out infinite 3s; }
  .hero-particle:nth-child(6) { width:4px;height:4px;top:68%;right:22%; animation:float 5.5s ease-in-out infinite 1.5s; }
  .hero-particle:nth-child(7) { width:2px;height:2px;top:42%;left:18%; animation:float 6s ease-in-out infinite 0.8s; }
  .hero-particle:nth-child(8) { width:3px;height:3px;top:85%;right:38%; animation:float 7.5s ease-in-out infinite 2.5s; }

  /* hero headline gradient */
  .hero-headline .hero-line.middle {
    background: linear-gradient(100deg, #1a9c1a 0%, #27c927 50%, #1a9c1a 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-x 4s linear infinite;
  }

  /* ── Scan line on mockup bars ──────── */
  .mockup-bar { position: relative; overflow: hidden; }
  .mockup-bar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 50px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.18), transparent);
    animation: scan-h 4s ease-in-out infinite;
  }

  /* ── Comparison table ──────────────── */
  .comparison-section {
    padding: 80px 48px;
    max-width: 900px;
    margin: 0 auto;
  }
  .comparison-table {
    margin-top: 40px;
    border: 1px solid ${v.border};
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  .comparison-row {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: center;
    padding: 16px 28px;
    border-bottom: 1px solid ${v.border};
    gap: 16px;
    transition: background 0.2s ease;
  }
  .comparison-row:last-child { border-bottom: none; }
  .comparison-row.comp-header {
    background: rgba(25,23,18,0.02);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${v.textMuted};
    padding: 12px 28px;
  }
  .comparison-row.comp-highlight {
    background: rgba(39,201,39,0.04);
    border-top: 1px solid rgba(39,201,39,0.12);
    border-bottom: 1px solid rgba(39,201,39,0.12);
  }
  .comp-tool { font-size: 14px; font-weight: 600; color: ${v.textPrimary}; }
  .comparison-row.comp-highlight .comp-tool { color: ${v.green}; font-weight: 700; }
  .comp-price { font-size: 13px; color: ${v.textSecondary}; }
  .comparison-row.comp-highlight .comp-price { font-size: 14px; font-weight: 700; color: ${v.green}; }
  .comp-learns { font-size: 14px; color: rgba(25,23,18,0.18); text-align: center; }
  .comparison-row.comp-highlight .comp-learns { color: ${v.green}; font-weight: 700; font-size: 17px; }
  @media (max-width: 640px) {
    .comparison-section { padding: 60px 16px; }
    .comparison-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 14px; }
    .comparison-row.comp-header { display: none; }
    .comp-learns { text-align: left; font-size: 12px; }
  }

  /* ════════════════════════════════
     HERO SPONSORS
     ════════════════════════════════ */
  .hero-sponsors {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px 20px;
    margin-top: 40px;
  }

  .hero-sponsors-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${v.textMuted};
    width: 100%;
    text-align: center;
    margin-bottom: 4px;
  }

  .hero-sponsor-name {
    font-size: 12px;
    font-weight: 600;
    color: ${v.textMuted};
    opacity: 0.55;
    letter-spacing: 0.5px;
    padding: 4px 12px;
    border: 1px solid ${v.border};
    border-radius: 6px;
    transition: opacity 0.2s ease;
  }

  .hero-sponsor-name:hover { opacity: 0.85; }

  /* ════════════════════════════════
     DIFFERENTIATOR TIMELINE
     ════════════════════════════════ */
  .diff-section {
    padding: 100px 48px;
    background: ${v.dark};
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .diff-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .diff-timeline {
    display: flex;
    align-items: flex-start;
    gap: 0;
    margin-top: 64px;
    position: relative;
  }

  .diff-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .diff-step-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${v.green};
    margin-bottom: 12px;
  }

  .diff-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px 20px;
    width: 100%;
  }

  .diff-step-title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .diff-step-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
  }

  .diff-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    margin-top: 72px;
    color: ${v.green};
    font-size: 20px;
    flex-shrink: 0;
  }

  .diff-conclusion {
    margin-top: 48px;
    text-align: center;
    padding: 32px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.2);
    border-radius: 16px;
  }

  .diff-conclusion p {
    font-size: 17px;
    color: rgba(255,255,255,0.85);
    line-height: 1.65;
    margin: 0;
  }

  .diff-conclusion strong {
    color: ${v.green};
  }

  @media (max-width: 768px) {
    .diff-section { padding: 60px 20px; }
    .diff-timeline { flex-direction: column; gap: 16px; }
    .diff-arrow { transform: rotate(90deg); margin: 0 auto; padding: 4px 0; }
    .diff-step { width: 100%; }
    .diff-card { padding: 20px 16px; }
    .diff-step-title { font-size: 15px; }
    .diff-step-desc { font-size: 12px; }
    .diff-conclusion { padding: 24px 16px; }
    .diff-conclusion p { font-size: 15px; }
  }

  /* ════════════════════════════════
     BRAIN IN-ACTION BLOCK
     ════════════════════════════════ */
  .brain-in-action {
    margin-top: 28px;
    padding: 20px 24px;
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.18);
    border-radius: 14px;
  }

  .brain-in-action-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${v.green};
    margin-bottom: 8px;
  }

  .brain-in-action-text {
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    line-height: 1.65;
  }

  /* ════════════════════════════════
     PRODUCT ROW BRAIN (wider variant)
     ════════════════════════════════ */
  .product-row-brain .product-row-content {
    max-width: 600px;
  }

  .product-row-brain .product-row-visual {
    min-height: 420px;
  }
`,Pw=[{stars:5,quote:"Llevaba meses tomando decisiones de compra sin datos reales. Con la herramienta de proyección de flujo de caja de BRAIN identifiqué que estaba sobrecomprando inventario un 34%. Ajusté el mes siguiente y recuperé liquidez que no sabía que tenía.",name:"Dueño de restaurante",role:"Giro: Alimentos y Bebidas",company:"CDMX · 18 empleados",result:"Liquidez recuperada en 30 días",initials:"DR"},{stars:5,quote:"Usé el módulo de estructura de equipo para redefinir roles antes de una expansión. Detectamos duplicidad de funciones entre 3 personas — algo que llevaba 2 años sin resolverse. En una semana teníamos el organigrama nuevo funcionando.",name:"Directora de operaciones",role:"Giro: E-commerce",company:"Monterrey · 24 empleados",result:"Organigrama redefinido en 1 semana",initials:"DO"},{stars:5,quote:"Corrí la herramienta de análisis de rentabilidad por cliente y descubrí que el 20% de mis clientes generaba el 80% del margen. Dejé de perseguir proyectos pequeños y en 45 días subí mi margen neto de 12% a 21%.",name:"Director de agencia",role:"Giro: Servicios de Marketing",company:"Guadalajara · 11 empleados",result:"Margen neto de 12% a 21%",initials:"DA"},{stars:5,quote:"Lancé mi negocio hace 8 meses y no tenía presupuesto para contratar un CFO ni un consultor. Con BRAIN armé mi modelo de precios, calculé mi punto de equilibrio y proyecté 6 meses de flujo de caja. Tomé decisiones desde el mes 1 que normalmente toman años en aprender.",name:"Emprendedor en etapa temprana",role:"Giro: SaaS B2B",company:"Monterrey · 3 personas",result:"Modelo financiero armado desde cero",initials:"EE"},{stars:5,quote:"Soy gerente de ventas en una empresa mediana y usé las herramientas de análisis de pipeline y forecasting para mi presentación trimestral. Mi director me preguntó qué consultor había contratado. Le dije que era Profit120 y se quedó callado.",name:"Gerente de ventas",role:"Área: Comercial",company:"Empresa industrial · Monterrey",result:"Forecast trimestral en 2 horas",initials:"GV"}],Xd=["Tu empresa entrena su propio cerebro de IA","60 días sin costo","Sin tarjeta de crédito","Todo tu equipo incluido","+200 herramientas empresariales","Promoción por tiempo limitado"],$s=()=>u.jsxs("svg",{className:"trust-check",viewBox:"0 0 16 16",fill:"none",children:[u.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.2"}),u.jsx("path",{d:"M5 8.5l2 2 4-4",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),wn=()=>u.jsxs("svg",{viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M3.75 14.25 13.2 4.8",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round"}),u.jsx("path",{d:"M7.2 4.8h6v6",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round",strokeLinejoin:"round"})]});function Cw(){const[e,t]=A.useState(!1),[n,r]=A.useState(null);return A.useEffect(()=>{const i=()=>t(window.scrollY>20);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Tw}),u.jsxs("div",{className:"page",children:[u.jsx("div",{className:"marquee-strip",children:u.jsx("div",{className:"marquee-track",children:[...Xd,...Xd].map((i,o)=>u.jsxs("span",{className:"marquee-item",children:[u.jsx("span",{className:"marquee-dot"}),i]},o))})}),u.jsxs("nav",{className:`nav${e?" scrolled":""}`,children:[u.jsx("div",{className:"nav-logo",children:u.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"})}),u.jsxs("div",{className:"nav-actions",children:[u.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"nav-login",target:"_blank",rel:"noopener noreferrer",children:"Ya tengo cuenta"}),u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"nav-cta",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{className:"nav-cta-desktop",children:"Activa tu cerebro de IA"}),u.jsx("span",{className:"nav-cta-mobile",children:"Acceso gratis"})," ",u.jsx("span",{children:"→"})]})]})]}),u.jsxs("div",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[u.jsx(jw,{}),u.jsxs("section",{className:"hero",children:[u.jsx(L,{delay:.05,children:u.jsxs("h1",{className:"hero-headline",children:[u.jsx("span",{className:"hero-line top",children:"Tu empresa merece"}),u.jsx("span",{className:"hero-line middle",children:"su propio cerebro de IA."})]})}),u.jsx(L,{delay:.1,children:u.jsx("p",{className:"hero-subtext",children:"Profit120 te da tu propio cerebro de IA, único para tu empresa. Cada uso lo hace más inteligente sobre tu negocio. Finanzas, ventas, marketing, operaciones y RRHH — todo en un solo lugar, para ti y todo tu equipo."})}),u.jsx(L,{delay:.15,children:u.jsx("div",{className:"hero-cta-block",children:u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-hero",target:"_blank",rel:"noopener noreferrer",children:["Accede al cerebro de tu empresa - 60 días sin costo",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})})}),u.jsx(L,{delay:.2,children:u.jsxs("div",{className:"hero-trust",children:[u.jsxs("div",{className:"trust-item",children:[u.jsx($s,{})," 60 días sin costo — sin tarjeta de crédito"]}),u.jsxs("div",{className:"trust-item",children:[u.jsx($s,{})," Todo tu equipo incluido desde el primer día"]}),u.jsxs("div",{className:"trust-item",children:[u.jsx($s,{})," Sin necesidad de registrarte"]})]})})]})]}),n&&u.jsx("div",{className:"hero-video-modal",onClick:()=>r(null),children:u.jsxs("div",{className:"hero-video-modal-inner",onClick:i=>i.stopPropagation(),children:[u.jsx("button",{className:"hero-video-modal-close",onClick:()=>r(null),children:"✕"}),u.jsx("iframe",{src:`https://www.youtube.com/embed/${n}?rel=0&modestbranding=1&playsinline=1&autoplay=1`,title:"Profit120 video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})}),u.jsx("section",{className:"video-section",children:u.jsxs("div",{className:"video-section-grid",children:[u.jsx(L,{delay:0,direction:"right",children:u.jsxs("div",{children:[u.jsxs("div",{className:"section-eyebrow",style:{justifyContent:"flex-start",marginBottom:20},children:[u.jsx("span",{className:"eyebrow-line"}),"Ve en acción"]}),u.jsxs("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:16},children:["3 minutos que",u.jsx("br",{}),"lo explican todo."]}),u.jsx("p",{style:{fontSize:16,color:v.textSecondary,lineHeight:1.7,marginBottom:28},children:"Ve qué es Profit120, cómo funciona su IA y por qué no es una herramienta más — es el cerebro que tu empresa necesitaba."}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:["Qué son los 5 módulos y para qué sirven","Cómo la IA aprende de tu empresa con cada uso"].map((i,o)=>u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[u.jsx("span",{style:{width:22,height:22,borderRadius:"50%",background:v.greenGlow,border:`1px solid ${v.borderHover}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1},children:u.jsx("svg",{viewBox:"0 0 12 12",fill:v.green,width:"8",height:"8",children:u.jsx("path",{d:"M2 6l3 3 5-5",stroke:v.green,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx("span",{style:{fontSize:15,color:v.textSecondary,lineHeight:1.5},children:i})]},o))})]})}),u.jsx(L,{delay:.1,direction:"left",children:u.jsx("div",{className:"video-section-embed",children:u.jsx("iframe",{src:"https://www.youtube.com/embed/U-vm1CTmgR8?rel=0&modestbranding=1&playsinline=1",title:"Profit120 — Ve cómo funciona",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"}})})})]})}),u.jsx("section",{className:"stats-strip",children:u.jsxs("div",{className:"stats-strip-inner",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:u.jsx(zi,{end:5})}),u.jsx("span",{className:"stat-label",children:"Módulos estratégicos"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:u.jsx(zi,{end:60,suffix:" días"})}),u.jsx("span",{className:"stat-label",children:"Sin costo — para ti y todo tu equipo"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:u.jsx(zi,{end:24,suffix:"/7"})}),u.jsx("span",{className:"stat-label",children:"Tu cerebro en acción"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:u.jsx(zi,{end:-20,suffix:" min"})}),u.jsx("span",{className:"stat-label",children:"Para resolver problemas reales"})]})]})}),u.jsx("section",{className:"problem-section",children:u.jsxs("div",{className:"problem-inner",children:[u.jsxs("div",{className:"problem-header",children:[u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"section-eyebrow",children:[u.jsx("span",{className:"eyebrow-line"}),"El problema",u.jsx("span",{className:"eyebrow-line"})]})}),u.jsx(L,{delay:.1,children:u.jsx("h2",{className:"section-heading",children:"¿Tu empresa opera a ciegas?"})})]}),u.jsx("div",{className:"pain-grid",children:[{title:"Decides con instinto, no con datos.",desc:"Sin información confiable, cada decisión es una apuesta."},{title:"Tu contador llega tarde y cobra caro.",desc:"Para cuando recibes el reporte, el momento ya pasó."},{title:"Cada área opera en otro lugar.",desc:"Ventas, finanzas y marketing no se hablan. La empresa no funciona como sistema."},{title:"Toddas tus IA´s empiezan desde cero cada vez.",desc:"Eso no es inteligencia, es pérdida de tiempo disfrazada de productividad."}].map((i,o)=>u.jsx(L,{delay:.08*o,children:u.jsx("div",{className:"pain-card",children:u.jsxs("div",{children:[u.jsx("div",{className:"pain-title",children:i.title}),u.jsx("div",{className:"pain-desc",children:i.desc})]})})},o))}),u.jsx(L,{delay:.2,children:u.jsx("div",{style:{textAlign:"center",marginTop:48},children:u.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-secondary",target:"_blank",rel:"noopener noreferrer",children:"Conoce una mejor forma →"})})})]})}),u.jsxs("section",{className:"features",id:"productos",children:[u.jsxs("div",{className:"features-header",children:[u.jsx(L,{delay:.1,children:u.jsxs("h2",{className:"section-heading",children:["5 módulos. Un solo objetivo:",u.jsx("br",{}),"hacer crecer tu empresa."]})}),u.jsx(L,{delay:.15,children:u.jsx("p",{className:"section-desc",children:"Con tus 60 días sin costo, desbloqueas los 5 desde el primer minuto. Y cada uno alimenta tu cerebro de IA, mientras más usas, más te conoce."})})]}),u.jsx(L,{delay:0,children:u.jsxs("div",{className:"product-row",children:[u.jsxs("div",{className:"product-info",children:[u.jsx("div",{className:"product-badge",children:"IA"}),u.jsx("h3",{className:"product-name",children:"Profit BRAIN"}),u.jsx("p",{className:"product-desc",children:"Tu centro de mando inteligente. Más de 200 herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa."}),u.jsxs("div",{className:"product-features-list",children:[u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," +200 herramientas organizadas por área"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Buscador inteligente que te recomienda la herramienta correcta"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Finanzas, Marketing, Ventas, RRHH, Operaciones, Liderazgo y más"]})]}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/tools",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Explorar herramientas →"})]}),u.jsxs("div",{className:"product-mockup",children:[u.jsxs("div",{className:"mockup-bar",children:[u.jsx("span",{className:"mockup-dot red"}),u.jsx("span",{className:"mockup-dot yellow"}),u.jsx("span",{className:"mockup-dot green"}),u.jsx("span",{className:"mockup-url",children:"plataforma.profit120.com/app/tools"})]}),u.jsxs("div",{className:"mock-brain",children:[u.jsxs("div",{className:"mock-brain-header",children:[u.jsx("div",{className:"mock-brain-title",children:"Tu propio PROFIT BRAIN"}),u.jsx("div",{className:"mock-brain-sub",children:"Selecciona la categoría con la que te gustaría comenzar"})]}),u.jsxs("div",{className:"mock-brain-tabs",children:[u.jsx("span",{className:"mock-brain-tab active",children:"Inicio 202"}),u.jsx("span",{className:"mock-brain-tab",children:"Finanzas 3"}),u.jsx("span",{className:"mock-brain-tab",children:"Marketing 42"}),u.jsx("span",{className:"mock-brain-tab",children:"Ventas 29"})]}),u.jsx("div",{className:"mock-brain-search",children:"Escribe tu pregunta o necesidad..."}),u.jsxs("div",{className:"mock-brain-cards",children:[u.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #1e3a5f, #2d5986)"},children:[u.jsx("div",{className:"mock-brain-card-title",children:"Calificación de Leads"}),u.jsx("div",{className:"mock-brain-card-sub",children:"Organiza leads: MQL, SQL, PQL y CQL"}),u.jsx("div",{className:"mock-brain-card-cat",children:"MARKETING"})]}),u.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #065f46, #047857)"},children:[u.jsx("div",{className:"mock-brain-card-title",children:"Estrategia de Ventas"}),u.jsx("div",{className:"mock-brain-card-sub",children:"Plantilla de estrategia de ventas"}),u.jsx("div",{className:"mock-brain-card-cat",children:"VENTAS"})]}),u.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #581c87, #7c3aed)"},children:[u.jsx("div",{className:"mock-brain-card-title",children:"Proceso de Reclutamiento"}),u.jsx("div",{className:"mock-brain-card-sub",children:"Define los 7 pasos del proceso"}),u.jsx("div",{className:"mock-brain-card-cat",children:"RRHH"})]}),u.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #78350f, #a16207)"},children:[u.jsx("div",{className:"mock-brain-card-title",children:"Dashboard de KPIs de RRHH"}),u.jsx("div",{className:"mock-brain-card-sub",children:"Rotación, tiempo de contratación..."}),u.jsx("div",{className:"mock-brain-card-cat",children:"RRHH"})]})]})]})]})]})}),u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"product-row reverse",children:[u.jsxs("div",{className:"product-mockup",children:[u.jsxs("div",{className:"mockup-bar",children:[u.jsx("span",{className:"mockup-dot red"}),u.jsx("span",{className:"mockup-dot yellow"}),u.jsx("span",{className:"mockup-dot green"}),u.jsx("span",{className:"mockup-url",children:"plataforma.profit120.com/app/chatbot"})]}),u.jsxs("div",{className:"mock-chat",children:[u.jsx("div",{className:"mock-chat-greeting",children:"¡Hola!"}),u.jsx("div",{className:"mock-chat-sub",children:"Soy el primer chat especializado para PYMES, ¿qué solución necesitas hoy?"}),u.jsxs("div",{className:"mock-chat-input",children:[u.jsx("span",{children:"Escribe tu pregunta o adjunta archivos para analizar"}),u.jsx("div",{className:"mock-chat-send",children:"↑"})]}),u.jsxs("div",{className:"mock-chat-suggestions",children:[u.jsxs("div",{className:"mock-chat-suggestion",children:[u.jsx("strong",{children:"Actualmente tengo este problema en mi empresa..."}),"¡Sin miedo! Estoy aquí para ayudarte."]}),u.jsxs("div",{className:"mock-chat-suggestion",children:[u.jsx("strong",{children:"Necesito saber más acerca de..."}),"Nadie nace sabiéndolo todo..."]}),u.jsxs("div",{className:"mock-chat-suggestion",children:[u.jsx("strong",{children:"Explícame más de Profit120"}),"¡No escondemos nada!"]})]})]})]}),u.jsxs("div",{className:"product-info",children:[u.jsx("div",{className:"product-badge",children:"24/7"}),u.jsx("h3",{className:"product-name",children:"Profit CHAT"}),u.jsx("p",{className:"product-desc",children:"Tu consultor IA disponible a cualquier hora. Adjunta archivos, pide análisis, resuelve dudas, con contexto de tu empresa."}),u.jsxs("div",{className:"product-features-list",children:[u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Chat especializado en PYMES"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Adjunta archivos para análisis instantáneo"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," La IA ya conoce el contexto de tu empresa"]})]}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]})]})}),u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"product-row",children:[u.jsxs("div",{className:"product-info",children:[u.jsx("div",{className:"product-badge",children:"20 MIN"}),u.jsx("h3",{className:"product-name",children:"Profit BOOST"}),u.jsx("p",{className:"product-desc",children:"Un problema real. Una solución accionable. Frameworks y plantillas para ejecutar hoy, organizados por categoría."}),u.jsxs("div",{className:"product-features-list",children:[u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," +7 categorías de problemas reales"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Top 10 en tendencias diarias"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Frameworks listos para aplicar de inmediato"]})]}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/courses",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]}),u.jsxs("div",{className:"product-mockup",children:[u.jsxs("div",{className:"mockup-bar",children:[u.jsx("span",{className:"mockup-dot red"}),u.jsx("span",{className:"mockup-dot yellow"}),u.jsx("span",{className:"mockup-dot green"}),u.jsx("span",{className:"mockup-url",children:"plataforma.profit120.com/app/courses"})]}),u.jsxs("div",{className:"mock-boost",children:[u.jsx("div",{className:"mock-boost-section-title",children:"Categorías populares"}),u.jsx("div",{className:"mock-boost-categories",children:[{label:"Marketing",bg:"linear-gradient(135deg,#1e3a5f,#2d5986)"},{label:"Finanzas",bg:"linear-gradient(135deg,#065f46,#047857)"},{label:"Ventas",bg:"linear-gradient(135deg,#581c87,#7c3aed)"},{label:"Operaciones",bg:"linear-gradient(135deg,#78350f,#a16207)"},{label:"RRHH",bg:"linear-gradient(135deg,#1e1b4b,#3730a3)"}].map((i,o)=>u.jsx("div",{className:"mock-boost-cat",style:{background:i.bg},children:u.jsx("span",{children:i.label})},o))}),u.jsx("div",{className:"mock-boost-section-title",children:"Top de esta semana"}),u.jsx("div",{className:"mock-boost-grid",children:[{title:"Estrategia de Precios",bg:"linear-gradient(160deg,#1e3a5f,#0f172a)"},{title:"Plan de Marketing",bg:"linear-gradient(160deg,#065f46,#022c22)"},{title:"Control de Costos",bg:"linear-gradient(160deg,#581c87,#2e1065)"},{title:"Pipeline de Ventas",bg:"linear-gradient(160deg,#78350f,#2c1300)"},{title:"Onboarding",bg:"linear-gradient(160deg,#1e1b4b,#0d0a2e)"}].map((i,o)=>u.jsxs("div",{className:"mock-boost-card",style:{background:i.bg},children:[u.jsx("div",{className:"mock-boost-card-plus",children:"+"}),u.jsx("div",{className:"mock-boost-card-title",children:i.title})]},o))})]})]})]})}),u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"product-row reverse",children:[u.jsxs("div",{className:"product-mockup",children:[u.jsxs("div",{className:"mockup-bar",children:[u.jsx("span",{className:"mockup-dot red"}),u.jsx("span",{className:"mockup-dot yellow"}),u.jsx("span",{className:"mockup-dot green"}),u.jsx("span",{className:"mockup-url",children:"plataforma.profit120.com/app/library"})]}),u.jsxs("div",{className:"mock-talks",children:[u.jsxs("div",{className:"mock-talks-header",children:[u.jsxs("div",{className:"mock-talks-logo",children:["Profit",u.jsx("span",{children:"TALKS"})]}),u.jsx("div",{className:"mock-talks-sort",children:"Recientes ▾"})]}),u.jsx("div",{className:"mock-talks-grid",children:[{num:"#56",title:"Decisiones con datos",dur:"8 min",bg:"linear-gradient(135deg,#1e3a5f,#0f172a)"},{num:"#55",title:"IA en tu operación",dur:"6 min",bg:"linear-gradient(135deg,#065f46,#022c22)"},{num:"#54",title:"Finanzas sin contador",dur:"7 min",bg:"linear-gradient(135deg,#581c87,#2e1065)"},{num:"#53",title:"Cómo escalar ventas",dur:"9 min",bg:"linear-gradient(135deg,#7c2d12,#c2410c)"},{num:"#52",title:"Equipos de alto impacto",dur:"5 min",bg:"linear-gradient(135deg,#164e63,#0e7490)"},{num:"#51",title:"Precios que sí funcionan",dur:"6 min",bg:"linear-gradient(135deg,#3b0764,#7e22ce)"}].map((i,o)=>u.jsx("div",{className:"mock-talks-card",children:u.jsxs("div",{className:"mock-talks-thumb",style:{background:i.bg},children:[u.jsx("div",{className:"mock-talks-thumb-num",children:i.num}),u.jsx("div",{className:"mock-talks-thumb-title",children:i.title}),u.jsx("div",{className:"mock-talks-thumb-dur",children:i.dur})]})},o))})]})]}),u.jsxs("div",{className:"product-info",children:[u.jsx("div",{className:"product-badge",children:"SEMANAL"}),u.jsx("h3",{className:"product-name",children:"Profit TALKS"}),u.jsx("p",{className:"product-desc",children:"El newsletter que forma criterio. Análisis, tendencias y casos reales que se aplican de inmediato. +56 ediciones."}),u.jsxs("div",{className:"product-features-list",children:[u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," +55 episodios publicados"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Casos reales de empresas LATAM"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Marcos de decisión aplicables"]})]}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/library",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]})]})}),u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"product-row",children:[u.jsxs("div",{className:"product-info",children:[u.jsx("div",{className:"product-badge",children:"LIVE"}),u.jsx("h3",{className:"product-name",children:"Profit LABS"}),u.jsx("p",{className:"product-desc",children:"Estrategia colaborativa en vivo. Cupo limitado por sesión — cuando se llena, se llena."}),u.jsxs("div",{className:"product-features-list",children:[u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Sesiones en vivo con expertos"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Cupo limitado por sesión"]}),u.jsxs("div",{className:"product-feature-item",children:[u.jsx("span",{className:"product-feature-check",children:"✓"})," Marketing, Finanzas, Operaciones y más"]})]}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/labs",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Ver sesiones disponibles →"})]}),u.jsxs("div",{className:"product-mockup",children:[u.jsxs("div",{className:"mockup-bar",children:[u.jsx("span",{className:"mockup-dot red"}),u.jsx("span",{className:"mockup-dot yellow"}),u.jsx("span",{className:"mockup-dot green"}),u.jsx("span",{className:"mockup-url",children:"plataforma.profit120.com/app/labs"})]}),u.jsxs("div",{className:"mock-labs",children:[u.jsxs("div",{className:"mock-labs-header",children:[u.jsx("div",{className:"mock-labs-title",children:"Sesiones en Vivo"}),u.jsx("div",{className:"mock-labs-sub",children:"Estrategia colaborativa con expertos"})]}),u.jsx("div",{className:"mock-labs-grid",children:[{title:"Marketing Inteligente con IA",meta:"10/10 participantes",badge:"LLENO",badgeColor:"#ef4444",bg:"linear-gradient(135deg,#7f1d1d,#b91c1c)"},{title:"Rentabilidad y Control",meta:"15/15 participantes",badge:"LLENO",badgeColor:"#ef4444",bg:"linear-gradient(135deg,#1e3a5f,#1d4ed8)"},{title:"Roles y Responsabilidades",meta:"4/15 participantes",badge:"DISPONIBLE",badgeColor:"#16a34a",bg:"linear-gradient(135deg,#065f46,#15803d)"},{title:"Ventas con IA",meta:"7/15 participantes",badge:"DISPONIBLE",badgeColor:"#16a34a",bg:"linear-gradient(135deg,#78350f,#d97706)"},{title:"Operaciones sin caos",meta:"12/15 participantes",badge:"DISPONIBLE",badgeColor:"#16a34a",bg:"linear-gradient(135deg,#1e1b4b,#4338ca)"},{title:"Liderazgo y Cultura",meta:"15/15 participantes",badge:"LLENO",badgeColor:"#ef4444",bg:"linear-gradient(135deg,#4a044e,#86198f)"}].map((i,o)=>u.jsxs("div",{className:"mock-labs-card",children:[u.jsx("div",{className:"mock-labs-card-img",style:{background:i.bg},children:u.jsx("div",{className:"mock-labs-badge",style:{background:i.badgeColor,color:"#fff"},children:i.badge})}),u.jsxs("div",{className:"mock-labs-card-body",children:[u.jsx("div",{className:"mock-labs-card-title",children:i.title}),u.jsx("div",{className:"mock-labs-card-meta",children:i.meta})]})]},o))})]})]})]})})]}),u.jsxs("section",{className:"howto",id:"como-funciona",children:[u.jsx("div",{className:"howto-header",children:u.jsx(L,{delay:.1,children:u.jsxs("h2",{className:"section-heading",children:["Activa el cerebro de tu empresa",u.jsx("br",{}),"en 3 pasos."]})})}),u.jsxs("div",{className:"steps",children:[u.jsx(L,{delay:0,children:u.jsxs("div",{className:"step-card",children:[u.jsx("div",{className:"step-num",children:"1"}),u.jsx("h3",{className:"step-title",children:"Crea tu cuenta sin costo"}),u.jsx("p",{className:"step-desc",children:"Regístrate con tu correo. No necesitas tarjeta de crédito ni aprobación de nadie. En segundos estás adentro."})]})}),u.jsx(L,{delay:.1,children:u.jsxs("div",{className:"step-card",children:[u.jsx("div",{className:"step-num",children:"2"}),u.jsx("h3",{className:"step-title",children:"Invita a todo tu equipo"}),u.jsx("p",{className:"step-desc",children:"Agrega a todos los que necesites. Que todos empiecen a usar la plataforma desde el primer día, eso entrena la IA más rápido."})]})}),u.jsx(L,{delay:.2,children:u.jsxs("div",{className:"step-card",children:[u.jsx("div",{className:"step-num",children:"3"}),u.jsx("h3",{className:"step-title",children:"Usa, pregunta, decide, la IA aprende"}),u.jsx("p",{className:"step-desc",children:"Cada herramienta que usas, cada pregunta que haces, cada análisis que corres... tu cerebro de IA se vuelve más inteligente sobre tu empresa. En 60 días vas a tener un activo que ningún consultor te puede dar."})]})})]}),u.jsx(L,{delay:.25,children:u.jsx("div",{style:{textAlign:"center",marginTop:48},children:u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-primary product-cta",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex"},children:["Empieza ahora — es gratis",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})})})]}),u.jsxs("section",{className:"for-whom",children:[u.jsxs("div",{className:"for-whom-header",children:[u.jsx(L,{delay:.05,children:u.jsxs("div",{className:"section-eyebrow",children:[u.jsx("span",{className:"eyebrow-line"}),"Para quién es",u.jsx("span",{className:"eyebrow-line"})]})}),u.jsx(L,{delay:.1,children:u.jsxs("h2",{className:"section-heading",children:["Diseñado para quienes",u.jsx("br",{}),"toman decisiones reales."]})}),u.jsx(L,{delay:.15,children:u.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Profit120 no es para todos — y eso está bien. Si te identificas con alguno de estos perfiles, es para ti."})})]}),u.jsx("div",{className:"for-whom-grid",children:[{title:"Dueños de PYME (5–200 empleados)",desc:"Decisiones estratégicas sin consultores caros."},{title:"Directores y gerentes de área",desc:"Datos e IA para Finanzas, Marketing, Ventas y Operaciones — sin analistas."},{title:"Startups en crecimiento",desc:"Haz más con menos. IA especializada, sin setup ni entrenamiento."},{title:"Empresas que escalan sin contratar más",desc:"Automatiza antes de agregar headcount."},{title:"Emprendedores en etapa temprana",desc:"Sin presupuesto para consultores, pero con las mismas decisiones complejas. Profit120 te da el criterio que normalmente toma años construir."},{title:"Colaboradores que quieren hacer más",desc:"Gerentes, coordinadores y analistas que necesitan mejores herramientas para tomar decisiones y mostrar resultados sin depender de otros."}].map((i,o)=>u.jsx(L,{delay:.08*o,children:u.jsxs("div",{className:"for-whom-card",children:[u.jsx("div",{className:"for-whom-check",children:"✓"}),u.jsxs("div",{children:[u.jsx("div",{className:"for-whom-title",children:i.title}),u.jsx("div",{className:"for-whom-desc",children:i.desc})]})]})},o))}),u.jsx(L,{delay:.1,children:u.jsxs("div",{className:"not-for-whom",children:[u.jsx("div",{className:"not-for-whom-title",children:"No es para ti si..."}),u.jsx("div",{className:"not-for-list",children:["Buscas solución mágica sin implementar nada"].map((i,o)=>u.jsxs("span",{className:"not-for-item",children:["✕ ",i]},o))})]})}),u.jsx(L,{delay:.15,children:u.jsx("div",{style:{textAlign:"center",marginTop:36},children:u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",className:"btn-hero",children:["Activa tu acceso gratis — 60 días",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})})})]}),u.jsxs("section",{className:"comparison-section",children:[u.jsx(L,{delay:.05,children:u.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[u.jsxs("div",{className:"section-eyebrow",style:{justifyContent:"center"},children:[u.jsx("span",{className:"eyebrow-line"}),"¿Por qué Profit120?",u.jsx("span",{className:"eyebrow-line"})]}),u.jsx("h2",{className:"section-heading",style:{marginBottom:12},children:"Compara antes de decidir."}),u.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"No somos otra herramienta genérica. Somos el cerebro que aprende de tu empresa."})]})}),u.jsx(L,{delay:.1,children:u.jsxs("div",{className:"comparison-table",children:[u.jsxs("div",{className:"comparison-row comp-header",children:[u.jsx("div",{className:"comp-tool",children:"Herramienta"}),u.jsx("div",{className:"comp-price",children:"Precio"}),u.jsx("div",{className:"comp-learns",children:"¿Aprende de tu empresa?"})]}),[{tool:"ChatGPT Pro",price:"$200/mes",learns:"No"},{tool:"Gemini Ultra",price:"$250/mes",learns:"No"},{tool:"MasterClass",price:"$240/año",learns:"No"},{tool:"Udemy Business",price:"$30/mes por persona",learns:"No"},{tool:"HubSpot",price:"$40/mes por usuario",learns:"No"},{tool:"Monday.com",price:"$12/mes por usuario",learns:"No"}].map((i,o)=>u.jsxs("div",{className:"comparison-row",children:[u.jsx("div",{className:"comp-tool",children:i.tool}),u.jsx("div",{className:"comp-price",children:i.price}),u.jsxs("div",{className:"comp-learns",style:{color:v.textMuted},children:["✕ ",i.learns]})]},o)),u.jsxs("div",{className:"comparison-row comp-highlight",children:[u.jsx("div",{className:"comp-tool",children:u.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120",style:{height:22,width:"auto",display:"block"}})}),u.jsx("div",{className:"comp-price",children:"$0 por 60 días"}),u.jsx("div",{className:"comp-learns",children:"✓ +200 herramientas que aprenden de TU empresa"})]})]})}),u.jsx(L,{delay:.15,children:u.jsx("div",{style:{textAlign:"center",marginTop:36},children:u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",className:"btn-hero",children:["Pruébalo gratis — 60 días sin costo",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})})})]}),u.jsxs("section",{className:"testimonials",id:"testimonios",children:[u.jsxs("div",{className:"testimonials-header",children:[u.jsx(L,{delay:.1,children:u.jsxs("h2",{className:"section-heading",children:["Empezaron con 60 días sin costo.",u.jsx("br",{}),"Se quedaron por los resultados."]})}),u.jsx(L,{delay:.15,children:u.jsx("p",{className:"section-desc",children:"Activaron su prueba sin costo, probaron los módulos y decidieron quedarse."})})]}),u.jsx("div",{className:"t-grid",children:Pw.map((i,o)=>u.jsx(L,{delay:.08*o,children:u.jsxs("div",{className:"t-card",children:[u.jsx("div",{className:"t-stars",children:"★".repeat(i.stars)}),i.result&&u.jsx("div",{className:"t-result",children:i.result}),u.jsxs("p",{className:"t-quote",children:['"',i.quote,'"']}),u.jsxs("div",{className:"t-author",children:[i.img?u.jsx("img",{src:i.img,alt:i.name,className:"t-avatar-img"}):u.jsx("div",{className:"t-avatar",children:i.initials}),u.jsxs("div",{children:[u.jsx("div",{className:"t-name",children:i.name}),u.jsx("div",{className:"t-role",children:i.role}),i.company&&u.jsx("div",{className:"t-company",children:i.company})]})]})]})},o))})]}),u.jsxs("section",{className:"objections",children:[u.jsx("div",{className:"objections-header",children:u.jsx(L,{delay:.1,children:u.jsxs("h2",{className:"section-heading",children:["Las preguntas que",u.jsx("br",{}),"todos se hacen."]})})}),u.jsx("div",{className:"obj-grid",children:[{q:"¿Mis datos están seguros?",a:"Sí. Usamos encriptación de extremo a extremo. Tus datos nunca se usan para entrenar modelos externos. Tu información es tuya y solo tuya."},{q:"¿En qué se diferencia de usar ChatGPT o alguna otra IA?",a:"ChatGPT es una IA genérica. Profit120 es un cerebro especializado en negocios: +200 herramientas preconstruidas por expertos, organizadas por área, para que no empieces de cero cada vez."},{q:"¿Qué pasa después de los 60 días?",a:"Tú decides si continuar. Sin renovación automática. Sin sorpresas. Sin compromisos. Pero tu cerebro de IA ya va a conocer tu empresa... y eso no lo vas a querer soltar."},{q:"¿Necesito tarjeta de crédito?",a:"No. Cero datos de pago. Solo tu correo. Entras, activas tus 60 días sin costo y listo."}].map((i,o)=>u.jsx(L,{delay:.06*o,children:u.jsxs("div",{className:"obj-card",children:[u.jsx("div",{className:"obj-question",children:i.q}),u.jsx("div",{className:"obj-answer",children:i.a})]})},o))}),u.jsx(L,{delay:.15,children:u.jsx("div",{style:{textAlign:"center",marginTop:36},children:u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",className:"btn-hero",children:["Empieza sin costo — sin tarjeta de crédito",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})})})]}),u.jsxs("section",{className:"b2b-upsell",children:[u.jsx(L,{delay:.05,children:u.jsx("div",{className:"b2b-badge",children:"PARA EMPRESAS QUE NECESITAN MÁS"})}),u.jsx(L,{delay:.1,children:u.jsx("h2",{className:"b2b-headline",children:"¿Tu empresa necesita IA operativa a la medida?"})}),u.jsx(L,{delay:.15,children:u.jsx("p",{className:"b2b-desc",children:"Conectamos tus sistemas, construimos agentes de IA que ejecutan por ti y automatizamos tu operación. Todo personalizado para tu empresa."})}),u.jsx(L,{delay:.2,children:u.jsxs("div",{className:"b2b-tags",children:[u.jsx("span",{className:"b2b-tag",children:"CORTEX120 — Datos centralizados"}),u.jsx("span",{className:"b2b-tag",children:"Agentes de IA — Ventas, soporte, RRHH, finanzas"}),u.jsx("span",{className:"b2b-tag",children:"Automatizaciones — Procesos que se ejecutan solos"})]})}),u.jsx(L,{delay:.25,children:u.jsx("a",{href:"https://b2b.profit120.com",className:"b2b-btn",target:"_blank",rel:"noopener noreferrer",children:"Conocer Profit120 B2B →"})})]}),u.jsx(L,{children:u.jsxs("div",{className:"final-cta",children:[u.jsxs("h2",{className:"final-cta-title",children:["Tu empresa merece un cerebro",u.jsx("br",{}),u.jsx("span",{className:"green-text",children:"que la entienda."})]}),u.jsx("p",{className:"final-cta-sub",children:"5 módulos de IA. Todo tu equipo. Sin tarjeta de crédito. 60 días para comprobarlo."}),u.jsx("div",{className:"cta-benefits",children:["60 días sin costo","Sin tarjeta de crédito","Todo tu equipo incluido","5 módulos completos","Cancela cuando quieras"].map((i,o)=>u.jsxs("div",{className:"benefit-chip",children:[u.jsx("span",{className:"benefit-dot"}),i]},o))}),u.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-primary",style:{fontSize:18,padding:"20px 48px",minHeight:"auto",flex:"none",animation:"heroCtaPulse 2.2s ease-in-out infinite"},target:"_blank",rel:"noopener noreferrer",children:["Empieza Sin Costo — 60 Días",u.jsx("span",{className:"btn-arrow",children:u.jsx(wn,{})})]})]})}),u.jsxs("footer",{className:"footer-full",children:[u.jsxs("div",{className:"footer-top",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"}),u.jsx("p",{children:"La plataforma de IA para dueños de empresa que quieren decidir y crecer más rápido. 5 módulos. Un solo objetivo."}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{href:"https://instagram.com/profit_120",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:u.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),u.jsx("a",{href:"https://linkedin.com/company/profit-120",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),u.jsx("a",{href:"https://www.youtube.com/@Profit120",target:"_blank",rel:"noopener noreferrer",title:"YouTube",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:u.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-col-title",children:"Plataforma"}),u.jsxs("div",{className:"footer-col-links",children:[u.jsx("a",{href:"https://www.plataforma.profit120.com/app/tools",target:"_blank",rel:"noopener noreferrer",children:"Profit BRAIN"}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",children:"Profit CHAT"}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/courses",target:"_blank",rel:"noopener noreferrer",children:"Profit BOOST"}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/library",target:"_blank",rel:"noopener noreferrer",children:"Profit TALKS"}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/labs",target:"_blank",rel:"noopener noreferrer",children:"Profit LABS"})]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"footer-col-title",children:"Legal & Contacto"}),u.jsxs("div",{className:"footer-col-links",children:[u.jsx("a",{href:"https://plataforma.profit120.com/privacidad",target:"_blank",rel:"noopener noreferrer",children:"Política de Privacidad"}),u.jsx("a",{href:"https://plataforma.profit120.com/terminos",target:"_blank",rel:"noopener noreferrer",children:"Términos de Uso"}),u.jsx("a",{href:"mailto:hola@profit120.com",children:"info@profit120.com"}),u.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",children:"Activar 60 días sin costo →"})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsxs("span",{children:["© ",new Date().getFullYear()," Profit120. Todos los derechos reservados."]}),u.jsxs("div",{className:"footer-legal",children:[u.jsx("a",{href:"https://plataforma.profit120.com/privacidad",target:"_blank",rel:"noopener noreferrer",children:"Privacidad"}),u.jsx("a",{href:"https://plataforma.profit120.com/terminos",target:"_blank",rel:"noopener noreferrer",children:"Términos"}),u.jsx("a",{href:"mailto:hola@profit120.com",children:"Contacto"})]})]})]})]})]})}Bs.createRoot(document.getElementById("root")).render(u.jsx(mg.StrictMode,{children:u.jsx(Cw,{})}));
