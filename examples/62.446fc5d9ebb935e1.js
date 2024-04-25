"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[62],{93062:(m,c,a)=>{a.r(c),a.d(c,{routes:()=>f});var s=a(87567),d=a(95160),o=a(54739),g=a(62414),t=a(81072),r=a(90789);const l=["*"];function u(n,C){if(1&n&&(t.j41(0,"pre"),t.EFF(1),t.nI1(2,"json"),t.k0s()),2&n){const i=t.XpG();t.R7$(),t.JRh(t.bMT(2,1,i.dropped))}}let h=(()=>{class n{constructor(i){this.dnd=i,this.type="",this.droppedType=null,this.dropped=null,this.target=this.dnd.dropTarget(null,{drop:e=>{this.droppedType=e.getItemType();const p=e.getItem();if(e.getItemType()===d.FILE){const y=p.files.map(v=>`File named ${v.name}`);this.dropped={files:y}}else this.dropped=p}})}ngOnDestroy(){this.target.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.rXU(g.E$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["native-target"]],inputs:{type:"type"},standalone:!0,features:[t.aNF],ngContentSelectors:l,decls:7,vars:4,consts:[[1,"target",3,"dropTarget","dropTargetTypes"],[4,"ngIf"]],template:function(e,p){1&e&&(t.NAR(),t.j41(0,"div",0)(1,"p"),t.EFF(2," Accepts "),t.j41(3,"code"),t.EFF(4),t.k0s()(),t.SdG(5),t.DNE(6,u,3,3,"pre",1),t.k0s()),2&e&&(t.Y8G("dropTarget",p.target)("dropTargetTypes",p.type),t.R7$(4),t.JRh(p.type),t.R7$(2),t.Y8G("ngIf",p.dropped))},dependencies:[g.JG,r.wu,o.bT,o.TG],styles:["[_nghost-%COMP%]{min-width:200px}.target[_ngcontent-%COMP%]{padding:8px;background:#ddd;min-height:140px;min-width:0}pre[_ngcontent-%COMP%]{overflow-x:auto;min-width:0}"]})}return n})();const f=[{path:"",component:(()=>{class n{constructor(){this.NativeTypes=d}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["native-container"]],standalone:!0,features:[t.aNF],decls:13,vars:3,consts:[["path","html5/native-types"],[1,"flex"],[3,"type"]],template:function(e,p){1&e&&(t.nrm(0,"app-example-link",0),t.j41(1,"p"),t.EFF(2," When you are using the HTML5 backend, you can accept three native types: files, URLs, and text. "),t.k0s(),t.j41(3,"div",1)(4,"native-target",2)(5,"p"),t.EFF(6,"Receives a list of native JavaScript File objects."),t.k0s()(),t.j41(7,"native-target",2)(8,"p"),t.EFF(9,"Receives a list of URLs as strings."),t.k0s()(),t.j41(10,"native-target",2)(11,"p"),t.EFF(12,"Receives a string of the text you dropped."),t.k0s()()()),2&e&&(t.R7$(4),t.Y8G("type",p.NativeTypes.FILE),t.R7$(3),t.Y8G("type",p.NativeTypes.URL),t.R7$(3),t.Y8G("type",p.NativeTypes.TEXT))},dependencies:[s.G,h],styles:[".flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-8px}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]})}return n})()}]},87567:(m,c,a)=>{a.d(c,{G:()=>d});var s=a(81072);let d=(()=>{class o{constructor(){this.path=""}get link(){return"https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/"+this.path}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=s.VBU({type:o,selectors:[["app-example-link"]],inputs:{path:"path"},standalone:!0,features:[s.aNF],decls:4,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-github"]],template:function(r,l){1&r&&(s.j41(0,"p")(1,"a",0),s.nrm(2,"i",1),s.EFF(3," View the source on GitHub "),s.k0s()()),2&r&&(s.R7$(),s.Y8G("href",l.link,s.B4B))},styles:[".fab[_ngcontent-%COMP%]{color:#000}p[_ngcontent-%COMP%]{margin-top:0}a[_ngcontent-%COMP%]{padding:8px;display:inline-block;background:#4448e024;background:#e5e2fa;background:#e2ecfa;text-decoration:none}"]})}return o})()}}]);