"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[420],{28144:(E,D,s)=>{s.d(D,{Z:()=>o});var n=s(45673);let o=(()=>{class h{constructor(){this.path=""}get link(){return"https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/"+this.path}static#t=this.\u0275fac=function(a){return new(a||h)};static#e=this.\u0275cmp=n.Xpm({type:h,selectors:[["app-example-link"]],inputs:{path:"path"},standalone:!0,features:[n.jDz],decls:4,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-github"]],template:function(a,x){1&a&&(n.TgZ(0,"p")(1,"a",0),n._UZ(2,"i",1),n._uU(3," View the source on GitHub "),n.qZA()()),2&a&&(n.xp6(1),n.Q6J("href",x.link,n.LSH))},styles:[".fab[_ngcontent-%COMP%]{color:#000}p[_ngcontent-%COMP%]{margin-top:0}a[_ngcontent-%COMP%]{padding:8px;display:inline-block;background:rgba(68,72,224,.14);background:#e5e2fa;background:#e2ecfa;text-decoration:none}"]})}return h})()},38753:(E,D,s)=>{s.d(D,{tG:()=>w,UH:()=>h.U,SO:()=>l.S,yn:()=>c,DC:()=>a,De:()=>S}),s(31900),s(36072);var h=s(55561),l=(s(78919),s(51201)),a=function(u){return u.BeginDrag="BeginDrag",u.Hover="Hover",u.Drop="Drop",u.EndDrag="EndDrag",u}(a||{});class x{constructor(v,f){this.type=v,this.item=f,this.event=a.BeginDrag}}class d{constructor(v,f){this.type=v,this.item=f,this.event=a.Hover}}class T{constructor(v,f){this.type=v,this.item=f,this.event=a.Drop}}class e{constructor(v,f){this.type=v,this.item=f,this.event=a.EndDrag}}class c{constructor(v,f,p){this.store=v,this.actionType=f,this.beginDrag=(I,C)=>{this.store.dispatch(new x(this.actionType,I))},this.hover=(I,C)=>{this.store.dispatch(new d(this.actionType,I))},this.drop=(I,C)=>{this.store.dispatch(new T(this.actionType,I))},this.endDrag=(I,C)=>{this.store.dispatch(new e(this.actionType,I))},void 0!==p.type&&(this.type=p.type),void 0!==p.accepts&&(this.accepts=p.accepts),void 0!==p.trackBy&&(this.trackBy=p.trackBy),void 0!==p.getList&&(this.getList=p.getList),void 0!==p.canDrag&&(this.canDrag=p.canDrag),void 0!==p.canDrop&&(this.canDrop=p.canDrop),void 0!==p.isDragging&&(this.isDragging=p.isDragging),void 0!==p.createData&&(this.createData=p.createData)}}var t=s(78611),r=s(46099),i=s(19249);const g=Symbol("SPILLED_LIST_ID");function S(u,v,f){const p=y=>y?(y.hover={listId:g,index:-1},{...y}):null,I=new t.x,C=u.dropTarget(v,{hover:y=>{if(y.canDrop()&&y.isOver({shallow:!0})){const L=p(y.getItem());I.next(L)}else I.next(null)},drop:f.drop&&(y=>{const L=p(y.getItem());y.didDrop()||f.drop&&L&&f.drop(L)})||void 0}),M=I.pipe((0,r.x)(),(0,i.h)(y=>!!y)).subscribe(y=>{f.hover&&y&&f.hover(y)});return C.add(M),C}var O=s(93054),A=s(47613),b=(s(47545),s(45673));let w=(()=>{class u{static#t=this.\u0275fac=function(p){return new(p||u)};static#e=this.\u0275mod=b.oAB({type:u});static#s=this.\u0275inj=b.cJS({imports:[O.ez,A.c8]})}return u})()},78919:(E,D,s)=>{s.d(D,{Y:()=>l});var n=s(51201),o=s(45673),h=s(47613);const m=Symbol("EXTERNAL_LIST_ID");let l=(()=>{class a{constructor(d,T){this.dnd=d,this.el=T,this.source=this.dnd.dragSource(null,{canDrag:e=>!this.spec||!this.spec.canDrag||this.spec.canDrag(void 0,void 0,e),beginDrag:()=>{if("function"!=typeof this.spec.createData)throw new Error("spec.createData must be a function");return{type:this.spec.type,data:this.spec.createData(),hover:{index:-1,listId:m},isInternal:!1,index:-1,listId:m,size:this.size()}},endDrag:e=>{const c=e.getItem();c&&this.spec&&this.spec.endDrag&&this.spec.endDrag(c,e)}})}size(){const d=this.el.nativeElement.getBoundingClientRect();return new n.$(d.width||d.right-d.left,d.height||d.bottom-d.top)}ngOnChanges(){this.source.setType(this.spec.type)}ngOnDestroy(){this.source.unsubscribe()}static#t=this.\u0275fac=function(T){return new(T||a)(o.Y36(h.fD),o.Y36(o.SBq))};static#e=this.\u0275dir=o.lG2({type:a,selectors:[["","dndSortableExternal",""]],inputs:{spec:["dndSortableExternal","spec"]},exportAs:["dndSortableExternal"],features:[o.TTD]})}return a})()},36072:(E,D,s)=>{s.d(D,{J:()=>T});var n=s(45673),o=s(47545),h=s(31900),m=s(47613),l=s(93054);function a(e,c){1&e&&n.GkF(0)}const x=function(e){return{$implicit:e}};function d(e,c){if(1&e&&(n.ynx(0),n.YNc(1,a,1,0,"ng-container",1),n.BQk()),2&e){const t=c.$implicit,r=c.index,i=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",i.template)("ngTemplateOutletContext",n.VKq(2,x,i.contextFor(t,r)))}}let T=(()=>{class e extends h.B{set renderTemplates(t){t.length>0&&(this.template=t.first)}constructor(t,r,i){super(t,r,i),this.template=null,this.trackById=(g,S)=>this.spec&&this.spec.trackBy(S)}ngAfterContentInit(){if(!this.template)throw new Error('You must provide a <ng-template cardTemplate> as a content child, or with [template]="myTemplateRef"')}ngOnChanges(t){super.ngOnChanges(t)}ngOnInit(){super.ngOnInit()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnDestroy(){super.ngOnDestroy()}static#t=this.\u0275fac=function(r){return new(r||e)(n.Y36(m.fD),n.Y36(n.SBq),n.Y36(n.sBO))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["dnd-sortable-list"]],contentQueries:function(r,i,g){if(1&r&&n.Suo(g,o.S,4,n.Rgc),2&r){let S;n.iGM(S=n.CRH())&&(i.renderTemplates=S)}},inputs:{template:"template"},features:[n._Bn([{provide:h.B,useExisting:e}]),n.qOj,n.TTD],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(r,i){1&r&&n.YNc(0,d,2,4,"ng-container",0),2&r&&n.Q6J("ngForOf",i.children)("ngForTrackBy",i.trackById)},dependencies:[l.sg,l.tP],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return e})()},55561:(E,D,s)=>{s.d(D,{U:()=>T});var n=s(48870),o=s(51201);function h(e,c,t,r){const{hover:i}=c,B=(e.horizontal?r.x:r.y)<(e.horizontal?t.left:t.top)+(e.horizontal?t.width||t.right-t.left:t.height||t.bottom-t.top)/2;let b;return e.listId===i.listId?e.index<i.index?b=B?e.index:e.index+1:(b=B?e.index-1:e.index,b<0&&(b=0)):b=B?e.index:e.index+1,b}function m(e){return e.index}var a=s(45673),x=s(47613);const d=requestAnimationFrame||(e=>setTimeout(e,0));let T=(()=>{class e{get data(){return this.context.data}get index(){return this.context.index}get type(){return this.context.spec&&this.context.spec.type}get listId(){return this.context.listId}get accepts(){const t=this.context.spec;return t?Array.isArray(t.accepts)?t.accepts:t.accepts||t.type:[]}get spec(){return this.context.spec}constructor(t,r){this.dnd=t,this.el=r,this.subs=new n.w0,this.sameIds=(i,g)=>i&&g.data&&this.spec.trackBy(i)===this.spec.trackBy(g.data),this.target=this.dnd.dropTarget(null,{canDrop:()=>!1,hover:i=>{this.hover(i)}},this.subs),this.source=this.dnd.dragSource(null,{canDrag:i=>this.getCanDrag(i),isDragging:i=>this.isDragging(i.getItem()),beginDrag:i=>{const g=this.createItem();return this.spec&&this.spec.beginDrag&&d(()=>{this.spec&&this.spec.beginDrag&&this.spec.beginDrag(g,i)}),g},endDrag:i=>{const g=i.getItem();g&&this.spec&&this.spec.endDrag&&this.spec.endDrag(g,i)}},this.subs),this.isDragging$=this.source.listen(i=>i.isDragging())}createItem(){return{data:this.data,index:this.index,size:this.size(),type:this.type,isInternal:!0,listId:this.listId,hover:{index:this.index,listId:this.listId}}}getCanDrag(t){return!this.spec||!this.spec.canDrag||this.spec.canDrag(this.data,this.listId,t)}isDragging(t){return this.spec&&this.spec.isDragging?t&&this.spec.isDragging(this.data,t)||!1:t&&this.sameIds(this.data,t)||!1}hover(t){const r=t.getItem(),i=t.getClientOffset();if(null==r||null==i||this.isDragging(r)&&this.index===r.hover.index&&this.listId===r.hover.listId)return;const{hover:g}=r,O=function l(e){return e===o.S.fixed?m:h}(this.context.hoverTrigger)(this.context,r,this.rect(),i);if(O<0)throw new Error("@ng-dnd/sortable: Cannot move a card to an index < 0.");if(O!==g.index||this.listId!==g.listId){if(r.hover={index:O,listId:this.listId},this.spec&&this.spec.canDrop&&!this.spec.canDrop(r,t))return;this.spec&&this.spec.hover&&this.spec.hover({...r},t)}}rect(){if(!this.el)throw new Error("@ng-dnd/sortable: [dndSortableRender] expected to be attached to a real DOM element");return this.el.nativeElement.getBoundingClientRect()}size(){const t=this.rect();return new o.$(t.width||t.right-t.left,t.height||t.bottom-t.top)}ngOnChanges(){this.target.setTypes(this.accepts),this.source.setType(this.type)}ngOnInit(){this.target.setTypes(this.accepts),this.source.setType(this.type)}ngAfterViewInit(){this.el&&this.target.connectDropTarget(this.el.nativeElement)}ngOnDestroy(){this.subs.unsubscribe()}static#t=this.\u0275fac=function(r){return new(r||e)(a.Y36(x.fD),a.Y36(a.SBq))};static#e=this.\u0275dir=a.lG2({type:e,selectors:[["","dndSortableRender",""]],inputs:{context:["dndSortableRender","context"]},exportAs:["dndSortableRender"],features:[a.TTD]})}return e})()},31900:(E,D,s)=>{s.d(D,{B:()=>x});var n=s(66359),o=s(48870),h=s(51201),l=s(45673),a=s(47613);let x=(()=>{class d{constructor(e,c,t){this.dnd=e,this.el=c,this.cdr=t,this.listId=Math.random().toString(),this.horizontal=!1,this.hoverTrigger=h.S.halfway,this.childrenSubject$=new n.X([]),this.children$=this.childrenSubject$,this.subs=new o.w0,this.listSubs=new o.w0,this.target=this.dnd.dropTarget(null,{canDrop:r=>{if(!this.acceptsType(r.getItemType()))return!1;const i=r.getItem();return!!i&&this.getCanDrop(i,r)},drop:r=>{const i=r.getItem();return i&&this.getCanDrop(i,r)&&this.spec&&this.spec.drop&&this.spec.drop(i,r),{}},hover:r=>{const i=r.getItem();this.children&&function m(d){for(const T of d)return!1;return!0}(this.children)&&i&&this.getCanDrop(i,r)&&r.isOver({shallow:!0})&&this.callHover(i,r,{listId:this.listId,index:0})}},this.subs)}updateSubscription(){if(typeof this.listId<"u"&&null!==this.listId&&this.spec&&(this.listSubs&&(this.subs.remove(this.listSubs),this.listSubs.unsubscribe()),this.spec.getList)){const c=this.spec.getList(this.listId);this.listSubs=c&&c.subscribe(t=>{t&&(this.childrenSubject$.next(t),this.children=t,this.cdr.markForCheck())}),this.subs.add(this.listSubs)}}contextFor(e,c){return{data:e,index:c,listId:this.listId,spec:this.spec,horizontal:this.horizontal,hoverTrigger:this.hoverTrigger}}getCanDrop(e,c,t=!0){return this.spec&&this.spec.canDrop?this.spec.canDrop(e,c):t}callHover(e,c,t){t&&(e.hover=t,e={...e}),this.spec&&this.spec.hover&&this.spec.hover(e,c)}ngOnInit(){this.updateSubscription(),this.target.setTypes(this.getTargetType())}getTargetType(){return Array.isArray(this.spec.accepts)?this.spec.accepts:this.spec.accepts||this.spec.type}acceptsType(e){return null!=e&&(Array.isArray(this.spec.accepts)?-1!==this.spec.accepts.indexOf(e):e==this.getTargetType())}ngOnChanges({spec:e,listId:c}){c&&this.updateSubscription(),e&&this.updateSubscription(),this.target.setTypes(this.getTargetType())}ngAfterViewInit(){if(!this.el)throw new Error("dndSortable directive must have ElementRef");this.target.connectDropTarget(this.el.nativeElement)}ngOnDestroy(){this.subs.unsubscribe()}static#t=this.\u0275fac=function(c){return new(c||d)(l.Y36(a.fD),l.Y36(l.SBq),l.Y36(l.sBO))};static#e=this.\u0275dir=l.lG2({type:d,selectors:[["","dndSortable",""]],inputs:{listId:"listId",horizontal:"horizontal",spec:"spec",children:"children",hoverTrigger:"hoverTrigger"},exportAs:["dndSortable"],features:[l.TTD]})}return d})()},47545:(E,D,s)=>{s.d(D,{S:()=>o});var n=s(45673);let o=(()=>{class h{static#t=this.\u0275fac=function(a){return new(a||h)};static#e=this.\u0275dir=n.lG2({type:h,selectors:[["","dndSortableTemplate",""]]})}return h})()},51201:(E,D,s)=>{s.d(D,{$:()=>n,S:()=>o});class n{constructor(m,l){this.width=m,this.height=l}style(){return{width:this.width+"px",height:this.height+"px"}}}var o=function(h){return h.halfway="halfway",h.fixed="fixed",h}(o||{})}}]);