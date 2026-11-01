import{$ as JI,$r as xr$1,A as El$1,An as dg$1,Ar as rd$1,Bn as fs$1,C as Dl$1,Ct as Oi$1,Dn as cs$1,E as Eb$1,Fn as ei,Gr as vw,Gt as Tw,Hn as gE$1,Hr as vj,In as es$1,Kn as gp$1,Kr as wj,Kt as U,L as Gb$1,Ln as fe,Lr as ug$1,M as Ew,Mn as du,Mt as Qm$1,Nn as eD,Nr as sb$1,O as Eg$1,P as Fb$1,Pn as eb$1,Pt as R,Qn as ie,Qt as Vh$1,Rn as fg,Sr as pg,St as Oh$1,T as Dv,Tn as cb$1,Tr as qh$1,Un as gd$1,Ur as vl$1,Ut as Tj,V as Hh$1,Vr as vg$1,Wn as gg$1,Xn as hw,Xr as xb$1,Xt as Ve,Y as Il$1,Yt as Vb,Z as J,Zn as ib$1,_n as _g$1,an as Wh$1,br as nd$1,bt as OE$1,c as Ah$1,cr as ko$1,ct as Lg$1,dn as Yi,dr as ln$1,dt as Lr$1,ei as xu$1,er as jb$1,et as Jb$1,f as Bh$1,fr as ls$1,ft as M,gr as ml$1,gt as Nd$1,hn as Zm$1,ii as zD,in as Wb$1,j as Er,jt as Ql$1,k as Ej,kr as rb$1,l as Am$1,ln as YE$1,mn as Zl$1,mr as md$1,n as $b$1,ni as yl$1,nn as W$1,nr as jh$1,or as kh$1,pn as Z,pr as mc,q as Ii$1,qn as hE$1,r as $e$1,ri as yw,rn as WD,si as zl$1,sr as km$1,st as Kw,t as $D,ti as yj,un as Yb$1,v as C,vr as mw,wr as q,xn as ab$1,xr as nv,xt as Ob$1,yn as _j,yr as nb$1}from"./chunk-CR22HL97.js";import{S as lr,b as kr$1,g as hr,m as ct$1,n as Co$1,r as F,s as Or$1,u as at$1}from"./chunk-C94B6iwP.js";import{a as Jt$1,h as q$1,s as Nn$1,t as B,u as U$1,y as xn}from"./chunk-QSsOD_iK.js";import{A as hn,H as yr,L as p,P as mn,V as xr$2,a as G,b as Vt,c as It,g as Qe$1,l as Kt,r as C$1,t as $n$1,v as Ri$1,w as _r,x as Xn$1,z as qa$1}from"./chunk-DBxaQRKe.js";import{c as ir,d as rr,i as _e,l as lt$1,n as Ne$1,o as at$2,p as yt$1,s as gt$1}from"./chunk-D9bultl1.js";import{E as ts$1,O as yt$2,T as re,_ as is$1,b as ns$1,h as ae,i as Ea$1,l as Qe$2,r as Do,s as Mo,v as jt}from"./chunk-DcXa8eCv.js";import{$ as zn$1,A as bn,I as jn,M as fn,N as gn,P as hn$1,T as Vt$1,U as pn,X as xn$1,Z as yn,b as Rn$1,c as Dn$1,f as In$1,g as Nn$2,h as Mn$1,i as B$1,j as dn$1,l as En,m as Ln$1,o as Cn,r as An$1,u as Fn$1,y as Pn$1,z as mn$1}from"./chunk-JxbcF1pb.js";import{A as oi,D as kc,E as hr$1,F as wc,I as xc,L as xr$3,M as ql$1,N as vc,O as ml$2,P as vr$1,R as yr$1,S as br,T as hl$1,_ as Yl$1,a as Cr$1,b as ai,c as Fc,f as Oc,g as Uc,h as Tc,i as Cc,j as po$1,l as Ic,m as Sc,o as Dc,p as Rc,r as Ar$1,s as Er$1,t as $c,u as Jc$1,v as Zc,x as bc,y as Zi}from"./chunk-uCKGgZ9v.js";import{c as de}from"./chunk-DJBwdE0S.js";import{n as Z$1,t as J$1}from"./chunk-B6IKjs6b.js";function jp(e,t){e&1&&Wh$1(0)}function Kp(e,t){e&1&&Bh$1(0,`mat-spinner`,8)}function Yp(e,t){e&1&&(Oi$1(0,`mat-icon`,9),xb$1(1,`play_arrow`),ml$1())}function Qp(e,t){e&1&&Wh$1(0)}var Sr=class e{leftTemplate=vj();rightTemplate=vj();orientation=vj.required();isExecuting=vj(!1);swapClicked=yj();runClicked=yj();runTooltip=Yb$1(()=>this.orientation()===`openapi-left`?`Generate Code (from_openapi)`:`Generate OpenAPI (to_openapi)`);el=C(Lr$1);windowRef=C(lr);isDragging=ei(!1);splitPos=ei(50);isMobile=ei(!1);constructor(){this.checkMobile()}onDragStart(t){t.preventDefault(),this.isDragging.set(!0)}onDrag(t){if(!this.isDragging())return;let n=this.el.nativeElement.querySelector(`.split-pane-container`);if(!n)return;let i=n.getBoundingClientRect();if(this.isMobile()){let o=(t.clientY-i.top)/i.height*100;o=Math.max(20,Math.min(o,80)),this.splitPos.set(o)}else{let o=(t.clientX-i.left)/i.width*100;o=Math.max(20,Math.min(o,80)),this.splitPos.set(o)}}onDragEnd(){this.isDragging.set(!1)}onResizerKeydown(t){t.key===`ArrowLeft`||t.key===`ArrowUp`?(t.preventDefault(),this.splitPos.update(i=>Math.max(20,i-5))):t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),this.splitPos.update(i=>Math.min(80,i+5))):t.key===`Home`?(t.preventDefault(),this.splitPos.set(20)):t.key===`End`&&(t.preventDefault(),this.splitPos.set(80))}checkMobile(){this.windowRef&&this.isMobile.set(this.windowRef.innerWidth<=768)}handleKeydown(t){let n=t;if(n.key===`s`||n.key===`S`){if(n.preventDefault(),this.isExecuting())return;n.shiftKey?this.swapClicked.emit():this.runClicked.emit()}}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-split-pane`]],hostBindings:function(n,i){n&1&&ug$1(`keydown.control.s`,function(o){return i.handleKeydown(o)},gE$1)(`keydown.meta.s`,function(o){return i.handleKeydown(o)},gE$1)(`resize`,function(){return i.checkMobile()},hE$1)},inputs:{leftTemplate:[1,`leftTemplate`],rightTemplate:[1,`rightTemplate`],orientation:[1,`orientation`],isExecuting:[1,`isExecuting`]},outputs:{swapClicked:`swapClicked`,runClicked:`runClicked`},decls:16,vars:23,consts:()=>{let t;t=$localize`:@@resizeSplitPanesAria:Resize Split Panes`;let n;n=$localize`Swap Panes (Ctrl+Shift+S)`;let i;i=$localize`:@@swapPanesAria:Swap Panes`;let r;return r=$localize`Generate`,[r,[1,`split-pane-container`,3,`mousemove`,`mouseup`,`mouseleave`],[1,`pane`,`pane-left`],[4,`ngTemplateOutlet`],[1,`resizer-wrapper`],[`role`,`separator`,`tabindex`,`0`,`aria-label`,t,`aria-valuemin`,`20`,`aria-valuemax`,`80`,1,`resizer`,3,`mousedown`,`keydown`],[1,`resizer-action-top`,3,`mousedown`],[`mat-flat-button`,``,1,`generate-btn`,3,`click`,`disabled`,`matTooltip`],[`diameter`,`20`,1,`run-spinner`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,1,`resizer-swap-btn`,3,`click`,`mousedown`,`disabled`],[`aria-hidden`,`true`,1,`big-swap-icon`],[1,`pane`,`pane-right`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,1),ug$1(`mousemove`,function(o){return i.onDrag(o)})(`mouseup`,function(){return i.onDragEnd()})(`mouseleave`,function(){return i.onDragEnd()}),Oi$1(1,`div`,2),Oh$1(2,jp,1,0,`ng-container`,3),ml$1(),Oi$1(3,`div`,4)(4,`div`,5),ug$1(`mousedown`,function(o){return i.onDragStart(o)})(`keydown`,function(o){return i.onResizerKeydown(o)}),ml$1(),Oi$1(5,`div`,6),ug$1(`mousedown`,function(o){return o.stopPropagation()}),Oi$1(6,`button`,7),ug$1(`click`,function(){return i.runClicked.emit()}),hw(7,Kp,1,0,`mat-spinner`,8)(8,Yp,2,0,`mat-icon`,9),Oi$1(9,`span`),Kw(10,0),ml$1()()(),Oi$1(11,`button`,10),ug$1(`click`,function(o){return i.swapClicked.emit(),o.stopPropagation()})(`mousedown`,function(o){return o.stopPropagation()}),Oi$1(12,`span`,11),xb$1(13,`⇄`),ml$1()()(),Oi$1(14,`div`,12),Oh$1(15,Qp,1,0,`ng-container`,3),ml$1()()),n&2&&(YE$1(),vg$1(`width`,i.isMobile()?`100%`:i.splitPos()+`%`)(`height`,i.isMobile()?i.splitPos()+`%`:`100%`),YE$1(),Hh$1(`ngTemplateOutlet`,i.leftTemplate()||null),YE$1(),vg$1(`left`,i.isMobile()?`0`:`calc(`+i.splitPos()+`% - 6px)`)(`top`,i.isMobile()?`calc(`+i.splitPos()+`% - 6px)`:`0`),YE$1(),Eg$1(`resizing`,i.isDragging()),Vh$1(`aria-orientation`,i.isMobile()?`horizontal`:`vertical`)(`aria-valuenow`,i.splitPos()),YE$1(2),Hh$1(`disabled`,i.isExecuting())(`matTooltip`,i.runTooltip()),Vh$1(`aria-label`,i.runTooltip()),YE$1(),mw(i.isExecuting()?7:8),YE$1(4),Hh$1(`disabled`,i.isExecuting()),YE$1(3),vg$1(`width`,i.isMobile()?`100%`:100-i.splitPos()+`%`)(`height`,i.isMobile()?100-i.splitPos()+`%`:`100%`),YE$1(),Hh$1(`ngTemplateOutlet`,i.rightTemplate()||null))},dependencies:[Or$1,xr$2,yr,$n$1,Mo,Do,ql$1,po$1,J$1,Z$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.split-pane-container[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;overflow:hidden;position:relative}.pane[_ngcontent-%COMP%]{height:100%;overflow:auto;transition:width .3s ease-in-out;position:relative}.pane-left[_ngcontent-%COMP%]{border-right:1px solid var(--%NS%border-color)}.pane-right[_ngcontent-%COMP%]{border-left:1px solid var(--%NS%border-color)}.resizer-wrapper[_ngcontent-%COMP%]{width:12px;position:absolute;top:0;bottom:0;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:center}.resizer[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;cursor:col-resize;transition:background-color .2s}.resizer[_ngcontent-%COMP%]:hover, .resizer.resizing[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%primary-color) 10%,transparent)}.resizer[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:-2px;background-color:color-mix(in srgb,var(--%NS%primary-color) 15%,transparent)}.resizer-action-top[_ngcontent-%COMP%]{position:absolute;top:10px;left:50%;transform:translate(-50%);z-index:20}.generate-btn[_ngcontent-%COMP%]{height:40px;border-radius:20px;padding:0 1rem;box-shadow:0 2px 4px #0003}.resizer-swap-btn[_ngcontent-%COMP%]{background-color:var(--%NS%surface-color);border:1px solid var(--%NS%border-color);box-shadow:0 2px 4px #0000001a;width:32px!important;height:32px!important;line-height:32px!important;border-radius:50%;display:flex;justify-content:center;align-items:center;padding:0!important;z-index:20}.resizer-swap-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.run-spinner[_ngcontent-%COMP%]{margin-right:.5rem}@media(max-width:768px){.split-pane-container[_ngcontent-%COMP%]{flex-direction:column}.pane[_ngcontent-%COMP%]{width:100%!important;transition:height .3s ease-in-out}.pane-left[_ngcontent-%COMP%]{border-right:none;border-bottom:1px solid var(--%NS%border-color)}.pane-right[_ngcontent-%COMP%]{border-left:none;border-top:1px solid var(--%NS%border-color)}.resizer-wrapper[_ngcontent-%COMP%]{width:100%;height:12px;left:0;right:0;bottom:auto;flex-direction:row}.resizer[_ngcontent-%COMP%]{cursor:row-resize}.resizer-action-top[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%)}.resizer-swap-btn[_ngcontent-%COMP%]{transform:rotate(90deg)}}.big-swap-icon[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:24px}`]})};var eu=new R(`MatTabContent`);var tu=(()=>{class e{template=C(xr$1);static ɵfac=function(i){return new(i||e)};static ɵdir=zD({type:e,selectors:[[``,`matTabContent`,``]],features:[Fb$1([{provide:eu,useExisting:e}])]})}return e})();var nu=new R(`MatTabLabel`);var Jc=new R(`MAT_TAB`);var iu=(()=>{class e extends Ea$1{_closestTab=C(Jc,{optional:!0});static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=zD({type:e,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[Fb$1([{provide:nu,useExisting:e}]),Ah$1]})}return e})();var el=new R(`MAT_TAB_GROUP`);var si=(()=>{class e{_viewContainerRef=C(Yi);_closestTabGroup=C(el,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(n){this._setTemplateLabelInput(n)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Z;position=null;origin=null;isActive=!1;constructor(){C(C$1).load(mn)}ngOnChanges(n){(Object.hasOwn(n,`textLabel`)||Object.hasOwn(n,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new re(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(n){n&&n._closestTab===this&&(this._templateLabel=n)}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`*`];function i(r,o){r&1&&rb$1(0)}return $D({type:e,selectors:[[`mat-tab`]],contentQueries:function(o,a,s){if(o&1&&fg(s,iu,5)(s,tu,7,xr$1),o&2){let c;ib$1(c=sb$1())&&(a.templateLabel=c.first),ib$1(c=sb$1())&&(a._explicitContent=c.first)}},viewQuery:function(o,a){if(o&1&&pg(xr$1,7),o&2){let s;ib$1(s=sb$1())&&(a._implicitContent=s.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(o,a){o&2&&Vh$1(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Tj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[Fb$1([{provide:Jc,useExisting:e}]),nv],ngContentSelectors:n,decls:1,vars:0,template:function(o,a){o&1&&(nb$1(),kh$1(0,i,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return e})();var Go=`mdc-tab-indicator--active`;var Kc=`mdc-tab-indicator--no-transition`;var Wo=class{_items;_currentItem;constructor(t){this._items=t}hide(){this._items.forEach(t=>t.deactivateInkBar()),this._currentItem=void 0}alignToElement(t){let n=this._items.find(r=>r.elementRef.nativeElement===t),i=this._currentItem;if(n!==i&&(i?.deactivateInkBar(),n)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();n.activateInkBar(r),this._currentItem=n}}};var ru=(()=>{class e{_elementRef=C(Lr$1);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(n){this._fitToContent!==n&&(this._fitToContent=n,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(n){let i=this._elementRef.nativeElement;if(!n||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Go);return}let r=i.getBoundingClientRect(),o=n.width/r.width,a=n.left-r.left;i.classList.add(Kc),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(Kc),i.classList.add(Go),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Go)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let n=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=n.createElement(`span`),r=this._inkBarContentElement=n.createElement(`span`);i.className=`mdc-tab-indicator`,r.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(i){return new(i||e)};static ɵdir=zD({type:e,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Tj]}})}return e})();var tl=(()=>{class e extends ru{elementRef=C(Lr$1);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=zD({type:e,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(i,r){i&2&&(Vh$1(`aria-disabled`,!!r.disabled),Eg$1(`mat-mdc-tab-disabled`,r.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Tj]},features:[Ah$1]})}return e})();var Yc={passive:!0};var ou=650;var au=100;function Fo(e){let t=e+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(t)?`${e}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(t)?t:``}var su=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(wj);_viewportRuler=C(ae);_dir=C(Xn$1,{optional:!0});_ngZone=C(J);_platform=C(p);_sharedResizeObserver=C(lt$1);_injector=C(ie);_renderer=C(mc);_animationsDisabled=G();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Z;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Z;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(n){let i=isNaN(n)?0:n;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $e$1;indexFocused=new $e$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Yc),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Yc))}ngAfterContentInit(){let n=this._dir?this._dir.change:ls$1(`ltr`),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(km$1(32),Ql$1(this._destroyed)),r=this._viewportRuler.change(150).pipe(Ql$1(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Vt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),OE$1(o,{injector:this._injector}),Am$1(n,r,i,this._items.changes,this._itemsResized()).pipe(Ql$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!=`function`?Ve:this._items.changes.pipe(Zm$1(this._items),du(n=>new M(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return n.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Qm$1(1),ln$1(n=>n.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(n=>n()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(n){if(!Qe$1(n))switch(n.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(n))}break;default:this._keyManager?.onKeydown(n)}}_onContentChanges(){let n=this._elementRef.nativeElement.textContent;n!==this._currentTextContent&&(this._currentTextContent=n||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(n){!this._isValidIndex(n)||this.focusIndex===n||!this._keyManager||this._keyManager.setActiveItem(n)}_isValidIndex(n){return this._items?!!this._items.toArray()[n]:!0}_setTabFocus(n){if(this._showPaginationControls&&this._scrollToLabel(n),this._items&&this._items.length){this._items.toArray()[n].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let n=this.scrollDistance,i=this._getLayoutDirection()===`ltr`?-n:n;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(n){this._scrollTo(n)}_scrollHeader(n){let i=this._tabListContainer.nativeElement.offsetWidth,r=(n==`before`?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(n){this._stopInterval(),this._scrollHeader(n)}_scrollToLabel(n){if(this.disablePagination)return;let i=this._items?this._items.toArray()[n]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()==`ltr`?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let r=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let n=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=n?n.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(n,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),fs$1(ou,au).pipe(Ql$1(Am$1(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(n);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(n){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,n)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static ɵfac=function(i){return new(i||e)};static ɵdir=zD({type:e,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Tj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,_j]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return e})();var cu=(()=>{class e extends su{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Wo(this._items),super.ngAfterContentInit()}_itemSelected(n){n.preventDefault()}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵcmp=(function(){let n=[`tabListContainer`],i=[`tabList`],r=[`tabListInner`],o=[`nextPaginator`],a=[`previousPaginator`];return $D({type:e,selectors:[[`mat-tab-header`]],contentQueries:function(l,d,u){if(l&1&&fg(u,tl,4),l&2){let p;ib$1(p=sb$1())&&(d._items=p)}},viewQuery:function(l,d){if(l&1&&pg(n,7)(i,7)(r,7)(o,5)(a,5),l&2){let u;ib$1(u=sb$1())&&(d._tabListContainer=u.first),ib$1(u=sb$1())&&(d._tabList=u.first),ib$1(u=sb$1())&&(d._tabListInner=u.first),ib$1(u=sb$1())&&(d._nextPaginator=u.first),ib$1(u=sb$1())&&(d._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(l,d){l&2&&Eg$1(`mat-mdc-tab-header-pagination-controls-enabled`,d._showPaginationControls)(`mat-mdc-tab-header-rtl`,d._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Tj]},features:[Ah$1],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(l,d){l&1&&(nb$1(),Oi$1(0,`div`,5,0),ug$1(`click`,function(){return d._handlePaginatorClick(`before`)})(`mousedown`,function(p){return d._handlePaginatorPress(`before`,p)})(`touchend`,function(){return d._stopInterval()}),Bh$1(2,`div`,6),ml$1(),Oi$1(3,`div`,7,1),ug$1(`keydown`,function(p){return d._handleKeydown(p)}),Oi$1(5,`div`,8,2),ug$1(`cdkObserveContent`,function(){return d._onContentChanges()}),Oi$1(7,`div`,9,3),rb$1(9),ml$1()()(),Oi$1(10,`div`,10,4),ug$1(`mousedown`,function(p){return d._handlePaginatorPress(`after`,p)})(`click`,function(){return d._handlePaginatorClick(`after`)})(`touchend`,function(){return d._stopInterval()}),Bh$1(12,`div`,6),ml$1()),l&2&&(Eg$1(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollBefore),Hh$1(`matRippleDisabled`,d._disableScrollBefore||d.disableRipple),YE$1(3),Eg$1(`_mat-animation-noopable`,d._animationsDisabled),YE$1(2),Vh$1(`aria-label`,d.ariaLabel||null)(`aria-labelledby`,d.ariaLabelledby||null),YE$1(5),Eg$1(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollAfter),Hh$1(`matRippleDisabled`,d._disableScrollAfter||d.disableRipple))},dependencies:[Ri$1,qa$1],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return e})();var lu=new R(`MAT_TABS_CONFIG`);var Qc=(()=>{class e extends Qe$2{_host=C(Vo);_ngZone=C(J);_centeringSub=q.EMPTY;_leavingSub=q.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Zm$1(this._host._isCenterPosition())).subscribe(n=>{this._host._content&&n&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let n;return function(r){return(n||(n=Dv(e)))(r||e)}})();static ɵdir=zD({type:e,selectors:[[``,`matTabBodyHost`,``]],features:[Ah$1]})}return e})();var Vo=(()=>{class e{_elementRef=C(Lr$1);_dir=C(Xn$1,{optional:!0});_ngZone=C(J);_injector=C(ie);_renderer=C(mc);_diAnimationsDisabled=G();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=q.EMPTY;_position;_previousPosition;_onCentering=new $e$1;_beforeCentering=new $e$1;_afterLeavingCenter=new $e$1;_onCentered=new $e$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(n){this._positionIndex=n,this._computePositionAnimationState()}constructor(){if(this._dir){let n=C(wj);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),n.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),OE$1(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(n=>n()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),r.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(n,`transitionstart`,r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(n,`transitionend`,i),this._renderer.listen(n,`transitioncancel`,i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let n=this._position===`center`;this._beforeCentering.emit(n),n&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(n){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,n)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(n=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=n==`ltr`?`left`:`right`:this._positionIndex>0?this._position=n==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),OE$1(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`content`];function i(r,o){}return $D({type:e,selectors:[[`mat-tab-body`]],viewQuery:function(o,a){if(o&1&&pg(Qc,5)(n,5),o&2){let s;ib$1(s=sb$1())&&(a._portalHost=s.first),ib$1(s=sb$1())&&(a._contentElement=s.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(o,a){o&2&&Vh$1(`inert`,a._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(o,a){o&1&&(Oi$1(0,`div`,1,0),Oh$1(2,i,0,0,`ng-template`,2),ml$1()),o&2&&Eg$1(`mat-tab-body-content-left`,a._position===`left`)(`mat-tab-body-content-right`,a._position===`right`)(`mat-tab-body-content-can-animate`,a._position===`center`||a._previousPosition===`center`)},dependencies:[Qc,jt],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return e})();var vr=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(wj);_ngZone=C(J);_tabsSubscription=q.EMPTY;_tabLabelSubscription=q.EMPTY;_tabBodySubscription=q.EMPTY;_diAnimationsDisabled=G();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Ii$1;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(n){this._fitInkBarToContent=n,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(n){this._indexToSelect=isNaN(n)?null:n}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(n){this._animationDuration=n,n&&typeof n==`object`?(this._bodyAnimationDuration=Fo(n.body),this._headerAnimationDuration=Fo(n.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Fo(n)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(n){this._contentTabIndex=isNaN(n)?null:n}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(n){let i=this._elementRef.nativeElement.classList;i.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),n&&i.add(`mat-tabs-with-background`,`mat-background-${n}`),this._backgroundColor=n}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $e$1;focusChange=new $e$1;animationDone=new $e$1;selectedTabChange=new $e$1(!0);_groupId;_isServer=!C(p).isBrowser;constructor(){let n=C(lu,{optional:!0});this._groupId=C(Kt).getId(`mat-tab-group-`),this.animationDuration=n&&n.animationDuration?n.animationDuration:`500ms`,this.disablePagination=n&&n.disablePagination!=null?n.disablePagination:!1,this.dynamicHeight=n&&n.dynamicHeight!=null?n.dynamicHeight:!1,n?.contentTabIndex!=null&&(this.contentTabIndex=n.contentTabIndex),this.preserveContent=!!n?.preserveContent,this.fitInkBarToContent=n&&n.fitInkBarToContent!=null?n.fitInkBarToContent:!1,this.stretchTabs=n&&n.stretchTabs!=null?n.stretchTabs:!0,this.alignTabs=n&&n.alignTabs!=null?n.alignTabs:null}ngAfterContentChecked(){let n=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=n){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(n));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===n),i||(this.selectedIndexChange.emit(n),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((i,r)=>{i.position=r-n,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=n-this._selectedIndex)}),this._selectedIndex!==n&&(this._selectedIndex=n,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let n=this._clampTabIndex(this._indexToSelect);if(n===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[n]&&Promise.resolve().then(()=>{i[n].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(n))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Zm$1(this._allTabs)).subscribe(n=>{this._tabs.reset(n.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(n){let i=this._tabHeader;i&&(i.focusIndex=n)}_focusChanged(n){this._lastFocusedTabIndex=n,this.focusChange.emit(this._createChangeEvent(n))}_createChangeEvent(n){let i=new Ho;return i.index=n,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[n]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Am$1(...this._tabs.map(n=>n._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(n){return Math.min(this._tabs.length-1,Math.max(n||0,0))}_getTabLabelId(n,i){return n.id||`${this._groupId}-label-${i}`}_getTabContentId(n){return`${this._groupId}-content-${n}`}_setTabBodyWrapperHeight(n){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=n;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=n+`px`)}_removeTabBodyWrapperHeight(){let n=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=n.clientHeight,n.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(n,i,r){i.focusIndex=r,n.disabled||(this.selectedIndex=r)}_getTabIndex(n){return n===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(n,i){n&&n!==`mouse`&&n!==`touch`&&(this._tabHeader.focusIndex=i)}_bodyCentered(n){n&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`tabBodyWrapper`],i=[`tabHeader`],r=[`*`];function o(u,p){}function a(u,p){if(u&1&&Oh$1(0,o,0,0,`ng-template`,12),u&2){let _=eb$1().$implicit;Hh$1(`cdkPortalOutlet`,_.templateLabel)}}function s(u,p){if(u&1&&xb$1(0),u&2){let _=eb$1().$implicit;_g$1(_.textLabel)}}function c(u,p){if(u&1){let _=Tw();Oi$1(0,`div`,7,2),ug$1(`click`,function(){let f=nd$1(_),E=f.$implicit,C=f.$index,b=eb$1(),P=cb$1(1);return rd$1(b._handleClick(E,P,C))})(`cdkFocusChange`,function(f){let E=nd$1(_).$index,C=eb$1();return rd$1(C._tabFocusChanged(f,E))}),Bh$1(2,`span`,8)(3,`div`,9),Oi$1(4,`span`,10)(5,`span`,11),hw(6,a,1,1,null,12)(7,s,1,1),ml$1()()()}if(u&2){let _=p.$implicit,m=p.$index,f=cb$1(1),E=eb$1();Eb$1(_.labelClass),Eg$1(`mdc-tab--active`,E.selectedIndex===m),Hh$1(`id`,E._getTabLabelId(_,m))(`disabled`,_.disabled)(`fitInkBarToContent`,E.fitInkBarToContent),Vh$1(`tabIndex`,E._getTabIndex(m))(`aria-posinset`,m+1)(`aria-setsize`,E._tabs.length)(`aria-controls`,E._getTabContentId(m))(`aria-selected`,E.selectedIndex===m)(`aria-label`,_.ariaLabel||null)(`aria-labelledby`,!_.ariaLabel&&_.ariaLabelledby?_.ariaLabelledby:null),YE$1(3),Hh$1(`matRippleTrigger`,f)(`matRippleDisabled`,_.disabled||E.disableRipple),YE$1(3),mw(_.templateLabel?6:7)}}function l(u,p){u&1&&rb$1(0)}function d(u,p){if(u&1){let _=Tw();Oi$1(0,`mat-tab-body`,13),ug$1(`_onCentered`,function(){nd$1(_);let f=eb$1();return rd$1(f._removeTabBodyWrapperHeight())})(`_onCentering`,function(f){nd$1(_);let E=eb$1();return rd$1(E._setTabBodyWrapperHeight(f))})(`_beforeCentering`,function(f){nd$1(_);let E=eb$1();return rd$1(E._bodyCentered(f))}),ml$1()}if(u&2){let _=p.$implicit,m=p.$index,f=eb$1();Eb$1(_.bodyClass),Hh$1(`id`,f._getTabContentId(m))(`content`,_.content)(`position`,_.position)(`animationDuration`,f._bodyAnimationDuration)(`preserveContent`,f.preserveContent),Vh$1(`tabindex`,f.contentTabIndex!=null&&f.selectedIndex===m?f.contentTabIndex:null)(`aria-labelledby`,f._getTabLabelId(_,m))(`aria-hidden`,f.selectedIndex!==m)}}return $D({type:e,selectors:[[`mat-tab-group`]],contentQueries:function(p,_,m){if(p&1&&fg(m,si,5),p&2){let f;ib$1(f=sb$1())&&(_._allTabs=f)}},viewQuery:function(p,_){if(p&1&&pg(n,5)(i,5)(Vo,5),p&2){let m;ib$1(m=sb$1())&&(_._tabBodyWrapper=m.first),ib$1(m=sb$1())&&(_._tabHeader=m.first),ib$1(m=sb$1())&&(_._tabBodies=m)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(p,_){p&2&&(Vh$1(`mat-align-tabs`,_.alignTabs),Eb$1(`mat-`+(_.color||`primary`)),vg$1(`--%NS%mat-tab-body-animation-duration`,_._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,_._headerAnimationDuration),Eg$1(`mat-mdc-tab-group-dynamic-height`,_.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,_.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,_.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Tj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Tj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Tj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,_j],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,_j],disablePagination:[2,`disablePagination`,`disablePagination`,Tj],disableRipple:[2,`disableRipple`,`disableRipple`,Tj],preserveContent:[2,`preserveContent`,`preserveContent`,Tj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[Fb$1([{provide:el,useExisting:e}])],ngContentSelectors:r,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(p,_){p&1&&(nb$1(),Oi$1(0,`mat-tab-header`,3,0),ug$1(`indexFocused`,function(f){return _._focusChanged(f)})(`selectFocusedIndex`,function(f){return _.selectedIndex=f}),vw(2,c,8,17,`div`,4,yw),ml$1(),hw(4,l,1,0),Oi$1(5,`div`,5,1),vw(7,d,1,10,`mat-tab-body`,6,yw),ml$1()),p&2&&(Hh$1(`selectedIndex`,_.selectedIndex||0)(`disableRipple`,_.disableRipple)(`disablePagination`,_.disablePagination),jh$1(`aria-label`,_.ariaLabel)(`aria-labelledby`,_.ariaLabelledby),YE$1(2),Ew(_._tabs),YE$1(2),mw(_._isServer?4:-1),YE$1(),Eg$1(`_mat-animation-noopable`,_._bodyAnimationsDisabled()),YE$1(2),Ew(_._tabs))},dependencies:[cu,tl,hn,Ri$1,Qe$2,Vo],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return e})();var Ho=class{index;tab};var xr=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=WD({type:e});static ɵinj=xu$1({imports:[It]})}return e})();var pu=(e,t)=>t.id;function uu(e,t){if(e&1&&(Oi$1(0,`li`),xb$1(1),ml$1()),e&2){let n=t.$implicit;YE$1(),_g$1(n)}}function mu(e,t){if(e&1&&(Oi$1(0,`div`,20)(1,`strong`),Kw(2,3),ml$1(),Oi$1(3,`ul`),vw(4,uu,2,1,`li`,null,yw),ml$1()()),e&2){let n=eb$1();YE$1(4),Ew(n.validationErrors())}}function fu(e,t){if(e&1){let n=Tw();Oi$1(0,`button`,31),ug$1(`click`,function(){nd$1(n);let r=eb$1();return rd$1(r.onPreviewInEditor())}),Oi$1(1,`mat-icon`,16),xb$1(2,`visibility`),ml$1(),Oi$1(3,`span`),Kw(4,4),ml$1()()}}function hu(e,t){e&1&&Bh$1(0,`mat-spinner`,37)}function gu(e,t){e&1&&(Oi$1(0,`mat-icon`,38),xb$1(1,`check_circle`),ml$1())}function bu(e,t){if(e&1&&(Oi$1(0,`mat-icon`,39),xb$1(1,`error_outline`),ml$1()),e&2){let n=eb$1().$implicit;Hh$1(`matTooltip`,n.error||`Failed to load URL`)}}function Eu(e,t){e&1&&(Oi$1(0,`mat-icon`,40),xb$1(1,`link`),ml$1())}function yu(e,t){if(e&1&&(Oi$1(0,`div`,43),xb$1(1),ml$1()),e&2){let n=eb$1().$implicit;YE$1(),Dl$1(` `,n.error,` `)}}function Su(e,t){if(e&1){let n=Tw();Oi$1(0,`div`,29)(1,`div`,32)(2,`span`,33),xb$1(3),ml$1(),Oi$1(4,`mat-form-field`,34)(5,`mat-label`),Kw(6,5),ml$1(),Oi$1(7,`input`,35),ug$1(`input`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.onUrlInput(o.id,r))})(`paste`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.onUrlPaste(o.id,r))})(`keydown.enter`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.onUrlEnterKey(o.id,r))}),ml$1()(),Oi$1(8,`div`,36),hw(9,hu,1,0,`mat-spinner`,37)(10,gu,2,0,`mat-icon`,38)(11,bu,2,1,`mat-icon`,39)(12,Eu,2,0,`mat-icon`,40),ml$1(),Oi$1(13,`button`,41),ug$1(`click`,function(){let r=nd$1(n).$implicit,o=eb$1();return rd$1(o.onFetchSingleUrl(r.id))}),Oi$1(14,`mat-icon`,16),xb$1(15,`refresh`),ml$1()(),Oi$1(16,`button`,42),ug$1(`click`,function(){let r=nd$1(n).$implicit,o=eb$1();return rd$1(o.onRemoveUrl(r.id))}),Oi$1(17,`mat-icon`,16),xb$1(18,`close`),ml$1()()(),hw(19,yu,2,1,`div`,43),ml$1()}if(e&2){let n,i=t.$implicit,r=t.$index;YE$1(3),Dl$1(`#`,r+1),YE$1(4),Hh$1(`value`,i.url),Vh$1(`aria-label`,`OpenAPI URL #`+(r+1)),YE$1(2),mw((n=i.status)===`loading`?9:n===`loaded`?10:n===`error`?11:12),YE$1(4),Hh$1(`disabled`,i.status===`loading`||!i.url.trim()),Vh$1(`aria-label`,`Fetch OpenAPI URL #`+(r+1)),YE$1(3),Vh$1(`aria-label`,`Remove OpenAPI URL #`+(r+1)),YE$1(3),mw(i.error?19:-1)}}function vu(e,t){if(e&1){let n=Tw();Oi$1(0,`div`,30)(1,`p`),Kw(2,6),ml$1(),Oi$1(3,`button`,44),ug$1(`click`,function(){nd$1(n);let r=eb$1();return rd$1(r.onAddUrl(`https://petstore3.swagger.io/api/v3/openapi.json`))}),Oi$1(4,`mat-icon`,16),xb$1(5,`add`),ml$1(),Oi$1(6,`span`),Kw(7,7),ml$1()()()}}var kr=class e{specContent=vj.required();isExecuting=vj(!1);activeMode=vj(`editor`);specUrls=vj([]);isFetchingUrls=vj(!1);runClicked=yj();specContentChange=yj();validationErrorsChange=yj();activeModeChange=yj();urlAdded=yj();urlUpdated=yj();urlRemoved=yj();urlsClearClicked=yj();fetchUrlsClicked=yj();internalContent=Jb$1(()=>this.specContent());validationErrors=ei([]);contentControl=new q$1(``);themeService=C(vr$1);notificationService=C(yr$1);editorInstance;selectedTabIndex=Yb$1(()=>this.activeMode()===`urls`?1:0);hasNonEmptyUrls=Yb$1(()=>this.specUrls().some(t=>t.url.trim().length>0));hasLoadedUrls=Yb$1(()=>this.specUrls().some(t=>t.status===`loaded`&&!!t.content));editorOptions=Yb$1(()=>({theme:this.themeService.isDarkTheme()?`vs-dark`:`vs`,language:this.determineLanguage(this.internalContent()),automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:`on`,formatOnType:!0,formatOnPaste:!0}));constructor(){this.contentControl.valueChanges.pipe(Vt$1()).subscribe(t=>{let n=t||``;n!==this.internalContent()&&(this.internalContent.set(n),this.specContentChange.emit(n),this.validateContent(n))}),Nd$1(()=>{let t=this.specContent();this.contentControl.setValue(t,{emitEvent:!1}),this.validateContent(t)})}onTabIndexChange(t){let n=t===1?`urls`:`editor`;this.activeModeChange.emit(n),n===`editor`&&this.refreshEditorLayout()}refreshEditorLayout(){let t=this.editorInstance;t&&typeof t.layout==`function`&&t.layout()}onAddUrl(t){this.urlAdded.emit(t)}onUrlInput(t,n){let r=n.target?.value??``;this.urlUpdated.emit({id:t,url:r})}onUrlPaste(t,n){let i=n.clipboardData?.getData(`text`)??``;if(!i.includes(`
`)&&!i.includes(`\r`))return;let r=i.split(/\r?\n/).map(o=>o.trim()).filter(o=>o.length>0);if(!(r.length<=1)){n.preventDefault(),this.urlUpdated.emit({id:t,url:r[0]});for(let o=1;o<r.length;o++)this.urlAdded.emit(r[o])}}onUrlEnterKey(t,n){n.preventDefault(),this.onFetchSingleUrl(t)}onRemoveUrl(t){this.urlRemoved.emit(t)}onClearUrls(){this.urlsClearClicked.emit()}onFetchSingleUrl(t){this.fetchUrlsClicked.emit([t])}onFetchAllUrls(){this.fetchUrlsClicked.emit(void 0)}onPreviewInEditor(){this.activeModeChange.emit(`editor`),this.refreshEditorLayout()}handleKeydown(t){let n=t;(n.key===`s`||n.key===`S`)&&(n.shiftKey||(n.preventDefault(),this.isExecuting()||this.runClicked.emit()))}onEditorInit(t){this.editorInstance=t}onContentChange(t){this.internalContent.set(t),this.contentControl.setValue(t,{emitEvent:!1}),this.specContentChange.emit(t),this.validateContent(t)}validateContent(t){let n=hr$1.parseAndValidate(t);this.validationErrors.set(n.errors),this.validationErrorsChange.emit(n.errors)}formatDocument(){let t=this.internalContent();if(t.trim())try{let n=t.trim().startsWith(`{`),i=n?JSON.parse(t):Zi(t),r=n?JSON.stringify(i,null,2):Yl$1(i,{indent:2,lineWidth:-1});this.onContentChange(r),this.notificationService.success(`Document formatted successfully.`)}catch(n){this.notificationService.error(`Cannot format invalid document.`)}}copyToClipboard(){return es$1(this,null,function*(){let t=this.internalContent();if(t)try{yield navigator.clipboard.writeText(t),this.notificationService.success(`Copied to clipboard.`)}catch(n){this.notificationService.error(`Failed to copy to clipboard.`)}})}clearEditor(){this.onContentChange(``)}determineLanguage(t){return t.trim().startsWith(`{`)?`json`:`yaml`}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-openapi-editor`]],inputs:{specContent:[1,`specContent`],isExecuting:[1,`isExecuting`],activeMode:[1,`activeMode`],specUrls:[1,`specUrls`],isFetchingUrls:[1,`isFetchingUrls`]},outputs:{runClicked:`runClicked`,specContentChange:`specContentChange`,validationErrorsChange:`validationErrorsChange`,activeModeChange:`activeModeChange`,urlAdded:`urlAdded`,urlUpdated:`urlUpdated`,urlRemoved:`urlRemoved`,urlsClearClicked:`urlsClearClicked`,fetchUrlsClicked:`fetchUrlsClicked`},decls:40,vars:8,consts:()=>{let t;t=$localize`:@@openapiEditorActionsAria:OpenAPI Editor Actions`;let n;n=$localize`:@@openapiInputSourceTabsAria:OpenAPI Input Source Tabs`;let i;i=$localize`:@@openapiEditorTab:Editor`;let r;r=$localize`:@@formatDocTooltip:Format Document`;let o;o=$localize`:@@formatDocAria:Format Document`;let a;a=$localize`:@@copyToClipboardTooltip:Copy to Clipboard`;let s;s=$localize`:@@copyToClipboardAria:Copy to Clipboard`;let c;c=$localize`:@@clearEditorTooltip:Clear Editor`;let l;l=$localize`:@@clearEditorAria:Clear Editor`;let d;d=$localize`:@@openapiUrlsTab:URLs`;let u;u=$localize`:@@openapiUrlActionsAria:OpenAPI URL Actions`;let p;p=$localize`:@@addOpenApiUrlAria:Add OpenAPI URL`;let _;_=$localize`:@@fetchAllOpenApiUrlsAria:Fetch All OpenAPI URLs`;let m;m=$localize`:@@previewMergedInEditorAria:Preview Merged Spec in Editor`;let f;f=$localize`:@@clearAllUrlsTooltip:Clear All URLs`;let E;E=$localize`:@@clearAllUrlsAria:Clear All OpenAPI URLs`;let C;C=$localize`OpenAPI Spec`;let b;b=$localize`:@@addUrlBtn:Add URL`;let P;P=$localize`:@@fetchAllUrlsBtn:Fetch All`;let U;U=$localize`:@@validationErrorsHeading:Validation Errors:`;let F;F=$localize`:@@previewInEditorBtn:View in Editor`;let j;j=$localize`:@@openApiUrlPlaceholder:https://petstore3.swagger.io/api/v3/openapi.json`;let q;q=$localize`:@@fetchingUrlSpinnerAria:Fetching OpenAPI URL`;let z;z=$localize`:@@urlLoadedTooltip:Specification loaded`;let T;T=$localize`:@@urlLoadedAria:Specification loaded`;let w;w=$localize`:@@urlErrorAria:Specification failed to load`;let B;B=$localize`:@@urlIdleTooltip:Ready to fetch`;let ee;ee=$localize`:@@fetchSingleUrlTooltip:Fetch URL`;let J;J=$localize`:@@removeUrlTooltip:Remove URL`;let S;S=$localize`:@@openApiUrlFieldLabel:OpenAPI Spec URL`;let M;M=$localize`:@@addExamplePetstoreUrlAria:Add Example Petstore URL`;let x;x=$localize`:@@noOpenApiUrlsConfigured: No remote OpenAPI URLs configured. Add one or more URLs to fetch and combine specifications. `;let I;return I=$localize`:@@addPetstoreUrlBtn:Add Petstore Example URL`,[C,b,P,U,F,S,x,I,[1,`openapi-editor-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[1,`toolbar-title`],[`aria-label`,n,1,`openapi-tabs`,3,`selectedIndexChange`,`selectedIndex`],[`label`,i],[1,`editor-wrapper`],[1,`editor-floating-actions`],[`mat-icon-button`,``,`matTooltip`,r,`aria-label`,o,3,`click`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,a,`aria-label`,s,3,`click`],[`mat-icon-button`,``,`matTooltip`,c,`aria-label`,l,3,`click`],[3,`onInit`,`options`,`formControl`],[`role`,`alert`,1,`error-overlay`],[`label`,d],[1,`urls-tab-container`],[`role`,`toolbar`,`aria-label`,u,1,`urls-toolbar`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,p,1,`add-url-btn`,3,`click`],[`mat-flat-button`,``,`type`,`button`,`aria-label`,_,1,`fetch-all-urls-btn`,3,`click`,`disabled`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,m,1,`preview-merged-btn`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,f,`aria-label`,E,1,`clear-urls-btn`,3,`click`,`disabled`],[`role`,`list`,`aria-label`,`OpenAPI Specification URLs`,1,`urls-list`],[`role`,`listitem`,1,`url-entry-card`],[1,`urls-empty-state`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,m,1,`preview-merged-btn`,3,`click`],[1,`url-entry-row`],[`aria-hidden`,`true`,1,`url-index-badge`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`url-input-field`],[`matInput`,``,`type`,`url`,`placeholder`,j,3,`input`,`paste`,`keydown.enter`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`url-status-indicator`],[`diameter`,`20`,`aria-label`,q],[`matTooltip`,z,`aria-label`,T,1,`status-icon`,`status-loaded`],[`aria-label`,w,1,`status-icon`,`status-error`,3,`matTooltip`],[`aria-hidden`,`true`,`matTooltip`,B,1,`status-icon`,`status-idle`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,ee,3,`click`,`disabled`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,J,3,`click`],[`role`,`alert`,1,`url-entry-error`],[`mat-stroked-button`,``,`type`,`button`,`aria-label`,M,3,`click`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,8)(1,`div`,9)(2,`h2`,10),Kw(3,0),ml$1()(),Oi$1(4,`mat-tab-group`,11),ug$1(`selectedIndexChange`,function(o){return i.onTabIndexChange(o)}),Oi$1(5,`mat-tab`,12)(6,`div`,13)(7,`div`,14)(8,`button`,15),ug$1(`click`,function(){return i.formatDocument()}),Oi$1(9,`mat-icon`,16),xb$1(10,`format_align_left`),ml$1()(),Oi$1(11,`button`,17),ug$1(`click`,function(){return i.copyToClipboard()}),Oi$1(12,`mat-icon`,16),xb$1(13,`content_copy`),ml$1()(),Oi$1(14,`button`,18),ug$1(`click`,function(){return i.clearEditor()}),Oi$1(15,`mat-icon`,16),xb$1(16,`delete_outline`),ml$1()()(),Oi$1(17,`ngx-monaco-editor`,19),JI(),ug$1(`onInit`,function(o){return i.onEditorInit(o)}),ml$1(),hw(18,mu,6,0,`div`,20),ml$1()(),Oi$1(19,`mat-tab`,21)(20,`div`,22)(21,`div`,23)(22,`button`,24),ug$1(`click`,function(){return i.onAddUrl()}),Oi$1(23,`mat-icon`,16),xb$1(24,`add_link`),ml$1(),Oi$1(25,`span`),Kw(26,1),ml$1()(),Oi$1(27,`button`,25),ug$1(`click`,function(){return i.onFetchAllUrls()}),Oi$1(28,`mat-icon`,16),xb$1(29,`cloud_download`),ml$1(),Oi$1(30,`span`),Kw(31,2),ml$1()(),hw(32,fu,5,0,`button`,26),Oi$1(33,`button`,27),ug$1(`click`,function(){return i.onClearUrls()}),Oi$1(34,`mat-icon`,16),xb$1(35,`delete_sweep`),ml$1()()(),Oi$1(36,`div`,28),vw(37,Su,20,8,`div`,29,pu,!1,vu,8,0,`div`,30),ml$1()()()()()),n&2&&(YE$1(4),Hh$1(`selectedIndex`,i.selectedTabIndex()),YE$1(13),Hh$1(`options`,i.editorOptions())(`formControl`,i.contentControl),eD(),YE$1(),mw(i.validationErrors().length>0?18:-1),YE$1(9),Hh$1(`disabled`,i.isFetchingUrls()||!i.hasNonEmptyUrls()),YE$1(5),mw(i.hasLoadedUrls()?32:-1),YE$1(),Hh$1(`disabled`,i.specUrls().length===0),YE$1(4),Ew(i.specUrls()))},dependencies:[xn,Nn$1,Jt$1,Zc,Jc$1,xr$2,yr,$n$1,Mo,Do,ql$1,po$1,xr,si,vr,Ne$1,gt$1,_e,rr,ir,J$1,Z$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.openapi-editor-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem}.toolbar-title[_ngcontent-%COMP%]{margin:0 auto 0 0;font-size:1rem;font-weight:500;color:var(--%NS%text-primary)}.openapi-tabs[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:column;min-height:0;height:100%}.editor-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;height:100%;overflow:hidden}ngx-monaco-editor[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.error-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;background-color:var(--%NS%error-bg);color:var(--%NS%error-text);padding:.5rem 1rem;font-size:.875rem;border-top:1px solid var(--%NS%error-text);z-index:10;max-height:30%;overflow-y:auto}.error-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0;padding-left:1.5rem}.editor-floating-actions[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px;z-index:10;display:flex;gap:4px;background-color:var(--%NS%surface-color, #ffffff);border:1px solid var(--%NS%border-color, #e0e0e0);border-radius:4px;box-shadow:0 2px 5px #0000001a;padding:2px}html.dark-theme[_nghost-%COMP%]   .editor-floating-actions[_ngcontent-%COMP%], html.dark-theme   [_nghost-%COMP%]   .editor-floating-actions[_ngcontent-%COMP%]{box-shadow:0 2px 5px #0000004d}.urls-tab-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.urls-toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;flex-wrap:wrap;gap:.5rem;padding:.5rem .75rem;border-bottom:1px solid var(--%NS%border-color);background-color:var(--%NS%surface-color)}.clear-urls-btn[_ngcontent-%COMP%]{margin-left:auto}.urls-list[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:.75rem;display:flex;flex-direction:column;gap:.75rem}.url-entry-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.375rem;padding:.5rem .75rem;border:1px solid var(--%NS%border-color);border-radius:6px;background-color:var(--%NS%surface-color)}.url-entry-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.url-index-badge[_ngcontent-%COMP%]{font-size:.8125rem;font-weight:600;color:var(--%NS%text-secondary, var(--%NS%text-primary));min-width:1.75rem;text-align:center}.url-input-field[_ngcontent-%COMP%]{flex:1 1 auto}.url-status-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;flex:0 0 28px}.status-icon.status-loaded[_ngcontent-%COMP%]{color:#2e7d32}html.dark-theme[_nghost-%COMP%]   .status-icon.status-loaded[_ngcontent-%COMP%], html.dark-theme   [_nghost-%COMP%]   .status-icon.status-loaded[_ngcontent-%COMP%]{color:#81c784}.status-icon.status-error[_ngcontent-%COMP%]{color:var(--%NS%error-text, #d32f2f)}.status-icon.status-idle[_ngcontent-%COMP%]{opacity:.65}.url-entry-error[_ngcontent-%COMP%]{background-color:var(--%NS%error-bg, #fdecea);color:var(--%NS%error-text, #b71c1c);padding:.375rem .625rem;border-radius:4px;font-size:.8125rem;border-left:3px solid var(--%NS%error-text, #b71c1c);word-break:break-word}.urls-empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem 1rem;gap:.75rem;color:var(--%NS%text-primary)}.urls-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:360px;font-size:.875rem}`]})};var On=class{static buildTree(t){let n=[];for(let i of t){let r=i.split(`/`),o=n;for(let a=0;a<r.length;a++){let s=r[a],c=a===r.length-1,l=r.slice(0,a+1).join(`/`),d=o.find(u=>u.name===s);d||(d=U({name:s,path:l,isDirectory:!c},c?{}:{children:[],isExpanded:!0}),o.push(d)),!c&&d.children&&(o=d.children)}}return this.sortTree(n),n}static sortTree(t){t.sort((n,i)=>n.isDirectory===i.isDirectory?n.name.localeCompare(i.name):n.isDirectory?-1:1);for(let n of t)n.children&&this.sortTree(n.children)}static setAllExpanded(t,n){for(let i of t)i.isDirectory&&(i.isExpanded=n,i.children&&this.setAllExpanded(i.children,n))}};var xu=e=>({$implicit:e,isGroup:!1});var ku=e=>({$implicit:e,isGroup:!0});var Cu=(e,t)=>t.path;function Tu(e,t){e&1&&(Oi$1(0,`div`,11),Bh$1(1,`div`,13)(2,`div`,14)(3,`div`,15)(4,`div`,16)(5,`div`,17),ml$1())}function Ou(e,t){e&1&&Wh$1(0)}function Au(e,t){if(e&1&&Oh$1(0,Ou,1,0,`ng-container`,18),e&2){let n=eb$1(),i=cb$1(15);Hh$1(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,Vb(2,xu,n.treeNodes()))}}function wu(e,t){e&1&&(Oi$1(0,`div`,12)(1,`mat-icon`,8),xb$1(2,`snippet_folder`),ml$1(),Oi$1(3,`p`),Kw(4,2),ml$1(),Oi$1(5,`p`,19),Kw(6,3),ml$1()())}function Pu(e,t){if(e&1&&(Oi$1(0,`mat-icon`,23),xb$1(1),ml$1()),e&2){let n=eb$1().$implicit;YE$1(),Dl$1(` `,n.isExpanded?`folder_open`:`folder`,` `)}}function Nu(e,t){if(e&1&&(Oi$1(0,`mat-icon`,24),xb$1(1),ml$1()),e&2){let n=eb$1().$implicit,i=eb$1(2);YE$1(),_g$1(i.getFileIcon(n.name))}}function Iu(e,t){e&1&&Wh$1(0)}function Ru(e,t){if(e&1&&Oh$1(0,Iu,1,0,`ng-container`,18),e&2){let n=eb$1().$implicit;eb$1(2);let i=cb$1(15);Hh$1(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,Vb(2,ku,n.children))}}function Mu(e,t){if(e&1){let n=Tw();Oi$1(0,`li`,21),ug$1(`keydown`,function(r){let o=nd$1(n).$implicit,a=eb$1(2);return rd$1(a.onTreeItemKeydown(r,o))}),Oi$1(1,`div`,22),ug$1(`click`,function(){let r=nd$1(n).$implicit,o=eb$1(2);return rd$1(o.onNodeClick(r))}),hw(2,Pu,2,1,`mat-icon`,23)(3,Nu,2,1,`mat-icon`,24),Oi$1(4,`span`),xb$1(5),ml$1()(),hw(6,Ru,1,4,`ng-container`),ml$1()}if(e&2){let n=t.$implicit,i=t.$index,r=eb$1().isGroup,o=eb$1();Vh$1(`tabindex`,o.getTreeItemTabIndex(n,!r&&i===0))(`aria-expanded`,n.isDirectory?n.isExpanded:null)(`aria-selected`,n.path===o.activeFilePath()),YE$1(),Eg$1(`active`,!n.isDirectory&&n.path===o.activeFilePath()),YE$1(),mw(n.isDirectory?2:3),YE$1(3),_g$1(n.name),YE$1(),mw(n.isDirectory&&n.isExpanded&&n.children?6:-1)}}function Lu(e,t){if(e&1&&(Oi$1(0,`ul`),vw(1,Mu,7,8,`li`,20,Cu),ml$1()),e&2){let n=t.$implicit,i=t.isGroup;Vh$1(`role`,i?`group`:`presentation`),YE$1(),Ew(n)}}var Cr=class e{files=vj.required();activeFilePath=vj(null);isExecuting=vj(!1);fileSelected=yj();treeNodes=Jb$1(()=>On.buildTree(this.files().map(t=>t.path)));hasFiles=Yb$1(()=>this.files().length>0);getTreeItemTabIndex(t,n){let i=this.activeFilePath();return i?t.path===i?0:-1:n?0:-1}updateNodeExpansion(t,n,i){return t.map(r=>r.path===n&&r.isDirectory?W$1(U({},r),{isExpanded:i!==void 0?i:!r.isExpanded}):r.children?W$1(U({},r),{children:this.updateNodeExpansion(r.children,n,i)}):r)}onNodeClick(t){t.isDirectory?this.treeNodes.update(n=>this.updateNodeExpansion(n,t.path)):this.fileSelected.emit(t.path)}onTreeItemKeydown(t,n){t.stopPropagation();let i=t.currentTarget,r=i?.closest(`[role="tree"]`);switch(t.key){case`Enter`:case` `:t.preventDefault(),this.onNodeClick(n);break;case`ArrowRight`:n.isDirectory&&!n.isExpanded&&(t.preventDefault(),this.treeNodes.update(o=>this.updateNodeExpansion(o,n.path,!0)));break;case`ArrowLeft`:n.isDirectory&&n.isExpanded&&(t.preventDefault(),this.treeNodes.update(o=>this.updateNodeExpansion(o,n.path,!1)));break;case`ArrowDown`:case`ArrowUp`:if(r&&i){t.preventDefault();let o=Array.from(r.querySelectorAll(`li[role="treeitem"]`)),a=o.indexOf(i),s=t.key===`ArrowDown`?a+1:a-1;s>=0&&s<o.length&&o[s].focus()}}}expandAll(){let t=this.treeNodes();On.setAllExpanded(t,!0),this.treeNodes.update(()=>[...t])}collapseAll(){let t=this.treeNodes();On.setAllExpanded(t,!1),this.treeNodes.update(()=>[...t])}getFileIcon(t){return t.endsWith(`.ts`)||t.endsWith(`.js`)?`javascript`:t.endsWith(`.json`)?`data_object`:t.endsWith(`.md`)?`description`:t.endsWith(`.rs`)||t.endsWith(`.py`)||t.endsWith(`.go`)?`code`:`insert_drive_file`}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-directory-tree`]],inputs:{files:[1,`files`],activeFilePath:[1,`activeFilePath`],isExecuting:[1,`isExecuting`]},outputs:{fileSelected:`fileSelected`},decls:16,vars:3,consts:()=>{let t;t=$localize`:@@dirTreeActionsAria:Directory Tree Actions`;let n;n=$localize`:@@expandAllTooltip:Expand All`;let i;i=$localize`:@@expandAllAria:Expand All`;let r;r=$localize`:@@collapseAllTooltip:Collapse All`;let o;o=$localize`:@@collapseAllAria:Collapse All`;let a;a=$localize`:@@generatedFilesTreeAria:Generated Files`;let s;s=$localize`Explorer`;let c;c=$localize`:@@noFilesGenerated:No files generated.`;let l;return l=$localize`:@@generateSdkPrompt: Click 'Run' to generate SDK files from the OpenAPI spec. `,[[`treeNodeTemplate`,``],s,c,l,[1,`directory-tree-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[1,`toolbar-title`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,3,`click`,`disabled`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,r,`aria-label`,o,3,`click`,`disabled`],[`role`,`tree`,`aria-label`,a,1,`tree-wrapper`],[1,`loading-skeleton`],[1,`empty-state`],[1,`skeleton-line`,2,`width`,`80%`],[1,`skeleton-line`,2,`width`,`60%`,`margin-left`,`1rem`],[1,`skeleton-line`,2,`width`,`70%`,`margin-left`,`1rem`],[1,`skeleton-line`,2,`width`,`40%`,`margin-left`,`2rem`],[1,`skeleton-line`,2,`width`,`50%`,`margin-left`,`2rem`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[2,`font-size`,`0.8rem`,`margin-top`,`0.5rem`],[`role`,`treeitem`],[`role`,`treeitem`,3,`keydown`],[1,`node`,3,`click`],[`aria-hidden`,`true`,1,`icon`,`folder-icon`],[`aria-hidden`,`true`,1,`icon`,`file-icon`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,4)(1,`div`,5)(2,`h2`,6),Kw(3,1),ml$1(),Oi$1(4,`button`,7),ug$1(`click`,function(){return i.expandAll()}),Oi$1(5,`mat-icon`,8),xb$1(6,`unfold_more`),ml$1()(),Oi$1(7,`button`,9),ug$1(`click`,function(){return i.collapseAll()}),Oi$1(8,`mat-icon`,8),xb$1(9,`unfold_less`),ml$1()()(),Oi$1(10,`div`,10),hw(11,Tu,6,0,`div`,11)(12,Au,1,4,`ng-container`)(13,wu,7,0,`div`,12),ml$1()(),Oh$1(14,Lu,3,1,`ng-template`,null,0,Gb$1)),n&2&&(YE$1(4),Hh$1(`disabled`,!i.hasFiles()),YE$1(3),Hh$1(`disabled`,!i.hasFiles()),YE$1(4),mw(i.isExecuting()?11:i.hasFiles()?12:13))},dependencies:[Or$1,xr$2,$n$1,Mo,Do,ql$1,po$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.directory-tree-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);border-right:1px solid var(--%NS%border-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem}.toolbar-title[_ngcontent-%COMP%]{margin:0;margin-left:5rem;font-size:1rem;font-weight:500;color:var(--%NS%text-primary);margin-right:auto}@media(max-width:768px){.toolbar-title[_ngcontent-%COMP%]{margin-left:0}}.tree-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;padding:.5rem}ul[_ngcontent-%COMP%]{list-style-type:none;padding-left:.75rem;margin:0}.tree-wrapper[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{padding-left:0}li[role=treeitem][_ngcontent-%COMP%]:focus-visible{outline:none}li[role=treeitem][_ngcontent-%COMP%]:focus-visible > .node[_ngcontent-%COMP%]{outline:2px solid var(--%NS%primary-color);outline-offset:-2px}.node[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;padding:.2rem .5rem;border-radius:4px;-webkit-user-select:none;user-select:none;color:var(--%NS%text-primary);font-size:.85rem;white-space:nowrap;overflow:hidden}.node[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.node[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%primary-color) 5%,transparent)}.node.active[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%primary-color) 15%,transparent);font-weight:500}.icon[_ngcontent-%COMP%]{margin-right:.5rem;font-size:1.1rem;width:1.1rem;height:1.1rem;line-height:1.1rem;display:flex;justify-content:center;align-items:center;flex-shrink:0}.folder-icon[_ngcontent-%COMP%]{color:var(--%NS%primary-color)}.file-icon[_ngcontent-%COMP%]{color:var(--%NS%text-secondary)}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--%NS%text-secondary);text-align:center;padding:2rem}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3rem;width:3rem;height:3rem;margin-bottom:1rem;opacity:.5}.loading-skeleton[_ngcontent-%COMP%]{padding:1rem}.skeleton-line[_ngcontent-%COMP%]{height:1.5rem;background-color:var(--%NS%border-color);border-radius:4px;margin-bottom:.5rem;animation:_ngcontent-%COMP%_pulse 1.5s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:.6}50%{opacity:.3}to{opacity:.6}}`]})};function $u(e,t){if(e&1){let n=Tw();Oi$1(0,`div`,13)(1,`div`,14),ug$1(`click`,function(){let r=nd$1(n).$implicit,o=eb$1();return rd$1(o.selectTab(r))})(`keydown`,function(r){let o=nd$1(n),a=o.$implicit,s=o.$index,c=eb$1();return rd$1(c.onTabKeydown(r,a,s))}),Oi$1(2,`span`,15),xb$1(3),ml$1()(),Oi$1(4,`button`,16),ug$1(`click`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.closeTab(o,r))})(`keydown.enter`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.closeTab(o,r))})(`keydown.space`,function(r){let o=nd$1(n).$implicit,a=eb$1();return rd$1(a.closeTab(o,r))}),Oi$1(5,`mat-icon`,8),xb$1(6,`close`),ml$1()()()}if(e&2){let n=t.$implicit,i=t.$index,r=eb$1();Eg$1(`active`,n===r.activeFilePath()),YE$1(),Eg$1(`active`,n===r.activeFilePath()),Hh$1(`id`,`code-tab-`+i),Vh$1(`tabindex`,n===r.activeFilePath()?0:-1)(`aria-selected`,n===r.activeFilePath()),YE$1(),Hh$1(`title`,n),YE$1(),_g$1(r.getFilename(n))}}function Du(e,t){if(e&1&&(Oi$1(0,`ngx-monaco-editor`,11),JI(),ml$1()),e&2){let n=eb$1();Hh$1(`options`,n.editorOptions())(`formControl`,n.contentControl),eD()}}function Uu(e,t){e&1&&(Oi$1(0,`div`,12)(1,`mat-icon`,8),xb$1(2,`code_off`),ml$1(),Oi$1(3,`p`),Kw(4,0),ml$1(),Oi$1(5,`p`,17),Kw(6,1),ml$1()())}var Tr=class e{activeFilePath=vj(null);isReadOnly=vj(!0);fileContent=vj(null);fileSelected=yj();fileContentChange=yj();openTabs=ei([]);contentControl=new q$1(``);notificationService=C(yr$1);themeService=C(vr$1);window=C(lr);activeTabElementId=Yb$1(()=>{let t=this.activeFilePath();return t?`code-tab-${this.openTabs().indexOf(t)}`:null});editorOptions=Yb$1(()=>({theme:this.themeService.isDarkTheme()?`vs-dark`:`vs`,language:this.determineLanguage(this.activeFilePath()||``),readOnly:this.isReadOnly(),automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:`on`,renderLineHighlight:`none`}));constructor(){this.contentControl.valueChanges.pipe(Vt$1()).subscribe(t=>{this.fileContentChange.emit(t||``)}),Nd$1(()=>{let t=this.activeFilePath();t&&this.ensureTabIsOpen(t)}),Nd$1(()=>{let t=this.fileContent()||``;this.contentControl.value!==t&&this.contentControl.setValue(t,{emitEvent:!1})})}ensureTabIsOpen(t){this.openTabs().includes(t)||this.openTabs.update(n=>[...n,t])}selectTab(t,n){n&&n.preventDefault(),t!==this.activeFilePath()&&this.fileSelected.emit(t)}onTabKeydown(t,n,i){let r=this.openTabs();if(t.key===`Enter`||t.key===` `){this.selectTab(n,t);return}let o=-1;t.key===`ArrowRight`?o=(i+1)%r.length:t.key===`ArrowLeft`?o=(i-1+r.length)%r.length:t.key===`Home`?o=0:t.key===`End`&&(o=r.length-1),o!==-1&&(t.preventDefault(),this.selectTab(r[o]),t.currentTarget?.closest(`[role="tablist"]`)?.querySelectorAll(`[role="tab"]`)?.[o]?.focus())}closeTab(t,n){n.preventDefault(),n.stopPropagation();let r=this.openTabs().filter(o=>o!==t);this.openTabs.set(r),t===this.activeFilePath()&&(r.length>0?this.fileSelected.emit(r[r.length-1]):this.fileSelected.emit(``))}copyToClipboard(){return es$1(this,null,function*(){let t=this.fileContent();if(t)try{yield navigator.clipboard.writeText(t),this.notificationService.success(`Copied to clipboard.`)}catch(n){this.notificationService.error(`Failed to copy to clipboard.`)}})}downloadFile(){let t=this.fileContent(),n=this.activeFilePath();if(!t||!n)return;let i=this.getFilename(n),r=new Blob([t],{type:`text/plain`});if(!this.window)return;let o=this.window,a=o.URL.createObjectURL(r),s=this.window.document.createElement(`a`);s.href=a,s.download=i,s.click(),o.URL.revokeObjectURL(a),this.notificationService.success(`Downloading ${i}...`)}getFilename(t){return t.split(`/`).pop()||t}determineLanguage(t){switch(t.split(`.`).pop()?.toLowerCase()){case`ts`:case`tsx`:return`typescript`;case`js`:case`jsx`:return`javascript`;case`json`:return`json`;case`yaml`:case`yml`:return`yaml`;case`md`:return`markdown`;case`html`:return`html`;case`css`:return`css`;case`scss`:return`scss`;case`rs`:return`rust`;case`go`:return`go`;case`py`:return`python`;case`rb`:return`ruby`;case`java`:return`java`;case`kt`:case`kts`:return`kotlin`;case`swift`:return`swift`;case`cs`:return`csharp`;case`cpp`:case`cc`:case`cxx`:case`h`:case`hpp`:return`cpp`;case`c`:return`c`;case`php`:return`php`;case`sh`:case`bash`:return`shell`;default:return`plaintext`}}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-code-viewer`]],inputs:{activeFilePath:[1,`activeFilePath`],isReadOnly:[1,`isReadOnly`],fileContent:[1,`fileContent`]},outputs:{fileSelected:`fileSelected`,fileContentChange:`fileContentChange`},decls:15,vars:4,consts:()=>{let t;t=$localize`:@@codeViewerActionsAria:Code Viewer Actions`;let n;n=$localize`:@@openFilesTablistAria:Open Files`;let i;i=$localize`Copy File Content`;let r;r=$localize`:@@copyToClipboardAria:Copy to Clipboard`;let o;o=$localize`:@@downloadFileTooltip:Download File`;let a;a=$localize`:@@downloadFileAria:Download File`;let s;s=$localize`:@@closeTabAria:Close Tab`;let c;c=$localize`:@@noFileSelected:No file selected`;let l;return l=$localize`:@@selectFilePrompt: Select a file from the Explorer to view its contents. `,[c,l,[1,`code-viewer-container`],[`role`,`toolbar`,`aria-label`,t,1,`toolbar`],[`role`,`tablist`,`aria-label`,n,1,`tabs-container`],[`role`,`presentation`,1,`tab-item`,3,`active`],[1,`actions`],[`mat-icon-button`,``,`matTooltip`,i,`aria-label`,r,3,`click`,`disabled`],[`aria-hidden`,`true`],[`mat-icon-button`,``,`matTooltip`,o,`aria-label`,a,3,`click`,`disabled`],[`id`,`code-viewer-tabpanel`,`role`,`tabpanel`,1,`editor-wrapper`],[3,`options`,`formControl`],[1,`empty-state`],[`role`,`presentation`,1,`tab-item`],[`role`,`tab`,`aria-controls`,`code-viewer-tabpanel`,1,`tab`,3,`click`,`keydown`,`id`],[3,`title`],[`type`,`button`,`aria-label`,s,1,`tab-close`,3,`click`,`keydown.enter`,`keydown.space`],[2,`font-size`,`0.8rem`,`margin-top`,`0.5rem`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,2)(1,`div`,3)(2,`div`,4),vw(3,$u,7,9,`div`,5,yw),ml$1(),Oi$1(5,`div`,6)(6,`button`,7),ug$1(`click`,function(){return i.copyToClipboard()}),Oi$1(7,`mat-icon`,8),xb$1(8,`content_copy`),ml$1()(),Oi$1(9,`button`,9),ug$1(`click`,function(){return i.downloadFile()}),Oi$1(10,`mat-icon`,8),xb$1(11,`download`),ml$1()()()(),Oi$1(12,`div`,10),hw(13,Du,1,2,`ngx-monaco-editor`,11)(14,Uu,7,0,`div`,12),ml$1()()),n&2&&(YE$1(3),Ew(i.openTabs()),YE$1(3),Hh$1(`disabled`,!i.activeFilePath()),YE$1(3),Hh$1(`disabled`,!i.activeFilePath()),YE$1(3),Vh$1(`aria-labelledby`,i.activeTabElementId()),YE$1(),mw(i.activeFilePath()&&i.fileContent()!==null?13:14))},dependencies:[xn,Nn$1,Jt$1,Zc,Jc$1,xr$2,$n$1,Mo,Do,ql$1,po$1],styles:[`[_nghost-%COMP%]{display:block;height:100%;width:100%}.code-viewer-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%surface-color);overflow:hidden}.toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;padding:.5rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:.5rem;overflow-x:auto}.tabs-container[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;overflow-x:auto;gap:2px;align-items:flex-end}.tab-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.25rem .5rem;background-color:color-mix(in srgb,var(--%NS%border-color) 20%,transparent);border:1px solid transparent;border-bottom:none;border-radius:4px 4px 0 0;color:var(--%NS%text-secondary);font-size:.875rem;min-width:100px;max-width:200px}.tab-item[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%border-color) 40%,transparent)}.tab-item.active[_ngcontent-%COMP%]{background-color:var(--%NS%surface-color);border-color:var(--%NS%border-color);border-bottom:1px solid var(--%NS%surface-color);color:var(--%NS%primary-color);margin-bottom:-1px;z-index:1}.tab[_ngcontent-%COMP%]{display:flex;align-items:center;flex:1 1 auto;cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;border-radius:2px}.tab[_ngcontent-%COMP%]:focus-visible, .tab-close[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:1px}.tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab-close[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;margin-left:.25rem;opacity:.5;border:none;background:transparent;padding:0;cursor:pointer;color:inherit}.tab-close[_ngcontent-%COMP%]:hover{background-color:color-mix(in srgb,var(--%NS%error-bg) 20%,transparent);color:var(--%NS%error-text);opacity:1}.tab-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;line-height:14px}.actions[_ngcontent-%COMP%]{display:flex;gap:.25rem}.editor-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow:hidden}ngx-monaco-editor[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--%NS%text-secondary);text-align:center;padding:2rem}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:3rem;width:3rem;height:3rem;margin-bottom:1rem;opacity:.5}`]})};var rl=(()=>{class e{labelPosition=`after`;static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){return $D({type:e,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,o){r&2&&Eg$1(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,o){r&1&&(nb$1(),rb$1(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return e})();var Xo={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Bu=new R(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Xo});var Le=(function(e){return e[e.Init=0]=`Init`,e[e.Checked=1]=`Checked`,e[e.Unchecked=2]=`Unchecked`,e[e.Indeterminate=3]=`Indeterminate`,e})(Le||{});var qo=class{source;checked};var jo=(()=>{class e{_elementRef=C(Lr$1);_changeDetectorRef=C(wj);_ngZone=C(J);_animationsDisabled=G();_options=C(Bu,{optional:!0});_injector=C(ie);_signalFormField=null;focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(n){let i=new qo;return i.source=this,i.checked=n,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new $e$1;indeterminateChange=new $e$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=Le.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){C(C$1).load(mn);let n=C(new Lg$1(`tabindex`),{optional:!0});this._options=this._options||Xo,this.color=this._options.color||Xo.color,this.tabIndex=n==null?0:parseInt(n)||0,this.id=this._uniqueId=C(Kt).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(n){n.required&&this._validatorChangeFn()}ngOnInit(){this._signalFormField=this._injector.get(at$2,void 0,{optional:!0,self:!0})}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(n){n!=this.checked&&(this._checked=n,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(n){n!==this.disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(n){let i=n!=this._indeterminate();this._indeterminate.set(n),i&&(n?this._transitionCheckState(Le.Indeterminate):this._transitionCheckState(this.checked?Le.Checked:Le.Unchecked),this.indeterminateChange.emit(n)),this._syncIndeterminate(n)}_indeterminate=ei(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(n){this.checked=!!n}registerOnChange(n){this._controlValueAccessorChangeFn=n}registerOnTouched(n){this._onTouched=n}setDisabledState(n){this.disabled=n}validate(n){return this.required&&n.value!==!0&&!this._signalFormField?{required:!0}:null}registerOnValidatorChange(n){this._validatorChangeFn=n}_transitionCheckState(n){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===n||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,n),this._currentCheckState=n,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let n=this._options?.clickAction;!this.disabled&&n!==`noop`?(this.indeterminate&&n!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Le.Checked:Le.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&n===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(n){n.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(n,i){if(this._animationsDisabled)return``;switch(n){case Le.Init:if(i===Le.Checked)return this._animationClasses.uncheckedToChecked;if(i==Le.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Le.Unchecked:return i===Le.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Le.Checked:return i===Le.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Le.Indeterminate:return i===Le.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(n){let i=this._inputElement;i&&(i.nativeElement.indeterminate=n)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(n){n.target&&this._inputElement&&n.target!==this._inputElement.nativeElement&&n.stopPropagation()}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let n=[`input`];return $D({type:e,selectors:[[`mat-checkbox`]],viewQuery:function(o,a){if(o&1&&pg(n,5),o&2){let s;ib$1(s=sb$1())&&(a._inputElement=s.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(o,a){o&2&&(qh$1(`id`,a.id),Vh$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Eb$1(a.color?`mat-`+a.color:`mat-accent`),Eg$1(`_mat-animation-noopable`,a._animationsDisabled)(`mdc-checkbox--disabled`,a.disabled)(`mat-mdc-checkbox-disabled`,a.disabled)(`mat-mdc-checkbox-checked`,a.checked)(`mat-mdc-checkbox-disabled-interactive`,a.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Tj],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Tj],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Tj],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:_j(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Tj],checked:[2,`checked`,`checked`,Tj],disabled:[2,`disabled`,`disabled`,Tj],indeterminate:[2,`indeterminate`,`indeterminate`,Tj]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Fb$1([{provide:B,useExisting:ko$1(()=>e),multi:!0},{provide:U$1,useExisting:e,multi:!0}]),nv],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(o,a){if(o&1&&(nb$1(),Oi$1(0,`label`,3),ug$1(`click`,function(c){return a._preventBubblingFromLabel(c)}),Oi$1(1,`span`,4,0),Bh$1(3,`span`,5),Oi$1(4,`input`,6,1),ug$1(`blur`,function(){return a._onBlur()})(`click`,function(){return a._onInputClick()})(`change`,function(c){return a._onInteractionEvent(c)}),ml$1(),Bh$1(6,`span`,7),Oi$1(7,`span`,8),gd$1(),Oi$1(8,`svg`,9),Bh$1(9,`path`,10),ml$1(),md$1(),Bh$1(10,`span`,11),ml$1(),Bh$1(11,`span`,12),ml$1(),Oi$1(12,`span`,13,2),rb$1(14),ml$1()()),o&2){let s=cb$1(2);Hh$1(`labelPosition`,a.labelPosition)(`for`,a.inputId),YE$1(4),Eg$1(`mdc-checkbox--selected`,a.checked),Hh$1(`checked`,a.checked)(`indeterminate`,a.indeterminate)(`disabled`,a.disabled&&!a.disabledInteractive)(`id`,a.inputId)(`required`,a.required)(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex),Vh$1(`aria-label`,a.ariaLabel||null)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-checked`,a.indeterminate?`mixed`:null)(`aria-controls`,a.ariaControls)(`aria-disabled`,a.disabled&&a.disabledInteractive?!0:null)(`aria-expanded`,a.ariaExpanded)(`aria-owns`,a.ariaOwns)(`name`,a.name)(`value`,a.value),YE$1(7),Hh$1(`matRippleTrigger`,s)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0)}},dependencies:[Ri$1,rl],styles:[`.mdc-checkbox {
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
`],encapsulation:2})})()}return e})();var ol=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=WD({type:e});static ɵinj=xu$1({imports:[jo,It]})}return e})();var Or=class e{window=C(lr);isOnline=ei(!0);constructor(){this.init()}init(){this.window&&this.window.navigator&&(this.isOnline.set(this.window.navigator.onLine),this.window.addEventListener(`online`,()=>this.isOnline.set(!0)),this.window.addEventListener(`offline`,()=>this.isOnline.set(!1)))}setOnlineState(t){this.isOnline.set(t)}static ɵfac=function(n){return new(n||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Ar=class e{USER_KEY=`cdd_user`;ORGS_KEY=`cdd_organizations`;REPOS_KEY=`cdd_repositories`;api=C(hr);config=C(ct$1);user=ei(this.loadFromStorage(this.USER_KEY));organizations=ei(this.loadFromStorage(this.ORGS_KEY)||[]);repositories=ei(this.loadFromStorage(this.REPOS_KEY)||[]);constructor(){}loadFromStorage(t){let n=localStorage.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch(i){return null}}saveToStorage(t,n){localStorage.setItem(t,JSON.stringify(n))}getItem(t){return this.loadFromStorage(t)}setItem(t,n){this.saveToStorage(t,n)}createUser(t){let n={id:crypto.randomUUID(),login:t,name:t};return this.user.set(n),this.saveToStorage(this.USER_KEY,n),this.config.isOnline()&&this.api.register({username:t,email:`${t}@example.com`}).subscribe({next:i=>localStorage.setItem(`cdd_token`,i.token),error:i=>console.error(`Background cloud sync failed for user creation:`,i)}),n}createOrganization(t){let n=this.user();if(!n)throw new Error(`User required to create organization`);let i={id:crypto.randomUUID(),userId:n.id,login:t},r=[...this.organizations(),i];if(this.organizations.set(r),this.saveToStorage(this.ORGS_KEY,r),this.config.isOnline()){let o=localStorage.getItem(`cdd_token`)||``;this.api.createOrg({login:t,description:`Created via offline-first StorageService`},o).subscribe({next:a=>{this.updateOrganizationId(i.id,a.id)},error:a=>console.error(`Background cloud sync failed for organization creation:`,a)})}return i}createRepository(t,n){let i=this.organizations().find(s=>s.id===t),r=i?`${i.login}/${n}`:n,o={id:crypto.randomUUID(),organizationId:t,name:n,full_name:r},a=[...this.repositories(),o];if(this.repositories.set(a),this.saveToStorage(this.REPOS_KEY,a),this.config.isOnline()&&typeof t==`number`){let s=localStorage.getItem(`cdd_token`)||``;this.api.createRepo({organization_id:t,name:n,description:`Created via offline-first StorageService`},s).subscribe({next:c=>{this.updateRepositoryId(o.id,c.id)},error:c=>console.error(`Background cloud sync failed for repository creation:`,c)})}return o}updateRepository(t){let n=this.repositories().map(i=>i.id===t.id?t:i);this.repositories.set(n),this.saveToStorage(this.REPOS_KEY,n)}getOrganizationRepositories(t){return this.repositories().filter(n=>n.organizationId===t)}updateOrganizationId(t,n){let i=this.organizations().map(o=>o.id===t?W$1(U({},o),{id:n}):o);this.organizations.set(i),this.saveToStorage(this.ORGS_KEY,i);let r=this.repositories().map(o=>o.organizationId===t?W$1(U({},o),{organizationId:n}):o);this.repositories.set(r),this.saveToStorage(this.REPOS_KEY,r)}updateRepositoryId(t,n){let i=this.repositories().map(r=>r.id===t?W$1(U({},r),{id:n}):r);this.repositories.set(i),this.saveToStorage(this.REPOS_KEY,i)}static ɵfac=function(n){return new(n||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};var Fu=()=>[`ruby`,`php`,`kotlin`];var Wu=(e,t)=>t.id;function Vu(e,t){if(e&1&&Bh$1(0,`img`,47),e&2){let n=eb$1();Hh$1(`ngSrc`,n.iconUrl)}}function Hu(e,t){if(e&1&&(hw(0,Vu,1,1,`img`,47),Oi$1(1,`span`,48),xb$1(2),ml$1()),e&2){let n=t,i=eb$1(2);mw(n.iconUrl?0:-1),YE$1(),Eg$1(`error-text`,i.hasError()),YE$1(),_g$1(n.name)}}function Xu(e,t){if(e&1&&Bh$1(0,`img`,47),e&2){let n=eb$1().$implicit;Hh$1(`ngSrc`,n.iconUrl)}}function qu(e,t){e&1&&(Oi$1(0,`mat-icon`,50),xb$1(1,`wifi_off`),ml$1())}function ju(e,t){if(e&1&&(Oi$1(0,`mat-option`,45)(1,`div`,49),hw(2,Xu,1,1,`img`,47),Oi$1(3,`span`,48),xb$1(4),ml$1(),hw(5,qu,2,0,`mat-icon`,50),ml$1()()),e&2){let n=t.$implicit;Hh$1(`value`,n.id)(`disabled`,n.isDisabled),YE$1(),Hh$1(`matTooltip`,n.isDisabled?`Languages shown as disabled are not available in the current offline-only environment. To enable generation for all supported languages, configure the application for "Online Mode" by following the backend setup instructions on our GitHub repository.`:``),YE$1(),mw(n.iconUrl?2:-1),YE$1(2),_g$1(n.name),YE$1(),mw(n.isDisabled?5:-1)}}function Ku(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-form-field`,42)(1,`mat-label`),Kw(2,5),ml$1(),Oi$1(3,`mat-select`,43),ug$1(`selectionChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onSelectionChange(r.value))}),Oi$1(4,`mat-select-trigger`)(5,`div`,44),hw(6,Hu,3,4),ml$1()(),vw(7,ju,6,6,`mat-option`,45,Wu),ml$1()(),Oi$1(9,`mat-icon`,46),xb$1(10,` help_outline `),ml$1()}if(e&2){let n,i=eb$1();Eg$1(`has-error`,i.hasError()),Hh$1(`matTooltip`,i.hasError()?i.errorMessage()||`Failed to generate code for this language`:``),YE$1(),Eg$1(`error-text`,i.hasError()),YE$1(2),Hh$1(`value`,i.selectedLanguageId()),YE$1(3),mw((n=i.selectedLanguage())?6:-1,n),YE$1(),Ew(i.processedLanguages())}}function Yu(e,t){e&1&&(Oi$1(0,`mat-option`,37),Kw(1,6),ml$1())}function Qu(e,t){e&1&&(Oi$1(0,`mat-option`,38),Kw(1,7),ml$1())}function Zu(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Kw(2,8),ml$1(),Oi$1(3,`mat-select`,51),ug$1(`selectionChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`framework`,r.value))}),Oi$1(4,`mat-option`,52),Kw(5,9),ml$1(),Oi$1(6,`mat-option`,53),Kw(7,10),ml$1(),Oi$1(8,`mat-option`,54),Kw(9,11),ml$1(),Oi$1(10,`mat-option`,55),Kw(11,12),ml$1()()(),Oi$1(12,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`autoAdmin`,r.checked))}),Oi$1(13,`span`),Kw(14,13),ml$1()()}if(e&2){let n=eb$1();YE$1(3),Hh$1(`value`,n.options().framework||`vanilla`),YE$1(9),Hh$1(`checked`,n.options().autoAdmin||!1)}}function Ju(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Kw(2,14),ml$1(),Oi$1(3,`mat-select`,57),ug$1(`selectionChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`serverFramework`,r.value))}),Oi$1(4,`mat-option`,58),Kw(5,15),ml$1(),Oi$1(6,`mat-option`,59),Kw(7,16),ml$1(),Oi$1(8,`mat-option`,60),Kw(9,17),ml$1(),Oi$1(10,`mat-option`,61),Kw(11,18),ml$1()()()}if(e&2){let n=eb$1();YE$1(3),Hh$1(`value`,n.options().serverFramework||`express`)}}function em(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-form-field`,40)(1,`mat-label`),Kw(2,19),ml$1(),Oi$1(3,`mat-select`,62),ug$1(`selectionChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`orm`,r.value))}),Oi$1(4,`mat-option`,63),Kw(5,20),ml$1()()()}if(e&2){let n=eb$1();YE$1(3),Hh$1(`value`,n.options().orm||`typeorm`)}}function tm(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`noGithubActions`,!r.checked))}),Oi$1(1,`span`),Kw(2,21),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,!n.options().noGithubActions)}}function nm(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`noInstallablePackage`,!r.checked))}),Oi$1(1,`span`),Kw(2,22),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,!n.options().noInstallablePackage)}}function im(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`tests`,r.checked))}),Oi$1(1,`span`),Kw(2,23),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,n.options().tests||!1)}}function rm(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`noTestGen`,!r.checked))}),Oi$1(1,`span`),Kw(2,24),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,!n.options().noTestGen)}}function om(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`mcp`,r.checked))}),Oi$1(1,`span`),Kw(2,25),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,n.options().mcp||!1)}}function am(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`withEphemeral`,r.checked))}),Oi$1(1,`span`),Kw(2,26),ml$1()(),Oi$1(3,`mat-checkbox`,64),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`withSeed`,r.checked))}),Oi$1(4,`span`),Kw(5,27),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,n.options().withEphemeral||!1),YE$1(3),Hh$1(`checked`,n.options().withSeed||!1)(`disabled`,!n.options().withEphemeral)}}function sm(e,t){if(e&1){let n=Tw();Oi$1(0,`mat-checkbox`,56),ug$1(`change`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onOptionsChange(`noGenerateServices`,!r.checked))}),Oi$1(1,`span`),Kw(2,28),ml$1()()}if(e&2){let n=eb$1();Hh$1(`checked`,!n.options().noGenerateServices)}}var wr=class e{environment=br;selectedLanguageId=vj.required();target=vj.required();options=vj.required();languageChanged=yj();targetChanged=yj();optionsChanged=yj();store=C(B$1);languageService=C(Er$1);offlineService=C(Or);storageService=C(Ar);errorMessage=this.store.selectSignal(Sc);hasError=Yb$1(()=>!!this.errorMessage());selectedLanguage=Yb$1(()=>this.processedLanguages().find(t=>t.id===this.selectedLanguageId()));processedLanguages=Yb$1(()=>{let t=this.offlineService.isOnline();return this.languageService.languages().map(n=>W$1(U({},n),{isDisabled:!t&&!n.availableInWasm}))});constructor(){let t=this.storageService.getItem(`lastSelectedLanguage`);t&&queueMicrotask(()=>{let n=this.processedLanguages().find(i=>i.id===t);n&&!n.isDisabled&&this.languageChanged.emit(t)}),Nd$1(()=>{let n=this.selectedLanguageId(),i=this.processedLanguages(),r=i.find(o=>o.id===n);if(r&&r.isDisabled){let o=i.find(a=>!a.isDisabled);o&&queueMicrotask(()=>{this.onSelectionChange(o.id)})}})}onSelectionChange(t){t!==this.selectedLanguageId()&&(this.storageService.setItem(`lastSelectedLanguage`,t),this.languageChanged.emit(t))}onTargetChange(t){if(this.targetChanged.emit(t),this.selectedLanguageId()===`typescript`){let n=this.options();t===`to_sdk_cli`?(n.framework===void 0||[`angular`,`react`,`vue`].includes(n.framework))&&this.onOptionsChange(`framework`,`vanilla`):t===`to_server`?n.serverFramework===void 0&&this.onOptionsChange(`serverFramework`,`express`):t===`to_orm`&&n.orm===void 0&&this.onOptionsChange(`orm`,`typeorm`)}}onOptionsChange(t,n){let i=this.options();this.optionsChanged.emit({languageId:this.selectedLanguageId(),options:W$1(U({},i),{[t]:n})})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-language-selector`]],inputs:{selectedLanguageId:[1,`selectedLanguageId`],target:[1,`target`],options:[1,`options`]},outputs:{languageChanged:`languageChanged`,targetChanged:`targetChanged`,optionsChanged:`optionsChanged`},decls:28,vars:15,consts:()=>{let t;t=$localize`:@@selectTargetOutputAria:Select Target Output`;let n;n=$localize`Target`;let i;i=$localize`Client SDK`;let r;r=$localize`Client CLI`;let o;o=$localize`MCP Server`;let a;a=$localize`Server`;let s;s=$localize`:@@selectTargetLangAria:Select Target Language`;let c;c=$localize`Languages shown as disabled are not available in the current offline-only environment. To enable generation for all supported languages, configure the application for 'Online Mode' by following the backend setup instructions on our GitHub repository.`;let l;l=$localize`Language`;let d;d=$localize`ORM Entities`;let u;u=$localize`OpenAPI 3.2.0`;let p;p=$localize`:@@selectClientFrameworkAria:Select Client Framework`;let _;_=$localize`Client Framework`;let m;m=$localize`Vanilla JS`;let f;f=$localize`Angular`;let E;E=$localize`React`;let C;C=$localize`Vue`;let b;b=$localize`Auto-admin`;let P;P=$localize`:@@selectServerFrameworkAria:Select Server Framework`;let U;U=$localize`Server Framework`;let F;F=$localize`Express`;let j;j=$localize`Node.js HTTP`;let q;q=$localize`Bun`;let z;z=$localize`Deno`;let T;T=$localize`:@@selectOrmEngineAria:Select ORM Engine`;let w;w=$localize`ORM Engine`;let B;B=$localize`TypeORM`;let ee;ee=$localize`CI`;let J;J=$localize`Package`;let S;S=$localize`Tests`;let M;M=$localize`Enable Tests`;let x;x=$localize`MCP`;let I;I=$localize`Sandbox (Ephemeral)`;let O;O=$localize`Mock Seed`;let K;return K=$localize`Services`,[n,i,r,o,a,l,d,u,_,m,f,E,C,b,U,F,j,q,z,w,B,ee,J,S,M,x,I,O,K,[1,`language-selector-container`],[1,`language-selector-wrapper`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`target-selector-field`],[`aria-label`,t,3,`selectionChange`,`value`],[`value`,`to_sdk`],[`value`,`to_sdk_cli`],[`value`,`to_mcp`],[`value`,`to_server`],[`value`,`to_orm`],[`value`,`to_openapi_3_2_0`],[1,`language-options`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`framework-selector-field`],[3,`checked`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`language-selector-field`,3,`matTooltip`],[`aria-label`,s,3,`selectionChange`,`value`],[1,`language-option-trigger`],[3,`value`,`disabled`],[`tabindex`,`0`,`role`,`img`,`aria-label`,`Languages shown as disabled are not available in the current offline-only environment. Configure Online Mode to enable all languages.`,`matTooltip`,c,1,`offline-info-icon`],[`width`,`20`,`height`,`20`,`alt`,``,1,`language-icon`,3,`ngSrc`],[1,`language-name`],[1,`language-option`,3,`matTooltip`],[`aria-hidden`,`true`,1,`disabled-indicator`],[`aria-label`,p,3,`selectionChange`,`value`],[`value`,`vanilla`],[`value`,`angular`],[`value`,`react`],[`value`,`vue`],[3,`change`,`checked`],[`aria-label`,P,3,`selectionChange`,`value`],[`value`,`express`],[`value`,`node`],[`value`,`bun`],[`value`,`deno`],[`aria-label`,T,3,`selectionChange`,`value`],[`value`,`typeorm`],[3,`change`,`checked`,`disabled`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,29)(1,`div`,30),hw(2,Ku,11,7),ml$1(),Oi$1(3,`mat-form-field`,31)(4,`mat-label`),Kw(5,0),ml$1(),Oi$1(6,`mat-select`,32),ug$1(`selectionChange`,function(o){return i.onTargetChange(o.value)}),Oi$1(7,`mat-option`,33),Kw(8,1),ml$1(),Oi$1(9,`mat-option`,34),Kw(10,2),ml$1(),Oi$1(11,`mat-option`,35),Kw(12,3),ml$1(),Oi$1(13,`mat-option`,36),Kw(14,4),ml$1(),hw(15,Yu,2,0,`mat-option`,37),hw(16,Qu,2,0,`mat-option`,38),ml$1()(),Oi$1(17,`div`,39),hw(18,Zu,15,2),hw(19,Ju,12,1,`mat-form-field`,40),hw(20,em,6,1,`mat-form-field`,40),hw(21,tm,3,1,`mat-checkbox`,41),hw(22,nm,3,1,`mat-checkbox`,41),hw(23,im,3,1,`mat-checkbox`,41),hw(24,rm,3,1,`mat-checkbox`,41),hw(25,om,3,1,`mat-checkbox`,41),hw(26,am,6,3),hw(27,sm,3,1,`mat-checkbox`,41),ml$1()()),n&2&&(YE$1(2),mw(i.environment.singleLanguageMode?-1:2),YE$1(4),Hh$1(`value`,i.target()),YE$1(9),mw(i.selectedLanguageId()===`typescript`?15:-1),YE$1(),mw(i.environment.singleLanguageMode?16:-1),YE$1(2),mw(i.selectedLanguageId()===`typescript`&&i.target()!==`to_server`&&i.target()!==`to_orm`?18:-1),YE$1(),mw(i.selectedLanguageId()===`typescript`&&i.target()===`to_server`?19:-1),YE$1(),mw(i.selectedLanguageId()===`typescript`&&i.target()===`to_orm`?20:-1),YE$1(),mw(i.selectedLanguageId()&&i.target()!==`to_mcp`&&i.target()!==`to_openapi_3_2_0`?21:-1),YE$1(),mw(i.selectedLanguageId()!==`sh`&&i.target()!==`to_openapi_3_2_0`?22:-1),YE$1(),mw(i.selectedLanguageId()&&i.target()!==`to_openapi_3_2_0`&&!i.options().noTestGen?23:-1),YE$1(),mw(i.selectedLanguageId()===`typescript`?24:-1),YE$1(),mw(i.selectedLanguageId()&&i.target()!==`to_mcp`&&i.target()!==`to_openapi_3_2_0`?25:-1),YE$1(),mw(i.target()===`to_server`&&jb$1(14,Fu).includes(i.selectedLanguageId())?26:-1),YE$1(),mw(i.target()===`to_server`&&i.selectedLanguageId()===`typescript`?27:-1))},dependencies:[ns$1,gt$1,_e,ts$1,is$1,yt$2,Ne$1,ql$1,po$1,Mo,Do,ol,jo,Co$1],styles:[`.language-selector-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.language-selector-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.offline-info-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--%NS%text-secondary, #757575);cursor:help;border-radius:50%}.offline-info-icon[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color);outline-offset:2px}.language-options[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}.language-option[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.disabled-indicator[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--%NS%text-secondary);opacity:.5}.language-name[_ngcontent-%COMP%]{flex:1}.language-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px;object-fit:contain}.language-option-trigger[_ngcontent-%COMP%]{display:flex;align-items:center}.error-text[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var cm={value:()=>{}};function sl(){for(var e=0,t=arguments.length,n={},i;e<t;++e){if(!(i=arguments[e]+``)||i in n||/[\s.]/.test(i))throw new Error(`illegal type: `+i);n[i]=[]}return new Pr(n)}function Pr(e){this._=e}function lm(e,t){return e.trim().split(/^|\s+/).map(function(n){var i=``,r=n.indexOf(`.`);if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error(`unknown type: `+n);return{type:n,name:i}})}Pr.prototype=sl.prototype={constructor:Pr,on:function(e,t){var n=this._,i=lm(e+``,n),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(e=i[o]).type)&&(r=dm(n[r],e.name)))return r;return}if(t!=null&&typeof t!=`function`)throw new Error(`invalid callback: `+t);for(;++o<a;)if(r=(e=i[o]).type)n[r]=al(n[r],e.name,t);else if(t==null)for(r in n)n[r]=al(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Pr(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(e))throw new Error(`unknown type: `+e);for(o=this._[e],i=0,r=o.length;i<r;++i)o[i].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error(`unknown type: `+e);for(var i=this._[e],r=0,o=i.length;r<o;++r)i[r].value.apply(t,n)}};function dm(e,t){for(var n=0,i=e.length,r;n<i;++n)if((r=e[n]).name===t)return r.value}function al(e,t,n){for(var i=0,r=e.length;i<r;++i)if(e[i].name===t){e[i]=cm,e=e.slice(0,i).concat(e.slice(i+1));break}return n!=null&&e.push({name:t,value:n}),e}var ci=sl;var Nr=`http://www.w3.org/1999/xhtml`;var Ko={svg:`http://www.w3.org/2000/svg`,xhtml:Nr,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function yt(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),Ko.hasOwnProperty(t)?{space:Ko[t],local:e}:e}function _m(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Nr&&t.documentElement.namespaceURI===Nr?t.createElement(e):t.createElementNS(n,e)}}function pm(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ir(e){var t=yt(e);return(t.local?pm:_m)(t)}function um(){}function Yt(e){return e==null?um:function(){return this.querySelector(e)}}function cl(e){typeof e!=`function`&&(e=Yt(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var o=t[r],a=o.length,s=i[r]=new Array(a),c,l,d=0;d<a;++d)(c=o[d])&&(l=e.call(c,c.__data__,d,o))&&(`__data__`in c&&(l.__data__=c.__data__),s[d]=l);return new xe(i,this._parents)}function Yo(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function mm(){return[]}function li(e){return e==null?mm:function(){return this.querySelectorAll(e)}}function fm(e){return function(){return Yo(e.apply(this,arguments))}}function ll(e){typeof e==`function`?e=fm(e):e=li(e);for(var t=this._groups,n=t.length,i=[],r=[],o=0;o<n;++o)for(var a=t[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(i.push(e.call(c,c.__data__,l,a)),r.push(c));return new xe(i,r)}function di(e){return function(){return this.matches(e)}}function Rr(e){return function(t){return t.matches(e)}}var hm=Array.prototype.find;function gm(e){return function(){return hm.call(this.children,e)}}function bm(){return this.firstElementChild}function dl(e){return this.select(e==null?bm:gm(typeof e==`function`?e:Rr(e)))}var Em=Array.prototype.filter;function ym(){return Array.from(this.children)}function Sm(e){return function(){return Em.call(this.children,e)}}function _l(e){return this.selectAll(e==null?ym:Sm(typeof e==`function`?e:Rr(e)))}function pl(e){typeof e!=`function`&&(e=di(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var o=t[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&e.call(c,c.__data__,l,o)&&s.push(c);return new xe(i,this._parents)}function Mr(e){return new Array(e.length)}function ul(){return new xe(this._enter||this._groups.map(Mr),this._parents)}function _i(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}_i.prototype={constructor:_i,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function ml(e){return function(){return e}}function vm(e,t,n,i,r,o){for(var a=0,s,c=t.length,l=o.length;a<l;++a)(s=t[a])?(s.__data__=o[a],i[a]=s):n[a]=new _i(e,o[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function xm(e,t,n,i,r,o,a){var s,c,l=/* @__PURE__ */ new Map,d=t.length,u=o.length,p=new Array(d),_;for(s=0;s<d;++s)(c=t[s])&&(p[s]=_=a.call(c,c.__data__,s,t)+``,l.has(_)?r[s]=c:l.set(_,c));for(s=0;s<u;++s)_=a.call(e,o[s],s,o)+``,(c=l.get(_))?(i[s]=c,c.__data__=o[s],l.delete(_)):n[s]=new _i(e,o[s]);for(s=0;s<d;++s)(c=t[s])&&l.get(p[s])===c&&(r[s]=c)}function km(e){return e.__data__}function fl(e,t){if(!arguments.length)return Array.from(this,km);var n=t?xm:vm,i=this._parents,r=this._groups;typeof e!=`function`&&(e=ml(e));for(var o=r.length,a=new Array(o),s=new Array(o),c=new Array(o),l=0;l<o;++l){var d=i[l],u=r[l],p=u.length,_=Cm(e.call(d,d&&d.__data__,l,i)),m=_.length,f=s[l]=new Array(m),E=a[l]=new Array(m);n(d,u,f,E,c[l]=new Array(p),_,t);for(var b=0,P=0,U,F;b<m;++b)if(U=f[b]){for(b>=P&&(P=b+1);!(F=E[P])&&++P<m;);U._next=F||null}}return a=new xe(a,i),a._enter=s,a._exit=c,a}function Cm(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function hl(){return new xe(this._exit||this._groups.map(Mr),this._parents)}function gl(e,t,n){var i=this.enter(),r=this,o=this.exit();return typeof e==`function`?(i=e(i),i&&(i=i.selection())):i=i.append(e+``),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function bl(e){for(var t=e.selection?e.selection():e,n=this._groups,i=t._groups,r=n.length,o=i.length,a=Math.min(r,o),s=new Array(r),c=0;c<a;++c)for(var l=n[c],d=i[c],u=l.length,p=s[c]=new Array(u),_,m=0;m<u;++m)(_=l[m]||d[m])&&(p[m]=_);for(;c<r;++c)s[c]=n[c];return new xe(s,this._parents)}function El(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var i=e[t],r=i.length-1,o=i[r],a;--r>=0;)(a=i[r])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function yl(e){e||(e=Tm);function t(u,p){return u&&p?e(u.__data__,p.__data__):!u-!p}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var a=n[o],s=a.length,c=r[o]=new Array(s),l,d=0;d<s;++d)(l=a[d])&&(c[d]=l);c.sort(t)}return new xe(r,this._parents).order()}function Tm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Sl(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function vl(){return Array.from(this)}function xl(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,o=i.length;r<o;++r){var a=i[r];if(a)return a}return null}function kl(){let e=0;for(let t of this)++e;return e}function Cl(){return!this.node()}function Tl(e){for(var t=this._groups,n=0,i=t.length;n<i;++n)for(var r=t[n],o=0,a=r.length,s;o<a;++o)(s=r[o])&&e.call(s,s.__data__,o,r);return this}function Om(e){return function(){this.removeAttribute(e)}}function Am(e){return function(){this.removeAttributeNS(e.space,e.local)}}function wm(e,t){return function(){this.setAttribute(e,t)}}function Pm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Nm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Im(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ol(e,t){var n=yt(e);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((t==null?n.local?Am:Om:typeof t==`function`?n.local?Im:Nm:n.local?Pm:wm)(n,t))}function Lr(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Rm(e){return function(){this.style.removeProperty(e)}}function Mm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Lm(e,t,n){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(e):this.style.setProperty(e,i,n)}}function Al(e,t,n){return arguments.length>1?this.each((t==null?Rm:typeof t==`function`?Lm:Mm)(e,t,n??``)):$t(this.node(),e)}function $t(e,t){return e.style.getPropertyValue(t)||Lr(e).getComputedStyle(e,null).getPropertyValue(t)}function $m(e){return function(){delete this[e]}}function Dm(e,t){return function(){this[e]=t}}function Um(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function wl(e,t){return arguments.length>1?this.each((t==null?$m:typeof t==`function`?Um:Dm)(e,t)):this.node()[e]}function Pl(e){return e.trim().split(/^|\s+/)}function Qo(e){return e.classList||new Nl(e)}function Nl(e){this._node=e,this._names=Pl(e.getAttribute(`class`)||``)}Nl.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Il(e,t){for(var n=Qo(e),i=-1,r=t.length;++i<r;)n.add(t[i])}function Rl(e,t){for(var n=Qo(e),i=-1,r=t.length;++i<r;)n.remove(t[i])}function Bm(e){return function(){Il(this,e)}}function zm(e){return function(){Rl(this,e)}}function Gm(e,t){return function(){(t.apply(this,arguments)?Il:Rl)(this,e)}}function Ml(e,t){var n=Pl(e+``);if(arguments.length<2){for(var i=Qo(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof t==`function`?Gm:t?Bm:zm)(n,t))}function Fm(){this.textContent=``}function Wm(e){return function(){this.textContent=e}}function Vm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Ll(e){return arguments.length?this.each(e==null?Fm:(typeof e==`function`?Vm:Wm)(e)):this.node().textContent}function Hm(){this.innerHTML=``}function Xm(e){return function(){this.innerHTML=e}}function qm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function $l(e){return arguments.length?this.each(e==null?Hm:(typeof e==`function`?qm:Xm)(e)):this.node().innerHTML}function jm(){this.nextSibling&&this.parentNode.appendChild(this)}function Dl(){return this.each(jm)}function Km(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ul(){return this.each(Km)}function Bl(e){var t=typeof e==`function`?e:Ir(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ym(){return null}function zl(e,t){var n=typeof e==`function`?e:Ir(e),i=t==null?Ym:typeof t==`function`?t:Yt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Qm(){var e=this.parentNode;e&&e.removeChild(this)}function Gl(){return this.each(Qm)}function Zm(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Jm(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Fl(e){return this.select(e?Jm:Zm)}function Wl(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function ef(e){return function(t){e.call(this,t,this.__data__)}}function tf(e){return e.trim().split(/^|\s+/).map(function(t){var n=``,i=t.indexOf(`.`);return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{type:t,name:n}})}function nf(e){return function(){var t=this.__on;if(t){for(var n=0,i=-1,r=t.length,o;n<r;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++i]=o;++i?t.length=i:delete this.__on}}}function rf(e,t,n){return function(){var i=this.__on,r,o=ef(t);if(i){for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=t;return}}this.addEventListener(e.type,o,n),r={type:e.type,name:e.name,value:t,listener:o,options:n},i?i.push(r):this.__on=[r]}}function Vl(e,t,n){var i=tf(e+``),r,o=i.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,d;c<l;++c)for(r=0,d=s[c];r<o;++r)if((a=i[r]).type===d.type&&a.name===d.name)return d.value}return}for(s=t?rf:nf,r=0;r<o;++r)this.each(s(i[r],t,n));return this}function Hl(e,t,n){var i=Lr(e),r=i.CustomEvent;typeof r==`function`?r=new r(t,n):(r=i.document.createEvent(`Event`),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function of(e,t){return function(){return Hl(this,e,t)}}function af(e,t){return function(){return Hl(this,e,t.apply(this,arguments))}}function Xl(e,t){return this.each((typeof t==`function`?af:of)(e,t))}function*ql(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var i=e[t],r=0,o=i.length,a;r<o;++r)(a=i[r])&&(yield a)}var Zo=[null];function xe(e,t){this._groups=e,this._parents=t}function jl(){return new xe([[document.documentElement]],Zo)}function sf(){return this}xe.prototype=jl.prototype={constructor:xe,select:cl,selectAll:ll,selectChild:dl,selectChildren:_l,filter:pl,data:fl,enter:ul,exit:hl,join:gl,merge:bl,selection:sf,order:El,sort:yl,call:Sl,nodes:vl,node:xl,size:kl,empty:Cl,each:Tl,attr:Ol,style:Al,property:wl,classed:Ml,text:Ll,html:$l,raise:Dl,lower:Ul,append:Bl,insert:zl,remove:Gl,clone:Fl,datum:Wl,on:Vl,dispatch:Xl,[Symbol.iterator]:ql};var St=jl;function Ze(e){return typeof e==`string`?new xe([[document.querySelector(e)]],[document.documentElement]):new xe([[e]],Zo)}function Kl(e){let t;for(;t=e.sourceEvent;)e=t;return e}function vt(e,t){if(e=Kl(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=e.clientX,i.y=e.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var $r={capture:!0,passive:!1};function Dr(e){e.preventDefault(),e.stopImmediatePropagation()}function Jo(e){var t=e.document.documentElement,n=Ze(e).on(`dragstart.drag`,Dr,$r);`onselectstart`in t?n.on(`selectstart.drag`,Dr,$r):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect=`none`)}function ea(e,t){var n=e.document.documentElement,i=Ze(e).on(`dragstart.drag`,null);t&&(i.on(`click.drag`,Dr,$r),setTimeout(function(){i.on(`click.drag`,null)},0)),`onselectstart`in n?i.on(`selectstart.drag`,null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Ur(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function ta(e,t){var n=Object.create(e.prototype);for(var i in t)n[i]=t[i];return n}function mi(){}var pi=.7;var Gr=1/pi;var An=`\\s*([+-]?\\d+)\\s*`;var ui=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`;var ht=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`;var cf=/^#([0-9a-f]{3,8})$/;var lf=new RegExp(`^rgb\\(${An},${An},${An}\\)$`);var df=new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`);var _f=new RegExp(`^rgba\\(${An},${An},${An},${ui}\\)$`);var pf=new RegExp(`^rgba\\(${ht},${ht},${ht},${ui}\\)$`);var uf=new RegExp(`^hsl\\(${ui},${ht},${ht}\\)$`);var mf=new RegExp(`^hsla\\(${ui},${ht},${ht},${ui}\\)$`);var Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ur(mi,Dt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ql,formatHex:Ql,formatHex8:ff,formatHsl:hf,formatRgb:Zl,toString:Zl});function Ql(){return this.rgb().formatHex()}function ff(){return this.rgb().formatHex8()}function hf(){return rd(this).formatHsl()}function Zl(){return this.rgb().formatRgb()}function Dt(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=cf.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Jl(t):n===3?new Ke(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Br(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Br(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=lf.exec(e))?new Ke(t[1],t[2],t[3],1):(t=df.exec(e))?new Ke(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=_f.exec(e))?Br(t[1],t[2],t[3],t[4]):(t=pf.exec(e))?Br(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=uf.exec(e))?nd(t[1],t[2]/100,t[3]/100,1):(t=mf.exec(e))?nd(t[1],t[2]/100,t[3]/100,t[4]):Yl.hasOwnProperty(e)?Jl(Yl[e]):e===`transparent`?new Ke(NaN,NaN,NaN,0):null}function Jl(e){return new Ke(e>>16&255,e>>8&255,e&255,1)}function Br(e,t,n,i){return i<=0&&(e=t=n=NaN),new Ke(e,t,n,i)}function gf(e){return e instanceof mi||(e=Dt(e)),e?(e=e.rgb(),new Ke(e.r,e.g,e.b,e.opacity)):new Ke}function wn(e,t,n,i){return arguments.length===1?gf(e):new Ke(e,t,n,i??1)}function Ke(e,t,n,i){this.r=+e,this.g=+t,this.b=+n,this.opacity=+i}Ur(Ke,wn,ta(mi,{brighter(e){return e=e==null?Gr:Math.pow(Gr,e),new Ke(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?pi:Math.pow(pi,e),new Ke(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ke(Zt(this.r),Zt(this.g),Zt(this.b),Fr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ed,formatHex:ed,formatHex8:bf,formatRgb:td,toString:td}));function ed(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}`}function bf(){return`#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}${Qt((isNaN(this.opacity)?1:this.opacity)*255)}`}function td(){let e=Fr(this.opacity);return`${e===1?`rgb(`:`rgba(`}${Zt(this.r)}, ${Zt(this.g)}, ${Zt(this.b)}${e===1?`)`:`, ${e})`}`}function Fr(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Zt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qt(e){return e=Zt(e),(e<16?`0`:``)+e.toString(16)}function nd(e,t,n,i){return i<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ct(e,t,n,i)}function rd(e){if(e instanceof ct)return new ct(e.h,e.s,e.l,e.opacity);if(e instanceof mi||(e=Dt(e)),!e)return new ct;if(e instanceof ct)return e;e=e.rgb();var t=e.r/255,n=e.g/255,i=e.b/255,r=Math.min(t,n,i),o=Math.max(t,n,i),a=NaN,s=o-r,c=(o+r)/2;return s?(t===o?a=(n-i)/s+(n<i)*6:n===o?a=(i-t)/s+2:a=(t-n)/s+4,s/=c<.5?o+r:2-o-r,a*=60):s=c>0&&c<1?0:a,new ct(a,s,c,e.opacity)}function od(e,t,n,i){return arguments.length===1?rd(e):new ct(e,t,n,i??1)}function ct(e,t,n,i){this.h=+e,this.s=+t,this.l=+n,this.opacity=+i}Ur(ct,od,ta(mi,{brighter(e){return e=e==null?Gr:Math.pow(Gr,e),new ct(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pi:Math.pow(pi,e),new ct(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*t,r=2*n-i;return new Ke(na(e>=240?e-240:e+120,r,i),na(e,r,i),na(e<120?e+240:e-120,r,i),this.opacity)},clamp(){return new ct(id(this.h),zr(this.s),zr(this.l),Fr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Fr(this.opacity);return`${e===1?`hsl(`:`hsla(`}${id(this.h)}, ${zr(this.s)*100}%, ${zr(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function id(e){return e=(e||0)%360,e<0?e+360:e}function zr(e){return Math.max(0,Math.min(1,e||0))}function na(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var ra=e=>()=>e;function Ef(e,t){return function(n){return e+n*t}}function yf(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(i){return Math.pow(e+i*t,n)}}function cd(e){return(e=+e)==1?Wr:function(t,n){return n-t?yf(t,n,e):ra(isNaN(t)?n:t)}}function Wr(e,t){var n=t-e;return n?Ef(e,n):ra(isNaN(e)?t:e)}var Vr=(function e(t){var n=cd(t);function i(r,o){var a=n((r=wn(r)).r,(o=wn(o)).r),s=n(r.g,o.g),c=n(r.b,o.b),l=Wr(r.opacity,o.opacity);return function(d){return r.r=a(d),r.g=s(d),r.b=c(d),r.opacity=l(d),r+``}}return i.gamma=e,i})(1);function at(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var aa=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;var oa=new RegExp(aa.source,`g`);function xf(e){return function(){return e}}function kf(e){return function(t){return e(t)+``}}function sa(e,t){var n=aa.lastIndex=oa.lastIndex=0,i,r,o,a=-1,s=[],c=[];for(e=e+``,t=t+``;(i=aa.exec(e))&&(r=oa.exec(t));)(o=r.index)>n&&(o=t.slice(n,o),s[a]?s[a]+=o:s[++a]=o),(i=i[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:at(i,r)})),n=oa.lastIndex;return n<t.length&&(o=t.slice(n),s[a]?s[a]+=o:s[++a]=o),s.length<2?c[0]?kf(c[0].x):xf(t):(t=c.length,function(l){for(var d=0,u;d<t;++d)s[(u=c[d]).i]=u.x(l);return s.join(``)})}var dd=180/Math.PI;var Hr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ca(e,t,n,i,r,o){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*i)&&(n-=e*c,i-=t*c),(s=Math.sqrt(n*n+i*i))&&(n/=s,i/=s,c/=s),e*i<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:o,rotate:Math.atan2(t,e)*dd,skewX:Math.atan(c)*dd,scaleX:a,scaleY:s}}var Xr;function _d(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Hr:ca(t.a,t.b,t.c,t.d,t.e,t.f)}function pd(e){return e==null?Hr:(Xr||(Xr=document.createElementNS(`http://www.w3.org/2000/svg`,`g`)),Xr.setAttribute(`transform`,e),(e=Xr.transform.baseVal.consolidate())?(e=e.matrix,ca(e.a,e.b,e.c,e.d,e.e,e.f)):Hr)}function ud(e,t,n,i){function r(l){return l.length?l.pop()+` `:``}function o(l,d,u,p,_,m){if(l!==u||d!==p){var f=_.push(`translate(`,null,t,null,n);m.push({i:f-4,x:at(l,u)},{i:f-2,x:at(d,p)})}else(u||p)&&_.push(`translate(`+u+t+p+n)}function a(l,d,u,p){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),p.push({i:u.push(r(u)+`rotate(`,null,i)-2,x:at(l,d)})):d&&u.push(r(u)+`rotate(`+d+i)}function s(l,d,u,p){l!==d?p.push({i:u.push(r(u)+`skewX(`,null,i)-2,x:at(l,d)}):d&&u.push(r(u)+`skewX(`+d+i)}function c(l,d,u,p,_,m){if(l!==u||d!==p){var f=_.push(r(_)+`scale(`,null,`,`,null,`)`);m.push({i:f-4,x:at(l,u)},{i:f-2,x:at(d,p)})}else(u!==1||p!==1)&&_.push(r(_)+`scale(`+u+`,`+p+`)`)}return function(l,d){var u=[],p=[];return l=e(l),d=e(d),o(l.translateX,l.translateY,d.translateX,d.translateY,u,p),a(l.rotate,d.rotate,u,p),s(l.skewX,d.skewX,u,p),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,u,p),l=d=null,function(_){for(var m=-1,f=p.length,E;++m<f;)u[(E=p[m]).i]=E.x(_);return u.join(``)}}}var la=ud(_d,`px, `,`px)`,`deg)`);var da=ud(pd,`, `,`)`,`)`);var Cf=1e-12;function md(e){return((e=Math.exp(e))+1/e)/2}function Tf(e){return((e=Math.exp(e))-1/e)/2}function Of(e){return((e=Math.exp(2*e))-1)/(e+1)}var _a=(function e(t,n,i){function r(o,a){var s=o[0],c=o[1],l=o[2],d=a[0],u=a[1],p=a[2],_=d-s,m=u-c,f=_*_+m*m,E,C;if(f<Cf)C=Math.log(p/l)/t,E=function(q){return[s+q*_,c+q*m,l*Math.exp(t*q*C)]};else{var b=Math.sqrt(f),P=(p*p-l*l+i*f)/(2*l*n*b),U=(p*p-l*l-i*f)/(2*p*n*b),F=Math.log(Math.sqrt(P*P+1)-P);C=(Math.log(Math.sqrt(U*U+1)-U)-F)/t,E=function(q){var z=q*C,T=md(F),w=l/(n*b)*(T*Of(t*z+F)-Tf(F));return[s+w*_,c+w*m,l*T/md(t*z+F)]}}return E.duration=C*1e3*t/Math.SQRT2,E}return r.rho=function(o){var a=Math.max(.001,+o),s=a*a;return e(a,s,s*s)},r})(Math.SQRT2,2,4);var Pn=0;var hi=0;var fi=0;var hd=1e3;var qr;var gi;var jr=0;var Jt=0;var Kr=0;var bi=typeof performance==`object`&&performance.now?performance:Date;var gd=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function yi(){return Jt||(gd(Af),Jt=bi.now()+Kr)}function Af(){Jt=0}function Ei(){this._call=this._time=this._next=null}Ei.prototype=Yr.prototype={constructor:Ei,restart:function(e,t,n){if(typeof e!=`function`)throw new TypeError(`callback is not a function`);n=(n==null?yi():+n)+(t==null?0:+t),!this._next&&gi!==this&&(gi?gi._next=this:qr=this,gi=this),this._call=e,this._time=n,pa()},stop:function(){this._call&&(this._call=null,this._time=1/0,pa())}};function Yr(e,t,n){var i=new Ei;return i.restart(e,t,n),i}function bd(){yi(),++Pn;for(var e=qr,t;e;)(t=Jt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Pn}function fd(){Jt=(jr=bi.now())+Kr,Pn=hi=0;try{bd()}finally{Pn=0,Pf(),Jt=0}}function wf(){var e=bi.now(),t=e-jr;t>hd&&(Kr-=t,jr=e)}function Pf(){for(var e,t=qr,n,i=1/0;t;)t._call?(i>t._time&&(i=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:qr=n);gi=e,pa(i)}function pa(e){if(!Pn){hi&&(hi=clearTimeout(hi));e-Jt>24?(e<1/0&&(hi=setTimeout(fd,e-bi.now()-Kr)),fi&&(fi=clearInterval(fi))):(fi||(jr=bi.now(),fi=setInterval(wf,hd)),Pn=1,gd(fd))}}function Qr(e,t,n){var i=new Ei;return t=t==null?0:+t,i.restart(r=>{i.stop(),e(r+t)},t,n),i}var Nf=ci(`start`,`end`,`cancel`,`interrupt`);var If=[];var Sd=0;var Ed=1;var Jr=2;var Zr=3;var yd=4;var eo=5;var Si=6;function Ut(e,t,n,i,r,o){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Rf(e,n,{name:t,index:i,group:r,on:Nf,tween:If,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Sd})}function vi(e,t){var n=Oe(e,t);if(n.state>Sd)throw new Error(`too late; already scheduled`);return n}function Ie(e,t){var n=Oe(e,t);if(n.state>Zr)throw new Error(`too late; already running`);return n}function Oe(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error(`transition not found`);return n}function Rf(e,t,n){var i=e.__transition,r;i[t]=n,n.timer=Yr(o,0,n.time);function o(l){n.state=Ed,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var d,u,p,_;if(n.state!==Ed)return c();for(d in i)if(_=i[d],_.name===n.name){if(_.state===Zr)return Qr(a);_.state===yd?(_.state=Si,_.timer.stop(),_.on.call(`interrupt`,e,e.__data__,_.index,_.group),delete i[d]):+d<t&&(_.state=Si,_.timer.stop(),_.on.call(`cancel`,e,e.__data__,_.index,_.group),delete i[d])}if(Qr(function(){n.state===Zr&&(n.state=yd,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=Jr,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===Jr){for(n.state=Zr,r=new Array(p=n.tween.length),d=0,u=-1;d<p;++d)(_=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++u]=_);r.length=u+1}}function s(l){for(var d=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=eo,1),u=-1,p=r.length;++u<p;)r[u].call(e,d);n.state===eo&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){n.state=Si,n.timer.stop(),delete i[t];for(var l in i)return;delete e.__transition}}function Bt(e,t){var n=e.__transition,i,r,o=!0,a;if(n){t=t==null?null:t+``;for(a in n){if((i=n[a]).name!==t){o=!1;continue}r=i.state>Jr&&i.state<eo,i.state=Si,i.timer.stop(),i.on.call(r?`interrupt`:`cancel`,e,e.__data__,i.index,i.group),delete n[a]}o&&delete e.__transition}}function vd(e){return this.each(function(){Bt(this,e)})}function Mf(e,t){var n,i;return function(){var r=Ie(this,e),o=r.tween;if(o!==n){i=n=o;for(var a=0,s=i.length;a<s;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function Lf(e,t,n){var i,r;if(typeof n!=`function`)throw new Error;return function(){var o=Ie(this,e),a=o.tween;if(a!==i){r=(i=a).slice();for(var s={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=s;break}c===l&&r.push(s)}o.tween=r}}function xd(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var i=Oe(this.node(),n).tween,r=0,o=i.length,a;r<o;++r)if((a=i[r]).name===e)return a.value;return null}return this.each((t==null?Mf:Lf)(n,e,t))}function Nn(e,t,n){var i=e._id;return e.each(function(){var r=Ie(this,i);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return Oe(r,i).value[t]}}function to(e,t){var n;return(typeof t==`number`?at:t instanceof Dt?Vr:(n=Dt(t))?(t=n,Vr):sa)(e,t)}function $f(e){return function(){this.removeAttribute(e)}}function Df(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Uf(e,t,n){var i,r=n+``,o;return function(){var a=this.getAttribute(e);return a===r?null:a===i?o:o=t(i=a,n)}}function Bf(e,t,n){var i,r=n+``,o;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===i?o:o=t(i=a,n)}}function zf(e,t,n){var i,r,o;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+``,a===c?null:a===i&&c===r?o:(r=c,o=t(i=a,s)))}}function Gf(e,t,n){var i,r,o;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+``,a===c?null:a===i&&c===r?o:(r=c,o=t(i=a,s)))}}function kd(e,t){var n=yt(e),i=n===`transform`?da:to;return this.attrTween(e,typeof t==`function`?(n.local?Gf:zf)(n,i,Nn(this,`attr.`+e,t)):t==null?(n.local?Df:$f)(n):(n.local?Bf:Uf)(n,i,t))}function Ff(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Wf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Vf(e,t){var n,i;function r(){var o=t.apply(this,arguments);return o!==i&&(n=(i=o)&&Wf(e,o)),n}return r._value=t,r}function Hf(e,t){var n,i;function r(){var o=t.apply(this,arguments);return o!==i&&(n=(i=o)&&Ff(e,o)),n}return r._value=t,r}function Cd(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw new Error;var i=yt(e);return this.tween(n,(i.local?Vf:Hf)(i,t))}function Xf(e,t){return function(){vi(this,e).delay=+t.apply(this,arguments)}}function qf(e,t){return t=+t,function(){vi(this,e).delay=t}}function Td(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Xf:qf)(t,e)):Oe(this.node(),t).delay}function jf(e,t){return function(){Ie(this,e).duration=+t.apply(this,arguments)}}function Kf(e,t){return t=+t,function(){Ie(this,e).duration=t}}function Od(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?jf:Kf)(t,e)):Oe(this.node(),t).duration}function Yf(e,t){if(typeof t!=`function`)throw new Error;return function(){Ie(this,e).ease=t}}function Ad(e){var t=this._id;return arguments.length?this.each(Yf(t,e)):Oe(this.node(),t).ease}function Qf(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw new Error;Ie(this,e).ease=n}}function wd(e){if(typeof e!=`function`)throw new Error;return this.each(Qf(this._id,e))}function Pd(e){typeof e!=`function`&&(e=di(e));for(var t=this._groups,n=t.length,i=new Array(n),r=0;r<n;++r)for(var o=t[r],a=o.length,s=i[r]=[],c,l=0;l<a;++l)(c=o[l])&&e.call(c,c.__data__,l,o)&&s.push(c);return new ze(i,this._parents,this._name,this._id)}function Nd(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,i=t.length,r=n.length,o=Math.min(i,r),a=new Array(i),s=0;s<o;++s)for(var c=t[s],l=n[s],d=c.length,u=a[s]=new Array(d),p,_=0;_<d;++_)(p=c[_]||l[_])&&(u[_]=p);for(;s<i;++s)a[s]=t[s];return new ze(a,this._parents,this._name,this._id)}function Zf(e){return(e+``).trim().split(/^|\s+/).every(function(t){var n=t.indexOf(`.`);return n>=0&&(t=t.slice(0,n)),!t||t===`start`})}function Jf(e,t,n){var i,r,o=Zf(t)?vi:Ie;return function(){var a=o(this,e),s=a.on;s!==i&&(r=(i=s).copy()).on(t,n),a.on=r}}function Id(e,t){var n=this._id;return arguments.length<2?Oe(this.node(),n).on.on(e):this.each(Jf(n,e,t))}function eh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Rd(){return this.on(`end.remove`,eh(this._id))}function Md(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Yt(e));for(var i=this._groups,r=i.length,o=new Array(r),a=0;a<r;++a)for(var s=i[a],c=s.length,l=o[a]=new Array(c),d,u,p=0;p<c;++p)(d=s[p])&&(u=e.call(d,d.__data__,p,s))&&(`__data__`in d&&(u.__data__=d.__data__),l[p]=u,Ut(l[p],t,n,p,l,Oe(d,n)));return new ze(o,this._parents,t,n)}function Ld(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=li(e));for(var i=this._groups,r=i.length,o=[],a=[],s=0;s<r;++s)for(var c=i[s],l=c.length,d,u=0;u<l;++u)if(d=c[u]){for(var p=e.call(d,d.__data__,u,c),_,m=Oe(d,n),f=0,E=p.length;f<E;++f)(_=p[f])&&Ut(_,t,n,f,p,m);o.push(p),a.push(d)}return new ze(o,a,t,n)}var th=St.prototype.constructor;function $d(){return new th(this._groups,this._parents)}function nh(e,t){var n,i,r;return function(){var o=$t(this,e),a=(this.style.removeProperty(e),$t(this,e));return o===a?null:o===n&&a===i?r:r=t(n=o,i=a)}}function Dd(e){return function(){this.style.removeProperty(e)}}function ih(e,t,n){var i,r=n+``,o;return function(){var a=$t(this,e);return a===r?null:a===i?o:o=t(i=a,n)}}function rh(e,t,n){var i,r,o;return function(){var a=$t(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),$t(this,e))),a===c?null:a===i&&c===r?o:(r=c,o=t(i=a,s))}}function oh(e,t){var n,i,r,o=`style.`+t,a=`end.`+o,s;return function(){var c=Ie(this,e),l=c.on,d=c.value[o]==null?s||(s=Dd(t)):void 0;(l!==n||r!==d)&&(i=(n=l).copy()).on(a,r=d),c.on=i}}function Ud(e,t,n){var i=(e+=``)==`transform`?la:to;return t==null?this.styleTween(e,nh(e,i)).on(`end.style.`+e,Dd(e)):typeof t==`function`?this.styleTween(e,rh(e,i,Nn(this,`style.`+e,t))).each(oh(this._id,e)):this.styleTween(e,ih(e,i,t),n).on(`end.style.`+e,null)}function ah(e,t,n){return function(i){this.style.setProperty(e,t.call(this,i),n)}}function sh(e,t,n){var i,r;function o(){var a=t.apply(this,arguments);return a!==r&&(i=(r=a)&&ah(e,a,n)),i}return o._value=t,o}function Bd(e,t,n){var i=`style.`+(e+=``);if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!=`function`)throw new Error;return this.tween(i,sh(e,t,n??``))}function ch(e){return function(){this.textContent=e}}function lh(e){return function(){var t=e(this);this.textContent=t??``}}function zd(e){return this.tween(`text`,typeof e==`function`?lh(Nn(this,`text`,e)):ch(e==null?``:e+``))}function dh(e){return function(t){this.textContent=e.call(this,t)}}function _h(e){var t,n;function i(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&dh(r)),t}return i._value=e,i}function Gd(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw new Error;return this.tween(t,_h(e))}function Fd(){for(var e=this._name,t=this._id,n=no(),i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var d=Oe(c,t);Ut(c,e,n,l,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new ze(i,this._parents,e,n)}function Wd(){var e,t,n=this,i=n._id,r=n.size();return new Promise(function(o,a){var s={value:a},c={value:function(){--r===0&&o()}};n.each(function(){var l=Ie(this,i),d=l.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),l.on=t}),r===0&&o()})}var ph=0;function ze(e,t,n,i){this._groups=e,this._parents=t,this._name=n,this._id=i}function Vd(e){return St().transition(e)}function no(){return++ph}var xt=St.prototype;ze.prototype=Vd.prototype={constructor:ze,select:Md,selectAll:Ld,selectChild:xt.selectChild,selectChildren:xt.selectChildren,filter:Pd,merge:Nd,selection:$d,transition:Fd,call:xt.call,nodes:xt.nodes,node:xt.node,size:xt.size,empty:xt.empty,each:xt.each,on:Id,attr:kd,attrTween:Cd,style:Ud,styleTween:Bd,text:zd,textTween:Gd,remove:Rd,tween:xd,delay:Td,duration:Od,ease:Ad,easeVarying:wd,end:Wd,[Symbol.iterator]:xt[Symbol.iterator]};function io(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var uh={time:null,delay:0,duration:250,ease:io};function mh(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Hd(e){var t,n;e instanceof ze?(t=e._id,e=e._name):(t=no(),(n=uh).time=yi(),e=e==null?null:e+``);for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,c,l=0;l<s;++l)(c=a[l])&&Ut(c,e,t,l,a,n||mh(c,t));return new ze(i,this._parents,e,t)}St.prototype.interrupt=vd;St.prototype.transition=Hd;var{abs:MT,max:LT,min:$T}=Math;[`w`,`e`].map(ua);[`n`,`s`].map(ua);[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(ua);function ua(e){return{type:e}}function hh(e){var t=0,n=e.children,i=n&&n.length;if(!i)t=1;else for(;--i>=0;)t+=n[i].value;e.value=t}function qd(){return this.eachAfter(hh)}function jd(e,t){let n=-1;for(let i of this)e.call(t,i,++n,this);return this}function Kd(e,t){for(var n=this,i=[n],r,o,a=-1;n=i.pop();)if(e.call(t,n,++a,this),r=n.children)for(o=r.length-1;o>=0;--o)i.push(r[o]);return this}function Yd(e,t){for(var n=this,i=[n],r=[],o,a,s,c=-1;n=i.pop();)if(r.push(n),o=n.children)for(a=0,s=o.length;a<s;++a)i.push(o[a]);for(;n=r.pop();)e.call(t,n,++c,this);return this}function Qd(e,t){let n=-1;for(let i of this)if(e.call(t,i,++n,this))return i}function Zd(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,i=t.children,r=i&&i.length;--r>=0;)n+=i[r].value;t.value=n})}function Jd(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function e_(e){for(var t=this,n=gh(t,e),i=[t];t!==n;)t=t.parent,i.push(t);for(var r=i.length;e!==n;)i.splice(r,0,e),e=e.parent;return i}function gh(e,t){if(e===t)return e;var n=e.ancestors(),i=t.ancestors(),r=null;for(e=n.pop(),t=i.pop();e===t;)r=e,e=n.pop(),t=i.pop();return r}function t_(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function n_(){return Array.from(this)}function i_(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function r_(){var e=this,t=[];return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),t}function*o_(){var e=this,t,n=[e],i,r,o;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,i=e.children)for(r=0,o=i.length;r<o;++r)n.push(i[r]);while(n.length)}function In(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=yh)):t===void 0&&(t=Eh);for(var n=new en(e),i,r=[n],o,a,s,c;i=r.pop();)if((a=t(i.data))&&(c=(a=Array.from(a)).length))for(i.children=a,s=c-1;s>=0;--s)r.push(o=a[s]=new en(a[s])),o.parent=i,o.depth=i.depth+1;return n.eachBefore(vh)}function bh(){return In(this).eachBefore(Sh)}function Eh(e){return e.children}function yh(e){return Array.isArray(e)?e[1]:null}function Sh(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function vh(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function en(e){this.data=e,this.depth=this.height=0,this.parent=null}en.prototype=In.prototype={constructor:en,count:qd,each:jd,eachAfter:Yd,eachBefore:Kd,find:Qd,sum:Zd,sort:Jd,path:e_,ancestors:t_,descendants:n_,leaves:i_,links:r_,copy:bh,[Symbol.iterator]:o_};function xh(e,t){return e.parent===t.parent?1:2}function ma(e){var t=e.children;return t?t[0]:e.t}function fa(e){var t=e.children;return t?t[t.length-1]:e.t}function kh(e,t,n){var i=n/(t.i-e.i);t.c-=i,t.s+=n,e.c+=i,t.z+=n,t.m+=n}function Ch(e){for(var t=0,n=0,i=e.children,r=i.length,o;--r>=0;)o=i[r],o.z+=t,o.m+=t,t+=o.s+(n+=o.c)}function Th(e,t,n){return e.a.parent===t.parent?e.a:n}function ro(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}ro.prototype=Object.create(en.prototype);function Oh(e){for(var t=new ro(e,0),n,i=[t],r,o,a,s;n=i.pop();)if(o=n._.children)for(n.children=new Array(s=o.length),a=s-1;a>=0;--a)i.push(r=n.children[a]=new ro(o[a],a)),r.parent=n;return(t.parent=new ro(null,0)).children=[t],t}function ha(){var e=xh,t=1,n=1,i=null;function r(l){var d=Oh(l);if(d.eachAfter(o),d.parent.m=-d.z,d.eachBefore(a),i)l.eachBefore(c);else{var u=l,p=l,_=l;l.eachBefore(function(b){b.x<u.x&&(u=b),b.x>p.x&&(p=b),b.depth>_.depth&&(_=b)});var m=u===p?1:e(u,p)/2,f=m-u.x,E=t/(p.x+m+f),C=n/(_.depth||1);l.eachBefore(function(b){b.x=(b.x+f)*E,b.y=b.depth*C})}return l}function o(l){var d=l.children,u=l.parent.children,p=l.i?u[l.i-1]:null;if(d){Ch(l);var _=(d[0].z+d[d.length-1].z)/2;p?(l.z=p.z+e(l._,p._),l.m=l.z-_):l.z=_}else p&&(l.z=p.z+e(l._,p._));l.parent.A=s(l,p,l.parent.A||u[0])}function a(l){l._.x=l.z+l.parent.m,l.m+=l.parent.m}function s(l,d,u){if(d){for(var p=l,_=l,m=d,f=p.parent.children[0],E=p.m,C=_.m,b=m.m,P=f.m,U;m=fa(m),p=ma(p),m&&p;)f=ma(f),_=fa(_),_.a=l,U=m.z+b-p.z-E+e(m._,p._),U>0&&(kh(Th(m,l,u),l,U),E+=U,C+=U),b+=m.m,E+=p.m,P+=f.m,C+=_.m;m&&!fa(_)&&(_.t=m,_.m+=b-C),p&&!ma(f)&&(f.t=p,f.m+=E-P,u=l)}return u}function c(l){l.x*=t,l.y=l.depth*n}return r.separation=function(l){return arguments.length?(e=l,r):e},r.size=function(l){return arguments.length?(i=!1,t=+l[0],n=+l[1],r):i?null:[t,n]},r.nodeSize=function(l){return arguments.length?(i=!0,t=+l[0],n=+l[1],r):i?[t,n]:null},r}var xi=e=>()=>e;function ga(e,{sourceEvent:t,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function lt(e,t,n){this.k=e,this.x=t,this.y=n}lt.prototype={constructor:lt,scale:function(e){return e===1?this:new lt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new lt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var ki=new lt(1,0,0);ba.prototype=lt.prototype;function ba(e){for(;!e.__zoom;)if(!(e=e.parentNode))return ki;return e.__zoom}function oo(e){e.stopImmediatePropagation()}function Rn(e){e.preventDefault(),e.stopImmediatePropagation()}function Ah(e){return(!e.ctrlKey||e.type===`wheel`)&&!e.button}function wh(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute(`viewBox`)?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function a_(){return this.__zoom||ki}function Ph(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Nh(){return navigator.maxTouchPoints||`ontouchstart`in this}function Ih(e,t,n){var i=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function Ea(){var e=Ah,t=wh,n=Ih,i=Ph,r=Nh,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=_a,l=ci(`start`,`zoom`,`end`),d,u,p,_=500,m=150,f=0,E=10;function C(S){S.property(`__zoom`,a_).on(`wheel.zoom`,z,{passive:!1}).on(`mousedown.zoom`,T).on(`dblclick.zoom`,w).filter(r).on(`touchstart.zoom`,B).on(`touchmove.zoom`,ee).on(`touchend.zoom touchcancel.zoom`,J).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}C.transform=function(S,M,x,I){var O=S.selection?S.selection():S;O.property(`__zoom`,a_),S!==O?F(S,M,x,I):O.interrupt().each(function(){j(this,arguments).event(I).start().zoom(null,typeof M==`function`?M.apply(this,arguments):M).end()})},C.scaleBy=function(S,M,x,I){C.scaleTo(S,function(){return this.__zoom.k*(typeof M==`function`?M.apply(this,arguments):M)},x,I)},C.scaleTo=function(S,M,x,I){C.transform(S,function(){var O=t.apply(this,arguments),K=this.__zoom,R=x==null?U(O):typeof x==`function`?x.apply(this,arguments):x,ie=K.invert(R),re=typeof M==`function`?M.apply(this,arguments):M;return n(P(b(K,re),R,ie),O,a)},x,I)},C.translateBy=function(S,M,x,I){C.transform(S,function(){return n(this.__zoom.translate(typeof M==`function`?M.apply(this,arguments):M,typeof x==`function`?x.apply(this,arguments):x),t.apply(this,arguments),a)},null,I)},C.translateTo=function(S,M,x,I,O){C.transform(S,function(){var K=t.apply(this,arguments),R=this.__zoom,ie=I==null?U(K):typeof I==`function`?I.apply(this,arguments):I;return n(ki.translate(ie[0],ie[1]).scale(R.k).translate(typeof M==`function`?-M.apply(this,arguments):-M,typeof x==`function`?-x.apply(this,arguments):-x),K,a)},I,O)};function b(S,M){return M=Math.max(o[0],Math.min(o[1],M)),M===S.k?S:new lt(M,S.x,S.y)}function P(S,M,x){var I=M[0]-x[0]*S.k,O=M[1]-x[1]*S.k;return I===S.x&&O===S.y?S:new lt(S.k,I,O)}function U(S){return[(+S[0][0]+ +S[1][0])/2,(+S[0][1]+ +S[1][1])/2]}function F(S,M,x,I){S.on(`start.zoom`,function(){j(this,arguments).event(I).start()}).on(`interrupt.zoom end.zoom`,function(){j(this,arguments).event(I).end()}).tween(`zoom`,function(){var O=this,K=arguments,R=j(O,K).event(I),ie=t.apply(O,K),re=x==null?U(ie):typeof x==`function`?x.apply(O,K):x,ae=Math.max(ie[1][0]-ie[0][0],ie[1][1]-ie[0][1]),ce=O.__zoom,Ce=typeof M==`function`?M.apply(O,K):M,ne=c(ce.invert(re).concat(ae/ce.k),Ce.invert(re).concat(ae/Ce.k));return function(Te){if(Te===1)Te=Ce;else{var Me=ne(Te),Tt=ae/Me[2];Te=new lt(Tt,re[0]-Me[0]*Tt,re[1]-Me[1]*Tt)}R.zoom(null,Te)}})}function j(S,M,x){return!x&&S.__zooming||new q(S,M)}function q(S,M){this.that=S,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(S,M),this.taps=0}q.prototype={event:function(S){return S&&(this.sourceEvent=S),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit(`start`)),this},zoom:function(S,M){return this.mouse&&S!==`mouse`&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&S!==`touch`&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&S!==`touch`&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit(`zoom`),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit(`end`)),this},emit:function(S){var M=Ze(this.that).datum();l.call(S,this.that,new ga(S,{sourceEvent:this.sourceEvent,target:C,type:S,transform:this.that.__zoom,dispatch:l}),M)}};function z(S,...M){if(!e.apply(this,arguments))return;var x=j(this,M).event(S),I=this.__zoom,O=Math.max(o[0],Math.min(o[1],I.k*Math.pow(2,i.apply(this,arguments)))),K=vt(S);if(x.wheel)(x.mouse[0][0]!==K[0]||x.mouse[0][1]!==K[1])&&(x.mouse[1]=I.invert(x.mouse[0]=K)),clearTimeout(x.wheel);else{if(I.k===O)return;x.mouse=[K,I.invert(K)],Bt(this),x.start()}Rn(S),x.wheel=setTimeout(R,m),x.zoom(`mouse`,n(P(b(I,O),x.mouse[0],x.mouse[1]),x.extent,a));function R(){x.wheel=null,x.end()}}function T(S,...M){if(p||!e.apply(this,arguments))return;var x=S.currentTarget,I=j(this,M,!0).event(S),O=Ze(S.view).on(`mousemove.zoom`,re,!0).on(`mouseup.zoom`,ae,!0),K=vt(S,x),R=S.clientX,ie=S.clientY;Jo(S.view),oo(S),I.mouse=[K,this.__zoom.invert(K)],Bt(this),I.start();function re(ce){if(Rn(ce),!I.moved){var Ce=ce.clientX-R,ne=ce.clientY-ie;I.moved=Ce*Ce+ne*ne>f}I.event(ce).zoom(`mouse`,n(P(I.that.__zoom,I.mouse[0]=vt(ce,x),I.mouse[1]),I.extent,a))}function ae(ce){O.on(`mousemove.zoom mouseup.zoom`,null),ea(ce.view,I.moved),Rn(ce),I.event(ce).end()}}function w(S,...M){if(e.apply(this,arguments)){var x=this.__zoom,I=vt(S.changedTouches?S.changedTouches[0]:S,this),O=x.invert(I),K=x.k*(S.shiftKey?.5:2),R=n(P(b(x,K),I,O),t.apply(this,M),a);Rn(S),s>0?Ze(this).transition().duration(s).call(F,R,I,S):Ze(this).call(C.transform,R,I,S)}}function B(S,...M){if(e.apply(this,arguments)){var x=S.touches,I=x.length,O=j(this,M,S.changedTouches.length===I).event(S),K,R,ie,re;for(oo(S),R=0;R<I;++R)ie=x[R],re=vt(ie,this),re=[re,this.__zoom.invert(re),ie.identifier],O.touch0?!O.touch1&&O.touch0[2]!==re[2]&&(O.touch1=re,O.taps=0):(O.touch0=re,K=!0,O.taps=1+!!d);d&&(d=clearTimeout(d)),K&&(O.taps<2&&(u=re[0],d=setTimeout(function(){d=null},_)),Bt(this),O.start())}}function ee(S,...M){if(this.__zooming){var x=j(this,M).event(S),I=S.changedTouches,O=I.length,K,R,ie,re;for(Rn(S),K=0;K<O;++K)R=I[K],ie=vt(R,this),x.touch0&&x.touch0[2]===R.identifier?x.touch0[0]=ie:x.touch1&&x.touch1[2]===R.identifier&&(x.touch1[0]=ie);if(R=x.that.__zoom,x.touch1){var ae=x.touch0[0],ce=x.touch0[1],Ce=x.touch1[0],ne=x.touch1[1],Te=(Te=Ce[0]-ae[0])*Te+(Te=Ce[1]-ae[1])*Te,Me=(Me=ne[0]-ce[0])*Me+(Me=ne[1]-ce[1])*Me;R=b(R,Math.sqrt(Te/Me)),ie=[(ae[0]+Ce[0])/2,(ae[1]+Ce[1])/2],re=[(ce[0]+ne[0])/2,(ce[1]+ne[1])/2]}else if(x.touch0)ie=x.touch0[0],re=x.touch0[1];else return;x.zoom(`touch`,n(P(R,ie,re),x.extent,a))}}function J(S,...M){if(this.__zooming){var x=j(this,M).event(S),I=S.changedTouches,O=I.length,K,R;for(oo(S),p&&clearTimeout(p),p=setTimeout(function(){p=null},_),K=0;K<O;++K)R=I[K],x.touch0&&x.touch0[2]===R.identifier?delete x.touch0:x.touch1&&x.touch1[2]===R.identifier&&delete x.touch1;if(x.touch1&&!x.touch0&&(x.touch0=x.touch1,delete x.touch1),x.touch0)x.touch0[1]=this.__zoom.invert(x.touch0[0]);else if(x.end(),x.taps===2&&(R=vt(R,this),Math.hypot(u[0]-R[0],u[1]-R[1])<E)){var ie=Ze(this).on(`dblclick.zoom`);ie&&ie.apply(this,arguments)}}}return C.wheelDelta=function(S){return arguments.length?(i=typeof S==`function`?S:xi(+S),C):i},C.filter=function(S){return arguments.length?(e=typeof S==`function`?S:xi(!!S),C):e},C.touchable=function(S){return arguments.length?(r=typeof S==`function`?S:xi(!!S),C):r},C.extent=function(S){return arguments.length?(t=typeof S==`function`?S:xi([[+S[0][0],+S[0][1]],[+S[1][0],+S[1][1]]]),C):t},C.scaleExtent=function(S){return arguments.length?(o[0]=+S[0],o[1]=+S[1],C):[o[0],o[1]]},C.translateExtent=function(S){return arguments.length?(a[0][0]=+S[0][0],a[1][0]=+S[1][0],a[0][1]=+S[0][1],a[1][1]=+S[1][1],C):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},C.constrain=function(S){return arguments.length?(n=S,C):n},C.duration=function(S){return arguments.length?(s=+S,C):s},C.interpolate=function(S){return arguments.length?(c=S,C):c},C.on=function(){var S=l.on.apply(l,arguments);return S===l?C:S},C.clickDistance=function(S){return arguments.length?(f=(S=+S)*S,C):Math.sqrt(f)},C.tapDistance=function(S){return arguments.length?(E=+S,C):E},C}var Lh=[`svgContainer`];function $h(e,t){e&1&&(yl$1(0,`div`,3),Kw(1,1),vl$1())}var ao=class e{svgContainerSignal=Ej(`svgContainer`);_svgContainerOverride;get svgContainer(){return this._svgContainerOverride!==void 0?this._svgContainerOverride:this.svgContainerSignal()}set svgContainer(t){this._svgContainerOverride=t}store=C(B$1);specContent=this.store.selectSignal(Tc);hasData=ei(!1);svg=null;root=null;tree=null;i=0;duration=0;margin={top:20,right:120,bottom:20,left:120};width=960-this.margin.right-this.margin.left;height=800-this.margin.top-this.margin.bottom;resizeObserver;constructor(){Nd$1(()=>{let t=this.specContent();t?this.parseAndRender(t):(this.hasData.set(!1),this.clearSvg())}),this.resizeObserver=new ResizeObserver(()=>{this.handleResize()})}ngAfterViewInit(){this.resizeObserver.observe(this.svgContainer.nativeElement)}ngOnDestroy(){this.resizeObserver.disconnect()}handleResize(){if(!this.svgContainer||!this.hasData())return;let t=this.svgContainer.nativeElement.getBoundingClientRect();t.width!==0&&t.height!==0&&(this.width=t.width-this.margin.right-this.margin.left,this.height=t.height-this.margin.top-this.margin.bottom,this.root&&this.update(this.root))}clearSvg(){this.svgContainer&&Ze(this.svgContainer.nativeElement).selectAll(`svg`).remove()}parseAndRender(t){try{let n=Zi(t);if(!n)return;this.hasData.set(!0);let i={id:`root`,name:n.info?.title||`API`,type:`root`,children:[]};if(n.paths){let o={id:`paths`,name:`Paths`,type:`category`,children:[]};Object.keys(n.paths).forEach(a=>{let s={id:`path-${a}`,name:a,type:`path`,children:[]},c=n.paths[a];Object.keys(c).forEach(l=>{l!==`parameters`&&l!==`$ref`&&s.children.push({id:`method-${a}-${l}`,name:l.toUpperCase(),type:`method`})}),o.children.push(s)}),i.children.push(o)}let r;if(n.components?r=n.components.schemas:r=n.definitions,r){let o={id:`schemas`,name:`Schemas`,type:`category`,children:[]};Object.keys(r).forEach(a=>{o.children.push({id:`schema-${a}`,name:a,type:`schema`})}),i.children.push(o)}this.initSvg(),this.root=In(i,o=>o.children),this.root.x0=this.height/2,this.root.y0=0,(this.root.children||[]).forEach(this.collapse.bind(this)),this.update(this.root)}catch(n){console.error(`Error parsing OpenAPI spec for visualisation`,n),this.hasData.set(!1),this.clearSvg()}}collapse(t){t.children&&(t._children=t.children,t._children.forEach(this.collapse.bind(this)),t.children=void 0)}zoomCallback=null;initSvg(){this.clearSvg();let t=this.svgContainer.nativeElement,{width:n,height:i}=t.getBoundingClientRect();this.width=Math.max(n-this.margin.right-this.margin.left,800),this.height=Math.max(i-this.margin.top-this.margin.bottom,600),this.zoomCallback=o=>{this.svg&&this.svg.attr(`transform`,o.transform)};let r=Ze(t).append(`svg`).attr(`width`,`100%`).attr(`height`,`100%`).attr(`role`,`img`).attr(`aria-label`,`API Structure Diagram`).call(Ea().on(`zoom`,this.zoomCallback)).append(`g`).attr(`transform`,`translate(${this.margin.left},${this.margin.top})`);this.svg=r,this.tree=ha().nodeSize([30,150])}update(t){if(!this.svg)return;let n=this.tree(this.root),i=n.descendants(),r=n.descendants().slice(1);i.forEach(p=>{p.y=p.depth*180});let o=this.svg.selectAll(`g.node`).data(i,p=>p.id?String(p.id):String(p.id=String(++this.i))),a=o.enter().append(`g`).attr(`class`,`node`).attr(`tabindex`,`0`).attr(`role`,`button`).attr(`aria-label`,p=>`${p.data.type}: ${p.data.name}`).attr(`transform`,()=>`translate(${t.y0},${t.x0})`).on(`click`,(p,_)=>this.click(p,_)).on(`keydown`,(p,_)=>{(p.key===`Enter`||p.key===` `)&&(p.preventDefault(),this.click(p,_))});a.append(`circle`).attr(`class`,`node-circle`).attr(`r`,1e-6).style(`fill`,p=>p._children?`var(--mat-sys-primary)`:`var(--mat-sys-surface)`).style(`stroke`,`var(--mat-sys-primary)`).style(`stroke-width`,`1.5px`),a.append(`text`).attr(`dy`,`.35em`).attr(`x`,p=>p.children||p._children?-13:13).attr(`text-anchor`,p=>p.children||p._children?`end`:`start`).text(p=>p.data.name).style(`fill`,`var(--mat-sys-on-surface)`).style(`font-size`,`12px`);let s=a.merge(o);s.attr(`aria-expanded`,p=>p.children?`true`:p._children?`false`:null).transition().duration(this.duration).attr(`transform`,p=>`translate(${p.y},${p.x})`),s.select(`circle.node-circle`).attr(`r`,6).style(`fill`,p=>p._children?`var(--mat-sys-primary)`:`var(--mat-sys-surface)`).attr(`cursor`,`pointer`);let c=o.exit().transition().duration(this.duration).attr(`transform`,()=>`translate(${t.y},${t.x})`).remove();c.select(`circle`).attr(`r`,1e-6),c.select(`text`).style(`fill-opacity`,1e-6);let l=this.svg.selectAll(`path.link`).data(r,p=>String(p.id));l.enter().insert(`path`,`g`).attr(`class`,`link`).style(`fill`,`none`).style(`stroke`,`var(--mat-sys-outline)`).style(`stroke-width`,`1.5px`).attr(`d`,()=>{let p={x:t.x0,y:t.y0};return this.diagonal(p,p)}).merge(l).transition().duration(this.duration).attr(`d`,p=>this.diagonal(p,p.parent)),l.exit().transition().duration(this.duration).attr(`d`,()=>{let p={x:t.x,y:t.y};return this.diagonal(p,p)}).remove(),i.forEach(p=>{p.x0=p.x,p.y0=p.y})}diagonal(t,n){return`M ${t.y} ${t.x}
            C ${(t.y+n.y)/2} ${t.x},
              ${(t.y+n.y)/2} ${n.x},
              ${n.y} ${n.x}`}click(t,n){n.children?(n._children=n.children,n.children=void 0):(n.children=n._children,n._children=null),this.update(n)}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-visualisations`]],viewQuery:function(n,i){n&1&&gg$1(i.svgContainerSignal,Lh,5),n&2&&ab$1()},decls:3,vars:1,consts:()=>{let t;return t=$localize`:@@noApiData:No API Data Available`,[[`svgContainer`,``],t,[1,`vis-container`],[1,`empty-state`]]},template:function(n,i){n&1&&(yl$1(0,`div`,2,0),hw(2,$h,2,0,`div`,3),vl$1()),n&2&&(YE$1(2),mw(i.hasData()?-1:2))},styles:[`.vis-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:hidden;background-color:var(--%NS%mat-sys-surface-container)}.empty-state[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:var(--%NS%mat-sys-outline);font-style:italic}`]})};function Ka(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var dn=Ka();function F_(e){dn=e}var rn={exec:()=>null};function tn(e){let t=[];return n=>{let i=Math.max(0,Math.min(3,n-1)),r=t[i];return r||(r=e(i),t[i]=r),r}}function Y(e,t=``){let n=typeof e==`string`?e:e.source,i={replace:(r,o)=>{let a=typeof o==`string`?o:o.source;return a=a.replace(Ne.caret,`$1`),n=n.replace(r,a),i},getRegex:()=>new RegExp(n,t)};return i}var Dh=((e=``)=>{try{return!!new RegExp(`(?<=1)(?<!1)`+e)}catch(t){return!1}})();var Ne={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:tn(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:tn(e=>new RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:tn(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:tn(e=>new RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:tn(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:tn(e=>new RegExp(`^ {0,${e}}(?:</?(?:${Mi})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:tn(e=>new RegExp(`^ {0,${e}}>`))};var Uh=/^(?:[ \t]*(?:\n|$))+/;var Bh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;var zh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;var Ri=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;var Gh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;var Ya=/ {0,3}(?:[*+-]|\d{1,9}[.)])/;var W_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;var V_=Y(W_).replace(/bull/g,Ya).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex();var Fh=Y(W_).replace(/bull/g,Ya).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();var Qa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;var Wh=/^[^\n]+/;var Za=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;var Vh=Y(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Za).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();var Hh=Y(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ya).getRegex();var Mi=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`;var Ja=/<!--(?:-?>|[\s\S]*?(?:-->|$))/;var Xh=Y(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Ja).replace(`tag`,Mi).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();var H_=e=>Y(Qa).replace(`hr`,Ri).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Mi).getRegex();var qh=H_(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);var jh=H_(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);var es={blockquote:Y(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,jh).getRegex(),code:Bh,def:Vh,fences:zh,heading:Gh,hr:Ri,html:Xh,lheading:V_,list:Hh,newline:Uh,paragraph:qh,table:rn,text:Wh};var s_=Y(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Ri).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Mi).getRegex();var Yh=W$1(U({},es),{lheading:Fh,table:s_,paragraph:Y(Qa).replace(`hr`,Ri).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,s_).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,Mi).getRegex()});var Qh=W$1(U({},es),{html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Ja).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Y(Qa).replace(`hr`,Ri).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,V_).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()});var Zh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;var Jh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;var X_=/^( {2,}|\\)\n(?!\s*$)[ \t]*/;var eg=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;var bt=/[\p{P}\p{S}]/u;var Wn=/[\s\p{P}\p{S}]/u;var Li=/[^\s\p{P}\p{S}]/u;var tg=Y(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Wn).getRegex();var ng=/[\p{Pi}\p{Ps}"']/u;var q_=/(?!~)[\p{P}\p{S}]/u;var ig=/(?!~)[\s\p{P}\p{S}]/u;var rg=/(?:[^\s\p{P}\p{S}]|~)/u;var og=Y(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Dh?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex();var j_=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;var ag=Y(j_,`u`).replace(/punct/g,bt).getRegex();var sg=Y(j_,`u`).replace(/punct/g,q_).getRegex();var lg=Y(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,ng).replace(/punct/g,bt).getRegex();var K_=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`;var dg=Y(K_,`gu`).replace(/notPunctSpace/g,Li).replace(/punctSpace/g,Wn).replace(/punct/g,bt).getRegex();var _g=Y(K_,`gu`).replace(/notPunctSpace/g,rg).replace(/punctSpace/g,ig).replace(/punct/g,q_).getRegex();var ug=Y(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Li).replace(/punctSpace/g,Wn).replace(/punct/g,bt).getRegex();var mg=Y(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Li).replace(/punctSpace/g,Wn).replace(/punct/g,bt).getRegex();var hg=Y(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Li).replace(/punctSpace/g,Wn).replace(/punct/g,bt).getRegex();var gg=Y(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,bt).getRegex();var Eg=Y(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Li).replace(/punctSpace/g,Wn).replace(/punct/g,bt).getRegex();var yg=Y(/\\(punct)/,`gu`).replace(/punct/g,bt).getRegex();var Sg=Y(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,bt).getRegex();var vg=Y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();var xg=Y(Ja).replace(`(?:-->|$)`,`-->`).getRegex();var kg=Y(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,xg).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();var Y_=/\[(?:\\[\s\S]|[^\[\]\\])*\]/;var po=Y(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,Y_).getRegex();var Cg=Y(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,po).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();var Tg=Y(/^!?\[(label)\]\[(ref)\]/).replace(`label`,po).replace(`ref`,Za).getRegex();var Og=Y(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Za).getRegex();var c_=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;var Ag=Y(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,Y_).getRegex();var wg=Y(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Y(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Ag).replace(`ref`,c_).getRegex()).replace(`nolink`,Y(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,c_).getRegex()).getRegex();var l_=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;var Ng=Y(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex();var ts={_backpedal:rn,anyPunctuation:yg,anyPunctuationOutsideCode:Sg,autolink:vg,blockSkip:og,br:X_,code:Jh,del:rn,delLDelim:rn,delRDelim:rn,emStrongLDelim:ag,emStrongRDelimAst:dg,emStrongRDelimUnd:mg,escape:Zh,link:Cg,nolink:Og,punctuation:tg,reflink:Tg,reflinkSearch:wg,tag:kg,text:eg,url:rn};var Ig=W$1(U({},ts),{emStrongLDelim:lg,emStrongRDelimAst:ug,emStrongRDelimUnd:hg,link:Y(/^!?\[(label)\]\((.*?)\)/).replace(`label`,po).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,po).getRegex()});var wa=W$1(U({},ts),{emStrongRDelimAst:_g,emStrongLDelim:sg,delLDelim:gg,delRDelim:Eg,url:Y(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,Ng).replace(`protocol`,l_).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Y(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,l_).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()});var Rg=W$1(U({},wa),{br:Y(X_).replace(`{2,}`,`*`).getRegex(),text:Y(wa.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()});var so={normal:es,gfm:Yh,pedantic:Qh};var Ci={normal:ts,gfm:wa,breaks:Rg,pedantic:Ig};var Mg={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};var d_=e=>Mg[e];function Je(e,t){if(t){if(Ne.escapeTest.test(e))return e.replace(Ne.escapeReplace,d_)}else if(Ne.escapeTestNoEncode.test(e))return e.replace(Ne.escapeReplaceNoEncode,d_);return e}function Lg(e){return Ne.numericCharacterReference.test(e)?e.replace(Ne.numericCharacterReferenceOrAmpersand,(t,n,i)=>{if(n===void 0&&i===void 0)return`&amp;`;let r=n===void 0?Number.parseInt(i,16):Number.parseInt(n,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function __(e){try{e=encodeURI(e).replace(Ne.percentDecode,`%`)}catch(t){return null}return e}function p_(e,t){let i=e.replace(Ne.findPipe,(o,a,s)=>{let c=!1,l=a;for(;--l>=0&&s[l]===`\\`;)c=!c;return c?`|`:` |`}).split(Ne.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push(``);for(;r<i.length;r++)i[r]=i[r].trim().replace(Ne.slashPipe,`|`);return i}function zt(e,t,n){let i=e.length;if(i===0)return``;let r=0;for(;r<i;){let o=e.charAt(i-r-1);if(o===t&&!n)r++;else if(o!==t&&n)r++;else break}return e.slice(0,i-r)}function u_(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ne.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function uo(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function m_(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let i=0;i<e.length;i++)if(e[i]===`\\`)i++;else if(e[i]===t[0])n++;else if(e[i]===t[1]&&(n--,n<0))return i;return n>0?-2:-1}function co(e,t=0){let n=t,i=``;for(let r of e)if(r===`	`){let o=4-n%4;i+=` `.repeat(o),n+=o}else i+=r,n++;return i}function f_(e,t,n,i,r){let o=t.href,a=t.title||null,s=e[1].replace(r.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=i.state.inLink,d=i.state.linkEmitted,u=i.state.inRawBlock;i.state.inLink=!0,i.state.linkEmitted=!1;let p=i.inlineTokens(s),_=i.state.linkEmitted;if(i.state.linkEmitted=d,i.state.inLink=l,!c){if(_){i.state.inRawBlock=u;return}i.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:o,title:a,text:s,tokens:p}}function $g(e,t,n){let i=e.match(n.other.indentCodeCompensation);if(i===null)return t;let r=i[1];return t.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[s]=a;return o.slice(Math.min(s.length,r.length))}).join(`
`)}function h_(e,t,n,i){if(!t.includes(`<`))return!1;for(let r=0;r<t.length;r++){if(t[r]===`\\`){r++;continue}if(t[r]==="`"){let s=i.inline.code.exec(t.slice(r));if(s){r+=s[0].length-1;continue}}if(t[r]!==`<`)continue;let o=e.slice(n+r),a=i.inline.tag.exec(o)||i.inline.autolink.exec(o);if(a){if(a[0].length>t.length-r)return!0;r+=a[0].length-1}}return!1}var Ln=class{options;rules;lexer;constructor(e){this.options=e||dn}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:u_(t[0]);return{type:`code`,raw:n,codeBlockStyle:`indented`,text:n.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],i=$g(n,t[3]||``,this.rules);return{type:`code`,raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let i=zt(n,`#`);(this.options.pedantic||!i||this.rules.other.endingSpaceTabChar.test(i))&&(n=i.trim())}return{type:`heading`,raw:zt(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:zt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=zt(t[0],`
`).split(`
`),i=``,r=``,o=[];for(;n.length>0;){let a=!1,s=[],c=0;for(;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),a=!0;else if(!a)s.push(n[c]);else break;n=n.slice(c);let l=s.join(`
`),d=l.replace(this.rules.other.blockquoteMarkerWhitespace,(_,m,f)=>m+co(f,m.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);i=i?`${i}
${l}`:l,r=r?`${r}
${d}`:d;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=u,n.length===0)break;let p=o.at(-1);if(p?.type===`code`||p?.type===`heading`||p?.type===`hr`||p?.type===`html`)break;if(p?.type===`blockquote`){let _=p,m=n.join(`
`),f=_.raw+`
`+m.replace(this.rules.other.blockquoteSetextReplace2,``),E=this.blockquote(f);o[o.length-1]=E;let C=f.substring(E.raw.length).replace(/^\n/,``),b=C?C.split(`
`).length:0,P=b?n.slice(0,-b):n;P.length>0&&(i=`${i}
${P.join(`
`)}`),r=r.substring(0,r.length-_.text.length)+E.text;break}else if(p?.type===`list`){let _=p,m=_.raw+`
`+n.join(`
`),f=this.list(m);o[o.length-1]=f;let E=f.raw.length>_.raw.length?m.slice(_.raw.length+1,f.raw.length).split(`
`).length:0;if(E>0){let C=n.slice(0,E).join(`
`);i=`${i}
${C}`,r=`${r}
${C}`}n=n.slice(E);continue}}return{type:`blockquote`,raw:i,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,i=()=>n.length-e.length,r=t[1].trim(),o=r.length>1,a={type:`list`,raw:``,ordered:o,start:o?+r.slice(0,-1):``,loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:`[*+-]`);let s=this.rules.other.listItemRegex(r),c=!1;for(;e;){let d=!1,u=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let p=i();e=e.substring(t[0].length);let _=t[2].split(`
`,1)[0],m=t[1].length,f=this.options.pedantic?co(_,m):_.replace(this.rules.other.leadingSpaceTab,U=>co(U,m)),E=e.split(`
`,1)[0],C=!f.trim(),b=0;if(this.options.pedantic?(b=2,u=f.trimStart()):C?b=m+1:(b=f.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=f.slice(b),b+=m),C&&this.rules.other.blankLine.test(E)&&(e=e.substring(E.length+1),d=!0),!d){let U=this.rules.other.nextBulletRegex(b),F=this.rules.other.hrRegex(b),j=this.rules.other.fencesBeginRegex(b),q=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(b):this.rules.other.headingBeginRegex(b),z=this.rules.other.htmlBeginRegex(b),T=this.rules.other.blockquoteBeginRegex(b);for(;e;){let w=e.split(`
`,1)[0],B;if(E=w,this.options.pedantic?(E=E.replace(this.rules.other.listReplaceNesting,`  `),B=E):B=E.replace(this.rules.other.leadingSpaceTab,ee=>co(ee)),j.test(E)||q.test(E)||z.test(E)||T.test(E)||U.test(E)||F.test(E))break;if(B.search(this.rules.other.nonSpaceChar)>=b||!E.trim())u+=`
`+B.slice(b);else{if(C||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||j.test(f)||q.test(f)||F.test(f))break;let ee=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(E)&&this.rules.block.lheading.test(`${f}
${E}`)?`    ${B.replace(/^ {0,3}/,``)}`:E;u+=`
`+ee}C=!E.trim(),e=e.substring(w.length+1),f=B.slice(b)}}let P=n.slice(p,i());a.loose||(c?a.loose=!0:this.rules.other.doubleBlankLine.test(P)&&(c=!0)),a.items.push({type:`list_item`,raw:P,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]})}let l=a.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;a.raw=n.slice(0,i()).trimEnd();for(let d of a.items)if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),!a.loose){let u=d.tokens.filter(_=>_.type===`space`);a.loose=u.length>0&&u.some(_=>this.rules.other.anyLine.test(_.raw))}for(let d of a.items){let u=d.tokens[0];if(d.task&&(u?.type===`text`||u?.type===`paragraph`)){d.text=d.text.replace(this.rules.other.listReplaceTask,``),u.raw=u.raw.replace(this.rules.other.listReplaceTask,``),u.text=u.text.replace(this.rules.other.listReplaceTask,``);for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,``);break}let p=this.rules.other.listTaskCheckbox.exec(d.raw);if(p){let _={type:`checkbox`,raw:p[0]+` `,checked:p[0]!==`[ ]`};d.checked=_.checked,a.loose?d.tokens[0]&&[`paragraph`,`text`].includes(d.tokens[0].type)&&`tokens`in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=_.raw+d.tokens[0].raw,d.tokens[0].text=_.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(_)):d.tokens.unshift({type:`paragraph`,raw:_.raw,text:_.raw,tokens:[_]}):d.tokens.unshift(_)}}else d.task&&(d.task=!1)}if(a.loose)for(let d of a.items){d.loose=!0;for(let u of d.tokens)u.type===`text`&&(u.type=`paragraph`)}return a}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=u_(t[0]);return{type:`html`,block:!0,raw:n,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&m_(t[2],`()`)!==-1)return;let n=uo(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:n,raw:zt(t[0],`
`),href:i,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=p_(t[1]),i=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],o={type:`table`,raw:zt(t[0],`
`),header:[],align:[],rows:[]};if(n.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?o.align.push(`right`):this.rules.other.tableAlignCenter.test(a)?o.align.push(`center`):this.rules.other.tableAlignLeft.test(a)?o.align.push(`left`):o.align.push(null);for(let a=0;a<n.length;a++)o.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:o.align[a]});for(let a of r)o.rows.push(p_(a,o.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:o.align[c]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:`heading`,raw:zt(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&h_(e,t[1],n,this.rules))return;let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let a=zt(i.slice(0,-1),`\\`);if((i.length-a.length)%2===0)return}else{let a=m_(t[2],`()`);if(a===-2)return;if(a>-1){let s=(t[0].indexOf(`!`)===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,s).trim(),t[3]=``}}let r=t[2],o=``;if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],o=a[3])}else o=t[3]?t[3].slice(1,-1):``;return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),f_(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,`$1`),title:o&&o.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&h_(e,n[1],i,this.rules))return;let o=t[uo((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!o){let a=n[0].charAt(0);return{type:`text`,raw:a,text:a}}return f_(n,o,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||!i[1]&&!i[2]&&!i[3]&&!i[4])return;let r=i[0][0],o=n===r,a=t.length-e.length,s=a;for(;!this.options.pedantic&&s>0&&t[s-1]===r;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<a&&(n=c);let d=s<a?l:!!this.rules.inline.punctuation.exec(n);if(i[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let u=i[1]||i[3]||``;if(!u||!n||d){let p=[...i[0]].length-1,_,m,f=p,E=0,C=a-s+p,b=!this.options.pedantic&&!!c.trim()&&(!!u||r===`*`&&!l),P=r===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(P.lastIndex=0,t=t.slice(-1*e.length+p);(i=P.exec(t))!==null;){if(_=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!_)continue;if(m=[..._].length,i[3]||i[4]){f+=m;continue}else if(i[5]||i[6]||b){if(o&&(i[5]||i[6]))break;if(C%3&&!((C+m)%3)){E+=m;continue}}if(f-=m,f>0)continue;m=Math.min(m,m+f+E);let U=[...i[0]][0].length,F=e.slice(0,p+i.index+U+m);if(Math.min(p,m)%2){let q=F.slice(1,-1);return{type:`em`,raw:F,text:q,tokens:this.lexer.inlineTokens(q)}}let j=F.slice(2,-2);return{type:`strong`,raw:F,text:j,tokens:this.lexer.inlineTokens(j)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal,` `),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:`codespan`,raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let i=this.rules.inline.delLDelim.exec(e);if(i&&(!i[1]||!n||this.rules.inline.punctuation.exec(n))){let r=[...i[0]].length-1,o,a,s=r,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+r);(i=c.exec(t))!==null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o||(a=[...o].length,a!==r))continue;if(i[3]||i[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let l=[...i[0]][0].length,d=e.slice(0,r+i.index+l+a),u=d.slice(r,-r);return{type:`del`,raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]===`@`?(n=t[1],i=`mailto:`+n):(n=t[1],i=n),{type:`link`,raw:t[0],text:n,href:i,autolink:!0,tokens:[{type:`text`,raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,i;if(t[2]===`@`)n=t[0],i=`mailto:`+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);n=t[0],t[1]===`www.`?i=`http://`+t[0]:i=t[0]}return{type:`link`,raw:t[0],text:n,href:i,autolink:!0,tokens:[{type:`text`,raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:n?t[0]:Lg(t[0]),escaped:n}}}};var dt=class Pa{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||dn,this.options.tokenizer=this.options.tokenizer||new Ln,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:Ne,block:so.normal,inline:Ci.normal};this.options.pedantic?(n.block=so.pedantic,n.inline=Ci.pedantic):this.options.gfm&&(n.block=so.gfm,this.options.breaks?n.inline=Ci.breaks:n.inline=Ci.gfm),this.tokenizer.rules=n}static get rules(){return{block:so,inline:Ci}}static lex(t,n){return new Pa(n).lex(t)}static lexInline(t,n){return new Pa(n).inlineTokens(t)}lex(t){t=t.replace(Ne.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.state.inRawBlock=!1,this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(Ne.tabCharGlobal,`    `).replace(Ne.spaceLine,``));let r=1/0;for(;t;){if(t.length<r)r=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let o;if(this.options.extensions?.block?.some(s=>(o=s.call({lexer:this},t,n))?(t=t.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let s=n.at(-1);o.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let s=n.at(-1);s?.type===`paragraph`||s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+o.raw,s.text+=`
`+o.text,this.inlineQueue.at(-1).src=s.text):n.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let s=n.at(-1);s?.type===`paragraph`||s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+o.raw,s.text+=`
`+o.raw,this.inlineQueue.at(-1).src=s.text):(this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title}),n.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),n.push(o);continue}let a=t;if(this.options.extensions?.startBlock){let s=1/0,c=t.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},c),typeof l==`number`&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(a=t.substring(0,s+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){let s=n.at(-1);i&&s?.type===`paragraph`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(o),i=a.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let s=n.at(-1);s?.type===`text`?(s.raw+=(s.raw.endsWith(`
`)?``:`
`)+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(o);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}linkInText(t){if(!t.includes(`[`))return!1;let n=this.tokenizer.rules.inline.link;for(let i of t.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(i[0])&&t.charAt(i.index-1)!==`!`)return!0;for(let i of t.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let r=i[0],o=r.lastIndexOf(`[`);if(!(r.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,uo(r.slice(o+1,-1))))&&!(o>1&&this.linkInText(r.slice(1,o-1))))return!0}return!1}inlineTokens(t,n=[]){this.tokenizer.lexer=this;let i=this.state.linkParenPossible;this.state.linkParenPossible=i&&t.includes(`)`);try{return this.#e(t,n)}finally{this.state.linkParenPossible=i}}#e(t,n){let i=t.includes(`*`)||t.includes(`_`)||t.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==Ln.prototype.emStrong||this.tokenizer.del!==Ln.prototype.del?this.#t(t):t,r=!1,o=``,a=1/0;for(;t;){if(t.length<a)a=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}r||(o=``),r=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);let l=n.at(-1);s.type===`text`&&l?.type===`text`?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,i,o)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t,i,o)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),n.push(s);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0,d=t.slice(1),u;this.options.extensions.startInline.forEach(p=>{u=p.call({lexer:this},d),typeof u==`number`&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){t=t.substring(s.raw.length),s.raw.slice(-1)!==`_`&&(o=s.raw.slice(-1)),r=!0;let l=n.at(-1);l?.type===`text`?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return n}#t(t){let n=t;if(this.tokens.links&&t.includes(`[`)){let i=this.tokenizer.rules.inline.reflinkSearch,r=o=>{let a=o.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,uo(o.slice(a+1,-1))))return o;if(a>1&&o.charAt(0)!==`!`){let s=o.slice(1,a-1);if(this.linkInText(s))return`[`+s.replace(i,r)+`][`+`a`.repeat(o.length-a-2)+`]`}return`[`+`a`.repeat(o.length-2)+`]`};n=n.replace(i,r)}return n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(i,r,o)=>o?`+`.repeat(i.length):r?r+i.slice(r.length,-r.length).replace(/`/g,`+`)+r:i),n=n.replace(this.tokenizer.rules.inline.blockSkip,(i,r,o)=>{let a=o?o.length:0;return i.slice(0,a)+`[`+`a`.repeat(i.length-a-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n,n}infiniteLoopError(t){let n=`Infinite loop on byte: `+t;if(this.options.silent)console.error(n);else throw new Error(n)}};var mo=class{options;parser;constructor(e){this.options=e||dn}space(e){return``}code({text:e,lang:t,escaped:n}){let i=(t||``).match(Ne.notSpaceStart)?.[0],r=e?e.replace(Ne.endingNewline,``)+`
`:``;return i?`<pre><code class="language-`+Je(i)+`">`+(n?r:Je(r,!0))+`</code></pre>
`:`<pre><code>`+(n?r:Je(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,i=``;for(let a=0;a<e.items.length;a++){let s=e.items[a];i+=this.listitem(s)}let r=t?`ol`:`ul`,o=t&&n!==1?` start="`+n+`"`:``;return`<`+r+o+`>
`+i+`</`+r+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let i=``;for(let r=0;r<e.rows.length;r++){let o=e.rows[r];n=``;for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Je(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:i,autolink:r}){let o=r?Je(n,!0):this.parser.parseInline(i),a=__(e);if(a===null)return o;e=Je(a,r);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Je(t)+`"`),s+=`>`+o+`</a>`,s}image({href:e,title:t,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=__(e);if(r===null)return Je(n);e=r;let o=`<img src="${Je(e)}" alt="${Je(n)}"`;return t&&(o+=` title="${Je(t)}"`),o+=`>`,o}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Je(e.text)}};var ns=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}};var _t=class Na{options;renderer;textRenderer;constructor(t){this.options=t||dn,this.options.renderer=this.options.renderer||new mo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ns,this.textRenderer.parser=this}static parse(t,n){return new Na(n).parse(t)}static parseInline(t,n){return new Na(n).parseInline(t)}parse(t){this.renderer.parser=this;let n=``;for(let i=0;i<t.length;i++){let r=t[i];if(this.options.extensions?.renderers?.[r.type]){let a=r,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(a.type)){n+=s||``;continue}}let o=r;switch(o.type){case`space`:n+=this.renderer.space(o);break;case`hr`:n+=this.renderer.hr(o);break;case`heading`:n+=this.renderer.heading(o);break;case`code`:n+=this.renderer.code(o);break;case`table`:n+=this.renderer.table(o);break;case`blockquote`:n+=this.renderer.blockquote(o);break;case`list`:n+=this.renderer.list(o);break;case`checkbox`:n+=this.renderer.checkbox(o);break;case`html`:n+=this.renderer.html(o);break;case`def`:n+=this.renderer.def(o);break;case`paragraph`:n+=this.renderer.paragraph(o);break;case`text`:n+=this.renderer.text(o);break;default:{let a=`Token with "`+o.type+`" type was not found.`;if(this.options.silent)return console.error(a),``;throw new Error(a)}}}return n}parseInline(t,n=this.renderer){this.renderer.parser=this;let i=``;for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(o.type)){i+=s||``;continue}}let a=o;switch(a.type){case`escape`:i+=n.text(a);break;case`html`:i+=n.html(a);break;case`link`:i+=n.link(a);break;case`image`:i+=n.image(a);break;case`checkbox`:i+=n.checkbox(a);break;case`strong`:i+=n.strong(a);break;case`em`:i+=n.em(a);break;case`codespan`:i+=n.codespan(a);break;case`br`:i+=n.br(a);break;case`del`:i+=n.del(a);break;case`text`:i+=n.text(a);break;default:{let s=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(s),``;throw new Error(s)}}}return i}};var wi=class{options;block;constructor(e){this.options=e||dn}static passThroughHooks=/* @__PURE__ */ new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=/* @__PURE__ */ new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?dt.lex:dt.lexInline}provideParser(e=this.block){return e?_t.parse:_t.parseInline}};function nn(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var Dg=class{defaults=Ka();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_t;Renderer=mo;TextRenderer=ns;Lexer=dt;Tokenizer=Ln;Hooks=wi;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let i of e)switch(nn(n,t.call(this,i)),i.type){case`table`:{let r=i;for(let o of r.header)nn(n,this.walkTokens(o.tokens,t));for(let o of r.rows)for(let a of o)nn(n,this.walkTokens(a.tokens,t));break}case`list`:{let r=i;nn(n,this.walkTokens(r.items,t));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let a=r[o].flat(1/0);nn(n,this.walkTokens(a,t))}):r.tokens&&nn(n,this.walkTokens(r.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let i=U({},n);if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error(`extension name required`);if(`renderer`in r){let o=t.renderers[r.name];o?t.renderers[r.name]=function(...a){let s=r.renderer.apply(this,a);return s===!1&&(s=o.apply(this,a)),s}:t.renderers[r.name]=r.renderer}if(`tokenizer`in r){if(!r.level||r.level!==`block`&&r.level!==`inline`)throw new Error(`extension level must be 'block' or 'inline'`);let o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level===`block`?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level===`inline`&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}`childTokens`in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),n.renderer){let r=this.defaults.renderer||new mo(this.defaults);for(let o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if([`options`,`parser`].includes(o))continue;let a=o,s=n.renderer[a],c=r[a];r[a]=(...l)=>{let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d||``}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new Ln(this.defaults);for(let o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if([`options`,`rules`,`lexer`].includes(o))continue;let a=o,s=n.tokenizer[a],c=r[a];r[a]=(...l)=>{let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new wi;for(let o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if([`options`,`block`].includes(o))continue;let a=o,s=n.hooks[a],c=r[a];wi.passThroughHooks.has(o)?r[a]=l=>{if(r.options.async&&wi.passThroughHooksRespectAsync.has(o))return es$1(this,null,function*(){let u=yield s.call(r,l);return c.call(r,u)});let d=s.call(r,l);return c.call(r,d)}:r[a]=(...l)=>{if(r.options.async)return es$1(this,null,function*(){let u=yield s.apply(r,l);return u===!1&&(u=yield c.apply(r,l)),u});let d=s.apply(r,l);return d===!1&&(d=c.apply(r,l)),d}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,o=n.walkTokens;i.walkTokens=function(a){let s=[];return s.push(o.call(this,a)),r&&nn(s,r.call(this,a)),s}}this.defaults=U(U({},this.defaults),i)}),this}setOptions(e){return this.defaults=U(U({},this.defaults),e),this}lexer(e,t){return dt.lex(e,t??this.defaults)}parser(e,t){return _t.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let i=U({},n),r=U(U({},this.defaults),i),o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return o(/* @__PURE__ */ new Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return o(/* @__PURE__ */ new Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return o(/* @__PURE__ */ new Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(r.hooks&&(r.hooks.options=r,r.hooks.block=e),r.async)return es$1(this,null,function*(){let a=r.hooks?yield r.hooks.preprocess(t):t,s=yield(r.hooks?yield r.hooks.provideLexer(e):e?dt.lex:dt.lexInline)(a,r),c=r.hooks?yield r.hooks.processAllTokens(s):s;r.walkTokens&&(yield Promise.all(this.walkTokens(c,r.walkTokens)));let l=yield(r.hooks?yield r.hooks.provideParser(e):e?_t.parse:_t.parseInline)(c,r);return r.hooks?yield r.hooks.postprocess(l):l}).catch(o);try{r.hooks&&(t=r.hooks.preprocess(t));let a=(r.hooks?r.hooks.provideLexer(e):e?dt.lex:dt.lexInline)(t,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let s=(r.hooks?r.hooks.provideParser(e):e?_t.parse:_t.parseInline)(a,r);return r.hooks&&(s=r.hooks.postprocess(s)),s}catch(a){return o(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i=`<p>An error occurred:</p><pre>`+Je(n.message+``,!0)+`</pre>`;return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}}};var sn=new Dg;function ue(e,t){return sn.parse(e,t)}ue.options=ue.setOptions=function(e){return sn.setOptions(e),ue.defaults=sn.defaults,F_(ue.defaults),ue};ue.getDefaults=Ka;ue.defaults=dn;function Ug(...e){return sn.use(...e),ue.defaults=sn.defaults,F_(ue.defaults),ue}ue.use=Ug;ue.walkTokens=function(e,t){return sn.walkTokens(e,t)};ue.parseInline=sn.parseInline;ue.Parser=_t;ue.parser=_t.parse;ue.Renderer=mo;ue.TextRenderer=ns;ue.Lexer=dt;ue.lexer=dt.lex;ue.Tokenizer=Ln;ue.Hooks=wi;ue.parse=ue;ue.options;ue.setOptions;ue.walkTokens;ue.parseInline;_t.parse;dt.lex;var Q_=[`get`,`put`,`post`,`delete`,`options`,`head`,`patch`,`trace`,`query`];var Bg=[`$request.header`,`$request.query`,`$request.path`,`$request.body`,`$response.header`,`$response.query`,`$response.path`,`$response.body`,`$message.header`,`$message.payload`,`$message.body`,`$sourceDescriptions`,`$components`,`$workflows`,`$outputs`,`$inputs`,`$steps`,`$statusCode`,`$method`,`$url`];var $i={locale:`en`,searchPlaceholder:`Search endpoints...`,copy:`Copy`,copied:`Copied!`,tryItOut:`Try It Out`,execute:`Execute`,response:`Response`,status:`Status`,loading:`Loading...`,error:`Error`,settings:`Settings`,darkMode:`Dark Mode`,language:`Language`,includeImports:`Include Imports`,includeWrapping:`Include Wrapping`,paths:`Paths`,schemas:`Schemas`,parameters:`Parameters`,requestBody:`Request Body (JSON)`,noExampleFor:`No example for`,arrayOf:`Array of:`,tableHeaderProperty:`Property`,tableHeaderType:`Type`,tableHeaderDescription:`Description`,tableHeaderName:`Name`,tableHeaderIn:`In`,termsOfService:`Terms of Service`,contactPrefix:`Contact: `,apiSupport:`API Support`,appearanceHeading:`Appearance`,tocNavLabel:`Table of Contents`,tabCurl:`cURL`,tabSdk:`SDK`,workflowsHeading:`Workflows`,sourceDescriptionsHeading:`Source Descriptions`,workflowInputsHeading:`Workflow Inputs`,workflowOutputsHeading:`Workflow Outputs`,workflowDependsOnHeading:`Prerequisites (dependsOn)`,stepsHeading:`Workflow Steps`,stepParametersHeading:`Step Parameters`,stepRequestBodyHeading:`Step Request Body & Replacements`,successCriteriaHeading:`Success Criteria`,onSuccessHeading:`On Success Actions`,onFailureHeading:`On Failure Actions`,stepOutputsHeading:`Step Outputs`,runWorkflowBtn:`Run Workflow`,arazzoComponentsHeading:`Arazzo Components`,webhooksHeading:`Webhooks`};var oe=Symbol(`NOT_RESOLVED`);function Ue(e,t){return{tagName:e,nodeKind:`scalar`,implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(n=>String(n)),representTagName:t.representTagName??(()=>e)}}function is(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(i=>i),carrierIsResult:n,identify:t.identify,represent:t.represent??(i=>i),representTagName:t.representTagName??(()=>e)}}function bo(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(i=>i),carrierIsResult:n,identify:t.identify,represent:t.represent??(i=>i),representTagName:t.representTagName??(()=>e)}}var zg=Ue(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`});var Gg=[``,`~`,`null`,`Null`,`NULL`];var Fg=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Gg.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>`null`});var Wg=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,t)=>e===`null`||t&&e===``?null:oe,identify:e=>e===null,represent:()=>`null`});var Vg=[``,`~`,`null`,`Null`,`NULL`];var Hg=Ue(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Vg.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>`null`});var Xg=[`true`,`True`,`TRUE`];var qg=[`false`,`False`,`FALSE`];var jg=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>Xg.indexOf(e)!==-1?!0:qg.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Kg=[`true`];var Yg=[`false`];var Qg=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>Kg.indexOf(e)!==-1?!0:Yg.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Zg=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`];var Jg=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`];var eb=Ue(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>Zg.indexOf(e)!==-1?!0:Jg.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var tb=/* @__PURE__ */ new RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);var nb=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function ib(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function rb(e,t){if(t){if(!nb.test(e))return oe}else if(!tb.test(e))return oe;let n=ib(e);return Number.isFinite(n)?n:oe}var Z_=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:rb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var ob=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)$`);var ab=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function sb(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function cb(e,t){if(t){if(!ab.test(e))return oe}else if(!ob.test(e))return oe;let n=sb(e);return Number.isFinite(n)?n:oe}var lb=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:cb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var db=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function _b(e){let t=e.replace(/_/g,``),n=1;if((t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`))return n*parseInt(t.slice(2),2);if(t.startsWith(`0x`))return n*parseInt(t.slice(2),16);if(t.includes(`:`)){let i=0;for(let r of t.split(`:`))i=i*60+Number(r);return n*i}return t!==`0`&&t[0]===`0`?n*parseInt(t,8):n*parseInt(t,10)}function pb(e){if(!db.test(e))return oe;let t=_b(e);return Number.isFinite(t)?t:oe}var Ia=Ue(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:pb,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var ub=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var mb=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function fb(e){if(!ub.test(e))return oe;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===`.nan`)return NaN;let i=n*parseFloat(t);return Number.isFinite(i)||mb.test(e)?i:oe}function hb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var J_=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:fb,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:hb});var gb=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`);var bb=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Eb(e,t){if(t){if(!bb.test(e))return oe;let i=e.toLowerCase(),r=i[0]===`-`?-1:1;if(`+-`.includes(i[0])&&(i=i.slice(1)),i===`.inf`)return r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===`.nan`)return NaN;let o=r*parseFloat(i);return Number.isFinite(o)?o:oe}if(!gb.test(e))return oe;let n=Number(e);return Number.isFinite(n)?n:oe}function yb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Sb=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Eb,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:yb});var vb=/* @__PURE__ */ new RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var xb=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function kb(e){if(!vb.test(e))return oe;let t=e.toLowerCase().replace(/_/g,``),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===`.nan`)return NaN;let i=0;if(t.includes(`:`)){for(let r of t.split(`:`))i=i*60+Number(r);i*=n}else i=n*parseFloat(t);return Number.isFinite(i)||xb.test(e)?i:oe}function Cb(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var Ra=Ue(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:kb,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Cb});var Tb=Ue(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,t)=>e===`<<`||t&&e===``?`<<`:oe,identify:()=>!1});var Ob=/^[A-Za-z0-9+/]*={0,2}$/;function Ab(e){let t=e.replace(/\s/g,``);if(t.length%4!==0||!Ob.test(t))return oe;let n=atob(t),i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}function wb(e){let t=``;for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var Pb=Ue(`tag:yaml.org,2002:binary`,{resolve:Ab,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:wb});var Nb=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`);var Ib=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function g_(e,t,n,i=0,r=0,o=0,a=0){let s=new Date(Date.UTC(e,t,n,i,r,o,a));return s.setUTCFullYear(e,t,n),s}function Rb(e){let t=Nb.exec(e);if(t===null&&(t=Ib.exec(e)),t===null)return oe;let n=+t[1],i=+t[2]-1,r=+t[3];if(!t[4]){let d=g_(n,i,r);return d.getUTCFullYear()!==n||d.getUTCMonth()!==i||d.getUTCDate()!==r?oe:d}let o=+t[4],a=+t[5],s=+t[6],c=0;if(o>23||a>59||s>59)return oe;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+=`0`;c=+d}let l=g_(n,i,r,o,a,s,c);if(l.getUTCFullYear()!==n||l.getUTCMonth()!==i||l.getUTCDate()!==r)return oe;if(t[9]){let d=+t[10],u=+(t[11]||0);if(d>23||u>59)return oe;let p=(d*60+u)*6e4;l.setTime(l.getTime()-(t[9]===`-`?-p:p))}return l}var Mb=Ue(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:Rb,identify:e=>e instanceof Date,represent:e=>e.toISOString()});var Lb=is(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function Eo(e){if(e===null||typeof e!=`object`||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function b_(e,t){let n={};for(let i of t)e[i]!==void 0&&(n[i]=e[i]);return n}var $b=is(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:/* @__PURE__ */ new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return`cannot resolve an ordered map item`;n=t.keys().next().value}else if(Eo(t)){let i=Object.keys(t);if(i.length!==1)return`cannot resolve an ordered map item`;n=i[0]}else return`cannot resolve an ordered map item`;return e.seen.has(n)?`duplicate key in ordered map`:(e.seen.add(n),e.list.push(t),``)},finalize:e=>e.list,identify:()=>!1});var Db=is(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?`cannot resolve a pairs item`:(e.push(t.entries().next().value),``);if(Object.prototype.toString.call(t)!==`[object Object]`)return`cannot resolve a pairs item`;let n=t,i=Object.keys(n);return i.length!==1?`cannot resolve a pairs item`:(e.push([i[0],n[i[0]]]),``)},identify:()=>!1});var Ub=bo(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Eo,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(t!==null&&typeof t==`object`)return`object-based map does not support complex keys`;let i=String(t);return i===`__proto__`?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,``},has:(e,t)=>t!==null&&typeof t==`object`?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var Bb=bo(`tag:yaml.org,2002:set`,{create:()=>/* @__PURE__ */ new Set,identify:e=>e instanceof Set,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of e)t.set(n,null);return t},addPair:(e,t,n)=>n!==null?`cannot resolve a set item`:(e.add(t),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function zb(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function Gb(){return{scalar:[],sequence:[],mapping:[]}}function Fb(e){let t=[];for(let n of e){let i=t.length;for(let r=0;r<t.length;r++){let o=t[r];if(o.nodeKind===n.nodeKind&&o.tagName===n.tagName&&o.matchByTagPrefix===n.matchByTagPrefix){i=r;break}}t[i]=n}return t}var yo=class ep{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(t){let n=Fb(t),i=[],r=zb(),o=Gb();for(let d of n){if(d.nodeKind===`scalar`&&d.implicit){if(d.matchByTagPrefix)throw new Error(`Implicit scalar tags cannot match by tag prefix`);i.push(d)}switch(d.nodeKind){case`scalar`:d.matchByTagPrefix?o.scalar.push(d):r.scalar[d.tagName]=d;break;case`sequence`:d.matchByTagPrefix?o.sequence.push(d):r.sequence[d.tagName]=d;break;case`mapping`:d.matchByTagPrefix?o.mapping.push(d):r.mapping[d.tagName]=d}}let a=i.filter(d=>d.implicitFirstChars===null),s=/* @__PURE__ */ new Set;for(let d of i)if(d.implicitFirstChars!==null)for(let u of d.implicitFirstChars)s.add(u);let c=/* @__PURE__ */ new Map;for(let d of s)c.set(d,i.filter(u=>u.implicitFirstChars===null||u.implicitFirstChars.indexOf(d)!==-1));let l=r.scalar[`tag:yaml.org,2002:str`];if(!l)throw new Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=n,this.implicitScalarTags=i,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=l,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=o}lookupScalarTag(t){let n=this.exact.scalar[t];if(n)return n;for(let i of this.prefix.scalar)if(t.startsWith(i.tagName))return i}lookupSequenceTag(t){let n=this.exact.sequence[t];if(n)return n;for(let i of this.prefix.sequence)if(t.startsWith(i.tagName))return i}lookupMappingTag(t){let n=this.exact.mapping[t];if(n)return n;for(let i of this.prefix.mapping)if(t.startsWith(i.tagName))return i}resolveImplicitScalarTag(t){let n=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(let r of n){let o=r.resolve(t,!1,r.tagName);if(o!==oe)return{value:o,tag:r}}let i=this.defaultScalarTag;return{value:i.resolve(t,!1,i.tagName),tag:i}}withTags(...t){let n=[];for(let i of t)n=n.concat(i);return new ep([...this.tags,...n])}};var rs=new yo([zg,Lb,Ub]);new yo([...rs.tags,Wg,Qg,lb,Sb]);var Wb=new yo([...rs.tags,Fg,jg,Z_,J_]);var Hb=new yo([...rs.tags,Hg,eb,Ia,Ra,Mb,Tb,Pb,$b,Db,Bb]).withTags(W$1(U({},Ia),{resolve:(e,t,n)=>{let i=Ia.resolve(e,t,n);return i===oe?Z_.resolve(e,t,n):i}}),W$1(U({},Ra),{resolve:(e,t,n)=>{let i=Ra.resolve(e,t,n);return i===oe?J_.resolve(e,t,n):i}}));bo(`tag:yaml.org,2002:map`,{create:()=>/* @__PURE__ */ new Map,addPair:(e,t,n)=>(e.set(t,n),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||Eo(e),represent:e=>{if(e instanceof Map)return e;let t=/* @__PURE__ */ new Map,n=e;for(let i of Object.keys(n))t.set(i,n[i]);return t}});function E_(e){if(Array.isArray(e)){let t=Array.prototype.slice.call(e);for(let n=0;n<t.length;n++){if(Array.isArray(t[n]))return null;typeof t[n]==`object`&&Object.prototype.toString.call(t[n])===`[object Object]`&&(t[n]=`[object Object]`)}return String(t)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}bo(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Eo,represent:e=>{let t=/* @__PURE__ */ new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{let i=E_(t);return i===null?`nested arrays are not supported inside keys`:(i===`__proto__`?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,``)},has:(e,t)=>{let n=E_(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>{let n=String(t);return Object.prototype.hasOwnProperty.call(e,n)?e[n]:null}});var Xb={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function ya(e,t,n,i,r){let o=``,a=``,s=Math.floor(r/2)-1;return i-t>s&&(o=` ... `,t=i-s+o.length),n-i>s&&(a=` ...`,n=i+s-a.length),{str:o+e.slice(t,n).replace(/\t/g,`→`)+a,pos:i-t+o.length}}function Sa(e,t){return` `.repeat(Math.max(t-e.length,0))+e}function qb(e,t){if(!e.buffer)return null;let n=U(U({},Xb),t),i=/\r?\n|\r|\0/g,r=[0],o=[],a,s=-1;for(;a=i.exec(e.buffer);)o.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);let c=``,l=Math.min(e.line+n.linesAfter,o.length).toString().length,d=n.maxLength-(n.indent+l+3);for(let p=1;p<=n.linesBefore&&!(s-p<0);p++){let _=ya(e.buffer,r[s-p],o[s-p],e.position-(r[s]-r[s-p]),d);c=`${` `.repeat(n.indent)}${Sa((e.line-p+1).toString(),l)} | ${_.str}
${c}`}let u=ya(e.buffer,r[s],o[s],e.position,d);c+=`${` `.repeat(n.indent)}${Sa((e.line+1).toString(),l)} | ${u.str}
`,c+=`${`-`.repeat(n.indent+l+3+u.pos)}^
`;for(let p=1;p<=n.linesAfter&&!(s+p>=o.length);p++){let _=ya(e.buffer,r[s+p],o[s+p],e.position-(r[s]-r[s+p]),d);c+=`${` `.repeat(n.indent)}${Sa((e.line+p+1).toString(),l)} | ${_.str}
`}return c.replace(/\n$/,``)}function y_(e,t){let n=``;return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`

${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var cn=class tp extends Error{reason;mark;constructor(t,n){super(),this.name=`YAMLException`,this.reason=t,this.mark=n,this.message=y_(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(t){return`${this.name}: ${y_(this,t)}`}static throwAt(t,n,i,r=``){let o=0,a=0;for(let c=0;c<n;c++){let l=t.charCodeAt(c);l===10?(o++,a=c+1):l===13&&(o++,t.charCodeAt(c+1)===10&&c++,a=c+1)}let s={name:r,buffer:t,position:n,line:o,column:n-a};throw s.snippet=qb(s),new tp(i,s)}};var Se={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6};var te={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5};var Gt={BLOCK:1,FLOW:2};var et={CLIP:1,STRIP:2,KEEP:3};var jb=-1;function S_(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var np=new Array(256);var ip=new Array(256);for(let e=0;e<256;e++)np[e]=S_(e)?1:0,ip[e]=S_(e);function Kb(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Yb(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function Qb(e){return e===120?2:e===117?4:8}function fo(e,t,n){let i=0;for(;t<n;){let r=e.charCodeAt(t);if(r===10)i++,t++;else if(r===13)i++,t++,e.charCodeAt(t)===10&&t++;else if(r===32||r===9)t++;else break}return{position:t,breaks:i}}function os(e){return e===1?` `:`
`.repeat(e-1)}function Zb(e,t,n){let i=``,r=t,o=t,a=t;for(;r<n;){let s=e.charCodeAt(r);if(s===10||s===13){i+=e.slice(o,a);let c=fo(e,r,n);i+=os(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,a)}function Jb(e,t,n){let i=``,r=t,o=t,a=t;for(;r<n;){let s=e.charCodeAt(r);if(s===39)i+=e.slice(o,r)+`'`,r+=2,o=a=r;else if(s===10||s===13){i+=e.slice(o,a);let c=fo(e,r,n);i+=os(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,n)}function e0(e,t,n){let i=``,r=t,o=t,a=t;for(;r<n;){let s=e.charCodeAt(r);if(s===92){i+=e.slice(o,r),r++;let c=e.charCodeAt(r);if(c===10||c===13)r=fo(e,r,n).position;else if(c<256&&np[c])i+=ip[c],r++;else{let l=Qb(c),d=0;for(;l>0;l--){r++;let u=Yb(e.charCodeAt(r));d=(d<<4)+u}i+=Kb(d),r++}o=a=r}else if(s===10||s===13){i+=e.slice(o,a);let c=fo(e,r,n);i+=os(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,n)}function v_(e,t,n,i,r,o){let a=i<0?0:i,s=e.slice(t,n).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),l=``,d=!1,u=0,p=!1;for(let _ of c){let m=0;for(;m<a&&_.charCodeAt(m)===32;)m++;if(i<0||m>=_.length){u++;continue}let f=_.slice(a),E=f.charCodeAt(0);o?E===32||E===9?(p=!0,l+=`
`.repeat(d?1+u:u)):p?(p=!1,l+=`
`.repeat(u+1)):u===0?d&&(l+=` `):l+=`
`.repeat(u):l+=`
`.repeat(d?1+u:u),l+=f,d=!0,u=0}return r===et.KEEP?l+=`
`.repeat(d?1+u:u):r!==et.STRIP&&d&&(l+=`
`),l}function t0(e,t){if(t.valueStart===jb)return``;let{valueStart:n,valueEnd:i}=t;if(t.fast)return e.slice(n,i);switch(t.style){case te.SINGLE_QUOTED:return Jb(e,n,i);case te.DOUBLE_QUOTED:return e0(e,n,i);case te.LITERAL_BLOCK:return v_(e,n,i,t.indent,t.chomping,!1);case te.FOLDED_BLOCK:return v_(e,n,i,t.indent,t.chomping,!0);default:return Zb(e,n,i)}}var n0=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});function va(e){let t=``,n=0;for(;n<e.length;){if(e.charCodeAt(n)!==37){t+=e[n++];continue}let i=parseInt(e.slice(n+1,n+3),16);if(n+=3,i>=192){let r=i<224?1:i<240?2:3;for(i&=(1<<6-r)-1;r-->0;)i=i<<6|parseInt(e.slice(n+1,n+3),16)&63,n+=3}i<65536?t+=String.fromCharCode(i):(i-=65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023))}return t}function rp(e,t){if(e.startsWith(`!<`)&&e.endsWith(`>`))return va(e.slice(2,-1));let n=e.indexOf(`!`,1),i=n===-1?`!`:e.slice(0,n+1);return va(t?.[i]??n0[i]??i)+va(e.slice(i.length))}var $n=-1;var r0=`tag:yaml.org,2002:merge`;var as={filename:``,schema:Wb,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function o0(e){return`tagStart`in e&&e.tagStart!==$n?e.tagStart:`anchorStart`in e&&e.anchorStart!==$n?e.anchorStart:`valueStart`in e&&e.valueStart!==$n?e.valueStart:`start`in e?e.start:0}function Re(e,t){cn.throwAt(e.source,e.position,t,e.filename)}function op(e,t,n,i){try{return n.finalize(i)}catch(r){if(r instanceof cn)throw r;cn.throwAt(e.source,t,r instanceof Error?r.message:String(r),e.filename)}}function a0(e,t){let n=t0(e.source,t),i=t.tagStart===$n?``:e.source.slice(t.tagStart,t.tagEnd),r=e.schema.defaultScalarTag;if(i!==``){if(i===`!`)return{value:n,tag:r};let o=rp(i,e.tagHandlers),a=e.schema.lookupScalarTag(o);if(a){let c=a.resolve(n,!0,o);return c===oe&&Re(e,`cannot resolve a node with !<${o}> explicit tag`),{value:c,tag:a}}let s=e.schema.lookupMappingTag(o)??e.schema.lookupSequenceTag(o);if(s){n!==``&&Re(e,`cannot resolve a node with !<${o}> explicit tag`);let c=s.create(o);return{value:s.carrierIsResult?c:op(e,e.position,s,c),tag:s}}Re(e,`unknown scalar tag !<${o}>`)}return t.style===te.PLAIN?e.schema.resolveImplicitScalarTag(n):{value:r.resolve(n,!1,r.tagName),tag:r}}function x_(e,t,n){let i=t.tagStart===$n?``:e.source.slice(t.tagStart,t.tagEnd);return i===``||i===`!`?n:rp(i,e.tagHandlers)}function ap(e){return e.nodeKind===`mapping`}function k_(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Re(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function C_(e,t,n,i){k_(e);for(let r of i.keys(n)){if(k_(e),t.tag.has(t.value,r))continue;let o=t.tag.addPair(t.value,r,i.get(n,r));o&&Re(e,o),t.overridable??=/* @__PURE__ */ new Set,t.overridable.add(r)}}function s0(e,t,n,i){if(e.position=t.keyPosition,ap(i))C_(e,t,n,i);else if(i.nodeKind===`sequence`&&Array.isArray(n)){n.length>100&&Re(e,`abnormal merge sequence size`);for(let r of n){let o=e.nodeTags.get(r);o||Re(e,`cannot merge mappings; the provided source object is unacceptable`),C_(e,t,r,o)}}else Re(e,`cannot merge mappings; the provided source object is unacceptable`)}function c0(e,t,n,i,r){if(e.position=t.keyPosition,t.keyIsMerge){s0(e,t,i,r);return}!e.json&&t.tag.has(t.value,n)&&!t.overridable?.has(n)&&Re(e,`duplicated mapping key`);let o=t.tag.addPair(t.value,n,i);o&&Re(e,o),t.overridable?.delete(n)}function xa(e,t,n){let i=e.frames[e.frames.length-1];if(i.kind===`document`)i.value=t,i.hasValue=!0;else if(i.kind===`sequence`){ap(n)&&e.nodeTags.set(t,n);let r=i.tag.addItem(i.value,t,i.index++);r&&Re(e,r)}else if(i.hasKey){let r=i.key;i.key=void 0,i.hasKey=!1,c0(e,i,r,t,n)}else i.key=t,i.keyPosition=e.position,i.hasKey=!0,i.keyIsMerge=n.tagName===r0}function ka(e,t,n,i,r){if(t.anchorStart!==$n){let o={value:n,tag:i,isValueFinal:r};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),o),o}return null}function l0(e,t){let n=W$1(U(U({},as),t),{events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:/* @__PURE__ */ new Map,nodeTags:/* @__PURE__ */ new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0});for(;n.eventIndex<n.events.length;){let i=n.events[n.eventIndex++];switch(n.position=o0(i),i.type){case Se.DOCUMENT:n.anchors=/* @__PURE__ */ new Map,n.nodeTags=/* @__PURE__ */ new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(let r of i.directives)r.kind===`tag`&&(n.tagHandlers[r.handle]=r.prefix);n.frames.push({kind:`document`,position:n.position,value:void 0,hasValue:!1});break;case Se.SCALAR:{let{value:r,tag:o}=a0(n,i);ka(n,i,r,o,!0),xa(n,r,o);break}case Se.SEQUENCE:{let r=x_(n,i,`tag:yaml.org,2002:seq`),o=n.schema.lookupSequenceTag(r);o||Re(n,`unknown sequence tag !<${r}>`);let a=o.create(r),s=ka(n,i,a,o,o.carrierIsResult);n.frames.push({kind:`sequence`,position:n.position,value:a,tag:o,anchor:s,index:0});break}case Se.MAPPING:{let r=x_(n,i,`tag:yaml.org,2002:map`),o=n.schema.lookupMappingTag(r);o||Re(n,`unknown mapping tag !<${r}>`);let a=o.create(r),s=ka(n,i,a,o,o.carrierIsResult);n.frames.push({kind:`mapping`,position:n.position,value:a,tag:o,anchor:s,key:void 0,keyPosition:n.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Se.ALIAS:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&Re(n,`aliases exceeded maxAliases (${n.maxAliases})`);let r=n.source.slice(i.anchorStart,i.anchorEnd),o=n.anchors.get(r);o||Re(n,`unidentified alias "${r}"`),o.isValueFinal||Re(n,`recursive alias "${r}" is not supported for tag ${o.tag.tagName} because it uses finalize()`),xa(n,o.value,o.tag);break}case Se.POP:{let r=n.frames.pop();if(r.kind===`mapping`&&r.hasKey&&(n.position=r.keyPosition,Re(n,`incomplete mapping pair in event stream`)),r.kind===`document`)n.documents.push(r.value);else{let o=r.tag.carrierIsResult?r.value:op(n,r.position,r.tag,r.value);r.anchor&&(r.anchor.value=o,r.anchor.isValueFinal=!0),xa(n,o,r.tag)}break}}}return n.documents}var se=-1;var sp=Object.prototype.hasOwnProperty;var zn=1;var cp=2;var lp=3;var ho=4;var d0=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var _0=/[,\[\]{}]/;var dp=/^(?:!|!!|![0-9A-Za-z-]+!)$/;var Ma=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`;var _p=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;var p0=new RegExp(`^(?:${Ma})*$`);var u0=new RegExp(`^(?:${_p})+$`);var m0=new RegExp(`^(?:!(?:${Ma})*|${_p}(?:${Ma})*)$`);var ss={filename:``,maxDepth:100};function f0(e,t,n){e.events.push({type:Se.DOCUMENT,explicitStart:t,explicitEnd:n,directives:e.directives})}function pp(e,t,n,i,r,o,a){e.events.push({type:Se.SEQUENCE,start:t,anchorStart:n,anchorEnd:i,tagStart:r,tagEnd:o,style:a})}function up(e,t,n,i,r,o,a){e.events.push({type:Se.MAPPING,start:t,anchorStart:n,anchorEnd:i,tagStart:r,tagEnd:o,style:a})}function T_(e,t){e.events.splice(t.eventsLength,0,{type:Se.MAPPING,start:t.position,anchorStart:se,anchorEnd:se,tagStart:se,tagEnd:se,style:Gt.FLOW})}function Vn(e,t,n,i,r,o,a,s,c=et.CLIP,l=-1,d=!1){e.events.push({type:Se.SCALAR,valueStart:t,valueEnd:n,anchorStart:i,anchorEnd:r,tagStart:o,tagEnd:a,style:s,chomping:c,indent:l,fast:d})}function h0(e,t,n){e.events.push({type:Se.ALIAS,anchorStart:t,anchorEnd:n})}function Dn(e){e.events.push({type:Se.POP})}function Ge(e){Vn(e,se,se,se,se,se,se,te.PLAIN)}function O_(){return{anchorStart:se,anchorEnd:se,tagStart:se,tagEnd:se}}function Un(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Bn(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function W(e,t){cn.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Pe(e){return e===10||e===13}function Hn(e){return e===9||e===32}function ut(e){return Hn(e)||Pe(e)}function Ct(e){return e===0||ut(e)}function ln(e){return e===44||e===91||e===93||e===123||e===125}function g0(e){return e>=48&&e<=57?e-48:-1}function b0(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function E0(e){return e===120?2:e===117?4:e===85?8:0}function y0(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function go(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function $e(e,t){let n=0,i=e.input.charCodeAt(e.position),r=e.position===e.lineStart||ut(e.input.charCodeAt(e.position-1));for(;i!==0;){for(;Hn(i);)r=!0,i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&r&&i===35)do i=e.input.charCodeAt(++e.position);while(!Pe(i)&&i!==0);if(!Pe(i))break;for(go(e),n++,r=!0,i=e.input.charCodeAt(e.position);i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return n}function Gn(e,t=e.position){let n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){let i=e.input.charCodeAt(t+3);return i===0||ut(i)}return!1}function mp(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function cs(e){if(e.position!==e.lineStart)return!1;if(Gn(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;let t=Un(e);mp(e),$e(e,!0);let n=e.input.charCodeAt(e.position),i=e.position===e.lineStart&&(n===37||n===45&&Gn(e));return Bn(e,t),i}function A_(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Pe(t);)t=e.input.charCodeAt(++e.position)}function fp(e,t,n){let i=d0.exec(e.input.slice(t,n));i!==null&&(e.position=t+i.index+i[0].length-1,W(e,`the stream contains non-printable characters`))}function S0(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==se&&W(e,`duplication of a tag property`);let i=e.position,r=!1,o=!1,a=`!`,s=e.input.charCodeAt(++e.position);s===60?(r=!0,s=e.input.charCodeAt(++e.position)):s===33&&(o=!0,a=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,l;if(r){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&W(e,`unexpected end of the stream within a verbatim tag`),l=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!ut(s)&&!(n&&ln(s));)s===33&&(o?W(e,`tag suffix cannot contain exclamation marks`):(a=e.input.slice(c-1,e.position+1),dp.test(a)||W(e,`named tag handle cannot contain such characters`),o=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(c,e.position),_0.test(l)&&W(e,`tag suffix cannot contain flow indicator characters`)}return l&&!(r?p0.test(l):u0.test(l))&&W(e,`tag name cannot contain such characters: ${l}`),!r&&a!==`!`&&a!==`!!`&&!sp.call(e.tagHandlers,a)&&W(e,`undeclared tag handle "${a}"`),t.tagStart=i,t.tagEnd=e.position,!0}function v0(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==se&&W(e,`duplication of an anchor property`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position))&&!ln(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&W(e,`name of an anchor node must contain at least one character`),t.anchorStart=n,t.anchorEnd=e.position,!0}function x0(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==se||t.tagStart!==se)&&W(e,`alias node should not have any properties`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position))&&!ln(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&W(e,`name of an alias node must contain at least one character`),h0(e,n,e.position),!0}function La(e,t){$e(e,!1),e.lineIndent<t&&W(e,`deficient indentation`)}function k0(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let o=e.input.charCodeAt(e.position);if(o===39){if(e.input.charCodeAt(e.position+1)===39){r=!1,e.position+=2;continue}let a=e.position;return e.position++,Vn(e,i,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,te.SINGLE_QUOTED,et.CLIP,-1,r),!0}Pe(o)?(r=!1,La(e,t)):e.position===e.lineStart&&Gn(e)?W(e,`unexpected end of the document within a single quoted scalar`):o!==9&&o<32?W(e,`expected valid JSON character`):e.position++}W(e,`unexpected end of the stream within a single quoted scalar`)}function C0(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let o=e.input.charCodeAt(e.position);if(o===34){let a=e.position;return e.position++,Vn(e,i,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,te.DOUBLE_QUOTED,et.CLIP,-1,r),!0}if(o===92){r=!1;let a=e.input.charCodeAt(++e.position);if(Pe(a))La(e,t);else if(y0(a))e.position++;else{let s=E0(a);for(s===0&&W(e,`unknown escape sequence`);s-->0;)e.position++,b0(e.input.charCodeAt(e.position))<0&&W(e,`expected hexadecimal character`);e.position++}}else Pe(o)?(r=!1,La(e,t)):e.position===e.lineStart&&Gn(e)?W(e,`unexpected end of the document within a double quoted scalar`):o!==9&&o<32?W(e,`expected valid JSON character`):e.position++}W(e,`unexpected end of the stream within a double quoted scalar`)}function T0(e,t,n){let i=e.input.charCodeAt(e.position),r=et.CLIP,o=-1,a=!1;if(i!==124&&i!==62)return!1;let s=i===124?te.LITERAL_BLOCK:te.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let _=e.input.charCodeAt(e.position),m=g0(_);if(_===43||_===45)r!==et.CLIP&&W(e,`repeat of a chomping mode identifier`),r=_===43?et.KEEP:et.STRIP,e.position++;else if(m>=0)m===0&&W(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),a&&W(e,`repeat of an indentation width identifier`),o=t+m-1,a=!0,e.position++;else break}let c=!1;for(;Hn(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&A_(e),Pe(e.input.charCodeAt(e.position))?go(e):e.input.charCodeAt(e.position)!==0&&W(e,`a line break is expected`);let l=a?o:-1,d=0,u=e.position,p=e.position;for(;e.input.charCodeAt(e.position)!==0;){let _=e.position,m=0;for(;e.input.charCodeAt(_+m)===32;)m++;let f=e.input.charCodeAt(_+m);if(f===0){l>=0?m>l&&(p=_+m):m>0&&(p=_+m);break}if(cs(e))break;if(!a&&l===-1&&Pe(f)&&(d=Math.max(d,m)),!a&&l===-1&&!Pe(f)&&(f===9&&m<t&&(e.position=_+m,W(e,`tab characters must not be used in indentation`)),m>=t&&m<d&&(e.position=_+m,W(e,`bad indentation of a mapping entry`))),l===-1&&f!==0&&!Pe(f)&&m<t){e.lineIndent=m,e.position=_+m;break}!a&&f!==0&&!Pe(f)&&l===-1&&(l=m);let E=l===-1?t+1:l;if(f!==0&&!Pe(f)&&m<E){e.lineIndent=m,e.position=_+m;break}A_(e),p=e.position,Pe(e.input.charCodeAt(e.position))&&(go(e),p=e.position)}return fp(e,u,p),Vn(e,u,p,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,s,r,l),!0}function O0(e,t){let n=e.input.charCodeAt(e.position),i=t===zn;if(n===0||ut(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||ln(n))return!1;if(n===63||n===45){let r=e.input.charCodeAt(e.position+1);if(Ct(r)||i&&ln(r))return!1}return!0}function A0(e,t,n,i){if(!O0(e,n))return!1;let r=e.position,o=e.position,a=e.input.charCodeAt(e.position),s=n===zn,c=!1;for(;a!==0&&!cs(e);){if(a===58){let l=e.input.charCodeAt(e.position+1);if(Ct(l)||s&&ln(l))break}else if(a===35){if(ut(e.input.charCodeAt(e.position-1)))break}else{if(s&&ln(a))break;if(Pe(a)){let l=e.position,d=e.line,u=e.lineStart,p=e.lineIndent;if($e(e,!1),e.lineIndent>=t){c=!0,a=e.input.charCodeAt(e.position);continue}e.position=l,e.line=d,e.lineStart=u,e.lineIndent=p;break}}Hn(a)||(o=e.position+1),a=e.input.charCodeAt(++e.position)}return o===r?!1:(fp(e,r,o),Vn(e,r,o,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,te.PLAIN,et.CLIP,-1,!c),!0)}function Ti(e,t){let n=e.line;$e(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&W(e,`deficient indentation`)}function w0(e,t,n){let i=e.input.charCodeAt(e.position),r=i===123,o=e.position,a=!0;if(i!==91&&i!==123)return!1;let s=r?125:93;for(r?up(e,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.FLOW):pp(e,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Ti(e,t);let c=e.input.charCodeAt(e.position);if(c===s)return e.position++,Dn(e),!0;a?c===44&&W(e,`expected the node content, but found ','`):W(e,`missed comma between flow collection entries`);let l=!1,d=!1;c===63&&ut(e.input.charCodeAt(e.position+1))&&(l=d=!0,e.position+=1,Ti(e,t));let u=e.line,p=Un(e),_=Fn(e,t,zn,!1,!0);Ti(e,t),c=e.input.charCodeAt(e.position),(r||d||e.line===u)&&c===58?(l=!0,e.position++,Ti(e,t),r||T_(e,p),_||Ge(e),Fn(e,t,zn,!1,!0)||Ge(e),Ti(e,t),r||Dn(e)):r&&l?(_||Ge(e),Ge(e)):r?Ge(e):l&&(T_(e,p),_||Ge(e),Ge(e),Dn(e)),c=e.input.charCodeAt(e.position),c===44?(a=!0,e.position++):a=!1}W(e,`unexpected end of the stream within a flow collection`)}function w_(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Ct(e.input.charCodeAt(e.position+1)))return!1;for(pp(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Gt.BLOCK);e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,W(e,`tab characters must not be used in indentation`));let i=e.line;e.position++;let r=$e(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1))&&W(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=t?Ge(e):Fn(e,t,lp,!1,!0),$e(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&W(e,`bad indentation of a sequence entry`),e.line===i&&e.input.charCodeAt(e.position)===45&&Ct(e.input.charCodeAt(e.position+1))&&W(e,`bad indentation of a sequence entry`)}return Dn(e),!0}function Ca(e,t,n,i){let r=!1,o=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!r&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,W(e,`tab characters must not be used in indentation`));let l=e.input.charCodeAt(e.position+1),d=e.line;if((c===63||c===58)&&Ct(l))a||(up(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,Gt.BLOCK),a=!0),c===63?(r&&Ge(e),o=!0,r=!0):(r||(Ge(e),o=!0),r=!1),e.position+=1,s=!0;else{r&&(Ge(e),r=!1);let u=Un(e);if(!Fn(e,n,cp,!1,!0))break;if(e.line===d){for(c=e.input.charCodeAt(e.position);Hn(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),Ct(c)||W(e,`a whitespace character is expected after the key-value separator within a block mapping`),a||(e.events.splice(u.eventsLength,0,{type:Se.MAPPING,start:u.position,anchorStart:i.anchorStart,anchorEnd:i.anchorEnd,tagStart:i.tagStart,tagEnd:i.tagEnd,style:Gt.BLOCK}),a=!0),o=!0,r=!1,s=!1;else if(o)W(e,`expected ':' after a mapping key`);else return i.anchorStart!==se||i.tagStart!==se?(Bn(e,u),!1):!0}else if(o)W(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return i.anchorStart!==se||i.tagStart!==se?(Bn(e,u),!1):!0}if(Fn(e,t,ho,!0,s)&&(s=!1),r||s&&(Ge(e),s=!1),$e(e,!0),c=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&c!==0)W(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return o?(r&&Ge(e),a&&Dn(e),!0):!1}function Fn(e,t,n,i,r,o=!0){e.depth>=e.maxDepth&&W(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,c=!1,l=null,d=O_(),u=n===ho||n===lp,p=u,_=u;if(i&&$e(e,!0)&&(s=!0,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1),a===1)for(;;){let m=e.input.charCodeAt(e.position),f=Un(e);if(s&&a!==1&&(m===33||m===38))break;if(s&&_&&(d.tagStart!==se||d.anchorStart!==se)&&(m===33||m===38)){let E=Un(e),C=t+1;if(Ca(e,e.position-e.lineStart,C,d)&&e.events[E.eventsLength]?.type===Se.MAPPING)return e.depth--,!0;Bn(e,E)}if(s&&(m===33&&d.tagStart!==se||m===38&&d.anchorStart!==se)||!S0(e,d,n===zn)&&!v0(e,d))break;l===null&&(l=f),$e(e,!0)?(s=!0,p=_,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1):p=!1}if(p&&(p=s||r),a===1||n===ho){let m=n===zn||n===cp?t:t+1,f=e.position-e.lineStart;if(a===1)if(p&&(w_(e,f,d)||Ca(e,f,m,d))||w0(e,m,d))c=!0;else{let E=e.input.charCodeAt(e.position);if(l!==null&&o&&_&&!p&&E!==124&&E!==62){let C=Un(e),b=l.position-l.lineStart;Bn(e,l),Ca(e,b,m,O_())&&e.events[C.eventsLength]?.type===Se.MAPPING?c=!0:Bn(e,C)}!c&&(u&&T0(e,m,d)||k0(e,m,d)||C0(e,m,d)||x0(e,d)||A0(e,m,n,d))&&(c=!0)}else a===0&&(c=p&&w_(e,f,d))}return u=u&&!c,!c&&(d.anchorStart!==se||d.tagStart!==se||u)&&(Vn(e,se,se,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,te.PLAIN),c=!0),e.depth--,c||d.anchorStart!==se||d.tagStart!==se}function P0(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position));)e.position++;let n=e.input.slice(t,e.position),i=[];for(n.length===0&&W(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!Pe(e.input.charCodeAt(e.position));){for(;Hn(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Pe(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let r=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ut(e.input.charCodeAt(e.position));)e.position++;i.push(e.input.slice(r,e.position))}if(Pe(e.input.charCodeAt(e.position))&&go(e),n===`YAML`){e.directives.some(o=>o.kind===`yaml`)&&W(e,`duplication of %YAML directive`),i.length!==1&&W(e,`YAML directive accepts exactly one argument`);let r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]);r===null&&W(e,`ill-formed argument of the YAML directive`),parseInt(r[1],10)!==1&&W(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:i[0]})}else if(n===`TAG`){i.length!==2&&W(e,`TAG directive accepts exactly two arguments`);let[r,o]=i;dp.test(r)||W(e,`ill-formed tag handle (first argument) of the TAG directive`),sp.call(e.tagHandlers,r)&&W(e,`there is a previously declared suffix for "${r}" tag handle`),m0.test(o)||W(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[r]=o,e.directives.push({kind:`tag`,handle:r,prefix:o})}return!0}function N0(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for($e(e,!0);P0(e);)t=!0,$e(e,!0);let n=!1,i=!1,r=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Ct(e.input.charCodeAt(e.position+3))){n=!0;let s=e.line;e.position+=3,$e(e,!0),r=e.line>s}else t&&W(e,`directives end mark is expected`);let o=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Gn(e)){e.position+=3,$e(e,!0);return}if(f0(e,n,!1),Fn(e,e.lineIndent-1,ho,!1,r,r)||Ge(e),$e(e,!0),e.position===e.lineStart&&Gn(e)&&(i=e.input.charCodeAt(e.position)===46,i)){let s=e.line;e.position+=3,$e(e,!0),e.line===s&&e.position<e.length&&W(e,`end of the stream or a document separator is expected`)}let a=e.events[o];a?.type===Se.DOCUMENT&&(a.explicitEnd=i),Dn(e),!i&&e.position<e.length&&!cs(e)&&W(e,`end of the stream or a document separator is expected`)}function I0(e,t){let n=e.length,i=W$1(U(U({},ss),t),{input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]}),r=e.indexOf(`\0`);for(r!==-1&&cn.throwAt(e,r,`null byte is not allowed in input`,i.filename);i.position<i.length&&(mp(i),$e(i,!0),!(i.position>=i.length));){let o=i.position;N0(i),i.position===o&&W(i,`can not read a document`)}return i.events}var R0=U(U({},ss),as);function M0(e,t={}){let n=U(U({},R0),t),i=String(e),r=Object.keys(ss),o=Object.keys(as);return l0(I0(i,b_(n,r)),W$1(U({},b_(n,o)),{source:i}))}function hp(e,t){let n=M0(e,t);if(n.length===0)throw new cn(`expected a document, but the input is empty`);if(n.length===1)return n[0];throw new cn(`expected a single document in the stream, but found more`)}function So(e,t){return(e&1<<t)!==0}var P_={applyQuoteFlowKeysOption:L0,doubleQuoteForInvisibles:$0,doubleQuoteWhitespaceOnly:D0,applyForceQuotesOption:U0,tryLongOrMultilineAsBlock:B0,quoteInvalidPlain:z0,fallbackToDoubleQuoted:G0};function gp(e){return e.presenterOptions.quoteStyle===`single`&&So(e.allowedStylesMask,te.SINGLE_QUOTED)?te.SINGLE_QUOTED:te.DOUBLE_QUOTED}function L0(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==te.PLAIN||(e.style=te.DOUBLE_QUOTED))}function $0(e){e.style===te.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=te.DOUBLE_QUOTED)}function D0(e){e.style===te.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=te.DOUBLE_QUOTED)}function U0(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==te.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?te.DOUBLE_QUOTED:gp(e)))}function B0(e){if(e.style!==te.PLAIN||e.isKey)return;let t=e.node.value,n=t.indexOf(`
`)!==-1;if(!So(e.allowedStylesMask,te.LITERAL_BLOCK)){n&&(e.style=te.DOUBLE_QUOTED);return}let i=e.presenterOptions.lineWidth;if(i===-1){n&&(e.style=te.LITERAL_BLOCK);return}let r=Math.max(Math.min(i,40),i-e.shiftOfContent),o=0,a=!1;for(;o<=t.length;){let s=t.length,c=t.indexOf(`
`,o);c!==-1&&(s=c);let l=t.slice(o,s);if(l.length>r&&l[0]!==` `&&/ [^ \t]/.test(l)&&(a=!0),c===-1)break;o=c+1}a?e.style=te.FOLDED_BLOCK:n&&(e.style=te.LITERAL_BLOCK)}function z0(e){e.style===te.PLAIN&&!So(e.allowedStylesMask,te.PLAIN)&&(e.style=gp(e))}function G0(e){So(e.allowedStylesMask,e.style)||(e.style=te.DOUBLE_QUOTED)}var F0=`[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]`;var W0=`[\\n\\r]`;var V0=`\\uFEFF`;var ls=`[ \\t]`;var bp=`(?:(?!(?:${W0}|${V0}))${F0})`;var vo=`(?:(?!${ls})${bp})`;var Ep=`[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]`;var yp=`[-?:,\\[\\]{}#&*!|>'"%@\`]`;var H0=`[,\\[\\]{}]`;var $a=vo;var Da=`(?:(?!${H0})${vo})`;var X0=`(?:(?:(?!${yp})${vo})|[?:-](?=${$a}))`;var q0=`(?:(?:(?!${yp})${vo})|[?:-](?=${Da}))`;var Sp=`(?:(?:(?![:#])${$a})|:(?=${$a}))#*`;var vp=`(?:(?:(?![:#])${Da})|:(?=${Da}))#*`;var xp=`(?:${ls}*${Sp})*`;var kp=`(?:${ls}*${vp})*`;var Cp=`${X0}#*${xp}`;var Tp=`${q0}#*${kp}`;var j0=Cp;var K0=Tp;var Y0=`\\n+${Sp}${xp}`;var Q0=`\\n+${vp}${kp}`;var Z0=`${Cp}(?:${Y0})*`;var J0=`${Tp}(?:${Q0})*`;new RegExp(`^(?:${Z0})$`,`u`);new RegExp(`^(?:${J0})$`,`u`);new RegExp(`^(?:${j0})$`,`u`);new RegExp(`^(?:${K0})$`,`u`);new RegExp(`^(?:${Ep})*$`,`u`);new RegExp(`^(?:${Ep}|\\n)*$`,`u`);new RegExp(`^(?:${bp}|\\n)*$`,`u`);var eE={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:`single`,forceQuotes:!1,scalarStyleRules:Object.keys(P_).map(e=>Reflect.get(P_,e)),tagBeforeAnchor:!1};W$1(U({},eE),{schema:Hb,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}});Se.DOCUMENT;Se.SEQUENCE;Se.MAPPING;Se.SCALAR;Se.ALIAS;Se.POP;te.PLAIN;te.SINGLE_QUOTED;te.DOUBLE_QUOTED;te.LITERAL_BLOCK;te.FOLDED_BLOCK;Gt.BLOCK;Gt.FLOW;et.CLIP;et.STRIP;et.KEEP;function Ua(e){if(Array.isArray(e)){for(let t of e)Ua(t);return}if(v(e)){typeof e.$ref==`string`&&(e.$ref=e.$ref.replace(`#/definitions/`,`#/components/schemas/`).replace(`#/parameters/`,`#/components/parameters/`).replace(`#/responses/`,`#/components/responses/`).replace(`#/securityDefinitions/`,`#/components/securitySchemes/`));for(let t of Object.keys(e))Ua(e[t])}}function Ta(e){if(e.type===`array`&&v(e.items))e.schema={type:`array`,items:e.items,collectionFormat:e.collectionFormat};else if(e.type){let t={type:e.type,format:e.format};e.default!==void 0&&(t.default=e.default),e.enum!==void 0&&(t.enum=e.enum),e.maximum!==void 0&&(t.maximum=e.maximum),e.minimum!==void 0&&(t.minimum=e.minimum),e.schema=t}}function N_(e,t){if(typeof e.$ref!=`string`&&e.schema){let n={};for(let i of t)n[i]={schema:e.schema};e.content=n,delete e.schema}}function tE(e){if(String(e.swagger)!==`2.0`)return;if(e.openapi=`3.2.0`,e.host||e.basePath||e.schemes){let a=Array.isArray(e.schemes)?e.schemes.map(String):[`https`],s=e.host?String(e.host):`localhost`,c=e.basePath?String(e.basePath):``;e.servers=a.map(l=>({url:`${l}://${s}${c}`}))}let t=v(e.components)?e.components:{};e.components=t;let n=Array.isArray(e.consumes)?e.consumes.map(String):[`application/json`],i=Array.isArray(e.produces)?e.produces.map(String):[`application/json`];if(e.definitions&&(t.schemas=e.definitions,delete e.definitions),v(e.parameters)){for(let a of Object.values(e.parameters))v(a)&&Ta(a);t.parameters=e.parameters,delete e.parameters}if(v(e.responses)){for(let a of Object.values(e.responses))v(a)&&N_(a,i);t.responses=e.responses,delete e.responses}let r=e.securityDefinitions;if(v(r)){for(let a of Object.values(r))if(v(a))if(a.type===`oauth2`){let s={},c=v(a.scopes)?a.scopes:{};a.flow===`implicit`?s.implicit={authorizationUrl:a.authorizationUrl,scopes:c}:a.flow===`password`?s.password={tokenUrl:a.tokenUrl,scopes:c}:a.flow===`application`?s.clientCredentials={tokenUrl:a.tokenUrl,scopes:c}:a.flow===`accessCode`&&(s.authorizationCode={authorizationUrl:a.authorizationUrl,tokenUrl:a.tokenUrl,scopes:c}),a.flows=s,delete a.flow,delete a.authorizationUrl,delete a.tokenUrl,delete a.scopes}else a.type===`basic`&&(a.type=`http`,a.scheme=`basic`);t.securitySchemes=r,delete e.securityDefinitions}Ua(e);let o=e.paths;if(v(o))for(let[a,s]of Object.entries(o)){if(!v(s)){delete o[a];continue}if(Array.isArray(s.parameters)){let c=[];for(let l of s.parameters)v(l)&&(Ta(l),c.push(l));s.parameters=c}for(let c of Q_){let l=s[c];if(!v(l)){delete s[c];continue}let d=Array.isArray(l.consumes)?l.consumes.map(String):n,u=Array.isArray(l.produces)?l.produces.map(String):i;if(Array.isArray(l.parameters)){let _=[],m=null,f=[];for(let E of l.parameters)v(E)&&(E.in===`body`?m=E:E.in===`formData`?f.push(E):(Ta(E),_.push(E)));if(l.parameters=_,m){let E={};for(let C of d)E[C]={schema:m.schema};l.requestBody={description:m.description,required:m.required,content:E}}else if(f.length>0){let E={},C=[];for(let F of f){let j=String(F.name||``);E[j]=F.type===`file`?{type:`string`,format:`binary`}:{type:F.type,format:F.format},F.required&&C.push(j)}let b={type:`object`,properties:E};C.length>0&&(b.required=C);let P={},U=Array.isArray(l.consumes)?l.consumes.map(String):[`application/x-www-form-urlencoded`,`multipart/form-data`];for(let F of U)P[F]={schema:b};l.requestBody={content:P}}}let p=l.responses;if(v(p))for(let _ of Object.values(p))v(_)&&N_(_,u)}}}function Qe(e){let t={},n=!1;for(let[i,r]of Object.entries(e))i.startsWith(`x-`)&&r!==void 0&&(t[i]=De(r),n=!0);return n?t:void 0}function Op(e){return v(e)?typeof e.arazzo==`string`&&Array.isArray(e.workflows):!1}function nE(e){if(!v(e))throw new Error(`Missing Arazzo info object`);let t={title:String(e.title||``),version:String(e.version||`1.0.0`)};e.summary&&(t.summary=String(e.summary)),e.description&&(t.description=String(e.description));let n=Qe(e);return n&&(t.extensions=n),t}function iE(e){return e===`openapi`||e===`asyncapi`||e===`arazzo`}function rE(e){let t=v(e)?e:{},n={name:String(t.name||`default`),url:String(t.url||``)};iE(t.type)&&(n.type=t.type);let i=Qe(t);return i&&(n.extensions=i),n}function Xn(e){return v(e)&&typeof e.reference==`string`&&typeof e.name!=`string`}function ds(e){let t=v(e)?e:{},n={reference:String(t.reference||``)};return t.value!==void 0&&(n.value=De(t.value)),n}function qn(e){return v(e)&&typeof e.context==`string`&&typeof e.selector==`string`}function oE(e){return e===`jsonpointer`||e===`jsonpath`||e===`xpath`||e===`regex`}function Ap(e){let t={type:e.type===`xpath`?`xpath`:`jsonpath`,version:String(e.version||`draft-goessner-dispatch-jsonpath-00`)},n=Qe(e);return n&&(t.extensions=n),t}function _s(e){let t=v(e)?e:{},n={context:String(t.context||`$response.body`),selector:String(t.selector||``)},i=t.type;oE(i)?n.type=i:v(i)&&(n.type=Ap(i)),t.version&&(n.version=String(t.version));let r=Qe(t);return r&&(n.extensions=r),n}function aE(e){return e===`path`||e===`query`||e===`querystring`||e===`header`||e===`cookie`}function wp(e){let t=v(e)?e:{},n=t.value,i={name:String(t.name||``),value:qn(n)?_s(n):De(n??``)};aE(t.in)&&(i.in=t.in);let r=Qe(t);return r&&(i.extensions=r),i}function xo(e){return Xn(e)?ds(e):wp(e)}function sE(e){let t=v(e)?e:{},n=t.value,i={target:String(t.target||``),value:qn(n)?_s(n):De(n??``)},r=Qe(t);return r&&(i.extensions=r),i}function cE(e){let t=v(e)?e:{},n={};t.contentType&&(n.contentType=String(t.contentType)),t.payload!==void 0&&(n.payload=De(t.payload)),Array.isArray(t.replacements)&&(n.replacements=t.replacements.map(sE));let i=Qe(t);return i&&(n.extensions=i),n}function lE(e){return e===`simple`||e===`regex`||e===`jsonpath`||e===`xpath`}function ps(e){let t=v(e)?e:{},n={condition:String(t.condition||``)};t.context&&(n.context=String(t.context));let i=t.type;lE(i)?n.type=i:v(i)&&(n.type=Ap(i));let r=Qe(t);return r&&(n.extensions=r),n}function dE(e){return e===`end`||e===`goto`}function Pp(e){let t=v(e)?e:{},n={name:String(t.name||`defaultSuccess`),type:dE(t.type)?t.type:`end`};t.workflowId&&(n.workflowId=String(t.workflowId)),t.stepId&&(n.stepId=String(t.stepId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(xo)),Array.isArray(t.criteria)&&(n.criteria=t.criteria.map(ps));let i=Qe(t);return i&&(n.extensions=i),n}function Np(e){return Xn(e)?ds(e):Pp(e)}function _E(e){return e===`end`||e===`retry`||e===`goto`}function Ip(e){let t=v(e)?e:{},n={name:String(t.name||`defaultFailure`),type:_E(t.type)?t.type:`end`};t.workflowId&&(n.workflowId=String(t.workflowId)),t.stepId&&(n.stepId=String(t.stepId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(xo)),typeof t.retryAfter==`number`&&(n.retryAfter=t.retryAfter),typeof t.retryLimit==`number`&&(n.retryLimit=t.retryLimit),Array.isArray(t.criteria)&&(n.criteria=t.criteria.map(ps));let i=Qe(t);return i&&(n.extensions=i),n}function Rp(e){return Xn(e)?ds(e):Ip(e)}function Mp(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))qn(r)?n[i]=_s(r):n[i]=String(r??``);return n}function pE(e){return e===`send`||e===`receive`}function uE(e){let t=v(e)?e:{},n={stepId:String(t.stepId||`step`)};t.description&&(n.description=String(t.description)),t.operationId&&(n.operationId=String(t.operationId)),t.operationPath&&(n.operationPath=String(t.operationPath)),t.channelPath&&(n.channelPath=String(t.channelPath)),t.workflowId&&(n.workflowId=String(t.workflowId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(xo)),v(t.requestBody)&&(n.requestBody=cE(t.requestBody)),Array.isArray(t.successCriteria)&&(n.successCriteria=t.successCriteria.map(ps)),Array.isArray(t.onSuccess)&&(n.onSuccess=t.onSuccess.map(Np)),Array.isArray(t.onFailure)&&(n.onFailure=t.onFailure.map(Rp)),v(t.outputs)&&(n.outputs=Mp(t.outputs)),typeof t.timeout==`number`&&(n.timeout=t.timeout),t.correlationId&&(n.correlationId=String(t.correlationId)),pE(t.action)&&(n.action=t.action),Array.isArray(t.dependsOn)&&(n.dependsOn=t.dependsOn.map(String));let i=Qe(t);return i&&(n.extensions=i),n}function mE(e){let t=v(e)?e:{},n={workflowId:String(t.workflowId||`workflow`),steps:Array.isArray(t.steps)?t.steps.map(uE):[]};t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),v(t.inputs)&&(n.inputs=Ye(t.inputs)),Array.isArray(t.dependsOn)&&(n.dependsOn=t.dependsOn.map(String)),Array.isArray(t.successActions)&&(n.successActions=t.successActions.map(Np)),Array.isArray(t.failureActions)&&(n.failureActions=t.failureActions.map(Rp)),v(t.outputs)&&(n.outputs=Mp(t.outputs)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(xo));let i=Qe(t);return i&&(n.extensions=i),n}function fE(e){let t=v(e)?e:{},n={},i=t.inputs;if(v(i)){n.inputs={};for(let[c,l]of Object.entries(i))n.inputs[c]=Ye(l)}let r=t.parameters;if(v(r)){n.parameters={};for(let[c,l]of Object.entries(r))n.parameters[c]=wp(l)}let o=t.successActions;if(v(o)){n.successActions={};for(let[c,l]of Object.entries(o))n.successActions[c]=Pp(l)}let a=t.failureActions;if(v(a)){n.failureActions={};for(let[c,l]of Object.entries(a))n.failureActions[c]=Ip(l)}let s=Qe(t);return s&&(n.extensions=s),n}function I_(e){let t;try{t=hp(e)}catch(r){throw new Error(`Invalid Arazzo specification format.`)}if(!v(t)||!Op(t))throw new Error(`Invalid Arazzo specification format.`);let n={arazzo:String(t.arazzo||`1.1.0`),info:nE(t.info),sourceDescriptions:Array.isArray(t.sourceDescriptions)?t.sourceDescriptions.map(rE):[],workflows:t.workflows.map(mE)};t.$self&&(n.$self=String(t.$self)),v(t.components)&&(n.components=fE(t.components));let i=Qe(t);return i&&(n.extensions=i),n}function us(e,t){let n=`$components.${t}.`;if(e.startsWith(n))return{key:e.slice(n.length),matchesCategory:!0};let i=e.split(`.`).pop()||e;return e.startsWith(`$components.`)?{key:i,matchesCategory:!1}:{key:i,matchesCategory:!0}}function Ba(e,t){if(!Xn(e))return e;let{key:n,matchesCategory:i}=us(e.reference,`parameters`),r=i?t?.parameters?.[n]:void 0;return r?W$1(U({},r),{value:e.value!==void 0?e.value:r.value}):{name:n,value:e.value!==void 0?e.value:e.reference}}function za(e,t){if(!Xn(e))return e;let{key:n,matchesCategory:i}=us(e.reference,`successActions`),r=i?t?.successActions?.[n]:void 0;return r?U({},r):{name:n,type:`end`}}function Ga(e,t){if(!Xn(e))return e;let{key:n,matchesCategory:i}=us(e.reference,`failureActions`),r=i?t?.failureActions?.[n]:void 0;return r?U({},r):{name:n,type:`end`}}function hE(e,t){if(e){if(me(e)){let n=e.$ref,i=n.startsWith(`#/components/inputs/`)?n.slice(20):n.startsWith(`$components.inputs.`)?n.slice(19):n.split(`/`).pop()||n,r=t?.inputs?.[i];return r&&!me(r)?r:{type:`object`,title:i,description:e.description}}return e}}function Lp(e,t,n){let i=(e??[]).map(a=>Ba(a,n)),r=(t??[]).map(a=>Ba(a,n)),o=/* @__PURE__ */ new Map;for(let a of i){let s=`${a.in??`workflow`}:${a.name}`;o.set(s,a)}for(let a of r){let s=`${a.in??`workflow`}:${a.name}`;o.set(s,a)}return Array.from(o.values())}function Fa(e){let t=e.trim(),n=!t.startsWith(`$`)&&/\{\$[a-zA-Z0-9_.\-#/~]+\}/.test(t),i;for(let f of Bg)if(t===f||t.startsWith(`${f}.`)||t.startsWith(`${f}#`)){i=f;break}let r=/* @__PURE__ */ new Set,o=/* @__PURE__ */ new Set,a=/* @__PURE__ */ new Set,s=/* @__PURE__ */ new Set;for(let f of t.matchAll(/\$steps\.([A-Za-z0-9_-]+)/g))r.add(String(f[1]));for(let f of t.matchAll(/\$inputs\.([A-Za-z0-9_-]+)/g))o.add(String(f[1]));for(let f of t.matchAll(/\$workflows\.([A-Za-z0-9_-]+)/g))a.add(String(f[1]));for(let f of t.matchAll(/\$sourceDescriptions\.([A-Za-z0-9_-]+)/g))s.add(String(f[1]));let p=t.indexOf(`#`),_=p!==-1?t.slice(p+1).replace(/\}.*$/,``):void 0;return{raw:e,isExpression:i!==void 0||n,isTemplate:n,root:i,referencedStepIds:Array.from(r),referencedInputs:Array.from(o),referencedWorkflows:Array.from(a),referencedSources:Array.from(s),jsonPointer:_}}function R_(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}function $p(e,t){let n=/* @__PURE__ */ new Set;if(e.dependsOn)for(let o of e.dependsOn)n.add(o);let i=o=>{let a=Fa(o);for(let s of a.referencedStepIds)s!==e.stepId&&n.add(s)},r=o=>{if(typeof o==`string`)i(o);else if(Array.isArray(o))o.forEach(r);else if(qn(o))i(o.context),i(o.selector);else if(v(o))for(let a of Object.values(o))r(a)};for(let o of t)r(o.value);if(e.requestBody&&(r(e.requestBody.payload),e.requestBody.replacements))for(let o of e.requestBody.replacements)r(o.value);if(e.successCriteria)for(let o of e.successCriteria)o.context&&i(o.context),i(o.condition);if(e.outputs)for(let o of Object.values(e.outputs))r(o);return e.correlationId&&i(e.correlationId),Array.from(n)}function Wa(e,t){let n=Array.isArray(e)?e:e.workflows,i=t??(Array.isArray(e)?void 0:e.components),r=[],o={},a={},s=!1,c=new Set(n.map(f=>f.workflowId)),l=n.map(f=>({id:f.workflowId,targets:/* @__PURE__ */ new Set,inDegree:0})),d=f=>l.find(E=>E.id===f),u=(f,E,C,b)=>{if(r.push({from:f,to:E,kind:C,label:b}),c.has(f)&&c.has(E)&&f!==E){let P=d(f),U=d(E);P&&U&&!P.targets.has(E)&&(P.targets.add(E),U.inDegree+=1)}};for(let f of n){if(f.dependsOn)for(let T of f.dependsOn)u(T.split(`.workflows.`)[1]??T,f.workflowId,`dependsOn`);let E=[],C=new Set(f.steps.map(T=>T.stepId)),b=f.steps.map(T=>({id:T.stepId,targets:/* @__PURE__ */ new Set,inDegree:0})),P=T=>b.find(w=>w.id===T),U=(T,w)=>{if(C.has(T)&&T!==w){let B=P(T),ee=P(w);B&&ee&&!B.targets.has(w)&&(B.targets.add(w),ee.inDegree+=1)}},F;for(let T of f.steps){if(F!==void 0&&(E.push({from:F,to:T.stepId,kind:`sequential`}),U(F,T.stepId)),F=T.stepId,T.workflowId)u(T.workflowId.split(`.workflows.`)[1]??T.workflowId,f.workflowId,`subWorkflow`,T.stepId);let B=$p(T,Lp(f.parameters,T.parameters,i));for(let ee of B){let J=T.dependsOn?.includes(ee)?`dependsOn`:`dataFlow`;E.push({from:ee,to:T.stepId,kind:J}),U(ee,T.stepId)}if(T.onSuccess)for(let ee of T.onSuccess){let J=za(ee,i);J.type===`goto`&&J.stepId&&E.push({from:T.stepId,to:J.stepId,kind:`onSuccess`,label:J.name})}if(T.onFailure)for(let ee of T.onFailure){let J=Ga(ee,i);(J.type===`goto`||J.type===`retry`)&&J.stepId&&E.push({from:T.stepId,to:J.stepId,kind:`onFailure`,label:J.name})}}let j=b.filter(T=>T.inDegree===0),q=[],z=j.shift();for(;z!==void 0;){q.push(z.id);for(let T of z.targets)for(let w of b)w.id===T&&(w.inDegree-=1,w.inDegree===0&&j.push(w));z=j.shift()}if(q.length<f.steps.length){s=!0;for(let T of f.steps)q.includes(T.stepId)||q.push(T.stepId)}o[f.workflowId]=q,a[f.workflowId]=E}let p=l.filter(f=>f.inDegree===0),_=[],m=p.shift();for(;m!==void 0;){_.push(m.id);for(let f of m.targets)for(let E of l)E.id===f&&(E.inDegree-=1,E.inDegree===0&&p.push(E));m=p.shift()}if(_.length<n.length){s=!0;for(let f of n)_.includes(f.workflowId)||_.push(f.workflowId)}return{workflowOrder:_,workflowEdges:r,stepOrderByWorkflow:o,stepEdgesByWorkflow:a,hasCycles:s}}function gE(e,t,n){let i=n?.[0]?.name;if(e.workflowId){let r=i,o=e.workflowId,a=e.workflowId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.workflows\.(.+)$/);return a&&a[1]&&a[2]&&(r=a[1],o=a[2]),{kind:`workflow`,sourceName:r,operationId:o,anchorId:`workflow-${o}`}}if(e.channelPath){let r=Fa(e.channelPath),o=r.referencedSources[0]??i,a=e.channelPath;if(r.jsonPointer){let s=r.jsonPointer.split(`/`).filter(Boolean).map(R_);s[0]===`channels`&&s[1]?a=s[1]:a=`/`+s.join(`/`)}return{kind:`channel`,sourceName:o,method:e.action??`send`,route:a}}if(e.operationPath){let r=Fa(e.operationPath),o=r.referencedSources[0]??i,a=e.operationPath,s=`get`;if(r.jsonPointer){let u=r.jsonPointer.split(`/`).filter(Boolean).map(R_);(u[0]===`paths`||u[0]===`webhooks`)&&u[1]!==void 0&&u[2]!==void 0&&(a=u[1],s=u[2].toLowerCase())}let c=`${s}-${a}`,l,d=t?.paths?.[a]??t?.webhooks?.[a];if(d&&!me(d)){for(let[u,p]of on(d))if(u.toLowerCase()===s){l=p.operationId,c=p.operationId||`${u}-${a}`;break}}return{kind:`operation`,sourceName:o,method:s,route:a,operationId:l,anchorId:c}}if(e.operationId){let r=i,o=e.operationId,a=e.operationId.match(/^\$sourceDescriptions\.([A-Za-z0-9_-]+)\.(.+)$/);if(a&&a[1]&&a[2]&&(r=a[1],o=a[2]),t?.paths){for(let[s,c]of Object.entries(t.paths))if(!me(c)){for(let[l,d]of on(c))if(d.operationId===o)return{kind:`operation`,sourceName:r,method:l,route:s,operationId:o,anchorId:o}}}if(t?.webhooks){for(let[s,c]of Object.entries(t.webhooks))if(!me(c)){for(let[l,d]of on(c))if(d.operationId===o)return{kind:`operation`,sourceName:r,method:l,route:s,operationId:o,anchorId:o}}}return{kind:`operation`,sourceName:r,operationId:o,anchorId:o}}}function bE(e,t,n=`https://api.example.com`){let i=n.endsWith(`/`)?n.slice(0,-1):n,r=[`# Workflow: ${e.workflowId}`];e.summary&&r.push(`# ${e.summary}`),e.dependsOn&&e.dependsOn.length>0&&r.push(`# Prerequisites: ${e.dependsOn.join(`, `)}`);for(let[o,a]of t.entries()){let s=a.step;if(r.push(``),r.push(`# Step ${o+1}: ${s.stepId}${s.description?` - ${s.description}`:``}`),a.linkedTarget?.kind===`workflow`){r.push(`cdd-ctl run-workflow --workflow-id "${a.linkedTarget.operationId}"`);continue}if(a.linkedTarget?.kind===`channel`){let p=(s.action??`send`).toUpperCase();r.push(`# AsyncAPI ${p} on channel ${a.linkedTarget.route}`);continue}let c=(a.linkedTarget?.method??`get`).toUpperCase(),l=a.linkedTarget?.route??(a.linkedTarget?.operationId?`/${a.linkedTarget.operationId}`:`/${s.stepId}`),u=`curl -s ${c===`GET`?``:`-X ${c} `}"${i}${l}"`;for(let p of a.mergedParameters)if(p.in===`header`){let _=qn(p.value)?p.value.selector:String(p.value);u+=` -H "${p.name}: ${_}"`}if(s.requestBody){let p=s.requestBody.contentType||`application/json`;if(u+=` -H "Content-Type: ${p}"`,s.requestBody.payload!==void 0){let _=typeof s.requestBody.payload==`string`?s.requestBody.payload:JSON.stringify(s.requestBody.payload);u+=` -d '${_}'`}}r.push(u)}return r.join(`
`)}function M_(e,t){let n=e.components,i=t?.servers?.[0]?.url||`https://api.example.com`,r=Wa(e.workflows,n);return e.workflows.map(o=>{let a=hE(o.inputs,n),s=(o.parameters??[]).map(p=>Ba(p,n)),c=(o.successActions??[]).map(p=>za(p,n)),l=(o.failureActions??[]).map(p=>Ga(p,n)),d=o.steps.map(p=>{let _=Lp(o.parameters,p.parameters,n);return{step:p,mergedParameters:_,resolvedOnSuccess:(p.onSuccess??[]).map(b=>za(b,n)),resolvedOnFailure:(p.onFailure??[]).map(b=>Ga(b,n)),linkedTarget:gE(p,t,e.sourceDescriptions),upstreamStepIds:$p(p,_)}});return{workflow:o,resolvedInputs:a,resolvedParameters:s,resolvedSuccessActions:c,resolvedFailureActions:l,normalizedSteps:d,cliPreview:bE(o,d,i),stepOrder:r.stepOrderByWorkflow[o.workflowId],stepEdges:r.stepEdgesByWorkflow[o.workflowId],hasCycles:r.hasCycles}})}function v(e){return typeof e==`object`&&e!==null&&!Array.isArray(e)}function L_(e,t){return e?/^https?:\/\//i.test(e)?!0:t&&t(e)?!1:e.startsWith(`/`)?!0:!e.includes(`
`)&&!e.startsWith(`{`)&&!e.includes(`: `)&&/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(e):!1}function $_(e){let t=e.trim();return!/^https?:\/\//i.test(t)&&!t.startsWith(`/`)?`https://`+t:t}function EE(e){return/^<\?php\b/.test(e)||/^declare\s*\(\s*strict_types/.test(e)||/^package\s+[A-Za-z0-9_.]+;?$/.test(e)||/^namespace\s+[A-Za-z0-9_\\]+;$/.test(e)||/^#include\s+[<"].+[>"]$/.test(e)||/^import\s+/.test(e)||/^from\s+[A-Za-z0-9_.]+\s+import\s+/.test(e)||/^using\s+[A-Za-z0-9_.]+;$/.test(e)||/^use\s+[A-Za-z0-9_:\\{}*,\s]+;$/.test(e)||/^require(?:_once|_relative)?[\s(]+['"]/.test(e)||/^(?:\.|source)\s+\.?\/[^\s]+$/.test(e)}function yE(e){let t=e.replace(/\r\n/g,`
`).trim();if(!t)return{snippet:``};let n=t.split(`
`),i=[],r=0;for(;r<n.length;){let d=n.slice(r,r+1).join(``),u=d.trim();if(!u){r++;continue}if(EE(u)){if(i.push(d),r++,/^import\s*\($/.test(u))for(;r<n.length;){let p=n.slice(r,r+1).join(``);if(i.push(p),r++,p.trim()===`)`)break}continue}break}let o=n.slice(r),a=[],s=[];if(o.length>=3){let d=o.slice(0,1).join(``).trim(),u=o.slice(-1).join(``).trim();if(/^(?:async\s+)?def\s+main\s*\(/.test(d))a.push(...o.splice(0,1)),o.slice(-1).join(``).trim()===`main()`&&s.unshift(...o.splice(-2,2)),/^\w+\s*=\s*\w*Client\s*\(/.test(o.slice(0,1).join(``).trim())&&a.push(...o.splice(0,1));else if(/^def\s+main\b/.test(d)){for(a.push(...o.splice(0,1)),/^main\s+if\s+__FILE__\s*==\s*\$0/.test(u)&&s.unshift(...o.splice(-1,1));!o.slice(-1).join(``).trim();)o.pop();s.unshift(...o.splice(-1,1)),/^\w+\s*=\s*\w+\.new\b/.test(o.slice(0,1).join(``).trim())&&a.push(...o.splice(0,1))}else if(/^main\s*\(\)\s*\{$/.test(d)){for(a.push(...o.splice(0,1)),/^main\s+"\$@"$/.test(u)&&s.unshift(...o.splice(-1,1));!o.slice(-1).join(``).trim();)o.pop();s.unshift(...o.splice(-1,1))}else if(/^(?:int\s+main\s*\(|func\s+main\s*\(|suspend\s+fun\s+main\s*\(|fun\s+main\s*\(|#\[tokio::main\]|async\s+fn\s+main\s*\(|export\s+(?:async\s+)?function\s+(?:execute|ExampleComponent)\s*\(|@Component\b|@main\b|<script\s+setup>|(?:public\s+)?class\s+(?:Example|Program)\b)/.test(d)&&(u===`}`||u===`<\/script>`)){for(a.push(...o.splice(0,1)),s.unshift(...o.splice(-1,1));o.length>=3&&/^(?:public\s+static\s+(?:async\s+)?(?:void|Task)\s+Main|public\s+static\s+void\s+main\s*\(|static\s+func\s+main\s*\(|export\s+class\s+\w+|private\s+readonly\s+\w+|async\s+execute\s*\(|async\s+function\s+execute\s*\(|struct\s+Example\b|async\s+fn\s+main\s*\(|try\s*\{)/.test(o.slice(0,1).join(``).trim());)a.push(...o.splice(0,1)),/^\}\s*catch\b/.test(o.slice(-3,-2).join(``).trim())?s.unshift(...o.splice(-3,3)):s.unshift(...o.splice(-1,1));for(o.length>=2&&/^(?:const|let|var|val|auto|struct\s+\w+)\s+\w+\s*(?:=[^;]+;?|;\s*$)/.test(o.slice(0,1).join(``).trim())&&(a.push(...o.splice(0,1)),/^api_init\s*\(/.test(o.slice(0,1).join(``).trim())&&a.push(...o.splice(0,1)));o.length>=2&&/^(?:return\s+(?:0|CDD_C_SUCCESS)\s*;|Ok\(\(\)\)|api_cleanup\s*\()/.test(o.slice(-1).join(``).trim());)s.unshift(...o.splice(-1,1))}}let c=o.join(`
`).trim();if(a.length>0){let u=o.filter(p=>p.trim().length>0).reduce((p,_)=>{let m=_.trimStart().length;return Math.min(p,_.length-m)},1/0);c=o.map(p=>p.slice(u)).join(`
`).trim()}let l={snippet:c};return i.length>0&&(l.imports=i.join(`
`).trim()),a.length>0&&(l.wrapper_start=a.join(`
`).trim()),s.length>0&&(l.wrapper_end=s.join(`
`).trim()),l}function SE(e){let t=e.replace(/\\/g,`/`).toLowerCase(),n=t.lastIndexOf(`/`),i=n!==-1?t.slice(n+1):t;return t.startsWith(`.github/`)||t.includes(`/.github/`)||t.includes(`/tests/`)||t.includes(`/test/`)||t.includes(`/__tests__/`)||t.includes(`/models/`)||t.includes(`/schemas/`)||(/* @__PURE__ */ new Set([`cargo.toml`,`cargo.lock`,`cmakelists.txt`,`makefile`,`package.json`,`package-lock.json`,`tsconfig.json`,`composer.json`,`gemfile`,`build.gradle`,`build.gradle.kts`,`settings.gradle`,`settings.gradle.kts`,`pom.xml`,`package.swift`,`go.mod`,`go.sum`,`pyproject.toml`,`setup.py`,`requirements.txt`,`readme.md`,`.gitignore`,`dockerfile`])).has(i)?!0:/\.(?:md|toml|lock|csproj|sln|ya?ml|spec\.ts|test\.ts)$|(?:_test\.go|_test\.py|test\.java|test\.kt|tests\.cs|tests\.swift)$|^test_/.test(i)}function D_(e,t,n,i){let r=e.replace(/\r\n/g,`
`).split(`
`);if(r.length<=25)return e;let o=[];if(t){let u=t.replace(/([a-z0-9])([A-Z])/g,`$1_$2`).toLowerCase(),p=t.charAt(0).toUpperCase()+t.slice(1);for(let _ of/* @__PURE__ */ new Set([t,u,p]))o.push(_)}let a=-1;for(let u of o){let p=u.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),_=new RegExp(`(?:\\bfn\\b|\\bfunc\\b|\\bdef\\b|\\bfun\\b|\\bfunction\\b|\\basync\\b|\\bpublic\\b|\\bstatic\\b)\\s+[^\\n]*\\b${p}\\b|\\b${p}\\s*\\(`,`i`);for(let m=0;m<r.length;m++)if(_.test(r.slice(m,m+1).join(``))){a=m;break}if(a!==-1)break}if(a===-1){for(let u=0;u<r.length;u++)if(r.slice(u,u+1).join(``).includes(n)){let _=Math.max(0,u-6),m=Math.min(r.length-1,u+6);if(r.slice(_,m+1).join(`
`).toLowerCase().includes(i.toLowerCase())){a=_;for(let E=u;E>=_;E--)if(/\b(?:fn|func|def|fun|function|public|async)\b/.test(r.slice(E,E+1).join(``))){a=E;break}break}}}if(a===-1)return null;let s=Math.min(r.length,a+15),c=[],l=0,d=!1;for(let u=a;u<s;u++){let p=r.slice(u,u+1).join(``);c.push(p);for(let _ of p)_===`{`?(l++,d=!0):_===`}`&&l--;if(d&&l<=0)break}return c.join(`
`).trim()}function vE(e){let t=e.replace(/\r\n/g,`
`).split(`
`);for(;t.length>0&&!t.slice(0,1).join(``).trim();)t.shift();for(;t.length>0&&!t.slice(-1).join(``).trim();)t.pop();if(t.length===0)return``;let i=t.filter(r=>r.trim().length>0).reduce((r,o)=>{let a=o.trimStart().length;return Math.min(r,o.length-a)},1/0);return t.map(r=>r.trim().length>0?r.slice(i):``).join(`
`).trim()}function Va(e,t=!0,n=!0){if(typeof e.default==`object`&&v(e.default))return Va(e.default,t,n);let i=[],r=e.imports,o=e.wrapperStart??e.wrapper_start,a=e.snippet??e.code,s=e.wrapperEnd??e.wrapper_end;return t&&typeof r==`string`&&r.trim()&&i.push(r.trim()),n&&typeof o==`string`&&o.trim()&&i.push(o.trim()),typeof a==`string`&&a.trim()&&i.push(n?a.replace(/^\r?\n+|\s+$/g,``):vE(a)),n&&typeof s==`string`&&s.trim()&&i.push(s.trim()),i.join(`
`)}function U_(e,t,n,i={}){let r=typeof e.default==`object`&&v(e.default)?e.default:e,o=typeof r.imports==`string`&&r.imports.trim().length>0,a=r.wrapperStart??r.wrapper_start,s=r.wrapperEnd??r.wrapper_end,c=typeof a==`string`&&a.trim().length>0||typeof s==`string`&&s.trim().length>0;if(!o&&!c){let u=Va(r,!0,!0);return u?[U({language:t,filepath:n,content:u,includeImports:!1,includeWrapping:!1},i)]:[]}let l=[{includeImports:!0,includeWrapping:!0},{includeImports:!1,includeWrapping:!0},{includeImports:!0,includeWrapping:!1},{includeImports:!1,includeWrapping:!1}],d=[];for(let u of l){let p=Va(r,u.includeImports,u.includeWrapping);d.push(U({language:t,filepath:n,content:p,includeImports:u.includeImports,includeWrapping:u.includeWrapping},i))}return d}function Oa(e,t){let n=[],i=(a,s,c)=>typeof a==`string`?a.trim()?U_(yE(a),t,s,c):[U({language:t,filepath:s,content:a,includeImports:!1,includeWrapping:!1},c)]:v(a)?U_(a,t,s,c):[],r=(a,s)=>{for(let[c,l]of Object.entries(a))if(v(l))for(let[d,u]of Object.entries(l)){let p=`${c.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`,_=s?{webhookName:c,method:d.toLowerCase()}:{route:c,method:d.toLowerCase()};n.push(...i(u,p,_))}},o=(a,s)=>{for(let c of a){if(!v(c))continue;let l=typeof c.path==`string`?c.path:``,d=typeof c.method==`string`?c.method:``,u=typeof c.operationId==`string`?c.operationId:``,p=c.code??c;if(d.toUpperCase()===`WORKFLOW`||l.startsWith(`/workflows/`)){let _=u||l.replace(/^\/workflows\//,``)||`workflow`;n.push(...i(p,`workflow_${_}`,{workflowId:_}))}else if(s){let _=typeof c.webhookName==`string`?c.webhookName:l.replace(/^\/+/,``)||u,m=`webhook_${_.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`;n.push(...i(p,m,{operationId:u||void 0,webhookName:_||void 0,method:d.toLowerCase()||void 0}))}else{let _=`${l.replace(/[^a-zA-Z0-9]/g,`_`)}_${d.toLowerCase()}`;n.push(...i(p,_,{operationId:u||void 0,route:l||void 0,method:d.toLowerCase()||void 0}))}}};if(v(e.endpoints)&&r(e.endpoints,!1),Array.isArray(e.operations))o(e.operations,!1);else if(v(e.operations))for(let[a,s]of Object.entries(e.operations)){if(!v(s))continue;let c=typeof s.operationId==`string`?s.operationId:a,l=typeof s.path==`string`?s.path:void 0,d=typeof s.method==`string`?s.method:void 0,u=s.code??s;if(d?.toUpperCase()===`WORKFLOW`||l?.startsWith(`/workflows/`)){let p=c||(l?l.replace(/^\/workflows\//,``):`workflow`);n.push(...i(u,`workflow_${p}`,{workflowId:p}))}else{let p=`op_${c.replace(/[^a-zA-Z0-9]/g,`_`)}`,_={operationId:c,route:l,method:d?.toLowerCase()};n.push(...i(u,p,_))}}if(Array.isArray(e.webhooks)?o(e.webhooks,!0):v(e.webhooks)&&r(e.webhooks,!0),Array.isArray(e.workflows))for(let a of e.workflows){if(!v(a))continue;let s=typeof a.workflowId==`string`?a.workflowId:typeof a.operationId==`string`?a.operationId:``;if(!s)continue;let c=a.code??a;n.push(...i(c,`workflow_${s}`,{workflowId:s}))}else if(v(e.workflows))for(let[a,s]of Object.entries(e.workflows)){let c=`workflow_${a}`,l={workflowId:a};n.push(...i(s,c,l))}return n}function De(e){if(e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e;if(Array.isArray(e))return e.map(De);if(v(e)){let t={};for(let[n,i]of Object.entries(e))i!==void 0&&(t[n]=De(i));return t}return String(e)}function xE(e){if(!v(e))throw new Error(`Missing info object`);return{title:String(e.title||``),summary:e.summary?String(e.summary):void 0,description:e.description?String(e.description):void 0,termsOfService:e.termsOfService?String(e.termsOfService):void 0,contact:v(e.contact)?kE(e.contact):void 0,license:v(e.license)?CE(e.license):void 0,version:String(e.version||``)}}function kE(e){let t=v(e)?e:{};return{name:t.name?String(t.name):void 0,url:t.url?String(t.url):void 0,email:t.email?String(t.email):void 0}}function CE(e){let t=v(e)?e:{};return{name:String(t.name||``),identifier:t.identifier?String(t.identifier):void 0,url:t.url?String(t.url):void 0}}function TE(e){let t=v(e)?e:{};return{enum:Array.isArray(t.enum)?t.enum.map(String):void 0,default:String(t.default||``),description:t.description?String(t.description):void 0}}function ko(e){let t=v(e)?e:{},n={url:String(t.url||``)};t.description&&(n.description=String(t.description));let i=t.variables;if(v(i)){n.variables={};for(let[r,o]of Object.entries(i))n.variables[r]=TE(o)}return n}function Et(e){let t=v(e)?e:{};return{$ref:String(t.$ref||``),summary:t.summary?String(t.summary):void 0,description:t.description?String(t.description):void 0}}function me(e){return v(e)&&typeof e.$ref==`string`}function OE(e){let t={propertyName:String(e.propertyName||``)},n=e.mapping;if(v(n)){t.mapping={};for(let[i,r]of Object.entries(n))t.mapping[i]=String(r)}return e.defaultMapping!==void 0&&(t.defaultMapping=String(e.defaultMapping)),t}function AE(e){return{name:e.name?String(e.name):void 0,namespace:e.namespace?String(e.namespace):void 0,prefix:e.prefix?String(e.prefix):void 0,attribute:typeof e.attribute==`boolean`?e.attribute:void 0,wrapped:typeof e.wrapped==`boolean`?e.wrapped:void 0,nodeType:e.nodeType?String(e.nodeType):void 0}}function Ye(e){if(me(e))return Et(e);let t=v(e)?e:{},n={};t.type&&(n.type=String(t.type)),t.description&&(n.description=String(t.description)),t.format&&(n.format=String(t.format)),t.title&&(n.title=String(t.title)),typeof t.multipleOf==`number`&&(n.multipleOf=t.multipleOf),typeof t.maximum==`number`&&(n.maximum=t.maximum),typeof t.exclusiveMaximum==`boolean`&&(n.exclusiveMaximum=t.exclusiveMaximum),typeof t.minimum==`number`&&(n.minimum=t.minimum),typeof t.exclusiveMinimum==`boolean`&&(n.exclusiveMinimum=t.exclusiveMinimum),typeof t.maxLength==`number`&&(n.maxLength=t.maxLength),typeof t.minLength==`number`&&(n.minLength=t.minLength),t.pattern&&(n.pattern=String(t.pattern)),typeof t.maxItems==`number`&&(n.maxItems=t.maxItems),typeof t.minItems==`number`&&(n.minItems=t.minItems),typeof t.uniqueItems==`boolean`&&(n.uniqueItems=t.uniqueItems),typeof t.maxProperties==`number`&&(n.maxProperties=t.maxProperties),typeof t.minProperties==`number`&&(n.minProperties=t.minProperties),Array.isArray(t.required)&&(n.required=t.required.map(String)),Array.isArray(t.enum)&&(n.enum=t.enum.map(De)),Array.isArray(t.allOf)&&(n.allOf=t.allOf.map(Ye)),Array.isArray(t.oneOf)&&(n.oneOf=t.oneOf.map(Ye)),Array.isArray(t.anyOf)&&(n.anyOf=t.anyOf.map(Ye)),t.not&&(n.not=Ye(t.not)),t.items&&(n.items=Ye(t.items));let i=t.properties;if(v(i)){n.properties={};for(let[s,c]of Object.entries(i))n.properties[s]=Ye(c)}let r=t.additionalProperties;r!==void 0&&(n.additionalProperties=typeof r==`boolean`?r:Ye(r)),t.default!==void 0&&(n.default=De(t.default)),typeof t.nullable==`boolean`&&(n.nullable=t.nullable),typeof t.readOnly==`boolean`&&(n.readOnly=t.readOnly),typeof t.writeOnly==`boolean`&&(n.writeOnly=t.writeOnly),t.example!==void 0&&(n.example=De(t.example)),typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated);let o=t.discriminator;v(o)&&(n.discriminator=OE(o));let a=t.xml;return v(a)&&(n.xml=AE(a)),t.externalDocs&&(n.externalDocs=To(t.externalDocs)),n}function ms(e){if(me(e))return Et(e);let t=v(e)?e:{};return{summary:t.summary?String(t.summary):void 0,description:t.description?String(t.description):void 0,value:t.value!==void 0?De(t.value):void 0,externalValue:t.externalValue?String(t.externalValue):void 0}}function fs(e){if(me(e))return Et(e);let t=v(e)?e:{},n={};return t.description&&(n.description=String(t.description)),typeof t.required==`boolean`&&(n.required=t.required),typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated),t.schema&&(n.schema=Ye(t.schema)),t.example!==void 0&&(n.example=De(t.example)),n}function Ni(e){let t=v(e)?e:{},n={};t.contentType&&(n.contentType=String(t.contentType));let i=t.headers;if(v(i)){n.headers={};for(let[a,s]of Object.entries(i))n.headers[a]=fs(s)}t.style&&(n.style=String(t.style)),typeof t.explode==`boolean`&&(n.explode=t.explode),typeof t.allowReserved==`boolean`&&(n.allowReserved=t.allowReserved);let r=t.prefixEncoding;if(v(r)){n.prefixEncoding={};for(let[a,s]of Object.entries(r))n.prefixEncoding[a]=Ni(s)}let o=t.itemEncoding;if(v(o)){n.itemEncoding={};for(let[a,s]of Object.entries(o))n.itemEncoding[a]=Ni(s)}return n}function Co(e){let t=v(e)?e:{},n={};t.schema&&(n.schema=Ye(t.schema)),t.itemSchema&&(n.itemSchema=Ye(t.itemSchema)),t.example!==void 0&&(n.example=De(t.example));let i=t.examples;if(v(i)){n.examples={};for(let[s,c]of Object.entries(i))n.examples[s]=ms(c)}let r=t.encoding;if(v(r)){n.encoding={};for(let[s,c]of Object.entries(r))n.encoding[s]=Ni(c)}let o=t.prefixEncoding;if(v(o)){n.prefixEncoding={};for(let[s,c]of Object.entries(o))n.prefixEncoding[s]=Ni(c)}let a=t.itemEncoding;if(v(a)){n.itemEncoding={};for(let[s,c]of Object.entries(a))n.itemEncoding[s]=Ni(c)}return n}function Dp(e){if(me(e))return Et(e);let t=v(e)?e:{},n={content:{}};t.description&&(n.description=String(t.description)),typeof t.required==`boolean`&&(n.required=t.required);let i=t.content;if(v(i))for(let[r,o]of Object.entries(i))n.content[r]=Co(o);return n}function wE(e){return e===`query`||e===`header`||e===`path`||e===`cookie`}function hs(e){if(me(e))return Et(e);let t=v(e)?e:{},n=t.in,i={name:String(t.name||`Unknown`),in:wE(n)?n:`query`};t.description&&(i.description=String(t.description)),typeof t.required==`boolean`&&(i.required=t.required),typeof t.deprecated==`boolean`&&(i.deprecated=t.deprecated),typeof t.allowEmptyValue==`boolean`&&(i.allowEmptyValue=t.allowEmptyValue),t.style&&(i.style=String(t.style)),typeof t.explode==`boolean`&&(i.explode=t.explode),typeof t.allowReserved==`boolean`&&(i.allowReserved=t.allowReserved),t.schema&&(i.schema=Ye(t.schema)),t.example!==void 0&&(i.example=De(t.example));let r=t.examples;if(v(r)){i.examples={};for(let[a,s]of Object.entries(r))i.examples[a]=ms(s)}let o=t.content;if(v(o)){i.content={};for(let[a,s]of Object.entries(o))i.content[a]=Co(s)}return i}function Up(e){if(me(e))return Et(e);let t=v(e)?e:{},n={};t.operationRef&&(n.operationRef=String(t.operationRef)),t.operationId&&(n.operationId=String(t.operationId));let i=t.parameters;if(v(i)){n.parameters={};for(let[r,o]of Object.entries(i))n.parameters[r]=De(o)}return t.requestBody!==void 0&&(n.requestBody=De(t.requestBody)),t.description&&(n.description=String(t.description)),t.server&&(n.server=ko(t.server)),n}function Ha(e){if(me(e))return Et(e);let t=v(e)?e:{},n={description:String(t.description||``)},i=t.headers;if(v(i)){n.headers={};for(let[a,s]of Object.entries(i))n.headers[a]=fs(s)}let r=t.content;if(v(r)){n.content={};for(let[a,s]of Object.entries(r))n.content[a]=Co(s)}let o=t.links;if(v(o)){n.links={};for(let[a,s]of Object.entries(o))n.links[a]=Up(s)}return n}function PE(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))i==="default"?n.default=Ha(r):n[i]=Ha(r);return n}function Bp(e){if(me(e))return Et(e);let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))n[i]=Oo(r);return n}function To(e){let t=v(e)?e:{};return{url:String(t.url||``),description:t.description?String(t.description):void 0}}function zp(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))n[i]=Array.isArray(r)?r.map(String):[];return n}function gt(e){let t=v(e)?e:{},n={};Array.isArray(t.tags)&&(n.tags=t.tags.map(String)),t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.externalDocs&&(n.externalDocs=To(t.externalDocs)),t.operationId&&(n.operationId=String(t.operationId)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(hs)),t.requestBody&&(n.requestBody=Dp(t.requestBody)),t.responses&&(n.responses=PE(t.responses));let i=t.callbacks;if(v(i)){n.callbacks={};for(let[r,o]of Object.entries(i))n.callbacks[r]=Bp(o)}return typeof t.deprecated==`boolean`&&(n.deprecated=t.deprecated),Array.isArray(t.security)&&(n.security=t.security.map(zp)),Array.isArray(t.servers)&&(n.servers=t.servers.map(ko)),n}function Oo(e){if(me(e))return Et(e);let t=v(e)?e:{},n={};t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.get&&(n.get=gt(t.get)),t.put&&(n.put=gt(t.put)),t.post&&(n.post=gt(t.post)),t.delete&&(n.delete=gt(t.delete)),t.options&&(n.options=gt(t.options)),t.head&&(n.head=gt(t.head)),t.patch&&(n.patch=gt(t.patch)),t.trace&&(n.trace=gt(t.trace)),t.query&&(n.query=gt(t.query));let i=t.additionalOperations;if(v(i)){n.additionalOperations={};for(let[r,o]of Object.entries(i))n.additionalOperations[r]=gt(o)}return Array.isArray(t.servers)&&(n.servers=t.servers.map(ko)),Array.isArray(t.parameters)&&(n.parameters=t.parameters.map(hs)),n}function NE(e){let t=v(e)?e:{},n={};for(let[i,r]of Object.entries(t))i.startsWith(`/`)&&(n[i]=Oo(r));return n}function Oi(e){let t=v(e)?e:{},n={scopes:{}};t.authorizationUrl&&(n.authorizationUrl=String(t.authorizationUrl)),t.tokenUrl&&(n.tokenUrl=String(t.tokenUrl)),t.refreshUrl&&(n.refreshUrl=String(t.refreshUrl)),t.deviceAuthorizationUrl&&(n.deviceAuthorizationUrl=String(t.deviceAuthorizationUrl));let i=t.scopes;if(v(i))for(let[r,o]of Object.entries(i))n.scopes[r]=String(o);return n}function IE(e){return e===`apiKey`||e===`http`||e===`mutualTLS`||e===`oauth2`||e===`openIdConnect`}function RE(e){return e===`query`||e===`header`||e===`cookie`}function ME(e){if(me(e))return Et(e);let t=v(e)?e:{},n=t.type,i={type:IE(n)?n:`http`};t.description&&(i.description=String(t.description)),t.name&&(i.name=String(t.name));let r=t.in;RE(r)&&(i.in=r),t.scheme&&(i.scheme=String(t.scheme)),t.bearerFormat&&(i.bearerFormat=String(t.bearerFormat)),t.openIdConnectUrl&&(i.openIdConnectUrl=String(t.openIdConnectUrl)),t.oauth2MetadataUrl&&(i.oauth2MetadataUrl=String(t.oauth2MetadataUrl));let o=t.flows;if(v(o)){let a={};o.implicit&&(a.implicit=Oi(o.implicit)),o.password&&(a.password=Oi(o.password)),o.clientCredentials&&(a.clientCredentials=Oi(o.clientCredentials)),o.authorizationCode&&(a.authorizationCode=Oi(o.authorizationCode)),o.deviceAuthorization&&(a.deviceAuthorization=Oi(o.deviceAuthorization)),i.flows=a}return i}function LE(e){let t=v(e)?e:{},n={},i=t.schemas;if(v(i)){n.schemas={};for(let[m,f]of Object.entries(i))n.schemas[m]=Ye(f)}let r=t.responses;if(v(r)){n.responses={};for(let[m,f]of Object.entries(r))n.responses[m]=Ha(f)}let o=t.parameters;if(v(o)){n.parameters={};for(let[m,f]of Object.entries(o))n.parameters[m]=hs(f)}let a=t.examples;if(v(a)){n.examples={};for(let[m,f]of Object.entries(a))n.examples[m]=ms(f)}let s=t.requestBodies;if(v(s)){n.requestBodies={};for(let[m,f]of Object.entries(s))n.requestBodies[m]=Dp(f)}let c=t.headers;if(v(c)){n.headers={};for(let[m,f]of Object.entries(c))n.headers[m]=fs(f)}let l=t.securitySchemes;if(v(l)){n.securitySchemes={};for(let[m,f]of Object.entries(l))n.securitySchemes[m]=ME(f)}let d=t.links;if(v(d)){n.links={};for(let[m,f]of Object.entries(d))n.links[m]=Up(f)}let u=t.callbacks;if(v(u)){n.callbacks={};for(let[m,f]of Object.entries(u))n.callbacks[m]=Bp(f)}let p=t.pathItems;if(v(p)){n.pathItems={};for(let[m,f]of Object.entries(p))n.pathItems[m]=Oo(f)}let _=t.mediaTypes;if(v(_)){n.mediaTypes={};for(let[m,f]of Object.entries(_))n.mediaTypes[m]=Co(f)}return n}function $E(e){let t=v(e)?e:{},n={name:String(t.name||`Unknown`)};return t.summary&&(n.summary=String(t.summary)),t.description&&(n.description=String(t.description)),t.externalDocs&&(n.externalDocs=To(t.externalDocs)),t.parent&&(n.parent=String(t.parent)),t.kind&&(n.kind=String(t.kind)),n}function DE(e,t){let n;try{n=hp(e)}catch(o){throw new Error(`Invalid OpenAPI specification format.`)}if(!v(n))throw new Error(`Invalid OpenAPI specification format.`);if(Op(n)){let o=I_(e),a=M_(o),s=Wa(o),c={openapi:`3.2.0`,info:{title:o.info.title,summary:o.info.summary,description:o.info.description,version:o.info.version}};return o.$self&&(c.$self=o.$self),{specKind:`arazzo`,spec:c,codeExamples:{},arazzoSpec:o,workflows:a,sourceDescriptions:o.sourceDescriptions,workflowCodeExamples:{},workflowDag:s}}tE(n);let i={openapi:String(n.openapi||`3.2.0`),info:xE(n.info)};n.$self&&(i.$self=String(n.$self)),n.jsonSchemaDialect&&(i.jsonSchemaDialect=String(n.jsonSchemaDialect)),Array.isArray(n.servers)&&(i.servers=n.servers.map(ko)),v(n.paths)&&(i.paths=NE(n.paths));let r=n.webhooks;if(v(r)){i.webhooks={};for(let[o,a]of Object.entries(r))i.webhooks[o]=Oo(a)}if(v(n.components)&&(i.components=LE(n.components)),Array.isArray(n.security)&&(i.security=n.security.map(zp)),Array.isArray(n.tags)&&(i.tags=n.tags.map($E)),n.externalDocs&&(i.externalDocs=To(n.externalDocs)),t&&t.trim()){let o=I_(t),a=M_(o,i),s=Wa(o);return{specKind:`combined`,spec:i,codeExamples:{},arazzoSpec:o,workflows:a,sourceDescriptions:o.sourceDescriptions,workflowCodeExamples:{},workflowDag:s}}return{specKind:`openapi`,spec:i,codeExamples:{}}}function on(e){let t=[];for(let n of Q_){let i=e[n];i&&t.push([n,i])}if(e.additionalOperations)for(let[n,i]of Object.entries(e.additionalOperations))t.push([n.toLowerCase(),i]);return t}function UE(e,t){let n={};if(e.spec.paths){for(let[l,d]of Object.entries(e.spec.paths))if(!me(d))for(let[u,p]of on(d)){let _=p.operationId||`${u}-${l}`;n[_]={route:l,method:u,op:p,isWebhook:!1}}}if(e.spec.webhooks){for(let[l,d]of Object.entries(e.spec.webhooks))if(!me(d))for(let[u,p]of on(d)){let _=p.operationId||`webhook-${u}-${l}`;n[_]={route:l,method:u,op:p,isWebhook:!0}}}let i=Object.entries(n),r=[...i].sort((l,d)=>(d[1].op.operationId?.length??0)-(l[1].op.operationId?.length??0)),o=[...i].sort((l,d)=>d[1].route.length-l[1].route.length),a=e.workflows??[],s=[...a].sort((l,d)=>d.workflow.workflowId.length-l.workflow.workflowId.length),c=(l,d)=>{l.some(p=>p.language===d.language&&p.includeImports===d.includeImports&&p.includeWrapping===d.includeWrapping)||l.push(d)};for(let l of t){if(!l.operationId&&!l.route&&!l.webhookName&&!l.workflowId&&SE(l.filepath))continue;let d=l.filepath.toLowerCase();if(a.length>0){let _=null;if(l.workflowId&&a.some(m=>m.workflow.workflowId===l.workflowId))_=l.workflowId;else for(let m of s){let f=m.workflow.workflowId,E=f.replace(/[^a-zA-Z0-9]/g,`_`).toLowerCase();if(d===`workflow_${f.toLowerCase()}`||d===`workflow_${E}`||d.includes(`_workflows_${E}`)||d.includes(f.toLowerCase())){_=f;break}}if(_){e.workflowCodeExamples||(e.workflowCodeExamples={});let m=e.workflowCodeExamples[_]??[];c(m,l),e.workflowCodeExamples[_]=m;continue}}if(i.length===0)continue;let u=null,p=l.webhookName||l.route;if(l.operationId&&n[l.operationId])u=l.operationId;else if(p&&l.method){let _=p.replace(/^\/+/,``);for(let[m,f]of i){let E=f.route.replace(/^\/+/,``);if((!l.webhookName||f.isWebhook)&&E===_&&f.method===l.method.toLowerCase()){u=m;break}}}if(!u){for(let[_,m]of r)if(m.op.operationId&&d.includes(m.op.operationId.toLowerCase())){u=_;break}}if(!u)for(let[_,m]of o){let f=m.route.replace(/[^a-zA-Z0-9]/g,`_`).toLowerCase();if(d.includes(f)&&d.includes(m.method.toLowerCase())){u=_;break}}if(u){let _=n[u],m=l;if(_&&l.content.split(`
`).length>25){let E=D_(l.content,_.op.operationId,_.route,_.method);m=W$1(U({},l),{content:E??l.content})}let f=e.codeExamples[u]??[];c(f,m),e.codeExamples[u]=f}else if(l.content.split(`
`).length>1)for(let[_,m]of i){let f=D_(l.content,m.op.operationId,m.route,m.method);if(f){let E=e.codeExamples[_]??[];c(E,W$1(U({},l),{content:f,operationId:_,route:m.route,method:m.method})),e.codeExamples[_]=E}}}}function BE(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function zE(e){switch(e.trim().toLowerCase()){case`c`:return`c`;case`cpp`:case`c++`:case`cxx`:return`cpp`;case`csharp`:case`cs`:case`c#`:case`dotnet`:return`csharp`;case`go`:case`golang`:return`go`;case`java`:return`java`;case`kotlin`:case`kt`:return`kotlin`;case`php`:return`php`;case`python`:case`python-all`:case`py`:return`python`;case`ruby`:case`rb`:return`ruby`;case`rust`:case`rs`:return`rust`;case`sh`:case`bash`:case`shell`:case`zsh`:case`curl`:return`sh`;case`swift`:return`swift`;case`json`:return`json`;default:return`ts`}}var GE={c:/* @__PURE__ */ new Set([`auto`,`break`,`case`,`const`,`continue`,`default`,`do`,`else`,`enum`,`extern`,`for`,`goto`,`if`,`inline`,`register`,`restrict`,`return`,`sizeof`,`static`,`struct`,`switch`,`typedef`,`union`,`volatile`,`while`,`NULL`]),cpp:/* @__PURE__ */ new Set([`alignas`,`alignof`,`auto`,`break`,`case`,`catch`,`class`,`const`,`constexpr`,`continue`,`co_await`,`co_return`,`co_yield`,`decltype`,`default`,`delete`,`do`,`else`,`enum`,`explicit`,`export`,`extern`,`false`,`for`,`friend`,`goto`,`if`,`inline`,`mutable`,`namespace`,`new`,`noexcept`,`nullptr`,`operator`,`override`,`private`,`protected`,`public`,` return`,`return`,`sizeof`,`static`,`static_cast`,`struct`,`switch`,`template`,`this`,`throw`,`true`,`try`,`typedef`,`typename`,`union`,`using`,`virtual`,`volatile`,`while`]),csharp:/* @__PURE__ */ new Set([`abstract`,`as`,`async`,`await`,`base`,`break`,`case`,`catch`,`checked`,`class`,`const`,`continue`,`default`,`delegate`,`do`,`else`,`enum`,`event`,`explicit`,`extern`,`false`,`finally`,`fixed`,`for`,`foreach`,`goto`,`if`,`implicit`,`in`,`interface`,`internal`,`is`,`lock`,`namespace`,`new`,`null`,`operator`,`out`,`override`,`params`,`private`,`protected`,`public`,`readonly`,`record`,`ref`,`return`,`sealed`,`sizeof`,`stackalloc`,`static`,`struct`,`switch`,`this`,`throw`,`true`,`try`,`typeof`,`unchecked`,`unsafe`,`using`,`var`,`virtual`,`void`,`volatile`,`while`,`yield`]),go:/* @__PURE__ */ new Set([`break`,`case`,`chan`,`const`,`continue`,`default`,`defer`,`else`,`fallthrough`,`false`,`for`,`func`,`go`,`goto`,`if`,`import`,`interface`,`map`,`nil`,`package`,`range`,`return`,`select`,`struct`,`switch`,`true`,`type`,`var`]),java:/* @__PURE__ */ new Set([`abstract`,`assert`,`break`,`case`,`catch`,`class`,`const`,`continue`,`default`,`do`,`else`,`enum`,`extends`,`false`,`final`,`finally`,`for`,`goto`,`if`,`implements`,`import`,`instanceof`,`interface`,`native`,`new`,`null`,`package`,`private`,`protected`,`public`,`record`,`return`,`static`,`strictfp`,`super`,`switch`,`synchronized`,`this`,`throw`,`throws`,`transient`,`true`,`try`,`var`,`void`,`volatile`,`while`]),kotlin:/* @__PURE__ */ new Set([`abstract`,`actual`,`annotation`,`as`,`break`,`by`,`catch`,`class`,`companion`,`const`,`constructor`,`continue`,`crossinline`,`data`,`do`,`else`,`enum`,`expect`,`external`,`false`,`final`,`finally`,`for`,`fun`,`get`,`if`,`import`,`in`,`infix`,`init`,`inline`,`inner`,`interface`,`internal`,`is`,`it`,`lateinit`,`noinline`,`null`,`object`,`open`,`operator`,`out`,`override`,`package`,`private`,`protected`,`public`,`reified`,`return`,`sealed`,`set`,`super`,`suspend`,`tailrec`,`this`,`throw`,`true`,`try`,`typealias`,`val`,`var`,`vararg`,`when`,`where`,`while`]),php:/* @__PURE__ */ new Set([`abstract`,`and`,`array`,`as`,`break`,`callable`,`case`,`catch`,`class`,`clone`,`const`,`continue`,`declare`,`default`,`die`,`do`,`echo`,`else`,`elseif`,`empty`,`enddeclare`,`endfor`,`endforeach`,`endif`,`endswitch`,`endwhile`,`eval`,`exit`,`extends`,`false`,`final`,`finally`,`fn`,`for`,`foreach`,`function`,`global`,`goto`,`if`,`implements`,`include`,`include_once`,`instanceof`,`insteadof`,`interface`,`isset`,`list`,`match`,`namespace`,`new`,`null`,`or`,`print`,`private`,`protected`,`public`,`readonly`,`require`,`require_once`,`return`,`self`,`static`,`switch`,`throw`,`trait`,`true`,`try`,`unset`,`use`,`var`,`void`,`while`,`xor`,`yield`]),python:/* @__PURE__ */ new Set([`False`,`None`,`True`,`and`,`as`,`assert`,`async`,`await`,`break`,`class`,`continue`,`def`,`del`,`elif`,`else`,`except`,`finally`,`for`,`from`,`global`,`if`,`import`,`in`,`is`,`lambda`,`match`,`nonlocal`,`not`,`or`,`pass`,`raise`,`return`,`self`,`try`,`while`,`with`,`yield`]),ruby:/* @__PURE__ */ new Set([`BEGIN`,`END`,`__ENCODING__`,`__FILE__`,`__LINE__`,`alias`,`and`,`begin`,`break`,`case`,`class`,`def`,`defined?`,`do`,`else`,`elsif`,`end`,`ensure`,`false`,`for`,`if`,`in`,`module`,`next`,`nil`,`not`,`or`,`puts`,`raise`,`redo`,`require`,`require_relative`,`rescue`,`retry`,`return`,`self`,`super`,`then`,`true`,`undef`,`unless`,`until`,`when`,`while`,`yield`]),rust:/* @__PURE__ */ new Set([`Self`,`as`,`async`,`await`,`break`,`const`,`continue`,`crate`,`dyn`,`else`,`enum`,`extern`,`false`,`fn`,`for`,`if`,`impl`,`in`,`let`,`loop`,`match`,`mod`,`move`,`mut`,`pub`,`ref`,`return`,`self`,`static`,`struct`,`super`,`trait`,`true`,`type`,`unsafe`,`use`,`where`,`while`]),sh:/* @__PURE__ */ new Set([`case`,`curl`,`do`,`done`,`echo`,`elif`,`else`,`esac`,`exit`,`export`,`fi`,`for`,`function`,`if`,`in`,`jq`,`local`,`printf`,`read`,`return`,`select`,`set`,`shift`,`source`,`then`,`trap`,`unset`,`until`,`while`]),swift:/* @__PURE__ */ new Set([`Any`,`Protocol`,`Self`,`Type`,`actor`,`as`,`associatedtype`,`async`,`await`,`break`,`case`,`catch`,`class`,`continue`,`default`,`defer`,`deinit`,`do`,`else`,`enum`,`extension`,`fallthrough`,`false`,`fileprivate`,`final`,`for`,`func`,`guard`,`if`,`import`,`in`,`init`,`inout`,`internal`,`is`,`isolated`,`lazy`,`let`,`mutating`,`nil`,`nonisolated`,`open`,`operator`,`optional`,`override`,`private`,`protocol`,`public`,`repeat`,`required`,`rethrows`,`return`,`self`,`some`,`static`,`struct`,`subscript`,`super`,`switch`,`throw`,`throws`,`true`,`try`,`typealias`,`unowned`,`var`,`weak`,`where`,`while`]),ts:/* @__PURE__ */ new Set([`abstract`,`any`,`as`,`async`,`await`,`break`,`case`,`catch`,`class`,`const`,`constructor`,`continue`,`debugger`,`declare`,`default`,`delete`,`do`,`else`,`enum`,`export`,`extends`,`false`,`finally`,`for`,`from`,`function`,`get`,`if`,`implements`,`import`,`in`,`infer`,`instanceof`,`interface`,`is`,`keyof`,`let`,`module`,`namespace`,`never`,`new`,`null`,`of`,`package`,`private`,`protected`,`public`,`readonly`,` override`,`override`,`require`,`return`,`satisfies`,`set`,`static`,`super`,`switch`,`this`,`throw`,`true`,`try`,`type`,`typeof`,`undefined`,`unique`,`unknown`,`var`,`void`,`while`,`with`,`yield`]),json:/* @__PURE__ */ new Set([`true`,`false`,`null`])};var FE=/* @__PURE__ */ new Set([`bool`,`boolean`,`byte`,`char`,`double`,`error`,`f32`,`f64`,`float`,`i8`,`i16`,`i32`,`i64`,`i128`,`int`,`int8_t`,`int16_t`,`int32_t`,`int64_t`,`isize`,`long`,`number`,`object`,`short`,`size_t`,`str`,`string`,`u8`,`u16`,`u32`,`u64`,`u128`,`uint`,`uint8_t`,`uint16_t`,`uint32_t`,`uint64_t`,`uintptr`,`unsigned`,`usize`,`void`,`cdd_c_error_t`,`Result`,`Option`,`Ok`,`Err`,`Some`,`Box`,`Vec`,`String`,`Task`,`Promise`,`Observable`,`URL`,`URLRequest`,`URLSession`]);function be(e,t){let n=BE(t);return e===`plain`?n:`<span class="cdd-tok-${e}">${n}</span>`}function kt(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`}function Mn(e){return kt(e)||e>=`0`&&e<=`9`}function lo(e){return e>=`0`&&e<=`9`}function B_(e,t){let n=t;for(;n<e.length&&(e.charAt(n)===` `||e.charCodeAt(n)===9);)n++;return e.charAt(n)}function Aa(e,t,n,i){let r=t+n.length;for(;r<e.length;){if(i&&e.charCodeAt(r)===92){r+=2;continue}if(e.startsWith(n,r))return r+n.length;r++}return e.length}function Xa(e,t){if(!e)return``;let n=zE(t),i=GE[n],r=n===`python`||n===`ruby`||n===`sh`||n===`php`,o=n===`c`||n===`cpp`||n===`csharp`,a=n===`php`||n===`sh`||n===`ruby`,s=[],c=0,l=e.length;for(;c<l;){let d=e.charAt(c),u=e.charAt(c+1);if(n===`php`&&(e.startsWith(`<?php`,c)||e.startsWith(`?>`,c))){let _=e.startsWith(`<?php`,c)?5:2;s.push(be(`keyword`,e.slice(c,c+_))),c+=_;continue}if(n===`ts`&&(e.startsWith(`<script`,c)||e.startsWith(`<\/script>`,c))){let _=e.indexOf(`>`,c),m=_!==-1?_+1:l;s.push(be(`keyword`,e.slice(c,m))),c=m;continue}if(d===`/`&&u===`*`){let _=e.indexOf(`*/`,c+2),m=_!==-1?_+2:l;s.push(be(`comment`,e.slice(c,m))),c=m;continue}if(d===`/`&&u===`/`&&n!==`sh`&&n!==`python`&&n!==`ruby`&&n!==`json`){let _=e.indexOf(`
`,c+2),m=_!==-1?_:l;s.push(be(`comment`,e.slice(c,m))),c=m;continue}if(n===`rust`&&d===`#`&&(u===`[`||u===`!`&&e.charAt(c+2)===`[`)){let _=e.indexOf(`]`,c+2),m=_!==-1?_+1:l;s.push(be(`type`,e.slice(c,m))),c=m;continue}if(o&&d===`#`){let _=e.indexOf(`
`,c+1),m=_!==-1?_:l;s.push(be(`keyword`,e.slice(c,m))),c=m;continue}if(r&&d===`#`){let _=e.indexOf(`
`,c+1),m=_!==-1?_:l;s.push(be(`comment`,e.slice(c,m))),c=m;continue}if(n===`python`&&/^[frb]$/i.test(d)&&(u===`"`||u===`'`)){let m=e.startsWith(u.repeat(3),c+1)?u.repeat(3):u,f=Aa(e,c+1,m,!0);s.push(be(`string`,e.slice(c,f))),c=f;continue}if(e.startsWith(`"""`,c)||n===`python`&&e.startsWith(`'''`,c)){let _=e.slice(c,c+3),m=Aa(e,c,_,!0);s.push(be(`string`,e.slice(c,m))),c=m;continue}if(d===`"`||d===`'`||d==="`"&&(n===`ts`||n===`go`||n===`sh`)){if(n===`rust`&&d===`'`&&kt(u)&&e.charAt(c+2)!==`'`){let f=c+2;for(;Mn(e.charAt(f));)f++;s.push(be(`type`,e.slice(c,f))),c=f;continue}let _=Aa(e,c,d,d!=="`"),m=e.slice(c,_);n===`json`&&d===`"`&&B_(e,_)===`:`?s.push(be(`variable`,m)):s.push(be(`string`,m)),c=_;continue}if(d===`@`&&kt(u)){let _=c+2;for(;Mn(e.charAt(_));)_++;let m=n===`ruby`?`variable`:`type`;s.push(be(m,e.slice(c,_))),c=_;continue}if(a&&d===`$`){if(u===`{`){let _=e.indexOf(`}`,c+2),m=_!==-1?_+1:l;s.push(be(`variable`,e.slice(c,m))),c=m;continue}if(kt(u)||lo(u)){let _=c+2;for(;Mn(e.charAt(_));)_++;s.push(be(`variable`,e.slice(c,_))),c=_;continue}}if(n===`ruby`&&d===`:`&&kt(u)){let _=c+2;for(;Mn(e.charAt(_));)_++;s.push(be(`string`,e.slice(c,_))),c=_;continue}if(n===`sh`&&d===`-`&&(c===0||/\s/.test(e.charAt(c-1)))&&(kt(u)||u===`-`&&kt(e.charAt(c+2)))){let _=c+1;for(;Mn(e.charAt(_))||e.charAt(_)===`-`;)_++;s.push(be(`variable`,e.slice(c,_))),c=_;continue}if(lo(d)||d===`-`&&lo(u)&&n===`json`){let _=c+1;if(d===`0`&&/^[xX]$/.test(u))for(_+=1;/[0-9a-fA-F_]/.test(e.charAt(_));)_++;else for(;/[0-9._eE+-]/.test(e.charAt(_));)_++;s.push(be(`number`,e.slice(c,_))),c=_;continue}if(kt(d)){let _=c+1;for(;_<l&&Mn(e.charAt(_));)_++;(n===`rust`&&e.charAt(_)===`!`||n===`ruby`&&e.charAt(_)===`?`)&&_++;let m=e.slice(c,_),f=B_(e,_);if(i.has(m)){let E=/^(?:true|false|True|False|null|nil|None|nullptr|NULL)$/.test(m);s.push(be(E?`number`:`keyword`,m))}else FE.has(m)?s.push(be(`type`,m)):f===`(`||n===`rust`&&m.endsWith(`!`)?s.push(be(`function`,m)):/^[A-Z]/.test(m)&&!/^[A-Z0-9_]+$/.test(m)?s.push(be(`type`,m)):s.push(be(`plain`,m));c=_;continue}if(`+-*/%=<>!&|^~?:`.includes(d)){let _=c+1;for(;_<l&&`+-*/%=<>!&|^~?:`.includes(e.charAt(_));)_++;s.push(be(`operator`,e.slice(c,_))),c=_;continue}let p=c+1;for(;p<l&&!kt(e.charAt(p))&&!lo(e.charAt(p))&&!`"+-*/%=<>!&|^~?:#@\`$'`.includes(e.charAt(p));)p++;s.push(be(`plain`,e.slice(c,p))),c=p}return s.join(``)}function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function z_(e){let t=e.trim();return/^(javascript|vbscript|data):/i.test(t)?`#`:h(t)}function Ii(e){return e.replace(/[^a-zA-Z0-9_-]/g,``)}function _o(e){if(!e||!e.url)return`https://api.example.com`;let t=e.url;if(e.variables)for(let[n,i]of Object.entries(e.variables))t=t.replace(new RegExp(`\\{${n}\\}`,`g`),i.default);return t}function pt(e){return e?ue.parse(e,{async:!1}).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,``).replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,``).replace(/href\s*=\s*"(?:javascript|vbscript|data):[^"]*"/gi,`href="#"`).replace(/href\s*=\s*'(?:javascript|vbscript|data):[^']*'/gi,`href='#'`):``}function WE(e,t){if(!me(e))return e;let i=e.$ref.startsWith(`#/components/parameters/`)?e.$ref.slice(24):e.$ref,r=t?.parameters?.[i];if(r&&!me(r))return r}function Gp(e,t,n){let i=/* @__PURE__ */ new Map,r=[...e?.parameters??[],...t.parameters??[]];for(let o of r){let a=WE(o,n);a&&i.set(`${a.in}:${a.name}`,a)}return Array.from(i.values())}function Fp(e,t){if(!e)return;if(!me(e))return e;let i=e.$ref.startsWith(`#/components/requestBodies/`)?e.$ref.slice(27):e.$ref,r=t?.requestBodies?.[i];if(r&&!me(r))return r}function VE(e,t){if(!e)return;if(!me(e))return e;let i=e.$ref.startsWith(`#/components/responses/`)?e.$ref.slice(23):e.$ref,r=t?.responses?.[i];if(r&&!me(r))return r}function G_(e,t,n,i=`https://api.example.com`,r,o){let a=e.toUpperCase(),l=`curl ${a===`GET`?``:`-X ${a} `}"${i.endsWith(`/`)?i.slice(0,-1):i}${t}"`,d=` \\
  `,u=Gp(r,n,o);for(let _ of u)_.in===`header`&&(l+=`${d}-H "${_.name}: <value>"`);let p=Fp(n.requestBody,o);if(p&&p.content){let _=Object.keys(p.content)[0];_&&(l+=`${d}-H "Content-Type: ${_}"`,l+=`${d}-d '{"key": "value"}'`)}return l}var HE=10;function an(e,t=0,n=``,i=$i){if(t>HE)return`<span class="cdd-prop-type">object</span>`;if(me(e))return`<span class="cdd-schema-ref">${h(e.$ref.split(`/`).pop()||e.$ref)}</span>`;let r=`<div class="cdd-schema-container" style="margin-left: ${t*16}px">`;if(e.type===`object`&&e.properties){r+=`<table class="cdd-schema-table">
      <thead><tr><th>${h(i.tableHeaderProperty)}</th><th>${h(i.tableHeaderType)}</th><th>${h(i.tableHeaderDescription)}</th></tr></thead>
      <tbody>`;for(let[o,a]of Object.entries(e.properties)){let s=e.required?.includes(o)??!1,c=n?`${n}-prop-${o}`:`prop-${o}`;if(me(a)){let l=a.$ref.split(`/`).pop()||a.$ref;r+=`<tr id="${h(c)}" class="cdd-deep-link-row">
        <td><a href="#${h(c)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${h(o)}${s?`<span class="cdd-required">*</span>`:``}</span></td>
        <td><span class="cdd-schema-ref">${h(l)}</span></td>
        <td><div class="cdd-prop-desc">${pt(a.description)}</div></td>
      </tr>`}else{let l=a.type||`any`;r+=`<tr id="${h(c)}" class="cdd-deep-link-row">
        <td><a href="#${h(c)}" class="cdd-anchor">#</a><span class="cdd-prop-name">${h(o)}${s?`<span class="cdd-required">*</span>`:``}</span></td>
        <td><span class="cdd-prop-type">${h(l)}</span></td>
        <td><div class="cdd-prop-desc">${pt(a.description)}</div></td>
      </tr>`,(a.type===`object`||a.type===`array`)&&(r+=`<tr><td colspan="3">${an(a,t+1,c,i)}</td></tr>`)}}r+=`</tbody></table>`}else e.type===`array`&&e.items?r+=`<div class="cdd-schema-array">${h(i.arrayOf)} ${an(e.items,t+1,n,i)}</div>`:(r+=`<span class="cdd-prop-type">${h(e.type||`any`)}</span>`,e.description&&(r+=`<div class="cdd-prop-desc">${pt(e.description)}</div>`));return r+=`</div>`,r}function Pi(e){if(qn(e)){let t=typeof e.type==`object`&&e.type!==null?`${e.type.type} (${e.type.version})`:e.type||`jsonpointer`;return`<code class="cdd-expr-badge">${h(e.context)}</code> &rarr; <code>${h(e.selector)}</code> <span class="cdd-badge cdd-badge-meta">${h(t)}</span>`}return typeof e==`string`?`<code>${h(e)}</code>`:`<code>${h(JSON.stringify(e))}</code>`}function XE(e){return e.type?typeof e.type==`string`?e.type:`${e.type.type} (${e.type.version})`:`simple`}function qa(e,t,n,i,r){return`
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
                    <pre><code class="language-bash" data-raw-code="${h(t)}">${Xa(t,`bash`)}</code></pre>
                  </div>
                </div>
                <div class="cdd-tab-content cdd-tab-content-sdk">
                  ${i.map(o=>{let a=Ii(o),s=n.filter(l=>l.language===o),c=o===`ts`?`typescript`:o===`sh`?`bash`:a;return`
                      <div class="cdd-lang-block cdd-show-if-${a}">
                        ${s.length>0?s.map(l=>{return`
                          <div class="cdd-variant-block ${l.includeImports?`cdd-show-if-imports`:`cdd-hide-if-imports`} ${l.includeWrapping?`cdd-show-if-wrapping`:`cdd-hide-if-wrapping`}">
                            <div style="position: relative;">
                              <button class="cdd-copy-btn">${h(r.copy)}</button>
                              <pre><code class="language-${h(c)}" data-raw-code="${h(l.content)}">${Xa(l.content,l.language)}</code></pre>
                            </div>
                          </div>
                        `}).join(``):`<div class="cdd-no-example">${h(r.noExampleFor)} ${h(o)}</div>`}
                      </div>
                    `}).join(``)}
                </div>
              </div>
            </div>
          </aside>`}function qE(e,t,n,i=$i){let r=e.workflow,o=`workflow-${r.workflowId}`,a=t.workflowCodeExamples?.[r.workflowId]??[],s=_o(t.spec.servers?.[0]),c=r.dependsOn&&r.dependsOn.length>0?`<div class="cdd-workflow-depends">
                <strong>${h(i.workflowDependsOnHeading)}:</strong>
                ${r.dependsOn.map(_=>{return`<a href="#workflow-${h(_.split(`.workflows.`)[1]??_)}" class="cdd-badge cdd-badge-workflow">${h(_)}</a>`}).join(` `)}
              </div>`:``,l=e.hasCycles?`<span class="cdd-badge cdd-badge-delete">DAG CYCLE DETECTED</span>`:``,d=e.resolvedInputs?`<h3 class="cdd-section-title">${h(i.workflowInputsHeading)}</h3>
           ${an(e.resolvedInputs,0,`${o}-input`,i)}`:``,u=e.normalizedSteps.map((_,m)=>{let f=_.step,E=`step-${r.workflowId}-${f.stepId}`,C=``;if(_.linkedTarget){let T=_.linkedTarget;if(T.kind===`workflow`)C=`<a href="#${h(T.anchorId||``)}" class="cdd-badge cdd-badge-workflow">WORKFLOW: ${h(T.operationId||``)}</a>`;else if(T.kind===`channel`)C=`<span class="cdd-badge cdd-badge-channel">${h((T.method||`send`).toUpperCase())} ${h(T.route||``)}</span>`;else{let w=(T.method||`OP`).toUpperCase(),B=T.route?`${w} ${T.route}`:T.operationId||w;C=T.anchorId?`<a href="#${h(T.anchorId)}" class="cdd-badge cdd-badge-${h(T.method||`get`)} cdd-badge-${h(w)}">${h(B)}</a>`:`<span class="cdd-badge cdd-badge-get">${h(B)}</span>`}}let b=[];if(f.timeout!==void 0&&b.push(`<span class="cdd-badge cdd-badge-meta">timeout: ${h(String(f.timeout))}ms</span>`),f.correlationId&&b.push(`<span class="cdd-badge cdd-badge-meta">correlationId: ${h(f.correlationId)}</span>`),_.upstreamStepIds.length>0)for(let T of _.upstreamStepIds)b.push(`<a href="#step-${h(r.workflowId)}-${h(T)}" class="cdd-badge cdd-badge-meta">&larr; ${h(T)}</a>`);let P=_.mergedParameters.length>0?`<h4 class="cdd-step-subtitle">${h(i.stepParametersHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${h(i.tableHeaderName)}</th><th>${h(i.tableHeaderIn)}</th><th>Value / Expression</th></tr></thead>
                         <tbody>
                           ${_.mergedParameters.map(T=>`<tr>
                                 <td><code>${h(T.name)}</code></td>
                                 <td>${h(T.in||`workflow`)}</td>
                                 <td>${Pi(T.value)}</td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``,U=f.requestBody?`<h4 class="cdd-step-subtitle">${h(i.stepRequestBodyHeading)}${f.requestBody.contentType?` (<code>${h(f.requestBody.contentType)}</code>)`:``}</h4>
                   ${f.requestBody.payload!==void 0?`<pre class="cdd-payload-pre"><code class="language-json">${Xa(typeof f.requestBody.payload==`string`?f.requestBody.payload:JSON.stringify(f.requestBody.payload,null,2),`json`)}</code></pre>`:``}
                   ${f.requestBody.replacements&&f.requestBody.replacements.length>0?`<table class="cdd-params-table">
                                <thead><tr><th>Target Pointer</th><th>Replacement Value</th></tr></thead>
                                <tbody>
                                  ${f.requestBody.replacements.map(T=>`<tr>
                                        <td><code>${h(T.target)}</code></td>
                                        <td>${Pi(T.value)}</td>
                                      </tr>`).join(``)}
                                </tbody>
                              </table>`:``}`:``,F=f.successCriteria&&f.successCriteria.length>0?`<h4 class="cdd-step-subtitle">${h(i.successCriteriaHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>Context</th><th>Condition</th><th>${h(i.tableHeaderType)}</th></tr></thead>
                         <tbody>
                           ${f.successCriteria.map(T=>`<tr>
                                 <td><code>${h(T.context||`$statusCode`)}</code></td>
                                 <td><code>${h(T.condition)}</code></td>
                                 <td><span class="cdd-badge cdd-badge-meta">${h(XE(T))}</span></td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``,j=_.resolvedOnSuccess.length>0?`<h4 class="cdd-step-subtitle">${h(i.onSuccessHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${_.resolvedOnSuccess.map(T=>{let w=T.stepId?` &rarr; step <code>${h(T.stepId)}</code>`:T.workflowId?` &rarr; workflow <code>${h(T.workflowId)}</code>`:``;return`<li><span class="cdd-badge cdd-badge-post">${h(T.type.toUpperCase())}</span> <strong>${h(T.name)}</strong>${w}</li>`}).join(``)}
                       </ul>`:``,q=_.resolvedOnFailure.length>0?`<h4 class="cdd-step-subtitle">${h(i.onFailureHeading)}</h4>
                       <ul class="cdd-action-list">
                         ${_.resolvedOnFailure.map(T=>{let w=T.stepId?` &rarr; step <code>${h(T.stepId)}</code>`:T.workflowId?` &rarr; workflow <code>${h(T.workflowId)}</code>`:``,B=T.retryLimit!==void 0||T.retryAfter!==void 0?` (retryLimit: ${h(String(T.retryLimit??1))}, retryAfter: ${h(String(T.retryAfter??0))}s)`:``;return`<li><span class="cdd-badge cdd-badge-delete">${h(T.type.toUpperCase())}</span> <strong>${h(T.name)}</strong>${w}${B}</li>`}).join(``)}
                       </ul>`:``,z=f.outputs&&Object.keys(f.outputs).length>0?`<h4 class="cdd-step-subtitle">${h(i.stepOutputsHeading)}</h4>
                       <table class="cdd-params-table">
                         <thead><tr><th>${h(i.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                         <tbody>
                           ${Object.entries(f.outputs).map(([T,w])=>`<tr>
                                 <td><code>${h(T)}</code></td>
                                 <td>${Pi(w)}</td>
                               </tr>`).join(``)}
                         </tbody>
                       </table>`:``;return`
              <div id="${h(E)}" class="cdd-step-card cdd-deep-link-row" data-step-id="${h(f.stepId)}" data-method="${h((_.linkedTarget?.method||`GET`).toUpperCase())}" data-route="${h(_.linkedTarget?.route||`/${f.stepId}`)}" data-base-url="${h(s)}">
                <div class="cdd-step-header">
                  <span class="cdd-step-index">${m+1}</span>
                  <a href="#${h(E)}" class="cdd-anchor">#</a>
                  <strong class="cdd-step-title">${h(f.stepId)}</strong>
                  ${C}
                  ${b.join(` `)}
                </div>
                ${f.description?`<div class="cdd-description">${pt(f.description)}</div>`:``}
                ${P}
                ${U}
                ${F}
                ${j}
                ${q}
                ${z}
              </div>`}).join(``),p=r.outputs&&Object.keys(r.outputs).length>0?`<h3 class="cdd-section-title">${h(i.workflowOutputsHeading)}</h3>
               <table class="cdd-params-table">
                 <thead><tr><th>${h(i.tableHeaderName)}</th><th>Expression / Selector</th></tr></thead>
                 <tbody>
                   ${Object.entries(r.outputs).map(([_,m])=>`<tr>
                         <td><code>${h(_)}</code></td>
                         <td>${Pi(m)}</td>
                       </tr>`).join(``)}
                 </tbody>
               </table>`:``;return`
        <article id="${h(o)}" class="cdd-endpoint cdd-workflow">
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

          ${qa(o,e.cliPreview,a,n,i)}
        </article>`}function jE(e,t=$i){if(!e)return``;let n=Object.entries(e.inputs??{}),i=Object.entries(e.parameters??{}),r=Object.entries(e.successActions??{}),o=Object.entries(e.failureActions??{});if(n.length===0&&i.length===0&&r.length===0&&o.length===0)return``;let a=`<h2 id="section-arazzo-components" class="cdd-main-title">${h(t.arazzoComponentsHeading)}</h2>`;for(let[s,c]of n)a+=`<div id="arazzo-input-${h(s)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.inputs.${h(s)}</h3>
          ${an(c,0,`arazzo-input-${s}`,t)}
        </div>`;return i.length>0&&(a+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.parameters</h3>
          <table class="cdd-params-table">
            <thead><tr><th>Key</th><th>${h(t.tableHeaderName)}</th><th>${h(t.tableHeaderIn)}</th><th>Default Value</th></tr></thead>
            <tbody>
              ${i.map(([s,c])=>`<tr id="arazzo-param-${h(s)}">
                    <td><code>${h(s)}</code></td>
                    <td><code>${h(c.name)}</code></td>
                    <td>${h(c.in||`workflow`)}</td>
                    <td>${Pi(c.value)}</td>
                  </tr>`).join(``)}
            </tbody>
          </table>
        </div>`),r.length>0&&(a+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.successActions</h3>
          <ul class="cdd-action-list">
            ${r.map(([s,c])=>`<li id="arazzo-success-${h(s)}"><code>${h(s)}</code>: <span class="cdd-badge cdd-badge-post">${h(c.type.toUpperCase())}</span> <strong>${h(c.name)}</strong></li>`).join(``)}
          </ul>
        </div>`),o.length>0&&(a+=`<div class="cdd-schema-section">
          <h3 class="cdd-schema-title">$components.failureActions</h3>
          <ul class="cdd-action-list">
            ${o.map(([s,c])=>`<li id="arazzo-failure-${h(s)}"><code>${h(s)}</code>: <span class="cdd-badge cdd-badge-delete">${h(c.type.toUpperCase())}</span> <strong>${h(c.name)}</strong></li>`).join(``)}
          </ul>
        </div>`),a}function KE(e,t=[],n=`light`,i={},r,o,a=!1,s=!1){let c=U(U({},$i),i),l=DE(e,r);t.length>0&&UE(l,t);let d=Array.from(new Set(t.map(w=>w.language)));d.length===0&&d.push(`javascript`);let u=o&&d.includes(o)?d.indexOf(o):0,p=l.spec,_=_o(p.servers?.[0]),m=p.paths||{},f=``,E=``,C=``,b=``,P=``,U$2=l.sourceDescriptions&&l.sourceDescriptions.length>0?`<div class="cdd-source-descriptions">
                <strong>${h(c.sourceDescriptionsHeading)}:</strong>
                ${l.sourceDescriptions.map(w=>`<span class="cdd-source-chip"><span class="cdd-badge cdd-badge-meta">${h(w.type||`openapi`)}</span> <strong>${h(w.name)}</strong>: <code>${h(w.url)}</code></span>`).join(` `)}
              </div>`:``;for(let[w,B]of Object.entries(m)){if(me(B))continue;let ee=on(B),J=!1,S=`<details class="cdd-toc-group"><summary class="cdd-toc-route">${h(w)}</summary>`;for(let[M,x]of ee){J=!0;let I=x.operationId||`${M}-${w}`,O=M.toUpperCase(),K=x.servers?.[0]?_o(x.servers[0]):B.servers?.[0]?_o(B.servers[0]):_;S+=`<a href="#${h(I)}" class="cdd-toc-item cdd-method-${h(M)}">${h(O)}</a>`;let R=G_(M,w,x,K,B,p.components),ie=l.codeExamples[I]||[],re=Gp(B,x,p.components),ae=Fp(x.requestBody,p.components),ce=``;if(ae&&ae.content){let ne=[];for(let[Te,Me]of Object.entries(ae.content))Me.schema&&ne.push(`<div class="cdd-media-block"><code class="cdd-badge cdd-badge-meta">${h(Te)}</code>${an(Me.schema,0,`${I}-req`,c)}</div>`);ne.length>0&&(ce=`<h3 class="cdd-section-title">${h(c.requestBody)}</h3>
                    ${ae.description?`<div class="cdd-description">${pt(ae.description)}</div>`:``}
                    ${ne.join(``)}`)}let Ce=``;if(x.responses){let ne=[];for(let[Te,Me]of Object.entries(x.responses)){let Tt=VE(Me,p.components);if(!Tt)continue;let gs=[];if(Tt.content)for(let[Xp,bs]of Object.entries(Tt.content))bs.schema&&gs.push(`<div><code class="cdd-badge cdd-badge-meta">${h(Xp)}</code>${an(bs.schema,0,`${I}-resp-${Te}`,c)}</div>`);ne.push(`<tr><td><code>${h(Te)}</code></td><td>${pt(Tt.description)}${gs.join(``)}</td></tr>`)}ne.length>0&&(Ce=`<h3 class="cdd-section-title">${h(c.response)}</h3>
                    <table class="cdd-params-table">
                      <thead><tr><th>Status</th><th>${h(c.tableHeaderDescription)}</th></tr></thead>
                      <tbody>${ne.join(``)}</tbody>
                    </table>`)}f+=`
        <article id="${h(I)}" class="cdd-endpoint">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${h(x.summary||w)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-${h(M)} cdd-badge-${h(O)}">${h(O)}</span>
              <code class="cdd-path-text">${h(w)}</code>
            </div>
            ${x.description?`<div class="cdd-description">${pt(x.description)}</div>`:``}
            
            ${re.length>0?`
              <h3 class="cdd-section-title">${h(c.parameters)}</h3>
              <table class="cdd-params-table">
                <thead><tr><th>${h(c.tableHeaderName)}</th><th>${h(c.tableHeaderIn)}</th><th>${h(c.tableHeaderType)}</th><th>${h(c.tableHeaderDescription)}</th></tr></thead>
                <tbody>
                  ${re.map(ne=>{let Te=`${I}-param-${ne.name}`,Me=ne.schema&&!me(ne.schema)&&ne.schema.type?ne.schema.type:`any`;return`<tr id="${h(Te)}" class="cdd-deep-link-row">
                      <td><a href="#${h(Te)}" class="cdd-anchor">#</a><code>${h(ne.name)}${ne.required?`*`:``}</code></td>
                      <td>${h(ne.in)}</td>
                      <td>${h(Me)}</td>
                      <td>${pt(ne.description)}</td>
                    </tr>`}).join(``)}
                </tbody>
              </table>
            `:``}
            ${ce}
            ${Ce}

            <details class="cdd-try-it-out">
              <summary class="cdd-try-summary">${h(c.tryItOut)}</summary>
              <form class="cdd-try-form" method="${M===`get`?`GET`:`POST`}" action="/" data-method="${h(O)}" data-route="${h(w)}" data-base-url="${h(K)}">
                ${re.map(ne=>`
                    <div class="cdd-try-field">
                      <label for="try-${h(I)}-${h(ne.name)}">${h(ne.name)} (${h(ne.in)})${ne.required?` *`:``}</label>
                      <input type="text" id="try-${h(I)}-${h(ne.name)}" name="${h(ne.name)}" data-in="${h(ne.in)}" ${ne.required?`required`:``}>
                    </div>
                  `).join(``)}
                ${ae?`
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

          ${qa(I,R,ie,d,c)}
        </article>
      `}S+=`</details>`,J&&(E+=S)}if(p.webhooks)for(let[w,B]of Object.entries(p.webhooks)){if(me(B))continue;let ee=on(B);for(let[J,S]of ee){let M=S.operationId||`webhook-${J}-${w}`,x=J.toUpperCase();C+=`<a href="#${h(M)}" class="cdd-toc-item">WEBHOOK: ${h(w)} (${h(x)})</a>`;let I=G_(J,`/${w}`,S,_,B,p.components),O=l.codeExamples[M]||[];f+=`
        <article id="${h(M)}" class="cdd-endpoint cdd-webhook">
          <div class="cdd-endpoint-info">
            <h2 class="cdd-endpoint-title">${h(S.summary||w)}</h2>
            <div class="cdd-endpoint-path-row">
              <span class="cdd-badge cdd-badge-post">WEBHOOK</span>
              <span class="cdd-badge cdd-badge-${h(J)} cdd-badge-${h(x)}">${h(x)}</span>
              <code class="cdd-path-text">${h(w)}</code>
            </div>
            ${S.description?`<div class="cdd-description">${pt(S.description)}</div>`:``}
          </div>
          ${qa(M,I,O,d,c)}
        </article>`}}if(l.workflows&&l.workflows.length>0){f+=`<h2 id="section-workflows" class="cdd-main-title">${h(c.workflowsHeading)}</h2>`;for(let w of l.workflows){let B=w.workflow,ee=`workflow-${B.workflowId}`;b+=`<details class="cdd-toc-group" open>
              <summary class="cdd-toc-route"><a href="#${h(ee)}" class="cdd-toc-item cdd-toc-workflow-item">WORKFLOW: ${h(B.workflowId)}</a></summary>
              ${B.steps.map(J=>`<a href="#step-${h(B.workflowId)}-${h(J.stepId)}" class="cdd-toc-item">${h(J.stepId)}</a>`).join(``)}
            </details>`,f+=qE(w,l,d,c)}}if(p.components?.schemas){P+=`<h2 id="section-schemas" class="cdd-main-title">${h(c.schemas)}</h2>`;for(let[w,B]of Object.entries(p.components.schemas))P+=`
        <div id="schema-${h(w)}" class="cdd-schema-section">
          <h3 class="cdd-schema-title">${h(w)}</h3>
          ${an(B,0,`schema-${w}`,c)}
        </div>
      `}l.arazzoSpec?.components&&(P+=jE(l.arazzoSpec.components,c));let F=`
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
  `,j=`
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
  `,q=d.map(Ii);return{stylesHtml:`<style>
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
      
      --cdd-display-imports: ${a?`block`:`none`};
      --cdd-display-wrapping: ${s?`block`:`none`};
    }

    #opt-dark-mode:checked ~ .cdd-layout,
    [data-theme="dark"],
    :host([data-theme="dark"]),
    :host([theme="dark"]) {
      ${j}
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
    ${q.map(w=>`#lang-opt-${w}:checked ~ .cdd-layout .cdd-show-if-${w} { display: block; }`).join(`
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

    cdd-api-docs .cdd-layout {
      height: 100%;
      max-height: 100%;
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

    ${q.map(w=>`#lang-opt-${w}:checked ~ .cdd-layout label[for="lang-opt-${w}"] { background: var(--cdd-primary); color: var(--cdd-on-primary); border-color: var(--cdd-primary); font-weight: 500; }`).join(`
`)}
    ${q.map(w=>`#lang-opt-${w}:focus-visible ~ .cdd-layout label[for="lang-opt-${w}"] { outline: 2px solid var(--cdd-primary); outline-offset: 2px; }`).join(`
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
  </style>`,bodyHtml:`${d.map((w,B)=>`<input type="radio" id="lang-opt-${Ii(w)}" name="global-lang" class="cdd-visually-hidden" ${B===u?`checked`:``}>`).join(``)}
  <input type="checkbox" id="opt-imports" class="cdd-visually-hidden" ${a?`checked`:``}>
  <input type="checkbox" id="opt-wrapping" class="cdd-visually-hidden" ${s?`checked`:``}>
  <input type="checkbox" id="opt-dark-mode" class="cdd-visually-hidden" ${n===`dark`?`checked`:``}>

  <div class="cdd-layout">
    <aside class="cdd-sidebar-left" aria-label="${h(c.tocNavLabel)}">
      <h1 style="font-size: 1.25rem;">${h(p.info.title)}</h1>
      <div class="cdd-sidebar-title">${h(c.paths)}</div>
      ${E}
      ${C?`<div class="cdd-sidebar-title">${h(c.webhooksHeading)}</div>${C}`:``}
      ${b?`<div class="cdd-sidebar-title">${h(c.workflowsHeading)}</div>${b}`:``}
      <div class="cdd-sidebar-title">${h(c.schemas)}</div>
      <nav aria-label="${h(c.schemas)}">
        ${p.components?.schemas?Object.keys(p.components.schemas).map(w=>`<a href="#schema-${h(w)}" class="cdd-toc-item">${h(w)}</a>`).join(``):``}
      </nav>
    </aside>

    <main class="cdd-main">
      <header>
        <h1 style="font-size: 3rem; font-weight: 300;">${h(p.info.title)}</h1>
        <div class="cdd-description">${pt(p.info.description)}</div>
        ${U$2}
        ${p.info.termsOfService?`<p style="font-size: 0.875rem;"><a href="${z_(p.info.termsOfService)}" target="_blank">${h(c.termsOfService)}</a></p>`:``}
        ${p.info.contact?`<p style="font-size: 0.875rem;">${h(c.contactPrefix)}${p.info.contact.url?`<a href="${z_(p.info.contact.url)}" target="_blank">${h(p.info.contact.name||c.apiSupport)}</a>`:p.info.contact.email?`<a href="mailto:${h(p.info.contact.email)}">${h(p.info.contact.name||p.info.contact.email)}</a>`:h(p.info.contact.name||c.apiSupport)}</p>`:``}
      </header>
      ${f}
      ${P}
    </main>

    <aside class="cdd-sidebar-right">
      <div class="cdd-sidebar-title">${h(c.settings)}</div>
      
      <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${h(c.appearanceHeading)}</p>
      <label for="opt-dark-mode" class="cdd-setting-label">
        ${h(c.darkMode)}
      </label>

      <p style="font-size: 0.875rem; margin-top: 1rem; margin-bottom: 0.5rem;">${h(c.language)}</p>
      ${d.map(w=>`
        <label for="lang-opt-${Ii(w)}" class="cdd-setting-label">
          ${h(w)}
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
  </div>`,title:p.info.title,locale:c.locale}}function Ai(e){return v(e)?v(e.endpoints)||v(e.operations)||Array.isArray(e.operations)||v(e.workflows)||Array.isArray(e.workflows)||v(e.webhooks)||Array.isArray(e.webhooks):!1}function YE(e){let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch(i){return[]}if(Ai(t)&&(t=[t]),!Array.isArray(t))return[];let n=[];for(let i of t){if(!v(i))continue;let r=i.content,o=typeof i.filepath==`string`?i.filepath:``,a=typeof i.language==`string`?i.language:`typescript`;if(typeof r==`string`&&(o.endsWith(`.json`)||r.includes(`"endpoints"`)||r.includes(`"workflows"`)||r.includes(`"webhooks"`)||r.includes(`"operations"`)))try{let s=JSON.parse(r);if(Ai(s)){let c=typeof s.language==`string`?s.language:a;n.push(...Oa(s,c));continue}else if(Array.isArray(s)&&s.some(Ai)){for(let c of s){if(!Ai(c))continue;let l=typeof c.language==`string`?c.language:a;n.push(...Oa(c,l))}continue}}catch(s){console.warn(`cdd-docs-ui: Failed to securely parse docs.json payload.`,s)}if(Ai(i)){n.push(...Oa(i,a));continue}typeof r==`string`&&n.push({language:a,filepath:o,content:r,includeImports:typeof i.includeImports==`boolean`?i.includeImports:void 0,includeWrapping:typeof i.includeWrapping==`boolean`?i.includeWrapping:void 0,operationId:typeof i.operationId==`string`?i.operationId:void 0,route:typeof i.route==`string`?i.route:void 0,method:typeof i.method==`string`?i.method:void 0,webhookName:typeof i.webhookName==`string`?i.webhookName:void 0,workflowId:typeof i.workflowId==`string`?i.workflowId:void 0})}return n}function ja(e=document,t={}){let n=U(U({},$i),t);e.querySelectorAll(`input[name="ui-lang-proxy"]:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`change`,()=>{let P=b.id.replace(`proxy-`,``),U=e.querySelector(`#lang-opt-${P}`);U&&(U.checked=!0,U.dispatchEvent(new Event(`change`)))})}),e.querySelectorAll(`input[name="global-lang"]:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`change`,()=>{if(b.checked){let P=b.id.replace(`lang-opt-`,``);e.dispatchEvent(new CustomEvent(`cdd-language-change`,{bubbles:!0,detail:{language:P}}))}})});let o=e.querySelector(`input[data-onchange-proxy*="opt-imports"]:not([data-cdd-bound])`);o&&(o.setAttribute(`data-cdd-bound`,`true`),o.addEventListener(`change`,()=>{let b=e.querySelector(`#opt-imports`);b&&(b.checked=o.checked,b.dispatchEvent(new Event(`change`)))}));let a=e.querySelector(`input[data-onchange-proxy*="opt-wrapping"]:not([data-cdd-bound])`);a&&(a.setAttribute(`data-cdd-bound`,`true`),a.addEventListener(`change`,()=>{let b=e.querySelector(`#opt-wrapping`);b&&(b.checked=a.checked,b.dispatchEvent(new Event(`change`)))}));let s=e.querySelector(`#opt-imports:not([data-cdd-bound])`),c=e.querySelector(`#opt-wrapping:not([data-cdd-bound])`),l=()=>{let b=e.querySelector(`#opt-imports`),P=e.querySelector(`#opt-wrapping`);e.dispatchEvent(new CustomEvent(`cdd-docs-options-change`,{bubbles:!0,detail:{includeImports:b?b.checked:!0,includeWrapping:P?P.checked:!0}}))};s&&(s.setAttribute(`data-cdd-bound`,`true`),s.addEventListener(`change`,l)),c&&(c.setAttribute(`data-cdd-bound`,`true`),c.addEventListener(`change`,l));let d=e.querySelector(`#opt-dark-mode:not([data-cdd-bound])`);if(d){d.setAttribute(`data-cdd-bound`,`true`);let b=localStorage.getItem(`cdd-theme`);b&&(d.checked=b===`dark`),d.addEventListener(`change`,()=>{localStorage.setItem(`cdd-theme`,d.checked?`dark`:`light`)})}let u=e.querySelector(`.cdd-search-input`);if(!u){u=document.createElement(`input`),u.type=`text`,u.placeholder=n.searchPlaceholder,u.setAttribute(`aria-label`,n.searchPlaceholder),u.className=`cdd-search-input`,u.style.width=`100%`,u.style.padding=`0.5rem`,u.style.marginBottom=`1rem`,u.style.borderRadius=`4px`,u.style.border=`1px solid var(--cdd-outline)`;let b=e.querySelector(`.cdd-sidebar-title`);b&&b.nextSibling&&b.parentNode&&b.parentNode.insertBefore(u,b.nextSibling)}let p=null,_=null,m;u.hasAttribute(`data-cdd-bound`)||(u.setAttribute(`data-cdd-bound`,`true`),u.addEventListener(`input`,()=>{let b=u.value.toLowerCase();m!==void 0&&clearTimeout(m),m=setTimeout(()=>{p||(p=Array.from(e.querySelectorAll(`.cdd-toc-item`)).map(P=>({el:P,text:`${P.textContent??``} ${P.getAttribute(`href`)??``}`.toLowerCase()}))),_||(_=Array.from(e.querySelectorAll(`.cdd-endpoint`)).map(P=>({el:P,text:`${P.textContent??``} ${P.id}`.toLowerCase()}))),p.forEach(P=>{let U=P.text.includes(b);P.el.style.display=U?`block`:`none`}),_.forEach(P=>{let U=P.text.includes(b);P.el.style.display=U?`grid`:`none`})},150)})),e.querySelectorAll(`.cdd-copy-btn:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`click`,()=>es$1(null,null,function*(){let P=b.parentElement?.querySelector(`code`);if(P)try{let U=P.getAttribute(`data-raw-code`)??P.textContent??``;yield navigator.clipboard.writeText(U);let F=b.textContent;b.textContent=n.copied,b.classList.add(`cdd-copied`),setTimeout(()=>{b.textContent=F,b.classList.remove(`cdd-copied`)},2e3)}catch(U){console.error(`Failed to copy text: `,U)}}))}),e.querySelectorAll(`.cdd-try-form:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`submit`,P=>es$1(null,null,function*(){P.preventDefault();let U=b.getAttribute(`data-method`)||`GET`,F=b.getAttribute(`data-route`)||``,j=(b.getAttribute(`data-base-url`)||`https://api.example.com`).replace(/\/$/,``),q={},z=new URLSearchParams,T;b.querySelectorAll(`input, textarea`).forEach(ae=>{let ce=ae.value;if(ce)if(ae.name===`requestBody`)T=ce;else{let Ce=ae.getAttribute(`data-in`);Ce===`path`?F=F.replace(`{${ae.name}}`,encodeURIComponent(ce)):Ce===`query`?z.append(ae.name,ce):Ce===`header`&&(q[ae.name]=ce)}});let B=b.closest(`cdd-api-docs`),ee=B instanceof Wp?B:null,J=ee?.org,S=ee?.repo,x=new URLSearchParams(window.location.search).get(`v`)||``,I=x?`/${encodeURIComponent(x)}`:``,O=z.toString()?`?${z.toString()}`:``,K=`${j}${F}${O}`;J&&S&&(K=`/cdd-gateway/proxy/${encodeURIComponent(J)}/${encodeURIComponent(S)}${I}${F}${O}`);let R=b.nextElementSibling;if(!(R instanceof HTMLElement)||!R.classList.contains(`cdd-try-response`))return;let ie=R.querySelector(`.cdd-try-status`),re=R.querySelector(`.cdd-try-body`);R.style.display=`block`,ie&&(ie.textContent=n.loading),re&&(re.textContent=``);try{T&&!q[`Content-Type`]&&(q[`Content-Type`]=`application/json`);let ae=yield fetch(K,{method:U,headers:q,body:U!==`GET`&&U!==`HEAD`?T??null:null});ie&&(ie.textContent=`${n.status}: ${ae.status} ${ae.statusText}`);let ce=yield ae.text();if(re)try{re.textContent=JSON.stringify(JSON.parse(ce),null,2)}catch(Ce){re.textContent=ce}}catch(ae){ie&&(ie.textContent=n.error),re&&(re.textContent=ae instanceof Error?ae.message:String(ae))}}))}),e.querySelectorAll(`.cdd-workflow-try-form:not([data-cdd-bound])`).forEach(b=>{b.setAttribute(`data-cdd-bound`,`true`),b.addEventListener(`submit`,P=>es$1(null,null,function*(){P.preventDefault();let U=b.getAttribute(`data-workflow-id`)||`workflow`,F=b.getAttribute(`data-base-url`)||`https://api.example.com`,j=b.nextElementSibling;if(!(j instanceof HTMLElement)||!j.classList.contains(`cdd-try-response`))return;let q=j.querySelector(`.cdd-try-status`),z=j.querySelector(`.cdd-try-body`);j.style.display=`block`,q&&(q.textContent=n.loading),z&&(z.textContent=``);let T=b.closest(`.cdd-workflow`),w=T?Array.from(T.querySelectorAll(`.cdd-step-card`)):[];try{let B=[];for(let ee of w){let J=ee.getAttribute(`data-step-id`)||`step`,S=ee.getAttribute(`data-method`)||`GET`,M=ee.getAttribute(`data-route`)||`/`,x=(ee.getAttribute(`data-base-url`)||F).replace(/\/$/,``),I=yield fetch(`${x}${M}`,{method:S}),O=yield I.text();B.push({stepId:J,status:I.status,body:O})}q&&(q.textContent=`${n.status}: ${U} (${B.length} steps completed)`),z&&(z.textContent=JSON.stringify({workflowId:U,steps:B},null,2))}catch(B){q&&(q.textContent=n.error),z&&(z.textContent=B instanceof Error?B.message:String(B))}}))})}var Wp=class extends HTMLElement{constructor(){super(),this._translations={},this._sdkExamples=[],this._renderVersion=0,this._boundMessageHandler=e=>{this.handlePostMessage(e)}}get org(){return this._org}get repo(){return this._repo}get translations(){return this._translations}set translations(e){this._translations=e,this.triggerRender()}get activeLanguage(){return this.getAttribute(`active-language`)}set activeLanguage(e){e?this.setAttribute(`active-language`,e):this.removeAttribute(`active-language`)}get sdkExamples(){return this._sdkExamples}set sdkExamples(e){this._sdkExamples=YE(e),this.triggerRender()}connectedCallback(){this.innerHTML.trim()&&this.querySelector(`.cdd-layout`)?ja(this,this._translations):this.triggerRender(),this.setupPostMessage()}disconnectedCallback(){window.removeEventListener(`message`,this._boundMessageHandler)}triggerRender(){let e=this.getAttribute(`spec-content`)||this.getAttribute(`spec`)||this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`)||``;if(!e){let r=window.location.pathname.match(/^\/u\/([^/]+)\/([^/]+)/);if(r&&r[1]&&r[2]){this._org=r[1],this._repo=r[2];let a=new URLSearchParams(window.location.search).get(`v`)||``,s=a?`/${encodeURIComponent(a)}`:``;e=`/cdd-gateway/storage/${encodeURIComponent(this._org)}/${encodeURIComponent(this._repo)}${s}/schema.json`}}let n=!!(this.getAttribute(`spec-content`)||this.getAttribute(`spec`))&&(this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`))||void 0;e&&this.renderSpec(e,n)}renderSpec(e,t){return es$1(this,null,function*(){if(!e)return;let n=++this._renderVersion;try{let i=e,r=e.trim();if(L_(r)){let C=$_(r);this.innerHTML=`<div class="cdd-loading" style="padding: 2rem; font-family: sans-serif;">Loading documentation...</div>`;let b=yield fetch(C);if(n!==this._renderVersion)return;if(!b.ok)throw b.status===404?/* @__PURE__ */ new Error(`404 Not Found: The specified organization or repository does not exist or has no published schema.`):/* @__PURE__ */ new Error(`Failed to fetch spec from URL: ${b.status} ${b.statusText}`);i=yield b.text()}let o=t;if(o&&L_(o.trim())){let C=$_(o.trim()),b=yield fetch(C);if(n!==this._renderVersion)return;b.ok?o=yield b.text():o=void 0}let a=this.getAttribute(`theme`)||localStorage.getItem(`cdd-theme`)||`light`,s=this.querySelector(`input[name="global-lang"]:checked`),c=s?s.id.replace(/^lang-opt-/,``):void 0,l=this.getAttribute(`active-language`)||c,d=this.querySelector(`#opt-imports`),u=this.querySelector(`#opt-wrapping`),p=d?d.checked:!1,_=u?u.checked:!1,m=KE(i,this._sdkExamples,a===`dark`?`dark`:`light`,this._translations,o,l,p,_);this.innerHTML=`${m.stylesHtml}
${m.bodyHtml}`;let f=this._org,E=this._repo;if(f&&E){let C=this.querySelector(`header`);C&&this.injectDynamicHeader(C,f,E)}ja(this,this._translations),this.dispatchEvent(new CustomEvent(`docs-ready`))}catch(i){this.innerHTML=`<div style="color: red; padding: 2rem; font-family: monospace; white-space: pre-wrap;">Error rendering spec: ${i instanceof Error?i.message:String(i)}

${i instanceof Error&&i.stack?i.stack:``}</div>`,console.error(`CDDApiDocs rendering error:`,i)}})}injectDynamicHeader(e,t,n){let i=document.createElement(`div`);i.className=`cdd-dynamic-header-content`,i.style.marginTop=`1rem`,i.style.padding=`1rem`,i.style.background=`var(--cdd-surface-variant, #f0f0f0)`,i.style.borderRadius=`4px`;let r=document.createElement(`label`);r.textContent=`Version: `,r.style.fontWeight=`bold`;let o=document.createElement(`select`);o.className=`cdd-version-select`,o.innerHTML=`<option value="latest">latest</option>`,o.addEventListener(`change`,()=>{let d=o.value,u=new URL(window.location.href);u.searchParams.set(`v`,d),window.history.pushState({},``,u.toString()),this.renderSpec(`/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(d)}/schema.json`)});let a=document.createElement(`div`);a.style.marginTop=`0.5rem`;let c=new URLSearchParams(window.location.search).get(`v`)||``,l=c?`/${encodeURIComponent(c)}`:``;a.innerHTML=`
            <strong style="margin-right:0.5rem;">Download SDKs:</strong>
            <a href="/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}${l}/sdk-typescript.tgz" download class="cdd-btn" style="margin-right:0.5rem; text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">TypeScript</a>
            <a href="/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}${l}/sdk-python.whl" download class="cdd-btn" style="text-decoration:none; padding:0.25rem 0.5rem; background:var(--cdd-primary); color:white; border-radius:4px; font-size:0.875rem;">Python</a>
        `,i.appendChild(r),i.appendChild(o),i.appendChild(a),fetch(`/cdd-gateway/storage/${encodeURIComponent(t)}/${encodeURIComponent(n)}/versions.json`).then(d=>d.json()).then(d=>{if(Array.isArray(d)){o.innerHTML=d.map(_=>{let m=h(String(_));return`<option value="${m}">${m}</option>`}).join(``);let p=new URLSearchParams(window.location.search).get(`v`);p&&(o.value=p)}}).catch(()=>{}),e.appendChild(i)}setupPostMessage(){window.removeEventListener(`message`,this._boundMessageHandler),window.addEventListener(`message`,this._boundMessageHandler),window.parent&&window.parent!==window&&window.parent.postMessage({type:`DOCS_UI_READY`},`*`)}handlePostMessage(e){if(!v(e.data))return;let t=e.data.type,n=e.data.payload;if(t===`UPDATE_SPEC`&&typeof n==`string`){let i=this.getAttribute(`arazzo-content`)||this.getAttribute(`arazzo`)||void 0;this.renderSpec(n,i)}else if(t===`UPDATE_ARAZZO`&&typeof n==`string`)this.setAttribute(`arazzo-content`,n);else if(t===`UPDATE_SDK_EXAMPLES`)this.sdkExamples=n;else if(t===`SET_LANGUAGE`&&typeof n==`string`)this.activeLanguage=n;else if(t===`SET_THEME`&&(n===`dark`||n===`light`)){this.setAttribute(`theme`,n);let i=this.querySelector(`#opt-dark-mode`);i?(i.checked=n===`dark`,i.dispatchEvent(new Event(`change`))):localStorage.setItem(`cdd-theme`,n)}}static get observedAttributes(){return[`spec`,`spec-content`,`arazzo`,`arazzo-content`,`theme`,`active-language`]}attributeChangedCallback(e,t,n){if(t!==n){if(e===`active-language`&&n){let i=this.querySelector(`#lang-opt-${Ii(n)}`);if(i){i.checked=!0;return}}this.triggerRender()}}};function QE(){customElements.get(`cdd-api-docs`)||customElements.define(`cdd-api-docs`,Wp),window.addEventListener(`DOMContentLoaded`,()=>{document.querySelector(`cdd-api-docs`)||ja(document)})}QE();var Ao=class e{store=C(B$1);themeService=C(vr$1);wasmWorkerService=C(Cr$1);languageService=C(Er$1);specContent=this.store.selectSignal(Tc);generatedFiles=this.store.selectSignal(oi);docsJsonExamples=this.store.selectSignal(Fc);docsJsonLanguageId=this.store.selectSignal(Dc);selectedLanguageId=this.store.selectSignal(Ar$1);languageOptions=this.store.selectSignal(wc);activeUiLanguage=Yb$1(()=>this.normalizeLanguage(this.selectedLanguageId()));docsJsonCache=ei({});constructor(){Nd$1(()=>{let t=this.specContent(),n=this.selectedLanguageId(),i=this.languageOptions();t&&n&&this.fetchDocsJsonForLanguage(n,t,i)}),Nd$1(()=>{let t=this.getActiveStoreDocsFiles(),n=this.activeUiLanguage();if(t.length>0){let i=new TextDecoder(`utf-8`),r=this.unwrapDocsJsonContent(i.decode(t[0].content));this.docsJsonCache.update(o=>W$1(U({},o),{[n]:r}))}})}normalizeLanguage(t){if(!t)return`typescript`;let n=t.replace(/^cdd-/,``);return{c:`c`,cpp:`cpp`,csharp:`csharp`,go:`go`,java:`java`,kotlin:`kotlin`,php:`php`,python:`python`,"python-all":`python`,ruby:`ruby`,rust:`rust`,sh:`bash`,bash:`bash`,swift:`swift`,ts:`typescript`,typescript:`typescript`}[n]||n}unwrapDocsJsonContent(t){let n=t;if(n.trim().startsWith(`[`))try{let i=JSON.parse(n);Array.isArray(i)&&i.length>0&&typeof i[0]==`object`&&i[0]!==null&&(`endpoints`in i[0]||`workflows`in i[0]||`webhooks`in i[0])&&(n=JSON.stringify(i[0]))}catch(i){}return n}getActiveStoreDocsFiles(){let t=this.activeUiLanguage(),n=this.docsJsonLanguageId();if(n&&this.normalizeLanguage(n)!==t)return[];let i=this.docsJsonExamples(),o=this.generatedFiles().filter(c=>c.path===`docs.json`||c.path.endsWith(`/docs.json`)),a=i.length>0?i:o,s=new TextDecoder(`utf-8`);return a.filter(c=>{let l=s.decode(c.content).trim();try{let d=JSON.parse(l),u=Array.isArray(d)?d[0]:d;if(typeof u==`object`&&u!==null&&typeof u.language==`string`)return this.normalizeLanguage(u.language)===t}catch(d){}return!0})}fetchDocsJsonForLanguage(t,n,i){return es$1(this,null,function*(){let o=this.languageService.languages().find(a=>a.id===t||a.repo===t);if(!(!o||!o.availableInWasm))try{let s=(yield this.wasmWorkerService.generateCode(o.repo,n,`to_docs_json`,i||{})).find(c=>c.path===`docs.json`||c.path.endsWith(`/docs.json`)||c.path.endsWith(`.json`));if(s){let c=new TextDecoder(`utf-8`),l=this.unwrapDocsJsonContent(c.decode(s.content)),d=this.normalizeLanguage(o.repo);this.docsJsonCache.update(u=>W$1(U({},u),{[d]:l}))}}catch(a){console.warn(`[ApiDocsViewer] Failed to generate docs.json for ${o.repo}:`,a)}})}onDocsLanguageChange(t){let i=t.detail?.language;if(!i)return;let o={bash:`sh`,ts:`typescript`,"python-all":`python`}[i]||i;this.specContent()&&this.fetchDocsJsonForLanguage(o,this.specContent(),this.languageOptions()||{})}mappedSdkExamples=Yb$1(()=>{let t=new TextDecoder(`utf-8`),n=this.activeUiLanguage(),r=this.getActiveStoreDocsFiles().map(c=>{let l=this.unwrapDocsJsonContent(t.decode(c.content));return{language:n,filepath:`docs.json`,content:l}}),o=this.docsJsonCache(),a=[],s=[];for(let[c,l]of Object.entries(o))if(!r.some(d=>d.language===c&&d.filepath===`docs.json`)){let d={language:c,filepath:`docs.json`,content:l};c===n?a.push(d):s.push(d)}return[...r,...a,...s]});theme=Yb$1(()=>this.themeService.isDarkTheme()?`dark`:`light`);ngOnInit(){this.store.dispatch(zn$1())}ngOnDestroy(){}retryLoad(){this.store.dispatch(Pn$1({visible:!0}))}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-api-docs-viewer`]],decls:2,vars:4,consts:[[1,`api-docs-content`],[3,`cdd-language-change`,`sdkExamples`]],template:function(n,i){n&1&&(yl$1(0,`div`,0)(1,`cdd-api-docs`,1),dg$1(`cdd-language-change`,function(o){return i.onDocsLanguageChange(o)}),vl$1()()),n&2&&(YE$1(),qh$1(`sdkExamples`,i.mappedSdkExamples()),Vh$1(`spec-content`,i.specContent())(`theme`,i.theme())(`active-language`,i.activeUiLanguage()))},styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 0;height:100%;min-height:0;width:100%;background:var(--%NS%surface-color, #fff);overflow:hidden}.api-docs-content[_ngcontent-%COMP%]{flex:1 1 0;height:100%;min-height:0;width:100%;overflow:hidden;position:relative}cdd-api-docs[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100%;min-height:0;display:block;overflow:hidden}`]})};var ZE=(e,t)=>t.timestamp+e;function JE(e,t){if(e&1&&(Oi$1(0,`div`)(1,`span`,13),xb$1(2),$b$1(3,`date`),ml$1(),Oi$1(4,`span`,14),xb$1(5),ml$1(),Oi$1(6,`span`,15),xb$1(7),ml$1()()),e&2){let n=t.$implicit;Eb$1(Ob$1(`log-entry log-`,n.level.toLowerCase())),YE$1(2),Dl$1(`[`,Wb$1(3,6,n.timestamp,`HH:mm:ss.SSS`),`]`),YE$1(3),_g$1(n.level),YE$1(2),_g$1(n.message)}}function ey(e,t){e&1&&(Oi$1(0,`div`,10),Kw(1,0),ml$1())}var wo=class e{loggingService=C(yt$1);actions$=C(ml$2);logs=this.loggingService.logs;selectedTabIndex=ei(0);constructor(){this.actions$.pipe(hl$1(In$1),Vt$1()).subscribe(()=>{this.selectedTabIndex.set(2)}),this.actions$.pipe(hl$1(En),Vt$1()).subscribe(()=>{this.selectedTabIndex.set(0)})}clearLogs(){this.loggingService.clear()}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-bottom-panel`]],decls:16,vars:2,consts:()=>{let t;t=$localize`:@@logsTab:Logs`;let n;n=$localize`:@@clearLogsTooltip:Clear Logs`;let i;i=$localize`:@@clearLogsAria:Clear Logs`;let r;r=$localize`:@@structureTab:Structure`;let o;o=$localize`:@@docsUiTab:Docs UI`;let a;return a=$localize`:@@noLogs:No logs to display`,[a,[1,`bottom-panel-container`],[1,`bottom-panel-tabs`,3,`selectedIndexChange`,`selectedIndex`],[`label`,t],[1,`console-tab-content`],[1,`console-toolbar`],[`mat-icon-button`,``,`matTooltip`,n,`aria-label`,i,3,`click`],[`aria-hidden`,`true`],[1,`console-content`],[3,`class`],[1,`empty-state`],[`label`,r],[`label`,o],[1,`log-timestamp`],[1,`log-level`],[1,`log-message`]]},template:function(n,i){n&1&&(Oi$1(0,`div`,1)(1,`mat-tab-group`,2),ug$1(`selectedIndexChange`,function(o){return i.selectedTabIndex.set(o)}),Oi$1(2,`mat-tab`,3)(3,`div`,4)(4,`div`,5)(5,`button`,6),ug$1(`click`,function(){return i.clearLogs()}),Oi$1(6,`mat-icon`,7),xb$1(7,`delete`),ml$1()()(),Oi$1(8,`div`,8),vw(9,JE,8,9,`div`,9,ZE,!1,ey,2,0,`div`,10),ml$1()()(),Oi$1(12,`mat-tab`,11),Bh$1(13,`app-visualisations`),ml$1(),Oi$1(14,`mat-tab`,12),Bh$1(15,`app-api-docs-viewer`),ml$1()()()),n&2&&(YE$1(),Hh$1(`selectedIndex`,i.selectedTabIndex()),YE$1(8),Ew(i.logs()))},dependencies:[xr,si,vr,Mo,Do,xr$2,$n$1,ql$1,po$1,ao,Ao,kr$1],styles:[`.bottom-panel-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 0;height:100%;min-height:0;width:100%;background:var(--%NS%mat-sys-surface-container);border-top:1px solid var(--%NS%mat-sys-outline-variant);overflow:hidden}.bottom-panel-tabs[_ngcontent-%COMP%]{flex:1 1 0;height:100%;min-height:0;overflow:hidden}.console-tab-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.console-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:4px;background-color:var(--%NS%mat-sys-surface-variant);border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.console-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px;background-color:#1e1e1e;color:#ccc;font-family:monospace;font-size:13px;line-height:1.4}.log-entry[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:4px;word-break:break-all}.log-timestamp[_ngcontent-%COMP%]{color:#a0a0a0;white-space:nowrap}.log-level[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;min-width:45px}.log-info[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#4daafc}.log-info[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#ccc}.log-warn[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#fca311}.log-warn[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#e5e5e5}.log-error[_ngcontent-%COMP%]   .log-level[_ngcontent-%COMP%]{color:#f25f5c}.log-error[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%]{color:#fcc}.empty-state[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;color:var(--%NS%text-secondary, #b5b5b5);font-style:italic}app-visualisations[_ngcontent-%COMP%], app-api-docs-viewer[_ngcontent-%COMP%]{display:block;height:100%}[_nghost-%COMP%]{display:block;height:100%;width:100%;flex:1;min-height:0}`]})};var Po=class e{http=C(at$1);config=C(ct$1);getBaseUrl(){let t=this.config.storageUrl();if(!t)throw new Error(`Offline mode active. Cannot call Artifact Storage service.`);return t.replace(/\/+$/,``)}buildHeaders(t,n){let i=new F(n??{});return t&&(i=i.set(`Authorization`,`Bearer ${t}`)),i}uploadVersionArtifact(t,n,i,r,o){let a=`${this.getBaseUrl()}/upload/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(i)}`;return this.http.post(a,r,{headers:this.buildHeaders(o)})}uploadFileArtifact(t,n,i,r,o,a){let s=r.replace(/^\/+/,``),c=`${this.getBaseUrl()}/upload/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(i)}/${s}`;return this.http.post(c,o,{headers:this.buildHeaders(a)})}downloadArtifact(t,n,i,r){let o=i.replace(/^\/+/,``),a=`${this.getBaseUrl()}/artifact/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${o}`,s=r?{"If-None-Match":r}:{};return this.http.get(a,{headers:this.buildHeaders(void 0,s),observe:`response`,responseType:`arraybuffer`})}deleteArtifact(t,n,i,r){let o=i.replace(/^\/+/,``),a=`${this.getBaseUrl()}/artifact/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${o}`;return this.http.delete(a,{headers:this.buildHeaders(r)})}getHostedDocsUrl(t,n,i,r=`docs.json`){let o=this.config.docsUiUrl();if(!o)throw new Error(`Offline mode active. Cannot construct hosted docs URL.`);let a=r.replace(/^\/+/,``),s=`${this.getBaseUrl()}/artifact/${encodeURIComponent(t)}/${encodeURIComponent(n)}/${encodeURIComponent(i)}/${a}`;return`${o.replace(/\/+$/,``)}/?spec=${encodeURIComponent(s)}`}static ɵfac=function(n){return new(n||e)};static ɵprov=fe({token:e,factory:e.ɵfac,providedIn:`root`})};function ty(e,t){e&1&&(El$1(0),Kw(1,12),Il$1())}function ny(e,t){e&1&&(El$1(0),Kw(1,13),Il$1())}function iy(e,t){e&1&&(El$1(0),Kw(1,14),Il$1())}function ry(e,t){e&1&&(El$1(0),Kw(1,15),Il$1())}function oy(e,t){if(e&1){let n=Tw();Oi$1(0,`a`,55),Kw(1,18),ml$1(),Oi$1(2,`button`,56),ug$1(`click`,function(){nd$1(n);let r=eb$1(2);return rd$1(r.onDeleteDocs())}),Kw(3,19),ml$1()}if(e&2){let n=eb$1(2);Hh$1(`href`,n.publishedDocsUrl(),gp$1)}}function ay(e,t){if(e&1){let n=Tw();Oi$1(0,`div`,45)(1,`button`,53),ug$1(`click`,function(){nd$1(n);let r=eb$1();return rd$1(r.onPublishDocs())}),Kw(2,16),ml$1(),hw(3,oy,4,1),Oi$1(4,`button`,54),ug$1(`click`,function(){nd$1(n);let r=eb$1();return rd$1(r.onCleanGeneration())}),Kw(5,17),ml$1()()}if(e&2){let n=eb$1();YE$1(3),mw(n.publishedDocsUrl()?3:-1)}}function sy(e,t){if(e&1){let n=Tw();Oi$1(0,`app-openapi-editor`,57),ug$1(`specContentChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onSpecContentChange(r))})(`validationErrorsChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onValidationErrorsChange(r))})(`activeModeChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onInputModeChange(r))})(`urlAdded`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onUrlAdded(r))})(`urlUpdated`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onUrlUpdated(r))})(`urlRemoved`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onUrlRemoved(r))})(`urlsClearClicked`,function(){nd$1(n);let r=eb$1();return rd$1(r.onUrlsCleared())})(`fetchUrlsClicked`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onFetchUrls(r))})(`runClicked`,function(){nd$1(n);let r=eb$1();return rd$1(r.onRun())}),ml$1()}if(e&2){let n=eb$1();Hh$1(`specContent`,n.specContent()||``)(`isExecuting`,n.isExecuting())(`activeMode`,n.activeInputMode())(`specUrls`,n.specUrls())(`isFetchingUrls`,n.isFetchingUrls())}}function cy(e,t){if(e&1){let n=Tw();Oi$1(0,`div`,58)(1,`div`,59)(2,`app-directory-tree`,60),ug$1(`fileSelected`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onFileSelected(r))}),ml$1()(),Oi$1(3,`div`,61)(4,`app-code-viewer`,62),ug$1(`fileSelected`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onFileSelected(r))})(`fileContentChange`,function(r){nd$1(n);let o=eb$1();return rd$1(o.onActiveFileContentChange(r))}),ml$1()()()}if(e&2){let n=eb$1();YE$1(2),Hh$1(`files`,n.generatedFiles())(`activeFilePath`,n.activeFilePath())(`isExecuting`,n.isExecuting()),YE$1(2),Hh$1(`activeFilePath`,n.activeFilePath())(`fileContent`,n.activeFileContent())(`isReadOnly`,n.orientation()===`openapi-left`)}}var Hp=class e{document=C(Er);window=C(lr);destroy$=new Z;store=C(B$1);router=C(de);config=C(ct$1);artifactStorage=C(Po);publishedDocsUrl=ei(null);apiDocsPaneHeight=this.store.selectSignal(Rc);orientation=this.store.selectSignal(vc);isExecuting=this.store.selectSignal(bc);selectedLanguageId=this.store.selectSignal(Ar$1);target=this.store.selectSignal(Ic);languageOptions=this.store.selectSignal(wc);specContent=this.store.selectSignal(Tc);inputFormat=this.store.selectSignal(kc);activeInputMode=this.store.selectSignal(xc);specUrls=this.store.selectSignal(ai);isFetchingUrls=this.store.selectSignal(Oc);generatedFiles=this.store.selectSignal(oi);activeFilePath=this.store.selectSignal(xr$3);activeFileContent=this.store.selectSignal(Cc);selectedExample=Yb$1(()=>{let t=this.specContent();return t===`openapi: 3.0.4
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
                example: Hello, World!`?`hello`:`custom`});ngOnInit(){this.store.dispatch(bn())}onSwap(){this.store.dispatch(dn$1())}onRun(){this.store.dispatch(bn())}onPublishDocs(){let t=this.specContent()||`{}`;this.artifactStorage.uploadFileArtifact(`default`,`workspace`,`latest`,`docs.json`,t).subscribe({next:()=>{this.publishedDocsUrl.set(this.artifactStorage.getHostedDocsUrl(`default`,`workspace`,`latest`,`docs.json`))},error:()=>{this.publishedDocsUrl.set(null)}})}onDeleteDocs(){this.artifactStorage.deleteArtifact(`default`,`workspace`,`latest/docs.json`).subscribe({next:()=>{this.publishedDocsUrl.set(null)},error:()=>{this.publishedDocsUrl.set(null)}})}onCleanGeneration(){this.store.dispatch(In$1({result:[]}))}onLanguageChanged(t){this.store.dispatch(pn({languageId:t})),this.store.dispatch(bn())}onTargetChanged(t){this.store.dispatch(fn({target:t})),this.store.dispatch(bn())}onOptionsChanged(t){this.store.dispatch(yn(t)),this.store.dispatch(bn())}onSpecContentChange(t){this.store.dispatch(gn({content:t}))}onInputFormatChange(t){this.store.dispatch(xn$1({format:t}))}onExampleChange(t){t===`petstore`?(this.store.dispatch(An$1({mode:`editor`})),this.store.dispatch(gn({content:Uc}))):t===`hello`&&(this.store.dispatch(An$1({mode:`editor`})),this.store.dispatch(gn({content:`openapi: 3.0.0
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
                example: Hello, World!`})))}onInputModeChange(t){this.store.dispatch(An$1({mode:t}))}onUrlAdded(t){this.store.dispatch(jn({url:t}))}onUrlUpdated(t){this.store.dispatch(Fn$1(t))}onUrlRemoved(t){this.store.dispatch(Dn$1({id:t}))}onUrlsCleared(){this.store.dispatch(Cn())}onFetchUrls(t){this.store.dispatch(Mn$1({ids:t}))}onValidationErrorsChange(t){this.store.dispatch(Rn$1({errors:t}))}onFileSelected(t){this.store.dispatch(hn$1({filePath:t}))}onActiveFileContentChange(t){this.store.dispatch(mn$1({content:t}))}onResizerMouseDown(t){t.preventDefault();let n=t.clientY,i=this.apiDocsPaneHeight(),r=t.target,o=r?r.parentElement:null,a=o?o.clientHeight:this.window?.innerHeight||800;o&&o.classList.add(`resizing`);let s=cs$1(this.document,`mousemove`).pipe(Zl$1(l=>{let d=n-l.clientY,u=i+d,p=150,_=Math.max(p,a-306);u=Math.max(p,Math.min(u,_)),this.store.dispatch(Ln$1({height:u}))})),c=cs$1(this.document,`mouseup`);s.pipe(Ql$1(c),Ql$1(this.destroy$),zl$1(()=>{o&&o.classList.remove(`resizing`)})).subscribe()}onResizerDoubleClick(){this.store.dispatch(Ln$1({height:300}))}onResizerKeydown(t){if(t.key===`ArrowUp`)t.preventDefault(),this.store.dispatch(Ln$1({height:this.apiDocsPaneHeight()+20}));else if(t.key===`ArrowDown`){t.preventDefault();let n=Math.max(150,this.apiDocsPaneHeight()-20);this.store.dispatch(Ln$1({height:n}))}}toggleApiDocs(){this.store.dispatch(Nn$2())}handleKeyboardEvent(t){t.key.toLowerCase()===`d`&&(t.ctrlKey||t.metaKey)&&t.shiftKey&&(t.preventDefault(),this.toggleApiDocs())}onGoOnline(){this.router.navigate([`/login`])}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static ɵfac=function(n){return new(n||e)};static ɵcmp=$D({type:e,selectors:[[`app-workspace`]],hostBindings:function(n,i){n&1&&ug$1(`keydown`,function(o){return i.handleKeyboardEvent(o)},gE$1)},decls:66,vars:16,consts:()=>{let t;t=$localize`:@@workspaceToolsAria:Workspace Tools`;let n;n=$localize`:@@selectInputFormatAria:Select Input Format`;let i;i=$localize`:@@selectExampleAria:Select Example`;let r;r=$localize`:@@resizeApiDocsPaneAria:Resize API Docs Pane`;let o;o=$localize`:@@goOnlineAria:Go Online`;let a;a=$localize`Input Format`;let s;s=$localize`OpenAPI 3.2.0`;let c;c=$localize`Swagger / OpenAPI < 3.2.0`;let l;l=$localize`Google Discovery`;let d;d=$localize`C Source Code`;let u;u=$localize`Example`;let p;p=$localize`Petstore`;let _;_=$localize`Hello World`;let m;m=$localize`Custom`;let f;f=$localize`Go Online`;let E;E=$localize`:@@formatGoogleDiscovery:Google Discovery`;let C;C=$localize`:@@formatOpenApiOlder:Swagger / OpenAPI < 3.2.0`;let b;b=$localize`:@@formatCSource:C Source Code`;let P;P=$localize`:@@formatOpenApi320:OpenAPI 3.2.0`;let U;U=$localize`:@@releaseDocsBtn: Release Docs `;let F;F=$localize`:@@cleanSdksBtn: Clean SDKs `;let j;j=$localize`:@@viewDocsLink: View Docs `;let q;return q=$localize`:@@deleteDocsBtn: Delete Docs `,[[`openApiTemplate`,``],[`codeDirTemplate`,``],a,s,c,l,d,u,p,_,m,f,E,C,b,P,U,F,j,q,[1,`workspace-container`],[`role`,`toolbar`,`aria-label`,t,1,`workspace-toolbar`],[1,`input-controls`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`toolbar-field`],[`aria-label`,n,3,`selectionChange`,`value`],[1,`format-option-trigger`],[`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`,3,`ngSrc`],[1,`format-name`],[`value`,`openapi_3_2_0`],[1,`format-option`],[`ngSrc`,`assets/icons/openapi.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`value`,`openapi_older`],[`value`,`google_discovery`],[`ngSrc`,`assets/icons/google.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`value`,`c_source`],[`ngSrc`,`assets/icons/c.svg`,`width`,`20`,`height`,`20`,`alt`,``,1,`format-icon`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`toolbar-field`,`example-field`],[`aria-label`,i,3,`selectionChange`,`value`],[`value`,`petstore`],[`value`,`hello`],[`value`,`custom`,3,`disabled`],[1,`arrow-container`],[`aria-hidden`,`true`,1,`flow-arrow`],[1,`output-controls`],[3,`languageChanged`,`targetChanged`,`optionsChanged`,`selectedLanguageId`,`target`,`options`],[1,`online-workspace-actions`],[1,`workspace-content`],[1,`top-pane`],[3,`swapClicked`,`runClicked`,`orientation`,`isExecuting`,`leftTemplate`,`rightTemplate`],[`tabindex`,`0`,`role`,`separator`,`aria-orientation`,`horizontal`,`aria-controls`,`bottom-pane`,`aria-valuemin`,`150`,`aria-valuemax`,`800`,`aria-label`,r,1,`vertical-resizer`,3,`mousedown`,`dblclick`,`keydown`],[`id`,`bottom-pane`,1,`bottom-pane`],[`mat-fab`,``,`extended`,``,`aria-label`,o,1,`online-mode-fab`,3,`click`],[`aria-hidden`,`true`],[`mat-stroked-button`,``,`type`,`button`,1,`release-docs-btn`,3,`click`],[`mat-stroked-button`,``,`type`,`button`,1,`clean-sdks-btn`,3,`click`],[`target`,`_blank`,`rel`,`noopener noreferrer`,1,`view-docs-link`,3,`href`],[`mat-stroked-button`,``,`type`,`button`,1,`delete-docs-btn`,3,`click`],[3,`specContentChange`,`validationErrorsChange`,`activeModeChange`,`urlAdded`,`urlUpdated`,`urlRemoved`,`urlsClearClicked`,`fetchUrlsClicked`,`runClicked`,`specContent`,`isExecuting`,`activeMode`,`specUrls`,`isFetchingUrls`],[1,`code-directory-wrapper`],[1,`directory-tree-pane`],[3,`fileSelected`,`files`,`activeFilePath`,`isExecuting`],[1,`code-viewer-pane`],[3,`fileSelected`,`fileContentChange`,`activeFilePath`,`fileContent`,`isReadOnly`]]},template:function(n,i){if(n&1&&(Oi$1(0,`div`,20)(1,`div`,21)(2,`div`,22)(3,`mat-form-field`,23)(4,`mat-label`),Kw(5,2),ml$1(),Oi$1(6,`mat-select`,24),ug$1(`selectionChange`,function(o){return i.onInputFormatChange(o.value)}),Oi$1(7,`mat-select-trigger`)(8,`div`,25),Bh$1(9,`img`,26),Oi$1(10,`span`,27),hw(11,ty,2,0,`ng-container`)(12,ny,2,0,`ng-container`)(13,iy,2,0,`ng-container`)(14,ry,2,0,`ng-container`),ml$1()()(),Oi$1(15,`mat-option`,28)(16,`div`,29),Bh$1(17,`img`,30),Oi$1(18,`span`,27),Kw(19,3),ml$1()()(),Oi$1(20,`mat-option`,31)(21,`div`,29),Bh$1(22,`img`,30),Oi$1(23,`span`,27),Kw(24,4),ml$1()()(),Oi$1(25,`mat-option`,32)(26,`div`,29),Bh$1(27,`img`,33),Oi$1(28,`span`,27),Kw(29,5),ml$1()()(),Oi$1(30,`mat-option`,34)(31,`div`,29),Bh$1(32,`img`,35),Oi$1(33,`span`,27),Kw(34,6),ml$1()()()()(),Oi$1(35,`mat-form-field`,36)(36,`mat-label`),Kw(37,7),ml$1(),Oi$1(38,`mat-select`,37),ug$1(`selectionChange`,function(o){return i.onExampleChange(o.value)}),Oi$1(39,`mat-option`,38),Kw(40,8),ml$1(),Oi$1(41,`mat-option`,39),Kw(42,9),ml$1(),Oi$1(43,`mat-option`,40),Kw(44,10),ml$1()()()(),Oi$1(45,`div`,41)(46,`mat-icon`,42),xb$1(47,`arrow_forward`),ml$1()(),Oi$1(48,`div`,43)(49,`app-language-selector`,44),ug$1(`languageChanged`,function(o){return i.onLanguageChanged(o)})(`targetChanged`,function(o){return i.onTargetChanged(o)})(`optionsChanged`,function(o){return i.onOptionsChanged(o)}),ml$1(),hw(50,ay,6,1,`div`,45),ml$1()(),Oi$1(51,`div`,46)(52,`div`,47)(53,`app-split-pane`,48),ug$1(`swapClicked`,function(){return i.onSwap()})(`runClicked`,function(){return i.onRun()}),ml$1()(),Oi$1(54,`div`,49),ug$1(`mousedown`,function(o){return i.onResizerMouseDown(o)})(`dblclick`,function(){return i.onResizerDoubleClick()})(`keydown`,function(o){return i.onResizerKeydown(o)}),ml$1(),Oi$1(55,`div`,50),Bh$1(56,`app-bottom-panel`),ml$1()(),Oi$1(57,`button`,51),ug$1(`click`,function(){return i.onGoOnline()}),Oi$1(58,`mat-icon`,52),xb$1(59,`cloud_upload`),ml$1(),Oi$1(60,`span`),Kw(61,11),ml$1()()(),Oh$1(62,sy,1,5,`ng-template`,null,0,Gb$1)(64,cy,5,6,`ng-template`,null,1,Gb$1)),n&2){let r,o=cb$1(63),a=cb$1(65);YE$1(6),Hh$1(`value`,i.inputFormat()||`openapi_3_2_0`),YE$1(3),Hh$1(`ngSrc`,i.inputFormat()===`google_discovery`?`assets/icons/google.svg`:i.inputFormat()===`c_source`?`assets/icons/c.svg`:`assets/icons/openapi.svg`),YE$1(2),mw((r=i.inputFormat())===`google_discovery`?11:r===`openapi_older`?12:r===`c_source`?13:14),YE$1(27),Hh$1(`value`,i.selectedExample()),YE$1(5),Hh$1(`disabled`,!0),YE$1(6),Hh$1(`selectedLanguageId`,i.selectedLanguageId()||``)(`target`,i.target())(`options`,i.languageOptions()),YE$1(),mw(i.config.isOnline()?50:-1),YE$1(3),Hh$1(`orientation`,i.orientation())(`isExecuting`,i.isExecuting())(`leftTemplate`,i.orientation()===`openapi-left`?o:a)(`rightTemplate`,i.orientation()===`openapi-right`?o:a),YE$1(),Vh$1(`aria-valuenow`,i.apiDocsPaneHeight()),YE$1(),vg$1(`height`,i.apiDocsPaneHeight(),`px`)}},dependencies:[Co$1,Sr,kr,Cr,Tr,wr,wo,Ne$1,gt$1,_e,ns$1,ts$1,is$1,yt$2,xr$2,yr,_r,Mo,Do,J$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 0;height:100%;min-height:0;overflow:hidden}.workspace-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 0;height:100%;min-height:0;width:100%;overflow:hidden}.workspace-toolbar[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-wrap:wrap;align-items:center;padding:.5rem 1rem;background-color:var(--%NS%surface-color);border-bottom:1px solid var(--%NS%border-color);gap:1rem}.input-controls[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.toolbar-field[_ngcontent-%COMP%]{width:200px}.example-field[_ngcontent-%COMP%]{width:140px}.arrow-container[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--%NS%text-secondary)}.flow-arrow[_ngcontent-%COMP%]{opacity:.6}.output-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.generate-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.run-spinner[_ngcontent-%COMP%]{margin-right:.5rem}.workspace-content[_ngcontent-%COMP%]{flex:1 1 auto;position:relative;overflow:hidden}.workspace-content.resizing[_ngcontent-%COMP%]   .top-pane[_ngcontent-%COMP%], .workspace-content.resizing[_ngcontent-%COMP%]   .bottom-pane[_ngcontent-%COMP%]{pointer-events:none;transition:none}.code-directory-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;overflow:hidden}.directory-tree-pane[_ngcontent-%COMP%]{flex:0 0 200px;max-width:40%;min-width:0;min-height:0;overflow:hidden;border-right:1px solid var(--%NS%border-color)}.code-viewer-pane[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;min-height:0;overflow:hidden}.format-option[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.format-option-trigger[_ngcontent-%COMP%]{display:flex;align-items:center}.format-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px;object-fit:contain}.format-name[_ngcontent-%COMP%]{flex:1}.workspace-content[_ngcontent-%COMP%]{flex:1 1 0;min-height:0;display:flex;flex-direction:column;overflow:hidden}.top-pane[_ngcontent-%COMP%]{flex:1 1 0;min-height:220px;position:relative;overflow:hidden}.bottom-pane[_ngcontent-%COMP%]{flex:0 0 auto;min-height:150px;max-height:50%;display:flex;flex-direction:column;overflow:hidden;background-color:var(--%NS%surface-color, #fff);border-top:1px solid var(--%NS%border-color, #e0e0e0);transition:height .2s ease-out}.bottom-pane.dragging[_ngcontent-%COMP%]{transition:none}.vertical-resizer[_ngcontent-%COMP%]{height:6px;background-color:var(--%NS%border-color, #e0e0e0);cursor:row-resize;flex-shrink:0;z-index:10;transition:background-color .2s ease}.vertical-resizer[_ngcontent-%COMP%]:hover, .vertical-resizer[_ngcontent-%COMP%]:focus{background-color:var(--%NS%primary-color, #1976d2)}.vertical-resizer[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%primary-color, #1976d2);outline-offset:-2px}@media(max-width:768px){.vertical-resizer[_ngcontent-%COMP%]{display:none}}@media(max-width:900px){.workspace-toolbar[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:flex-start;height:auto}.input-controls[_ngcontent-%COMP%]{flex:1 1 100%;margin-bottom:.5rem}.arrow-container[_ngcontent-%COMP%]{display:none}.output-controls[_ngcontent-%COMP%]{flex:1 1 100%}.toolbar-spacer[_ngcontent-%COMP%]{display:none}}@media(max-width:600px){.input-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.toolbar-field[_ngcontent-%COMP%], .example-field[_ngcontent-%COMP%]{width:100%}.output-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.directory-tree-pane[_ngcontent-%COMP%]{flex:0 0 140px;max-width:40%}}.online-mode-fab[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:24px;z-index:10}`]})};export{Hp as WorkspaceComponent};