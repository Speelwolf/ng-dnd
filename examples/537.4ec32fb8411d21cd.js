"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[537],{46537:(_,i,p)=>{p.r(i),p.d(i,{routes:()=>A});var r=p(93054),l=p(28144),e=p(45673),u=p(47613);var s=p(56301);const g=function(t){return{dropEffect:t}};let h=(()=>{class t{constructor(a){this.dnd=a,this.dropped=new e.vpe,this.source=this.dnd.dragSource("COPYABLE_ITEM",{beginDrag:o=>({}),endDrag:o=>{const n=o.getDropResult();n&&this.dropped.emit(n.dropEffect)}})}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(u.fD))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["de-box"]],inputs:{force:"force"},outputs:{dropped:"dropped"},standalone:!0,features:[e.jDz],decls:5,vars:5,consts:[[3,"dragSource","dragSourceOptions"]],template:function(o,n){1&o&&(e.TgZ(0,"p",0),e._uU(1," Drag me ( "),e.TgZ(2,"code"),e._uU(3),e.qZA(),e._uU(4," ) "),e.qZA()),2&o&&(e.Q6J("dragSource",n.source)("dragSourceOptions",n.force&&e.VKq(3,g,n.force)),e.xp6(3),e.Oqu(n.force?n.force:"default behaviour"))},dependencies:[u.c8,s.$d],styles:["p[_ngcontent-%COMP%]{display:inline-block;padding:.5em;border:1px dashed #333;margin:0 8px 8px 0;background:#fff}"]})}return t})();function Z(t,m){1&t&&e.Hsn(0,0,["*ngIf","(canDrop$ | async) !== true; else dropHere"])}function T(t,m){1&t&&(e.TgZ(0,"p"),e._uU(1,"Drop here"),e.qZA())}const C=["*"];let y=(()=>{class t{constructor(a){this.dnd=a,this.target=this.dnd.dropTarget("COPYABLE_ITEM",{}),this.canDrop$=this.target.listen(o=>o.canDrop()),this.over$=this.target.listen(o=>o.isOver()&&o.canDrop())}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(u.fD))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["de-copy-target"]],standalone:!0,features:[e.jDz],ngContentSelectors:C,decls:8,vars:9,consts:[[1,"target",3,"dropTarget"],[4,"ngIf","ngIfElse"],["dropHere",""]],template:function(o,n){if(1&o&&(e.F$t(),e.TgZ(0,"div",0),e.ALo(1,"async"),e.TgZ(2,"p"),e._uU(3," Drag one of the above boxes. Hold 'alt' when dragging the default one to make it a copy. "),e.qZA(),e.YNc(4,Z,1,0,"ng-content",1),e.ALo(5,"async"),e.YNc(6,T,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&o){const d=e.MAs(7);e.ekj("over",e.lcZ(1,5,n.over$)),e.Q6J("dropTarget",n.target),e.xp6(4),e.Q6J("ngIf",!0!==e.lcZ(5,7,n.canDrop$))("ngIfElse",d)}},dependencies:[u.c8,s.Li,r.O5,r.Ov],styles:[".target[_ngcontent-%COMP%]{max-width:300px;height:200px;background:#ddd;padding:1em}.over[_ngcontent-%COMP%]{background:#bbb}"]})}return t})();function b(t,m){if(1&t&&(e.TgZ(0,"p"),e._uU(1," Dropped with the "),e.TgZ(2,"code"),e._uU(3),e.qZA(),e._uU(4," effect. "),e.qZA()),2&t){const a=e.oxw();e.xp6(3),e.Oqu(a.lastEffect)}}const A=[{path:"",component:(()=>{class t{constructor(){this.lastEffect=""}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["de-container"]],standalone:!0,features:[e.jDz],decls:38,vars:3,consts:[["path","html5/drop-effects"],[3,"dropped"],["force","copy",3,"dropped"],["force","move",3,"dropped"],["force","link",3,"dropped"],["force","none",3,"dropped"],[4,"ngIf"]],template:function(o,n){1&o&&(e._UZ(0,"app-example-link",0),e.TgZ(1,"p"),e._uU(2," When you are using the HTML5 backend, you can use native HTML5 drop effects to convey what kind of operation a user is performing through the icon next to their cursor. "),e.qZA(),e.TgZ(3,"p"),e._uU(4," The default behaviour is the 'move' effect with a switch to 'copy' when you hold the Alt key. However, any of the "),e.TgZ(5,"code"),e._uU(6,"copy"),e.qZA(),e._uU(7,", "),e.TgZ(8,"code"),e._uU(9,"move"),e.qZA(),e._uU(10,", "),e.TgZ(11,"code"),e._uU(12,"link"),e.qZA(),e._uU(13,", or "),e.TgZ(14,"code"),e._uU(15,"none"),e.qZA(),e._uU(16," effects may be forced for any particular drag source. Simply pass "),e.TgZ(17,"code"),e._uU(18),e.qZA(),e._uU(19,". "),e.qZA(),e.TgZ(20,"p"),e._uU(21," The drop effect is available in a drag source's "),e.TgZ(22,"code"),e._uU(23,"endDrag"),e.qZA(),e._uU(24," method. It is attached to the object returned from "),e.TgZ(25,"code"),e._uU(26,"monitor.getDropResult()"),e.qZA(),e._uU(27,". You can then access is with "),e.TgZ(28,"code"),e._uU(29,"result.dropEffect"),e.qZA(),e._uU(30,". "),e.qZA(),e.TgZ(31,"de-box",1),e.NdJ("dropped",function(c){return n.lastEffect=c}),e.qZA(),e.TgZ(32,"de-box",2),e.NdJ("dropped",function(c){return n.lastEffect=c}),e.qZA(),e.TgZ(33,"de-box",3),e.NdJ("dropped",function(c){return n.lastEffect=c}),e.qZA(),e.TgZ(34,"de-box",4),e.NdJ("dropped",function(c){return n.lastEffect=c}),e.qZA(),e.TgZ(35,"de-box",5),e.NdJ("dropped",function(c){return n.lastEffect=c}),e.qZA(),e.TgZ(36,"de-copy-target"),e.YNc(37,b,5,1,"p",6),e.qZA()),2&o&&(e.xp6(18),e.AsE('[dragSourceOptions]="',"{"," dropEffect: ... ","}",'"'),e.xp6(19),e.Q6J("ngIf",n.lastEffect))},dependencies:[l.Z,h,y,r.O5],encapsulation:2})}return t})()}]},28144:(_,i,p)=>{p.d(i,{Z:()=>l});var r=p(45673);let l=(()=>{class e{constructor(){this.path=""}get link(){return"https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/"+this.path}static#e=this.\u0275fac=function(s){return new(s||e)};static#t=this.\u0275cmp=r.Xpm({type:e,selectors:[["app-example-link"]],inputs:{path:"path"},standalone:!0,features:[r.jDz],decls:4,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-github"]],template:function(s,g){1&s&&(r.TgZ(0,"p")(1,"a",0),r._UZ(2,"i",1),r._uU(3," View the source on GitHub "),r.qZA()()),2&s&&(r.xp6(1),r.Q6J("href",g.link,r.LSH))},styles:[".fab[_ngcontent-%COMP%]{color:#000}p[_ngcontent-%COMP%]{margin-top:0}a[_ngcontent-%COMP%]{padding:8px;display:inline-block;background:rgba(68,72,224,.14);background:#e5e2fa;background:#e2ecfa;text-decoration:none}"]})}return e})()}}]);