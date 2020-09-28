(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{T9iC:function(e,n,r){"use strict";r.r(n),r.d(n,"SignupModule",(function(){return P}));var i=r("ofXK"),o=r("3Pt+"),s=r("tyNb"),t=r("fXoL"),a=r("IYfF"),b=r("T/S4"),l=r("zy28");function m(e,n){1&e&&t.Jb(0,"app-loading-spinner")}function u(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," Please enter your name! "),t.Kb())}function g(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," The name could not be longer then 30 characters! "),t.Kb())}function d(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," The name should be at least 3 characters! "),t.Kb())}function c(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," Please enter your phone number! "),t.Kb())}function p(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," Please enter your email! "),t.Kb())}function h(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," Please enter a valid email! "),t.Kb())}function f(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," Please enter a passowrd! "),t.Kb())}function L(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," The password could not be longer then 30 symbols! "),t.Kb())}function v(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," The password should be at least 8 symbols! "),t.Kb())}function K(e,n){1&e&&(t.Lb(0,"li"),t.ec(1," The passwords do not match! "),t.Kb())}let w=(()=>{class e{constructor(e,n,r,i){this.authService=e,this.firestore=n,this.router=r,this.formBuilder=i,this.errorMsg=null,this.isLoading=!1}ngOnInit(){this.signupForm=this.formBuilder.group({name:new o.c(null,[o.k.required,o.k.minLength(3),o.k.maxLength(30)]),phone:new o.c(null,o.k.required),email:new o.c(null,[o.k.required,o.k.email]),password:new o.c(null,[o.k.required,o.k.minLength(8),o.k.maxLength(30)]),confirmPass:new o.c(null,[o.k.required])},{validator:this.mustMatch("password","confirmPass")})}mustMatch(e,n){return r=>{const i=r.controls[n];i.setErrors(r.controls[e].value!==i.value?{mustMatch:!0}:null)}}onSubmit(e){if(this.isLoading=!0,!e.valid)return void(this.isLoading=!1);const n=e.value.email,r={name:e.value.name,phone:e.value.phone,email:n};this.authService.signUp(n,e.value.password).subscribe(()=>{this.firestore.createRegistration(r),this.errorMsg=null,this.router.navigate(["/home"]),this.isLoading=!1},e=>{this.errorMsg=e,this.isLoading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Ib(a.a),t.Ib(b.a),t.Ib(s.c),t.Ib(o.b))},e.\u0275cmp=t.Cb({type:e,selectors:[["app-signup"]],decls:57,vars:15,consts:[[1,"container"],[1,"sign-form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"sign-up-header"],[1,"hr-border"],[1,"sign-element"],["for","name"],[1,"name"],["type","text","name","name","formControlName","name"],[1,"sign-error"],["for","phone"],[1,"phone"],["type","number","name","phone","formControlName","phone"],["for","email"],[1,"email"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"className"],[1,"sign-form-btn"],["type","submit",1,"btn-default",3,"disabled"],[1,"error-msg"]],template:function(e,n){1&e&&(t.Lb(0,"div",0),t.Lb(1,"form",1),t.Sb("ngSubmit",(function(){return n.onSubmit(n.signupForm)})),t.dc(2,m,1,0,"app-loading-spinner",2),t.Lb(3,"div",3),t.Lb(4,"h2"),t.ec(5,"Sign up"),t.Kb(),t.Kb(),t.Jb(6,"hr",4),t.Lb(7,"div",5),t.Lb(8,"label",6),t.ec(9,"Name"),t.Kb(),t.Lb(10,"div",7),t.Jb(11,"div"),t.Jb(12,"input",8),t.Kb(),t.Lb(13,"ul",9),t.dc(14,u,2,0,"li",2),t.dc(15,g,2,0,"li",2),t.dc(16,d,2,0,"li",2),t.Kb(),t.Kb(),t.Lb(17,"div",5),t.Lb(18,"label",10),t.ec(19,"Phone Number"),t.Kb(),t.Lb(20,"div",11),t.Jb(21,"div"),t.Jb(22,"input",12),t.Kb(),t.Lb(23,"ul",9),t.dc(24,c,2,0,"li",2),t.Kb(),t.Kb(),t.Lb(25,"div",5),t.Lb(26,"label",13),t.ec(27,"Email"),t.Kb(),t.Lb(28,"div",14),t.Jb(29,"div"),t.Jb(30,"input",15),t.Kb(),t.Lb(31,"ul",9),t.dc(32,p,2,0,"li",2),t.dc(33,h,2,0,"li",2),t.Kb(),t.Kb(),t.Lb(34,"div",5),t.Lb(35,"label",16),t.ec(36,"Password"),t.Kb(),t.Lb(37,"div",17),t.Jb(38,"div"),t.Jb(39,"input",18),t.Kb(),t.Lb(40,"ul",9),t.dc(41,f,2,0,"li",2),t.dc(42,L,2,0,"li",2),t.dc(43,v,2,0,"li",2),t.Kb(),t.Kb(),t.Lb(44,"div",5),t.Lb(45,"label",19),t.ec(46,"Confirm Password"),t.Kb(),t.Lb(47,"div",17),t.Jb(48,"div"),t.Jb(49,"input",20),t.Kb(),t.Lb(50,"ul",9),t.dc(51,K,2,0,"li",2),t.Kb(),t.Kb(),t.Lb(52,"div",21),t.Lb(53,"button",22),t.ec(54,"Sign up"),t.Kb(),t.Kb(),t.Lb(55,"p",23),t.ec(56),t.Kb(),t.Kb(),t.Kb()),2&e&&(t.yb(1),t.Xb("formGroup",n.signupForm),t.yb(1),t.Xb("ngIf",n.isLoading),t.yb(12),t.Xb("ngIf",!n.signupForm.get("name").valid&&!n.signupForm.get("name").hasError("maxlength")&&!n.signupForm.get("name").hasError("minlength")&&n.signupForm.get("name").touched),t.yb(1),t.Xb("ngIf",n.signupForm.get("name").hasError("maxlength")&&n.signupForm.get("name").touched),t.yb(1),t.Xb("ngIf",n.signupForm.get("name").hasError("minlength")&&n.signupForm.get("name").touched),t.yb(8),t.Xb("ngIf",!n.signupForm.get("phone").valid&&n.signupForm.get("phone").touched),t.yb(8),t.Xb("ngIf",!n.signupForm.get("email").valid&&!n.signupForm.get("email").hasError("email")&&n.signupForm.get("email").touched),t.yb(1),t.Xb("ngIf",n.signupForm.get("email").hasError("email")&&n.signupForm.get("email").touched),t.yb(8),t.Xb("ngIf",!n.signupForm.get("password").valid&&!n.signupForm.get("password").hasError("maxlength")&&!n.signupForm.get("password").hasError("minlength")&&n.signupForm.get("password").touched),t.yb(1),t.Xb("ngIf",n.signupForm.get("password").hasError("maxlength")&&n.signupForm.get("password").touched),t.yb(1),t.Xb("ngIf",n.signupForm.get("password").hasError("minlength")&&n.signupForm.get("password").touched),t.yb(6),t.Xb("className",!n.signupForm.get("confirmPass").valid&&n.signupForm.get("confirmPass").dirty?"invalid":""),t.yb(2),t.Xb("ngIf",!n.signupForm.get("confirmPass").valid&&n.signupForm.get("confirmPass").dirty),t.yb(2),t.Xb("disabled",!n.signupForm.valid),t.yb(3),t.fc(n.errorMsg))},directives:[o.l,o.h,o.f,i.j,o.a,o.g,o.d,o.i,l.a],encapsulation:2}),e})();var y=r("BpHE"),F=r("PCNd");let P=(()=>{class e{}return e.\u0275mod=t.Gb({type:e}),e.\u0275inj=t.Fb({factory:function(n){return new(n||e)},imports:[[i.b,o.j,F.a,s.f.forChild([{path:"",component:w,canActivate:[y.a]}])]]}),e})()}}]);