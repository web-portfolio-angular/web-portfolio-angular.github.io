!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UyQ7:function(n,r,o){"use strict";o.r(r),o.d(r,"CommentsModule",(function(){return M}));var i=o("ofXK"),b=o("3Pt+"),a=o("tyNb"),c=o("Wcq6"),m=o("fXoL"),s=o("T/S4"),u=o("IYfF"),l=o("zy28");function d(e,t){1&e&&m.Jb(0,"app-loading-spinner")}function f(e,t){if(1&e&&(m.Lb(0,"div",17),m.Lb(1,"div",9),m.Lb(2,"p",10),m.ec(3),m.Kb(),m.Lb(4,"p",11),m.ec(5),m.Vb(6,"date"),m.Vb(7,"date"),m.Kb(),m.Kb(),m.Lb(8,"div",12),m.Lb(9,"p"),m.ec(10),m.Kb(),m.Kb(),m.Kb()),2&e){var n=t.$implicit;m.yb(3),m.gc(" ",n.name," "),m.yb(2),m.hc(" ",m.Wb(6,4,n.date.toDate(),"dd.MM.yyyy")," at ",m.Wb(7,7,n.date.toDate(),"HH:mm")," "),m.yb(5),m.fc(n.comment)}}function p(e,t){if(1&e){var n=m.Mb();m.Lb(0,"button",18),m.Sb("click",(function(){m.ac(n);var e=m.Ub().$implicit;return m.Ub().isReply=e.id})),m.ec(1,"Reply"),m.Kb()}}function y(e,t){if(1&e){var n=m.Mb();m.Lb(0,"button",18),m.Sb("click",(function(){return m.ac(n),m.Ub(2).isReply=null})),m.ec(1,"Close Reply"),m.Kb()}}function v(e,t){if(1&e){var n=m.Mb();m.Lb(0,"form",19),m.Sb("ngSubmit",(function(){m.ac(n);var e=m.Ub().$implicit,t=m.Ub();return t.onReply(e.name,e.date,e.comment,e.id,t.replyForm)})),m.Lb(1,"div"),m.Jb(2,"textarea",20),m.Kb(),m.Lb(3,"div"),m.Lb(4,"button",21),m.ec(5,"Add your comment"),m.Kb(),m.Kb(),m.Lb(6,"p",22),m.ec(7),m.Kb(),m.Kb()}if(2&e){var r=m.Ub(2);m.Xb("formGroup",r.replyForm),m.yb(4),m.Xb("disabled",!r.replyForm.valid),m.yb(3),m.fc(r.errorMsg)}}function g(e,t){if(1&e&&(m.Lb(0,"div",8),m.Lb(1,"div",9),m.Lb(2,"p",10),m.ec(3),m.Kb(),m.Lb(4,"p",11),m.ec(5),m.Vb(6,"date"),m.Vb(7,"date"),m.Kb(),m.Kb(),m.Lb(8,"div",12),m.Lb(9,"p"),m.ec(10),m.Kb(),m.Lb(11,"div",13),m.dc(12,f,11,10,"div",14),m.Kb(),m.Lb(13,"div"),m.dc(14,p,2,0,"button",15),m.dc(15,y,2,0,"button",15),m.Kb(),m.dc(16,v,8,3,"form",16),m.Kb(),m.Kb()),2&e){var n=t.$implicit,r=m.Ub();m.yb(3),m.gc(" ",n.name," "),m.yb(2),m.hc(" ",m.Wb(6,8,n.date.toDate(),"dd.MM.yyyy")," at ",m.Wb(7,11,n.date.toDate(),"HH:mm")," "),m.yb(5),m.fc(n.comment),m.yb(2),m.Xb("ngForOf",n.replies),m.yb(2),m.Xb("ngIf",r.isAuth),m.yb(1),m.Xb("ngIf",r.isReply==n.id),m.yb(1),m.Xb("ngIf",r.isReply==n.id)}}function h(e,t){1&e&&(m.Lb(0,"div",23),m.Lb(1,"p"),m.ec(2,"Please Sign in to add your comment!"),m.Kb(),m.Kb())}function L(e,t){if(1&e){var n=m.Mb();m.Lb(0,"form",24),m.Sb("ngSubmit",(function(){m.ac(n);var e=m.Ub();return e.onSubmit(e.postForm)})),m.Lb(1,"div"),m.Jb(2,"textarea",25),m.Kb(),m.Lb(3,"div"),m.Lb(4,"button",21),m.ec(5,"Add your comment"),m.Kb(),m.Kb(),m.Lb(6,"p",22),m.ec(7),m.Kb(),m.Kb()}if(2&e){var r=m.Ub();m.Xb("formGroup",r.postForm),m.yb(4),m.Xb("disabled",!r.postForm.valid),m.yb(3),m.fc(r.errorMsg)}}var K,F,S=((K=function(){function n(t,r,o){e(this,n),this.firestore=t,this.formBuilder=r,this.authService=o,this.isAuth=!1,this.isLoading=!1,this.errorMsg=null,this.isReply=null}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){var e=this;this.subUser=this.authService.user.subscribe((function(t){e.isAuth=!!t})),this.isLoading=!0,this.firestore.getComments().subscribe((function(t){e.comments=t.map((function(e){return Object.assign({id:e.payload.doc.id},e.payload.doc.data())})),e.isLoading=!1,e.errorMsg=null}),(function(t){e.isLoading=!1,e.errorMsg=t})),this.postForm=this.formBuilder.group({commentArea:new b.c(null,b.k.required)}),this.replyForm=this.formBuilder.group({replyArea:new b.c(null,b.k.required)})}},{key:"ngOnDestroy",value:function(){this.subUser.unsubscribe()}},{key:"onSubmit",value:function(e){var t=this;if(this.postForm.valid){var n=JSON.parse(localStorage.getItem("userAdditionalData"));if(n){var r=n[0].name,o=c.firestore.Timestamp.now();this.firestore.createComment({name:r,date:o,comment:e.value.commentArea}).then((function(){t.postForm.reset(),t.errorMsg=null})).catch((function(e){t.errorMsg=e}))}}}},{key:"onReply",value:function(e,t,n,r,o){var i=this;if(this.replyForm.valid){var b=JSON.parse(localStorage.getItem("userAdditionalData"));if(b){var a={name:e,date:t,comment:n,replies:[{name:b[0].name,date:c.firestore.Timestamp.now(),comment:o.value.replyArea}],id:r};this.firestore.updateComment(a).then((function(){i.isReply=null,i.replyForm.reset(),i.errorMsg=null})).catch((function(e){i.errorMsg=e}))}}}}])&&t(r.prototype,o),i&&t(r,i),n}()).\u0275fac=function(e){return new(e||K)(m.Ib(s.a),m.Ib(b.b),m.Ib(u.a))},K.\u0275cmp=m.Cb({type:K,selectors:[["app-comments"]],decls:10,vars:4,consts:[[1,"container"],[1,"comments-container",2,"position","relative"],[4,"ngIf"],[1,"comments-count"],["class","comment",4,"ngFor","ngForOf"],[1,"hr-border"],["class","comments-auth",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"comment"],[1,"comment-header"],[1,"comment-name"],[1,"comment-date"],[1,"comment-content"],[1,"comment-replies"],["class","reply",4,"ngFor","ngForOf"],["class","btn-default reply-btn",3,"click",4,"ngIf"],["class","replyForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"reply"],[1,"btn-default","reply-btn",3,"click"],[1,"replyForm",3,"formGroup","ngSubmit"],["placeholder","Type your reply...","formControlName","replyArea",1,"comments-textarea"],["type","submit",1,"btn-default","btn-default-center",3,"disabled"],[1,"error-msg"],[1,"comments-auth"],[3,"formGroup","ngSubmit"],["placeholder","Type your comment...","formControlName","commentArea",1,"comments-textarea"]],template:function(e,t){1&e&&(m.Lb(0,"div",0),m.Lb(1,"div",1),m.dc(2,d,1,0,"app-loading-spinner",2),m.Lb(3,"p",3),m.ec(4,"Comments"),m.Kb(),m.Lb(5,"div"),m.dc(6,g,17,14,"div",4),m.Jb(7,"hr",5),m.dc(8,h,3,0,"div",6),m.dc(9,L,8,3,"form",7),m.Kb(),m.Kb(),m.Kb()),2&e&&(m.yb(2),m.Xb("ngIf",t.isLoading),m.yb(4),m.Xb("ngForOf",t.comments),m.yb(2),m.Xb("ngIf",!t.isAuth),m.yb(1),m.Xb("ngIf",t.isAuth))},directives:[i.j,i.i,l.a,b.l,b.h,b.f,b.a,b.g,b.d],pipes:[i.d],encapsulation:2}),K),I=o("PCNd"),M=((F=function t(){e(this,t)}).\u0275mod=m.Gb({type:F}),F.\u0275inj=m.Fb({factory:function(e){return new(e||F)},imports:[[i.b,I.a,b.j,a.f.forChild([{path:"",component:S}])]]}),F)}}])}();