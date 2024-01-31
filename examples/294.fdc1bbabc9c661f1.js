"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[294],{64294:(Q,f,o)=>{o.r(f),o.d(f,{KeyboardModule:()=>Y});var u=o(17011),Z=o(14595),O=o(4730),k=o(62359),c=o(61569),d=o(16098),a=o(41183),L=o(10009),e=o(31385),T=o(74967),h=o(98048);function p(t){let s=5381;for(let n=0;n<t.length;n++)s=(s<<5)+s+t.charCodeAt(n);return s}let M=(()=>{class t extends((0,h.WV)({id:0,hash:p(""),content:""})){static create(n){return new t({id:t.nextId++,content:n,hash:p(n)})}}return t.nextId=0,t})();var P=o(67448),i=(()=>{return(t=i||(i={})).SORT="[simple-ngrx] SORT",t.KB_SELECT="[simple-ngrx] KB_SELECT",t.KB_LIFT="[simple-ngrx] KB_LIFT",t.KB_DROP="[simple-ngrx] KB_DROP",t.KB_UP="[simple-ngrx] KB_UP",t.KB_DOWN="[simple-ngrx] KB_DOWN",i;var t})();class B{constructor(s){this.id=s,this.type=i.KB_SELECT}}class U{constructor(){this.type=i.KB_LIFT}}class A{constructor(){this.type=i.KB_DROP}}class K{constructor(){this.type=i.KB_UP}}class _{constructor(){this.type=i.KB_DOWN}}const w=()=>P.fake("/home/mezcal/{{system.fileName}}");class y extends((0,h.WV)({list:(0,h.aV)(Array.from(new Array(6),w).map(M.create)),draggingList:null,flying:null,kbSelected:0,kbLifted:!1})){}function x(t){return t.list.findIndex(s=>s.id===t.kbSelected)}function S(t,s,n){if(n=Math.max(0,Math.min(t.list.count()-1,n)),!t.kbLifted)return t.set("kbSelected",t.list.get(n).id);const l=t.list.get(s);return t.update("list",r=>r.remove(s).insert(n,l))}function F(t=new y,s){switch(s.type){case i.SORT:return function D(t=new y,s){const{index:n,hover:l,data:r}=s.item;switch(s.event){case c.DC.BeginDrag:return t.set("draggingList",t.list.remove(n)).set("flying",s.item).set("kbSelected",s.item.data.id).set("kbLifted",!1);case c.DC.Hover:return t.set("flying",s.item);case c.DC.Drop:return t.set("list",t.draggingList.insert(l.index,r)).delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);case c.DC.EndDrag:return t.delete("draggingList").delete("flying").set("kbSelected",s.item.data.id).set("kbLifted",!1);default:return t}}(t,s);case i.KB_SELECT:return t.set("kbSelected",s.id);case i.KB_LIFT:return t.set("kbLifted",!t.kbLifted);case i.KB_DROP:return t.set("kbLifted",!1);case i.KB_UP:{const n=x(t);return S(t,n,n-1)}case i.KB_DOWN:{const n=x(t);return S(t,n,n+1)}}return t}const m=(0,d.ZF)("simple-ngrx"),v=(0,d.P1)(m,t=>{const{flying:s}=t,n=t.draggingList||t.list;if(null!=s){const{hover:l,data:r}=s;return n.insert(l.index,r)}return n}),R=(0,d.P1)(m,t=>t.list),C=t=>p(t.map(s=>""+s.id+s.hash.toString()).toArray().join(" ")),$=(0,d.P1)(v,C),I=(0,d.P1)(R,C),E=(0,d.P1)(m,t=>t.kbSelected),H=(0,d.P1)(m,t=>t.kbLifted?t.kbSelected:-1);var q=o(10231),N=o(97493),J=o(48307);function W(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"tr",3,4),e.NdJ("click",function(){const g=e.CHM(n).$implicit,b=e.oxw();return e.KtG(b.click(g))}),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async"),e.TgZ(5,"td",5)(6,"code"),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA()()}if(2&t){const n=s.$implicit,l=s.index,r=e.MAs(1),g=e.oxw(),b=e.MAs(1);e.ekj("blob--placeholder",e.lcZ(2,10,r.isDragging$))("blob--selected",n.id===e.lcZ(3,12,g.selected$))("blob--lifted",n.id===e.lcZ(4,14,g.lifted$)),e.Q6J("dndSortableRender",b.contextFor(n,l))("dragSource",r.source),e.xp6(7),e.Oqu(n.hash),e.xp6(2),e.Oqu(n.content)}}let j=(()=>{class t{constructor(n,l){this.store=n,this.hotkeys=l,this.rxSpec=new c.yn(this.store,i.SORT,{type:"BLOB",trackBy:r=>r.id,getList:r=>this.store.select(v)}),this.selected$=this.store.select(E),this.lifted$=this.store.select(H),this.hotkeys.add(new a.qm("enter",r=>(this.store.dispatch(new U),!1),[],"Lift up or put down selected item")),this.hotkeys.add(new a.qm("up",r=>(this.store.dispatch(new K),!1),[],"Move selection or lifted item up")),this.hotkeys.add(new a.qm("down",r=>(this.store.dispatch(new _),!1),[],"Move selection or lifted item down")),this.hotkeys.add(new a.qm("esc",r=>(this.store.dispatch(new A),!1),[],"Put down lifted item"))}click(n){this.store.dispatch(new B(n.id))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.yh),e.Y36(a.tm))},t.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-sortable"]],decls:11,vars:4,consts:[["dndSortable","",1,"list",3,"spec"],["sortable","dndSortable"],[3,"dndSortableRender","dragSource","blob--placeholder","blob--selected","blob--lifted","click",4,"ngFor","ngForOf"],[3,"dndSortableRender","dragSource","click"],["render","dndSortableRender"],[1,"hash"]],template:function(n,l){if(1&n&&(e.TgZ(0,"table",0,1)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Hash"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Filename"),e.qZA()()(),e.TgZ(8,"tbody"),e.YNc(9,W,10,16,"tr",2),e.ALo(10,"async"),e.qZA()()),2&n){const r=e.MAs(1);e.Q6J("spec",l.rxSpec),e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,2,r.children$))}},dependencies:[u.sg,q.$d,N.B,J.U,u.Ov],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:move;color:#b73030;background:rgba(142,174,15,.1)}td[_ngcontent-%COMP%]{padding:4px}.blob--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#d6ddbe}tr.blob--lifted[_ngcontent-%COMP%]{transform:translate(8px)}tr.blob--lifted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#f9d456}td.hash[_ngcontent-%COMP%]{background:rgba(142,174,15,.3);text-align:right}td.hash[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none}.blob--placeholder[_ngcontent-%COMP%]{opacity:.4}"],changeDetection:0}),t})(),z=(()=>{class t{constructor(n){this.store=n,this.unstable$=this.store.select($),this.stable$=this.store.select(I)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-summary"]],decls:10,vars:6,template:function(n,l){1&n&&(e.TgZ(0,"p"),e._uU(1," Hash of the unstable list: "),e.TgZ(2,"code"),e._uU(3),e.ALo(4,"async"),e.qZA(),e._UZ(5,"br"),e._uU(6," Hash of the stable list: "),e.TgZ(7,"code"),e._uU(8),e.ALo(9,"async"),e.qZA()()),2&n&&(e.xp6(3),e.Oqu(e.lcZ(4,2,l.unstable$)),e.xp6(5),e.Oqu(e.lcZ(9,4,l.stable$)))},dependencies:[u.Ov],styles:["p[_ngcontent-%COMP%]{margin-top:0}"]}),t})(),X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["rxsort-container"]],decls:24,vars:0,consts:[["path","sortable/keyboard"],[1,"sep"]],template:function(n,l){1&n&&(e._UZ(0,"app-example-link",0),e.TgZ(1,"p"),e._uU(2," This one uses an "),e.TgZ(3,"code"),e._uU(4,"@ngrx/store"),e.qZA(),e._uU(5," with Immutable.js data. This is very convenient, since Immutable.js has its own 'insert' and 'remove' operations. "),e.qZA(),e.TgZ(6,"p"),e._uU(7,"It also is a demo for"),e.qZA(),e.TgZ(8,"ul")(9,"li"),e._uU(10," Sorting overlaid on bare HTML table rows using the "),e.TgZ(11,"code"),e._uU(12,"dndSortable"),e.qZA(),e._uU(13," directive, without intermediate DOM nodes. "),e.qZA(),e.TgZ(14,"li"),e._uU(15," Keyboard driven sorting, using "),e.TgZ(16,"code"),e._uU(17,"angular2-mousetrap"),e.qZA(),e._uU(18,". Try using the arrow keys and enter to lift/put down. "),e.qZA(),e.TgZ(19,"li"),e._uU(20," Selectors based on the 'unstable' / 'in-flight' rendered list, and the 'stable' / 'saved' one. "),e.qZA()(),e._UZ(21,"rxsort-summary")(22,"div",1)(23,"rxsort-sortable"))},dependencies:[T.Z,j,z],styles:[".sep[_ngcontent-%COMP%]{border-bottom:1px solid #999;margin-bottom:8px;max-width:700px}"]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,L.g,O.c8,k.XJ,c.tG,d.Aw.forFeature("simple-ngrx",F),Z.Bz.forChild([{path:"",component:X}]),a.mb]}),t})()}}]);