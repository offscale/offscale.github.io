import{$ as KI,$r as yl$1,$t as Wh$1,A as Er$1,An as ei,At as Rb$1,Bn as gl$1,Cn as cn$1,Cr as pw,D as Eg$1,Dr as ql$1,Dt as Qm$1,Er as qh$1,F as GD,Hr as vg$1,Ht as UD,In as gc,Ir as tb$1,J as Il$1,Jn as ie,Jt as Vh$1,Kr as vw,Kt as Ve,Ln as gd$1,M as Fb$1,Mn as fe,Mr as sb$1,Nn as fg$1,On as du$1,Pn as fs,Pt as Sb$1,Qn as jh$1,Qr as yj,Qt as W,Rn as gg$1,Rr as ug$1,S as Dj,T as Dv,Tn as dg$1,Tr as qb$1,Un as gw,Ur as vj,Ut as Ub$1,V as Hh,Vr as vb$1,Vt as U,Wn as hE,Wr as vl$1,Xn as jb$1,Xr as xr$1,Z as J,Zr as xu$1,_ as C,_t as Oh$1,ai as zl$1,an as Yi,ar as ko$1,at as Lg$1,b as Cw,bn as as$1,br as pE,bt as Pb$1,cn as Yw,cr as ls$1,ct as Lr$1,d as Bb,dn as ZE,dr as mj,et as Kb$1,f as Bh$1,fn as Zb$1,fr as ml$1,ft as Nd$1,gr as nd,hn as _g,hr as nb$1,ir as km$1,jn as es$1,jr as rd$1,k as El$1,kt as RE,ln as Z,lt as M,mr as mw,ni as yw,nn as XI,o as Ah$1,pn as Zm$1,q as Ii$1,qn as ib$1,rn as Xw,rr as kh$1,s as Am$1,t as $e$1,tr as k,u as BD,ur as md$1,vn as ab$1,vr as nv,vt as Oi$1,wr as q,xr as pg$1,y as Cj,yr as ob$1,z as Gl$1,zt as Tj}from"./chunk-BtZ2T9wB.js";import{h as lo$1,n as Ar$1,v as vr$1}from"./chunk-cNPqWwuw.js";import{a as Jt$1,h as q$1,s as Nn$1,t as B,u as U$1,y as xn}from"./chunk-BgRDle1E.js";import{A as hn,H as yr$1,L as p,P as mn,V as xr$2,a as G$1,b as Vt,c as It,g as Qe,l as Kt,r as C$1,t as $n$1,v as Ri,w as _r,x as Xn,z as qa$1}from"./chunk-BgTxYpOR.js";import{a as er,c as ot$1,i as _e,l as rt,n as Ne$1,o as ht$1,u as tr}from"./chunk-CW5kokE4.js";import{t as d}from"./chunk-DGloXzQS.js";import{$ as am$1,At as om$1,B as Vm$1,Bt as sy$1,C as Jm$1,D as Lm$1,Dt as nm$1,Et as nf$1,F as Qy$1,H as Wi,Ht as tf$1,It as rm$1,J as Zh$1,Jt as wf$1,K as Ym$1,Kt as ut$1,M as Om$1,Mt as pl$1,Nt as pm$1,O as Me$1,Ot as nt,P as Qs,Pt as q_$1,Rt as sc,St as ly$1,U as Xm$1,Ut as tm$1,W as Xs,Wt as ul$1,X as Zs,Xt as xf$1,Y as Zm$2,Yt as wm$1,Z as _m$1,_ as Gs,at as dm$1,b as Im$1,bt as ld$1,ct as em$1,d as Ds,dt as gm$1,en as zm$1,f as Em$1,g as G_$1,gt as jm$1,h as Fm$1,j as Nm$1,jt as pi$1,kt as nv$1,l as Cy$1,lt as et$1,mt as im$1,n as $n$2,nt as ca$1,o as Cg$1,p as Fh$1,pt as hm$1,qt as vm$1,rt as cc,st as el$1,t as $m$1,tt as bm$1,ut as fm$1,v as Gt$1,vt as ky$1,w as K_$1,wt as mm$1,xt as lm$1,y as Hm$1,yt as la$1,z as Um$1}from"./chunk-uqtpxnj5.js";import{o as le}from"./chunk-BTPuZ2uc.js";import{n as Z$1,t as J$1}from"./chunk-C7N5w2Qb.js";function Vp(e,t){e&1&&Wh$1(0)}function Hp(e,t){e&1&&Bh$1(0,`mat-spinner`,8)}function qp(e,t){e&1&&(Oi$1(0,`mat-icon`,9),Sb$1(1,`play_arrow`),gl$1())}function Xp(e,t){e&1&&Wh$1(0)}var yr=class e{leftTemplate=yj();rightTemplate=yj();orientation=yj.required();isExecuting=yj(!1);swapClicked=mj();runClicked=mj();runTooltip=Zb$1(()=>this.orientation()===`openapi-left`?`Generate Code (from_openapi)`:`Generate OpenAPI (to_openapi)`);el=C(Lr$1);windowRef=C(d);isDragging=ei(!1);splitPos=ei(50);isMobile=ei(!1);constructor(){this.checkMobile()}onDragStart(t){t.preventDefault(),this.isDragging.set(!0)}onDrag(t){if(!this.isDragging())return;let n=this.el.nativeElement.querySelector(`.split-pane-container`);if(!n)return;let i=n.getBoundingClientRect();if(this.isMobile()){let a=(t.clientY-i.top)/i.height*100;a=Math.max(20,Math.min(a,80)),this.splitPos.set(a)}else{let a=(t.clientX-i.left)/i.width*100;a=Math.max(20,Math.min(a,80)),this.splitPos.set(a)}}onDragEnd(){this.isDragging.set(!1)}onResizerKeydown(t){t.key===`ArrowLeft`||t.key===`ArrowUp`?(t.preventDefault(),this.splitPos.update(i=>Math.max(20,i-5))):t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),this.splitPos.update(i=>Math.min(80,i+5))):t.key===`Home`?(t.preventDefault(),this.splitPos.set(20)):t.key===`End`&&(t.preventDefault(),this.splitPos.set(80))}checkMobile(){this.windowRef&&this.isMobile.set(this.windowRef.innerWidth<=768)}handleKeydown(t){let n=t;if(n.key===`s`||n.key===`S`){if(n.preventDefault(),this.isExecuting())return;n.shiftKey?this.swapClicked.emit():this.runClicked.emit()}}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-split-pane`]],hostBindings:function(n,i){n&1&&ug$1(`keydown.control.s`,function(a){return i.handleKeydown(a)},hE)(`keydown.meta.s`,function(a){return i.handleKeydown(a)},hE)(`resize`,function(){return i.checkMobile()},pE)},inputs:{leftTemplate:[1,`leftTemplate`],rightTemplate:[1,`rightTemplate`],orientation:[1,`orientation`],isExecuting:[1,`isExecuting`]},outputs:{swapClicked:`swapClicked`,runClicked:`runClicked`},decls:16,vars:23,consts:()=>{let t;t=$localize`:@@resizeSplitPanesAria:Resize Split Panes`;let n;n=$localize`Swap Panes (Ctrl+Shift+S)`;let i;i=$localize`:@@swapPanesAria:Swap Panes`;let r;return r=$localize`Generate`,[r,[1,`split-pane-container`,3,`mousemove`,`mouseup`,`mouseleave`],[1,`pane`,`pane-left`],[4,`ngTemplateOutlet`],[1,`resizer-wrapper`],[`role`,`separator`,`tabindex`,`0`,`aria-label`,t,`aria-valuemin`,`20`,`aria-valuemax`,`80`,1,`resizer`,3,`mousedown`,`keydown`],[1,`resizer-action-top`,3,`mousedown`],[`mat-flat-button`,``,1,`generate-btn`,3,`click`,`disabled`,`matTooltip`],[`diameter`,`20`,1,`run-spinner`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,1,`resizer-swap-btn`,3,`click`,`mousedown`,`disabled`],[`aria-hidden`,`true`,1,`big-swap-icon`],[1,`pane`,`pane-right`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,1),ug$1(`mousemove`,function(a){return i.onDrag(a)})(`mouseup`,function(){return i.onDragEnd()})(`mouseleave`,function(){return i.onDragEnd()}),Oi$1(1,`div`,2),Oh$1(2,Vp,1,0,`ng-container`,3),gl$1(),Oi$1(3,`div`,4)(4,`div`,5),ug$1(`mousedown`,function(a){return i.onDragStart(a)})(`keydown`,function(a){return i.onResizerKeydown(a)}),gl$1(),Oi$1(5,`div`,6),ug$1(`mousedown`,function(a){return a.stopPropagation()}),Oi$1(6,`button`,7),ug$1(`click`,function(){return i.runClicked.emit()}),pw(7,Hp,1,0,`mat-spinner`,8)(8,qp,2,0,`mat-icon`,9),Oi$1(9,`span`),Yw(10,0),gl$1()()(),Oi$1(11,`button`,10),ug$1(`click`,function(a){return i.swapClicked.emit(),a.stopPropagation()})(`mousedown`,function(a){return a.stopPropagation()}),Oi$1(12,`span`,11),Sb$1(13,`⇄`),gl$1()()(),Oi$1(14,`div`,12),Oh$1(15,Xp,1,0,`ng-container`,3),gl$1()()),n&2&&(ZE(),vg$1(`width`,i.isMobile()?`100%`:i.splitPos()+`%`)(`height`,i.isMobile()?i.splitPos()+`%`:`100%`),ZE(),Hh(`ngTemplateOutlet`,i.leftTemplate()||null),ZE(),vg$1(`left`,i.isMobile()?`0`:`calc(`+i.splitPos()+`% - 6px)`)(`top`,i.isMobile()?`calc(`+i.splitPos()+`% - 6px)`:`0`),ZE(),Eg$1(`resizing`,i.isDragging()),Vh$1(`aria-orientation`,i.isMobile()?`horizontal`:`vertical`)(`aria-valuenow`,i.splitPos()),ZE(2),Hh(`disabled`,i.isExecuting())(`matTooltip`,i.runTooltip()),Vh$1(`aria-label`,i.runTooltip()),ZE(),gw(i.isExecuting()?7:8),ZE(4),Hh(`disabled`,i.isExecuting()),ZE(3),vg$1(`width`,i.isMobile()?`100%`:100-i.splitPos()+`%`)(`height`,i.isMobile()?100-i.splitPos()+`%`:`100%`),ZE(),Hh(`ngTemplateOutlet`,i.rightTemplate()||null))},dependencies:[vr$1,xr$2,yr$1,$n$1,wf$1,xf$1,Qy$1,ld$1,J$1,Z$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.split-pane-container[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;overflow:hidden;position:relative}.pane[_ngcontent-%COMP%]{height:100%;overflow:auto;transition:width .3s ease-in-out;position:relative}.pane-left[_ngcontent-%COMP%]{border-right:1px solid var(--%NS%border-color)}.pane-right[_ngcontent-%COMP%]{border-left:1px solid var(--%NS%border-color)}.resizer-wrapper[_ngcontent-%COMP%]{width:12px;position:absolute;top:0;bottom:0;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:center}.resizer[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;cursor:col-resize;transition:background-color .2s}.resizer[_ngcontent-%COMP%]:hover, .resizer.resizing[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%primary-color) 10%,transparent)}.resizer[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:-2px;background-color:color-mix(in srgb,var(--%NS%primary-color) 15%,transparent)}.resizer-action-top[_ngcontent-%COMP%]{position:absolute;top:10px;left:50%;transform:translate(-50%);z-index:20}.generate-btn[_ngcontent-%COMP%]{height:40px;border-radius:20px;padding:0 1rem;box-shadow:0 2px 4px #0003}.resizer-swap-btn[_ngcontent-%COMP%]{background-color:var(--%NS%surface-color);border:1px solid var(--%NS%border-color);box-shadow:0 2px 4px #0000001a;width:32px!important;height:32px!important;line-height:32px!important;border-radius:50%;display:flex;justify-content:center;align-items:center;padding:0!important;z-index:20}.resizer-swap-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.run-spinner[_ngcontent-%COMP%]{margin-right:.5rem}@media(max-width:768px){.split-pane-container[_ngcontent-%COMP%]{flex-direction:column}.pane[_ngcontent-%COMP%]{width:100%!important;transition:height .3s ease-in-out}.pane-left[_ngcontent-%COMP%]{border-right:none;border-bottom:1px solid var(--%NS%border-color)}.pane-right[_ngcontent-%COMP%]{border-left:none;border-top:1px solid var(--%NS%border-color)}.resizer-wrapper[_ngcontent-%COMP%]{width:100%;height:12px;left:0;right:0;bottom:auto;flex-direction:row}.resizer[_ngcontent-%COMP%]{cursor:row-resize}.resizer-action-top[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%)}.resizer-swap-btn[_ngcontent-%COMP%]{transform:rotate(90deg)}}.big-swap-icon[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:24px}`]})};var Yp=new k(`MatTabContent`);var Qp=(()=>{class e{template=C(xr$1);static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,selectors:[[``,`matTabContent`,``]],features:[Pb$1([{provide:Yp,useExisting:e}])]})}return e})();var Zp=new k(`MatTabLabel`);var Kc=new k(`MAT_TAB`);var Jp=(()=>{class e extends Cg$1{_closestTab=C(Kc,{optional:!0});static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=GD({type:e,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Pb$1([{provide:Zp,useExisting:e}]),Ah$1]})}return e})();var Yc=new k(`MAT_TAB_GROUP`);var ri=(()=>{class e{_viewContainerRef=C(Yi);_closestTabGroup=C(Yc,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(n){this._setTemplateLabelInput(n)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Z;position=null;origin=null;isActive=!1;constructor(){C(C$1).load(mn)}ngOnChanges(n){(Object.hasOwn(n,`textLabel`)||Object.hasOwn(n,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Me$1(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(n){n&&n._closestTab===this&&(this._templateLabel=n)}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`*`];function i(r,a){r&1&&nb$1(0)}return BD({type:e,selectors:[[`mat-tab`]],contentQueries:function(a,o,s){if(a&1&&fg$1(s,Jp,5)(s,Qp,7,xr$1),a&2){let c;ob$1(c=ib$1())&&(o.templateLabel=c.first),ob$1(c=ib$1())&&(o._explicitContent=c.first)}},viewQuery:function(a,o){if(a&1&&pg$1(xr$1,7),a&2){let s;ob$1(s=ib$1())&&(o._implicitContent=s.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(a,o){a&2&&Vh$1(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Cj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Pb$1([{provide:Kc,useExisting:e}]),nv],ngContentSelectors:n,decls:1,vars:0,template:function(a,o){a&1&&(tb$1(),kh$1(0,i,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return e})();var Da=`mdc-tab-indicator--active`;var Hc=`mdc-tab-indicator--no-transition`;var za=class{_items;_currentItem;constructor(t){this._items=t}hide(){this._items.forEach(t=>t.deactivateInkBar()),this._currentItem=void 0}alignToElement(t){let n=this._items.find(r=>r.elementRef.nativeElement===t),i=this._currentItem;if(n!==i&&(i?.deactivateInkBar(),n)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();n.activateInkBar(r),this._currentItem=n}}};var eu=(()=>{class e{_elementRef=C(Lr$1);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(n){this._fitToContent!==n&&(this._fitToContent=n,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(n){let i=this._elementRef.nativeElement;if(!n||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Da);return}let r=i.getBoundingClientRect(),a=n.width/r.width,o=n.left-r.left;i.classList.add(Hc),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${o}px) scaleX(${a})`),i.getBoundingClientRect(),i.classList.remove(Hc),i.classList.add(Da),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Da)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let n=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=n.createElement(`span`),r=this._inkBarContentElement=n.createElement(`span`);i.className=`mdc-tab-indicator`,r.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Cj]}})}return e})();var Qc=(()=>{class e extends eu{elementRef=C(Lr$1);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=GD({type:e,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(i,r){i&2&&(Vh$1(`aria-disabled`,!!r.disabled),Eg$1(`mat-mdc-tab-disabled`,r.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Cj]},features:[Ah$1]})}return e})();var qc={passive:!0};var tu=650;var nu=100;function Ua(e){let t=e+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(t)?`${e}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(t)?t:``}var iu=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(Dj);_viewportRuler=C(et$1);_dir=C(Xn,{optional:!0});_ngZone=C(J);_platform=C(p);_sharedResizeObserver=C(ot$1);_injector=C(ie);_renderer=C(gc);_animationsDisabled=G$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(n){let i=isNaN(n)?0:n;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $e$1;indexFocused=new $e$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),qc),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),qc))}ngAfterContentInit(){let n=this._dir?this._dir.change:ls$1(`ltr`),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(km$1(32),Gl$1(this._destroyed)),r=this._viewportRuler.change(150).pipe(Gl$1(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Vt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),RE(a,{injector:this._injector}),Am$1(n,r,i,this._items.changes,this._itemsResized()).pipe(Gl$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!=`function`?Ve:this._items.changes.pipe(Zm$1(this._items),du$1(n=>new M(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(a=>i.next(a));return n.forEach(a=>r.observe(a.elementRef.nativeElement)),()=>{r.disconnect()}}))),Qm$1(1),cn$1(n=>n.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(n=>n()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(n){if(!Qe(n))switch(n.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(n))}break;default:this._keyManager?.onKeydown(n)}}_onContentChanges(){let n=this._elementRef.nativeElement.textContent;n!==this._currentTextContent&&(this._currentTextContent=n||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(n){!this._isValidIndex(n)||this.focusIndex===n||!this._keyManager||this._keyManager.setActiveItem(n)}_isValidIndex(n){return this._items?!!this._items.toArray()[n]:!0}_setTabFocus(n){if(this._showPaginationControls&&this._scrollToLabel(n),this._items&&this._items.length){this._items.toArray()[n].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let n=this.scrollDistance,i=this._getLayoutDirection()===`ltr`?-n:n;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(n){this._scrollTo(n)}_scrollHeader(n){let i=this._tabListContainer.nativeElement.offsetWidth,r=(n==`before`?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(n){this._stopInterval(),this._scrollHeader(n)}_scrollToLabel(n){if(this.disablePagination)return;let i=this._items?this._items.toArray()[n]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()==`ltr`?(s=a,c=s+o):(c=this._tabListInner.nativeElement.offsetWidth-a,s=c-o);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let r=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let n=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=n?n.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(n,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),fs(tu,nu).pipe(Gl$1(Am$1(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:a}=this._scrollHeader(n);(a===0||a>=r)&&this._stopInterval()}))}_scrollTo(n){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,n)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Cj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Tj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return e})();var ru=(()=>{class e extends iu{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new za(this._items),super.ngAfterContentInit()}_itemSelected(n){n.preventDefault()}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵcmp=(function(){let n=[`tabListContainer`],i=[`tabList`],r=[`tabListInner`],a=[`nextPaginator`],o=[`previousPaginator`];return BD({type:e,selectors:[[`mat-tab-header`]],contentQueries:function(l,d,u){if(l&1&&fg$1(u,Qc,4),l&2){let p;ob$1(p=ib$1())&&(d._items=p)}},viewQuery:function(l,d){if(l&1&&pg$1(n,7)(i,7)(r,7)(a,5)(o,5),l&2){let u;ob$1(u=ib$1())&&(d._tabListContainer=u.first),ob$1(u=ib$1())&&(d._tabList=u.first),ob$1(u=ib$1())&&(d._tabListInner=u.first),ob$1(u=ib$1())&&(d._nextPaginator=u.first),ob$1(u=ib$1())&&(d._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(l,d){l&2&&Eg$1(`mat-mdc-tab-header-pagination-controls-enabled`,d._showPaginationControls)(`mat-mdc-tab-header-rtl`,d._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Cj]},features:[Ah$1],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(l,d){l&1&&(tb$1(),Oi$1(0,`div`,5,0),ug$1(`click`,function(){return d._handlePaginatorClick(`before`)})(`mousedown`,function(p){return d._handlePaginatorPress(`before`,p)})(`touchend`,function(){return d._stopInterval()}),Bh$1(2,`div`,6),gl$1(),Oi$1(3,`div`,7,1),ug$1(`keydown`,function(p){return d._handleKeydown(p)}),Oi$1(5,`div`,8,2),ug$1(`cdkObserveContent`,function(){return d._onContentChanges()}),Oi$1(7,`div`,9,3),nb$1(9),gl$1()()(),Oi$1(10,`div`,10,4),ug$1(`mousedown`,function(p){return d._handlePaginatorPress(`after`,p)})(`click`,function(){return d._handlePaginatorClick(`after`)})(`touchend`,function(){return d._stopInterval()}),Bh$1(12,`div`,6),gl$1()),l&2&&(Eg$1(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollBefore),Hh(`matRippleDisabled`,d._disableScrollBefore||d.disableRipple),ZE(3),Eg$1(`_mat-animation-noopable`,d._animationsDisabled),ZE(2),Vh$1(`aria-label`,d.ariaLabel||null)(`aria-labelledby`,d.ariaLabelledby||null),ZE(5),Eg$1(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollAfter),Hh(`matRippleDisabled`,d._disableScrollAfter||d.disableRipple))},dependencies:[Ri,qa$1],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return e})();var au=new k(`MAT_TABS_CONFIG`);var Xc=(()=>{class e extends nt{_host=C(Ba);_ngZone=C(J);_centeringSub=q.EMPTY;_leavingSub=q.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Zm$1(this._host._isCenterPosition())).subscribe(n=>{this._host._content&&n&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=GD({type:e,selectors:[[``,`matTabBodyHost`,``]],features:[Ah$1]})}return e})();var Ba=(()=>{class e{_elementRef=C(Lr$1);_dir=C(Xn,{optional:!0});_ngZone=C(J);_injector=C(ie);_renderer=C(gc);_diAnimationsDisabled=G$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=q.EMPTY;_position;_previousPosition;_onCentering=new $e$1;_beforeCentering=new $e$1;_afterLeavingCenter=new $e$1;_onCentered=new $e$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(n){this._positionIndex=n,this._computePositionAnimationState()}constructor(){if(this._dir){let n=C(Dj);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),n.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),RE(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(n=>n()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),r.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(n,`transitionstart`,r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(n,`transitionend`,i),this._renderer.listen(n,`transitioncancel`,i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let n=this._position===`center`;this._beforeCentering.emit(n),n&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(n){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,n)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(n=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=n==`ltr`?`left`:`right`:this._positionIndex>0?this._position=n==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),RE(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`content`];function i(r,a){}return BD({type:e,selectors:[[`mat-tab-body`]],viewQuery:function(a,o){if(a&1&&pg$1(Xc,5)(n,5),a&2){let s;ob$1(s=ib$1())&&(o._portalHost=s.first),ob$1(s=ib$1())&&(o._contentElement=s.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(a,o){a&2&&Vh$1(`inert`,o._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(a,o){a&1&&(Oi$1(0,`div`,1,0),Oh$1(2,i,0,0,`ng-template`,2),gl$1()),a&2&&Eg$1(`mat-tab-body-content-left`,o._position===`left`)(`mat-tab-body-content-right`,o._position===`right`)(`mat-tab-body-content-can-animate`,o._position===`center`||o._previousPosition===`center`)},dependencies:[Xc,Wi],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return e})();var Er=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(Dj);_ngZone=C(J);_tabsSubscription=q.EMPTY;_tabLabelSubscription=q.EMPTY;_tabBodySubscription=q.EMPTY;_diAnimationsDisabled=G$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ii$1;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(n){this._fitInkBarToContent=n,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(n){this._indexToSelect=isNaN(n)?null:n}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(n){this._animationDuration=n,n&&typeof n==`object`?(this._bodyAnimationDuration=Ua(n.body),this._headerAnimationDuration=Ua(n.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Ua(n)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(n){this._contentTabIndex=isNaN(n)?null:n}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(n){let i=this._elementRef.nativeElement.classList;i.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),n&&i.add(`mat-tabs-with-background`,`mat-background-${n}`),this._backgroundColor=n}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $e$1;focusChange=new $e$1;animationDone=new $e$1;selectedTabChange=new $e$1(!0);_groupId;_isServer=!C(p).isBrowser;constructor(){let n=C(au,{optional:!0});this._groupId=C(Kt).getId(`mat-tab-group-`),this.animationDuration=n&&n.animationDuration?n.animationDuration:`500ms`,this.disablePagination=n&&n.disablePagination!=null?n.disablePagination:!1,this.dynamicHeight=n&&n.dynamicHeight!=null?n.dynamicHeight:!1,n?.contentTabIndex!=null&&(this.contentTabIndex=n.contentTabIndex),this.preserveContent=!!n?.preserveContent,this.fitInkBarToContent=n&&n.fitInkBarToContent!=null?n.fitInkBarToContent:!1,this.stretchTabs=n&&n.stretchTabs!=null?n.stretchTabs:!0,this.alignTabs=n&&n.alignTabs!=null?n.alignTabs:null}ngAfterContentChecked(){let n=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=n){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(n));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((r,a)=>r.isActive=a===n),i||(this.selectedIndexChange.emit(n),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((i,r)=>{i.position=r-n,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=n-this._selectedIndex)}),this._selectedIndex!==n&&(this._selectedIndex=n,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let n=this._clampTabIndex(this._indexToSelect);if(n===this._selectedIndex){let i=this._tabs.toArray(),r;for(let a=0;a<i.length;a++)if(i[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,r=i[a];break}!r&&i[n]&&Promise.resolve().then(()=>{i[n].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(n))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Zm$1(this._allTabs)).subscribe(n=>{this._tabs.reset(n.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(n){let i=this._tabHeader;i&&(i.focusIndex=n)}_focusChanged(n){this._lastFocusedTabIndex=n,this.focusChange.emit(this._createChangeEvent(n))}_createChangeEvent(n){let i=new Ga;return i.index=n,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[n]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Am$1(...this._tabs.map(n=>n._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(n){return Math.min(this._tabs.length-1,Math.max(n||0,0))}_getTabLabelId(n,i){return n.id||`${this._groupId}-label-${i}`}_getTabContentId(n){return`${this._groupId}-content-${n}`}_setTabBodyWrapperHeight(n){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=n;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=n+`px`)}_removeTabBodyWrapperHeight(){let n=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=n.clientHeight,n.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(n,i,r){i.focusIndex=r,n.disabled||(this.selectedIndex=r)}_getTabIndex(n){return n===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(n,i){n&&n!==`mouse`&&n!==`touch`&&(this._tabHeader.focusIndex=i)}_bodyCentered(n){n&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`tabBodyWrapper`],i=[`tabHeader`],r=[`*`];function a(u,p){}function o(u,p){if(u&1&&Oh$1(0,a,0,0,`ng-template`,12),u&2){let _=Xw().$implicit;Hh(`cdkPortalOutlet`,_.templateLabel)}}function s(u,p){if(u&1&&Sb$1(0),u&2){let _=Xw().$implicit;_g(_.textLabel)}}function c(u,p){if(u&1){let _=Cw();Oi$1(0,`div`,7,2),ug$1(`click`,function(){let f=nd(_),y=f.$implicit,C=f.$index,b=Xw(),w=ab$1(1);return rd$1(b._handleClick(y,w,C))})(`cdkFocusChange`,function(f){let y=nd(_).$index,C=Xw();return rd$1(C._tabFocusChanged(f,y))}),Bh$1(2,`span`,8)(3,`div`,9),Oi$1(4,`span`,10)(5,`span`,11),pw(6,o,1,1,null,12)(7,s,1,1),gl$1()()()}if(u&2){let _=p.$implicit,m=p.$index,f=ab$1(1),y=Xw();vb$1(_.labelClass),Eg$1(`mdc-tab--active`,y.selectedIndex===m),Hh(`id`,y._getTabLabelId(_,m))(`disabled`,_.disabled)(`fitInkBarToContent`,y.fitInkBarToContent),Vh$1(`tabIndex`,y._getTabIndex(m))(`aria-posinset`,m+1)(`aria-setsize`,y._tabs.length)(`aria-controls`,y._getTabContentId(m))(`aria-selected`,y.selectedIndex===m)(`aria-label`,_.ariaLabel||null)(`aria-labelledby`,!_.ariaLabel&&_.ariaLabelledby?_.ariaLabelledby:null),ZE(3),Hh(`matRippleTrigger`,f)(`matRippleDisabled`,_.disabled||y.disableRipple),ZE(3),gw(_.templateLabel?6:7)}}function l(u,p){u&1&&nb$1(0)}function d(u,p){if(u&1){let _=Cw();Oi$1(0,`mat-tab-body`,13),ug$1(`_onCentered`,function(){nd(_);let f=Xw();return rd$1(f._removeTabBodyWrapperHeight())})(`_onCentering`,function(f){nd(_);let y=Xw();return rd$1(y._setTabBodyWrapperHeight(f))})(`_beforeCentering`,function(f){nd(_);let y=Xw();return rd$1(y._bodyCentered(f))}),gl$1()}if(u&2){let _=p.$implicit,m=p.$index,f=Xw();vb$1(_.bodyClass),Hh(`id`,f._getTabContentId(m))(`content`,_.content)(`position`,_.position)(`animationDuration`,f._bodyAnimationDuration)(`preserveContent`,f.preserveContent),Vh$1(`tabindex`,f.contentTabIndex!=null&&f.selectedIndex===m?f.contentTabIndex:null)(`aria-labelledby`,f._getTabLabelId(_,m))(`aria-hidden`,f.selectedIndex!==m)}}return BD({type:e,selectors:[[`mat-tab-group`]],contentQueries:function(p,_,m){if(p&1&&fg$1(m,ri,5),p&2){let f;ob$1(f=ib$1())&&(_._allTabs=f)}},viewQuery:function(p,_){if(p&1&&pg$1(n,5)(i,5)(Ba,5),p&2){let m;ob$1(m=ib$1())&&(_._tabBodyWrapper=m.first),ob$1(m=ib$1())&&(_._tabHeader=m.first),ob$1(m=ib$1())&&(_._tabBodies=m)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(p,_){p&2&&(Vh$1(`mat-align-tabs`,_.alignTabs),vb$1(`mat-`+(_.color||`primary`)),vg$1(`--%NS%mat-tab-body-animation-duration`,_._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,_._headerAnimationDuration),Eg$1(`mat-mdc-tab-group-dynamic-height`,_.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,_.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,_.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Cj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Cj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Cj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Tj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Tj],disablePagination:[2,`disablePagination`,`disablePagination`,Cj],disableRipple:[2,`disableRipple`,`disableRipple`,Cj],preserveContent:[2,`preserveContent`,`preserveContent`,Cj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Pb$1([{provide:Yc,useExisting:e}])],ngContentSelectors:r,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(p,_){p&1&&(tb$1(),Oi$1(0,`mat-tab-header`,3,0),ug$1(`indexFocused`,function(f){return _._focusChanged(f)})(`selectFocusedIndex`,function(f){return _.selectedIndex=f}),yw(2,c,8,17,`div`,4,mw),gl$1(),pw(4,l,1,0),Oi$1(5,`div`,5,1),yw(7,d,1,10,`mat-tab-body`,6,mw),gl$1()),p&2&&(Hh(`selectedIndex`,_.selectedIndex||0)(`disableRipple`,_.disableRipple)(`disablePagination`,_.disablePagination),jh$1(`aria-label`,_.ariaLabel)(`aria-labelledby`,_.ariaLabelledby),ZE(2),vw(_._tabs),ZE(2),gw(_._isServer?4:-1),ZE(),Eg$1(`_mat-animation-noopable`,_._bodyAnimationsDisabled()),ZE(2),vw(_._tabs))},dependencies:[ru,Qc,hn,Ri,nt,Ba],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var Ga=class{index;tab};var Sr=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[It]})}return e})();var cu=(e,t)=>t.id;function lu(e,t){if(e&1&&(Oi$1(0,`li`),Sb$1(1),gl$1()),e&2){let n=t.$implicit;ZE(),_g(n)}}function du(e,t){if(e&1&&(Oi$1(0,`div`,20)(1,`strong`),Yw(2,3),gl$1(),Oi$1(3,`ul`),yw(4,lu,2,1,`li`,null,mw),gl$1()()),e&2){let n=Xw();ZE(4),vw(n.validationErrors())}}function _u(e,t){if(e&1){let n=Cw();Oi$1(0,`button`,31),ug$1(`click`,function(){nd(n);let r=Xw();return rd$1(r.onPreviewInEditor())}),Oi$1(1,`mat-icon`,16),Sb$1(2,`visibility`),gl$1(),Oi$1(3,`span`),Yw(4,4),gl$1()()}}function pu(e,t){e&1&&Bh$1(0,`mat-spinner`,37)}function uu(e,t){e&1&&(Oi$1(0,`mat-icon`,38),Sb$1(1,`check_circle`),gl$1())}function mu(e,t){if(e&1&&(Oi$1(0,`mat-icon`,39),Sb$1(1,`error_outline`),gl$1()),e&2){let n=Xw().$implicit;Hh(`matTooltip`,n.error||`Failed to load URL`)}}function fu(e,t){e&1&&(Oi$1(0,`mat-icon`,40),Sb$1(1,`link`),gl$1())}function hu(e,t){if(e&1&&(Oi$1(0,`div`,43),Sb$1(1),gl$1()),e&2){let n=Xw().$implicit;ZE(),Il$1(` `,n.error,` `)}}function gu(e,t){if(e&1){let n=Cw();Oi$1(0,`div`,29)(1,`div`,32)(2,`span`,33),Sb$1(3),gl$1(),Oi$1(4,`mat-form-field`,34)(5,`mat-label`),Yw(6,5),gl$1(),Oi$1(7,`input`,35),ug$1(`input`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.onUrlInput(a.id,r))})(`paste`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.onUrlPaste(a.id,r))})(`keydown.enter`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.onUrlEnterKey(a.id,r))}),gl$1()(),Oi$1(8,`div`,36),pw(9,pu,1,0,`mat-spinner`,37)(10,uu,2,0,`mat-icon`,38)(11,mu,2,1,`mat-icon`,39)(12,fu,2,0,`mat-icon`,40),gl$1(),Oi$1(13,`button`,41),ug$1(`click`,function(){let r=nd(n).$implicit,a=Xw();return rd$1(a.onFetchSingleUrl(r.id))}),Oi$1(14,`mat-icon`,16),Sb$1(15,`refresh`),gl$1()(),Oi$1(16,`button`,42),ug$1(`click`,function(){let r=nd(n).$implicit,a=Xw();return rd$1(a.onRemoveUrl(r.id))}),Oi$1(17,`mat-icon`,16),Sb$1(18,`close`),gl$1()()(),pw(19,hu,2,1,`div`,43),gl$1()}if(e&2){let n,i=t.$implicit,r=t.$index;ZE(3),Il$1(`#`,r+1),ZE(4),Hh(`value`,i.url),Vh$1(`aria-label`,`OpenAPI URL #`+(r+1)),ZE(2),gw((n=i.status)===`loading`?9:n===`loaded`?10:n===`error`?11:12),ZE(4),Hh(`disabled`,i.status===`loading`||!i.url.trim()),Vh$1(`aria-label`,`Fetch OpenAPI URL #`+(r+1)),ZE(3),Vh$1(`aria-label`,`Remove OpenAPI URL #`+(r+1)),ZE(3),gw(i.error?19:-1)}}function bu(e,t){if(e&1){let n=Cw();Oi$1(0,`div`,30)(1,`p`),Yw(2,6),gl$1(),Oi$1(3,`button`,44),ug$1(`click`,function(){nd(n);let r=Xw();return rd$1(r.onAddUrl(`https://petstore3.swagger.io/api/v3/openapi.json`))}),Oi$1(4,`mat-icon`,16),Sb$1(5,`add`),gl$1(),Oi$1(6,`span`),Yw(7,7),gl$1()()()}}var vr=class e{specContent=yj.required();isExecuting=yj(!1);activeMode=yj(`editor`);specUrls=yj([]);isFetchingUrls=yj(!1);runClicked=mj();specContentChange=mj();validationErrorsChange=mj();activeModeChange=mj();urlAdded=mj();urlUpdated=mj();urlRemoved=mj();urlsClearClicked=mj();fetchUrlsClicked=mj();internalContent=Kb$1(()=>this.specContent());validationErrors=ei([]);contentControl=new q$1(``);themeService=C(Qs);notificationService=C(Xs);editorInstance;selectedTabIndex=Zb$1(()=>this.activeMode()===`urls`?1:0);hasNonEmptyUrls=Zb$1(()=>this.specUrls().some(t=>t.url.trim().length>0));hasLoadedUrls=Zb$1(()=>this.specUrls().some(t=>t.status===`loaded`&&!!t.content));editorOptions=Zb$1(()=>({theme:this.themeService.isDarkTheme()?`vs-dark`:`vs`,language:this.determineLanguage(this.internalContent()),automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:`on`,formatOnType:!0,formatOnPaste:!0}));constructor(){this.contentControl.valueChanges.pipe(Fh$1()).subscribe(t=>{let n=t||``;n!==this.internalContent()&&(this.internalContent.set(n),this.specContentChange.emit(n),this.validateContent(n))}),Nd$1(()=>{let t=this.specContent();this.contentControl.setValue(t,{emitEvent:!1}),this.validateContent(t)})}onTabIndexChange(t){let n=t===1?`urls`:`editor`;this.activeModeChange.emit(n),n===`editor`&&this.refreshEditorLayout()}refreshEditorLayout(){let t=this.editorInstance;t&&typeof t.layout==`function`&&t.layout()}onAddUrl(t){this.urlAdded.emit(t)}onUrlInput(t,n){let r=n.target?.value??``;this.urlUpdated.emit({id:t,url:r})}onUrlPaste(t,n){let i=n.clipboardData?.getData(`text`)??``;if(!i.includes(`
`)&&!i.includes(`\r`))return;let r=i.split(/\r?\n/).map(a=>a.trim()).filter(a=>a.length>0);if(!(r.length<=1)){n.preventDefault(),this.urlUpdated.emit({id:t,url:r[0]});for(let a=1;a<r.length;a++)this.urlAdded.emit(r[a])}}onUrlEnterKey(t,n){n.preventDefault(),this.onFetchSingleUrl(t)}onRemoveUrl(t){this.urlRemoved.emit(t)}onClearUrls(){this.urlsClearClicked.emit()}onFetchSingleUrl(t){this.fetchUrlsClicked.emit([t])}onFetchAllUrls(){this.fetchUrlsClicked.emit(void 0)}onPreviewInEditor(){this.activeModeChange.emit(`editor`),this.refreshEditorLayout()}handleKeydown(t){let n=t;(n.key===`s`||n.key===`S`)&&(n.shiftKey||(n.preventDefault(),this.isExecuting()||this.runClicked.emit()))}onEditorInit(t){this.editorInstance=t}onContentChange(t){this.internalContent.set(t),this.contentControl.setValue(t,{emitEvent:!1}),this.specContentChange.emit(t),this.validateContent(t)}validateContent(t){let n=Gs.parseAndValidate(t);this.validationErrors.set(n.errors),this.validationErrorsChange.emit(n.errors)}formatDocument(){let t=this.internalContent();if(t.trim())try{let n=t.trim().startsWith(`{`),i=n?JSON.parse(t):Ds(t),r=n?JSON.stringify(i,null,2):nv$1(i,{indent:2,lineWidth:-1});this.onContentChange(r),this.notificationService.success(`Document formatted successfully.`)}catch(n){this.notificationService.error(`Cannot format invalid document.`)}}copyToClipboard(){return es$1(this,null,function*(){let t=this.internalContent();if(t)try{yield navigator.clipboard.writeText(t),this.notificationService.success(`Copied to clipboard.`)}catch(n){this.notificationService.error(`Failed to copy to clipboard.`)}})}clearEditor(){this.onContentChange(``)}determineLanguage(t){return t.trim().startsWith(`{`)?`json`:`yaml`}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-openapi-editor`]],inputs:{specContent:[1,`specContent`],isExecuting:[1,`isExecuting`],activeMode:[1,`activeMode`],specUrls:[1,`specUrls`],isFetchingUrls:[1,`isFetchingUrls`]},outputs:{runClicked:`runClicked`,specContentChange:`specContentChange`,validationErrorsChange:`validationErrorsChange`,activeModeChange:`activeModeChange`,urlAdded:`urlAdded`,urlUpdated:`urlUpdated`,urlRemoved:`urlRemoved`,urlsClearClicked:`urlsClearClicked`,fetchUrlsClicked:`fetchUrlsClicked`},decls:40,vars:8,consts:()=>{let t;t=$localize`:@@openapiEditorActionsAria:OpenAPI Editor Actions`;let n;n=$localize`:@@openapiInputSourceTabsAria:OpenAPI Input Source Tabs`;let i;i=$localize`:@@openapiEditorTab:Editor`;let r;r=$localize`:@@formatDocTooltip:Format Document`;let a;a=$localize`:@@formatDocAria:Format Document`;let o;o=$localize`:@@copyToClipboardTooltip:Copy to Clipboard`;let s;s=$localize`:@@copyToClipboardAria:Copy to Clipboard`;let c;c=$localize`:@@clearEditorTooltip:Clear Editor`;let l;l=$localize`:@@clearEditorAria:Clear Editor`;let d;d=$localize`:@@openapiUrlsTab:URLs`;let u;u=$localize`:@@openapiUrlActionsAria:OpenAPI URL Actions`;let p;p=$localize`:@@addOpenApiUrlAria:Add OpenAPI URL`;let _;_=$localize`:@@fetchAllOpenApiUrlsAria:Fetch All OpenAPI URLs`;let m;m=$localize`:@@previewMergedInEditorAria:Preview Merged Spec in Editor`;let f;f=$localize`:@@clearAllUrlsTooltip:Clear All URLs`;let y;y=$localize`:@@clearAllUrlsAria:Clear All OpenAPI URLs`;let C;C=$localize`OpenAPI Spec`;let b;b=$localize`:@@addUrlBtn:Add URL`;let w;w=$localize`:@@fetchAllUrlsBtn:Fetch All`;let N;N=$localize`:@@validationErrorsHeading:Validation Errors:`;let F;F=$localize`:@@previewInEditorBtn:View in Editor`;let K;K=$localize`:@@openApiUrlPlaceholder:https://petstore3.swagger.io/api/v3/openapi.json`;let X;X=$localize`:@@fetchingUrlSpinnerAria:Fetching OpenAPI URL`;let ae;ae=$localize`:@@urlLoadedTooltip:Specification loaded`;let T;T=$localize`:@@urlLoadedAria:Specification loaded`;let A;A=$localize`:@@urlErrorAria:Specification failed to load`;let z;z=$localize`:@@urlIdleTooltip:Ready to fetch`;let J;J=$localize`:@@fetchSingleUrlTooltip:Fetch URL`;let Y;Y=$localize`:@@removeUrlTooltip:Remove URL`;let S;S=$localize`:@@openApiUrlFieldLabel:OpenAPI Spec URL`;let R;R=$localize`:@@addExamplePetstoreUrlAria:Add Example Petstore URL`;let x;x=$localize`:@@noOpenApiUrlsConfigured: No remote OpenAPI URLs configured. Add one or more URLs to fetch and combine specifications. `;let I;return I=$localize`:@@addPetstoreUrlBtn:Add Petstore Example URL`,[C,b,w,N,F,S,x,I,[1,`openapi-editor-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[1,`toolbar-title`],[`aria-label`,n,1,`openapi-tabs`,3,`selectedIndexChange`,`selectedIndex`],[`label`,i],[1,`editor-wrapper`],[1,`editor-floating-actions`],[`mat-icon-button`,``,`matTooltip`,r,`aria-label`,a,3,`click`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,o,`aria-label`,s,3,`click`],[`mat-icon-button`,``,`matTooltip`,c,`aria-label`,l,3,`click`],[3,`onInit`,`options`,`formControl`],[`role`,`alert`,1,`error-overlay`],[`label`,d],[1,`urls-tab-container`],[`role`,`toolbar`,`aria-label`,u,1,`urls-toolbar`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,p,1,`add-url-btn`,3,`click`],[`mat-flat-button`,``,`type`,`button`,`aria-label`,_,1,`fetch-all-urls-btn`,3,`click`,`disabled`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,m,1,`preview-merged-btn`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,f,`aria-label`,y,1,`clear-urls-btn`,3,`click`,`disabled`],[`role`,`list`,`aria-label`,`OpenAPI Specification URLs`,1,`urls-list`],[`role`,`listitem`,1,`url-entry-card`],[1,`urls-empty-state`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,m,1,`preview-merged-btn`,3,`click`],[1,`url-entry-row`],[`aria-hidden`,`true`,1,`url-index-badge`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`url-input-field`],[`matInput`,``,`type`,`url`,`placeholder`,K,3,`input`,`paste`,`keydown.enter`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`url-status-indicator`],[`diameter`,`20`,`aria-label`,X],[`matTooltip`,ae,`aria-label`,T,1,`status-icon`,`status-loaded`],[`aria-label`,A,1,`status-icon`,`status-error`,3,`matTooltip`],[`aria-hidden`,`true`,`matTooltip`,z,1,`status-icon`,`status-idle`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,J,3,`click`,`disabled`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,Y,3,`click`],[`role`,`alert`,1,`url-entry-error`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,R,3,`click`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,8)(1,`div`,9)(2,`h2`,10),Yw(3,0),gl$1()(),Oi$1(4,`mat-tab-group`,11),ug$1(`selectedIndexChange`,function(a){return i.onTabIndexChange(a)}),Oi$1(5,`mat-tab`,12)(6,`div`,13)(7,`div`,14)(8,`button`,15),ug$1(`click`,function(){return i.formatDocument()}),Oi$1(9,`mat-icon`,16),Sb$1(10,`format_align_left`),gl$1()(),Oi$1(11,`button`,17),ug$1(`click`,function(){return i.copyToClipboard()}),Oi$1(12,`mat-icon`,16),Sb$1(13,`content_copy`),gl$1()(),Oi$1(14,`button`,18),ug$1(`click`,function(){return i.clearEditor()}),Oi$1(15,`mat-icon`,16),Sb$1(16,`delete_outline`),gl$1()()(),Oi$1(17,`ngx-monaco-editor`,19),KI(),ug$1(`onInit`,function(a){return i.onEditorInit(a)}),gl$1(),pw(18,du,6,0,`div`,20),gl$1()(),Oi$1(19,`mat-tab`,21)(20,`div`,22)(21,`div`,23)(22,`button`,24),ug$1(`click`,function(){return i.onAddUrl()}),Oi$1(23,`mat-icon`,16),Sb$1(24,`add_link`),gl$1(),Oi$1(25,`span`),Yw(26,1),gl$1()(),Oi$1(27,`button`,25),ug$1(`click`,function(){return i.onFetchAllUrls()}),Oi$1(28,`mat-icon`,16),Sb$1(29,`cloud_download`),gl$1(),Oi$1(30,`span`),Yw(31,2),gl$1()(),pw(32,_u,5,0,`button`,26),Oi$1(33,`button`,27),ug$1(`click`,function(){return i.onClearUrls()}),Oi$1(34,`mat-icon`,16),Sb$1(35,`delete_sweep`),gl$1()()(),Oi$1(36,`div`,28),yw(37,gu,20,8,`div`,29,cu,!1,bu,8,0,`div`,30),gl$1()()()()()),n&2&&(ZE(4),Hh(`selectedIndex`,i.selectedTabIndex()),ZE(13),Hh(`options`,i.editorOptions())(`formControl`,i.contentControl),XI(),ZE(),gw(i.validationErrors().length>0?18:-1),ZE(9),Hh(`disabled`,i.isFetchingUrls()||!i.hasNonEmptyUrls()),ZE(5),gw(i.hasLoadedUrls()?32:-1),ZE(),Hh(`disabled`,i.specUrls().length===0),ZE(4),vw(i.specUrls()))},dependencies:[xn,Nn$1,Jt$1,ly$1,sy$1,xr$2,yr$1,$n$1,wf$1,xf$1,Qy$1,ld$1,Sr,ri,Er,Ne$1,ht$1,_e,tr,er,J$1,Z$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.openapi-editor-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem}.toolbar-title[_ngcontent-%COMP%]{margin:0 auto 0 0;font-size:1rem;font-weight:500;color:var(--%NS%text-primary)}.openapi-tabs[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column;min-height:0;height:100%}.editor-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;height:100%;overflow:hidden}ngx-monaco-editor[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.error-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;background-color:var(--%NS%error-bg);color:var(--%NS%error-text);padding:.5rem 1rem;font-size:.875rem;border-top:1px solid var(--%NS%error-text);z-index:10;max-height:30%;overflow-y:auto}.error-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0;padding-left:1.5rem}.editor-floating-actions[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px;z-index:10;display:flex;gap:4px;background-color:var(--%NS%surface-color, #ffffff);border:1px solid var(--%NS%border-color, #e0e0e0);border-radius:4px;box-shadow:0 2px 5px #0000001a;padding:2px}html.dark-theme[_nghost-%COMP%]   .editor-floating-actions[_ngcontent-%COMP%], html.dark-theme   [_nghost-%COMP%]   .editor-floating-actions[_ngcontent-%COMP%]{box-shadow:0 2px 5px #0000004d}.urls-tab-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.urls-toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;flex-wrap:wrap;gap:.5rem;padding:.5rem .75rem;border-bottom:1px solid var(--%NS%border-color);background-color:var(--%NS%surface-color)}.clear-urls-btn[_ngcontent-%COMP%]{margin-left:auto}.urls-list[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:.75rem;display:flex;flex-direction:column;gap:.75rem}.url-entry-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.375rem;padding:.5rem .75rem;border:1px solid var(--%NS%border-color);border-radius:6px;background-color:var(--%NS%surface-color)}.url-entry-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.url-index-badge[_ngcontent-%COMP%]{font-size:.8125rem;font-weight:600;color:var(--%NS%text-secondary, var(--%NS%text-primary));min-width:1.75rem;text-align:center}.url-input-field[_ngcontent-%COMP%]{flex:1 1 auto}.url-status-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;flex:0 0 28px}.status-icon.status-loaded[_ngcontent-%COMP%]{color:#2e7d32}html.dark-theme[_nghost-%COMP%]   .status-icon.status-loaded[_ngcontent-%COMP%], html.dark-theme   [_nghost-%COMP%]   .status-icon.status-loaded[_ngcontent-%COMP%]{color:#81c784}.status-icon.status-error[_ngcontent-%COMP%]{color:var(--%NS%error-text, #d32f2f)}.status-icon.status-idle[_ngcontent-%COMP%]{opacity:.65}.url-entry-error[_ngcontent-%COMP%]{background-color:var(--%NS%error-bg, #fdecea);color:var(--%NS%error-text, #b71c1c);padding:.375rem .625rem;border-radius:4px;font-size:.8125rem;border-left:3px solid var(--%NS%error-text, #b71c1c);word-break:break-word}.urls-empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem 1rem;gap:.75rem;color:var(--%NS%text-primary)}.urls-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:360px;font-size:.875rem}`]})};var kn=class{static buildTree(t){let n=[];for(let i of t){let r=i.split(`/`),a=n;for(let o=0;o<r.length;o++){let s=r[o],c=o===r.length-1,l=r.slice(0,o+1).join(`/`),d=a.find(u=>u.name===s);d||(d=U({name:s,path:l,isDirectory:!c},c?{}:{children:[],isExpanded:!0}),a.push(d)),!c&&d.children&&(a=d.children)}}return this.sortTree(n),n}static sortTree(t){t.sort((n,i)=>n.isDirectory===i.isDirectory?n.name.localeCompare(i.name):n.isDirectory?-1:1);for(let n of t)n.children&&this.sortTree(n.children)}static setAllExpanded(t,n){for(let i of t)i.isDirectory&&(i.isExpanded=n,i.children&&this.setAllExpanded(i.children,n))}};var yu=e=>({$implicit:e,isGroup:!1});var Eu=e=>({$implicit:e,isGroup:!0});var Su=(e,t)=>t.path;function vu(e,t){e&1&&(Oi$1(0,`div`,11),Bh$1(1,`div`,13)(2,`div`,14)(3,`div`,15)(4,`div`,16)(5,`div`,17),gl$1())}function xu(e,t){e&1&&Wh$1(0)}function ku(e,t){if(e&1&&Oh$1(0,xu,1,0,`ng-container`,18),e&2){let n=Xw(),i=ab$1(15);Hh(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,jb$1(2,yu,n.treeNodes()))}}function Cu(e,t){e&1&&(Oi$1(0,`div`,12)(1,`mat-icon`,8),Sb$1(2,`snippet_folder`),gl$1(),Oi$1(3,`p`),Yw(4,2),gl$1(),Oi$1(5,`p`,19),Yw(6,3),gl$1()())}function Tu(e,t){if(e&1&&(Oi$1(0,`mat-icon`,23),Sb$1(1),gl$1()),e&2){let n=Xw().$implicit;ZE(),Il$1(` `,n.isExpanded?`folder_open`:`folder`,` `)}}function Ou(e,t){if(e&1&&(Oi$1(0,`mat-icon`,24),Sb$1(1),gl$1()),e&2){let n=Xw().$implicit,i=Xw(2);ZE(),_g(i.getFileIcon(n.name))}}function Au(e,t){e&1&&Wh$1(0)}function wu(e,t){if(e&1&&Oh$1(0,Au,1,0,`ng-container`,18),e&2){let n=Xw().$implicit;Xw(2);let i=ab$1(15);Hh(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,jb$1(2,Eu,n.children))}}function Pu(e,t){if(e&1){let n=Cw();Oi$1(0,`li`,21),ug$1(`keydown`,function(r){let a=nd(n).$implicit,o=Xw(2);return rd$1(o.onTreeItemKeydown(r,a))}),Oi$1(1,`div`,22),ug$1(`click`,function(){let r=nd(n).$implicit,a=Xw(2);return rd$1(a.onNodeClick(r))}),pw(2,Tu,2,1,`mat-icon`,23)(3,Ou,2,1,`mat-icon`,24),Oi$1(4,`span`),Sb$1(5),gl$1()(),pw(6,wu,1,4,`ng-container`),gl$1()}if(e&2){let n=t.$implicit,i=t.$index,r=Xw().isGroup,a=Xw();Vh$1(`tabindex`,a.getTreeItemTabIndex(n,!r&&i===0))(`aria-expanded`,n.isDirectory?n.isExpanded:null)(`aria-selected`,n.path===a.activeFilePath()),ZE(),Eg$1(`active`,!n.isDirectory&&n.path===a.activeFilePath()),ZE(),gw(n.isDirectory?2:3),ZE(3),_g(n.name),ZE(),gw(n.isDirectory&&n.isExpanded&&n.children?6:-1)}}function Nu(e,t){if(e&1&&(Oi$1(0,`ul`),yw(1,Pu,7,8,`li`,20,Su),gl$1()),e&2){let n=t.$implicit,i=t.isGroup;Vh$1(`role`,i?`group`:`presentation`),ZE(),vw(n)}}var xr=class e{files=yj.required();activeFilePath=yj(null);isExecuting=yj(!1);fileSelected=mj();treeNodes=Kb$1(()=>kn.buildTree(this.files().map(t=>t.path)));hasFiles=Zb$1(()=>this.files().length>0);getTreeItemTabIndex(t,n){let i=this.activeFilePath();return i?t.path===i?0:-1:n?0:-1}updateNodeExpansion(t,n,i){return t.map(r=>r.path===n&&r.isDirectory?W(U({},r),{isExpanded:i!==void 0?i:!r.isExpanded}):r.children?W(U({},r),{children:this.updateNodeExpansion(r.children,n,i)}):r)}onNodeClick(t){t.isDirectory?this.treeNodes.update(n=>this.updateNodeExpansion(n,t.path)):this.fileSelected.emit(t.path)}onTreeItemKeydown(t,n){t.stopPropagation();let i=t.currentTarget,r=i?.closest(`[role="tree"]`);switch(t.key){case`Enter`:case` `:t.preventDefault(),this.onNodeClick(n);break;case`ArrowRight`:n.isDirectory&&!n.isExpanded&&(t.preventDefault(),this.treeNodes.update(a=>this.updateNodeExpansion(a,n.path,!0)));break;case`ArrowLeft`:n.isDirectory&&n.isExpanded&&(t.preventDefault(),this.treeNodes.update(a=>this.updateNodeExpansion(a,n.path,!1)));break;case`ArrowDown`:case`ArrowUp`:if(r&&i){t.preventDefault();let a=Array.from(r.querySelectorAll(`li[role="treeitem"]`)),o=a.indexOf(i),s=t.key===`ArrowDown`?o+1:o-1;s>=0&&s<a.length&&a[s].focus()}}}expandAll(){let t=this.treeNodes();kn.setAllExpanded(t,!0),this.treeNodes.update(()=>[...t])}collapseAll(){let t=this.treeNodes();kn.setAllExpanded(t,!1),this.treeNodes.update(()=>[...t])}getFileIcon(t){return t.endsWith(`.ts`)||t.endsWith(`.js`)?`javascript`:t.endsWith(`.json`)?`data_object`:t.endsWith(`.md`)?`description`:t.endsWith(`.rs`)||t.endsWith(`.py`)||t.endsWith(`.go`)?`code`:`insert_drive_file`}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-directory-tree`]],inputs:{files:[1,`files`],activeFilePath:[1,`activeFilePath`],isExecuting:[1,`isExecuting`]},outputs:{fileSelected:`fileSelected`},decls:16,vars:3,consts:()=>{let t;t=$localize`:@@dirTreeActionsAria:Directory Tree Actions`;let n;n=$localize`:@@expandAllTooltip:Expand All`;let i;i=$localize`:@@expandAllAria:Expand All`;let r;r=$localize`:@@collapseAllTooltip:Collapse All`;let a;a=$localize`:@@collapseAllAria:Collapse All`;let o;o=$localize`:@@generatedFilesTreeAria:Generated Files`;let s;s=$localize`Explorer`;let c;c=$localize`:@@noFilesGenerated:No files generated.`;let l;return l=$localize`:@@generateSdkPrompt: Click 'Run' to generate SDK files from the OpenAPI spec. `,[[`treeNodeTemplate`,``],s,c,l,[1,`directory-tree-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[1,`toolbar-title`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,3,`click`,`disabled`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,r,`aria-label`,a,3,`click`,`disabled`],[`role`,`tree`,`aria-label`,o,1,`tree-wrapper`],[1,`loading-skeleton`],[1,`empty-state`],[1,`skeleton-line`,2,`width`,`80%`],[1,`skeleton-line`,2,`width`,`60%`,`margin-left`,`1rem`],[1,`skeleton-line`,2,`width`,`70%`,`margin-left`,`1rem`],[1,`skeleton-line`,2,`width`,`40%`,`margin-left`,`2rem`],[1,`skeleton-line`,2,`width`,`50%`,`margin-left`,`2rem`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[2,`font-size`,`0.8rem`,`margin-top`,`0.5rem`],[`role`,`treeitem`],[`role`,`treeitem`,3,`keydown`],[1,`node`,3,`click`],[`aria-hidden`,`true`,1,`icon`,`folder-icon`],[`aria-hidden`,`true`,1,`icon`,`file-icon`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,4)(1,`div`,5)(2,`h2`,6),Yw(3,1),gl$1(),Oi$1(4,`button`,7),ug$1(`click`,function(){return i.expandAll()}),Oi$1(5,`mat-icon`,8),Sb$1(6,`unfold_more`),gl$1()(),Oi$1(7,`button`,9),ug$1(`click`,function(){return i.collapseAll()}),Oi$1(8,`mat-icon`,8),Sb$1(9,`unfold_less`),gl$1()()(),Oi$1(10,`div`,10),pw(11,vu,6,0,`div`,11)(12,ku,1,4,`ng-container`)(13,Cu,7,0,`div`,12),gl$1()(),Oh$1(14,Nu,3,1,`ng-template`,null,0,qb$1)),n&2&&(ZE(4),Hh(`disabled`,!i.hasFiles()),ZE(3),Hh(`disabled`,!i.hasFiles()),ZE(4),gw(i.isExecuting()?11:i.hasFiles()?12:13))},dependencies:[vr$1,xr$2,$n$1,wf$1,xf$1,Qy$1,ld$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.directory-tree-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);border-right:1px solid var(--%NS%border-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem}.toolbar-title[_ngcontent-%COMP%]{margin:0;margin-left:5rem;font-size:1rem;font-weight:500;color:var(--%NS%text-primary);margin-right:auto}@media(max-width:768px){.toolbar-title[_ngcontent-%COMP%]{margin-left:0}}.tree-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:.5rem}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:.75rem;margin:0}.tree-wrapper[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{padding-left:0}li[role=treeitem][_ngcontent-%COMP%]:focus-visible{outline:none}li[role=treeitem][_ngcontent-%COMP%]:focus-visible > .node[_ngcontent-%COMP%]{outline:2px solid var(--%NS%primary-color);outline-offset:-2px}.node[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;padding:.2rem .5rem;border-radius:4px;-webkit-user-select:none;user-select:none;color:var(--%NS%text-primary);font-size:.85rem;white-space:nowrap;overflow:hidden}.node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.node[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%primary-color) 5%,transparent)}.node.active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%primary-color) 15%,transparent);font-weight:500}.icon[_ngcontent-%COMP%]{margin-right:.5rem;font-size:1.1rem;width:1.1rem;height:1.1rem;line-height:1.1rem;display:flex;justify-content:center;align-items:center;flex-shrink:0}.folder-icon[_ngcontent-%COMP%]{color:var(--%NS%primary-color)}.file-icon[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--%NS%text-secondary);text-align:center;padding:2rem}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3rem;width:3rem;height:3rem;margin-bottom:1rem;opacity:.5}.loading-skeleton[_ngcontent-%COMP%]{padding:1rem}.skeleton-line[_ngcontent-%COMP%]{height:1.5rem;background-color:var(--%NS%border-color);border-radius:4px;margin-bottom:.5rem;animation:_ngcontent-%COMP%_pulse 1.5s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:.6}50%{opacity:.3}to{opacity:.6}}`]})};function Iu(e,t){if(e&1){let n=Cw();Oi$1(0,`div`,13)(1,`div`,14),ug$1(`click`,function(){let r=nd(n).$implicit,a=Xw();return rd$1(a.selectTab(r))})(`keydown`,function(r){let a=nd(n),o=a.$implicit,s=a.$index,c=Xw();return rd$1(c.onTabKeydown(r,o,s))}),Oi$1(2,`span`,15),Sb$1(3),gl$1()(),Oi$1(4,`button`,16),ug$1(`click`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.closeTab(a,r))})(`keydown.enter`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.closeTab(a,r))})(`keydown.space`,function(r){let a=nd(n).$implicit,o=Xw();return rd$1(o.closeTab(a,r))}),Oi$1(5,`mat-icon`,8),Sb$1(6,`close`),gl$1()()()}if(e&2){let n=t.$implicit,i=t.$index,r=Xw();Eg$1(`active`,n===r.activeFilePath()),ZE(),Eg$1(`active`,n===r.activeFilePath()),Hh(`id`,`code-tab-`+i),Vh$1(`tabindex`,n===r.activeFilePath()?0:-1)(`aria-selected`,n===r.activeFilePath()),ZE(),Hh(`title`,n),ZE(),_g(r.getFilename(n))}}function Mu(e,t){if(e&1&&(Oi$1(0,`ngx-monaco-editor`,11),KI(),gl$1()),e&2){let n=Xw();Hh(`options`,n.editorOptions())(`formControl`,n.contentControl),XI()}}function Ru(e,t){e&1&&(Oi$1(0,`div`,12)(1,`mat-icon`,8),Sb$1(2,`code_off`),gl$1(),Oi$1(3,`p`),Yw(4,0),gl$1(),Oi$1(5,`p`,17),Yw(6,1),gl$1()())}var kr=class e{activeFilePath=yj(null);isReadOnly=yj(!0);fileContent=yj(null);fileSelected=mj();fileContentChange=mj();openTabs=ei([]);contentControl=new q$1(``);notificationService=C(Xs);themeService=C(Qs);window=C(d);activeTabElementId=Zb$1(()=>{let t=this.activeFilePath();return t?`code-tab-${this.openTabs().indexOf(t)}`:null});editorOptions=Zb$1(()=>({theme:this.themeService.isDarkTheme()?`vs-dark`:`vs`,language:this.determineLanguage(this.activeFilePath()||``),readOnly:this.isReadOnly(),automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:`on`,renderLineHighlight:`none`}));constructor(){this.contentControl.valueChanges.pipe(Fh$1()).subscribe(t=>{this.fileContentChange.emit(t||``)}),Nd$1(()=>{let t=this.activeFilePath();t&&this.ensureTabIsOpen(t)}),Nd$1(()=>{let t=this.fileContent()||``;this.contentControl.value!==t&&this.contentControl.setValue(t,{emitEvent:!1})})}ensureTabIsOpen(t){this.openTabs().includes(t)||this.openTabs.update(n=>[...n,t])}selectTab(t,n){n&&n.preventDefault(),t!==this.activeFilePath()&&this.fileSelected.emit(t)}onTabKeydown(t,n,i){let r=this.openTabs();if(t.key===`Enter`||t.key===` `){this.selectTab(n,t);return}let a=-1;t.key===`ArrowRight`?a=(i+1)%r.length:t.key===`ArrowLeft`?a=(i-1+r.length)%r.length:t.key===`Home`?a=0:t.key===`End`&&(a=r.length-1),a!==-1&&(t.preventDefault(),this.selectTab(r[a]),t.currentTarget?.closest(`[role="tablist"]`)?.querySelectorAll(`[role="tab"]`)?.[a]?.focus())}closeTab(t,n){n.preventDefault(),n.stopPropagation();let r=this.openTabs().filter(a=>a!==t);this.openTabs.set(r),t===this.activeFilePath()&&(r.length>0?this.fileSelected.emit(r[r.length-1]):this.fileSelected.emit(``))}copyToClipboard(){return es$1(this,null,function*(){let t=this.fileContent();if(t)try{yield navigator.clipboard.writeText(t),this.notificationService.success(`Copied to clipboard.`)}catch(n){this.notificationService.error(`Failed to copy to clipboard.`)}})}downloadFile(){let t=this.fileContent(),n=this.activeFilePath();if(!t||!n)return;let i=this.getFilename(n),r=new Blob([t],{type:`text/plain`});if(!this.window)return;let a=this.window,o=a.URL.createObjectURL(r),s=this.window.document.createElement(`a`);s.href=o,s.download=i,s.click(),a.URL.revokeObjectURL(o),this.notificationService.success(`Downloading ${i}...`)}getFilename(t){return t.split(`/`).pop()||t}determineLanguage(t){switch(t.split(`.`).pop()?.toLowerCase()){case`ts`:case`tsx`:return`typescript`;case`js`:case`jsx`:return`javascript`;case`json`:return`json`;case`yaml`:case`yml`:return`yaml`;case`md`:return`markdown`;case`html`:return`html`;case`css`:return`css`;case`scss`:return`scss`;case`rs`:return`rust`;case`go`:return`go`;case`py`:return`python`;case`rb`:return`ruby`;case`java`:return`java`;case`kt`:case`kts`:return`kotlin`;case`swift`:return`swift`;case`cs`:return`csharp`;case`cpp`:case`cc`:case`cxx`:case`h`:case`hpp`:return`cpp`;case`c`:return`c`;case`php`:return`php`;case`sh`:case`bash`:return`shell`;default:return`plaintext`}}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-code-viewer`]],inputs:{activeFilePath:[1,`activeFilePath`],isReadOnly:[1,`isReadOnly`],fileContent:[1,`fileContent`]},outputs:{fileSelected:`fileSelected`,fileContentChange:`fileContentChange`},decls:15,vars:4,consts:()=>{let t;t=$localize`:@@codeViewerActionsAria:Code Viewer Actions`;let n;n=$localize`:@@openFilesTablistAria:Open Files`;let i;i=$localize`Copy File Content`;let r;r=$localize`:@@copyToClipboardAria:Copy to Clipboard`;let a;a=$localize`:@@downloadFileTooltip:Download File`;let o;o=$localize`:@@downloadFileAria:Download File`;let s;s=$localize`:@@closeTabAria:Close Tab`;let c;c=$localize`:@@noFileSelected:No file selected`;let l;return l=$localize`:@@selectFilePrompt: Select a file from the Explorer to view its contents. `,[c,l,[1,`code-viewer-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[`role`,`tablist`,`aria-label`,n,1,`tabs-container`],[`role`,`presentation`,1,`tab-item`,3,`active`],[1,`actions`],[`mat-icon-button`,``,`matTooltip`,i,`aria-label`,r,3,`click`,`disabled`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,a,`aria-label`,o,3,`click`,`disabled`],[`id`,`code-viewer-tabpanel`,`role`,`tabpanel`,1,`editor-wrapper`],[3,`options`,`formControl`],[1,`empty-state`],[`role`,`presentation`,1,`tab-item`],[`role`,`tab`,`aria-controls`,`code-viewer-tabpanel`,1,`tab`,3,`click`,`keydown`,`id`],[3,`title`],[`type`,`button`,`aria-label`,s,1,`tab-close`,3,`click`,`keydown.enter`,`keydown.space`],[2,`font-size`,`0.8rem`,`margin-top`,`0.5rem`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,2)(1,`div`,3)(2,`div`,4),yw(3,Iu,7,9,`div`,5,mw),gl$1(),Oi$1(5,`div`,6)(6,`button`,7),ug$1(`click`,function(){return i.copyToClipboard()}),Oi$1(7,`mat-icon`,8),Sb$1(8,`content_copy`),gl$1()(),Oi$1(9,`button`,9),ug$1(`click`,function(){return i.downloadFile()}),Oi$1(10,`mat-icon`,8),Sb$1(11,`download`),gl$1()()()(),Oi$1(12,`div`,10),pw(13,Mu,1,2,`ngx-monaco-editor`,11)(14,Ru,7,0,`div`,12),gl$1()()),n&2&&(ZE(3),vw(i.openTabs()),ZE(3),Hh(`disabled`,!i.activeFilePath()),ZE(3),Hh(`disabled`,!i.activeFilePath()),ZE(3),Vh$1(`aria-labelledby`,i.activeTabElementId()),ZE(),gw(i.activeFilePath()&&i.fileContent()!==null?13:14))},dependencies:[xn,Nn$1,Jt$1,ly$1,sy$1,xr$2,$n$1,wf$1,xf$1,Qy$1,ld$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.code-viewer-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem;overflow-x:auto}.tabs-container[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;overflow-x:auto;gap:2px;align-items:flex-end}.tab-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.25rem .5rem;background-color:color-mix(in srgb,var(--%NS%border-color) 20%,transparent);border:1px solid transparent;border-bottom:none;border-radius:4px 4px 0 0;color:var(--%NS%text-secondary);font-size:.875rem;min-width:100px;max-width:200px}.tab-item[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%border-color) 40%,transparent)}.tab-item.active[_ngcontent-%COMP%]{background-color:var(--%NS%surface-color);border-color:var(--%NS%border-color);border-bottom:1px solid var(--%NS%surface-color);color:var(--%NS%primary-color);margin-bottom:-1px;z-index:1}.tab[_ngcontent-%COMP%]{display:flex;align-items:center;flex:1 1 auto;cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;border-radius:2px}.tab[_ngcontent-%COMP%]:focus-visible, .tab-close[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:1px}.tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab-close[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;margin-left:.25rem;opacity:.5;border:none;background:transparent;padding:0;cursor:pointer;color:inherit}.tab-close[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%error-bg) 20%,transparent);color:var(--%NS%error-text);opacity:1}.tab-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;line-height:14px}.actions[_ngcontent-%COMP%]{display:flex;gap:.25rem}.editor-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow:hidden}ngx-monaco-editor[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--%NS%text-secondary);text-align:center;padding:2rem}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3rem;width:3rem;height:3rem;margin-bottom:1rem;opacity:.5}`]})};var el=(()=>{class e{labelPosition=`after`;static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){return BD({type:e,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,a){r&2&&Eg$1(`mdc-form-field--align-end`,a.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,a){r&1&&(tb$1(),nb$1(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return e})();var Fa={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Lu=new k(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Fa});var Le=(function(e){return e[e.Init=0]=`Init`,e[e.Checked=1]=`Checked`,e[e.Unchecked=2]=`Unchecked`,e[e.Indeterminate=3]=`Indeterminate`,e})(Le||{});var Wa=class{source;checked};var Va=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(Dj);_ngZone=C(J);_animationsDisabled=G$1();_options=C(Lu,{optional:!0});_injector=C(ie);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(n){let i=new Wa;return i.source=this,i.checked=n,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new $e$1;indeterminateChange=new $e$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=Le.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){C(C$1).load(mn);let n=C(new Lg$1(`tabindex`),{optional:!0});this._options=this._options||Fa,this.color=this._options.color||Fa.color,this.tabIndex=n==null?0:parseInt(n)||0,this.id=this._uniqueId=C(Kt).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(n){n.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(rt,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(n){n!=this.checked&&(this._checked=n,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(n){n!==this.disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(n){let i=n!=this._indeterminate();this._indeterminate.set(n),i&&(n?this._transitionCheckState(Le.Indeterminate):this._transitionCheckState(this.checked?Le.Checked:Le.Unchecked),this.indeterminateChange.emit(n)),this._syncIndeterminate(n)}_indeterminate=ei(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(n){this.checked=!!n}registerOnChange(n){this._controlValueAccessorChangeFn=n}registerOnTouched(n){this._onTouched=n}setDisabledState(n){this.disabled=n}validate(n){return this.required&&n.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(n){this._validatorChangeFn=n}_transitionCheckState(n){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===n||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,n),this._currentCheckState=n,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let n=this._options?.clickAction;!this.disabled&&n!==`noop`?(this.indeterminate&&n!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Le.Checked:Le.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&n===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(n){n.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(n,i){if(this._animationsDisabled)return``;switch(n){case Le.Init:if(i===Le.Checked)return this._animationClasses.uncheckedToChecked;if(i==Le.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Le.Unchecked:return i===Le.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Le.Checked:return i===Le.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Le.Indeterminate:return i===Le.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(n){let i=this._inputElement;i&&(i.nativeElement.indeterminate=n)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(n){n.target&&this._inputElement&&n.target!==this._inputElement.nativeElement&&n.stopPropagation()}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`input`];return BD({type:e,selectors:[[`mat-checkbox`]],viewQuery:function(a,o){if(a&1&&pg$1(n,5),a&2){let s;ob$1(s=ib$1())&&(o._inputElement=s.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(a,o){a&2&&(qh$1(`id`,o.id),Vh$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),vb$1(o.color?`mat-`+o.color:`mat-accent`),Eg$1(`_mat-animation-noopable`,o._animationsDisabled)(`mdc-checkbox--disabled`,o.disabled)(`mat-mdc-checkbox-disabled`,o.disabled)(`mat-mdc-checkbox-checked`,o.checked)(`mat-mdc-checkbox-disabled-interactive`,o.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Cj],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Cj],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Cj],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:Tj(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Cj],checked:[2,`checked`,`checked`,Cj],disabled:[2,`disabled`,`disabled`,Cj],indeterminate:[2,`indeterminate`,`indeterminate`,Cj]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Pb$1([{provide:B,useExisting:ko$1(()=>e),multi:!0},{provide:U$1,useExisting:e,multi:!0}]),nv],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(a,o){if(a&1&&(tb$1(),Oi$1(0,`label`,3),ug$1(`click`,function(c){return o._preventBubblingFromLabel(c)}),Oi$1(1,`span`,4,0),Bh$1(3,`span`,5),Oi$1(4,`input`,6,1),ug$1(`blur`,function(){return o._onBlur()})(`click`,function(){return o._onInputClick()})(`change`,function(c){return o._onInteractionEvent(c)}),gl$1(),Bh$1(6,`span`,7),Oi$1(7,`span`,8),gd$1(),Oi$1(8,`svg`,9),Bh$1(9,`path`,10),gl$1(),md$1(),Bh$1(10,`span`,11),gl$1(),Bh$1(11,`span`,12),gl$1(),Oi$1(12,`span`,13,2),nb$1(14),gl$1()()),a&2){let s=ab$1(2);Hh(`labelPosition`,o.labelPosition)(`for`,o.inputId),ZE(4),Eg$1(`mdc-checkbox--selected`,o.checked),Hh(`checked`,o.checked)(`indeterminate`,o.indeterminate)(`disabled`,o.disabled&&!o.disabledInteractive)(`id`,o.inputId)(`required`,o.required)(`tabIndex`,o.disabled&&!o.disabledInteractive?-1:o.tabIndex),Vh$1(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby)(`aria-describedby`,o.ariaDescribedby)(`aria-checked`,o.indeterminate?`mixed`:null)(`aria-controls`,o.ariaControls)(`aria-disabled`,o.disabled&&o.disabledInteractive?!0:null)(`aria-expanded`,o.ariaExpanded)(`aria-owns`,o.ariaOwns)(`name`,o.name)(`value`,o.value),ZE(7),Hh(`matRippleTrigger`,s)(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleCentered`,!0)}},dependencies:[Ri,el],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return e})();var tl=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=UD({type:e});static ɵinj=xu$1({imports:[Va,It]})}return e})();var Cr=class e{window=C(d);isOnline=ei(!0);constructor(){this.init()}init(){this.window&&this.window.navigator&&(this.isOnline.set(this.window.navigator.onLine),this.window.addEventListener(`online`,()=>this.isOnline.set(!0)),this.window.addEventListener(`offline`,()=>this.isOnline.set(!1)))}setOnlineState(t){this.isOnline.set(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Tr=class e{USER_KEY=`cdd_user`;ORGS_KEY=`cdd_organizations`;REPOS_KEY=`cdd_repositories`;api=C(pl$1);config=C(Gt$1);user=ei(this.loadFromStorage(this.USER_KEY));organizations=ei(this.loadFromStorage(this.ORGS_KEY)||[]);repositories=ei(this.loadFromStorage(this.REPOS_KEY)||[]);constructor(){}loadFromStorage(t){let n=localStorage.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch(i){return null}}saveToStorage(t,n){localStorage.setItem(t,JSON.stringify(n))}getItem(t){return this.loadFromStorage(t)}setItem(t,n){this.saveToStorage(t,n)}createUser(t){let n={id:crypto.randomUUID(),login:t,name:t};return this.user.set(n),this.saveToStorage(this.USER_KEY,n),this.config.isOnline()&&this.api.register({username:t,email:`${t}@example.com`}).subscribe({next:i=>localStorage.setItem(`cdd_token`,i.token),error:i=>console.error(`Background cloud sync failed for user creation:`,i)}),n}createOrganization(t){let n=this.user();if(!n)throw new Error(`User required to create organization`);let i={id:crypto.randomUUID(),userId:n.id,login:t},r=[...this.organizations(),i];if(this.organizations.set(r),this.saveToStorage(this.ORGS_KEY,r),this.config.isOnline()){let a=localStorage.getItem(`cdd_token`)||``;this.api.createOrg({login:t,description:`Created via offline-first StorageService`},a).subscribe({next:o=>{this.updateOrganizationId(i.id,o.id)},error:o=>console.error(`Background cloud sync failed for organization creation:`,o)})}return i}createRepository(t,n){let i=this.organizations().find(s=>s.id===t),r=i?`${i.login}/${n}`:n,a={id:crypto.randomUUID(),organizationId:t,name:n,full_name:r},o=[...this.repositories(),a];if(this.repositories.set(o),this.saveToStorage(this.REPOS_KEY,o),this.config.isOnline()&&typeof t==`number`){let s=localStorage.getItem(`cdd_token`)||``;this.api.createRepo({organization_id:t,name:n,description:`Created via offline-first StorageService`},s).subscribe({next:c=>{this.updateRepositoryId(a.id,c.id)},error:c=>console.error(`Background cloud sync failed for repository creation:`,c)})}return a}updateRepository(t){let n=this.repositories().map(i=>i.id===t.id?t:i);this.repositories.set(n),this.saveToStorage(this.REPOS_KEY,n)}getOrganizationRepositories(t){return this.repositories().filter(n=>n.organizationId===t)}updateOrganizationId(t,n){let i=this.organizations().map(a=>a.id===t?W(U({},a),{id:n}):a);this.organizations.set(i),this.saveToStorage(this.ORGS_KEY,i);let r=this.repositories().map(a=>a.organizationId===t?W(U({},a),{organizationId:n}):a);this.repositories.set(r),this.saveToStorage(this.REPOS_KEY,r)}updateRepositoryId(t,n){let i=this.repositories().map(r=>r.id===t?W(U({},r),{id:n}):r);this.repositories.set(i),this.saveToStorage(this.REPOS_KEY,i)}static ɵfac=function(n){return new(n||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Uu=()=>[`ruby`,`php`,`kotlin`];var zu=(e,t)=>t.id;function Bu(e,t){if(e&1&&Bh$1(0,`img`,47),e&2){let n=Xw();Hh(`ngSrc`,n.iconUrl)}}function Gu(e,t){if(e&1&&(pw(0,Bu,1,1,`img`,47),Oi$1(1,`span`,48),Sb$1(2),gl$1()),e&2){let n=t,i=Xw(2);gw(n.iconUrl?0:-1),ZE(),Eg$1(`error-text`,i.hasError()),ZE(),_g(n.name)}}function Fu(e,t){if(e&1&&Bh$1(0,`img`,47),e&2){let n=Xw().$implicit;Hh(`ngSrc`,n.iconUrl)}}function Wu(e,t){e&1&&(Oi$1(0,`mat-icon`,50),Sb$1(1,`wifi_off`),gl$1())}function Vu(e,t){if(e&1&&(Oi$1(0,`mat-option`,45)(1,`div`,49),pw(2,Fu,1,1,`img`,47),Oi$1(3,`span`,48),Sb$1(4),gl$1(),pw(5,Wu,2,0,`mat-icon`,50),gl$1()()),e&2){let n=t.$implicit;Hh(`value`,n.id)(`disabled`,n.isDisabled),ZE(),Hh(`matTooltip`,n.isDisabled?`Languages shown as disabled are not available in the current offline-only environment. To enable generation for all supported languages, configure the application for "Online Mode" by following the backend setup instructions on our GitHub repository.`:``),ZE(),gw(n.iconUrl?2:-1),ZE(2),_g(n.name),ZE(),gw(n.isDisabled?5:-1)}}function Hu(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-form-field`,42)(1,`mat-label`),Yw(2,5),gl$1(),Oi$1(3,`mat-select`,43),ug$1(`selectionChange`,function(r){nd(n);let a=Xw();return rd$1(a.onSelectionChange(r.value))}),Oi$1(4,`mat-select-trigger`)(5,`div`,44),pw(6,Gu,3,4),gl$1()(),yw(7,Vu,6,6,`mat-option`,45,zu),gl$1()(),Oi$1(9,`mat-icon`,46),Sb$1(10,` help_outline `),gl$1()}if(e&2){let n,i=Xw();Eg$1(`has-error`,i.hasError()),Hh(`matTooltip`,i.hasError()?i.errorMessage()||`Failed to generate code for this language`:``),ZE(),Eg$1(`error-text`,i.hasError()),ZE(2),Hh(`value`,i.selectedLanguageId()),ZE(3),gw((n=i.selectedLanguage())?6:-1,n),ZE(),vw(i.processedLanguages())}}function qu(e,t){e&1&&(Oi$1(0,`mat-option`,37),Yw(1,6),gl$1())}function Xu(e,t){e&1&&(Oi$1(0,`mat-option`,38),Yw(1,7),gl$1())}function ju(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Yw(2,8),gl$1(),Oi$1(3,`mat-select`,51),ug$1(`selectionChange`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`framework`,r.value))}),Oi$1(4,`mat-option`,52),Yw(5,9),gl$1(),Oi$1(6,`mat-option`,53),Yw(7,10),gl$1(),Oi$1(8,`mat-option`,54),Yw(9,11),gl$1(),Oi$1(10,`mat-option`,55),Yw(11,12),gl$1()()(),Oi$1(12,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`autoAdmin`,r.checked))}),Oi$1(13,`span`),Yw(14,13),gl$1()()}if(e&2){let n=Xw();ZE(3),Hh(`value`,n.options().framework||`vanilla`),ZE(9),Hh(`checked`,n.options().autoAdmin||!1)}}function Ku(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Yw(2,14),gl$1(),Oi$1(3,`mat-select`,57),ug$1(`selectionChange`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`serverFramework`,r.value))}),Oi$1(4,`mat-option`,58),Yw(5,15),gl$1(),Oi$1(6,`mat-option`,59),Yw(7,16),gl$1(),Oi$1(8,`mat-option`,60),Yw(9,17),gl$1(),Oi$1(10,`mat-option`,61),Yw(11,18),gl$1()()()}if(e&2){let n=Xw();ZE(3),Hh(`value`,n.options().serverFramework||`express`)}}function Yu(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Yw(2,19),gl$1(),Oi$1(3,`mat-select`,62),ug$1(`selectionChange`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`orm`,r.value))}),Oi$1(4,`mat-option`,63),Yw(5,20),gl$1()()()}if(e&2){let n=Xw();ZE(3),Hh(`value`,n.options().orm||`typeorm`)}}function Qu(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`noGithubActions`,!r.checked))}),Oi$1(1,`span`),Yw(2,21),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,!n.options().noGithubActions)}}function Zu(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`noInstallablePackage`,!r.checked))}),Oi$1(1,`span`),Yw(2,22),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,!n.options().noInstallablePackage)}}function Ju(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`tests`,r.checked))}),Oi$1(1,`span`),Yw(2,23),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,n.options().tests||!1)}}function em(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`noTestGen`,!r.checked))}),Oi$1(1,`span`),Yw(2,24),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,!n.options().noTestGen)}}function tm(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`mcp`,r.checked))}),Oi$1(1,`span`),Yw(2,25),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,n.options().mcp||!1)}}function nm(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`withEphemeral`,r.checked))}),Oi$1(1,`span`),Yw(2,26),gl$1()(),Oi$1(3,`mat-checkbox`,64),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`withSeed`,r.checked))}),Oi$1(4,`span`),Yw(5,27),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,n.options().withEphemeral||!1),ZE(3),Hh(`checked`,n.options().withSeed||!1)(`disabled`,!n.options().withEphemeral)}}function im(e,t){if(e&1){let n=Cw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd(n);let a=Xw();return rd$1(a.onOptionsChange(`noGenerateServices`,!r.checked))}),Oi$1(1,`span`),Yw(2,28),gl$1()()}if(e&2){let n=Xw();Hh(`checked`,!n.options().noGenerateServices)}}var Or=class e{environment=Zs;selectedLanguageId=yj.required();target=yj.required();options=yj.required();languageChanged=mj();targetChanged=mj();optionsChanged=mj();store=C(ut$1);languageService=C(el$1);offlineService=C(Cr);storageService=C(Tr);errorMessage=this.store.selectSignal(Lm$1);hasError=Zb$1(()=>!!this.errorMessage());selectedLanguage=Zb$1(()=>this.processedLanguages().find(t=>t.id===this.selectedLanguageId()));processedLanguages=Zb$1(()=>{let t=this.offlineService.isOnline();return this.languageService.languages().map(n=>W(U({},n),{isDisabled:!t&&!n.availableInWasm}))});constructor(){let t=this.storageService.getItem(`lastSelectedLanguage`);t&&queueMicrotask(()=>{let n=this.processedLanguages().find(i=>i.id===t);n&&!n.isDisabled&&this.languageChanged.emit(t)}),Nd$1(()=>{let n=this.selectedLanguageId(),i=this.processedLanguages(),r=i.find(a=>a.id===n);if(r&&r.isDisabled){let a=i.find(o=>!o.isDisabled);a&&queueMicrotask(()=>{this.onSelectionChange(a.id)})}})}onSelectionChange(t){t!==this.selectedLanguageId()&&(this.storageService.setItem(`lastSelectedLanguage`,t),this.languageChanged.emit(t))}onTargetChange(t){if(this.targetChanged.emit(t),this.selectedLanguageId()===`typescript`){let n=this.options();t===`to_sdk_cli`?(n.framework===void 0||[`angular`,`react`,`vue`].includes(n.framework))&&this.onOptionsChange(`framework`,`vanilla`):t===`to_server`?n.serverFramework===void 0&&this.onOptionsChange(`serverFramework`,`express`):t===`to_orm`&&n.orm===void 0&&this.onOptionsChange(`orm`,`typeorm`)}}onOptionsChange(t,n){let i=this.options();this.optionsChanged.emit({languageId:this.selectedLanguageId(),options:W(U({},i),{[t]:n})})}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-language-selector`]],inputs:{selectedLanguageId:[1,`selectedLanguageId`],target:[1,`target`],options:[1,`options`]},outputs:{languageChanged:`languageChanged`,targetChanged:`targetChanged`,optionsChanged:`optionsChanged`},decls:28,vars:15,consts:()=>{let t;t=$localize`:@@selectTargetOutputAria:Select Target Output`;let n;n=$localize`Target`;let i;i=$localize`Client SDK`;let r;r=$localize`Client CLI`;let a;a=$localize`MCP Server`;let o;o=$localize`Server`;let s;s=$localize`:@@selectTargetLangAria:Select Target Language`;let c;c=$localize`Languages shown as disabled are not available in the current offline-only environment. To enable generation for all supported languages, configure the application for 'Online Mode' by following the backend setup instructions on our GitHub repository.`;let l;l=$localize`Language`;let d;d=$localize`ORM Entities`;let u;u=$localize`OpenAPI 3.2.0`;let p;p=$localize`:@@selectClientFrameworkAria:Select Client Framework`;let _;_=$localize`Client Framework`;let m;m=$localize`Vanilla JS`;let f;f=$localize`Angular`;let y;y=$localize`React`;let C;C=$localize`Vue`;let b;b=$localize`Auto-admin`;let w;w=$localize`:@@selectServerFrameworkAria:Select Server Framework`;let N;N=$localize`Server Framework`;let F;F=$localize`Express`;let K;K=$localize`Node.js HTTP`;let X;X=$localize`Bun`;let ae;ae=$localize`Deno`;let T;T=$localize`:@@selectOrmEngineAria:Select ORM Engine`;let A;A=$localize`ORM Engine`;let z;z=$localize`TypeORM`;let J;J=$localize`CI`;let Y;Y=$localize`Package`;let S;S=$localize`Tests`;let R;R=$localize`Enable Tests`;let x;x=$localize`MCP`;let I;I=$localize`Sandbox (Ephemeral)`;let O;O=$localize`Mock Seed`;let q;return q=$localize`Services`,[n,i,r,a,o,l,d,u,_,m,f,y,C,b,N,F,K,X,ae,A,z,J,Y,S,R,x,I,O,q,[1,`language-selector-container`],[1,`language-selector-wrapper`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`target-selector-field`],[`aria-label`,t,3,`selectionChange`,`value`],[`value`,`to_sdk`],[`value`,`to_sdk_cli`],[`value`,`to_mcp`],[`value`,`to_server`],[`value`,`to_orm`],[`value`,`to_openapi_3_2_0`],[1,`language-options`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`framework-selector-field`],[3,`checked`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`language-selector-field`,3,`matTooltip`],[`aria-label`,s,3,`selectionChange`,`value`],[1,`language-option-trigger`],[3,`value`,`disabled`],[`tabindex`,`0`,`role`,`img`,`aria-label`,`Languages shown as disabled are not available in the current offline-only environment. Configure Online Mode to enable all languages.`,`matTooltip`,c,1,`offline-info-icon`],[`width`,`20`,`height`,`20`,`alt`,``,1,`language-icon`,3,`ngSrc`],[1,`language-name`],[1,`language-option`,3,`matTooltip`],[`aria-hidden`,`true`,1,`disabled-indicator`],[`aria-label`,p,3,`selectionChange`,`value`],[`value`,`vanilla`],[`value`,`angular`],[`value`,`react`],[`value`,`vue`],[3,`change`,`checked`],[`aria-label`,w,3,`selectionChange`,`value`],[`value`,`express`],[`value`,`node`],[`value`,`bun`],[`value`,`deno`],[`aria-label`,T,3,`selectionChange`,`value`],[`value`,`typeorm`],[3,`change`,`checked`,`disabled`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,29)(1,`div`,30),pw(2,Hu,11,7),gl$1(),Oi$1(3,`mat-form-field`,31)(4,`mat-label`),Yw(5,0),gl$1(),Oi$1(6,`mat-select`,32),ug$1(`selectionChange`,function(a){return i.onTargetChange(a.value)}),Oi$1(7,`mat-option`,33),Yw(8,1),gl$1(),Oi$1(9,`mat-option`,34),Yw(10,2),gl$1(),Oi$1(11,`mat-option`,35),Yw(12,3),gl$1(),Oi$1(13,`mat-option`,36),Yw(14,4),gl$1(),pw(15,qu,2,0,`mat-option`,37),pw(16,Xu,2,0,`mat-option`,38),gl$1()(),Oi$1(17,`div`,39),pw(18,ju,15,2),pw(19,Ku,12,1,`mat-form-field`,40),pw(20,Yu,6,1,`mat-form-field`,40),pw(21,Qu,3,1,`mat-checkbox`,41),pw(22,Zu,3,1,`mat-checkbox`,41),pw(23,Ju,3,1,`mat-checkbox`,41),pw(24,em,3,1,`mat-checkbox`,41),pw(25,tm,3,1,`mat-checkbox`,41),pw(26,nm,6,3),pw(27,im,3,1,`mat-checkbox`,41),gl$1()()),n&2&&(ZE(2),gw(i.environment.singleLanguageMode?-1:2),ZE(4),Hh(`value`,i.target()),ZE(9),gw(i.selectedLanguageId()===`typescript`?15:-1),ZE(),gw(i.environment.singleLanguageMode?16:-1),ZE(2),gw(i.selectedLanguageId()===`typescript`&&i.target()!==`to_server`&&i.target()!==`to_orm`?18:-1),ZE(),gw(i.selectedLanguageId()===`typescript`&&i.target()===`to_server`?19:-1),ZE(),gw(i.selectedLanguageId()===`typescript`&&i.target()===`to_orm`?20:-1),ZE(),gw(i.selectedLanguageId()&&i.target()!==`to_mcp`&&i.target()!==`to_openapi_3_2_0`?21:-1),ZE(),gw(i.selectedLanguageId()!==`sh`&&i.target()!==`to_openapi_3_2_0`?22:-1),ZE(),gw(i.selectedLanguageId()&&i.target()!==`to_openapi_3_2_0`&&!i.options().noTestGen?23:-1),ZE(),gw(i.selectedLanguageId()===`typescript`?24:-1),ZE(),gw(i.selectedLanguageId()&&i.target()!==`to_mcp`&&i.target()!==`to_openapi_3_2_0`?25:-1),ZE(),gw(i.target()===`to_server`&&Fb$1(14,Uu).includes(i.selectedLanguageId())?26:-1),ZE(),gw(i.target()===`to_server`&&i.selectedLanguageId()===`typescript`?27:-1))},dependencies:[K_$1,ht$1,_e,G_$1,q_$1,$n$2,Ne$1,Qy$1,ld$1,wf$1,xf$1,tl,Va,lo$1],styles:[`.language-selector-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.language-selector-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.offline-info-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--%NS%text-secondary, #757575);cursor:help;border-radius:50%}.offline-info-icon[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:2px}.language-options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.language-option[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.disabled-indicator[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--%NS%text-secondary);opacity:.5}.language-name[_ngcontent-%COMP%]{flex:1}.language-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px;object-fit:contain}.language-option-trigger[_ngcontent-%COMP%]{display:flex;align-items:center}.error-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var rm={value:()=>{}};function il(){for(var e=0,t=arguments.length,n={},i;e<t;++e){if(!(i=arguments[e]+``)||i in n||/[\s.]/.test(i))throw new Error(`illegal type: `+i);n[i]=[]}return new Ar(n)}function Ar(e){this._=e}function am(e,t){return e.trim().split(/^|\s+/).map(function(n){var i=``,r=n.indexOf(`.`);if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error(`unknown type: `+n);return{type:n,name:i}})}Ar.prototype=il.prototype={constructor:Ar,on:function(e,t){var n=this._,i=am(e+``,n),r,a=-1,o=i.length;if(arguments.length<2){for(;++a<o;)if((r=(e=i[a]).type)&&(r=om(n[r],e.name)))return r;return}if(t!=null&&typeof t!=`function`)throw new Error(`invalid callback: `+t);for(;++a<o;)if(r=(e=i[a]).type)n[r]=nl(n[r],e.name,t);else if(t==null)for(r in n)n[r]=nl(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ar(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,a;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(e))throw new Error(`unknown type: `+e);for(a=this._[e],i=0,r=a.length;i<r;++i)a[i].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error(`unknown type: `+e);for(var i=this._[e],r=0,a=i.length;r<a;++r)i[r].value.apply(t,n)}};function om(e,t){for(var n=0,i=e.length,r;n<i;++n)if((r=e[n]).name===t)return r.value}function nl(e,t,n){for(var i=0,r=e.length;i<r;++i)if(e[i].name===t){e[i]=rm,e=e.slice(0,i).concat(e.slice(i+1));break}return n!=null&&e.push({name:t,value:n}),e}var ai=il;var wr=`http://www.w3.org/1999/xhtml`;var Ha={svg:`http://www.w3.org/2000/svg`,xhtml:wr,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function Et(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),Ha.hasOwnProperty(t)?{space:Ha[t],local:e}:e}function sm(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===wr&&t.documentElement.namespaceURI===wr?t.createElement(e):t.createElementNS(n,e)}}function cm(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Pr(e){var t=Et(e);return(t.local?cm:sm)(t)}function lm(){}function Yt(e){return e==null?lm:function(){return this.querySelector(e)}}function rl(e){typeof e!=`function`&&(e=Yt(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var a=t[r],o=a.length,s=i[r]=new Array(o),c,l,d=0;d<o;++d)(c=a[d])&&(l=e.call(c,c.__data__,d,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[d]=l);return new xe(i,this._parents)}function qa(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function dm(){return[]}function oi(e){return e==null?dm:function(){return this.querySelectorAll(e)}}function _m(e){return function(){return qa(e.apply(this,arguments))}}function al(e){typeof e==`function`?e=_m(e):e=oi(e);for(var t=this._groups,n=t.length,i=[],r=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(i.push(e.call(c,c.__data__,l,o)),r.push(c));return new xe(i,r)}function si(e){return function(){return this.matches(e)}}function Nr(e){return function(t){return t.matches(e)}}var pm=Array.prototype.find;function um(e){return function(){return pm.call(this.children,e)}}function mm(){return this.firstElementChild}function ol(e){return this.select(e==null?mm:um(typeof e==`function`?e:Nr(e)))}var fm=Array.prototype.filter;function hm(){return Array.from(this.children)}function gm(e){return function(){return fm.call(this.children,e)}}function sl(e){return this.selectAll(e==null?hm:gm(typeof e==`function`?e:Nr(e)))}function cl(e){typeof e!=`function`&&(e=si(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var a=t[r],o=a.length,s=i[r]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new xe(i,this._parents)}function Ir(e){return new Array(e.length)}function ll(){return new xe(this._enter||this._groups.map(Ir),this._parents)}function ci(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ci.prototype={constructor:ci,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function dl(e){return function(){return e}}function bm(e,t,n,i,r,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],i[o]=s):n[o]=new ci(e,a[o]);for(;o<c;++o)(s=t[o])&&(r[o]=s)}function ym(e,t,n,i,r,a,o){var s,c,l=/* @__PURE__ */ new Map,d=t.length,u=a.length,p=new Array(d),_;for(s=0;s<d;++s)(c=t[s])&&(p[s]=_=o.call(c,c.__data__,s,t)+``,l.has(_)?r[s]=c:l.set(_,c));for(s=0;s<u;++s)_=o.call(e,a[s],s,a)+``,(c=l.get(_))?(i[s]=c,c.__data__=a[s],l.delete(_)):n[s]=new ci(e,a[s]);for(s=0;s<d;++s)(c=t[s])&&l.get(p[s])===c&&(r[s]=c)}function Em(e){return e.__data__}function _l(e,t){if(!arguments.length)return Array.from(this,Em);var n=t?ym:bm,i=this._parents,r=this._groups;typeof e!=`function`&&(e=dl(e));for(var a=r.length,o=new Array(a),s=new Array(a),c=new Array(a),l=0;l<a;++l){var d=i[l],u=r[l],p=u.length,_=Sm(e.call(d,d&&d.__data__,l,i)),m=_.length,f=s[l]=new Array(m),y=o[l]=new Array(m);n(d,u,f,y,c[l]=new Array(p),_,t);for(var b=0,w=0,N,F;b<m;++b)if(N=f[b]){for(b>=w&&(w=b+1);!(F=y[w])&&++w<m;);N._next=F||null}}return o=new xe(o,i),o._enter=s,o._exit=c,o}function Sm(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function pl(){return new xe(this._exit||this._groups.map(Ir),this._parents)}function ul(e,t,n){var i=this.enter(),r=this,a=this.exit();return typeof e==`function`?(i=e(i),i&&(i=i.selection())):i=i.append(e+``),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?a.remove():n(a),i&&r?i.merge(r).order():r}function ml(e){for(var t=e.selection?e.selection():e,n=this._groups,i=t._groups,r=n.length,a=i.length,o=Math.min(r,a),s=new Array(r),c=0;c<o;++c)for(var l=n[c],d=i[c],u=l.length,p=s[c]=new Array(u),_,m=0;m<u;++m)(_=l[m]||d[m])&&(p[m]=_);for(;c<r;++c)s[c]=n[c];return new xe(s,this._parents)}function fl(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var i=e[t],r=i.length-1,a=i[r],o;--r>=0;)(o=i[r])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function hl(e){e||(e=vm);function t(u,p){return u&&p?e(u.__data__,p.__data__):!u-!p}for(var n=this._groups,i=n.length,r=new Array(i),a=0;a<i;++a){for(var o=n[a],s=o.length,c=r[a]=new Array(s),l,d=0;d<s;++d)(l=o[d])&&(c[d]=l);c.sort(t)}return new xe(r,this._parents).order()}function vm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function gl(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function bl(){return Array.from(this)}function yl(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,a=i.length;r<a;++r){var o=i[r];if(o)return o}return null}function El(){let e=0;for(let t of this)++e;return e}function Sl(){return!this.node()}function vl(e){for(var t=this._groups,n=0,i=t.length;n<i;++n)for(var r=t[n],a=0,o=r.length,s;a<o;++a)(s=r[a])&&e.call(s,s.__data__,a,r);return this}function xm(e){return function(){this.removeAttribute(e)}}function km(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Cm(e,t){return function(){this.setAttribute(e,t)}}function Tm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Om(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Am(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function xl(e,t){var n=Et(e);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((t==null?n.local?km:xm:typeof t==`function`?n.local?Am:Om:n.local?Tm:Cm)(n,t))}function Mr(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function wm(e){return function(){this.style.removeProperty(e)}}function Pm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Nm(e,t,n){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(e):this.style.setProperty(e,i,n)}}function kl(e,t,n){return arguments.length>1?this.each((t==null?wm:typeof t==`function`?Nm:Pm)(e,t,n??``)):$t(this.node(),e)}function $t(e,t){return e.style.getPropertyValue(t)||Mr(e).getComputedStyle(e,null).getPropertyValue(t)}function Im(e){return function(){delete this[e]}}function Mm(e,t){return function(){this[e]=t}}function Rm(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Cl(e,t){return arguments.length>1?this.each((t==null?Im:typeof t==`function`?Rm:Mm)(e,t)):this.node()[e]}function Tl(e){return e.trim().split(/^|\s+/)}function Xa(e){return e.classList||new Ol(e)}function Ol(e){this._node=e,this._names=Tl(e.getAttribute(`class`)||``)}Ol.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Al(e,t){for(var n=Xa(e),i=-1,r=t.length;++i<r;)n.add(t[i])}function wl(e,t){for(var n=Xa(e),i=-1,r=t.length;++i<r;)n.remove(t[i])}function Lm(e){return function(){Al(this,e)}}function $m(e){return function(){wl(this,e)}}function Dm(e,t){return function(){(t.apply(this,arguments)?Al:wl)(this,e)}}function Pl(e,t){var n=Tl(e+``);if(arguments.length<2){for(var i=Xa(this.node()),r=-1,a=n.length;++r<a;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof t==`function`?Dm:t?Lm:$m)(n,t))}function Um(){this.textContent=``}function zm(e){return function(){this.textContent=e}}function Bm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Nl(e){return arguments.length?this.each(e==null?Um:(typeof e==`function`?Bm:zm)(e)):this.node().textContent}function Gm(){this.innerHTML=``}function Fm(e){return function(){this.innerHTML=e}}function Wm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function Il(e){return arguments.length?this.each(e==null?Gm:(typeof e==`function`?Wm:Fm)(e)):this.node().innerHTML}function Vm(){this.nextSibling&&this.parentNode.appendChild(this)}function Ml(){return this.each(Vm)}function Hm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Rl(){return this.each(Hm)}function Ll(e){var t=typeof e==`function`?e:Pr(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function qm(){return null}function $l(e,t){var n=typeof e==`function`?e:Pr(e),i=t==null?qm:typeof t==`function`?t:Yt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Xm(){var e=this.parentNode;e&&e.removeChild(this)}function Dl(){return this.each(Xm)}function jm(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Km(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ul(e){return this.select(e?Km:jm)}function zl(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function Ym(e){return function(t){e.call(this,t,this.__data__)}}function Qm(e){return e.trim().split(/^|\s+/).map(function(t){var n=``,i=t.indexOf(`.`);return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{type:t,name:n}})}function Zm(e){return function(){var t=this.__on;if(t){for(var n=0,i=-1,r=t.length,a;n<r;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++i]=a;++i?t.length=i:delete this.__on}}}function Jm(e,t,n){return function(){var i=this.__on,r,a=Ym(t);if(i){for(var o=0,s=i.length;o<s;++o)if((r=i[o]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=a,r.options=n),r.value=t;return}}this.addEventListener(e.type,a,n),r={type:e.type,name:e.name,value:t,listener:a,options:n},i?i.push(r):this.__on=[r]}}function Bl(e,t,n){var i=Qm(e+``),r,a=i.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,d;c<l;++c)for(r=0,d=s[c];r<a;++r)if((o=i[r]).type===d.type&&o.name===d.name)return d.value}return}for(s=t?Jm:Zm,r=0;r<a;++r)this.each(s(i[r],t,n));return this}function Gl(e,t,n){var i=Mr(e),r=i.CustomEvent;typeof r==`function`?r=new r(t,n):(r=i.document.createEvent(`Event`),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function ef(e,t){return function(){return Gl(this,e,t)}}function tf(e,t){return function(){return Gl(this,e,t.apply(this,arguments))}}function Fl(e,t){return this.each((typeof t==`function`?tf:ef)(e,t))}function*Wl(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,a=i.length,o;r<a;++r)(o=i[r])&&(yield o)}var ja=[null];function xe(e,t){this._groups=e,this._parents=t}function Vl(){return new xe([[document.documentElement]],ja)}function nf(){return this}xe.prototype=Vl.prototype={constructor:xe,select:rl,selectAll:al,selectChild:ol,selectChildren:sl,filter:cl,data:_l,enter:ll,exit:pl,join:ul,merge:ml,selection:nf,order:fl,sort:hl,call:gl,nodes:bl,node:yl,size:El,empty:Sl,each:vl,attr:xl,style:kl,property:Cl,classed:Pl,text:Nl,html:Il,raise:Ml,lower:Rl,append:Ll,insert:$l,remove:Dl,clone:Ul,datum:zl,on:Bl,dispatch:Fl,[Symbol.iterator]:Wl};var St=Vl;function Ze(e){return typeof e==`string`?new xe([[document.querySelector(e)]],[document.documentElement]):new xe([[e]],ja)}function Hl(e){let t;for(;t=e.sourceEvent;)e=t;return e}function vt(e,t){if(e=Hl(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=e.clientX,i.y=e.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Rr={capture:!0,passive:!1};function Lr(e){e.preventDefault(),e.stopImmediatePropagation()}function Ka(e){var t=e.document.documentElement,n=Ze(e).on(`dragstart.drag`,Lr,Rr);`onselectstart`in t?n.on(`selectstart.drag`,Lr,Rr):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect=`none`)}function Ya(e,t){var n=e.document.documentElement,i=Ze(e).on(`dragstart.drag`,null);t&&(i.on(`click.drag`,Lr,Rr),setTimeout(function(){i.on(`click.drag`,null)},0)),`onselectstart`in n?i.on(`selectstart.drag`,null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function $r(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Qa(e,t){var n=Object.create(e.prototype);for(var i in t)n[i]=t[i];return n}function _i(){}var li=.7;var zr=1/li;var Cn=`\\s*([+-]?\\d+)\\s*`;var di=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`;var ht=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`;var rf=/^#([0-9a-f]{3,8})$/;var af=new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`);var of=new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`);var sf=new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${di}\\)$`);var cf=new RegExp(`^rgba\\(${ht},${ht},${ht},${di}\\)$`);var lf=new RegExp(`^hsl\\(${di},${ht},${ht}\\)$`);var df=new RegExp(`^hsla\\(${di},${ht},${ht},${di}\\)$`);var ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$r(_i,Dt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Xl,formatHex:Xl,formatHex8:_f,formatHsl:pf,formatRgb:jl,toString:jl});function Xl(){return this.rgb().formatHex()}function _f(){return this.rgb().formatHex8()}function pf(){return ed(this).formatHsl()}function jl(){return this.rgb().formatRgb()}function Dt(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=rf.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Kl(t):n===3?new je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Dr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Dr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=af.exec(e))?new je(t[1],t[2],t[3],1):(t=of.exec(e))?new je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=sf.exec(e))?Dr(t[1],t[2],t[3],t[4]):(t=cf.exec(e))?Dr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=lf.exec(e))?Zl(t[1],t[2]/100,t[3]/100,1):(t=df.exec(e))?Zl(t[1],t[2]/100,t[3]/100,t[4]):ql.hasOwnProperty(e)?Kl(ql[e]):e===`transparent`?new je(NaN,NaN,NaN,0):null}function Kl(e){return new je(e>>16&255,e>>8&255,e&255,1)}function Dr(e,t,n,i){return i<=0&&(e=t=n=NaN),new je(e,t,n,i)}function uf(e){return e instanceof _i||(e=Dt(e)),e?(e=e.rgb(),new je(e.r,e.g,e.b,e.opacity)):new je}function Tn(e,t,n,i){return arguments.length===1?uf(e):new je(e,t,n,i??1)}function je(e,t,n,i){this.r=+e,this.g=+t,this.b=+n,this.opacity=+i}$r(je,Tn,Qa(_i,{brighter(e){return e=e==null?zr:Math.pow(zr,e),new je(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?li:Math.pow(li,e),new je(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new je(Zt(this.r),Zt(this.g),Zt(this.b),Br(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Yl,formatHex:Yl,formatHex8:mf,formatRgb:Ql,toString:Ql}));function Yl(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}`}function mf(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}${Qt((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ql(){let e=Br(this.opacity);return`${e===1?`rgb(`:`rgba(`}${Zt(this.r)}, ${Zt(this.g)}, ${Zt(this.b)}${e===1?`)`:`, ${e})`}`}function Br(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Zt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qt(e){return e=Zt(e),(e<16?`0`:``)+e.toString(16)}function Zl(e,t,n,i){return i<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ct(e,t,n,i)}function ed(e){if(e instanceof ct)return new ct(e.h,e.s,e.l,e.opacity);if(e instanceof _i||(e=Dt(e)),!e)return new ct;if(e instanceof ct)return e;e=e.rgb();var t=e.r/255,n=e.g/255,i=e.b/255,r=Math.min(t,n,i),a=Math.max(t,n,i),o=NaN,s=a-r,c=(a+r)/2;return s?(t===a?o=(n-i)/s+(n<i)*6:n===a?o=(i-t)/s+2:o=(t-n)/s+4,s/=c<.5?a+r:2-a-r,o*=60):s=c>0&&c<1?0:o,new ct(o,s,c,e.opacity)}function td(e,t,n,i){return arguments.length===1?ed(e):new ct(e,t,n,i??1)}function ct(e,t,n,i){this.h=+e,this.s=+t,this.l=+n,this.opacity=+i}$r(ct,td,Qa(_i,{brighter(e){return e=e==null?zr:Math.pow(zr,e),new ct(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?li:Math.pow(li,e),new ct(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*t,r=2*n-i;return new je(Za(e>=240?e-240:e+120,r,i),Za(e,r,i),Za(e<120?e+240:e-120,r,i),this.opacity)},clamp(){return new ct(Jl(this.h),Ur(this.s),Ur(this.l),Br(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Br(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Jl(this.h)}, ${Ur(this.s)*100}%, ${Ur(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Jl(e){return e=(e||0)%360,e<0?e+360:e}function Ur(e){return Math.max(0,Math.min(1,e||0))}function Za(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var eo=e=>()=>e;function ff(e,t){return function(n){return e+n*t}}function hf(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(i){return Math.pow(e+i*t,n)}}function rd(e){return(e=+e)==1?Gr:function(t,n){return n-t?hf(t,n,e):eo(isNaN(t)?n:t)}}function Gr(e,t){var n=t-e;return n?ff(e,n):eo(isNaN(e)?t:e)}var Fr=(function e(t){var n=rd(t);function i(r,a){var o=n((r=Tn(r)).r,(a=Tn(a)).r),s=n(r.g,a.g),c=n(r.b,a.b),l=Gr(r.opacity,a.opacity);return function(d){return r.r=o(d),r.g=s(d),r.b=c(d),r.opacity=l(d),r+``}}return i.gamma=e,i})(1);function ot(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var no=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;var to=new RegExp(no.source,`g`);function yf(e){return function(){return e}}function Ef(e){return function(t){return e(t)+``}}function io(e,t){var n=no.lastIndex=to.lastIndex=0,i,r,a,o=-1,s=[],c=[];for(e=e+``,t=t+``;(i=no.exec(e))&&(r=to.exec(t));)(a=r.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(i=i[0])===(r=r[0])?s[o]?s[o]+=r:s[++o]=r:(s[++o]=null,c.push({i:o,x:ot(i,r)})),n=to.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?Ef(c[0].x):yf(t):(t=c.length,function(l){for(var d=0,u;d<t;++d)s[(u=c[d]).i]=u.x(l);return s.join(``)})}var od=180/Math.PI;var Wr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ro(e,t,n,i,r,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*i)&&(n-=e*c,i-=t*c),(s=Math.sqrt(n*n+i*i))&&(n/=s,i/=s,c/=s),e*i<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:r,translateY:a,rotate:Math.atan2(t,e)*od,skewX:Math.atan(c)*od,scaleX:o,scaleY:s}}var Vr;function sd(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Wr:ro(t.a,t.b,t.c,t.d,t.e,t.f)}function cd(e){return e==null?Wr:(Vr||(Vr=document.createElementNS(`http://www.w3.org/2000/svg`,`g`)),Vr.setAttribute(`transform`,e),(e=Vr.transform.baseVal.consolidate())?(e=e.matrix,ro(e.a,e.b,e.c,e.d,e.e,e.f)):Wr)}function ld(e,t,n,i){function r(l){return l.length?l.pop()+` `:``}function a(l,d,u,p,_,m){if(l!==u||d!==p){var f=_.push(`translate(`,null,t,null,n);m.push({i:f-4,x:ot(l,u)},{i:f-2,x:ot(d,p)})}else(u||p)&&_.push(`translate(`+u+t+p+n)}function o(l,d,u,p){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),p.push({i:u.push(r(u)+`rotate(`,null,i)-2,x:ot(l,d)})):d&&u.push(r(u)+`rotate(`+d+i)}function s(l,d,u,p){l!==d?p.push({i:u.push(r(u)+`skewX(`,null,i)-2,x:ot(l,d)}):d&&u.push(r(u)+`skewX(`+d+i)}function c(l,d,u,p,_,m){if(l!==u||d!==p){var f=_.push(r(_)+`scale(`,null,`,`,null,`)`);m.push({i:f-4,x:ot(l,u)},{i:f-2,x:ot(d,p)})}else(u!==1||p!==1)&&_.push(r(_)+`scale(`+u+`,`+p+`)`)}return function(l,d){var u=[],p=[];return l=e(l),d=e(d),a(l.translateX,l.translateY,d.translateX,d.translateY,u,p),o(l.rotate,d.rotate,u,p),s(l.skewX,d.skewX,u,p),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,u,p),l=d=null,function(_){for(var m=-1,f=p.length,y;++m<f;)u[(y=p[m]).i]=y.x(_);return u.join(``)}}}var ao=ld(sd,`px, `,`px)`,`deg)`);var oo=ld(cd,`, `,`)`,`)`);var Sf=1e-12;function dd(e){return((e=Math.exp(e))+1/e)/2}function vf(e){return((e=Math.exp(e))-1/e)/2}function xf(e){return((e=Math.exp(2*e))-1)/(e+1)}var so=(function e(t,n,i){function r(a,o){var s=a[0],c=a[1],l=a[2],d=o[0],u=o[1],p=o[2],_=d-s,m=u-c,f=_*_+m*m,y,C;if(f<Sf)C=Math.log(p/l)/t,y=function(X){return[s+X*_,c+X*m,l*Math.exp(t*X*C)]};else{var b=Math.sqrt(f),w=(p*p-l*l+i*f)/(2*l*n*b),N=(p*p-l*l-i*f)/(2*p*n*b),F=Math.log(Math.sqrt(w*w+1)-w);C=(Math.log(Math.sqrt(N*N+1)-N)-F)/t,y=function(X){var ae=X*C,T=dd(F),A=l/(n*b)*(T*xf(t*ae+F)-vf(F));return[s+A*_,c+A*m,l*T/dd(t*ae+F)]}}return y.duration=C*1e3*t/Math.SQRT2,y}return r.rho=function(a){var o=Math.max(.001,+a),s=o*o;return e(o,s,s*s)},r})(Math.SQRT2,2,4);var On=0;var ui=0;var pi=0;var pd=1e3;var Hr;var mi;var qr=0;var Jt=0;var Xr=0;var fi=typeof performance==`object`&&performance.now?performance:Date;var ud=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function gi(){return Jt||(ud(kf),Jt=fi.now()+Xr)}function kf(){Jt=0}function hi(){this._call=this._time=this._next=null}hi.prototype=jr.prototype={constructor:hi,restart:function(e,t,n){if(typeof e!=`function`)throw new TypeError(`callback is not a function`);n=(n==null?gi():+n)+(t==null?0:+t),!this._next&&mi!==this&&(mi?mi._next=this:Hr=this,mi=this),this._call=e,this._time=n,co()},stop:function(){this._call&&(this._call=null,this._time=1/0,co())}};function jr(e,t,n){var i=new hi;return i.restart(e,t,n),i}function md(){gi(),++On;for(var e=Hr,t;e;)(t=Jt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--On}function _d(){Jt=(qr=fi.now())+Xr,On=ui=0;try{md()}finally{On=0,Tf(),Jt=0}}function Cf(){var e=fi.now(),t=e-qr;t>pd&&(Xr-=t,qr=e)}function Tf(){for(var e,t=Hr,n,i=1/0;t;)t._call?(i>t._time&&(i=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Hr=n);mi=e,co(i)}function co(e){if(!On){ui&&(ui=clearTimeout(ui));e-Jt>24?(e<1/0&&(ui=setTimeout(_d,e-fi.now()-Xr)),pi&&(pi=clearInterval(pi))):(pi||(qr=fi.now(),pi=setInterval(Cf,pd)),On=1,ud(_d))}}function Kr(e,t,n){var i=new hi;return t=t==null?0:+t,i.restart(r=>{i.stop(),e(r+t)},t,n),i}var Of=ai(`start`,`end`,`cancel`,`interrupt`);var Af=[];var gd=0;var fd=1;var Qr=2;var Yr=3;var hd=4;var Zr=5;var bi=6;function Ut(e,t,n,i,r,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;wf(e,n,{name:t,index:i,group:r,on:Of,tween:Af,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:gd})}function yi(e,t){var n=Oe(e,t);if(n.state>gd)throw new Error(`too late; already scheduled`);return n}function Ie(e,t){var n=Oe(e,t);if(n.state>Yr)throw new Error(`too late; already running`);return n}function Oe(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error(`transition not found`);return n}function wf(e,t,n){var i=e.__transition,r;i[t]=n,n.timer=jr(a,0,n.time);function a(l){n.state=fd,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var d,u,p,_;if(n.state!==fd)return c();for(d in i)if(_=i[d],_.name===n.name){if(_.state===Yr)return Kr(o);_.state===hd?(_.state=bi,_.timer.stop(),_.on.call(`interrupt`,e,e.__data__,_.index,_.group),delete i[d]):+d<t&&(_.state=bi,_.timer.stop(),_.on.call(`cancel`,e,e.__data__,_.index,_.group),delete i[d])}if(Kr(function(){n.state===Yr&&(n.state=hd,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=Qr,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===Qr){for(n.state=Yr,r=new Array(p=n.tween.length),d=0,u=-1;d<p;++d)(_=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++u]=_);r.length=u+1}}function s(l){for(var d=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=Zr,1),u=-1,p=r.length;++u<p;)r[u].call(e,d);n.state===Zr&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){n.state=bi,n.timer.stop(),delete i[t];for(var l in i)return;delete e.__transition}}function zt(e,t){var n=e.__transition,i,r,a=!0,o;if(n){t=t==null?null:t+``;for(o in n){if((i=n[o]).name!==t){a=!1;continue}r=i.state>Qr&&i.state<Zr,i.state=bi,i.timer.stop(),i.on.call(r?`interrupt`:`cancel`,e,e.__data__,i.index,i.group),delete n[o]}a&&delete e.__transition}}function bd(e){return this.each(function(){zt(this,e)})}function Pf(e,t){var n,i;return function(){var r=Ie(this,e),a=r.tween;if(a!==n){i=n=a;for(var o=0,s=i.length;o<s;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function Nf(e,t,n){var i,r;if(typeof n!=`function`)throw new Error;return function(){var a=Ie(this,e),o=a.tween;if(o!==i){r=(i=o).slice();for(var s={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=s;break}c===l&&r.push(s)}a.tween=r}}function yd(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var i=Oe(this.node(),n).tween,r=0,a=i.length,o;r<a;++r)if((o=i[r]).name===e)return o.value;return null}return this.each((t==null?Pf:Nf)(n,e,t))}function An(e,t,n){var i=e._id;return e.each(function(){var r=Ie(this,i);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return Oe(r,i).value[t]}}function Jr(e,t){var n;return(typeof t==`number`?ot:t instanceof Dt?Fr:(n=Dt(t))?(t=n,Fr):io)(e,t)}function If(e){return function(){this.removeAttribute(e)}}function Mf(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Rf(e,t,n){var i,r=n+``,a;return function(){var o=this.getAttribute(e);return o===r?null:o===i?a:a=t(i=o,n)}}function Lf(e,t,n){var i,r=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===r?null:o===i?a:a=t(i=o,n)}}function $f(e,t,n){var i,r,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===i&&c===r?a:(r=c,a=t(i=o,s)))}}function Df(e,t,n){var i,r,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===i&&c===r?a:(r=c,a=t(i=o,s)))}}function Ed(e,t){var n=Et(e),i=n===`transform`?oo:Jr;return this.attrTween(e,typeof t==`function`?(n.local?Df:$f)(n,i,An(this,`attr.`+e,t)):t==null?(n.local?Mf:If)(n):(n.local?Lf:Rf)(n,i,t))}function Uf(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function zf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Bf(e,t){var n,i;function r(){var a=t.apply(this,arguments);return a!==i&&(n=(i=a)&&zf(e,a)),n}return r._value=t,r}function Gf(e,t){var n,i;function r(){var a=t.apply(this,arguments);return a!==i&&(n=(i=a)&&Uf(e,a)),n}return r._value=t,r}function Sd(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw new Error;var i=Et(e);return this.tween(n,(i.local?Bf:Gf)(i,t))}function Ff(e,t){return function(){yi(this,e).delay=+t.apply(this,arguments)}}function Wf(e,t){return t=+t,function(){yi(this,e).delay=t}}function vd(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Ff:Wf)(t,e)):Oe(this.node(),t).delay}function Vf(e,t){return function(){Ie(this,e).duration=+t.apply(this,arguments)}}function Hf(e,t){return t=+t,function(){Ie(this,e).duration=t}}function xd(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Vf:Hf)(t,e)):Oe(this.node(),t).duration}function qf(e,t){if(typeof t!=`function`)throw new Error;return function(){Ie(this,e).ease=t}}function kd(e){var t=this._id;return arguments.length?this.each(qf(t,e)):Oe(this.node(),t).ease}function Xf(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw new Error;Ie(this,e).ease=n}}function Cd(e){if(typeof e!=`function`)throw new Error;return this.each(Xf(this._id,e))}function Td(e){typeof e!=`function`&&(e=si(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var a=t[r],o=a.length,s=i[r]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Be(i,this._parents,this._name,this._id)}function Od(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,i=t.length,r=n.length,a=Math.min(i,r),o=new Array(i),s=0;s<a;++s)for(var c=t[s],l=n[s],d=c.length,u=o[s]=new Array(d),p,_=0;_<d;++_)(p=c[_]||l[_])&&(u[_]=p);for(;s<i;++s)o[s]=t[s];return new Be(o,this._parents,this._name,this._id)}function jf(e){return(e+``).trim().split(/^|\s+/).every(function(t){var n=t.indexOf(`.`);return n>=0&&(t=t.slice(0,n)),!t||t===`start`})}function Kf(e,t,n){var i,r,a=jf(t)?yi:Ie;return function(){var o=a(this,e),s=o.on;s!==i&&(r=(i=s).copy()).on(t,n),o.on=r}}function Ad(e,t){var n=this._id;return arguments.length<2?Oe(this.node(),n).on.on(e):this.each(Kf(n,e,t))}function Yf(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function wd(){return this.on(`end.remove`,Yf(this._id))}function Pd(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Yt(e));for(var i=this._groups,r=i.length,a=new Array(r),o=0;o<r;++o)for(var s=i[o],c=s.length,l=a[o]=new Array(c),d,u,p=0;p<c;++p)(d=s[p])&&(u=e.call(d,d.__data__,p,s))&&(`__data__`in d&&(u.__data__=d.__data__),l[p]=u,Ut(l[p],t,n,p,l,Oe(d,n)));return new Be(a,this._parents,t,n)}function Nd(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=oi(e));for(var i=this._groups,r=i.length,a=[],o=[],s=0;s<r;++s)for(var c=i[s],l=c.length,d,u=0;u<l;++u)if(d=c[u]){for(var p=e.call(d,d.__data__,u,c),_,m=Oe(d,n),f=0,y=p.length;f<y;++f)(_=p[f])&&Ut(_,t,n,f,p,m);a.push(p),o.push(d)}return new Be(a,o,t,n)}var Qf=St.prototype.constructor;function Id(){return new Qf(this._groups,this._parents)}function Zf(e,t){var n,i,r;return function(){var a=$t(this,e),o=(this.style.removeProperty(e),$t(this,e));return a===o?null:a===n&&o===i?r:r=t(n=a,i=o)}}function Md(e){return function(){this.style.removeProperty(e)}}function Jf(e,t,n){var i,r=n+``,a;return function(){var o=$t(this,e);return o===r?null:o===i?a:a=t(i=o,n)}}function eh(e,t,n){var i,r,a;return function(){var o=$t(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),$t(this,e))),o===c?null:o===i&&c===r?a:(r=c,a=t(i=o,s))}}function th(e,t){var n,i,r,a=`style.`+t,o=`end.`+a,s;return function(){var c=Ie(this,e),l=c.on,d=c.value[a]==null?s||(s=Md(t)):void 0;(l!==n||r!==d)&&(i=(n=l).copy()).on(o,r=d),c.on=i}}function Rd(e,t,n){var i=(e+=``)==`transform`?ao:Jr;return t==null?this.styleTween(e,Zf(e,i)).on(`end.style.`+e,Md(e)):typeof t==`function`?this.styleTween(e,eh(e,i,An(this,`style.`+e,t))).each(th(this._id,e)):this.styleTween(e,Jf(e,i,t),n).on(`end.style.`+e,null)}function nh(e,t,n){return function(i){this.style.setProperty(e,t.call(this,i),n)}}function ih(e,t,n){var i,r;function a(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&nh(e,o,n)),i}return a._value=t,a}function Ld(e,t,n){var i=`style.`+(e+=``);if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!=`function`)throw new Error;return this.tween(i,ih(e,t,n??``))}function rh(e){return function(){this.textContent=e}}function ah(e){return function(){var t=e(this);this.textContent=t??``}}function $d(e){return this.tween(`text`,typeof e==`function`?ah(An(this,`text`,e)):rh(e==null?``:e+``))}function oh(e){return function(t){this.textContent=e.call(this,t)}}function sh(e){var t,n;function i(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&oh(r)),t}return i._value=e,i}function Dd(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw new Error;return this.tween(t,sh(e))}function Ud(){for(var e=this._name,t=this._id,n=ea(),i=this._groups,r=i.length,a=0;a<r;++a)for(var o=i[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var d=Oe(c,t);Ut(c,e,n,l,o,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Be(i,this._parents,e,n)}function zd(){var e,t,n=this,i=n._id,r=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--r===0&&a()}};n.each(function(){var l=Ie(this,i),d=l.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),l.on=t}),r===0&&a()})}var ch=0;function Be(e,t,n,i){this._groups=e,this._parents=t,this._name=n,this._id=i}function Bd(e){return St().transition(e)}function ea(){return++ch}var xt=St.prototype;Be.prototype=Bd.prototype={constructor:Be,select:Pd,selectAll:Nd,selectChild:xt.selectChild,selectChildren:xt.selectChildren,filter:Td,merge:Od,selection:Id,transition:Ud,call:xt.call,nodes:xt.nodes,node:xt.node,size:xt.size,empty:xt.empty,each:xt.each,on:Ad,attr:Ed,attrTween:Sd,style:Rd,styleTween:Ld,text:$d,textTween:Dd,remove:wd,tween:yd,delay:vd,duration:xd,ease:kd,easeVarying:Cd,end:zd,[Symbol.iterator]:xt[Symbol.iterator]};function ta(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var lh={time:null,delay:0,duration:250,ease:ta};function dh(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Gd(e){var t,n;e instanceof Be?(t=e._id,e=e._name):(t=ea(),(n=lh).time=gi(),e=e==null?null:e+``);for(var i=this._groups,r=i.length,a=0;a<r;++a)for(var o=i[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Ut(c,e,t,l,o,n||dh(c,t));return new Be(i,this._parents,e,t)}St.prototype.interrupt=bd;St.prototype.transition=Gd;var{abs:AT,max:wT,min:PT}=Math;[`w`,`e`].map(lo);[`n`,`s`].map(lo);[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(lo);function lo(e){return{type:e}}function ph(e){var t=0,n=e.children,i=n&&n.length;if(!i)t=1;else for(;--i>=0;)t+=n[i].value;e.value=t}function Wd(){return this.eachAfter(ph)}function Vd(e,t){let n=-1;for(let i of this)e.call(t,i,++n,this);return this}function Hd(e,t){for(var n=this,i=[n],r,a,o=-1;n=i.pop();)if(e.call(t,n,++o,this),r=n.children)for(a=r.length-1;a>=0;--a)i.push(r[a]);return this}function qd(e,t){for(var n=this,i=[n],r=[],a,o,s,c=-1;n=i.pop();)if(r.push(n),a=n.children)for(o=0,s=a.length;o<s;++o)i.push(a[o]);for(;n=r.pop();)e.call(t,n,++c,this);return this}function Xd(e,t){let n=-1;for(let i of this)if(e.call(t,i,++n,this))return i}function jd(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,i=t.children,r=i&&i.length;--r>=0;)n+=i[r].value;t.value=n})}function Kd(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function Yd(e){for(var t=this,n=uh(t,e),i=[t];t!==n;)t=t.parent,i.push(t);for(var r=i.length;e!==n;)i.splice(r,0,e),e=e.parent;return i}function uh(e,t){if(e===t)return e;var n=e.ancestors(),i=t.ancestors(),r=null;for(e=n.pop(),t=i.pop();e===t;)r=e,e=n.pop(),t=i.pop();return r}function Qd(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function Zd(){return Array.from(this)}function Jd(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function e_(){var e=this,t=[];return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),t}function*t_(){var e=this,t,n=[e],i,r,a;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,i=e.children)for(r=0,a=i.length;r<a;++r)n.push(i[r]);while(n.length)}function wn(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=hh)):t===void 0&&(t=fh);for(var n=new en(e),i,r=[n],a,o,s,c;i=r.pop();)if((o=t(i.data))&&(c=(o=Array.from(o)).length))for(i.children=o,s=c-1;s>=0;--s)r.push(a=o[s]=new en(o[s])),a.parent=i,a.depth=i.depth+1;return n.eachBefore(bh)}function mh(){return wn(this).eachBefore(gh)}function fh(e){return e.children}function hh(e){return Array.isArray(e)?e[1]:null}function gh(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function bh(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function en(e){this.data=e,this.depth=this.height=0,this.parent=null}en.prototype=wn.prototype={constructor:en,count:Wd,each:Vd,eachAfter:qd,eachBefore:Hd,find:Xd,sum:jd,sort:Kd,path:Yd,ancestors:Qd,descendants:Zd,leaves:Jd,links:e_,copy:mh,[Symbol.iterator]:t_};function yh(e,t){return e.parent===t.parent?1:2}function _o(e){var t=e.children;return t?t[0]:e.t}function po(e){var t=e.children;return t?t[t.length-1]:e.t}function Eh(e,t,n){var i=n/(t.i-e.i);t.c-=i,t.s+=n,e.c+=i,t.z+=n,t.m+=n}function Sh(e){for(var t=0,n=0,i=e.children,r=i.length,a;--r>=0;)a=i[r],a.z+=t,a.m+=t,t+=a.s+(n+=a.c)}function vh(e,t,n){return e.a.parent===t.parent?e.a:n}function na(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}na.prototype=Object.create(en.prototype);function xh(e){for(var t=new na(e,0),n,i=[t],r,a,o,s;n=i.pop();)if(a=n._.children)for(n.children=new Array(s=a.length),o=s-1;o>=0;--o)i.push(r=n.children[o]=new na(a[o],o)),r.parent=n;return(t.parent=new na(null,0)).children=[t],t}function uo(){var e=yh,t=1,n=1,i=null;function r(l){var d=xh(l);if(d.eachAfter(a),d.parent.m=-d.z,d.eachBefore(o),i)l.eachBefore(c);else{var u=l,p=l,_=l;l.eachBefore(function(b){b.x<u.x&&(u=b),b.x>p.x&&(p=b),b.depth>_.depth&&(_=b)});var m=u===p?1:e(u,p)/2,f=m-u.x,y=t/(p.x+m+f),C=n/(_.depth||1);l.eachBefore(function(b){b.x=(b.x+f)*y,b.y=b.depth*C})}return l}function a(l){var d=l.children,u=l.parent.children,p=l.i?u[l.i-1]:null;if(d){Sh(l);var _=(d[0].z+d[d.length-1].z)/2;p?(l.z=p.z+e(l._,p._),l.m=l.z-_):l.z=_}else p&&(l.z=p.z+e(l._,p._));l.parent.A=s(l,p,l.parent.A||u[0])}function o(l){l._.x=l.z+l.parent.m,l.m+=l.parent.m}function s(l,d,u){if(d){for(var p=l,_=l,m=d,f=p.parent.children[0],y=p.m,C=_.m,b=m.m,w=f.m,N;m=po(m),p=_o(p),m&&p;)f=_o(f),_=po(_),_.a=l,N=m.z+b-p.z-y+e(m._,p._),N>0&&(Eh(vh(m,l,u),l,N),y+=N,C+=N),b+=m.m,y+=p.m,w+=f.m,C+=_.m;m&&!po(_)&&(_.t=m,_.m+=b-C),p&&!_o(f)&&(f.t=p,f.m+=y-w,u=l)}return u}function c(l){l.x*=t,l.y=l.depth*n}return r.separation=function(l){return arguments.length?(e=l,r):e},r.size=function(l){return arguments.length?(i=!1,t=+l[0],n=+l[1],r):i?null:[t,n]},r.nodeSize=function(l){return arguments.length?(i=!0,t=+l[0],n=+l[1],r):i?[t,n]:null},r}var Ei=e=>()=>e;function mo(e,{sourceEvent:t,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function lt(e,t,n){this.k=e,this.x=t,this.y=n}lt.prototype={constructor:lt,scale:function(e){return e===1?this:new lt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new lt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Si=new lt(1,0,0);fo.prototype=lt.prototype;function fo(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Si;return e.__zoom}function ia(e){e.stopImmediatePropagation()}function Pn(e){e.preventDefault(),e.stopImmediatePropagation()}function kh(e){return(!e.ctrlKey||e.type===`wheel`)&&!e.button}function Ch(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute(`viewBox`)?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function n_(){return this.__zoom||Si}function Th(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Oh(){return navigator.maxTouchPoints||`ontouchstart`in this}function Ah(e,t,n){var i=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}function ho(){var e=kh,t=Ch,n=Ah,i=Th,r=Oh,a=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],s=250,c=so,l=ai(`start`,`zoom`,`end`),d,u,p,_=500,m=150,f=0,y=10;function C(S){S.property(`__zoom`,n_).on(`wheel.zoom`,ae,{passive:!1}).on(`mousedown.zoom`,T).on(`dblclick.zoom`,A).filter(r).on(`touchstart.zoom`,z).on(`touchmove.zoom`,J).on(`touchend.zoom touchcancel.zoom`,Y).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}C.transform=function(S,R,x,I){var O=S.selection?S.selection():S;O.property(`__zoom`,n_),S!==O?F(S,R,x,I):O.interrupt().each(function(){K(this,arguments).event(I).start().zoom(null,typeof R==`function`?R.apply(this,arguments):R).end()})},C.scaleBy=function(S,R,x,I){C.scaleTo(S,function(){return this.__zoom.k*(typeof R==`function`?R.apply(this,arguments):R)},x,I)},C.scaleTo=function(S,R,x,I){C.transform(S,function(){var O=t.apply(this,arguments),q=this.__zoom,M=x==null?N(O):typeof x==`function`?x.apply(this,arguments):x,ne=q.invert(M),ie=typeof R==`function`?R.apply(this,arguments):R;return n(w(b(q,ie),M,ne),O,o)},x,I)},C.translateBy=function(S,R,x,I){C.transform(S,function(){return n(this.__zoom.translate(typeof R==`function`?R.apply(this,arguments):R,typeof x==`function`?x.apply(this,arguments):x),t.apply(this,arguments),o)},null,I)},C.translateTo=function(S,R,x,I,O){C.transform(S,function(){var q=t.apply(this,arguments),M=this.__zoom,ne=I==null?N(q):typeof I==`function`?I.apply(this,arguments):I;return n(Si.translate(ne[0],ne[1]).scale(M.k).translate(typeof R==`function`?-R.apply(this,arguments):-R,typeof x==`function`?-x.apply(this,arguments):-x),q,o)},I,O)};function b(S,R){return R=Math.max(a[0],Math.min(a[1],R)),R===S.k?S:new lt(R,S.x,S.y)}function w(S,R,x){var I=R[0]-x[0]*S.k,O=R[1]-x[1]*S.k;return I===S.x&&O===S.y?S:new lt(S.k,I,O)}function N(S){return[(+S[0][0]+ +S[1][0])/2,(+S[0][1]+ +S[1][1])/2]}function F(S,R,x,I){S.on(`start.zoom`,function(){K(this,arguments).event(I).start()}).on(`interrupt.zoom end.zoom`,function(){K(this,arguments).event(I).end()}).tween(`zoom`,function(){var O=this,q=arguments,M=K(O,q).event(I),ne=t.apply(O,q),ie=x==null?N(ne):typeof x==`function`?x.apply(O,q):x,oe=Math.max(ne[1][0]-ne[0][0],ne[1][1]-ne[0][1]),ce=O.__zoom,Ce=typeof R==`function`?R.apply(O,q):R,te=c(ce.invert(ie).concat(oe/ce.k),Ce.invert(ie).concat(oe/Ce.k));return function(Te){if(Te===1)Te=Ce;else{var Re=te(Te),Tt=oe/Re[2];Te=new lt(Tt,ie[0]-Re[0]*Tt,ie[1]-Re[1]*Tt)}M.zoom(null,Te)}})}function K(S,R,x){return!x&&S.__zooming||new X(S,R)}function X(S,R){this.that=S,this.args=R,this.active=0,this.sourceEvent=null,this.extent=t.apply(S,R),this.taps=0}X.prototype={event:function(S){return S&&(this.sourceEvent=S),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit(`start`)),this},zoom:function(S,R){return this.mouse&&S!==`mouse`&&(this.mouse[1]=R.invert(this.mouse[0])),this.touch0&&S!==`touch`&&(this.touch0[1]=R.invert(this.touch0[0])),this.touch1&&S!==`touch`&&(this.touch1[1]=R.invert(this.touch1[0])),this.that.__zoom=R,this.emit(`zoom`),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit(`end`)),this},emit:function(S){var R=Ze(this.that).datum();l.call(S,this.that,new mo(S,{sourceEvent:this.sourceEvent,target:C,type:S,transform:this.that.__zoom,dispatch:l}),R)}};function ae(S,...R){if(!e.apply(this,arguments))return;var x=K(this,R).event(S),I=this.__zoom,O=Math.max(a[0],Math.min(a[1],I.k*Math.pow(2,i.apply(this,arguments)))),q=vt(S);if(x.wheel)(x.mouse[0][0]!==q[0]||x.mouse[0][1]!==q[1])&&(x.mouse[1]=I.invert(x.mouse[0]=q)),clearTimeout(x.wheel);else{if(I.k===O)return;x.mouse=[q,I.invert(q)],zt(this),x.start()}Pn(S),x.wheel=setTimeout(M,m),x.zoom(`mouse`,n(w(b(I,O),x.mouse[0],x.mouse[1]),x.extent,o));function M(){x.wheel=null,x.end()}}function T(S,...R){if(p||!e.apply(this,arguments))return;var x=S.currentTarget,I=K(this,R,!0).event(S),O=Ze(S.view).on(`mousemove.zoom`,ie,!0).on(`mouseup.zoom`,oe,!0),q=vt(S,x),M=S.clientX,ne=S.clientY;Ka(S.view),ia(S),I.mouse=[q,this.__zoom.invert(q)],zt(this),I.start();function ie(ce){if(Pn(ce),!I.moved){var Ce=ce.clientX-M,te=ce.clientY-ne;I.moved=Ce*Ce+te*te>f}I.event(ce).zoom(`mouse`,n(w(I.that.__zoom,I.mouse[0]=vt(ce,x),I.mouse[1]),I.extent,o))}function oe(ce){O.on(`mousemove.zoom mouseup.zoom`,null),Ya(ce.view,I.moved),Pn(ce),I.event(ce).end()}}function A(S,...R){if(e.apply(this,arguments)){var x=this.__zoom,I=vt(S.changedTouches?S.changedTouches[0]:S,this),O=x.invert(I),q=x.k*(S.shiftKey?.5:2),M=n(w(b(x,q),I,O),t.apply(this,R),o);Pn(S),s>0?Ze(this).transition().duration(s).call(F,M,I,S):Ze(this).call(C.transform,M,I,S)}}function z(S,...R){if(e.apply(this,arguments)){var x=S.touches,I=x.length,O=K(this,R,S.changedTouches.length===I).event(S),q,M,ne,ie;for(ia(S),M=0;M<I;++M)ne=x[M],ie=vt(ne,this),ie=[ie,this.__zoom.invert(ie),ne.identifier],O.touch0?!O.touch1&&O.touch0[2]!==ie[2]&&(O.touch1=ie,O.taps=0):(O.touch0=ie,q=!0,O.taps=1+!!d);d&&(d=clearTimeout(d)),q&&(O.taps<2&&(u=ie[0],d=setTimeout(function(){d=null},_)),zt(this),O.start())}}function J(S,...R){if(this.__zooming){var x=K(this,R).event(S),I=S.changedTouches,O=I.length,q,M,ne,ie;for(Pn(S),q=0;q<O;++q)M=I[q],ne=vt(M,this),x.touch0&&x.touch0[2]===M.identifier?x.touch0[0]=ne:x.touch1&&x.touch1[2]===M.identifier&&(x.touch1[0]=ne);if(M=x.that.__zoom,x.touch1){var oe=x.touch0[0],ce=x.touch0[1],Ce=x.touch1[0],te=x.touch1[1],Te=(Te=Ce[0]-oe[0])*Te+(Te=Ce[1]-oe[1])*Te,Re=(Re=te[0]-ce[0])*Re+(Re=te[1]-ce[1])*Re;M=b(M,Math.sqrt(Te/Re)),ne=[(oe[0]+Ce[0])/2,(oe[1]+Ce[1])/2],ie=[(ce[0]+te[0])/2,(ce[1]+te[1])/2]}else if(x.touch0)ne=x.touch0[0],ie=x.touch0[1];else return;x.zoom(`touch`,n(w(M,ne,ie),x.extent,o))}}function Y(S,...R){if(this.__zooming){var x=K(this,R).event(S),I=S.changedTouches,O=I.length,q,M;for(ia(S),p&&clearTimeout(p),p=setTimeout(function(){p=null},_),q=0;q<O;++q)M=I[q],x.touch0&&x.touch0[2]===M.identifier?delete x.touch0:x.touch1&&x.touch1[2]===M.identifier&&delete x.touch1;if(x.touch1&&!x.touch0&&(x.touch0=x.touch1,delete x.touch1),x.touch0)x.touch0[1]=this.__zoom.invert(x.touch0[0]);else if(x.end(),x.taps===2&&(M=vt(M,this),Math.hypot(u[0]-M[0],u[1]-M[1])<y)){var ne=Ze(this).on(`dblclick.zoom`);ne&&ne.apply(this,arguments)}}}return C.wheelDelta=function(S){return arguments.length?(i=typeof S==`function`?S:Ei(+S),C):i},C.filter=function(S){return arguments.length?(e=typeof S==`function`?S:Ei(!!S),C):e},C.touchable=function(S){return arguments.length?(r=typeof S==`function`?S:Ei(!!S),C):r},C.extent=function(S){return arguments.length?(t=typeof S==`function`?S:Ei([[+S[0][0],+S[0][1]],[+S[1][0],+S[1][1]]]),C):t},C.scaleExtent=function(S){return arguments.length?(a[0]=+S[0],a[1]=+S[1],C):[a[0],a[1]]},C.translateExtent=function(S){return arguments.length?(o[0][0]=+S[0][0],o[1][0]=+S[1][0],o[0][1]=+S[0][1],o[1][1]=+S[1][1],C):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},C.constrain=function(S){return arguments.length?(n=S,C):n},C.duration=function(S){return arguments.length?(s=+S,C):s},C.interpolate=function(S){return arguments.length?(c=S,C):c},C.on=function(){var S=l.on.apply(l,arguments);return S===l?C:S},C.clickDistance=function(S){return arguments.length?(f=(S=+S)*S,C):Math.sqrt(f)},C.tapDistance=function(S){return arguments.length?(y=+S,C):y},C}var Nh=[`svgContainer`];function Ih(e,t){e&1&&(ml$1(0,`div`,3),Yw(1,1),yl$1())}var ra=class e{svgContainerSignal=vj(`svgContainer`);_svgContainerOverride;get svgContainer(){return this._svgContainerOverride!==void 0?this._svgContainerOverride:this.svgContainerSignal()}set svgContainer(t){this._svgContainerOverride=t}store=C(ut$1);specContent=this.store.selectSignal(zm$1);hasData=ei(!1);svg=null;root=null;tree=null;i=0;duration=0;margin={top:20,right:120,bottom:20,left:120};width=960-this.margin.right-this.margin.left;height=800-this.margin.top-this.margin.bottom;resizeObserver;constructor(){Nd$1(()=>{let t=this.specContent();t?this.parseAndRender(t):(this.hasData.set(!1),this.clearSvg())}),this.resizeObserver=new ResizeObserver(()=>{this.handleResize()})}ngAfterViewInit(){this.resizeObserver.observe(this.svgContainer.nativeElement)}ngOnDestroy(){this.resizeObserver.disconnect()}handleResize(){if(!this.svgContainer||!this.hasData())return;let t=this.svgContainer.nativeElement.getBoundingClientRect();t.width!==0&&t.height!==0&&(this.width=t.width-this.margin.right-this.margin.left,this.height=t.height-this.margin.top-this.margin.bottom,this.root&&this.update(this.root))}clearSvg(){this.svgContainer&&Ze(this.svgContainer.nativeElement).selectAll(`svg`).remove()}parseAndRender(t){try{let n=Ds(t);if(!n)return;this.hasData.set(!0);let i={id:`root`,name:n.info?.title||`API`,type:`root`,children:[]};if(n.paths){let a={id:`paths`,name:`Paths`,type:`category`,children:[]};Object.keys(n.paths).forEach(o=>{let s={id:`path-${o}`,name:o,type:`path`,children:[]},c=n.paths[o];Object.keys(c).forEach(l=>{l!==`parameters`&&l!==`$ref`&&s.children.push({id:`method-${o}-${l}`,name:l.toUpperCase(),type:`method`})}),a.children.push(s)}),i.children.push(a)}let r;if(n.components?r=n.components.schemas:r=n.definitions,r){let a={id:`schemas`,name:`Schemas`,type:`category`,children:[]};Object.keys(r).forEach(o=>{a.children.push({id:`schema-${o}`,name:o,type:`schema`})}),i.children.push(a)}this.initSvg(),this.root=wn(i,a=>a.children),this.root.x0=this.height/2,this.root.y0=0,(this.root.children||[]).forEach(this.collapse.bind(this)),this.update(this.root)}catch(n){console.error(`Error parsing OpenAPI spec for visualisation`,n),this.hasData.set(!1),this.clearSvg()}}collapse(t){t.children&&(t._children=t.children,t._children.forEach(this.collapse.bind(this)),t.children=void 0)}zoomCallback=null;initSvg(){this.clearSvg();let t=this.svgContainer.nativeElement,{width:n,height:i}=t.getBoundingClientRect();this.width=Math.max(n-this.margin.right-this.margin.left,800),this.height=Math.max(i-this.margin.top-this.margin.bottom,600),this.zoomCallback=a=>{this.svg&&this.svg.attr(`transform`,a.transform)};let r=Ze(t).append(`svg`).attr(`width`,`100%`).attr(`height`,`100%`).attr(`role`,`img`).attr(`aria-label`,`API Structure Diagram`).call(ho().on(`zoom`,this.zoomCallback)).append(`g`).attr(`transform`,`translate(${this.margin.left},${this.margin.top})`);this.svg=r,this.tree=uo().nodeSize([30,150])}update(t){if(!this.svg)return;let n=this.tree(this.root),i=n.descendants(),r=n.descendants().slice(1);i.forEach(p=>{p.y=p.depth*180});let a=this.svg.selectAll(`g.node`).data(i,p=>p.id?String(p.id):String(p.id=String(++this.i))),o=a.enter().append(`g`).attr(`class`,`node`).attr(`tabindex`,`0`).attr(`role`,`button`).attr(`aria-label`,p=>`${p.data.type}: ${p.data.name}`).attr(`transform`,()=>`translate(${t.y0},${t.x0})`).on(`click`,(p,_)=>this.click(p,_)).on(`keydown`,(p,_)=>{(p.key===`Enter`||p.key===` `)&&(p.preventDefault(),this.click(p,_))});o.append(`circle`).attr(`class`,`node-circle`).attr(`r`,1e-6).style(`fill`,p=>p._children?`var(--mat-sys-primary)`:`var(--mat-sys-surface)`).style(`stroke`,`var(--mat-sys-primary)`).style(`stroke-width`,`1.5px`),o.append(`text`).attr(`dy`,`.35em`).attr(`x`,p=>p.children||p._children?-13:13).attr(`text-anchor`,p=>p.children||p._children?`end`:`start`).text(p=>p.data.name).style(`fill`,`var(--mat-sys-on-surface)`).style(`font-size`,`12px`);let s=o.merge(a);s.attr(`aria-expanded`,p=>p.children?`true`:p._children?`false`:null).transition().duration(this.duration).attr(`transform`,p=>`translate(${p.y},${p.x})`),s.select(`circle.node-circle`).attr(`r`,6).style(`fill`,p=>p._children?`var(--mat-sys-primary)`:`var(--mat-sys-surface)`).attr(`cursor`,`pointer`);let c=a.exit().transition().duration(this.duration).attr(`transform`,()=>`translate(${t.y},${t.x})`).remove();c.select(`circle`).attr(`r`,1e-6),c.select(`text`).style(`fill-opacity`,1e-6);let l=this.svg.selectAll(`path.link`).data(r,p=>String(p.id));l.enter().insert(`path`,`g`).attr(`class`,`link`).style(`fill`,`none`).style(`stroke`,`var(--mat-sys-outline)`).style(`stroke-width`,`1.5px`).attr(`d`,()=>{let p={x:t.x0,y:t.y0};return this.diagonal(p,p)}).merge(l).transition().duration(this.duration).attr(`d`,p=>this.diagonal(p,p.parent)),l.exit().transition().duration(this.duration).attr(`d`,()=>{let p={x:t.x,y:t.y};return this.diagonal(p,p)}).remove(),i.forEach(p=>{p.x0=p.x,p.y0=p.y})}diagonal(t,n){return`M ${t.y} ${t.x}
            C ${(t.y+n.y)/2} ${t.x},
              ${(t.y+n.y)/2} ${n.x},
              ${n.y} ${n.x}`}click(t,n){n.children?(n._children=n.children,n.children=void 0):(n.children=n._children,n._children=null),this.update(n)}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-visualisations`]],viewQuery:function(n,i){n&1&&gg$1(i.svgContainerSignal,Nh,5),n&2&&sb$1()},decls:3,vars:1,consts:()=>{let t;return t=$localize`:@@noApiData:No API Data Available`,[[`svgContainer`,``],t,[1,`vis-container`],[1,`empty-state`]]},template:function(n,i){n&1&&(ml$1(0,`div`,2,0),pw(2,Ih,2,0,`div`,3),yl$1()),n&2&&(ZE(2),gw(i.hasData()?-1:2))},styles:[`.vis-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:hidden;background-color:var(--%NS%mat-sys-surface-container)}.empty-state[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:var(--%NS%mat-sys-outline);font-style:italic}`]})};function qo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var dn=qo();function U_(e){dn=e}var rn={exec:()=>null};function tn(e){let t=[];return n=>{let i=Math.max(0,Math.min(3,n-1)),r=t[i];return r||(r=e(i),t[i]=r),r}}function j(e,t=``){let n=typeof e==`string`?e:e.source,i={replace:(r,a)=>{let o=typeof a==`string`?a:a.source;return o=o.replace(Ne.caret,`$1`),n=n.replace(r,o),i},getRegex:()=>new RegExp(n,t)};return i}var Mh=((e=``)=>{try{return!!new RegExp(`(?<=1)(?<!1)`+e)}catch(t){return!1}})();var Ne={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:tn(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:tn(e=>new RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:tn(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:tn(e=>new RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:tn(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:tn(e=>new RegExp(`^ {0,${e}}(?:</?(?:${Ni})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:tn(e=>new RegExp(`^ {0,${e}}>`))};var Rh=/^(?:[ \t]*(?:\n|$))+/;var Lh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;var $h=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;var Pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;var Dh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;var Xo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/;var z_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;var B_=j(z_).replace(/bull/g,Xo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex();var Uh=j(z_).replace(/bull/g,Xo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();var jo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;var zh=/^[^\n]+/;var Ko=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;var Bh=j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ko).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();var Gh=j(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Xo).getRegex();var Ni=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`;var Yo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/;var Fh=j(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Yo).replace(`tag`,Ni).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();var G_=e=>j(jo).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Ni).getRegex();var Wh=G_(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);var Vh=G_(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);var Qo={blockquote:j(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Vh).getRegex(),code:Lh,def:Bh,fences:$h,heading:Dh,hr:Pi,html:Fh,lheading:B_,list:Gh,newline:Rh,paragraph:Wh,table:rn,text:zh};var i_=j(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Ni).getRegex();var qh=W(U({},Qo),{lheading:Uh,table:i_,paragraph:j(jo).replace(`hr`,Pi).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,i_).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Ni).getRegex()});var Xh=W(U({},Qo),{html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Yo).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(jo).replace(`hr`,Pi).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,B_).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()});var jh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;var Kh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;var F_=/^( {2,}|\\)\n(?!\s*$)[ \t]*/;var Yh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;var bt=/[\p{P}\p{S}]/u;var Bn=/[\s\p{P}\p{S}]/u;var Ii=/[^\s\p{P}\p{S}]/u;var Qh=j(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Bn).getRegex();var Zh=/[\p{Pi}\p{Ps}"']/u;var W_=/(?!~)[\p{P}\p{S}]/u;var Jh=/(?!~)[\s\p{P}\p{S}]/u;var eg=/(?:[^\s\p{P}\p{S}]|~)/u;var tg=j(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Mh?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex();var V_=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;var ng=j(V_,`u`).replace(/punct/g,bt).getRegex();var ig=j(V_,`u`).replace(/punct/g,W_).getRegex();var ag=j(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Zh).replace(/punct/g,bt).getRegex();var H_=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`;var og=j(H_,`gu`).replace(/notPunctSpace/g,Ii).replace(/punctSpace/g,Bn).replace(/punct/g,bt).getRegex();var sg=j(H_,`gu`).replace(/notPunctSpace/g,eg).replace(/punctSpace/g,Jh).replace(/punct/g,W_).getRegex();var lg=j(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ii).replace(/punctSpace/g,Bn).replace(/punct/g,bt).getRegex();var dg=j(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Ii).replace(/punctSpace/g,Bn).replace(/punct/g,bt).getRegex();var pg=j(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ii).replace(/punctSpace/g,Bn).replace(/punct/g,bt).getRegex();var ug=j(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,bt).getRegex();var fg=j(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Ii).replace(/punctSpace/g,Bn).replace(/punct/g,bt).getRegex();var hg=j(/\\(punct)/,`gu`).replace(/punct/g,bt).getRegex();var gg=j(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,bt).getRegex();var bg=j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();var yg=j(Yo).replace(`(?:-->|$)`,`-->`).getRegex();var Eg=j(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,yg).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();var q_=/\[(?:\\[\s\S]|[^\[\]\\])*\]/;var la=j(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,q_).getRegex();var Sg=j(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,la).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();var vg=j(/^!?\[(label)\]\[(ref)\]/).replace(`label`,la).replace(`ref`,Ko).getRegex();var xg=j(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ko).getRegex();var r_=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;var kg=j(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,q_).getRegex();var Cg=j(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,j(/^!?\[(label)\]\[(ref)\]/).replace(`label`,kg).replace(`ref`,r_).getRegex()).replace(`nolink`,j(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,r_).getRegex()).getRegex();var a_=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;var Og=j(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex();var Zo={_backpedal:rn,anyPunctuation:hg,anyPunctuationOutsideCode:gg,autolink:bg,blockSkip:tg,br:F_,code:Kh,del:rn,delLDelim:rn,delRDelim:rn,emStrongLDelim:ng,emStrongRDelimAst:og,emStrongRDelimUnd:dg,escape:jh,link:Sg,nolink:xg,punctuation:Qh,reflink:vg,reflinkSearch:Cg,tag:Eg,text:Yh,url:rn};var Ag=W(U({},Zo),{emStrongLDelim:ag,emStrongRDelimAst:lg,emStrongRDelimUnd:pg,link:j(/^!?\[(label)\]\((.*?)\)/).replace(`label`,la).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,la).getRegex()});var To=W(U({},Zo),{emStrongRDelimAst:sg,emStrongLDelim:ig,delLDelim:ug,delRDelim:fg,url:j(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,Og).replace(`protocol`,a_).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:j(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,a_).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()});var wg=W(U({},To),{br:j(F_).replace(`{2,}`,`*`).getRegex(),text:j(To.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()});var aa={normal:Qo,gfm:qh,pedantic:Xh};var vi={normal:Zo,gfm:To,breaks:wg,pedantic:Ag};var Pg={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};var o_=e=>Pg[e];function Je(e,t){if(t){if(Ne.escapeTest.test(e))return e.replace(Ne.escapeReplace,o_)}else if(Ne.escapeTestNoEncode.test(e))return e.replace(Ne.escapeReplaceNoEncode,o_);return e}function Ng(e){return Ne.numericCharacterReference.test(e)?e.replace(Ne.numericCharacterReferenceOrAmpersand,(t,n,i)=>{if(n===void 0&&i===void 0)return`&amp;`;let r=n===void 0?Number.parseInt(i,16):Number.parseInt(n,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function s_(e){try{e=encodeURI(e).replace(Ne.percentDecode,`%`)}catch(t){return null}return e}function c_(e,t){let i=e.replace(Ne.findPipe,(a,o,s)=>{let c=!1,l=o;for(;--l>=0&&s[l]===`\\`;)c=!c;return c?`|`:` |`}).split(Ne.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push(``);for(;r<i.length;r++)i[r]=i[r].trim().replace(Ne.slashPipe,`|`);return i}function Bt(e,t,n){let i=e.length;if(i===0)return``;let r=0;for(;r<i;){let a=e.charAt(i-r-1);if(a===t&&!n)r++;else if(a!==t&&n)r++;else break}return e.slice(0,i-r)}function l_(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ne.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function da(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function d_(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let i=0;i<e.length;i++)if(e[i]===`\\`)i++;else if(e[i]===t[0])n++;else if(e[i]===t[1]&&(n--,n<0))return i;return n>0?-2:-1}function oa(e,t=0){let n=t,i=``;for(let r of e)if(r===`	`){let a=4-n%4;i+=` `.repeat(a),n+=a}else i+=r,n++;return i}function __(e,t,n,i,r){let a=t.href,o=t.title||null,s=e[1].replace(r.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=i.state.inLink,d=i.state.linkEmitted,u=i.state.inRawBlock;i.state.inLink=!0,i.state.linkEmitted=!1;let p=i.inlineTokens(s),_=i.state.linkEmitted;if(i.state.linkEmitted=d,i.state.inLink=l,!c){if(_){i.state.inRawBlock=u;return}i.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:p}}function Ig(e,t,n){let i=e.match(n.other.indentCodeCompensation);if(i===null)return t;let r=i[1];return t.split(`
`).map(a=>{let o=a.match(n.other.beginningSpace);if(o===null)return a;let[s]=o;return a.slice(Math.min(s.length,r.length))}).join(`
`)}function p_(e,t,n,i){if(!t.includes(`<`))return!1;for(let r=0;r<t.length;r++){if(t[r]===`\\`){r++;continue}if(t[r]==="`"){let s=i.inline.code.exec(t.slice(r));if(s){r+=s[0].length-1;continue}}if(t[r]!==`<`)continue;let a=e.slice(n+r),o=i.inline.tag.exec(a)||i.inline.autolink.exec(a);if(o){if(o[0].length>t.length-r)return!0;r+=o[0].length-1}}return!1}var In=class{options;rules;lexer;constructor(e){this.options=e||dn}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:l_(t[0]);return{type:`code`,raw:n,codeBlockStyle:`indented`,text:n.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=Ig(n,t[3]||``,this.rules);return{type:`code`,raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let i=Bt(n,`#`);(this.options.pedantic||!i||this.rules.other.endingSpaceTabChar.test(i))&&(n=i.trim())}return{type:`heading`,raw:Bt(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Bt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Bt(t[0],`
`).split(`
`),i=``,r=``,a=[];for(;n.length>0;){let o=!1,s=[],c=0;for(;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),o=!0;else if(!o)s.push(n[c]);else break;n=n.slice(c);let l=s.join(`
`),d=l.replace(this.rules.other.blockquoteMarkerWhitespace,(_,m,f)=>m+oa(f,m.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);i=i?`${i}
${l}`:l,r=r?`${r}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,a,!0),this.lexer.state.top=u,n.length===0)break;let p=a.at(-1);if(p?.type===`code`||p?.type===`heading`||p?.type===`hr`||p?.type===`html`)break;if(p?.type===`blockquote`){let _=p,m=n.join(`
`),f=_.raw+`
`+m.replace(this.rules.other.blockquoteSetextReplace2,``),y=this.blockquote(f);a[a.length-1]=y;let C=f.substring(y.raw.length).replace(/^\n/,``),b=C?C.split(`
`).length:0,w=b?n.slice(0,-b):n;w.length>0&&(i=`${i}
${w.join(`
`)}`),r=r.substring(0,r.length-_.text.length)+y.text;break}else if(p?.type===`list`){let _=p,m=_.raw+`
`+n.join(`
`),f=this.list(m);a[a.length-1]=f;let y=f.raw.length>_.raw.length?m.slice(_.raw.length+1,f.raw.length).split(`
`).length:0;if(y>0){let C=n.slice(0,y).join(`
`);i=`${i}
${C}`,r=`${r}
${C}`}n=n.slice(y);continue}}return{type:`blockquote`,raw:i,tokens:a,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,i=()=>n.length-e.length,r=t[1].trim(),a=r.length>1,o={type:`list`,raw:``,ordered:a,start:a?+r.slice(0,-1):``,loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:`[*+-]`);let s=this.rules.other.listItemRegex(r),c=!1;for(;e;){let d=!1,u=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let p=i();e=e.substring(t[0].length);let _=t[2].split(`
`,1)[0],m=t[1].length,f=this.options.pedantic?oa(_,m):_.replace(this.rules.other.leadingSpaceTab,N=>oa(N,m)),y=e.split(`
`,1)[0],C=!f.trim(),b=0;if(this.options.pedantic?(b=2,u=f.trimStart()):C?b=m+1:(b=f.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=f.slice(b),b+=m),C&&this.rules.other.blankLine.test(y)&&(e=e.substring(y.length+1),d=!0),!d){let N=this.rules.other.nextBulletRegex(b),F=this.rules.other.hrRegex(b),K=this.rules.other.fencesBeginRegex(b),X=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(b):this.rules.other.headingBeginRegex(b),ae=this.rules.other.htmlBeginRegex(b),T=this.rules.other.blockquoteBeginRegex(b);for(;e;){let A=e.split(`
`,1)[0],z;if(y=A,this.options.pedantic?(y=y.replace(this.rules.other.listReplaceNesting,`  `),z=y):z=y.replace(this.rules.other.leadingSpaceTab,J=>oa(J)),K.test(y)||X.test(y)||ae.test(y)||T.test(y)||N.test(y)||F.test(y))break;if(z.search(this.rules.other.nonSpaceChar)>=b||!y.trim())u+=`
`+z.slice(b);else{if(C||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||K.test(f)||X.test(f)||F.test(f))break;let J=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(y)&&this.rules.block.lheading.test(`${f}
${y}`)?`    ${z.replace(/^ {0,3}/,``)}`:y;u+=`
`+J}C=!y.trim(),e=e.substring(A.length+1),f=z.slice(b)}}let w=n.slice(p,i());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(w)&&(c=!0)),o.items.push({type:`list_item`,raw:w,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,i()).trimEnd();for(let d of o.items)if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),!o.loose){let u=d.tokens.filter(_=>_.type===`space`);o.loose=u.length>0&&u.some(_=>this.rules.other.anyLine.test(_.raw))}for(let d of o.items){let u=d.tokens[0];if(d.task&&(u?.type===`text`||u?.type===`paragraph`)){d.text=d.text.replace(this.rules.other.listReplaceTask,``),u.raw=u.raw.replace(this.rules.other.listReplaceTask,``),u.text=u.text.replace(this.rules.other.listReplaceTask,``);for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,``);break}let p=this.rules.other.listTaskCheckbox.exec(d.raw);if(p){let _={type:`checkbox`,raw:p[0]+` `,checked:p[0]!==`[ ]`};d.checked=_.checked,o.loose?d.tokens[0]&&[`paragraph`,`text`].includes(d.tokens[0].type)&&`tokens`in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=_.raw+d.tokens[0].raw,d.tokens[0].text=_.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(_)):d.tokens.unshift({type:`paragraph`,raw:_.raw,text:_.raw,tokens:[_]}):d.tokens.unshift(_)}}else d.task&&(d.task=!1)}if(o.loose)for(let d of o.items){d.loose=!0;for(let u of d.tokens)u.type===`text`&&(u.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=l_(t[0]);return{type:`html`,block:!0,raw:n,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&d_(t[2],`()`)!==-1)return;let n=da(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:n,raw:Bt(t[0],`
`),href:i,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=c_(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Bt(t[0],`
`),header:[],align:[],rows:[]};if(n.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(o)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(o)?a.align.push(`left`):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(let o of r)a.rows.push(c_(o,a.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:a.align[c]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:`heading`,raw:Bt(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&p_(e,t[1],n,this.rules))return;let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=Bt(i.slice(0,-1),`\\`);if((i.length-o.length)%2===0)return}else{let o=d_(t[2],`()`);if(o===-2)return;if(o>-1){let s=(t[0].indexOf(`!`)===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,s).trim(),t[3]=``}}let r=t[2],a=``;if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):``;return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),__(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&p_(e,n[1],i,this.rules))return;let a=t[da((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!a){let o=n[0].charAt(0);return{type:`text`,raw:o,text:o}}return __(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||!i[1]&&!i[2]&&!i[3]&&!i[4])return;let r=i[0][0],a=n===r,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===r;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let d=s<o?l:!!this.rules.inline.punctuation.exec(n);if(i[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let u=i[1]||i[3]||``;if(!u||!n||d){let p=[...i[0]].length-1,_,m,f=p,y=0,C=o-s+p,b=!this.options.pedantic&&!!c.trim()&&(!!u||r===`*`&&!l),w=r===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(w.lastIndex=0,t=t.slice(-1*e.length+p);(i=w.exec(t))!==null;){if(_=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!_)continue;if(m=[..._].length,i[3]||i[4]){f+=m;continue}else if(i[5]||i[6]||b){if(a&&(i[5]||i[6]))break;if(C%3&&!((C+m)%3)){y+=m;continue}}if(f-=m,f>0)continue;m=Math.min(m,m+f+y);let N=[...i[0]][0].length,F=e.slice(0,p+i.index+N+m);if(Math.min(p,m)%2){let X=F.slice(1,-1);return{type:`em`,raw:F,text:X,tokens:this.lexer.inlineTokens(X)}}let K=F.slice(2,-2);return{type:`strong`,raw:F,text:K,tokens:this.lexer.inlineTokens(K)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal,` `),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:`codespan`,raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!n||this.rules.inline.punctuation.exec(n))){let r=[...i[0]].length-1,a,o,s=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+r);(i=c.exec(t))!==null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a||(o=[...a].length,o!==r))continue;if(i[3]||i[4]){s+=o;continue}if(s-=o,s>0)continue;o=Math.min(o,o+s);let l=[...i[0]][0].length,d=e.slice(0,r+i.index+l+o),u=d.slice(r,-r);return{type:`del`,raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]===`@`?(n=t[1],i=`mailto:`+n):(n=t[1],i=n),{type:`link`,raw:t[0],text:n,href:i,autolink:!0,tokens:[{type:`text`,raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]===`@`)n=t[0],i=`mailto:`+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);n=t[0],t[1]===`www.`?i=`http://`+t[0]:i=t[0]}return{type:`link`,raw:t[0],text:n,href:i,autolink:!0,tokens:[{type:`text`,raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:n?t[0]:Ng(t[0]),escaped:n}}}};var dt=class Oo{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||dn,this.options.tokenizer=this.options.tokenizer||new In,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:Ne,block:aa.normal,inline:vi.normal};this.options.pedantic?(n.block=aa.pedantic,n.inline=vi.pedantic):this.options.gfm&&(n.block=aa.gfm,this.options.breaks?n.inline=vi.breaks:n.inline=vi.gfm),this.tokenizer.rules=n}static get rules(){return{block:aa,inline:vi}}static lex(t,n){return new Oo(n).lex(t)}static lexInline(t,n){return new Oo(n).inlineTokens(t)}lex(t){t=t.replace(Ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.state.inRawBlock=!1,this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(Ne.tabCharGlobal,`    `).replace(Ne.spaceLine,``));let r=1/0;for(;t;){if(t.length<r)r=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let a;if(this.options.extensions?.block?.some(s=>(a=s.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let s=n.at(-1);a.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let s=n.at(-1);s?.type===`paragraph`||s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.at(-1).src=s.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let s=n.at(-1);s?.type===`paragraph`||s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+a.raw,s.text+=`
`+a.raw,this.inlineQueue.at(-1).src=s.text):(this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title}),n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let s=1/0,c=t.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},c),typeof l==`number`&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let s=n.at(-1);i&&s?.type===`paragraph`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(a),i=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let s=n.at(-1);s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(a);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}linkInText(t){if(!t.includes(`[`))return!1;let n=this.tokenizer.rules.inline.link;for(let i of t.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(i[0])&&t.charAt(i.index-1)!==`!`)return!0;for(let i of t.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let r=i[0],a=r.lastIndexOf(`[`);if(!(r.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,da(r.slice(a+1,-1))))&&!(a>1&&this.linkInText(r.slice(1,a-1))))return!0}return!1}inlineTokens(t,n=[]){this.tokenizer.lexer=this;let i=this.state.linkParenPossible;this.state.linkParenPossible=i&&t.includes(`)`);try{return this.#e(t,n)}finally{this.state.linkParenPossible=i}}#e(t,n){let i=t.includes(`*`)||t.includes(`_`)||t.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==In.prototype.emStrong||this.tokenizer.del!==In.prototype.del?this.#t(t):t,r=!1,a=``,o=1/0;for(;t;){if(t.length<o)o=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}r||(a=``),r=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);let l=n.at(-1);s.type===`text`&&l?.type===`text`?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,i,a)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t,i,a)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),n.push(s);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0,d=t.slice(1),u;this.options.extensions.startInline.forEach(p=>{u=p.call({lexer:this},d),typeof u==`number`&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){t=t.substring(s.raw.length),s.raw.slice(-1)!==`_`&&(a=s.raw.slice(-1)),r=!0;let l=n.at(-1);l?.type===`text`?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return n}#t(t){let n=t;if(this.tokens.links&&t.includes(`[`)){let i=this.tokenizer.rules.inline.reflinkSearch,r=a=>{let o=a.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,da(a.slice(o+1,-1))))return a;if(o>1&&a.charAt(0)!==`!`){let s=a.slice(1,o-1);if(this.linkInText(s))return`[`+s.replace(i,r)+`][`+`a`.repeat(a.length-o-2)+`]`}return`[`+`a`.repeat(a.length-2)+`]`};n=n.replace(i,r)}return n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(i,r,a)=>a?`+`.repeat(i.length):r?r+i.slice(r.length,-r.length).replace(/`/g,`+`)+r:i),n=n.replace(this.tokenizer.rules.inline.blockSkip,(i,r,a)=>{let o=a?a.length:0;return i.slice(0,o)+`[`+`a`.repeat(i.length-o-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n,n}infiniteLoopError(t){let n=`Infinite loop on byte: `+t;if(this.options.silent)console.error(n);else throw new Error(n)}};var _a=class{options;parser;constructor(e){this.options=e||dn}space(e){return``}code({text:e,lang:t,escaped:n}){let i=(t||``).match(Ne.notSpaceStart)?.[0],r=e?e.replace(Ne.endingNewline,``)+`
`:``;return i?`<pre><code class="language-`+Je(i)+`">`+(n?r:Je(r,!0))+`</code></pre>
`:`<pre><code>`+(n?r:Je(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,i=``;for(let o=0;o<e.items.length;o++){let s=e.items[o];i+=this.listitem(s)}let r=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+r+a+`>
`+i+`</`+r+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let i=``;for(let r=0;r<e.rows.length;r++){let a=e.rows[r];n=``;for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Je(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:i,autolink:r}){let a=r?Je(n,!0):this.parser.parseInline(i),o=s_(e);if(o===null)return a;e=Je(o,r);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Je(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=s_(e);if(r===null)return Je(n);e=r;let a=`<img src="${Je(e)}" alt="${Je(n)}"`;return t&&(a+=` title="${Je(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Je(e.text)}};var Jo=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}};var _t=class Ao{options;renderer;textRenderer;constructor(t){this.options=t||dn,this.options.renderer=this.options.renderer||new _a,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Jo,this.textRenderer.parser=this}static parse(t,n){return new Ao(n).parse(t)}static parseInline(t,n){return new Ao(n).parseInline(t)}parse(t){this.renderer.parser=this;let n=``;for(let i=0;i<t.length;i++){let r=t[i];if(this.options.extensions?.renderers?.[r.type]){let o=r,s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(o.type)){n+=s||``;continue}}let a=r;switch(a.type){case`space`:n+=this.renderer.space(a);break;case`hr`:n+=this.renderer.hr(a);break;case`heading`:n+=this.renderer.heading(a);break;case`code`:n+=this.renderer.code(a);break;case`table`:n+=this.renderer.table(a);break;case`blockquote`:n+=this.renderer.blockquote(a);break;case`list`:n+=this.renderer.list(a);break;case`checkbox`:n+=this.renderer.checkbox(a);break;case`html`:n+=this.renderer.html(a);break;case`def`:n+=this.renderer.def(a);break;case`paragraph`:n+=this.renderer.paragraph(a);break;case`text`:n+=this.renderer.text(a);break;default:{let o=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(o),``;throw new Error(o)}}}return n}parseInline(t,n=this.renderer){this.renderer.parser=this;let i=``;for(let r=0;r<t.length;r++){let a=t[r];if(this.options.extensions?.renderers?.[a.type]){let s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(a.type)){i+=s||``;continue}}let o=a;switch(o.type){case`escape`:i+=n.text(o);break;case`html`:i+=n.html(o);break;case`link`:i+=n.link(o);break;case`image`:i+=n.image(o);break;case`checkbox`:i+=n.checkbox(o);break;case`strong`:i+=n.strong(o);break;case`em`:i+=n.em(o);break;case`codespan`:i+=n.codespan(o);break;case`br`:i+=n.br(o);break;case`del`:i+=n.del(o);break;case`text`:i+=n.text(o);break;default:{let s=`Token with "`+o.type+`" type was not found.`;if(this.options.silent)return console.error(s),``;throw new Error(s)}}}return i}};var Ti=class{options;block;constructor(e){this.options=e||dn}static passThroughHooks=/* @__PURE__ */ new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=/* @__PURE__ */ new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?dt.lex:dt.lexInline}provideParser(e=this.block){return e?_t.parse:_t.parseInline}};function nn(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var Mg=class{defaults=qo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_t;Renderer=_a;TextRenderer=Jo;Lexer=dt;Tokenizer=In;Hooks=Ti;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let i of e)switch(nn(n,t.call(this,i)),i.type){case`table`:{let r=i;for(let a of r.header)nn(n,this.walkTokens(a.tokens,t));for(let a of r.rows)for(let o of a)nn(n,this.walkTokens(o.tokens,t));break}case`list`:{let r=i;nn(n,this.walkTokens(r.items,t));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let o=r[a].flat(1/0);nn(n,this.walkTokens(o,t))}):r.tokens&&nn(n,this.walkTokens(r.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let i=U({},n);if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error(`extension name required`);if(`renderer`in r){let a=t.renderers[r.name];a?t.renderers[r.name]=function(...o){let s=r.renderer.apply(this,o);return s===!1&&(s=a.apply(this,o)),s}:t.renderers[r.name]=r.renderer}if(`tokenizer`in r){if(!r.level||r.level!==`block`&&r.level!==`inline`)throw new Error(`extension level must be 'block' or 'inline'`);let a=t[r.level];a?a.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level===`block`?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level===`inline`&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}`childTokens`in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),n.renderer){let r=this.defaults.renderer||new _a(this.defaults);for(let a in n.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if([`options`,`parser`].includes(a))continue;let o=a,s=n.renderer[o],c=r[o];r[o]=(...l)=>{let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d||``}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new In(this.defaults);for(let a in n.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if([`options`,`rules`,`lexer`].includes(a))continue;let o=a,s=n.tokenizer[o],c=r[o];r[o]=(...l)=>{let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new Ti;for(let a in n.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if([`options`,`block`].includes(a))continue;let o=a,s=n.hooks[o],c=r[o];Ti.passThroughHooks.has(a)?r[o]=l=>{if(r.options.async&&Ti.passThroughHooksRespectAsync.has(a))return es$1(this,null,function*(){let u=yield s.call(r,l);return c.call(r,u)});let d=s.call(r,l);return c.call(r,d)}:r[o]=(...l)=>{if(r.options.async)return es$1(this,null,function*(){let u=yield s.apply(r,l);return u===!1&&(u=yield c.apply(r,l)),u});let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,a=n.walkTokens;i.walkTokens=function(o){let s=[];return s.push(a.call(this,o)),r&&nn(s,r.call(this,o)),s}}this.defaults=U(U({},this.defaults),i)}),this}setOptions(e){return this.defaults=U(U({},this.defaults),e),this}lexer(e,t){return dt.lex(e,t??this.defaults)}parser(e,t){return _t.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let i=U({},n),r=U(U({},this.defaults),i),a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return a(/* @__PURE__ */ new Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(/* @__PURE__ */ new Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(/* @__PURE__ */ new Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(r.hooks&&(r.hooks.options=r,r.hooks.block=e),r.async)return es$1(this,null,function*(){let o=r.hooks?yield r.hooks.preprocess(t):t,s=yield(r.hooks?yield r.hooks.provideLexer(e):e?dt.lex:dt.lexInline)(o,r),c=r.hooks?yield r.hooks.processAllTokens(s):s;r.walkTokens&&(yield Promise.all(this.walkTokens(c,r.walkTokens)));let l=yield(r.hooks?yield r.hooks.provideParser(e):e?_t.parse:_t.parseInline)(c,r);return r.hooks?yield r.hooks.postprocess(l):l}).catch(a);try{r.hooks&&(t=r.hooks.preprocess(t));let o=(r.hooks?r.hooks.provideLexer(e):e?dt.lex:dt.lexInline)(t,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let s=(r.hooks?r.hooks.provideParser(e):e?_t.parse:_t.parseInline)(o,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(o){return a(o)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i=`<p>An error occurred:</p><pre>`+Je(n.message+``,!0)+`</pre>`;return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}}};var sn=new Mg;function pe(e,t){return sn.parse(e,t)}pe.options=pe.setOptions=function(e){return sn.setOptions(e),pe.defaults=sn.defaults,U_(pe.defaults),pe};pe.getDefaults=qo;pe.defaults=dn;function Rg(...e){return sn.use(...e),pe.defaults=sn.defaults,U_(pe.defaults),pe}pe.use=Rg;pe.walkTokens=function(e,t){return sn.walkTokens(e,t)};pe.parseInline=sn.parseInline;pe.Parser=_t;pe.parser=_t.parse;pe.Renderer=_a;pe.TextRenderer=Jo;pe.Lexer=dt;pe.lexer=dt.lex;pe.Tokenizer=In;pe.Hooks=Ti;pe.parse=pe;pe.options;pe.setOptions;pe.walkTokens;pe.parseInline;_t.parse;dt.lex;var X_=[`get`,`put`,`post`,`delete`,`options`,`head`,`patch`,`trace`,`query`];var Lg=[`$request.header`,`$request.query`,`$request.path`,`$request.body`,`$response.header`,`$response.query`,`$response.path`,`$response.body`,`$message.header`,`$message.payload`,`$message.body`,`$sourceDescriptions`,`$components`,`$workflows`,`$outputs`,`$inputs`,`$steps`,`$statusCode`,`$method`,`$url`];var Mi={locale:`en`,searchPlaceholder:`Search endpoints...`,copy:`Copy`,copied:`Copied!`,tryItOut:`Try It Out`,execute:`Execute`,response:`Response`,status:`Status`,loading:`Loading...`,error:`Error`,settings:`Settings`,darkMode:`Dark Mode`,language:`Language`,includeImports:`Include Imports`,includeWrapping:`Include Wrapping`,paths:`Paths`,schemas:`Schemas`,parameters:`Parameters`,requestBody:`Request Body (JSON)`,noExampleFor:`No example for`,arrayOf:`Array of:`,tableHeaderProperty:`Property`,tableHeaderType:`Type`,tableHeaderDescription:`Description`,tableHeaderName:`Name`,tableHeaderIn:`In`,termsOfService:`Terms of Service`,contactPrefix:`Contact: `,apiSupport:`API Support`,appearanceHeading:`Appearance`,tocNavLabel:`Table of Contents`,tabCurl:`cURL`,tabSdk:`SDK`,workflowsHeading:`Workflows`,sourceDescriptionsHeading:`Source Descriptions`,workflowInputsHeading:`Workflow Inputs`,workflowOutputsHeading:`Workflow Outputs`,workflowDependsOnHeading:`Prerequisites (dependsOn)`,stepsHeading:`Workflow Steps`,stepParametersHeading:`Step Parameters`,stepRequestBodyHeading:`Step Request Body & Replacements`,successCriteriaHeading:`Success Criteria`,onSuccessHeading:`On Success Actions`,onFailureHeading:`On Failure Actions`,stepOutputsHeading:`Step Outputs`,runWorkflowBtn:`Run Workflow`,arazzoComponentsHeading:`Arazzo Components`,webhooksHeading:`Webhooks`};var re=Symbol(`NOT_RESOLVED`);function Ue(e,t){return{tagName:e,nodeKind:`scalar`,implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function es(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(i=>i),carrierIsResult:n,identify:t.identify,represent:t.represent??(i=>i),representTagName:t.representTagName??(()=>e)}}function fa(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(i=>i),carrierIsResult:n,identify:t.identify,represent:t.represent??(i=>i),representTagName:t.representTagName??(()=>e)}}var $g=Ue(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`});var Dg=[``,`~`,`null`,`Null`,`NULL`];var Ug=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Dg.indexOf(e)!==-1?null:re,identify:e=>e===null,represent:()=>`null`});var zg=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,t)=>e===`null`||t&&e===``?null:re,identify:e=>e===null,represent:()=>`null`});var Bg=[``,`~`,`null`,`Null`,`NULL`];var Gg=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Bg.indexOf(e)!==-1?null:re,identify:e=>e===null,represent:()=>`null`});var Fg=[`true`,`True`,`TRUE`];var Wg=[`false`,`False`,`FALSE`];var Vg=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>Fg.indexOf(e)!==-1?!0:Wg.indexOf(e)!==-1?!1:re,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Hg=[`true`];var qg=[`false`];var Xg=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>Hg.indexOf(e)!==-1?!0:qg.indexOf(e)!==-1?!1:re,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var jg=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`];var Kg=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`];var Yg=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>jg.indexOf(e)!==-1?!0:Kg.indexOf(e)!==-1?!1:re,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Qg=/* @__PURE__ */ new RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);var Zg=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Jg(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function eb(e,t){if(t){if(!Zg.test(e))return re}else if(!Qg.test(e))return re;let n=Jg(e);return Number.isFinite(n)?n:re}var j_=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:eb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var tb=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)$`);var nb=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function ib(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function rb(e,t){if(t){if(!nb.test(e))return re}else if(!tb.test(e))return re;let n=ib(e);return Number.isFinite(n)?n:re}var ab=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:rb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var ob=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function sb(e){let t=e.replace(/_/g,``),n=1;if((t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`))return n*parseInt(t.slice(2),2);if(t.startsWith(`0x`))return n*parseInt(t.slice(2),16);if(t.includes(`:`)){let i=0;for(let r of t.split(`:`))i=i*60+Number(r);return n*i}return t!==`0`&&t[0]===`0`?n*parseInt(t,8):n*parseInt(t,10)}function cb(e){if(!ob.test(e))return re;let t=sb(e);return Number.isFinite(t)?t:re}var wo=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:cb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var lb=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var db=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function _b(e){if(!lb.test(e))return re;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===`.nan`)return NaN;let i=n*parseFloat(t);return Number.isFinite(i)||db.test(e)?i:re}function pb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var K_=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:_b,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:pb});var ub=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`);var mb=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function fb(e,t){if(t){if(!mb.test(e))return re;let i=e.toLowerCase(),r=i[0]===`-`?-1:1;if(`+-`.includes(i[0])&&(i=i.slice(1)),i===`.inf`)return r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===`.nan`)return NaN;let a=r*parseFloat(i);return Number.isFinite(a)?a:re}if(!ub.test(e))return re;let n=Number(e);return Number.isFinite(n)?n:re}function hb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var gb=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:fb,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:hb});var bb=/* @__PURE__ */ new RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var yb=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Eb(e){if(!bb.test(e))return re;let t=e.toLowerCase().replace(/_/g,``),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===`.nan`)return NaN;let i=0;if(t.includes(`:`)){for(let r of t.split(`:`))i=i*60+Number(r);i*=n}else i=n*parseFloat(t);return Number.isFinite(i)||yb.test(e)?i:re}function Sb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Po=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Eb,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Sb});var vb=Ue(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,t)=>e===`<<`||t&&e===``?`<<`:re,identify:()=>!1});var xb=/^[A-Za-z0-9+/]*={0,2}$/;function kb(e){let t=e.replace(/\s/g,``);if(t.length%4!==0||!xb.test(t))return re;let n=atob(t),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}function Cb(e){let t=``;for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var Tb=Ue(`tag:yaml.org,2002:binary`,{resolve:kb,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:Cb});var Ob=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`);var Ab=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function u_(e,t,n,i=0,r=0,a=0,o=0){let s=new Date(Date.UTC(e,t,n,i,r,a,o));return s.setUTCFullYear(e,t,n),s}function wb(e){let t=Ob.exec(e);if(t===null&&(t=Ab.exec(e)),t===null)return re;let n=+t[1],i=+t[2]-1,r=+t[3];if(!t[4]){let d=u_(n,i,r);return d.getUTCFullYear()!==n||d.getUTCMonth()!==i||d.getUTCDate()!==r?re:d}let a=+t[4],o=+t[5],s=+t[6],c=0;if(a>23||o>59||s>59)return re;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+=`0`;c=+d}let l=u_(n,i,r,a,o,s,c);if(l.getUTCFullYear()!==n||l.getUTCMonth()!==i||l.getUTCDate()!==r)return re;if(t[9]){let d=+t[10],u=+(t[11]||0);if(d>23||u>59)return re;let p=(d*60+u)*6e4;l.setTime(l.getTime()-(t[9]===`-`?-p:p))}return l}var Pb=Ue(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:wb,identify:e=>e instanceof Date,represent:e=>e.toISOString()});var Nb=es(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function ha(e){if(e===null||typeof e!=`object`||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function m_(e,t){let n={};for(let i of t)e[i]!==void 0&&(n[i]=e[i]);return n}var Ib=es(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:/* @__PURE__ */ new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return`cannot resolve an ordered map item`;n=t.keys().next().value}else if(ha(t)){let i=Object.keys(t);if(i.length!==1)return`cannot resolve an ordered map item`;n=i[0]}else return`cannot resolve an ordered map item`;return e.seen.has(n)?`duplicate key in ordered map`:(e.seen.add(n),e.list.push(t),``)},finalize:e=>e.list,identify:()=>!1});var Mb=es(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?`cannot resolve a pairs item`:(e.push(t.entries().next().value),``);if(Object.prototype.toString.call(t)!==`[object Object]`)return`cannot resolve a pairs item`;let n=t,i=Object.keys(n);return i.length!==1?`cannot resolve a pairs item`:(e.push([i[0],n[i[0]]]),``)},identify:()=>!1});var Rb=fa(`tag:yaml.org,2002:map`,{create:()=>({}),identify:ha,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t==`object`)return`object-based map does not support complex keys`;let i=String(t);return i===`__proto__`?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,``},has:(e,t)=>t!==null&&typeof t==`object`?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var Lb=fa(`tag:yaml.org,2002:set`,{create:()=>/* @__PURE__ */ new Set,identify:e=>e instanceof Set,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?`cannot resolve a set item`:(e.add(t),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function $b(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function Db(){return{scalar:[],sequence:[],mapping:[]}}function Ub(e){let t=[];for(let n of e){let i=t.length;for(let r=0;r<t.length;r++){let a=t[r];if(a.nodeKind===n.nodeKind&&a.tagName===n.tagName&&a.matchByTagPrefix===n.matchByTagPrefix){i=r;break}}t[i]=n}return t}var ga=class Y_{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(t){let n=Ub(t),i=[],r=$b(),a=Db();for(let d of n){if(d.nodeKind===`scalar`&&d.implicit){if(d.matchByTagPrefix)throw new Error(`Implicit scalar tags cannot match by tag prefix`);i.push(d)}switch(d.nodeKind){case`scalar`:d.matchByTagPrefix?a.scalar.push(d):r.scalar[d.tagName]=d;break;case`sequence`:d.matchByTagPrefix?a.sequence.push(d):r.sequence[d.tagName]=d;break;case`mapping`:d.matchByTagPrefix?a.mapping.push(d):r.mapping[d.tagName]=d}}let o=i.filter(d=>d.implicitFirstChars===null),s=/* @__PURE__ */ new Set;for(let d of i)if(d.implicitFirstChars!==null)for(let u of d.implicitFirstChars)s.add(u);let c=/* @__PURE__ */ new Map;for(let d of s)c.set(d,i.filter(u=>u.implicitFirstChars===null||u.implicitFirstChars.indexOf(d)!==-1));let l=r.scalar[`tag:yaml.org,2002:str`];if(!l)throw new Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=n,this.implicitScalarTags=i,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=o,this.defaultScalarTag=l,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=a}lookupScalarTag(t){let n=this.exact.scalar[t];if(n)return n;for(let i of this.prefix.scalar)if(t.startsWith(i.tagName))return i}lookupSequenceTag(t){let n=this.exact.sequence[t];if(n)return n;for(let i of this.prefix.sequence)if(t.startsWith(i.tagName))return i}lookupMappingTag(t){let n=this.exact.mapping[t];if(n)return n;for(let i of this.prefix.mapping)if(t.startsWith(i.tagName))return i}resolveImplicitScalarTag(t){let n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(let r of n){let a=r.resolve(t,!1,r.tagName);if(a!==re)return{value:a,tag:r}}let i=this.defaultScalarTag;return{value:i.resolve(t,!1,i.tagName),tag:i}}withTags(...t){let n=[];for(let i of t)n=n.concat(i);return new Y_([...this.tags,...n])}};var ts=new ga([$g,Nb,Rb]);new ga([...ts.tags,zg,Xg,ab,gb]);var zb=new ga([...ts.tags,Ug,Vg,j_,K_]);var Gb=new ga([...ts.tags,Gg,Yg,wo,Po,Pb,vb,Tb,Ib,Mb,Lb]).withTags(W(U({},wo),{resolve:(e,t,n)=>{let i=wo.resolve(e,t,n);return i===re?j_.resolve(e,t,n):i}}),W(U({},Po),{resolve:(e,t,n)=>{let i=Po.resolve(e,t,n);return i===re?K_.resolve(e,t,n):i}}));fa(`tag:yaml.org,2002:map`,{create:()=>/* @__PURE__ */ new Map,addPair:(e,t,n)=>(e.set(t,n),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||ha(e),represent:e=>{if(e instanceof Map)return e;let t=/* @__PURE__ */ new Map,n=e;for(let i of Object.keys(n))t.set(i,n[i]);return t}});function f_(e){if(Array.isArray(e)){let t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]==`object`&&Object.prototype.toString.call(t[n])===`[object Object]`&&(t[n]=`[object Object]`)}return String(t)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}fa(`tag:yaml.org,2002:map`,{create:()=>({}),identify:ha,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{let i=f_(t);return i===null?`nested arrays are not supported inside keys`:(i===`__proto__`?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,``)},has:(e,t)=>{let n=f_(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var Fb={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function go(e,t,n,i,r){let a=``,o=``,s=Math.floor(r/2)-1;return i-t>s&&(a=` ... `,t=i-s+a.length),n-i>s&&(o=` ...`,n=i+s-o.length),{str:a+e.slice(t,n).replace(/\t/g,`→`)+o,pos:i-t+a.length}}function bo(e,t){return` `.repeat(Math.max(t-e.length,0))+e}function Wb(e,t){if(!e.buffer)return null;let n=U(U({},Fb),t),i=/\r?\n|\r|\0/g,r=[0],a=[],o,s=-1;for(;o=i.exec(e.buffer);)a.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);let c=``,l=Math.min(e.line+n.linesAfter,a.length).toString().length,d=n.maxLength-(n.indent+l+3);for(let p=1;p<=n.linesBefore&&!(s-p<0);p++){let _=go(e.buffer,r[s-p],a[s-p],e.position-(r[s]-r[s-p]),d);c=`${` `.repeat(n.indent)}${bo((e.line-p+1).toString(),l)} | ${_.str}
${c}`}let u=go(e.buffer,r[s],a[s],e.position,d);c+=`${` `.repeat(n.indent)}${bo((e.line+1).toString(),l)} | ${u.str}
`,c+=`${`-`.repeat(n.indent+l+3+u.pos)}^
`;for(let p=1;p<=n.linesAfter&&!(s+p>=a.length);p++){let _=go(e.buffer,r[s+p],a[s+p],e.position-(r[s]-r[s+p]),d);c+=`${` `.repeat(n.indent)}${bo((e.line+p+1).toString(),l)} | ${_.str}
`}return c.replace(/\n$/,``)}function h_(e,t){let n=``;return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var cn=class Q_ extends Error{reason;mark;constructor(t,n){super(),this.name=`YAMLException`,this.reason=t,this.mark=n,this.message=h_(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(t){return`${this.name}: ${h_(this,t)}`}static throwAt(t,n,i,r=``){let a=0,o=0;for(let c=0;c<n;c++){let l=t.charCodeAt(c);l===10?(a++,o=c+1):l===13&&(a++,t.charCodeAt(c+1)===10&&c++,o=c+1)}let s={name:r,buffer:t,position:n,line:a,column:n-o};throw s.snippet=Wb(s),new Q_(i,s)}};var Se={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6};var ee={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5};var Gt={BLOCK:1,FLOW:2};var et={CLIP:1,STRIP:2,KEEP:3};var Vb=-1;function g_(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var Z_=new Array(256);var J_=new Array(256);for(let e=0;e<256;e++)Z_[e]=g_(e)?1:0,J_[e]=g_(e);function Hb(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function qb(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function Xb(e){return e===120?2:e===117?4:8}function pa(e,t,n){let i=0;for(;t<n;){let r=e.charCodeAt(t);if(r===10)i++,t++;else if(r===13)i++,t++,e.charCodeAt(t)===10&&t++;else if(r===32||r===9)t++;else break}return{position:t,breaks:i}}function ns(e){return e===1?` `:`
`.repeat(e-1)}function jb(e,t,n){let i=``,r=t,a=t,o=t;for(;r<n;){let s=e.charCodeAt(r);if(s===10||s===13){i+=e.slice(a,o);let c=pa(e,r,n);i+=ns(c.breaks),r=a=o=c.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,o)}function Kb(e,t,n){let i=``,r=t,a=t,o=t;for(;r<n;){let s=e.charCodeAt(r);if(s===39)i+=e.slice(a,r)+`'`,r+=2,a=o=r;else if(s===10||s===13){i+=e.slice(a,o);let c=pa(e,r,n);i+=ns(c.breaks),r=a=o=c.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,n)}function Yb(e,t,n){let i=``,r=t,a=t,o=t;for(;r<n;){let s=e.charCodeAt(r);if(s===92){i+=e.slice(a,r),r++;let c=e.charCodeAt(r);if(c===10||c===13)r=pa(e,r,n).position;else if(c<256&&Z_[c])i+=J_[c],r++;else{let l=Xb(c),d=0;for(;l>0;l--){r++;let u=qb(e.charCodeAt(r));d=(d<<4)+u}i+=Hb(d),r++}a=o=r}else if(s===10||s===13){i+=e.slice(a,o);let c=pa(e,r,n);i+=ns(c.breaks),r=a=o=c.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,n)}function b_(e,t,n,i,r,a){let o=i<0?0:i,s=e.slice(t,n).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),l=``,d=!1,u=0,p=!1;for(let _ of c){let m=0;for(;m<o&&_.charCodeAt(m)===32;)m++;if(i<0||m>=_.length){u++;continue}let f=_.slice(o),y=f.charCodeAt(0);a?y===32||y===9?(p=!0,l+=`
`.repeat(d?1+u:u)):p?(p=!1,l+=`
`.repeat(u+1)):u===0?d&&(l+=` `):l+=`
`.repeat(u):l+=`
`.repeat(d?1+u:u),l+=f,d=!0,u=0}return r===et.KEEP?l+=`
`.repeat(d?1+u:u):r!==et.STRIP&&d&&(l+=`
`),l}function Qb(e,t){if(t.valueStart===Vb)return``;let{valueStart:n,valueEnd:i}=t;if(t.fast)return e.slice(n,i);switch(t.style){case ee.SINGLE_QUOTED:return Kb(e,n,i);case ee.DOUBLE_QUOTED:return Yb(e,n,i);case ee.LITERAL_BLOCK:return b_(e,n,i,t.indent,t.chomping,!1);case ee.FOLDED_BLOCK:return b_(e,n,i,t.indent,t.chomping,!0);default:return jb(e,n,i)}}var Zb=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});function yo(e){let t=``,n=0;for(;n<e.length;){if(e.charCodeAt(n)!==37){t+=e[n++];continue}let i=parseInt(e.slice(n+1,n+3),16);if(n+=3,i>=192){let r=i<224?1:i<240?2:3;for(i&=(1<<6-r)-1;r-->0;)i=i<<6|parseInt(e.slice(n+1,n+3),16)&63,n+=3}i<65536?t+=String.fromCharCode(i):(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023))}return t}function ep(e,t){if(e.startsWith(`!<`)&&e.endsWith(`>`))return yo(e.slice(2,-1));let n=e.indexOf(`!`,1),i=n===-1?`!`:e.slice(0,n+1);return yo(t?.[i]??Zb[i]??i)+yo(e.slice(i.length))}var Mn=-1;var e0=`tag:yaml.org,2002:merge`;var is={filename:``,schema:zb,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function t0(e){return`tagStart`in e&&e.tagStart!==Mn?e.tagStart:`anchorStart`in e&&e.anchorStart!==Mn?e.anchorStart:`valueStart`in e&&e.valueStart!==Mn?e.valueStart:`start`in e?e.start:0}function Me(e,t){cn.throwAt(e.source,e.position,t,e.filename)}function tp(e,t,n,i){try{return n.finalize(i)}catch(r){if(r instanceof cn)throw r;cn.throwAt(e.source,t,r instanceof Error?r.message:String(r),e.filename)}}function n0(e,t){let n=Qb(e.source,t),i=t.tagStart===Mn?``:e.source.slice(t.tagStart,t.tagEnd),r=e.schema.defaultScalarTag;if(i!==``){if(i===`!`)return{value:n,tag:r};let a=ep(i,e.tagHandlers),o=e.schema.lookupScalarTag(a);if(o){let c=o.resolve(n,!0,a);return c===re&&Me(e,`cannot resolve a node with !<${a}> explicit tag`),{value:c,tag:o}}let s=e.schema.lookupMappingTag(a)??e.schema.lookupSequenceTag(a);if(s){n!==``&&Me(e,`cannot resolve a node with !<${a}> explicit tag`);let c=s.create(a);return{value:s.carrierIsResult?c:tp(e,e.position,s,c),tag:s}}Me(e,`unknown scalar tag !<${a}>`)}return t.style===ee.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:r.resolve(n,!1,r.tagName),tag:r}}function y_(e,t,n){let i=t.tagStart===Mn?``:e.source.slice(t.tagStart,t.tagEnd);return i===``||i===`!`?n:ep(i,e.tagHandlers)}function np(e){return e.nodeKind===`mapping`}function E_(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Me(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function S_(e,t,n,i){E_(e);for(let r of i.keys(n)){if(E_(e),t.tag.has(t.value,r))continue;let a=t.tag.addPair(t.value,r,i.get(n,r));a&&Me(e,a),t.overridable??=/* @__PURE__ */ new Set,t.overridable.add(r)}}function i0(e,t,n,i){if(e.position=t.keyPosition,np(i))S_(e,t,n,i);else if(i.nodeKind===`sequence`&&Array.isArray(n)){n.length>100&&Me(e,`abnormal merge sequence size`);for(let r of n){let a=e.nodeTags.get(r);a||Me(e,`cannot merge mappings; the provided source object is unacceptable`),S_(e,t,r,a)}}else Me(e,`cannot merge mappings; the provided source object is unacceptable`)}function r0(e,t,n,i,r){if(e.position=t.keyPosition,t.keyIsMerge){i0(e,t,i,r);return}!e.json&&t.tag.has(t.value,n)&&!t.overridable?.has(n)&&Me(e,`duplicated mapping key`);let a=t.tag.addPair(t.value,n,i);a&&Me(e,a),t.overridable?.delete(n)}function Eo(e,t,n){let i=e.frames[e.frames.length-1];if(i.kind===`document`)i.value=t,i.hasValue=!0;else if(i.kind===`sequence`){np(n)&&e.nodeTags.set(t,n);let r=i.tag.addItem(i.value,t,i.index++);r&&Me(e,r)}else if(i.hasKey){let r=i.key;i.key=void 0,i.hasKey=!1,r0(e,i,r,t,n)}else i.key=t,i.keyPosition=e.position,i.hasKey=!0,i.keyIsMerge=n.tagName===e0}function So(e,t,n,i,r){if(t.anchorStart!==Mn){let a={value:n,tag:i,isValueFinal:r};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function a0(e,t){let n=W(U(U({},is),t),{events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:/* @__PURE__ */ new Map,nodeTags:/* @__PURE__ */ new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0});for(;n.eventIndex<n.events.length;){let i=n.events[n.eventIndex++];switch(n.position=t0(i),i.type){case Se.DOCUMENT:n.anchors=/* @__PURE__ */ new Map,n.nodeTags=/* @__PURE__ */ new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(let r of i.directives)r.kind===`tag`&&(n.tagHandlers[r.handle]=r.prefix);n.frames.push({kind:`document`,position:n.position,value:void 0,hasValue:!1});break;case Se.SCALAR:{let{value:r,tag:a}=n0(n,i);So(n,i,r,a,!0),Eo(n,r,a);break}case Se.SEQUENCE:{let r=y_(n,i,`tag:yaml.org,2002:seq`),a=n.schema.lookupSequenceTag(r);a||Me(n,`unknown sequence tag !<${r}>`);let o=a.create(r),s=So(n,i,o,a,a.carrierIsResult);n.frames.push({kind:`sequence`,position:n.position,value:o,tag:a,anchor:s,index:0});break}case Se.MAPPING:{let r=y_(n,i,`tag:yaml.org,2002:map`),a=n.schema.lookupMappingTag(r);a||Me(n,`unknown mapping tag !<${r}>`);let o=a.create(r),s=So(n,i,o,a,a.carrierIsResult);n.frames.push({kind:`mapping`,position:n.position,value:o,tag:a,anchor:s,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Se.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&Me(n,`aliases exceeded maxAliases (${n.maxAliases})`);let r=n.source.slice(i.anchorStart,i.anchorEnd),a=n.anchors.get(r);a||Me(n,`unidentified alias "${r}"`),a.isValueFinal||Me(n,`recursive alias "${r}" is not supported for tag ${a.tag.tagName} because it uses finalize()`),Eo(n,a.value,a.tag);break}case Se.POP:{let r=n.frames.pop();if(r.kind===`mapping`&&r.hasKey&&(n.position=r.keyPosition,Me(n,`incomplete mapping pair in event stream`)),r.kind===`document`)n.documents.push(r.value);else{let a=r.tag.carrierIsResult?r.value:tp(n,r.position,r.tag,r.value);r.anchor&&(r.anchor.value=a,r.anchor.isValueFinal=!0),Eo(n,a,r.tag)}break}}}return n.documents}var se=-1;var ip=Object.prototype.hasOwnProperty;var Dn=1;var rp=2;var ap=3;var ua=4;var o0=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var s0=/[,\[\]{}]/;var op=/^(?:!|!!|![0-9A-Za-z-]+!)$/;var No=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`;var sp=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;var c0=new RegExp(`^(?:${No})*$`);var l0=new RegExp(`^(?:${sp})+$`);var d0=new RegExp(`^(?:!(?:${No})*|${sp}(?:${No})*)$`);var rs={filename:``,maxDepth:100};function _0(e,t,n){e.events.push({type:Se.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function cp(e,t,n,i,r,a,o){e.events.push({type:Se.SEQUENCE,start:t,anchorStart:n,anchorEnd:i,tagStart:r,tagEnd:a,style:o})}function lp(e,t,n,i,r,a,o){e.events.push({type:Se.MAPPING,start:t,anchorStart:n,anchorEnd:i,tagStart:r,tagEnd:a,style:o})}function v_(e,t){e.events.splice(t.eventsLength,0,{type:Se.MAPPING,start:t.position,anchorStart:se,anchorEnd:se,tagStart:se,tagEnd:se,style:Gt.FLOW})}function Gn(e,t,n,i,r,a,o,s,c=et.CLIP,l=-1,d=!1){e.events.push({type:Se.SCALAR,valueStart:t,valueEnd:n,anchorStart:i,anchorEnd:r,tagStart:a,tagEnd:o,style:s,chomping:c,indent:l,fast:d})}function p0(e,t,n){e.events.push({type:Se.ALIAS,anchorStart:t,anchorEnd:n})}function Rn(e){e.events.push({type:Se.POP})}function Ge(e){Gn(e,se,se,se,se,se,se,ee.PLAIN)}function x_(){return{anchorStart:se,anchorEnd:se,tagStart:se,tagEnd:se}}function Ln(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function $n(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function G(e,t){cn.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Pe(e){return e===10||e===13}function Fn(e){return e===9||e===32}function ut(e){return Fn(e)||Pe(e)}function Ct(e){return e===0||ut(e)}function ln(e){return e===44||e===91||e===93||e===123||e===125}function u0(e){return e>=48&&e<=57?e-48:-1}function m0(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function f0(e){return e===120?2:e===117?4:e===85?8:0}function h0(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function ma(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function $e(e,t){let n=0,i=e.input.charCodeAt(e.position),r=e.position===e.lineStart||ut(e.input.charCodeAt(e.position-1));for(;i!==0;){for(;Fn(i);)r=!0,i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&r&&i===35)do i=e.input.charCodeAt(++e.position);while(!Pe(i)&&i!==0);if(!Pe(i))break;for(ma(e),n++,r=!0,i=e.input.charCodeAt(e.position);i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return n}function Un(e,t=e.position){let n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){let i=e.input.charCodeAt(t+3);return i===0||ut(i)}return!1}function dp(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function as(e){if(e.position!==e.lineStart)return!1;if(Un(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;let t=Ln(e);dp(e),$e(e,!0);let n=e.input.charCodeAt(e.position),i=e.position===e.lineStart&&(n===37||n===45&&Un(e));return $n(e,t),i}function k_(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Pe(t);)t=e.input.charCodeAt(++e.position)}function _p(e,t,n){let i=o0.exec(e.input.slice(t,n));i!==null&&(e.position=t+i.index+i[0].length-1,G(e,`the stream contains non-printable characters`))}function g0(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==se&&G(e,`duplication of a tag property`);let i=e.position,r=!1,a=!1,o=`!`,s=e.input.charCodeAt(++e.position);s===60?(r=!0,s=e.input.charCodeAt(++e.position)):s===33&&(a=!0,o=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,l;if(r){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&G(e,`unexpected end of the stream within a verbatim tag`),l=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!ut(s)&&!(n&&ln(s));)s===33&&(a?G(e,`tag suffix cannot contain exclamation marks`):(o=e.input.slice(c-1,e.position+1),op.test(o)||G(e,`named tag handle cannot contain such characters`),a=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(c,e.position),s0.test(l)&&G(e,`tag suffix cannot contain flow indicator characters`)}return l&&!(r?c0.test(l):l0.test(l))&&G(e,`tag name cannot contain such characters: ${l}`),!r&&o!==`!`&&o!==`!!`&&!ip.call(e.tagHandlers,o)&&G(e,`undeclared tag handle "${o}"`),t.tagStart=i,t.tagEnd=e.position,!0}function b0(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==se&&G(e,`duplication of an anchor property`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position))&&!ln(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&G(e,`name of an anchor node must contain at least one character`),t.anchorStart=n,t.anchorEnd=e.position,!0}function y0(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==se||t.tagStart!==se)&&G(e,`alias node should not have any properties`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position))&&!ln(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&G(e,`name of an alias node must contain at least one character`),p0(e,n,e.position),!0}function Io(e,t){$e(e,!1),e.lineIndent<t&&G(e,`deficient indentation`)}function E0(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){r=!1,e.position+=2;continue}let o=e.position;return e.position++,Gn(e,i,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,ee.SINGLE_QUOTED,et.CLIP,-1,r),!0}Pe(a)?(r=!1,Io(e,t)):e.position===e.lineStart&&Un(e)?G(e,`unexpected end of the document within a single quoted scalar`):a!==9&&a<32?G(e,`expected valid JSON character`):e.position++}G(e,`unexpected end of the stream within a single quoted scalar`)}function S0(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===34){let o=e.position;return e.position++,Gn(e,i,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,ee.DOUBLE_QUOTED,et.CLIP,-1,r),!0}if(a===92){r=!1;let o=e.input.charCodeAt(++e.position);if(Pe(o))Io(e,t);else if(h0(o))e.position++;else{let s=f0(o);for(s===0&&G(e,`unknown escape sequence`);s-->0;)e.position++,m0(e.input.charCodeAt(e.position))<0&&G(e,`expected hexadecimal character`);e.position++}}else Pe(a)?(r=!1,Io(e,t)):e.position===e.lineStart&&Un(e)?G(e,`unexpected end of the document within a double quoted scalar`):a!==9&&a<32?G(e,`expected valid JSON character`):e.position++}G(e,`unexpected end of the stream within a double quoted scalar`)}function v0(e,t,n){let i=e.input.charCodeAt(e.position),r=et.CLIP,a=-1,o=!1;if(i!==124&&i!==62)return!1;let s=i===124?ee.LITERAL_BLOCK:ee.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let _=e.input.charCodeAt(e.position),m=u0(_);if(_===43||_===45)r!==et.CLIP&&G(e,`repeat of a chomping mode identifier`),r=_===43?et.KEEP:et.STRIP,e.position++;else if(m>=0)m===0&&G(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),o&&G(e,`repeat of an indentation width identifier`),a=t+m-1,o=!0,e.position++;else break}let c=!1;for(;Fn(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&k_(e),Pe(e.input.charCodeAt(e.position))?ma(e):e.input.charCodeAt(e.position)!==0&&G(e,`a line break is expected`);let l=o?a:-1,d=0,u=e.position,p=e.position;for(;e.input.charCodeAt(e.position)!==0;){let _=e.position,m=0;for(;e.input.charCodeAt(_+m)===32;)m++;let f=e.input.charCodeAt(_+m);if(f===0){l>=0?m>l&&(p=_+m):m>0&&(p=_+m);break}if(as(e))break;if(!o&&l===-1&&Pe(f)&&(d=Math.max(d,m)),!o&&l===-1&&!Pe(f)&&(f===9&&m<t&&(e.position=_+m,G(e,`tab characters must not be used in indentation`)),m>=t&&m<d&&(e.position=_+m,G(e,`bad indentation of a mapping entry`))),l===-1&&f!==0&&!Pe(f)&&m<t){e.lineIndent=m,e.position=_+m;break}!o&&f!==0&&!Pe(f)&&l===-1&&(l=m);let y=l===-1?t+1:l;if(f!==0&&!Pe(f)&&m<y){e.lineIndent=m,e.position=_+m;break}k_(e),p=e.position,Pe(e.input.charCodeAt(e.position))&&(ma(e),p=e.position)}return _p(e,u,p),Gn(e,u,p,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,s,r,l),!0}function x0(e,t){let n=e.input.charCodeAt(e.position),i=t===Dn;if(n===0||ut(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||ln(n))return!1;if(n===63||n===45){let r=e.input.charCodeAt(e.position+1);if(Ct(r)||i&&ln(r))return!1}return!0}function k0(e,t,n,i){if(!x0(e,n))return!1;let r=e.position,a=e.position,o=e.input.charCodeAt(e.position),s=n===Dn,c=!1;for(;o!==0&&!as(e);){if(o===58){let l=e.input.charCodeAt(e.position+1);if(Ct(l)||s&&ln(l))break}else if(o===35){if(ut(e.input.charCodeAt(e.position-1)))break}else{if(s&&ln(o))break;if(Pe(o)){let l=e.position,d=e.line,u=e.lineStart,p=e.lineIndent;if($e(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=l,e.line=d,e.lineStart=u,e.lineIndent=p;break}}Fn(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===r?!1:(_p(e,r,a),Gn(e,r,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,ee.PLAIN,et.CLIP,-1,!c),!0)}function xi(e,t){let n=e.line;$e(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&G(e,`deficient indentation`)}function C0(e,t,n){let i=e.input.charCodeAt(e.position),r=i===123,a=e.position,o=!0;if(i!==91&&i!==123)return!1;let s=r?125:93;for(r?lp(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.FLOW):cp(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){xi(e,t);let c=e.input.charCodeAt(e.position);if(c===s)return e.position++,Rn(e),!0;o?c===44&&G(e,`expected the node content, but found ','`):G(e,`missed comma between flow collection entries`);let l=!1,d=!1;c===63&&ut(e.input.charCodeAt(e.position+1))&&(l=d=!0,e.position+=1,xi(e,t));let u=e.line,p=Ln(e),_=zn(e,t,Dn,!1,!0);xi(e,t),c=e.input.charCodeAt(e.position),(r||d||e.line===u)&&c===58?(l=!0,e.position++,xi(e,t),r||v_(e,p),_||Ge(e),zn(e,t,Dn,!1,!0)||Ge(e),xi(e,t),r||Rn(e)):r&&l?(_||Ge(e),Ge(e)):r?Ge(e):l&&(v_(e,p),_||Ge(e),Ge(e),Rn(e)),c=e.input.charCodeAt(e.position),c===44?(o=!0,e.position++):o=!1}G(e,`unexpected end of the stream within a flow collection`)}function C_(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Ct(e.input.charCodeAt(e.position+1)))return!1;for(cp(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.BLOCK);e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,G(e,`tab characters must not be used in indentation`));let i=e.line;e.position++;let r=$e(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1))&&G(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=t?Ge(e):zn(e,t,ap,!1,!0),$e(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&G(e,`bad indentation of a sequence entry`),e.line===i&&e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1))&&G(e,`bad indentation of a sequence entry`)}return Rn(e),!0}function vo(e,t,n,i){let r=!1,a=!1,o=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!r&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,G(e,`tab characters must not be used in indentation`));let l=e.input.charCodeAt(e.position+1),d=e.line;if((c===63||c===58)&&Ct(l))o||(lp(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,Gt.BLOCK),o=!0),c===63?(r&&Ge(e),a=!0,r=!0):(r||(Ge(e),a=!0),r=!1),e.position+=1,s=!0;else{r&&(Ge(e),r=!1);let u=Ln(e);if(!zn(e,n,rp,!1,!0))break;if(e.line===d){for(c=e.input.charCodeAt(e.position);Fn(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Ct(c)||G(e,`a whitespace character is expected after the key-value separator within a block mapping`),o||(e.events.splice(u.eventsLength,0,{type:Se.MAPPING,start:u.position,anchorStart:i.anchorStart,anchorEnd:i.anchorEnd,tagStart:i.tagStart,tagEnd:i.tagEnd,style:Gt.BLOCK}),o=!0),a=!0,r=!1,s=!1;else if(a)G(e,`expected ':' after a mapping key`);else return i.anchorStart!==se||i.tagStart!==se?($n(e,u),!1):!0}else if(a)G(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return i.anchorStart!==se||i.tagStart!==se?($n(e,u),!1):!0}if(zn(e,t,ua,!0,s)&&(s=!1),r||s&&(Ge(e),s=!1),$e(e,!0),c=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&c!==0)G(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return a?(r&&Ge(e),o&&Rn(e),!0):!1}function zn(e,t,n,i,r,a=!0){e.depth>=e.maxDepth&&G(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,s=!1,c=!1,l=null,d=x_(),u=n===ua||n===ap,p=u,_=u;if(i&&$e(e,!0)&&(s=!0,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1),o===1)for(;;){let m=e.input.charCodeAt(e.position),f=Ln(e);if(s&&o!==1&&(m===33||m===38))break;if(s&&_&&(d.tagStart!==se||d.anchorStart!==se)&&(m===33||m===38)){let y=Ln(e),C=t+1;if(vo(e,e.position-e.lineStart,C,d)&&e.events[y.eventsLength]?.type===Se.MAPPING)return e.depth--,!0;$n(e,y)}if(s&&(m===33&&d.tagStart!==se||m===38&&d.anchorStart!==se)||!g0(e,d,n===Dn)&&!b0(e,d))break;l===null&&(l=f),$e(e,!0)?(s=!0,p=_,e.lineIndent>t?o=1:e.lineIndent===t?o=0:o=-1):p=!1}if(p&&(p=s||r),o===1||n===ua){let m=n===Dn||n===rp?t:t+1,f=e.position-e.lineStart;if(o===1)if(p&&(C_(e,f,d)||vo(e,f,m,d))||C0(e,m,d))c=!0;else{let y=e.input.charCodeAt(e.position);if(l!==null&&a&&_&&!p&&y!==124&&y!==62){let C=Ln(e),b=l.position-l.lineStart;$n(e,l),vo(e,b,m,x_())&&e.events[C.eventsLength]?.type===Se.MAPPING?c=!0:$n(e,C)}!c&&(u&&v0(e,m,d)||E0(e,m,d)||S0(e,m,d)||y0(e,d)||k0(e,m,n,d))&&(c=!0)}else o===0&&(c=p&&C_(e,f,d))}return u=u&&!c,!c&&(d.anchorStart!==se||d.tagStart!==se||u)&&(Gn(e,se,se,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,ee.PLAIN),c=!0),e.depth--,c||d.anchorStart!==se||d.tagStart!==se}function T0(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position));)e.position++;let n=e.input.slice(t,e.position),i=[];for(n.length===0&&G(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!Pe(e.input.charCodeAt(e.position));){for(;Fn(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Pe(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let r=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position));)e.position++;i.push(e.input.slice(r,e.position))}if(Pe(e.input.charCodeAt(e.position))&&ma(e),n===`YAML`){e.directives.some(a=>a.kind===`yaml`)&&G(e,`duplication of %YAML directive`),i.length!==1&&G(e,`YAML directive accepts exactly one argument`);let r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]);r===null&&G(e,`ill-formed argument of the YAML directive`),parseInt(r[1],10)!==1&&G(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:i[0]})}else if(n===`TAG`){i.length!==2&&G(e,`TAG directive accepts exactly two arguments`);let[r,a]=i;op.test(r)||G(e,`ill-formed tag handle (first argument) of the TAG directive`),ip.call(e.tagHandlers,r)&&G(e,`there is a previously declared suffix for "${r}" tag handle`),d0.test(a)||G(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[r]=a,e.directives.push({kind:`tag`,handle:r,prefix:a})}return!0}function O0(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for($e(e,!0);T0(e);)t=!0,$e(e,!0);let n=!1,i=!1,r=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Ct(e.input.charCodeAt(e.position+3))){n=!0;let s=e.line;e.position+=3,$e(e,!0),r=e.line>s}else t&&G(e,`directives end mark is expected`);let a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Un(e)){e.position+=3,$e(e,!0);return}if(_0(e,n,!1),zn(e,e.lineIndent-1,ua,!1,r,r)||Ge(e),$e(e,!0),e.position===e.lineStart&&Un(e)&&(i=e.input.charCodeAt(e.position)===46,i)){let s=e.line;e.position+=3,$e(e,!0),e.line===s&&e.position<e.length&&G(e,`end of the stream or a document separator is expected`)}let o=e.events[a];o?.type===Se.DOCUMENT&&(o.explicitEnd=i),Rn(e),!i&&e.position<e.length&&!as(e)&&G(e,`end of the stream or a document separator is expected`)}function A0(e,t){let n=e.length,i=W(U(U({},rs),t),{input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]}),r=e.indexOf(`\0`);for(r!==-1&&cn.throwAt(e,r,`null byte is not allowed in input`,i.filename);i.position<i.length&&(dp(i),$e(i,!0),!(i.position>=i.length));){let a=i.position;O0(i),i.position===a&&G(i,`can not read a document`)}return i.events}var w0=U(U({},rs),is);function P0(e,t={}){let n=U(U({},w0),t),i=String(e),r=Object.keys(rs),a=Object.keys(is);return a0(A0(i,m_(n,r)),W(U({},m_(n,a)),{source:i}))}function pp(e,t){let n=P0(e,t);if(n.length===0)throw new cn(`expected a document, but the input is empty`);if(n.length===1)return n[0];throw new cn(`expected a single document in the stream, but found more`)}function ba(e,t){return(e&1<<t)!==0}var T_={applyQuoteFlowKeysOption:N0,doubleQuoteForInvisibles:I0,doubleQuoteWhitespaceOnly:M0,applyForceQuotesOption:R0,tryLongOrMultilineAsBlock:L0,quoteInvalidPlain:$0,fallbackToDoubleQuoted:D0};function up(e){return e.presenterOptions.quoteStyle===`single`&&ba(e.allowedStylesMask,ee.SINGLE_QUOTED)?ee.SINGLE_QUOTED:ee.DOUBLE_QUOTED}function N0(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==ee.PLAIN||(e.style=ee.DOUBLE_QUOTED))}function I0(e){e.style===ee.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=ee.DOUBLE_QUOTED)}function M0(e){e.style===ee.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=ee.DOUBLE_QUOTED)}function R0(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==ee.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?ee.DOUBLE_QUOTED:up(e)))}function L0(e){if(e.style!==ee.PLAIN||e.isKey)return;let t=e.node.value,n=t.indexOf(`
`)!==-1;if(!ba(e.allowedStylesMask,ee.LITERAL_BLOCK)){n&&(e.style=ee.DOUBLE_QUOTED);return}let i=e.presenterOptions.lineWidth;if(i===-1){n&&(e.style=ee.LITERAL_BLOCK);return}let r=Math.max(Math.min(i,40),i-e.shiftOfContent),a=0,o=!1;for(;a<=t.length;){let s=t.length,c=t.indexOf(`
`,a);c!==-1&&(s=c);let l=t.slice(a,s);if(l.length>r&&l[0]!==` `&&/ [^ \t]/.test(l)&&(o=!0),c===-1)break;a=c+1}o?e.style=ee.FOLDED_BLOCK:n&&(e.style=ee.LITERAL_BLOCK)}function $0(e){e.style===ee.PLAIN&&!ba(e.allowedStylesMask,ee.PLAIN)&&(e.style=up(e))}function D0(e){ba(e.allowedStylesMask,e.style)||(e.style=ee.DOUBLE_QUOTED)}var U0=`[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]`;var z0=`[\\n\\r]`;var B0=`\\uFEFF`;var os=`[ \\t]`;var mp=`(?:(?!(?:${z0}|${B0}))${U0})`;var ya=`(?:(?!${os})${mp})`;var fp=`[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]`;var hp=`[-?:,\\[\\]{}#&*!|>'"%@\`]`;var G0=`[,\\[\\]{}]`;var Mo=ya;var Ro=`(?:(?!${G0})${ya})`;var F0=`(?:(?:(?!${hp})${ya})|[?:-](?=${Mo}))`;var W0=`(?:(?:(?!${hp})${ya})|[?:-](?=${Ro}))`;var gp=`(?:(?:(?![:#])${Mo})|:(?=${Mo}))#*`;var bp=`(?:(?:(?![:#])${Ro})|:(?=${Ro}))#*`;var yp=`(?:${os}*${gp})*`;var Ep=`(?:${os}*${bp})*`;var Sp=`${F0}#*${yp}`;var vp=`${W0}#*${Ep}`;var V0=Sp;var H0=vp;var q0=`\\n+${gp}${yp}`;var X0=`\\n+${bp}${Ep}`;var j0=`${Sp}(?:${q0})*`;var K0=`${vp}(?:${X0})*`;new RegExp(`^(?:${j0})$`,`u`);new RegExp(`^(?:${K0})$`,`u`);new RegExp(`^(?:${V0})$`,`u`);new RegExp(`^(?:${H0})$`,`u`);new RegExp(`^(?:${fp})*$`,`u`);new RegExp(`^(?:${fp}|\\n)*$`,`u`);new RegExp(`^(?:${mp}|\\n)*$`,`u`);var Y0={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:`single`,forceQuotes:!1,scalarStyleRules:Object.keys(T_).map(e=>Reflect.get(T_,e)),tagBeforeAnchor:!1};W(U({},Y0),{schema:Gb,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}});Se.DOCUMENT;Se.SEQUENCE;Se.MAPPING;Se.SCALAR;Se.ALIAS;Se.POP;ee.PLAIN;ee.SINGLE_QUOTED;ee.DOUBLE_QUOTED;ee.LITERAL_BLOCK;ee.FOLDED_BLOCK;Gt.BLOCK;Gt.FLOW;et.CLIP;et.STRIP;et.KEEP;function Lo(e){if(Array.isArray(e)){for(let t of e)Lo(t);return}if(v(e)){typeof e.$ref==`string`&&(e.$ref=e.$ref.replace(`#/definitions/`,`#/components/schemas/`).replace(`#/parameters/`,`#/components/parameters/`).replace(`#/responses/`,`#/components/responses/`).replace(`#/securityDefinitions/`,`#/components/securitySchemes/`));for(let t of Object.keys(e))Lo(e[t])}}function xo(e){if(e.type===`array`&&v(e.items))e.schema={type:`array`,items:e.items,collectionFormat:e.collectionFormat};else if(e.type){let t={type:e.type,format:e.format};e.default!==void 0&&(t.default=e.default),e.enum!==void 0&&(t.enum=e.enum),e.maximum!==void 0&&(t.maximum=e.maximum),e.minimum!==void 0&&(t.minimum=e.minimum),e.schema=t}}function O_(e,t){if(typeof e.$ref!=`string`&&e.schema){let n={};for(let i of t)n[i]={schema:e.schema};e.content=n,delete e.schema}}function Q0(e){if(String(e.swagger)!==`2.0`)return;if(e.openapi=`3.2.0`,e.host||e.basePath||e.schemes){let o=Array.isArray(e.schemes)?e.schemes.map(String):[`https`],s=e.host?String(e.host):`localhost`,c=e.basePath?String(e.basePath):``;e.servers=o.map(l=>({url:`${l}://${s}${c}`}))}let t=v(e.components)?e.components:{};e.components=t;let n=Array.isArray(e.consumes)?e.consumes.map(String):[`application/json`],i=Array.isArray(e.produces)?e.produces.map(String):[`application/json`];if(e.definitions&&(t.schemas=e.definitions,delete e.definitions),v(e.parameters)){for(let o of Object.values(e.parameters))v(o)&&xo(o);t.parameters=e.parameters,delete e.parameters}if(v(e.responses)){for(let o of Object.values(e.responses))v(o)&&O_(o,i);t.responses=e.responses,delete e.responses}let r=e.securityDefinitions;if(v(r)){for(let o of Object.values(r))if(v(o))if(o.type===`oauth2`){let s={},c=v(o.scopes)?o.scopes:{};o.flow===`implicit`?s.implicit={authorizationUrl:o.authorizationUrl,scopes:c}:o.flow===`password`?s.password={tokenUrl:o.tokenUrl,scopes:c}:o.flow===`application`?s.clientCredentials={tokenUrl:o.tokenUrl,scopes:c}:o.flow===`accessCode`&&(s.authorizationCode={authorizationUrl:o.authorizationUrl,tokenUrl:o.tokenUrl,scopes:c}),o.flows=s,delete o.flow,delete o.authorizationUrl,delete o.tokenUrl,delete o.scopes}else o.type===`basic`&&(o.type=`http`,o.scheme=`basic`);t.securitySchemes=r,delete e.securityDefinitions}Lo(e);let a=e.paths;if(v(a))for(let[o,s]of Object.entries(a)){if(!v(s)){delete a[o];continue}if(Array.isArray(s.parameters)){let c=[];for(let l of s.parameters)v(l)&&(xo(l),c.push(l));s.parameters=c}for(let c of X_){let l=s[c];if(!v(l)){delete s[c];continue}let d=Array.isArray(l.consumes)?l.consumes.map(String):n,u=Array.isArray(l.produces)?l.produces.map(String):i;if(Array.isArray(l.parameters)){let _=[],m=null,f=[];for(let y of l.parameters)v(y)&&(y.in===`body`?m=y:y.in===`formData`?f.push(y):(xo(y),_.push(y)));if(l.parameters=_,m){let y={};for(let C of d)y[C]={schema:m.schema};l.requestBody={description:m.description,required:m.required,content:y}}else if(f.length>0){let y={},C=[];for(let F of f){let K=String(F.name||``);y[K]=F.type===`file`?{type:`string`,format:`binary`}:{type:F.type,format:F.format},F.required&&C.push(K)}let b={type:`object`,properties:y};C.length>0&&(b.required=C);let w={},N=Array.isArray(l.consumes)?l.consumes.map(String):[`application/x-www-form-urlencoded`,`multipart/form-data`];for(let F of N)w[F]={schema:b};l.requestBody={content:w}}}let p=l.responses;if(v(p))for(let _ of Object.values(p))v(_)&&O_(_,u)}}}function Ye(e){let t={},n=!1;for(let[i,r]of Object.entries(e))i.startsWith(`x-`)&&r!==void 0&&(t[i]=De(r),n=!0);return n?t:void 0}function xp(e){return v(e)?typeof e.arazzo==`string`&&Array.isArray(e.workflows):!1}function Z0(e){if(!v(e))throw new Error(`Missing Arazzo info object`);let t={title:String(e.title||``),version:String(e.version||`1.0.0`)};e.summary&&(t.summary=String(e.summary)),e.description&&(t.description=String(e.description));let n=Ye(e);return n&&(t.extensions=n),t}function J0(e){return e===`openapi`||e===`asyncapi`||e===`arazzo`}function ey(e){let t=v(e)?e:{},n={name:String(t.name||`default`),url:String(t.url||``)};J0(t.type)&&(n.type=t.type);let i=Ye(t);return i&&(n.extensions=i),n}function Wn(e){return v(e)&&typeof e.reference==`string`&&typeof e.name!=`string`}function ss(e){let t=v(e)?e:{},n={reference:String(t.reference||``)};return t.value!==void 0&&(n.value=De(t.value)),n}function Vn(e){return v(e)&&typeof e.context==`string`&&typeof e.selector==`string`}function ty(e){return e===`jsonpointer`||e===`jsonpath`||e===`xpath`||e===`regex`}function kp(e){let t={type:e.type===`xpath`?`xpath`:`jsonpath`,version:String(e.version||`draft-goessner-dispatch-jsonpath-00`)},n=Ye(e);return n&&(t.extensions=n),t}function cs(e){let t=v(e)?e:{},n={context:String(t.context||`$response.body`),selector:String(t.selector||``)},i=t.type;ty(i)?n.type=i:v(i)&&(n.type=kp(i)),t.version&&(n.version=String(t.version));let r=Ye(t);return r&&(n.extensions=r),n}function ny(e){return e===`path`||e===`query`||e===`querystring`||e===`header`||e===`cookie`}function Cp(e){let t=v(e)?e:{},n=t.value,i={name:String(t.name||``),value:Vn(n)?cs(n):De(n??``)};ny(t.in)&&(i.in=t.in);let r=Ye(t);return r&&(i.extensions=r),i}function Ea(e){return Wn(e)?ss(e):Cp(e)}function iy(e){let t=v(e)?e:{},n=t.value,i={target:String(t.target||``),value:Vn(n)?cs(n):De(n??``)},r=Ye(t);return r&&(i.extensions=r),i}function ry(e){let t=v(e)?e:{},n={};t.contentType&&(n.contentType=String(t.contentType)),t.payload!==void 0&&(n.payload=De(t.payload)),Array.isArray(t.replacements)&&(n.replacements=t.replacements.map(iy));let i=Ye(t);return i&&(n.extensions=i),n}function ay(e){return e===`simple`||e===`regex`||e===`jsonpath`||e===`xpath`}function ls(e){let t=v(e)?e:{},n={condition:String(t.condition||``)};t.context&&(n.context=String(t.context));let i=t.type;ay(i)?n.type=i:v(i)&&(n.type=kp(i));let r=Ye(t);return r&&(n.extensions=r),n}function oy(e){return e===`end`||e===`goto`}function Tp(e){let t=v(e)?e:{},n={name:String(t.name||`defaultSuccess`),type:oy(t.type)?t.type:`end`};t.workflowId&&(n.workflowId=String(t.workflowId)),t.stepId&&(n.stepId=String(t.stepId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(Ea)),Array.isArray(t.criteria)&&(n.criteria=t.criteria.map(ls));let i=Ye(t);return i&&(n.extensions=i),n}function Op(e){return Wn(e)?ss(e):Tp(e)}function sy(e){return e===`end`||e===`retry`||e===`goto`}function Ap(e){let t=v(e)?e:{},n={name:String(t.name||`defaultFailure`),type:sy(t.type)?t.type:`end`};t.workflowId&&(n.workflowId=String(t.workflowId)),t.stepId&&(n.stepId=String(t.stepId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(Ea)),typeof t.retryAfter==`number`&&(n.retryAfter=t.retryAfter),typeof t.retryLimit==`number`&&(n.retryLimit=t.retryLimit),Array.isArray(t.criteria)&&(n.criteria=t.criteria.map(ls));let i=Ye(t);return i&&(n.extensions=i),n}function wp(e){return Wn(e)?ss(e):Ap(e)}function Pp(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))Vn(r)?n[i]=cs(r):n[i]=String(r??``);return n}function cy(e){return e===`send`||e===`receive`}function ly(e){let t=v(e)?e:{},n={stepId:String(t.stepId||`step`)};t.description&&(n.description=String(t.description)),t.operationId&&(n.operationId=String(t.operationId)),t.operationPath&&(n.operationPath=String(t.operationPath)),t.channelPath&&(n.channelPath=String(t.channelPath)),t.workflowId&&(n.workflowId=String(t.workflowId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(Ea)),v(t.requestBody)&&(n.requestBody=ry(t.requestBody)),Array.isArray(t.successCriteria)&&(n.successCriteria=t.successCriteria.map(ls)),Array.isArray(t.onSuccess)&&(n.onSuccess=t.onSuccess.map(Op)),Array.isArray(t.onFailure)&&(n.onFailure=t.onFailure.map(wp)),v(t.outputs)&&(n.outputs=Pp(t.outputs)),typeof t.timeout==`number`&&(n.timeout=t.timeout),t.correlationId&&(n.correlationId=String(t.correlationId)),cy(t.action)&&(n.action=t.action),Array.isArray(t.dependsOn)&&(n.dependsOn=t.dependsOn.map(String));let i=Ye(t);return i&&(n.extensions=i),n}function dy(e){let t=v(e)?e:{},n={workflowId:String(t.workflowId||`workflow`),steps:Array.isArray(t.steps)?t.steps.map(ly):[]};t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),v(t.inputs)&&(n.inputs=Ke(t.inputs)),Array.isArray(t.dependsOn)&&(n.dependsOn=t.dependsOn.map(String)),Array.isArray(t.successActions)&&(n.successActions=t.successActions.map(Op)),Array.isArray(t.failureActions)&&(n.failureActions=t.failureActions.map(wp)),v(t.outputs)&&(n.outputs=Pp(t.outputs)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(Ea));let i=Ye(t);return i&&(n.extensions=i),n}function _y(e){let t=v(e)?e:{},n={},i=t.inputs;if(v(i)){n.inputs={};for(let[c,l]of Object.entries(i))n.inputs[c]=Ke(l)}let r=t.parameters;if(v(r)){n.parameters={};for(let[c,l]of Object.entries(r))n.parameters[c]=Cp(l)}let a=t.successActions;if(v(a)){n.successActions={};for(let[c,l]of Object.entries(a))n.successActions[c]=Tp(l)}let o=t.failureActions;if(v(o)){n.failureActions={};for(let[c,l]of Object.entries(o))n.failureActions[c]=Ap(l)}let s=Ye(t);return s&&(n.extensions=s),n}function A_(e){let t;try{t=pp(e)}catch(r){throw new Error(`Invalid Arazzo specification format.`)}if(!v(t)||!xp(t))throw new Error(`Invalid Arazzo specification format.`);let n={arazzo:String(t.arazzo||`1.1.0`),info:Z0(t.info),sourceDescriptions:Array.isArray(t.sourceDescriptions)?t.sourceDescriptions.map(ey):[],workflows:t.workflows.map(dy)};t.$self&&(n.$self=String(t.$self)),v(t.components)&&(n.components=_y(t.components));let i=Ye(t);return i&&(n.extensions=i),n}function ds(e,t){let n=`$components.${t}.`;if(e.startsWith(n))return{key:e.slice(n.length),matchesCategory:!0};let i=e.split(`.`).pop()||e;return e.startsWith(`$components.`)?{key:i,matchesCategory:!1}:{key:i,matchesCategory:!0}}function $o(e,t){if(!Wn(e))return e;let{key:n,matchesCategory:i}=ds(e.reference,`parameters`),r=i?t?.parameters?.[n]:void 0;return r?W(U({},r),{value:e.value!==void 0?e.value:r.value}):{name:n,value:e.value!==void 0?e.value:e.reference}}function Do(e,t){if(!Wn(e))return e;let{key:n,matchesCategory:i}=ds(e.reference,`successActions`),r=i?t?.successActions?.[n]:void 0;return r?U({},r):{name:n,type:`end`}}function Uo(e,t){if(!Wn(e))return e;let{key:n,matchesCategory:i}=ds(e.reference,`failureActions`),r=i?t?.failureActions?.[n]:void 0;return r?U({},r):{name:n,type:`end`}}function py(e,t){if(e){if(ue(e)){let n=e.$ref,i=n.startsWith(`#/components/inputs/`)?n.slice(20):n.startsWith(`$components.inputs.`)?n.slice(19):n.split(`/`).pop()||n,r=t?.inputs?.[i];return r&&!ue(r)?r:{type:`object`,title:i,description:e.description}}return e}}function Np(e,t,n){let i=(e??[]).map(o=>$o(o,n)),r=(t??[]).map(o=>$o(o,n)),a=/* @__PURE__ */ new Map;for(let o of i){let s=`${o.in??`workflow`}:${o.name}`;a.set(s,o)}for(let o of r){let s=`${o.in??`workflow`}:${o.name}`;a.set(s,o)}return Array.from(a.values())}function zo(e){let t=e.trim(),n=!t.startsWith(`$`)&&/\{\$[a-zA-Z0-9_.\-#/~]+\}/.test(t),i;for(let f of Lg)if(t===f||t.startsWith(`${f}.`)||t.startsWith(`${f}#`)){i=f;break}let r=/* @__PURE__ */ new Set,a=/* @__PURE__ */ new Set,o=/* @__PURE__ */ new Set,s=/* @__PURE__ */ new Set;for(let f of t.matchAll(/\$steps\.([A-Za-z0-9_-]+)/g))r.add(String(f[1]));for(let f of t.matchAll(/\$inputs\.([A-Za-z0-9_-]+)/g))a.add(String(f[1]));for(let f of t.matchAll(/\$workflows\.([A-Za-z0-9_-]+)/g))o.add(String(f[1]));for(let f of t.matchAll(/\$sourceDescriptions\.([A-Za-z0-9_-]+)/g))s.add(String(f[1]));let p=t.indexOf(`#`),_=p!==-1?t.slice(p+1).replace(/\}.*$/,``):void 0;return{raw:e,isExpression:i!==void 0||n,isTemplate:n,root:i,referencedStepIds:Array.from(r),referencedInputs:Array.from(a),referencedWorkflows:Array.from(o),referencedSources:Array.from(s),jsonPointer:_}}function w_(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}function Ip(e,t){let n=/* @__PURE__ */ new Set;if(e.dependsOn)for(let a of e.dependsOn)n.add(a);let i=a=>{let o=zo(a);for(let s of o.referencedStepIds)s!==e.stepId&&n.add(s)},r=a=>{if(typeof a==`string`)i(a);else if(Array.isArray(a))a.forEach(r);else if(Vn(a))i(a.context),i(a.selector);else if(v(a))for(let o of Object.values(a))r(o)};for(let a of t)r(a.value);if(e.requestBody&&(r(e.requestBody.payload),e.requestBody.replacements))for(let a of e.requestBody.replacements)r(a.value);if(e.successCriteria)for(let a of e.successCriteria)a.context&&i(a.context),i(a.condition);if(e.outputs)for(let a of Object.values(e.outputs))r(a);return e.correlationId&&i(e.correlationId),Array.from(n)}function Bo(e,t){let n=Array.isArray(e)?e:e.workflows,i=t??(Array.isArray(e)?void 0:e.components),r=[],a={},o={},s=!1,c=new Set(n.map(f=>f.workflowId)),l=n.map(f=>({id:f.workflowId,targets:/* @__PURE__ */ new Set,inDegree:0})),d=f=>l.find(y=>y.id===f),u=(f,y,C,b)=>{if(r.push({from:f,to:y,kind:C,label:b}),c.has(f)&&c.has(y)&&f!==y){let w=d(f),N=d(y);w&&N&&!w.targets.has(y)&&(w.targets.add(y),N.inDegree+=1)}};for(let f of n){if(f.dependsOn)for(let T of f.dependsOn)u(T.split(`.workflows.`)[1]??T,f.workflowId,`dependsOn`);let y=[],C=new Set(f.steps.map(T=>T.stepId)),b=f.steps.map(T=>({id:T.stepId,targets:/* @__PURE__ */ new Set,inDegree:0})),w=T=>b.find(A=>A.id===T),N=(T,A)=>{if(C.has(T)&&T!==A){let z=w(T),J=w(A);z&&J&&!z.targets.has(A)&&(z.targets.add(A),J.inDegree+=1)}},F;for(let T of f.steps){if(F!==void 0&&(y.push({from:F,to:T.stepId,kind:`sequential`}),N(F,T.stepId)),F=T.stepId,T.workflowId)u(T.workflowId.split(`.workflows.`)[1]??T.workflowId,f.workflowId,`subWorkflow`,T.stepId);let z=Ip(T,Np(f.parameters,T.parameters,i));for(let J of z){let Y=T.dependsOn?.includes(J)?`dependsOn`:`dataFlow`;y.push({from:J,to:T.stepId,kind:Y}),N(J,T.stepId)}if(T.onSuccess)for(let J of T.onSuccess){let Y=Do(J,i);Y.type===`goto`&&Y.stepId&&y.push({from:T.stepId,to:Y.stepId,kind:`onSuccess`,label:Y.name})}if(T.onFailure)for(let J of T.onFailure){let Y=Uo(J,i);(Y.type===`goto`||Y.type===`retry`)&&Y.stepId&&y.push({from:T.stepId,to:Y.stepId,kind:`onFailure`,label:Y.name})}}let K=b.filter(T=>T.inDegree===0),X=[],ae=K.shift();for(;ae!==void 0;){X.push(ae.id);for(let T of ae.targets)for(let A of b)A.id===T&&(A.inDegree-=1,A.inDegree===0&&K.push(A));ae=K.shift()}if(X.length<f.steps.length){s=!0;for(let T of f.steps)X.includes(T.stepId)||X.push(T.stepId)}a[f.workflowId]=X,o[f.workflowId]=y}let p=l.filter(f=>f.inDegree===0),_=[],m=p.shift();for(;m!==void 0;){_.push(m.id);for(let f of m.targets)for(let y of l)y.id===f&&(y.inDegree-=1,y.inDegree===0&&p.push(y));m=p.shift()}if(_.length<n.length){s=!0;for(let f of n)_.includes(f.workflowId)||_.push(f.workflowId)}return{workflowOrder:_,workflowEdges:r,stepOrderByWorkflow:a,stepEdgesByWorkflow:o,hasCycles:s}}function uy(e,t,n){let i=n?.[0]?.name;if(e.workflowId){let r=i,a=e.workflowId,o=e.workflowId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.workflows\.(.+)$/);return o&&o[1]&&o[2]&&(r=o[1],a=o[2]),{kind:`workflow`,sourceName:r,operationId:a,anchorId:`workflow-${a}`}}if(e.channelPath){let r=zo(e.channelPath),a=r.referencedSources[0]??i,o=e.channelPath;if(r.jsonPointer){let s=r.jsonPointer.split(`/`).filter(Boolean).map(w_);s[0]===`channels`&&s[1]?o=s[1]:o=`/`+s.join(`/`)}return{kind:`channel`,sourceName:a,method:e.action??`send`,route:o}}if(e.operationPath){let r=zo(e.operationPath),a=r.referencedSources[0]??i,o=e.operationPath,s=`get`;if(r.jsonPointer){let u=r.jsonPointer.split(`/`).filter(Boolean).map(w_);(u[0]===`paths`||u[0]===`webhooks`)&&u[1]!==void 0&&u[2]!==void 0&&(o=u[1],s=u[2].toLowerCase())}let c=`${s}-${o}`,l,d=t?.paths?.[o]??t?.webhooks?.[o];if(d&&!ue(d)){for(let[u,p]of an(d))if(u.toLowerCase()===s){l=p.operationId,c=p.operationId||`${u}-${o}`;break}}return{kind:`operation`,sourceName:a,method:s,route:o,operationId:l,anchorId:c}}if(e.operationId){let r=i,a=e.operationId,o=e.operationId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.(.+)$/);if(o&&o[1]&&o[2]&&(r=o[1],a=o[2]),t?.paths){for(let[s,c]of Object.entries(t.paths))if(!ue(c)){for(let[l,d]of an(c))if(d.operationId===a)return{kind:`operation`,sourceName:r,method:l,route:s,operationId:a,anchorId:a}}}if(t?.webhooks){for(let[s,c]of Object.entries(t.webhooks))if(!ue(c)){for(let[l,d]of an(c))if(d.operationId===a)return{kind:`operation`,sourceName:r,method:l,route:s,operationId:a,anchorId:a}}}return{kind:`operation`,sourceName:r,operationId:a,anchorId:a}}}function my(e,t,n=`https://api.example.com`){let i=n.endsWith(`/`)?n.slice(0,-1):n,r=[`# Workflow: ${e.workflowId}`];e.summary&&r.push(`# ${e.summary}`),e.dependsOn&&e.dependsOn.length>0&&r.push(`# Prerequisites: ${e.dependsOn.join(`, `)}`);for(let[a,o]of t.entries()){let s=o.step;if(r.push(``),r.push(`# Step ${a+1}: ${s.stepId}${s.description?` - ${s.description}`:``}`),o.linkedTarget?.kind===`workflow`){r.push(`cdd-ctl run-workflow --workflow-id "${o.linkedTarget.operationId}"`);continue}if(o.linkedTarget?.kind===`channel`){let p=(s.action??`send`).toUpperCase();r.push(`# AsyncAPI ${p} on channel ${o.linkedTarget.route}`);continue}let c=(o.linkedTarget?.method??`get`).toUpperCase(),l=o.linkedTarget?.route??(o.linkedTarget?.operationId?`/${o.linkedTarget.operationId}`:`/${s.stepId}`),u=`curl -s ${c===`GET`?``:`-X ${c} `}"${i}${l}"`;for(let p of o.mergedParameters)if(p.in===`header`){let _=Vn(p.value)?p.value.selector:String(p.value);u+=` -H "${p.name}: ${_}"`}if(s.requestBody){let p=s.requestBody.contentType||`application/json`;if(u+=` -H "Content-Type: ${p}"`,s.requestBody.payload!==void 0){let _=typeof s.requestBody.payload==`string`?s.requestBody.payload:JSON.stringify(s.requestBody.payload);u+=` -d '${_}'`}}r.push(u)}return r.join(`
`)}function P_(e,t){let n=e.components,i=t?.servers?.[0]?.url||`https://api.example.com`,r=Bo(e.workflows,n);return e.workflows.map(a=>{let o=py(a.inputs,n),s=(a.parameters??[]).map(p=>$o(p,n)),c=(a.successActions??[]).map(p=>Do(p,n)),l=(a.failureActions??[]).map(p=>Uo(p,n)),d=a.steps.map(p=>{let _=Np(a.parameters,p.parameters,n);return{step:p,mergedParameters:_,resolvedOnSuccess:(p.onSuccess??[]).map(b=>Do(b,n)),resolvedOnFailure:(p.onFailure??[]).map(b=>Uo(b,n)),linkedTarget:uy(p,t,e.sourceDescriptions),upstreamStepIds:Ip(p,_)}});return{workflow:a,resolvedInputs:o,resolvedParameters:s,resolvedSuccessActions:c,resolvedFailureActions:l,normalizedSteps:d,cliPreview:my(a,d,i),stepOrder:r.stepOrderByWorkflow[a.workflowId],stepEdges:r.stepEdgesByWorkflow[a.workflowId],hasCycles:r.hasCycles}})}function v(e){return typeof e==`object`&&e!==null&&!Array.isArray(e)}function N_(e,t){return e?/^https?:\/\//i.test(e)?!0:t&&t(e)?!1:e.startsWith(`/`)?!0:!e.includes(`
`)&&!e.startsWith(`{`)&&!e.includes(`: `)&&/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(e):!1}function I_(e){let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith(`/`)?`https://`+t:t}function fy(e){return/^<\?php\b/.test(e)||/^declare\s*\(\s*strict_types/.test(e)||/^package\s+[A-Za-z0-9_.]+;?$/.test(e)||/^namespace\s+[A-Za-z0-9_\\]+;$/.test(e)||/^#include\s+[<"].+[>"]$/.test(e)||/^import\s+/.test(e)||/^from\s+[A-Za-z0-9_.]+\s+import\s+/.test(e)||/^using\s+[A-Za-z0-9_.]+;$/.test(e)||/^use\s+[A-Za-z0-9_:\\{}*,\s]+;$/.test(e)||/^require(?:_once|_relative)?[\s(]+['"]/.test(e)||/^(?:\.|source)\s+\.?\/[^\s]+$/.test(e)}function hy(e){let t=e.replace(/\r\n/g,`
`).trim();if(!t)return{snippet:``};let n=t.split(`
`),i=[],r=0;for(;r<n.length;){let d=n.slice(r,r+1).join(``),u=d.trim();if(!u){r++;continue}if(fy(u)){if(i.push(d),r++,/^import\s*\($/.test(u))for(;r<n.length;){let p=n.slice(r,r+1).join(``);if(i.push(p),r++,p.trim()===`)`)break}continue}break}let a=n.slice(r),o=[],s=[];if(a.length>=3){let d=a.slice(0,1).join(``).trim(),u=a.slice(-1).join(``).trim();if(/^(?:async\s+)?def\s+main\s*\(/.test(d))o.push(...a.splice(0,1)),a.slice(-1).join(``).trim()===`main()`&&s.unshift(...a.splice(-2,2)),/^\w+\s*=\s*\w*Client\s*\(/.test(a.slice(0,1).join(``).trim())&&o.push(...a.splice(0,1));else if(/^def\s+main\b/.test(d)){for(o.push(...a.splice(0,1)),/^main\s+if\s+__FILE__\s*==\s*\$0/.test(u)&&s.unshift(...a.splice(-1,1));!a.slice(-1).join(``).trim();)a.pop();s.unshift(...a.splice(-1,1)),/^\w+\s*=\s*\w+\.new\b/.test(a.slice(0,1).join(``).trim())&&o.push(...a.splice(0,1))}else if(/^main\s*\(\)\s*\{$/.test(d)){for(o.push(...a.splice(0,1)),/^main\s+"\$@"$/.test(u)&&s.unshift(...a.splice(-1,1));!a.slice(-1).join(``).trim();)a.pop();s.unshift(...a.splice(-1,1))}else if(/^(?:int\s+main\s*\(|func\s+main\s*\(|suspend\s+fun\s+main\s*\(|fun\s+main\s*\(|#\[tokio::main\]|async\s+fn\s+main\s*\(|export\s+(?:async\s+)?function\s+(?:execute|ExampleComponent)\s*\(|@Component\b|@main\b|<script\s+setup>|(?:public\s+)?class\s+(?:Example|Program)\b)/.test(d)&&(u===`}`||u===`<\/script>`)){for(o.push(...a.splice(0,1)),s.unshift(...a.splice(-1,1));a.length>=3&&/^(?:public\s+static\s+(?:async\s+)?(?:void|Task)\s+Main|public\s+static\s+void\s+main\s*\(|static\s+func\s+main\s*\(|export\s+class\s+\w+|private\s+readonly\s+\w+|async\s+execute\s*\(|async\s+function\s+execute\s*\(|struct\s+Example\b|async\s+fn\s+main\s*\(|try\s*\{)/.test(a.slice(0,1).join(``).trim());)o.push(...a.splice(0,1)),/^\}\s*catch\b/.test(a.slice(-3,-2).join(``).trim())?s.unshift(...a.splice(-3,3)):s.unshift(...a.splice(-1,1));for(a.length>=2&&/^(?:const|let|var|val|auto|struct\s+\w+)\s+\w+\s*(?:=[^;]+;?|;\s*$)/.test(a.slice(0,1).join(``).trim())&&(o.push(...a.splice(0,1)),/^api_init\s*\(/.test(a.slice(0,1).join(``).trim())&&o.push(...a.splice(0,1)));a.length>=2&&/^(?:return\s+(?:0|CDD_C_SUCCESS)\s*;|Ok\(\(\)\)|api_cleanup\s*\()/.test(a.slice(-1).join(``).trim());)s.unshift(...a.splice(-1,1))}}let c=a.join(`
`).trim();if(o.length>0){let u=a.filter(p=>p.trim().length>0).reduce((p,_)=>{let m=_.trimStart().length;return Math.min(p,_.length-m)},1/0);c=a.map(p=>p.slice(u)).join(`
`).trim()}let l={snippet:c};return i.length>0&&(l.imports=i.join(`
`).trim()),o.length>0&&(l.wrapper_start=o.join(`
`).trim()),s.length>0&&(l.wrapper_end=s.join(`
`).trim()),l}function gy(e){let t=e.replace(/\\/g,`/`).toLowerCase(),n=t.lastIndexOf(`/`),i=n!==-1?t.slice(n+1):t;return t.startsWith(`.github/`)||t.includes(`/.github/`)||t.includes(`/tests/`)||t.includes(`/test/`)||t.includes(`/__tests__/`)||t.includes(`/models/`)||t.includes(`/schemas/`)||(/* @__PURE__ */ new Set([`cargo.toml`,`cargo.lock`,`cmakelists.txt`,`makefile`,`package.json`,`package-lock.json`,`tsconfig.json`,`composer.json`,`gemfile`,`build.gradle`,`build.gradle.kts`,`settings.gradle`,`settings.gradle.kts`,`pom.xml`,`package.swift`,`go.mod`,`go.sum`,`pyproject.toml`,`setup.py`,`requirements.txt`,`readme.md`,`.gitignore`,`dockerfile`])).has(i)?!0:/\.(?:md|toml|lock|csproj|sln|ya?ml|spec\.ts|test\.ts)$|(?:_test\.go|_test\.py|test\.java|test\.kt|tests\.cs|tests\.swift)$|^test_/.test(i)}function M_(e,t,n,i){let r=e.replace(/\r\n/g,`
`).split(`
`);if(r.length<=25)return e;let a=[];if(t){let u=t.replace(/([a-z0-9])([A-Z])/g,`$1_$2`).toLowerCase(),p=t.charAt(0).toUpperCase()+t.slice(1);for(let _ of/* @__PURE__ */ new Set([t,u,p]))a.push(_)}let o=-1;for(let u of a){let p=u.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),_=new RegExp(`(?:\\bfn\\b|\\bfunc\\b|\\bdef\\b|\\bfun\\b|\\bfunction\\b|\\basync\\b|\\bpublic\\b|\\bstatic\\b)\\s+[^\\n]*\\b${p}\\b|\\b${p}\\s*\\(`,`i`);for(let m=0;m<r.length;m++)if(_.test(r.slice(m,m+1).join(``))){o=m;break}if(o!==-1)break}if(o===-1){for(let u=0;u<r.length;u++)if(r.slice(u,u+1).join(``).includes(n)){let _=Math.max(0,u-6),m=Math.min(r.length-1,u+6);if(r.slice(_,m+1).join(`
`).toLowerCase().includes(i.toLowerCase())){o=_;for(let y=u;y>=_;y--)if(/\b(?:fn|func|def|fun|function|public|async)\b/.test(r.slice(y,y+1).join(``))){o=y;break}break}}}if(o===-1)return null;let s=Math.min(r.length,o+15),c=[],l=0,d=!1;for(let u=o;u<s;u++){let p=r.slice(u,u+1).join(``);c.push(p);for(let _ of p)_===`{`?(l++,d=!0):_===`}`&&l--;if(d&&l<=0)break}return c.join(`
`).trim()}function by(e){let t=e.replace(/\r\n/g,`
`).split(`
`);for(;t.length>0&&!t.slice(0,1).join(``).trim();)t.shift();for(;t.length>0&&!t.slice(-1).join(``).trim();)t.pop();if(t.length===0)return``;let i=t.filter(r=>r.trim().length>0).reduce((r,a)=>{let o=a.trimStart().length;return Math.min(r,a.length-o)},1/0);return t.map(r=>r.trim().length>0?r.slice(i):``).join(`
`).trim()}function Go(e,t=!0,n=!0){if(typeof e.default==`object`&&v(e.default))return Go(e.default,t,n);let i=[],r=e.imports,a=e.wrapperStart??e.wrapper_start,o=e.snippet??e.code,s=e.wrapperEnd??e.wrapper_end;return t&&typeof r==`string`&&r.trim()&&i.push(r.trim()),n&&typeof a==`string`&&a.trim()&&i.push(a.trim()),typeof o==`string`&&o.trim()&&i.push(n?o.replace(/^\r?\n+|\s+$/g,``):by(o)),n&&typeof s==`string`&&s.trim()&&i.push(s.trim()),i.join(`
`)}function R_(e,t,n,i={}){let r=typeof e.default==`object`&&v(e.default)?e.default:e,a=typeof r.imports==`string`&&r.imports.trim().length>0,o=r.wrapperStart??r.wrapper_start,s=r.wrapperEnd??r.wrapper_end,c=typeof o==`string`&&o.trim().length>0||typeof s==`string`&&s.trim().length>0;if(!a&&!c){let u=Go(r,!0,!0);return u?[U({language:t,filepath:n,content:u,includeImports:!1,includeWrapping:!1},i)]:[]}let l=[{includeImports:!0,includeWrapping:!0},{includeImports:!1,includeWrapping:!0},{includeImports:!0,includeWrapping:!1},{includeImports:!1,includeWrapping:!1}],d=[];for(let u of l){let p=Go(r,u.includeImports,u.includeWrapping);d.push(U({language:t,filepath:n,content:p,includeImports:u.includeImports,includeWrapping:u.includeWrapping},i))}return d}function ko(e,t){let n=[],i=(o,s,c)=>typeof o==`string`?o.trim()?R_(hy(o),t,s,c):[U({language:t,filepath:s,content:o,includeImports:!1,includeWrapping:!1},c)]:v(o)?R_(o,t,s,c):[],r=(o,s)=>{for(let[c,l]of Object.entries(o))if(v(l))for(let[d,u]of Object.entries(l)){let p=`${c.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`,_=s?{webhookName:c,method:d.toLowerCase()}:{route:c,method:d.toLowerCase()};n.push(...i(u,p,_))}},a=(o,s)=>{for(let c of o){if(!v(c))continue;let l=typeof c.path==`string`?c.path:``,d=typeof c.method==`string`?c.method:``,u=typeof c.operationId==`string`?c.operationId:``,p=c.code??c;if(d.toUpperCase()===`WORKFLOW`||l.startsWith(`/workflows/`)){let _=u||l.replace(/^\/workflows\//,``)||`workflow`;n.push(...i(p,`workflow_${_}`,{workflowId:_}))}else if(s){let _=typeof c.webhookName==`string`?c.webhookName:l.replace(/^\/+/,``)||u,m=`webhook_${_.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`;n.push(...i(p,m,{operationId:u||void 0,webhookName:_||void 0,method:d.toLowerCase()||void 0}))}else{let _=`${l.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`;n.push(...i(p,_,{operationId:u||void 0,route:l||void 0,method:d.toLowerCase()||void 0}))}}};if(v(e.endpoints)&&r(e.endpoints,!1),Array.isArray(e.operations))a(e.operations,!1);else if(v(e.operations))for(let[o,s]of Object.entries(e.operations)){if(!v(s))continue;let c=typeof s.operationId==`string`?s.operationId:o,l=typeof s.path==`string`?s.path:void 0,d=typeof s.method==`string`?s.method:void 0,u=s.code??s;if(d?.toUpperCase()===`WORKFLOW`||l?.startsWith(`/workflows/`)){let p=c||(l?l.replace(/^\/workflows\//,``):`workflow`);n.push(...i(u,`workflow_${p}`,{workflowId:p}))}else{let p=`op_${c.replace(/[^a-zA-Z0-9]/g,`_`)}`,_={operationId:c,route:l,method:d?.toLowerCase()};n.push(...i(u,p,_))}}if(Array.isArray(e.webhooks)?a(e.webhooks,!0):v(e.webhooks)&&r(e.webhooks,!0),Array.isArray(e.workflows))for(let o of e.workflows){if(!v(o))continue;let s=typeof o.workflowId==`string`?o.workflowId:typeof o.operationId==`string`?o.operationId:``;if(!s)continue;let c=o.code??o;n.push(...i(c,`workflow_${s}`,{workflowId:s}))}else if(v(e.workflows))for(let[o,s]of Object.entries(e.workflows)){let c=`workflow_${o}`,l={workflowId:o};n.push(...i(s,c,l))}return n}function De(e){if(e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e;if(Array.isArray(e))return e.map(De);if(v(e)){let t={};for(let[n,i]of Object.entries(e))i!==void 0&&(t[n]=De(i));return t}return String(e)}function yy(e){if(!v(e))throw new Error(`Missing info object`);return{title:String(e.title||``),summary:e.summary?String(e.summary):void 0,description:e.description?String(e.description):void 0,termsOfService:e.termsOfService?String(e.termsOfService):void 0,contact:v(e.contact)?Ey(e.contact):void 0,license:v(e.license)?Sy(e.license):void 0,version:String(e.version||``)}}function Ey(e){let t=v(e)?e:{};return{name:t.name?String(t.name):void 0,url:t.url?String(t.url):void 0,email:t.email?String(t.email):void 0}}function Sy(e){let t=v(e)?e:{};return{name:String(t.name||``),identifier:t.identifier?String(t.identifier):void 0,url:t.url?String(t.url):void 0}}function vy(e){let t=v(e)?e:{};return{enum:Array.isArray(t.enum)?t.enum.map(String):void 0,default:String(t.default||``),description:t.description?String(t.description):void 0}}function Sa(e){let t=v(e)?e:{},n={url:String(t.url||``)};t.description&&(n.description=String(t.description));let i=t.variables;if(v(i)){n.variables={};for(let[r,a]of Object.entries(i))n.variables[r]=vy(a)}return n}function yt(e){let t=v(e)?e:{};return{$ref:String(t.$ref||``),summary:t.summary?String(t.summary):void 0,description:t.description?String(t.description):void 0}}function ue(e){return v(e)&&typeof e.$ref==`string`}function xy(e){let t={propertyName:String(e.propertyName||``)},n=e.mapping;if(v(n)){t.mapping={};for(let[i,r]of Object.entries(n))t.mapping[i]=String(r)}return e.defaultMapping!==void 0&&(t.defaultMapping=String(e.defaultMapping)),t}function ky(e){return{name:e.name?String(e.name):void 0,namespace:e.namespace?String(e.namespace):void 0,prefix:e.prefix?String(e.prefix):void 0,attribute:typeof e.attribute==`boolean`?e.attribute:void 0,wrapped:typeof e.wrapped==`boolean`?e.wrapped:void 0,nodeType:e.nodeType?String(e.nodeType):void 0}}function Ke(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={};t.type&&(n.type=String(t.type)),t.description&&(n.description=String(t.description)),t.format&&(n.format=String(t.format)),t.title&&(n.title=String(t.title)),typeof t.multipleOf==`number`&&(n.multipleOf=t.multipleOf),typeof t.maximum==`number`&&(n.maximum=t.maximum),typeof t.exclusiveMaximum==`boolean`&&(n.exclusiveMaximum=t.exclusiveMaximum),typeof t.minimum==`number`&&(n.minimum=t.minimum),typeof t.exclusiveMinimum==`boolean`&&(n.exclusiveMinimum=t.exclusiveMinimum),typeof t.maxLength==`number`&&(n.maxLength=t.maxLength),typeof t.minLength==`number`&&(n.minLength=t.minLength),t.pattern&&(n.pattern=String(t.pattern)),typeof t.maxItems==`number`&&(n.maxItems=t.maxItems),typeof t.minItems==`number`&&(n.minItems=t.minItems),typeof t.uniqueItems==`boolean`&&(n.uniqueItems=t.uniqueItems),typeof t.maxProperties==`number`&&(n.maxProperties=t.maxProperties),typeof t.minProperties==`number`&&(n.minProperties=t.minProperties),Array.isArray(t.required)&&(n.required=t.required.map(String)),Array.isArray(t.enum)&&(n.enum=t.enum.map(De)),Array.isArray(t.allOf)&&(n.allOf=t.allOf.map(Ke)),Array.isArray(t.oneOf)&&(n.oneOf=t.oneOf.map(Ke)),Array.isArray(t.anyOf)&&(n.anyOf=t.anyOf.map(Ke)),t.not&&(n.not=Ke(t.not)),t.items&&(n.items=Ke(t.items));let i=t.properties;if(v(i)){n.properties={};for(let[s,c]of Object.entries(i))n.properties[s]=Ke(c)}let r=t.additionalProperties;r!==void 0&&(n.additionalProperties=typeof r==`boolean`?r:Ke(r)),t.default!==void 0&&(n.default=De(t.default)),typeof t.nullable==`boolean`&&(n.nullable=t.nullable),typeof t.readOnly==`boolean`&&(n.readOnly=t.readOnly),typeof t.writeOnly==`boolean`&&(n.writeOnly=t.writeOnly),t.example!==void 0&&(n.example=De(t.example)),typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated);let a=t.discriminator;v(a)&&(n.discriminator=xy(a));let o=t.xml;return v(o)&&(n.xml=ky(o)),t.externalDocs&&(n.externalDocs=xa(t.externalDocs)),n}function _s(e){if(ue(e))return yt(e);let t=v(e)?e:{};return{summary:t.summary?String(t.summary):void 0,description:t.description?String(t.description):void 0,value:t.value!==void 0?De(t.value):void 0,externalValue:t.externalValue?String(t.externalValue):void 0}}function ps(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={};return t.description&&(n.description=String(t.description)),typeof t.required==`boolean`&&(n.required=t.required),typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated),t.schema&&(n.schema=Ke(t.schema)),t.example!==void 0&&(n.example=De(t.example)),n}function Ai(e){let t=v(e)?e:{},n={};t.contentType&&(n.contentType=String(t.contentType));let i=t.headers;if(v(i)){n.headers={};for(let[o,s]of Object.entries(i))n.headers[o]=ps(s)}t.style&&(n.style=String(t.style)),typeof t.explode==`boolean`&&(n.explode=t.explode),typeof t.allowReserved==`boolean`&&(n.allowReserved=t.allowReserved);let r=t.prefixEncoding;if(v(r)){n.prefixEncoding={};for(let[o,s]of Object.entries(r))n.prefixEncoding[o]=Ai(s)}let a=t.itemEncoding;if(v(a)){n.itemEncoding={};for(let[o,s]of Object.entries(a))n.itemEncoding[o]=Ai(s)}return n}function va(e){let t=v(e)?e:{},n={};t.schema&&(n.schema=Ke(t.schema)),t.itemSchema&&(n.itemSchema=Ke(t.itemSchema)),t.example!==void 0&&(n.example=De(t.example));let i=t.examples;if(v(i)){n.examples={};for(let[s,c]of Object.entries(i))n.examples[s]=_s(c)}let r=t.encoding;if(v(r)){n.encoding={};for(let[s,c]of Object.entries(r))n.encoding[s]=Ai(c)}let a=t.prefixEncoding;if(v(a)){n.prefixEncoding={};for(let[s,c]of Object.entries(a))n.prefixEncoding[s]=Ai(c)}let o=t.itemEncoding;if(v(o)){n.itemEncoding={};for(let[s,c]of Object.entries(o))n.itemEncoding[s]=Ai(c)}return n}function Mp(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={content:{}};t.description&&(n.description=String(t.description)),typeof t.required==`boolean`&&(n.required=t.required);let i=t.content;if(v(i))for(let[r,a]of Object.entries(i))n.content[r]=va(a);return n}function Cy(e){return e===`query`||e===`header`||e===`path`||e===`cookie`}function us(e){if(ue(e))return yt(e);let t=v(e)?e:{},n=t.in,i={name:String(t.name||`Unknown`),in:Cy(n)?n:`query`};t.description&&(i.description=String(t.description)),typeof t.required==`boolean`&&(i.required=t.required),typeof t.deprecated==`boolean`&&(i.deprecated=t.deprecated),typeof t.allowEmptyValue==`boolean`&&(i.allowEmptyValue=t.allowEmptyValue),t.style&&(i.style=String(t.style)),typeof t.explode==`boolean`&&(i.explode=t.explode),typeof t.allowReserved==`boolean`&&(i.allowReserved=t.allowReserved),t.schema&&(i.schema=Ke(t.schema)),t.example!==void 0&&(i.example=De(t.example));let r=t.examples;if(v(r)){i.examples={};for(let[o,s]of Object.entries(r))i.examples[o]=_s(s)}let a=t.content;if(v(a)){i.content={};for(let[o,s]of Object.entries(a))i.content[o]=va(s)}return i}function Rp(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={};t.operationRef&&(n.operationRef=String(t.operationRef)),t.operationId&&(n.operationId=String(t.operationId));let i=t.parameters;if(v(i)){n.parameters={};for(let[r,a]of Object.entries(i))n.parameters[r]=De(a)}return t.requestBody!==void 0&&(n.requestBody=De(t.requestBody)),t.description&&(n.description=String(t.description)),t.server&&(n.server=Sa(t.server)),n}function Fo(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={description:String(t.description||``)},i=t.headers;if(v(i)){n.headers={};for(let[o,s]of Object.entries(i))n.headers[o]=ps(s)}let r=t.content;if(v(r)){n.content={};for(let[o,s]of Object.entries(r))n.content[o]=va(s)}let a=t.links;if(v(a)){n.links={};for(let[o,s]of Object.entries(a))n.links[o]=Rp(s)}return n}function Ty(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))i==="default"?n.default=Fo(r):n[i]=Fo(r);return n}function Lp(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))n[i]=ka(r);return n}function xa(e){let t=v(e)?e:{};return{url:String(t.url||``),description:t.description?String(t.description):void 0}}function $p(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))n[i]=Array.isArray(r)?r.map(String):[];return n}function gt(e){let t=v(e)?e:{},n={};Array.isArray(t.tags)&&(n.tags=t.tags.map(String)),t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.externalDocs&&(n.externalDocs=xa(t.externalDocs)),t.operationId&&(n.operationId=String(t.operationId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(us)),t.requestBody&&(n.requestBody=Mp(t.requestBody)),t.responses&&(n.responses=Ty(t.responses));let i=t.callbacks;if(v(i)){n.callbacks={};for(let[r,a]of Object.entries(i))n.callbacks[r]=Lp(a)}return typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated),Array.isArray(t.security)&&(n.security=t.security.map($p)),Array.isArray(t.servers)&&(n.servers=t.servers.map(Sa)),n}function ka(e){if(ue(e))return yt(e);let t=v(e)?e:{},n={};t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.get&&(n.get=gt(t.get)),t.put&&(n.put=gt(t.put)),t.post&&(n.post=gt(t.post)),t.delete&&(n.delete=gt(t.delete)),t.options&&(n.options=gt(t.options)),t.head&&(n.head=gt(t.head)),t.patch&&(n.patch=gt(t.patch)),t.trace&&(n.trace=gt(t.trace)),t.query&&(n.query=gt(t.query));let i=t.additionalOperations;if(v(i)){n.additionalOperations={};for(let[r,a]of Object.entries(i))n.additionalOperations[r]=gt(a)}return Array.isArray(t.servers)&&(n.servers=t.servers.map(Sa)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(us)),n}function Oy(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))i.startsWith(`/`)&&(n[i]=ka(r));return n}function ki(e){let t=v(e)?e:{},n={scopes:{}};t.authorizationUrl&&(n.authorizationUrl=String(t.authorizationUrl)),t.tokenUrl&&(n.tokenUrl=String(t.tokenUrl)),t.refreshUrl&&(n.refreshUrl=String(t.refreshUrl)),t.deviceAuthorizationUrl&&(n.deviceAuthorizationUrl=String(t.deviceAuthorizationUrl));let i=t.scopes;if(v(i))for(let[r,a]of Object.entries(i))n.scopes[r]=String(a);return n}function Ay(e){return e===`apiKey`||e===`http`||e===`mutualTLS`||e===`oauth2`||e===`openIdConnect`}function wy(e){return e===`query`||e===`header`||e===`cookie`}function Py(e){if(ue(e))return yt(e);let t=v(e)?e:{},n=t.type,i={type:Ay(n)?n:`http`};t.description&&(i.description=String(t.description)),t.name&&(i.name=String(t.name));let r=t.in;wy(r)&&(i.in=r),t.scheme&&(i.scheme=String(t.scheme)),t.bearerFormat&&(i.bearerFormat=String(t.bearerFormat)),t.openIdConnectUrl&&(i.openIdConnectUrl=String(t.openIdConnectUrl)),t.oauth2MetadataUrl&&(i.oauth2MetadataUrl=String(t.oauth2MetadataUrl));let a=t.flows;if(v(a)){let o={};a.implicit&&(o.implicit=ki(a.implicit)),a.password&&(o.password=ki(a.password)),a.clientCredentials&&(o.clientCredentials=ki(a.clientCredentials)),a.authorizationCode&&(o.authorizationCode=ki(a.authorizationCode)),a.deviceAuthorization&&(o.deviceAuthorization=ki(a.deviceAuthorization)),i.flows=o}return i}function Ny(e){let t=v(e)?e:{},n={},i=t.schemas;if(v(i)){n.schemas={};for(let[m,f]of Object.entries(i))n.schemas[m]=Ke(f)}let r=t.responses;if(v(r)){n.responses={};for(let[m,f]of Object.entries(r))n.responses[m]=Fo(f)}let a=t.parameters;if(v(a)){n.parameters={};for(let[m,f]of Object.entries(a))n.parameters[m]=us(f)}let o=t.examples;if(v(o)){n.examples={};for(let[m,f]of Object.entries(o))n.examples[m]=_s(f)}let s=t.requestBodies;if(v(s)){n.requestBodies={};for(let[m,f]of Object.entries(s))n.requestBodies[m]=Mp(f)}let c=t.headers;if(v(c)){n.headers={};for(let[m,f]of Object.entries(c))n.headers[m]=ps(f)}let l=t.securitySchemes;if(v(l)){n.securitySchemes={};for(let[m,f]of Object.entries(l))n.securitySchemes[m]=Py(f)}let d=t.links;if(v(d)){n.links={};for(let[m,f]of Object.entries(d))n.links[m]=Rp(f)}let u=t.callbacks;if(v(u)){n.callbacks={};for(let[m,f]of Object.entries(u))n.callbacks[m]=Lp(f)}let p=t.pathItems;if(v(p)){n.pathItems={};for(let[m,f]of Object.entries(p))n.pathItems[m]=ka(f)}let _=t.mediaTypes;if(v(_)){n.mediaTypes={};for(let[m,f]of Object.entries(_))n.mediaTypes[m]=va(f)}return n}function Iy(e){let t=v(e)?e:{},n={name:String(t.name||`Unknown`)};return t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.externalDocs&&(n.externalDocs=xa(t.externalDocs)),t.parent&&(n.parent=String(t.parent)),t.kind&&(n.kind=String(t.kind)),n}function My(e,t){let n;try{n=pp(e)}catch(a){throw new Error(`Invalid OpenAPI specification format.`)}if(!v(n))throw new Error(`Invalid OpenAPI specification format.`);if(xp(n)){let a=A_(e),o=P_(a),s=Bo(a),c={openapi:`3.2.0`,info:{title:a.info.title,summary:a.info.summary,description:a.info.description,version:a.info.version}};return a.$self&&(c.$self=a.$self),{specKind:`arazzo`,spec:c,codeExamples:{},arazzoSpec:a,workflows:o,sourceDescriptions:a.sourceDescriptions,workflowCodeExamples:{},workflowDag:s}}Q0(n);let i={openapi:String(n.openapi||`3.2.0`),info:yy(n.info)};n.$self&&(i.$self=String(n.$self)),n.jsonSchemaDialect&&(i.jsonSchemaDialect=String(n.jsonSchemaDialect)),Array.isArray(n.servers)&&(i.servers=n.servers.map(Sa)),v(n.paths)&&(i.paths=Oy(n.paths));let r=n.webhooks;if(v(r)){i.webhooks={};for(let[a,o]of Object.entries(r))i.webhooks[a]=ka(o)}if(v(n.components)&&(i.components=Ny(n.components)),Array.isArray(n.security)&&(i.security=n.security.map($p)),Array.isArray(n.tags)&&(i.tags=n.tags.map(Iy)),n.externalDocs&&(i.externalDocs=xa(n.externalDocs)),t&&t.trim()){let a=A_(t),o=P_(a,i),s=Bo(a);return{specKind:`combined`,spec:i,codeExamples:{},arazzoSpec:a,workflows:o,sourceDescriptions:a.sourceDescriptions,workflowCodeExamples:{},workflowDag:s}}return{specKind:`openapi`,spec:i,codeExamples:{}}}function an(e){let t=[];for(let n of X_){let i=e[n];i&&t.push([n,i])}if(e.additionalOperations)for(let[n,i]of Object.entries(e.additionalOperations))t.push([n.toLowerCase(),i]);return t}function Ry(e,t){let n={};if(e.spec.paths){for(let[l,d]of Object.entries(e.spec.paths))if(!ue(d))for(let[u,p]of an(d)){let _=p.operationId||`${u}-${l}`;n[_]={route:l,method:u,op:p,isWebhook:!1}}}if(e.spec.webhooks){for(let[l,d]of Object.entries(e.spec.webhooks))if(!ue(d))for(let[u,p]of an(d)){let _=p.operationId||`webhook-${u}-${l}`;n[_]={route:l,method:u,op:p,isWebhook:!0}}}let i=Object.entries(n),r=[...i].sort((l,d)=>(d[1].op.operationId?.length??0)-(l[1].op.operationId?.length??0)),a=[...i].sort((l,d)=>d[1].route.length-l[1].route.length),o=e.workflows??[],s=[...o].sort((l,d)=>d.workflow.workflowId.length-l.workflow.workflowId.length),c=(l,d)=>{l.some(p=>p.language===d.language&&p.includeImports===d.includeImports&&p.includeWrapping===d.includeWrapping)||l.push(d)};for(let l of t){if(!l.operationId&&!l.route&&!l.webhookName&&!l.workflowId&&gy(l.filepath))continue;let d=l.filepath.toLowerCase();if(o.length>0){let _=null;if(l.workflowId&&o.some(m=>m.workflow.workflowId===l.workflowId))_=l.workflowId;else for(let m of s){let f=m.workflow.workflowId,y=f.replace(/[^a-zA-Z0-9]/g,`_`).toLowerCase();if(d===`workflow_${f.toLowerCase()}`||d===`workflow_${y}`||d.includes(`_workflows_${y}`)||d.includes(f.toLowerCase())){_=f;break}}if(_){e.workflowCodeExamples||(e.workflowCodeExamples={});let m=e.workflowCodeExamples[_]??[];c(m,l),e.workflowCodeExamples[_]=m;continue}}if(i.length===0)continue;let u=null,p=l.webhookName||l.route;if(l.operationId&&n[l.operationId])u=l.operationId;else if(p&&l.method){let _=p.replace(/^\/+/,``);for(let[m,f]of i){let y=f.route.replace(/^\/+/,``);if((!l.webhookName||f.isWebhook)&&y===_&&f.method===l.method.toLowerCase()){u=m;break}}}if(!u){for(let[_,m]of r)if(m.op.operationId&&d.includes(m.op.operationId.toLowerCase())){u=_;break}}if(!u)for(let[_,m]of a){let f=m.route.replace(/[^a-zA-Z0-9]/g,`_`).toLowerCase();if(d.includes(f)&&d.includes(m.method.toLowerCase())){u=_;break}}if(u){let _=n[u],m=l;if(_&&l.content.split(`
`).length>25){let y=M_(l.content,_.op.operationId,_.route,_.method);m=W(U({},l),{content:y??l.content})}let f=e.codeExamples[u]??[];c(f,m),e.codeExamples[u]=f}else if(l.content.split(`
`).length>1)for(let[_,m]of i){let f=M_(l.content,m.op.operationId,m.route,m.method);if(f){let y=e.codeExamples[_]??[];c(y,W(U({},l),{content:f,operationId:_,route:m.route,method:m.method})),e.codeExamples[_]=y}}}}function Ly(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function $y(e){switch(e.trim().toLowerCase()){case`c`:return`c`;case`cpp`:case`c++`:case`cxx`:return`cpp`;case`csharp`:case`cs`:case`c#`:case`dotnet`:return`csharp`;case`go`:case`golang`:return`go`;case`java`:return`java`;case`kotlin`:case`kt`:return`kotlin`;case`php`:return`php`;case`python`:case`python-all`:case`py`:return`python`;case`ruby`:case`rb`:return`ruby`;case`rust`:case`rs`:return`rust`;case`sh`:case`bash`:case`shell`:case`zsh`:case`curl`:return`sh`;case`swift`:return`swift`;case`json`:return`json`;default:return`ts`}}var Dy={c:/* @__PURE__ */ new Set([`auto`,`break`,`case`,`const`,`continue`,`default`,`do`,`else`,`enum`,`extern`,`for`,`goto`,`if`,`inline`,`register`,`restrict`,`return`,`sizeof`,`static`,`struct`,`switch`,`typedef`,`union`,`volatile`,`while`,`NULL`]),cpp:/* @__PURE__ */ new Set([`alignas`,`alignof`,`auto`,`break`,`case`,`catch`,`class`,`const`,`constexpr`,`continue`,`co_await`,`co_return`,`co_yield`,`decltype`,`default`,`delete`,`do`,`else`,`enum`,`explicit`,`export`,`extern`,`false`,`for`,`friend`,`goto`,`if`,`inline`,`mutable`,`namespace`,`new`,`noexcept`,`nullptr`,`operator`,`override`,`private`,`protected`,`public`,` return`,`return`,`sizeof`,`static`,`static_cast`,`struct`,`switch`,`template`,`this`,`throw`,`true`,`try`,`typedef`,`typename`,`union`,`using`,`virtual`,`volatile`,`while`]),csharp:/* @__PURE__ */ new Set([`abstract`,`as`,`async`,`await`,`base`,`break`,`case`,`catch`,`checked`,`class`,`const`,`continue`,`default`,`delegate`,`do`,`else`,`enum`,`event`,`explicit`,`extern`,`false`,`finally`,`fixed`,`for`,`foreach`,`goto`,`if`,`implicit`,`in`,`interface`,`internal`,`is`,`lock`,`namespace`,`new`,`null`,`operator`,`out`,`override`,`params`,`private`,`protected`,`public`,`readonly`,`record`,`ref`,`return`,`sealed`,`sizeof`,`stackalloc`,`static`,`struct`,`switch`,`this`,`throw`,`true`,`try`,`typeof`,`unchecked`,`unsafe`,`using`,`var`,`virtual`,`void`,`volatile`,`while`,`yield`]),go:/* @__PURE__ */ new Set([`break`,`case`,`chan`,`const`,`continue`,`default`,`defer`,`else`,`fallthrough`,`false`,`for`,`func`,`go`,`goto`,`if`,`import`,`interface`,`map`,`nil`,`package`,`range`,`return`,`select`,`struct`,`switch`,`true`,`type`,`var`]),java:/* @__PURE__ */ new Set([`abstract`,`assert`,`break`,`case`,`catch`,`class`,`const`,`continue`,`default`,`do`,`else`,`enum`,`extends`,`false`,`final`,`finally`,`for`,`goto`,`if`,`implements`,`import`,`instanceof`,`interface`,`native`,`new`,`null`,`package`,`private`,`protected`,`public`,`record`,`return`,`static`,`strictfp`,`super`,`switch`,`synchronized`,`this`,`throw`,`throws`,`transient`,`true`,`try`,`var`,`void`,`volatile`,`while`]),kotlin:/* @__PURE__ */ new Set([`abstract`,`actual`,`annotation`,`as`,`break`,`by`,`catch`,`class`,`companion`,`const`,`constructor`,`continue`,`crossinline`,`data`,`do`,`else`,`enum`,`expect`,`external`,`false`,`final`,`finally`,`for`,`fun`,`get`,`if`,`import`,`in`,`infix`,`init`,`inline`,`inner`,`interface`,`internal`,`is`,`it`,`lateinit`,`noinline`,`null`,`object`,`open`,`operator`,`out`,`override`,`package`,`private`,`protected`,`public`,`reified`,`return`,`sealed`,`set`,`super`,`suspend`,`tailrec`,`this`,`throw`,`true`,`try`,`typealias`,`val`,`var`,`vararg`,`when`,`where`,`while`]),php:/* @__PURE__ */ new Set([`abstract`,`and`,`array`,`as`,`break`,`callable`,`case`,`catch`,`class`,`clone`,`const`,`continue`,`declare`,`default`,`die`,`do`,`echo`,`else`,`elseif`,`empty`,`enddeclare`,`endfor`,`endforeach`,`endif`,`endswitch`,`endwhile`,`eval`,`exit`,`extends`,`false`,`final`,`finally`,`fn`,`for`,`foreach`,`function`,`global`,`goto`,`if`,`implements`,`include`,`include_once`,`instanceof`,`insteadof`,`interface`,`isset`,`list`,`match`,`namespace`,`new`,`null`,`or`,`print`,`private`,`protected`,`public`,`readonly`,`require`,`require_once`,`return`,`self`,`static`,`switch`,`throw`,`trait`,`true`,`try`,`unset`,`use`,`var`,`void`,`while`,`xor`,`yield`]),python:/* @__PURE__ */ new Set([`False`,`None`,`True`,`and`,`as`,`assert`,`async`,`await`,`break`,`class`,`continue`,`def`,`del`,`elif`,`else`,`except`,`finally`,`for`,`from`,`global`,`if`,`import`,`in`,`is`,`lambda`,`match`,`nonlocal`,`not`,`or`,`pass`,`raise`,`return`,`self`,`try`,`while`,`with`,`yield`]),ruby:/* @__PURE__ */ new Set([`BEGIN`,`END`,`__ENCODING__`,`__FILE__`,`__LINE__`,`alias`,`and`,`begin`,`break`,`case`,`class`,`def`,`defined?`,`do`,`else`,`elsif`,`end`,`ensure`,`false`,`for`,`if`,`in`,`module`,`next`,`nil`,`not`,`or`,`puts`,`raise`,`redo`,`require`,`require_relative`,`rescue`,`retry`,`return`,`self`,`super`,`then`,`true`,`undef`,`unless`,`until`,`when`,`while`,`yield`]),rust:/* @__PURE__ */ new Set([`Self`,`as`,`async`,`await`,`break`,`const`,`continue`,`crate`,`dyn`,`else`,`enum`,`extern`,`false`,`fn`,`for`,`if`,`impl`,`in`,`let`,`loop`,`match`,`mod`,`move`,`mut`,`pub`,`ref`,`return`,`self`,`static`,`struct`,`super`,`trait`,`true`,`type`,`unsafe`,`use`,`where`,`while`]),sh:/* @__PURE__ */ new Set([`case`,`curl`,`do`,`done`,`echo`,`elif`,`else`,`esac`,`exit`,`export`,`fi`,`for`,`function`,`if`,`in`,`jq`,`local`,`printf`,`read`,`return`,`select`,`set`,`shift`,`source`,`then`,`trap`,`unset`,`until`,`while`]),swift:/* @__PURE__ */ new Set([`Any`,`Protocol`,`Self`,`Type`,`actor`,`as`,`associatedtype`,`async`,`await`,`break`,`case`,`catch`,`class`,`continue`,`default`,`defer`,`deinit`,`do`,`else`,`enum`,`extension`,`fallthrough`,`false`,`fileprivate`,`final`,`for`,`func`,`guard`,`if`,`import`,`in`,`init`,`inout`,`internal`,`is`,`isolated`,`lazy`,`let`,`mutating`,`nil`,`nonisolated`,`open`,`operator`,`optional`,`override`,`private`,`protocol`,`public`,`repeat`,`required`,`rethrows`,`return`,`self`,`some`,`static`,`struct`,`subscript`,`super`,`switch`,`throw`,`throws`,`true`,`try`,`typealias`,`unowned`,`var`,`weak`,`where`,`while`]),ts:/* @__PURE__ */ new Set([`abstract`,`any`,`as`,`async`,`await`,`break`,`case`,`catch`,`class`,`const`,`constructor`,`continue`,`debugger`,`declare`,`default`,`delete`,`do`,`else`,`enum`,`export`,`extends`,`false`,`finally`,`for`,`from`,`function`,`get`,`if`,`implements`,`import`,`in`,`infer`,`instanceof`,`interface`,`is`,`keyof`,`let`,`module`,`namespace`,`never`,`new`,`null`,`of`,`package`,`private`,`protected`,`public`,`readonly`,` override`,`override`,`require`,`return`,`satisfies`,`set`,`static`,`super`,`switch`,`this`,`throw`,`true`,`try`,`type`,`typeof`,`undefined`,`unique`,`unknown`,`var`,`void`,`while`,`with`,`yield`]),json:/* @__PURE__ */ new Set([`true`,`false`,`null`])};var Uy=/* @__PURE__ */ new Set([`bool`,`boolean`,`byte`,`char`,`double`,`error`,`f32`,`f64`,`float`,`i8`,`i16`,`i32`,`i64`,`i128`,`int`,`int8_t`,`int16_t`,`int32_t`,`int64_t`,`isize`,`long`,`number`,`object`,`short`,`size_t`,`str`,`string`,`u8`,`u16`,`u32`,`u64`,`u128`,`uint`,`uint8_t`,`uint16_t`,`uint32_t`,`uint64_t`,`uintptr`,`unsigned`,`usize`,`void`,`cdd_c_error_t`,`Result`,`Option`,`Ok`,`Err`,`Some`,`Box`,`Vec`,`String`,`Task`,`Promise`,`Observable`,`URL`,`URLRequest`,`URLSession`]);function ge(e,t){let n=Ly(t);return e===`plain`?n:`<span class="cdd-tok-${e}">${n}</span>`}function kt(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function Nn(e){return kt(e)||e>=`0`&&e<=`9`}function sa(e){return e>=`0`&&e<=`9`}function L_(e,t){let n=t;for(;n<e.length&&(e.charAt(n)===` `||e.charCodeAt(n)===9);)n++;return e.charAt(n)}function Co(e,t,n,i){let r=t+n.length;for(;r<e.length;){if(i&&e.charCodeAt(r)===92){r+=2;continue}if(e.startsWith(n,r))return r+n.length;r++}return e.length}function Wo(e,t){if(!e)return``;let n=$y(t),i=Dy[n],r=n===`python`||n===`ruby`||n===`sh`||n===`php`,a=n===`c`||n===`cpp`||n===`csharp`,o=n===`php`||n===`sh`||n===`ruby`,s=[],c=0,l=e.length;for(;c<l;){let d=e.charAt(c),u=e.charAt(c+1);if(n===`php`&&(e.startsWith(`<?php`,c)||e.startsWith(`?>`,c))){let _=e.startsWith(`<?php`,c)?5:2;s.push(ge(`keyword`,e.slice(c,c+_))),c+=_;continue}if(n===`ts`&&(e.startsWith(`<script`,c)||e.startsWith(`<\/script>`,c))){let _=e.indexOf(`>`,c),m=_!==-1?_+1:l;s.push(ge(`keyword`,e.slice(c,m))),c=m;continue}if(d===`/`&&u===`*`){let _=e.indexOf(`*/`,c+2),m=_!==-1?_+2:l;s.push(ge(`comment`,e.slice(c,m))),c=m;continue}if(d===`/`&&u===`/`&&n!==`sh`&&n!==`python`&&n!==`ruby`&&n!==`json`){let _=e.indexOf(`
`,c+2),m=_!==-1?_:l;s.push(ge(`comment`,e.slice(c,m))),c=m;continue}if(n===`rust`&&d===`#`&&(u===`[`||u===`!`&&e.charAt(c+2)===`[`)){let _=e.indexOf(`]`,c+2),m=_!==-1?_+1:l;s.push(ge(`type`,e.slice(c,m))),c=m;continue}if(a&&d===`#`){let _=e.indexOf(`
`,c+1),m=_!==-1?_:l;s.push(ge(`keyword`,e.slice(c,m))),c=m;continue}if(r&&d===`#`){let _=e.indexOf(`
`,c+1),m=_!==-1?_:l;s.push(ge(`comment`,e.slice(c,m))),c=m;continue}if(n===`python`&&/^[frb]$/i.test(d)&&(u===`"`||u===`'`)){let m=e.startsWith(u.repeat(3),c+1)?u.repeat(3):u,f=Co(e,c+1,m,!0);s.push(ge(`string`,e.slice(c,f))),c=f;continue}if(e.startsWith(`"""`,c)||n===`python`&&e.startsWith(`'''`,c)){let _=e.slice(c,c+3),m=Co(e,c,_,!0);s.push(ge(`string`,e.slice(c,m))),c=m;continue}if(d===`"`||d===`'`||d==="`"&&(n===`ts`||n===`go`||n===`sh`)){if(n===`rust`&&d===`'`&&kt(u)&&e.charAt(c+2)!==`'`){let f=c+2;for(;Nn(e.charAt(f));)f++;s.push(ge(`type`,e.slice(c,f))),c=f;continue}let _=Co(e,c,d,d!=="`"),m=e.slice(c,_);n===`json`&&d===`"`&&L_(e,_)===`:`?s.push(ge(`variable`,m)):s.push(ge(`string`,m)),c=_;continue}if(d===`@`&&kt(u)){let _=c+2;for(;Nn(e.charAt(_));)_++;let m=n===`ruby`?`variable`:`type`;s.push(ge(m,e.slice(c,_))),c=_;continue}if(o&&d===`$`){if(u===`{`){let _=e.indexOf(`}`,c+2),m=_!==-1?_+1:l;s.push(ge(`variable`,e.slice(c,m))),c=m;continue}if(kt(u)||sa(u)){let _=c+2;for(;Nn(e.charAt(_));)_++;s.push(ge(`variable`,e.slice(c,_))),c=_;continue}}if(n===`ruby`&&d===`:`&&kt(u)){let _=c+2;for(;Nn(e.charAt(_));)_++;s.push(ge(`string`,e.slice(c,_))),c=_;continue}if(n===`sh`&&d===`-`&&(c===0||/\s/.test(e.charAt(c-1)))&&(kt(u)||u===`-`&&kt(e.charAt(c+2)))){let _=c+1;for(;Nn(e.charAt(_))||e.charAt(_)===`-`;)_++;s.push(ge(`variable`,e.slice(c,_))),c=_;continue}if(sa(d)||d===`-`&&sa(u)&&n===`json`){let _=c+1;if(d===`0`&&/^[xX]$/.test(u))for(_+=1;/[0-9a-fA-F_]/.test(e.charAt(_));)_++;else for(;/[0-9._eE+-]/.test(e.charAt(_));)_++;s.push(ge(`number`,e.slice(c,_))),c=_;continue}if(kt(d)){let _=c+1;for(;_<l&&Nn(e.charAt(_));)_++;(n===`rust`&&e.charAt(_)===`!`||n===`ruby`&&e.charAt(_)===`?`)&&_++;let m=e.slice(c,_),f=L_(e,_);if(i.has(m)){let y=/^(?:true|false|True|False|null|nil|None|nullptr|NULL)$/.test(m);s.push(ge(y?`number`:`keyword`,m))}else Uy.has(m)?s.push(ge(`type`,m)):f===`(`||n===`rust`&&m.endsWith(`!`)?s.push(ge(`function`,m)):/^[A-Z]/.test(m)&&!/^[A-Z0-9_]+$/.test(m)?s.push(ge(`type`,m)):s.push(ge(`plain`,m));c=_;continue}if(`+-*/%=<>!&|^~?:`.includes(d)){let _=c+1;for(;_<l&&`+-*/%=<>!&|^~?:`.includes(e.charAt(_));)_++;s.push(ge(`operator`,e.slice(c,_))),c=_;continue}let p=c+1;for(;p<l&&!kt(e.charAt(p))&&!sa(e.charAt(p))&&!`"+-*/%=<>!&|^~?:#@\`$'`.includes(e.charAt(p));)p++;s.push(ge(`plain`,e.slice(c,p))),c=p}return s.join(``)}function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function $_(e){let t=e.trim();return/^(javascript|vbscript|data):/i.test(t)?`#`:h(t)}function wi(e){return e.replace(/[^a-zA-Z0-9_-]/g,``)}function ca(e){if(!e||!e.url)return`https://api.example.com`;let t=e.url;if(e.variables)for(let[n,i]of Object.entries(e.variables))t=t.replace(new RegExp(`\\{${n}\\}`,`g`),i.default);return t}function pt(e){return e?pe.parse(e,{async:!1}).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,``).replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,``).replace(/href\s*=\s*"(?:javascript|vbscript|data):[^"]*"/gi,`href="#"`).replace(/href\s*=\s*'(?:javascript|vbscript|data):[^']*'/gi,`href='#'`):``}function zy(e,t){if(!ue(e))return e;let i=e.$ref.startsWith(`#/components/parameters/`)?e.$ref.slice(24):e.$ref,r=t?.parameters?.[i];if(r&&!ue(r))return r}function Dp(e,t,n){let i=/* @__PURE__ */ new Map,r=[...e?.parameters??[],...t.parameters??[]];for(let a of r){let o=zy(a,n);o&&i.set(`${o.in}:${o.name}`,o)}return Array.from(i.values())}function Up(e,t){if(!e)return;if(!ue(e))return e;let i=e.$ref.startsWith(`#/components/requestBodies/`)?e.$ref.slice(27):e.$ref,r=t?.requestBodies?.[i];if(r&&!ue(r))return r}function By(e,t){if(!e)return;if(!ue(e))return e;let i=e.$ref.startsWith(`#/components/responses/`)?e.$ref.slice(23):e.$ref,r=t?.responses?.[i];if(r&&!ue(r))return r}function D_(e,t,n,i=`https://api.example.com`,r,a){let o=e.toUpperCase(),l=`curl ${o===`GET`?``:`-X ${o} `}"${i.endsWith(`/`)?i.slice(0,-1):i}${t}"`,d=` \\
  `,u=Dp(r,n,a);for(let _ of u)_.in===`header`&&(l+=`${d}-H "${_.name}: <value>"`);let p=Up(n.requestBody,a);if(p&&p.content){let _=Object.keys(p.content)[0];_&&(l+=`${d}-H "Content-Type: ${_}"`,l+=`${d}-d '{"key": "value"}'`)}return l}var Gy=10;function on(e,t=0,n=``,i=Mi){if(t>Gy)return`<span class="cdd-prop-type">object</span>`;if(ue(e))return`<span class="cdd-schema-ref">${h(e.$ref.split(`/`).pop()||e.$ref)}</span>`;let r=`<div class="cdd-schema-container" style="margin-left: ${t*16}px">`;if(e.type===`object`&&e.properties){r+=`<table class="cdd-schema-table">
      <thead><tr><th>${h(i.tableHeaderProperty)}</th><th>${h(i.tableHeaderType)}</th><th>${h(i.tableHeaderDescription)}</th></tr></thead>
      <tbody>`;for(let[a,o]of Object.entries(e.properties)){let s=e.required?.includes(a)??!1,c=n?`${n}-prop-${a}`:`prop-${a}`;if(ue(o)){let l=o.$ref.split(`/`).pop()||o.$ref;r+=`<tr id="${h(c)}" class="cdd-deep-link-row">
        <td><a href="#${h(c)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${h(a)}${s?`<span class="cdd-required">*</span>`:``}</span></td>
        <td><span class="cdd-schema-ref">${h(l)}</span></td>
        <td><div class="cdd-prop-desc">${pt(o.description)}</div></td>
      </tr>`}else{let l=o.type||`any`;r+=`<tr id="${h(c)}" class="cdd-deep-link-row">
        <td><a href="#${h(c)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${h(a)}${s?`<span class="cdd-required">*</span>`:``}</span></td>
        <td><span class="cdd-prop-type">${h(l)}</span></td>
        <td><div class="cdd-prop-desc">${pt(o.description)}</div></td>
      </tr>`,(o.type===`object`||o.type===`array`)&&(r+=`<tr><td colspan="3">${on(o,t+1,c,i)}</td></tr>`)}}r+=`</tbody></table>`}else e.type===`array`&&e.items?r+=`<div class="cdd-schema-array">${h(i.arrayOf)} ${on(e.items,t+1,n,i)}</div>`:(r+=`<span class="cdd-prop-type">${h(e.type||`any`)}</span>`,e.description&&(r+=`<div class="cdd-prop-desc">${pt(e.description)}</div>`));return r+=`</div>`,r}function Oi(e){if(Vn(e)){let t=typeof e.type==`object`&&e.type!==null?`${e.type.type} (${e.type.version})`:e.type||`jsonpointer`;return`<code class="cdd-expr-badge">${h(e.context)}</code> &rarr; <code>${h(e.selector)}</code> <span class="cdd-badge cdd-badge-meta">${h(t)}</span>`}return typeof e==`string`?`<code>${h(e)}</code>`:`<code>${h(JSON.stringify(e))}</code>`}function Fy(e){return e.type?typeof e.type==`string`?e.type:`${e.type.type} (${e.type.version})`:`simple`}function Vo(e,t,n,i,r){return`
          <aside class="cdd-endpoint-code">
            <div class="cdd-code-card">
              <div class="cdd-code-tabs">
                <input type="radio" id="tab-curl-${h(e)}" name="tab-${h(e)}" class="cdd-tab-input" checked>
                <label for="tab-curl-${h(e)}" class="cdd-tab-label">${h(r.tabCurl)}</label>
                
                <input type="radio" id="tab-sdk-${h(e)}" name="tab-${h(e)}" class="cdd-tab-input">
                <label for="tab-sdk-${h(e)}" class="cdd-tab-label">${h(r.tabSdk)}</label>

                <div class="cdd-tab-content cdd-tab-content-curl">
                  <div style="position: relative;">
                    <button class="cdd-copy-btn">${h(r.copy)}</button>
                    <pre><code class="language-bash" data-raw-code="${h(t)}">${Wo(t,`bash`)}</code></pre>
                  </div>
                </div>
                <div class="cdd-tab-content cdd-tab-content-sdk">
                  ${i.map(a=>{let o=wi(a),s=n.filter(l=>l.language===a),c=a===`ts`?`typescript`:a===`sh`?`bash`:o;return`
                      <div class="cdd-lang-block cdd-show-if-${o}">
                        ${s.length>0?s.map(l=>{return`
                          <div class="cdd-variant-block ${l.includeImports?`cdd-show-if-imports`:`cdd-hide-if-imports`} ${l.includeWrapping?`cdd-show-if-wrapping`:`cdd-hide-if-wrapping`}">
                            <div style="position: relative;">
                              <button class="cdd-copy-btn">${h(r.copy)}</button>
                              <pre><code class="language-${h(c)}" data-raw-code="${h(l.content)}">${Wo(l.content,l.language)}</code></pre>
                            </div>
                          </div>
                        `}).join(``):`<div class="cdd-no-example">${h(r.noExampleFor)} ${h(a)}</div>`}
                      </div>
                    `}).join(``)}
                </div>
              </div>
            </div>
          </aside>`}function Wy(e,t,n,i=Mi){let r=e.workflow,a=`workflow-${r.workflowId}`,o=t.workflowCodeExamples?.[r.workflowId]??[],s=ca(t.spec.servers?.[0]),c=r.dependsOn&&r.dependsOn.length>0?`<div class="cdd-workflow-depends">
                <strong>${h(i.workflowDependsOnHeading)}:</strong>
                ${r.dependsOn.map(_=>{return`<a href="#workflow-${h(_.split(`.workflows.`)[1]??_)}" class="cdd-badge cdd-badge-workflow">${h(_)}</a>`}).join(` `)}
              </div>`:``,l=e.hasCycles?`<span class="cdd-badge cdd-badge-delete">DAG CYCLE DETECTED</span>`:``,d=e.resolvedInputs?`<h3 class="cdd-section-title">${h(i.workflowInputsHeading)}</h3>
           ${on(e.resolvedInputs,0,`${a}-input`,i)}`:``,u=e.normalizedSteps.map((_,m)=>{let f=_.step,y=`step-${r.workflowId}-${f.stepId}`,C=``;if(_.linkedTarget){let T=_.linkedTarget;if(T.kind===`workflow`)C=`<a href="#${h(T.anchorId||``)}" class="cdd-badge cdd-badge-workflow">WORKFLOW: ${h(T.operationId||``)}</a>`;else if(T.kind===`channel`)C=`<span class="cdd-badge cdd-badge-channel">${h((T.method||`send`).toUpperCase())} ${h(T.route||``)}</span>`;else{let A=(T.method||`OP`).toUpperCase(),z=T.route?`${A} ${T.route}`:T.operationId||A;C=T.anchorId?`<a href="#${h(T.anchorId)}" class="cdd-badge cdd-badge-${h(T.method||`get`)} cdd-badge-${h(A)}">${h(z)}</a>`:`<span class="cdd-badge cdd-badge-get">${h(z)}</span>`}}let b=[];if(f.timeout!==void 0&&b.push(`<span class="cdd-badge cdd-badge-meta">timeout: ${h(String(f.timeout))}ms</span>`),f.correlationId&&b.push(`<span class="cdd-badge cdd-badge-meta">correlationId: ${h(f.correlationId)}</span>`),_.upstreamStepIds.length>0)for(let T of _.upstreamStepIds)b.push(`<a href="#step-${h(r.workflowId)}-${h(T)}" class="cdd-badge cdd-badge-meta">&larr; ${h(T)}</a>`);let w=_.mergedParameters.length>0?`<h4 class="cdd-step-subtitle">${h(i.stepParametersHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${h(i.tableHeaderName)}</th><th>${h(i.tableHeaderIn)}</th><th>Value / Expression</th></tr></thead>
                         <tbody>
                           ${_.mergedParameters.map(T=>`<tr>
                                 <td><code>${h(T.name)}</code></td>
                                 <td>${h(T.in||`workflow`)}</td>
                                 <td>${Oi(T.value)}</td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``,N=f.requestBody?`<h4 class="cdd-step-subtitle">${h(i.stepRequestBodyHeading)}${f.requestBody.contentType?` (<code>${h(f.requestBody.contentType)}</code>)`:``}</h4>
                   ${f.requestBody.payload!==void 0?`<pre class="cdd-payload-pre"><code class="language-json">${Wo(typeof f.requestBody.payload==`string`?f.requestBody.payload:JSON.stringify(f.requestBody.payload,null,2),`json`)}</code></pre>`:``}
                   ${f.requestBody.replacements&&f.requestBody.replacements.length>0?`<table class="cdd-params-table">
                                <thead><tr><th>Target Pointer</th><th>Replacement Value</th></tr></thead>
                                <tbody>
                                  ${f.requestBody.replacements.map(T=>`<tr>
                                        <td><code>${h(T.target)}</code></td>
                                        <td>${Oi(T.value)}</td>
                                      </tr>`).join(``)}
                                </tbody>
                              </table>`:``}`:``,F=f.successCriteria&&f.successCriteria.length>0?`<h4 class="cdd-step-subtitle">${h(i.successCriteriaHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>Context</th><th>Condition</th><th>${h(i.tableHeaderType)}</th></tr></thead>
                         <tbody>
                           ${f.successCriteria.map(T=>`<tr>
                                 <td><code>${h(T.context||`$statusCode`)}</code></td>
                                 <td><code>${h(T.condition)}</code></td>
                                 <td><span class="cdd-badge cdd-badge-meta">${h(Fy(T))}</span></td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``,K=_.resolvedOnSuccess.length>0?`<h4 class="cdd-step-subtitle">${h(i.onSuccessHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${_.resolvedOnSuccess.map(T=>{let A=T.stepId?` &rarr; step <code>${h(T.stepId)}</code>`:T.workflowId?` &rarr; workflow <code>${h(T.workflowId)}</code>`:``;return`<li><span class="cdd-badge cdd-badge-post">${h(T.type.toUpperCase())}</span> <strong>${h(T.name)}</strong>${A}</li>`}).join(``)}
                       </ul>`:``,X=_.resolvedOnFailure.length>0?`<h4 class="cdd-step-subtitle">${h(i.onFailureHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${_.resolvedOnFailure.map(T=>{let A=T.stepId?` &rarr; step <code>${h(T.stepId)}</code>`:T.workflowId?` &rarr; workflow <code>${h(T.workflowId)}</code>`:``,z=T.retryLimit!==void 0||T.retryAfter!==void 0?` (retryLimit: ${h(String(T.retryLimit??1))}, retryAfter: ${h(String(T.retryAfter??0))}s)`:``;return`<li><span class="cdd-badge cdd-badge-delete">${h(T.type.toUpperCase())}</span> <strong>${h(T.name)}</strong>${A}${z}</li>`}).join(``)}
                       </ul>`:``,ae=f.outputs&&Object.keys(f.outputs).length>0?`<h4 class="cdd-step-subtitle">${h(i.stepOutputsHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${h(i.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                         <tbody>
                           ${Object.entries(f.outputs).map(([T,A])=>`<tr>
                                 <td><code>${h(T)}</code></td>
                                 <td>${Oi(A)}</td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``;return`
              <div id="${h(y)}" class="cdd-step-card cdd-deep-link-row" data-step-id="${h(f.stepId)}" data-method="${h((_.linkedTarget?.method||`GET`).toUpperCase())}" data-route="${h(_.linkedTarget?.route||`/${f.stepId}`)}" data-base-url="${h(s)}">
                <div class="cdd-step-header">
                  <span class="cdd-step-index">${m+1}</span>
                  <a href="#${h(y)}" class="cdd-anchor">#</a>
                  <strong class="cdd-step-title">${h(f.stepId)}</strong>
                  ${C}
                  ${b.join(` `)}
                </div>
                ${f.description?`<div class="cdd-description">${pt(f.description)}</div>`:``}
                ${w}
                ${N}
                ${F}
                ${K}
                ${X}
                ${ae}
              </div>`}).join(``),p=r.outputs&&Object.keys(r.outputs).length>0?`<h3 class="cdd-section-title">${h(i.workflowOutputsHeading)}</h3>
               <table class="cdd-params-table">
                 <thead><tr><th>${h(i.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                 <tbody>
                   ${Object.entries(r.outputs).map(([_,m])=>`<tr>
                         <td><code>${h(_)}</code></td>
                         <td>${Oi(m)}</td>
                       </tr>`).join(``)}
                 </tbody>
               </table>`:``;return`
        <article id="${h(a)}" class="cdd-endpoint cdd-workflow">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${h(r.summary||r.workflowId)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-workflow">WORKFLOW</span>
              <code class="cdd-path-text">${h(r.workflowId)}</code>
              ${l}
            </div>
            ${r.description?`<div class="cdd-description">${pt(r.description)}</div>`:``}
            ${c}
            ${d}

            <h3 class="cdd-section-title">${h(i.stepsHeading)}</h3>
            <div class="cdd-steps-pipeline">
              ${u}
            </div>

            ${p}

            <details class="cdd-try-it-out">
              <summary class="cdd-try-summary">${h(i.runWorkflowBtn)}</summary>
              <form class="cdd-workflow-try-form" action="/" method="POST" data-workflow-id="${h(r.workflowId)}" data-base-url="${h(s)}">
                <div class="cdd-try-field">
                  <label for="try-wf-${h(r.workflowId)}-inputs">${h(i.workflowInputsHeading)} (JSON)</label>
                  <textarea id="try-wf-${h(r.workflowId)}-inputs" name="workflowInputs" rows="3">{}</textarea>
                </div>
                <button type="submit" class="cdd-try-btn">${h(i.runWorkflowBtn)}</button>
              </form>
              <div class="cdd-try-response" style="display: none; margin-top: 1rem;">
                <h4 style="margin:0 0 0.5rem 0;">${h(i.response)}</h4>
                <div class="cdd-try-status"></div>
                <pre><code class="cdd-try-body"></code></pre>
              </div>
            </details>
          </div>

          ${Vo(a,e.cliPreview,o,n,i)}
        </article>`}function Vy(e,t=Mi){if(!e)return``;let n=Object.entries(e.inputs??{}),i=Object.entries(e.parameters??{}),r=Object.entries(e.successActions??{}),a=Object.entries(e.failureActions??{});if(n.length===0&&i.length===0&&r.length===0&&a.length===0)return``;let o=`<h2 id="section-arazzo-components" class="cdd-main-title">${h(t.arazzoComponentsHeading)}</h2>`;for(let[s,c]of n)o+=`<div id="arazzo-input-${h(s)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.inputs.${h(s)}</h3>
          ${on(c,0,`arazzo-input-${s}`,t)}
        </div>`;return i.length>0&&(o+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.parameters</h3>
          <table class="cdd-params-table">
            <thead><tr><th>Key</th><th>${h(t.tableHeaderName)}</th><th>${h(t.tableHeaderIn)}</th><th>Default Value</th></tr></thead>
            <tbody>
              ${i.map(([s,c])=>`<tr id="arazzo-param-${h(s)}">
                    <td><code>${h(s)}</code></td>
                    <td><code>${h(c.name)}</code></td>
                    <td>${h(c.in||`workflow`)}</td>
                    <td>${Oi(c.value)}</td>
                  </tr>`).join(``)}
            </tbody>
          </table>
        </div>`),r.length>0&&(o+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.successActions</h3>
          <ul class="cdd-action-list">
            ${r.map(([s,c])=>`<li id="arazzo-success-${h(s)}"><code>${h(s)}</code>: <span class="cdd-badge cdd-badge-post">${h(c.type.toUpperCase())}</span> <strong>${h(c.name)}</strong></li>`).join(``)}
          </ul>
        </div>`),a.length>0&&(o+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.failureActions</h3>
          <ul class="cdd-action-list">
            ${a.map(([s,c])=>`<li id="arazzo-failure-${h(s)}"><code>${h(s)}</code>: <span class="cdd-badge cdd-badge-delete">${h(c.type.toUpperCase())}</span> <strong>${h(c.name)}</strong></li>`).join(``)}
          </ul>
        </div>`),o}function Hy(e,t=[],n=`light`,i={},r,a,o=!1,s=!1){let c=U(U({},Mi),i),l=My(e,r);t.length>0&&Ry(l,t);let d=Array.from(new Set(t.map(A=>A.language)));d.length===0&&d.push(`javascript`);let u=a&&d.includes(a)?d.indexOf(a):0,p=l.spec,_=ca(p.servers?.[0]),m=p.paths||{},f=``,y=``,C=``,b=``,w=``,N=l.sourceDescriptions&&l.sourceDescriptions.length>0?`<div class="cdd-source-descriptions">
                <strong>${h(c.sourceDescriptionsHeading)}:</strong>
                ${l.sourceDescriptions.map(A=>`<span class="cdd-source-chip"><span class="cdd-badge cdd-badge-meta">${h(A.type||`openapi`)}</span> <strong>${h(A.name)}</strong>: <code>${h(A.url)}</code></span>`).join(` `)}
              </div>`:``;for(let[A,z]of Object.entries(m)){if(ue(z))continue;let J=an(z),Y=!1,S=`<details class="cdd-toc-group"><summary class="cdd-toc-route">${h(A)}</summary>`;for(let[R,x]of J){Y=!0;let I=x.operationId||`${R}-${A}`,O=R.toUpperCase(),q=x.servers?.[0]?ca(x.servers[0]):z.servers?.[0]?ca(z.servers[0]):_;S+=`<a href="#${h(I)}" class="cdd-toc-item cdd-method-${h(R)}">${h(O)}</a>`;let M=D_(R,A,x,q,z,p.components),ne=l.codeExamples[I]||[],ie=Dp(z,x,p.components),oe=Up(x.requestBody,p.components),ce=``;if(oe&&oe.content){let te=[];for(let[Te,Re]of Object.entries(oe.content))Re.schema&&te.push(`<div class="cdd-media-block"><code class="cdd-badge cdd-badge-meta">${h(Te)}</code>${on(Re.schema,0,`${I}-req`,c)}</div>`);te.length>0&&(ce=`<h3 class="cdd-section-title">${h(c.requestBody)}</h3>
                    ${oe.description?`<div class="cdd-description">${pt(oe.description)}</div>`:``}
                    ${te.join(``)}`)}let Ce=``;if(x.responses){let te=[];for(let[Te,Re]of Object.entries(x.responses)){let Tt=By(Re,p.components);if(!Tt)continue;let ms=[];if(Tt.content)for(let[Fp,fs]of Object.entries(Tt.content))fs.schema&&ms.push(`<div><code class="cdd-badge cdd-badge-meta">${h(Fp)}</code>${on(fs.schema,0,`${I}-resp-${Te}`,c)}</div>`);te.push(`<tr><td><code>${h(Te)}</code></td><td>${pt(Tt.description)}${ms.join(``)}</td></tr>`)}te.length>0&&(Ce=`<h3 class="cdd-section-title">${h(c.response)}</h3>
                    <table class="cdd-params-table">
                      <thead><tr><th>Status</th><th>${h(c.tableHeaderDescription)}</th></tr></thead>
                      <tbody>${te.join(``)}</tbody>
                    </table>`)}f+=`
        <article id="${h(I)}" class="cdd-endpoint">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${h(x.summary||A)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-${h(R)} cdd-badge-${h(O)}">${h(O)}</span>
              <code class="cdd-path-text">${h(A)}</code>
            </div>
            ${x.description?`<div class="cdd-description">${pt(x.description)}</div>`:``}
            
            ${ie.length>0?`
              <h3 class="cdd-section-title">${h(c.parameters)}</h3>
              <table class="cdd-params-table">
                <thead><tr><th>${h(c.tableHeaderName)}</th><th>${h(c.tableHeaderIn)}</th><th>${h(c.tableHeaderType)}</th><th>${h(c.tableHeaderDescription)}</th></tr></thead>
                <tbody>
                  ${ie.map(te=>{let Te=`${I}-param-${te.name}`,Re=te.schema&&!ue(te.schema)&&te.schema.type?te.schema.type:`any`;return`<tr id="${h(Te)}" class="cdd-deep-link-row">
                      <td><a href="#${h(Te)}" class="cdd-anchor">#</a><code>${h(te.name)}${te.required?`*`:``}</code></td>
                      <td>${h(te.in)}</td>
                      <td>${h(Re)}</td>
                      <td>${pt(te.description)}</td>
                    </tr>`}).join(``)}
                </tbody>
              </table>
            `:``}
            ${ce}
            ${Ce}

            <details class="cdd-try-it-out">
              <summary class="cdd-try-summary">${h(c.tryItOut)}</summary>
              <form class="cdd-try-form" method="${R===`get`?`GET`:`POST`}" action="/" data-method="${h(O)}" data-route="${h(A)}" data-base-url="${h(q)}">
                ${ie.map(te=>`
                    <div class="cdd-try-field">
                      <label for="try-${h(I)}-${h(te.name)}">${h(te.name)} (${h(te.in)})${te.required?` *`:``}</label>
                      <input type="text" id="try-${h(I)}-${h(te.name)}" name="${h(te.name)}" data-in="${h(te.in)}" ${te.required?`required`:``}>
                    </div>
                  `).join(``)}
                ${oe?`
                  <div class="cdd-try-field">
                    <label for="try-${h(I)}-body">${h(c.requestBody)}</label>
                    <textarea id="try-${h(I)}-body" name="requestBody" rows="4"></textarea>
                  </div>
                `:``}
                <button type="submit" class="cdd-try-btn">${h(c.execute)}</button>
              </form>
              <div class="cdd-try-response" style="display: none; margin-top: 1rem;">
                <h4 style="margin:0 0 0.5rem 0;">${h(c.response)}</h4>
                <div class="cdd-try-status"></div>
                <pre><code class="cdd-try-body"></code></pre>
              </div>
            </details>
          </div>

          ${Vo(I,M,ne,d,c)}
        </article>
      `}S+=`</details>`,Y&&(y+=S)}if(p.webhooks)for(let[A,z]of Object.entries(p.webhooks)){if(ue(z))continue;let J=an(z);for(let[Y,S]of J){let R=S.operationId||`webhook-${Y}-${A}`,x=Y.toUpperCase();C+=`<a href="#${h(R)}" class="cdd-toc-item">WEBHOOK: ${h(A)} (${h(x)})</a>`;let I=D_(Y,`/${A}`,S,_,z,p.components),O=l.codeExamples[R]||[];f+=`
        <article id="${h(R)}" class="cdd-endpoint cdd-webhook">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${h(S.summary||A)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-post">WEBHOOK</span>
              <span class="cdd-badge cdd-badge-${h(Y)} cdd-badge-${h(x)}">${h(x)}</span>
              <code class="cdd-path-text">${h(A)}</code>
            </div>
            ${S.description?`<div class="cdd-description">${pt(S.description)}</div>`:``}
          </div>
          ${Vo(R,I,O,d,c)}
        </article>`}}if(l.workflows&&l.workflows.length>0){f+=`<h2 id="section-workflows" class="cdd-main-title">${h(c.workflowsHeading)}</h2>`;for(let A of l.workflows){let z=A.workflow,J=`workflow-${z.workflowId}`;b+=`<details class="cdd-toc-group" open>
              <summary class="cdd-toc-route"><a href="#${h(J)}" class="cdd-toc-item cdd-toc-workflow-item">WORKFLOW: ${h(z.workflowId)}</a></summary>
              ${z.steps.map(Y=>`<a href="#step-${h(z.workflowId)}-${h(Y.stepId)}" class="cdd-toc-item">${h(Y.stepId)}</a>`).join(``)}
            </details>`,f+=Wy(A,l,d,c)}}if(p.components?.schemas){w+=`<h2 id="section-schemas" class="cdd-main-title">${h(c.schemas)}</h2>`;for(let[A,z]of Object.entries(p.components.schemas))w+=`
        <div id="schema-${h(A)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">${h(A)}</h3>
          ${on(z,0,`schema-${A}`,c)}
        </div>
      `}l.arazzoSpec?.components&&(w+=Vy(l.arazzoSpec.components,c));let F=`
    --cdd-primary: #005ac1;
    --cdd-on-primary: #ffffff;
    --cdd-background: #fdfbff;
    --cdd-surface: #fdfbff;
    --cdd-on-surface: #1b1b1f;
    --cdd-on-surface-variant: #45464f;
    --cdd-outline: #757780;
    --cdd-outline-variant: #c5c6d0;
    --cdd-tok-keyword: #c586c0;
    --cdd-tok-string: #ce9178;
    --cdd-tok-comment: #6a9955;
    --cdd-tok-number: #b5cea8;
    --cdd-tok-function: #dcdcaa;
    --cdd-tok-type: #4ec9b0;
    --cdd-tok-variable: #9cdcfe;
    --cdd-tok-operator: #d4d4d4;
  `,K=`
    --cdd-primary: #adc6ff;
    --cdd-on-primary: #002e69;
    --cdd-background: #1b1b1f;
    --cdd-surface: #1b1b1f;
    --cdd-on-surface: #e3e2e6;
    --cdd-on-surface-variant: #c5c6d0;
    --cdd-outline: #8f9099;
    --cdd-outline-variant: #45464f;
    --cdd-tok-keyword: #d8a0df;
    --cdd-tok-string: #f0a890;
    --cdd-tok-comment: #7ec699;
    --cdd-tok-number: #d7ba7d;
    --cdd-tok-function: #dcdcaa;
    --cdd-tok-type: #4ec9b0;
    --cdd-tok-variable: #9cdcfe;
    --cdd-tok-operator: #e3e2e6;
  `,X=d.map(wi);return{stylesHtml:`<style>
    /* Progressive Enhancement: Hide JS-dependent elements when JS is disabled */
    .no-js .cdd-copy-btn,
    .no-js .cdd-search-input,
    .no-js .cdd-try-it-out,
    .no-js .cdd-code-tabs input[type="radio"],
    .no-js .cdd-code-tabs label { display: none; }
    
    .no-js .cdd-code-tabs .cdd-tab-content { display: block; margin-bottom: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }
    .no-js .cdd-code-tabs .cdd-tab-content:before { content: "Code block: "; font-size: 0.75rem; opacity: 0.7; }
    .no-js .cdd-lang-block { display: block; margin-bottom: 1rem; }
    .no-js .cdd-variant-block.cdd-hide-if-imports.cdd-hide-if-wrapping { display: block; }
  </style>
  <style>
    :root, :host {
      ${F}
      --cdd-get: #00668b; --cdd-get-bg: #c2e8ff;
      --cdd-post: #006e2c; --cdd-post-bg: #b4f3b0;
      --cdd-put: #944a00; --cdd-put-bg: #ffdcbe;
      --cdd-delete: #ba1a1a; --cdd-delete-bg: #ffdad6;
      --cdd-patch: #006a6a; --cdd-patch-bg: #6ff5f5;
      --cdd-options: #5b4300; --cdd-options-bg: #ffdf9a;
      --cdd-head: #4355b9; --cdd-head-bg: #dee0ff;
      --cdd-trace: #705573; --cdd-trace-bg: #fad7ff;
      --cdd-query: #005ac1; --cdd-query-bg: #d8e2ff;
      --cdd-workflow: #6750a4; --cdd-workflow-bg: #eaddff;
      
      --cdd-display-imports: ${o?`block`:`none`};
      --cdd-display-wrapping: ${s?`block`:`none`};
    }

    #opt-dark-mode:checked ~ .cdd-layout,
    [data-theme="dark"],
    :host([data-theme="dark"]),
    :host([theme="dark"]) {
      ${K}
    }

    .cdd-tok-keyword { color: var(--cdd-tok-keyword); font-weight: 500; }
    .cdd-tok-string { color: var(--cdd-tok-string); }
    .cdd-tok-comment { color: var(--cdd-tok-comment); font-style: italic; }
    .cdd-tok-number { color: var(--cdd-tok-number); }
    .cdd-tok-function { color: var(--cdd-tok-function); }
    .cdd-tok-type { color: var(--cdd-tok-type); }
    .cdd-tok-variable { color: var(--cdd-tok-variable); }
    .cdd-tok-operator { color: var(--cdd-tok-operator); }

    .cdd-lang-block { display: none; }
    ${X.map(A=>`#lang-opt-${A}:checked ~ .cdd-layout .cdd-show-if-${A} { display: block; }`).join(`
`)}
    #opt-imports:checked ~ * { --cdd-display-imports: block; }
    #opt-imports:not(:checked) ~ * { --cdd-display-imports: none; }
    #opt-wrapping:checked ~ * { --cdd-display-wrapping: block; }
    #opt-wrapping:not(:checked) ~ * { --cdd-display-wrapping: none; }

    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background: var(--cdd-background);
      color: var(--cdd-on-surface);
      line-height: 1.5;
    }

    .cdd-visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

    .cdd-layout {
      display: grid;
      grid-template-columns: 280px 1fr 350px;
      height: 100vh;
      overflow: hidden;
      background: var(--cdd-background);
      color: var(--cdd-on-surface);
    }

    @media (max-width: 1200px) {
      .cdd-layout { grid-template-columns: 250px 1fr; }
      .cdd-sidebar-right { display: none; }
    }

    @media (max-width: 768px) {
      .cdd-layout { grid-template-columns: 1fr; }
      .cdd-sidebar-left { display: none; }
    }

    .cdd-sidebar-left, .cdd-sidebar-right {
      background: var(--cdd-surface);
      border-right: 1px solid var(--cdd-outline-variant);
      overflow-y: auto;
      padding: 1rem;
    }
    
    .cdd-sidebar-right { border-right: none; border-left: 1px solid var(--cdd-outline-variant); }

    .cdd-main {
      overflow-y: auto;
      padding: 2rem;
      scroll-behavior: smooth;
    }

    .cdd-toc-group { margin-bottom: 0.5rem; }
    .cdd-toc-route { font-size: 0.875rem; font-weight: 500; cursor: pointer; padding: 0.25rem 0; }
    .cdd-toc-item { display: block; font-size: 0.75rem; padding: 0.25rem 1rem; text-decoration: none; color: var(--cdd-on-surface-variant); border-radius: 4px; }
    .cdd-toc-item:hover { background: rgba(0,0,0,0.05); }

    .cdd-endpoint { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; border-bottom: 1px solid var(--cdd-outline-variant); padding-bottom: 4rem; content-visibility: auto; contain-intrinsic-size: 1000px; }
    @media (min-width: 1600px) {
      .cdd-endpoint { grid-template-columns: 1fr 400px; }
    }

    .cdd-anchor { text-decoration: none; color: var(--cdd-primary); opacity: 0; margin-right: 0.5rem; font-family: monospace; }
    .cdd-deep-link-row:hover .cdd-anchor { opacity: 1; }
    .cdd-deep-link-row:target { background: rgba(0, 90, 193, 0.1); outline: 2px solid var(--cdd-primary); }

    .cdd-badge { padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-decoration: none; display: inline-block; }
    .cdd-badge-GET, .cdd-badge-get { background: var(--cdd-get-bg); color: var(--cdd-get); }
    .cdd-badge-POST, .cdd-badge-post { background: var(--cdd-post-bg); color: var(--cdd-post); }
    .cdd-badge-PUT, .cdd-badge-put { background: var(--cdd-put-bg); color: var(--cdd-put); }
    .cdd-badge-DELETE, .cdd-badge-delete { background: var(--cdd-delete-bg); color: var(--cdd-delete); }
    .cdd-badge-PATCH, .cdd-badge-patch { background: var(--cdd-patch-bg); color: var(--cdd-patch); }
    .cdd-badge-OPTIONS, .cdd-badge-options { background: var(--cdd-options-bg); color: var(--cdd-options); }
    .cdd-badge-HEAD, .cdd-badge-head { background: var(--cdd-head-bg); color: var(--cdd-head); }
    .cdd-badge-TRACE, .cdd-badge-trace { background: var(--cdd-trace-bg); color: var(--cdd-trace); }
    .cdd-badge-QUERY, .cdd-badge-query { background: var(--cdd-query-bg); color: var(--cdd-query); }
    .cdd-badge-workflow { background: var(--cdd-workflow-bg); color: var(--cdd-workflow); }
    .cdd-badge-channel { background: var(--cdd-options-bg); color: var(--cdd-options); }
    .cdd-badge-meta { background: rgba(117, 119, 128, 0.15); color: var(--cdd-on-surface-variant); font-weight: 500; }

    .cdd-steps-pipeline { display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; border-left: 3px solid var(--cdd-primary); padding-left: 1rem; }
    .cdd-step-card { border: 1px solid var(--cdd-outline-variant); border-radius: 8px; padding: 1rem; background: var(--cdd-surface); }
    .cdd-step-header { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
    .cdd-step-index { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--cdd-primary); color: var(--cdd-on-primary); font-size: 0.75rem; font-weight: 700; }
    .cdd-step-subtitle { font-size: 0.8125rem; margin: 0.75rem 0 0.25rem; color: var(--cdd-on-surface-variant); }
    .cdd-source-descriptions { margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; font-size: 0.875rem; }
    .cdd-source-chip { padding: 0.25rem 0.5rem; border: 1px solid var(--cdd-outline-variant); border-radius: 6px; }

    .cdd-code-card { background: #1e1e1e; border-radius: 12px; color: #fff; overflow: hidden; }
    .cdd-code-tabs { display: flex; flex-wrap: wrap; }
    .cdd-tab-input { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    .cdd-tab-label { padding: 0.75rem 1rem; font-size: 0.875rem; cursor: pointer; border-bottom: 2px solid transparent; opacity: 0.7; transition: all 0.2s; }
    .cdd-tab-input:focus-visible + .cdd-tab-label { outline: 2px solid var(--cdd-primary); outline-offset: -2px; opacity: 1; }
    .cdd-tab-input:checked + .cdd-tab-label { border-bottom-color: var(--cdd-primary); opacity: 1; }
    
    .cdd-tab-content { display: none; width: 100%; padding: 1rem; background: #000; }
    
    .cdd-tab-input:nth-of-type(1):checked ~ .cdd-tab-content:nth-of-type(1) { display: block; }
    .cdd-tab-input:nth-of-type(2):checked ~ .cdd-tab-content:nth-of-type(2) { display: block; }

    .cdd-copy-btn { position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; padding: 0.25rem 0.5rem; font-size: 0.75rem; cursor: pointer; transition: background 0.2s; z-index: 10; }
    .cdd-copy-btn:hover { background: rgba(255,255,255,0.2); }
    .cdd-copy-btn.cdd-copied { background: #34a853; border-color: #34a853; }

    pre { margin: 0; font-family: 'Roboto Mono', monospace; font-size: 0.8125rem; overflow-x: auto; color: #d4d4d4; padding-top: 2rem; }

    
    .cdd-sidebar-title { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--cdd-on-surface-variant); margin: 1rem 0 0.5rem; }
    
    .cdd-setting-label { display: block; margin-bottom: 0.25rem; cursor: pointer; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.875rem; border: 1px solid var(--cdd-outline-variant); transition: all 0.2s; }
    .cdd-setting-label:hover { background: rgba(0,0,0,0.05); border-color: var(--cdd-outline); }
    
    .cdd-try-it-out { margin-top: 2rem; border: 1px solid var(--cdd-outline-variant); border-radius: 8px; padding: 1rem; }
    .cdd-try-summary { font-weight: 500; cursor: pointer; user-select: none; }
    .cdd-try-field { margin-top: 1rem; display: flex; flex-direction: column; }
    .cdd-try-field label { font-size: 0.75rem; font-weight: 700; margin-bottom: 0.25rem; }
    .cdd-try-field input, .cdd-try-field textarea { padding: 0.5rem; border: 1px solid var(--cdd-outline-variant); border-radius: 4px; font-family: 'Roboto Mono', monospace; background: var(--cdd-surface); color: var(--cdd-on-surface); }
    .cdd-try-btn { margin-top: 1rem; background: var(--cdd-primary); color: var(--cdd-on-primary); border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 500; }
    .cdd-try-btn:hover { opacity: 0.9; }

    ${X.map(A=>`#lang-opt-${A}:checked ~ .cdd-layout label[for="lang-opt-${A}"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); font-weight: 500; }`).join(`
`)}
    ${X.map(A=>`#lang-opt-${A}:focus-visible ~ .cdd-layout label[for="lang-opt-${A}"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }`).join(`
`)}
    #opt-imports:checked ~ .cdd-layout label[for="opt-imports"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-imports:focus-visible ~ .cdd-layout label[for="opt-imports"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }
    #opt-wrapping:checked ~ .cdd-layout label[for="opt-wrapping"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-wrapping:focus-visible ~ .cdd-layout label[for="opt-wrapping"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }
    #opt-dark-mode:checked ~ .cdd-layout label[for="opt-dark-mode"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); }
    #opt-dark-mode:focus-visible ~ .cdd-layout label[for="opt-dark-mode"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }

    /* Variant display logic */
    .cdd-variant-block { display: none; }
    .cdd-lang-block > .cdd-variant-block:only-child { display: block; }
    
    #opt-imports:checked ~ #opt-wrapping:checked ~ .cdd-layout .cdd-variant-block.cdd-show-if-imports.cdd-show-if-wrapping { display: block; }
    #opt-imports:not(:checked) ~ #opt-wrapping:checked ~ .cdd-layout .cdd-variant-block.cdd-hide-if-imports.cdd-show-if-wrapping { display: block; }
    #opt-imports:checked ~ #opt-wrapping:not(:checked) ~ .cdd-layout .cdd-variant-block.cdd-show-if-imports.cdd-hide-if-wrapping { display: block; }
    #opt-imports:not(:checked) ~ #opt-wrapping:not(:checked) ~ .cdd-layout .cdd-variant-block.cdd-hide-if-imports.cdd-hide-if-wrapping { display: block; }
  </style>`,bodyHtml:`${d.map((A,z)=>`<input type="radio" id="lang-opt-${wi(A)}" name="global-lang" class="cdd-visually-hidden" ${z===u?`checked`:``}>`).join(``)}
  <input type="checkbox" id="opt-imports" class="cdd-visually-hidden" ${o?`checked`:``}>
  <input type="checkbox" id="opt-wrapping" class="cdd-visually-hidden" ${s?`checked`:``}>
  <input type="checkbox" id="opt-dark-mode" class="cdd-visually-hidden" ${n===`dark`?`checked`:``}>

  <div class="cdd-layout">
    <aside class="cdd-sidebar-left" aria-label="${h(c.tocNavLabel)}">
      <h1 style="font-size: 1.25rem;">${h(p.info.title)}</h1>
      <div class="cdd-sidebar-title">${h(c.paths)}</div>
      ${y}
      ${C?`<div class="cdd-sidebar-title">${h(c.webhooksHeading)}</div>${C}`:``}
      ${b?`<div class="cdd-sidebar-title">${h(c.workflowsHeading)}</div>${b}`:``}
      <div class="cdd-sidebar-title">${h(c.schemas)}</div>
      <nav aria-label="${h(c.schemas)}">
        ${p.components?.schemas?Object.keys(p.components.schemas).map(A=>`<a href="#schema-${h(A)}" class="cdd-toc-item">${h(A)}</a>`).join(``):``}
      </nav>
    </aside>

    <main class="cdd-main">
      <header>
        <h1 style="font-size: 3rem; font-weight: 300;">${h(p.info.title)}</h1>
        <div class="cdd-description">${pt(p.info.description)}</div>
        ${N}
        ${p.info.termsOfService?`<p style="font-size: 0.875rem;"><a href="${$_(p.info.termsOfService)}" target="_blank">${h(c.termsOfService)}</a></p>`:``}
        ${p.info.contact?`<p style="font-size: 0.875rem;">${h(c.contactPrefix)}${p.info.contact.url?`<a href="${$_(p.info.contact.url)}" target="_blank">${h(p.info.contact.name||c.apiSupport)}</a>`:p.info.contact.email?`<a href="mailto:${h(p.info.contact.email)}">${h(p.info.contact.name||p.info.contact.email)}</a>`:h(p.info.contact.name||c.apiSupport)}</p>`:``}
      </header>
      ${f}
      ${w}
    </main>

    <aside class="cdd-sidebar-right">
      <div class="cdd-sidebar-title">${h(c.settings)}</div>
      
      <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${h(c.appearanceHeading)}</p>
      <label for="opt-dark-mode" class="cdd-setting-label">
        ${h(c.darkMode)}
      </label>

      <p style="font-size: 0.875rem; margin-top: 1rem; margin-bottom: 0.5rem;">${h(c.language)}</p>
      ${d.map(A=>`
        <label for="lang-opt-${wi(A)}" class="cdd-setting-label">
          ${h(A)}
        </label>
      `).join(``)}
      
      <div style="margin-top: 1rem;">
        <label for="opt-imports" class="cdd-setting-label">
          ${h(c.includeImports)}
        </label>
        <label for="opt-wrapping" class="cdd-setting-label">
          ${h(c.includeWrapping)}
        </label>
      </div>
    </aside>
  </div>`,title:p.info.title,locale:c.locale}}function Ci(e){return v(e)?v(e.endpoints)||v(e.operations)||Array.isArray(e.operations)||v(e.workflows)||Array.isArray(e.workflows)||v(e.webhooks)||Array.isArray(e.webhooks):!1}function qy(e){let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch(i){return[]}if(Ci(t)&&(t=[t]),!Array.isArray(t))return[];let n=[];for(let i of t){if(!v(i))continue;let r=i.content,a=typeof i.filepath==`string`?i.filepath:``,o=typeof i.language==`string`?i.language:`typescript`;if(typeof r==`string`&&(a.endsWith(`.json`)||r.includes(`"endpoints"`)||r.includes(`"workflows"`)||r.includes(`"webhooks"`)||r.includes(`"operations"`)))try{let s=JSON.parse(r);if(Ci(s)){let c=typeof s.language==`string`?s.language:o;n.push(...ko(s,c));continue}else if(Array.isArray(s)&&s.some(Ci)){for(let c of s){if(!Ci(c))continue;let l=typeof c.language==`string`?c.language:o;n.push(...ko(c,l))}continue}}catch(s){console.warn(`cdd-docs-ui: Failed to securely parse docs.json payload.`,s)}if(Ci(i)){n.push(...ko(i,o));continue}typeof r==`string`&&n.push({language:o,filepath:a,content:r,includeImports:typeof i.includeImports==`boolean`?i.includeImports:void 0,includeWrapping:typeof i.includeWrapping==`boolean`?i.includeWrapping:void 0,operationId:typeof i.operationId==`string`?i.operationId:void 0,route:typeof i.route==`string`?i.route:void 0,method:typeof i.method==`string`?i.method:void 0,webhookName:typeof i.webhookName==`string`?i.webhookName:void 0,workflowId:typeof i.workflowId==`string`?i.workflowId:void 0})}return n}function Ho(e=document,t={}){let n=U(U({},Mi),t);e.querySelectorAll(`input[name="ui-lang-proxy"]:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`change`,()=>{let w=b.id.replace(`proxy-`,``),N=e.querySelector(`#lang-opt-${w}`);N&&(N.checked=!0,N.dispatchEvent(new Event(`change`)))})}),e.querySelectorAll(`input[name="global-lang"]:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`change`,()=>{if(b.checked){let w=b.id.replace(`lang-opt-`,``);e.dispatchEvent(new CustomEvent(`cdd-language-change`,{bubbles:!0,detail:{language:w}}))}})});let a=e.querySelector(`input[data-onchange-proxy*="opt-imports"]:not([data-cdd-bound])`);a&&(a.setAttribute(`data-cdd-bound`,`true`),a.addEventListener(`change`,()=>{let b=e.querySelector(`#opt-imports`);b&&(b.checked=a.checked,b.dispatchEvent(new Event(`change`)))}));let o=e.querySelector(`input[data-onchange-proxy*="opt-wrapping"]:not([data-cdd-bound])`);o&&(o.setAttribute(`data-cdd-bound`,`true`),o.addEventListener(`change`,()=>{let b=e.querySelector(`#opt-wrapping`);b&&(b.checked=o.checked,b.dispatchEvent(new Event(`change`)))}));let s=e.querySelector(`#opt-imports:not([data-cdd-bound])`),c=e.querySelector(`#opt-wrapping:not([data-cdd-bound])`),l=()=>{let b=e.querySelector(`#opt-imports`),w=e.querySelector(`#opt-wrapping`);e.dispatchEvent(new CustomEvent(`cdd-docs-options-change`,{bubbles:!0,detail:{includeImports:b?b.checked:!0,includeWrapping:w?w.checked:!0}}))};s&&(s.setAttribute(`data-cdd-bound`,`true`),s.addEventListener(`change`,l)),c&&(c.setAttribute(`data-cdd-bound`,`true`),c.addEventListener(`change`,l));let d=e.querySelector(`#opt-dark-mode:not([data-cdd-bound])`);if(d){d.setAttribute(`data-cdd-bound`,`true`);let b=localStorage.getItem(`cdd-theme`);b&&(d.checked=b===`dark`),d.addEventListener(`change`,()=>{localStorage.setItem(`cdd-theme`,d.checked?`dark`:`light`)})}let u=e.querySelector(`.cdd-search-input`);if(!u){u=document.createElement(`input`),u.type=`text`,u.placeholder=n.searchPlaceholder,u.setAttribute(`aria-label`,n.searchPlaceholder),u.className=`cdd-search-input`,u.style.width=`100%`,u.style.padding=`0.5rem`,u.style.marginBottom=`1rem`,u.style.borderRadius=`4px`,u.style.border=`1px solid var(--cdd-outline)`;let b=e.querySelector(`.cdd-sidebar-title`);b&&b.nextSibling&&b.parentNode&&b.parentNode.insertBefore(u,b.nextSibling)}let p=null,_=null,m;u.hasAttribute(`data-cdd-bound`)||(u.setAttribute(`data-cdd-bound`,`true`),u.addEventListener(`input`,()=>{let b=u.value.toLowerCase();m!==void 0&&clearTimeout(m),m=setTimeout(()=>{p||(p=Array.from(e.querySelectorAll(`.cdd-toc-item`)).map(w=>({el:w,text:`${w.textContent??``} ${w.getAttribute(`href`)??``}`.toLowerCase()}))),_||(_=Array.from(e.querySelectorAll(`.cdd-endpoint`)).map(w=>({el:w,text:`${w.textContent??``} ${w.id}`.toLowerCase()}))),p.forEach(w=>{let N=w.text.includes(b);w.el.style.display=N?`block`:`none`}),_.forEach(w=>{let N=w.text.includes(b);w.el.style.display=N?`grid`:`none`})},150)})),e.querySelectorAll(`.cdd-copy-btn:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`click`,()=>es$1(null,null,function*(){let w=b.parentElement?.querySelector(`code`);if(w)try{let N=w.getAttribute(`data-raw-code`)??w.textContent??``;yield navigator.clipboard.writeText(N);let F=b.textContent;b.textContent=n.copied,b.classList.add(`cdd-copied`),setTimeout(()=>{b.textContent=F,b.classList.remove(`cdd-copied`)},2e3)}catch(N){console.error(`Failed to copy text: `,N)}}))}),e.querySelectorAll(`.cdd-try-form:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`submit`,w=>es$1(null,null,function*(){w.preventDefault();let N=b.getAttribute(`data-method`)||`GET`,F=b.getAttribute(`data-route`)||``,K=(b.getAttribute(`data-base-url`)||`https://api.example.com`).replace(/\/$/,``),X={},ae=new URLSearchParams,T;b.querySelectorAll(`input, textarea`).forEach(oe=>{let ce=oe.value;if(ce)if(oe.name===`requestBody`)T=ce;else{let Ce=oe.getAttribute(`data-in`);Ce===`path`?F=F.replace(`{${oe.name}}`,encodeURIComponent(ce)):Ce===`query`?ae.append(oe.name,ce):Ce===`header`&&(X[oe.name]=ce)}});let z=b.closest(`cdd-api-docs`),J=z instanceof zp?z:null,Y=J?.org,S=J?.repo,x=new URLSearchParams(window.location.search).get(`v`)||``,I=x?`/${encodeURIComponent(x)}`:``,O=ae.toString()?`?${ae.toString()}`:``,q=`${K}${F}${O}`;Y&&S&&(q=`/cdd-gateway/proxy/${encodeURIComponent(Y)}/${encodeURIComponent(S)}${I}${F}${O}`);let M=b.nextElementSibling;if(!(M instanceof HTMLElement)||!M.classList.contains(`cdd-try-response`))return;let ne=M.querySelector(`.cdd-try-status`),ie=M.querySelector(`.cdd-try-body`);M.style.display=`block`,ne&&(ne.textContent=n.loading),ie&&(ie.textContent=``);try{T&&!X[`Content-Type`]&&(X[`Content-Type`]=`application/json`);let oe=yield fetch(q,{method:N,headers:X,body:N!==`GET`&&N!==`HEAD`?T??null:null});ne&&(ne.textContent=`${n.status}: ${oe.status} ${oe.statusText}`);let ce=yield oe.text();if(ie)try{ie.textContent=JSON.stringify(JSON.parse(ce),null,2)}catch(Ce){ie.textContent=ce}}catch(oe){ne&&(ne.textContent=n.error),ie&&(ie.textContent=oe instanceof Error?oe.message:String(oe))}}))}),e.querySelectorAll(`.cdd-workflow-try-form:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`submit`,w=>es$1(null,null,function*(){w.preventDefault();let N=b.getAttribute(`data-workflow-id`)||`workflow`,F=b.getAttribute(`data-base-url`)||`https://api.example.com`,K=b.nextElementSibling;if(!(K instanceof HTMLElement)||!K.classList.contains(`cdd-try-response`))return;let X=K.querySelector(`.cdd-try-status`),ae=K.querySelector(`.cdd-try-body`);K.style.display=`block`,X&&(X.textContent=n.loading),ae&&(ae.textContent=``);let T=b.closest(`.cdd-workflow`),A=T?Array.from(T.querySelectorAll(`.cdd-step-card`)):[];try{let z=[];for(let J of A){let Y=J.getAttribute(`data-step-id`)||`step`,S=J.getAttribute(`data-method`)||`GET`,R=J.getAttribute(`data-route`)||`/`,x=(J.getAttribute(`data-base-url`)||F).replace(/\/$/,``),I=yield fetch(`${x}${R}`,{method:S}),O=yield I.text();z.push({stepId:Y,status:I.status,body:O})}X&&(X.textContent=`${n.status}: ${N} (${z.length} steps completed)`),ae&&(ae.textContent=JSON.stringify({workflowId:N,steps:z},null,2))}catch(z){X&&(X.textContent=n.error),ae&&(ae.textContent=z instanceof Error?z.message:String(z))}}))})}var zp=class extends HTMLElement{constructor(){super(),this._translations={},this._sdkExamples=[],this._renderVersion=0,this._boundMessageHandler=e=>{this.handlePostMessage(e)}}get org(){return this._org}get repo(){return this._repo}get translations(){return this._translations}set translations(e){this._translations=e,this.triggerRender()}get activeLanguage(){return this.getAttribute(`active-language`)}set activeLanguage(e){e?this.setAttribute(`active-language`,e):this.removeAttribute(`active-language`)}get sdkExamples(){return this._sdkExamples}set sdkExamples(e){this._sdkExamples=qy(e),this.triggerRender()}connectedCallback(){this.innerHTML.trim()&&this.querySelector(`.cdd-layout`)?Ho(this,this._translations):this.triggerRender(),this.setupPostMessage()}disconnectedCallback(){window.removeEventListener(`message`,this._boundMessageHandler)}triggerRender(){let e=this.getAttribute(`spec-content`)||this.getAttribute(`spec`)||this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`)||``;if(!e){let r=window.location.pathname.match(/^\/u\/([^/]+)\/([^/]+)/);if(r&&r[1]&&r[2]){this._org=r[1],this._repo=r[2];let o=new URLSearchParams(window.location.search).get(`v`)||``,s=o?`/${encodeURIComponent(o)}`:``;e=`/cdd-gateway/storage/${encodeURIComponent(this._org)}/${encodeURIComponent(this._repo)}${s}/schema.json`}}let n=!!(this.getAttribute(`spec-content`)||this.getAttribute(`spec`))&&(this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`))||void 0;e&&this.renderSpec(e,n)}renderSpec(e,t){return es$1(this,null,function*(){if(!e)return;let n=++this._renderVersion;try{let i=e,r=e.trim();if(N_(r)){let C=I_(r);this.innerHTML=`<div class="cdd-loading" style="padding: 2rem; font-family: sans-serif;">Loading documentation...</div>`;let b=yield fetch(C);if(n!==this._renderVersion)return;if(!b.ok)throw b.status===404?/* @__PURE__ */ new Error(`404 Not Found: The specified organization or repository does not exist or has no published schema.`):/* @__PURE__ */ new Error(`Failed to fetch spec from URL: ${b.status} ${b.statusText}`);i=yield b.text()}let a=t;if(a&&N_(a.trim())){let C=I_(a.trim()),b=yield fetch(C);if(n!==this._renderVersion)return;b.ok?a=yield b.text():a=void 0}let o=this.getAttribute(`theme`)||localStorage.getItem(`cdd-theme`)||`light`,s=this.querySelector(`input[name="global-lang"]:checked`),c=s?s.id.replace(/^lang-opt-/,``):void 0,l=this.getAttribute(`active-language`)||c,d=this.querySelector(`#opt-imports`),u=this.querySelector(`#opt-wrapping`),p=d?d.checked:!1,_=u?u.checked:!1,m=Hy(i,this._sdkExamples,o===`dark`?`dark`:`light`,this._translations,a,l,p,_);this.innerHTML=`${m.stylesHtml}
${m.bodyHtml}`;let f=this._org,y=this._repo;if(f&&y){let C=this.querySelector(`header`);C&&this.injectDynamicHeader(C,f,y)}Ho(this,this._translations),this.dispatchEvent(new CustomEvent(`docs-ready`))}catch(i){this.innerHTML=`<div style="color: red; padding: 2rem; font-family: monospace; white-space: pre-wrap;">Error rendering spec: ${i instanceof Error?i.message:String(i)}

${i instanceof Error&&i.stack?i.stack:``}</div>`,console.error(`CDDApiDocs rendering error:`,i)}})}injectDynamicHeader(e,t,n){let i=document.createElement(`div`);i.className=`cdd-dynamic-header-content`,i.style.marginTop=`1rem`,i.style.padding=`1rem`,i.style.background=`var(--cdd-surface-variant, #f0f0f0)`,i.style.borderRadius=`4px`;let r=document.createElement(`label`);r.textContent=`Version: `,r.style.fontWeight=`bold`;let a=document.createElement(`select`);a.className=`cdd-version-select`,a.innerHTML=`<option value="latest">latest</option>`,a.addEventListener(`change`,()=>{let d=a.value,u=new URL(window.location.href);u.searchParams.set(`v`,d),window.history.pushState({},``,u.toString()),this.renderSpec(`/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(d)}/schema.json`)});let o=document.createElement(`div`);o.style.marginTop=`0.5rem`;let c=new URLSearchParams(window.location.search).get(`v`)||``,l=c?`/${encodeURIComponent(c)}`:``;o.innerHTML=`
            <strong style="margin-right:0.5rem;">Download SDKs:</strong>
            <a href="/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}${l}/sdk-typescript.tgz" download class="cdd-btn" style="margin-right:0.5rem; text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">TypeScript</a>
            <a href="/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}${l}/sdk-python.whl" download class="cdd-btn" style="text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">Python</a>
        `,i.appendChild(r),i.appendChild(a),i.appendChild(o),fetch(`/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}/versions.json`).then(d=>d.json()).then(d=>{if(Array.isArray(d)){a.innerHTML=d.map(_=>{let m=h(String(_));return`<option value="${m}">${m}</option>`}).join(``);let p=new URLSearchParams(window.location.search).get(`v`);p&&(a.value=p)}}).catch(()=>{}),e.appendChild(i)}setupPostMessage(){window.removeEventListener(`message`,this._boundMessageHandler),window.addEventListener(`message`,this._boundMessageHandler),window.parent&&window.parent!==window&&window.parent.postMessage({type:`DOCS_UI_READY`},`*`)}handlePostMessage(e){if(!v(e.data))return;let t=e.data.type,n=e.data.payload;if(t===`UPDATE_SPEC`&&typeof n==`string`){let i=this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`)||void 0;this.renderSpec(n,i)}else if(t===`UPDATE_ARAZZO`&&typeof n==`string`)this.setAttribute(`arazzo-content`,n);else if(t===`UPDATE_SDK_EXAMPLES`)this.sdkExamples=n;else if(t===`SET_LANGUAGE`&&typeof n==`string`)this.activeLanguage=n;else if(t===`SET_THEME`&&(n===`dark`||n===`light`)){this.setAttribute(`theme`,n);let i=this.querySelector(`#opt-dark-mode`);i?(i.checked=n===`dark`,i.dispatchEvent(new Event(`change`))):localStorage.setItem(`cdd-theme`,n)}}static get observedAttributes(){return[`spec`,`spec-content`,`arazzo`,`arazzo-content`,`theme`,`active-language`]}attributeChangedCallback(e,t,n){if(t!==n){if(e===`active-language`&&n){let i=this.querySelector(`#lang-opt-${wi(n)}`);if(i){i.checked=!0;return}}this.triggerRender()}}};function Xy(){customElements.get(`cdd-api-docs`)||customElements.define(`cdd-api-docs`,zp),window.addEventListener(`DOMContentLoaded`,()=>{document.querySelector(`cdd-api-docs`)||Ho(document)})}Xy();var Ca=class e{store=C(ut$1);themeService=C(Qs);wasmWorkerService=C(ul$1);languageService=C(el$1);specContent=this.store.selectSignal(zm$1);generatedFiles=this.store.selectSignal(la$1);docsJsonExamples=this.store.selectSignal(Jm$1);docsJsonLanguageId=this.store.selectSignal(Zm$2);selectedLanguageId=this.store.selectSignal(sc);languageOptions=this.store.selectSignal(Vm$1);activeUiLanguage=Zb$1(()=>this.normalizeLanguage(this.selectedLanguageId()));docsJsonCache=ei({});constructor(){Nd$1(()=>{let t=this.specContent(),n=this.selectedLanguageId(),i=this.languageOptions();t&&n&&this.fetchDocsJsonForLanguage(n,t,i)}),Nd$1(()=>{let t=this.getActiveStoreDocsFiles(),n=this.activeUiLanguage();if(t.length>0){let i=new TextDecoder(`utf-8`),r=this.unwrapDocsJsonContent(i.decode(t[0].content));this.docsJsonCache.update(a=>W(U({},a),{[n]:r}))}})}normalizeLanguage(t){if(!t)return`typescript`;let n=t.replace(/^cdd-/,``);return{c:`c`,cpp:`cpp`,csharp:`csharp`,go:`go`,java:`java`,kotlin:`kotlin`,php:`php`,python:`python`,"python-all":`python`,ruby:`ruby`,rust:`rust`,sh:`bash`,bash:`bash`,swift:`swift`,ts:`typescript`,typescript:`typescript`}[n]||n}unwrapDocsJsonContent(t){let n=t;if(n.trim().startsWith(`[`))try{let i=JSON.parse(n);Array.isArray(i)&&i.length>0&&typeof i[0]==`object`&&i[0]!==null&&(`endpoints`in i[0]||`workflows`in i[0]||`webhooks`in i[0])&&(n=JSON.stringify(i[0]))}catch(i){}return n}getActiveStoreDocsFiles(){let t=this.activeUiLanguage(),n=this.docsJsonLanguageId();if(n&&this.normalizeLanguage(n)!==t)return[];let i=this.docsJsonExamples(),a=this.generatedFiles().filter(c=>c.path===`docs.json`||c.path.endsWith(`/docs.json`)),o=i.length>0?i:a,s=new TextDecoder(`utf-8`);return o.filter(c=>{let l=s.decode(c.content).trim();try{let d=JSON.parse(l),u=Array.isArray(d)?d[0]:d;if(typeof u==`object`&&u!==null&&typeof u.language==`string`)return this.normalizeLanguage(u.language)===t}catch(d){}return!0})}fetchDocsJsonForLanguage(t,n,i){return es$1(this,null,function*(){let a=this.languageService.languages().find(o=>o.id===t||o.repo===t);if(!(!a||!a.availableInWasm))try{let s=(yield this.wasmWorkerService.generateCode(a.repo,n,`to_docs_json`,i||{})).find(c=>c.path===`docs.json`||c.path.endsWith(`/docs.json`)||c.path.endsWith(`.json`));if(s){let c=new TextDecoder(`utf-8`),l=this.unwrapDocsJsonContent(c.decode(s.content)),d=this.normalizeLanguage(a.repo);this.docsJsonCache.update(u=>W(U({},u),{[d]:l}))}}catch(o){console.warn(`[ApiDocsViewer] Failed to generate docs.json for ${a.repo}:`,o)}})}onDocsLanguageChange(t){let i=t.detail?.language;if(!i)return;let a={bash:`sh`,ts:`typescript`,"python-all":`python`}[i]||i;this.specContent()&&this.fetchDocsJsonForLanguage(a,this.specContent(),this.languageOptions()||{})}mappedSdkExamples=Zb$1(()=>{let t=new TextDecoder(`utf-8`),n=this.activeUiLanguage(),r=this.getActiveStoreDocsFiles().map(c=>{let l=this.unwrapDocsJsonContent(t.decode(c.content));return{language:n,filepath:`docs.json`,content:l}}),a=this.docsJsonCache(),o=[],s=[];for(let[c,l]of Object.entries(a))if(!r.some(d=>d.language===c&&d.filepath===`docs.json`)){let d={language:c,filepath:`docs.json`,content:l};c===n?o.push(d):s.push(d)}return[...r,...o,...s]});theme=Zb$1(()=>this.themeService.isDarkTheme()?`dark`:`light`);ngOnInit(){this.store.dispatch(Im$1())}ngOnDestroy(){}retryLoad(){this.store.dispatch(Em$1({visible:!0}))}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-api-docs-viewer`]],decls:2,vars:4,consts:[[1,`api-docs-content`],[3,`cdd-language-change`,`sdkExamples`]],template:function(n,i){n&1&&(ml$1(0,`div`,0)(1,`cdd-api-docs`,1),dg$1(`cdd-language-change`,function(a){return i.onDocsLanguageChange(a)}),yl$1()()),n&2&&(ZE(),qh$1(`sdkExamples`,i.mappedSdkExamples()),Vh$1(`spec-content`,i.specContent())(`theme`,i.theme())(`active-language`,i.activeUiLanguage()))},styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:var(--%NS%surface-color, #fff);overflow:hidden}.api-docs-content[_ngcontent-%COMP%]{flex:1;height:100%;width:100%}cdd-api-docs[_ngcontent-%COMP%]{width:100%;height:100%;display:block}`]})};var jy=(e,t)=>t.timestamp+e;function Ky(e,t){if(e&1&&(Oi$1(0,`div`)(1,`span`,13),Sb$1(2),Bb(3,`date`),gl$1(),Oi$1(4,`span`,14),Sb$1(5),gl$1(),Oi$1(6,`span`,15),Sb$1(7),gl$1()()),e&2){let n=t.$implicit;vb$1(Rb$1(`log-entry log-`,n.level.toLowerCase())),ZE(2),Il$1(`[`,Ub$1(3,6,n.timestamp,`HH:mm:ss.SSS`),`]`),ZE(3),_g(n.level),ZE(2),_g(n.message)}}function Yy(e,t){e&1&&(Oi$1(0,`div`,10),Yw(1,0),gl$1())}var Ta=class e{loggingService=C(pi$1);actions$=C(Cy$1);logs=this.loggingService.logs;selectedTabIndex=ei(0);constructor(){this.actions$.pipe(ky$1(dm$1),Fh$1()).subscribe(()=>{this.selectedTabIndex.set(2)}),this.actions$.pipe(ky$1(pm$1),Fh$1()).subscribe(()=>{this.selectedTabIndex.set(0)})}clearLogs(){this.loggingService.clear()}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-bottom-panel`]],decls:16,vars:2,consts:()=>{let t;t=$localize`:@@logsTab:Logs`;let n;n=$localize`:@@clearLogsTooltip:Clear Logs`;let i;i=$localize`:@@clearLogsAria:Clear Logs`;let r;r=$localize`:@@structureTab:Structure`;let a;a=$localize`:@@docsUiTab:Docs UI`;let o;return o=$localize`:@@noLogs:No logs to display`,[o,[1,`bottom-panel-container`],[1,`bottom-panel-tabs`,3,`selectedIndexChange`,`selectedIndex`],[`label`,t],[1,`console-tab-content`],[1,`console-toolbar`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,3,`click`],[`aria-hidden`,`true`],[1,`console-content`],[3,`class`],[1,`empty-state`],[`label`,r],[`label`,a],[1,`log-timestamp`],[1,`log-level`],[1,`log-message`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,1)(1,`mat-tab-group`,2),ug$1(`selectedIndexChange`,function(a){return i.selectedTabIndex.set(a)}),Oi$1(2,`mat-tab`,3)(3,`div`,4)(4,`div`,5)(5,`button`,6),ug$1(`click`,function(){return i.clearLogs()}),Oi$1(6,`mat-icon`,7),Sb$1(7,`delete`),gl$1()()(),Oi$1(8,`div`,8),yw(9,Ky,8,9,`div`,9,jy,!1,Yy,2,0,`div`,10),gl$1()()(),Oi$1(12,`mat-tab`,11),Bh$1(13,`app-visualisations`),gl$1(),Oi$1(14,`mat-tab`,12),Bh$1(15,`app-api-docs-viewer`),gl$1()()()),n&2&&(ZE(),Hh(`selectedIndex`,i.selectedTabIndex()),ZE(8),vw(i.logs()))},dependencies:[Sr,ri,Er,wf$1,xf$1,xr$2,$n$1,Qy$1,ld$1,ra,Ca,Ar$1],styles:[`.bottom-panel-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:var(--%NS%mat-sys-surface-container);border-top:1px solid var(--%NS%mat-sys-outline-variant);overflow:hidden}.bottom-panel-tabs[_ngcontent-%COMP%]{height:100%}.console-tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.console-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:4px;background-color:var(--%NS%mat-sys-surface-variant);border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.console-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px;background-color:#1e1e1e;color:#ccc;font-family:monospace;font-size:13px;line-height:1.4}.log-entry[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:4px;word-break:break-all}.log-timestamp[_ngcontent-%COMP%]{color:#a0a0a0;white-space:nowrap}.log-level[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;min-width:45px}.log-info[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#4daafc}.log-info[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#ccc}.log-warn[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#fca311}.log-warn[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#e5e5e5}.log-error[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#f25f5c}.log-error[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#fcc}.empty-state[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;color:var(--%NS%text-secondary, #b5b5b5);font-style:italic}app-visualisations[_ngcontent-%COMP%], app-api-docs-viewer[_ngcontent-%COMP%]{display:block;height:100%}[_nghost-%COMP%]{display:block;height:100%;width:100%;flex:1;min-height:0}`]})};function Qy(e,t){e&1&&(vl$1(0),Yw(1,12),El$1())}function Zy(e,t){e&1&&(vl$1(0),Yw(1,13),El$1())}function Jy(e,t){e&1&&(vl$1(0),Yw(1,14),El$1())}function eE(e,t){e&1&&(vl$1(0),Yw(1,15),El$1())}function tE(e,t){if(e&1){let n=Cw();Oi$1(0,`app-openapi-editor`,48),ug$1(`specContentChange`,function(r){nd(n);let a=Xw();return rd$1(a.onSpecContentChange(r))})(`validationErrorsChange`,function(r){nd(n);let a=Xw();return rd$1(a.onValidationErrorsChange(r))})(`activeModeChange`,function(r){nd(n);let a=Xw();return rd$1(a.onInputModeChange(r))})(`urlAdded`,function(r){nd(n);let a=Xw();return rd$1(a.onUrlAdded(r))})(`urlUpdated`,function(r){nd(n);let a=Xw();return rd$1(a.onUrlUpdated(r))})(`urlRemoved`,function(r){nd(n);let a=Xw();return rd$1(a.onUrlRemoved(r))})(`urlsClearClicked`,function(){nd(n);let r=Xw();return rd$1(r.onUrlsCleared())})(`fetchUrlsClicked`,function(r){nd(n);let a=Xw();return rd$1(a.onFetchUrls(r))})(`runClicked`,function(){nd(n);let r=Xw();return rd$1(r.onRun())}),gl$1()}if(e&2){let n=Xw();Hh(`specContent`,n.specContent()||``)(`isExecuting`,n.isExecuting())(`activeMode`,n.activeInputMode())(`specUrls`,n.specUrls())(`isFetchingUrls`,n.isFetchingUrls())}}function nE(e,t){if(e&1){let n=Cw();Oi$1(0,`div`,49)(1,`div`,50)(2,`app-directory-tree`,51),ug$1(`fileSelected`,function(r){nd(n);let a=Xw();return rd$1(a.onFileSelected(r))}),gl$1()(),Oi$1(3,`div`,52)(4,`app-code-viewer`,53),ug$1(`fileSelected`,function(r){nd(n);let a=Xw();return rd$1(a.onFileSelected(r))})(`fileContentChange`,function(r){nd(n);let a=Xw();return rd$1(a.onActiveFileContentChange(r))}),gl$1()()()}if(e&2){let n=Xw();ZE(2),Hh(`files`,n.generatedFiles())(`activeFilePath`,n.activeFilePath())(`isExecuting`,n.isExecuting()),ZE(2),Hh(`activeFilePath`,n.activeFilePath())(`fileContent`,n.activeFileContent())(`isReadOnly`,n.orientation()===`openapi-left`)}}var Gp=class e{document=C(Er$1);window=C(d);destroy$=new Z;store=C(ut$1);router=C(le);apiDocsPaneHeight=this.store.selectSignal(Xm$1);orientation=this.store.selectSignal(Nm$1);isExecuting=this.store.selectSignal(Fm$1);selectedLanguageId=this.store.selectSignal(sc);target=this.store.selectSignal(jm$1);languageOptions=this.store.selectSignal(Vm$1);specContent=this.store.selectSignal(zm$1);inputFormat=this.store.selectSignal($m$1);activeInputMode=this.store.selectSignal(Hm$1);specUrls=this.store.selectSignal(ca$1);isFetchingUrls=this.store.selectSignal(Ym$1);generatedFiles=this.store.selectSignal(la$1);activeFilePath=this.store.selectSignal(cc);activeFileContent=this.store.selectSignal(Um$1);selectedExample=Zb$1(()=>{let t=this.specContent();return t===`openapi: 3.0.4
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
`?`petstore`:t===`openapi: 3.0.0
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
                example: Hello, World!`?`hello`:`custom`});ngOnInit(){this.store.dispatch(lm$1())}onSwap(){this.store.dispatch(Zh$1())}onRun(){this.store.dispatch(lm$1())}onLanguageChanged(t){this.store.dispatch(em$1({languageId:t})),this.store.dispatch(lm$1())}onTargetChanged(t){this.store.dispatch(tm$1({target:t})),this.store.dispatch(lm$1())}onOptionsChanged(t){this.store.dispatch(nm$1(t)),this.store.dispatch(lm$1())}onSpecContentChange(t){this.store.dispatch(im$1({content:t}))}onInputFormatChange(t){this.store.dispatch(hm$1({format:t}))}onExampleChange(t){t===`petstore`?(this.store.dispatch(mm$1({mode:`editor`})),this.store.dispatch(im$1({content:tf$1}))):t===`hello`&&(this.store.dispatch(mm$1({mode:`editor`})),this.store.dispatch(im$1({content:`openapi: 3.0.0
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
                example: Hello, World!`})))}onInputModeChange(t){this.store.dispatch(mm$1({mode:t}))}onUrlAdded(t){this.store.dispatch(fm$1({url:t}))}onUrlUpdated(t){this.store.dispatch(gm$1(t))}onUrlRemoved(t){this.store.dispatch(_m$1({id:t}))}onUrlsCleared(){this.store.dispatch(vm$1())}onFetchUrls(t){this.store.dispatch(bm$1({ids:t}))}onValidationErrorsChange(t){this.store.dispatch(om$1({errors:t}))}onFileSelected(t){this.store.dispatch(rm$1({filePath:t}))}onActiveFileContentChange(t){this.store.dispatch(am$1({content:t}))}onResizerMouseDown(t){t.preventDefault();let n=t.clientY,i=this.apiDocsPaneHeight(),r=t.target,a=r?r.parentElement:null,o=a?a.clientHeight:this.window?.innerHeight||800;a&&a.classList.add(`resizing`);let s=as$1(this.document,`mousemove`).pipe(zl$1(l=>{let d=n-l.clientY,u=i+d,p=150,_=Math.max(p,o-306);u=Math.max(p,Math.min(u,_)),this.store.dispatch(Om$1({height:u}))})),c=as$1(this.document,`mouseup`);s.pipe(Gl$1(c),Gl$1(this.destroy$),ql$1(()=>{a&&a.classList.remove(`resizing`)})).subscribe()}onResizerDoubleClick(){this.store.dispatch(Om$1({height:300}))}onResizerKeydown(t){if(t.key===`ArrowUp`)t.preventDefault(),this.store.dispatch(Om$1({height:this.apiDocsPaneHeight()+20}));else if(t.key===`ArrowDown`){t.preventDefault();let n=Math.max(150,this.apiDocsPaneHeight()-20);this.store.dispatch(Om$1({height:n}))}}toggleApiDocs(){this.store.dispatch(wm$1())}handleKeyboardEvent(t){t.key.toLowerCase()===`d`&&(t.ctrlKey||t.metaKey)&&t.shiftKey&&(t.preventDefault(),this.toggleApiDocs())}onGoOnline(){this.router.navigate([`/login`])}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static ɵfac=function(n){return new(n||e)};static ɵcmp=BD({type:e,selectors:[[`app-workspace`]],hostBindings:function(n,i){n&1&&ug$1(`keydown`,function(a){return i.handleKeyboardEvent(a)},hE)},decls:65,vars:15,consts:()=>{let t;t=$localize`:@@workspaceToolsAria:Workspace Tools`;let n;n=$localize`:@@selectInputFormatAria:Select Input Format`;let i;i=$localize`:@@selectExampleAria:Select Example`;let r;r=$localize`:@@resizeApiDocsPaneAria:Resize API Docs Pane`;let a;a=$localize`:@@goOnlineAria:Go Online`;let o;o=$localize`Input Format`;let s;s=$localize`OpenAPI 3.2.0`;let c;c=$localize`Swagger / OpenAPI < 3.2.0`;let l;l=$localize`Google Discovery`;let d;d=$localize`C Source Code`;let u;u=$localize`Example`;let p;p=$localize`Petstore`;let _;_=$localize`Hello World`;let m;m=$localize`Custom`;let f;f=$localize`Go Online`;let y;y=$localize`:@@formatGoogleDiscovery:Google Discovery`;let C;C=$localize`:@@formatOpenApiOlder:Swagger / OpenAPI < 3.2.0`;let b;b=$localize`:@@formatCSource:C Source Code`;let w;return w=$localize`:@@formatOpenApi320:OpenAPI 3.2.0`,[[`openApiTemplate`,``],[`codeDirTemplate`,``],o,s,c,l,d,u,p,_,m,f,y,C,b,w,[1,`workspace-container`],[`role`,`toolbar`,`aria-label`,t,1,`workspace-toolbar`],[1,`input-controls`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`toolbar-field`],[`aria-label`,n,3,`selectionChange`,`value`],[1,`format-option-trigger`],[`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`,3,`ngSrc`],[1,`format-name`],[`value`,`openapi_3_2_0`],[1,`format-option`],[`ngSrc`,`assets/icons/openapi.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`value`,`openapi_older`],[`value`,`google_discovery`],[`ngSrc`,`/assets/icons/google.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`value`,`c_source`],[`ngSrc`,`assets/icons/c.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`toolbar-field`,`example-field`],[`aria-label`,i,3,`selectionChange`,`value`],[`value`,`petstore`],[`value`,`hello`],[`value`,`custom`,3,`disabled`],[1,`arrow-container`],[`aria-hidden`,`true`,1,`flow-arrow`],[1,`output-controls`],[3,`languageChanged`,`targetChanged`,`optionsChanged`,`selectedLanguageId`,`target`,`options`],[1,`workspace-content`],[1,`top-pane`],[3,`swapClicked`,`runClicked`,`orientation`,`isExecuting`,`leftTemplate`,`rightTemplate`],[`tabindex`,`0`,`role`,`separator`,`aria-orientation`,`horizontal`,`aria-controls`,`bottom-pane`,`aria-valuemin`,`150`,`aria-valuemax`,`800`,`aria-label`,r,1,`vertical-resizer`,3,`mousedown`,`dblclick`,`keydown`],[`id`,`bottom-pane`,1,`bottom-pane`],[`mat-fab`,``,`extended`,``,`aria-label`,a,1,`online-mode-fab`,3,`click`],[`aria-hidden`,`true`],[3,`specContentChange`,`validationErrorsChange`,`activeModeChange`,`urlAdded`,`urlUpdated`,`urlRemoved`,`urlsClearClicked`,`fetchUrlsClicked`,`runClicked`,`specContent`,`isExecuting`,`activeMode`,`specUrls`,`isFetchingUrls`],[1,`code-directory-wrapper`],[1,`directory-tree-pane`],[3,`fileSelected`,`files`,`activeFilePath`,`isExecuting`],[1,`code-viewer-pane`],[3,`fileSelected`,`fileContentChange`,`activeFilePath`,`fileContent`,`isReadOnly`]]},template:function(n,i){if(n&1&&(Oi$1(0,`div`,16)(1,`div`,17)(2,`div`,18)(3,`mat-form-field`,19)(4,`mat-label`),Yw(5,2),gl$1(),Oi$1(6,`mat-select`,20),ug$1(`selectionChange`,function(a){return i.onInputFormatChange(a.value)}),Oi$1(7,`mat-select-trigger`)(8,`div`,21),Bh$1(9,`img`,22),Oi$1(10,`span`,23),pw(11,Qy,2,0,`ng-container`)(12,Zy,2,0,`ng-container`)(13,Jy,2,0,`ng-container`)(14,eE,2,0,`ng-container`),gl$1()()(),Oi$1(15,`mat-option`,24)(16,`div`,25),Bh$1(17,`img`,26),Oi$1(18,`span`,23),Yw(19,3),gl$1()()(),Oi$1(20,`mat-option`,27)(21,`div`,25),Bh$1(22,`img`,26),Oi$1(23,`span`,23),Yw(24,4),gl$1()()(),Oi$1(25,`mat-option`,28)(26,`div`,25),Bh$1(27,`img`,29),Oi$1(28,`span`,23),Yw(29,5),gl$1()()(),Oi$1(30,`mat-option`,30)(31,`div`,25),Bh$1(32,`img`,31),Oi$1(33,`span`,23),Yw(34,6),gl$1()()()()(),Oi$1(35,`mat-form-field`,32)(36,`mat-label`),Yw(37,7),gl$1(),Oi$1(38,`mat-select`,33),ug$1(`selectionChange`,function(a){return i.onExampleChange(a.value)}),Oi$1(39,`mat-option`,34),Yw(40,8),gl$1(),Oi$1(41,`mat-option`,35),Yw(42,9),gl$1(),Oi$1(43,`mat-option`,36),Yw(44,10),gl$1()()()(),Oi$1(45,`div`,37)(46,`mat-icon`,38),Sb$1(47,`arrow_forward`),gl$1()(),Oi$1(48,`div`,39)(49,`app-language-selector`,40),ug$1(`languageChanged`,function(a){return i.onLanguageChanged(a)})(`targetChanged`,function(a){return i.onTargetChanged(a)})(`optionsChanged`,function(a){return i.onOptionsChanged(a)}),gl$1()()(),Oi$1(50,`div`,41)(51,`div`,42)(52,`app-split-pane`,43),ug$1(`swapClicked`,function(){return i.onSwap()})(`runClicked`,function(){return i.onRun()}),gl$1()(),Oi$1(53,`div`,44),ug$1(`mousedown`,function(a){return i.onResizerMouseDown(a)})(`dblclick`,function(){return i.onResizerDoubleClick()})(`keydown`,function(a){return i.onResizerKeydown(a)}),gl$1(),Oi$1(54,`div`,45),Bh$1(55,`app-bottom-panel`),gl$1()(),Oi$1(56,`button`,46),ug$1(`click`,function(){return i.onGoOnline()}),Oi$1(57,`mat-icon`,47),Sb$1(58,`cloud_upload`),gl$1(),Oi$1(59,`span`),Yw(60,11),gl$1()()(),Oh$1(61,tE,1,5,`ng-template`,null,0,qb$1)(63,nE,5,6,`ng-template`,null,1,qb$1)),n&2){let r,a=ab$1(62),o=ab$1(64);ZE(6),Hh(`value`,i.inputFormat()||`openapi_3_2_0`),ZE(3),Hh(`ngSrc`,i.inputFormat()===`google_discovery`?`assets/icons/google.svg`:i.inputFormat()===`c_source`?`assets/icons/c.svg`:`assets/icons/openapi.svg`),ZE(2),gw((r=i.inputFormat())===`google_discovery`?11:r===`openapi_older`?12:r===`c_source`?13:14),ZE(27),Hh(`value`,i.selectedExample()),ZE(5),Hh(`disabled`,!0),ZE(6),Hh(`selectedLanguageId`,i.selectedLanguageId()||``)(`target`,i.target())(`options`,i.languageOptions()),ZE(3),Hh(`orientation`,i.orientation())(`isExecuting`,i.isExecuting())(`leftTemplate`,i.orientation()===`openapi-left`?a:o)(`rightTemplate`,i.orientation()===`openapi-right`?a:o),ZE(),Vh$1(`aria-valuenow`,i.apiDocsPaneHeight()),ZE(),vg$1(`height`,i.apiDocsPaneHeight(),`px`)}},dependencies:[lo$1,yr,vr,xr,kr,Or,Ta,Ne$1,ht$1,_e,K_$1,G_$1,q_$1,$n$2,xr$2,_r,wf$1,xf$1,J$1],styles:[`[_nghost-%COMP%]{display:block;height:100%}.workspace-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.workspace-toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-wrap:wrap;align-items:center;padding:.5rem 1rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:1rem}.input-controls[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.toolbar-field[_ngcontent-%COMP%]{width:200px}.example-field[_ngcontent-%COMP%]{width:140px}.arrow-container[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--%NS%text-secondary)}.flow-arrow[_ngcontent-%COMP%]{opacity:.6}.output-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.generate-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.run-spinner[_ngcontent-%COMP%]{margin-right:.5rem}.workspace-content[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow:hidden}.workspace-content.resizing[_ngcontent-%COMP%]   .top-pane[_ngcontent-%COMP%], .workspace-content.resizing[_ngcontent-%COMP%]   .bottom-pane[_ngcontent-%COMP%]{pointer-events:none;transition:none}.code-directory-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;overflow:hidden}.directory-tree-pane[_ngcontent-%COMP%]{flex:0 0 200px;max-width:40%;min-width:0;min-height:0;overflow:hidden;border-right:1px solid var(--%NS%border-color)}.code-viewer-pane[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;min-height:0;overflow:hidden}.format-option[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.format-option-trigger[_ngcontent-%COMP%]{display:flex;align-items:center}.format-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px;object-fit:contain}.format-name[_ngcontent-%COMP%]{flex:1}.workspace-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.top-pane[_ngcontent-%COMP%]{flex-grow:1;min-height:300px;position:relative;overflow:hidden}.bottom-pane[_ngcontent-%COMP%]{flex-shrink:0;display:flex;flex-direction:column;background-color:var(--%NS%surface-color, #fff);border-top:1px solid var(--%NS%border-color, #e0e0e0);transition:height .2s ease-out}.bottom-pane.dragging[_ngcontent-%COMP%]{transition:none}.vertical-resizer[_ngcontent-%COMP%]{height:6px;background-color:var(--%NS%border-color, #e0e0e0);cursor:row-resize;flex-shrink:0;z-index:10;transition:background-color .2s ease}.vertical-resizer[_ngcontent-%COMP%]:hover, .vertical-resizer[_ngcontent-%COMP%]:focus{background-color:var(--%NS%primary-color, #1976d2)}.vertical-resizer[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color, #1976d2);outline-offset:-2px}@media(max-width:768px){.vertical-resizer[_ngcontent-%COMP%]{display:none}}@media(max-width:900px){.workspace-toolbar[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:flex-start;height:auto}.input-controls[_ngcontent-%COMP%]{flex:1 1 100%;margin-bottom:.5rem}.arrow-container[_ngcontent-%COMP%]{display:none}.output-controls[_ngcontent-%COMP%]{flex:1 1 100%}.toolbar-spacer[_ngcontent-%COMP%]{display:none}}@media(max-width:600px){.input-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.toolbar-field[_ngcontent-%COMP%], .example-field[_ngcontent-%COMP%]{width:100%}.output-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.directory-tree-pane[_ngcontent-%COMP%]{flex:0 0 140px;max-width:40%}}.online-mode-fab[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:24px;z-index:10}`]})};export{Gp as WorkspaceComponent};