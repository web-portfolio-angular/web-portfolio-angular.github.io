!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{T9iC:function(e,a,r){"use strict";r.r(a),r.d(a,"SignupModule",(function(){return K}));var o=r("ofXK"),s=r("3Pt+"),t=r("tyNb"),b=r("fXoL"),u=r("IYfF"),c=r("zy28");function l(n,i){1&n&&(b.Lb(0,"div",19),b.Jb(1,"app-loading-spinner"),b.Kb())}function m(n,i){if(1&n&&(b.Lb(0,"p"),b.cc(1),b.Kb()),2&n){var e=b.Ub();b.yb(1),b.dc(e.errorMsg)}}function d(n,i){1&n&&(b.Lb(0,"span",20),b.cc(1,"Please enter your name!"),b.Kb())}function p(n,i){1&n&&(b.Lb(0,"span",20),b.cc(1,"Please enter a valid email!"),b.Kb())}function f(n,i){1&n&&(b.Lb(0,"span",20),b.cc(1,"The password should be between 8 and 30 symbols!"),b.Kb())}function g(n,i){1&n&&(b.Lb(0,"span",20),b.cc(1,"The passwords do not match!"),b.Kb())}var v,h,L=((v=function(){function e(i,a,r){n(this,e),this.authService=i,this.router=a,this.formBuilder=r,this.errorMsg=null,this.isLoading=!1}var a,r,o;return a=e,(r=[{key:"ngOnInit",value:function(){this.signupForm=this.formBuilder.group({name:new s.c(null,[s.j.required,s.j.minLength(3),s.j.maxLength(30)]),email:new s.c(null,[s.j.required,s.j.email]),password:new s.c(null,[s.j.required,s.j.minLength(8),s.j.maxLength(30)]),confirmPass:new s.c(null,[s.j.required,s.j.minLength(8),s.j.maxLength(30)])},{validator:this.mustMatch("password","confirmPass")})}},{key:"mustMatch",value:function(n,i){return function(e){var a=e.controls[i];a.setErrors(e.controls[n].value!==a.value?{mustMatch:!0}:null)}}},{key:"onSubmit",value:function(n){var i=this;if(this.isLoading=!0,!n.valid)return this.isLoading=!1,void(this.isLoading=!1);var e=n.value.name,a=n.value.email;this.authService.signUp(a,n.value.password).subscribe((function(){i.authService.signUpAdditionalData(e,a).subscribe(),i.errorMsg=null,i.router.navigate(["/home"]),i.isLoading=!1}),(function(n){i.errorMsg=n,i.isLoading=!1}))}}])&&i(a.prototype,r),o&&i(a,o),e}()).\u0275fac=function(n){return new(n||v)(b.Ib(u.a),b.Ib(t.c),b.Ib(s.b))},v.\u0275cmp=b.Cb({type:v,selectors:[["app-signup"]],decls:39,vars:9,consts:[[1,"container"],["class","loading-spinner",4,"ngIf"],[4,"ngIf"],[1,"sign-form",3,"formGroup","ngSubmit"],[1,"sign-up-header"],[1,"sign-element"],["for","name"],[1,"name"],["type","text","name","name","formControlName","name"],["class","sign-error",4,"ngIf"],["for","email"],[1,"email"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"className"],["type","submit",1,"btn-default",3,"disabled"],[1,"loading-spinner"],[1,"sign-error"]],template:function(n,i){1&n&&(b.Lb(0,"div",0),b.bc(1,l,2,0,"div",1),b.bc(2,m,2,1,"p",2),b.Lb(3,"form",3),b.Sb("ngSubmit",(function(){return i.onSubmit(i.signupForm)})),b.Lb(4,"div",4),b.Lb(5,"h2"),b.cc(6,"Sign up"),b.Kb(),b.Kb(),b.Jb(7,"hr"),b.Lb(8,"div",5),b.Lb(9,"label",6),b.cc(10,"Name"),b.Kb(),b.Lb(11,"div",7),b.Jb(12,"div"),b.Jb(13,"input",8),b.Kb(),b.bc(14,d,2,0,"span",9),b.Kb(),b.Lb(15,"div",5),b.Lb(16,"label",10),b.cc(17,"Email"),b.Kb(),b.Lb(18,"div",11),b.Jb(19,"div"),b.Jb(20,"input",12),b.Kb(),b.bc(21,p,2,0,"span",9),b.Kb(),b.Lb(22,"div",5),b.Lb(23,"label",13),b.cc(24,"Password"),b.Kb(),b.Lb(25,"div",14),b.Jb(26,"div"),b.Jb(27,"input",15),b.Kb(),b.bc(28,f,2,0,"span",9),b.Kb(),b.Lb(29,"div",5),b.Lb(30,"label",16),b.cc(31,"Confirm Password"),b.Kb(),b.Lb(32,"div",14),b.Jb(33,"div"),b.Jb(34,"input",17),b.Kb(),b.bc(35,g,2,0,"span",9),b.Kb(),b.Lb(36,"div"),b.Lb(37,"button",18),b.cc(38,"Sign up"),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&n&&(b.yb(1),b.Vb("ngIf",i.isLoading),b.yb(1),b.Vb("ngIf",i.errorMsg),b.yb(1),b.Vb("formGroup",i.signupForm),b.yb(11),b.Vb("ngIf",!i.signupForm.get("name").valid&&i.signupForm.get("name").touched),b.yb(7),b.Vb("ngIf",!i.signupForm.get("email").valid&&i.signupForm.get("email").touched),b.yb(7),b.Vb("ngIf",!i.signupForm.get("password").valid&&i.signupForm.get("password").touched),b.yb(6),b.Vb("className",!i.signupForm.get("confirmPass").valid&&i.signupForm.get("confirmPass").dirty?"invalid":""),b.yb(1),b.Vb("ngIf",!i.signupForm.get("confirmPass").valid&&i.signupForm.get("confirmPass").dirty),b.yb(2),b.Vb("disabled",!i.signupForm.valid))},directives:[o.i,s.k,s.h,s.f,s.a,s.g,s.d,c.a],encapsulation:2}),v),w=r("BpHE"),y=r("PCNd"),K=((h=function i(){n(this,i)}).\u0275mod=b.Gb({type:h}),h.\u0275inj=b.Fb({factory:function(n){return new(n||h)},imports:[[o.b,s.i,y.a,t.f.forChild([{path:"",component:L,canActivate:[w.a]}])]]}),h)}}])}();