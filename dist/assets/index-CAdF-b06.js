(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},wl={},ws={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),Fc=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Uc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Vc=Symbol.for("react.memo"),Wc=Symbol.for("react.lazy"),ia=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,Es={};function jn(e,t,n){this.props=e,this.context=t,this.refs=Es,this.updater=n||ks}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=jn.prototype;function so(e,t,n){this.props=e,this.context=t,this.refs=Es,this.updater=n||ks}var uo=so.prototype=new Ns;uo.constructor=so;Ss(uo,jn.prototype);uo.isPureReactComponent=!0;var oa=Array.isArray,Cs=Object.prototype.hasOwnProperty,co={current:null},js={key:!0,ref:!0,__self:!0,__source:!0};function _s(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Cs.call(t,r)&&!js.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:pr,type:e,key:i,ref:o,props:l,_owner:co.current}}function Qc(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var aa=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yc(""+e.key):t.toString(36)}function Or(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case Dc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Fl(o,0):r,oa(l)?(n="",e!=null&&(n=e.replace(aa,"$&/")+"/"),Or(l,t,n,"",function(c){return c})):l!=null&&(fo(l)&&(l=Qc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(aa,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",oa(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Fl(i,a);o+=Or(i,t,n,s,l)}else if(s=Hc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Fl(i,a++),o+=Or(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function kr(e,t,n){if(e==null)return e;var r=[],l=0;return Or(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Kc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ur={transition:null},Xc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:co};function zs(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=jn;I.Fragment=Fc;I.Profiler=Oc;I.PureComponent=so;I.StrictMode=Mc;I.Suspense=bc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;I.act=zs;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=co.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cs.call(t,s)&&!js.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:pr,type:e.type,key:l,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Bc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uc,_context:e},e.Consumer=e};I.createElement=_s;I.createFactory=function(e){var t=_s.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:$c,render:e}};I.isValidElement=fo;I.lazy=function(e){return{$$typeof:Wc,_payload:{_status:-1,_result:e},_init:Kc}};I.memo=function(e,t){return{$$typeof:Vc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};I.unstable_act=zs;I.useCallback=function(e,t){return ge.current.useCallback(e,t)};I.useContext=function(e){return ge.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};I.useEffect=function(e,t){return ge.current.useEffect(e,t)};I.useId=function(){return ge.current.useId()};I.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ge.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};I.useRef=function(e){return ge.current.useRef(e)};I.useState=function(e){return ge.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ge.current.useTransition()};I.version="18.3.1";ws.exports=I;var M=ws.exports;const Gc=Ic(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=M,Jc=Symbol.for("react.element"),Zc=Symbol.for("react.fragment"),ed=Object.prototype.hasOwnProperty,td=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nd={key:!0,ref:!0,__self:!0,__source:!0};function Ps(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ed.call(t,r)&&!nd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Jc,type:e,key:i,ref:o,props:l,_owner:td.current}}wl.Fragment=Zc;wl.jsx=Ps;wl.jsxs=Ps;xs.exports=wl;var d=xs.exports,hi={},Rs={exports:{}},Pe={},Ts={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,R){var T=S.length;S.push(R);e:for(;0<T;){var B=T-1>>>1,O=S[B];if(0<l(O,R))S[B]=R,S[T]=O,T=B;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var R=S[0],T=S.pop();if(T!==R){S[0]=T;e:for(var B=0,O=S.length,Ze=O>>>1;B<Ze;){var Ae=2*(B+1)-1,At=S[Ae],Ee=Ae+1,Lt=S[Ee];if(0>l(At,T))Ee<O&&0>l(Lt,At)?(S[B]=Lt,S[Ee]=T,B=Ee):(S[B]=At,S[Ae]=T,B=Ae);else if(Ee<O&&0>l(Lt,T))S[B]=Lt,S[Ee]=T,B=Ee;else break e}}return R}function l(S,R){var T=S.sortIndex-R.sortIndex;return T!==0?T:S.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],m=1,h=null,g=3,w=!1,k=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=S)r(c),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(c)}}function v(S){if(y=!1,p(S),!k)if(n(s)!==null)k=!0,Rt(E);else{var R=n(c);R!==null&&Tt(v,R.startTime-S)}}function E(S,R){k=!1,y&&(y=!1,f(_),_=-1),w=!0;var T=g;try{for(p(R),h=n(s);h!==null&&(!(h.expirationTime>R)||S&&!re());){var B=h.callback;if(typeof B=="function"){h.callback=null,g=h.priorityLevel;var O=B(h.expirationTime<=R);R=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(s)&&r(s),p(R)}else r(s);h=n(s)}if(h!==null)var Ze=!0;else{var Ae=n(c);Ae!==null&&Tt(v,Ae.startTime-R),Ze=!1}return Ze}finally{h=null,g=T,w=!1}}var P=!1,N=null,_=-1,U=5,L=-1;function re(){return!(e.unstable_now()-L<U)}function Te(){if(N!==null){var S=e.unstable_now();L=S;var R=!0;try{R=N(!0,S)}finally{R?Qe():(P=!1,N=null)}}else P=!1}var Qe;if(typeof u=="function")Qe=function(){u(Te)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,yr=qt.port2;qt.port1.onmessage=Te,Qe=function(){yr.postMessage(null)}}else Qe=function(){A(Te,0)};function Rt(S){N=S,P||(P=!0,Qe())}function Tt(S,R){_=A(function(){S(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Rt(E))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return S()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,R){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=g;g=S;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(S,R,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,S){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=T+O,S={id:m++,callback:R,priorityLevel:S,startTime:T,expirationTime:O,sortIndex:-1},T>B?(S.sortIndex=T,t(c,S),n(s)===null&&S===n(c)&&(y?(f(_),_=-1):y=!0,Tt(v,T-B))):(S.sortIndex=O,t(s,S),k||w||(k=!0,Rt(E))),S},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(S){var R=g;return function(){var T=g;g=R;try{return S.apply(this,arguments)}finally{g=T}}}})(As);Ts.exports=As;var rd=Ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=M,ze=rd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,Gn={};function Xt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa={},ua={};function od(e){return gi.call(ua,e)?!0:gi.call(sa,e)?!1:id.test(e)?ua[e]=!0:(sa[e]=!0,!1)}function ad(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sd(e,t,n,r){if(t===null||typeof t>"u"||ad(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,mo);ue[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,mo);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,mo);ue[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ho(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sd(t,n,l,r)&&(n=null),r||l===null?od(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),Ds=Symbol.for("react.context"),vo=Symbol.for("react.forward_ref"),yi=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),yo=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Fs=Symbol.for("react.offscreen"),ca=Symbol.iterator;function Pn(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ml;function Mn(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Ol=!1;function Ul(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function ud(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case vi:return"Profiler";case go:return"StrictMode";case yi:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ds:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case vo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yo:return t=e.displayName||null,t!==null?t:wi(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return wi(e(t))}catch{}}return null}function cd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dd(e){var t=Ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=dd(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ki(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Us(e,t){t=t.checked,t!=null&&ho(e,"checked",t,!1)}function Si(e,t){Us(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ei(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ei(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(On(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Bs(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,bs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fd=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var pd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,mn=null,hn=null;function ha(e){if(e=gr(e)){if(typeof Pi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Cl(t),Pi(e.stateNode,e.type,t))}}function Hs(e){mn?hn?hn.push(e):hn=[e]:mn=e}function Qs(){if(mn){var e=mn,t=hn;if(hn=mn=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Ys(e,t){return e(t)}function Ks(){}var Bl=!1;function Xs(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Ys(e,t,n)}finally{Bl=!1,(mn!==null||hn!==null)&&(Ks(),Qs())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Ri=!1;if(it)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ri=!1}function md(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var bn=!1,qr=null,Jr=!1,Ti=null,hd={onError:function(e){bn=!0,qr=e}};function gd(e,t,n,r,l,i,o,a,s){bn=!1,qr=null,md.apply(hd,arguments)}function vd(e,t,n,r,l,i,o,a,s){if(gd.apply(this,arguments),bn){if(bn){var c=qr;bn=!1,qr=null}else throw Error(x(198));Jr||(Jr=!0,Ti=c)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(Gt(e)!==e)throw Error(x(188))}function yd(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ga(l),e;if(i===r)return ga(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function qs(e){return e=yd(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var Zs=ze.unstable_scheduleCallback,va=ze.unstable_cancelCallback,xd=ze.unstable_shouldYield,wd=ze.unstable_requestPaint,Z=ze.unstable_now,kd=ze.unstable_getCurrentPriorityLevel,wo=ze.unstable_ImmediatePriority,eu=ze.unstable_UserBlockingPriority,Zr=ze.unstable_NormalPriority,Sd=ze.unstable_LowPriority,tu=ze.unstable_IdlePriority,kl=null,qe=null;function Ed(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:jd,Nd=Math.log,Cd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Nd(e)/Cd|0)|0}var Cr=64,jr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Un(a):(i&=o,i!==0&&(r=Un(i)))}else o=n&~l,o!==0?r=Un(o):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),l=1<<n,r|=e[n],t&=~l;return r}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ve(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=_d(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,So,iu,ou,au,Li=!1,_r=[],vt=null,yt=null,xt=null,Zn=new Map,er=new Map,pt=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Tn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&So(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Td(e,t,n,r,l){switch(t){case"focusin":return vt=Tn(vt,e,t,n,r,l),!0;case"dragenter":return yt=Tn(yt,e,t,n,r,l),!0;case"mouseover":return xt=Tn(xt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Zn.set(i,Tn(Zn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,er.set(i,Tn(er.get(i)||null,e,t,n,r,l)),!0}return!1}function su(e){var t=Ut(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Gs(n),t!==null){e.blockedOn=t,au(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zi=r,n.target.dispatchEvent(r),zi=null}else return t=gr(n),t!==null&&So(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){Br(e)&&n.delete(t)}function Ad(){Li=!1,vt!==null&&Br(vt)&&(vt=null),yt!==null&&Br(yt)&&(yt=null),xt!==null&&Br(xt)&&(xt=null),Zn.forEach(xa),er.forEach(xa)}function An(e,t){e.blockedOn===t&&(e.blockedOn=null,Li||(Li=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Ad)))}function tr(e){function t(l){return An(l,e)}if(0<_r.length){An(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&An(vt,e),yt!==null&&An(yt,e),xt!==null&&An(xt,e),Zn.forEach(t),er.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&pt.shift()}var gn=ut.ReactCurrentBatchConfig,tl=!0;function Ld(e,t,n,r){var l=b,i=gn.transition;gn.transition=null;try{b=1,Eo(e,t,n,r)}finally{b=l,gn.transition=i}}function Id(e,t,n,r){var l=b,i=gn.transition;gn.transition=null;try{b=4,Eo(e,t,n,r)}finally{b=l,gn.transition=i}}function Eo(e,t,n,r){if(tl){var l=Ii(e,t,n,r);if(l===null)ql(e,t,r,nl,n),ya(e,r);else if(Td(l,e,t,n,r))r.stopPropagation();else if(ya(e,r),t&4&&-1<Rd.indexOf(e)){for(;l!==null;){var i=gr(l);if(i!==null&&lu(i),i=Ii(e,t,n,r),i===null&&ql(e,t,r,nl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ql(e,t,r,null,n)}}var nl=null;function Ii(e,t,n,r){if(nl=null,e=xo(r),e=Ut(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case wo:return 1;case eu:return 4;case Zr:case Sd:return 16;case tu:return 536870912;default:return 16}default:return 16}}var ht=null,No=null,$r=null;function cu(){if($r)return $r;var e,t=No,n=t.length,r,l="value"in ht?ht.value:ht.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return $r=l.slice(e,1<r?1-r:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function wa(){return!1}function Re(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:wa,this.isPropagationStopped=wa,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Re(_n),hr=q({},_n,{view:0,detail:0}),Dd=Re(hr),bl,Vl,Ln,Sl=q({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(bl=e.screenX-Ln.screenX,Vl=e.screenY-Ln.screenY):Vl=bl=0,Ln=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),ka=Re(Sl),Fd=q({},Sl,{dataTransfer:0}),Md=Re(Fd),Od=q({},hr,{relatedTarget:0}),Wl=Re(Od),Ud=q({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Re(Ud),$d=q({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=Re($d),Vd=q({},_n,{data:0}),Sa=Re(Vd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qd[e])?!!t[e]:!1}function jo(){return Yd}var Kd=q({},hr,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xd=Re(Kd),Gd=q({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Re(Gd),qd=q({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),Jd=Re(qd),Zd=q({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=Re(Zd),tf=q({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=Re(tf),rf=[9,13,27,32],_o=it&&"CompositionEvent"in window,Vn=null;it&&"documentMode"in document&&(Vn=document.documentMode);var lf=it&&"TextEvent"in window&&!Vn,du=it&&(!_o||Vn&&8<Vn&&11>=Vn),Na=" ",Ca=!1;function fu(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function of(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(Ca=!0,Na);case"textInput":return e=t.data,e===Na&&Ca?null:e;default:return null}}function af(e,t){if(nn)return e==="compositionend"||!_o&&fu(e,t)?(e=cu(),$r=No=ht=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function mu(e,t,n,r){Hs(r),t=rl(t,"onChange"),0<t.length&&(n=new Co("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,nr=null;function uf(e){Cu(e,0)}function El(e){var t=on(e);if(Os(t))return e}function cf(e,t){if(e==="change")return t}var hu=!1;if(it){var Hl;if(it){var Ql="oninput"in document;if(!Ql){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),Ql=typeof _a.oninput=="function"}Hl=Ql}else Hl=!1;hu=Hl&&(!document.documentMode||9<document.documentMode)}function za(){Wn&&(Wn.detachEvent("onpropertychange",gu),nr=Wn=null)}function gu(e){if(e.propertyName==="value"&&El(nr)){var t=[];mu(t,nr,e,xo(e)),Xs(uf,t)}}function df(e,t,n){e==="focusin"?(za(),Wn=t,nr=n,Wn.attachEvent("onpropertychange",gu)):e==="focusout"&&za()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(nr)}function pf(e,t){if(e==="click")return El(t)}function mf(e,t){if(e==="input"||e==="change")return El(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:hf;function rr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!gi.call(t,l)||!He(e[l],t[l]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=Pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pa(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ra(n,i);var o=Ra(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=it&&"documentMode"in document&&11>=document.documentMode,rn=null,Di=null,Hn=null,Fi=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fi||rn==null||rn!==Gr(r)||(r=rn,"selectionStart"in r&&zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&rr(Hn,r)||(Hn=r,r=rl(Di,"onSelect"),0<r.length&&(t=new Co("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},Yl={},xu={};it&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Nl(e){if(Yl[e])return Yl[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Yl[e]=t[n];return e}var wu=Nl("animationend"),ku=Nl("animationiteration"),Su=Nl("animationstart"),Eu=Nl("transitionend"),Nu=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Nu.set(e,t),Xt(t,[e])}for(var Kl=0;Kl<Aa.length;Kl++){var Xl=Aa[Kl],yf=Xl.toLowerCase(),xf=Xl[0].toUpperCase()+Xl.slice(1);_t(yf,"on"+xf)}_t(wu,"onAnimationEnd");_t(ku,"onAnimationIteration");_t(Su,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Eu,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vd(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;La(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;La(l,a,c),i=s}}}if(Jr)throw e=Ti,Jr=!1,Ti=null,e}function Q(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Rr]){e[Rr]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,Gl("selectionchange",!1,t))}}function ju(e,t,n,r){switch(uu(t)){case 1:var l=Ld;break;case 4:l=Id;break;default:l=Eo}n=l.bind(null,t,n,e),l=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Ut(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Xs(function(){var c=i,m=xo(n),h=[];e:{var g=Nu.get(e);if(g!==void 0){var w=Co,k=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":w=Xd;break;case"focusin":k="focus",w=Wl;break;case"focusout":k="blur",w=Wl;break;case"beforeblur":case"afterblur":w=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Jd;break;case wu:case ku:case Su:w=Bd;break;case Eu:w=ef;break;case"scroll":w=Dd;break;case"wheel":w=nf;break;case"copy":case"cut":case"paste":w=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ea}var y=(t&4)!==0,A=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var u=c,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Jn(u,f),v!=null&&y.push(ir(u,v,p)))),A)break;u=u.return}0<y.length&&(g=new w(g,k,null,n,m),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==zi&&(k=n.relatedTarget||n.fromElement)&&(Ut(k)||k[ot]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?Ut(k):null,k!==null&&(A=Gt(k),k!==A||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(y=ka,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ea,v="onPointerLeave",f="onPointerEnter",u="pointer"),A=w==null?g:on(w),p=k==null?g:on(k),g=new y(v,u+"leave",w,n,m),g.target=A,g.relatedTarget=p,v=null,Ut(m)===c&&(y=new y(f,u+"enter",k,n,m),y.target=p,y.relatedTarget=A,v=y),A=v,w&&k)t:{for(y=w,f=k,u=0,p=y;p;p=Jt(p))u++;for(p=0,v=f;v;v=Jt(v))p++;for(;0<u-p;)y=Jt(y),u--;for(;0<p-u;)f=Jt(f),p--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Jt(y),f=Jt(f)}y=null}else y=null;w!==null&&Ia(h,g,w,y,!1),k!==null&&A!==null&&Ia(h,A,k,y,!0)}}e:{if(g=c?on(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=cf;else if(ja(g))if(hu)E=mf;else{E=ff;var P=df}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=pf);if(E&&(E=E(e,c))){mu(h,E,n,m);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Ei(g,"number",g.value)}switch(P=c?on(c):window,e){case"focusin":(ja(P)||P.contentEditable==="true")&&(rn=P,Di=c,Hn=null);break;case"focusout":Hn=Di=rn=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,Ta(h,n,m);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":Ta(h,n,m)}var N;if(_o)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else nn?fu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(du&&n.locale!=="ko"&&(nn||_!=="onCompositionStart"?_==="onCompositionEnd"&&nn&&(N=cu()):(ht=m,No="value"in ht?ht.value:ht.textContent,nn=!0)),P=rl(c,_),0<P.length&&(_=new Sa(_,e,null,n,m),h.push({event:_,listeners:P}),N?_.data=N:(N=pu(n),N!==null&&(_.data=N)))),(N=lf?of(e,n):af(e,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(m=new Sa("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=N))}Cu(h,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jn(e,n),i!=null&&r.unshift(ir(e,i,l)),i=Jn(e,t),i!=null&&r.push(ir(e,i,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ia(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Jn(n,i),s!=null&&o.unshift(ir(n,s,a))):l||(s=Jn(n,i),s!=null&&o.push(ir(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kf=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function Da(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(Sf,"")}function Tr(e,t,n){if(t=Da(t),Da(e)!==t&&n)throw Error(x(425))}function ll(){}var Mi=null,Oi=null;function Ui(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bi=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Cf)}:Bi;function Cf(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);tr(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+zn,or="__reactProps$"+zn,ot="__reactContainer$"+zn,$i="__reactEvents$"+zn,jf="__reactListeners$"+zn,_f="__reactHandles$"+zn;function Ut(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Ge])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Cl(e){return e[or]||null}var bi=[],an=-1;function zt(e){return{current:e}}function Y(e){0>an||(e.current=bi[an],bi[an]=null,an--)}function W(e,t){an++,bi[an]=e.current,e.current=t}var jt={},pe=zt(jt),we=zt(!1),Wt=jt;function wn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function il(){Y(we),Y(pe)}function Oa(e,t,n){if(pe.current!==jt)throw Error(x(168));W(pe,t),W(we,n)}function _u(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,cd(e)||"Unknown",l));return q({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Wt=pe.current,W(pe,e),W(we,we.current),!0}function Ua(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=_u(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,Y(we),Y(pe),W(pe,e)):Y(we),W(we,n)}var tt=null,jl=!1,Zl=!1;function zu(e){tt===null?tt=[e]:tt.push(e)}function zf(e){jl=!0,zu(e)}function Pt(){if(!Zl&&tt!==null){Zl=!0;var e=0,t=b;try{var n=tt;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,jl=!1}catch(l){throw tt!==null&&(tt=tt.slice(e+1)),Zs(wo,Pt),l}finally{b=t,Zl=!1}}return null}var sn=[],un=0,al=null,sl=0,Le=[],Ie=0,Ht=null,nt=1,rt="";function Mt(e,t){sn[un++]=sl,sn[un++]=al,al=e,sl=t}function Pu(e,t,n){Le[Ie++]=nt,Le[Ie++]=rt,Le[Ie++]=Ht,Ht=e;var r=nt;e=rt;var l=32-Ve(r)-1;r&=~(1<<l),n+=1;var i=32-Ve(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,nt=1<<32-Ve(t)+l|n<<l|r,rt=i+e}else nt=1<<i|n<<l|r,rt=e}function Po(e){e.return!==null&&(Mt(e,1),Pu(e,1,0))}function Ro(e){for(;e===al;)al=sn[--un],sn[un]=null,sl=sn[--un],sn[un]=null;for(;e===Ht;)Ht=Le[--Ie],Le[Ie]=null,rt=Le[--Ie],Le[Ie]=null,nt=Le[--Ie],Le[Ie]=null}var _e=null,je=null,K=!1,be=null;function Ru(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,je=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,je=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wi(e){if(K){var t=je;if(t){var n=t;if(!Ba(e,t)){if(Vi(e))throw Error(x(418));t=wt(n.nextSibling);var r=_e;t&&Ba(e,t)?Ru(r,n):(e.flags=e.flags&-4097|2,K=!1,_e=e)}}else{if(Vi(e))throw Error(x(418));e.flags=e.flags&-4097|2,K=!1,_e=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Ar(e){if(e!==_e)return!1;if(!K)return $a(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ui(e.type,e.memoizedProps)),t&&(t=je)){if(Vi(e))throw Tu(),Error(x(418));for(;t;)Ru(e,t),t=wt(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=_e?wt(e.stateNode.nextSibling):null;return!0}function Tu(){for(var e=je;e;)e=wt(e.nextSibling)}function kn(){je=_e=null,K=!1}function To(e){be===null?be=[e]:be.push(e)}var Pf=ut.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Au(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=Nt(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,v){return u===null||u.tag!==6?(u=oi(p,f.mode,v),u.return=f,u):(u=l(u,p),u.return=f,u)}function s(f,u,p,v){var E=p.type;return E===tn?m(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dt&&ba(E)===u.type)?(v=l(u,p.props),v.ref=In(f,u,p),v.return=f,v):(v=Xr(p.type,p.key,p.props,null,f.mode,v),v.ref=In(f,u,p),v.return=f,v)}function c(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ai(p,f.mode,v),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function m(f,u,p,v,E){return u===null||u.tag!==7?(u=Vt(p,f.mode,v,E),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=oi(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return p=Xr(u.type,u.key,u.props,null,f.mode,p),p.ref=In(f,null,u),p.return=f,p;case en:return u=ai(u,f.mode,p),u.return=f,u;case dt:var v=u._init;return h(f,v(u._payload),p)}if(On(u)||Pn(u))return u=Vt(u,f.mode,p,null),u.return=f,u;Lr(f,u)}return null}function g(f,u,p,v){var E=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===E?s(f,u,p,v):null;case en:return p.key===E?c(f,u,p,v):null;case dt:return E=p._init,g(f,u,E(p._payload),v)}if(On(p)||Pn(p))return E!==null?null:m(f,u,p,v,null);Lr(f,p)}return null}function w(f,u,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(u,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sr:return f=f.get(v.key===null?p:v.key)||null,s(u,f,v,E);case en:return f=f.get(v.key===null?p:v.key)||null,c(u,f,v,E);case dt:var P=v._init;return w(f,u,p,P(v._payload),E)}if(On(v)||Pn(v))return f=f.get(p)||null,m(u,f,v,E,null);Lr(u,v)}return null}function k(f,u,p,v){for(var E=null,P=null,N=u,_=u=0,U=null;N!==null&&_<p.length;_++){N.index>_?(U=N,N=null):U=N.sibling;var L=g(f,N,p[_],v);if(L===null){N===null&&(N=U);break}e&&N&&L.alternate===null&&t(f,N),u=i(L,u,_),P===null?E=L:P.sibling=L,P=L,N=U}if(_===p.length)return n(f,N),K&&Mt(f,_),E;if(N===null){for(;_<p.length;_++)N=h(f,p[_],v),N!==null&&(u=i(N,u,_),P===null?E=N:P.sibling=N,P=N);return K&&Mt(f,_),E}for(N=r(f,N);_<p.length;_++)U=w(N,f,_,p[_],v),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?_:U.key),u=i(U,u,_),P===null?E=U:P.sibling=U,P=U);return e&&N.forEach(function(re){return t(f,re)}),K&&Mt(f,_),E}function y(f,u,p,v){var E=Pn(p);if(typeof E!="function")throw Error(x(150));if(p=E.call(p),p==null)throw Error(x(151));for(var P=E=null,N=u,_=u=0,U=null,L=p.next();N!==null&&!L.done;_++,L=p.next()){N.index>_?(U=N,N=null):U=N.sibling;var re=g(f,N,L.value,v);if(re===null){N===null&&(N=U);break}e&&N&&re.alternate===null&&t(f,N),u=i(re,u,_),P===null?E=re:P.sibling=re,P=re,N=U}if(L.done)return n(f,N),K&&Mt(f,_),E;if(N===null){for(;!L.done;_++,L=p.next())L=h(f,L.value,v),L!==null&&(u=i(L,u,_),P===null?E=L:P.sibling=L,P=L);return K&&Mt(f,_),E}for(N=r(f,N);!L.done;_++,L=p.next())L=w(N,f,_,L.value,v),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?_:L.key),u=i(L,u,_),P===null?E=L:P.sibling=L,P=L);return e&&N.forEach(function(Te){return t(f,Te)}),K&&Mt(f,_),E}function A(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===tn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var E=p.key,P=u;P!==null;){if(P.key===E){if(E=p.type,E===tn){if(P.tag===7){n(f,P.sibling),u=l(P,p.props.children),u.return=f,f=u;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dt&&ba(E)===P.type){n(f,P.sibling),u=l(P,p.props),u.ref=In(f,P,p),u.return=f,f=u;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===tn?(u=Vt(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=Xr(p.type,p.key,p.props,null,f.mode,v),v.ref=In(f,u,p),v.return=f,f=v)}return o(f);case en:e:{for(P=p.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ai(p,f.mode,v),u.return=f,f=u}return o(f);case dt:return P=p._init,A(f,u,P(p._payload),v)}if(On(p))return k(f,u,p,v);if(Pn(p))return y(f,u,p,v);Lr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=oi(p,f.mode,v),u.return=f,f=u),o(f)):n(f,u)}return A}var Sn=Au(!0),Lu=Au(!1),ul=zt(null),cl=null,cn=null,Ao=null;function Lo(){Ao=cn=cl=null}function Io(e){var t=ul.current;Y(ul),e._currentValue=t}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vn(e,t){cl=e,Ao=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(cl===null)throw Error(x(308));cn=e,cl.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Bt=null;function Do(e){Bt===null?Bt=[e]:Bt.push(e)}function Iu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Do(t)):(n.next=l.next,l.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,at(e,n)}return l=r.interleaved,l===null?(t.next=t,Do(r)):(t.next=l.next,l.next=t),r.interleaved=t,at(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var l=e.updateQueue;ft=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,m=c=s=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,y=a;switch(g=t,w=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(w,h,g);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,g=typeof k=="function"?k.call(w,h,g):k,g==null)break e;h=q({},h,g);break e;case 2:ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=w,s=h):m=m.next=w,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Yt|=o,e.lanes=o,e.memoizedState=h}}function Wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var vr={},Je=zt(vr),ar=zt(vr),sr=zt(vr);function $t(e){if(e===vr)throw Error(x(174));return e}function Mo(e,t){switch(W(sr,t),W(ar,e),W(Je,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ci(t,e)}Y(Je),W(Je,t)}function En(){Y(Je),Y(ar),Y(sr)}function Fu(e){$t(sr.current);var t=$t(Je.current),n=Ci(t,e.type);t!==n&&(W(ar,e),W(Je,n))}function Oo(e){ar.current===e&&(Y(Je),Y(ar))}var X=zt(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Uo(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Wr=ut.ReactCurrentDispatcher,ti=ut.ReactCurrentBatchConfig,Qt=0,G=null,te=null,le=null,pl=!1,Qn=!1,ur=0,Rf=0;function ce(){throw Error(x(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,l,i){if(Qt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?If:Df,e=n(r,l),Qn){i=0;do{if(Qn=!1,ur=0,25<=i)throw Error(x(301));i+=1,le=te=null,t.updateQueue=null,Wr.current=Ff,e=n(r,l)}while(Qn)}if(Wr.current=ml,t=te!==null&&te.next!==null,Qt=0,le=te=G=null,pl=!1,t)throw Error(x(300));return e}function bo(){var e=ur!==0;return ur=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function Oe(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,te=e;else{if(e===null)throw Error(x(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function cr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Oe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var m=c.lane;if((Qt&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,G.lanes|=m,Yt|=m}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,He(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,G.lanes|=i,Yt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=Oe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);He(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mu(){}function Ou(e,t){var n=G,r=Oe(),l=t(),i=!He(r.memoizedState,l);if(i&&(r.memoizedState=l,xe=!0),r=r.queue,Vo($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,dr(9,Bu.bind(null,n,r,l,t),void 0,null),ie===null)throw Error(x(349));Qt&30||Uu(n,t,l)}return l}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,bu(t)&&Vu(e)}function $u(e,t,n){return n(function(){bu(t)&&Vu(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Vu(e){var t=at(e,1);t!==null&&We(t,e,1,-1)}function Ha(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,G,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return Oe().memoizedState}function Hr(e,t,n,r){var l=Xe();G.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var l=Oe();r=r===void 0?null:r;var i=void 0;if(te!==null){var o=te.memoizedState;if(i=o.destroy,r!==null&&Bo(r,o.deps)){l.memoizedState=dr(t,n,i,r);return}}G.flags|=e,l.memoizedState=dr(1|t,n,i,r)}function Qa(e,t){return Hr(8390656,8,e,t)}function Vo(e,t){return _l(2048,8,e,t)}function Hu(e,t){return _l(4,2,e,t)}function Qu(e,t){return _l(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,Yu.bind(null,t,e),n)}function Wo(){}function Xu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return Qt&21?(He(n,t)||(n=nu(),G.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Tf(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{b=n,ti.transition=r}}function Ju(){return Oe().memoizedState}function Af(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e))ec(t,n);else if(n=Iu(e,t,n,r),n!==null){var l=he();We(n,e,r,l),tc(n,t,r)}}function Lf(e,t,n){var r=Et(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))ec(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,He(a,o)){var s=t.interleaved;s===null?(l.next=l,Do(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Iu(e,t,l,r),n!==null&&(l=he(),We(n,e,r,l),tc(n,t,r))}}function Zu(e){var t=e.alternate;return e===G||t!==null&&t===G}function ec(e,t){Qn=pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}var ml={readContext:Me,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},If={readContext:Me,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Af.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:Wo,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=Tf.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=Xe();if(K){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ie===null)throw Error(x(349));Qt&30||Uu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Qa($u.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,Bu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(K){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Df={readContext:Me,useCallback:Xu,useContext:Me,useEffect:Vo,useImperativeHandle:Ku,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Gu,useReducer:ni,useRef:Wu,useState:function(){return ni(cr)},useDebugValue:Wo,useDeferredValue:function(e){var t=Oe();return qu(t,te.memoizedState,e)},useTransition:function(){var e=ni(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Ou,useId:Ju,unstable_isNewReconciler:!1},Ff={readContext:Me,useCallback:Xu,useContext:Me,useEffect:Vo,useImperativeHandle:Ku,useInsertionEffect:Hu,useLayoutEffect:Qu,useMemo:Gu,useReducer:ri,useRef:Wu,useState:function(){return ri(cr)},useDebugValue:Wo,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:qu(t,te.memoizedState,e)},useTransition:function(){var e=ri(cr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Ou,useId:Ju,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),l=Et(e),i=lt(r,l);i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,l),t!==null&&(We(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),l=Et(e),i=lt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,l),t!==null&&(We(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Et(e),l=lt(n,r);l.tag=2,t!=null&&(l.callback=t),t=kt(e,l,r),t!==null&&(We(t,e,r,n),Vr(t,e,r))}};function Ya(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(l,i):!0}function nc(e,t,n){var r=!1,l=jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(l=ke(t)?Wt:pe.current,r=t.contextTypes,i=(r=r!=null)?wn(e,l):jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Me(i):(i=ke(t)?Wt:pe.current,l.context=wn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),dl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=ud(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ki(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,lo=r),Ki(e,t)},n}function lc(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ki(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ki(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Ga(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e)}var Of=ut.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?Lu(t,null,n,r):Sn(t,e.child,n,r)}function Ja(e,t,n,r,l){n=n.render;var i=t.ref;return vn(t,l),r=$o(e,t,n,r,i,l),n=bo(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(K&&n&&Po(t),t.flags|=1,me(e,t,r,l),t.child)}function Za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Jo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ic(e,t,i,r,l)):(e=Xr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(o,r)&&e.ref===t.ref)return st(e,t,l)}return t.flags|=1,e=Nt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(rr(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,st(e,t,l)}return Xi(e,t,n,r,l)}function oc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(fn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(fn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(fn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(fn,Ce),Ce|=r;return me(e,t,l,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xi(e,t,n,r,l){var i=ke(n)?Wt:pe.current;return i=wn(t,i),vn(t,l),n=$o(e,t,n,r,i,l),r=bo(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,st(e,t,l)):(K&&r&&Po(t),t.flags|=1,me(e,t,n,l),t.child)}function es(e,t,n,r,l){if(ke(n)){var i=!0;ol(t)}else i=!1;if(vn(t,l),t.stateNode===null)Qr(e,t),nc(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=ke(n)?Wt:pe.current,c=wn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ka(t,o,r,c),ft=!1;var g=t.memoizedState;o.state=g,dl(t,r,o,l),s=t.memoizedState,a!==r||g!==s||we.current||ft?(typeof m=="function"&&(Qi(t,n,m,r),s=t.memoizedState),(a=ft||Ya(t,n,a,r,g,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Du(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Be(t.type,a),o.props=c,h=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=ke(n)?Wt:pe.current,s=wn(t,s));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==s)&&Ka(t,o,r,s),ft=!1,g=t.memoizedState,o.state=g,dl(t,r,o,l);var k=t.memoizedState;a!==h||g!==k||we.current||ft?(typeof w=="function"&&(Qi(t,n,w,r),k=t.memoizedState),(c=ft||Ya(t,n,c,r,g,k,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Gi(e,t,n,r,i,l)}function Gi(e,t,n,r,l,i){ac(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ua(t,n,!1),st(e,t,i);r=t.stateNode,Of.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Sn(t,e.child,null,i),t.child=Sn(t,null,a,i)):me(e,t,a,i),t.memoizedState=r.state,l&&Ua(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Mo(e,t.containerInfo)}function ts(e,t,n,r,l){return kn(),To(l),t.flags|=256,me(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,l=X.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(X,l&1),e===null)return Wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Tl(o,r,0,null),e=Vt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ji(n),t.memoizedState=qi,e):Ho(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Uf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Nt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Nt(a,i):(i=Vt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ji(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return i=e.child,e=i.sibling,r=Nt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&To(r),Sn(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=li(Error(x(422))),Ir(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Tl({mode:"visible",children:r.children},l,0,null),i=Vt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Sn(t,e.child,null,o),t.child.memoizedState=Ji(o),t.memoizedState=qi,i);if(!(t.mode&1))return Ir(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=li(i,r,void 0),Ir(e,t,o,r)}if(a=(o&e.childLanes)!==0,xe||a){if(r=ie,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,at(e,l),We(r,e,l,-1))}return qo(),r=li(Error(x(421))),Ir(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,je=wt(l.nextSibling),_e=t,K=!0,be=null,e!==null&&(Le[Ie++]=nt,Le[Ie++]=rt,Le[Ie++]=Ht,nt=e.id,rt=e.overflow,Ht=t),t=Ho(t,r.children),t.flags|=4096,t)}function ns(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function ii(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function cc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ns(e,n,t);else if(e.tag===19)ns(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ii(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ii(t,!0,n,null,i);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Nt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:sc(t),kn();break;case 5:Fu(t);break;case 1:ke(t.type)&&ol(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(W(X,X.current&1),e=st(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,oc(e,t,n)}return st(e,t,n)}var dc,Zi,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zi=function(){};fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,$t(Je.current);var i=null;switch(n){case"input":l=ki(e,l),r=ki(e,r),i=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":l=Ni(e,l),r=Ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}ji(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $f(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&il(),de(t),null;case 3:return r=t.stateNode,En(),Y(we),Y(pe),Uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(ao(be),be=null))),Zi(e,t),de(t),null;case 5:Oo(t);var l=$t(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=$t(Je.current),Ar(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ge]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(l=0;l<Bn.length;l++)Q(Bn[l],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":da(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":pa(r,i),Q("invalid",r)}ji(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),l=["children",""+a]):Gn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Er(r),fa(r,i,!0);break;case"textarea":Er(r),ma(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ge]=t,e[or]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(o=_i(n,r),n){case"dialog":Q("cancel",e),Q("close",e),l=r;break;case"iframe":case"object":case"embed":Q("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bn.length;l++)Q(Bn[l],e);l=r;break;case"source":Q("error",e),l=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=r;break;case"details":Q("toggle",e),l=r;break;case"input":da(e,r),l=ki(e,r),Q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),Q("invalid",e);break;case"textarea":pa(e,r),l=Ni(e,r),Q("invalid",e);break;default:l=r}ji(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ws(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qn(e,s):typeof s=="number"&&qn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&ho(e,i,s,o))}switch(n){case"input":Er(e),fa(e,r,!1);break;case"textarea":Er(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=$t(sr.current),$t(Je.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return de(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&je!==null&&t.mode&1&&!(t.flags&128))Tu(),kn(),t.flags|=98560,i=!1;else if(i=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ge]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else be!==null&&(ao(be),be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ne===0&&(ne=3):qo())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return En(),Zi(e,t),e===null&&lr(t.stateNode.containerInfo),de(t),null;case 10:return Io(t.type._context),de(t),null;case 17:return ke(t.type)&&il(),de(t),null;case 19:if(Y(X),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Dn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fl(e),o!==null){for(t.flags|=128,Dn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&Z()>Cn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=fl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!K)return de(t),null}else 2*Z()-i.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Z(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function bf(e,t){switch(Ro(t),t.tag){case 1:return ke(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),Y(we),Y(pe),Uo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oo(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return En(),null;case 10:return Io(t.type._context),null;case 22:case 23:return Go(),null;case 24:return null;default:return null}}var Dr=!1,fe=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,j=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function eo(e,t,n){try{n()}catch(r){J(e,t,r)}}var rs=!1;function Wf(e,t){if(Mi=tl,e=yu(),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++c===l&&(a=o),g===i&&++m===r&&(s=o),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},tl=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,A=k.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Be(t.type,y),A);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){J(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return k=rs,rs=!1,k}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&eo(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function to(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[or],delete t[$i],delete t[jf],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function no(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(no(e,t,n),e=e.sibling;e!==null;)no(e,t,n),e=e.sibling}function ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}var ae=null,$e=!1;function ct(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:fe||dn(n,t);case 6:var r=ae,l=$e;ae=null,ct(e,t,n),ae=r,$e=l,ae!==null&&($e?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&($e?(e=ae,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),tr(e)):Jl(ae,n.stateNode));break;case 4:r=ae,l=$e,ae=n.stateNode.containerInfo,$e=!0,ct(e,t,n),ae=r,$e=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&eo(n,t,o),l=l.next}while(l!==r)}ct(e,t,n);break;case 1:if(!fe&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ct(e,t,n),fe=r):ct(e,t,n);break;default:ct(e,t,n)}}function is(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var l=Zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,$e=!1;break e;case 3:ae=a.stateNode.containerInfo,$e=!0;break e;case 4:ae=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(ae===null)throw Error(x(160));gc(i,o,l),ae=null,$e=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){J(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),r&4){try{Yn(3,e,e.return),Pl(3,e)}catch(y){J(e,e.return,y)}try{Yn(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ue(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ue(t,e),Ke(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(y){J(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Us(l,i),_i(a,o);var c=_i(a,i);for(o=0;o<s.length;o+=2){var m=s[o],h=s[o+1];m==="style"?Ws(l,h):m==="dangerouslySetInnerHTML"?bs(l,h):m==="children"?qn(l,h):ho(l,m,h,c)}switch(a){case"input":Si(l,i);break;case"textarea":Bs(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?pn(l,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?pn(l,!!i.multiple,i.defaultValue,!0):pn(l,!!i.multiple,i.multiple?[]:"",!1))}l[or]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ue(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ue(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ko=Z())),r&4&&is(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||m,Ue(t,e),fe=c):Ue(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(j=e,m=e.child;m!==null;){for(h=j=m;j!==null;){switch(g=j,w=g.child,g.tag){case 0:case 11:case 14:case 15:Yn(4,g,g.return);break;case 1:dn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:dn(g,g.return);break;case 22:if(g.memoizedState!==null){as(h);continue}}w!==null?(w.return=g,j=w):as(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Vs("display",o))}catch(y){J(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){J(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ke(e),r&4&&is(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var i=ls(e);ro(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ls(e);no(e,a,o);break;default:throw Error(x(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e,t,n){j=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Dr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||fe;a=Dr;var c=fe;if(Dr=o,(fe=s)&&!c)for(j=l;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?ss(l):s!==null?(s.return=o,j=s):ss(l);for(;i!==null;)j=i,yc(i),i=i.sibling;j=l,Dr=a,fe=c}os(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):os(e)}}function os(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&tr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}fe||t.flags&512&&to(t)}catch(g){J(t,t.return,g)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function as(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function ss(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(s){J(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){J(t,l,s)}}var i=t.return;try{to(t)}catch(s){J(t,i,s)}break;case 5:var o=t.return;try{to(t)}catch(s){J(t,o,s)}}}catch(s){J(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Qf=Math.ceil,hl=ut.ReactCurrentDispatcher,Qo=ut.ReactCurrentOwner,Fe=ut.ReactCurrentBatchConfig,D=0,ie=null,ee=null,se=0,Ce=0,fn=zt(0),ne=0,fr=null,Yt=0,Rl=0,Yo=0,Kn=null,ye=null,Ko=0,Cn=1/0,et=null,gl=!1,lo=null,St=null,Fr=!1,gt=null,vl=0,Xn=0,io=null,Yr=-1,Kr=0;function he(){return D&6?Z():Yr!==-1?Yr:Yr=Z()}function Et(e){return e.mode&1?D&2&&se!==0?se&-se:Pf.transition!==null?(Kr===0&&(Kr=nu()),Kr):(e=b,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function We(e,t,n,r){if(50<Xn)throw Xn=0,io=null,Error(x(185));mr(e,n,r),(!(D&2)||e!==ie)&&(e===ie&&(!(D&2)&&(Rl|=n),ne===4&&mt(e,se)),Se(e,r),n===1&&D===0&&!(t.mode&1)&&(Cn=Z()+500,jl&&Pt()))}function Se(e,t){var n=e.callbackNode;zd(e,t);var r=el(e,e===ie?se:0);if(r===0)n!==null&&va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&va(n),t===1)e.tag===0?zf(us.bind(null,e)):zu(us.bind(null,e)),Nf(function(){!(D&6)&&Pt()}),n=null;else{switch(ru(r)){case 1:n=wo;break;case 4:n=eu;break;case 16:n=Zr;break;case 536870912:n=tu;break;default:n=Zr}n=jc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Yr=-1,Kr=0,D&6)throw Error(x(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=el(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yl(e,r);else{t=r;var l=D;D|=2;var i=kc();(ie!==e||se!==t)&&(et=null,Cn=Z()+500,bt(e,t));do try{Xf();break}catch(a){wc(e,a)}while(!0);Lo(),hl.current=i,D=l,ee!==null?t=0:(ie=null,se=0,t=ne)}if(t!==0){if(t===2&&(l=Ai(e),l!==0&&(r=l,t=oo(e,l))),t===1)throw n=fr,bt(e,0),mt(e,r),Se(e,Z()),n;if(t===6)mt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Yf(l)&&(t=yl(e,r),t===2&&(i=Ai(e),i!==0&&(r=i,t=oo(e,i))),t===1))throw n=fr,bt(e,0),mt(e,r),Se(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Ot(e,ye,et);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=Ko+500-Z(),10<t)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Bi(Ot.bind(null,e,ye,et),t);break}Ot(e,ye,et);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ve(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qf(r/1960))-r,10<r){e.timeoutHandle=Bi(Ot.bind(null,e,ye,et),r);break}Ot(e,ye,et);break;case 5:Ot(e,ye,et);break;default:throw Error(x(329))}}}return Se(e,Z()),e.callbackNode===n?xc.bind(null,e):null}function oo(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(bt(e,t).flags|=256),e=yl(e,t),e!==2&&(t=ye,ye=n,t!==null&&ao(t)),e}function ao(e){ye===null?ye=e:ye.push.apply(ye,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!He(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~Yo,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function us(e){if(D&6)throw Error(x(327));yn();var t=el(e,0);if(!(t&1))return Se(e,Z()),null;var n=yl(e,t);if(e.tag!==0&&n===2){var r=Ai(e);r!==0&&(t=r,n=oo(e,r))}if(n===1)throw n=fr,bt(e,0),mt(e,t),Se(e,Z()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,ye,et),Se(e,Z()),null}function Xo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Cn=Z()+500,jl&&Pt())}}function Kt(e){gt!==null&&gt.tag===0&&!(D&6)&&yn();var t=D;D|=1;var n=Fe.transition,r=b;try{if(Fe.transition=null,b=1,e)return e()}finally{b=r,Fe.transition=n,D=t,!(D&6)&&Pt()}}function Go(){Ce=fn.current,Y(fn)}function bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:En(),Y(we),Y(pe),Uo();break;case 5:Oo(r);break;case 4:En();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Io(r.type._context);break;case 22:case 23:Go()}n=n.return}if(ie=e,ee=e=Nt(e.current,null),se=Ce=t,ne=0,fr=null,Yo=Rl=Yt=0,ye=Kn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Bt=null}return e}function wc(e,t){do{var n=ee;try{if(Lo(),Wr.current=ml,pl){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pl=!1}if(Qt=0,le=te=G=null,Qn=!1,ur=0,Qo.current=null,n===null||n.return===null){ne=1,fr=t,ee=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=se,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Ga(o);if(w!==null){w.flags&=-257,qa(w,o,a,i,t),w.mode&1&&Xa(i,c,t),t=w,s=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(s),t.updateQueue=y}else k.add(s);break e}else{if(!(t&1)){Xa(i,c,t),qo();break e}s=Error(x(426))}}else if(K&&a.mode&1){var A=Ga(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),qa(A,o,a,i,t),To(Nn(s,a));break e}}i=s=Nn(s,a),ne!==4&&(ne=2),Kn===null?Kn=[i]:Kn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=rc(i,s,t);Va(i,f);break e;case 1:a=s;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(St===null||!St.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=lc(i,a,t);Va(i,v);break e}}i=i.return}while(i!==null)}Ec(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function kc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function qo(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(Yt&268435455)&&!(Rl&268435455)||mt(ie,se)}function yl(e,t){var n=D;D|=2;var r=kc();(ie!==e||se!==t)&&(et=null,bt(e,t));do try{Kf();break}catch(l){wc(e,l)}while(!0);if(Lo(),D=n,hl.current=r,ee!==null)throw Error(x(261));return ie=null,se=0,ne}function Kf(){for(;ee!==null;)Sc(ee)}function Xf(){for(;ee!==null&&!xd();)Sc(ee)}function Sc(e){var t=Cc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Ec(e):ee=t,Qo.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=$f(n,t,Ce),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ot(e,t,n){var r=b,l=Fe.transition;try{Fe.transition=null,b=1,Gf(e,t,n,r)}finally{Fe.transition=l,b=r}return null}function Gf(e,t,n,r){do yn();while(gt!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pd(e,i),e===ie&&(ee=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fr||(Fr=!0,jc(Zr,function(){return yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var o=b;b=1;var a=D;D|=4,Qo.current=null,Wf(e,n),vc(n,e),gf(Oi),tl=!!Mi,Oi=Mi=null,e.current=n,Hf(n),wd(),D=a,b=o,Fe.transition=i}else e.current=n;if(Fr&&(Fr=!1,gt=e,vl=l),i=e.pendingLanes,i===0&&(St=null),Ed(n.stateNode),Se(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=lo,lo=null,e;return vl&1&&e.tag!==0&&yn(),i=e.pendingLanes,i&1?e===io?Xn++:(Xn=0,io=e):Xn=0,Pt(),null}function yn(){if(gt!==null){var e=ru(vl),t=Fe.transition,n=b;try{if(Fe.transition=null,b=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,vl=0,D&6)throw Error(x(331));var l=D;for(D|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var m=j;switch(m.tag){case 0:case 11:case 15:Yn(8,m,i)}var h=m.child;if(h!==null)h.return=m,j=h;else for(;j!==null;){m=j;var g=m.sibling,w=m.return;if(mc(m),m===c){j=null;break}if(g!==null){g.return=w,j=g;break}j=w}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var u=e.current;for(j=u;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=u;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pl(9,a)}}catch(E){J(a,a.return,E)}if(a===o){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(D=l,Pt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{b=n,Fe.transition=t}}return!1}function cs(e,t,n){t=Nn(n,t),t=rc(e,t,1),e=kt(e,t,1),t=he(),e!==null&&(mr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)cs(e,e,n);else for(;t!==null;){if(t.tag===3){cs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=Nn(n,e),e=lc(t,e,1),t=kt(t,e,1),e=he(),t!==null&&(mr(t,1,e),Se(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>Z()-Ko?bt(e,0):Yo|=n),Se(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=he();e=at(e,t),e!==null&&(mr(e,t,n),Se(e,n))}function Jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function Zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Nc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Bf(e,t,n);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&Pu(t,sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var l=wn(t,pe.current);vn(t,n),l=$o(null,t,r,e,l,n);var i=bo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,ol(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fo(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=Gi(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Po(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=tp(r),e=Be(r,e),l){case 0:t=Xi(null,t,r,e,n);break e;case 1:t=es(null,t,r,e,n);break e;case 11:t=Ja(null,t,r,e,n);break e;case 14:t=Za(null,t,r,Be(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Xi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),es(e,t,r,l,n);case 3:e:{if(sc(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Du(e,t),dl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Nn(Error(x(423)),t),t=ts(e,t,r,n,l);break e}else if(r!==l){l=Nn(Error(x(424)),t),t=ts(e,t,r,n,l);break e}else for(je=wt(t.stateNode.containerInfo.firstChild),_e=t,K=!0,be=null,n=Lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===l){t=st(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Fu(t),e===null&&Wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ui(r,l)?o=null:i!==null&&Ui(r,i)&&(t.flags|=32),ac(e,t),me(e,t,o,n),t.child;case 6:return e===null&&Wi(t),null;case 13:return uc(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Ja(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,W(ul,r._currentValue),r._currentValue=o,i!==null)if(He(i.value,o)){if(i.children===l.children&&!we.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=lt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Hi(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,vn(t,n),l=Me(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=Be(r,t.pendingProps),l=Be(r.type,l),Za(e,t,r,l,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Qr(e,t),t.tag=1,ke(r)?(e=!0,ol(t)):e=!1,vn(t,n),nc(t,r,l),Yi(t,r,l,n),Gi(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return oc(e,t,n)}throw Error(x(156,t.tag))};function jc(e,t){return Zs(e,t)}function ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new ep(e,t,n,r)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tp(e){if(typeof e=="function")return Jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vo)return 11;if(e===yo)return 14}return 2}function Nt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tn:return Vt(n.children,l,i,t);case go:o=8,l|=8;break;case vi:return e=De(12,n,t,l|2),e.elementType=vi,e.lanes=i,e;case yi:return e=De(13,n,t,l),e.elementType=yi,e.lanes=i,e;case xi:return e=De(19,n,t,l),e.elementType=xi,e.lanes=i,e;case Fs:return Tl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:o=10;break e;case Ds:o=9;break e;case vo:o=11;break e;case yo:o=14;break e;case dt:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=De(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Vt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=De(22,e,r,t),e.elementType=Fs,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function np(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Zo(e,t,n,r,l,i,o,a,s){return e=new np(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(i),e}function rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _c(e){if(!e)return jt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ke(n))return _u(e,n,t)}return t}function zc(e,t,n,r,l,i,o,a,s){return e=Zo(n,r,!0,e,l,i,o,a,s),e.context=_c(null),n=e.current,r=he(),l=Et(n),i=lt(r,l),i.callback=t??null,kt(n,i,l),e.current.lanes=l,mr(e,l,r),Se(e,r),e}function Al(e,t,n,r){var l=t.current,i=he(),o=Et(l);return n=_c(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(l,t,o),e!==null&&(We(e,l,o,i),Vr(e,l,o)),o}function xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ds(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){ds(e,t),(e=e.alternate)&&ds(e,t)}function lp(){return null}var Pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}Ll.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Al(e,t,null,null)};Ll.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Al(null,e,null,null)}),t[ot]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&su(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fs(){}function ip(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=xl(o);i.call(c)}}var o=zc(t,r,e,0,null,!1,!1,"",fs);return e._reactRootContainer=o,e[ot]=o.current,lr(e.nodeType===8?e.parentNode:e),Kt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=xl(s);a.call(c)}}var s=Zo(e,0,!1,null,null,!1,!1,"",fs);return e._reactRootContainer=s,e[ot]=s.current,lr(e.nodeType===8?e.parentNode:e),Kt(function(){Al(t,s,n,r)}),s}function Dl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=xl(o);a.call(s)}}Al(t,o,e,l)}else o=ip(n,t,e,l,r);return xl(o)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(ko(t,n|1),Se(t,Z()),!(D&6)&&(Cn=Z()+500,Pt()))}break;case 13:Kt(function(){var r=at(e,1);if(r!==null){var l=he();We(r,e,1,l)}}),ea(e,1)}};So=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}ea(e,134217728)}};iu=function(e){if(e.tag===13){var t=Et(e),n=at(e,t);if(n!==null){var r=he();We(n,e,t,r)}ea(e,t)}};ou=function(){return b};au=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Pi=function(e,t,n){switch(t){case"input":if(Si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Cl(r);if(!l)throw Error(x(90));Os(r),Si(r,l)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};Ys=Xo;Ks=Kt;var op={usingClientEntryPoint:!1,Events:[gr,on,Cl,Hs,Qs,Xo]},Fn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ap={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{kl=Mr.inject(ap),qe=Mr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(x(200));return rp(e,t,null,n)};Pe.createRoot=function(e,t){if(!na(e))throw Error(x(299));var n=!1,r="",l=Pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Zo(e,1,!1,null,null,n,!1,r,l),e[ot]=t.current,lr(e.nodeType===8?e.parentNode:e),new ta(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=qs(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Kt(e)};Pe.hydrate=function(e,t,n){if(!Il(t))throw Error(x(200));return Dl(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!na(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Pc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=zc(t,null,e,1,n??null,l,!1,i,o),e[ot]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)};Pe.render=function(e,t,n){if(!Il(t))throw Error(x(200));return Dl(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Il(e))throw Error(x(40));return e._reactRootContainer?(Kt(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Pe.unstable_batchedUpdates=Xo;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Dl(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Rs.exports=Pe;var sp=Rs.exports,ps=sp;hi.createRoot=ps.createRoot,hi.hydrateRoot=ps.hydrateRoot;function ms(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)}function si(e,t,n){let r=ms(e,e.VERTEX_SHADER,t),l=ms(e,e.FRAGMENT_SHADER,n);if(!r||!l)return null;let i=e.createProgram();return e.attachShader(i,r),e.attachShader(i,l),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)?(e.deleteShader(r),e.deleteShader(l),i):(e.deleteProgram(i),null)}function ui(e,t,n){let r={};for(let l of n)r[l]=e.getUniformLocation(t,l);return r}function hs(e,t,n){let r={};for(let l of n)r[l]=e.getAttribLocation(t,l);return r}function up(e){let t={},n={},r={},l=document.createElement("style");function i(o,a,s,c){let m=o[a];m||(m=document.createElement("div"),m.style.cssText="position:absolute;width:1px;height:1px;pointer-events:none;anchor-name:"+s,e.append(m),o[a]=m),m.style.left=100*c.x+"%",m.style.top=100*c.y+"%"}return document.head.append(l),{m:function(o,a){let s={};for(let c of o){let m=c.id;if(!m)continue;let h=a(c.location);s[m]=1,i(t,m,"--cobe-"+m,h),h.visible?r["--cobe-visible-"+m]="N":delete r["--cobe-visible-"+m]}for(let c in t)s[c]||(t[c].remove(),delete t[c],delete r["--cobe-visible-"+c])},a:function(o,a){let s={};for(let c of o){let m=c.id;if(!m)continue;let h=a(c);s[m]=1,i(n,m,"--cobe-arc-"+m,h),h.visible?r["--cobe-visible-arc-"+m]="N":delete r["--cobe-visible-arc-"+m]}for(let c in n)s[c]||(n[c].remove(),delete n[c],delete r["--cobe-visible-arc-"+c])},r:function(){for(let o in t)t[o].remove();for(let o in n)n[o].remove();l.remove()},s:function(){let o="";for(let a in r)o+=a+":"+r[a]+";";l.textContent=":root{"+o+"}"}}}var{PI:ci,sin:gs,cos:vs}=Math,cp="attribute vec2 a;void main(){gl_Position=vec4(a,0,1);}",dp="precision highp float;uniform vec2 t,v,s;uniform vec3 F,w;uniform vec4 n;uniform float k,x,y;uniform sampler2D z;float u;mat3 A(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0,c,e,f,d*-e,d*c);}vec3 B(vec3 c,out float G){c=c.xzy;float q=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,q)/2.236068*vec2(1,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),r=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float o=3.141593;vec3 C;for(float h=0.;h<4.;h+=1.){vec2 D=vec2(mod(h,2.),floor(h*.5));float j=dot(g,r+D);if(j>k)continue;float a=j,b=0.;a>=16384.?(a-=16384.,b+=.868872):0.,a>=8192.?(a-=8192.,b+=.934436):0.,a>=4096.?(a-=4096.,b+=.467218):0.,a>=2048.?(a-=2048.,b+=.733609):0.,a>=1024.?(a-=1024.,b+=.866804):0.,a>=512.?(a-=512.,b+=.433402):0.,a>=256.?(a-=256.,b+=.216701):0.,a>=128.?(a-=128.,b+=.108351):0.,a>=64.?(a-=64.,b+=.554175):0.,a>=32.?(a-=32.,b+=.777088):0.,a>=16.?(a-=16.,b+=.888544):0.,a>=8.?(a-=8.,b+=.944272):0.,a>=4.?(a-=4.,b+=.472136):0.,a>=2.?(a-=2.,b+=.236068):0.,a>=1.?(a-=1.,b+=.618034):0.;float l=fract(b)*6.283185,i=1.-2.*j*u,m=sqrt(1.-i*i);vec3 p=vec3(cos(l)*m,sin(l)*m,i);float E=length(c-p);if(E<o)o=E,C=p;}G=o;return C.xzy;}void main(){u=1./k;vec2 c=1./t,b=(gl_FragCoord.xy*c*2.-1.)/x-v*vec2(1,-1)*c;b.x*=t.x*c.y;float a=dot(b,b),f=0.;vec4 l=vec4(0);if(a<=.64){float g;vec4 m=vec4(0);vec3 h=normalize(vec3(b,sqrt(.64-a)));mat3 o=A(s.y,s.x);float i=h.z;vec3 d=B(h*o,g);float j=asin(d.y),e=acos(-d.x/cos(j));e=d.z<0.?-e:e;float p=max(texture2D(z,vec2(e*.5/3.141593,-(j/3.141593+.5))).x,y),q=p*smoothstep(8e-3,0.,g)*pow(i,n.y)*n.x;m+=vec4(F*(mix((1.-q)*pow(i,.4),q,n.z)+.1)+pow(1.-i,4.)*w,1),l+=m*(1.+n.w)*.5,f=(1.-a)*(1.-a)*smoothstep(0.,1.,.2/(a-.64));}else{float r=sqrt(.2/(a-.64));f=smoothstep(.5,1.,r/(r+1.));}gl_FragColor=l+vec4(f*w,f);}",fp="varying vec2 m;varying vec3 g;varying float h;attribute vec2 n;attribute vec3 p,w;attribute float q,x;uniform vec2 b,r;uniform float i,j,k,s;void main(){float c=cos(j),d=sin(j),e=cos(i),f=sin(i);vec3 a=p*(.8+s),l=vec3(e*a.x+f*a.z,f*d*a.x+c*a.y-e*d*a.z,-f*c*a.x+d*a.y+e*c*a.z);if(l.z<0.&&length(l.xy)<.8){gl_Position=vec4(2,2,0,1);return;}float t=b.y/b.x;vec2 y=(l.xy+n*q*2.)*vec2(t,1)*k+r*vec2(1,-1)*k/b;gl_Position=vec4(y,0,1),m=n,g=w,h=x;}",pp="precision highp float;varying vec2 m;varying vec3 g;varying float h;uniform vec3 v;void main(){if(length(m)>.25)discard;vec3 a=h>.5?g:v;gl_FragColor=vec4(a,1);}",mp="varying vec3 i;varying float j,s,t;attribute vec2 k;attribute vec3 l,m,N;attribute float v,w,O;uniform vec2 g,x;uniform float y,z,h,A;mat3 B(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0,c,e,f,d*-e,d*c);}vec3 C(vec3 c,vec3 d,vec3 e,float a){float b=1.-a;return b*b*c+2.*b*a*d+a*a*e;}vec3 D(vec3 c,vec3 b,vec3 d,float a){float e=1.-a;return 2.*e*(b-c)+2.*a*(d-b);}void main(){mat3 b=B(z,y);float c=.8+A;vec3 d=l*c,e=m*c,f=l+m;float n=length(f);vec3 E=n>1e-3?f/n:vec3(0,1,0),o=E*(.8+v);float p=k.x;vec3 F=C(d,o,e,p),q=b*F,G=D(d,o,e,p),H=b*G;vec2 a=H.xy;float r=length(a);vec2 I=r>1e-3?vec2(-a.y,a.x)/r:vec2(1,0);float J=g.x/g.y;vec2 K=q.xy*vec2(1./J,1)*h+x*vec2(1,-1)*h/g,P=K+I*w*k.y*h;gl_Position=vec4(P,0,1),i=N,j=O,s=q.z,t=length(q.xy);}",hp="precision highp float;varying vec3 i;varying float j,s,t;uniform vec3 M;void main(){if(s<0.&&t<.8)discard;vec3 a=j>.5?i:M;gl_FragColor=vec4(a,1);}",di=.8;function Zt([e,t]){let n=e*ci/180,r=t*ci/180-ci,l=vs(n);return[-l*vs(r),gs(n),l*gs(r)]}var gp=(e,t)=>{var la;let n={alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1,...t.context},r=e.getContext("webgl2",n),l=!!r;if(r||(r=e.getContext("webgl",n)),!r)return{destroy:()=>{},update:()=>{}};let i=l?null:r.getExtension("ANGLE_instanced_arrays"),o=t.devicePixelRatio||1;e.width=t.width*o,e.height=t.height*o;let a=t.phi||0,s=t.theta||0,c=t.markers||[],m=t.arcs||[],h=t.mapSamples||1e4,g=t.mapBrightness||1,w=t.mapBaseBrightness||0,k=t.baseColor||[1,1,1],y=t.markerColor||[1,.5,0],A=t.glowColor||[1,1,1],f=t.arcColor||[.3,.6,1],u=t.arcWidth??1,p=t.arcHeight??.2,v=t.diffuse||1,E=t.dark||0,P=t.opacity??1,N=t.offset||[0,0],_=t.scale||1,U=t.markerElevation??.05,L=si(r,cp,dp),re=si(r,fp,pp),Te=si(r,mp,hp);if(!L)return{destroy:()=>{},update:()=>{}};let Qe=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,Qe),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let qt=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,qt);let yr=[];for(let C=0;C<=32;C++){let F=C/32;yr.push(F,-1,F,1)}r.bufferData(r.ARRAY_BUFFER,new Float32Array(yr),r.STATIC_DRAW);let Rt=r.createBuffer(),Tt=r.createBuffer(),S=ui(r,L,["t","s","k","x","v","F","w","n","y","z"]),R=ui(r,re,["i","j","b","k","r","v","s"]),T=hs(r,re,["n","p","q","w","x"]),B=ui(r,Te,["y","z","g","h","x","M","A"]),O=hs(r,Te,["k","l","m","v","w","N","O"]),Ze=r.getAttribLocation(L,"a"),Ae=r.createTexture();r.bindTexture(r.TEXTURE_2D,Ae),r.texImage2D(r.TEXTURE_2D,0,r.RGB,1,1,0,r.RGB,r.UNSIGNED_BYTE,new Uint8Array([0,0,0])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST);let At=new Image;At.onload=()=>{r.bindTexture(r.TEXTURE_2D,Ae),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,At),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Ae)},At.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAECklEQVR42u3VsW4jRRzH8d94gzfF4Q0VQaC4vBLTRTp0mze4ggfAPAE5XQEFsGNAVIjwBrmW7h7gJE+giKjyABTZE4g06LKJETdRJvtD65kdz6yduKABiW+TVfzRf2bXYxtcE/59YJCz6YdbgQF6ACSRrwYKYImmh5PbwOewlV3wlQNbAN6SEExjUOO+BU0aCSnxReHABUlK4YFQeJeUT3da8IIkZ6NGoSnFY5KsMoVzMKfECUnqxgPYRArarmUCndHwzIEaQEpg5xVdBXROl8mpAQx5dUgPiHoYAAkg5w3JABR06byGAVgcRGAz5bznj6phBQNRFwyqgdxebH6gshJAesWoFhgYpApAFoG8BIZ/fEhSox5jDjQXmV0Ar5XJfAIrALi3URVs09gHIL4XJCkLC5LH9JWiArABFCSrQjdgkBzRJ0WJeUOSNyQAfJJwUSWUBRlJQ8oGHATACGlBynnzy2kEYLNjrxouigD8BZcgOeVPqh12RtufaCN5wCPVDpvQ9lsIrqndsJtDcWqBCpf4hWN7OdWHBw58FwIaNOU/n1TpMW2DFaD48cmr4185T8NHkpUFX749pQPVdgRKC/DGoQPVeAEKv+WHvY8OOWNTPRp5kHuwSf8wzXtVBKR7YwEH9H3lQUaypUfSATOALyVNu5vZJW31Bnx98nkLfDUWJaz6ixvm+RIQRdl3kmRxxiaDoGnZW4CpPfkaQadlcPim1xOSvETQo7Lv75enVAXJ3xGUlony4KQBBWUM1NiDc6qhyS8RgQs18OCMMtPDaAUIyg0PZkRWDqs+wnKJBTDI1Js6BolegOsKmUxNDBAAKqQyMQmidhegBlLZ+wwKYdv5M/8x1khkb1cgKqP2H+MKyV5vS+whrE8DQDgAlUAoRBX056EElJCjJVACeJBZgNfVp+iCCm4RBWCgKsRxASSA9KgDhDtCiTuMyfHsKXzhC6wNAIjjWb8LKAOA2ctk3FmCOlgKFy8f1N0JJtgsxinYnVAHt4t3gPzZXSCTyCWCQmBT91QE3B5yarSN40dNHYPka4TlDhTUI8zLvl0JSL3vZn6DsCFZOeB2yROEpR68sECQQA++xIGCR2X7DwlEoLRgUrZrqlUg50S1uy43YqDcN6UFBVkhAjWiCV2Q0jgQPdplMKxvBXodcOfAwJYvgdL+1etA1YJJfBcZlQV7sO1i2gHoNiyxtQ5sBsCgWyoxCHiFFd2L5nUTCqMAqGUgsQ9f5kCcCiZgRYkMgMTd5WsB1rTzj0Em14BE4r+QxN1lCEsVur2PoF5Wbg8RJXR4djgvBgauhLywoEZQrt1KKRdVS4CdlJ8qafyP+9KIj/nE/d7kKwH9jgS72e9DV+kvfTWgct4ZyP8Byb8BPG7MaaIIkAQAAAAASUVORK5CYII=";let Ee=0;function Lt(C){let F=Math.cos(s),V=Math.cos(a),$=Math.sin(s),Ne=Math.sin(a),It=V*C[0]+Ne*C[2],Dt=Ne*$*C[0]+F*C[1]-V*$*C[2];return[(It/(e.width/e.height)*_+N[0]*_*o/e.width+1)/2,(-Dt*_+N[1]*_*o/e.height+1)/2,-Ne*F*C[0]+$*C[1]+V*F*C[2]>=0||It*It+Dt*Dt>=.64]}function Ac(C){let F=Zt(C),V=di+U,$=Lt([F[0]*V,F[1]*V,F[2]*V]);return{x:$[0],y:$[1],visible:$[2]}}function Lc(C){let F=Zt(C.from),V=Zt(C.to),$=[F[0]+V[0],F[1]+V[1],F[2]+V[2]],Ne=($[0]**2+$[1]**2+$[2]**2)**.5;if(Ne<.001)return null;let It=.25*(di+U)+.5*(di+p+U)/Ne,Dt=Lt([$[0]*It,$[1]*It,$[2]*It]);return{x:Dt[0],y:Dt[1],visible:Dt[2]}}function Ye(C,F,V,$,Ne){C<0||(r.enableVertexAttribArray(C),r.vertexAttribPointer(C,F,r.FLOAT,!1,V,$),l?r.vertexAttribDivisor(C,Ne):i&&i.vertexAttribDivisorANGLE(C,Ne))}let oe,xr=document.createElement("div");xr.style.cssText="position:relative;width:100%;height:100%",(la=e.parentElement)==null||la.insertBefore(xr,e),xr.append(e);let wr=up(xr);function ra(C){if(C.phi!=oe&&(a=C.phi),C.theta!=oe&&(s=C.theta),C.markers&&function(F){c=F;let V=new Float32Array(8*c.length);c.forEach(($,Ne)=>{V.set([...Zt($.location),$.size,...$.color||[0,0,0],$.color?1:0],8*Ne)}),r.bindBuffer(r.ARRAY_BUFFER,Rt),r.bufferData(r.ARRAY_BUFFER,V,r.DYNAMIC_DRAW)}(C.markers),C.arcs&&function(F){m=F,Ee=m.length;let V=new Float32Array(12*m.length);m.forEach(($,Ne)=>{V.set([...Zt($.from),...Zt($.to),p+U,.005*u,...$.color||[0,0,0],$.color?1:0],12*Ne)}),r.bindBuffer(r.ARRAY_BUFFER,Tt),r.bufferData(r.ARRAY_BUFFER,V,r.DYNAMIC_DRAW)}(C.arcs),C.width&&C.height&&(e.width=C.width*o,e.height=C.height*o),C.mapSamples!=oe&&(h=C.mapSamples),C.mapBrightness!=oe&&(g=C.mapBrightness),C.mapBaseBrightness!=oe&&(w=C.mapBaseBrightness),C.baseColor!=oe&&(k=C.baseColor),C.markerColor!=oe&&(y=C.markerColor),C.glowColor!=oe&&(A=C.glowColor),C.arcColor!=oe&&(f=C.arcColor),C.arcWidth!=oe&&(u=C.arcWidth),C.arcHeight!=oe&&(p=C.arcHeight),C.diffuse!=oe&&(v=C.diffuse),C.dark!=oe&&(E=C.dark),C.opacity!=oe&&(P=C.opacity),C.offset!=oe&&(N=C.offset),C.scale!=oe&&(_=C.scale),C.markerElevation!=oe&&(U=C.markerElevation),wr.m(c,Ac),wr.a(m,Lc),wr.s(),r.viewport(0,0,e.width,e.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.useProgram(L),r.bindBuffer(r.ARRAY_BUFFER,Qe),r.enableVertexAttribArray(Ze),r.vertexAttribPointer(Ze,2,r.FLOAT,!1,0,0),l?r.vertexAttribDivisor(Ze,0):i&&i.vertexAttribDivisorANGLE(Ze,0),r.uniform2f(S.t,e.width,e.height),r.uniform2f(S.s,a,s),r.uniform1f(S.k,h),r.uniform1f(S.x,_),r.uniform2f(S.v,N[0]*o,N[1]*o),r.uniform3fv(S.F,k),r.uniform3fv(S.w,A),r.uniform4f(S.n,g,v,E,P),r.uniform1f(S.y,w),r.uniform1i(S.z,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Ae),r.drawArrays(r.TRIANGLES,0,6),Te&&Ee>0){r.useProgram(Te),r.bindBuffer(r.ARRAY_BUFFER,qt),O.k>=0&&(r.enableVertexAttribArray(O.k),r.vertexAttribPointer(O.k,2,r.FLOAT,!1,0,0),l?r.vertexAttribDivisor(O.k,0):i&&i.vertexAttribDivisorANGLE(O.k,0)),r.bindBuffer(r.ARRAY_BUFFER,Tt);let F=48;if(Ye(O.l,3,F,0,1),Ye(O.m,3,F,12,1),Ye(O.v,1,F,24,1),Ye(O.w,1,F,28,1),Ye(O.N,3,F,32,1),Ye(O.O,1,F,44,1),r.uniform1f(B.y,a),r.uniform1f(B.z,s),r.uniform2f(B.g,e.width,e.height),r.uniform1f(B.h,_),r.uniform2f(B.x,N[0]*o,N[1]*o),r.uniform3fv(B.M,f),r.uniform1f(B.A,U),l)r.drawArraysInstanced(r.TRIANGLE_STRIP,0,66,Ee);else if(i)i.drawArraysInstancedANGLE(r.TRIANGLE_STRIP,0,66,Ee);else for(let V=0;V<Ee;V++)r.drawArrays(r.TRIANGLE_STRIP,0,66)}if(re&&c.length>0){r.useProgram(re),r.bindBuffer(r.ARRAY_BUFFER,Qe),T.n>=0&&(r.enableVertexAttribArray(T.n),r.vertexAttribPointer(T.n,2,r.FLOAT,!1,0,0),l?r.vertexAttribDivisor(T.n,0):i&&i.vertexAttribDivisorANGLE(T.n,0)),r.bindBuffer(r.ARRAY_BUFFER,Rt);let F=32;Ye(T.p,3,F,0,1),Ye(T.q,1,F,12,1),Ye(T.w,3,F,16,1),Ye(T.x,1,F,28,1),r.uniform1f(R.i,a),r.uniform1f(R.j,s),r.uniform2f(R.b,e.width,e.height),r.uniform1f(R.k,_),r.uniform2f(R.r,N[0]*o,N[1]*o),r.uniform3fv(R.v,y),r.uniform1f(R.s,U),function(V){if(l)r.drawArraysInstanced(r.TRIANGLES,0,6,V);else if(i)i.drawArraysInstancedANGLE(r.TRIANGLES,0,6,V);else for(let $=0;$<V;$++)r.drawArrays(r.TRIANGLES,0,6)}(c.length)}}return ra({markers:c,arcs:m}),{update:ra,destroy:()=>{r.deleteBuffer(Qe),r.deleteBuffer(qt),r.deleteBuffer(Rt),r.deleteBuffer(Tt),r.deleteProgram(L),re&&r.deleteProgram(re),Te&&r.deleteProgram(Te),wr.r()}}};const vp=[];function yp({markers:e=vp,className:t="",speed:n=.0026}){const r=M.useRef(null),l=M.useRef(null),i=M.useRef({phi:0,theta:0}),o=M.useRef(0),a=M.useRef(0),s=M.useRef(!1),c=M.useCallback(h=>{l.current={x:h.clientX,y:h.clientY},r.current&&(r.current.style.cursor="grabbing"),s.current=!0},[]),m=M.useCallback(()=>{l.current!==null&&(o.current+=i.current.phi,a.current+=i.current.theta,i.current={phi:0,theta:0}),l.current=null,r.current&&(r.current.style.cursor="grab"),s.current=!1},[]);return M.useEffect(()=>{const h=g=>{l.current!==null&&(i.current={phi:(g.clientX-l.current.x)/320,theta:(g.clientY-l.current.y)/1200})};return window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerup",m,{passive:!0}),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",m)}},[m]),M.useEffect(()=>{if(!r.current)return;const h=r.current;let g=null,w=0,k=0,y;const A=()=>{const f=h.offsetWidth;if(!f||g)return;g=gp(h,{devicePixelRatio:Math.min(window.devicePixelRatio||1,2),width:f,height:f,phi:0,theta:.18,dark:0,diffuse:1.2,mapSamples:12e3,mapBrightness:7,baseColor:[.96,.96,.95],markerColor:[.15,.62,.21],glowColor:[1,1,1],opacity:.95,markerElevation:.02,markers:e.map(p=>({location:p.location,size:.07})),arcs:[]});const u=()=>{s.current||(k+=n),g.update({phi:k+o.current+i.current.phi,theta:.18+a.current+i.current.theta}),w=window.requestAnimationFrame(u)};u(),window.setTimeout(()=>{h&&(h.style.opacity="1")},40)};return h.offsetWidth>0?A():(y=new ResizeObserver(f=>{f[0]&&f[0].contentRect.width>0&&(y.disconnect(),A())}),y.observe(h)),()=>{y&&y.disconnect(),w&&window.cancelAnimationFrame(w),g&&g.destroy()}},[e,n,m]),d.jsx("div",{className:t,style:{position:"relative",aspectRatio:"1 / 1"},children:d.jsx("canvas",{ref:r,onPointerDown:c,style:{width:"100%",height:"100%",opacity:0,cursor:"grab",transition:"opacity 1s ease",touchAction:"none"}})})}/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=e=>{const t=wp(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Sp=M.createContext({}),Ep=()=>M.useContext(Sp),Np=M.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},s)=>{const{size:c=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,color:g="currentColor",className:w=""}=Ep()??{},k=r??h?Number(n??m)*24/Number(t??c):n??m;return M.createElement("svg",{ref:s,...fi,width:t??c??fi.width,height:t??c??fi.height,stroke:e??g,strokeWidth:k,className:Tc("lucide",w,l),...!i&&!kp(a)&&{"aria-hidden":"true"},...a},[...o.map(([y,A])=>M.createElement(y,A)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=(e,t)=>{const n=M.forwardRef(({className:r,...l},i)=>M.createElement(Np,{ref:i,iconNode:t,className:Tc(`lucide-${xp(ys(e))}`,`lucide-${e}`,r),...l}));return n.displayName=ys(e),n};/**
 * @license lucide-react v1.6.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_p=Cp("arrow-up-right",jp),zp=[{title:"Profit BRAIN",description:"Herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa.",year:"IA",link:"#",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",kicker:"Tu centro de mando inteligente"},{title:"Profit CHAT",description:"Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante.",year:"24/7",link:"#",image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",kicker:"Tu consultor 24/7 con IA"},{title:"Profit TALKS",description:"Cada semana recibes el análisis que los directivos necesitan: tendencias, casos reales y marcos de decisión.",year:"NEWS",link:"#",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",kicker:"El newsletter que forma criterio"},{title:"Profit LABS",description:"Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales e IA.",year:"LIVE",link:"#",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",kicker:"Estrategia colaborativa en vivo"},{title:"Profit BOOST",description:"Un problema real con una solución accionable. Frameworks y herramientas para ejecutar hoy.",year:"20M",link:"#",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",kicker:"Soluciones en 20 minutos"}];function Pp({projects:e=zp,className:t=""}){var w,k;const[n,r]=M.useState(null),[l,i]=M.useState({x:0,y:0}),[o,a]=M.useState({x:0,y:0}),[s,c]=M.useState(!1),m=M.useRef(null),h=M.useRef(null);M.useEffect(()=>{const y=(f,u,p)=>f+(u-f)*p,A=()=>{a(f=>({x:y(f.x,l.x,.14),y:y(f.y,l.y,.14)})),h.current=requestAnimationFrame(A)};return h.current=requestAnimationFrame(A),()=>{h.current&&cancelAnimationFrame(h.current)}},[l]);const g=y=>{if(!m.current)return;const A=m.current.getBoundingClientRect();i({x:y.clientX-A.left,y:y.clientY-A.top})};return d.jsxs("section",{ref:m,onMouseMove:g,className:t,style:{position:"relative",width:"100%",maxWidth:"960px",margin:"0 auto"},children:[d.jsx("style",{children:`
        .product-showcase-list { border-top: 1px solid rgba(25,23,18,0.12); }
        .product-showcase-item {
          position: relative;
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .product-showcase-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 2.15fr) auto;
          gap: 20px;
          align-items: center;
          min-height: 120px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(25,23,18,0.12);
          transition: transform 220ms ease, color 220ms ease;
        }
        .product-showcase-item:hover .product-showcase-row {
          transform: translateX(4px);
        }
        .product-showcase-title {
          font-size: clamp(18px, 2vw, 26px);
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 700;
          color: #191712;
        }
        .product-showcase-desc {
          font-size: 15px;
          line-height: 1.55;
          color: #5f5a52;
          max-width: 520px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-showcase-arrow {
          width: 20px;
          height: 20px;
          color: rgba(25,23,18,0.58);
          transition: transform 220ms ease, color 220ms ease, opacity 220ms ease;
          opacity: 0.7;
        }
        .product-showcase-item:hover .product-showcase-arrow {
          transform: translate(2px, -2px);
          color: #191712;
          opacity: 1;
        }
        .product-showcase-preview {
          pointer-events: none;
          position: fixed;
          z-index: 60;
          width: 320px;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 22px;
          opacity: 0;
          scale: 0.92;
          transition: opacity 240ms ease, scale 240ms ease;
          box-shadow: 0 30px 70px rgba(25,23,18,0.16);
          border: 1px solid rgba(255,255,255,0.76);
          background: #f4f4f1;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .product-showcase-preview.is-visible {
          opacity: 1;
          scale: 1;
        }
        .product-showcase-preview img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 420ms ease, transform 420ms ease, filter 420ms ease;
        }
        .product-showcase-preview::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(25,23,18,0.08));
        }
        @media (max-width: 900px) {
          .product-showcase-row {
            grid-template-columns: 1fr;
            gap: 10px;
            min-height: 0;
            padding: 20px 0;
          }
          .product-showcase-preview {
            display: none;
          }
        }
      `}),d.jsx("div",{className:`product-showcase-preview${s?" is-visible":""}`,style:{left:((w=m.current)==null?void 0:w.getBoundingClientRect().left)??0,top:((k=m.current)==null?void 0:k.getBoundingClientRect().top)??0,transform:`translate3d(${o.x+30}px, ${o.y-120}px, 0)`},children:e.map((y,A)=>d.jsx("img",{src:y.image,alt:y.title,style:{opacity:n===A?1:0,transform:n===A?"scale(1)":"scale(1.06)",filter:n===A?"none":"blur(12px)"}},y.title))}),d.jsx("div",{className:"product-showcase-list",children:e.map((y,A)=>d.jsx("a",{href:y.link,className:"product-showcase-item",onMouseEnter:()=>{r(A),c(!0)},onMouseLeave:()=>{r(null),c(!1)},children:d.jsxs("div",{className:"product-showcase-row",children:[d.jsx("div",{children:d.jsx("h3",{className:"product-showcase-title",children:y.title})}),d.jsx("p",{className:"product-showcase-desc",children:y.description}),d.jsx(_p,{className:"product-showcase-arrow"})]})},y.title))})]})}const z={bg:"#ffffff",bgAlt:"#ffffff",green:"#27c927",greenLight:"#52df52",greenDim:"#1e9f1e",textPrimary:"#191712",textSecondary:"#5f5a52",textMuted:"#7d766d",border:"rgba(25,23,18,0.1)"};function Rp(e=.15){const t=M.useRef(null),[n,r]=M.useState(!1);return M.useEffect(()=>{const l=t.current;if(!l)return;const i=new IntersectionObserver(([o])=>{o.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});return i.observe(l),()=>i.disconnect()},[e]),[t,n]}function H({children:e,delay:t=0,direction:n="up",className:r=""}){const[l,i]=Rp(.1),o={up:"translateY(40px)",down:"translateY(-40px)",left:"translateX(40px)",right:"translateX(-40px)",none:"none"};return d.jsx("div",{ref:l,className:r,style:{opacity:i?1:0,transform:i?"none":o[n],transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s`},children:e})}const Tp=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: ${z.bg};
    color: ${z.textPrimary};
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

  /* ── Background ── */
  .aurora { display: none; }

  /* ── Grid overlay ── */
  .grid-overlay { display: none; }

  /* ── Navigation ── */
  .promo-strip {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 120;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    background: rgba(248,248,248,0.96);
    border-bottom: 1px solid rgba(25,23,18,0.08);
    color: ${z.textPrimary};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .promo-strip span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(243,243,243,0.92));
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.96),
      0 1px 0 rgba(255,255,255,0.86);
  }

  .promo-strip span::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${z.green};
    box-shadow: 0 0 0 4px rgba(39,201,39,0.12);
    flex-shrink: 0;
  }

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
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid ${z.border};
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

  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: #052905;
    background: ${z.bgAlt};
    padding: 12px 20px;
    border-radius: 999px;
    border: 1px solid rgba(25,23,18,0.12);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: none;
    animation: none;
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
    color: ${z.textPrimary};
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    text-align: left;
  }

  .hero-line {
    display: block;
  }

  .hero-line.top {
    white-space: nowrap;
  }

  .hero-line.middle {
    color: ${z.green};
    white-space: nowrap;
  }

  .hero-line.bottom {
    white-space: nowrap;
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

  .hero-vsl .vsl-card {
    max-width: 340px;
  }

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
    color: ${z.textPrimary};
  }

  .hero-offer-title span {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${z.green};
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${z.green};
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
    background: ${z.greenDim};
  }

  .btn-primary:active { transform: scale(0.98); }

  @keyframes heroCtaPulse {
    0%, 100% {
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.26),
        0 10px 22px rgba(39,201,39,0.16);
    }
    50% {
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.3),
        0 14px 28px rgba(39,201,39,0.2);
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

  .btn-arrow svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .btn-primary:hover .btn-arrow { transform: translateX(3px); }

  .hero-trust {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
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
    color: ${z.textMuted};
  }

  .trust-check {
    width: 16px;
    height: 16px;
    color: ${z.green};
    flex-shrink: 0;
  }

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: ${z.textMuted};
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .eyebrow-line {
    width: 24px;
    height: 1px;
    background: rgba(25,23,18,0.14);
  }

  .section-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 5vw, 60px);
    letter-spacing: -1.8px;
    color: ${z.textPrimary};
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .section-desc {
    font-size: 17px;
    color: ${z.textSecondary};
    line-height: 1.7;
    max-width: 520px;
  }

  /* ── Features ── */
  .features {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 48px 100px;
  }

  .features-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .features-header .section-desc {
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 20px;
  }

  .features-grid .f-card:first-child {
    grid-column: auto;
    min-height: 0;
  }

  .features-grid .f-card:nth-child(2) {
    grid-column: auto;
  }

  .features-grid .f-card:nth-child(n+3) {
    grid-column: auto;
  }

  .f-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${z.border};
    border-radius: 24px;
    padding: 34px;
    aspect-ratio: 1 / 1;
    min-height: 0;
    cursor: default;
    transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    position: relative;
    overflow: hidden;
  }

  .f-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(39,201,39,0.4), transparent);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .f-card:hover {
    border-color: rgba(39,201,39,0.2);
    background: rgba(255,255,255,0.98);
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(15,23,42,0.06);
  }

  .f-card:hover::before { opacity: 1; }

  .f-icon {
    width: 56px;
    height: 56px;
    background: rgba(39,201,39,0.08);
    border: 1px solid rgba(39,201,39,0.12);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  .f-card:hover .f-icon { transform: scale(1.04); }

  .f-kicker {
    display: inline-block;
    margin-bottom: 14px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: ${z.greenDim};
  }

  .f-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: ${z.textPrimary};
    margin-bottom: 12px;
  }

  .f-desc {
    font-size: 16px;
    color: ${z.textSecondary};
    line-height: 1.75;
  }

  .f-card.compact .f-title {
    font-size: 18px;
  }

  .f-card.compact .f-desc {
    font-size: 14px;
    line-height: 1.65;
  }

  /* ── Promo offer ── */
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
    padding: 40px;
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(255,253,248,0.98), rgba(247,245,239,0.92));
    border: 1px solid rgba(25,23,18,0.08);
    overflow: hidden;
    position: relative;
  }

  .promo-offer-shell::after { content: none; }

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
    color: ${z.textMuted};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .promo-kicker-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${z.green};
    animation: livePulse 2s infinite;
  }

  .promo-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(34px, 5vw, 54px);
    line-height: 1.03;
    letter-spacing: -1.4px;
    margin-bottom: 18px;
  }

  .promo-title span {
    color: ${z.textPrimary};
  }

  .promo-desc {
    max-width: 620px;
    font-size: 17px;
    line-height: 1.75;
    color: ${z.textSecondary};
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
    border-radius: 12px;
    background: rgba(255,255,255,0.65);
    border: 1px solid rgba(15,23,42,0.06);
  }

  .promo-point-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(39,201,39,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${z.greenLight};
    flex-shrink: 0;
  }

  .promo-point strong {
    display: block;
    font-size: 15px;
    color: ${z.textPrimary};
    margin-bottom: 4px;
  }

  .promo-point span {
    font-size: 13px;
    line-height: 1.6;
    color: ${z.textSecondary};
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
      ${z.bgAlt};
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
    color: ${z.textMuted};
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
    color: ${z.greenDim};
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
    background: linear-gradient(180deg, ${z.greenLight}, rgba(39,201,39,0.25));
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
    color: ${z.textPrimary};
    font-size: 20px;
    margin-bottom: 4px;
  }

  .signal-card span {
    font-size: 12px;
    color: ${z.textSecondary};
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

  .short-inline.float-left {
    display: flex;
    justify-content: flex-start;
  }

  .short-inline.float-right {
    display: flex;
    justify-content: flex-end;
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

  .vsl-card::before {
    content: none;
  }

  .vsl-frame {
    position: relative;
    aspect-ratio: 9 / 16;
    border-radius: 18px;
    overflow: hidden;
    background: #dfe8d8;
    border: 1px solid rgba(39,201,39,0.18);
    box-shadow: 0 14px 34px rgba(15,23,42,0.1), 0 0 0 1px rgba(39,201,39,0.08);
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
    color: ${z.textPrimary};
    font-size: 11px;
    font-weight: 600;
    backdrop-filter: blur(12px);
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
    color: ${z.textPrimary};
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(15,23,42,0.1);
  }

  .vsl-center-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${z.green};
    color: #041204;
    font-size: 12px;
    flex-shrink: 0;
  }

  .vsl-meta {
    position: relative;
    z-index: 1;
    padding: 18px 6px 6px;
  }

  .vsl-meta strong {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }

  .vsl-meta p {
    font-size: 14px;
    line-height: 1.7;
    color: ${z.textSecondary};
    margin-bottom: 0;
  }

  .vsl-helper {
    color: ${z.greenLight};
    font-size: 14px;
    font-weight: 600;
  }

  .vsl-helper code {
    color: ${z.textPrimary};
    font-family: 'Inter', sans-serif;
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

  .howto-header .section-desc {
    margin: 0 auto;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    position: relative;
  }

  .steps::before {
    content: '';
    position: absolute;
    top: 36px;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${z.border}, ${z.border}, transparent);
    z-index: 0;
  }

  .step-card {
    text-align: left;
    position: relative;
    z-index: 1;
    background: rgba(255,253,248,0.88);
    border: 1px solid rgba(25,23,18,0.08);
    border-radius: 20px;
    padding: 28px;
  }

  .step-num {
    width: 72px;
    height: 72px;
    margin: 0 0 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${z.green};
    background: ${z.bgAlt};
    border: 2px solid rgba(39,201,39,0.2);
    transition: all 0.3s ease;
    position: relative;
  }

  .step-num::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(39,201,39,0.08);
  }

  .step-card:hover .step-num {
    border-color: ${z.green};
    background: rgba(39,201,39,0.1);
    box-shadow: 0 0 30px rgba(39,201,39,0.15);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${z.textPrimary};
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    color: ${z.textSecondary};
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

  .testimonials-header .section-desc {
    margin: 0 auto;
  }

  .t-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .t-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${z.border};
    border-radius: 20px;
    padding: 32px;
    transition: all 0.3s ease;
  }

  .t-card:hover {
    border-color: rgba(39,201,39,0.15);
    background: rgba(255,255,255,0.98);
  }

  .t-stars {
    color: #fbbf24;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .t-quote {
    font-size: 15px;
    color: ${z.textSecondary};
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(39,201,39,0.2), rgba(82,223,82,0.15));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: ${z.green};
  }

  .t-name {
    font-weight: 600;
    font-size: 14px;
    color: ${z.textPrimary};
  }

  .t-role {
    font-size: 12px;
    color: ${z.textMuted};
  }

  /* ── CTA section ── */
  .final-cta {
    position: relative;
    z-index: 5;
    margin: 0 48px 80px;
    border-radius: 24px;
    padding: 80px 48px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(39,201,39,0.08), rgba(255,255,255,0.98));
    border: 1px solid rgba(25,23,18,0.08);
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(39,201,39,0.15), transparent 70%);
    pointer-events: none;
  }

  .final-cta::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 250px;
    background: radial-gradient(ellipse, rgba(82,223,82,0.08), transparent 70%);
    pointer-events: none;
  }

  .final-cta-title {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -1.4px;
    color: ${z.textPrimary};
    margin-bottom: 16px;
    position: relative;
  }

  .final-cta-sub {
    font-size: 18px;
    color: ${z.textSecondary};
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
    color: ${z.textSecondary};
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(10px);
    border: 1px solid ${z.border};
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
    background: ${z.green};
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── Footer ── */
  .footer {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 48px;
    border-top: 1px solid ${z.border};
    font-size: 13px;
    color: ${z.textMuted};
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: ${z.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: ${z.textSecondary};
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .promo-strip { height: 34px; font-size: 12px; padding: 0 12px; }
    .promo-strip span { padding: 4px 10px; gap: 7px; }
    .nav { padding: 14px 20px; }
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
    .hero-offer-card { min-height: 0; padding: 0 18px; border-radius: 20px; flex-basis: 100%; min-height: 64px; }
    .hero-offer-title { gap: 6px; letter-spacing: -0.8px; white-space: normal; }
    .hero-offer-title strong { font-size: clamp(22px, 7vw, 30px); }
    .hero-offer-title span { font-size: clamp(22px, 7vw, 30px); }
    .btn-primary { min-height: 64px; min-width: 0; width: 100%; padding: 0 22px; border-radius: 20px; font-size: clamp(20px, 6vw, 28px); flex-basis: 100%; }
    .btn-arrow { width: 28px; height: 28px; font-size: 15px; }
    .hero-line.top,
    .hero-line.middle,
    .hero-line.bottom { white-space: normal; }
    .promo-offer { padding: 24px 20px 80px; }
    .promo-offer-shell { grid-template-columns: 1fr; padding: 22px; }
    .promo-points { grid-template-columns: 1fr; }
    .signal-panel { min-height: 320px; }
    .features { padding: 20px 20px 72px; }
    .features-grid { grid-template-columns: 1fr; gap: 12px; }
    .features-grid .f-card:first-child { grid-column: auto; }
    .features-grid .f-card:nth-child(2),
    .features-grid .f-card:nth-child(n+3) { grid-column: auto; }
    .f-card { aspect-ratio: auto; }
    .howto { padding: 0 20px 80px; }
    .steps { grid-template-columns: 1fr; gap: 32px; }
    .steps::before { display: none; }
    .short-inline { padding: 0 20px 36px; }
    .short-inline.float-left,
    .short-inline.float-right { justify-content: center; }
    .short-inline-asset,
    .vsl-card { max-width: 220px; }
    .testimonials { padding: 0 20px 80px; }
    .t-grid { grid-template-columns: 1fr; }
    .final-cta { margin: 0 20px 60px; padding: 48px 24px; }
    .footer { flex-direction: column; gap: 16px; padding: 24px 20px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-cta-row { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; justify-content: center; }
    .hero-trust { flex-direction: column; gap: 8px; }
  }
`,Ap=[{icon:"AI",kicker:"Tu centro de mando inteligente",title:"Profit BRAIN",desc:"Herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa. Deja de adivinar y empieza a decidir con datos.",year:"IA",link:"https://app.profit120.com/guest",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"},{icon:"24/7",kicker:"Tu consultor 24/7 con IA",title:"Profit CHAT",desc:"Pregunta lo que necesites sobre tu negocio y recibe respuestas estratégicas al instante. Como tener un asesor que nunca duerme.",year:"24/7",link:"https://app.profit120.com/guest",image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop"},{icon:"20M",kicker:"Soluciones en 20 minutos",title:"Profit BOOST",desc:"Un problema real con una solución accionable. Frameworks, plantillas y herramientas para ejecutar hoy, no mañana.",year:"20M",link:"https://app.profit120.com/guest",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"},{icon:"NEWS",kicker:"El newsletter que forma criterio",title:"Profit TALKS",desc:"Cada semana recibes el análisis que los directivos necesitan: tendencias, casos reales y marcos de decisión que se aplican de inmediato.",year:"NEWS",link:"https://app.profit120.com/guest",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"},{icon:"LIVE",kicker:"Estrategia colaborativa en vivo",title:"Profit LABS",desc:"Tú y tu equipo, trabajando codo a codo para rediseñar decisiones con datos reales, IA y estructura accionable.",year:"LIVE",link:"https://app.profit120.com/guest",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"}],Lp=[{icon:"↗",title:"60 días sin costo",desc:"Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo."},{icon:"▣",title:"Acceso ilimitado para toda tu empresa",desc:"La promoción no es solo para una persona. El acceso está pensado para ti y todo tu equipo."},{icon:"∞",title:"5 módulos estratégicos",desc:"Cada módulo fue diseñado para atacar un problema específico de tu empresa y acelerar resultados."},{icon:"$",title:"Cero riesgo",desc:"60 días sin costo, acceso ilimitado y toda la plataforma disponible para validar si Profit120 hace sentido para ustedes."}],Ip=[{num:"1",title:"Ingresa ahora",desc:"Entra directo a Profit120 y activa tu acceso promocional de 60 días sin costo, sin tarjeta y sin fricción innecesaria."},{num:"2",title:"Conoce el producto de verdad",desc:"Explora módulos, haz preguntas y entiende cómo Profit120 puede ayudarte en distintas áreas de tu negocio."},{num:"3",title:"Decide con evidencia",desc:"Úsalo durante tu prueba ilimitada y decide con experiencia real si es una herramienta para tu operación."}],Dp=[{stars:5,quote:"Nunca pensé que una herramienta de IA realmente entendiera mi negocio. Profit120 me ayudó a reestructurar mis precios en 20 minutos.",name:"Carlos M.",role:"Dueño de restaurante",initials:"CM"},{stars:5,quote:"Lo probé como invitado por curiosidad y terminé comprando el plan completo. La sección de finanzas sola vale oro.",name:"Ana L.",role:"Fundadora de e-commerce",initials:"AL"},{stars:5,quote:"Mi contador me cobra por lo que Profit120 me da en segundos. La análisis de flujo de caja me ahorró miles de pesos.",name:"Roberto S.",role:"Director de agencia",initials:"RS"}],Fp=["60 días sin costo","Acceso ilimitado","Todo tu equipo","Cero riesgo"],Ft=[{title:"Short 1: Que es Profit120",desc:"Usa este VSL para explicar rapidamente el producto, su propuesta de valor y por que vale la pena entrar ahora.",thumbUrl:"https://i.ytimg.com/vi/MMIO5xuowgg/hqdefault.jpg",watchUrl:"https://www.youtube.com/shorts/MMIO5xuowgg",helper:"Short de producto cargado."},{title:"Short 2: Promoción 60 días sin costo",desc:"Usa este VSL para reforzar la promoción, eliminar objeciones y recordar que no se necesita tarjeta para probar.",thumbUrl:"https://i.ytimg.com/vi/cb7jEJX1i9A/hqdefault.jpg",watchUrl:"https://www.youtube.com/shorts/cb7jEJX1i9A",helper:"Short de promoción cargado."}],pi=()=>d.jsxs("svg",{className:"trust-check",viewBox:"0 0 16 16",fill:"none",children:[d.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.2"}),d.jsx("path",{d:"M5 8.5l2 2 4-4",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),mi=()=>d.jsxs("svg",{viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:[d.jsx("path",{d:"M3.75 14.25 13.2 4.8",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round"}),d.jsx("path",{d:"M7.2 4.8h6v6",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round",strokeLinejoin:"round"})]});function Mp(){const[e,t]=M.useState(!1);return M.useEffect(()=>{const n=()=>t(window.scrollY>20);return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),d.jsxs(d.Fragment,{children:[d.jsx("style",{children:Tp}),d.jsxs("div",{className:"page",children:[d.jsx("div",{className:"promo-strip",children:d.jsx("span",{children:"60 días sin costo. Acceso ilimitado para ti y toda tu empresa."})}),d.jsxs("div",{className:"aurora",children:[d.jsx("div",{className:"aurora-blob"}),d.jsx("div",{className:"aurora-blob"}),d.jsx("div",{className:"aurora-blob"})]}),d.jsx("div",{className:"grid-overlay"}),d.jsxs("nav",{className:`nav${e?" scrolled":""}`,children:[d.jsx("div",{className:"nav-logo",children:d.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"})}),d.jsxs("a",{href:"https://app.profit120.com/guest",className:"nav-cta",target:"_blank",rel:"noopener noreferrer",children:["Ingresa ahora ",d.jsx("span",{children:"→"})]})]}),d.jsxs("section",{className:"hero",children:[d.jsx("div",{className:"hero-globe",children:d.jsx(yp,{speed:.0026})}),d.jsx(H,{delay:0,children:d.jsxs("div",{className:"hero-copy",children:[d.jsx("p",{className:"hero-sub",children:"Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo."}),d.jsxs("h1",{className:"hero-headline",children:[d.jsx("span",{className:"hero-line top",children:"La plataforma de"}),d.jsx("span",{className:"hero-line middle",children:"Inteligencia Empresarial"}),d.jsx("span",{className:"hero-line bottom",children:"más avanzada de LATAM"})]}),d.jsx(H,{delay:.1,children:d.jsxs("div",{className:"hero-cta-row",children:[d.jsxs("div",{className:"hero-offer-card",children:[d.jsx("span",{className:"glass-flare","aria-hidden":"true"}),d.jsxs("div",{className:"hero-offer-title",children:[d.jsx("strong",{children:"60 días"}),d.jsx("span",{children:"sin costo"})]})]}),d.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",target:"_blank",rel:"noopener noreferrer",children:["Entra Ahora",d.jsx("span",{className:"btn-arrow",children:d.jsx(mi,{})})]})]})}),d.jsx(H,{delay:.18,children:d.jsxs("div",{className:"hero-trust",children:[d.jsxs("div",{className:"trust-item",children:[d.jsx(pi,{}),"60 días sin costo"]}),d.jsxs("div",{className:"trust-item",children:[d.jsx(pi,{}),"Todo tu equipo"]}),d.jsxs("div",{className:"trust-item",children:[d.jsx(pi,{}),"Acceso ilimitado"]})]})})]})}),d.jsx(H,{delay:.18,children:d.jsx("div",{className:"hero-media",children:d.jsx("div",{className:"hero-vsl",children:d.jsx("div",{className:"hero-vsl-embed",children:d.jsx("iframe",{src:"https://www.youtube.com/embed/MMIO5xuowgg?rel=0&modestbranding=1&playsinline=1",title:Ft[0].title,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})})})})]}),d.jsxs("section",{className:"features",children:[d.jsxs("div",{className:"features-header",children:[d.jsx(H,{children:d.jsxs("div",{className:"section-eyebrow",children:[d.jsx("span",{className:"eyebrow-line"}),d.jsx("span",{className:"eyebrow-line"})]})}),d.jsx(H,{delay:.1,children:d.jsxs("h2",{className:"section-heading",children:["¿Qué desbloqueo con mi",d.jsx("br",{}),"prueba de 60 días?"]})}),d.jsx(H,{delay:.15,children:d.jsx("p",{className:"section-desc",children:"Al activar tu prueba por 60 días sin costo, desbloqueas todas las herremientas de la plataforma de manera ilimitada."})})]}),d.jsx(H,{delay:.2,children:d.jsx(Pp,{projects:Ap.map(n=>({title:n.title,description:n.desc,year:n.year,link:n.link,image:n.image,kicker:n.kicker}))})})]}),d.jsxs("section",{className:"testimonials",children:[d.jsxs("div",{className:"testimonials-header",children:[d.jsx(H,{children:d.jsx("div",{className:"section-eyebrow"})}),d.jsx(H,{delay:.1,children:d.jsxs("h2",{className:"section-heading",children:["Cada producto resuelve un",d.jsx("br",{}),"problema específico de tu empresa"]})}),d.jsx(H,{delay:.15,children:d.jsx("p",{className:"section-desc",children:"Juntos, son imparables."})})]}),d.jsx("div",{className:"t-grid",children:Dp.map((n,r)=>d.jsx(H,{delay:.08*r,children:d.jsxs("div",{className:"t-card",children:[d.jsx("div",{className:"t-stars",children:"★".repeat(n.stars)}),d.jsxs("p",{className:"t-quote",children:['"',n.quote,'"']}),d.jsxs("div",{className:"t-author",children:[d.jsx("div",{className:"t-avatar",children:n.initials}),d.jsxs("div",{children:[d.jsx("div",{className:"t-name",children:n.name}),d.jsx("div",{className:"t-role",children:n.role})]})]})]})},r))})]}),d.jsx("section",{className:"promo-offer",children:d.jsxs("div",{className:"promo-offer-shell",children:[d.jsxs("div",{className:"promo-copy",children:[d.jsx(H,{children:d.jsxs("div",{className:"promo-kicker",children:[d.jsx("span",{className:"promo-kicker-dot"}),"Promoción especial"]})}),d.jsx(H,{delay:.08,children:d.jsxs("h2",{className:"promo-title",children:["60 días sin costo.",d.jsx("br",{}),d.jsx("span",{children:"Todo tu equipo. Cero riesgo."})]})}),d.jsx(H,{delay:.14,children:d.jsx("p",{className:"promo-desc",children:"Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo. Acceso ilimitado para ti y toda tu empresa."})}),d.jsx("div",{className:"promo-points",children:Lp.map((n,r)=>d.jsx(H,{delay:.05*r,children:d.jsxs("div",{className:"promo-point",children:[d.jsx("div",{className:"promo-point-icon",children:n.icon}),d.jsxs("div",{children:[d.jsx("strong",{children:n.title}),d.jsx("span",{children:n.desc})]})]})},n.title))}),d.jsx(H,{delay:.22,children:d.jsxs("div",{className:"hero-cta-row",style:{justifyContent:"flex-start"},children:[d.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",target:"_blank",rel:"noopener noreferrer",children:["Pruébalo ahora",d.jsx("span",{className:"btn-arrow",children:d.jsx(mi,{})})]}),d.jsx("a",{href:"#como-funciona",className:"btn-secondary",children:"Ver cómo funciona"})]})})]}),d.jsx(H,{delay:.12,direction:"left",className:"promo-visual",children:d.jsxs("div",{className:"signal-panel",children:[d.jsxs("div",{className:"signal-top",children:[d.jsx("span",{className:"signal-label",children:"Resumen de la promoción"}),d.jsxs("span",{className:"signal-live",children:[d.jsx("span",{className:"promo-kicker-dot"}),"Activa hoy"]})]}),d.jsxs("div",{className:"signal-bars","aria-hidden":"true",children:[d.jsx("div",{className:"signal-bar",style:{height:"46%"}}),d.jsx("div",{className:"signal-bar",style:{height:"68%"}}),d.jsx("div",{className:"signal-bar",style:{height:"58%"}}),d.jsx("div",{className:"signal-bar",style:{height:"82%"}}),d.jsx("div",{className:"signal-bar",style:{height:"100%"}})]}),d.jsxs("div",{className:"signal-cards",children:[d.jsxs("div",{className:"signal-card",children:[d.jsx("strong",{children:"60 días"}),d.jsx("span",{children:"Sin costo para usar toda la plataforma durante el período promocional."})]}),d.jsxs("div",{className:"signal-card",children:[d.jsx("strong",{children:"Todo tu equipo"}),d.jsx("span",{children:"Acceso ilimitado para ti y toda tu empresa, no solo para una persona."})]}),d.jsxs("div",{className:"signal-card",children:[d.jsx("strong",{children:"5 módulos"}),d.jsx("span",{children:"Cinco frentes estratégicos para resolver problemas reales de crecimiento."})]}),d.jsxs("div",{className:"signal-card",children:[d.jsx("strong",{children:"Cero riesgo"}),d.jsx("span",{children:"La promo está hecha para usar, validar y decidir con experiencia real."})]})]})]})})]})}),d.jsx("section",{className:"short-inline float-left",id:"short-producto",children:d.jsx(H,{direction:"right",className:"short-inline-asset",children:d.jsx("div",{className:"vsl-card",children:d.jsx("a",{className:"vsl-link",href:Ft[0].watchUrl,target:"_blank",rel:"noopener noreferrer",children:d.jsxs("div",{className:"vsl-frame",children:[d.jsx("div",{className:"vsl-play",children:"Short de producto"}),d.jsx("img",{src:Ft[0].thumbUrl,alt:Ft[0].title,loading:"lazy"}),d.jsxs("div",{className:"vsl-center-play",children:[d.jsx("span",{className:"vsl-center-icon",children:"▶"}),"Ver Short"]})]})})})})}),d.jsxs("section",{className:"howto",id:"como-funciona",children:[d.jsxs("div",{className:"howto-header",children:[d.jsx(H,{children:d.jsxs("div",{className:"section-eyebrow",children:[d.jsx("span",{className:"eyebrow-line"}),"Promoción activa",d.jsx("span",{className:"eyebrow-line"})]})}),d.jsx(H,{delay:.1,children:d.jsxs("h2",{className:"section-heading",children:["Entra hoy y usa toda la plataforma",d.jsx("br",{}),"sin límites durante 60 días"]})}),d.jsx(H,{delay:.15,children:d.jsx("p",{className:"section-desc",children:"60 días sin costo. 5 módulos estratégicos. Todo tu equipo. Cero riesgo."})})]}),d.jsx("div",{className:"steps",children:Ip.map((n,r)=>d.jsx(H,{delay:.1*r,children:d.jsxs("div",{className:"step-card",children:[d.jsx("div",{className:"step-num",children:n.num}),d.jsx("h3",{className:"step-title",children:n.title}),d.jsx("p",{className:"step-desc",children:n.desc})]})},r))})]}),d.jsx("section",{className:"short-inline float-right",id:"short-promocion",children:d.jsx(H,{direction:"left",className:"short-inline-asset",children:d.jsx("div",{className:"vsl-card",children:d.jsx("a",{className:"vsl-link",href:Ft[1].watchUrl,target:"_blank",rel:"noopener noreferrer",children:d.jsxs("div",{className:"vsl-frame",children:[d.jsx("div",{className:"vsl-play",children:"Short de promoción"}),d.jsx("img",{src:Ft[1].thumbUrl,alt:Ft[1].title,loading:"lazy"}),d.jsxs("div",{className:"vsl-center-play",children:[d.jsx("span",{className:"vsl-center-icon",children:"▶"}),"Ver Short"]})]})})})})}),d.jsx(H,{children:d.jsxs("div",{className:"final-cta",children:[d.jsxs("h2",{className:"final-cta-title",children:["60 días sin costo.",d.jsx("br",{}),"Acceso ilimitado para tu empresa."]}),d.jsx("p",{className:"final-cta-sub",children:"Entra hoy y usa toda la plataforma sin límites durante 60 días sin costo. 5 módulos estratégicos. Todo tu equipo. Cero riesgo."}),d.jsx("div",{className:"cta-benefits",children:Fp.map((n,r)=>d.jsxs("div",{className:"benefit-chip",children:[d.jsx("span",{className:"benefit-dot"}),n]},r))}),d.jsxs("a",{href:"https://app.profit120.com/guest",className:"btn-primary",style:{fontSize:"18px",padding:"20px 48px"},target:"_blank",rel:"noopener noreferrer",children:["Pruébalo ahora",d.jsx("span",{className:"btn-arrow",children:d.jsx(mi,{})})]})]})}),d.jsxs("footer",{className:"footer",children:[d.jsxs("span",{children:["© ",new Date().getFullYear()," Profit120. Todos los derechos reservados."]}),d.jsx("div",{className:"footer-links",children:d.jsx("a",{href:"https://app.profit120.com/guest",children:"Ingresa ahora"})})]})]})]})}hi.createRoot(document.getElementById("root")).render(d.jsx(Gc.StrictMode,{children:d.jsx(Mp,{})}));
