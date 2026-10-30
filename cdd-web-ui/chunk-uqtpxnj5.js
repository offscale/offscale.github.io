import{$r as yl,A as Er,An as ei$1,Ar as qr$1,B as Gm,Bn as gl$1,Br as uu$1,Bt as Tv,Cn as cn$1,Cr as pw,Ct as Pm,D as Eg,Dr as ql$1,E as Ee$1,Er as qh$1,F as GD,Fn as fu$1,Ft as Se,Gr as vm$1,Gt as Un$1,Hn as gs$1,Ht as UD,In as gc$1,Ir as tb,It as Sm$1,J as Il$1,Jn as ie,Jr as xa$1,Jt as Vh,L as Ge$1,Ln as gd$1,Mn as fe,Mr as sb,Mt as S,N as Fm$1,Nn as fg,On as du$1,Or as qm,Pr as su$1,Pt as Sb,Q as KD,Qr as yj,Qt as W,Rn as gg,Rr as ug,S as Dj,Sr as ps$1,T as Dv,Tn as dg,Un as gw,Ur as vj,V as Hh,Vr as vb,Vt as U,Wt as Um$1,Xr as xr,Yr as xm$1,Z as J,Zn as je,Zr as xu$1,Zt as Vy,_ as C$1,_t as Oh,ai as zl$1,an as Yi$1,ar as ko$1,at as Lg,b as Cw,bn as as$1,bt as Pb,c as Ar,cr as ls$1,ct as Lr,dn as ZE,dr as mj,er as jy,f as Bh,fn as Zb$1,fr as ml$1,ft as Nd$1,gr as nd$1,h as Bu$1,hn as _g,hr as nb,ht as Nj,j as F,jn as es$1,jr as rd$1,jt as Rm$1,kr as qn$1,kt as RE,ln as Z,lt as M$1,n as $h,nr as kg,o as Ah,on as Ym$1,or as le$1,ot as Lm$1,p as Bm,pn as Zm$1,pr as mm$1,qn as ib,rn as Xw,s as Am$1,si as zn,sn as Yt$1,st as Ln$1,t as $e$1,ti as yn,tr as k,u as BD,ut as Mj,vn as ab,vr as nv$1,vt as Oi,wn as de,wr as q,xr as pg,y as Cj,yr as ob,z as Gl$1,zr as us$1,zt as Tj}from"./chunk-BtZ2T9wB.js";import{_ as tr,d as co$1,f as hn$1,i as Mn,p as j,t as Ai}from"./chunk-cNPqWwuw.js";import{b as zt$1,f as he,n as C$2,o as Kt,t as B}from"./chunk-BgRDle1E.js";import{B as si$1,C as _i,D as ft$1,F as oi$1,H as yr,I as ot$1,L as p,O as gn$1,P as mn$1,R as pi$1,S as Ze,T as bn,U as yt$1,W as zt$2,_ as Qo,a as G,c as It,d as Ni$1,f as Nn,g as Qe,h as Pt$1,j as ii$1,k as gt,l as Kt$1,m as Pn,n as Bt$1,o as Ht$1,p as Ot,r as C$3,s as I,u as M$2,v as Ri$1,x as Xn$1,y as Rn}from"./chunk-BgTxYpOR.js";import{d as we$1,f as xt,l as rt$1,n as Ne,r as Se$1,s as ie$1}from"./chunk-CW5kokE4.js";import{n as i,t as d}from"./chunk-DGloXzQS.js";function Fh(e){e||(e=C$1(de));let i=new M$1(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(Gl$1(i))}function Br(e,i){let n=!i?.manualCleanup?i?.injector?.get(de)??C$1(de):null,o=ml(i?.equal),r;i?.requireSync?r=ei$1({kind:0},{equal:o}):r=ei$1({kind:1,value:i?.initialValue},{equal:o});let a,s=e.subscribe({next:l=>r.set({kind:1,value:l}),error:l=>{r.set({kind:2,error:l}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&r().kind===0)throw new S(601,!1);return a=n?.onDestroy(s.unsubscribe.bind(s)),Zb$1(()=>{let l=r();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new S(601,!1)}},{equal:i?.equal})}function ml(e=Object.is){return(i,t)=>i.kind===1&&t.kind===1&&e(i.value,t.value)}var Mi={};function C(e,i){if(Mi[e]=(Mi[e]||0)+1,typeof i==`function`)return Ri(e,(...n)=>W(U({},i(...n)),{type:e}));switch(i?i._as:`empty`){case`empty`:return Ri(e,()=>({type:e}));case`props`:return Ri(e,n=>W(U({},n),{type:e}));default:throw new Error(`Unexpected config.`)}}function E(){return{_as:`props`,_p:void 0}}function Ri(e,i){return Object.defineProperty(i,"type",{value:e,writable:!1})}function fl(e,i){if(e==null)throw new Error(`${i} must be defined.`)}var Qr=`@ngrx/store/init`;var Mt=(()=>{class e extends Un$1{constructor(){super({type:Qr})}next(t){if(typeof t==`function`)throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>`u`)throw new TypeError(`Actions must be objects`);if(typeof t.type>`u`)throw new TypeError(`Actions must have a type property`);super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵprov=fe({token:e,factory:e.ɵfac})}}return e})();var gl=[Mt];var Zr=new k(`@ngrx/store Internal Root Guard`);var jr=new k(`@ngrx/store Internal Initial State`);var Fi=new k(`@ngrx/store Initial State`);var Jr=new k(`@ngrx/store Reducer Factory`);var Vr=new k(`@ngrx/store Internal Reducer Factory Provider`);var ea=new k(`@ngrx/store Initial Reducers`);var Di=new k(`@ngrx/store Internal Initial Reducers`);var Ur=new k(`@ngrx/store Internal Store Reducers`);new k(`@ngrx/store Internal Store Features`);new k(`@ngrx/store Feature Reducers`);var zr=new k(`@ngrx/store User Provided Meta Reducers`);var Fn=new k(`@ngrx/store Meta Reducers`);var Wr=new k(`@ngrx/store Internal Resolved Meta Reducers`);var $r=new k(`@ngrx/store User Runtime Checks Config`);var Hr=new k(`@ngrx/store Internal User Runtime Checks Config`);var nn=new k(`@ngrx/store Internal Runtime Checks`);var Li=new k(`@ngrx/store Check if Action types are unique`);var on=new k(`@ngrx/store Root Store Provider`);var Ln=new k(`@ngrx/store Feature State Provider`);function vl(e,i={}){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let a=t[r];typeof e[a]==`function`&&(n[a]=e[a])}let o=Object.keys(n);return function(a,s){a=a===void 0?i:a;let l=!1,p={};for(let c=0;c<o.length;c++){let u=o[c],m=n[u],h=a[u],f=m(h,s);p[u]=f,l=l||f!==h}return l?p:a}}function bl(e,i){return Object.keys(e).filter(t=>t!==i).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function ta(...e){return function(i){if(e.length===0)return i;let t=e[e.length-1];return e.slice(0,-1).reduceRight((o,r)=>r(o),t(i))}}function na(e,i){return Array.isArray(i)&&i.length>0&&(e=ta.apply(null,[...i,e])),(t,n)=>{let o=e(t);return(r,a)=>(r=r===void 0?n:r,o(r,a))}}function Sl(e){let i=Array.isArray(e)&&e.length>0?ta(...e):t=>t;return(t,n)=>(t=i(t),(o,r)=>(o=o===void 0?n:o,t(o,r)))}var rn=class extends M$1{};var Bn=class extends Mt{};var Cl=`@ngrx/store/update-reducers`;var jn=(()=>{class e extends Un$1{get currentReducers(){return this.reducers}constructor(t,n,o,r){super(r(o,n)),this.dispatcher=t,this.initialState=n,this.reducers=o,this.reducerFactory=r}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((o,{reducers:r,reducerFactory:a,metaReducers:s,initialState:l,key:p})=>{return o[p]=typeof r==`function`?Sl(s)(r,l):na(a,s)(r,l),o},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=U(U({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=bl(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Cl,features:t})}ngOnDestroy(){this.complete()}static{this.ɵfac=function(n){return new(n||e)(Se(Bn),Se(Fi),Se(ea),Se(Jr))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac})}}return e})();var kl=[jn,{provide:rn,useExisting:jn},{provide:Bn,useExisting:Mt}];var an=(()=>{class e extends Z{ngOnDestroy(){this.complete()}static{this.ɵfac=(()=>{let t;return function(o){return(t||(t=Dv(e)))(o||e)}})()}static{this.ɵprov=fe({token:e,factory:e.ɵfac})}}return e})();var xl=[an];var Vn=class extends M$1{};var Yr=(()=>{class e extends Un$1{static{this.INIT=Qr}constructor(t,n,o,r){super(r);let s=t.pipe(zn(mm$1)).pipe(fu$1(n)),l={state:r},p=s.pipe(Gm(wl,l));this.stateSubscription=p.subscribe(({state:c,action:u})=>{this.next(c),o.next(u)}),this.state=Br(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.ɵfac=function(n){return new(n||e)(Se(Mt),Se(rn),Se(an),Se(Fi))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac})}}return e})();function wl(e={state:void 0},[i,t]){let{state:n}=e;return{state:t(n,i),action:i}}var El=[Yr,{provide:Vn,useExisting:Yr}];var ut=(()=>{class e extends M$1{constructor(t,n,o,r){super(),this.actionsObserver=n,this.reducerManager=o,this.injector=r,this.source=t,this.state=t.state}select(t,...n){return Il.call(null,t,...n)(this)}selectSignal(t,n){return Zb$1(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t,n){if(typeof t==`function`)return this.processDispatchFn(t,n);this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}processDispatchFn(t,n){fl(this.injector,`Store Injector`);let o=n?.injector??Al()??this.injector;return Nd$1(()=>{let r=t();kg(()=>this.dispatch(r))},{injector:o})}static{this.ɵfac=function(n){return new(n||e)(Se(Vn),Se(Mt),Se(jn),Se(ie))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac})}}return e})();var Ol=[ut];function Il(e,i,...t){return function(o){let r;if(typeof e==`string`){let a=[i,...t].filter(Boolean);r=o.pipe(qm(e,...a))}else if(typeof e==`function`)r=o.pipe(le$1(a=>e(a,i)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return r.pipe(Fm$1())}}function Al(){try{return C$1(ie)}catch(e){return}}var Bi=`https://ngrx.io/guide/store/configuration/runtime-checks`;function Gr(e){return e===void 0}function qr(e){return e===null}function ia(e){return Array.isArray(e)}function Rl(e){return typeof e==`string`}function Dl(e){return typeof e==`boolean`}function Ml(e){return typeof e==`number`}function oa(e){return typeof e==`object`&&e!==null}function Tl(e){return oa(e)&&!ia(e)}function Pl(e){if(!Tl(e))return!1;let i=Object.getPrototypeOf(e);return i===Object.prototype||i===null}function Ti(e){return typeof e==`function`}function Nl(e){return Ti(e)&&e.hasOwnProperty(`ɵcmp`)}function Fl(e,i){return Object.prototype.hasOwnProperty.call(e,i)}function Kr(e,i){return e===i}function Ll(e,i,t){for(let n=0;n<e.length;n++)if(!t(e[n],i[n]))return!0;return!1}function ra(e,i=Kr,t=Kr){let n=null,o=null,r;function a(){n=null,o=null}function s(c=void 0){r={result:c}}function l(){r=void 0}function p(){if(r!==void 0)return r.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!Ll(arguments,n,i))return o;let c=e.apply(null,arguments);return n=arguments,t(o,c)?o:(o=c,c)}return{memoized:p,reset:a,setResult:s,clearResult:l}}function M(...e){return jl(ra)(...e)}function Bl(e,i,t,n){if(t===void 0){let r=i.map(a=>a(e));return n.memoized.apply(null,r)}let o=i.map(r=>r(e,t));return n.memoized.apply(null,[...o,t])}function jl(e,i={stateFn:Bl}){return function(...t){let n=t;if(Array.isArray(n[0])){let[c,...u]=n;n=[...c,...u]}else n.length===1&&Vl(n[0])&&(n=Ul(n[0]));let o=n.slice(0,n.length-1),r=n[n.length-1],a=o.filter(c=>c.release&&typeof c.release==`function`),s=e(function(...c){return r.apply(null,c)}),l=ra(function(c,u){return i.stateFn.apply(null,[c,o,u,s])});function p(){l.reset(),s.reset(),a.forEach(c=>c.release())}return Object.assign(l.memoized,{release:p,projector:s.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Vl(e){return!!e&&typeof e==`object`&&Object.values(e).every(i=>typeof i==`function`)}function Ul(e){let i=Object.values(e),t=Object.keys(e),n=(...o)=>t.reduce((r,a,s)=>W(U({},r),{[a]:o[s]}),{});return[...i,n]}function zl(e){return e instanceof k?C$1(e):e}function aa(e){return typeof e==`function`?e():e}function Wl(e,i){return e.concat(i)}function $l(){if(C$1(ut,{optional:!0,skipSelf:!0}))throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);return`guarded`}function Hl(e,i){return function(t,n){let r=e(t,i.action(n)?Pi(n):n);return i.state()?Pi(r):r}}function Pi(e){Object.freeze(e);let i=Ti(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith(`ɵ`)&&Fl(e,t)&&(!i||t!==`caller`&&t!==`callee`&&t!==`arguments`)){let n=e[t];(oa(n)||Ti(n))&&!Object.isFrozen(n)&&Pi(n)}}),e}function Yl(e,i){return function(t,n){if(i.action(n))Xr(Ni(n),`action`);let o=e(t,n);if(i.state())Xr(Ni(o),`state`);return o}}function Ni(e,i=[]){return(Gr(e)||qr(e))&&i.length===0?{path:[`root`],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;let r=e[o];return Nl(r)?n:Gr(r)||qr(r)||Ml(r)||Dl(r)||Rl(r)||ia(r)?!1:Pl(r)?Ni(r,[...i,o]):{path:[...i,o],value:r}},!1)}function Xr(e,i){if(e===!1)return;let t=e.path.join(`.`),n=/* @__PURE__ */ new Error(`Detected unserializable ${i} at "${t}". ${Bi}#strict${i}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function Gl(e,i){return function(t,n){if(i.action(n)&&!J.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${Bi}#strictactionwithinngzone`);return e(t,n)}}function ql(e){return Mj()?U({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Kl({strictActionSerializability:e,strictStateSerializability:i}){return t=>e||i?Yl(t,{action:n=>e&&!ji(n),state:()=>i}):t}function Xl({strictActionImmutability:e,strictStateImmutability:i}){return t=>e||i?Hl(t,{action:n=>e&&!ji(n),state:()=>i}):t}function ji(e){return e.type.startsWith(`@ngrx`)}function Ql({strictActionWithinNgZone:e}){return i=>e?Gl(i,{action:t=>e&&!ji(t)}):i}function Zl(e){return[{provide:Hr,useValue:e},{provide:$r,useFactory:ec,deps:[Hr]},{provide:nn,deps:[$r],useFactory:ql},{provide:Fn,multi:!0,deps:[nn],useFactory:Xl},{provide:Fn,multi:!0,deps:[nn],useFactory:Kl},{provide:Fn,multi:!0,deps:[nn],useFactory:Ql}]}function Jl(){return[{provide:Li,multi:!0,deps:[nn],useFactory:tc}]}function ec(e){return e}function tc(e){if(!e.strictActionTypeUniqueness)return;let i=Object.entries(Mi).filter(([,t])=>t>1).map(([t])=>t);if(i.length)throw new Error(`Action types are registered more than once, ${i.map(t=>`"${t}"`).join(`, `)}. ${Bi}#strictactiontypeuniqueness`)}function nc(e={},i={}){return[{provide:Zr,useFactory:$l},{provide:jr,useValue:i.initialState},{provide:Fi,useFactory:aa,deps:[jr]},{provide:Di,useValue:e},{provide:Ur,useExisting:e instanceof k?e:Di},{provide:ea,deps:[Di,[new Tv(Ur)]],useFactory:zl},{provide:zr,useValue:i.metaReducers?i.metaReducers:[]},{provide:Wr,deps:[Fn,zr],useFactory:Wl},{provide:Vr,useValue:i.reducerFactory?i.reducerFactory:vl},{provide:Jr,deps:[Vr,Wr],useFactory:na},gl,kl,xl,El,Ol,Zl(i.runtimeChecks),Jl()]}function ic(){C$1(Mt),C$1(rn),C$1(an),C$1(ut),C$1(Zr,{optional:!0}),C$1(Li,{optional:!0})}var oc=[{provide:on,useFactory:ic},Bu$1(()=>C$1(on))];function Yh(e,i){return yn([...nc(e,i),oc])}Bu$1(()=>C$1(Ln));function qh(...e){return{reducer:e.pop(),types:e.map(n=>n.type)}}function Kh(e,...i){let t=/* @__PURE__ */ new Map;for(let n of i)for(let o of n.types){let r=t.get(o);if(r){let a=(s,l)=>n.reducer(r(s,l),l);t.set(o,a)}else t.set(o,n.reducer)}return function(n=e,o){let r=t.get(o.type);return r?r(n,o):n}}var Zh=C(`[Workspace] Toggle Orientation`);var Jh=C(`[Workspace] Set Orientation`,E());var em=C(`[Workspace] Set Selected Language`,E());var tm=C(`[Workspace] Set Target`,E());var nm=C(`[Workspace] Set Language Options`,E());var im=C(`[OpenAPI] Update Spec Content`,E());var om=C(`[OpenAPI] Set Validation Errors`,E());var rm=C(`[FileTree] Select File`,E());var am=C(`[FileTree] Update Active File Content`,E());var sm=C(`[FileTree] Set Generated Files`,E());var lm=C(`[Workspace] Execute Run`);var cm=C(`[Workspace] Execute Run Start`);var dm=C(`[Workspace] Execute Run Success`,E());var pm=C(`[Workspace] Execute Run Failure`,E());var um=C(`[Workspace] Set Online Mode`,E());var hm=C(`[OpenAPI] Set Input Format`,E());var mm=C(`[OpenAPI] Set Input Mode`,E());var fm=C(`[OpenAPI] Add URL`,E());var gm=C(`[OpenAPI] Update URL`,E());var _m=C(`[OpenAPI] Remove URL`,E());var ym=C(`[OpenAPI] Reorder URLs`,E());var vm=C(`[OpenAPI] Clear URLs`);var bm=C(`[OpenAPI] Fetch URLs`,E());var Sm=C(`[OpenAPI] Fetch URL Start`,E());var Cm=C(`[OpenAPI] Fetch URL Success`,E());var km=C(`[OpenAPI] Fetch URL Failure`,E());var xm=C(`[OpenAPI] Apply Fetched URLs To Spec`,E());var wm=C(`[Workspace] Toggle API Docs Pane`);var Em=C(`[Workspace] Set API Docs Visibility`,E());var Om=C(`[Workspace] Resize Bottom Pane`,E());var Im=C(`[ApiDocs] Iframe Loaded Successfully`);var Am=C(`[ApiDocs] Iframe Load Failed`,E());var Rm=C(`[ApiDocs] Load Docs JSON`,E());var Dm=C(`[ApiDocs] Load Docs JSON Success`,E());var Mm=C(`[ApiDocs] Load Docs JSON Failure`,E());var Ce=e=>e.workspace;var sa=e=>e.fileTree;var Tt=e=>e.openApi;var Nm=M(Ce,e=>e.orientation);var Fm=M(Ce,e=>e.isExecuting);var Lm=M(Ce,e=>e.executionError);M(Ce,e=>e.isOnlineMode);var sc=M(Ce,e=>e.selectedLanguageId);var jm=M(Ce,e=>e.target);var Vm=M(sc,M(Ce,e=>e.languageOptions),(e,i)=>i[e]||{});var la=M(sa,e=>e.files);var cc=M(sa,e=>e.activeFilePath);var Um=M(la,cc,(e,i)=>{if(!i)return null;let t=e.find(n=>n.path===i);return t?new TextDecoder().decode(t.content):null});var zm=M(Tt,e=>e.specContent);M(Tt,e=>e.validationErrors);var $m=M(Tt,e=>e.inputFormat);var Hm=M(Tt,e=>e.activeInputMode);var ca=M(Tt,e=>e.specUrls);var Ym=M(Tt,e=>e.isFetchingUrls);M(ca,e=>e.filter(i=>i.url.trim().length>0).length);M(ca,e=>e.filter(i=>!!i.error).map(i=>i.error));var Km=M(Ce,e=>e.isApiDocsVisible);var Xm=M(Ce,e=>e.apiDocsPaneHeight);M(Ce,e=>e.apiDocsLoadState);var Zm=M(Ce,e=>e?.docsJsonLanguageId);var Jm=M(M(Ce,e=>e?.docsJsonFiles?e.docsJsonLanguageId&&e.docsJsonLanguageId!==e.selectedLanguageId?[]:e.docsJsonFiles:[]),la,(e,i)=>e.length>0?e:i.filter(t=>t.path===`docs.json`||t.path.endsWith(`/docs.json`)));var tf=`openapi: 3.0.4
info:
  title: Swagger Petstore - OpenAPI 3.0
  description: |-
    This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
    Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
    You can now help us improve the API whether it's by making changes to the definition itself or to the code.
    That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

    Some useful links:
    - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
    - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
  termsOfService: https://swagger.io/terms/
  contact:
    email: apiteam@swagger.io
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.27
externalDocs:
  description: Find out more about Swagger
  url: https://swagger.io
servers:
- url: /api/v3
tags:
- name: pet
  description: Everything about your Pets
  externalDocs:
    description: Find out more
    url: https://swagger.io
- name: store
  description: Access to Petstore orders
  externalDocs:
    description: Find out more about our store
    url: https://swagger.io
- name: user
  description: Operations about user
paths:
  /pet:
    put:
      tags:
      - pet
      summary: Update an existing pet.
      description: Update an existing pet by Id.
      operationId: updatePet
      requestBody:
        description: Update an existent pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
          application/xml:
            schema:
              $ref: '#/components/schemas/Pet'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Pet'
        required: true
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid ID supplied
        "404":
          description: Pet not found
        "422":
          description: Validation exception
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
    post:
      tags:
      - pet
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
          application/xml:
            schema:
              $ref: '#/components/schemas/Pet'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Pet'
        required: true
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid input
        "422":
          description: Validation exception
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/findByStatus:
    get:
      tags:
      - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
      - name: status
        in: query
        description: Status values that need to be considered for filter
        required: true
        explode: true
        schema:
          type: string
          default: available
          enum:
          - available
          - pending
          - sold
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid status value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/findByTags:
    get:
      tags:
      - pet
      summary: Finds Pets by tags.
      description: "Multiple tags can be provided with comma separated strings. Use$
         tag1, tag2, tag3 for testing."
      operationId: findPetsByTags
      parameters:
      - name: tags
        in: query
        description: Tags to filter by
        required: true
        explode: true
        schema:
          type: array
          items:
            type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid tag value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/{petId}:
    get:
      tags:
      - pet
      summary: Find pet by ID.
      description: Returns a single pet.
      operationId: getPetById
      parameters:
      - name: petId
        in: path
        description: ID of pet to return
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid ID supplied
        "404":
          description: Pet not found
        default:
          description: Unexpected error
      security:
      - api_key: []
      - petstore_auth:
        - write:pets
        - read:pets
    post:
      tags:
      - pet
      summary: Updates a pet in the store with form data.
      description: Updates a pet resource based on the form data.
      operationId: updatePetWithForm
      parameters:
      - name: petId
        in: path
        description: ID of pet that needs to be updated
        required: true
        schema:
          type: integer
          format: int64
      - name: name
        in: query
        description: Name of pet that needs to be updated
        schema:
          type: string
      - name: status
        in: query
        description: Status of pet that needs to be updated
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid input
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
    delete:
      tags:
      - pet
      summary: Deletes a pet.
      description: Delete a pet.
      operationId: deletePet
      parameters:
      - name: api_key
        in: header
        description: ""
        required: false
        schema:
          type: string
      - name: petId
        in: path
        description: Pet id to delete
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: Pet deleted
        "400":
          description: Invalid pet value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/{petId}/uploadImage:
    post:
      tags:
      - pet
      summary: Uploads an image.
      description: Upload image of the pet.
      operationId: uploadFile
      parameters:
      - name: petId
        in: path
        description: ID of pet to update
        required: true
        schema:
          type: integer
          format: int64
      - name: additionalMetadata
        in: query
        description: Additional Metadata
        required: false
        schema:
          type: string
      requestBody:
        content:
          application/octet-stream:
            schema:
              type: string
              format: binary
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ApiResponse'
        "400":
          description: No file uploaded
        "404":
          description: Pet not found
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /store/inventory:
    get:
      tags:
      - store
      summary: Returns pet inventories by status.
      description: Returns a map of status codes to quantities.
      operationId: getInventory
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  type: integer
                  format: int32
        default:
          description: Unexpected error
      security:
      - api_key: []
  /store/order:
    post:
      tags:
      - store
      summary: Place an order for a pet.
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Order'
          application/xml:
            schema:
              $ref: '#/components/schemas/Order'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Order'
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
        "400":
          description: Invalid input
        "422":
          description: Validation exception
        default:
          description: Unexpected error
  /store/order/{orderId}:
    get:
      tags:
      - store
      summary: Find purchase order by ID.
      description: For valid response try integer IDs with value <= 5 or > 10. Other
        values will generate exceptions.
      operationId: getOrderById
      parameters:
      - name: orderId
        in: path
        description: ID of order that needs to be fetched
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
            application/xml:
              schema:
                $ref: '#/components/schemas/Order'
        "400":
          description: Invalid ID supplied
        "404":
          description: Order not found
        default:
          description: Unexpected error
    delete:
      tags:
      - store
      summary: Delete purchase order by identifier.
      description: For valid response try integer IDs with value < 1000. Anything
        above 1000 or non-integers will generate API errors.
      operationId: deleteOrder
      parameters:
      - name: orderId
        in: path
        description: ID of the order that needs to be deleted
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: order deleted
        "400":
          description: Invalid ID supplied
        "404":
          description: Order not found
        default:
          description: Unexpected error
  /user:
    post:
      tags:
      - user
      summary: Create user.
      description: This can only be done by the logged in user.
      operationId: createUser
      requestBody:
        description: Created user object
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
          application/xml:
            schema:
              $ref: '#/components/schemas/User'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        default:
          description: Unexpected error
  /user/createWithList:
    post:
      tags:
      - user
      summary: Creates list of users with given input array.
      description: Creates list of users with given input array.
      operationId: createUsersWithListInput
      requestBody:
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/User'
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        default:
          description: Unexpected error
  /user/login:
    get:
      tags:
      - user
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      parameters:
      - name: username
        in: query
        description: The user name for login
        required: false
        schema:
          type: string
      - name: password
        in: query
        description: The password for login in clear text
        required: false
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          headers:
            X-Rate-Limit:
              description: calls per hour allowed by the user
              schema:
                type: integer
                format: int32
            X-Expires-After:
              description: date in UTC when token expires
              schema:
                type: string
                format: date-time
          content:
            application/xml:
              schema:
                type: string
            application/json:
              schema:
                type: string
        "400":
          description: Invalid username/password supplied
        default:
          description: Unexpected error
  /user/logout:
    get:
      tags:
      - user
      summary: Logs out current logged in user session.
      description: Log user out of the system.
      operationId: logoutUser
      parameters: []
      responses:
        "200":
          description: successful operation
        default:
          description: Unexpected error
  /user/{username}:
    get:
      tags:
      - user
      summary: Get user by user name.
      description: Get user detail based on username.
      operationId: getUserByName
      parameters:
      - name: username
        in: path
        description: The name that needs to be fetched. Use user1 for testing
        required: true
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        "400":
          description: Invalid username supplied
        "404":
          description: User not found
        default:
          description: Unexpected error
    put:
      tags:
      - user
      summary: Update user resource.
      description: This can only be done by the logged in user.
      operationId: updateUser
      parameters:
      - name: username
        in: path
        description: name that need to be deleted
        required: true
        schema:
          type: string
      requestBody:
        description: Update an existent user in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
          application/xml:
            schema:
              $ref: '#/components/schemas/User'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        "200":
          description: successful operation
        "400":
          description: bad request
        "404":
          description: user not found
        default:
          description: Unexpected error
    delete:
      tags:
      - user
      summary: Delete user resource.
      description: This can only be done by the logged in user.
      operationId: deleteUser
      parameters:
      - name: username
        in: path
        description: The name that needs to be deleted
        required: true
        schema:
          type: string
      responses:
        "200":
          description: User deleted
        "400":
          description: Invalid username supplied
        "404":
          description: User not found
        default:
          description: Unexpected error
components:
  schemas:
    Order:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        petId:
          type: integer
          format: int64
          example: 198772
        quantity:
          type: integer
          format: int32
          example: 7
        shipDate:
          type: string
          format: date-time
        status:
          type: string
          description: Order Status
          example: approved
          enum:
          - placed
          - approved
          - delivered
        complete:
          type: boolean
      xml:
        name: order
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 1
        name:
          type: string
          example: Dogs
      xml:
        name: category
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        username:
          type: string
          example: theUser
        firstName:
          type: string
          example: John
        lastName:
          type: string
          example: James
        email:
          type: string
          example: john@email.com
        password:
          type: string
          example: "12345"
        phone:
          type: string
          example: "12345"
        userStatus:
          type: integer
          description: User Status
          format: int32
          example: 1
      xml:
        name: user
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
      xml:
        name: tag
    Pet:
      required:
      - name
      - photoUrls
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        name:
          type: string
          example: doggie
        category:
          $ref: '#/components/schemas/Category'
        photoUrls:
          type: array
          xml:
            wrapped: true
          items:
            type: string
            xml:
              name: photoUrl
        tags:
          type: array
          xml:
            wrapped: true
          items:
            $ref: '#/components/schemas/Tag'
        status:
          type: string
          description: pet status in the store
          enum:
          - available
          - pending
          - sold
      xml:
        name: pet
    ApiResponse:
      type: object
      properties:
        code:
          type: integer
          format: int32
        type:
          type: string
        message:
          type: string
      xml:
        name: '##default'
  requestBodies:
    Pet:
      description: Pet object that needs to be added to the store
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Pet'
        application/xml:
          schema:
            $ref: '#/components/schemas/Pet'
    UserArray:
      description: List of user object
      content:
        application/json:
          schema:
            type: array
            items:
              $ref: '#/components/schemas/User'
  securitySchemes:
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://petstore3.swagger.io/oauth/authorize
          scopes:
            write:pets: modify pets in your account
            read:pets: read your pets
    api_key:
      type: apiKey
      name: api_key
      in: header
`;var nf=`openapi: 3.0.0
info:
  # title
  title: Hello World API
  # version
  version: 1.0.0
paths:
  /hello:
    # get
    get:
      summary: Returns a greeting
      responses:
        "200":
          description: A simple greeting
          content:
            text/plain:
              schema:
                type: string
                example: Hello, World!`;function da(e){return Error(`Unable to find icon with the name "${e}"`)}function pc(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function pa(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function ua(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var $e=class{url;svgText;options;svgElement=null;constructor(i,t,n){this.url=i,this.svgText=t,this.options=n}};var ma=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(t,n,o,r){this._httpClient=t,this._sanitizer=n,this._errorHandler=r,this._document=o}addSvgIcon(t,n,o){return this.addSvgIconInNamespace(``,t,n,o)}addSvgIconLiteral(t,n,o){return this.addSvgIconLiteralInNamespace(``,t,n,o)}addSvgIconInNamespace(t,n,o,r){return this._addSvgIconConfig(t,n,new $e(o,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,n,o,r){let a=this._sanitizer.sanitize(F.HTML,o);if(!a)throw ua(o);let s=gn$1(a);return this._addSvgIconConfig(t,n,new $e(``,s,r))}addSvgIconSet(t,n){return this.addSvgIconSetInNamespace(``,t,n)}addSvgIconSetLiteral(t,n){return this.addSvgIconSetLiteralInNamespace(``,t,n)}addSvgIconSetInNamespace(t,n,o){return this._addSvgIconSetConfig(t,new $e(n,null,o))}addSvgIconSetLiteralInNamespace(t,n,o){let r=this._sanitizer.sanitize(F.HTML,n);if(!r)throw ua(n);let a=gn$1(r);return this._addSvgIconSetConfig(t,new $e(``,a,o))}registerFontClassAlias(t,n=t){return this._fontCssClassesByAlias.set(t,n),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=hc(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let n=this._sanitizer.sanitize(F.RESOURCE_URL,t);if(!n)throw pa(t);let o=this._cachedIconsByUrl.get(n);return o?ls$1(Un(o)):this._loadSvgIconFromConfig(new $e(t,null)).pipe(zl$1(r=>this._cachedIconsByUrl.set(n,r)),le$1(r=>Un(r)))}getNamedSvgIcon(t,n=``){let o=ha(n,t),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(n,t),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(t,a):us$1(da(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?ls$1(Un(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(le$1(n=>Un(n)))}_getSvgFromIconSetConfigs(t,n){let o=this._extractIconWithNameFromAnySet(t,n);if(o)return ls$1(o);let r=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(su$1(s=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(F.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(p)),ls$1(null)})));return xm$1(r).pipe(le$1(()=>{let a=this._extractIconWithNameFromAnySet(t,n);if(!a)throw da(t);return a}))}_extractIconWithNameFromAnySet(t,n){for(let o=n.length-1;o>=0;o--){let r=n[o];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(a,t,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(zl$1(n=>t.svgText=n),le$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?ls$1(null):this._fetchIcon(t).pipe(zl$1(n=>t.svgText=n))}_extractSvgIconFromSet(t,n,o){let r=t.querySelector(`[id="${n}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute(`id`),a.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(a),o);let s=this._svgElementFromString(gn$1(`<svg></svg>`));return s.appendChild(a),this._setSvgAttributes(s,o)}_svgElementFromString(t){let n=this._document.createElement(`DIV`);n.innerHTML=t;let o=n.querySelector(`svg`);if(!o)throw Error(`<svg> tag not found`);return o}_toSvgElement(t){let n=this._svgElementFromString(gn$1(`<svg></svg>`)),o=t.attributes;for(let r=0;r<o.length;r++){let{name:a,value:s}=o[r],l=a.toLowerCase();l!==`id`&&!l.startsWith(`on`)&&n.setAttribute(a,s)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&n.appendChild(t.childNodes[r].cloneNode(!0));return n}_setSvgAttributes(t,n){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),n&&n.viewBox&&t.setAttribute(`viewBox`,n.viewBox),t}_fetchIcon(t){let{url:n,options:o}=t,r=o?.withCredentials??!1;if(!this._httpClient)throw pc();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(F.RESOURCE_URL,n);if(!a)throw pa(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:`text`,withCredentials:r}).pipe(le$1(p=>gn$1(p)),ql$1(()=>this._inProgressUrlFetches.delete(a)),gs$1());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(t,n,o){return this._svgIconConfigs.set(ha(t,n),o),this}_addSvgIconSetConfig(t,n){let o=this._iconSetConfigs.get(t);return o?o.push(n):this._iconSetConfigs.set(t,[n]),this}_svgElementFromConfig(t){if(!t.svgElement){let n=this._svgElementFromString(t.svgText);this._setSvgAttributes(n,t.options),t.svgElement=n}return t.svgElement}_getIconConfigFromResolvers(t,n){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](n,t);if(r)return uc(r)?new $e(r.url,null,r.options):new $e(r,null)}}static ɵfac=function(n){return new(n||e)(Se(tr,8),Se(Ai),Se(Er,8),Se(Ge$1))};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();function Un(e){return e.cloneNode(!0)}function ha(e,i){return e+`:`+i}function uc(e){return!!(e.url&&e.options)}function hc(e){let i=null,t=!1;return e.fonts&&typeof e.fonts.forEach==`function`&&e.fonts.forEach(n=>{let o=n.family.replace(/['"]/g,``).trim().toLowerCase();(o===`material icons`||o.startsWith(`material icons `))&&(t=!0),o.startsWith(`material symbols rounded`)?i=`rounded`:o.startsWith(`material symbols sharp`)?i=`sharp`:o.startsWith(`material symbols`)&&(i=`outlined`)}),[i&&!t?`material-symbols-${i}`:`material-icons`,`mat-ligature-font`]}var mc=new k(`MAT_ICON_DEFAULT_OPTIONS`);var fc=new k(`mat-icon-location`,{providedIn:`root`,factory:()=>{let e=C$1(Er),i=e?e.location:null;return{getPathname:()=>i?i.pathname+i.search:``}}});var fa=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var gc=fa.map(e=>`[${e}]`).join(`, `);var _c=/^url\(['"]?#(.*?)['"]?\)$/;var xf=(()=>{class e{_elementRef=C$1(Lr);_iconRegistry=C$1(ma);_location=C$1(fc);_errorHandler=C$1(Ge$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let n=this._cleanupFontValue(t);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let n=this._cleanupFontValue(t);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=q.EMPTY;constructor(){let t=C$1(new Lg(`aria-hidden`),{optional:!0}),n=C$1(mc,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let n=t.split(`:`);switch(n.length){case 1:return[``,n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,n=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let o=t.childNodes[n];(o.nodeType!==1||o.nodeName.toLowerCase()===`svg`)&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),n.forEach(o=>t.classList.add(o)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let n=this._elementsWithExternalReferences,o=t.startsWith(`//`)?`/.${t}`:t;n&&n.forEach((r,a)=>{r.forEach(s=>{a.setAttribute(s.name,`url('${o}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let n=t.querySelectorAll(gc),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let r=0;r<n.length;r++)fa.forEach(a=>{let s=n[r],l=s.getAttribute(a),p=l?l.match(_c):null;if(p){let c=o.get(s);c||(c=[],o.set(s,c)),c.push({name:a,value:p[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[n,o]=this._splitIconName(t);n&&(this._svgNamespace=n),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,n).pipe(ps$1(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${n}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){return BD({type:e,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(o,r){o&2&&(Vh(`data-mat-icon-type`,r._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,r._svgName||r.fontIcon)(`data-mat-icon-namespace`,r._svgNamespace||r.fontSet)(`fontIcon`,r._usingFontIcon()?r.fontIcon:null),vb(r.color?`mat-`+r.color:``),Eg(`mat-icon-inline`,r.inline)(`mat-icon-no-color`,r.color!==`primary`&&r.color!==`accent`&&r.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Cj],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(o,r){o&1&&(tb(),nb(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return e})();var wf=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[It]})}return e})();var ga=(()=>{class e{_animationsDisabled=G();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,o){n&2&&Eg(`mat-pseudo-checkbox-indeterminate`,o.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,o.state===`checked`)(`mat-pseudo-checkbox-disabled`,o.disabled)(`mat-pseudo-checkbox-minimal`,o.appearance===`minimal`)(`mat-pseudo-checkbox-full`,o.appearance===`full`)(`_mat-animation-noopable`,o._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return e})();var Ui=new k(`MAT_OPTION_PARENT_COMPONENT`);var zi=new k(`MatOptgroup`);var Vi=class{source;isUserInput;constructor(i,t=!1){this.source=i,this.isUserInput=t}};var $n=(()=>{class e{_element=C$1(Lr);_changeDetectorRef=C$1(Dj);_parent=C$1(Ui,{optional:!0});group=C$1(zi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=C$1(Kt$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=ei$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $e$1;_text;_stateChanges=new Z;constructor(){let t=C$1(C$3);t.load(mn$1),t.load(gt),this._signalDisableRipple=!!this._parent&&xa$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,n){let o=this._getHostElement();typeof o.focus==`function`&&o.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Qe(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Vi(this,t))}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`text`],n=[[[`mat-icon`]],`*`],o=[`mat-icon`,`*`];function r(l,p){if(l&1&&Bh(0,`mat-pseudo-checkbox`,1),l&2){let c=Xw();Hh(`disabled`,c.disabled)(`state`,c.selected?`checked`:`unchecked`)}}function a(l,p){if(l&1&&Bh(0,`mat-pseudo-checkbox`,3),l&2){let c=Xw();Hh(`disabled`,c.disabled)}}function s(l,p){if(l&1&&(Oi(0,`span`,4),Sb(1),gl$1()),l&2){let c=Xw();ZE(),Il$1(`(`,c.group.label,`)`)}}return BD({type:e,selectors:[[`mat-option`]],viewQuery:function(p,c){if(p&1&&pg(t,7),p&2){let u;ob(u=ib())&&(c._text=u.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(p,c){p&1&&ug(`click`,function(){return c._selectViaInteraction()})(`keydown`,function(m){return c._handleKeydown(m)}),p&2&&(qh$1(`id`,c.id),Vh(`aria-selected`,c.selected)(`aria-disabled`,c.disabled.toString()),Eg(`mdc-list-item--selected`,c.selected)(`mat-mdc-option-multiple`,c.multiple)(`mat-mdc-option-active`,c.active)(`mdc-list-item--disabled`,c.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Cj]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:o,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(p,c){p&1&&(tb(n),pw(0,r,1,2,`mat-pseudo-checkbox`,1),nb(1),Oi(2,`span`,2,0),nb(4,1),gl$1(),pw(5,a,1,1,`mat-pseudo-checkbox`,3),pw(6,s,2,1,`span`,4),Bh(7,`div`,5)),p&2&&(gw(c.multiple?0:-1),ZE(5),gw(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),ZE(),gw(c.group&&c.group._inert?6:-1),ZE(),Hh(`matRippleTrigger`,c._getHostElement())(`matRippleDisabled`,c.disabled||c.disableRipple))},dependencies:[ga,Ri$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return e})();function _a(e,i,t){if(t.length){let n=i.toArray(),o=t.toArray(),r=0;for(let a=0;a<e+1;a++)n[a].group&&n[a].group===o[r]&&r++;return r}return 0}function ya(e,i,t,n){return e<t?e:e+i>t+n?Math.max(0,e-n+i):t}var sn=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,t,n=!0,o){this._multiple=i,this._emitChanges=n,this.compareWith=o,t&&t.length&&(i?t.forEach(r=>this._markSelected(r)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(i){this._verifyValueAssignment(i);let t=this.selected,n=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),t.filter(r=>!n.has(this._getConcreteValue(r,n))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let n of t)if(this.compareWith(i,n))return n;return i}else return i}};var yc=20;var mt=(()=>{class e{_ngZone=C$1(J);_platform=C$1(p);_renderer=C$1(Ar).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=yc){return this._platform.isBrowser?new M$1(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Rm$1(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ls$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let o=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(cn$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,t)&&n.push(r)}),n}_targetContainsElement(t,n){let o=M$2(n),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var Wi=(()=>{class e{elementRef=C$1(Lr);scrollDispatcher=C$1(mt);ngZone=C$1(J);dir=C$1(Xn$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Z;_renderer=C$1(gc$1);_cleanupScroll;_elementScrolled=new Z;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let n=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;t.left??=o?t.end:t.start,t.right??=o?t.start:t.end,t.bottom!=null&&(t.top=n.scrollHeight-n.clientHeight-t.bottom),o&&ii$1()!=ot$1.NORMAL?(t.left!=null&&(t.right=n.scrollWidth-n.clientWidth-t.left),ii$1()==ot$1.INVERTED?t.left=t.right:ii$1()==ot$1.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=n.scrollWidth-n.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let n=this.elementRef.nativeElement;oi$1()?n.scrollTo(t):(t.top!=null&&(n.scrollTop=t.top),t.left!=null&&(n.scrollLeft=t.left))}measureScrollOffset(t){let n=`left`,o=`right`,r=this.elementRef.nativeElement;if(t==`top`)return r.scrollTop;if(t==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return t==`start`?t=a?o:n:t==`end`&&(t=a?n:o),a&&ii$1()==ot$1.INVERTED?t==n?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&ii$1()==ot$1.NEGATED?t==n?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==n?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return e})();var vc=20;var et=(()=>{class e{_platform=C$1(p);_listeners;_viewportSize=null;_change=new Z;_document=C$1(Er);constructor(){let t=C$1(J),n=C$1(Ar).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[n.listen(`window`,`resize`,o),n.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect();return{top:-r.top||t.body?.scrollTop||n.scrollY||o.scrollTop||0,left:-r.left||t.body?.scrollLeft||n.scrollX||o.scrollLeft||0}}change(t=vc){return t>0?this._change.pipe(Rm$1(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var ht=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({})}return e})();var $i=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[It,ht,It,ht]})}return e})();var ln=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var we=class extends ln{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,n,o,r,a){super(),this.component=i,this.viewContainerRef=t,this.injector=n,this.projectableNodes=o,this.bindings=r||null,this.directives=a||null}};var Me=class extends ln{templateRef;viewContainerRef;context;injector;constructor(i,t,n,o){super(),this.templateRef=i,this.viewContainerRef=t,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Hi=class extends ln{element;constructor(i){super(),this.element=i instanceof Lr?i.nativeElement:i}};var tt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof we)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Me)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Hi)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Hn=class extends tt{outletElement;_appRef;_defaultInjector;constructor(i,t,n){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=n}attachComponentPortal(i){let t;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,o=n.get(Ln$1,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,o=i.injector||this._defaultInjector||ie.NULL,r=o.get(Ee$1,n.injector);t=Nj(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,n=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(n);o!==-1&&t.remove(o)}),this._attachedPortal=i,n}attachDomPortal=i=>{let t=i.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Cg=(()=>{class e extends Me{constructor(){let t=C$1(xr),n=C$1(Yi$1);super(t,n)}static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Ah]})}return e})();var nt=(()=>{class e extends tt{_moduleRef=C$1(Ln$1,{optional:!0});_document=C$1(Er);_viewContainerRef=C$1(Yi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new $e$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=n.createComponent(t.component,{index:n.length,injector:t.injector||n.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=t=>{let n=t.element;n.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(o){return(t||(t=Dv(e)))(o||e)}})();static ɵdir=GD({type:e,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Ah]})}return e})();var it=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({})}return e})();var va=oi$1();function Ft(e){return new Yn(e.get(et),e.get(Er))}var Yn=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=_i(-this._previousScrollPosition.left),i.style.top=_i(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,n=i.style,o=t.style,r=n.scrollBehavior||``,a=o.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),va&&(n.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),va&&(n.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function Ea(e,i){return new Gn(e.get(mt),e.get(J),e.get(et),i)}var Gn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,n,o){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=n,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(cn$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var cn=class{enable(){}disable(){}attach(){}};function Gi(e,i){return i.some(t=>{let n=e.bottom<t.top,o=e.top>t.bottom,r=e.right<t.left,a=e.left>t.right;return n||o||r||a})}function ba(e,i){return i.some(t=>{let n=e.top<t.top,o=e.bottom>t.bottom,r=e.left<t.left,a=e.right>t.right;return n||o||r||a})}function _t(e,i){return new qn(e.get(mt),e.get(et),e.get(J),i)}var qn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,n,o){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=n,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();Gi(t,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Oa=(()=>{class e{_injector=C$1(ie);noop=()=>new cn;close=t=>Ea(this._injector,t);block=()=>Ft(this._injector);reposition=t=>_t(this._injector,t);static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var He=class{positionStrategy;scrollStrategy=new cn;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let n of t)i[n]!==void 0&&(this[n]=i[n])}}};var Kn=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var Ia=(()=>{class e{_attachedOverlays=[];_document=C$1(Er);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var Aa=(()=>{class e extends Ia{_ngZone=C$1(J);_renderer=C$1(Ar).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let r=n[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var Ra=(()=>{class e extends Ia{_platform=C$1(p);_ngZone=C$1(J);_renderer=C$1(Ar).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(n,`pointerdown`,this._pointerDownListener,o),r.listen(n,`click`,this._clickListener,o),r.listen(n,`auxclick`,this._clickListener,o),r.listen(n,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=I(t)};_clickListener=t=>{let n=I(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(Sa(s.overlayElement,n)||Sa(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();function Sa(e,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,n=i;for(;n;){if(n===e)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Da=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return e})();var Zn=(()=>{class e{_platform=C$1(p);_containerElement;_document=C$1(Er);_styleLoader=C$1(C$3);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||si$1()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let n=this._document.createElement(`div`);n.classList.add(t),si$1()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Da)}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var qi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,n,o){this._renderer=t,this._ngZone=n,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ki(e){return e&&e.nodeType===1}var Yi=ei$1([]);var Pt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(i,t,n,o,r,a,s,l,p,c=!1,u,m){this._portalOutlet=i,this._host=t,this._pane=n,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=p,this._animationsDisabled=c,this._injector=u,this._renderer=m,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),kg(()=>{Yi.update(n=>n.includes(this)?n:[...n,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=RE(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let n=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>n.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),kg(()=>{Yi.update(t=>t.filter(n=>n!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,kg(()=>{Yi.update(t=>t.filter(n=>n!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=U(U({},this._config),i),this._updateElementSize()}setDirection(i){this._config=W(U({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=_i(this._config.width),i.height=_i(this._config.height),i.minWidth=_i(this._config.minWidth),i.minHeight=_i(this._config.minHeight),i.maxWidth=_i(this._config.maxWidth),i.maxHeight=_i(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ki(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new qi(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,n){let o=Bt$1(t||[]).filter(r=>!!r);o.length&&(n?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=RE(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Ca=`cdk-overlay-connected-position-bounding-box`;var Sc=/([A-Za-z%]+)$/;function dn(e,i){return new Xn(i,e.get(et),e.get(Er),e.get(p),e.get(Zn))}var Xn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=q.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,n,o,r){this._viewportRuler=t,this._document=n,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Ca),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,n=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,o,s),p=this._getOverlayPoint(l,t,s),c=this._getOverlayFit(p,t,n,s);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(c,p,n)){r.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<c.visibleArea)&&(a={overlayFit:c,overlayPoint:p,originPoint:l,position:s,overlayRect:t})}if(r.length){let s=null,l=-1;for(let p of r){let c=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);c>l&&(l=c,s=p)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ft(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ca),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Lr?this._origin.nativeElement:Ki(this._origin)?this._origin:null}_getOriginPoint(i,t,n){let o;if(n.originX==`center`)o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;o=n.originX==`start`?a:s}t.left<0&&(o-=t.left);let r;return n.originY==`center`?r=i.top+i.height/2:r=n.originY==`top`?i.top:i.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(i,t,n){let o;n.overlayX==`center`?o=-t.width/2:n.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return n.overlayY==`center`?r=-t.height/2:r=n.overlayY==`top`?0:-t.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,t,n,o){let r=xa(t),{x:a,y:s}=i,l=this._getOffset(o,`x`),p=this._getOffset(o,`y`);l&&(a+=l),p&&(s+=p);let c=0-a,u=a+r.width-n.width,m=0-s,h=s+r.height-n.height,f=this._subtractOverflows(r.width,c,u),g=this._subtractOverflows(r.height,m,h),O=f*g;return{visibleArea:O,isCompletelyWithinViewport:r.width*r.height===O,fitsInViewportVertically:g===r.height,fitsInViewportHorizontally:f==r.width}}_canFitWithFlexibleDimensions(i,t,n){if(this._hasFlexibleDimensions){let o=n.bottom-t.y,r=n.right-t.x,a=ka(this._overlayRef.getConfig().minHeight),s=ka(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=o,p=i.fitsInViewportHorizontally||s!=null&&s<=r;return l&&p}return!1}_pushOverlayOnScreen(i,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=xa(t),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),s=Math.max(i.y+o.height-r.height,0),l=Math.max(r.top-n.top-i.y,0),p=Math.max(r.left-n.left-i.x,0),c=0,u=0;return o.width<=r.width?c=p||-a:c=i.x<this._getViewportMarginStart()?r.left-n.left-i.x:0,o.height<=r.height?u=l||-s:u=i.y<this._getViewportMarginTop()?r.top-n.top-i.y:0,this._previousPushAmount={x:c,y:u},{x:i.x+c,y:i.y+u}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Cc(this._lastScrollVisibility,n)){let o=new Kn(i,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=i.overlayY;i.overlayX===`center`?n=`center`:this._isRtl()?n=i.overlayX===`start`?`right`:`left`:n=i.overlayX===`start`?`left`:`right`;for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(i,t){let n=this._viewportRect,o=this._isRtl(),r,a,s;if(t.overlayY===`top`)a=i.y,r=n.height-a+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=n.height-s+this._getViewportMarginTop();else{let h=Math.min(n.bottom-i.y+n.top,i.y),f=this._lastBoundingBoxSize.height;r=h*2,a=i.y-h,r>f&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-f/2)}let l=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,p=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,c,u,m;if(p)m=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(l)u=i.x,c=n.right-i.x-this._getViewportMarginEnd();else{let h=Math.min(n.right-i.x+n.left,i.x),f=this._lastBoundingBoxSize.width;c=h*2,u=i.x-h,c>f&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-f/2)}return{top:a,left:u,bottom:s,right:m,width:c,height:r}}_setBoundingBoxStyles(i,t){let n=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=_i(n.width),o.height=_i(n.height),o.top=_i(n.top)||`auto`,o.bottom=_i(n.bottom)||`auto`,o.left=_i(n.left)||`auto`,o.right=_i(n.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=_i(r)),a&&(o.maxWidth=_i(a))}this._lastBoundingBoxSize=n,ft(this._boundingBox.style,o)}_resetBoundingBoxStyles(){ft(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){ft(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let n={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();ft(n,this._getExactOverlayY(t,i,c)),ft(n,this._getExactOverlayX(t,i,c))}else n.position=`static`;let s=``,l=this._getOffset(t,`x`),p=this._getOffset(t,`y`);l&&(s+=`translateX(${l}px) `),p&&(s+=`translateY(${p}px)`),n.transform=s.trim(),a.maxHeight&&(o?n.maxHeight=_i(a.maxHeight):r&&(n.maxHeight=``)),a.maxWidth&&(o?n.maxWidth=_i(a.maxWidth):r&&(n.maxWidth=``)),ft(this._pane.style,n)}_getExactOverlayY(i,t,n){let o={top:``,bottom:``},r=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n)),i.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=_i(r.y);return o}_getExactOverlayX(i,t,n){let o={left:``,right:``},r=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX===`end`?`left`:`right`:a=i.overlayX===`end`?`right`:`left`,a===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=_i(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ba(i,n),isOriginOutsideView:Gi(i,n),isOverlayClipped:ba(t,n),isOverlayOutsideView:Gi(t,n)}}_subtractOverflows(i,...t){return t.reduce((n,o)=>n-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Bt$1(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Lr)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+t,height:n,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let n=t.getBoundingClientRect();return i&&(t.style.display=``),n}};function ft(e,i){for(let t in i)Object.hasOwn(i,t)&&(e[t]=i[t]);return e}function ka(e){if(typeof e!=`number`&&e!=null){let[i,t]=e.split(Sc);return!t||t===`px`?parseFloat(i):null}return e||null}function xa(e){return{top:Math.floor(e.top),right:Math.floor(e.right),bottom:Math.floor(e.bottom),left:Math.floor(e.left),width:Math.floor(e.width),height:Math.floor(e.height)}}function Cc(e,i){return e===i?!0:e.isOriginClipped===i.isOriginClipped&&e.isOriginOutsideView===i.isOriginOutsideView&&e.isOverlayClipped===i.isOverlayClipped&&e.isOverlayOutsideView===i.isOverlayOutsideView}var wa=`cdk-global-overlay-wrapper`;function ot(e){return new Qn}var Qn=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(wa),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:a,maxHeight:s}=this._overlayRef.getConfig(),l=(o===`100%`||o===`100vw`)&&(!a||a===`100%`||a===`100vw`),p=(r===`100%`||r===`100vh`)&&(!s||s===`100%`||s===`100vh`),c=this._xPosition,u=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,h=``,f=``,g=``;l?g=`flex-start`:c===`center`?(g=`center`,m?f=u:h=u):m?c===`left`||c===`end`?(g=`flex-end`,h=u):(c===`right`||c===`start`)&&(g=`flex-start`,f=u):c===`left`||c===`start`?(g=`flex-start`,h=u):(c===`right`||c===`end`)&&(g=`flex-end`,f=u),i.position=this._cssPosition,i.marginLeft=l?`0`:h,i.marginTop=p?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?`0`:f,t.justifyContent=g,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(wa),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ma=(()=>{class e{_injector=C$1(ie);global(){return ot()}flexibleConnectedTo(t){return dn(this._injector,t)}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var pn=new k(`OVERLAY_DEFAULT_CONFIG`);function Ye(e,i){e.get(C$3).load(Da);let t=e.get(Zn),n=e.get(Er),o=e.get(Kt$1),r=e.get(qr$1),a=e.get(Xn$1),s=e.get(gc$1,null,{optional:!0})||e.get(Ar).createRenderer(null,null),l=new He(i),p=e.get(pn,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!n.body||!(`showPopover`in n.body)?l.usePopover=!1:l.usePopover=i?.usePopover??p;let c=n.createElement(`div`),u=n.createElement(`div`);c.id=o.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),u.appendChild(c),l.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Ki(m)?m.after(u):m?.type===`parent`?m.element.appendChild(u):t.getContainerElement().appendChild(u),new Pt(new Hn(c,r,e),u,c,l,e.get(J),e.get(Aa),n,e.get(hn$1),e.get(Ra),i?.disableAnimations??e.get(Vy,null,{optional:!0})===`NoopAnimations`,e.get(Ee$1),s)}var Ta=(()=>{class e{scrollStrategies=C$1(Oa);_positionBuilder=C$1(Ma);_injector=C$1(ie);create(t){return Ye(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var kc=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var xc=new k(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=C$1(ie);return()=>_t(e)}});var Nt=(()=>{class e{elementRef=C$1(Lr);static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return e})();var Pa=new k(`cdk-connected-overlay-default-config`);var Jn=(()=>{class e{_dir=C$1(Xn$1,{optional:!0});_injector=C$1(ie);_overlayRef;_templatePortal;_backdropSubscription=q.EMPTY;_attachSubscription=q.EMPTY;_detachSubscription=q.EMPTY;_positionSubscription=q.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=C$1(xc);_ngZone=C$1(J);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!=`string`&&this._assignConfig(t)}backdropClick=new $e$1;positionChange=new $e$1;attach=new $e$1;detach=new $e$1;overlayKeydown=new $e$1;overlayOutsideClick=new $e$1;constructor(){let t=C$1(xr),n=C$1(Yi$1),o=C$1(Pa,{optional:!0}),r=C$1(pn,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new Me(t,n),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=kc);let t=this._overlayRef=Ye(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Qe(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let o=this._getOriginElement(),r=I(n);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),n=new He({direction:this._dir||`ltr`,positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(t){let n=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let t=dn(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Nt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Nt?this.origin.elementRef.nativeElement:this.origin instanceof Lr?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ym$1(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,Cj],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,Cj],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,Cj],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,Cj],push:[2,`cdkConnectedOverlayPush`,`push`,Cj],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,t=>t===`url-change`||t===`pop-state`?t:Cj(t)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,Cj],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[nv$1]})}return e})();var Te=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({providers:[Ta],imports:[It,it,$i,$i]})}return e})();var Na=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[It]})}return e})();var Xi=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[bn,Na,$n,It]})}return e})();var Ic=new k(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=C$1(ie);return()=>_t(e)}});var Ac=new k(`MAT_SELECT_CONFIG`);var Ba=new k(`MatSelectTrigger`);var Qi=class{source;value;constructor(i,t){this.source=i,this.value=t}};var G_=(()=>{class e{_viewportRuler=C$1(et);_changeDetectorRef=C$1(Dj);_elementRef=C$1(Lr);_dir=C$1(Xn$1,{optional:!0});_idGenerator=C$1(Kt$1);_renderer=C$1(gc$1);_parentFormField=C$1(we$1,{optional:!0});ngControl=C$1(C$2,{self:!0,optional:!0});_liveAnnouncer=C$1(Rn);_defaultOptions=C$1(Ac,{optional:!0});_animationsDisabled=G();_popoverLocation;_initialized=new Z;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(t){let n=this.options.toArray()[t];if(n){let o=this.panel.nativeElement,r=_a(t,this.options,this.optionGroups),a=n._getHostElement();t===0&&r===1?o.scrollTop=0:o.scrollTop=ya(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Qi(this,t)}_scrollStrategyFactory=C$1(Ic);_panelOpen=!1;_compareWith=(t,n)=>t===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Z;_errorStateTracker;stateChanges=new Z;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=ei$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(he.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Sm$1(()=>{let t=this.options;return t?t.changes.pipe(Zm$1(t),du$1(()=>Am$1(...t.map(n=>n.onSelectionChange)))):this._initialized.pipe(du$1(()=>this.optionSelectionChanges))});openedChange=new $e$1;_openedStream=this.openedChange.pipe(cn$1(t=>t),le$1(()=>{}));_closedStream=this.openedChange.pipe(cn$1(t=>!t),le$1(()=>{}));selectionChange=new $e$1;valueChange=new $e$1;constructor(){let t=C$1(xt),n=C$1(zt$1,{optional:!0}),o=C$1(Kt,{optional:!0}),r=C$1(new Lg(`tabindex`),{optional:!0}),a=C$1(pn,{optional:!0}),s=C$1(rt$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ie$1(t,s||this.ngControl,o,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new sn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Gl$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Gl$1(this._destroy)).subscribe(t=>{t.added.forEach(n=>n.select()),t.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Zm$1(null),Gl$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),n=this.ngControl;if(t!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?o.setAttribute(`aria-labelledby`,t):o.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ps$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(o),this._cleanupDetach=void 0};let t=this.panel.nativeElement,n=this._renderer.listen(t,`animationend`,r=>{r.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let t=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&t.reverse(),t.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let n=t.keyCode,o=n===40||n===38||n===37||n===39,r=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&r&&!Qe(t)||(this.multiple||t.altKey)&&o)t.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(t);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(t){let n=this._keyManager,o=t.keyCode,r=o===40||o===38,a=n.isTyping();if(r&&t.altKey)t.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&n.activeItem&&!Qe(t))t.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&t.ctrlKey){t.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(t),this._multiple&&r&&t.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Qe(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)t.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(t);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let n=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,t)}catch(r){return!1}});return n&&this._selectionModel.select(n),n}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth===`auto`?(t instanceof Nt?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ht$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=Am$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Gl$1(t)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Am$1(...this.options.map(n=>n._stateChanges)).pipe(Gl$1(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,n){let o=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(o!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),n&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),n&&this.focus())),o!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((n,o)=>this.sortComparator?this.sortComparator(n,o,t):t.indexOf(n)-t.indexOf(o)),this.stateChanges.next()}}_propagateChanges(t){let n;this.multiple?n=this.selected.map(o=>o.value):n=this.selected?this.selected.value:t,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){t=n;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,n=t?t+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(t+=` `+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let n=this._elementRef.nativeElement;t.length?n.setAttribute(`aria-describedby`,t.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(t){let n=I(t);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`trigger`],n=[`panel`],o=[[[`mat-select-trigger`]],`*`],r=[`mat-select-trigger`,`*`];function a(u,m){if(u&1&&(Oi(0,`span`,4),Sb(1),gl$1()),u&2){let h=Xw();ZE(),_g(h.placeholder)}}function s(u,m){u&1&&nb(0)}function l(u,m){if(u&1&&(Oi(0,`span`,11),Sb(1),gl$1()),u&2){let h=Xw(2);ZE(),_g(h.triggerValue)}}function p(u,m){if(u&1&&(Oi(0,`span`,5),pw(1,s,1,0)(2,l,2,1,`span`,11),gl$1()),u&2){let h=Xw();ZE(),gw(h.customTrigger?1:2)}}function c(u,m){if(u&1){let h=Cw();Oi(0,`div`,12,1),ug(`keydown`,function(g){nd$1(h);let O=Xw();return rd$1(O._handleKeydown(g))}),nb(2,1),gl$1()}if(u&2){let h=Xw();vb(h.panelClass),Eg(`mat-select-panel-animations-enabled`,!h._animationsDisabled)(`mat-primary`,h._parentFormField?.color===`primary`)(`mat-accent`,h._parentFormField?.color===`accent`)(`mat-warn`,h._parentFormField?.color===`warn`)(`mat-undefined`,!h._parentFormField?.color),Vh(`id`,h.id+`-panel`)(`aria-multiselectable`,h.multiple)(`aria-label`,h.ariaLabel||null)(`aria-labelledby`,h._getPanelAriaLabelledby())}}return BD({type:e,selectors:[[`mat-select`]],contentQueries:function(m,h,f){if(m&1&&fg(f,Ba,5)(f,$n,5)(f,zi,5),m&2){let g;ob(g=ib())&&(h.customTrigger=g.first),ob(g=ib())&&(h.options=g),ob(g=ib())&&(h.optionGroups=g)}},viewQuery:function(m,h){if(m&1&&pg(t,5)(n,5)(Jn,5),m&2){let f;ob(f=ib())&&(h.trigger=f.first),ob(f=ib())&&(h.panel=f.first),ob(f=ib())&&(h._overlayDir=f.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(m,h){m&1&&ug(`keydown`,function(g){return h._handleKeydown(g)})(`focus`,function(){return h._onFocus()})(`blur`,function(){return h._onBlur()}),m&2&&(Vh(`id`,h.id)(`tabindex`,h.disabled?-1:h.tabIndex)(`aria-controls`,h.panelOpen?h.id+`-panel`:null)(`aria-expanded`,h.panelOpen)(`aria-label`,h.ariaLabel||null)(`aria-required`,h.required.toString())(`aria-disabled`,h.disabled.toString())(`aria-invalid`,h.errorState)(`aria-activedescendant`,h._getAriaActiveDescendant()),Eg(`mat-mdc-select-disabled`,h.disabled)(`mat-mdc-select-invalid`,h.errorState)(`mat-mdc-select-required`,h.required)(`mat-mdc-select-empty`,h.empty)(`mat-mdc-select-multiple`,h.multiple)(`mat-select-open`,h.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Cj],disableRipple:[2,`disableRipple`,`disableRipple`,Cj],tabIndex:[2,`tabIndex`,`tabIndex`,u=>u==null?0:Tj(u)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Cj],placeholder:`placeholder`,required:[2,`required`,`required`,Cj],multiple:[2,`multiple`,`multiple`,Cj],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Cj],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Tj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Cj]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Pb([{provide:Se$1,useExisting:e},{provide:Ui,useExisting:e}]),nv$1],ngContentSelectors:r,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(m,h){if(m&1&&(tb(o),Oi(0,`div`,2,0),ug(`click`,function(){return h.open()}),Oi(3,`div`,3),pw(4,a,2,1,`span`,4)(5,p,3,1,`span`,5),gl$1(),Oi(6,`div`,6)(7,`div`,7),gd$1(),Oi(8,`svg`,8),Bh(9,`path`,9),gl$1()()()(),Oh(10,c,3,16,`ng-template`,10),ug(`detach`,function(){return h.close()})(`backdropClick`,function(){return h.close()})(`overlayKeydown`,function(g){return h._handleOverlayKeydown(g)})),m&2){let f=ab(1);ZE(3),Vh(`id`,h._valueId),ZE(),gw(h.empty?4:5),ZE(6),Hh(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,h._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,h._scrollStrategy)(`cdkConnectedOverlayOrigin`,h._preferredOverlayOrigin||f)(`cdkConnectedOverlayPositions`,h._positions)(`cdkConnectedOverlayWidth`,h._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,h._popoverLocation)}},dependencies:[Nt,Jn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return e})();var q_=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[`mat-select-trigger`]],features:[Pb([{provide:Ba,useExisting:e}])]})}return e})();var K_=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[Te,Xi,It,ht,Ne,Xi]})}return e})();var Ua=new k(`NGX_MONACO_EDITOR_CONFIG`);var ja=!1;var Va;var Rc=(()=>{class e{constructor(){this.config=C$1(Ua),this.insideNg=yj(!1),this.onInit=mj(),this.editorContainer=vj.required(`editorContainer`),this._models=[],this._listeners=[],Nd$1(()=>{this.insideNg(),this._editor&&this.reinit()})}ngAfterViewInit(){ja?Va.then(()=>{this.initMonaco()}):(ja=!0,Va=new Promise(t=>{let n=this.config.baseUrl;if((n===`assets`||!n)&&(n=`./assets/monaco/min/vs`),typeof window.monaco==`object`){this.initMonaco(),t();return}let o=s=>{let l=s||window.require,p={paths:{vs:`${n}`}};Object.assign(p,this.config.requireConfig||{}),l.config(p),l([`vs/editor/editor.main`],()=>{typeof this.config.onMonacoLoad==`function`&&this.config.onMonacoLoad(),this.initMonaco(),t()})};if(this.config.monacoRequire)o(this.config.monacoRequire);else if(window.require)if(window.require.config)o();else{var r=`${n}/loader.js`,a=new XMLHttpRequest;a.addEventListener(`load`,()=>{let s=document.createElement(`script`);s.type=`text/javascript`,s.text=[`var nodeRequire = require;`,a.responseText.replace(`"use strict";`,``),`var monacoAmdRequire = require;`,`require = nodeRequire;`,`require.nodeRequire = require;`].join(`
`),document.body.appendChild(s),o(window.monacoAmdRequire)}),a.open(`GET`,r),a.send()}else{let s=document.createElement(`script`);s.type=`text/javascript`,s.src=`${n}/loader.js`,s.addEventListener(`load`,()=>{o()}),document.body.appendChild(s)}}))}reinit(){this.disposeEditor(),this.initMonaco()}disposeEditor(){this._windowResizeSubscription?.unsubscribe(),this._windowResizeSubscription=void 0,this._listeners.forEach(t=>t.dispose()),this._listeners=[],this._editor?.dispose(),this._editor=void 0,this._models.forEach(t=>t.dispose()),this._models=[]}ngOnDestroy(){this.disposeEditor()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=(function(){let t=[`editorContainer`];return BD({type:e,selectors:[[`ng-component`]],viewQuery:function(o,r){o&1&&gg(r.editorContainer,t,5),o&2&&sb()},inputs:{insideNg:[1,`insideNg`]},outputs:{onInit:`onInit`},standalone:!1,decls:0,vars:0,template:function(o,r){},encapsulation:2,changeDetection:1})})()}}return e})();var sy=(()=>{class e extends Rc{constructor(){super(),this.zone=C$1(J),this._value=``,this._disabled=!1,this.options=yj({}),this.model=yj(),this.propagateChange=t=>{},this.onTouched=()=>{},Nd$1(()=>{this.options(),this.model(),this._editor&&this.reinit()})}writeValue(t){this._value=t||``,setTimeout(()=>{this._editor&&!this.model()&&this._editor.setValue(this._value)})}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._disabled=t,this._editor?.updateOptions({readOnly:t||!!this.options().readOnly})}setTheme(t){monaco.editor.setTheme(t)}initMonaco(){let t=U(U({},this.config.defaultOptions),this.options());this._disabled&&(t.readOnly=!0);let n=this.model();if(n){let r=n.uri?monaco.editor.getModel(n.uri):null;if(r)r.setValue(this._value),t.model=r;else{let a=monaco.editor.createModel(n.value,n.language,n.uri);this._models.push(a),t.model=a}}let o=this.editorContainer().nativeElement;this.insideNg()?this._editor=monaco.editor.create(o,t):this.zone.runOutsideAngular(()=>{this._editor=monaco.editor.create(o,t)}),t.model||this._editor.setValue(this._value),this._listeners.push(this._editor.onDidChangeModelContent(()=>{let r=this._editor.getValue();this.zone.run(()=>{this.propagateChange(r),this._value=r})})),this._listeners.push(this._editor.onDidBlurEditorWidget(()=>{this.onTouched()})),this._windowResizeSubscription=as$1(window,`resize`).subscribe(()=>this._editor.layout()),this.onInit.emit(this._editor)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=BD({type:e,selectors:[[`ngx-monaco-editor`]],inputs:{options:[1,`options`],model:[1,`model`]},features:[Pb([{provide:B,useExisting:ko$1(()=>e),multi:!0}]),Ah],decls:2,vars:0,consts:[[`editorContainer`,``],[1,`editor-container`]],template:function(n,o){n&1&&$h(0,`div`,1,0)},styles:[`[_nghost-%COMP%]{display:block;height:200px}.editor-container[_ngcontent-%COMP%]{width:100%;height:98%}`]})}}return e})();var ly=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[{provide:Ua,useValue:t}]}}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=UD({type:e})}static{this.ɵinj=xu$1({imports:[Mn]})}}return e})();var Dc={dispatch:!0,functional:!1,useEffectsErrorHandler:!0};var ei=`__@ngrx/effects_create__`;function Sy(e,i={}){let t=i.functional?e:e(),n=U(U({},Dc),i);return Object.defineProperty(t,ei,{value:n}),t}function Mc(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(ei)?e[n][ei].hasOwnProperty(`dispatch`):!1).map(n=>{let o=e[n][ei];return U({propertyName:n},o)})}function Tc(e){return Mc(e)}function za(e){return Object.getPrototypeOf(e)}function Pc(e){return!!e.constructor&&e.constructor.name!==`Object`&&e.constructor.name!==`Function`}function Wa(e){return typeof e==`function`}function Nc(e){return e.filter(Wa)}function Fc(e,i,t){let n=za(e),r=!!n&&n.constructor.name!==`Object`?n.constructor.name:null,a=Tc(e).map(({propertyName:s,dispatch:l,useEffectsErrorHandler:p})=>{let c=typeof e[s]==`function`?e[s]():e[s],u=p?t(c,i):c;return l===!1?u.pipe(Lm$1()):u.pipe(Um$1()).pipe(le$1(h=>({effect:e[s],notification:h,propertyName:s,sourceName:r,sourceInstance:e})))});return Am$1(...a)}var Lc=10;function $a(e,i,t=Lc){return e.pipe(su$1(n=>(i&&i.handleError(n),t<=1?e:$a(e,i,t-1))))}var Cy=(()=>{class e extends M$1{constructor(t){super(),t&&(this.source=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}static{this.ɵfac=function(n){return new(n||e)(Se(an))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function ky(...e){return cn$1(i=>e.some(t=>typeof t==`string`?t===i.type:t.type===i.type))}var Bc=new k(`@ngrx/effects Effects Error Handler`,{providedIn:`root`,factory:()=>$a});var jc=`@ngrx/effects/init`;var Vc=C(jc);function Uc(e,i){if(e.notification.kind===`N`){let t=e.notification.value;!zc(t)&&i.handleError(/* @__PURE__ */ new Error(`Effect ${Wc(e)} dispatched an invalid action: ${$c(t)}`))}}function zc(e){return typeof e!=`function`&&e&&e.type&&typeof e.type==`string`}function Wc({propertyName:e,sourceInstance:i,sourceName:t}){let n=typeof i[e]==`function`;return!!t?`"${t}.${String(e)}${n?`()`:``}"`:`"${String(e)}()"`}function $c(e){try{return JSON.stringify(e)}catch(i){return e}}var Hc=`ngrxOnIdentifyEffects`;function Yc(e){return Zi(e,Hc)}var Gc=`ngrxOnRunEffects`;function qc(e){return Zi(e,Gc)}var Kc=`ngrxOnInitEffects`;function Xc(e){return Zi(e,Kc)}function Zi(e,i){return e&&i in e&&typeof e[i]==`function`}var Ha=(()=>{class e extends Z{constructor(t,n){super(),this.errorHandler=t,this.effectsErrorHandler=n}addEffects(t){this.next(t)}toActions(){return this.pipe(Bm(t=>Pc(t)?za(t):t),je(t=>t.pipe(Bm(Qc))),je(t=>{let n=t.pipe(uu$1(r=>Zc(this.errorHandler,this.effectsErrorHandler)(r)),le$1(r=>(Uc(r,this.errorHandler),r.notification)),cn$1(r=>r.kind===`N`&&r.value!=null),Pm()),o=t.pipe(ps$1(1),cn$1(Xc),le$1(r=>r.ngrxOnInitEffects()));return Am$1(n,o)}))}static{this.ɵfac=function(n){return new(n||e)(Se(Ge$1),Se(Bc))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function Qc(e){return Yc(e)?e.ngrxOnIdentifyEffects():``}function Zc(e,i){return t=>{let n=Fc(t,e,i);return qc(t)?t.ngrxOnRunEffects(n):n}}var Jc=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,n){this.effectSources=t,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.ɵfac=function(n){return new(n||e)(Se(Ha),Se(ut))}}static{this.ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function xy(...e){let i=e.flat(),t=Nc(i);return yn([t,Bu$1(()=>{C$1(on),C$1(Ln,{optional:!0});let n=C$1(Jc),o=C$1(Ha),r=!n.isStarted;r&&n.start();for(let a of i){let s=Wa(a)?C$1(a):a;o.addEffects(s)}r&&C$1(ut).dispatch(Vc())})])}var ed=20;var td=new k(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=C$1(ie);return()=>_t(e,{scrollThrottle:ed})}});var nd=new k(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ya=`tooltip-panel`;var id={passive:!0};var od=8;var rd=8;var ad=24;var sd=200;var ld=(()=>{class e{_elementRef=C$1(Lr);_ngZone=C$1(J);_platform=C$1(p);_ariaDescriber=C$1(Qo);_focusMonitor=C$1(ft$1);_dir=C$1(Xn$1);_injector=C$1(ie);_viewContainerRef=C$1(Yi$1);_mediaMatcher=C$1(yt$1);_document=C$1(Er);_renderer=C$1(gc$1);_animationsDisabled=G();_defaultOptions=C$1(nd,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ga;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Ni$1(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let n=Ni$1(t);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Pt$1(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Pt$1(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let n=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=od}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Gl$1(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(n);this._detach(),this._portal=this._portal||new we(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Gl$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(t)}hide(t=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(t):(n._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof Lr)return this._overlayRef;this._detach()}let n=this._injector.get(mt).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Ya}`,r=dn(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation(`global`);return r.positionChanges.pipe(Gl$1(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ye(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(td)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Gl$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Gl$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Gl$1(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Gl$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let n=t.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();n.withPositions([this._addOffset(U(U({},o.main),r.main)),this._addOffset(U(U({},o.fallback),r.fallback))])}_addOffset(t){let n=rd,o=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-n:t.originY===`bottom`?t.offsetY=n:t.originX===`start`?t.offsetX=o?-n:n:t.originX===`end`&&(t.offsetX=o?n:-n),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,n=this.position,o;n==`above`||n==`below`?o={originX:`center`,originY:n==`above`?`top`:`bottom`}:n==`before`||n==`left`&&t||n==`right`&&!t?o={originX:`start`,originY:`center`}:(n==`after`||n==`right`&&t||n==`left`&&!t)&&(o={originX:`end`,originY:`center`});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,n=this.position,o;n==`above`?o={overlayX:`center`,overlayY:`bottom`}:n==`below`?o={overlayX:`center`,overlayY:`top`}:n==`before`||n==`left`&&t||n==`right`&&!t?o={overlayX:`end`,overlayY:`center`}:(n==`after`||n==`right`&&t||n==`left`&&!t)&&(o={overlayX:`start`,overlayY:`center`});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),RE(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,n){return this.position===`above`||this.position===`below`?n===`top`?n=`bottom`:n===`bottom`&&(n=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:n}}_updateCurrentPositionClass(t){let{overlayY:n,originX:o,originY:r}=t,a;if(n===`center`?this._dir&&this._dir.value===`rtl`?a=o===`end`?`left`:`right`:a=o===`start`?`left`:`right`:a=n===`bottom`&&r===`top`?`above`:`below`,a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${Ya}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let n=t.targetTouches?.[0],o=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let n;t.x!==void 0&&t.y!==void 0&&(n=t),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let n=t.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;n!==o&&!o.contains(n)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,n,id))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let n=this._elementRef.nativeElement,o=n.style;(t===`on`||n.nodeName!==`INPUT`&&n.nodeName!==`TEXTAREA`)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect=`none`),(t===`on`||!n.draggable)&&(o.webkitUserDrag=`none`),o.touchAction=`none`,o.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||RE({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Qe(t):!0;static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(n,o){n&2&&Eg(`mat-mdc-tooltip-disabled`,o.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return e})();var Ga=(()=>{class e{_changeDetectorRef=C$1(Dj);_elementRef=C$1(Lr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=G();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>ad&&t.width>=sd}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let n=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(n.classList.remove(t?r:o),n.classList.add(t?o:r),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(n);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(n.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`tooltip`];return BD({type:e,selectors:[[`mat-tooltip-component`]],viewQuery:function(o,r){if(o&1&&pg(t,7),o&2){let a;ob(a=ib())&&(r._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(o,r){o&1&&ug(`mouseleave`,function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(o,r){o&1&&(ml$1(0,`div`,1,0),dg(`animationend`,function(s){return r._handleAnimationEnd(s)}),ml$1(2,`div`,2),Sb(3),yl()()),o&2&&(vb(r.tooltipClass),Eg(`mdc-tooltip--multiline`,r._isMultiline),ZE(3),_g(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return e})();var Qy=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[Pn,Te,It,ht]})}return e})();var x=Symbol(`NOT_RESOLVED`);function re(e,i){return{tagName:e,nodeKind:`scalar`,implicit:i.implicit??!1,matchByTagPrefix:i.matchByTagPrefix??!1,implicitFirstChars:i.implicitFirstChars??null,resolve:i.resolve,identify:i.identify,represent:i.represent??(t=>String(t)),representTagName:i.representTagName??(()=>e)}}function _o(e,i){let t=i.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:i.matchByTagPrefix??!1,create:i.create,addItem:i.addItem,finalize:i.finalize??(n=>n),carrierIsResult:t,identify:i.identify,represent:i.represent??(n=>n),representTagName:i.representTagName??(()=>e)}}function ai(e,i){let t=i.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:i.matchByTagPrefix??!1,create:i.create,addPair:i.addPair,has:i.has,keys:i.keys,get:i.get,finalize:i.finalize??(n=>n),carrierIsResult:t,identify:i.identify,represent:i.represent??(n=>n),representTagName:i.representTagName??(()=>e)}}var cd=re(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`});var dd=[``,`~`,`null`,`Null`,`NULL`];var pd=re(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>dd.indexOf(e)!==-1?null:x,identify:e=>e===null,represent:()=>`null`});var ud=re(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,i)=>e===`null`||i&&e===``?null:x,identify:e=>e===null,represent:()=>`null`});var hd=[``,`~`,`null`,`Null`,`NULL`];var md=re(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>hd.indexOf(e)!==-1?null:x,identify:e=>e===null,represent:()=>`null`});var fd=[`true`,`True`,`TRUE`];var gd=[`false`,`False`,`FALSE`];var _d=re(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>fd.indexOf(e)!==-1?!0:gd.indexOf(e)!==-1?!1:x,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var yd=[`true`];var vd=[`false`];var bd=re(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>yd.indexOf(e)!==-1?!0:vd.indexOf(e)!==-1?!1:x,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Sd=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`];var Cd=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`];var kd=re(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>Sd.indexOf(e)!==-1?!0:Cd.indexOf(e)!==-1?!1:x,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var xd=/* @__PURE__ */ new RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);var wd=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Ed(e){let i=e,t=1;return(i[0]===`-`||i[0]===`+`)&&(i[0]===`-`&&(t=-1),i=i.slice(1)),i.startsWith(`0b`)?t*parseInt(i.slice(2),2):i.startsWith(`0o`)?t*parseInt(i.slice(2),8):i.startsWith(`0x`)?t*parseInt(i.slice(2),16):t*parseInt(i,10)}function Od(e,i){if(i){if(!wd.test(e))return x}else if(!xd.test(e))return x;let t=Ed(e);return Number.isFinite(t)?t:x}var ps=re(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:Od,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var Id=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)$`);var Ad=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Rd(e){let i=e,t=1;return(i[0]===`-`||i[0]===`+`)&&(i[0]===`-`&&(t=-1),i=i.slice(1)),i.startsWith(`0b`)?t*parseInt(i.slice(2),2):i.startsWith(`0o`)?t*parseInt(i.slice(2),8):i.startsWith(`0x`)?t*parseInt(i.slice(2),16):t*parseInt(i,10)}function Dd(e,i){if(i){if(!Ad.test(e))return x}else if(!Id.test(e))return x;let t=Rd(e);return Number.isFinite(t)?t:x}var Md=re(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Dd,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var Td=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function Pd(e){let i=e.replace(/_/g,``),t=1;if((i[0]===`-`||i[0]===`+`)&&(i[0]===`-`&&(t=-1),i=i.slice(1)),i.startsWith(`0b`))return t*parseInt(i.slice(2),2);if(i.startsWith(`0x`))return t*parseInt(i.slice(2),16);if(i.includes(`:`)){let n=0;for(let o of i.split(`:`))n=n*60+Number(o);return t*n}return i!==`0`&&i[0]===`0`?t*parseInt(i,8):t*parseInt(i,10)}function Nd(e){if(!Td.test(e))return x;let i=Pd(e);return Number.isFinite(i)?i:x}var ao=re(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:Nd,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var Fd=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var Ld=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Bd(e){if(!Fd.test(e))return x;let i=e.toLowerCase(),t=i[0]===`-`?-1:1;if(`+-`.includes(i[0])&&(i=i.slice(1)),i===`.inf`)return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===`.nan`)return NaN;let n=t*parseFloat(i);return Number.isFinite(n)||Ld.test(e)?n:x}function jd(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let i=e.toString(10);return/^[-+]?[0-9]+e/.test(i)?i.replace(`e`,`.e`):i}var us=re(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Bd,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:jd});var Vd=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`);var Ud=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function zd(e,i){if(i){if(!Ud.test(e))return x;let n=e.toLowerCase(),o=n[0]===`-`?-1:1;if(`+-`.includes(n[0])&&(n=n.slice(1)),n===`.inf`)return o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===`.nan`)return NaN;let r=o*parseFloat(n);return Number.isFinite(r)?r:x}if(!Vd.test(e))return x;let t=Number(e);return Number.isFinite(t)?t:x}function Wd(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let i=e.toString(10);return/^[-+]?[0-9]+e/.test(i)?i.replace(`e`,`.e`):i}var $d=re(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:zd,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Wd});var Hd=/* @__PURE__ */ new RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var Yd=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Gd(e){if(!Hd.test(e))return x;let i=e.toLowerCase().replace(/_/g,``),t=i[0]===`-`?-1:1;if(`+-`.includes(i[0])&&(i=i.slice(1)),i===`.inf`)return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===`.nan`)return NaN;let n=0;if(i.includes(`:`)){for(let o of i.split(`:`))n=n*60+Number(o);n*=t}else n=t*parseFloat(i);return Number.isFinite(n)||Yd.test(e)?n:x}function qd(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let i=e.toString(10);return/^[-+]?[0-9]+e/.test(i)?i.replace(`e`,`.e`):i}var so=re(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Gd,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:qd});var Kd=re(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,i)=>e===`<<`||i&&e===``?`<<`:x,identify:()=>!1});var Xd=/^[A-Za-z0-9+/]*={0,2}$/;function Qd(e){let i=e.replace(/\s/g,``);if(i.length%4!==0||!Xd.test(i))return x;let t=atob(i),n=new Uint8Array(t.length);for(let o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return n}function Zd(e){let i=``;for(let t=0;t<e.length;t++)i+=String.fromCharCode(e[t]);return btoa(i)}var Jd=re(`tag:yaml.org,2002:binary`,{resolve:Qd,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:Zd});var ep=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`);var tp=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function qa(e,i,t,n=0,o=0,r=0,a=0){let s=new Date(Date.UTC(e,i,t,n,o,r,a));return s.setUTCFullYear(e,i,t),s}function np(e){let i=ep.exec(e);if(i===null&&(i=tp.exec(e)),i===null)return x;let t=+i[1],n=+i[2]-1,o=+i[3];if(!i[4]){let c=qa(t,n,o);return c.getUTCFullYear()!==t||c.getUTCMonth()!==n||c.getUTCDate()!==o?x:c}let r=+i[4],a=+i[5],s=+i[6],l=0;if(r>23||a>59||s>59)return x;if(i[7]){let c=i[7].slice(0,3);for(;c.length<3;)c+=`0`;l=+c}let p=qa(t,n,o,r,a,s,l);if(p.getUTCFullYear()!==t||p.getUTCMonth()!==n||p.getUTCDate()!==o)return x;if(i[9]){let c=+i[10],u=+(i[11]||0);if(c>23||u>59)return x;let m=(c*60+u)*6e4;p.setTime(p.getTime()-(i[9]===`-`?-m:m))}return p}var ip=re(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:np,identify:e=>e instanceof Date,represent:e=>e.toISOString()});var op=_o(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,i)=>{e.push(i)},identify:Array.isArray});function si(e){if(e===null||typeof e!=`object`||Array.isArray(e))return!1;let i=Object.getPrototypeOf(e);return i===null||i===Object.prototype}function lo(e,i){let t={};for(let n of i)e[n]!==void 0&&(t[n]=e[n]);return t}var rp=_o(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:/* @__PURE__ */ new Set}),addItem:(e,i)=>{let t;if(i instanceof Map){if(i.size!==1)return`cannot resolve an ordered map item`;t=i.keys().next().value}else if(si(i)){let n=Object.keys(i);if(n.length!==1)return`cannot resolve an ordered map item`;t=n[0]}else return`cannot resolve an ordered map item`;return e.seen.has(t)?`duplicate key in ordered map`:(e.seen.add(t),e.list.push(i),``)},finalize:e=>e.list,identify:()=>!1});var ap=_o(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,i)=>{if(i instanceof Map)return i.size!==1?`cannot resolve a pairs item`:(e.push(i.entries().next().value),``);if(Object.prototype.toString.call(i)!==`[object Object]`)return`cannot resolve a pairs item`;let t=i,n=Object.keys(t);return n.length!==1?`cannot resolve a pairs item`:(e.push([n[0],t[n[0]]]),``)},identify:()=>!1});var sp=ai(`tag:yaml.org,2002:map`,{create:()=>({}),identify:si,represent:e=>{let i=/* @__PURE__ */ new Map;for(let t of Object.keys(e))i.set(t,e[t]);return i},addPair:(e,i,t)=>{if(i!==null&&typeof i==`object`)return`object-based map does not support complex keys`;let n=String(i);return n===`__proto__`?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,``},has:(e,i)=>i!==null&&typeof i==`object`?!1:Object.prototype.hasOwnProperty.call(e,String(i)),keys:e=>Object.keys(e),get:(e,i)=>{let t=String(i);return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null}});var lp=ai(`tag:yaml.org,2002:set`,{create:()=>/* @__PURE__ */ new Set,identify:e=>e instanceof Set,represent:e=>{let i=/* @__PURE__ */ new Map;for(let t of e)i.set(t,null);return i},addPair:(e,i,t)=>t!==null?`cannot resolve a set item`:(e.add(i),``),has:(e,i)=>e.has(i),keys:e=>e.keys(),get:()=>null});function cp(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function dp(){return{scalar:[],sequence:[],mapping:[]}}function pp(e){let i=[];for(let t of e){let n=i.length;for(let o=0;o<i.length;o++){let r=i[o];if(r.nodeKind===t.nodeKind&&r.tagName===t.tagName&&r.matchByTagPrefix===t.matchByTagPrefix){n=o;break}}i[n]=t}return i}var li=class hs{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(i){let t=pp(i),n=[],o=cp(),r=dp();for(let c of t){if(c.nodeKind===`scalar`&&c.implicit){if(c.matchByTagPrefix)throw new Error(`Implicit scalar tags cannot match by tag prefix`);n.push(c)}switch(c.nodeKind){case`scalar`:c.matchByTagPrefix?r.scalar.push(c):o.scalar[c.tagName]=c;break;case`sequence`:c.matchByTagPrefix?r.sequence.push(c):o.sequence[c.tagName]=c;break;case`mapping`:c.matchByTagPrefix?r.mapping.push(c):o.mapping[c.tagName]=c}}let a=n.filter(c=>c.implicitFirstChars===null),s=/* @__PURE__ */ new Set;for(let c of n)if(c.implicitFirstChars!==null)for(let u of c.implicitFirstChars)s.add(u);let l=/* @__PURE__ */ new Map;for(let c of s)l.set(c,n.filter(u=>u.implicitFirstChars===null||u.implicitFirstChars.indexOf(c)!==-1));let p=o.scalar[`tag:yaml.org,2002:str`];if(!p)throw new Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=t,this.implicitScalarTags=n,this.implicitScalarByFirstChar=l,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=p,this.defaultSequenceTag=o.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=o.mapping[`tag:yaml.org,2002:map`],this.exact=o,this.prefix=r}lookupScalarTag(i){let t=this.exact.scalar[i];if(t)return t;for(let n of this.prefix.scalar)if(i.startsWith(n.tagName))return n}lookupSequenceTag(i){let t=this.exact.sequence[i];if(t)return t;for(let n of this.prefix.sequence)if(i.startsWith(n.tagName))return n}lookupMappingTag(i){let t=this.exact.mapping[i];if(t)return t;for(let n of this.prefix.mapping)if(i.startsWith(n.tagName))return n}resolveImplicitScalarTag(i){let t=this.implicitScalarByFirstChar.get(i.charAt(0))??this.implicitScalarAnyFirstChar;for(let o of t){let r=o.resolve(i,!1,o.tagName);if(r!==x)return{value:r,tag:o}}let n=this.defaultScalarTag;return{value:n.resolve(i,!1,n.tagName),tag:n}}withTags(...i){let t=[];for(let n of i)t=t.concat(n);return new hs([...this.tags,...t])}};var yo=new li([cd,op,sp]);new li([...yo.tags,ud,bd,Md,$d]);var up=new li([...yo.tags,pd,_d,ps,us]);var mp=new li([...yo.tags,md,kd,ao,so,ip,Kd,Jd,rp,ap,lp]).withTags(W(U({},ao),{resolve:(e,i,t)=>{let n=ao.resolve(e,i,t);return n===x?ps.resolve(e,i,t):n}}),W(U({},so),{resolve:(e,i,t)=>{let n=so.resolve(e,i,t);return n===x?us.resolve(e,i,t):n}}));ai(`tag:yaml.org,2002:map`,{create:()=>/* @__PURE__ */ new Map,addPair:(e,i,t)=>(e.set(i,t),``),has:(e,i)=>e.has(i),keys:e=>e.keys(),get:(e,i)=>e.get(i),identify:e=>e instanceof Map||si(e),represent:e=>{if(e instanceof Map)return e;let i=/* @__PURE__ */ new Map,t=e;for(let n of Object.keys(t))i.set(n,t[n]);return i}});function Ka(e){if(Array.isArray(e)){let i=Array.prototype.slice.call(e);for(let t=0;t<i.length;t++){if(Array.isArray(i[t]))return null;typeof i[t]==`object`&&Object.prototype.toString.call(i[t])===`[object Object]`&&(i[t]=`[object Object]`)}return String(i)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}ai(`tag:yaml.org,2002:map`,{create:()=>({}),identify:si,represent:e=>{let i=/* @__PURE__ */ new Map;for(let t of Object.keys(e))i.set(t,e[t]);return i},addPair:(e,i,t)=>{let n=Ka(i);return n===null?`nested arrays are not supported inside keys`:(n===`__proto__`?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,``)},has:(e,i)=>{let t=Ka(i);return t!==null&&Object.prototype.hasOwnProperty.call(e,t)},keys:e=>Object.keys(e),get:(e,i)=>{let t=String(i);return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null}});var fp={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Ji(e,i,t,n,o){let r=``,a=``,s=Math.floor(o/2)-1;return n-i>s&&(r=` ... `,i=n-s+r.length),t-n>s&&(a=` ...`,t=n+s-a.length),{str:r+e.slice(i,t).replace(/\t/g,`→`)+a,pos:n-i+r.length}}function eo(e,i){return` `.repeat(Math.max(i-e.length,0))+e}function gp(e,i){if(!e.buffer)return null;let t=U(U({},fp),i),n=/\r?\n|\r|\0/g,o=[0],r=[],a,s=-1;for(;a=n.exec(e.buffer);)r.push(a.index),o.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);let l=``,p=Math.min(e.line+t.linesAfter,r.length).toString().length,c=t.maxLength-(t.indent+p+3);for(let m=1;m<=t.linesBefore&&!(s-m<0);m++){let h=Ji(e.buffer,o[s-m],r[s-m],e.position-(o[s]-o[s-m]),c);l=`${` `.repeat(t.indent)}${eo((e.line-m+1).toString(),p)} | ${h.str}
${l}`}let u=Ji(e.buffer,o[s],r[s],e.position,c);l+=`${` `.repeat(t.indent)}${eo((e.line+1).toString(),p)} | ${u.str}
`,l+=`${`-`.repeat(t.indent+p+3+u.pos)}^
`;for(let m=1;m<=t.linesAfter&&!(s+m>=r.length);m++){let h=Ji(e.buffer,o[s+m],r[s+m],e.position-(o[s]-o[s+m]),c);l+=`${` `.repeat(t.indent)}${eo((e.line+m+1).toString(),p)} | ${h.str}
`}return l.replace(/\n$/,``)}function Xa(e,i){let t=``;return e.mark?(e.mark.name&&(t+=`in "${e.mark.name}" `),t+=`(${e.mark.line+1}:${e.mark.column+1})`,!i&&e.mark.snippet&&(t+=`

${e.mark.snippet}`),`${e.reason} ${t}`):e.reason}var rt=class ms extends Error{reason;mark;constructor(i,t){super(),this.name=`YAMLException`,this.reason=i,this.mark=t,this.message=Xa(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(i){return`${this.name}: ${Xa(this,i)}`}static throwAt(i,t,n,o=``){let r=0,a=0;for(let l=0;l<t;l++){let p=i.charCodeAt(l);p===10?(r++,a=l+1):p===13&&(r++,i.charCodeAt(l+1)===10&&l++,a=l+1)}let s={name:o,buffer:i,position:t,line:r,column:t-a};throw s.snippet=gp(s),new ms(n,s)}};var L={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6};var b={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5};var ue={BLOCK:1,FLOW:2};var ye={CLIP:1,STRIP:2,KEEP:3};var _p=-1;function Qa(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var fs=new Array(256);var gs=new Array(256);for(let e=0;e<256;e++)fs[e]=Qa(e)?1:0,gs[e]=Qa(e);function yp(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function vp(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function bp(e){return e===120?2:e===117?4:8}function ni(e,i,t){let n=0;for(;i<t;){let o=e.charCodeAt(i);if(o===10)n++,i++;else if(o===13)n++,i++,e.charCodeAt(i)===10&&i++;else if(o===32||o===9)i++;else break}return{position:i,breaks:n}}function vo(e){return e===1?` `:`
`.repeat(e-1)}function Sp(e,i,t){let n=``,o=i,r=i,a=i;for(;o<t;){let s=e.charCodeAt(o);if(s===10||s===13){n+=e.slice(r,a);let l=ni(e,o,t);n+=vo(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,a)}function Cp(e,i,t){let n=``,o=i,r=i,a=i;for(;o<t;){let s=e.charCodeAt(o);if(s===39)n+=e.slice(r,o)+`'`,o+=2,r=a=o;else if(s===10||s===13){n+=e.slice(r,a);let l=ni(e,o,t);n+=vo(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,t)}function kp(e,i,t){let n=``,o=i,r=i,a=i;for(;o<t;){let s=e.charCodeAt(o);if(s===92){n+=e.slice(r,o),o++;let l=e.charCodeAt(o);if(l===10||l===13)o=ni(e,o,t).position;else if(l<256&&fs[l])n+=gs[l],o++;else{let p=bp(l),c=0;for(;p>0;p--){o++;let u=vp(e.charCodeAt(o));c=(c<<4)+u}n+=yp(c),o++}r=a=o}else if(s===10||s===13){n+=e.slice(r,a);let l=ni(e,o,t);n+=vo(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,t)}function Za(e,i,t,n,o,r){let a=n<0?0:n,s=e.slice(i,t).replace(/\r\n?/g,`
`),l=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),p=``,c=!1,u=0,m=!1;for(let h of l){let f=0;for(;f<a&&h.charCodeAt(f)===32;)f++;if(n<0||f>=h.length){u++;continue}let g=h.slice(a),O=g.charCodeAt(0);r?O===32||O===9?(m=!0,p+=`
`.repeat(c?1+u:u)):m?(m=!1,p+=`
`.repeat(u+1)):u===0?c&&(p+=` `):p+=`
`.repeat(u):p+=`
`.repeat(c?1+u:u),p+=g,c=!0,u=0}return o===ye.KEEP?p+=`
`.repeat(c?1+u:u):o!==ye.STRIP&&c&&(p+=`
`),p}function xp(e,i){if(i.valueStart===_p)return``;let{valueStart:t,valueEnd:n}=i;if(i.fast)return e.slice(t,n);switch(i.style){case b.SINGLE_QUOTED:return Cp(e,t,n);case b.DOUBLE_QUOTED:return kp(e,t,n);case b.LITERAL_BLOCK:return Za(e,t,n,i.indent,i.chomping,!1);case b.FOLDED_BLOCK:return Za(e,t,n,i.indent,i.chomping,!0);default:return Sp(e,t,n)}}var wp=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});var _s=`-#;/?:@&=+$_.~*'()`;var Ep=_s+`!,[]`;var Ja=`0123456789ABCDEF`;function Pe(e){return`%`+Ja[e>>4]+Ja[e&15]}function to(e,i){let t=i?_s:Ep,n=``;for(let o=0;o<e.length;o++){let r=e.charCodeAt(o);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||t.includes(e[o])){n+=e[o];continue}r>=55296&&r<=56319&&(r=65536+((r&1023)<<10)+(e.charCodeAt(++o)&1023)),r<128?n+=Pe(r):r<2048?n+=Pe(192|r>>6)+Pe(128|r&63):r<65536?n+=Pe(224|r>>12)+Pe(128|r>>6&63)+Pe(128|r&63):n+=Pe(240|r>>18)+Pe(128|r>>12&63)+Pe(128|r>>6&63)+Pe(128|r&63)}return n}function no(e){let i=``,t=0;for(;t<e.length;){if(e.charCodeAt(t)!==37){i+=e[t++];continue}let n=parseInt(e.slice(t+1,t+3),16);if(t+=3,n>=192){let o=n<224?1:n<240?2:3;for(n&=(1<<6-o)-1;o-->0;)n=n<<6|parseInt(e.slice(t+1,t+3),16)&63,t+=3}n<65536?i+=String.fromCharCode(n):(n-=65536,i+=String.fromCharCode(55296|n>>10,56320|n&1023))}return i}function ys(e,i){if(e.startsWith(`!<`)&&e.endsWith(`>`))return no(e.slice(2,-1));let t=e.indexOf(`!`,1),n=t===-1?`!`:e.slice(0,t+1);return no(i?.[n]??wp[n]??n)+no(e.slice(n.length))}function vs(e){let i=e;return i.charCodeAt(0)===33?(i=i.slice(1),`!${to(i,!0)}`):i.slice(0,18)===`tag:yaml.org,2002:`?`!!${to(i.slice(18),!0)}`:`!<${to(i,!1)}>`}var Lt=-1;var Op=`tag:yaml.org,2002:merge`;var bo={filename:``,schema:up,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function Ip(e){return`tagStart`in e&&e.tagStart!==Lt?e.tagStart:`anchorStart`in e&&e.anchorStart!==Lt?e.anchorStart:`valueStart`in e&&e.valueStart!==Lt?e.valueStart:`start`in e?e.start:0}function ne(e,i){rt.throwAt(e.source,e.position,i,e.filename)}function bs(e,i,t,n){try{return t.finalize(n)}catch(o){if(o instanceof rt)throw o;rt.throwAt(e.source,i,o instanceof Error?o.message:String(o),e.filename)}}function Ap(e,i){let t=xp(e.source,i),n=i.tagStart===Lt?``:e.source.slice(i.tagStart,i.tagEnd),o=e.schema.defaultScalarTag;if(n!==``){if(n===`!`)return{value:t,tag:o};let r=ys(n,e.tagHandlers),a=e.schema.lookupScalarTag(r);if(a){let l=a.resolve(t,!0,r);return l===x&&ne(e,`cannot resolve a node with !<${r}> explicit tag`),{value:l,tag:a}}let s=e.schema.lookupMappingTag(r)??e.schema.lookupSequenceTag(r);if(s){t!==``&&ne(e,`cannot resolve a node with !<${r}> explicit tag`);let l=s.create(r);return{value:s.carrierIsResult?l:bs(e,e.position,s,l),tag:s}}ne(e,`unknown scalar tag !<${r}>`)}return i.style===b.PLAIN?e.schema.resolveImplicitScalarTag(t):{value:o.resolve(t,!1,o.tagName),tag:o}}function es(e,i,t){let n=i.tagStart===Lt?``:e.source.slice(i.tagStart,i.tagEnd);return n===``||n===`!`?t:ys(n,e.tagHandlers)}function Ss(e){return e.nodeKind===`mapping`}function ts(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&ne(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function ns(e,i,t,n){ts(e);for(let o of n.keys(t)){if(ts(e),i.tag.has(i.value,o))continue;let r=i.tag.addPair(i.value,o,n.get(t,o));r&&ne(e,r),i.overridable??=/* @__PURE__ */ new Set,i.overridable.add(o)}}function Rp(e,i,t,n){if(e.position=i.keyPosition,Ss(n))ns(e,i,t,n);else if(n.nodeKind===`sequence`&&Array.isArray(t)){t.length>100&&ne(e,`abnormal merge sequence size`);for(let o of t){let r=e.nodeTags.get(o);r||ne(e,`cannot merge mappings; the provided source object is unacceptable`),ns(e,i,o,r)}}else ne(e,`cannot merge mappings; the provided source object is unacceptable`)}function Dp(e,i,t,n,o){if(e.position=i.keyPosition,i.keyIsMerge){Rp(e,i,n,o);return}!e.json&&i.tag.has(i.value,t)&&!i.overridable?.has(t)&&ne(e,`duplicated mapping key`);let r=i.tag.addPair(i.value,t,n);r&&ne(e,r),i.overridable?.delete(t)}function io(e,i,t){let n=e.frames[e.frames.length-1];if(n.kind===`document`)n.value=i,n.hasValue=!0;else if(n.kind===`sequence`){Ss(t)&&e.nodeTags.set(i,t);let o=n.tag.addItem(n.value,i,n.index++);o&&ne(e,o)}else if(n.hasKey){let o=n.key;n.key=void 0,n.hasKey=!1,Dp(e,n,o,i,t)}else n.key=i,n.keyPosition=e.position,n.hasKey=!0,n.keyIsMerge=t.tagName===Op}function oo(e,i,t,n,o){if(i.anchorStart!==Lt){let r={value:t,tag:n,isValueFinal:o};return e.anchors.set(e.source.slice(i.anchorStart,i.anchorEnd),r),r}return null}function Mp(e,i){let t=W(U(U({},bo),i),{events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:/* @__PURE__ */ new Map,nodeTags:/* @__PURE__ */ new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0});for(;t.eventIndex<t.events.length;){let n=t.events[t.eventIndex++];switch(t.position=Ip(n),n.type){case L.DOCUMENT:t.anchors=/* @__PURE__ */ new Map,t.nodeTags=/* @__PURE__ */ new Map,t.aliasCount=0,t.tagHandlers=Object.create(null);for(let o of n.directives)o.kind===`tag`&&(t.tagHandlers[o.handle]=o.prefix);t.frames.push({kind:`document`,position:t.position,value:void 0,hasValue:!1});break;case L.SCALAR:{let{value:o,tag:r}=Ap(t,n);oo(t,n,o,r,!0),io(t,o,r);break}case L.SEQUENCE:{let o=es(t,n,`tag:yaml.org,2002:seq`),r=t.schema.lookupSequenceTag(o);r||ne(t,`unknown sequence tag !<${o}>`);let a=r.create(o),s=oo(t,n,a,r,r.carrierIsResult);t.frames.push({kind:`sequence`,position:t.position,value:a,tag:r,anchor:s,index:0});break}case L.MAPPING:{let o=es(t,n,`tag:yaml.org,2002:map`),r=t.schema.lookupMappingTag(o);r||ne(t,`unknown mapping tag !<${o}>`);let a=r.create(o),s=oo(t,n,a,r,r.carrierIsResult);t.frames.push({kind:`mapping`,position:t.position,value:a,tag:r,anchor:s,key:void 0,keyPosition:t.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case L.ALIAS:{t.maxAliases!==-1&&++t.aliasCount>t.maxAliases&&ne(t,`aliases exceeded maxAliases (${t.maxAliases})`);let o=t.source.slice(n.anchorStart,n.anchorEnd),r=t.anchors.get(o);r||ne(t,`unidentified alias "${o}"`),r.isValueFinal||ne(t,`recursive alias "${o}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),io(t,r.value,r.tag);break}case L.POP:{let o=t.frames.pop();if(o.kind===`mapping`&&o.hasKey&&(t.position=o.keyPosition,ne(t,`incomplete mapping pair in event stream`)),o.kind===`document`)t.documents.push(o.value);else{let r=o.tag.carrierIsResult?o.value:bs(t,o.position,o.tag,o.value);o.anchor&&(o.anchor.value=r,o.anchor.isValueFinal=!0),io(t,r,o.tag)}break}}}return t.documents}var w=-1;var Cs=Object.prototype.hasOwnProperty;var Ut=1;var ks=2;var xs=3;var ii=4;var Tp=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var Pp=/[,\[\]{}]/;var ws=/^(?:!|!!|![0-9A-Za-z-]+!)$/;var co=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`;var Es=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;var Np=new RegExp(`^(?:${co})*$`);var Fp=new RegExp(`^(?:${Es})+$`);var Lp=new RegExp(`^(?:!(?:${co})*|${Es}(?:${co})*)$`);var So={filename:``,maxDepth:100};function Bp(e,i,t){e.events.push({type:L.DOCUMENT,explicitStart:i,explicitEnd:t,directives:e.directives})}function Os(e,i,t,n,o,r,a){e.events.push({type:L.SEQUENCE,start:i,anchorStart:t,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function Is(e,i,t,n,o,r,a){e.events.push({type:L.MAPPING,start:i,anchorStart:t,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function is(e,i){e.events.splice(i.eventsLength,0,{type:L.MAPPING,start:i.position,anchorStart:w,anchorEnd:w,tagStart:w,tagEnd:w,style:ue.FLOW})}function $t(e,i,t,n,o,r,a,s,l=ye.CLIP,p=-1,c=!1){e.events.push({type:L.SCALAR,valueStart:i,valueEnd:t,anchorStart:n,anchorEnd:o,tagStart:r,tagEnd:a,style:s,chomping:l,indent:p,fast:c})}function jp(e,i,t){e.events.push({type:L.ALIAS,anchorStart:i,anchorEnd:t})}function Bt(e){e.events.push({type:L.POP})}function le(e){$t(e,w,w,w,w,w,w,b.PLAIN)}function os(){return{anchorStart:w,anchorEnd:w,tagStart:w,tagEnd:w}}function jt(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Vt(e,i){e.position=i.position,e.line=i.line,e.lineStart=i.lineStart,e.lineIndent=i.lineIndent,e.firstTabInLine=i.firstTabInLine,e.events.length=i.eventsLength}function v(e,i){rt.throwAt(e.input.slice(0,e.length),e.position,i,e.filename)}function K(e){return e===10||e===13}function Ht(e){return e===9||e===32}function Ee(e){return Ht(e)||K(e)}function Ge(e){return e===0||Ee(e)}function vt(e){return e===44||e===91||e===93||e===123||e===125}function Vp(e){return e>=48&&e<=57?e-48:-1}function Up(e){if(e>=48&&e<=57)return e-48;let i=e|32;return i>=97&&i<=102?i-97+10:-1}function zp(e){return e===120?2:e===117?4:e===85?8:0}function Wp(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function oi(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function oe(e,i){let t=0,n=e.input.charCodeAt(e.position),o=e.position===e.lineStart||Ee(e.input.charCodeAt(e.position-1));for(;n!==0;){for(;Ht(n);)o=!0,n===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(i&&o&&n===35)do n=e.input.charCodeAt(++e.position);while(!K(n)&&n!==0);if(!K(n))break;for(oi(e),t++,o=!0,n=e.input.charCodeAt(e.position);n===32;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return t}function zt(e,i=e.position){let t=e.input.charCodeAt(i);if((t===45||t===46)&&t===e.input.charCodeAt(i+1)&&t===e.input.charCodeAt(i+2)){let n=e.input.charCodeAt(i+3);return n===0||Ee(n)}return!1}function As(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Co(e){if(e.position!==e.lineStart)return!1;if(zt(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;let i=jt(e);As(e),oe(e,!0);let t=e.input.charCodeAt(e.position),n=e.position===e.lineStart&&(t===37||t===45&&zt(e));return Vt(e,i),n}function rs(e){let i=e.input.charCodeAt(e.position);for(;i!==0&&!K(i);)i=e.input.charCodeAt(++e.position)}function Rs(e,i,t){let n=Tp.exec(e.input.slice(i,t));n!==null&&(e.position=i+n.index+n[0].length-1,v(e,`the stream contains non-printable characters`))}function $p(e,i,t){if(e.input.charCodeAt(e.position)!==33)return!1;i.tagStart!==w&&v(e,`duplication of a tag property`);let n=e.position,o=!1,r=!1,a=`!`,s=e.input.charCodeAt(++e.position);s===60?(o=!0,s=e.input.charCodeAt(++e.position)):s===33&&(r=!0,a=`!!`,s=e.input.charCodeAt(++e.position));let l=e.position,p;if(o){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&v(e,`unexpected end of the stream within a verbatim tag`),p=e.input.slice(l,e.position),e.position++}else{for(;s!==0&&!Ee(s)&&!(t&&vt(s));)s===33&&(r?v(e,`tag suffix cannot contain exclamation marks`):(a=e.input.slice(l-1,e.position+1),ws.test(a)||v(e,`named tag handle cannot contain such characters`),r=!0,l=e.position+1)),s=e.input.charCodeAt(++e.position);p=e.input.slice(l,e.position),Pp.test(p)&&v(e,`tag suffix cannot contain flow indicator characters`)}return p&&!(o?Np.test(p):Fp.test(p))&&v(e,`tag name cannot contain such characters: ${p}`),!o&&a!==`!`&&a!==`!!`&&!Cs.call(e.tagHandlers,a)&&v(e,`undeclared tag handle "${a}"`),i.tagStart=n,i.tagEnd=e.position,!0}function Hp(e,i){if(e.input.charCodeAt(e.position)!==38)return!1;i.anchorStart!==w&&v(e,`duplication of an anchor property`),e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ee(e.input.charCodeAt(e.position))&&!vt(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&v(e,`name of an anchor node must contain at least one character`),i.anchorStart=t,i.anchorEnd=e.position,!0}function Yp(e,i){if(e.input.charCodeAt(e.position)!==42)return!1;(i.anchorStart!==w||i.tagStart!==w)&&v(e,`alias node should not have any properties`),e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ee(e.input.charCodeAt(e.position))&&!vt(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&v(e,`name of an alias node must contain at least one character`),jp(e,t,e.position),!0}function po(e,i){oe(e,!1),e.lineIndent<i&&v(e,`deficient indentation`)}function Gp(e,i,t){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let n=e.position,o=!0;for(;e.input.charCodeAt(e.position)!==0;){let r=e.input.charCodeAt(e.position);if(r===39){if(e.input.charCodeAt(e.position+1)===39){o=!1,e.position+=2;continue}let a=e.position;return e.position++,$t(e,n,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,b.SINGLE_QUOTED,ye.CLIP,-1,o),!0}K(r)?(o=!1,po(e,i)):e.position===e.lineStart&&zt(e)?v(e,`unexpected end of the document within a single quoted scalar`):r!==9&&r<32?v(e,`expected valid JSON character`):e.position++}v(e,`unexpected end of the stream within a single quoted scalar`)}function qp(e,i,t){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let n=e.position,o=!0;for(;e.input.charCodeAt(e.position)!==0;){let r=e.input.charCodeAt(e.position);if(r===34){let a=e.position;return e.position++,$t(e,n,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,b.DOUBLE_QUOTED,ye.CLIP,-1,o),!0}if(r===92){o=!1;let a=e.input.charCodeAt(++e.position);if(K(a))po(e,i);else if(Wp(a))e.position++;else{let s=zp(a);for(s===0&&v(e,`unknown escape sequence`);s-->0;)e.position++,Up(e.input.charCodeAt(e.position))<0&&v(e,`expected hexadecimal character`);e.position++}}else K(r)?(o=!1,po(e,i)):e.position===e.lineStart&&zt(e)?v(e,`unexpected end of the document within a double quoted scalar`):r!==9&&r<32?v(e,`expected valid JSON character`):e.position++}v(e,`unexpected end of the stream within a double quoted scalar`)}function Kp(e,i,t){let n=e.input.charCodeAt(e.position),o=ye.CLIP,r=-1,a=!1;if(n!==124&&n!==62)return!1;let s=n===124?b.LITERAL_BLOCK:b.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let h=e.input.charCodeAt(e.position),f=Vp(h);if(h===43||h===45)o!==ye.CLIP&&v(e,`repeat of a chomping mode identifier`),o=h===43?ye.KEEP:ye.STRIP,e.position++;else if(f>=0)f===0&&v(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),a&&v(e,`repeat of an indentation width identifier`),r=i+f-1,a=!0,e.position++;else break}let l=!1;for(;Ht(e.input.charCodeAt(e.position));)l=!0,e.position++;l&&e.input.charCodeAt(e.position)===35&&rs(e),K(e.input.charCodeAt(e.position))?oi(e):e.input.charCodeAt(e.position)!==0&&v(e,`a line break is expected`);let p=a?r:-1,c=0,u=e.position,m=e.position;for(;e.input.charCodeAt(e.position)!==0;){let h=e.position,f=0;for(;e.input.charCodeAt(h+f)===32;)f++;let g=e.input.charCodeAt(h+f);if(g===0){p>=0?f>p&&(m=h+f):f>0&&(m=h+f);break}if(Co(e))break;if(!a&&p===-1&&K(g)&&(c=Math.max(c,f)),!a&&p===-1&&!K(g)&&(g===9&&f<i&&(e.position=h+f,v(e,`tab characters must not be used in indentation`)),f>=i&&f<c&&(e.position=h+f,v(e,`bad indentation of a mapping entry`))),p===-1&&g!==0&&!K(g)&&f<i){e.lineIndent=f,e.position=h+f;break}!a&&g!==0&&!K(g)&&p===-1&&(p=f);let O=p===-1?i+1:p;if(g!==0&&!K(g)&&f<O){e.lineIndent=f,e.position=h+f;break}rs(e),m=e.position,K(e.input.charCodeAt(e.position))&&(oi(e),m=e.position)}return Rs(e,u,m),$t(e,u,m,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,s,o,p),!0}function Xp(e,i){let t=e.input.charCodeAt(e.position),n=i===Ut;if(t===0||Ee(t)||t===35||t===38||t===42||t===33||t===124||t===62||t===39||t===34||t===37||t===64||t===96||vt(t))return!1;if(t===63||t===45){let o=e.input.charCodeAt(e.position+1);if(Ge(o)||n&&vt(o))return!1}return!0}function Qp(e,i,t,n){if(!Xp(e,t))return!1;let o=e.position,r=e.position,a=e.input.charCodeAt(e.position),s=t===Ut,l=!1;for(;a!==0&&!Co(e);){if(a===58){let p=e.input.charCodeAt(e.position+1);if(Ge(p)||s&&vt(p))break}else if(a===35){if(Ee(e.input.charCodeAt(e.position-1)))break}else{if(s&&vt(a))break;if(K(a)){let p=e.position,c=e.line,u=e.lineStart,m=e.lineIndent;if(oe(e,!1),e.lineIndent>=i){l=!0,a=e.input.charCodeAt(e.position);continue}e.position=p,e.line=c,e.lineStart=u,e.lineIndent=m;break}}Ht(a)||(r=e.position+1),a=e.input.charCodeAt(++e.position)}return r===o?!1:(Rs(e,o,r),$t(e,o,r,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,b.PLAIN,ye.CLIP,-1,!l),!0)}function un(e,i){let t=e.line;oe(e,!0),(e.line>t&&e.lineIndent<i||e.firstTabInLine!==-1&&e.lineIndent<i)&&v(e,`deficient indentation`)}function Zp(e,i,t){let n=e.input.charCodeAt(e.position),o=n===123,r=e.position,a=!0;if(n!==91&&n!==123)return!1;let s=o?125:93;for(o?Is(e,r,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,ue.FLOW):Os(e,r,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,ue.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){un(e,i);let l=e.input.charCodeAt(e.position);if(l===s)return e.position++,Bt(e),!0;a?l===44&&v(e,`expected the node content, but found ','`):v(e,`missed comma between flow collection entries`);let p=!1,c=!1;l===63&&Ee(e.input.charCodeAt(e.position+1))&&(p=c=!0,e.position+=1,un(e,i));let u=e.line,m=jt(e),h=Wt(e,i,Ut,!1,!0);un(e,i),l=e.input.charCodeAt(e.position),(o||c||e.line===u)&&l===58?(p=!0,e.position++,un(e,i),o||is(e,m),h||le(e),Wt(e,i,Ut,!1,!0)||le(e),un(e,i),o||Bt(e)):o&&p?(h||le(e),le(e)):o?le(e):p&&(is(e,m),h||le(e),le(e),Bt(e)),l=e.input.charCodeAt(e.position),l===44?(a=!0,e.position++):a=!1}v(e,`unexpected end of the stream within a flow collection`)}function as(e,i,t){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Ge(e.input.charCodeAt(e.position+1)))return!1;for(Os(e,e.position,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,ue.BLOCK);e.input.charCodeAt(e.position)===45&&Ge(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,`tab characters must not be used in indentation`));let n=e.line;e.position++;let o=oe(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Ge(e.input.charCodeAt(e.position+1))&&v(e,`bad indentation of a sequence entry`),o&&e.lineIndent<=i?le(e):Wt(e,i,xs,!1,!0),oe(e,!0),e.lineIndent<i||e.position>=e.length)break;e.lineIndent>i&&v(e,`bad indentation of a sequence entry`),e.line===n&&e.input.charCodeAt(e.position)===45&&Ge(e.input.charCodeAt(e.position+1))&&v(e,`bad indentation of a sequence entry`)}return Bt(e),!0}function ro(e,i,t,n){let o=!1,r=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let l=e.input.charCodeAt(e.position);for(;l!==0;){!o&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,v(e,`tab characters must not be used in indentation`));let p=e.input.charCodeAt(e.position+1),c=e.line;if((l===63||l===58)&&Ge(p))a||(Is(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,ue.BLOCK),a=!0),l===63?(o&&le(e),r=!0,o=!0):(o||(le(e),r=!0),o=!1),e.position+=1,s=!0;else{o&&(le(e),o=!1);let u=jt(e);if(!Wt(e,t,ks,!1,!0))break;if(e.line===c){for(l=e.input.charCodeAt(e.position);Ht(l);)l=e.input.charCodeAt(++e.position);if(l===58)l=e.input.charCodeAt(++e.position),Ge(l)||v(e,`a whitespace character is expected after the key-value separator within a block mapping`),a||(e.events.splice(u.eventsLength,0,{type:L.MAPPING,start:u.position,anchorStart:n.anchorStart,anchorEnd:n.anchorEnd,tagStart:n.tagStart,tagEnd:n.tagEnd,style:ue.BLOCK}),a=!0),r=!0,o=!1,s=!1;else if(r)v(e,`expected ':' after a mapping key`);else return n.anchorStart!==w||n.tagStart!==w?(Vt(e,u),!1):!0}else if(r)v(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return n.anchorStart!==w||n.tagStart!==w?(Vt(e,u),!1):!0}if(Wt(e,i,ii,!0,s)&&(s=!1),o||s&&(le(e),s=!1),oe(e,!0),l=e.input.charCodeAt(e.position),(e.line===c||e.lineIndent>i)&&l!==0)v(e,`bad indentation of a mapping entry`);else if(e.lineIndent<i)break}return r?(o&&le(e),a&&Bt(e),!0):!1}function Wt(e,i,t,n,o,r=!0){e.depth>=e.maxDepth&&v(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,l=!1,p=null,c=os(),u=t===ii||t===xs,m=u,h=u;if(n&&oe(e,!0)&&(s=!0,e.lineIndent>i?a=1:e.lineIndent===i?a=0:a=-1),a===1)for(;;){let f=e.input.charCodeAt(e.position),g=jt(e);if(s&&a!==1&&(f===33||f===38))break;if(s&&h&&(c.tagStart!==w||c.anchorStart!==w)&&(f===33||f===38)){let O=jt(e),he=i+1;if(ro(e,e.position-e.lineStart,he,c)&&e.events[O.eventsLength]?.type===L.MAPPING)return e.depth--,!0;Vt(e,O)}if(s&&(f===33&&c.tagStart!==w||f===38&&c.anchorStart!==w)||!$p(e,c,t===Ut)&&!Hp(e,c))break;p===null&&(p=g),oe(e,!0)?(s=!0,m=h,e.lineIndent>i?a=1:e.lineIndent===i?a=0:a=-1):m=!1}if(m&&(m=s||o),a===1||t===ii){let f=t===Ut||t===ks?i:i+1,g=e.position-e.lineStart;if(a===1)if(m&&(as(e,g,c)||ro(e,g,f,c))||Zp(e,f,c))l=!0;else{let O=e.input.charCodeAt(e.position);if(p!==null&&r&&h&&!m&&O!==124&&O!==62){let he=jt(e),Oe=p.position-p.lineStart;Vt(e,p),ro(e,Oe,f,os())&&e.events[he.eventsLength]?.type===L.MAPPING?l=!0:Vt(e,he)}!l&&(u&&Kp(e,f,c)||Gp(e,f,c)||qp(e,f,c)||Yp(e,c)||Qp(e,f,t,c))&&(l=!0)}else a===0&&(l=m&&as(e,g,c))}return u=u&&!l,!l&&(c.anchorStart!==w||c.tagStart!==w||u)&&($t(e,w,w,c.anchorStart,c.anchorEnd,c.tagStart,c.tagEnd,b.PLAIN),l=!0),e.depth--,l||c.anchorStart!==w||c.tagStart!==w}function Jp(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ee(e.input.charCodeAt(e.position));)e.position++;let t=e.input.slice(i,e.position),n=[];for(t.length===0&&v(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!K(e.input.charCodeAt(e.position));){for(;Ht(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||K(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let o=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ee(e.input.charCodeAt(e.position));)e.position++;n.push(e.input.slice(o,e.position))}if(K(e.input.charCodeAt(e.position))&&oi(e),t===`YAML`){e.directives.some(r=>r.kind===`yaml`)&&v(e,`duplication of %YAML directive`),n.length!==1&&v(e,`YAML directive accepts exactly one argument`);let o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]);o===null&&v(e,`ill-formed argument of the YAML directive`),parseInt(o[1],10)!==1&&v(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:n[0]})}else if(t===`TAG`){n.length!==2&&v(e,`TAG directive accepts exactly two arguments`);let[o,r]=n;ws.test(o)||v(e,`ill-formed tag handle (first argument) of the TAG directive`),Cs.call(e.tagHandlers,o)&&v(e,`there is a previously declared suffix for "${o}" tag handle`),Lp.test(r)||v(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[o]=r,e.directives.push({kind:`tag`,handle:o,prefix:r})}return!0}function eu(e){e.directives=[],e.tagHandlers=Object.create(null);let i=!1;for(oe(e,!0);Jp(e);)i=!0,oe(e,!0);let t=!1,n=!1,o=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Ge(e.input.charCodeAt(e.position+3))){t=!0;let s=e.line;e.position+=3,oe(e,!0),o=e.line>s}else i&&v(e,`directives end mark is expected`);let r=e.events.length;if(!t&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&zt(e)){e.position+=3,oe(e,!0);return}if(Bp(e,t,!1),Wt(e,e.lineIndent-1,ii,!1,o,o)||le(e),oe(e,!0),e.position===e.lineStart&&zt(e)&&(n=e.input.charCodeAt(e.position)===46,n)){let s=e.line;e.position+=3,oe(e,!0),e.line===s&&e.position<e.length&&v(e,`end of the stream or a document separator is expected`)}let a=e.events[r];a?.type===L.DOCUMENT&&(a.explicitEnd=n),Bt(e),!n&&e.position<e.length&&!Co(e)&&v(e,`end of the stream or a document separator is expected`)}function tu(e,i){let t=e.length,n=W(U(U({},So),i),{input:`${e}\0`,length:t,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]}),o=e.indexOf(`\0`);for(o!==-1&&rt.throwAt(e,o,`null byte is not allowed in input`,n.filename);n.position<n.length&&(As(n),oe(n,!0),!(n.position>=n.length));){let r=n.position;eu(n),n.position===r&&v(n,`can not read a document`)}return n.events}var nu=U(U({},So),bo);function iu(e,i={}){let t=U(U({},nu),i),n=String(e),o=Object.keys(So),r=Object.keys(bo);return Mp(tu(n,lo(t,o)),W(U({},lo(t,r)),{source:n}))}function Ds(e,i){let t=iu(e,i);if(t.length===0)throw new rt(`expected a document, but the input is empty`);if(t.length===1)return t[0];throw new rt(`expected a single document in the stream, but found more`)}var yt=Symbol(`INVALID`);function ou(e){let i=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(r=>r!==void 0)),t=e.implicitScalarTags,n=e.tags.filter(r=>!(r.nodeKind===`scalar`&&r.implicit)&&!i.has(r)),o=e.tags.filter(r=>i.has(r));return[...t.map(r=>({tag:r,implicitTag:!0})),...n.map(r=>({tag:r,implicitTag:!1})),...o.map(r=>({tag:r,implicitTag:!0}))]}function ru(e,i){for(let t=0,n=e.representTypes.length;t<n;t+=1){let{tag:o,implicitTag:r}=e.representTypes[t];if(o.identify(i)){let a;return o.matchByTagPrefix?a=o.representTagName(i):a=o.tagName,{tag:o,tagName:a,implicitTag:r}}}return null}function mn(e,i){if(!e.noRefs&&i!==null&&typeof i==`object`){let p=e.refs.get(i);if(p)return p.anchor===void 0&&(p.anchor=`ref_${e.refCounter++}`),{kind:`alias`,anchor:p.anchor}}let t=ru(e,i);if(!t){if(i===void 0||e.skipInvalid)return yt;throw new rt(`unacceptable kind of an object to dump ${Object.prototype.toString.call(i)}`)}let{tag:n,tagName:o,implicitTag:r}=t,a=r?o:vs(o);if(n.nodeKind===`scalar`)return{kind:`scalar`,tag:a,tagged:!r,style:b.PLAIN,value:n.represent(i)};if(n.nodeKind===`sequence`){let p=n.represent(i),c={kind:`sequence`,tag:a,tagged:!r,style:ue.BLOCK,items:[]};e.noRefs||e.refs.set(i,c);for(let u=0,m=p.length;u<m;u+=1){let h=mn(e,p[u]);h===yt&&p[u]===void 0&&(h=mn(e,null)),h!==yt&&c.items.push(h)}return c}let s=n.represent(i),l={kind:`mapping`,tag:a,tagged:!r,style:ue.BLOCK,items:[]};e.noRefs||e.refs.set(i,l);for(let[p,c]of s){let u=mn(e,p);if(u===yt)continue;let m=mn(e,c);m!==yt&&l.items.push({key:u,value:m})}return l}function au(e,i,t={}){let n=mn({representTypes:ou(i),noRefs:t.noRefs??!1,skipInvalid:t.skipInvalid??!1,refs:/* @__PURE__ */ new Map,refCounter:0},e);return[{contents:n===yt?null:n,directives:[]}]}var su=Symbol(`visit:break`);var Ms=Symbol(`visit:skip`);function ti(e,i,t){let n=i(e,t);if(n===su)return!0;if(n===Ms)return!1;let o=t.depth+1;switch(e.kind){case`sequence`:for(let r of e.items)if(ti(r,i,{depth:o,parent:e,isKey:!1}))return!0;break;case`mapping`:for(let{key:r,value:a}of e.items)if(ti(r,i,{depth:o,parent:e,isKey:!0})||ti(a,i,{depth:o,parent:e,isKey:!1}))return!0}return!1}function ss(e,i){for(let t of e)if(t.contents&&ti(t.contents,i,{depth:0,parent:null,isKey:!1}))return}function ci(e,i){return(e&1<<i)!==0}var ls={applyQuoteFlowKeysOption:lu,doubleQuoteForInvisibles:cu,doubleQuoteWhitespaceOnly:du,applyForceQuotesOption:pu,tryLongOrMultilineAsBlock:uu,quoteInvalidPlain:hu,fallbackToDoubleQuoted:mu};function Ts(e){return e.presenterOptions.quoteStyle===`single`&&ci(e.allowedStylesMask,b.SINGLE_QUOTED)?b.SINGLE_QUOTED:b.DOUBLE_QUOTED}function lu(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==b.PLAIN||(e.style=b.DOUBLE_QUOTED))}function cu(e){e.style===b.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=b.DOUBLE_QUOTED)}function du(e){e.style===b.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=b.DOUBLE_QUOTED)}function pu(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==b.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?b.DOUBLE_QUOTED:Ts(e)))}function uu(e){if(e.style!==b.PLAIN||e.isKey)return;let i=e.node.value,t=i.indexOf(`
`)!==-1;if(!ci(e.allowedStylesMask,b.LITERAL_BLOCK)){t&&(e.style=b.DOUBLE_QUOTED);return}let n=e.presenterOptions.lineWidth;if(n===-1){t&&(e.style=b.LITERAL_BLOCK);return}let o=Math.max(Math.min(n,40),n-e.shiftOfContent),r=0,a=!1;for(;r<=i.length;){let s=i.length,l=i.indexOf(`
`,r);l!==-1&&(s=l);let p=i.slice(r,s);if(p.length>o&&p[0]!==` `&&/ [^ \t]/.test(p)&&(a=!0),l===-1)break;r=l+1}a?e.style=b.FOLDED_BLOCK:t&&(e.style=b.LITERAL_BLOCK)}function hu(e){e.style===b.PLAIN&&!ci(e.allowedStylesMask,b.PLAIN)&&(e.style=Ts(e))}function mu(e){ci(e.allowedStylesMask,e.style)||(e.style=b.DOUBLE_QUOTED)}function hn(e,i){return e|1<<i}var fu=`[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]`;var gu=`[\\n\\r]`;var _u=`\\uFEFF`;var ko=`[ \\t]`;var Ps=`(?:(?!(?:${gu}|${_u}))${fu})`;var di=`(?:(?!${ko})${Ps})`;var Ns=`[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]`;var Fs=`[-?:,\\[\\]{}#&*!|>'"%@\`]`;var yu=`[,\\[\\]{}]`;var uo=di;var ho=`(?:(?!${yu})${di})`;var vu=`(?:(?:(?!${Fs})${di})|[?:-](?=${uo}))`;var bu=`(?:(?:(?!${Fs})${di})|[?:-](?=${ho}))`;var Ls=`(?:(?:(?![:#])${uo})|:(?=${uo}))#*`;var Bs=`(?:(?:(?![:#])${ho})|:(?=${ho}))#*`;var js=`(?:${ko}*${Ls})*`;var Vs=`(?:${ko}*${Bs})*`;var Us=`${vu}#*${js}`;var zs=`${bu}#*${Vs}`;var Su=Us;var Cu=zs;var ku=`\\n+${Ls}${js}`;var xu=`\\n+${Bs}${Vs}`;var wu=`${Us}(?:${ku})*`;var Eu=`${zs}(?:${xu})*`;var Ou=new RegExp(`^(?:${wu})$`,`u`);var Iu=new RegExp(`^(?:${Eu})$`,`u`);var Au=new RegExp(`^(?:${Su})$`,`u`);var Ru=new RegExp(`^(?:${Cu})$`,`u`);var Du=new RegExp(`^(?:${Ns})*$`,`u`);var Mu=new RegExp(`^(?:${Ns}|\\n)*$`,`u`);var Tu=new RegExp(`^(?:${Ps}|\\n)*$`,`u`);var Pu=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/;var xo=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function Nu(e){let i=e.node.value;if(i!==``){if(!(e.isKey?e.flowOnly?Ru:Au:e.flowOnly?Iu:Ou).test(i)||e.shiftOfFirstLine===0&&Pu.test(i))return!1;if(e.shiftOfContent===0){let n=i.indexOf(`
`);if(n!==-1){let o=i.slice(n+1);if(xo.test(o))return!1}}}let t=e.presenterOptions.schema.resolveImplicitScalarTag(i).tag.tagName;return!(!e.node.tagged&&t!==e.node.tag||!e.node.tagged&&i===`=`&&t===e.presenterOptions.schema.defaultScalarTag.tagName)}function Fu(e){let i=e.node.value;if(!(e.isKey?Du:Mu).test(i)||/[ \t]\n|\n[ \t]/.test(i))return!1;if(!e.isKey&&e.shiftOfContent===0){let t=i.indexOf(`
`);if(t!==-1&&xo.test(i.slice(t+1)))return!1}return!0}function Lu(e){if(e.flowOnly||!Tu.test(e.node.value))return!1;let i=e.shiftOfContent-e.shiftOfParent;return!(i<1||i>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&xo.test(e.node.value))}function Bu(e){let i=hn(0,b.DOUBLE_QUOTED);Nu(e)&&(i=hn(i,b.PLAIN)),Fu(e)&&(i=hn(i,b.SINGLE_QUOTED)),Lu(e)&&(i=hn(hn(i,b.LITERAL_BLOCK),b.FOLDED_BLOCK)),e.allowedStylesMask=i}function ju(e){switch(e.style){case b.PLAIN:return Vu(e);case b.SINGLE_QUOTED:return Uu(e);case b.LITERAL_BLOCK:return zu(e);case b.FOLDED_BLOCK:return Wu(e);case b.DOUBLE_QUOTED:return $u(e)}}function Vu(e){return Ws(e.node.value,e.shiftOfContent)}function Uu(e){return`'${Ws(e.node.value,e.shiftOfContent).replace(/'/g,`''`)}'`}function zu(e){let i=e.node.value;return`|`+Hs(i,e.shiftOfParent,e.shiftOfContent)+Ys($s(i,e.shiftOfContent))}function Wu(e){let i=e.node.value,t=e.presenterOptions.lineWidth,n=1/0;return t!==-1&&(n=Math.max(Math.min(t,40),t-e.shiftOfContent)),`>`+Hs(i,e.shiftOfParent,e.shiftOfContent)+Ys($s(Yu(i,n),e.shiftOfContent))}function $u(e){return`"${Ku(e.node.value)}"`}function Ws(e,i){let t=e.indexOf(`
`);if(t===-1)return e;let n=` `.repeat(i),o=e.slice(0,t),r=/(\n+)([^\n]*)/g;r.lastIndex=t;let a;for(;a=r.exec(e);){let s=a[1].length,l=a[2];o+=`
`.repeat(s+1)+n+l}return o}function $s(e,i){let t=` `.repeat(i),n=0,o=``,r=e.length;for(;n<r;){let a,s=e.indexOf(`
`,n);s===-1?(a=e.slice(n),n=r):(a=e.slice(n,s+1),n=s+1),a.length&&a!==`
`&&(o+=t),o+=a}return o}function Hu(e){return/^\n* /.test(e)}function Hs(e,i,t){let n=Hu(e)?String(t-i):``,o=e[e.length-1]===`
`;return`${n}${o&&(e[e.length-2]===`
`||e===`
`)?`+`:o?``:`-`}
`}function Ys(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function mo(e){return e===` `||e===`	`}function cs(e,i){if(e===``||mo(e[0]))return e;let t=/ [^ \t]/g,n,o=0,r,a=0,s=0,l=``;for(;n=t.exec(e);)s=n.index,s-o>i&&(r=a>o?a:s,l+=`
${e.slice(o,r)}`,o=r+1),a=s;return l+=`
`,e.length-o>i&&a>o?l+=`${e.slice(o,a)}
${e.slice(a+1)}`:l+=e.slice(o),l.slice(1)}function Yu(e,i){let t=/(\n+)([^\n]*)/g,n=e.indexOf(`
`);n===-1&&(n=e.length),t.lastIndex=n;let o=cs(e.slice(0,n),i),r=e[0]===`
`||mo(e[0]),a,s;for(;s=t.exec(e);){let l=s[1],p=s[2];a=p!==``&&mo(p[0]),o+=l+(!r&&!a&&p!==``?`
`:``)+cs(p,i),r=a}return o}var Gu=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function qu(e){switch(e){case`\0`:return`\\0`;case`\x07`:return`\\a`;case`\b`:return`\\b`;case`	`:return`\\t`;case`
`:return`\\n`;case`\v`:return`\\v`;case`\f`:return`\\f`;case`\r`:return`\\r`;case`\x1B`:return`\\e`;case`"`:return`\\"`;case`\\`:return`\\\\`;case``:return`\\N`;case`\xA0`:return`\\_`;case`\u2028`:return`\\L`;case`\u2029`:return`\\P`}let i=e.charCodeAt(0),t=i.toString(16).toUpperCase();return i<=255?`\\x${`0`.repeat(2-t.length)}${t}`:`\\u${`0`.repeat(4-t.length)}${t}`}function Ku(e){return e.replace(Gu,qu)}var ri=10;var wo={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:`single`,forceQuotes:!1,scalarStyleRules:Object.keys(ls).map(e=>Reflect.get(ls,e)),tagBeforeAnchor:!1};function Xu(e){return e.tagged?e.tag:vs(e.tag)}function Qu(e){let i=U(U({},wo),e);return i.flowSkipColonSpace&&(i.quoteFlowKeys=!0),W(U({},i),{defaultScalarTagName:i.schema.defaultScalarTag.tagName,openEnded:!1})}function fo(e,i){return`
${` `.repeat(e.indent*i)}`}function Zu(e,i,t,n,o,r){return{node:i,parent:t,level:n,isKey:o,flowOnly:r,shiftOfParent:n===0?-1:e.indent*(n-1),shiftOfContent:e.indent*Math.max(1,n),shiftOfFirstLine:n===0?0:e.indent*n,presenterOptions:e,allowedStylesMask:0,style:i.style}}function Ju(e,i,t){let n=``;for(let r=0,a=t.items.length;r<a;r+=1){let s=qe(e,i,t.items[r],t,{}).text;r>0&&(n+=`,${e.flowSkipCommaSpace?``:` `}`),n+=s}let o=e.flowBracketPadding&&t.items.length>0?` `:``;return`[${o}${n}${o}]`}function ds(e,i,t,n){let o=``;for(let r=0,a=t.items.length;r<a;r+=1){let s=qe(e,i+1,t.items[r],t,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!n||o!==``)&&(o+=fo(e,i)),s===``||ri===s.charCodeAt(0)?o+=`-`:o+=`- `,o+=s}return o}function eh(e,i,t){let n=``;for(let{key:r,value:a}of t.items){let s=``;n!==``&&(s+=`,${e.flowSkipCommaSpace?``:` `}`);let l=qe(e,i,r,t,{iskey:!0}),p=l.text,c=qe(e,i,a,t,{}).text,u=e.flowSkipColonSpace||c===``?``:` `,m=r.kind===`scalar`&&l.noBody&&(r.tagged||r.anchor!==void 0),h=r.kind===`alias`||m?` `:``;s+=`${p}${h}:${u}${c}`,n+=s}let o=e.flowBracketPadding&&n!==``?` `:``;return`{${o}${n}${o}}`}function th(e,i,t,n){let o=``;for(let r=0,a=t.items.length;r<a;r+=1){let s=``;(!n||o!==``)&&(s+=fo(e,i));let{key:l,value:p}=t.items[r],c=(l.kind===`mapping`||l.kind===`sequence`)&&l.style===ue.BLOCK&&l.items.length!==0||l.kind===`scalar`&&(l.style===b.LITERAL_BLOCK||l.style===b.FOLDED_BLOCK),u=c?qe(e,i+1,l,t,{block:!0,compact:!0,isblockseq:!go(e,l,i+1)}):qe(e,i+1,l,t,{block:!0,compact:!0,iskey:!0}),m=u.text,h=l.kind===`scalar`&&l.value.indexOf(`
`)!==-1,f=m.length>1024&&/^[\s\S]{1025}/u.test(m),g=c||h||f;g&&(m&&ri===m.charCodeAt(0)?s+=`?`:s+=`? `),s+=m,g&&(s+=fo(e,i));let O=qe(e,i+1,p,t,{block:!0,compact:g,isblockseq:g&&!go(e,p,i+1)}).text,he=l.kind===`scalar`&&u.noBody&&(l.tagged||l.anchor!==void 0),Oe=!g&&(l.kind===`alias`||he)?` `:``;O===``||ri===O.charCodeAt(0)?s+=`${Oe}:`:s+=`${Oe}: `,s+=O,o+=s}return o}function go(e,i,t){return i.kind===`alias`?!0:i.tagged||i.anchor!==void 0||e.indent<2&&t>0}function qe(e,i,t,n,o){if(t.kind===`alias`)return e.openEnded=!1,{text:`*${t.anchor}`,noBody:!1};let{block:r=!1,iskey:a=!1,isblockseq:s=!1}=o,l=o.compact??!1,p=t.anchor!==void 0;go(e,t,i)&&(l=!1);let c,u=t.tagged,m=r&&(t.kind===`mapping`||t.kind===`sequence`)&&t.style===ue.BLOCK&&t.items.length!==0;if(t.kind===`mapping`)m?c=th(e,i,t,l):c=eh(e,i,t);else if(t.kind===`sequence`)m?e.seqNoIndent&&!s&&i>0?c=ds(e,i-1,t,l):c=ds(e,i,t,l):c=Ju(e,i,t);else{let g=Zu(e,t,n,i,a,!r);Bu(g);for(let O of e.scalarStyleRules)O(g);c=ju(g),e.openEnded=(g.style===b.LITERAL_BLOCK||g.style===b.FOLDED_BLOCK)&&(t.value===`
`||t.value.endsWith(`

`)),u=t.tagged||c===``&&g.flowOnly&&n?.kind===`sequence`&&!p||g.style!==b.PLAIN&&t.tag!==e.defaultScalarTagName}(t.kind===`mapping`||t.kind===`sequence`)&&!m&&(e.openEnded=!1),m&&l&&i>0&&e.indent>2&&(c=`${` `.repeat(e.indent-2)}${c}`);let h=c===``,f=c;if(u||p){let g=[],O=u?Xu(t):null,he=p?`&${t.anchor}`:null;e.tagBeforeAnchor?(O!==null&&g.push(O),he!==null&&g.push(he)):(he!==null&&g.push(he),O!==null&&g.push(O));let Oe=c===``||c.charCodeAt(0)===ri?``:` `;f=`${g.join(` `)}${Oe}${c}`}return{text:f,noBody:h}}function nh(e){return(e.kind===`sequence`||e.kind===`mapping`)&&e.style===ue.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function ih(e){let i=``;for(let t of e.directives){if(t.kind===`yaml`){i+=`%YAML ${t.version}
`;continue}let{handle:n,prefix:o}=t;i+=`%TAG ${n} ${o}
`}return i}function oh(e,i){let t=Qu(i),n=``,o=!1;for(let r=0;r<e.length;r+=1){let a=e[r];t.openEnded=!1;let s=ih(a),l=s!==``,p=a.explicitStart||l||r>0&&!o;if(n+=s,a.contents===null)p&&(n+=`---
`);else if(p){let c=qe(t,0,a.contents,null,{block:!0,compact:!0}).text,u=c===``?``:l||nh(a.contents)?`
`:` `;n+=`---${u}${c}
`}else n+=qe(t,0,a.contents,null,{block:!0,compact:!0}).text+`
`;o=a.explicitEnd||t.openEnded,o&&(n+=`...
`)}return n}var rh=W(U({},wo),{schema:mp,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}});function ah(e,i){let t=String(e),n=String(i);return t<n?-1:t>n?1:0}function nv(e,i={}){let t=U(U({},rh),i),n=au(e,t.schema,{noRefs:t.noRefs,skipInvalid:t.skipInvalid});if(t.flowLevel>=0&&ss(n,(o,r)=>{if(!(r.depth<t.flowLevel))return(o.kind===`sequence`||o.kind===`mapping`)&&(o.style=ue.FLOW),Ms}),t.sortKeys){let o=t.sortKeys===!0?ah:t.sortKeys;ss(n,r=>{r.kind===`mapping`&&r.items.sort((a,s)=>o(a.key.kind===`scalar`?a.key.value:``,s.key.kind===`scalar`?s.key.value:``))})}return t.transform(n),oh(n,W(U({},lo(t,Object.keys(wo))),{schema:t.schema}))}L.DOCUMENT;L.SEQUENCE;L.MAPPING;L.SCALAR;L.ALIAS;L.POP;b.PLAIN;b.SINGLE_QUOTED;b.DOUBLE_QUOTED;b.LITERAL_BLOCK;b.FOLDED_BLOCK;ue.BLOCK;ue.FLOW;ye.CLIP;ye.STRIP;ye.KEEP;var Gs=class{static parseAndValidate(i){if(!i||i.trim()===``)return{isValid:!1,parsed:null,errors:[`Specification is empty.`]};let t,n=[];try{i.trim().startsWith(`{`)?t=JSON.parse(i):t=Ds(i)}catch(r){return r instanceof Error?n.push(`Parse error: ${r.message}`):r&&typeof r==`object`&&`message`in r?n.push(`Parse error: ${r.message}`):n.push(`Unknown parsing error.`),{isValid:!1,parsed:null,errors:n}}if(typeof t!=`object`||t===null)return n.push(`Specification must be an object.`),{isValid:!1,parsed:null,errors:n};let o=t;if(!o.openapi&&!o.swagger&&n.push(`Missing "openapi" or "swagger" version field.`),!o.info||typeof o.info!=`object`)n.push(`Missing or invalid "info" object.`);else{let r=o.info;r.title||n.push(`Missing "info.title".`),r.version||n.push(`Missing "info.version".`)}return(!o.paths||typeof o.paths!=`object`)&&n.push(`Missing or invalid "paths" object.`),{isValid:n.length===0,parsed:t,errors:n}}};var lh=Math.pow(2,31)-1;var fn=class{_overlayRef;instance;containerInstance;_afterDismissed=new Z;_afterOpened=new Z;_onAction=new Z;_durationTimeoutId;_dismissedByAction=!1;constructor(i,t){this._overlayRef=t,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,lh))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var qs=new k(`MatSnackBarData`);var Yt=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var ch=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return e})();var dh=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return e})();var ph=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return e})();var uh=(()=>{class e{snackBarRef=C$1(fn);data=C$1(qs);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){function t(n,o){if(n&1){let r=Cw();Oi(0,`div`,1)(1,`button`,2),ug(`click`,function(){nd$1(r);let s=Xw();return rd$1(s.action())}),Sb(2),gl$1()()}if(n&2){let r=Xw();ZE(2),Il$1(` `,r.data.action,` `)}}return BD({type:e,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(o,r){o&1&&(Oi(0,`div`,0),Sb(1),gl$1(),pw(2,t,3,1,`div`,1)),o&2&&(ZE(),Il$1(` `,r.data.message,`
`),ZE(),gw(r.hasAction?2:-1))},dependencies:[yr,ch,dh,ph],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return e})();var Eo=`_mat-snack-bar-enter`;var Oo=`_mat-snack-bar-exit`;var hh=(()=>{class e extends tt{_ngZone=C$1(J);_elementRef=C$1(Lr);_changeDetectorRef=C$1(Dj);_platform=C$1(p);_animationsDisabled=G();snackBarConfig=C$1(Yt);_document=C$1(Er);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=C$1(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Z;_onExit=new Z;_onEnter=new Z;_animationState=`void`;_live;_label;_role;_liveElementId=C$1(Kt$1).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===Oo?this._completeExit():t===Eo&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?RE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Eo)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Eo)},200)))}exit(){return this._destroyed?ls$1(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?RE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Oo)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Oo),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(a=>t.classList.add(a)):t.classList.add(n)),this._exposeToModals();let o=this._label.nativeElement,r=`mdc-snackbar__label`;o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<n.length;o++){let r=n[o],a=r.getAttribute(`aria-owns`);this._trackedModals.add(r),a?a.indexOf(t)===-1&&r.setAttribute(`aria-owns`,a+` `+t):r.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let o=n.replace(this._liveElementId,``).trim();o.length>0?t.setAttribute(`aria-owns`,o):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),o=t.querySelector(`[aria-live]`);if(n&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(r=document.activeElement),n.removeAttribute(`aria-hidden`),o.appendChild(n),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`label`];function n(o,r){}return BD({type:e,selectors:[[`mat-snack-bar-container`]],viewQuery:function(r,a){if(r&1&&pg(nt,7)(t,7),r&2){let s;ob(s=ib())&&(a._portalOutlet=s.first),ob(s=ib())&&(a._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(r,a){r&1&&ug(`animationend`,function(l){return a.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return a.onAnimationEnd(l.animationName)}),r&2&&Eg(`mat-snack-bar-container-enter`,a._animationState===`visible`)(`mat-snack-bar-container-exit`,a._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!a._animationsDisabled)},features:[Ah],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(r,a){r&1&&(Oi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Oh(4,n,0,0,`ng-template`,4),gl$1(),Bh(5,`div`),gl$1()()),r&2&&(ZE(5),Vh(`aria-live`,a._live)(`role`,a._role)(`id`,a._liveElementId))},dependencies:[nt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var mh=new k(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new Yt});var Ks=(()=>{class e{_live=C$1(Rn);_injector=C$1(ie);_breakpointObserver=C$1(zt$2);_parentSnackBar=C$1(e,{optional:!0,skipSelf:!0});_defaultConfig=C$1(mh);_animationsDisabled=G();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=uh;snackBarContainerComponent=hh;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,o){let r=U(U({},this._defaultConfig),o);return r.data={message:t,action:n},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let o=n&&n.viewContainerRef&&n.viewContainerRef.injector,r=ie.create({parent:o||this._injector,providers:[{provide:Yt,useValue:n}]}),a=new we(this.snackBarContainerComponent,n.viewContainerRef,r),s=t.attach(a);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let o=U(U(U({},new Yt),this._defaultConfig),n),r=this._createOverlay(o),a=this._attachSnackBarContainer(r,o),s=new fn(a,r);if(t instanceof xr){let l=new Me(t,null,{$implicit:o.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let p=new we(t,void 0,this._createInjector(o,s));s.instance=a.attachComponentPortal(p).instance}return this._breakpointObserver.observe(pi$1.HandsetPortrait).pipe(Gl$1(r.detachments())).subscribe(l=>{r.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),o.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(s,o),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new He;n.direction=t.direction;let o=ot(this._injector),r=t.direction===`rtl`,a=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!r||t.horizontalPosition===`end`&&r,s=!a&&t.horizontalPosition!==`center`;return a?o.left(`0`):s?o.right(`0`):o.centerHorizontally(),t.verticalPosition===`top`?o.top(`0`):o.bottom(`0`),n.positionStrategy=o,n.disableAnimations=this._animationsDisabled,Ye(this._injector,n)}_createInjector(t,n){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ie.create({parent:o||this._injector,providers:[{provide:fn,useValue:n},{provide:qs,useValue:t.data}]})}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var Xs=class e{snackBar=C$1(Ks);success(i){this.snackBar.open(i,`Close`,{duration:3e3,panelClass:[`toast-success`]})}error(i){this.snackBar.open(i,`Close`,{duration:5e3,panelClass:[`toast-error`]})}info(i){this.snackBar.open(i,`Close`,{duration:3e3,panelClass:[`toast-info`]})}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Qs=class e{STORAGE_KEY=`cdd_theme`;document=C$1(Er);platformId=C$1(jy);window=C$1(d);isDarkTheme=ei$1(this.loadInitialTheme());constructor(){Nd$1(()=>{let i=this.isDarkTheme();co$1(this.platformId)&&(i?this.document.documentElement.classList.add(`dark-theme`):this.document.documentElement.classList.remove(`dark-theme`),localStorage.setItem(this.STORAGE_KEY,i?`dark`:`light`))})}toggleTheme(){this.isDarkTheme.update(i=>!i)}setTheme(i){this.isDarkTheme.set(i)}loadInitialTheme(){if(!co$1(this.platformId))return!1;let i=localStorage.getItem(this.STORAGE_KEY);return i===`dark`?!0:i===`light`?!1:!!(this.window?.matchMedia&&this.window.matchMedia(`(prefers-color-scheme: dark)`).matches)}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Zs={singleLanguageMode:!1,eagerLoadWasm:!1,appName:`CDD (WASM) web UI`,footerText:`© 2026 Compiler Driven Development (CDD) WASM web demo.`,wasmSizeText:`~72MB`,loadWasmButtonText:`Load ~72MB of WASM`,languages:[{id:`c`,name:`C (C89)`,repo:`cdd-c`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/c.svg`},{id:`cpp`,name:`C++`,repo:`cdd-cpp`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/cpp.svg`},{id:`csharp`,name:`C#`,repo:`cdd-csharp`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/csharp.svg`},{id:`go`,name:`Go`,repo:`cdd-go`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/go.svg`},{id:`java`,name:`Java`,repo:`cdd-java`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/java.svg`},{id:`kotlin`,name:`Kotlin`,repo:`cdd-kotlin`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/kotlin.svg`},{id:`php`,name:`PHP`,repo:`cdd-php`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/php.svg`},{id:`python`,name:`Python`,repo:`cdd-python-all`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/python.svg`},{id:`ruby`,name:`Ruby`,repo:`cdd-ruby`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/ruby.svg`},{id:`rust`,name:`Rust`,repo:`cdd-rust`,availableInWasm:!0,selectedByDefault:!0,iconUrl:`assets/icons/rust.svg`},{id:`sh`,name:`Shell`,repo:`cdd-sh`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/sh.svg`},{id:`swift`,name:`Swift`,repo:`cdd-swift`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/swift.svg`},{id:`typescript`,name:`TypeScript`,repo:`cdd-ts`,availableInWasm:!0,selectedByDefault:!0,iconUrl:`assets/icons/typescript.svg`}]};var Js=Zs.languages;var el=class e{http=C$1(tr);languages=ei$1(Js);loadWasmSupport(){return es$1(this,null,function*(){try{let i=yield vm$1(this.http.get(`assets/wasm-support.json`));i&&this.languages.update(t=>t.map(n=>{let o=n.id;return n.id===`typescript`&&(o=`ts`),n.id===`openapi`&&(o=`cpp`),n.id===`python`?W(U({},n),{availableInWasm:i[`python-all`]??i.python??!1}):W(U({},n),{availableInWasm:i[o]??!1})}))}catch(i){console.warn(`Failed to load WASM support config`,i)}})}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Gt=class e{BACKEND_URL_KEY=`cdd_backend_url`;RUN_MODE_KEY=`cdd_run_mode`;window=C$1(d);backendUrl=ei$1(this.loadFromStorage());runMode=ei$1(this.loadRunMode());isOnline=Zb$1(()=>this.backendUrl()!==null);constructor(){}loadFromStorage(){return localStorage.getItem(this.BACKEND_URL_KEY)}_getHostname(){return this.window?this.window.location.hostname:void 0}loadRunMode(){let i=localStorage.getItem(this.RUN_MODE_KEY);if(i===`local_relative`||i===`local_cdd_ctl_wasm`||i===`local_cdd_ctl_native`||i===`served_github`)return i;let t=this._getHostname();return t&&t!==`localhost`&&t!==`127.0.0.1`?`served_github`:`local_relative`}setRunMode(i){this.runMode.set(i),localStorage.setItem(this.RUN_MODE_KEY,i)}setOnlineMode(i){try{new URL(i),this.backendUrl.set(i),localStorage.setItem(this.BACKEND_URL_KEY,i)}catch(t){throw new Error(`Invalid URL provided for backend config.`)}}setOfflineMode(){this.backendUrl.set(null),localStorage.removeItem(this.BACKEND_URL_KEY)}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var pi=class e{globalDate=C$1(i);logsSignal=ei$1([]);logs=this.logsSignal.asReadonly();info(i,...t){console.info(`[INFO]: ${i}`,...t),this.addLog(`INFO`,i,t)}warn(i,...t){console.warn(`[WARN]: ${i}`,...t),this.addLog(`WARN`,i,t)}error(i,...t){console.error(`[ERROR]: ${i}`,...t),this.addLog(`ERROR`,i,t)}clear(){this.logsSignal.set([])}addLog(i,t,n){this.logsSignal.update(o=>[...o,{level:i,message:t,timestamp:new this.globalDate().toISOString(),params:n}])}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var at=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ao=(()=>{class e extends tt{_elementRef=C$1(Lr);_focusTrapFactory=C$1(Ze);_config;_interactivityChecker=C$1(Nn);_ngZone=C$1(J);_focusMonitor=C$1(ft$1);_renderer=C$1(gc$1);_changeDetectorRef=C$1(Dj);_injector=C$1(ie);_platform=C$1(p);_document=C$1(Er);_portalOutlet;_focusTrapped=new Z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=C$1(at,{optional:!0})||new at,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let n=this._ariaLabelledByQueue.indexOf(t);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),n}attachTemplatePortal(t){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),n}attachDomPortal=t=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,n){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),t.removeAttribute(`tabindex`)},r=this._renderer.listen(t,`blur`,o),a=this._renderer.listen(t,`mousedown`,o)})),t.focus(n)}_focusByCssSelector(t,n){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,n)}_trapFocus(t){this._isDestroyed||RE(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||n.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,n=null;if(typeof t==`string`?n=this._document.querySelector(t):typeof t==`boolean`?n=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(n=t),this._config.restoreFocus&&n&&typeof n.focus==`function`){let o=Ot(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,n=Ot();return t===n||t.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ot()))}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){function t(n,o){}return BD({type:e,selectors:[[`cdk-dialog-container`]],viewQuery:function(o,r){if(o&1&&pg(nt,7),o&2){let a;ob(a=ib())&&(r._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(o,r){o&2&&Vh(`id`,r._config.id||null)(`role`,r._config.role)(`aria-modal`,r._config.ariaModal)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null)},features:[Ah],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(o,r){o&1&&Oh(0,t,0,0,`ng-template`,0)},dependencies:[nt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var bt=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Qe(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,t=``){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}};var fh=new k(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let e=C$1(ie);return()=>Ft(e)}});var gh=new k(`DialogData`);var _h=new k(`DefaultDialogConfig`);function yh(e){let i=ei$1(e),t=new $e$1;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var Ro=(()=>{class e{_injector=C$1(ie);_defaultOptions=C$1(_h,{optional:!0});_parentDialog=C$1(e,{optional:!0,skipSelf:!0});_overlayContainer=C$1(Zn);_idGenerator=C$1(Kt$1);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=C$1(fh);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Sm$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Zm$1(void 0)));open(t,n){let o=this._defaultOptions||new at;n=U(U({},o),n),n.id=n.id||this._idGenerator.getId(`cdk-dialog-`),n.id&&this.getDialogById(n.id);let r=this._getOverlayConfig(n),a=Ye(this._injector,r),s=new bt(a,n),l=this._attachContainer(a,s,n);if(s.containerInstance=l,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(ps$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(t,s,l,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Io(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(n=>n.id===t)}ngOnDestroy(){Io(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Io(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let n=new He({positionStrategy:t.positionStrategy||ot().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(n.backdropClass=t.backdropClass),n}_attachContainer(t,n,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:at,useValue:o},{provide:bt,useValue:n},{provide:Pt,useValue:t}],s;o.container?typeof o.container==`function`?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=Ao;let l=new we(s,o.viewContainerRef,ie.create({parent:r||this._injector,providers:a}));return t.attach(l).instance}_attachDialogContent(t,n,o,r){if(t instanceof xr){let a=this._createInjector(r,n,o,void 0),s={$implicit:r.data,dialogRef:n};r.templateContext&&(s=U(U({},s),typeof r.templateContext==`function`?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Me(t,null,s,a))}else{let a=this._createInjector(r,n,o,this._injector),s=o.attachComponentPortal(new we(t,r.viewContainerRef,a,null,r.bindings));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(t,n,o,r){let a=t.injector||t.viewContainerRef?.injector,s=[{provide:gh,useValue:t.data},{provide:bt,useValue:n}];return t.providers&&(typeof t.providers==`function`?s.push(...t.providers(n,t,o)):s.push(...t.providers)),t.direction&&(!a||!a.get(Xn$1,null,{optional:!0}))&&s.push({provide:Xn$1,useValue:yh(t.direction)}),ie.create({parent:a||r,providers:s})}_removeOpenDialog(t,n){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute(`aria-hidden`,r):a.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let n=t.parentElement.children;for(let o=n.length-1;o>-1;o--){let r=n[o];r!==t&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();function Io(e,i){let t=e.length;for(;t--;)i(e[t])}var tl=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({providers:[Ro],imports:[Te,it,Pn,it]})}return e})();var hi=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Do=`mdc-dialog--open`;var nl=`mdc-dialog--opening`;var il=`mdc-dialog--closing`;var vh=150;var bh=75;var Sh=(()=>{class e extends Ao{_animationStateChanged=new $e$1;_animationsEnabled=!G();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?rl(this._config.enterAnimationDuration)??vh:0;_exitAnimationDuration=this._animationsEnabled?rl(this._config.exitAnimationDuration)??bh:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ol,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(nl,Do)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Do),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Do),this._animationsEnabled?(this._hostElement.style.setProperty(ol,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(il)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(nl,il)}_waitForAnimationToComplete(t,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let n=super.attachComponentPortal(t);return n.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),n}static ɵfac=(()=>{let t;return function(o){return(t||(t=Dv(e)))(o||e)}})();static ɵcmp=(function(){function t(n,o){}return BD({type:e,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(o,r){o&2&&(qh$1(`id`,r._config.id),Vh(`aria-modal`,r._config.ariaModal)(`role`,r._config.role)(`aria-labelledby`,r._config.ariaLabel?null:r._ariaLabelledByQueue[0])(`aria-label`,r._config.ariaLabel)(`aria-describedby`,r._config.ariaDescribedBy||null),Eg(`_mat-animation-noopable`,!r._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,r._actionSectionCount>0))},features:[Ah],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(o,r){o&1&&(Oi(0,`div`,0)(1,`div`,1),Oh(2,t,0,0,`ng-template`,2),gl$1()())},dependencies:[nt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var ol=`--mat-dialog-transition-duration`;function rl(e){return e==null?null:typeof e==`number`?e:e.endsWith(`ms`)?Pt$1(e.substring(0,e.length-2)):e.endsWith(`s`)?Pt$1(e.substring(0,e.length-1))*1e3:e===`0`?0:null}var ui=(function(e){return e[e.OPEN=0]=`OPEN`,e[e.CLOSING=1]=`CLOSING`,e[e.CLOSED=2]=`CLOSED`,e})(ui||{});var gn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new qn$1(1);_beforeClosed=new qn$1(1);_result;_closeFallbackTimeout;_state=ui.OPEN;_closeInteractionType;constructor(i,t,n){this._ref=i,this._config=t,this._containerInstance=n,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),n._animationStateChanged.pipe(cn$1(o=>o.state===`opened`),ps$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(cn$1(o=>o.state===`closed`),ps$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Am$1(this.backdropClick(),this.keydownEvents().pipe(cn$1(o=>o.keyCode===27&&!this.disableClose&&!Qe(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),al(this,o.type===`keydown`?`keyboard`:`mouse`))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(cn$1(n=>n.state===`closing`),ps$1(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=ui.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,t=``){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=ui.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function al(e,i,t){return e._closeInteractionType=i,e.close(t)}var Ch=new k(`MatMdcDialogData`);var kh=new k(`mat-mdc-dialog-default-options`);var xh=new k(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=C$1(ie);return()=>Ft(e)}});var _n=(()=>{class e{_defaultOptions=C$1(kh,{optional:!0});_scrollStrategy=C$1(xh);_parentDialog=C$1(e,{optional:!0,skipSelf:!0});_idGenerator=C$1(Kt$1);_injector=C$1(ie);_dialog=C$1(Ro);_animationsDisabled=G();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;dialogConfigClass=hi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Sm$1(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Zm$1(void 0)));constructor(){this._dialogRefConstructor=gn,this._dialogContainerType=Sh,this._dialogDataToken=Ch}open(t,n){let o;n=U(U({},this._defaultOptions||new hi),n),n.id=n.id||this._idGenerator.getId(`mat-mdc-dialog-`),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,W(U({},n),{positionStrategy:ot(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()===`0`||n.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:at,useValue:n}]},templateContext:()=>({dialogRef:o}),providers:(a,s,l)=>(o=new this._dialogRefConstructor(a,n,l),o.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o},{provide:bt,useValue:null}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(n=>n.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let n=t.length;for(;n--;)t[n].close()}static ɵfac=function(n){return new(n||e)};static ɵprov=Yt$1({token:e,factory:e.ɵfac})}return e})();var Zb=(()=>{class e{dialogRef=C$1(gn,{optional:!0});_elementRef=C$1(Lr);_dialog=C$1(_n);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ll(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let n=t._matDialogClose;n&&(this.dialogResult=n.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&al(this.dialogRef,t.screenX===0&&t.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(n,o){n&1&&ug(`click`,function(a){return o._onButtonClick(a)}),n&2&&Vh(`aria-label`,o.ariaLabel||null)(`type`,o.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[nv$1]})}return e})();var sl=(()=>{class e{_dialogRef=C$1(gn,{optional:!0});_elementRef=C$1(Lr);_dialog=C$1(_n);ngOnInit(){this._dialogRef||(this._dialogRef=ll(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e})}return e})();var Jb=(()=>{class e extends sl{id=C$1(Kt$1).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(o){return(t||(t=Dv(e)))(o||e)}})();static ɵdir=GD({type:e,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(n,o){n&2&&qh$1(`id`,o.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Ah]})}return e})();var eS=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵdir=GD({type:e,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[KD([Wi])]})}return e})();var tS=(()=>{class e extends sl{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(o){return(t||(t=Dv(e)))(o||e)}})();static ɵdir=GD({type:e,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(n,o){n&2&&Eg(`mat-mdc-dialog-actions-align-start`,o.align===`start`)(`mat-mdc-dialog-actions-align-center`,o.align===`center`)(`mat-mdc-dialog-actions-align-end`,o.align===`end`)},inputs:{align:`align`},features:[Ah]})}return e})();function ll(e,i){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?i.find(n=>n.id===t.id):null}var nS=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({providers:[_n],imports:[tl,Te,it,It]})}return e})();var dl={"cdd-c":`https://github.com/SamuelMarks/cdd-c/releases/latest/download/cdd-c.wasm`,"cdd-cpp":`https://github.com/SamuelMarks/cdd-cpp/releases/latest/download/cdd-cpp.wasm`,"cdd-csharp":`https://github.com/SamuelMarks/cdd-csharp/releases/latest/download/cdd-csharp.wasm`,"cdd-csharp-wasm.zip":`https://github.com/SamuelMarks/cdd-csharp/releases/latest/download/cdd-csharp-wasm.zip`,"cdd-go":`https://github.com/SamuelMarks/cdd-go/releases/latest/download/cdd-go.wasm`,"cdd-java.js.wasm":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.js.wasm`,"cdd-java.js":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.js`,"cdd-java":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.wasm`,"cdd-kotlin":`https://github.com/offscale/cdd-kotlin/releases/latest/download/cdd-kotlin.wasm`,"cdd-php":`https://github.com/SamuelMarks/cdd-php/releases/latest/download/cdd-php.wasm`,"cdd-python-all":`https://github.com/offscale/cdd-python-all/releases/latest/download/cdd-python-all.wasm`,"cdd-ruby":`https://github.com/SamuelMarks/cdd-ruby/releases/latest/download/cdd-ruby.wasm`,"cdd-rust":`https://github.com/offscale/cdd-rust/releases/latest/download/cdd-rust.wasm`,"cdd-sh":`https://github.com/SamuelMarks/cdd-sh/releases/latest/download/cdd-sh.wasm`,"cdd-swift":`https://github.com/SamuelMarks/cdd-swift/releases/latest/download/cdd-swift.wasm`,"cdd-ts":`https://github.com/offscale/cdd-ts/releases/latest/download/cdd-ts-javy.wasm`};var cl=Object.keys(dl);var mi=class e{binaryCache=/* @__PURE__ */ new Map;config=C$1(Gt);dialog=C$1(_n);hasApprovedWasmLoad=!1;doc=C$1(Er,{optional:!0});getGithubWasmUrl(i){return dl[i]||``}getLocalWasmPath(i){return`./assets/wasm/${i.split(`/`).pop()||``}`}getEnvUrl(i){let t=this.getGithubWasmUrl(i);return t?this.getLocalWasmPath(t):``}fetchWasmResponse(i){return es$1(this,null,function*(){let t=this.getEnvUrl(i);if(!t)throw new Error(`No URL configured for ecosystem: ${i}`);return fetch(t)})}preloadAllWasm(i){return es$1(this,null,function*(){let t=0,n=cl.length;yield Promise.all(cl.map(o=>es$1(this,null,function*(){if(o===`cdd-csharp`||o===`cdd-csharp-wasm.zip`||o===`cdd-java.js`){t++,i&&i(t,n);return}try{let r=yield this.fetchWasmResponse(o);if(!r.ok){console.warn(`Failed to preload ${o}: ${r.statusText}`);return}let a=yield r.arrayBuffer(),s=new Uint8Array(a),l=s.length>=4?s[0]<<24|s[1]<<16|s[2]<<8|s[3]:0;l===6386541||l===1347093252?this.binaryCache.set(o,a):console.warn(`Failed to preload ${o}: Invalid magic number`)}catch(r){console.error(`Failed to preload ${o}:`,r)}finally{t++,i&&i(t,n)}}))),this.hasApprovedWasmLoad=!0})}loadWasmBinary(i){return es$1(this,null,function*(){if(this.binaryCache.has(i))return this.binaryCache.get(i);try{let t=yield this.fetchWasmResponse(i);if(!t.ok)throw t.status===404?/* @__PURE__ */ new Error(`WASM binary not found for ${i}. Ensure it is generated and available.`):/* @__PURE__ */ new Error(`Failed to load WASM binary for ${i}: ${t.statusText}`);let n=t.headers.get(`content-type`);n&&!n.includes(`wasm`)&&!n.includes(`application/octet-stream`)&&console.warn(`Unexpected content-type for WASM binary: ${n}. Continuing anyway.`);let o=yield t.arrayBuffer(),r=new Uint8Array(o),a=r.length>=4?r[0]<<24|r[1]<<16|r[2]<<8|r[3]:0;if(!(a===6386541)&&!(a===1347093252))throw new Error(`Invalid WASM binary downloaded for ${i}: Missing magic number.`);return this.binaryCache.set(i,o),o}catch(t){throw console.error(`Error loading WASM binary for ${i}:`,t),t}})}clearCache(){this.binaryCache.clear()}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var pl=class e{http=C$1(tr);config=C$1(Gt);url(i){let t=this.config.backendUrl();if(!t)throw new Error(`Offline mode active. Cannot call API.`);return`${t.replace(/\/$/,``)}${i}`}headers(i){return{headers:new j({Authorization:`Bearer ${i}`})}}getVersion(){return this.http.get(this.url(`/version`))}register(i){return this.http.post(this.url(`/auth/register`),i)}login(i){return this.http.post(this.url(`/auth/login`),i)}loginGithub(i){return this.http.post(this.url(`/auth/github`),i)}createOrg(i,t){return this.http.post(this.url(`/orgs`),i,this.headers(t))}createRepo(i,t){return this.http.post(this.url(`/repos`),i,this.headers(t))}syncGithub(i){return this.http.post(this.url(`/github/sync`),{},this.headers(i))}createRelease(i,t){return this.http.post(this.url(`/github/releases`),i,this.headers(t))}triggerAction(i,t){return this.http.post(this.url(`/github/actions/workflows/trigger`),i,this.headers(t))}createSecret(i,t){return this.http.post(this.url(`/github/actions/secrets`),i,this.headers(t))}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var ul=class e{loaderService=C$1(mi);loggingService=C$1(pi);worker=null;workerLoadError=null;activeJobIds=/* @__PURE__ */ new Set;constructor(){typeof Worker<`u`?(this.worker=new Worker(new URL(`worker-6TM2JIT2.js`,import.meta.url),{type:`module`}),this.worker.addEventListener(`error`,i=>{this.workerLoadError=new Error(i.message||`Web Worker failed to load.`)})):console.warn(`Web Workers are not supported in this environment. WASM operations may block UI.`)}generateCode(r,a){return es$1(this,arguments,function*(i,t,n=`to_sdk`,o={}){if(!this.worker)throw new Error(`Web Worker not initialized.`);if(this.workerLoadError)throw this.workerLoadError;let s;return i!==`cdd-csharp`&&(s=yield this.loaderService.loadWasmBinary(i)),new Promise((l,p)=>{let c=Math.random().toString(36).substring(7);this.activeJobIds.add(c);let u=()=>{this.activeJobIds.delete(c),this.worker?.removeEventListener(`message`,h),this.worker?.removeEventListener(`error`,m)},m=f=>{u(),p(new Error(f.message||`Web Worker error`))},h=f=>{let{status:g,data:O,error:he,level:Oe,message:fi,jobId:hl}=f.data;if(g===`log`){this.activeJobIds.values().next().value===c&&(Oe===`INFO`?this.loggingService.info(fi):Oe===`WARN`?this.loggingService.warn(fi):Oe===`ERROR`&&this.loggingService.error(fi));return}hl===c&&(u(),g===`success`?l(O):p(new Error(he||`Unknown worker error`)))};this.worker.addEventListener(`message`,h),this.worker.addEventListener(`error`,m),this.worker.postMessage({action:`generateSdk`,jobId:c,payload:{ecosystem:i,specContent:t,wasmBinary:s,target:n,languageOptions:o,cddJavaJsUrl:new URL(this.loaderService.getEnvUrl(`cdd-java.js`),document.baseURI).href,cddJavaWasmUrl:new URL(this.loaderService.getEnvUrl(`cdd-java`),document.baseURI).href,cddCsharpDirUrl:new URL(`./assets/wasm/cdd-csharp/`,document.baseURI).href}})})})}terminate(){this.activeJobIds.clear(),this.worker&&(this.worker.terminate(),this.worker=null)}static ɵfac=function(t){return new(t||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};export{am as $,ym as $t,Mt as A,om as At,Vm as B,sy as Bt,Jm as C,mi as Ct,Lm as D,nm as Dt,Km as E,nf as Et,Qy as F,qh as Ft,Yh as G,um as Gt,Wi as H,tf as Ht,Rm as I,rm as It,Zh as J,wf as Jt,Ym as K,ut as Kt,Sm as L,rn as Lt,Om as M,pl as Mt,Qr as N,pm as Nt,Me as O,nt as Ot,Qs as P,q_ as Pt,_n as Q,xy as Qt,Sy as R,sc as Rt,Jh as S,ly as St,Kh as T,nS as Tt,Xm as U,tm as Ut,Vn as V,tS as Vt,Xs as W,ul as Wt,Zs as X,xf as Xt,Zm as Y,wm as Yt,_m as Z,xm as Zt,Gs as _,km as _t,Br as a,dm as at,Im as b,ld as bt,Cm as c,em as ct,Ds as d,gm as dt,zm as en,an as et,Em as f,gn as ft,G_ as g,jm as gt,Fm as h,jc as ht,Bn as i,cm as it,Nm as j,pi as jt,Mm as k,nv as kt,Cy as l,et as lt,Fi as m,im as mt,$n as n,ca as nt,Cg as o,eS as ot,Fh as p,hm as pt,Zb as q,vm as qt,Am as r,cc as rt,Cl as s,el as st,$m as t,bm as tt,Dm as u,fm as ut,Gt as v,ky as vt,K_ as w,mm as wt,Jb as x,lm as xt,Hm as y,la as yt,Um as z,sm as zt};