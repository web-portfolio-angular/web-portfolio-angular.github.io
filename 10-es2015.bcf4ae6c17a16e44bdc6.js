(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WLUK:function(c,r,i){"use strict";i.r(r),i.d(r,"ProductsModule",(function(){return _}));var t=i("ofXK"),e=i("tyNb"),s=i("fXoL");const a=function(){return["lamborghini"]},n=function(){return["porsche"]};let o=(()=>{class c{constructor(c){this.router=c}ngOnInit(){const c=JSON.parse(localStorage.getItem("productsLink"));this.router.url.includes("/products/")?(this.router.navigate([this.router.url]),localStorage.setItem("productsLink",JSON.stringify(this.router.url))):c?this.router.navigate([c]):(this.router.navigate([this.router.url]),localStorage.setItem("productsLink",JSON.stringify(this.router.url)))}saveToLocalStore(c){localStorage.setItem("productsLink",JSON.stringify("/products/"+c))}}return c.\u0275fac=function(r){return new(r||c)(s.Lb(e.b))},c.\u0275cmp=s.Fb({type:c,selectors:[["app-products"]],decls:81,vars:4,consts:[[1,"container"],[1,"categories-info"],[1,"categories-info__text"],[1,"categories-info__cars"],["src","../../assets/img/products/top-1.jpg"],[1,"top-cars-hover"],["src","../../assets/img/products/top-2.jpg"],["src","../../assets/img/products/top-3.jpg"],["src","../../assets/img/products/top-4.jpg"],[1,"categories"],[1,"categories__content"],["routerLinkActive","categories-active",3,"routerLink","click"],[1,"call-us"],["href","tel:+359123456789"],[1,"categories__router"],[1,"call-us-mob"]],template:function(c,r){1&c&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"h2"),s.uc(4,"EXAMPLE TITLE TEXT"),s.Pb(),s.Qb(5,"p"),s.uc(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam numquam molestiae rerum asperiores, recusandae inventore, cupiditate accusantium nisi at aspernatur perspiciatis odio nihil! Molestiae, assumenda? Aliquid delectus culpa dolorem? "),s.Pb(),s.Pb(),s.Qb(7,"div",3),s.Qb(8,"div"),s.Mb(9,"img",4),s.Qb(10,"div",5),s.uc(11," BMW "),s.Pb(),s.Pb(),s.Qb(12,"div"),s.Mb(13,"img",6),s.Qb(14,"div",5),s.uc(15," Citroen "),s.Pb(),s.Pb(),s.Qb(16,"div"),s.Mb(17,"img",7),s.Qb(18,"div",5),s.uc(19," Zeno "),s.Pb(),s.Pb(),s.Qb(20,"div"),s.Mb(21,"img",8),s.Qb(22,"div",5),s.uc(23," Honda "),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(24,"div",9),s.Qb(25,"div",10),s.Qb(26,"p"),s.uc(27,"Categories"),s.Pb(),s.Qb(28,"ul"),s.Qb(29,"li",11),s.Xb("click",(function(){return r.saveToLocalStore("lamborghini")})),s.uc(30,"Lamborghini"),s.Pb(),s.Qb(31,"li",11),s.Xb("click",(function(){return r.saveToLocalStore("porsche")})),s.uc(32,"Porsche"),s.Pb(),s.Qb(33,"li"),s.uc(34,"Example 3"),s.Pb(),s.Qb(35,"li"),s.uc(36,"Example 4"),s.Pb(),s.Qb(37,"li"),s.uc(38,"Example 5"),s.Pb(),s.Qb(39,"li"),s.uc(40,"Example 6"),s.Pb(),s.Qb(41,"li"),s.uc(42,"Example 7"),s.Pb(),s.Qb(43,"li"),s.uc(44,"Example 8"),s.Pb(),s.Qb(45,"li"),s.uc(46,"Example 9"),s.Pb(),s.Qb(47,"li"),s.uc(48,"Example 10"),s.Pb(),s.Qb(49,"li"),s.uc(50,"Example 11"),s.Pb(),s.Qb(51,"li"),s.uc(52,"Example 12"),s.Pb(),s.Qb(53,"li"),s.uc(54,"Example 13"),s.Pb(),s.Qb(55,"li"),s.uc(56,"Example 14"),s.Pb(),s.Qb(57,"li"),s.uc(58,"Example 15"),s.Pb(),s.Qb(59,"li"),s.uc(60,"Example 16"),s.Pb(),s.Qb(61,"li"),s.uc(62,"Example 17"),s.Pb(),s.Qb(63,"li"),s.uc(64,"Example 18"),s.Pb(),s.Qb(65,"li"),s.uc(66,"Example 19"),s.Pb(),s.Qb(67,"li"),s.uc(68,"Example 20"),s.Pb(),s.Pb(),s.Qb(69,"div",12),s.Qb(70,"h3"),s.uc(71,"CALL US"),s.Pb(),s.Qb(72,"a",13),s.uc(73,"+359 123 456 789"),s.Pb(),s.Pb(),s.Pb(),s.Qb(74,"div",14),s.Mb(75,"router-outlet"),s.Pb(),s.Pb(),s.Qb(76,"div",15),s.Qb(77,"h3"),s.uc(78,"CALL US"),s.Pb(),s.Qb(79,"a",13),s.uc(80,"+359 123 456 789"),s.Pb(),s.Pb(),s.Pb()),2&c&&(s.Ab(29),s.fc("routerLink",s.hc(2,a)),s.Ab(2),s.fc("routerLink",s.hc(3,n)))},directives:[e.d,e.c,e.f],encapsulation:2}),c})();var b=i("2CTM"),u=i("T/S4"),g=i("zy28"),l=i("rL3l");const m=function(c){return{"active-image":c}};function p(c,r){if(1&c){const c=s.Rb();s.Qb(0,"img",7),s.Xb("click",(function(){s.nc(c);const i=r.$implicit,t=r.index;return s.Zb().changeImg(i,t)})),s.Pb()}if(2&c){const c=r.$implicit,i=r.index,t=s.Zb();s.fc("src",c,s.oc)("ngClass",s.ic(2,m,t.currentImgIndex==i))}}let d=(()=>{class c{constructor(c){this.subjectService=c,this.currentImgIndex=0}ngOnInit(){this.carShowImagesSub=this.subjectService.carShowImagesSubject.subscribe(c=>{this.carShowImages=c}),this.carIdSub=this.subjectService.carIdSubject.subscribe(c=>{this.carId=c}),this.currentImgUrl=this.carImgs[0]}ngOnDestroy(){this.carShowImagesSub.unsubscribe(),this.carIdSub.unsubscribe()}onHideCarImages(){this.subjectService.onHideCarImages()}changeImg(c,r){this.currentImgUrl=c,this.currentImgIndex=r}}return c.\u0275fac=function(r){return new(r||c)(s.Lb(l.a))},c.\u0275cmp=s.Fb({type:c,selectors:[["app-car-images"]],inputs:{carImgs:"carImgs"},decls:8,vars:2,consts:[[1,"car-images-container"],[1,"car-images"],[1,"car-images__current-image"],[3,"src"],[1,"car-images__images"],[3,"src","ngClass","click",4,"ngFor","ngForOf"],[1,"car-images__close-btn",3,"click"],[3,"src","ngClass","click"]],template:function(c,r){1&c&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Mb(3,"img",3),s.Pb(),s.Qb(4,"div",4),s.tc(5,p,1,4,"img",5),s.Pb(),s.Qb(6,"div",6),s.Xb("click",(function(){return r.onHideCarImages()})),s.uc(7,"X"),s.Pb(),s.Pb(),s.Pb()),2&c&&(s.Ab(3),s.fc("src",r.currentImgUrl,s.oc),s.Ab(2),s.fc("ngForOf",r.carImgs))},directives:[t.k,t.j],encapsulation:2}),c})();function f(c,r){if(1&c&&s.Mb(0,"app-car-images",9),2&c){const c=s.Zb();s.fc("carImgs",c.car.carImgs)}}let h=(()=>{class c{constructor(c){this.subjectService=c}ngOnInit(){this.carShowImagesSub=this.subjectService.carShowImagesSubject.subscribe(c=>{this.carShowImages=c}),this.carIdSub=this.subjectService.carIdSubject.subscribe(c=>{this.carId=c})}ngOnDestroy(){this.carShowImagesSub.unsubscribe(),this.carIdSub.unsubscribe()}onShowCarImages(c){this.subjectService.onShowCarImages(c)}}return c.\u0275fac=function(r){return new(r||c)(s.Lb(l.a))},c.\u0275cmp=s.Fb({type:c,selectors:[["app-car-item"]],inputs:{car:"car"},decls:16,vars:4,consts:[[1,"car-item",3,"mouseover","mouseout"],[1,"car-item__img",3,"src"],[1,"car-item__info"],[1,"car-item__hr"],[1,"car-item__prise"],[1,"add-to-cart"],[1,"car-item__images"],[1,"btn-default","narrow-btn",3,"click"],[3,"carImgs",4,"ngIf"],[3,"carImgs"]],template:function(c,r){1&c&&(s.Qb(0,"div",0),s.Xb("mouseover",(function(){return r.carCurrentImage=r.car.carHoverImg}))("mouseout",(function(){return r.carCurrentImage=r.car.carImg})),s.Mb(1,"img",1),s.Qb(2,"p",2),s.uc(3),s.Pb(),s.Mb(4,"hr",3),s.Qb(5,"div",4),s.Qb(6,"div"),s.Qb(7,"p"),s.uc(8),s.Pb(),s.Pb(),s.Qb(9,"div",5),s.Qb(10,"p"),s.uc(11,"Add to Cart"),s.Pb(),s.Pb(),s.Pb(),s.Qb(12,"div",6),s.Qb(13,"button",7),s.Xb("click",(function(){return r.onShowCarImages(r.car.id)})),s.uc(14,"View Images"),s.Pb(),s.tc(15,f,1,1,"app-car-images",8),s.Pb(),s.Pb()),2&c&&(s.Ab(1),s.fc("src",r.carCurrentImage||r.car.carImg,s.oc),s.Ab(2),s.vc(r.car.carInfo),s.Ab(5),s.wc(" $ ",r.car.carPrice,""),s.Ab(7),s.fc("ngIf",r.carShowImages&&r.carId==r.car.id))},directives:[t.l,d],encapsulation:2}),c})();function v(c,r){1&c&&(s.Qb(0,"div"),s.Mb(1,"app-loading-spinner"),s.Pb())}function I(c,r){1&c&&s.Mb(0,"app-car-item",6),2&c&&s.fc("car",r.$implicit)}function P(c,r){if(1&c&&(s.Qb(0,"div",4),s.tc(1,I,1,1,"app-car-item",5),s.Pb()),2&c){const c=s.Zb();s.Ab(1),s.fc("ngForOf",c.lamborghiniCars)}}function Q(c,r){if(1&c&&(s.Qb(0,"p",7),s.uc(1),s.Pb()),2&c){const c=s.Zb();s.Ab(1),s.vc(c.errorMsg)}}let S=(()=>{class c{constructor(c){this.firestore=c,this.isLoading=!1,this.errorMsg=null}ngOnInit(){this.isLoading=!0,this.firestore.getLamborghiniCars().subscribe(c=>{this.lamborghiniCars=c.map(c=>Object.assign({id:c.payload.doc.id},c.payload.doc.data())),this.isLoading=!1,this.errorMsg=null},c=>{this.isLoading=!1,this.errorMsg=c})}}return c.\u0275fac=function(r){return new(r||c)(s.Lb(u.a))},c.\u0275cmp=s.Fb({type:c,selectors:[["app-lamborghini"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(c,r){1&c&&(s.Qb(0,"div",0),s.tc(1,v,2,0,"div",1),s.tc(2,P,2,1,"div",2),s.tc(3,Q,2,1,"p",3),s.Pb()),2&c&&(s.Ab(1),s.fc("ngIf",r.isLoading),s.Ab(1),s.fc("ngIf",!r.isLoading),s.Ab(1),s.fc("ngIf",r.errorMsg))},directives:[t.l,g.a,t.k,h],encapsulation:2}),c})();function L(c,r){1&c&&(s.Qb(0,"div"),s.Mb(1,"app-loading-spinner"),s.Pb())}function M(c,r){1&c&&s.Mb(0,"app-car-item",6),2&c&&s.fc("car",r.$implicit)}function w(c,r){if(1&c&&(s.Qb(0,"div",4),s.tc(1,M,1,1,"app-car-item",5),s.Pb()),2&c){const c=s.Zb();s.Ab(1),s.fc("ngForOf",c.porshceCars)}}function C(c,r){if(1&c&&(s.Qb(0,"p",7),s.uc(1),s.Pb()),2&c){const c=s.Zb();s.Ab(1),s.vc(c.errorMsg)}}let A=(()=>{class c{constructor(c){this.firestore=c,this.isLoading=!1,this.errorMsg=null}ngOnInit(){this.isLoading=!0,this.firestore.getPorscheCars().subscribe(c=>{this.porshceCars=c.map(c=>Object.assign({id:c.payload.doc.id},c.payload.doc.data())),this.isLoading=!1,this.errorMsg=null},c=>{this.isLoading=!1,this.errorMsg=c})}}return c.\u0275fac=function(r){return new(r||c)(s.Lb(u.a))},c.\u0275cmp=s.Fb({type:c,selectors:[["app-porsche"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(c,r){1&c&&(s.Qb(0,"div",0),s.tc(1,L,2,0,"div",1),s.tc(2,w,2,1,"div",2),s.tc(3,C,2,1,"p",3),s.Pb()),2&c&&(s.Ab(1),s.fc("ngIf",r.isLoading),s.Ab(1),s.fc("ngIf",!r.isLoading),s.Ab(1),s.fc("ngIf",r.errorMsg))},directives:[t.l,g.a,t.k,h],encapsulation:2}),c})();var x=i("PCNd");let _=(()=>{class c{}return c.\u0275mod=s.Jb({type:c}),c.\u0275inj=s.Ib({factory:function(r){return new(r||c)},imports:[[t.c,x.a,e.e.forChild([{path:"",component:o,canActivate:[b.a],children:[{path:"lamborghini",component:S},{path:"porsche",component:A},{path:"**",redirectTo:""}]}])]]}),c})()}}]);