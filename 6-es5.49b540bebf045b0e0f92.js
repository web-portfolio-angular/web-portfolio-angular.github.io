!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UyQ7:function(n,r,i){"use strict";i.r(r),i.d(r,"CommentsModule",(function(){return q}));var o=i("ofXK"),c=i("3Pt+"),a=i("tyNb"),s=i("Wcq6"),b=i("fXoL"),m=i("T/S4"),u=i("IYfF"),l=i("V86y"),d=i("zy28");function p(e,t){1&e&&b.Mb(0,"app-loading-spinner")}function f(e,t){if(1&e&&(b.Qb(0,"div",19),b.Qb(1,"div",9),b.Qb(2,"p",10),b.qc(3),b.Pb(),b.Qb(4,"p",11),b.qc(5),b.ac(6,"date"),b.ac(7,"date"),b.Pb(),b.Pb(),b.Qb(8,"div",12),b.Qb(9,"p",13),b.qc(10),b.Pb(),b.Pb(),b.Pb()),2&e){var n=t.$implicit;b.Ab(3),b.sc(" ",n.name," "),b.Ab(2),b.tc(" ",b.bc(6,4,n.date.toDate(),"dd.MM.yyyy")," at ",b.bc(7,7,n.date.toDate(),"HH:mm")," "),b.Ab(5),b.rc(n.comment)}}function y(e,t){if(1&e){var n=b.Rb();b.Qb(0,"button",20),b.Xb("click",(function(){b.jc(n);var e=b.Zb().$implicit;return b.Zb().isReply=e.id})),b.qc(1,"Reply"),b.Pb()}}function g(e,t){if(1&e){var n=b.Rb();b.Qb(0,"button",20),b.Xb("click",(function(){return b.jc(n),b.Zb(2).closeReplay()})),b.qc(1,"Close Reply"),b.Pb()}}function v(e,t){if(1&e&&(b.Qb(0,"p",25),b.qc(1),b.Pb()),2&e){var n=b.Zb(3);b.Ab(1),b.rc(n.errorMsgOnReply)}}function h(e,t){if(1&e){var n=b.Rb();b.Qb(0,"form",21),b.Xb("ngSubmit",(function(){b.jc(n);var e=b.Zb().$implicit,t=b.Zb();return t.onReply(e.id,t.replyForm)})),b.Qb(1,"div"),b.Mb(2,"textarea",22),b.Pb(),b.Qb(3,"div"),b.Qb(4,"button",23),b.qc(5,"Add your comment"),b.Pb(),b.pc(6,v,2,1,"p",24),b.Pb(),b.Pb()}if(2&e){var r=b.Zb(2);b.ec("formGroup",r.replyForm),b.Ab(4),b.ec("disabled",!r.replyForm.valid),b.Ab(2),b.ec("ngIf",r.errorMsgOnReply)}}function A(e,t){if(1&e&&(b.Qb(0,"div",8),b.Qb(1,"div",9),b.Qb(2,"p",10),b.qc(3),b.Pb(),b.Qb(4,"p",11),b.qc(5),b.ac(6,"date"),b.ac(7,"date"),b.Pb(),b.Pb(),b.Qb(8,"div",12),b.Qb(9,"p",13),b.qc(10),b.Pb(),b.Qb(11,"div",14),b.pc(12,f,11,10,"div",15),b.Pb(),b.Qb(13,"div",16),b.pc(14,y,2,0,"button",17),b.pc(15,g,2,0,"button",17),b.Pb(),b.pc(16,h,7,3,"form",18),b.Pb(),b.Pb()),2&e){var n=t.$implicit,r=b.Zb();b.Ab(3),b.sc(" ",n.name," "),b.Ab(2),b.tc(" ",b.bc(6,8,n.date.toDate(),"dd.MM.yyyy")," at ",b.bc(7,11,n.date.toDate(),"HH:mm")," "),b.Ab(5),b.rc(n.comment),b.Ab(2),b.ec("ngForOf",n.replies),b.Ab(2),b.ec("ngIf",r.isAuth),b.Ab(1),b.ec("ngIf",r.isReply==n.id),b.Ab(1),b.ec("ngIf",r.isReply==n.id)}}function P(e,t){1&e&&(b.Qb(0,"div",26),b.Qb(1,"p"),b.qc(2,"Please Sign in to add your comment!"),b.Pb(),b.Pb())}function Q(e,t){if(1&e&&(b.Qb(0,"p",25),b.qc(1),b.Pb()),2&e){var n=b.Zb(2);b.Ab(1),b.rc(n.errorMsgOnSubmit)}}function M(e,t){if(1&e&&(b.Qb(0,"p",25),b.qc(1),b.Pb()),2&e){var n=b.Zb(2);b.Ab(1),b.rc(n.errorMsgOnloadComments)}}function F(e,t){if(1&e){var n=b.Rb();b.Qb(0,"form",27),b.Xb("ngSubmit",(function(){b.jc(n);var e=b.Zb();return e.onSubmit(e.postForm)})),b.Qb(1,"div"),b.Mb(2,"textarea",28),b.Pb(),b.Qb(3,"div"),b.Qb(4,"button",23),b.qc(5,"Add your comment"),b.Pb(),b.pc(6,Q,2,1,"p",24),b.Pb(),b.pc(7,M,2,1,"p",24),b.Pb()}if(2&e){var r=b.Zb();b.ec("formGroup",r.postForm),b.Ab(4),b.ec("disabled",!r.postForm.valid),b.Ab(2),b.ec("ngIf",r.errorMsgOnSubmit),b.Ab(1),b.ec("ngIf",r.errorMsgOnloadComments)}}var O,S,R=((O=function(){function n(t,r,i,o){e(this,n),this.firestore=t,this.formBuilder=r,this.authService=i,this.additionUserInfoService=o,this.isAuth=!1,this.isLoading=!1,this.isReply=null,this.errorMsgOnloadComments=null,this.errorMsgOnSubmit=null,this.errorMsgOnReply=null}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.subUser=this.authService.user.subscribe((function(t){e.isAuth=!!t})),this.additionUserInfoService.getUserAdditionalData(),this.userAdditionalDataSub=this.additionUserInfoService.userAdditionalDataSubject.subscribe((function(t){e.userAdditionalData=t})),this.isLoading=!0,this.firestore.getComments().subscribe((function(t){e.comments=t.map((function(e){return Object.assign({id:e.payload.doc.id},e.payload.doc.data())})),e.isLoading=!1,e.errorMsgOnloadComments=null}),(function(t){e.isLoading=!1,e.errorMsgOnloadComments=t.message})),this.postForm=this.formBuilder.group({commentArea:new c.d(null,c.p.required)}),this.replyForm=this.formBuilder.group({replyArea:new c.d(null,c.p.required)})}},{key:"ngOnDestroy",value:function(){this.subUser.unsubscribe(),this.userAdditionalDataSub.unsubscribe()}},{key:"onSubmit",value:function(e){var t=this;if(this.postForm.valid){var n=this.userAdditionalData[0].name,r=s.firestore.Timestamp.now();this.firestore.createComment({name:n,date:r,comment:e.value.commentArea}).then((function(){t.postForm.reset(),t.errorMsgOnSubmit=null})).catch((function(e){t.errorMsgOnSubmit=e.message}))}}},{key:"onReply",value:function(e,t){var n=this;if(this.replyForm.valid){var r=this.userAdditionalData[0].name,i=s.firestore.Timestamp.now();this.firestore.updateComment({name:r,date:i,comment:t.value.replyArea,id:e}).then((function(){n.isReply=null,n.replyForm.reset(),n.errorMsgOnReply=null})).catch((function(e){n.errorMsgOnReply=e.message}))}}},{key:"closeReplay",value:function(){this.isReply=null,this.replyForm.reset()}}])&&t(r.prototype,i),o&&t(r,o),n}()).\u0275fac=function(e){return new(e||O)(b.Lb(m.a),b.Lb(c.c),b.Lb(u.a),b.Lb(l.a))},O.\u0275cmp=b.Fb({type:O,selectors:[["app-comments"]],decls:10,vars:4,consts:[[1,"container"],[1,"comments-container",2,"position","relative"],[4,"ngIf"],[1,"comments-count"],["class","comment",4,"ngFor","ngForOf"],[1,"hr-border"],["class","comments-auth",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"comment"],[1,"comment-header"],[1,"comment-name"],[1,"comment-date"],[1,"comment-content"],[1,"comment-content-text"],[1,"comment-replies"],["class","reply",4,"ngFor","ngForOf"],[1,"reply-btns"],["class","btn-default narrow-btn",3,"click",4,"ngIf"],["class","replyForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"reply"],[1,"btn-default","narrow-btn",3,"click"],[1,"replyForm",3,"formGroup","ngSubmit"],["placeholder","Type your reply...","formControlName","replyArea",1,"comments-textarea"],["type","submit",1,"btn-default","btn-default-center",3,"disabled"],["class","error-msg",4,"ngIf"],[1,"error-msg"],[1,"comments-auth"],[3,"formGroup","ngSubmit"],["placeholder","Type your comment...","formControlName","commentArea",1,"comments-textarea"]],template:function(e,t){1&e&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.pc(2,p,1,0,"app-loading-spinner",2),b.Qb(3,"p",3),b.qc(4,"Comments"),b.Pb(),b.Qb(5,"div"),b.pc(6,A,17,14,"div",4),b.Mb(7,"hr",5),b.pc(8,P,3,0,"div",6),b.pc(9,F,8,4,"form",7),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.Ab(2),b.ec("ngIf",t.isLoading),b.Ab(4),b.ec("ngForOf",t.comments),b.Ab(2),b.ec("ngIf",!t.isAuth),b.Ab(1),b.ec("ngIf",t.isAuth&&null==t.isReply))},directives:[o.k,o.j,d.a,c.q,c.l,c.g,c.b,c.k,c.e],pipes:[o.d],encapsulation:2}),O),I=i("PCNd"),q=((S=function t(){e(this,t)}).\u0275mod=b.Jb({type:S}),S.\u0275inj=b.Ib({factory:function(e){return new(e||S)},imports:[[o.b,I.a,c.o,a.e.forChild([{path:"",component:R}])]]}),S)}}])}();