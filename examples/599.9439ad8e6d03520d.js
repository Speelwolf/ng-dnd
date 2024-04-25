"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[599],{55599:(h,c,a)=>{a.r(c),a.d(c,{routes:()=>x});var s=a(87567),p=a(54739),o=a(62414);const m_BOX="NESTED_SOURCES_BOX";var t=a(81072),d=a(90789);let g=(()=>{class n{constructor(r){this.dnd=r,this.source=this.dnd.dragSource(m_BOX,{beginDrag:()=>({})}),this.opacity=this.source.listen(e=>e.isDragging()?.4:1)}ngOnDestroy(){this.source.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.rXU(o.E$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-nested-targets-box"]],standalone:!0,features:[t.aNF],decls:4,vars:5,consts:[[3,"dragSource"]],template:function(e,i){1&e&&(t.j41(0,"div",0),t.nI1(1,"async"),t.j41(2,"p"),t.EFF(3,"Drag this!"),t.k0s()()),2&e&&(t.xc7("opacity",t.bMT(1,3,i.opacity)),t.Y8G("dragSource",i.source))},dependencies:[o.JG,d.LQ,p.Jj],styles:["div[_ngcontent-%COMP%]{border:1px dashed #777;background:#fff;padding:.5rem 1rem;width:8rem;margin-bottom:1rem}p[_ngcontent-%COMP%]{display:inline-block;padding:3px;margin:0}"]})}return n})();const u=[[["app-nested-targets-dustbin"]]],f=["app-nested-targets-dustbin"];function C(n,l){if(1&n&&(t.j41(0,"p"),t.EFF(1),t.k0s()),2&n){const r=t.XpG(2);t.R7$(),t.SpI(" ","dropped"+(r.hasDroppedOnChild?" on child":"")," ")}}function b(n,l){if(1&n&&(t.qex(0),t.j41(1,"div",1)(2,"p"),t.EFF(3),t.k0s(),t.DNE(4,C,2,1,"p",0),t.SdG(5),t.k0s(),t.bVm()),2&n){const r=l.ngIf,e=t.XpG();t.R7$(),t.xc7("background-color",e.getColor(r)),t.Y8G("dropTarget",e.target),t.R7$(2),t.JRh(e.greedy?"greedy":"not greedy"),t.R7$(),t.Y8G("ngIf",e.hasDroppedOnChild||e.hasDropped)}}let O=(()=>{class n{text(){return this.hasDropped&&"dropped"+(this.hasDroppedOnChild?" on child":"")||""}getColor({isOver:r,isOverCurrent:e}){if(e||r&&this.greedy)return"darkgreen"}constructor(r){this.dnd=r,this.greedy=!1,this.hasDropped=!1,this.hasDroppedOnChild=!1,this.lastDroppedColor="",this.backgroundColor="",this.target=this.dnd.dropTarget(m_BOX,{drop:e=>{const i=e.didDrop();i&&!this.greedy||(this.hasDropped=!0,this.hasDroppedOnChild=i)}}),this.collected$=this.target.listen(e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})}))}ngOnDestroy(){this.target.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.rXU(o.E$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-nested-targets-dustbin"]],inputs:{greedy:"greedy"},standalone:!0,features:[t.aNF],ngContentSelectors:f,decls:2,vars:3,consts:[[4,"ngIf"],[1,"box",3,"dropTarget"]],template:function(e,i){1&e&&(t.NAR(u),t.DNE(0,b,6,5,"ng-container",0),t.nI1(1,"async")),2&e&&t.Y8G("ngIf",t.bMT(1,1,i.collected$))},dependencies:[p.bT,o.JG,d.wu,p.Jj],styles:["p[_ngcontent-%COMP%]{font-size:1rem;line-height:2rem;margin:0;margin-left:calc(-1rem + (-2 - -1) * (100vw - 0rem) / (71.4285714286 - 0));margin-right:calc(-1rem + (-2 - -1) * (100vw - 0rem) / (71.4285714286 - 0))}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-left:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-left:-2rem}}@media (max-width: 0rem){p[_ngcontent-%COMP%]{margin-right:-1rem}}@media (min-width: 71.4285714286rem){p[_ngcontent-%COMP%]{margin-right:-2rem}}.box[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);width:100%;color:#fff;padding:calc(1rem + (2 - 1) * (100vw - 0rem) / (71.4285714286 - 0));padding-top:calc(.5rem + (1 - .5) * (100vw - 0rem) / (71.4285714286 - 0));text-align:center;background-color:#00000080}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding:1rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding:2rem}}@media (max-width: 0rem){.box[_ngcontent-%COMP%]{padding-top:.5rem}}@media (min-width: 71.4285714286rem){.box[_ngcontent-%COMP%]{padding-top:1rem}}"]})}return n})();const x=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-nested-targets"]],standalone:!0,features:[t.aNF],decls:9,vars:3,consts:[["path","nested/targets"],[1,"nested-targets-wrapper"],[3,"greedy"]],template:function(e,i){1&e&&(t.nrm(0,"app-example-link",0)(1,"app-nested-targets-box"),t.j41(2,"div",1)(3,"app-nested-targets-dustbin",2)(4,"app-nested-targets-dustbin",2),t.nrm(5,"app-nested-targets-dustbin",2),t.k0s()(),t.j41(6,"app-nested-targets-dustbin")(7,"app-nested-targets-dustbin"),t.nrm(8,"app-nested-targets-dustbin"),t.k0s()()()),2&e&&(t.R7$(3),t.Y8G("greedy",!0),t.R7$(),t.Y8G("greedy",!0),t.R7$(),t.Y8G("greedy",!0))},dependencies:[s.G,g,O],styles:[".nested-targets-wrapper[_ngcontent-%COMP%]{display:flex}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nested-targets-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}"]})}return n})()}]},87567:(h,c,a)=>{a.d(c,{G:()=>p});var s=a(81072);let p=(()=>{class o{constructor(){this.path=""}get link(){return"https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/"+this.path}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275cmp=s.VBU({type:o,selectors:[["app-example-link"]],inputs:{path:"path"},standalone:!0,features:[s.aNF],decls:4,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-github"]],template:function(d,g){1&d&&(s.j41(0,"p")(1,"a",0),s.nrm(2,"i",1),s.EFF(3," View the source on GitHub "),s.k0s()()),2&d&&(s.R7$(),s.Y8G("href",g.link,s.B4B))},styles:[".fab[_ngcontent-%COMP%]{color:#000}p[_ngcontent-%COMP%]{margin-top:0}a[_ngcontent-%COMP%]{padding:8px;display:inline-block;background:#4448e024;background:#e5e2fa;background:#e2ecfa;text-decoration:none}"]})}return o})()}}]);