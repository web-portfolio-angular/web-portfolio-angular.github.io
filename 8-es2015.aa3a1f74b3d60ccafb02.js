(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UyQ7:function(t,e,n){"use strict";n.r(e),n.d(e,"CommentsModule",(function(){return v}));var o=n("ofXK"),r=n("3Pt+"),i=n("tyNb"),b=n("Wcq6"),s=n("fXoL"),c=n("T/S4"),m=n("IYfF"),a=n("zy28");function d(t,e){1&t&&s.Jb(0,"app-loading-spinner")}function l(t,e){if(1&t&&(s.Lb(0,"div",17),s.Lb(1,"div",9),s.Lb(2,"p",10),s.ec(3),s.Kb(),s.Lb(4,"p",11),s.ec(5),s.Vb(6,"date"),s.Vb(7,"date"),s.Kb(),s.Kb(),s.Lb(8,"div",12),s.Lb(9,"p"),s.ec(10),s.Kb(),s.Kb(),s.Kb()),2&t){const t=e.$implicit;s.yb(3),s.gc(" ",t.name," "),s.yb(2),s.hc(" ",s.Wb(6,4,t.date.toDate(),"dd.MM.yyyy")," at ",s.Wb(7,7,t.date.toDate(),"HH:mm")," "),s.yb(5),s.fc(t.comment)}}function u(t,e){if(1&t){const t=s.Mb();s.Lb(0,"button",18),s.Sb("click",(function(){s.ac(t);const e=s.Ub().$implicit;return s.Ub().reply(e.id)})),s.ec(1,"Reply"),s.Kb()}}function p(t,e){if(1&t){const t=s.Mb();s.Lb(0,"button",18),s.Sb("click",(function(){return s.ac(t),s.Ub(2).isReply=null})),s.ec(1,"Colse Reply"),s.Kb()}}function f(t,e){if(1&t){const t=s.Mb();s.Lb(0,"form",19),s.Sb("ngSubmit",(function(){s.ac(t);const e=s.Ub().$implicit,n=s.Ub();return n.onReply(e.name,e.date,e.comment,e.id,n.replyForm)})),s.Lb(1,"div"),s.Jb(2,"textarea",20),s.Kb(),s.Lb(3,"div"),s.Lb(4,"button",21),s.ec(5,"Add your comment"),s.Kb(),s.Kb(),s.Lb(6,"p",22),s.ec(7),s.Kb(),s.Kb()}if(2&t){const t=s.Ub(2);s.Xb("formGroup",t.replyForm),s.yb(4),s.Xb("disabled",!t.replyForm.valid),s.yb(3),s.fc(t.errorMsg)}}function y(t,e){if(1&t&&(s.Lb(0,"div",8),s.Lb(1,"div",9),s.Lb(2,"p",10),s.ec(3),s.Kb(),s.Lb(4,"p",11),s.ec(5),s.Vb(6,"date"),s.Vb(7,"date"),s.Kb(),s.Kb(),s.Lb(8,"div",12),s.Lb(9,"p"),s.ec(10),s.Kb(),s.Lb(11,"div",13),s.dc(12,l,11,10,"div",14),s.Kb(),s.Lb(13,"div"),s.dc(14,u,2,0,"button",15),s.dc(15,p,2,0,"button",15),s.Kb(),s.dc(16,f,8,3,"form",16),s.Kb(),s.Kb()),2&t){const t=e.$implicit,n=s.Ub();s.yb(3),s.gc(" ",t.name," "),s.yb(2),s.hc(" ",s.Wb(6,8,t.date.toDate(),"dd.MM.yyyy")," at ",s.Wb(7,11,t.date.toDate(),"HH:mm")," "),s.yb(5),s.fc(t.comment),s.yb(2),s.Xb("ngForOf",t.replies),s.yb(2),s.Xb("ngIf",n.isAuth),s.yb(1),s.Xb("ngIf",n.isReply==t.id),s.yb(1),s.Xb("ngIf",n.isReply==t.id)}}function h(t,e){1&t&&(s.Lb(0,"div",23),s.Lb(1,"p"),s.ec(2,"Please Sign in to add your comment!"),s.Kb(),s.Kb())}function g(t,e){if(1&t){const t=s.Mb();s.Lb(0,"form",24),s.Sb("ngSubmit",(function(){s.ac(t);const e=s.Ub();return e.onSubmit(e.postForm)})),s.Lb(1,"div"),s.Jb(2,"textarea",25),s.Kb(),s.Lb(3,"div"),s.Lb(4,"button",21),s.ec(5,"Add your comment"),s.Kb(),s.Kb(),s.Lb(6,"p",22),s.ec(7),s.Kb(),s.Kb()}if(2&t){const t=s.Ub();s.Xb("formGroup",t.postForm),s.yb(4),s.Xb("disabled",!t.postForm.valid),s.yb(3),s.fc(t.errorMsg)}}let L=(()=>{class t{constructor(t,e,n){this.firestore=t,this.formBuilder=e,this.authService=n,this.isAuth=!1,this.isLoading=!1,this.errorMsg=null,this.isReply=null}ngOnInit(){this.subUser=this.authService.user.subscribe(t=>{this.isAuth=!!t}),this.isLoading=!0,this.firestore.getComments().subscribe(t=>{this.comments=t.map(t=>Object.assign({id:t.payload.doc.id},t.payload.doc.data())),this.isLoading=!1,this.errorMsg=null},t=>{this.isLoading=!1,this.errorMsg=t}),this.postForm=this.formBuilder.group({commentArea:new r.c(null,r.k.required)}),this.replyForm=this.formBuilder.group({replyArea:new r.c(null,r.k.required)})}ngOnDestroy(){this.subUser.unsubscribe()}onSubmit(t){if(!this.postForm.valid)return;const e=JSON.parse(localStorage.getItem("userAdditionalData"));if(!e)return;const n=e[0].name,o=b.firestore.Timestamp.now();this.firestore.createComment({name:n,date:o,comment:t.value.commentArea}).then(()=>{this.postForm.reset(),this.errorMsg=null}).catch(t=>{this.errorMsg=t})}reply(t){this.isReply=t}onReply(t,e,n,o,r){if(!this.replyForm.valid)return;const i=JSON.parse(localStorage.getItem("userAdditionalData"));if(!i)return;const s={name:t,date:e,comment:n,replies:[{name:i[0].name,date:b.firestore.Timestamp.now(),comment:r.value.replyArea}],id:o};this.firestore.updateComment(s).then(()=>{this.isReply=null,this.replyForm.reset(),this.errorMsg=null}).catch(t=>{this.errorMsg=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(c.a),s.Ib(r.b),s.Ib(m.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-comments"]],decls:10,vars:4,consts:[[1,"container"],[1,"comments-container",2,"position","relative"],[4,"ngIf"],[1,"comments-count"],["class","comment",4,"ngFor","ngForOf"],[1,"hr-border"],["class","comments-auth",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"comment"],[1,"comment-header"],[1,"comment-name"],[1,"comment-date"],[1,"comment-content"],[1,"comment-replies"],["class","reply",4,"ngFor","ngForOf"],["class","btn-default reply-btn",3,"click",4,"ngIf"],["class","replyForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"reply"],[1,"btn-default","reply-btn",3,"click"],[1,"replyForm",3,"formGroup","ngSubmit"],["placeholder","Type your reply...","formControlName","replyArea",1,"comments-textarea"],["type","submit",1,"btn-default","btn-default-center",3,"disabled"],[1,"error-msg"],[1,"comments-auth"],[3,"formGroup","ngSubmit"],["placeholder","Type your comment...","formControlName","commentArea",1,"comments-textarea"]],template:function(t,e){1&t&&(s.Lb(0,"div",0),s.Lb(1,"div",1),s.dc(2,d,1,0,"app-loading-spinner",2),s.Lb(3,"p",3),s.ec(4,"Comments"),s.Kb(),s.Lb(5,"div"),s.dc(6,y,17,14,"div",4),s.Jb(7,"hr",5),s.dc(8,h,3,0,"div",6),s.dc(9,g,8,3,"form",7),s.Kb(),s.Kb(),s.Kb()),2&t&&(s.yb(2),s.Xb("ngIf",e.isLoading),s.yb(4),s.Xb("ngForOf",e.comments),s.yb(2),s.Xb("ngIf",!e.isAuth),s.yb(1),s.Xb("ngIf",e.isAuth))},directives:[o.j,o.i,a.a,r.l,r.h,r.f,r.a,r.g,r.d],pipes:[o.d],encapsulation:2}),t})();var K=n("PCNd");let v=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[o.b,K.a,r.j,i.f.forChild([{path:"",component:L}])]]}),t})()}}]);