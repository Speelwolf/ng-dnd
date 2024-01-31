"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[537],{28537:(F,l,c)=>{c.r(l),c.d(l,{BasicSortableModule:()=>q});var d=c(17011),g=c(14595),u=c(4730),C=c(62359),b=c(10009),e=c(31385),v=c(74967),x=c(59857),m=c(10231);function T(t,a){1&t&&e.GkF(0)}const Z=function(t){return{$implicit:t}};let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","cardInner",""]]}),t})(),D=(()=>{class t{constructor(n,r){this.elRef=n,this.dnd=r,this.beginDrag=new e.vpe,this.endDrag=new e.vpe,this.handleMove=new e.vpe,this.cardSource=this.dnd.dragSource("CARD",{beginDrag:()=>(this.beginDrag.emit(),{id:this.id,index:this.index}),endDrag:o=>{const i=o.didDrop();this.endDrag.emit(i)}}),this.cardTarget=this.dnd.dropTarget("CARD",{hover:o=>{const i=o.getItem().index,s=this.index;if(i===s)return;const p=this.elRef.nativeElement.getBoundingClientRect(),f=(p.bottom-p.top)/2,_=o.getClientOffset().y-p.top;i<s&&_<f||i>s&&_>f||(this.handleMove.emit([i,s]),o.getItem().index=s)}}),this.isDragging$=this.cardSource.listen(o=>o.isDragging()),this.opacity$=this.cardSource.listen(o=>o.isDragging()?.2:1)}moveCard(n,r){this.handleMove.emit([n,r])}ngOnDestroy(){this.cardSource.unsubscribe(),this.cardTarget.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(u.fD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card"]],contentQueries:function(n,r,o){if(1&n&&e.Suo(o,h,5,e.Rgc),2&n){let i;e.iGM(i=e.CRH())&&(r.cardInnerTemplate=i.first)}},inputs:{card:"card",index:"index",id:"id",text:"text"},outputs:{beginDrag:"beginDrag",endDrag:"endDrag",handleMove:"handleMove"},decls:4,vars:10,consts:[[1,"card",3,"dropTarget","dragSource"],[1,"border"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e.ALo(1,"async"),e.TgZ(2,"div",1),e.YNc(3,T,1,0,"ng-container",2),e.qZA()()),2&n&&(e.Udp("opacity",e.lcZ(1,6,r.opacity$)),e.Q6J("dropTarget",r.cardTarget)("dragSource",r.cardSource),e.xp6(3),e.Q6J("ngTemplateOutlet",r.cardInnerTemplate)("ngTemplateOutletContext",e.VKq(8,Z,r.card)))},dependencies:[d.tP,m.$d,m.Li,d.Ov],styles:[".card[_ngcontent-%COMP%]{margin-bottom:.25rem;background-color:#fff;cursor:move}.border[_ngcontent-%COMP%]{padding:.5rem 1rem;border:1px dashed gray}"],changeDetection:0}),t})();function S(t,a){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=a.$implicit,r=e.oxw(2).item;e.xp6(1),e.AsE("",r.index+1," ",n.text,"")}}function y(t,a){if(1&t&&(e.TgZ(0,"app-card",4),e.YNc(1,S,2,2,"span",5),e.qZA()),2&t){const n=e.oxw().item,r=e.oxw();e.Q6J("card",r.findCard(n.id))}}function A(t,a){1&t&&(e.TgZ(0,"div",2),e.YNc(1,y,2,1,"app-card",3),e.qZA()),2&t&&(e.Q6J("ngSwitch",a.$implicit),e.xp6(1),e.Q6J("ngSwitchCase","CARD"))}function M(t,a){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.Oqu(n.text)}}function B(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"app-card",6),e.NdJ("handleMove",function(o){e.CHM(n);const i=e.oxw();return e.KtG(i.moveCard(o))})("beginDrag",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.beginDrag())})("endDrag",function(o){e.CHM(n);const i=e.oxw();return e.KtG(i.endDrag(o))}),e.YNc(1,M,2,1,"span",5),e.qZA()}if(2&t){const n=a.$implicit;e.Q6J("index",a.index)("id",n.id)("card",n)}}let U=(()=>{class t{constructor(){this.cards=[{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Write a glorious Medium post to promote it (note that this element is taller, and far more important, than the others)"},{id:6,text:"Sit back and relax"}],this.origCards=this.cards}findCard(n){return this.cards.find(r=>r.id===n)}beginDrag(){this.origCards=this.cards.slice(0)}endDrag(n){n||(this.cards=this.origCards)}moveCard([n,r]){const o=this.cards[n];this.cards.splice(n,1),this.cards.splice(r,0,o)}tracker(n,r){return r.id}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-sortable"]],decls:4,vars:2,consts:[[1,"sorted"],[3,"index","id","card","handleMove","beginDrag","endDrag",4,"ngFor","ngForOf","ngForTrackBy"],[1,"sorted",3,"ngSwitch"],[3,"card",4,"ngSwitchCase"],[3,"card"],[4,"cardInner"],[3,"index","id","card","handleMove","beginDrag","endDrag"]],template:function(n,r){1&n&&(e.TgZ(0,"dnd-preview"),e.YNc(1,A,2,2,"ng-template"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,B,2,3,"app-card",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngForOf",r.cards)("ngForTrackBy",r.tracker))},dependencies:[d.sg,d.RF,d.n9,x.S,D,h],styles:[".sorted[_ngcontent-%COMP%]{width:100%;max-width:400px}"]}),t})();const w=function(){return["/sortable","simple"]};let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-sortable-container"]],decls:34,vars:2,consts:[["path","basic-sortable"],[3,"routerLink"]],template:function(n,r){1&n&&(e._UZ(0,"app-example-link",0),e.TgZ(1,"p"),e._uU(2,"You can make a sortable by:"),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5,"giving each card a "),e.TgZ(6,"code"),e._uU(7,"DragSource"),e.qZA(),e._uU(8," and a "),e.TgZ(9,"code"),e._uU(10,"DropTarget"),e.qZA(),e._uU(11,";"),e.qZA(),e.TgZ(12,"li"),e._uU(13," determining when you are hovering on the upper or lower half of a neighbouring card using "),e.TgZ(14,"code"),e._uU(15,"monitor.getClientOffset()"),e.qZA(),e._uU(16,"; "),e.qZA(),e.TgZ(17,"li"),e._uU(18," working out when a reordering is necessary by comparing the index with the item in flight's index; "),e.qZA(),e.TgZ(19,"li"),e._uU(20," bubbling up reordering events, and also beginDrag, endDrag and drop events to a component that controls re-rendering the list; and "),e.qZA(),e.TgZ(21,"li"),e._uU(22,"storing a clone of your list to revert to on endDrag, or commit to on drop"),e.qZA()(),e.TgZ(23,"p"),e._uU(24," If that sounds like too much effort, this pattern is made easy and reusable in "),e.TgZ(25,"code"),e._uU(26,"@ng-dnd/sortable"),e.qZA(),e._uU(27,". You can do it without introducing a new component, too. "),e.qZA(),e.TgZ(28,"p"),e._uU(29," You can compare the source code of this example to equivalent using that abstraction, "),e.TgZ(30,"a",1),e._uU(31,"Simple list"),e.qZA(),e._uU(32,". "),e.qZA(),e._UZ(33,"basic-sortable")),2&n&&(e.xp6(30),e.Q6J("routerLink",e.DdM(1,w)))},dependencies:[g.rH,v.Z,U],encapsulation:2}),t})(),q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,u.c8,C.XJ,g.Bz.forChild([{path:"",component:O}]),b.g]}),t})()}}]);