/*! For license information please see 21.3fae0dad.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[21],{1694:function(e,a){var r;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var n=s.apply(null,r);n&&e.push(n)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(a,[]))||(e.exports=r)}()},888:function(e,a,r){"use strict";var t=r(9047);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,a,r,s,i,n){if(n!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:s};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3471:function(e,a,r){"use strict";r.d(a,{Z:function(){return fe}});var t=r(1413);function s(e,a){if(null==e)return{};var r,t,s=function(e,a){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=r(1694),n=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},p=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,p=void 0!==u&&u,v=s(e,f);return(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},v),{},{ref:a,className:n()(o,"".concat(c,"-").concat(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=u;var v=p,m=c.createContext({}),b=["xxl","xl","lg","md","sm","xs"],x=c.createContext({prefixes:{},breakpoints:b,minBreakpoint:"xs"});x.Consumer,x.Provider;function y(e,a){var r=(0,c.useContext)(x).prefixes;return e||r[a]||a}var h=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,p=void 0!==u&&u,v=e.isInvalid,b=void 0!==v&&v,x=e.as,N=void 0===x?"input":x,g=s(e,h),P=(0,c.useContext)(m).controlId;return i=y(i,"form-check-input"),(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},g),{},{ref:a,type:f,id:r||P,className:n()(o,i,p&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormCheckInput";var g=N,P=["bsPrefix","className","htmlFor"],j=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=s(e,P),f=(0,c.useContext)(m).controlId;return r=y(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(i,r)}))}));j.displayName="FormCheckLabel";var Z=j;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],k=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,p=void 0!==u&&u,b=e.disabled,x=void 0!==b&&b,h=e.isValid,N=void 0!==h&&h,P=e.isInvalid,j=void 0!==P&&P,k=e.feedbackTooltip,C=void 0!==k&&k,I=e.feedback,O=e.feedbackType,F=e.className,R=e.style,S=e.title,T=void 0===S?"":S,_=e.type,z=void 0===_?"checkbox":_,L=e.label,V=e.children,E=e.as,A=void 0===E?"input":E,B=s(e,w);i=y(i,"form-check"),o=y(o,"form-switch");var H=(0,c.useContext)(m).controlId,M=(0,c.useMemo)((function(){return{controlId:r||H}}),[H,r]),U=!V&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,Z),W=(0,d.jsx)(g,(0,t.Z)((0,t.Z)({},B),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:j,disabled:x,as:A}));return(0,d.jsx)(m.Provider,{value:M,children:(0,d.jsx)("div",{style:R,className:n()(F,U&&i,f&&"".concat(i,"-inline"),p&&"".concat(i,"-reverse"),"switch"===z&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[W,U&&(0,d.jsx)(Z,{title:T,children:L}),I&&(0,d.jsx)(v,{type:O,tooltip:C,children:I})]})})})}));k.displayName="FormCheck";var C=Object.assign(k,{Input:g,Label:Z}),I=r(4942),O=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,p=e.id,v=e.className,b=e.isValid,x=void 0!==b&&b,h=e.isInvalid,N=void 0!==h&&h,g=e.plaintext,P=e.readOnly,j=e.as,Z=void 0===j?"input":j,w=s(e,O),k=(0,c.useContext)(m).controlId;(o=y(o,"form-control"),g)?r=(0,I.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,I.Z)(i,o,!0),(0,I.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(Z,(0,t.Z)((0,t.Z)({},w),{},{type:l,size:u,ref:a,readOnly:P,id:p||k,className:n()(v,r,x&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));F.displayName="FormControl";var R=Object.assign(F,{Feedback:v}),S=/-(.)/g;var T=["className","bsPrefix","as"],_=function(e){return e[0].toUpperCase()+(a=e,a.replace(S,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?_(e):r,o=a.Component,l=a.defaultProps,f=c.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,c=a.as,f=void 0===c?o||"div":c,u=s(a,T),p=y(l,e);return(0,d.jsx)(f,(0,t.Z)({ref:r,className:n()(i,p)},u))}));return f.defaultProps=l,f.displayName=i,f}("form-floating"),L=["controlId","as"],V=c.forwardRef((function(e,a){var r=e.controlId,i=e.as,n=void 0===i?"div":i,o=s(e,L),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(m.Provider,{value:l,children:(0,d.jsx)(n,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));V.displayName="FormGroup";var E=V,A=r(885),B=["as","bsPrefix","className"],H=["className"];function M(e){var a=e.as,r=e.bsPrefix,i=e.className,o=s(e,B);r=y(r,"col");var l=(0,c.useContext)(x).breakpoints,d=(0,c.useContext)(x).minBreakpoint,f=[],u=[];return l.forEach((function(e){var a,t,s,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,s=i.order):a=i;var n=e!==d?"-".concat(e):"";a&&f.push(!0===a?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(a)),null!=s&&u.push("order".concat(n,"-").concat(s)),null!=t&&u.push("offset".concat(n,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},o),{},{className:n().apply(void 0,[i].concat(f,u))}),{as:a,bsPrefix:r,spans:f}]}var U=c.forwardRef((function(e,a){var r=M(e),i=(0,A.Z)(r,2),o=i[0],l=o.className,c=s(o,H),f=i[1],u=f.as,p=void 0===u?"div":u,v=f.bsPrefix,m=f.spans;return(0,d.jsx)(p,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:n()(l,!m.length&&v)}))}));U.displayName="Col";var W=U,D=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],G=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,p=e.htmlFor,v=s(e,D),b=(0,c.useContext)(m).controlId;o=y(o,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var h=n()(u,o,f&&"visually-hidden",l&&x);return p=p||b,l?(0,d.jsx)(W,(0,t.Z)({ref:a,as:"label",className:h,htmlFor:p},v)):(0,d.jsx)(i,(0,t.Z)({ref:a,className:h,htmlFor:p},v))}));G.displayName="FormLabel",G.defaultProps={column:!1,visuallyHidden:!1};var q=G,Y=["bsPrefix","className","id"],J=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=s(e,Y),f=(0,c.useContext)(m).controlId;return r=y(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:n()(i,r),id:o||f}))}));J.displayName="FormRange";var K=J,Q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,p=e.isInvalid,v=void 0!==p&&p,b=e.id,x=s(e,Q),h=(0,c.useContext)(m).controlId;return r=y(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},x),{},{size:o,ref:a,className:n()(l,r,i&&"".concat(r,"-").concat(i),u&&"is-valid",v&&"is-invalid"),id:b||h}))}));X.displayName="FormSelect";var $=X,ee=["bsPrefix","className","as","muted"],ae=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=s(e,ee);return r=y(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:n()(i,r,c&&"text-muted")}))}));ae.displayName="FormText";var re=ae,te=c.forwardRef((function(e,a){return(0,d.jsx)(C,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));te.displayName="Switch";var se=Object.assign(te,{Input:C.Input,Label:C.Label}),ie=["bsPrefix","className","children","controlId","label"],ne=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,c=e.label,f=s(e,ie);return r=y(r,"form-floating"),(0,d.jsxs)(E,(0,t.Z)((0,t.Z)({ref:a,className:n()(i,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));ne.displayName="FloatingLabel";var oe=ne,le=["className","validated","as"],ce={_ref:l().any,validated:l().bool,as:l().elementType},de=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=s(e,le);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:n()(r,i&&"was-validated")}))}));de.displayName="Form",de.propTypes=ce;var fe=Object.assign(de,{Group:E,Control:R,Floating:z,Check:C,Switch:se,Label:q,Text:re,Range:K,Select:$,FloatingLabel:oe})},7692:function(e,a,r){"use strict";r.d(a,{A7v:function(){return s}});var t=r(9983);function s(e){return(0,t.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"}},{tag:"path",attr:{d:"M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"}}]})(e)}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=21.3fae0dad.chunk.js.map