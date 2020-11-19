!function(){function r(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}function c(r,c){for(var i=0;i<c.length;i++){var n=c[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function i(r,i,n){return i&&c(r.prototype,i),n&&c(r,n),r}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WLUK:function(c,n,e){"use strict";e.r(n),e.d(n,"ProductsModule",(function(){return T}));var t,a=e("ofXK"),s=e("tyNb"),o=e("fXoL"),u=e("T/S4"),b=e("rL3l"),g=e("1XCa"),f=e("XupT"),d=((t=function(){function c(i,n,e){r(this,c),this.router=i,this.firestore=n,this.subjectsService=e,this.carLinks=[]}return i(c,[{key:"ngOnInit",value:function(){var r=this;this.isLoadingSub=this.subjectsService.isLoadingSubject.subscribe((function(c){r.isLoading=c})),this.getCarLinksErrorMsgSub=this.subjectsService.getCarLinksErrorMsgSubject.subscribe((function(c){r.getCarLinksErrorMsg=c})),this.firestore.getProductLinks().subscribe((function(c){r.carLinks=c.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.subjectsService.loaded(),r.subjectsService.clearGetProductLinksError()}),(function(c){r.subjectsService.loaded(),r.subjectsService.onGetProductLinksError(c)}));var c=JSON.parse(localStorage.getItem("products-LastVisitedLink"));c&&this.router.navigate([c])}},{key:"ngOnDestroy",value:function(){this.isLoadingSub.unsubscribe(),this.getCarLinksErrorMsgSub.unsubscribe()}}]),c}()).\u0275fac=function(r){return new(r||t)(o.Lb(s.b),o.Lb(u.a),o.Lb(b.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-products"]],decls:3,vars:2,consts:[[1,"container"],[3,"carLinks","currentLink"]],template:function(r,c){1&r&&(o.Rb(0,"div",0),o.Mb(1,"app-categories-info"),o.Mb(2,"app-categories-router",1),o.Qb()),2&r&&(o.Ab(2),o.gc("carLinks",c.carLinks)("currentLink","products"))},directives:[g.a,f.a],encapsulation:2}),t),m=e("2CTM"),p=e("zy28"),l=function(r){return{"active-image":r}};function h(r,c){if(1&r){var i=o.Sb();o.Rb(0,"img",7),o.Yb("click",(function(){o.oc(i);var r=c.$implicit,n=c.index;return o.ac().changeImg(r,n)})),o.Qb()}if(2&r){var n=c.$implicit,e=c.index,t=o.ac();o.gc("src",n,o.pc)("ngClass",o.jc(2,l,t.currentImgIndex==e))}}var v,I=((v=function(){function c(i){r(this,c),this.subjectService=i,this.currentImgIndex=0}return i(c,[{key:"ngOnInit",value:function(){var r=this;this.carShowImagesSub=this.subjectService.carShowImagesSubject.subscribe((function(c){r.carShowImages=c})),this.carIdSub=this.subjectService.carIdSubject.subscribe((function(c){r.carId=c})),this.currentImgUrl=this.carImgs[0]}},{key:"ngOnDestroy",value:function(){this.carShowImagesSub.unsubscribe(),this.carIdSub.unsubscribe()}},{key:"onHideCarImages",value:function(){this.subjectService.onHideCarImages()}},{key:"changeImg",value:function(r,c){this.currentImgUrl=r,this.currentImgIndex=c}}]),c}()).\u0275fac=function(r){return new(r||v)(o.Lb(b.a))},v.\u0275cmp=o.Fb({type:v,selectors:[["app-car-images"]],inputs:{carImgs:"carImgs"},decls:8,vars:2,consts:[[1,"car-images-container"],[1,"car-images"],[1,"car-images__current-image"],[3,"src"],[1,"car-images__images"],[3,"src","ngClass","click",4,"ngFor","ngForOf"],[1,"car-images__close-btn",3,"click"],[3,"src","ngClass","click"]],template:function(r,c){1&r&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Rb(2,"div",2),o.Mb(3,"img",3),o.Qb(),o.Rb(4,"div",4),o.uc(5,h,1,4,"img",5),o.Qb(),o.Rb(6,"div",6),o.Yb("click",(function(){return c.onHideCarImages()})),o.wc(7,"X"),o.Qb(),o.Qb(),o.Qb()),2&r&&(o.Ab(3),o.gc("src",c.currentImgUrl,o.pc),o.Ab(2),o.gc("ngForOf",c.carImgs))},directives:[a.k,a.j],encapsulation:2}),v);function S(r,c){if(1&r&&o.Mb(0,"app-car-images",9),2&r){var i=o.ac();o.gc("carImgs",i.car.carImgs)}}var L,k=((L=function(){function c(i){r(this,c),this.subjectService=i}return i(c,[{key:"ngOnInit",value:function(){var r=this;this.carShowImagesSub=this.subjectService.carShowImagesSubject.subscribe((function(c){r.carShowImages=c})),this.carIdSub=this.subjectService.carIdSubject.subscribe((function(c){r.carId=c}))}},{key:"ngOnDestroy",value:function(){this.carShowImagesSub.unsubscribe(),this.carIdSub.unsubscribe()}},{key:"onShowCarImages",value:function(r){this.subjectService.onShowCarImages(r)}}]),c}()).\u0275fac=function(r){return new(r||L)(o.Lb(b.a))},L.\u0275cmp=o.Fb({type:L,selectors:[["app-car-item"]],inputs:{car:"car"},decls:16,vars:4,consts:[[1,"car-item",3,"mouseover","mouseout"],[1,"car-item__img",3,"src"],[1,"car-item__info"],[1,"car-item__hr"],[1,"car-item__prise"],[1,"add-to-cart"],[1,"car-item__images"],[1,"btn-default","narrow-btn",3,"click"],[3,"carImgs",4,"ngIf"],[3,"carImgs"]],template:function(r,c){1&r&&(o.Rb(0,"div",0),o.Yb("mouseover",(function(){return c.carCurrentImage=c.car.carHoverImg}))("mouseout",(function(){return c.carCurrentImage=c.car.carImg})),o.Mb(1,"img",1),o.Rb(2,"p",2),o.wc(3),o.Qb(),o.Mb(4,"hr",3),o.Rb(5,"div",4),o.Rb(6,"div"),o.Rb(7,"p"),o.wc(8),o.Qb(),o.Qb(),o.Rb(9,"div",5),o.Rb(10,"p"),o.wc(11,"Add to Cart"),o.Qb(),o.Qb(),o.Qb(),o.Rb(12,"div",6),o.Rb(13,"button",7),o.Yb("click",(function(){return c.onShowCarImages(c.car.id)})),o.wc(14,"View Images"),o.Qb(),o.uc(15,S,1,1,"app-car-images",8),o.Qb(),o.Qb()),2&r&&(o.Ab(1),o.gc("src",c.carCurrentImage||c.car.carImg,o.pc),o.Ab(2),o.xc(c.car.carInfo),o.Ab(5),o.yc(" $ ",c.car.carPrice,""),o.Ab(7),o.gc("ngIf",c.carShowImages&&c.carId==c.car.id))},directives:[a.l,I],encapsulation:2}),L);function w(r,c){1&r&&(o.Rb(0,"div"),o.Mb(1,"app-loading-spinner"),o.Qb())}function y(r,c){1&r&&o.Mb(0,"app-car-item",6),2&r&&o.gc("car",c.$implicit)}function j(r,c){if(1&r&&(o.Rb(0,"div",4),o.uc(1,y,1,1,"app-car-item",5),o.Qb()),2&r){var i=o.ac();o.Ab(1),o.gc("ngForOf",i.lamborghiniCars)}}function C(r,c){if(1&r&&(o.Rb(0,"p",7),o.wc(1),o.Qb()),2&r){var i=o.ac();o.Ab(1),o.xc(i.errorMsg)}}var M,Q=((M=function(){function c(i){r(this,c),this.firestore=i,this.isLoading=!0,this.errorMsg=null}return i(c,[{key:"ngOnInit",value:function(){var r=this;this.firestore.getLamborghiniCars().subscribe((function(c){r.lamborghiniCars=c.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.isLoading=!1,r.errorMsg=null}),(function(c){r.isLoading=!1,r.errorMsg=c.message}))}}]),c}()).\u0275fac=function(r){return new(r||M)(o.Lb(u.a))},M.\u0275cmp=o.Fb({type:M,selectors:[["app-lamborghini"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(r,c){1&r&&(o.Rb(0,"div",0),o.uc(1,w,2,0,"div",1),o.uc(2,j,2,1,"div",2),o.uc(3,C,2,1,"p",3),o.Qb()),2&r&&(o.Ab(1),o.gc("ngIf",c.isLoading),o.Ab(1),o.gc("ngIf",!c.isLoading),o.Ab(1),o.gc("ngIf",c.errorMsg))},directives:[a.l,p.a,a.k,k],encapsulation:2}),M);function R(r,c){1&r&&(o.Rb(0,"div"),o.Mb(1,"app-loading-spinner"),o.Qb())}function A(r,c){1&r&&o.Mb(0,"app-car-item",6),2&r&&o.gc("car",c.$implicit)}function O(r,c){if(1&r&&(o.Rb(0,"div",4),o.uc(1,A,1,1,"app-car-item",5),o.Qb()),2&r){var i=o.ac();o.Ab(1),o.gc("ngForOf",i.porshceCars)}}function _(r,c){if(1&r&&(o.Rb(0,"p",7),o.wc(1),o.Qb()),2&r){var i=o.ac();o.Ab(1),o.xc(i.errorMsg)}}var F,x,P=((F=function(){function c(i){r(this,c),this.firestore=i,this.isLoading=!0,this.errorMsg=null}return i(c,[{key:"ngOnInit",value:function(){var r=this;this.firestore.getPorscheCars().subscribe((function(c){r.porshceCars=c.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.isLoading=!1,r.errorMsg=null}),(function(c){r.isLoading=!1,r.errorMsg=c.message}))}}]),c}()).\u0275fac=function(r){return new(r||F)(o.Lb(u.a))},F.\u0275cmp=o.Fb({type:F,selectors:[["app-porsche"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(r,c){1&r&&(o.Rb(0,"div",0),o.uc(1,R,2,0,"div",1),o.uc(2,O,2,1,"div",2),o.uc(3,_,2,1,"p",3),o.Qb()),2&r&&(o.Ab(1),o.gc("ngIf",c.isLoading),o.Ab(1),o.gc("ngIf",!c.isLoading),o.Ab(1),o.gc("ngIf",c.errorMsg))},directives:[a.l,p.a,a.k,k],encapsulation:2}),F),E=e("PCNd"),T=((x=function c(){r(this,c)}).\u0275mod=o.Jb({type:x}),x.\u0275inj=o.Ib({factory:function(r){return new(r||x)},imports:[[a.c,E.a,s.e.forChild([{path:"",component:d,canActivate:[m.a],children:[{path:"lamborghini",component:Q},{path:"porsche",component:P},{path:"**",redirectTo:"lamborghini"}]}])]]}),x)}}])}();