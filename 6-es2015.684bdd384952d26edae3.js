(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UyQ7:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsModule",(function(){return k}));var s=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),c=n("Wcq6"),r=n("fXoL"),b=n("T/S4"),m=n("IYfF"),a=n("V86y"),u=n("rL3l"),l=n("B02C"),f=n("zy28"),d=n("lJxs");let p=(()=>{class e{constructor(e){this.firestore=e}transform(e,t){return this.firestore.getRegistration(e).pipe(Object(d.a)(e=>{const n=e.map(e=>Object.assign({id:e.payload.doc.id},e.payload.doc.data()));switch(t){case"name":return n[0].name;case"phoneCode":return n[0].phoneCode;case"phone":return n[0].phone;case"userImg":return"url("+n[0].userImg+")"}}))}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(b.a))},e.\u0275pipe=r.Kb({name:"getUserInfo",type:e,pure:!0}),e})();const h=function(e){return{"background-image":e}};let g=(()=>{class e{constructor(e){this.subjectsService=e}ngOnInit(){this.shownUserSub=this.subjectsService.shownUserSubject.subscribe(e=>{this.shownUser=e})}ngOnDestroy(){this.shownUserSub.unsubscribe()}onShowUserInfo(e){this.subjectsService.onShowUserInfo(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(u.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-comment"]],inputs:{comment:"comment"},decls:14,vars:18,consts:[[1,"comment-header"],[1,"comment-header-left",3,"click"],[1,"comment-img",3,"ngStyle"],[1,"comment-name"],[1,"comment-date"],[1,"comment-content"],[1,"comment-content-text"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.Xb("click",(function(){return t.onShowUserInfo(t.comment.email)})),r.Mb(2,"div",2),r.ac(3,"async"),r.ac(4,"getUserInfo"),r.Qb(5,"p",3),r.uc(6),r.Pb(),r.Pb(),r.Qb(7,"p",4),r.uc(8),r.ac(9,"date"),r.ac(10,"date"),r.Pb(),r.Pb(),r.Qb(11,"div",5),r.Qb(12,"p",6),r.uc(13),r.Pb(),r.Pb()),2&e&&(r.Ab(2),r.fc("ngStyle",r.ic(16,h,r.bc(3,5,r.cc(4,7,t.comment.email,"userImg")))),r.Ab(4),r.wc(" ",t.comment.name," "),r.Ab(2),r.xc(" ",r.cc(9,10,t.comment.date.toDate(),"dd.MM.yyyy")," at ",r.cc(10,13,t.comment.date.toDate(),"HH:mm")," "),r.Ab(5),r.vc(t.comment.comment))},directives:[s.m],pipes:[s.b,p,s.e],encapsulation:2}),e})();const y=function(e){return{"background-image":e}};let v=(()=>{class e{constructor(e){this.subjectsService=e}ngOnInit(){}closeUserInfo(){this.subjectsService.overlayClick()}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(u.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-comment-user-info"]],inputs:{email:"email"},decls:32,vars:28,consts:[[1,"comment-user-info-container"],[1,"comment-user-info"],[1,"comment-user-info__close-btn",3,"click"],[1,"comment-user-info__avatar",3,"ngStyle"],[1,"comment-user-info__element"],[1,"comment-info-img"],["src","../../assets//img/sign/user.png"],["src","../../assets//img/sign/phone.png"],["src","../../assets//img/sign/email.png"],[3,"href"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.Qb(2,"div",2),r.Xb("click",(function(){return t.closeUserInfo()})),r.uc(3,"X"),r.Pb(),r.Mb(4,"div",3),r.ac(5,"async"),r.ac(6,"getUserInfo"),r.Qb(7,"div",4),r.Qb(8,"div",5),r.Mb(9,"img",6),r.Pb(),r.Qb(10,"div"),r.uc(11),r.ac(12,"async"),r.ac(13,"getUserInfo"),r.Pb(),r.Pb(),r.Qb(14,"div",4),r.Qb(15,"div",5),r.Mb(16,"img",7),r.Pb(),r.Qb(17,"div"),r.Qb(18,"span"),r.uc(19),r.ac(20,"async"),r.ac(21,"getUserInfo"),r.Pb(),r.Qb(22,"span"),r.uc(23),r.ac(24,"async"),r.ac(25,"getUserInfo"),r.Pb(),r.Pb(),r.Pb(),r.Qb(26,"div",4),r.Qb(27,"div",5),r.Mb(28,"img",8),r.Pb(),r.Qb(29,"div"),r.Qb(30,"a",9),r.uc(31),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&e&&(r.Ab(4),r.fc("ngStyle",r.ic(26,y,r.bc(5,6,r.cc(6,8,t.email,"userImg")))),r.Ab(7),r.wc(" ",r.bc(12,11,r.cc(13,13,t.email,"name"))," "),r.Ab(8),r.wc(" +",r.bc(20,16,r.cc(21,18,t.email,"phoneCode"))," "),r.Ab(4),r.wc(" ",r.bc(24,21,r.cc(25,23,t.email,"phone"))," "),r.Ab(7),r.gc("href","mailto:",t.email,"",r.oc),r.Ab(1),r.vc(t.email))},directives:[s.m],pipes:[s.b,p],encapsulation:2}),e})();function A(e,t){1&e&&r.Mb(0,"app-loading-spinner")}function I(e,t){if(1&e&&(r.Qb(0,"div",16),r.Mb(1,"app-comment",10),r.Pb()),2&e){const e=t.$implicit;r.Ab(1),r.fc("comment",e)}}function S(e,t){if(1&e){const e=r.Rb();r.Qb(0,"button",17),r.Xb("click",(function(){r.nc(e);const t=r.Zb().$implicit;return r.Zb().isReply=t.id})),r.uc(1,"Reply "),r.Pb()}}function P(e,t){if(1&e){const e=r.Rb();r.Qb(0,"button",17),r.Xb("click",(function(){return r.nc(e),r.Zb(2).closeReplay()})),r.uc(1,"Close Reply "),r.Pb()}}function Q(e,t){if(1&e&&(r.Qb(0,"p",22),r.uc(1),r.Pb()),2&e){const e=r.Zb(3);r.Ab(1),r.vc(e.errorMsgOnReply)}}function w(e,t){if(1&e){const e=r.Rb();r.Qb(0,"form",18),r.Xb("ngSubmit",(function(){r.nc(e);const t=r.Zb().$implicit,n=r.Zb();return n.onReply(t.id,n.replyForm)})),r.Qb(1,"div"),r.Qb(2,"textarea",19),r.uc(3,"            "),r.Pb(),r.Pb(),r.Qb(4,"div"),r.Qb(5,"button",20),r.uc(6,"Add your comment"),r.Pb(),r.tc(7,Q,2,1,"p",21),r.Pb(),r.Pb()}if(2&e){const e=r.Zb().$implicit,t=r.Zb();r.fc("formGroup",t.replyForm),r.Ab(5),r.fc("disabled",!t.replyForm.valid),r.Ab(2),r.fc("ngIf",t.errorMsgOnReply&&t.isReply==e.id)}}function U(e,t){if(1&e&&(r.Qb(0,"div",9),r.Mb(1,"app-comment",10),r.Qb(2,"div",11),r.tc(3,I,2,1,"div",12),r.Pb(),r.Qb(4,"div",13),r.tc(5,S,2,0,"button",14),r.tc(6,P,2,0,"button",14),r.Pb(),r.tc(7,w,8,3,"form",15),r.Pb()),2&e){const e=t.$implicit,n=r.Zb();r.Ab(1),r.fc("comment",e),r.Ab(2),r.fc("ngForOf",e.replies),r.Ab(2),r.fc("ngIf",n.isAuth),r.Ab(1),r.fc("ngIf",n.isReply==e.id),r.Ab(1),r.fc("ngIf",n.isReply==e.id)}}function M(e,t){if(1&e&&r.Mb(0,"app-comment-user-info",23),2&e){const e=r.Zb();r.fc("email",e.shownUser)}}function O(e,t){1&e&&(r.Qb(0,"div",24),r.Qb(1,"p"),r.uc(2,"Please Sign in to add your comment!"),r.Pb(),r.Pb())}function F(e,t){if(1&e&&(r.Qb(0,"p",22),r.uc(1),r.Pb()),2&e){const e=r.Zb(2);r.Ab(1),r.vc(e.errorMsgOnSubmit)}}function R(e,t){if(1&e&&(r.Qb(0,"p",22),r.uc(1),r.Pb()),2&e){const e=r.Zb(2);r.Ab(1),r.vc(e.errorMsgOnloadComments)}}function C(e,t){if(1&e){const e=r.Rb();r.Qb(0,"form",25),r.Xb("ngSubmit",(function(){r.nc(e);const t=r.Zb();return t.onSubmit(t.postForm)})),r.Qb(1,"div"),r.Mb(2,"textarea",26),r.Pb(),r.Qb(3,"div"),r.Qb(4,"button",20),r.uc(5,"Add your comment"),r.Pb(),r.tc(6,F,2,1,"p",21),r.Pb(),r.tc(7,R,2,1,"p",21),r.Pb()}if(2&e){const e=r.Zb();r.fc("formGroup",e.postForm),r.Ab(4),r.fc("disabled",!e.postForm.valid),r.Ab(2),r.fc("ngIf",e.errorMsgOnSubmit),r.Ab(1),r.fc("ngIf",e.errorMsgOnloadComments)}}let j=(()=>{class e{constructor(e,t,n,s,i,o){this.firestore=e,this.formBuilder=t,this.authService=n,this.additionUserInfoService=s,this.subjectsService=i,this.generateIdService=o,this.isAuth=!1,this.isLoading=!1,this.isReply=null,this.errorMsgOnloadComments=null,this.errorMsgOnSubmit=null,this.errorMsgOnReply=null}ngOnInit(){this.subUser=this.authService.user.subscribe(e=>{this.isAuth=!!e}),this.additionUserInfoService.getUserAdditionalData(),this.userAdditionalDataSub=this.additionUserInfoService.userAdditionalDataSubject.subscribe(e=>{this.userAdditionalData=e}),this.isLoading=!0,this.firestore.getComments().subscribe(e=>{this.comments=e.map(e=>Object.assign({id:e.payload.doc.id},e.payload.doc.data())),this.isLoading=!1,this.errorMsgOnloadComments=null},e=>{this.isLoading=!1,this.errorMsgOnloadComments=e.message}),this.postForm=this.formBuilder.group({commentArea:new i.d(null,i.p.required)}),this.replyForm=this.formBuilder.group({replyArea:new i.d(null,i.p.required)}),this.shownUserSub=this.subjectsService.shownUserSubject.subscribe(e=>{this.shownUser=e}),this.showUserInfoSub=this.subjectsService.showUserInfoSubject.subscribe(e=>{this.showUserInfo=e})}ngOnDestroy(){this.subUser.unsubscribe(),this.userAdditionalDataSub.unsubscribe(),this.showUserInfoSub.unsubscribe(),this.shownUserSub.unsubscribe()}onSubmit(e){if(!this.postForm.valid)return;const t=this.userAdditionalData[0].name,n=this.userAdditionalData[0].email,s=c.firestore.Timestamp.now();this.firestore.createComment({name:t,email:n,date:s,comment:e.value.commentArea}).then(()=>{this.postForm.reset(),this.errorMsgOnSubmit=null}).catch(e=>{this.errorMsgOnSubmit=e.message})}onReply(e,t){if(!this.replyForm.valid)return;const n=this.userAdditionalData[0].name,s=this.userAdditionalData[0].email,i=c.firestore.Timestamp.now(),o=t.value.replyArea,r=this.generateIdService.generateId();this.firestore.updateComment({name:n,email:s,date:i,comment:o,id:r,commentId:e}).then(()=>{this.isReply=null,this.replyForm.reset(),this.errorMsgOnReply=null}).catch(e=>{this.errorMsgOnReply=e.message})}closeReplay(){this.isReply=null,this.replyForm.reset()}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(b.a),r.Lb(i.c),r.Lb(m.a),r.Lb(a.a),r.Lb(u.a),r.Lb(l.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-comments"]],decls:11,vars:5,consts:[[1,"container"],[1,"comments-container"],[4,"ngIf"],[1,"comments-count"],["class","comment",4,"ngFor","ngForOf"],[3,"email",4,"ngIf"],[1,"hr-border"],["class","comments-auth",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"comment"],[3,"comment"],[1,"comment-replies"],["class","reply",4,"ngFor","ngForOf"],[1,"reply-btns"],["class","btn-default narrow-btn",3,"click",4,"ngIf"],["class","replyForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"reply"],[1,"btn-default","narrow-btn",3,"click"],[1,"replyForm",3,"formGroup","ngSubmit"],["placeholder","Type your reply...","formControlName","replyArea",1,"comments-textarea"],["type","submit",1,"btn-default","btn-default-center",3,"disabled"],["class","error-msg",4,"ngIf"],[1,"error-msg"],[3,"email"],[1,"comments-auth"],[3,"formGroup","ngSubmit"],["placeholder","Type your comment...","formControlName","commentArea",1,"comments-textarea"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.tc(2,A,1,0,"app-loading-spinner",2),r.Qb(3,"p",3),r.uc(4,"Comments"),r.Pb(),r.Qb(5,"div"),r.tc(6,U,8,5,"div",4),r.tc(7,M,1,1,"app-comment-user-info",5),r.Pb(),r.Mb(8,"hr",6),r.tc(9,O,3,0,"div",7),r.tc(10,C,8,4,"form",8),r.Pb(),r.Pb()),2&e&&(r.Ab(2),r.fc("ngIf",t.isLoading),r.Ab(4),r.fc("ngForOf",t.comments),r.Ab(1),r.fc("ngIf",t.showUserInfo),r.Ab(2),r.fc("ngIf",!t.isAuth),r.Ab(1),r.fc("ngIf",t.isAuth&&null==t.isReply))},directives:[s.l,s.k,f.a,g,i.q,i.l,i.g,i.b,i.k,i.e,v],encapsulation:2}),e})();var L=n("PCNd");let k=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[s.c,L.a,i.o,o.e.forChild([{path:"",component:j}])]]}),e})()}}]);