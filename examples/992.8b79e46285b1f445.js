"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[992],{4992:(Z,c,r)=>{r.r(c),r.d(c,{NestedSourcesModule:()=>x});var a=r(17011),d=r(14595),g=r(10009),p=r(4730),u=r(62359);const l={BLUE:"BLUE",YELLOW:"YELLOW"};var o=r(31385),h=r(74967),C=r(76801),i=r(10231);function m(n,s){if(1&n&&(o.ynx(0),o.TgZ(1,"p"),o._uU(2),o.qZA(),o.BQk()),2&n){const t=o.oxw();o.xp6(1),o.Udp("background-color",t.backgroundColor)("padding",5,"px"),o.xp6(1),o.hij(" Last dropped: ",t.lastDroppedColor," ")}}let f=(()=>{class n{constructor(t){this.dnd=t,this.Colors=l,this.lastDroppedColor="",this.backgroundColor="",this.target=this.dnd.dropTarget([l.BLUE,l.YELLOW],{drop:e=>{this.lastDroppedColor=e.getItemType()}}),this.canDrop$=this.target.listen(e=>e.canDrop()),this.fade$=this.target.listen(e=>e.canDrop()&&!e.isOver()),this.draggingColor$=this.target.listen(e=>e.getItemType()).pipe((0,C.U)(e=>this.cssColor(e)))}cssColor(t){switch(t){case l.YELLOW:return"lightgoldenrodyellow";case l.BLUE:return"lightblue";default:return"#fff"}}ngOnDestroy(){this.target.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(p.fD))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-nested-source-targetbox"]],decls:7,vars:12,consts:[[1,"box",3,"dropTarget"],[4,"ngIf"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.ALo(1,"async"),o.ALo(2,"async"),o.TgZ(3,"p"),o._uU(4,"Drop here."),o.qZA(),o.YNc(5,m,3,5,"ng-container",1),o.ALo(6,"async"),o.qZA()),2&t&&(o.Udp("background-color",o.lcZ(1,6,e.draggingColor$)),o.ekj("fade",o.lcZ(2,8,e.fade$)),o.Q6J("dropTarget",e.target),o.xp6(5),o.Q6J("ngIf",!0!==o.lcZ(6,10,e.canDrop$)&&!!e.lastDroppedColor))},dependencies:[a.O5,i.Li,a.Ov],styles:[".box[_ngcontent-%COMP%]{font-size:120%;color:#777;margin-top:15px;max-width:300px;height:200px;padding:20px;border:1px dashed #777;text-align:center}.fade[_ngcontent-%COMP%]{opacity:.5}"]}),n})();const y=[[["app-blue-or-yellow"]]],b=["app-blue-or-yellow"];let L=(()=>{class n{set color(t){switch(this.source.setType(t),t){case l.YELLOW:this.backgroundColor="lightgoldenrodyellow";break;case l.BLUE:this.backgroundColor="lightblue"}}toggle(){this.forbid=!this.forbid}constructor(t){this.dnd=t,this.Colors=l,this.backgroundColor="",this.source=this.dnd.dragSource(null,{beginDrag:()=>({}),canDrag:()=>!this.forbid}),this.isDragging$=this.source.listen(e=>e.isDragging()),this.forbid=!1}ngOnDestroy(){this.source.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(p.fD))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-blue-or-yellow"]],inputs:{color:"color",forbid:"forbid"},ngContentSelectors:b,decls:6,vars:7,consts:[[1,"pushright",3,"dragSource"],["type","checkbox","value","forbid","name","toggle",3,"change"]],template:function(t,e){1&t&&(o.F$t(y),o.TgZ(0,"div",0),o.ALo(1,"async"),o.TgZ(2,"label")(3,"input",1),o.NdJ("change",function(){return e.toggle()}),o.qZA(),o._uU(4," Forbid drag "),o.qZA(),o.Hsn(5),o.qZA()),2&t&&(o.Udp("background-color",e.backgroundColor),o.ekj("dragging",o.lcZ(1,5,e.isDragging$)),o.Q6J("dragSource",e.source))},dependencies:[i.$d,a.Ov],styles:["[_nghost-%COMP%]{display:block;color:#777}.pushright[_ngcontent-%COMP%]{margin-top:15px;padding:15px;border:1px dashed #777}.dragging[_ngcontent-%COMP%]{opacity:.5}"]}),n})(),O=(()=>{class n{constructor(){this.Colors=l}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-sources"]],decls:9,vars:6,consts:[["path","nested/sources"],[1,"nested-sources-wrapper"],[3,"color"]],template:function(t,e){1&t&&(o._UZ(0,"app-example-link",0),o.TgZ(1,"div",1)(2,"app-blue-or-yellow",2)(3,"app-blue-or-yellow",2),o._UZ(4,"app-blue-or-yellow",2)(5,"app-blue-or-yellow",2),o.qZA(),o.TgZ(6,"app-blue-or-yellow",2),o._UZ(7,"app-blue-or-yellow",2),o.qZA()(),o._UZ(8,"app-nested-source-targetbox"),o.qZA()),2&t&&(o.xp6(2),o.Q6J("color",e.Colors.BLUE),o.xp6(1),o.Q6J("color",e.Colors.YELLOW),o.xp6(1),o.Q6J("color",e.Colors.YELLOW),o.xp6(1),o.Q6J("color",e.Colors.BLUE),o.xp6(1),o.Q6J("color",e.Colors.BLUE),o.xp6(1),o.Q6J("color",e.Colors.YELLOW))},dependencies:[h.Z,f,L],styles:[".nested-sources-wrapper[_ngcontent-%COMP%]{display:flex}.nested-sources-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nested-sources-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}"]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.ez,g.g,p.c8,u.XJ,d.Bz.forChild([{path:"",component:O}])]}),n})()}}]);