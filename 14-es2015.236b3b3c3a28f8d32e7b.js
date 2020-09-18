(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{T9iC:function(n,e,i){"use strict";i.r(e),i.d(e,"SignupModule",(function(){return I}));var r=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),a=i("fXoL"),t=i("IYfF"),b=i("zy28");function l(n,e){1&n&&(a.Lb(0,"div",22),a.Jb(1,"app-loading-spinner"),a.Kb())}function u(n,e){if(1&n&&(a.Lb(0,"p"),a.cc(1),a.Kb()),2&n){const n=a.Ub();a.yb(1),a.dc(n.errorMsg)}}function c(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," Please enter your name! "),a.Kb())}function m(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," The name could not be longer then 30 characters! "),a.Kb())}function g(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," The name should be at least 3 characters! "),a.Kb())}function d(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," Please enter your phone number! "),a.Kb())}function p(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," Please enter your email! "),a.Kb())}function h(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," Please enter a valid email! "),a.Kb())}function f(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," Please enter a passowrd! "),a.Kb())}function L(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," The password could not be longer then 30 symbols! "),a.Kb())}function v(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," The password should be at least 8 symbols! "),a.Kb())}function K(n,e){1&n&&(a.Lb(0,"li"),a.cc(1," The passwords do not match! "),a.Kb())}let w=(()=>{class n{constructor(n,e,i){this.authService=n,this.router=e,this.formBuilder=i,this.errorMsg=null,this.isLoading=!1}ngOnInit(){this.signupForm=this.formBuilder.group({name:new o.c(null,[o.k.required,o.k.minLength(3),o.k.maxLength(30)]),phone:new o.c(null,[o.k.required]),email:new o.c(null,[o.k.required,o.k.email]),password:new o.c(null,[o.k.required,o.k.minLength(8),o.k.maxLength(30)]),confirmPass:new o.c(null,[o.k.required])},{validator:this.mustMatch("password","confirmPass")})}mustMatch(n,e){return i=>{const r=i.controls[e];r.setErrors(i.controls[n].value!==r.value?{mustMatch:!0}:null)}}numeric(){}onSubmit(n){if(this.isLoading=!0,!n.valid)return this.isLoading=!1,void(this.isLoading=!1);const e=n.value.name,i=n.value.email;this.authService.signUp(i,n.value.password).subscribe(()=>{this.authService.signUpAdditionalData(e,i).subscribe(),this.errorMsg=null,this.router.navigate(["/home"]),this.isLoading=!1},n=>{this.errorMsg=n,this.isLoading=!1})}}return n.\u0275fac=function(e){return new(e||n)(a.Ib(t.a),a.Ib(s.c),a.Ib(o.b))},n.\u0275cmp=a.Cb({type:n,selectors:[["app-signup"]],decls:56,vars:16,consts:[[1,"container"],["class","loading-spinner",4,"ngIf"],[4,"ngIf"],[1,"sign-form",3,"formGroup","ngSubmit"],[1,"sign-up-header"],[1,"sign-element"],["for","name"],[1,"name"],["type","text","name","name","formControlName","name",3,"ngModel","ngModelChange"],[1,"sign-error"],["for","phone"],[1,"phone"],["type","number","name","phone","formControlName","phone"],["for","email"],[1,"email"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"className"],["type","submit",1,"btn-default",3,"disabled"],[1,"loading-spinner"]],template:function(n,e){1&n&&(a.Lb(0,"div",0),a.bc(1,l,2,0,"div",1),a.bc(2,u,2,1,"p",2),a.Lb(3,"form",3),a.Sb("ngSubmit",(function(){return e.onSubmit(e.signupForm)})),a.Lb(4,"div",4),a.Lb(5,"h2"),a.cc(6,"Sign up"),a.Kb(),a.Kb(),a.Jb(7,"hr"),a.Lb(8,"div",5),a.Lb(9,"label",6),a.cc(10,"Name"),a.Kb(),a.Lb(11,"div",7),a.Jb(12,"div"),a.Lb(13,"input",8),a.Sb("ngModelChange",(function(n){return e.name=n})),a.Kb(),a.Kb(),a.Lb(14,"ul",9),a.bc(15,c,2,0,"li",2),a.bc(16,m,2,0,"li",2),a.bc(17,g,2,0,"li",2),a.Kb(),a.Kb(),a.Lb(18,"div",5),a.Lb(19,"label",10),a.cc(20,"Phone Number"),a.Kb(),a.Lb(21,"div",11),a.Jb(22,"div"),a.Jb(23,"input",12),a.Kb(),a.Lb(24,"ul",9),a.bc(25,d,2,0,"li",2),a.Kb(),a.Kb(),a.Lb(26,"div",5),a.Lb(27,"label",13),a.cc(28,"Email"),a.Kb(),a.Lb(29,"div",14),a.Jb(30,"div"),a.Jb(31,"input",15),a.Kb(),a.Lb(32,"ul",9),a.bc(33,p,2,0,"li",2),a.bc(34,h,2,0,"li",2),a.Kb(),a.Kb(),a.Lb(35,"div",5),a.Lb(36,"label",16),a.cc(37,"Password"),a.Kb(),a.Lb(38,"div",17),a.Jb(39,"div"),a.Jb(40,"input",18),a.Kb(),a.Lb(41,"ul",9),a.bc(42,f,2,0,"li",2),a.bc(43,L,2,0,"li",2),a.bc(44,v,2,0,"li",2),a.Kb(),a.Kb(),a.Lb(45,"div",5),a.Lb(46,"label",19),a.cc(47,"Confirm Password"),a.Kb(),a.Lb(48,"div",17),a.Jb(49,"div"),a.Jb(50,"input",20),a.Kb(),a.Lb(51,"ul",9),a.bc(52,K,2,0,"li",2),a.Kb(),a.Kb(),a.Lb(53,"div"),a.Lb(54,"button",21),a.cc(55,"Sign up"),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&n&&(a.yb(1),a.Vb("ngIf",e.isLoading),a.yb(1),a.Vb("ngIf",e.errorMsg),a.yb(1),a.Vb("formGroup",e.signupForm),a.yb(10),a.Vb("ngModel",e.name),a.yb(2),a.Vb("ngIf",!e.signupForm.get("name").valid&&!e.signupForm.get("name").hasError("maxlength")&&!e.signupForm.get("name").hasError("minlength")&&e.signupForm.get("name").touched),a.yb(1),a.Vb("ngIf",e.signupForm.get("name").hasError("maxlength")&&e.signupForm.get("name").touched),a.yb(1),a.Vb("ngIf",e.signupForm.get("name").hasError("minlength")&&e.signupForm.get("name").touched),a.yb(8),a.Vb("ngIf",!e.signupForm.get("phone").valid&&e.signupForm.get("phone").touched),a.yb(8),a.Vb("ngIf",!e.signupForm.get("email").valid&&!e.signupForm.get("email").hasError("email")&&e.signupForm.get("email").touched),a.yb(1),a.Vb("ngIf",e.signupForm.get("email").hasError("email")&&e.signupForm.get("email").touched),a.yb(8),a.Vb("ngIf",!e.signupForm.get("password").valid&&!e.signupForm.get("password").hasError("maxlength")&&!e.signupForm.get("password").hasError("minlength")&&e.signupForm.get("password").touched),a.yb(1),a.Vb("ngIf",e.signupForm.get("password").hasError("maxlength")&&e.signupForm.get("password").touched),a.yb(1),a.Vb("ngIf",e.signupForm.get("password").hasError("minlength")&&e.signupForm.get("password").touched),a.yb(6),a.Vb("className",!e.signupForm.get("confirmPass").valid&&e.signupForm.get("confirmPass").dirty?"invalid":""),a.yb(2),a.Vb("ngIf",!e.signupForm.get("confirmPass").valid&&e.signupForm.get("confirmPass").dirty),a.yb(2),a.Vb("disabled",!e.signupForm.valid))},directives:[r.i,o.l,o.h,o.f,o.a,o.g,o.d,o.i,b.a],encapsulation:2}),n})();var y=i("BpHE"),F=i("PCNd");let I=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(e){return new(e||n)},imports:[[r.b,o.j,F.a,s.f.forChild([{path:"",component:w,canActivate:[y.a]}])]]}),n})()}}]);