(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"21Lb":function(t,e,n){"use strict";n.d(e,"e",function(){return Y}),n.d(e,"f",function(){return _}),n.d(e,"a",function(){return I}),n.d(e,"i",function(){return h}),n.d(e,"c",function(){return y}),n.d(e,"g",function(){return B}),n.d(e,"b",function(){return D}),n.d(e,"h",function(){return b}),n.d(e,"d",function(){return x});var i=n("mrSG"),r=n("CcnG"),a=n("OzfB"),o=n("K9Ia"),s=n("ny24"),l="inline",u=["row","column","row-reverse","column-reverse"];function c(t){var e=(t=t?t.toLowerCase():"").split(" "),n=e[0],i=e[1],r=e[2];return u.find(function(t){return t===n})||(n=u[0]),i===l&&(i=r!==l?r:"",r=l),[n,p(i),!!r]}function f(t){return c(t)[0].indexOf("row")>-1}function p(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.buildStyles=function(t){return void 0===(e=(i=c(t))[1])&&(e=null),void 0===(n=i[2])&&(n=!1),{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":i[0],"flex-wrap":e||null};var e,n,i},e.ngInjectableDef=Object(r.U)({factory:function(){return new e},token:e,providedIn:"root"}),e}(a.k),d=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"],y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=d,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r){var a=t.call(this,e,i,n,r)||this;return a.elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout",a.styleCache=m,a.init(),a}return Object(i.c)(e,t),e}(a.b)),m=new Map,g={"margin-left":null,"margin-right":null,"margin-top":null,"margin-bottom":null},b=function(t){function e(e){var n=t.call(this)||this;return n._styler=e,n}return Object(i.c)(e,t),e.prototype.buildStyles=function(t,e){return t.endsWith(j)?(n=t=t.slice(0,t.indexOf(j)),i="0px",r="0px","rtl"===e.directionality?r="-"+n:i="-"+n,{margin:"0px "+i+" -"+n+" "+r}):{};var n,i,r},e.prototype.sideEffect=function(t,e,n){var r,a,o,s=n.items;if(t.endsWith(j)){var l=(r=t=t.slice(0,t.indexOf(j)),a="0px",o="0px","rtl"===n.directionality?o=r:a=r,{padding:"0px "+a+" "+r+" "+o});this._styler.applyStyleToElements(l,n.items)}else{var u=s.pop(),c=function(t,e){var n,r=Object(i.a)({},g);switch(e.layout){case"column":n="margin-bottom";break;case"column-reverse":n="margin-top";break;case"row":n="rtl"===e.directionality?"margin-left":"margin-right";break;case"row-reverse":n="rtl"===e.directionality?"margin-right":"margin-left";break;default:n="rtl"===e.directionality?"margin-left":"margin-right"}return r[n]=t,r}(t,n);this._styler.applyStyleToElements(c,s),this._styler.applyStyleToElements(g,[u])}},e.ngInjectableDef=Object(r.U)({factory:function(){return new e(Object(r.Y)(a.l))},token:e,providedIn:"root"}),e}(a.k),v=["fxLayoutGap","fxLayoutGap.xs","fxLayoutGap.sm","fxLayoutGap.md","fxLayoutGap.lg","fxLayoutGap.xl","fxLayoutGap.lt-sm","fxLayoutGap.lt-md","fxLayoutGap.lt-lg","fxLayoutGap.lt-xl","fxLayoutGap.gt-xs","fxLayoutGap.gt-sm","fxLayoutGap.gt-md","fxLayoutGap.gt-lg"],x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=v,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r,a,l){var u=t.call(this,e,a,r,l)||this;u.elRef=e,u.zone=n,u.directionality=i,u.styleUtils=r,u.styleBuilder=a,u.marshal=l,u.layout="row",u.DIRECTIVE_KEY="layout-gap",u.observerSubject=new o.a;var c=[u.directionality.change,u.observerSubject.asObservable()];return u.init(c),u.marshal.trackValue(u.nativeElement,"layout").pipe(Object(s.a)(u.destroySubject)).subscribe(u.onLayoutChange.bind(u)),u}return Object(i.c)(e,t),Object.defineProperty(e.prototype,"childrenNodes",{get:function(){for(var t=this.nativeElement.children,e=[],n=t.length;n--;)e[n]=t[n];return e},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this.buildChildObservable(),this.triggerUpdate()},e.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.onLayoutChange=function(t){var e=this,n=t.value.split(" ");this.layout=n[0],u.find(function(t){return t===e.layout})||(this.layout="row"),this.triggerUpdate()},e.prototype.updateWithValue=function(t){var e=this;t||(t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY));var n=this.childrenNodes.filter(function(t){return 1===t.nodeType&&e.willDisplay(t)}).sort(function(t,n){var i=+e.styler.lookupStyle(t,"order"),r=+e.styler.lookupStyle(n,"order");return isNaN(i)||isNaN(r)||i===r?0:i>r?1:-1});if(n.length>0){var i=this.directionality.value,r=this.layout;"row"===r&&"rtl"===i?this.styleCache=w:"row"===r&&"rtl"!==i?this.styleCache=O:"column"===r&&"rtl"===i?this.styleCache=E:"column"===r&&"rtl"!==i&&(this.styleCache=k),this.addStyles(t,{directionality:i,items:n,layout:r})}},e.prototype.willDisplay=function(t){var e=this.marshal.getValue(t,"show-hide");return!0===e||""===e&&"none"!==this.styleUtils.lookupStyle(t,"display")},e.prototype.buildChildObservable=function(){var t=this;this.zone.runOutsideAngular(function(){"undefined"!=typeof MutationObserver&&(t.observer=new MutationObserver(function(e){e.some(function(t){return t.addedNodes&&t.addedNodes.length>0||t.removedNodes&&t.removedNodes.length>0})&&t.observerSubject.next()}),t.observer.observe(t.nativeElement,{childList:!0}))})},e}(a.b)),w=new Map,E=new Map,O=new Map,k=new Map,j=" grid";function S(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=e;i<r.length;i++){var a=r[i];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}return t}var _=function(t){function e(e){var n=t.call(this)||this;return n.layoutConfig=e,n}return Object(i.c)(e,t),e.prototype.buildStyles=function(t,e){var n=t.split(" "),i=n[0],r=n[1],a=n.slice(2).join(" "),o=e.direction.indexOf("column")>-1?"column":"row",s=f(o)?"max-width":"max-height",l=f(o)?"min-width":"min-height",u=String(a).indexOf("calc")>-1,c=u||"auto"===a,p=String(a).indexOf("%")>-1&&!u,h=String(a).indexOf("px")>-1||String(a).indexOf("rem")>-1||String(a).indexOf("em")>-1||String(a).indexOf("vw")>-1||String(a).indexOf("vh")>-1,d=u||h;r="0"==r?0:r;var y=!(i="0"==i?0:i)&&!r,m={},g={"max-width":null,"max-height":null,"min-width":null,"min-height":null};switch(a||""){case"":a="row"===o?"0%":!1!==this.layoutConfig.useColumnBasisZero?"0.000000001px":"auto";break;case"initial":case"nogrow":i=0,a="auto";break;case"grow":a="100%";break;case"noshrink":r=0,a="auto";break;case"auto":break;case"none":i=0,r=0,a="auto";break;default:d||p||isNaN(a)||(a+="%"),"0%"===a&&(d=!0),"0px"===a&&(a="0%"),m=S(g,u?{"flex-grow":i,"flex-shrink":r,"flex-basis":d?a:"100%"}:{flex:i+" "+r+" "+(d?a:"100%")})}return m.flex||m["flex-grow"]||(m=S(g,u?{"flex-grow":i,"flex-shrink":r,"flex-basis":a}:{flex:i+" "+r+" "+a})),"0%"!==a&&"0px"!==a&&"0.000000001px"!==a&&"auto"!==a&&(m[l]=y||d&&i?a:null,m[s]=y||!c&&r?a:null),m[l]||m[s]?e.hasWrap&&(m[u?"flex-basis":"flex"]=m[s]?u?m[s]:i+" "+r+" "+m[s]:u?m[l]:i+" "+r+" "+m[l]):m=S(g,u?{"flex-grow":i,"flex-shrink":r,"flex-basis":a}:{flex:i+" "+r+" "+a}),S(m,{"box-sizing":"border-box"})},e.ngInjectableDef=Object(r.U)({factory:function(){return new e(Object(r.Y)(a.e))},token:e,providedIn:"root"}),e}(a.k),L=["fxFlex","fxFlex.xs","fxFlex.sm","fxFlex.md","fxFlex.lg","fxFlex.xl","fxFlex.lt-sm","fxFlex.lt-md","fxFlex.lt-lg","fxFlex.lt-xl","fxFlex.gt-xs","fxFlex.gt-sm","fxFlex.gt-md","fxFlex.gt-lg"],I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=L,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r,a){var o=t.call(this,e,r,n,a)||this;return o.elRef=e,o.styleUtils=n,o.layoutConfig=i,o.styleBuilder=r,o.marshal=a,o.DIRECTIVE_KEY="flex",o.direction="",o.wrap=!1,o.flexGrow="1",o.flexShrink="1",o.init(),o.parentElement&&o.marshal.trackValue(o.parentElement,"layout").pipe(Object(s.a)(o.destroySubject)).subscribe(o.onLayoutChange.bind(o)),o}return Object(i.c)(e,t),Object.defineProperty(e.prototype,"shrink",{get:function(){return this.flexShrink},set:function(t){this.flexShrink=t||"1",this.triggerReflow()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"grow",{get:function(){return this.flexGrow},set:function(t){this.flexGrow=t||"1",this.triggerReflow()},enumerable:!0,configurable:!0}),e.prototype.onLayoutChange=function(t){var e=t.value.split(" ");this.direction=e[0],this.wrap=void 0!==e[1]&&"wrap"===e[1],this.triggerUpdate()},e.prototype.updateWithValue=function(t){this.direction||(this.direction=this.getFlexFlowDirection(this.parentElement,!1!==this.layoutConfig.addFlexToParent));var e=this.direction,n=e.startsWith("row"),i=this.wrap;n&&i?this.styleCache=M:n&&!i?this.styleCache=C:!n&&i?this.styleCache=T:n||i||(this.styleCache=A);var r=String(t).replace(";",""),o=Object(a.n)(r,this.flexGrow,this.flexShrink);this.addStyles(o.join(" "),{direction:e,hasWrap:i})},e.prototype.triggerReflow=function(){var t=Object(a.n)(this.activatedValue,this.flexGrow,this.flexShrink);this.marshal.updateElement(this.nativeElement,this.DIRECTIVE_KEY,t.join(" "))},e}(a.b)),C=new Map,A=new Map,M=new Map,T=new Map,B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.buildStyles=function(t,e){var n={},i=t.split(" "),r=i[1];switch(i[0]){case"center":n["justify-content"]="center";break;case"space-around":n["justify-content"]="space-around";break;case"space-between":n["justify-content"]="space-between";break;case"space-evenly":n["justify-content"]="space-evenly";break;case"end":case"flex-end":n["justify-content"]="flex-end";break;case"start":case"flex-start":default:n["justify-content"]="flex-start"}switch(r){case"start":case"flex-start":n["align-items"]=n["align-content"]="flex-start";break;case"center":n["align-items"]=n["align-content"]="center";break;case"end":case"flex-end":n["align-items"]=n["align-content"]="flex-end";break;case"space-between":n["align-content"]="space-between",n["align-items"]="stretch";break;case"space-around":n["align-content"]="space-around",n["align-items"]="stretch";break;case"baseline":n["align-content"]="stretch",n["align-items"]="baseline";break;case"stretch":default:n["align-items"]=n["align-content"]="stretch"}return S(n,{display:"flex","flex-direction":e.layout,"box-sizing":"border-box","max-width":"stretch"===r?f(e.layout)?null:"100%":null,"max-height":"stretch"===r&&f(e.layout)?"100%":null})},e.ngInjectableDef=Object(r.U)({factory:function(){return new e},token:e,providedIn:"root"}),e}(a.k),V=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"],D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=V,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r){var a=t.call(this,e,i,n,r)||this;return a.elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout-align",a.layout="row",a.init(),a.marshal.trackValue(a.nativeElement,"layout").pipe(Object(s.a)(a.destroySubject)).subscribe(a.onLayoutChange.bind(a)),a}return Object(i.c)(e,t),e.prototype.updateWithValue=function(t){var e=this.layout||"row";"row"===e?this.styleCache=Q:"row-reverse"===e?this.styleCache=F:"column"===e?this.styleCache=R:"column-reverse"===e&&(this.styleCache=P),this.addStyles(t,{layout:e})},e.prototype.onLayoutChange=function(t){var e=this;this.layout=t.value.split(" ")[0],u.find(function(t){return t===e.layout})||(this.layout="row"),this.triggerUpdate()},e}(a.b)),Q=new Map,R=new Map,F=new Map,P=new Map,Y=function(){return function(){}}()},"3pJQ":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("mrSG"),n("CcnG"),n("OzfB"),n("n6gG");var i=function(){return function(){}}()},OzfB:function(t,e,n){"use strict";n.d(e,"m",function(){return f}),n.d(e,"d",function(){return B}),n.d(e,"e",function(){return S}),n.d(e,"j",function(){return D}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return F}),n.d(e,"c",function(){return L}),n.d(e,"f",function(){return C}),n.d(e,"i",function(){return M}),n.d(e,"h",function(){return T}),n.d(e,"l",function(){return Y}),n.d(e,"k",function(){return G}),n.d(e,"n",function(){return N}),n.d(e,"g",function(){return U});var i=n("CcnG"),r=n("Ip0R"),a=n("26FU"),o=n("K9Ia"),s=n("p0ib"),l=n("VnD/"),u=n("67Y/"),c=n("mrSG");function f(t,e){return function(){if(Object(r.v)(e)){var n=Array.from(t.querySelectorAll("[class*="+p+"]")),i=/\bflex-layout-.+?\b/g;n.forEach(function(t){t.classList.contains(p+"ssr")&&t.parentNode?t.parentNode.removeChild(t):t.className.replace(i,"")})}}}var p="flex-layout-",h=new i.p("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}}),d=[{alias:"xs",mediaQuery:"(min-width: 0px) and (max-width: 599px)",priority:100},{alias:"gt-xs",overlapping:!0,mediaQuery:"(min-width: 600px)",priority:7},{alias:"lt-sm",overlapping:!0,mediaQuery:"(max-width: 599px)",priority:10},{alias:"sm",mediaQuery:"(min-width: 600px) and (max-width: 959px)",priority:100},{alias:"gt-sm",overlapping:!0,mediaQuery:"(min-width: 960px)",priority:8},{alias:"lt-md",overlapping:!0,mediaQuery:"(max-width: 959px)",priority:9},{alias:"md",mediaQuery:"(min-width: 960px) and (max-width: 1279px)",priority:100},{alias:"gt-md",overlapping:!0,mediaQuery:"(min-width: 1280px)",priority:9},{alias:"lt-lg",overlapping:!0,mediaQuery:"(max-width: 1279px)",priority:8},{alias:"lg",mediaQuery:"(min-width: 1280px) and (max-width: 1919px)",priority:100},{alias:"gt-lg",overlapping:!0,mediaQuery:"(min-width: 1920px)",priority:10},{alias:"lt-xl",overlapping:!0,mediaQuery:"(max-width: 1919px)",priority:7},{alias:"xl",mediaQuery:"(min-width: 1920px) and (max-width: 5000px)",priority:100}],y="(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)",m="(orientation: portrait) and (min-width: 600px) and (max-width: 839px)",g="(orientation: portrait) and (min-width: 840px)",b="(orientation: landscape) and (min-width: 1280px)",v={HANDSET:"(orientation: portrait) and (max-width: 599px), (orientation: landscape) and (max-width: 959px)",TABLET:m+" , "+y,WEB:g+", "+b+" ",HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599px)",TABLET_PORTRAIT:m+" ",WEB_PORTRAIT:""+g,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959px)]",TABLET_LANDSCAPE:""+y,WEB_LANDSCAPE:""+b},x=[{alias:"handset",mediaQuery:v.HANDSET},{alias:"handset.landscape",mediaQuery:v.HANDSET_LANDSCAPE},{alias:"handset.portrait",mediaQuery:v.HANDSET_PORTRAIT},{alias:"tablet",mediaQuery:v.TABLET},{alias:"tablet.landscape",mediaQuery:v.TABLET},{alias:"tablet.portrait",mediaQuery:v.TABLET_PORTRAIT},{alias:"web",mediaQuery:v.WEB,overlapping:!0},{alias:"web.landscape",mediaQuery:v.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",mediaQuery:v.WEB_PORTRAIT,overlapping:!0}];function w(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=e;i<r.length;i++){var a=r[i];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}return t}var E=/(\.|-|_)/g;function O(t){var e=t.length>0?t.charAt(0):"",n=t.length>1?t.slice(1):"";return e.toUpperCase()+n}function k(t,e){return(e.priority||0)-(t.priority||0)}var j={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0},S=new i.p("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return j}}),_=new i.p("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var t=Object(i.Y)(h),e=Object(i.Y)(S),n=[].concat.apply([],(t||[]).map(function(t){return Array.isArray(t)?t:[t]}));return function(t,e){void 0===e&&(e=[]);var n,i={};return t.forEach(function(t){i[t.alias]=t}),e.forEach(function(t){i[t.alias]?w(i[t.alias],t):i[t.alias]=t}),(n=Object.keys(i).map(function(t){return i[t]})).forEach(function(t){t.suffix||(t.suffix=t.alias.replace(E,"|").split("|").map(O).join(""),t.overlapping=!!t.overlapping)}),n}((e.disableDefaultBps?[]:d).concat(e.addOrientationBps?x:[]),n)}}),L=function(){function t(t){this._registry=t}return Object.defineProperty(t.prototype,"items",{get:function(){return this._registry.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sortedItems",{get:function(){var t=this._registry.filter(function(t){return!0===t.overlapping}),e=this._registry.filter(function(t){return!0!==t.overlapping});return t.concat(e)},enumerable:!0,configurable:!0}),t.prototype.findByAlias=function(t){return this._registry.find(function(e){return e.alias==t})||null},t.prototype.findByQuery=function(t){return this._registry.find(function(e){return e.mediaQuery==t})||null},Object.defineProperty(t.prototype,"overlappings",{get:function(){return this._registry.filter(function(t){return 1==t.overlapping})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"aliases",{get:function(){return this._registry.map(function(t){return t.alias})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suffixes",{get:function(){return this._registry.map(function(t){return t.suffix?t.suffix:""})},enumerable:!0,configurable:!0}),t.ngInjectableDef=Object(i.U)({factory:function(){return new t(Object(i.Y)(_))},token:t,providedIn:"root"}),t}(),I=function(){function t(t,e,n,i){void 0===t&&(t=!1),void 0===e&&(e="all"),void 0===n&&(n=""),void 0===i&&(i=""),this.matches=t,this.mediaQuery=e,this.mqAlias=n,this.suffix=i,this.property=""}return t.prototype.clone=function(){return new t(this.matches,this.mediaQuery,this.mqAlias,this.suffix)},t}(),C=function(){function t(t,e,n){this._zone=t,this._platformId=e,this._document=n,this._registry=new Map,this._source=new a.a(new I(!0)),this._observable$=this._source.asObservable()}return t.prototype.isActive=function(t){var e=this._registry.get(t);return!!e&&e.matches},t.prototype.observe=function(t){return t&&this.registerQuery(t),this._observable$.pipe(Object(l.a)(function(e){return!t||e.mediaQuery===t}))},t.prototype.registerQuery=function(t){var e=this,n=Array.isArray(t)?Array.from(new Set(t)):[t];n.length>0&&function(t,e){var n=t.filter(function(t){return!A[t]});if(n.length>0){var i=n.join(", ");try{var r=e.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(e.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media "+i+" {.fx-query-test{ }}\n")),e.head.appendChild(r),n.forEach(function(t){return A[t]=r})}catch(a){console.error(a)}}}(n,this._document),n.forEach(function(t){var n=function(n){e._zone.run(function(){return e._source.next(new I(n.matches,t))})},i=e._registry.get(t);i||((i=e._buildMQL(t)).addListener(n),e._registry.set(t,i)),i.matches&&n(i)})},t.prototype._buildMQL=function(t){return function(t,e){return e&&window.matchMedia("all").addListener?window.matchMedia(t):{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}(t,Object(r.v)(this._platformId))},t.ngInjectableDef=Object(i.U)({factory:function(){return new t(Object(i.Y)(i.z),Object(i.Y)(i.B),Object(i.Y)(r.d))},token:t,providedIn:"root"}),t}(),A={},M=function(){return function(){}}(),T=function(){function t(t,e){this.breakpoints=t,this.mediaWatcher=e,this.filterOverlaps=!0,this._registerBreakPoints(),this.observable$=this._buildObservable()}return t.prototype.isActive=function(t){return this.mediaWatcher.isActive(this._toMediaQuery(t))},t.prototype.subscribe=function(t,e,n){return t&&"object"==typeof t?this.observable$.subscribe(t.next,t.error,t.complete):this.observable$.subscribe(t,e,n)},t.prototype.asObservable=function(){return this.observable$},t.prototype._registerBreakPoints=function(){var t=this.breakpoints.sortedItems.map(function(t){return t.mediaQuery});this.mediaWatcher.registerQuery(t)},t.prototype._buildObservable=function(){var t=this;return this.mediaWatcher.observe().pipe(Object(l.a)(function(t){return t.matches}),Object(l.a)(function(e){var n=t.breakpoints.findByQuery(e.mediaQuery);return!n||!(t.filterOverlaps&&n.overlapping)}),Object(u.a)(function(e){return w(e,(n=t._findByQuery(e.mediaQuery))?{mqAlias:n.alias,suffix:n.suffix}:{});var n}))},t.prototype._findByAlias=function(t){return this.breakpoints.findByAlias(t)},t.prototype._findByQuery=function(t){return this.breakpoints.findByQuery(t)},t.prototype._toMediaQuery=function(t){var e=this._findByAlias(t)||this._findByQuery(t);return e?e.mediaQuery:t},t.ngInjectableDef=Object(i.U)({factory:function(){return new t(Object(i.Y)(L),Object(i.Y)(C))},token:t,providedIn:"root"}),t}(),B=function(){return function(){}}(),V=function(){function t(){this.stylesheet=new Map}return t.prototype.addStyleToElement=function(t,e,n){var i=this.stylesheet.get(t);i?i.set(e,n):this.stylesheet.set(t,new Map([[e,n]]))},t.prototype.clearStyles=function(){this.stylesheet.clear()},t.prototype.getStyleForElement=function(t,e){var n=this.stylesheet.get(t),i="";if(n){var r=n.get(e);"number"!=typeof r&&"string"!=typeof r||(i=r+"")}return i},t.ngInjectableDef=Object(i.U)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),D=new i.p("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),Q=["row","column","row-reverse","column-reverse"];function R(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var F=function(){function t(t,e,n,i){this.elementRef=t,this.styleBuilder=e,this.styler=n,this.marshal=i,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new o.a,this.styleCache=new Map}return Object.defineProperty(t.prototype,"parentElement",{get:function(){return this.elementRef.nativeElement.parentElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nativeElement",{get:function(){return this.elementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activatedValue",{get:function(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)},set:function(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedBreakpoint)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){var e=this;Object.keys(t).forEach(function(n){if(-1!==e.inputs.indexOf(n)){var i=n.split(".").slice(1).join(".");e.setValue(t[n].currentValue,i)}})},t.prototype.ngOnDestroy=function(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)},t.prototype.init=function(t){void 0===t&&(t=[]),this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)},t.prototype.addStyles=function(t,e){var n=this.styleBuilder,i=n.shouldCache,r=this.styleCache.get(t);r&&i||(r=n.buildStyles(t,e),i&&this.styleCache.set(t,r)),this.mru=Object(c.a)({},r),this.applyStyleToElement(r),n.sideEffect(t,r,e)},t.prototype.clearStyles=function(){var t=this;Object.keys(this.mru).forEach(function(e){t.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}},t.prototype.triggerUpdate=function(){var t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY);this.marshal.updateElement(this.nativeElement,this.DIRECTIVE_KEY,t)},t.prototype.getFlexFlowDirection=function(t,e){if(void 0===e&&(e=!1),t){var n=this.styler.getFlowDirection(t),i=n[0];if(!n[1]&&e){var r=function(t){var e,n,i=function(t){var e=(t=t?t.toLowerCase():"").split(" "),n=e[0],i=e[1],r=e[2];return Q.find(function(t){return t===n})||(n=Q[0]),"inline"===i&&(i="inline"!==r?r:"",r="inline"),[n,R(i),!!r]}(t);return void 0===(e=i[1])&&(e=null),void 0===(n=i[2])&&(n=!1),{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":i[0],"flex-wrap":e||null}}(i);this.styler.applyStyleToElements(r,[t])}return i.trim()}return"row"},t.prototype.applyStyleToElement=function(t,e,n){void 0===n&&(n=this.nativeElement),this.styler.applyStyleToElement(n,t,e)},t.prototype.setValue=function(t,e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,e)},t.prototype.updateWithValue=function(t){this.addStyles(t)},t}();function P(t){for(var e in t){var n=t[e]||"";switch(e){case"display":t.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":t["-webkit-"+e]=n;break;case"flex-direction":t["-webkit-flex-direction"]=n=n||"row",t["flex-direction"]=n;break;case"order":t.order=t["-webkit-"+e]=isNaN(+n)?"0":n}}return t}var Y=function(){function t(t,e,n,i){this._serverStylesheet=t,this._serverModuleLoaded=e,this._platformId=n,this.layoutConfig=i}return t.prototype.applyStyleToElement=function(t,e,n){void 0===n&&(n=null);var i={};"string"==typeof e&&(i[e]=n,e=i),i=this.layoutConfig.disableVendorPrefixes?e:P(e),this._applyMultiValueStyleToElement(i,t)},t.prototype.applyStyleToElements=function(t,e){var n=this;void 0===e&&(e=[]);var i=this.layoutConfig.disableVendorPrefixes?t:P(t);e.forEach(function(t){n._applyMultiValueStyleToElement(i,t)})},t.prototype.getFlowDirection=function(t){var e=this.lookupStyle(t,"flex-direction");return[e||"row",this.lookupInlineStyle(t,"flex-direction")||Object(r.w)(this._platformId)&&this._serverModuleLoaded?e:""]},t.prototype.lookupAttributeValue=function(t,e){return t.getAttribute(e)||""},t.prototype.lookupInlineStyle=function(t,e){return Object(r.v)(this._platformId)?t.style.getPropertyValue(e):this._getServerStyle(t,e)},t.prototype.lookupStyle=function(t,e,n){void 0===n&&(n=!1);var i="";return t&&((i=this.lookupInlineStyle(t,e))||(Object(r.v)(this._platformId)?n||(i=getComputedStyle(t).getPropertyValue(e)):this._serverModuleLoaded&&(i=this._serverStylesheet.getStyleForElement(t,e)))),i.trim()},t.prototype._applyMultiValueStyleToElement=function(t,e){var n=this;Object.keys(t).sort().forEach(function(i){var a=t[i],o=Array.isArray(a)?a:[a];o.sort();for(var s=0,l=o;s<l.length;s++){var u=l[s];u=u?u+"":"",Object(r.v)(n._platformId)||!n._serverModuleLoaded?Object(r.v)(n._platformId)?e.style.setProperty(i,u):n._setServerStyle(e,i,u):n._serverStylesheet.addStyleToElement(e,i,u)}})},t.prototype._setServerStyle=function(t,e,n){e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var i=this._readStyleAttribute(t);i[e]=n||"",this._writeStyleAttribute(t,i)},t.prototype._getServerStyle=function(t,e){return this._readStyleAttribute(t)[e]||""},t.prototype._readStyleAttribute=function(t){var e={},n=t.getAttribute("style");if(n)for(var i=n.split(/;+/g),r=0;r<i.length;r++){var a=i[r].trim();if(a.length>0){var o=a.indexOf(":");if(-1===o)throw new Error("Invalid CSS style: "+a);e[a.substr(0,o).trim()]=a.substr(o+1).trim()}}return e},t.prototype._writeStyleAttribute=function(t,e){var n="";for(var i in e)e[i]&&(n+=i+":"+e[i]+";");t.setAttribute("style",n)},t.ngInjectableDef=Object(i.U)({factory:function(){return new t(Object(i.Y)(V,8),Object(i.Y)(D,8),Object(i.Y)(i.B),Object(i.Y)(S))},token:t,providedIn:"root"}),t}(),G=function(){function t(){this.shouldCache=!0}return t.prototype.sideEffect=function(t,e,n){},t}();function N(t,e,n){void 0===e&&(e="1"),void 0===n&&(n="1");var i=[e,n,t],r=t.indexOf("calc");if(r>0)i[2]=W(t.substring(r).trim()),2==(a=t.substr(0,r).trim().split(" ")).length&&(i[0]=a[0],i[1]=a[1]);else if(0==r)i[2]=W(t.trim());else{var a;i=3===(a=t.split(" ")).length?a:[e,n,t]}return i}function W(t){return t.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}var U=function(){function t(t,e){this.matchMedia=t,this.breakpoints=e,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.builderMap=new WeakMap,this.clearBuilderMap=new WeakMap,this.subject=new o.a,this.matchMedia.observe().subscribe(this.activate.bind(this)),this.registerBreakpoints()}return Object.defineProperty(t.prototype,"activatedBreakpoint",{get:function(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""},enumerable:!0,configurable:!0}),t.prototype.activate=function(t){var e=this.findByQuery(t.mediaQuery);e&&(t.matches&&-1===this.activatedBreakpoints.indexOf(e)?(this.activatedBreakpoints.push(e),this.activatedBreakpoints.sort(k),this.updateStyles()):t.matches||-1===this.activatedBreakpoints.indexOf(e)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(e),1),this.updateStyles()))},t.prototype.init=function(t,e,n,i,r){void 0===r&&(r=[]),this.buildElementKeyMap(t,e),K(this.builderMap,t,e,n),K(this.clearBuilderMap,t,e,i),this.watchExtraTriggers(t,e,r)},t.prototype.getValue=function(t,e,n){var i=this.elementMap.get(t);if(i){var r=void 0!==n?i.get(n):this.getFallback(i,e);if(r){var a=r.get(e);return void 0!==a?a:""}}return""},t.prototype.hasValue=function(t,e){var n=this.elementMap.get(t);if(n){var i=this.getFallback(n,e);if(i)return void 0!==i.get(e)||!1}return!1},t.prototype.setValue=function(t,e,n,i){var r=this.elementMap.get(t);if(r){var a=(r.get(i)||new Map).set(e,n);r.set(i,a),this.elementMap.set(t,r)}else r=(new Map).set(i,(new Map).set(e,n)),this.elementMap.set(t,r);this.updateElement(t,e,this.getValue(t,e))},t.prototype.trackValue=function(t,e){return this.subject.asObservable().pipe(Object(l.a)(function(n){return n.element===t&&n.key===e}))},t.prototype.updateStyles=function(){var t=this;this.elementMap.forEach(function(e,n){var i=t.getFallback(e),r=new Set(t.elementKeyMap.get(n));i&&i.forEach(function(e,i){t.updateElement(n,i,e),r.delete(i)}),r.forEach(function(i){var r=t.getFallback(e,i);if(r){var a=r.get(i);t.updateElement(n,i,a)}else t.clearElement(n,i)})})},t.prototype.clearElement=function(t,e){var n=this.clearBuilderMap.get(t);if(n){var i=n.get(e);i&&(i(),this.subject.next({element:t,key:e,value:""}))}},t.prototype.updateElement=function(t,e,n){var i=this.builderMap.get(t);if(i){var r=i.get(e);r&&(r(n),this.subject.next({element:t,key:e,value:n}))}},t.prototype.releaseElement=function(t){var e=this.watcherMap.get(t);e&&(e.forEach(function(t){return t.unsubscribe()}),this.watcherMap.delete(t));var n=this.elementMap.get(t);n&&(n.forEach(function(t,e){return n.delete(e)}),this.elementMap.delete(t))},t.prototype.buildElementKeyMap=function(t,e){var n=this.elementKeyMap.get(t);n||(n=new Set,this.elementKeyMap.set(t,n)),n.add(e)},t.prototype.watchExtraTriggers=function(t,e,n){var i=this;if(n&&n.length){var r=this.watcherMap.get(t);if(r||(r=new Map,this.watcherMap.set(t,r)),!r.get(e)){var a=s.a.apply(void 0,n).subscribe(function(){var n=i.getValue(t,e);i.updateElement(t,e,n)});r.set(e,a)}}},t.prototype.findByQuery=function(t){return this.breakpoints.findByQuery(t)},t.prototype.getFallback=function(t,e){for(var n=0;n<this.activatedBreakpoints.length;n++){var i=t.get(this.activatedBreakpoints[n].alias);if(i&&(void 0===e||i.has(e)))return i}return t.get("")},t.prototype.registerBreakpoints=function(){var t=this.breakpoints.sortedItems.map(function(t){return t.mediaQuery});this.matchMedia.registerQuery(t)},t.ngInjectableDef=Object(i.U)({factory:function(){return new t(Object(i.Y)(C),Object(i.Y)(L))},token:t,providedIn:"root"}),t}();function K(t,e,n,i){if(void 0!==i){var r=t.get(e);r||(r=new Map,t.set(e,r)),r.set(n,i)}}},"V9q+":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n("CcnG");var i=n("Ip0R"),r=n("OzfB"),a=function(){function t(t,e){Object(i.w)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return t.withConfig=function(e,n){return void 0===n&&(n=[]),{ngModule:t,providers:e.serverLoaded?[{provide:r.e,useValue:e},{provide:r.a,useValue:n,multi:!0},{provide:r.j,useValue:!0}]:[{provide:r.e,useValue:e},{provide:r.a,useValue:n,multi:!0}]}},t}()},hUWP:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return h});var i=n("mrSG"),r=n("CcnG"),a=n("Ip0R"),o=n("OzfB"),s=n("n6gG"),l=n("ny24"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.buildStyles=function(t,e){return{display:"true"===t?e.display:"none"}},e.ngInjectableDef=Object(r.U)({factory:function(){return new e},token:e,providedIn:"root"}),e}(o.k),c=function(t){function e(e,n,i,r,a,o,s){var l=t.call(this,e,n,i,r)||this;return l.elementRef=e,l.styleBuilder=n,l.styler=i,l.marshal=r,l.layoutConfig=a,l.platformId=o,l.serverModuleLoaded=s,l.DIRECTIVE_KEY="show-hide",l.display="",l.hasLayout=!1,l.hasFlexChild=!1,l}return Object(i.c)(e,t),e.prototype.ngAfterViewInit=function(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),this.marshal.trackValue(this.nativeElement,"layout").pipe(Object(l.a)(this.destroySubject)).subscribe(this.updateWithValue.bind(this));for(var t=Array.from(this.nativeElement.children),e=0;e<t.length;e++)if(this.marshal.hasValue(t[e],"flex")){this.hasFlexChild=!0;break}f.has(this.nativeElement)?this.display=f.get(this.nativeElement):(this.display=this.getDisplayStyle(),f.set(this.nativeElement,this.display)),this.init();var n=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===n||""===n?this.setValue(!0,""):this.triggerUpdate()},e.prototype.ngOnChanges=function(t){var e=this;Object.keys(t).forEach(function(n){if(-1!==e.inputs.indexOf(n)){var i=n.split("."),r=i.slice(1).join("."),a=t[n].currentValue,o=""===a||0!==a&&Object(s.b)(a);"fxHide"===i[0]&&(o=!o),e.setValue(o,r)}})},e.prototype.getDisplayStyle=function(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)},e.prototype.updateWithValue=function(t){void 0===t&&(t=!0),""!==t&&(this.addStyles(t?"true":"false",{display:this.display}),Object(a.w)(this.platformId)&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""))},e}(o.b),f=new WeakMap,p=["fxShow","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"],h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=p,e}return Object(i.c)(e,t),e}(c),d=function(){return function(){}}()}}]);