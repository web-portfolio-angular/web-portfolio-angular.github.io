(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{T9iC:function(n,i,s){"use strict";s.r(i),s.d(i,"SignupModule",(function(){return v}));var e=s("ofXK"),r=s("3Pt+"),a=s("tyNb"),o=s("fXoL"),t=s("IYfF"),b=s("zy28");function c(n,i){1&n&&(o.Lb(0,"div",19),o.Jb(1,"app-loading-spinner"),o.Kb())}function u(n,i){if(1&n&&(o.Lb(0,"p"),o.cc(1),o.Kb()),2&n){const n=o.Ub();o.yb(1),o.dc(n.errorMsg)}}function m(n,i){1&n&&(o.Lb(0,"span",20),o.cc(1,"Please enter your name!"),o.Kb())}function d(n,i){1&n&&(o.Lb(0,"span",20),o.cc(1,"Please enter a valid email!"),o.Kb())}function l(n,i){1&n&&(o.Lb(0,"span",20),o.cc(1,"The password should be between 8 and 30 symbols!"),o.Kb())}function p(n,i){1&n&&(o.Lb(0,"span",20),o.cc(1,"The passwords do not match!"),o.Kb())}let g=(()=>{class n{constructor(n,i,s){this.authService=n,this.router=i,this.formBuilder=s,this.errorMsg=null,this.isLoading=!1}ngOnInit(){this.signupForm=this.formBuilder.group({name:new r.c(null,[r.j.required,r.j.minLength(3),r.j.maxLength(30)]),email:new r.c(null,[r.j.required,r.j.email]),password:new r.c(null,[r.j.required,r.j.minLength(8),r.j.maxLength(30)]),confirmPass:new r.c(null,[r.j.required,r.j.minLength(8),r.j.maxLength(30)])},{validator:this.mustMatch("password","confirmPass")})}mustMatch(n,i){return s=>{const e=s.controls[i];e.setErrors(s.controls[n].value!==e.value?{mustMatch:!0}:null)}}onSubmit(n){if(this.isLoading=!0,!n.valid)return this.isLoading=!1,void(this.isLoading=!1);const i=n.value.name,s=n.value.email;this.authService.signUp(s,n.value.password).subscribe(()=>{this.authService.signUpAdditionalData(i,s).subscribe(),this.errorMsg=null,this.router.navigate(["/home"]),this.isLoading=!1},n=>{this.errorMsg=n,this.isLoading=!1})}}return n.\u0275fac=function(i){return new(i||n)(o.Ib(t.a),o.Ib(a.c),o.Ib(r.b))},n.\u0275cmp=o.Cb({type:n,selectors:[["app-signup"]],decls:39,vars:9,consts:[[1,"container"],["class","loading-spinner",4,"ngIf"],[4,"ngIf"],[1,"sign-form",3,"formGroup","ngSubmit"],[1,"sign-up-header"],[1,"sign-element"],["for","name"],[1,"name"],["type","text","name","name","formControlName","name"],["class","sign-error",4,"ngIf"],["for","email"],[1,"email"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"className"],["type","submit",1,"btn-default",3,"disabled"],[1,"loading-spinner"],[1,"sign-error"]],template:function(n,i){1&n&&(o.Lb(0,"div",0),o.bc(1,c,2,0,"div",1),o.bc(2,u,2,1,"p",2),o.Lb(3,"form",3),o.Sb("ngSubmit",(function(){return i.onSubmit(i.signupForm)})),o.Lb(4,"div",4),o.Lb(5,"h2"),o.cc(6,"Sign up"),o.Kb(),o.Kb(),o.Jb(7,"hr"),o.Lb(8,"div",5),o.Lb(9,"label",6),o.cc(10,"Name"),o.Kb(),o.Lb(11,"div",7),o.Jb(12,"div"),o.Jb(13,"input",8),o.Kb(),o.bc(14,m,2,0,"span",9),o.Kb(),o.Lb(15,"div",5),o.Lb(16,"label",10),o.cc(17,"Email"),o.Kb(),o.Lb(18,"div",11),o.Jb(19,"div"),o.Jb(20,"input",12),o.Kb(),o.bc(21,d,2,0,"span",9),o.Kb(),o.Lb(22,"div",5),o.Lb(23,"label",13),o.cc(24,"Password"),o.Kb(),o.Lb(25,"div",14),o.Jb(26,"div"),o.Jb(27,"input",15),o.Kb(),o.bc(28,l,2,0,"span",9),o.Kb(),o.Lb(29,"div",5),o.Lb(30,"label",16),o.cc(31,"Confirm Password"),o.Kb(),o.Lb(32,"div",14),o.Jb(33,"div"),o.Jb(34,"input",17),o.Kb(),o.bc(35,p,2,0,"span",9),o.Kb(),o.Lb(36,"div"),o.Lb(37,"button",18),o.cc(38,"Sign up"),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&n&&(o.yb(1),o.Vb("ngIf",i.isLoading),o.yb(1),o.Vb("ngIf",i.errorMsg),o.yb(1),o.Vb("formGroup",i.signupForm),o.yb(11),o.Vb("ngIf",!i.signupForm.get("name").valid&&i.signupForm.get("name").touched),o.yb(7),o.Vb("ngIf",!i.signupForm.get("email").valid&&i.signupForm.get("email").touched),o.yb(7),o.Vb("ngIf",!i.signupForm.get("password").valid&&i.signupForm.get("password").touched),o.yb(6),o.Vb("className",!i.signupForm.get("confirmPass").valid&&i.signupForm.get("confirmPass").dirty?"invalid":""),o.yb(1),o.Vb("ngIf",!i.signupForm.get("confirmPass").valid&&i.signupForm.get("confirmPass").dirty),o.yb(2),o.Vb("disabled",!i.signupForm.valid))},directives:[e.i,r.k,r.h,r.f,r.a,r.g,r.d,b.a],encapsulation:2}),n})();var f=s("BpHE"),h=s("PCNd");let v=(()=>{class n{}return n.\u0275mod=o.Gb({type:n}),n.\u0275inj=o.Fb({factory:function(i){return new(i||n)},imports:[[e.b,r.i,h.a,a.f.forChild([{path:"",component:g,canActivate:[f.a]}])]]}),n})()}}]);