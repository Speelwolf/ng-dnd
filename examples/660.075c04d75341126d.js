"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[660],{38660:(S,l,s)=>{s.r(l),s.d(l,{routes:()=>E});var c=s(87567),r=s(54739),m=s(62414),h=s(1574),d=s(44387),p=s(58203),e=s(81072),f=s(90789),g=s(70897),v=s(667),x=s(67984),F=s(86283);function u(n,o){if(1&n&&(e.j41(0,"div",7)(1,"pre"),e.EFF(2),e.k0s()()),2&n){const t=e.XpG().item;e.Aen(t.size.style()),e.R7$(2),e.Lme("",t.index+1,". ",t.data.name,"")}}function k(n,o){1&n&&(e.qex(0,5),e.DNE(1,u,3,4,"div",6),e.bVm()),2&n&&(e.Y8G("ngSwitch",o.$implicit),e.R7$(),e.Y8G("ngSwitchCase","FIXER"))}function C(n,o){if(1&n&&(e.j41(0,"div",8,0),e.nI1(2,"async"),e.j41(3,"pre"),e.EFF(4),e.k0s()()),2&n){const t=o.$implicit,i=e.sdS(1);e.AVh("fixer--placeholder",e.bMT(2,7,i.isDragging$)),e.Y8G("dndSortableRender",t)("dragSource",i.source)("noHTML5Preview",!0),e.R7$(4),e.Lme("",i.index+1,". ",i.data.name,"")}}let y=(()=>{class n{constructor(){this.fake=()=>p.fake("fix the {{hacker.abbreviation}} {{hacker.noun}}"),this.list=[{id:1,name:this.fake()},{id:2,name:this.fake()},{id:3,name:this.fake()},{id:4,name:this.fake()},{id:5,name:this.fake()}],this.tempList=this.list,this.simpleSpec={type:"FIXER",trackBy:t=>t.id,hover:t=>{this.tempList=this.move(t)},drop:t=>{this.tempList=this.list=this.move(t)},endDrag:t=>{this.tempList=this.list}},this.hoverTrigger=d.lX.fixed}move(t){const i=this.list.slice(0);return i.splice(t.index,1),i.splice(t.hover.index,0,t.data),i}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-fixed-sortable"]],standalone:!0,features:[e.aNF],decls:7,vars:4,consts:[["render","dndSortableRender"],[3,"allBackends"],[1,"list"],["listId","simple-demo",3,"hoverTrigger","children","spec"],["dndSortableTemplate",""],[3,"ngSwitch"],["class","fixer",3,"style",4,"ngSwitchCase"],[1,"fixer"],[1,"fixer",3,"dndSortableRender","dragSource","noHTML5Preview"]],template:function(i,a){1&i&&(e.j41(0,"dnd-preview",1),e.DNE(1,k,2,2,"ng-template"),e.k0s(),e.j41(2,"div",2)(3,"h4"),e.EFF(4,"Broken things to fix"),e.k0s(),e.j41(5,"dnd-sortable-list",3),e.DNE(6,C,5,9,"ng-template",4),e.k0s()()),2&i&&(e.Y8G("allBackends",!0),e.R7$(5),e.Y8G("hoverTrigger",a.hoverTrigger)("children",a.tempList)("spec",a.simpleSpec))},dependencies:[m.JG,f.LQ,d.p8,g.z,v.r,x.e,h._X,F.J,r.ux,r.e1,r.Jj],styles:[".fixer[_ngcontent-%COMP%]{min-width:0;width:100%;max-width:400px;margin:4px 0;cursor:move}pre[_ngcontent-%COMP%]{margin:0;color:#d20707;background:#fce0e0;border-bottom:1px solid #e98686;border-left:none}.fixer--placeholder[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.4}"]})}return n})();const E=[{path:"",component:(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["simple-sortable-container"]],standalone:!0,features:[e.aNF],decls:14,vars:0,consts:[["path","sortable/fixed-height"]],template:function(i,a){1&i&&(e.nrm(0,"app-example-link",0),e.j41(1,"p"),e.EFF(2," If you know all the elements have the same height, then you can swap out the hover algorithm for one that reorders as soon as you hover on another element. It won't work with variable height elements. "),e.k0s(),e.j41(3,"p"),e.EFF(4," Simply add "),e.j41(5,"code"),e.EFF(6,'hoverTrigger="fixed"'),e.k0s(),e.EFF(7," to a "),e.j41(8,"code"),e.EFF(9,"<dnd-sortable-list>"),e.k0s(),e.EFF(10," or "),e.j41(11,"code"),e.EFF(12,"dndSortable"),e.k0s()(),e.nrm(13,"app-fixed-sortable"))},dependencies:[c.G,y],encapsulation:2,changeDetection:0})}return n})()}]}}]);