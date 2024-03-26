"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[433],{28144:(M,m,g)=>{g.d(m,{Z:()=>x});var a=g(45673);let x=(()=>{class p{constructor(){this.path=""}get link(){return"https://github.com/ng-dnd/ng-dnd/tree/main/packages/examples/src/app/"+this.path}static#t=this.\u0275fac=function(d){return new(d||p)};static#e=this.\u0275cmp=a.Xpm({type:p,selectors:[["app-example-link"]],inputs:{path:"path"},standalone:!0,features:[a.jDz],decls:4,vars:1,consts:[["target","_blank",3,"href"],[1,"fab","fa-github"]],template:function(d,y){1&d&&(a.TgZ(0,"p")(1,"a",0),a._UZ(2,"i",1),a._uU(3," View the source on GitHub "),a.qZA()()),2&d&&(a.xp6(1),a.Q6J("href",y.link,a.LSH))},styles:[".fab[_ngcontent-%COMP%]{color:#000}p[_ngcontent-%COMP%]{margin-top:0}a[_ngcontent-%COMP%]{padding:8px;display:inline-block;background:rgba(68,72,224,.14);background:#e5e2fa;background:#e2ecfa;text-decoration:none}"]})}return p})()},62433:(M,m,g)=>{g.r(m),g.d(m,{routes:()=>I});var a=g(39134),x=g(28144),p=g(93054),t=g(45673),l=g(47613),d=g(56301);const y=function(e,r){return{transform:e,WebkitTransform:r}};let w=(()=>{class e{constructor(n){this.dnd=n,this.transform="",this.endDrag=new t.vpe,this.source=this.dnd.dragSource("SPOT",{beginDrag:()=>({id:123,x:this.x,y:this.y,fromCube:!0}),endDrag:i=>{this.endDrag.emit()}})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.fD))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-cube"]],inputs:{transform:"transform",x:"x",y:"y"},outputs:{endDrag:"endDrag"},standalone:!0,features:[t.jDz],decls:14,vars:6,consts:[[1,"container",3,"dragSource","noHTML5Preview"],["id","cube",3,"ngStyle"],[1,"front"],[1,"back"],[1,"right"],[1,"left"],[1,"top"],[1,"bottom"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"figure",2),t._uU(3,"1"),t.qZA(),t.TgZ(4,"figure",3),t._uU(5,"2"),t.qZA(),t.TgZ(6,"figure",4),t._uU(7,"3"),t.qZA(),t.TgZ(8,"figure",5),t._uU(9,"4"),t.qZA(),t.TgZ(10,"figure",6),t._uU(11,"5"),t.qZA(),t.TgZ(12,"figure",7),t._uU(13,"6"),t.qZA()()()),2&i&&(t.Q6J("dragSource",o.source)("noHTML5Preview",!0),t.xp6(1),t.Q6J("ngStyle",t.WLB(3,y,o.transform,o.transform)))},dependencies:[l.c8,d.$d,p.PC],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px;position:relative;perspective:1000px}#cube[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;transform-style:preserve-3d}#cube[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;width:196px;height:196px;display:block;position:absolute;border:2px solid black;font-size:68px;text-align:center;line-height:196px}#cube[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{transform:rotateY(0) translateZ(100px);background:#225378}#cube[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{transform:rotateX(180deg) translateZ(100px);background:#1695a3}#cube[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{transform:rotateY(90deg) translateZ(100px);background:#acf0f2}#cube[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{transform:rotateY(-90deg) translateZ(100px);background:#f3ffe2}#cube[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{transform:rotateX(90deg) translateZ(100px);background:#eb7f00}#cube[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{transform:rotateX(-90deg) translateZ(100px);background:#b0121b}"]})}return e})();function u(e){return r=>({x:Math.round(r.x/e)*e,y:Math.round(r.y/e)*e})}var b=g(47946),C=g(19249);let v=(()=>{class e{constructor(){this.compensate=!1}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-box"]],inputs:{compensate:"compensate"},standalone:!0,features:[t.jDz],decls:1,vars:2,consts:[[1,"spot"]],template:function(i,o){1&i&&t._UZ(0,"div",0),2&i&&t.ekj("compensate",o.compensate)},styles:[".spot[_ngcontent-%COMP%]{background:#33e8d5;box-shadow:0 0 8px #33e8d5;cursor:move;padding:16px;border-radius:16px}.compensate[_ngcontent-%COMP%]{margin-left:-16px;margin-top:-16px}"]})}return e})(),D=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-box-drag-preview"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"phresh"],[3,"compensate"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"xy-box",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("compensate",!1))},dependencies:[v],styles:["[_nghost-%COMP%]{display:inline-block}@keyframes _ngcontent-%COMP%_animatedBackground{0%{background:rgba(64,160,150,.8)}to{background:rgba(64,160,150,.2)}}.phresh[_ngcontent-%COMP%]{overflow:auto;margin-left:-32px;margin-top:-32px;padding:16px;border-radius:32px;animation-name:_ngcontent-%COMP%_animatedBackground;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:alternate}"]})}return e})(),T=(()=>{class e{constructor(){this.math=Math,this.width=400,this.height=400}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-crosshairs"]],inputs:{x:"x",y:"y",width:"width",height:"height"},standalone:!0,features:[t.jDz],decls:6,vars:18,consts:[[1,"crosshair","horizontal"],[1,"label"],[1,"crosshair","vertical"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2),t.qZA()(),t.TgZ(3,"div",2)(4,"span",1),t._uU(5),t.qZA()()),2&i&&(t.Udp("top",o.y-1,"px")("width",o.width,"px"),t.ekj("swap-ends",o.x<70)("flip",o.y>o.height-30),t.xp6(2),t.Oqu(o.math.round(o.y)),t.xp6(1),t.Udp("left",o.x-1,"px")("height",o.height,"px"),t.ekj("swap-ends",o.y<70)("flip",o.x>o.width-40),t.xp6(2),t.Oqu(o.math.round(o.x)))},styles:[".crosshair[_ngcontent-%COMP%]{position:absolute;border-width:0;border-style:solid;border-color:#33e8d5}.crosshair.horizontal[_ngcontent-%COMP%]{border-top-width:2px;width:100%;top:0}.crosshair.vertical[_ngcontent-%COMP%]{border-left-width:2px;height:100%;top:0}.label[_ngcontent-%COMP%]{position:absolute;background-color:#33e8d5;padding:2px 2px 1px;left:0;top:0}.swap-ends.horizontal[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{left:auto;right:0}.flip.horizontal[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .swap-ends.vertical[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{top:auto;bottom:0}.flip.vertical[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{left:auto;right:0}"]})}return e})();function _(e,r){return{x:e.x+r.x,y:e.y+r.y}}function f(e,r){return{x:e.x-r.x,y:e.y-r.y}}function U(e,r){if(1&e&&t._UZ(0,"xy-crosshairs",5),2&e){const n=r.ngIf;t.Q6J("x",n.x)("y",n.y)}}function J(e,r){1&e&&t._UZ(0,"xy-box-drag-preview")}function L(e,r){if(1&e&&(t.ynx(0),t.YNc(1,U,1,2,"xy-crosshairs",1),t.ALo(2,"async"),t.TgZ(3,"div",2),t.ALo(4,"async"),t.ynx(5,3),t.YNc(6,J,1,0,"xy-box-drag-preview",4),t.BQk(),t.qZA(),t.BQk()),2&e){const n=t.oxw().ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,i.crossStyle$)),t.xp6(2),t.Q6J("ngStyle",t.lcZ(4,6,i.movingStyle$)),t.xp6(2),t.Q6J("ngSwitch",n.itemType),t.xp6(1),t.Q6J("ngSwitchCase","SPOT")}}function A(e,r){if(1&e&&(t.ynx(0),t.YNc(1,L,7,8,"ng-container",0),t.BQk()),2&e){const n=r.ngIf;t.xp6(1),t.Q6J("ngIf",n.isDragging)}}let Q=(()=>{class e{set incrementPx(n){this.snappingFunction=u(n)}constructor(n,i){this.dnd=n,this.el=i,this.snapToGrid=!1,this.snappingFunction=u(32),this.moved=new t.vpe,this.rect={x:0,y:0,width:0,height:0},this.dragLayer=this.dnd.dragLayer(),this.collect$=this.dragLayer.listen(o=>(this.setWindowRelativeOffset(),{item:o.getItem(),itemType:o.getItemType(),isDragging:o.isDragging(),initialOffset:this.absToRelative(o.getInitialSourceClientOffset()),currentOffset:this.absToRelative(o.getSourceClientOffset())})),this.movingStyle$=this.collect$.pipe((0,b.U)(o=>this.getItemStyles(o)),(0,C.h)(o=>null!=o)),this.crossStyle$=this.collect$.pipe((0,b.U)(o=>this.getCrosshairStyles(o)),(0,C.h)(o=>null!=o))}absToRelative(n){return n&&f(n,this.rect)}setWindowRelativeOffset(){const n=this.el.nativeElement.getBoundingClientRect();this.rect={x:n.left,y:n.top,width:n.width,height:n.height}}getXY(n,i,o,c=!1){let s=function Z(e){return Object.assign({},e)}(o),h=f(o,i);if(this.snapToGrid&&(s=f(s,i),s=this.snappingFunction(s),h=s,s=_(s,i)),n.fromCube){const q=_(n,f(h,{x:16,y:16})),P=this.getClippedOffset(q);return c&&this.moved.emit(P),P}const O=this.getClippedOffset(s);return c&&this.moved.emit(O),O}getClippedOffset(n){const i=_(n,{x:16,y:16});return function S(e,r,n,i){return n<0&&(n=0),n>e&&(n=e),i<0&&(i=0),i>r&&(i=r),{x:n,y:i}}(this.rect.width,this.rect.height,i.x,i.y)}getItemStyles({item:n,initialOffset:i,currentOffset:o}){if(!i||!o)return{display:"none"};const{x:c,y:s}=this.getXY(n,i,o,!0),h=`translate3d(${c}px, ${s}px, 0)`;return{transform:h,WebkitTransform:h}}getCrosshairStyles({item:n,initialOffset:i,currentOffset:o}){if(!i||!o)return null;const c=this.getXY(n,i,o);return function k(e,r){return{x:e(r.x),y:e(r.y)}}(Math.round,c)}ngAfterViewInit(){this.setWindowRelativeOffset()}ngOnDestroy(){this.dragLayer.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.fD),t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-custom-drag-layer"]],inputs:{snapToGrid:"snapToGrid",incrementPx:"incrementPx"},outputs:{moved:"moved"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"x","y",4,"ngIf"],[3,"ngStyle"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"x","y"]],template:function(i,o){1&i&&(t.YNc(0,A,2,1,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,o.collect$))},dependencies:[p.O5,p.PC,p.RF,p.n9,T,D,p.Ov],styles:["[_nghost-%COMP%]{display:block;position:absolute;pointer-events:none;z-index:9000;left:0;top:0;width:100%;height:100%}"],changeDetection:0})}return e})();var G=g(91630);function $(e,r){if(1&e&&t._UZ(0,"xy-crosshairs",4),2&e){const n=t.oxw();t.Q6J("x",n.spot.x)("y",n.spot.y)}}let z=(()=>{class e{constructor(n){this.dnd=n,this.endDrag=new t.vpe,this.source=this.dnd.dragSource("SPOT",{beginDrag:()=>this.spot,isDragging:()=>!0,endDrag:()=>{this.endDrag.emit(this.spot)}}),this.isDragging$=this.source.listen(i=>i.isDragging())}ngOnInit(){this.source.connectDragPreview((0,G.r)(),{captureDraggingState:!0})}ngOnDestroy(){this.source.unsubscribe()}getStyles(){}getRootStyles(n){const{x:i,y:o}=this.spot,c=`translate3d(${i}px, ${o}px, 0)`;return{position:"relative",marginLeft:"-16px",marginTop:"-16px",transform:c,WebkitTransform:c,opacity:n?0:null,height:n?0:null}}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.fD))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-draggable-box"]],inputs:{spot:"spot"},outputs:{endDrag:"endDrag"},standalone:!0,features:[t.jDz],decls:7,vars:7,consts:[[1,"root",3,"dragSource","ngStyle"],[1,"draggable-node"],[1,"fullsize"],[3,"x","y",4,"ngIf"],[3,"x","y"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.TgZ(2,"div",1),t._UZ(3,"xy-box"),t.qZA(),t._UZ(4,"div",2),t.qZA(),t.YNc(5,$,1,2,"xy-crosshairs",3),t.ALo(6,"async")),2&i&&(t.Q6J("dragSource",o.source)("ngStyle",o.getRootStyles(t.lcZ(1,3,o.isDragging$))),t.xp6(5),t.Q6J("ngIf",!0!==t.lcZ(6,5,o.isDragging$)))},dependencies:[l.c8,d.$d,p.O5,p.PC,v,T,p.Ov],styles:[".root[_ngcontent-%COMP%]{cursor:move}xy-crosshairs[_ngcontent-%COMP%], .draggable-node[_ngcontent-%COMP%]{pointer-events:none;position:absolute}xy-crosshairs[_ngcontent-%COMP%]{margin-top:16px}.fullsize[_ngcontent-%COMP%]{position:absolute;left:-400px;top:-400px;width:800px;height:800px}"],changeDetection:0})}return e})();function Y(e,r){if(1&e&&t._UZ(0,"div",7),2&e){const n=r.$implicit,i=t.oxw();t.Udp("top",i.px*n-1,"px")}}function F(e,r){if(1&e&&t._UZ(0,"div",8),2&e){const n=r.$implicit,i=t.oxw();t.Udp("left",i.px*n-1,"px")}}let X=(()=>{class e{get spot(){return{id:23,x:this.x,y:this.y}}set incrementPx(n){this.px=n,this.snappingFunction=u(n),this.setGridlines()}constructor(n){this.dnd=n,this.x=50,this.y=100,this.endDrag=new t.vpe,this.moved=new t.vpe,this.snapToGrid=!1,this.px=32,this.snappingFunction=u(this.px),this.gridlines=[],this.boxTarget=this.dnd.dropTarget("BOX",{}),this.incrementPx=25}emitEach(n){this.moved.emit(n)}dragEnded(n){this.endDrag.emit()}ngOnDestroy(){this.boxTarget.unsubscribe()}setGridlines(){this.gridlines=new Array(Math.floor(400/this.px)-1).fill(0).map((n,i)=>i+1)}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.fD))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-drag-container"]],inputs:{x:"x",y:"y",snapToGrid:"snapToGrid",incrementPx:"incrementPx"},outputs:{endDrag:"endDrag",moved:"moved"},standalone:!0,features:[t.jDz],decls:7,vars:6,consts:[[1,"glow"],[1,"scanline"],[1,"square",3,"dropTarget"],["class","gridline horizontal",3,"top",4,"ngFor","ngForOf"],["class","gridline vertical",3,"left",4,"ngFor","ngForOf"],[3,"spot","endDrag"],[3,"snapToGrid","incrementPx","moved"],[1,"gridline","horizontal"],[1,"gridline","vertical"]],template:function(i,o){1&i&&(t._UZ(0,"div",0)(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,Y,1,2,"div",3),t.YNc(4,F,1,2,"div",4),t.TgZ(5,"xy-draggable-box",5),t.NdJ("endDrag",function(s){return o.dragEnded(s)}),t.qZA()(),t.TgZ(6,"xy-custom-drag-layer",6),t.NdJ("moved",function(s){return o.emitEach(s)}),t.qZA()),2&i&&(t.xp6(2),t.Q6J("dropTarget",o.boxTarget),t.xp6(1),t.Q6J("ngForOf",o.gridlines),t.xp6(1),t.Q6J("ngForOf",o.gridlines),t.xp6(1),t.Q6J("spot",o.spot),t.xp6(1),t.Q6J("snapToGrid",o.snapToGrid)("incrementPx",o.px))},dependencies:[l.c8,d.Li,p.ax,z,Q],styles:['[_nghost-%COMP%]{display:block;position:relative;width:400px;height:400px;box-sizing:content-box;overflow:hidden;background:#153242;border-radius:25px;border:12px solid black}.square[_ngcontent-%COMP%]{position:relative;z-index:3000;left:0;top:0;width:100%;height:100%;box-sizing:border-box;overflow:hidden}.gridline[_ngcontent-%COMP%]{position:absolute;border-width:0;border-style:solid;border-color:#12a394}.gridline.horizontal[_ngcontent-%COMP%]{border-top-width:1px;left:0;width:100%}.gridline.vertical[_ngcontent-%COMP%]{border-left-width:1px;top:0;height:100%}.scanline[_ngcontent-%COMP%]:before{pointer-events:none;content:"";position:absolute;top:0;width:100%;height:5px;background:#fff;background:linear-gradient(to bottom,rgba(255,0,0,0) 0%,rgb(255,250,250) 50%,rgba(255,255,255,.98) 51%,rgba(255,0,0,0) 100%);opacity:.1;animation:_ngcontent-%COMP%_vline 3.25s linear infinite}.scanline[_ngcontent-%COMP%]:after{box-shadow:0 2px 6px #19191933,inset 0 1px #3232321a,inset 0 3px #3232320d,inset 0 3px 8px #4040400d,inset 0 -5px 10px #1919191a}@keyframes _ngcontent-%COMP%_vline{0%{top:-30%}to{top:100%}}.glow[_ngcontent-%COMP%]{pointer-events:none;height:100%;width:100%;left:0;top:0;position:absolute;box-shadow:inset 0 0 1px 1px #4040401a;background:radial-gradient(ellipse at center,#0d756a 0%,rgba(64,64,64,0) 90%);transform-origin:50% 50%;transform:perspective(20px) rotateX(.5deg) skew(2deg) scale(1.03);animation:_ngcontent-%COMP%_glitch 1s linear infinite;opacity:.9}.glow[_ngcontent-%COMP%]:after{background:radial-gradient(ellipse at center,rgba(0,0,0,.5) 0%,rgba(64,64,64,0) 100%);opacity:.1}@keyframes _ngcontent-%COMP%_glitch{0%{transform:scaleY(1.002)}50%{transform:scaleY(1.0001)}to{transform:scaleX(1.001)}}']})}return e})();const I=[{path:"",component:(()=>{class e{constructor(){this.x=225,this.y=225,this.latestLocation={x:this.x,y:this.y},this._snapToGrid=!1,this._pixels=25}get snapToGrid(){return this._snapToGrid}set snapToGrid(n){this._snapToGrid=n,n&&this.snapOnce()}get pixels(){return this._pixels}set pixels(n){n>2&&(this._pixels=n,this.snapOnce())}snapOnce(){const n=u(this.pixels)({x:this.x,y:this.y});this.x=n.x||0,this.y=n.y||0,this.latestLocation=n}dragEnded(){this.x=this.latestLocation.x,this.y=this.latestLocation.y}get cubeTransform(){return`translateZ(-100px) rotateX(${-(this.latestLocation.y-200)/200*180}deg) rotateY(${(this.latestLocation.x-200)/200*180}deg)`}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["xy-drag-layer-container"]],standalone:!0,features:[t.jDz],decls:14,vars:9,consts:[["path","xy-pad"],[1,"flex"],[3,"x","y","snapToGrid","incrementPx","endDrag","moved"],["type","checkbox",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],[1,"pad"],[3,"transform","x","y","endDrag"]],template:function(i,o){1&i&&(t._UZ(0,"app-example-link",0),t.TgZ(1,"div",1)(2,"div")(3,"xy-drag-container",2),t.NdJ("endDrag",function(){return o.dragEnded()})("moved",function(s){return o.latestLocation=s}),t.qZA(),t.TgZ(4,"p")(5,"label")(6,"input",3),t.NdJ("ngModelChange",function(s){return o.snapToGrid=s}),t.qZA(),t._uU(7," Snap to grid "),t.qZA()(),t.TgZ(8,"p")(9,"label")(10,"input",4),t.NdJ("ngModelChange",function(s){return o.pixels=s}),t.qZA(),t._uU(11," Pixels per gridline "),t.qZA()()(),t.TgZ(12,"div",5)(13,"xy-cube",6),t.NdJ("endDrag",function(){return o.dragEnded()}),t.qZA()()()),2&i&&(t.xp6(3),t.Q6J("x",o.x)("y",o.y)("snapToGrid",o.snapToGrid)("incrementPx",o.pixels),t.xp6(3),t.Q6J("ngModel",o.snapToGrid),t.xp6(4),t.Q6J("ngModel",o.pixels),t.xp6(3),t.Q6J("transform",o.cubeTransform)("x",o.x)("y",o.y))},dependencies:[x.Z,X,a.UX,a.Fj,a.wV,a.Wl,a.JJ,a.u5,a.On,w],styles:[".flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.pad[_ngcontent-%COMP%]{padding:80px}"]})}return e})()}]}}]);