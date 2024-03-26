"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[509],{55509:(z,b,i)=>{i.r(b),i.d(b,{routes:()=>W});var e=i(45673),C=i(28144),g=i(93054),k=i(47613),d=i(38753),u=i(72910),m=i(223);function p(t){let s=5381;for(let n=0;n<t.length;n++)s=(s<<5)+s+t.charCodeAt(n);return s}let O=(()=>{class t extends((0,m.WV)({id:0,hash:p(""),content:""})){static#e=this.nextId=0;static create(n){return new t({id:t.nextId++,content:n,hash:p(n)})}}return t})();var _=i(42869),l=function(t){return t.SORT="[simple-ngrx] SORT",t.KB_SELECT="[simple-ngrx] KB_SELECT",t.KB_LIFT="[simple-ngrx] KB_LIFT",t.KB_DROP="[simple-ngrx] KB_DROP",t.KB_UP="[simple-ngrx] KB_UP",t.KB_DOWN="[simple-ngrx] KB_DOWN",t}(l||{});class L{constructor(s){this.id=s,this.type=l.KB_SELECT}}class T{constructor(){this.type=l.KB_LIFT}}class P{constructor(){this.type=l.KB_DROP}}class U{constructor(){this.type=l.KB_UP}}class M{constructor(){this.type=l.KB_DOWN}}const B=()=>_.fake("/home/mezcal/{{system.fileName}}");class x extends((0,m.WV)({list:(0,m.aV)(Array.from(new Array(6),B).map(O.create)),draggingList:null,flying:null,kbSelected:0,kbLifted:!1})){}function y(t){return t.list.findIndex(s=>s.id===t.kbSelected)}function v(t,s,n){if(n=Math.max(0,Math.min(t.list.count()-1,n)),!t.kbLifted)return t.set("kbSelected",t.list.get(n).id);const r=t.list.get(s);return t.update("list",o=>o.remove(s).insert(n,r))}var c=i(77181);const h=(0,c.ZF)("simple-ngrx"),S=(0,c.P1)(h,t=>{const{flying:s}=t,n=t.draggingList||t.list;if(null!=s){const{hover:r,data:o}=s;return n.insert(r.index,o)}return n}),D=(0,c.P1)(h,t=>t.list),Z=t=>p(t.map(s=>""+s.id+s.hash.toString()).toArray().join(" ")),K=(0,c.P1)(S,Z),F=(0,c.P1)(D,Z),R=(0,c.P1)(h,t=>t.kbSelected),$=(0,c.P1)(h,t=>t.kbLifted?t.kbSelected:-1);var I=i(56301),q=i(31900),E=i(55561);function H(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"tr",3,4),e.NdJ("click",function(){const a=e.CHM(n).$implicit,f=e.oxw();return e.KtG(f.click(a))}),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.TgZ(5,"td",5)(6,"code"),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA()()}if(2&t){const n=s.$implicit,r=s.index,o=e.MAs(1),a=e.oxw(),f=e.MAs(1);e.ekj("blob--placeholder",e.lcZ(2,10,o.isDragging$))("blob--selected",n.id===e.lcZ(3,12,a.selected$))("blob--lifted",n.id===e.lcZ(4,14,a.lifted$)),e.Q6J("dndSortableRender",f.contextFor(n,r))("dragSource",o.source),e.xp6(7),e.Oqu(n.hash),e.xp6(2),e.Oqu(n.content)}}let j=(()=>{class t{constructor(n,r){this.store=n,this.hotkeys=r,this.rxSpec=new d.yn(this.store,l.SORT,{type:"BLOB",trackBy:o=>o.id,getList:o=>this.store.select(S)}),this.selected$=this.store.select(R),this.lifted$=this.store.select($),this.hotkeys.add(new u.qm("enter",o=>(this.store.dispatch(new T),!1),[],"Lift up or put down selected item")),this.hotkeys.add(new u.qm("up",o=>(this.store.dispatch(new U),!1),[],"Move selection or lifted item up")),this.hotkeys.add(new u.qm("down",o=>(this.store.dispatch(new M),!1),[],"Move selection or lifted item down")),this.hotkeys.add(new u.qm("esc",o=>(this.store.dispatch(new P),!1),[],"Put down lifted item"))}click(n){this.store.dispatch(new L(n.id))}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(c.yh),e.Y36(u.tm))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-sortable"]],standalone:!0,features:[e.jDz],decls:11,vars:4,consts:[["dndSortable","",1,"list",3,"spec"],["sortable","dndSortable"],[3,"dndSortableRender","dragSource","blob--placeholder","blob--selected","blob--lifted","click",4,"ngFor","ngForOf"],[3,"dndSortableRender","dragSource","click"],["render","dndSortableRender"],[1,"hash"]],template:function(r,o){if(1&r&&(e.TgZ(0,"table",0,1)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Hash"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Filename"),e.qZA()()(),e.TgZ(8,"tbody"),e.YNc(9,H,10,16,"tr",2),e.ALo(10,"async"),e.qZA()()),2&r){const a=e.MAs(1);e.Q6J("spec",o.rxSpec),e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,2,a.children$))}},dependencies:[k.c8,I.$d,d.tG,q.B,E.U,g.ax,g.Ov],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:move;color:#b73030;background:rgba(142,174,15,.1)}td[_ngcontent-%COMP%]{padding:4px}.blob--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#d6ddbe}tr.blob--lifted[_ngcontent-%COMP%]{transform:translate(8px)}tr.blob--lifted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#f9d456}td.hash[_ngcontent-%COMP%]{background:rgba(142,174,15,.3);text-align:right}td.hash[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none}.blob--placeholder[_ngcontent-%COMP%]{opacity:.4}"],changeDetection:0})}return t})(),N=(()=>{class t{constructor(n){this.store=n,this.unstable$=this.store.select(K),this.stable$=this.store.select(F)}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(c.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-summary"]],standalone:!0,features:[e.jDz],decls:10,vars:6,template:function(r,o){1&r&&(e.TgZ(0,"p"),e._uU(1," Hash of the unstable list: "),e.TgZ(2,"code"),e._uU(3),e.ALo(4,"async"),e.qZA(),e._UZ(5,"br"),e._uU(6," Hash of the stable list: "),e.TgZ(7,"code"),e._uU(8),e.ALo(9,"async"),e.qZA()()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,2,o.unstable$)),e.xp6(5),e.Oqu(e.lcZ(9,4,o.stable$)))},dependencies:[g.Ov],styles:["p[_ngcontent-%COMP%]{margin-top:0}"]})}return t})();const W=[{path:"",component:(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-container"]],standalone:!0,features:[e.jDz],decls:24,vars:0,consts:[["path","sortable/keyboard"],[1,"sep"]],template:function(r,o){1&r&&(e._UZ(0,"app-example-link",0),e.TgZ(1,"p"),e._uU(2," This one uses an "),e.TgZ(3,"code"),e._uU(4,"@ngrx/store"),e.qZA(),e._uU(5," with Immutable.js data. This is very convenient, since Immutable.js has its own 'insert' and 'remove' operations. "),e.qZA(),e.TgZ(6,"p"),e._uU(7,"It also is a demo for"),e.qZA(),e.TgZ(8,"ul")(9,"li"),e._uU(10," Sorting overlaid on bare HTML table rows using the "),e.TgZ(11,"code"),e._uU(12,"dndSortable"),e.qZA(),e._uU(13," directive, without intermediate DOM nodes. "),e.qZA(),e.TgZ(14,"li"),e._uU(15," Keyboard driven sorting, using "),e.TgZ(16,"code"),e._uU(17,"angular2-mousetrap"),e.qZA(),e._uU(18,". Try using the arrow keys and enter to lift/put down. "),e.qZA(),e.TgZ(19,"li"),e._uU(20," Selectors based on the 'unstable' / 'in-flight' rendered list, and the 'stable' / 'saved' one. "),e.qZA()(),e._UZ(21,"rxsort-summary")(22,"div",1)(23,"rxsort-sortable"))},dependencies:[C.Z,N,j],styles:[".sep[_ngcontent-%COMP%]{border-bottom:1px solid #999;margin-bottom:8px;max-width:700px}"]})}return t})(),providers:[(0,e.RIp)([c.Aw.forFeature("simple-ngrx",function w(t=new x,s){switch(s.type){case l.SORT:return function A(t=new x,s){const{index:n,hover:r,data:o}=s.item;switch(s.event){case d.DC.BeginDrag:return t.set("draggingList",t.list.remove(n)).set("flying",s.item).set("kbSelected",s.item.data.id).set("kbLifted",!1);case d.DC.Hover:return t.set("flying",s.item);case d.DC.Drop:return t.set("list",t.draggingList.insert(r.index,o)).delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);case d.DC.EndDrag:return t.delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);default:return t}}(t,s);case l.KB_SELECT:return t.set("kbSelected",s.id);case l.KB_LIFT:return t.set("kbLifted",!t.kbLifted);case l.KB_DROP:return t.set("kbLifted",!1);case l.KB_UP:{const n=y(t);return v(t,n,n-1)}case l.KB_DOWN:{const n=y(t);return v(t,n,n+1)}}return t})])]}]}}]);