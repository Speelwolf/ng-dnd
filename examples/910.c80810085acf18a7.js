"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[910],{85910:(X,p,i)=>{i.r(p),i.d(p,{routes:()=>J});var e=i(81072),v=i(87567),m=i(54739),x=i(62414),a=i(44387),h=i(68464),b=i(63361);function g(t){let s=5381;for(let n=0;n<t.length;n++)s=(s<<5)+s+t.charCodeAt(n);return s}let M=(()=>{class t extends((0,b.mS)({id:0,hash:g(""),content:""})){static#e=this.nextId=0;static create(n){return new t({id:t.nextId++,content:n,hash:g(n)})}}return t})();var C=i(58203),l=function(t){return t.SORT="[simple-ngrx] SORT",t.KB_SELECT="[simple-ngrx] KB_SELECT",t.KB_LIFT="[simple-ngrx] KB_LIFT",t.KB_DROP="[simple-ngrx] KB_DROP",t.KB_UP="[simple-ngrx] KB_UP",t.KB_DOWN="[simple-ngrx] KB_DOWN",t}(l||{});class B{constructor(s){this.id=s,this.type=l.KB_SELECT}}class O{constructor(){this.type=l.KB_LIFT}}class E{constructor(){this.type=l.KB_DROP}}class L{constructor(){this.type=l.KB_UP}}class j{constructor(){this.type=l.KB_DOWN}}const P=()=>C.fake("/home/mezcal/{{system.fileName}}");class f extends((0,b.mS)({list:(0,b.B8)(Array.from(new Array(6),P).map(M.create)),draggingList:null,flying:null,kbSelected:0,kbLifted:!1})){}function F(t){return t.list.findIndex(s=>s.id===t.kbSelected)}function k(t,s,n){if(n=Math.max(0,Math.min(t.list.count()-1,n)),!t.kbLifted)return t.set("kbSelected",t.list.get(n).id);const r=t.list.get(s);return t.update("list",o=>o.remove(s).insert(n,r))}var d=i(78710);const u=(0,d.UX)("simple-ngrx"),S=(0,d.Mz)(u,t=>{const{flying:s}=t,n=t.draggingList||t.list;if(null!=s){const{hover:r,data:o}=s;return n.insert(r.index,o)}return n}),T=(0,d.Mz)(u,t=>t.list),y=t=>g(t.map(s=>""+s.id+s.hash.toString()).toArray().join(" ")),w=(0,d.Mz)(S,y),I=(0,d.Mz)(T,y),D=(0,d.Mz)(u,t=>t.kbSelected),$=(0,d.Mz)(u,t=>t.kbLifted?t.kbSelected:-1);var _=i(90789),U=i(6295),H=i(67984);function N(t,s){if(1&t){const n=e.RV6();e.j41(0,"tr",4,1),e.nI1(2,"async"),e.nI1(3,"async"),e.nI1(4,"async"),e.bIt("click",function(){const o=e.eBV(n).$implicit,c=e.XpG();return e.Njj(c.click(o))}),e.j41(5,"td",5)(6,"code"),e.EFF(7),e.k0s()(),e.j41(8,"td"),e.EFF(9),e.k0s()()}if(2&t){const n=s.$implicit,r=s.index,o=e.sdS(1),c=e.XpG(),V=e.sdS(1);e.AVh("blob--placeholder",e.bMT(2,10,o.isDragging$))("blob--selected",n.id===e.bMT(3,12,c.selected$))("blob--lifted",n.id===e.bMT(4,14,c.lifted$)),e.Y8G("dndSortableRender",V.contextFor(n,r))("dragSource",o.source),e.R7$(7),e.JRh(n.hash),e.R7$(2),e.JRh(n.content)}}let z=(()=>{class t{constructor(n,r){this.store=n,this.hotkeys=r,this.rxSpec=new a.or(this.store,l.SORT,{type:"BLOB",trackBy:o=>o.id,getList:o=>this.store.select(S)}),this.selected$=this.store.select(D),this.lifted$=this.store.select($),this.hotkeys.add(new h.t5("enter",o=>(this.store.dispatch(new O),!1),[],"Lift up or put down selected item")),this.hotkeys.add(new h.t5("up",o=>(this.store.dispatch(new L),!1),[],"Move selection or lifted item up")),this.hotkeys.add(new h.t5("down",o=>(this.store.dispatch(new j),!1),[],"Move selection or lifted item down")),this.hotkeys.add(new h.t5("esc",o=>(this.store.dispatch(new E),!1),[],"Put down lifted item"))}click(n){this.store.dispatch(new B(n.id))}static#e=this.\u0275fac=function(r){return new(r||t)(e.rXU(d.il),e.rXU(h.dr))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["rxsort-sortable"]],standalone:!0,features:[e.aNF],decls:11,vars:4,consts:[["sortable","dndSortable"],["render","dndSortableRender"],["dndSortable","",1,"list",3,"spec"],[3,"dndSortableRender","dragSource","blob--placeholder","blob--selected","blob--lifted","click",4,"ngFor","ngForOf"],[3,"click","dndSortableRender","dragSource"],[1,"hash"]],template:function(r,o){if(1&r&&(e.j41(0,"table",2,0)(2,"thead")(3,"tr")(4,"th"),e.EFF(5,"Hash"),e.k0s(),e.j41(6,"th"),e.EFF(7,"Filename"),e.k0s()()(),e.j41(8,"tbody"),e.DNE(9,N,10,16,"tr",3),e.nI1(10,"async"),e.k0s()()),2&r){const c=e.sdS(1);e.Y8G("spec",o.rxSpec),e.R7$(9),e.Y8G("ngForOf",e.bMT(10,2,c.children$))}},dependencies:[x.JG,_.LQ,a.p8,U.f,H.e,m.pM,m.Jj],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:move;color:#b73030;background:#8eae0f1a}td[_ngcontent-%COMP%]{padding:4px}.blob--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#d6ddbe}tr.blob--lifted[_ngcontent-%COMP%]{transform:translate(8px)}tr.blob--lifted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#f9d456}td.hash[_ngcontent-%COMP%]{background:#8eae0f4d;text-align:right}td.hash[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none}.blob--placeholder[_ngcontent-%COMP%]{opacity:.4}"],changeDetection:0})}return t})(),G=(()=>{class t{constructor(n){this.store=n,this.unstable$=this.store.select(w),this.stable$=this.store.select(I)}static#e=this.\u0275fac=function(r){return new(r||t)(e.rXU(d.il))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["rxsort-summary"]],standalone:!0,features:[e.aNF],decls:10,vars:6,template:function(r,o){1&r&&(e.j41(0,"p"),e.EFF(1," Hash of the unstable list: "),e.j41(2,"code"),e.EFF(3),e.nI1(4,"async"),e.k0s(),e.nrm(5,"br"),e.EFF(6," Hash of the stable list: "),e.j41(7,"code"),e.EFF(8),e.nI1(9,"async"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,2,o.unstable$)),e.R7$(5),e.JRh(e.bMT(9,4,o.stable$)))},dependencies:[m.Jj],styles:["p[_ngcontent-%COMP%]{margin-top:0}"]})}return t})();const J=[{path:"",component:(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["rxsort-container"]],standalone:!0,features:[e.aNF],decls:24,vars:0,consts:[["path","sortable/keyboard"],[1,"sep"]],template:function(r,o){1&r&&(e.nrm(0,"app-example-link",0),e.j41(1,"p"),e.EFF(2," This one uses an "),e.j41(3,"code"),e.EFF(4,"@ngrx/store"),e.k0s(),e.EFF(5," with Immutable.js data. This is very convenient, since Immutable.js has its own 'insert' and 'remove' operations. "),e.k0s(),e.j41(6,"p"),e.EFF(7,"It also is a demo for"),e.k0s(),e.j41(8,"ul")(9,"li"),e.EFF(10," Sorting overlaid on bare HTML table rows using the "),e.j41(11,"code"),e.EFF(12,"dndSortable"),e.k0s(),e.EFF(13," directive, without intermediate DOM nodes. "),e.k0s(),e.j41(14,"li"),e.EFF(15," Keyboard driven sorting, using "),e.j41(16,"code"),e.EFF(17,"angular2-mousetrap"),e.k0s(),e.EFF(18,". Try using the arrow keys and enter to lift/put down. "),e.k0s(),e.j41(19,"li"),e.EFF(20," Selectors based on the 'unstable' / 'in-flight' rendered list, and the 'stable' / 'saved' one. "),e.k0s()(),e.nrm(21,"rxsort-summary")(22,"div",1)(23,"rxsort-sortable"))},dependencies:[v.G,G,z],styles:[".sep[_ngcontent-%COMP%]{border-bottom:1px solid #999;margin-bottom:8px;max-width:700px}"]})}return t})(),providers:[(0,e.oKB)([d.md.forFeature("simple-ngrx",function K(t=new f,s){switch(s.type){case l.SORT:return function R(t=new f,s){const{index:n,hover:r,data:o}=s.item;switch(s.event){case a.sH.BeginDrag:return t.set("draggingList",t.list.remove(n)).set("flying",s.item).set("kbSelected",s.item.data.id).set("kbLifted",!1);case a.sH.Hover:return t.set("flying",s.item);case a.sH.Drop:return t.set("list",t.draggingList.insert(r.index,o)).delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);case a.sH.EndDrag:return t.delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);default:return t}}(t,s);case l.KB_SELECT:return t.set("kbSelected",s.id);case l.KB_LIFT:return t.set("kbLifted",!t.kbLifted);case l.KB_DROP:return t.set("kbLifted",!1);case l.KB_UP:{const n=F(t);return k(t,n,n-1)}case l.KB_DOWN:{const n=F(t);return k(t,n,n+1)}}return t})])]}]}}]);