(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UyQ7:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsModule",(function(){return k}));var s=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),r=n("Wcq6"),c=n("fXoL"),b=n("T/S4"),m=n("IYfF"),a=n("V86y"),u=n("rL3l"),l=n("B02C"),f=n("zy28"),d=n("lJxs");let p=(()=>{class e{constructor(e){this.firestore=e}transform(e,t){return this.firestore.getRegistration(e).pipe(Object(d.a)(e=>{const n=e.map(e=>Object.assign({id:e.payload.doc.id},e.payload.doc.data()));switch(t){case"name":return n[0].name;case"phoneCode":return n[0].phoneCode;case"phone":return n[0].phone;case"userImg":return"url("+n[0].userImg+")"}}))}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(b.a))},e.\u0275pipe=c.Kb({name:"getUserInfo",type:e,pure:!0}),e})();const h=function(e){return{"background-image":e}};let g=(()=>{class e{constructor(e){this.subjectsService=e}ngOnInit(){this.shownUserSub=this.subjectsService.shownUserSubject.subscribe(e=>{this.shownUser=e})}ngOnDestroy(){this.shownUserSub.unsubscribe()}onShowUserInfo(e){this.subjectsService.onShowUserInfo(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(u.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-comment"]],inputs:{comment:"comment"},decls:14,vars:18,consts:[[1,"comment-header"],[1,"comment-header-left",3,"click"],[1,"comment-img",3,"ngStyle"],[1,"comment-name"],[1,"comment-date"],[1,"comment-content"],[1,"comment-content-text"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Xb("click",(function(){return t.onShowUserInfo(t.comment.email)})),c.Mb(2,"div",2),c.ac(3,"async"),c.ac(4,"getUserInfo"),c.Qb(5,"p",3),c.uc(6),c.Pb(),c.Pb(),c.Qb(7,"p",4),c.uc(8),c.ac(9,"date"),c.ac(10,"date"),c.Pb(),c.Pb(),c.Qb(11,"div",5),c.Qb(12,"p",6),c.uc(13),c.Pb(),c.Pb()),2&e&&(c.Ab(2),c.fc("ngStyle",c.ic(16,h,c.bc(3,5,c.cc(4,7,t.comment.email,"userImg")))),c.Ab(4),c.wc(" ",t.comment.name," "),c.Ab(2),c.xc(" ",c.cc(9,10,t.comment.date.toDate(),"dd.MM.yyyy")," at ",c.cc(10,13,t.comment.date.toDate(),"HH:mm")," "),c.Ab(5),c.vc(t.comment.comment))},directives:[s.m],pipes:[s.b,p,s.e],encapsulation:2}),e})();const y=function(e){return{"background-image":e}};let v=(()=>{class e{constructor(e){this.subjectsService=e}ngOnInit(){}closeUserInfo(){this.subjectsService.overlayClick()}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(u.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-comment-user-info"]],inputs:{email:"email"},decls:32,vars:28,consts:[[1,"comment-user-info-container"],[1,"comment-user-info"],[1,"comment-user-info__close-btn",3,"click"],[1,"comment-user-info__avatar",3,"ngStyle"],[1,"comment-user-info__element"],[1,"comment-info-img"],["src","../../assets//img/sign/user.png"],["src","../../assets//img/sign/phone.png"],["src","../../assets//img/sign/email.png"],[3,"href"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Xb("click",(function(){return t.closeUserInfo()})),c.uc(3,"X"),c.Pb(),c.Mb(4,"div",3),c.ac(5,"async"),c.ac(6,"getUserInfo"),c.Qb(7,"div",4),c.Qb(8,"div",5),c.Mb(9,"img",6),c.Pb(),c.Qb(10,"div"),c.uc(11),c.ac(12,"async"),c.ac(13,"getUserInfo"),c.Pb(),c.Pb(),c.Qb(14,"div",4),c.Qb(15,"div",5),c.Mb(16,"img",7),c.Pb(),c.Qb(17,"div"),c.Qb(18,"span"),c.uc(19),c.ac(20,"async"),c.ac(21,"getUserInfo"),c.Pb(),c.Qb(22,"span"),c.uc(23),c.ac(24,"async"),c.ac(25,"getUserInfo"),c.Pb(),c.Pb(),c.Pb(),c.Qb(26,"div",4),c.Qb(27,"div",5),c.Mb(28,"img",8),c.Pb(),c.Qb(29,"div"),c.Qb(30,"a",9),c.uc(31),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.Ab(4),c.fc("ngStyle",c.ic(26,y,c.bc(5,6,c.cc(6,8,t.email,"userImg")))),c.Ab(7),c.wc(" ",c.bc(12,11,c.cc(13,13,t.email,"name"))," "),c.Ab(8),c.wc(" +",c.bc(20,16,c.cc(21,18,t.email,"phoneCode"))," "),c.Ab(4),c.wc(" ",c.bc(24,21,c.cc(25,23,t.email,"phone"))," "),c.Ab(7),c.gc("href","mailto:",t.email,"",c.oc),c.Ab(1),c.vc(t.email))},directives:[s.m],pipes:[s.b,p],encapsulation:2}),e})();function A(e,t){1&e&&c.Mb(0,"app-loading-spinner")}function I(e,t){if(1&e&&(c.Qb(0,"div",16),c.Mb(1,"app-comment",10),c.Pb()),2&e){const e=t.$implicit;c.Ab(1),c.fc("comment",e)}}function S(e,t){if(1&e){const e=c.Rb();c.Qb(0,"button",17),c.Xb("click",(function(){c.nc(e);const t=c.Zb().$implicit;return c.Zb().isReply=t.id})),c.uc(1,"Reply "),c.Pb()}}function P(e,t){if(1&e){const e=c.Rb();c.Qb(0,"button",17),c.Xb("click",(function(){return c.nc(e),c.Zb(2).closeReplay()})),c.uc(1,"Close Reply "),c.Pb()}}function Q(e,t){if(1&e&&(c.Qb(0,"p",22),c.uc(1),c.Pb()),2&e){const e=c.Zb(3);c.Ab(1),c.vc(e.errorMsgOnReply)}}function w(e,t){if(1&e){const e=c.Rb();c.Qb(0,"form",18),c.Xb("ngSubmit",(function(){c.nc(e);const t=c.Zb().$implicit,n=c.Zb();return n.onReply(t.id,n.replyForm)})),c.Qb(1,"div"),c.Qb(2,"textarea",19),c.uc(3,"            "),c.Pb(),c.Pb(),c.Qb(4,"div"),c.Qb(5,"button",20),c.uc(6,"Add your comment"),c.Pb(),c.tc(7,Q,2,1,"p",21),c.Pb(),c.Pb()}if(2&e){const e=c.Zb().$implicit,t=c.Zb();c.fc("formGroup",t.replyForm),c.Ab(5),c.fc("disabled",!t.replyForm.valid),c.Ab(2),c.fc("ngIf",t.errorMsgOnReply&&t.isReply==e.id)}}function U(e,t){if(1&e&&(c.Qb(0,"div",9),c.Mb(1,"app-comment",10),c.Qb(2,"div",11),c.tc(3,I,2,1,"div",12),c.Pb(),c.Qb(4,"div",13),c.tc(5,S,2,0,"button",14),c.tc(6,P,2,0,"button",14),c.Pb(),c.tc(7,w,8,3,"form",15),c.Pb()),2&e){const e=t.$implicit,n=c.Zb();c.Ab(1),c.fc("comment",e),c.Ab(2),c.fc("ngForOf",e.replies),c.Ab(2),c.fc("ngIf",n.isAuth),c.Ab(1),c.fc("ngIf",n.isReply==e.id),c.Ab(1),c.fc("ngIf",n.isReply==e.id)}}function M(e,t){if(1&e&&c.Mb(0,"app-comment-user-info",23),2&e){const e=c.Zb();c.fc("email",e.shownUser)}}function F(e,t){1&e&&(c.Qb(0,"div",24),c.Qb(1,"p"),c.uc(2,"Please Sign in to add your comment!"),c.Pb(),c.Pb())}function O(e,t){if(1&e&&(c.Qb(0,"p",22),c.uc(1),c.Pb()),2&e){const e=c.Zb(2);c.Ab(1),c.vc(e.errorMsgOnSubmit)}}function R(e,t){if(1&e&&(c.Qb(0,"p",22),c.uc(1),c.Pb()),2&e){const e=c.Zb(2);c.Ab(1),c.vc(e.errorMsgOnloadComments)}}function C(e,t){if(1&e){const e=c.Rb();c.Qb(0,"form",25),c.Xb("ngSubmit",(function(){c.nc(e);const t=c.Zb();return t.onSubmit(t.postForm)})),c.Qb(1,"div"),c.Mb(2,"textarea",26),c.Pb(),c.Qb(3,"div"),c.Qb(4,"button",20),c.uc(5,"Add your comment"),c.Pb(),c.tc(6,O,2,1,"p",21),c.Pb(),c.tc(7,R,2,1,"p",21),c.Pb()}if(2&e){const e=c.Zb();c.fc("formGroup",e.postForm),c.Ab(4),c.fc("disabled",!e.postForm.valid),c.Ab(2),c.fc("ngIf",e.errorMsgOnSubmit),c.Ab(1),c.fc("ngIf",e.errorMsgOnloadComments)}}let j=(()=>{class e{constructor(e,t,n,s,i,o){this.firestore=e,this.formBuilder=t,this.authService=n,this.additionUserInfoService=s,this.subjectsService=i,this.generateIdService=o,this.isAuth=!1,this.isLoading=!1,this.isReply=null,this.errorMsgOnloadComments=null,this.errorMsgOnSubmit=null,this.errorMsgOnReply=null}ngOnInit(){this.subUser=this.authService.user.subscribe(e=>{this.isAuth=!!e}),this.additionUserInfoService.getUserAdditionalData(),this.userAdditionalDataSub=this.additionUserInfoService.userAdditionalDataSubject.subscribe(e=>{this.userAdditionalData=e}),this.isLoading=!0,this.firestore.getComments().subscribe(e=>{this.comments=e.map(e=>Object.assign({id:e.payload.doc.id},e.payload.doc.data())),this.isLoading=!1,this.errorMsgOnloadComments=null},e=>{this.isLoading=!1,this.errorMsgOnloadComments=e.message}),this.postForm=this.formBuilder.group({commentArea:new i.d(null,i.p.required)}),this.replyForm=this.formBuilder.group({replyArea:new i.d(null,i.p.required)}),this.shownUserSub=this.subjectsService.shownUserSubject.subscribe(e=>{this.shownUser=e}),this.showUserInfoSub=this.subjectsService.showUserInfoSubject.subscribe(e=>{this.showUserInfo=e})}ngOnDestroy(){this.subUser.unsubscribe(),this.userAdditionalDataSub.unsubscribe(),this.showUserInfoSub.unsubscribe(),this.shownUserSub.unsubscribe()}onSubmit(e){if(!this.postForm.valid)return;const t=this.userAdditionalData[0].name,n=this.userAdditionalData[0].email,s=r.firestore.Timestamp.now(),i=e.value.commentArea.trim();""!=i?this.firestore.createComment({name:t,email:n,date:s,comment:i}).then(()=>{this.postForm.reset(),this.errorMsgOnSubmit=null}).catch(e=>{this.errorMsgOnSubmit=e.message}):this.postForm.reset()}onReply(e,t){if(!this.replyForm.valid)return;const n=this.userAdditionalData[0].name,s=this.userAdditionalData[0].email,i=r.firestore.Timestamp.now(),o=t.value.replyArea.trim(),c=this.generateIdService.generateId();""!=o?this.firestore.updateComment({name:n,email:s,date:i,comment:o,id:c,commentId:e}).then(()=>{this.isReply=null,this.replyForm.reset(),this.errorMsgOnReply=null}).catch(e=>{this.errorMsgOnReply=e.message}):this.replyForm.reset()}closeReplay(){this.isReply=null,this.replyForm.reset()}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(b.a),c.Lb(i.c),c.Lb(m.a),c.Lb(a.a),c.Lb(u.a),c.Lb(l.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-comments"]],decls:11,vars:5,consts:[[1,"container"],[1,"comments-container"],[4,"ngIf"],[1,"comments-count"],["class","comment",4,"ngFor","ngForOf"],[3,"email",4,"ngIf"],[1,"hr-border"],["class","comments-auth",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"comment"],[3,"comment"],[1,"comment-replies"],["class","reply",4,"ngFor","ngForOf"],[1,"reply-btns"],["class","btn-default narrow-btn",3,"click",4,"ngIf"],["class","replyForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"reply"],[1,"btn-default","narrow-btn",3,"click"],[1,"replyForm",3,"formGroup","ngSubmit"],["placeholder","Type your reply...","formControlName","replyArea",1,"comments-textarea"],["type","submit",1,"btn-default","btn-default-center",3,"disabled"],["class","error-msg",4,"ngIf"],[1,"error-msg"],[3,"email"],[1,"comments-auth"],[3,"formGroup","ngSubmit"],["placeholder","Type your comment...","formControlName","commentArea",1,"comments-textarea"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.tc(2,A,1,0,"app-loading-spinner",2),c.Qb(3,"p",3),c.uc(4,"Comments"),c.Pb(),c.Qb(5,"div"),c.tc(6,U,8,5,"div",4),c.tc(7,M,1,1,"app-comment-user-info",5),c.Pb(),c.Mb(8,"hr",6),c.tc(9,F,3,0,"div",7),c.tc(10,C,8,4,"form",8),c.Pb(),c.Pb()),2&e&&(c.Ab(2),c.fc("ngIf",t.isLoading),c.Ab(4),c.fc("ngForOf",t.comments),c.Ab(1),c.fc("ngIf",t.showUserInfo),c.Ab(2),c.fc("ngIf",!t.isAuth),c.Ab(1),c.fc("ngIf",t.isAuth&&null==t.isReply))},directives:[s.l,s.k,f.a,g,i.q,i.l,i.g,i.b,i.k,i.e,v],encapsulation:2}),e})();var L=n("PCNd");let k=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[s.c,L.a,i.o,o.e.forChild([{path:"",component:j}])]]}),e})()}}]);