!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{T9iC:function(r,o,i){"use strict";i.r(o),i.d(o,"SignupModule",(function(){return N}));var s=i("ofXK"),t=i("3Pt+"),a=i("tyNb"),u=i("d3UM"),l=i("fXoL"),b=i("IYfF"),m=i("T/S4"),c=i("kmnG"),g=i("zy28"),p=i("FKr1");function d(e,n){1&e&&l.Mb(0,"app-loading-spinner")}function f(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," Please enter your name! "),l.Pb())}function h(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," The name could not be longer then 30 characters! "),l.Pb())}function P(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," The name should be at least 3 characters! "),l.Pb())}function v(e,n){if(1&e&&(l.Qb(0,"mat-option",32),l.Mb(1,"img",33),l.rc(2),l.Pb()),2&e){var r=n.$implicit;l.fc("value",r.phoneCode),l.Ab(1),l.fc("src",r.img,l.lc),l.Ab(1),l.tc(" +",r.phoneCode," ")}}function w(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," Please enter your phone number! "),l.Pb())}function Q(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," Please enter your email! "),l.Pb())}function F(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," Please enter a valid email! "),l.Pb())}function y(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," Please enter a passowrd! "),l.Pb())}function C(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," The password could not be longer then 30 symbols! "),l.Pb())}function M(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," The password should be at least 8 symbols! "),l.Pb())}function A(e,n){1&e&&(l.Qb(0,"li"),l.rc(1," The passwords do not match! "),l.Pb())}function I(e,n){if(1&e&&(l.Qb(0,"p",34),l.rc(1),l.Pb()),2&e){var r=l.Zb();l.Ab(1),l.sc(r.errorMsgOnSubmit)}}var q,L,S=function(e){return{invalid:e}},E=((q=function(){function r(n,o,i,s){e(this,r),this.authService=n,this.firestore=o,this.router=i,this.formBuilder=s,this.errorMsgOnSubmit=null,this.isLoading=!1,this.errorMsgOnloadPhoneCodes=null,this.defaultUserImg="https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/userImages%2Fdefault-user.jpg?alt=media&token=7487f1ec-16b1-4814-9943-cb30c8ce1eab"}var o,i,s;return o=r,(i=[{key:"ngOnInit",value:function(){var e=this;this.firestore.getPhoneCodes().subscribe((function(n){e.phoneCodes=n.map((function(e){return Object.assign({id:e.payload.doc.id},e.payload.doc.data())})),e.errorMsgOnloadPhoneCodes=null}),(function(n){e.errorMsgOnloadPhoneCodes=n.message})),this.signupForm=this.formBuilder.group({name:new t.d(null,[t.p.required,t.p.minLength(3),t.p.maxLength(30)]),phoneCode:new t.d(359,t.p.required),phone:new t.d(null,t.p.required),email:new t.d(null,[t.p.required,t.p.email]),password:new t.d(null,[t.p.required,t.p.minLength(8),t.p.maxLength(30)]),confirmPass:new t.d(null,[t.p.required])},{validator:this.mustMatch("password","confirmPass")})}},{key:"mustMatch",value:function(e,n){return function(r){var o=r.controls[n];o.setErrors(r.controls[e].value!==o.value?{mustMatch:!0}:null)}}},{key:"onSubmit",value:function(e){var n=this;if(this.isLoading=!0,e.valid){var r=e.value.email,o={name:e.value.name,phoneCode:e.value.phoneCode,phone:e.value.phone,email:r,userImg:this.defaultUserImg};this.authService.signUp(r,e.value.password).subscribe((function(){n.firestore.createRegistration(o),n.errorMsgOnSubmit=null,n.router.navigate(["/home"]),n.isLoading=!1}),(function(e){n.errorMsgOnSubmit=e,n.isLoading=!1}))}else this.isLoading=!1}}])&&n(o.prototype,i),s&&n(o,s),r}()).\u0275fac=function(e){return new(e||q)(l.Lb(b.a),l.Lb(m.a),l.Lb(a.b),l.Lb(t.c))},q.\u0275cmp=l.Fb({type:q,selectors:[["app-signup"]],decls:60,vars:21,consts:[[1,"container"],[1,"sign-form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"sign-form__sign-up-header"],[1,"hr-border"],[1,"sign-form__sign-element"],["for","name"],[1,"name"],[1,"name-img"],["type","text","name","name","formControlName","name"],[1,"sign-error"],["for","phone"],[1,"phone"],[1,"phone-img"],[1,"sign-select"],[3,"ngClass"],["formControlName","phoneCode"],[3,"value",4,"ngFor","ngForOf"],["type","number","name","phone","formControlName","phone"],["for","email"],[1,"email"],[1,"email-img"],["type","text","name","email","formControlName","email"],["for","password"],[1,"password"],[1,"password-img"],["type","password","name","password","formControlName","password"],["for","confirmPass"],["type","password","name","confirmPass","formControlName","confirmPass",3,"ngClass"],[1,"sign-form__sign-form-btn"],["type","submit",1,"btn-default",3,"disabled"],["class","error-msg",4,"ngIf"],[3,"value"],[3,"src"],[1,"error-msg"]],template:function(e,n){1&e&&(l.Qb(0,"div",0),l.Qb(1,"form",1),l.Xb("ngSubmit",(function(){return n.onSubmit(n.signupForm)})),l.qc(2,d,1,0,"app-loading-spinner",2),l.Qb(3,"div",3),l.Qb(4,"h2"),l.rc(5,"Sign up"),l.Pb(),l.Pb(),l.Mb(6,"hr",4),l.Qb(7,"div",5),l.Qb(8,"label",6),l.rc(9,"Name"),l.Pb(),l.Qb(10,"div",7),l.Mb(11,"div",8),l.Mb(12,"input",9),l.Pb(),l.Qb(13,"ul",10),l.qc(14,f,2,0,"li",2),l.qc(15,h,2,0,"li",2),l.qc(16,P,2,0,"li",2),l.Pb(),l.Pb(),l.Qb(17,"div",5),l.Qb(18,"label",11),l.rc(19,"Phone Number"),l.Pb(),l.Qb(20,"div",12),l.Mb(21,"div",13),l.Qb(22,"div",14),l.Qb(23,"mat-form-field",15),l.Qb(24,"mat-select",16),l.qc(25,v,3,3,"mat-option",17),l.Pb(),l.Pb(),l.Pb(),l.Mb(26,"input",18),l.Pb(),l.Qb(27,"ul",10),l.qc(28,w,2,0,"li",2),l.Pb(),l.Pb(),l.Qb(29,"div",5),l.Qb(30,"label",19),l.rc(31,"Email"),l.Pb(),l.Qb(32,"div",20),l.Mb(33,"div",21),l.Mb(34,"input",22),l.Pb(),l.Qb(35,"ul",10),l.qc(36,Q,2,0,"li",2),l.qc(37,F,2,0,"li",2),l.Pb(),l.Pb(),l.Qb(38,"div",5),l.Qb(39,"label",23),l.rc(40,"Password"),l.Pb(),l.Qb(41,"div",24),l.Mb(42,"div",25),l.Mb(43,"input",26),l.Pb(),l.Qb(44,"ul",10),l.qc(45,y,2,0,"li",2),l.qc(46,C,2,0,"li",2),l.qc(47,M,2,0,"li",2),l.Pb(),l.Pb(),l.Qb(48,"div",5),l.Qb(49,"label",27),l.rc(50,"Confirm Password"),l.Pb(),l.Qb(51,"div",24),l.Mb(52,"div",25),l.Mb(53,"input",28),l.Pb(),l.Qb(54,"ul",10),l.qc(55,A,2,0,"li",2),l.Pb(),l.Pb(),l.Qb(56,"div",29),l.Qb(57,"button",30),l.rc(58,"Sign up"),l.Pb(),l.qc(59,I,2,1,"p",31),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.Ab(1),l.fc("formGroup",n.signupForm),l.Ab(1),l.fc("ngIf",n.isLoading),l.Ab(12),l.fc("ngIf",!n.signupForm.get("name").valid&&!n.signupForm.get("name").hasError("maxlength")&&!n.signupForm.get("name").hasError("minlength")&&n.signupForm.get("name").touched),l.Ab(1),l.fc("ngIf",n.signupForm.get("name").hasError("maxlength")&&n.signupForm.get("name").touched),l.Ab(1),l.fc("ngIf",n.signupForm.get("name").hasError("minlength")&&n.signupForm.get("name").touched),l.Ab(7),l.fc("ngClass",l.hc(17,S,!n.signupForm.get("phone").valid&&n.signupForm.get("phone").touched)),l.Ab(2),l.fc("ngForOf",n.phoneCodes),l.Ab(3),l.fc("ngIf",!n.signupForm.get("phone").valid&&n.signupForm.get("phone").touched),l.Ab(8),l.fc("ngIf",!n.signupForm.get("email").valid&&!n.signupForm.get("email").hasError("email")&&n.signupForm.get("email").touched),l.Ab(1),l.fc("ngIf",n.signupForm.get("email").hasError("email")&&n.signupForm.get("email").touched),l.Ab(8),l.fc("ngIf",!n.signupForm.get("password").valid&&!n.signupForm.get("password").hasError("maxlength")&&!n.signupForm.get("password").hasError("minlength")&&n.signupForm.get("password").touched),l.Ab(1),l.fc("ngIf",n.signupForm.get("password").hasError("maxlength")&&n.signupForm.get("password").touched),l.Ab(1),l.fc("ngIf",n.signupForm.get("password").hasError("minlength")&&n.signupForm.get("password").touched),l.Ab(6),l.fc("ngClass",l.hc(19,S,!n.signupForm.get("confirmPass").valid&&n.signupForm.get("confirmPass").dirty)),l.Ab(2),l.fc("ngIf",!n.signupForm.get("confirmPass").valid&&n.signupForm.get("confirmPass").dirty),l.Ab(2),l.fc("disabled",!n.signupForm.valid),l.Ab(2),l.fc("ngIf",n.errorMsgOnSubmit))},directives:[t.q,t.l,t.g,s.l,t.b,t.k,t.e,c.b,s.j,u.a,s.k,t.n,g.a,p.f],encapsulation:2}),q),O=i("BpHE"),k=i("PCNd"),N=((L=function n(){e(this,n)}).\u0275mod=l.Jb({type:L}),L.\u0275inj=l.Ib({factory:function(e){return new(e||L)},imports:[[s.c,t.o,k.a,u.b,a.e.forChild([{path:"",component:E,canActivate:[O.a]}])]]}),L)}}])}();