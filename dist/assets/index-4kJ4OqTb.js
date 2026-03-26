(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},ri={},Xa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),vc=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),Dl=Symbol.iterator;function wc(e){return e===null||typeof e!="object"?null:(e=Dl&&e[Dl]||e["@@iterator"],typeof e=="function"?e:null)}var Ga={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,Ja={};function an(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Ga}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=an.prototype;function Ho(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Ga}var Vo=Ho.prototype=new es;Vo.constructor=Ho;Za(Vo,an.prototype);Vo.isPureReactComponent=!0;var Al=Array.isArray,ts=Object.prototype.hasOwnProperty,Wo={current:null},ns={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ts.call(t,r)&&!ns.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xn,type:e,key:o,ref:a,props:i,_owner:Wo.current}}function kc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fl=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bc(""+e.key):t.toString(36)}function kr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xn:case cc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bi(a,0):r,Al(i)?(n="",e!=null&&(n=e.replace(Fl,"$&/")+"/"),kr(i,t,n,"",function(d){return d})):i!=null&&(Qo(i)&&(i=kc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Fl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Al(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+bi(o,s);a+=kr(o,t,n,u,i)}else if(u=wc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+bi(o,s++),a+=kr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function rr(e,t,n){if(e==null)return e;var r=[],i=0;return kr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},br={transition:null},Nc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:br,ReactCurrentOwner:Wo};function is(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=an;L.Fragment=dc;L.Profiler=fc;L.PureComponent=Ho;L.StrictMode=pc;L.Suspense=xc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;L.act=is;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Za({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Wo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ts.call(t,u)&&!ns.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Xn,type:e.type,key:i,ref:o,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};L.createElement=rs;L.createFactory=function(e){var t=rs.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:gc,render:e}};L.isValidElement=Qo;L.lazy=function(e){return{$$typeof:yc,_payload:{_status:-1,_result:e},_init:jc}};L.memo=function(e,t){return{$$typeof:vc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};L.unstable_act=is;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Xa.exports=L;var $e=Xa.exports;const Sc=uc($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=$e,Ec=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,_c=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Pc.call(t,r)&&!Tc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ec,type:e,key:o,ref:a,props:i,_owner:_c.current}}ri.Fragment=Cc;ri.jsx=os;ri.jsxs=os;Ka.exports=ri;var l=Ka.exports,Ki={},ls={exports:{}},we={},as={exports:{}},ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,P){var T=S.length;S.push(P);e:for(;0<T;){var Q=T-1>>>1,G=S[Q];if(0<i(G,P))S[Q]=P,S[T]=G,T=Q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var Q=0,G=S.length,tr=G>>>1;Q<tr;){var vt=2*(Q+1)-1,ki=S[vt],yt=vt+1,nr=S[yt];if(0>i(ki,T))yt<G&&0>i(nr,ki)?(S[Q]=nr,S[yt]=T,Q=yt):(S[Q]=ki,S[vt]=T,Q=vt);else if(yt<G&&0>i(nr,T))S[Q]=nr,S[yt]=T,Q=yt;else break e}}return P}function i(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],x=1,g=null,h=3,w=!1,k=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=S)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function v(S){if(b=!1,m(S),!k)if(n(u)!==null)k=!0,yi(N);else{var P=n(d);P!==null&&wi(v,P.startTime-S)}}function N(S,P){k=!1,b&&(b=!1,f(C),C=-1),w=!0;var T=h;try{for(m(P),g=n(u);g!==null&&(!(g.expirationTime>P)||S&&!Ce());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,h=g.priorityLevel;var G=Q(g.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?g.callback=G:g===n(u)&&r(u),m(P)}else r(u);g=n(u)}if(g!==null)var tr=!0;else{var vt=n(d);vt!==null&&wi(v,vt.startTime-P),tr=!1}return tr}finally{g=null,h=T,w=!1}}var z=!1,E=null,C=-1,W=5,$=-1;function Ce(){return!(e.unstable_now()-$<W)}function cn(){if(E!==null){var S=e.unstable_now();$=S;var P=!0;try{P=E(!0,S)}finally{P?dn():(z=!1,E=null)}}else z=!1}var dn;if(typeof c=="function")dn=function(){c(cn)};else if(typeof MessageChannel<"u"){var Ol=new MessageChannel,sc=Ol.port2;Ol.port1.onmessage=cn,dn=function(){sc.postMessage(null)}}else dn=function(){A(cn,0)};function yi(S){E=S,z||(z=!0,dn())}function wi(S,P){C=A(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,yi(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var T=h;h=P;try{return S()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=h;h=S;try{return P()}finally{h=T}},e.unstable_scheduleCallback=function(S,P,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,S={id:x++,callback:P,priorityLevel:S,startTime:T,expirationTime:G,sortIndex:-1},T>Q?(S.sortIndex=T,t(d,S),n(u)===null&&S===n(d)&&(b?(f(C),C=-1):b=!0,wi(v,T-Q))):(S.sortIndex=G,t(u,S),k||w||(k=!0,yi(N))),S},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(S){var P=h;return function(){var T=h;h=P;try{return S.apply(this,arguments)}finally{h=T}}}})(ss);as.exports=ss;var Lc=as.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=$e,ye=Lc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,$n={};function Lt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for($n[e]=t,e=0;e<t.length;e++)us.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ul={},Bl={};function Mc(e){return Xi.call(Bl,e)?!0:Xi.call(Ul,e)?!1:Ic.test(e)?Bl[e]=!0:(Ul[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yo,qo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yo,qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yo,qo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Oc(t,n,i,r)&&(n=null),r||i===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),cs=Symbol.for("react.provider"),ds=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ji;function wn(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var Ni=!1;function Si(e,t){if(!e||Ni)return"";Ni=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Ni=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Dc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function eo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Mt:return"Portal";case Gi:return"Profiler";case Xo:return"StrictMode";case Zi:return"Suspense";case Ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ds:return(e.displayName||"Context")+".Consumer";case cs:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:eo(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return eo(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eo(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Fc(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function to(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function no(e,t){hs(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&ro(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ro(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ql(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function gs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,t){if(t){if(Bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,qt=null,Kt=null;function ql(e){if(e=Jn(e)){if(typeof uo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=si(t),uo(e.stateNode,e.type,t))}}function ks(e){qt?Kt?Kt.push(e):Kt=[e]:qt=e}function bs(){if(qt){var e=qt,t=Kt;if(Kt=qt=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function js(e,t){return e(t)}function Ns(){}var zi=!1;function Ss(e,t,n){if(zi)return e(t,n);zi=!0;try{return js(e,t,n)}finally{zi=!1,(qt!==null||Kt!==null)&&(Ns(),bs())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var co=!1;if(Ye)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){co=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{co=!1}function Hc(e,t,n,r,i,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var Sn=!1,Ir=null,Mr=!1,po=null,Vc={onError:function(e){Sn=!0,Ir=e}};function Wc(e,t,n,r,i,o,a,s,u){Sn=!1,Ir=null,Hc.apply(Vc,arguments)}function Qc(e,t,n,r,i,o,a,s,u){if(Wc.apply(this,arguments),Sn){if(Sn){var d=Ir;Sn=!1,Ir=null}else throw Error(y(198));Mr||(Mr=!0,po=d)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kl(e){if($t(e)!==e)throw Error(y(188))}function Yc(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Kl(i),e;if(o===r)return Kl(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Es(e){return e=Yc(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var Ps=ye.unstable_scheduleCallback,Xl=ye.unstable_cancelCallback,qc=ye.unstable_shouldYield,Kc=ye.unstable_requestPaint,Y=ye.unstable_now,Xc=ye.unstable_getCurrentPriorityLevel,el=ye.unstable_ImmediatePriority,_s=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,Gc=ye.unstable_LowPriority,Ts=ye.unstable_IdlePriority,ii=null,Fe=null;function Zc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:td,Jc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(Jc(e)/ed|0)|0}var ar=64,sr=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=bn(s):(o&=a,o!==0&&(r=bn(o)))}else a=n&~i,a!==0?r=bn(a):o!==0&&(r=bn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),i=1<<n,r|=e[n],t&=~i;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ie(o),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=nd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function fo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ie(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function $s(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,nl,Ms,Rs,Os,mo=!1,ur=[],ot=null,lt=null,at=null,Rn=new Map,On=new Map,tt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function mn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jn(t),t!==null&&nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ld(e,t,n,r,i){switch(t){case"focusin":return ot=mn(ot,e,t,n,r,i),!0;case"dragenter":return lt=mn(lt,e,t,n,r,i),!0;case"mouseover":return at=mn(at,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rn.set(o,mn(Rn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,On.set(o,mn(On.get(o)||null,e,t,n,r,i)),!0}return!1}function Ds(e){var t=bt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=zs(n),t!==null){e.blockedOn=t,Os(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);so=r,n.target.dispatchEvent(r),so=null}else return t=Jn(n),t!==null&&nl(t),e.blockedOn=n,!1;t.shift()}return!0}function Zl(e,t,n){jr(e)&&n.delete(t)}function ad(){mo=!1,ot!==null&&jr(ot)&&(ot=null),lt!==null&&jr(lt)&&(lt=null),at!==null&&jr(at)&&(at=null),Rn.forEach(Zl),On.forEach(Zl)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ad)))}function Dn(e){function t(i){return hn(i,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),lt!==null&&hn(lt,e),at!==null&&hn(at,e),Rn.forEach(t),On.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ds(n),n.blockedOn===null&&tt.shift()}var Xt=Ge.ReactCurrentBatchConfig,Dr=!0;function sd(e,t,n,r){var i=M,o=Xt.transition;Xt.transition=null;try{M=1,rl(e,t,n,r)}finally{M=i,Xt.transition=o}}function ud(e,t,n,r){var i=M,o=Xt.transition;Xt.transition=null;try{M=4,rl(e,t,n,r)}finally{M=i,Xt.transition=o}}function rl(e,t,n,r){if(Dr){var i=ho(e,t,n,r);if(i===null)Oi(e,t,r,Ar,n),Gl(e,r);else if(ld(i,e,t,n,r))r.stopPropagation();else if(Gl(e,r),t&4&&-1<od.indexOf(e)){for(;i!==null;){var o=Jn(i);if(o!==null&&Is(o),o=ho(e,t,n,r),o===null&&Oi(e,t,r,Ar,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Oi(e,t,r,null,n)}}var Ar=null;function ho(e,t,n,r){if(Ar=null,e=Jo(r),e=bt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case el:return 1;case _s:return 4;case Rr:case Gc:return 16;case Ts:return 536870912;default:return 16}default:return 16}}var rt=null,il=null,Nr=null;function Fs(){if(Nr)return Nr;var e,t=il,n=t.length,r,i="value"in rt?rt.value:rt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Nr=i.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Jl(){return!1}function ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Jl,this.isPropagationStopped=Jl,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=ke(sn),Zn=H({},sn,{view:0,detail:0}),cd=ke(Zn),Ci,Pi,gn,oi=H({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ci=e.screenX-gn.screenX,Pi=e.screenY-gn.screenY):Pi=Ci=0,gn=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),ea=ke(oi),dd=H({},oi,{dataTransfer:0}),pd=ke(dd),fd=H({},Zn,{relatedTarget:0}),_i=ke(fd),md=H({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=ke(md),gd=H({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=ke(gd),vd=H({},sn,{data:0}),ta=ke(vd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kd[e])?!!t[e]:!1}function ll(){return bd}var jd=H({},Zn,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=ke(jd),Sd=H({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=ke(Sd),zd=H({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),Ed=ke(zd),Cd=H({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=ke(Cd),_d=H({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=ke(_d),Ld=[9,13,27,32],al=Ye&&"CompositionEvent"in window,zn=null;Ye&&"documentMode"in document&&(zn=document.documentMode);var $d=Ye&&"TextEvent"in window&&!zn,Us=Ye&&(!al||zn&&8<zn&&11>=zn),ra=" ",ia=!1;function Bs(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Id(e,t){switch(e){case"compositionend":return Hs(t);case"keypress":return t.which!==32?null:(ia=!0,ra);case"textInput":return e=t.data,e===ra&&ia?null:e;default:return null}}function Md(e,t){if(Ot)return e==="compositionend"||!al&&Bs(e,t)?(e=Fs(),Nr=il=rt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rd[e.type]:t==="textarea"}function Vs(e,t,n,r){ks(r),t=Fr(t,"onChange"),0<t.length&&(n=new ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,An=null;function Od(e){tu(e,0)}function li(e){var t=Ft(e);if(ms(t))return e}function Dd(e,t){if(e==="change")return t}var Ws=!1;if(Ye){var Ti;if(Ye){var Li="oninput"in document;if(!Li){var la=document.createElement("div");la.setAttribute("oninput","return;"),Li=typeof la.oninput=="function"}Ti=Li}else Ti=!1;Ws=Ti&&(!document.documentMode||9<document.documentMode)}function aa(){En&&(En.detachEvent("onpropertychange",Qs),An=En=null)}function Qs(e){if(e.propertyName==="value"&&li(An)){var t=[];Vs(t,An,e,Jo(e)),Ss(Od,t)}}function Ad(e,t,n){e==="focusin"?(aa(),En=t,An=n,En.attachEvent("onpropertychange",Qs)):e==="focusout"&&aa()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(An)}function Ud(e,t){if(e==="click")return li(t)}function Bd(e,t){if(e==="input"||e==="change")return li(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Hd;function Fn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xi.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,t){var n=sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sa(n)}}function Ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qs(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ys(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ua(n,o);var a=ua(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=Ye&&"documentMode"in document&&11>=document.documentMode,Dt=null,go=null,Cn=null,xo=!1;function ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Dt==null||Dt!==$r(r)||(r=Dt,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&Fn(Cn,r)||(Cn=r,r=Fr(go,"onSelect"),0<r.length&&(t=new ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},$i={},Ks={};Ye&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function ai(e){if($i[e])return $i[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return $i[e]=t[n];return e}var Xs=ai("animationend"),Gs=ai("animationiteration"),Zs=ai("animationstart"),Js=ai("transitionend"),eu=new Map,da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){eu.set(e,t),Lt(t,[e])}for(var Ii=0;Ii<da.length;Ii++){var Mi=da[Ii],Qd=Mi.toLowerCase(),Yd=Mi[0].toUpperCase()+Mi.slice(1);ht(Qd,"on"+Yd)}ht(Xs,"onAnimationEnd");ht(Gs,"onAnimationIteration");ht(Zs,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Js,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;pa(i,s,d),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;pa(i,s,d),o=u}}}if(Mr)throw e=po,Mr=!1,po=null,e}function O(e,t){var n=t[bo];n===void 0&&(n=t[bo]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function Ri(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[pr]){e[pr]=!0,us.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Ri(n,!1,e),Ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Ri("selectionchange",!1,t))}}function nu(e,t,n,r){switch(As(t)){case 1:var i=sd;break;case 4:i=ud;break;default:i=rl}n=i.bind(null,t,n,e),i=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Oi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=bt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ss(function(){var d=o,x=Jo(n),g=[];e:{var h=eu.get(e);if(h!==void 0){var w=ol,k=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":w=Nd;break;case"focusin":k="focus",w=_i;break;case"focusout":k="blur",w=_i;break;case"beforeblur":case"afterblur":w=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case Xs:case Gs:case Zs:w=hd;break;case Js:w=Pd;break;case"scroll":w=cd;break;case"wheel":w=Td;break;case"copy":case"cut":case"paste":w=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=na}var b=(t&4)!==0,A=!b&&e==="scroll",f=b?h!==null?h+"Capture":null:h;b=[];for(var c=d,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Mn(c,f),v!=null&&b.push(Bn(c,v,m)))),A)break;c=c.return}0<b.length&&(h=new w(h,k,null,n,x),g.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==so&&(k=n.relatedTarget||n.fromElement)&&(bt(k)||k[qe]))break e;if((w||h)&&(h=x.window===x?x:(h=x.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?bt(k):null,k!==null&&(A=$t(k),k!==A||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(b=ea,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=na,v="onPointerLeave",f="onPointerEnter",c="pointer"),A=w==null?h:Ft(w),m=k==null?h:Ft(k),h=new b(v,c+"leave",w,n,x),h.target=A,h.relatedTarget=m,v=null,bt(x)===d&&(b=new b(f,c+"enter",k,n,x),b.target=m,b.relatedTarget=A,v=b),A=v,w&&k)t:{for(b=w,f=k,c=0,m=b;m;m=It(m))c++;for(m=0,v=f;v;v=It(v))m++;for(;0<c-m;)b=It(b),c--;for(;0<m-c;)f=It(f),m--;for(;c--;){if(b===f||f!==null&&b===f.alternate)break t;b=It(b),f=It(f)}b=null}else b=null;w!==null&&fa(g,h,w,b,!1),k!==null&&A!==null&&fa(g,A,k,b,!0)}}e:{if(h=d?Ft(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var N=Dd;else if(oa(h))if(Ws)N=Bd;else{N=Fd;var z=Ad}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Ud);if(N&&(N=N(e,d))){Vs(g,N,n,x);break e}z&&z(e,h,d),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&ro(h,"number",h.value)}switch(z=d?Ft(d):window,e){case"focusin":(oa(z)||z.contentEditable==="true")&&(Dt=z,go=d,Cn=null);break;case"focusout":Cn=go=Dt=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,ca(g,n,x);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":ca(g,n,x)}var E;if(al)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ot?Bs(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Us&&n.locale!=="ko"&&(Ot||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ot&&(E=Fs()):(rt=x,il="value"in rt?rt.value:rt.textContent,Ot=!0)),z=Fr(d,C),0<z.length&&(C=new ta(C,e,null,n,x),g.push({event:C,listeners:z}),E?C.data=E:(E=Hs(n),E!==null&&(C.data=E)))),(E=$d?Id(e,n):Md(e,n))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(x=new ta("onBeforeInput","beforeinput",null,n,x),g.push({event:x,listeners:d}),x.data=E))}tu(g,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mn(e,n),o!=null&&r.unshift(Bn(e,o,i)),o=Mn(e,t),o!=null&&r.push(Bn(e,o,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Mn(n,o),u!=null&&a.unshift(Bn(n,u,s))):i||(u=Mn(n,o),u!=null&&a.push(Bn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Kd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function ma(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Xd,"")}function fr(e,t,n){if(t=ma(t),ma(e)!==t&&n)throw Error(y(425))}function Ur(){}var vo=null,yo=null;function wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(Jd)}:ko;function Jd(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Ae="__reactFiber$"+un,Hn="__reactProps$"+un,qe="__reactContainer$"+un,bo="__reactEvents$"+un,ep="__reactListeners$"+un,tp="__reactHandles$"+un;function bt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ga(e);e!==null;){if(n=e[Ae])return n;e=ga(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Ae]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function si(e){return e[Hn]||null}var jo=[],Ut=-1;function gt(e){return{current:e}}function D(e){0>Ut||(e.current=jo[Ut],jo[Ut]=null,Ut--)}function R(e,t){Ut++,jo[Ut]=e.current,e.current=t}var mt={},le=gt(mt),fe=gt(!1),Et=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Br(){D(fe),D(le)}function xa(e,t,n){if(le.current!==mt)throw Error(y(168));R(le,t),R(fe,n)}function ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Ac(e)||"Unknown",i));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Et=le.current,R(le,e),R(fe,fe.current),!0}function va(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ru(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,D(fe),D(le),R(le,e)):D(fe),R(fe,n)}var He=null,ui=!1,Ai=!1;function iu(e){He===null?He=[e]:He.push(e)}function np(e){ui=!0,iu(e)}function xt(){if(!Ai&&He!==null){Ai=!0;var e=0,t=M;try{var n=He;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,ui=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Ps(el,xt),i}finally{M=t,Ai=!1}}return null}var Bt=[],Ht=0,Vr=null,Wr=0,be=[],je=0,Ct=null,Ve=1,We="";function wt(e,t){Bt[Ht++]=Wr,Bt[Ht++]=Vr,Vr=e,Wr=t}function ou(e,t,n){be[je++]=Ve,be[je++]=We,be[je++]=Ct,Ct=e;var r=Ve;e=We;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var o=32-Ie(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ve=1<<32-Ie(t)+i|n<<i|r,We=o+e}else Ve=1<<o|n<<i|r,We=e}function ul(e){e.return!==null&&(wt(e,1),ou(e,1,0))}function cl(e){for(;e===Vr;)Vr=Bt[--Ht],Bt[Ht]=null,Wr=Bt[--Ht],Bt[Ht]=null;for(;e===Ct;)Ct=be[--je],be[je]=null,We=be[--je],be[je]=null,Ve=be[--je],be[je]=null}var ve=null,xe=null,F=!1,Le=null;function lu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,xe=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Ve,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,xe=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(F){var t=xe;if(t){var n=t;if(!ya(e,t)){if(No(e))throw Error(y(418));t=st(n.nextSibling);var r=ve;t&&ya(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(No(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function mr(e){if(e!==ve)return!1;if(!F)return wa(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wo(e.type,e.memoizedProps)),t&&(t=xe)){if(No(e))throw au(),Error(y(418));for(;t;)lu(e,t),t=st(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ve?st(e.stateNode.nextSibling):null;return!0}function au(){for(var e=xe;e;)e=st(e.nextSibling)}function tn(){xe=ve=null,F=!1}function dl(e){Le===null?Le=[e]:Le.push(e)}var rp=Ge.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function su(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,v){return c===null||c.tag!==6?(c=Qi(m,f.mode,v),c.return=f,c):(c=i(c,m),c.return=f,c)}function u(f,c,m,v){var N=m.type;return N===Rt?x(f,c,m.props.children,v,m.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&ka(N)===c.type)?(v=i(c,m.props),v.ref=xn(f,c,m),v.return=f,v):(v=Lr(m.type,m.key,m.props,null,f.mode,v),v.ref=xn(f,c,m),v.return=f,v)}function d(f,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Yi(m,f.mode,v),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function x(f,c,m,v,N){return c===null||c.tag!==7?(c=zt(m,f.mode,v,N),c.return=f,c):(c=i(c,m),c.return=f,c)}function g(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qi(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ir:return m=Lr(c.type,c.key,c.props,null,f.mode,m),m.ref=xn(f,null,c),m.return=f,m;case Mt:return c=Yi(c,f.mode,m),c.return=f,c;case Je:var v=c._init;return g(f,v(c._payload),m)}if(kn(c)||pn(c))return c=zt(c,f.mode,m,null),c.return=f,c;hr(f,c)}return null}function h(f,c,m,v){var N=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(f,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ir:return m.key===N?u(f,c,m,v):null;case Mt:return m.key===N?d(f,c,m,v):null;case Je:return N=m._init,h(f,c,N(m._payload),v)}if(kn(m)||pn(m))return N!==null?null:x(f,c,m,v,null);hr(f,m)}return null}function w(f,c,m,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(c,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ir:return f=f.get(v.key===null?m:v.key)||null,u(c,f,v,N);case Mt:return f=f.get(v.key===null?m:v.key)||null,d(c,f,v,N);case Je:var z=v._init;return w(f,c,m,z(v._payload),N)}if(kn(v)||pn(v))return f=f.get(m)||null,x(c,f,v,N,null);hr(c,v)}return null}function k(f,c,m,v){for(var N=null,z=null,E=c,C=c=0,W=null;E!==null&&C<m.length;C++){E.index>C?(W=E,E=null):W=E.sibling;var $=h(f,E,m[C],v);if($===null){E===null&&(E=W);break}e&&E&&$.alternate===null&&t(f,E),c=o($,c,C),z===null?N=$:z.sibling=$,z=$,E=W}if(C===m.length)return n(f,E),F&&wt(f,C),N;if(E===null){for(;C<m.length;C++)E=g(f,m[C],v),E!==null&&(c=o(E,c,C),z===null?N=E:z.sibling=E,z=E);return F&&wt(f,C),N}for(E=r(f,E);C<m.length;C++)W=w(E,f,C,m[C],v),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?C:W.key),c=o(W,c,C),z===null?N=W:z.sibling=W,z=W);return e&&E.forEach(function(Ce){return t(f,Ce)}),F&&wt(f,C),N}function b(f,c,m,v){var N=pn(m);if(typeof N!="function")throw Error(y(150));if(m=N.call(m),m==null)throw Error(y(151));for(var z=N=null,E=c,C=c=0,W=null,$=m.next();E!==null&&!$.done;C++,$=m.next()){E.index>C?(W=E,E=null):W=E.sibling;var Ce=h(f,E,$.value,v);if(Ce===null){E===null&&(E=W);break}e&&E&&Ce.alternate===null&&t(f,E),c=o(Ce,c,C),z===null?N=Ce:z.sibling=Ce,z=Ce,E=W}if($.done)return n(f,E),F&&wt(f,C),N;if(E===null){for(;!$.done;C++,$=m.next())$=g(f,$.value,v),$!==null&&(c=o($,c,C),z===null?N=$:z.sibling=$,z=$);return F&&wt(f,C),N}for(E=r(f,E);!$.done;C++,$=m.next())$=w(E,f,C,$.value,v),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?C:$.key),c=o($,c,C),z===null?N=$:z.sibling=$,z=$);return e&&E.forEach(function(cn){return t(f,cn)}),F&&wt(f,C),N}function A(f,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Rt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ir:e:{for(var N=m.key,z=c;z!==null;){if(z.key===N){if(N=m.type,N===Rt){if(z.tag===7){n(f,z.sibling),c=i(z,m.props.children),c.return=f,f=c;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&ka(N)===z.type){n(f,z.sibling),c=i(z,m.props),c.ref=xn(f,z,m),c.return=f,f=c;break e}n(f,z);break}else t(f,z);z=z.sibling}m.type===Rt?(c=zt(m.props.children,f.mode,v,m.key),c.return=f,f=c):(v=Lr(m.type,m.key,m.props,null,f.mode,v),v.ref=xn(f,c,m),v.return=f,f=v)}return a(f);case Mt:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yi(m,f.mode,v),c.return=f,f=c}return a(f);case Je:return z=m._init,A(f,c,z(m._payload),v)}if(kn(m))return k(f,c,m,v);if(pn(m))return b(f,c,m,v);hr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=Qi(m,f.mode,v),c.return=f,f=c),a(f)):n(f,c)}return A}var nn=su(!0),uu=su(!1),Qr=gt(null),Yr=null,Vt=null,pl=null;function fl(){pl=Vt=Yr=null}function ml(e){var t=Qr.current;D(Qr),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Yr=e,pl=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(pl!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Yr===null)throw Error(y(308));Vt=e,Yr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var jt=null;function hl(e){jt===null?jt=[e]:jt.push(e)}function cu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var i=e.updateQueue;et=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;a=0,x=d=u=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){x!==null&&(x=x.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,b=s;switch(h=t,w=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){g=k.call(w,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,h=typeof k=="function"?k.call(w,g,h):k,h==null)break e;g=H({},g,h);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=w,u=g):x=x.next=w,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(x===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_t|=a,e.lanes=a,e.memoizedState=g}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var er={},Ue=gt(er),Vn=gt(er),Wn=gt(er);function Nt(e){if(e===er)throw Error(y(174));return e}function xl(e,t){switch(R(Wn,t),R(Vn,e),R(Ue,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oo(t,e)}D(Ue),R(Ue,t)}function rn(){D(Ue),D(Vn),D(Wn)}function pu(e){Nt(Wn.current);var t=Nt(Ue.current),n=oo(t,e.type);t!==n&&(R(Vn,e),R(Ue,n))}function vl(e){Vn.current===e&&(D(Ue),D(Vn))}var U=gt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function yl(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var Er=Ge.ReactCurrentDispatcher,Ui=Ge.ReactCurrentBatchConfig,Pt=0,B=null,K=null,Z=null,Xr=!1,Pn=!1,Qn=0,ip=0;function re(){throw Error(y(321))}function wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function kl(e,t,n,r,i,o){if(Pt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?sp:up,e=n(r,i),Pn){o=0;do{if(Pn=!1,Qn=0,25<=o)throw Error(y(301));o+=1,Z=K=null,t.updateQueue=null,Er.current=cp,e=n(r,i)}while(Pn)}if(Er.current=Gr,t=K!==null&&K.next!==null,Pt=0,Z=K=B=null,Xr=!1,t)throw Error(y(300));return e}function bl(){var e=Qn!==0;return Qn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,u=null,d=o;do{var x=d.lane;if((Pt&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,B.lanes|=x,_t|=x}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=s,Re(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,_t|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Re(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function mu(e,t){var n=B,r=Ee(),i=t(),o=!Re(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,jl(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,qn(9,gu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(y(349));Pt&30||hu(n,t,i)}return i}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function xu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function yu(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Na(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,B,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return Ee().memoizedState}function Cr(e,t,n,r){var i=De();B.flags|=e,i.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function ci(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(K!==null){var a=K.memoizedState;if(o=a.destroy,r!==null&&wl(r,a.deps)){i.memoizedState=qn(t,n,o,r);return}}B.flags|=e,i.memoizedState=qn(1|t,n,o,r)}function Sa(e,t){return Cr(8390656,8,e,t)}function jl(e,t){return ci(2048,8,e,t)}function ku(e,t){return ci(4,2,e,t)}function bu(e,t){return ci(4,4,e,t)}function ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,ju.bind(null,t,e),n)}function Nl(){}function Su(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Pt&21?(Re(n,t)||(n=Ls(),B.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function op(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ui.transition;Ui.transition={};try{e(!1),t()}finally{M=n,Ui.transition=r}}function Cu(){return Ee().memoizedState}function lp(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))_u(t,n);else if(n=cu(e,t,n,r),n!==null){var i=se();Me(n,e,r,i),Tu(n,t,r)}}function ap(e,t,n){var r=dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))_u(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Re(s,a)){var u=t.interleaved;u===null?(i.next=i,hl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=cu(e,t,i,r),n!==null&&(i=se(),Me(n,e,r,i),Tu(n,t,r))}}function Pu(e){var t=e.alternate;return e===B||t!==null&&t===B}function _u(e,t){Pn=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}var Gr={readContext:ze,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},sp={readContext:ze,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lp.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Na,useDebugValue:Nl,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Na(!1),t=e[0];return e=op.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=De();if(F){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Pt&30||hu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sa(xu.bind(null,r,o,e),[e]),r.flags|=2048,qn(9,gu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(F){var n=We,r=Ve;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:ze,useCallback:Su,useContext:ze,useEffect:jl,useImperativeHandle:Nu,useInsertionEffect:ku,useLayoutEffect:bu,useMemo:zu,useReducer:Bi,useRef:wu,useState:function(){return Bi(Yn)},useDebugValue:Nl,useDeferredValue:function(e){var t=Ee();return Eu(t,K.memoizedState,e)},useTransition:function(){var e=Bi(Yn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Cu,unstable_isNewReconciler:!1},cp={readContext:ze,useCallback:Su,useContext:ze,useEffect:jl,useImperativeHandle:Nu,useInsertionEffect:ku,useLayoutEffect:bu,useMemo:zu,useReducer:Hi,useRef:wu,useState:function(){return Hi(Yn)},useDebugValue:Nl,useDeferredValue:function(e){var t=Ee();return K===null?t.memoizedState=e:Eu(t,K.memoizedState,e)},useTransition:function(){var e=Hi(Yn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:mu,useId:Cu,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),o=Qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,i),t!==null&&(Me(t,e,i,r),zr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),o=Qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,i),t!==null&&(Me(t,e,i,r),zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=dt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,r),t!==null&&(Me(t,e,r,n),zr(t,e,r))}};function za(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(i,o):!0}function Lu(e,t,n){var r=!1,i=mt,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=me(t)?Et:le.current,r=t.contextTypes,o=(r=r!=null)?en(e,i):mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ea(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function Co(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=me(t)?Et:le.current,i.context=en(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&di.enqueueReplaceState(i,i.state,null),qr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function $u(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Ao=r),Po(e,t)},n}function Iu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Po(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ca(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function Pa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _a(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var pp=Ge.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?uu(t,null,n,r):nn(t,e.child,n,r)}function Ta(e,t,n,r,i){n=n.render;var o=t.ref;return Gt(t,i),r=kl(e,t,n,r,o,i),n=bl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&n&&ul(t),t.flags|=1,ae(e,t,r,i),t.child)}function La(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ll(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mu(e,t,o,r,i)):(e=Lr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(a,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return _o(e,t,n,r,i)}function Ru(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(Qt,ge),ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(Qt,ge),ge|=r;return ae(e,t,i,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,i){var o=me(n)?Et:le.current;return o=en(t,o),Gt(t,i),n=kl(e,t,n,r,o,i),r=bl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&r&&ul(t),t.flags|=1,ae(e,t,n,i),t.child)}function $a(e,t,n,r,i){if(me(n)){var o=!0;Hr(t)}else o=!1;if(Gt(t,i),t.stateNode===null)Pr(e,t),Lu(t,n,r),Co(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=me(n)?Et:le.current,d=en(t,d));var x=n.getDerivedStateFromProps,g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ea(t,a,r,d),et=!1;var h=t.memoizedState;a.state=h,qr(t,r,a,i),u=t.memoizedState,s!==r||h!==u||fe.current||et?(typeof x=="function"&&(Eo(t,n,x,r),u=t.memoizedState),(s=et||za(t,n,s,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,du(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:_e(t.type,s),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=me(n)?Et:le.current,u=en(t,u));var w=n.getDerivedStateFromProps;(x=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||h!==u)&&Ea(t,a,r,u),et=!1,h=t.memoizedState,a.state=h,qr(t,r,a,i);var k=t.memoizedState;s!==g||h!==k||fe.current||et?(typeof w=="function"&&(Eo(t,n,w,r),k=t.memoizedState),(d=et||za(t,n,d,r,h,k,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return To(e,t,n,r,o,i)}function To(e,t,n,r,i,o){Ou(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&va(t,n,!1),Xe(e,t,o);r=t.stateNode,pp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=nn(t,e.child,null,o),t.child=nn(t,null,s,o)):ae(e,t,s,o),t.memoizedState=r.state,i&&va(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xa(e,t.context,!1),xl(e,t.containerInfo)}function Ia(e,t,n,r,i){return tn(),dl(i),t.flags|=256,ae(e,t,n,r),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,i=U.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(U,i&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=mi(a,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$o(n),t.memoizedState=Lo,e):Sl(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return fp(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=pt(s,o):(o=zt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?$o(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&dl(r),nn(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(y(422))),gr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=mi({mode:"visible",children:r.children},i,0,null),o=zt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&nn(t,e.child,null,a),t.child.memoizedState=$o(a),t.memoizedState=Lo,o);if(!(t.mode&1))return gr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=Vi(o,r,void 0),gr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),Me(r,e,i,-1))}return Tl(),r=Vi(Error(y(421))),gr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xe=st(i.nextSibling),ve=t,F=!0,Le=null,e!==null&&(be[je++]=Ve,be[je++]=We,be[je++]=Ct,Ve=e.id,We=e.overflow,Ct=t),t=Sl(t,r.children),t.flags|=4096,t)}function Ma(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Wi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ma(e,n,t);else if(e.tag===19)Ma(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Kr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wi(t,!0,n,null,o);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:Du(t),tn();break;case 5:pu(t);break;case 1:me(t.type)&&Hr(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(Qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Au(e,t,n):(R(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return Xe(e,t,n)}var Uu,Io,Bu,Hu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Io=function(){};Bu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(Ue.current);var o=null;switch(n){case"input":i=to(e,i),r=to(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=io(e,i),r=io(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}lo(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&($n.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&($n.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Br(),ie(t),null;case 3:return r=t.stateNode,rn(),D(fe),D(le),yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Bo(Le),Le=null))),Io(e,t),ie(t),null;case 5:vl(t);var i=Nt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Bu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=Nt(Ue.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ae]=t,r[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<jn.length;i++)O(jn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Vl(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":Ql(r,o),O("invalid",r)}lo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),i=["children",""+s]):$n.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":or(r),Wl(r,o,!0);break;case"textarea":or(r),Yl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ae]=t,e[Hn]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ao(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<jn.length;i++)O(jn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Vl(e,r),i=to(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ql(e,r),i=io(e,r),O("invalid",e);break;default:i=r}lo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?ws(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($n.hasOwnProperty(o)?u!=null&&o==="onScroll"&&O("scroll",e):u!=null&&Ko(e,o,u,a))}switch(n){case"input":or(e),Wl(e,r,!1);break;case"textarea":or(e),Yl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Nt(Wn.current),Nt(Ue.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ie(t),null;case 13:if(D(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&xe!==null&&t.mode&1&&!(t.flags&128))au(),tn(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ae]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Le!==null&&(Bo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Tl())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return rn(),Io(e,t),e===null&&Un(t.stateNode.containerInfo),ie(t),null;case 10:return ml(t.type._context),ie(t),null;case 17:return me(t.type)&&Br(),ie(t),null;case 19:if(D(U),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)vn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Kr(e),a!==null){for(t.flags|=128,vn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>ln&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!F)return ie(t),null}else 2*Y()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=U.current,R(U,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return _l(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function gp(e,t){switch(cl(t),t.tag){case 1:return me(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),D(fe),D(le),yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vl(t),null;case 13:if(D(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(U),null;case 4:return rn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var xr=!1,oe=!1,xp=typeof WeakSet=="function"?WeakSet:Set,j=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Mo(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ra=!1;function vp(e,t){if(vo=Dr,e=qs(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,x=0,g=e,h=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(s=a+i),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(w=g.firstChild)!==null;)h=g,g=w;for(;;){if(g===e)break t;if(h===n&&++d===i&&(s=a),h===o&&++x===r&&(u=a),(w=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},Dr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,A=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:_e(t.type,b),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return k=Ra,Ra=!1,k}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mo(t,n,o)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Hn],delete t[bo],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}var ee=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:oe||Wt(n,t);case 6:var r=ee,i=Te;ee=null,Ze(e,t,n),ee=r,Te=i,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),Dn(e)):Di(ee,n.stateNode));break;case 4:r=ee,i=Te,ee=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),ee=r,Te=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Mo(n,t,a),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!oe&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ze(e,t,n),oe=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var i=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Te=!1;break e;case 3:ee=s.stateNode.containerInfo,Te=!0;break e;case 4:ee=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(ee===null)throw Error(y(160));Qu(o,a,i),ee=null,Te=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){V(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),r&4){try{_n(3,e,e.return),pi(3,e)}catch(b){V(e,e.return,b)}try{_n(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Pe(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(b){V(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hs(i,o),ao(s,a);var d=ao(s,o);for(a=0;a<u.length;a+=2){var x=u[a],g=u[a+1];x==="style"?ws(i,g):x==="dangerouslySetInnerHTML"?vs(i,g):x==="children"?In(i,g):Ko(i,x,g,d)}switch(s){case"input":no(i,o);break;case"textarea":gs(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Yt(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Yt(i,!!o.multiple,o.defaultValue,!0):Yt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Hn]=o}catch(b){V(e,e.return,b)}}break;case 6:if(Pe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){V(e,e.return,b)}}break;case 3:if(Pe(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cl=Y())),r&4&&Da(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||x,Pe(t,e),oe=d):Pe(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(j=e,x=e.child;x!==null;){for(g=j=x;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:_n(4,h,h.return);break;case 1:Wt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){V(r,n,b)}}break;case 5:Wt(h,h.return);break;case 22:if(h.memoizedState!==null){Fa(g);continue}}w!==null?(w.return=h,j=w):Fa(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{i=g.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ys("display",a))}catch(b){V(e,e.return,b)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){V(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Pe(t,e),Oe(e),r&4&&Da(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var o=Oa(e);Do(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Oa(e);Oo(e,s,a);break;default:throw Error(y(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,n){j=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xr;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||oe;s=xr;var d=oe;if(xr=a,(oe=u)&&!d)for(j=i;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Ua(i):u!==null?(u.return=a,j=u):Ua(i);for(;o!==null;)j=o,qu(o),o=o.sibling;j=i,xr=s,oe=d}Aa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Aa(e)}}function Aa(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ja(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&Dn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Ro(t)}catch(h){V(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Fa(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ua(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){V(t,i,u)}}var o=t.return;try{Ro(t)}catch(u){V(t,o,u)}break;case 5:var a=t.return;try{Ro(t)}catch(u){V(t,a,u)}}}catch(u){V(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var wp=Math.ceil,Zr=Ge.ReactCurrentDispatcher,zl=Ge.ReactCurrentOwner,Se=Ge.ReactCurrentBatchConfig,I=0,J=null,q=null,te=0,ge=0,Qt=gt(0),X=0,Kn=null,_t=0,fi=0,El=0,Tn=null,de=null,Cl=0,ln=1/0,Be=null,Jr=!1,Ao=null,ct=null,vr=!1,it=null,ei=0,Ln=0,Fo=null,_r=-1,Tr=0;function se(){return I&6?Y():_r!==-1?_r:_r=Y()}function dt(e){return e.mode&1?I&2&&te!==0?te&-te:rp.transition!==null?(Tr===0&&(Tr=Ls()),Tr):(e=M,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Me(e,t,n,r){if(50<Ln)throw Ln=0,Fo=null,Error(y(185));Gn(e,n,r),(!(I&2)||e!==J)&&(e===J&&(!(I&2)&&(fi|=n),X===4&&nt(e,te)),he(e,r),n===1&&I===0&&!(t.mode&1)&&(ln=Y()+500,ui&&xt()))}function he(e,t){var n=e.callbackNode;rd(e,t);var r=Or(e,e===J?te:0);if(r===0)n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xl(n),t===1)e.tag===0?np(Ba.bind(null,e)):iu(Ba.bind(null,e)),Zd(function(){!(I&6)&&xt()}),n=null;else{switch($s(r)){case 1:n=el;break;case 4:n=_s;break;case 16:n=Rr;break;case 536870912:n=Ts;break;default:n=Rr}n=nc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(_r=-1,Tr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ti(e,r);else{t=r;var i=I;I|=2;var o=Gu();(J!==e||te!==t)&&(Be=null,ln=Y()+500,St(e,t));do try{jp();break}catch(s){Xu(e,s)}while(!0);fl(),Zr.current=o,I=i,q!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(i=fo(e),i!==0&&(r=i,t=Uo(e,i))),t===1)throw n=Kn,St(e,0),nt(e,r),he(e,Y()),n;if(t===6)nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!kp(i)&&(t=ti(e,r),t===2&&(o=fo(e),o!==0&&(r=o,t=Uo(e,o))),t===1))throw n=Kn,St(e,0),nt(e,r),he(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,de,Be);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Cl+500-Y(),10<t)){if(Or(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ko(kt.bind(null,e,de,Be),t);break}kt(e,de,Be);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ie(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=ko(kt.bind(null,e,de,Be),r);break}kt(e,de,Be);break;case 5:kt(e,de,Be);break;default:throw Error(y(329))}}}return he(e,Y()),e.callbackNode===n?Ku.bind(null,e):null}function Uo(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=ti(e,t),e!==2&&(t=de,de=n,t!==null&&Bo(t)),e}function Bo(e){de===null?de=e:de.push.apply(de,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Re(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~El,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ba(e){if(I&6)throw Error(y(327));Zt();var t=Or(e,0);if(!(t&1))return he(e,Y()),null;var n=ti(e,t);if(e.tag!==0&&n===2){var r=fo(e);r!==0&&(t=r,n=Uo(e,r))}if(n===1)throw n=Kn,St(e,0),nt(e,t),he(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,Be),he(e,Y()),null}function Pl(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(ln=Y()+500,ui&&xt())}}function Tt(e){it!==null&&it.tag===0&&!(I&6)&&Zt();var t=I;I|=1;var n=Se.transition,r=M;try{if(Se.transition=null,M=1,e)return e()}finally{M=r,Se.transition=n,I=t,!(I&6)&&xt()}}function _l(){ge=Qt.current,D(Qt)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:rn(),D(fe),D(le),yl();break;case 5:vl(r);break;case 4:rn();break;case 13:D(U);break;case 19:D(U);break;case 10:ml(r.type._context);break;case 22:case 23:_l()}n=n.return}if(J=e,q=e=pt(e.current,null),te=ge=t,X=0,Kn=null,El=fi=_t=0,de=Tn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jt=null}return e}function Xu(e,t){do{var n=q;try{if(fl(),Er.current=Gr,Xr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xr=!1}if(Pt=0,Z=K=B=null,Pn=!1,Qn=0,zl.current=null,n===null||n.return===null){X=1,Kn=t,q=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var h=x.alternate;h?(x.updateQueue=h.updateQueue,x.memoizedState=h.memoizedState,x.lanes=h.lanes):(x.updateQueue=null,x.memoizedState=null)}var w=Pa(a);if(w!==null){w.flags&=-257,_a(w,a,s,o,t),w.mode&1&&Ca(o,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var b=new Set;b.add(u),t.updateQueue=b}else k.add(u);break e}else{if(!(t&1)){Ca(o,d,t),Tl();break e}u=Error(y(426))}}else if(F&&s.mode&1){var A=Pa(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),_a(A,a,s,o,t),dl(on(u,s));break e}}o=u=on(u,s),X!==4&&(X=2),Tn===null?Tn=[o]:Tn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=$u(o,u,t);ba(o,f);break e;case 1:s=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ct===null||!ct.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Iu(o,s,t);ba(o,v);break e}}o=o.return}while(o!==null)}Ju(n)}catch(N){t=N,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Gu(){var e=Zr.current;return Zr.current=Gr,e===null?Gr:e}function Tl(){(X===0||X===3||X===2)&&(X=4),J===null||!(_t&268435455)&&!(fi&268435455)||nt(J,te)}function ti(e,t){var n=I;I|=2;var r=Gu();(J!==e||te!==t)&&(Be=null,St(e,t));do try{bp();break}catch(i){Xu(e,i)}while(!0);if(fl(),I=n,Zr.current=r,q!==null)throw Error(y(261));return J=null,te=0,X}function bp(){for(;q!==null;)Zu(q)}function jp(){for(;q!==null&&!qc();)Zu(q)}function Zu(e){var t=tc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ju(e):q=t,zl.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=hp(n,t,ge),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=M,i=Se.transition;try{Se.transition=null,M=1,Np(e,t,n,r)}finally{Se.transition=i,M=r}return null}function Np(e,t,n,r){do Zt();while(it!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(id(e,o),e===J&&(q=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,nc(Rr,function(){return Zt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var a=M;M=1;var s=I;I|=4,zl.current=null,vp(e,n),Yu(n,e),Vd(yo),Dr=!!vo,yo=vo=null,e.current=n,yp(n),Kc(),I=s,M=a,Se.transition=o}else e.current=n;if(vr&&(vr=!1,it=e,ei=i),o=e.pendingLanes,o===0&&(ct=null),Zc(n.stateNode),he(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jr)throw Jr=!1,e=Ao,Ao=null,e;return ei&1&&e.tag!==0&&Zt(),o=e.pendingLanes,o&1?e===Fo?Ln++:(Ln=0,Fo=e):Ln=0,xt(),null}function Zt(){if(it!==null){var e=$s(ei),t=Se.transition,n=M;try{if(Se.transition=null,M=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ei=0,I&6)throw Error(y(331));var i=I;for(I|=4,j=e.current;j!==null;){var o=j,a=o.child;if(j.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(j=d;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:_n(8,x,o)}var g=x.child;if(g!==null)g.return=x,j=g;else for(;j!==null;){x=j;var h=x.sibling,w=x.return;if(Vu(x),x===d){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var k=o.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var A=b.sibling;b.sibling=null,b=A}while(b!==null)}}j=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,j=a;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_n(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,j=f;break e}j=o.return}}var c=e.current;for(j=c;j!==null;){a=j;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,j=m;else e:for(a=c;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pi(9,s)}}catch(N){V(s,s.return,N)}if(s===a){j=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}if(I=i,xt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{M=n,Se.transition=t}}return!1}function Ha(e,t,n){t=on(n,t),t=$u(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(Gn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)Ha(e,e,n);else for(;t!==null;){if(t.tag===3){Ha(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=on(n,e),e=Iu(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(Gn(t,1,e),he(t,e));break}}t=t.return}}function Sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Y()-Cl?St(e,0):El|=n),he(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=se();e=Ke(e,t),e!==null&&(Gn(e,t,n),he(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ec(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),ec(e,n)}var tc;tc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,mp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,F&&t.flags&1048576&&ou(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var i=en(t,le.current);Gt(t,n),i=kl(null,t,r,e,i,n);var o=bl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Hr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gl(t),i.updater=di,t.stateNode=i,i._reactInternals=t,Co(t,r,e,n),t=To(null,t,r,!0,o,n)):(t.tag=0,F&&o&&ul(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pp(r),e=_e(r,e),i){case 0:t=_o(null,t,r,e,n);break e;case 1:t=$a(null,t,r,e,n);break e;case 11:t=Ta(null,t,r,e,n);break e;case 14:t=La(null,t,r,_e(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),_o(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),$a(e,t,r,i,n);case 3:e:{if(Du(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,du(e,t),qr(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=on(Error(y(423)),t),t=Ia(e,t,r,n,i);break e}else if(r!==i){i=on(Error(y(424)),t),t=Ia(e,t,r,n,i);break e}else for(xe=st(t.stateNode.containerInfo.firstChild),ve=t,F=!0,Le=null,n=uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===i){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&So(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wo(r,i)?a=null:o!==null&&wo(r,o)&&(t.flags|=32),Ou(e,t),ae(e,t,a,n),t.child;case 6:return e===null&&So(t),null;case 13:return Au(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Ta(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,R(Qr,r._currentValue),r._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===i.children&&!fe.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),zo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),zo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gt(t,n),i=ze(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),La(e,t,r,i,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Pr(e,t),t.tag=1,me(r)?(e=!0,Hr(t)):e=!1,Gt(t,n),Lu(t,r,i),Co(t,r,i,n),To(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Ru(e,t,n)}throw Error(y(156,t.tag))};function nc(e,t){return Ps(e,t)}function Cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Cp(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Zo)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ll(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rt:return zt(n.children,i,o,t);case Xo:a=8,i|=8;break;case Gi:return e=Ne(12,n,t,i|2),e.elementType=Gi,e.lanes=o,e;case Zi:return e=Ne(13,n,t,i),e.elementType=Zi,e.lanes=o,e;case Ji:return e=Ne(19,n,t,i),e.elementType=Ji,e.lanes=o,e;case ps:return mi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cs:a=10;break e;case ds:a=9;break e;case Go:a=11;break e;case Zo:a=14;break e;case Je:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ps,e.lanes=n,e.stateNode={isHidden:!1},e}function Qi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,i,o,a,s,u){return e=new _p(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gl(o),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return mt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return ru(e,n,t)}return t}function ic(e,t,n,r,i,o,a,s,u){return e=$l(n,r,!0,e,i,o,a,s,u),e.context=rc(null),n=e.current,r=se(),i=dt(n),o=Qe(r,i),o.callback=t??null,ut(n,o,i),e.current.lanes=i,Gn(e,i,r),he(e,r),e}function hi(e,t,n,r){var i=t.current,o=se(),a=dt(i);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(i,t,a),e!==null&&(Me(e,i,a,o),zr(e,i,a)),a}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Il(e,t){Va(e,t),(e=e.alternate)&&Va(e,t)}function Lp(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ml(e){this._internalRoot=e}gi.prototype.render=Ml.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));hi(e,t,null,null)};gi.prototype.unmount=Ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){hi(null,e,null,null)}),t[qe]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ds(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function $p(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ni(a);o.call(d)}}var a=ic(t,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=a,e[qe]=a.current,Un(e.nodeType===8?e.parentNode:e),Tt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ni(u);s.call(d)}}var u=$l(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[qe]=u.current,Un(e.nodeType===8?e.parentNode:e),Tt(function(){hi(t,u,n,r)}),u}function vi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=ni(a);s.call(u)}}hi(t,a,e,i)}else a=$p(n,t,e,i,r);return ni(a)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(tl(t,n|1),he(t,Y()),!(I&6)&&(ln=Y()+500,xt()))}break;case 13:Tt(function(){var r=Ke(e,1);if(r!==null){var i=se();Me(r,e,1,i)}}),Il(e,1)}};nl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=se();Me(t,e,134217728,n)}Il(e,134217728)}};Ms=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var r=se();Me(n,e,t,r)}Il(e,t)}};Rs=function(){return M};Os=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};uo=function(e,t,n){switch(t){case"input":if(no(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=si(r);if(!i)throw Error(y(90));ms(r),no(r,i)}}}break;case"textarea":gs(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};js=Pl;Ns=Tt;var Ip={usingClientEntryPoint:!1,Events:[Jn,Ft,si,ks,bs,Pl]},yn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ii=yr.inject(Mp),Fe=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(t))throw Error(y(200));return Tp(e,t,null,n)};we.createRoot=function(e,t){if(!Rl(e))throw Error(y(299));var n=!1,r="",i=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,i),e[qe]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ml(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Es(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tt(e)};we.hydrate=function(e,t,n){if(!xi(t))throw Error(y(200));return vi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Rl(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=oc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ic(t,null,e,1,n??null,i,!1,o,a),e[qe]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gi(t)};we.render=function(e,t,n){if(!xi(t))throw Error(y(200));return vi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!xi(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};we.unstable_batchedUpdates=Pl;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),ls.exports=we;var Rp=ls.exports,Qa=Rp;Ki.createRoot=Qa.createRoot,Ki.hydrateRoot=Qa.hydrateRoot;const p={bg:"#ffffff",bgAlt:"#ffffff",green:"#27c927",greenLight:"#52df52",greenDim:"#1e9f1e",greenGlow:"rgba(39,201,39,0.12)",textPrimary:"#191712",textSecondary:"#5f5a52",textMuted:"#7d766d",border:"rgba(25,23,18,0.1)",borderHover:"rgba(39,201,39,0.3)"};function ac(e=.15){const t=$e.useRef(null),[n,r]=$e.useState(!1);return $e.useEffect(()=>{const i=t.current;if(!i)return;const o=new IntersectionObserver(([a])=>{a.isIntersecting&&(r(!0),o.disconnect())},{threshold:e});return o.observe(i),()=>o.disconnect()},[e]),[t,n]}function _({children:e,delay:t=0,direction:n="up",className:r=""}){const[i,o]=ac(.1),a={up:"translateY(40px)",down:"translateY(-40px)",left:"translateX(40px)",right:"translateX(-40px)",none:"none"};return l.jsx("div",{ref:i,className:r,style:{opacity:o?1:0,transform:o?"none":a[n],transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${t}s`},children:e})}function wr({end:e,suffix:t="",duration:n=2e3}){const[r,i]=$e.useState(e),[o,a]=ac(.3);return $e.useEffect(()=>{if(!a)return;let s=0;const u=e/(n/16),d=setInterval(()=>{s+=u,s>=e?(i(e),clearInterval(d)):i(Math.floor(s))},16);return()=>clearInterval(d)},[a,e,n]),l.jsxs("span",{ref:o,children:[r.toLocaleString(),t]})}const Op=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: ${p.bg};
    color: ${p.textPrimary};
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
    color: ${p.textPrimary};
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .marquee-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${p.green};
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
    border-bottom: 1px solid ${p.border};
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
    color: ${p.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
    letter-spacing: 0.01em;
  }

  .nav-link:hover {
    color: ${p.textPrimary};
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
    background: ${p.bgAlt};
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
    color: ${p.textPrimary};
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    text-align: left;
  }

  .hero-line { display: block; }
  .hero-line.middle {
    color: ${p.green};
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
    color: ${p.textPrimary};
  }

  .hero-offer-title span {
    font-size: clamp(21px, 2.2vw, 29px);
    color: ${p.green};
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${p.green};
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
    background: ${p.greenDim};
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
    color: ${p.textMuted};
  }

  .trust-check {
    width: 16px;
    height: 16px;
    color: ${p.green};
    flex-shrink: 0;
  }

  /* ── Stats strip (light) ── */
  .stats-strip {
    position: relative;
    z-index: 5;
    padding: 48px 24px;
    border-top: 1px solid ${p.border};
    border-bottom: 1px solid ${p.border};
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
    background: ${p.border};
  }

  .stat-number {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 48px);
    letter-spacing: -2px;
    color: ${p.green};
    margin-bottom: 6px;
    display: block;
  }

  .stat-label {
    font-size: 13px;
    color: ${p.textMuted};
    font-weight: 500;
  }

  /* ── Section common ── */
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    color: ${p.green};
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .eyebrow-line {
    width: 24px;
    height: 2px;
    background: ${p.green};
    border-radius: 2px;
    opacity: 0.35;
  }

  .section-heading {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(34px, 5vw, 60px);
    letter-spacing: -1.8px;
    color: ${p.textPrimary};
    line-height: 1.05;
    margin-bottom: 20px;
  }

  .section-desc {
    font-size: 17px;
    color: ${p.textSecondary};
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
    color: ${p.green};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    width: fit-content;
  }

  .product-name {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: clamp(28px, 3vw, 38px);
    letter-spacing: -1.2px;
    color: ${p.textPrimary};
    line-height: 1.1;
  }

  .product-desc {
    font-size: 16px;
    line-height: 1.7;
    color: ${p.textSecondary};
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
    color: ${p.textSecondary};
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
    color: ${p.green};
    font-size: 11px;
  }

  .product-cta:hover { gap: 12px; color: #000; }

  /* ── Mockup window ── */
  .product-mockup {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${p.border};
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
    background: ${p.green};
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
    color: ${p.textPrimary};
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
    color: ${p.textPrimary};
    margin-bottom: 4px;
  }

  .mock-labs-sub {
    font-size: 9px;
    color: ${p.textMuted};
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
    color: ${p.textPrimary};
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .mock-labs-card-meta {
    font-size: 7px;
    color: ${p.textMuted};
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
    color: ${p.textPrimary};
  }

  .mock-talks-logo span { color: ${p.green}; }

  .mock-talks-sort {
    font-size: 9px;
    color: ${p.textMuted};
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
    color: ${p.textPrimary};
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .mock-talks-card-date {
    font-size: 7px;
    color: ${p.textMuted};
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
    color: ${p.textMuted};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .promo-kicker-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p.green};
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

  .promo-title span { color: ${p.textPrimary}; }
  .promo-title .green-text { color: ${p.green}; }

  .promo-desc {
    max-width: 620px;
    font-size: 17px;
    line-height: 1.75;
    color: ${p.textSecondary};
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
    color: ${p.greenDim};
    flex-shrink: 0;
  }

  .promo-point strong {
    display: block;
    font-size: 15px;
    color: ${p.textPrimary};
    margin-bottom: 4px;
  }

  .promo-point span {
    font-size: 13px;
    line-height: 1.6;
    color: ${p.textSecondary};
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
      ${p.bgAlt};
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
    color: ${p.textMuted};
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
    color: ${p.greenDim};
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
    background: linear-gradient(180deg, ${p.greenLight}, rgba(39,201,39,0.25));
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
    color: ${p.textPrimary};
    font-size: 20px;
    margin-bottom: 4px;
  }

  .signal-card span {
    font-size: 12px;
    color: ${p.textSecondary};
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
    color: ${p.textPrimary};
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
    color: ${p.textPrimary};
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(15,23,42,0.1);
    z-index: 2;
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-play {
    background: ${p.green};
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
    background: ${p.green};
    color: #041204;
    font-size: 12px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .vsl-card:hover .vsl-center-icon {
    background: #000;
    color: ${p.green};
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
    background: ${p.bg};
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
    color: ${p.green};
    background: rgba(39,201,39,0.06);
    border: 1px solid rgba(39,201,39,0.12);
    transition: all 0.3s ease;
  }

  .step-card:hover .step-num {
    background: ${p.green};
    color: #000;
    border-color: ${p.green};
    box-shadow: 0 0 30px rgba(39,201,39,0.2);
    transform: scale(1.05);
  }

  .step-title {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${p.textPrimary};
    margin-bottom: 8px;
  }

  .step-desc {
    font-size: 14px;
    color: ${p.textSecondary};
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
    border: 1px solid ${p.border};
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
    background: linear-gradient(90deg, transparent, ${p.green}, transparent);
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
    color: ${p.textSecondary};
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
    color: ${p.green};
  }

  .t-name {
    font-weight: 600;
    font-size: 14px;
    color: ${p.textPrimary};
  }

  .t-role {
    font-size: 12px;
    color: ${p.textMuted};
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

  @media (max-width: 600px) {
    .b2b-upsell { padding: 56px 20px; gap: 16px; }
    .b2b-tags { flex-direction: column; align-items: center; }
    .b2b-tag { white-space: normal; text-align: center; }
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
    color: ${p.textPrimary};
    margin-bottom: 16px;
    position: relative;
    line-height: 1.05;
  }

  .final-cta-title .green-text { color: ${p.green}; }

  .final-cta-sub {
    font-size: 18px;
    color: ${p.textSecondary};
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
    color: ${p.textSecondary};
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(10px);
    border: 1px solid ${p.border};
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
    background: ${p.green};
    border-radius: 50%;
    flex-shrink: 0;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${p.textSecondary};
    text-decoration: none;
    padding: 16px 24px;
    border-radius: 14px;
    border: 1px solid ${p.border};
    transition: all 0.3s ease;
    background: transparent;
  }

  .btn-secondary:hover {
    color: ${p.textPrimary};
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
    border-top: 1px solid ${p.border};
    font-size: 13px;
    color: ${p.textMuted};
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: ${p.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover { color: ${p.green}; }

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
    border: 1px solid ${p.border};
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
    color: ${p.textPrimary};
    margin-bottom: 8px;
  }

  .obj-answer {
    font-size: 14px;
    color: ${p.textSecondary};
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
    .howto { padding: 40px 20px 80px; }
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

  /* ── Problem / Pain section ── */
  .problem-section {
    position: relative;
    z-index: 5;
    background: #f9f9f7;
    border-top: 1px solid ${p.border};
    border-bottom: 1px solid ${p.border};
    padding: 80px 48px;
  }
  .problem-inner { max-width: 1100px; margin: 0 auto; }
  .problem-header { text-align: center; margin-bottom: 56px; }
  .pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .pain-card {
    background: #fff;
    border: 1px solid ${p.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s ease;
  }
  .pain-card:hover { border-color: rgba(239,68,68,0.15); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(239,68,68,0.04); }
  .pain-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(239,68,68,0.06); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
  .pain-title { font-weight: 700; font-size: 16px; color: ${p.textPrimary}; margin-bottom: 6px; }
  .pain-desc { font-size: 14px; color: ${p.textSecondary}; line-height: 1.65; }

  /* ── "¿Para quién es?" ── */
  .for-whom { position: relative; z-index: 5; max-width: 1100px; margin: 0 auto; padding: 80px 48px 100px; }
  .for-whom-header { text-align: center; margin-bottom: 56px; }
  .for-whom-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px; }
  .for-whom-card {
    background: rgba(255,255,255,0.88);
    border: 1px solid ${p.border};
    border-radius: 20px;
    padding: 28px 32px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;
  }
  .for-whom-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(39,201,39,0.06); }
  .for-whom-check { width: 28px; height: 28px; border-radius: 8px; background: rgba(39,201,39,0.1); display: flex; align-items: center; justify-content: center; color: ${p.green}; font-size: 13px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
  .for-whom-title { font-size: 16px; font-weight: 700; color: ${p.textPrimary}; margin-bottom: 4px; }
  .for-whom-desc { font-size: 14px; color: ${p.textSecondary}; line-height: 1.6; }
  .not-for-whom { background: rgba(249,249,247,0.8); border: 1px solid ${p.border}; border-radius: 20px; padding: 24px 32px; text-align: center; }
  .not-for-whom-title { font-size: 12px; font-weight: 700; color: ${p.textMuted}; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
  .not-for-list { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .not-for-item { font-size: 13px; color: ${p.textMuted}; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.1); padding: 6px 14px; border-radius: 999px; }

  /* ── Value stack ── */
  .value-stack { position: relative; z-index: 5; max-width: 780px; margin: 0 auto; padding: 0 48px 100px; text-align: center; }
  .value-stack-header { margin-bottom: 40px; }
  .value-items { display: flex; flex-direction: column; border: 1px solid ${p.border}; border-radius: 20px; overflow: hidden; margin-bottom: 16px; }
  .value-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(255,255,255,0.9); border-bottom: 1px solid ${p.border}; gap: 12px; }
  .value-item:last-child { border-bottom: none; }
  .value-item-name { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: ${p.textPrimary}; flex: 1; flex-wrap: wrap; }
  .value-item-badge { font-size: 9px; font-weight: 700; color: ${p.green}; background: rgba(39,201,39,0.1); border: 1px solid rgba(39,201,39,0.15); padding: 3px 8px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }
  .value-item-price { font-size: 13px; font-weight: 700; color: ${p.textMuted}; text-decoration: line-through; white-space: nowrap; }
  .value-total { background: rgba(39,201,39,0.05); border: 1px solid rgba(39,201,39,0.15); border-radius: 16px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
  .value-total-label { font-size: 16px; font-weight: 700; color: ${p.textPrimary}; }
  .value-total-price { display: flex; align-items: baseline; gap: 10px; }
  .value-total-was { font-size: 15px; font-weight: 600; color: ${p.textMuted}; text-decoration: line-through; }
  .value-total-now { font-size: 30px; font-weight: 800; color: ${p.green}; letter-spacing: -1px; }
  .value-total-period { font-size: 12px; color: ${p.textMuted}; }

  /* ── Compact modules mini grid ── */
  .modules-grid-section { padding: 0 0 20px; }
  .modules-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
  .module-mini-card { background: rgba(255,255,255,0.88); border: 1px solid ${p.border}; border-radius: 20px; padding: 28px; transition: all 0.3s ease; display: flex; flex-direction: column; gap: 12px; }
  .module-mini-card:hover { border-color: rgba(39,201,39,0.2); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(39,201,39,0.06); }
  .module-mini-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); font-size: 10px; font-weight: 700; color: ${p.green}; letter-spacing: 1.5px; text-transform: uppercase; width: fit-content; }
  .module-mini-name { font-weight: 800; font-size: 20px; color: ${p.textPrimary}; letter-spacing: -0.5px; }
  .module-mini-desc { font-size: 14px; color: ${p.textSecondary}; line-height: 1.6; }
  .module-mini-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: ${p.green}; text-decoration: none; margin-top: auto; }
  .module-mini-link:hover { opacity: 0.75; }

  /* ── Testimonial improvements ── */
  .t-avatar-img { width: 42px; height: 42px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
  .t-company { font-size: 11px; color: ${p.textMuted}; margin-top: 1px; }
  .t-result { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: ${p.green}; background: rgba(39,201,39,0.08); border: 1px solid rgba(39,201,39,0.15); padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }

  /* ── Full footer ── */
  .footer-full { position: relative; z-index: 5; border-top: 1px solid ${p.border}; padding: 48px 48px 32px; }
  .footer-top { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid ${p.border}; margin-bottom: 28px; }
  .footer-brand p { font-size: 13px; color: ${p.textMuted}; line-height: 1.6; margin-top: 12px; max-width: 240px; }
  .footer-brand img { height: 28px; width: auto; }
  .footer-col-title { font-size: 11px; font-weight: 700; color: ${p.textPrimary}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
  .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
  .footer-col-links a { font-size: 13px; color: ${p.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-col-links a:hover { color: ${p.green}; }
  .footer-social { display: flex; gap: 8px; margin-top: 16px; }
  .footer-social a { width: 34px; height: 34px; border-radius: 10px; background: rgba(25,23,18,0.05); border: 1px solid ${p.border}; display: flex; align-items: center; justify-content: center; color: ${p.textMuted}; text-decoration: none; transition: all 0.2s ease; }
  .footer-social a:hover { background: rgba(39,201,39,0.08); border-color: rgba(39,201,39,0.2); color: ${p.green}; }
  .footer-bottom { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: ${p.textMuted}; }
  .footer-legal { display: flex; gap: 20px; }
  .footer-legal a { color: ${p.textMuted}; text-decoration: none; transition: color 0.2s ease; }
  .footer-legal a:hover { color: ${p.green}; }

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
    border: 1px solid ${p.border};
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
    padding: 210px 16px 130px;
    max-width: 980px;
    grid-template-columns: unset !important;
  }

  .hero-anchor-proof {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    color: ${p.textMuted};
    margin-bottom: 36px;
    letter-spacing: 0;
  }

  .hero-anchor-proof strong {
    color: ${p.textPrimary};
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
    color: ${p.greenDim};
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

  .hero-line.top, .hero-line.bottom { color: ${p.textPrimary} !important; }
  .hero-line.middle { color: ${p.green} !important; }

  .hero-subtext {
    font-size: clamp(16px, 1.4vw, 18px);
    color: ${p.textSecondary};
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
    background: ${p.green};
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

  .btn-hero:hover { transform: translateY(-2px); background: ${p.greenDim}; }
  .btn-hero:active { transform: scale(0.98); }
  .btn-hero:hover .btn-arrow { transform: translateX(3px); }

  .hero-video-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${p.textMuted};
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .hero-video-trigger:hover { color: ${p.textPrimary}; }

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
    .hero { padding: 140px 20px 88px; }
    .hero-headline { font-size: clamp(38px, 9vw, 54px) !important; letter-spacing: -2px !important; }
    .hero-subtext { font-size: 15px; margin-bottom: 36px !important; }
    .btn-hero { min-width: 0; width: 100%; font-size: 17px; min-height: 62px; }
    .hero-trust { gap: 12px; }
    .shorts-grid { grid-template-columns: 1fr !important; max-width: 320px !important; }
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
    border: 1px solid ${p.border};
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
  }
  .comparison-row {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: center;
    padding: 16px 28px;
    border-bottom: 1px solid ${p.border};
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
    color: ${p.textMuted};
    padding: 12px 28px;
  }
  .comparison-row.comp-highlight {
    background: rgba(39,201,39,0.04);
    border-top: 1px solid rgba(39,201,39,0.12);
    border-bottom: 1px solid rgba(39,201,39,0.12);
  }
  .comp-tool { font-size: 14px; font-weight: 600; color: ${p.textPrimary}; }
  .comparison-row.comp-highlight .comp-tool { color: ${p.green}; font-weight: 700; }
  .comp-price { font-size: 13px; color: ${p.textSecondary}; }
  .comparison-row.comp-highlight .comp-price { font-size: 14px; font-weight: 700; color: ${p.green}; }
  .comp-learns { font-size: 14px; color: rgba(25,23,18,0.18); text-align: center; }
  .comparison-row.comp-highlight .comp-learns { color: ${p.green}; font-weight: 700; font-size: 17px; }
  @media (max-width: 640px) {
    .comparison-section { padding: 60px 20px; }
    .comparison-row { grid-template-columns: 1.2fr 1fr 0.5fr; padding: 14px 16px; }
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
    color: ${p.textMuted};
    width: 100%;
    text-align: center;
    margin-bottom: 4px;
  }

  .hero-sponsor-name {
    font-size: 12px;
    font-weight: 600;
    color: ${p.textMuted};
    opacity: 0.55;
    letter-spacing: 0.5px;
    padding: 4px 12px;
    border: 1px solid ${p.border};
    border-radius: 6px;
    transition: opacity 0.2s ease;
  }

  .hero-sponsor-name:hover { opacity: 0.85; }

  /* ════════════════════════════════
     DIFFERENTIATOR TIMELINE
     ════════════════════════════════ */
  .diff-section {
    padding: 100px 48px;
    background: ${p.dark};
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
    color: ${p.green};
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
    color: ${p.green};
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
    color: ${p.green};
  }

  @media (max-width: 768px) {
    .diff-section { padding: 72px 20px; }
    .diff-timeline { flex-direction: column; gap: 16px; }
    .diff-arrow { transform: rotate(90deg); margin: 0 auto; padding: 4px 0; }
    .diff-step { width: 100%; }
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
    color: ${p.green};
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
`,Dp=[{stars:5,quote:"En 3 semanas, Profit120 ya entendía mi negocio mejor que mi contador. El análisis de flujo de caja me ahorró $47,000 pesos en decisiones que iba a tomar mal.",name:"Carlos Mendoza",role:"Dueño",company:"Restaurante La Trattoria, CDMX",result:"$47,000 pesos ahorrados",initials:"CM",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"},{stars:5,quote:"Lo probé como invitada por curiosidad. A los 5 días ya tenía a mi equipo de 8 personas usando BRAIN todos los días. La sección de finanzas sola vale la suscripción.",name:"Ana López",role:"Fundadora",company:"NovaTienda (e-commerce), Monterrey",result:"8 personas activas en 5 días",initials:"AL",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"},{stars:5,quote:"Mi agencia llevaba 2 años sin estructura financiera real. Con Profit BRAIN armé mi centro de costos y estrategia de precios en una tarde. Literal.",name:"Roberto Solís",role:"Director",company:"Agencia Creativa Pixel, Guadalajara",result:"Estructura financiera en 1 tarde",initials:"RS",img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"}],Ya=["Tu empresa entrena su propio cerebro de IA","60 días sin costo","Sin tarjeta de crédito","Todo tu equipo incluido","+200 herramientas empresariales","Promoción por tiempo limitado"],qa=()=>l.jsxs("svg",{className:"trust-check",viewBox:"0 0 16 16",fill:"none",children:[l.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.2"}),l.jsx("path",{d:"M5 8.5l2 2 4-4",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),qi=()=>l.jsxs("svg",{viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:[l.jsx("path",{d:"M3.75 14.25 13.2 4.8",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round"}),l.jsx("path",{d:"M7.2 4.8h6v6",stroke:"currentColor",strokeWidth:"2.7",strokeLinecap:"round",strokeLinejoin:"round"})]});function Ap(){const[e,t]=$e.useState(!1),[n,r]=$e.useState(null);return $e.useEffect(()=>{const i=()=>t(window.scrollY>20);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{children:Op}),l.jsxs("div",{className:"page",children:[l.jsx("div",{className:"marquee-strip",children:l.jsx("div",{className:"marquee-track",children:[...Ya,...Ya].map((i,o)=>l.jsxs("span",{className:"marquee-item",children:[l.jsx("span",{className:"marquee-dot"}),i]},o))})}),l.jsxs("nav",{className:`nav${e?" scrolled":""}`,children:[l.jsx("div",{className:"nav-logo",children:l.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"})}),l.jsxs("div",{className:"nav-links",children:[l.jsx("a",{href:"#como-funciona",className:"nav-link",children:"Cómo funciona"}),l.jsx("a",{href:"#productos",className:"nav-link",children:"Módulos"}),l.jsx("a",{href:"#testimonios",className:"nav-link",children:"Testimonios"})]}),l.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"nav-cta",target:"_blank",rel:"noopener noreferrer",children:["Activa tu cerebro de IA ",l.jsx("span",{children:"→"})]})]}),l.jsxs("section",{className:"hero",children:[l.jsx(_,{delay:.05,children:l.jsxs("h1",{className:"hero-headline",children:[l.jsx("span",{className:"hero-line top",children:"Tu empresa merece"}),l.jsx("span",{className:"hero-line middle",children:"su propio cerebro de IA."})]})}),l.jsx(_,{delay:.1,children:l.jsx("p",{className:"hero-subtext",children:"Cada uso la hace más inteligente sobre tu negocio. Finanzas, ventas, marketing, operaciones y RRHH — todo en un solo lugar, para ti y todo tu equipo."})}),l.jsx(_,{delay:.15,children:l.jsxs("div",{className:"hero-cta-block",children:[l.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-hero",target:"_blank",rel:"noopener noreferrer",children:["Entrena el cerebro de tu empresa — 60 días gratis",l.jsx("span",{className:"btn-arrow",children:l.jsx(qi,{})})]}),l.jsxs("button",{className:"hero-video-trigger",onClick:()=>r("HswRHEFk6oA"),children:[l.jsx("span",{className:"hero-play-circle",children:l.jsx("svg",{viewBox:"0 0 12 12",fill:p.green,width:"10",height:"10",children:l.jsx("path",{d:"M3 2l7 4-7 4V2z"})})}),"Ver cómo funciona (2 min)"]})]})}),l.jsx(_,{delay:.2,children:l.jsxs("div",{className:"hero-trust",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx(qa,{})," 60 días sin costo — sin tarjeta de crédito"]}),l.jsxs("div",{className:"trust-item",children:[l.jsx(qa,{})," Todo tu equipo incluido — sin límite de usuarios"]})]})})]}),n&&l.jsx("div",{className:"hero-video-modal",onClick:()=>r(null),children:l.jsxs("div",{className:"hero-video-modal-inner",onClick:i=>i.stopPropagation(),children:[l.jsx("button",{className:"hero-video-modal-close",onClick:()=>r(null),children:"✕"}),l.jsx("iframe",{src:`https://www.youtube.com/embed/${n}?rel=0&modestbranding=1&playsinline=1&autoplay=1`,title:"Profit120 video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})}),l.jsx("section",{style:{padding:"80px 48px",borderTop:`1px solid ${p.border}`,borderBottom:`1px solid ${p.border}`},children:l.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center"},children:[l.jsx(_,{delay:0,direction:"right",children:l.jsx("div",{style:{position:"relative",borderRadius:20,overflow:"hidden",aspectRatio:"16 / 9",background:"#000",boxShadow:`0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px ${p.border}`},children:l.jsx("iframe",{src:"https://www.youtube.com/embed/HswRHEFk6oA?rel=0&modestbranding=1&playsinline=1",title:"Profit120 — Ve cómo funciona",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"}})})}),l.jsx(_,{delay:.1,direction:"left",children:l.jsxs("div",{children:[l.jsxs("div",{className:"section-eyebrow",style:{justifyContent:"flex-start",marginBottom:20},children:[l.jsx("span",{className:"eyebrow-line"}),"Ve en acción"]}),l.jsxs("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:16},children:["2 minutos que",l.jsx("br",{}),"lo explican todo."]}),l.jsx("p",{style:{fontSize:16,color:p.textSecondary,lineHeight:1.7,marginBottom:28},children:"Ve qué es Profit120, cómo funciona su IA y por qué no es una herramienta más — es el cerebro que tu empresa necesitaba."}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:["Qué son los 5 módulos y para qué sirven","Cómo la IA aprende de tu empresa con cada uso","Por qué 60 días es todo lo que necesitas para comprobarlo"].map((i,o)=>l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[l.jsx("span",{style:{width:22,height:22,borderRadius:"50%",background:p.greenGlow,border:`1px solid ${p.borderHover}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1},children:l.jsx("svg",{viewBox:"0 0 12 12",fill:p.green,width:"8",height:"8",children:l.jsx("path",{d:"M2 6l3 3 5-5",stroke:p.green,strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})})}),l.jsx("span",{style:{fontSize:15,color:p.textSecondary,lineHeight:1.5},children:i})]},o))})]})})]})}),l.jsx("section",{className:"stats-strip",children:l.jsxs("div",{className:"stats-strip-inner",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-number",children:l.jsx(wr,{end:5})}),l.jsx("span",{className:"stat-label",children:"Módulos incluidos en tu prueba"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-number",children:l.jsx(wr,{end:60,suffix:" días"})}),l.jsx("span",{className:"stat-label",children:"Sin costo — para todo tu equipo"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-number",children:l.jsx(wr,{end:24,suffix:"/7"})}),l.jsx("span",{className:"stat-label",children:"Consultor IA disponible"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-number",children:l.jsx(wr,{end:20,suffix:" min"})}),l.jsx("span",{className:"stat-label",children:"Para resolver problemas reales"})]})]})}),l.jsx("section",{className:"problem-section",children:l.jsxs("div",{className:"problem-inner",children:[l.jsxs("div",{className:"problem-header",children:[l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"section-eyebrow",children:[l.jsx("span",{className:"eyebrow-line"}),"El problema",l.jsx("span",{className:"eyebrow-line"})]})}),l.jsx(_,{delay:.1,children:l.jsx("h2",{className:"section-heading",children:"¿Tu empresa opera a ciegas?"})})]}),l.jsx("div",{className:"pain-grid",children:[{icon:"🎯",title:"Decides con instinto, no con datos.",desc:"Sin información confiable, cada decisión es una apuesta."},{icon:"🐢",title:"Tu contador llega tarde y cobra caro.",desc:"Para cuando recibes el reporte, el momento ya pasó."},{icon:"🧩",title:"Cada área opera en silos.",desc:"Ventas, finanzas y marketing no se hablan. La empresa no funciona como sistema."},{icon:"🔁",title:"ChatGPT empieza desde cero cada vez.",desc:"Eso no es inteligencia — es pérdida de tiempo disfrazada de productividad."}].map((i,o)=>l.jsx(_,{delay:.08*o,children:l.jsxs("div",{className:"pain-card",children:[l.jsx("div",{className:"pain-icon",children:i.icon}),l.jsxs("div",{children:[l.jsx("div",{className:"pain-title",children:i.title}),l.jsx("div",{className:"pain-desc",children:i.desc})]})]})},o))}),l.jsx(_,{delay:.2,children:l.jsx("div",{style:{textAlign:"center",marginTop:48},children:l.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-secondary",target:"_blank",rel:"noopener noreferrer",children:"Conoce una mejor forma →"})})})]})}),l.jsxs("section",{className:"features",id:"productos",children:[l.jsxs("div",{className:"features-header",children:[l.jsx(_,{delay:.1,children:l.jsxs("h2",{className:"section-heading",children:["5 módulos. Un solo objetivo:",l.jsx("br",{}),"hacer crecer tu empresa."]})}),l.jsx(_,{delay:.15,children:l.jsx("p",{className:"section-desc",children:"Cada módulo resuelve un problema real de tu negocio. Con tus 60 días sin costo, desbloqueas los 5 desde el primer minuto. Y cada uno alimenta tu cerebro de IA — mientras más usas, más te conoce."})})]}),l.jsx(_,{delay:0,children:l.jsxs("div",{className:"product-row",children:[l.jsxs("div",{className:"product-info",children:[l.jsx("div",{className:"product-badge",children:"IA"}),l.jsx("h3",{className:"product-name",children:"Profit BRAIN"}),l.jsx("p",{className:"product-desc",children:"Tu centro de mando inteligente. Más de 200 herramientas de IA que analizan, proyectan y aceleran las decisiones de tu empresa."}),l.jsxs("div",{className:"product-features-list",children:[l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," +200 herramientas organizadas por área"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Buscador inteligente que te recomienda la herramienta correcta"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Finanzas, Marketing, Ventas, RRHH, Operaciones, Liderazgo y más"]})]}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/tools",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Explorar herramientas →"})]}),l.jsxs("div",{className:"product-mockup",children:[l.jsxs("div",{className:"mockup-bar",children:[l.jsx("span",{className:"mockup-dot red"}),l.jsx("span",{className:"mockup-dot yellow"}),l.jsx("span",{className:"mockup-dot green"}),l.jsx("span",{className:"mockup-url",children:"app.profit120.com/brain"})]}),l.jsxs("div",{className:"mock-brain",children:[l.jsxs("div",{className:"mock-brain-header",children:[l.jsx("div",{className:"mock-brain-title",children:"Tu propio PROFIT BRAIN"}),l.jsx("div",{className:"mock-brain-sub",children:"Selecciona la categoría con la que te gustaría comenzar"})]}),l.jsxs("div",{className:"mock-brain-tabs",children:[l.jsx("span",{className:"mock-brain-tab active",children:"Inicio 202"}),l.jsx("span",{className:"mock-brain-tab",children:"Finanzas 3"}),l.jsx("span",{className:"mock-brain-tab",children:"Marketing 42"}),l.jsx("span",{className:"mock-brain-tab",children:"Ventas 29"})]}),l.jsx("div",{className:"mock-brain-search",children:"Escribe tu pregunta o necesidad..."}),l.jsxs("div",{className:"mock-brain-cards",children:[l.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #1e3a5f, #2d5986)"},children:[l.jsx("div",{className:"mock-brain-card-title",children:"Calificación de Leads"}),l.jsx("div",{className:"mock-brain-card-sub",children:"Organiza leads: MQL, SQL, PQL y CQL"}),l.jsx("div",{className:"mock-brain-card-cat",children:"MARKETING"})]}),l.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #065f46, #047857)"},children:[l.jsx("div",{className:"mock-brain-card-title",children:"Estrategia de Ventas"}),l.jsx("div",{className:"mock-brain-card-sub",children:"Plantilla de estrategia de ventas"}),l.jsx("div",{className:"mock-brain-card-cat",children:"VENTAS"})]}),l.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #581c87, #7c3aed)"},children:[l.jsx("div",{className:"mock-brain-card-title",children:"Proceso de Reclutamiento"}),l.jsx("div",{className:"mock-brain-card-sub",children:"Define los 7 pasos del proceso"}),l.jsx("div",{className:"mock-brain-card-cat",children:"RRHH"})]}),l.jsxs("div",{className:"mock-brain-card",style:{background:"linear-gradient(135deg, #78350f, #a16207)"},children:[l.jsx("div",{className:"mock-brain-card-title",children:"Dashboard de KPIs de RRHH"}),l.jsx("div",{className:"mock-brain-card-sub",children:"Rotación, tiempo de contratación..."}),l.jsx("div",{className:"mock-brain-card-cat",children:"RRHH"})]})]})]})]})]})}),l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"product-row",children:[l.jsxs("div",{className:"product-mockup",children:[l.jsxs("div",{className:"mockup-bar",children:[l.jsx("span",{className:"mockup-dot red"}),l.jsx("span",{className:"mockup-dot yellow"}),l.jsx("span",{className:"mockup-dot green"}),l.jsx("span",{className:"mockup-url",children:"app.profit120.com/chat"})]}),l.jsxs("div",{className:"mock-chat",children:[l.jsx("div",{className:"mock-chat-greeting",children:"¡Hola! 👋"}),l.jsx("div",{className:"mock-chat-sub",children:"Soy el primer chat especializado para PYMES, ¿qué solución necesitas hoy?"}),l.jsxs("div",{className:"mock-chat-input",children:[l.jsx("span",{children:"Escribe tu pregunta o adjunta archivos para analizar"}),l.jsx("div",{className:"mock-chat-send",children:"↑"})]}),l.jsxs("div",{className:"mock-chat-suggestions",children:[l.jsxs("div",{className:"mock-chat-suggestion",children:[l.jsx("strong",{children:"Actualmente tengo este problema en mi empresa..."}),"¡Sin miedo! Estoy aquí para ayudarte."]}),l.jsxs("div",{className:"mock-chat-suggestion",children:[l.jsx("strong",{children:"Necesito saber más acerca de..."}),"Nadie nace sabiéndolo todo..."]}),l.jsxs("div",{className:"mock-chat-suggestion",children:[l.jsx("strong",{children:"Explícame más de Profit120"}),"¡No escondemos nada!"]})]})]})]}),l.jsxs("div",{className:"product-info",children:[l.jsx("div",{className:"product-badge",children:"24/7"}),l.jsx("h3",{className:"product-name",children:"Profit CHAT"}),l.jsx("p",{className:"product-desc",children:"Tu consultor IA disponible a cualquier hora. Adjunta archivos, pide análisis, resuelve dudas — con contexto de tu empresa."}),l.jsxs("div",{className:"product-features-list",children:[l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Chat especializado en PYMES"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Adjunta archivos para análisis instantáneo"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," La IA ya conoce el contexto de tu empresa"]})]}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]})]})}),l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"product-row",children:[l.jsxs("div",{className:"product-info",children:[l.jsx("div",{className:"product-badge",children:"20 MIN"}),l.jsx("h3",{className:"product-name",children:"Profit BOOST"}),l.jsx("p",{className:"product-desc",children:"Un problema real. Una solución accionable. Frameworks y plantillas para ejecutar hoy, organizados por categoría."}),l.jsxs("div",{className:"product-features-list",children:[l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," +7 categorías de problemas reales"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Top 10 en tendencias diarias"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Frameworks listos para aplicar de inmediato"]})]}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/courses",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]}),l.jsxs("div",{className:"product-mockup",children:[l.jsxs("div",{className:"mockup-bar",children:[l.jsx("span",{className:"mockup-dot red"}),l.jsx("span",{className:"mockup-dot yellow"}),l.jsx("span",{className:"mockup-dot green"}),l.jsx("span",{className:"mockup-url",children:"app.profit120.com/boost"})]}),l.jsxs("div",{className:"mock-boost",children:[l.jsx("div",{className:"mock-boost-section-title",children:"Categorías populares"}),l.jsx("div",{className:"mock-boost-categories",children:[{label:"Marketing",bg:"linear-gradient(135deg,#1e3a5f,#2d5986)"},{label:"Finanzas",bg:"linear-gradient(135deg,#065f46,#047857)"},{label:"Ventas",bg:"linear-gradient(135deg,#581c87,#7c3aed)"},{label:"Operaciones",bg:"linear-gradient(135deg,#78350f,#a16207)"},{label:"RRHH",bg:"linear-gradient(135deg,#1e1b4b,#3730a3)"}].map((i,o)=>l.jsx("div",{className:"mock-boost-cat",style:{background:i.bg},children:l.jsx("span",{children:i.label})},o))}),l.jsx("div",{className:"mock-boost-section-title",children:"Top de esta semana"}),l.jsx("div",{className:"mock-boost-grid",children:[{title:"Estrategia de Precios",bg:"linear-gradient(160deg,#1e3a5f,#0f172a)"},{title:"Plan de Marketing",bg:"linear-gradient(160deg,#065f46,#022c22)"},{title:"Control de Costos",bg:"linear-gradient(160deg,#581c87,#2e1065)"},{title:"Pipeline de Ventas",bg:"linear-gradient(160deg,#78350f,#2c1300)"},{title:"Onboarding",bg:"linear-gradient(160deg,#1e1b4b,#0d0a2e)"}].map((i,o)=>l.jsxs("div",{className:"mock-boost-card",style:{background:i.bg},children:[l.jsx("div",{className:"mock-boost-card-plus",children:"+"}),l.jsx("div",{className:"mock-boost-card-title",children:i.title})]},o))})]})]})]})}),l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"product-row",children:[l.jsxs("div",{className:"product-mockup",children:[l.jsxs("div",{className:"mockup-bar",children:[l.jsx("span",{className:"mockup-dot red"}),l.jsx("span",{className:"mockup-dot yellow"}),l.jsx("span",{className:"mockup-dot green"}),l.jsx("span",{className:"mockup-url",children:"app.profit120.com/talks"})]}),l.jsxs("div",{className:"mock-talks",children:[l.jsxs("div",{className:"mock-talks-header",children:[l.jsxs("div",{className:"mock-talks-logo",children:["Profit",l.jsx("span",{children:"TALKS"})]}),l.jsx("div",{className:"mock-talks-sort",children:"Recientes ▾"})]}),l.jsx("div",{className:"mock-talks-grid",children:[{num:"#56",title:"Decisiones con datos",dur:"8 min",bg:"linear-gradient(135deg,#1e3a5f,#0f172a)"},{num:"#55",title:"IA en tu operación",dur:"6 min",bg:"linear-gradient(135deg,#065f46,#022c22)"},{num:"#54",title:"Finanzas sin contador",dur:"7 min",bg:"linear-gradient(135deg,#581c87,#2e1065)"}].map((i,o)=>l.jsx("div",{className:"mock-talks-card",children:l.jsxs("div",{className:"mock-talks-thumb",style:{background:i.bg},children:[l.jsx("div",{className:"mock-talks-thumb-num",children:i.num}),l.jsx("div",{className:"mock-talks-thumb-title",children:i.title}),l.jsx("div",{className:"mock-talks-thumb-dur",children:i.dur})]})},o))})]})]}),l.jsxs("div",{className:"product-info",children:[l.jsx("div",{className:"product-badge",children:"SEMANAL"}),l.jsx("h3",{className:"product-name",children:"Profit TALKS"}),l.jsx("p",{className:"product-desc",children:"El newsletter que forma criterio. Análisis, tendencias y casos reales que se aplican de inmediato. +56 ediciones."}),l.jsxs("div",{className:"product-features-list",children:[l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," +55 episodios publicados"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Casos reales de empresas LATAM"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Marcos de decisión aplicables"]})]}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/library",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Accede sin costo →"})]})]})}),l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"product-row",children:[l.jsxs("div",{className:"product-info",children:[l.jsx("div",{className:"product-badge",children:"LIVE"}),l.jsx("h3",{className:"product-name",children:"Profit LABS"}),l.jsx("p",{className:"product-desc",children:"Estrategia colaborativa en vivo. Cupo limitado por sesión — cuando se llena, se llena."}),l.jsxs("div",{className:"product-features-list",children:[l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Sesiones en vivo con expertos"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Cupo limitado por sesión"]}),l.jsxs("div",{className:"product-feature-item",children:[l.jsx("span",{className:"product-feature-check",children:"✓"})," Marketing, Finanzas, Operaciones y más"]})]}),l.jsx("div",{style:{fontSize:12,color:p.textMuted,background:"rgba(239,68,68,0.05)",border:"1px solid rgba(239,68,68,0.1)",borderRadius:8,padding:"6px 10px",lineHeight:1.5,marginBottom:16},children:"🔴 Marketing Inteligente: LLENO · Rentabilidad: LLENO · Roles: DISPONIBLE (4/15)"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/labs",className:"module-mini-link",target:"_blank",rel:"noopener noreferrer",children:"Ver sesiones disponibles →"})]}),l.jsxs("div",{className:"product-mockup",children:[l.jsxs("div",{className:"mockup-bar",children:[l.jsx("span",{className:"mockup-dot red"}),l.jsx("span",{className:"mockup-dot yellow"}),l.jsx("span",{className:"mockup-dot green"}),l.jsx("span",{className:"mockup-url",children:"app.profit120.com/labs"})]}),l.jsxs("div",{className:"mock-labs",children:[l.jsxs("div",{className:"mock-labs-header",children:[l.jsx("div",{className:"mock-labs-title",children:"Sesiones en Vivo"}),l.jsx("div",{className:"mock-labs-sub",children:"Estrategia colaborativa con expertos"})]}),l.jsx("div",{className:"mock-labs-grid",children:[{title:"Marketing Inteligente con IA",meta:"10/10 participantes",badge:"LLENO",badgeColor:"#ef4444",bg:"linear-gradient(135deg,#7f1d1d,#b91c1c)"},{title:"Rentabilidad y Control",meta:"15/15 participantes",badge:"LLENO",badgeColor:"#ef4444",bg:"linear-gradient(135deg,#1e3a5f,#1d4ed8)"},{title:"Roles y Responsabilidades",meta:"4/15 participantes",badge:"DISPONIBLE",badgeColor:"#16a34a",bg:"linear-gradient(135deg,#065f46,#15803d)"}].map((i,o)=>l.jsxs("div",{className:"mock-labs-card",children:[l.jsx("div",{className:"mock-labs-card-img",style:{background:i.bg},children:l.jsx("div",{className:"mock-labs-badge",style:{background:i.badgeColor,color:"#fff"},children:i.badge})}),l.jsxs("div",{className:"mock-labs-card-body",children:[l.jsx("div",{className:"mock-labs-card-title",children:i.title}),l.jsx("div",{className:"mock-labs-card-meta",children:i.meta})]})]},o))})]})]})]})})]}),l.jsxs("section",{className:"howto",id:"como-funciona",children:[l.jsx("div",{className:"howto-header",children:l.jsx(_,{delay:.1,children:l.jsxs("h2",{className:"section-heading",children:["Activa el cerebro de tu empresa",l.jsx("br",{}),"en 3 pasos."]})})}),l.jsxs("div",{className:"steps",children:[l.jsx(_,{delay:0,children:l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-num",children:"1"}),l.jsx("h3",{className:"step-title",children:"Crea tu cuenta sin costo"}),l.jsx("p",{className:"step-desc",children:"Regístrate con tu correo. No necesitas tarjeta de crédito ni aprobación de nadie. En 2 minutos estás adentro."})]})}),l.jsx(_,{delay:.1,children:l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-num",children:"2"}),l.jsx("h3",{className:"step-title",children:"Invita a todo tu equipo"}),l.jsx("p",{className:"step-desc",children:"Agrega a todos los que necesites. Sin límite de usuarios durante tus 60 días. Que todos empiecen a usar la plataforma — eso entrena la IA más rápido."})]})}),l.jsx(_,{delay:.2,children:l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-num",children:"3"}),l.jsx("h3",{className:"step-title",children:"Usa, pregunta, decide — la IA aprende"}),l.jsx("p",{className:"step-desc",children:"Cada herramienta que usas, cada pregunta que haces, cada análisis que corres... tu cerebro de IA se vuelve más inteligente sobre tu empresa. En 60 días vas a tener un activo que ningún consultor te puede dar."})]})})]}),l.jsx(_,{delay:.25,children:l.jsx("div",{style:{textAlign:"center",marginTop:48},children:l.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-primary product-cta",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex"},children:["Empieza ahora — es gratis",l.jsx("span",{className:"btn-arrow",children:l.jsx(qi,{})})]})})})]}),l.jsxs("section",{className:"testimonials",id:"testimonios",children:[l.jsxs("div",{className:"testimonials-header",children:[l.jsx(_,{delay:.1,children:l.jsxs("h2",{className:"section-heading",children:["Empezaron con 60 días sin costo.",l.jsx("br",{}),"Se quedaron por los resultados."]})}),l.jsx(_,{delay:.15,children:l.jsx("p",{className:"section-desc",children:"Activaron su prueba sin costo, probaron los módulos y decidieron quedarse."})})]}),l.jsx("div",{className:"t-grid",children:Dp.map((i,o)=>l.jsx(_,{delay:.08*o,children:l.jsxs("div",{className:"t-card",children:[l.jsx("div",{className:"t-stars",children:"★".repeat(i.stars)}),i.result&&l.jsxs("div",{className:"t-result",children:["📈 ",i.result]}),l.jsxs("p",{className:"t-quote",children:['"',i.quote,'"']}),l.jsxs("div",{className:"t-author",children:[i.img?l.jsx("img",{src:i.img,alt:i.name,className:"t-avatar-img"}):l.jsx("div",{className:"t-avatar",children:i.initials}),l.jsxs("div",{children:[l.jsx("div",{className:"t-name",children:i.name}),l.jsx("div",{className:"t-role",children:i.role}),i.company&&l.jsx("div",{className:"t-company",children:i.company})]})]})]})},o))})]}),l.jsxs("section",{className:"for-whom",children:[l.jsxs("div",{className:"for-whom-header",children:[l.jsx(_,{delay:.05,children:l.jsxs("div",{className:"section-eyebrow",children:[l.jsx("span",{className:"eyebrow-line"}),"Para quién es",l.jsx("span",{className:"eyebrow-line"})]})}),l.jsx(_,{delay:.1,children:l.jsxs("h2",{className:"section-heading",children:["Diseñado para quienes",l.jsx("br",{}),"toman decisiones reales."]})}),l.jsx(_,{delay:.15,children:l.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Profit120 no es para todos — y eso está bien. Si te identificas con alguno de estos perfiles, es para ti."})})]}),l.jsx("div",{className:"for-whom-grid",children:[{title:"Dueños de PYME (5–200 empleados)",desc:"Decisiones estratégicas sin consultores caros."},{title:"Directores y gerentes de área",desc:"Datos e IA para Finanzas, Marketing, Ventas y Operaciones — sin analistas."},{title:"Startups en crecimiento",desc:"Haz más con menos. IA especializada, sin setup ni entrenamiento."},{title:"Empresas que escalan sin contratar más",desc:"Automatiza antes de agregar headcount."}].map((i,o)=>l.jsx(_,{delay:.08*o,children:l.jsxs("div",{className:"for-whom-card",children:[l.jsx("div",{className:"for-whom-check",children:"✓"}),l.jsxs("div",{children:[l.jsx("div",{className:"for-whom-title",children:i.title}),l.jsx("div",{className:"for-whom-desc",children:i.desc})]})]})},o))}),l.jsx(_,{delay:.1,children:l.jsxs("div",{className:"not-for-whom",children:[l.jsx("div",{className:"not-for-whom-title",children:"No es para ti si eres..."}),l.jsx("div",{className:"not-for-list",children:["Buscas solución mágica sin implementar nada"].map((i,o)=>l.jsxs("span",{className:"not-for-item",children:["✕ ",i]},o))})]})})]}),l.jsxs("section",{className:"comparison-section",children:[l.jsx(_,{delay:.05,children:l.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[l.jsxs("div",{className:"section-eyebrow",style:{justifyContent:"center"},children:[l.jsx("span",{className:"eyebrow-line"}),"¿Por qué Profit120?",l.jsx("span",{className:"eyebrow-line"})]}),l.jsx("h2",{className:"section-heading",style:{marginBottom:12},children:"Compara antes de decidir."}),l.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"No somos otra herramienta genérica. Somos el cerebro que aprende de tu empresa."})]})}),l.jsx(_,{delay:.1,children:l.jsxs("div",{className:"comparison-table",children:[l.jsxs("div",{className:"comparison-row comp-header",children:[l.jsx("div",{className:"comp-tool",children:"Herramienta"}),l.jsx("div",{className:"comp-price",children:"Precio"}),l.jsx("div",{className:"comp-learns",children:"¿Aprende de tu empresa?"})]}),[{tool:"ChatGPT",price:"$20/mes",learns:"No"},{tool:"Gemini",price:"$20/mes",learns:"No"},{tool:"MasterClass",price:"$120/año",learns:"No"},{tool:"Udemy",price:"$30/mes por persona",learns:"No"}].map((i,o)=>l.jsxs("div",{className:"comparison-row",children:[l.jsx("div",{className:"comp-tool",children:i.tool}),l.jsx("div",{className:"comp-price",children:i.price}),l.jsxs("div",{className:"comp-learns",style:{color:p.textMuted},children:["✕ ",i.learns]})]},o)),l.jsxs("div",{className:"comparison-row comp-highlight",children:[l.jsx("div",{className:"comp-tool",children:"Profit120"}),l.jsx("div",{className:"comp-price",children:"$0 por 60 días"}),l.jsx("div",{className:"comp-learns",children:"✓ +200 herramientas que aprenden de TU empresa"})]})]})})]}),l.jsxs("section",{className:"objections",children:[l.jsx("div",{className:"objections-header",children:l.jsx(_,{delay:.1,children:l.jsxs("h2",{className:"section-heading",children:["Las preguntas que",l.jsx("br",{}),"todos se hacen."]})})}),l.jsx("div",{className:"obj-grid",children:[{q:"¿Mis datos están seguros?",a:"Sí. Usamos encriptación de extremo a extremo. Tus datos nunca se usan para entrenar modelos externos. Tu información es tuya y solo tuya."},{q:"¿En qué se diferencia de usar ChatGPT o alguna otra IA?",a:"ChatGPT es una IA genérica. Profit120 es un cerebro especializado en negocios: +200 herramientas preconstruidas por expertos, organizadas por área, para que no empieces de cero cada vez. No necesitas saber hacer prompts — solo abrir la herramienta correcta."},{q:"¿Qué pasa después de los 60 días?",a:"Tú decides si continuar. Sin renovación automática. Sin sorpresas. Sin compromisos. Pero tu cerebro de IA ya va a conocer tu empresa... y eso no lo vas a querer soltar."},{q:"¿Necesito tarjeta de crédito?",a:"No. Cero datos de pago. Solo tu correo. Entras, activas tus 60 días sin costo y listo."}].map((i,o)=>l.jsx(_,{delay:.06*o,children:l.jsxs("div",{className:"obj-card",children:[l.jsx("div",{className:"obj-question",children:i.q}),l.jsx("div",{className:"obj-answer",children:i.a})]})},o))})]}),l.jsxs("section",{className:"b2b-upsell",children:[l.jsx(_,{delay:.05,children:l.jsx("div",{className:"b2b-badge",children:"PARA EMPRESAS QUE NECESITAN MÁS"})}),l.jsx(_,{delay:.1,children:l.jsx("h2",{className:"b2b-headline",children:"¿Tu empresa necesita IA operativa a la medida?"})}),l.jsx(_,{delay:.15,children:l.jsx("p",{className:"b2b-desc",children:"Conectamos tus sistemas, construimos agentes de IA que ejecutan por ti y automatizamos tu operación. Todo personalizado para tu empresa."})}),l.jsx(_,{delay:.2,children:l.jsxs("div",{className:"b2b-tags",children:[l.jsx("span",{className:"b2b-tag",children:"CORTEX120 — Datos centralizados"}),l.jsx("span",{className:"b2b-tag",children:"Agentes de IA — Ventas, soporte, RRHH, finanzas"}),l.jsx("span",{className:"b2b-tag",children:"Automatizaciones — Procesos que se ejecutan solos"})]})}),l.jsx(_,{delay:.25,children:l.jsx("a",{href:"https://b2b.profit120.com",className:"b2b-btn",target:"_blank",rel:"noopener noreferrer",children:"Conocer Profit120 B2B →"})})]}),l.jsx(_,{children:l.jsxs("div",{className:"final-cta",children:[l.jsxs("h2",{className:"final-cta-title",children:["Tu empresa merece un cerebro",l.jsx("br",{}),l.jsx("span",{className:"green-text",children:"que la entienda."})]}),l.jsx("p",{className:"final-cta-sub",children:"5 módulos de IA. Todo tu equipo. Sin tarjeta de crédito. 60 días para comprobarlo."}),l.jsx("div",{className:"cta-benefits",children:["60 días sin costo","Sin tarjeta de crédito","Usuarios ilimitados","5 módulos completos","Cancela cuando quieras"].map((i,o)=>l.jsxs("div",{className:"benefit-chip",children:[l.jsx("span",{className:"benefit-dot"}),i]},o))}),l.jsxs("a",{href:"https://www.plataforma.profit120.com/app/chatbot",className:"btn-primary",style:{fontSize:18,padding:"20px 48px",minHeight:"auto",flex:"none",animation:"heroCtaPulse 2.2s ease-in-out infinite"},target:"_blank",rel:"noopener noreferrer",children:["Empieza Sin Costo — 60 Días",l.jsx("span",{className:"btn-arrow",children:l.jsx(qi,{})})]})]})}),l.jsxs("footer",{className:"footer-full",children:[l.jsxs("div",{className:"footer-top",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx("img",{src:"/assets/Negro-Verde.png",alt:"Profit120"}),l.jsx("p",{children:"La plataforma de IA para dueños de empresa que quieren decidir y crecer más rápido. 5 módulos. Un solo objetivo."}),l.jsxs("div",{className:"footer-social",children:[l.jsx("a",{href:"https://instagram.com/profit120",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:l.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),l.jsx("a",{href:"https://linkedin.com/company/profit120",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:l.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),l.jsx("a",{href:"https://twitter.com/profit120",target:"_blank",rel:"noopener noreferrer",title:"X / Twitter",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"16",height:"16",children:l.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"footer-col-title",children:"Plataforma"}),l.jsxs("div",{className:"footer-col-links",children:[l.jsx("a",{href:"https://www.plataforma.profit120.com/app/tools",target:"_blank",rel:"noopener noreferrer",children:"Profit BRAIN"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",children:"Profit CHAT"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/courses",target:"_blank",rel:"noopener noreferrer",children:"Profit BOOST"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/library",target:"_blank",rel:"noopener noreferrer",children:"Profit TALKS"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/labs",target:"_blank",rel:"noopener noreferrer",children:"Profit LABS"})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"footer-col-title",children:"Legal & Contacto"}),l.jsxs("div",{className:"footer-col-links",children:[l.jsx("a",{href:"https://profit120.com/privacidad",target:"_blank",rel:"noopener noreferrer",children:"Política de Privacidad"}),l.jsx("a",{href:"https://profit120.com/terminos",target:"_blank",rel:"noopener noreferrer",children:"Términos de Uso"}),l.jsx("a",{href:"mailto:hola@profit120.com",children:"hola@profit120.com"}),l.jsx("a",{href:"https://www.plataforma.profit120.com/app/chatbot",target:"_blank",rel:"noopener noreferrer",children:"Activar 60 días sin costo →"})]})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsxs("span",{children:["© ",new Date().getFullYear()," Profit120. Todos los derechos reservados."]}),l.jsxs("div",{className:"footer-legal",children:[l.jsx("a",{href:"https://profit120.com/privacidad",target:"_blank",rel:"noopener noreferrer",children:"Privacidad"}),l.jsx("a",{href:"https://profit120.com/terminos",target:"_blank",rel:"noopener noreferrer",children:"Términos"}),l.jsx("a",{href:"mailto:hola@profit120.com",children:"Contacto"})]})]})]})]})]})}Ki.createRoot(document.getElementById("root")).render(l.jsx(Sc.StrictMode,{children:l.jsx(Ap,{})}));
