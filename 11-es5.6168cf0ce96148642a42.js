!function(){function r(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function e(r,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function a(r,a,i){return a&&e(r.prototype,a),i&&e(r,i),r}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{F15C:function(e,i,n){"use strict";n.r(i),n.d(i,"SellBuyCarModule",(function(){return Fr}));var c,t=n("ofXK"),o=n("tyNb"),s=n("3Pt+"),u=n("d3UM"),l=n("fXoL"),g=n("1XCa"),b=function(){return["buy"]},d=function(){return["sell"]},m=((c=function(){function e(a){r(this,e),this.router=a}return a(e,[{key:"ngOnInit",value:function(){var r=JSON.parse(localStorage.getItem("sell-buy-car-LastVisitedLink"));r&&this.router.navigate([r])}},{key:"saveLastVisitedLinkToLocalStore",value:function(r){localStorage.setItem("sell-buy-car-LastVisitedLink",JSON.stringify("/sell-buy-car/"+r))}}]),e}()).\u0275fac=function(r){return new(r||c)(l.Lb(o.b))},c.\u0275cmp=l.Fb({type:c,selectors:[["app-sell-buy-car"]],decls:9,vars:4,consts:[[1,"container"],[1,"sell-buy-car"],[1,"sell-buy-car__router-links"],["routerLinkActive","categories-active",3,"routerLink","click"]],template:function(r,e){1&r&&(l.Rb(0,"div",0),l.Mb(1,"app-categories-info"),l.Rb(2,"div",1),l.Rb(3,"ul",2),l.Rb(4,"li",3),l.Yb("click",(function(){return e.saveLastVisitedLinkToLocalStore("buy")})),l.wc(5,"Buy Second Hand Car"),l.Qb(),l.Rb(6,"li",3),l.Yb("click",(function(){return e.saveLastVisitedLinkToLocalStore("sell")})),l.wc(7," Sell Your Car"),l.Qb(),l.Qb(),l.Mb(8,"router-outlet"),l.Qb(),l.Qb()),2&r&&(l.Ab(4),l.gc("routerLink",l.ic(2,b)),l.Ab(2),l.gc("routerLink",l.ic(3,d)))},directives:[g.a,o.d,o.c,o.f],encapsulation:2}),c),f=n("2CTM"),p=n("T/S4"),h=n("zy28"),I=n("rL3l"),v=n("V86y"),C=n("Vaw3"),L=n("B02C"),R=n("fk3A"),y=n("odcQ");function w(r,e){1&r&&l.Mb(0,"app-loading-spinner")}function F(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div"),l.Rb(1,"button",6),l.Yb("click",(function(){return l.oc(a),l.ac().onEdit()})),l.wc(2,"Edit"),l.Qb(),l.Qb()}}function A(r,e){if(1&r&&l.Mb(0,"app-car-images",10),2&r){var a=l.ac(2);l.gc("carImgs",a.car.carImages)}}function S(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div",7),l.Rb(1,"button",8),l.Yb("click",(function(){l.oc(a);var r=l.ac();return r.onShowCarImages(r.car.id)})),l.wc(2,"View Images"),l.Qb(),l.uc(3,A,1,1,"app-car-images",9),l.Qb()}if(2&r){var i=l.ac();l.Ab(3),l.gc("ngIf",i.carShowImages&&i.carId==i.car.id)}}function Q(r,e){1&r&&(l.Rb(0,"p"),l.wc(1,"There are no images uploaded"),l.Qb())}function k(r,e){1&r&&(l.Rb(0,"div"),l.Rb(1,"p"),l.wc(2,"There are no images uploaded"),l.Qb(),l.Qb())}function E(r,e){if(1&r&&(l.Rb(0,"div"),l.Mb(1,"img",21),l.Qb()),2&r){var a=e.$implicit;l.Ab(1),l.gc("src",a,l.pc)}}function M(r,e){if(1&r&&(l.Rb(0,"div"),l.Rb(1,"p"),l.wc(2,"Current Images"),l.Qb(),l.uc(3,E,2,1,"div",20),l.Qb()),2&r){var a=l.ac(2);l.Ab(3),l.gc("ngForOf",a.currentCarImages)}}function U(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div"),l.Mb(1,"img",21),l.Rb(2,"div",22),l.Yb("click",(function(){l.oc(a);var r=e.index;return l.ac(3).removeCarImg(r)})),l.wc(3,"X"),l.Qb(),l.Qb()}if(2&r){var i=e.$implicit;l.Ab(1),l.gc("src",i,l.pc)}}function N(r,e){if(1&r&&(l.Rb(0,"div"),l.Rb(1,"p"),l.wc(2,"New Images"),l.Qb(),l.Rb(3,"div"),l.uc(4,U,4,1,"div",20),l.Qb(),l.Qb()),2&r){var a=l.ac(2);l.Ab(4),l.gc("ngForOf",a.carImgLocalPaths)}}function D(r,e){1&r&&(l.Rb(0,"p"),l.wc(1,"Select Images"),l.Qb())}function O(r,e){1&r&&(l.Rb(0,"p"),l.wc(1,"Select More Images"),l.Qb())}function T(r,e){if(1&r&&(l.Rb(0,"p",23),l.wc(1),l.Qb()),2&r){var a=l.ac(2);l.Ab(1),l.xc(a.uploadCarImagesToFirestoreError)}}function P(r,e){if(1&r&&(l.Rb(0,"p",23),l.wc(1),l.Qb()),2&r){var a=l.ac(2);l.Ab(1),l.xc(a.updateSecondHandCarError)}}function x(r,e){if(1&r&&(l.Rb(0,"p",23),l.wc(1),l.Qb()),2&r){var a=l.ac(2);l.Ab(1),l.xc(a.setcarImgURLsError)}}function j(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div",11),l.Rb(1,"form",12),l.Yb("ngSubmit",(function(){l.oc(a);var r=l.ac();return r.submitCarDetailChanges(r.changeCarDetailsForm)})),l.Rb(2,"div"),l.Mb(3,"textarea",13),l.Qb(),l.Rb(4,"div"),l.Mb(5,"input",14),l.Qb(),l.Rb(6,"div"),l.Rb(7,"div"),l.uc(8,k,3,0,"div",1),l.uc(9,M,4,1,"div",1),l.uc(10,N,5,1,"div",1),l.Qb(),l.Rb(11,"div"),l.Rb(12,"input",15,16),l.Yb("change",(function(r){return l.oc(a),l.ac().onChooseCarImgs(r)})),l.Qb(),l.Rb(14,"button",17),l.Yb("click",(function(){return l.oc(a),l.mc(13).click()})),l.uc(15,D,2,0,"p",1),l.uc(16,O,2,0,"p",1),l.Qb(),l.Qb(),l.Qb(),l.Rb(17,"div"),l.Rb(18,"button",18),l.wc(19,"Apply Changes"),l.Qb(),l.Rb(20,"button",6),l.Yb("click",(function(){return l.oc(a),l.ac().onCancel()})),l.wc(21,"Cancel"),l.Qb(),l.Qb(),l.Rb(22,"div"),l.uc(23,T,2,1,"p",19),l.uc(24,P,2,1,"p",19),l.uc(25,x,2,1,"p",19),l.Qb(),l.Qb(),l.Qb()}if(2&r){var i=l.ac();l.Ab(1),l.gc("formGroup",i.changeCarDetailsForm),l.Ab(7),l.gc("ngIf",!i.car.carImages),l.Ab(1),l.gc("ngIf",i.currentCarImages),l.Ab(1),l.gc("ngIf",i.carImgLocalPaths.length>0),l.Ab(5),l.gc("ngIf",!i.currentCarImages),l.Ab(1),l.gc("ngIf",i.currentCarImages),l.Ab(7),l.gc("ngIf",i.uploadCarImagesToFirestoreError),l.Ab(1),l.gc("ngIf",i.updateSecondHandCarError),l.Ab(1),l.gc("ngIf",i.setcarImgURLsError)}}var Y,V=function(r){return{"background-image":r}},H=((Y=function(){function e(a,i,n,c,t,o){r(this,e),this.subjectService=a,this.formBuilder=i,this.firestore=n,this.additionUserInfoService=c,this.angularFireStorage=t,this.generateIdService=o,this.isInEditMode=!1,this.ownerEmail=null,this.carImgNames=[],this.carImgLocalPaths=[],this.carImgURLs=[],this.currentCarImages=[],this.uploadCarImagesToFirestoreError=null,this.updateSecondHandCarError=null,this.setcarImgURLsError=null,this.isLoading=!1}return a(e,[{key:"ngOnInit",value:function(){var r=this;this.additionUserInfoService.getUserAdditionalData(),this.userAdditionalInfoSub=this.additionUserInfoService.userAdditionalDataSubject.subscribe((function(e){r.userAdditionalData=e,r.ownerEmail=r.userAdditionalData[0].email})),this.carShowImagesSub=this.subjectService.carShowImagesSubject.subscribe((function(e){r.carShowImages=e})),this.carIdSub=this.subjectService.carIdSubject.subscribe((function(e){r.carId=e})),this.changeCarDetailsForm=this.formBuilder.group({description:new s.d(null,s.p.required),price:new s.d(null,s.p.required),carImgs:new s.d(null)}),this.currentCarImages=this.car.carImages}},{key:"ngOnDestroy",value:function(){this.carShowImagesSub.unsubscribe(),this.carIdSub.unsubscribe(),this.userAdditionalInfoSub.unsubscribe()}},{key:"onShowCarImages",value:function(r){this.subjectService.onShowCarImages(r)}},{key:"submitCarDetailChanges",value:function(r){var e=this;if(r.valid){this.isLoading=!0;var a=this.car.id,i=this.car.model;this.onUploadCarImagesToFirestore(a).then((function(){if(e.carImgNames.length>0)for(var n=0;n<e.carImgNames.length;n++)e.firestore.updateSecondHanImagesCar({id:a,img:r.value.carImgs[n],doc:i});e.firestore.updateSecondHandCar({description:r.value.description,price:r.value.price,id:a,doc:i}).then((function(){e.isLoading=!1,e.updateSecondHandCarError=null}),(function(r){e.updateSecondHandCarError=r.message}))}))}}},{key:"onChooseCarImgs",value:function(r){var e=this;if(this.carFiles=r.target.files,this.carFiles.length>0)for(var a=0;a<this.carFiles.length;a++){var i=new FileReader;i.onload=function(r){e.carImgLocalPaths.push(r.target.result)},i.readAsDataURL(r.target.files[a]),this.carImgNames.push(this.carFiles[a].name.substr(0,this.carFiles[a].name.lastIndexOf(".")))}else this.carFiles=null,this.carImgLocalPaths=[],this.carImgNames=[],this.changeCarDetailsForm.controls.carImgs.setValue("")}},{key:"onUploadCarImagesToFirestore",value:function(r){var e=this;return new Promise((function(a){0==e.carImgNames.length&&a();for(var i=0;i<e.carImgNames.length;i++)e.angularFireStorage.upload("/carsForSell/"+e.changeCarDetailsForm.value.model+"/"+e.userAdditionalData[0].email+"/"+r+"//carImages/"+e.carImgNames[i]+"-"+e.generateIdService.generateId(),e.carFiles[i]).then((function(r){r.ref.getDownloadURL().then((function(r){e.carImgURLs.push(r),e.carImgURLs.length==e.carImgNames.length&&(e.changeCarDetailsForm.value.carImgs=e.carImgURLs,e.setcarImgURLsError=null,a())})).catch((function(r){e.setcarImgURLsError=r.message})),e.uploadCarImagesToFirestoreError=null})).catch((function(r){e.uploadCarImagesToFirestoreError=r.message}))}))}},{key:"onEdit",value:function(){this.changeCarDetailsForm.controls.description.setValue(this.car.description),this.changeCarDetailsForm.controls.price.setValue(this.car.price),this.isInEditMode=!0}},{key:"removeCarImg",value:function(r){this.carImgLocalPaths.splice(r,1),this.carImgNames.splice(r,1),0==this.carImgLocalPaths&&0==this.carImgNames&&(this.changeCarDetailsForm.value.carImgs=null)}},{key:"onCancel",value:function(){this.carFiles=null,this.carImgLocalPaths=[],this.carImgNames=[],this.changeCarDetailsForm.controls.carImgs.setValue(""),this.isInEditMode=!1}}]),e}()).\u0275fac=function(r){return new(r||Y)(l.Lb(I.a),l.Lb(s.c),l.Lb(p.a),l.Lb(v.a),l.Lb(C.a),l.Lb(L.a))},Y.\u0275cmp=l.Fb({type:Y,selectors:[["app-buy-car-item"]],inputs:{car:"car"},decls:32,vars:41,consts:[[1,"car-item"],[4,"ngIf"],[1,"car-item__img",3,"src"],[1,"comment-img",3,"ngStyle"],["class","car-item__images",4,"ngIf"],["class","test",4,"ngIf"],["type","button",3,"click"],[1,"car-item__images"],[1,"btn-default","narrow-btn",3,"click"],[3,"carImgs",4,"ngIf"],[3,"carImgs"],[1,"test"],[3,"formGroup","ngSubmit"],["formControlName","description"],["type","number","name","price","formControlName","price"],["formControlName","carImgs","type","file","accept",".png,.jpg,.jpeg,.svg,.heic","multiple","multiple",2,"display","none",3,"change"],["chooseCarImgs",""],["type","button",1,"btn-default","narrow-btn","ng-star-inserted",3,"click"],["type","submit"],["class","error-msg",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src"],[3,"click"],[1,"error-msg"]],template:function(r,e){1&r&&(l.Rb(0,"div",0),l.uc(1,w,1,0,"app-loading-spinner",1),l.Mb(2,"img",2),l.Rb(3,"div"),l.Rb(4,"p"),l.wc(5),l.Qb(),l.Rb(6,"p"),l.wc(7),l.Qb(),l.Rb(8,"p"),l.wc(9),l.Qb(),l.Rb(10,"p"),l.wc(11),l.Qb(),l.Qb(),l.uc(12,F,3,0,"div",1),l.Rb(13,"p"),l.wc(14),l.bc(15,"date"),l.Qb(),l.Rb(16,"div"),l.Mb(17,"div",3),l.bc(18,"async"),l.bc(19,"getUserInfo"),l.Rb(20,"div"),l.wc(21),l.bc(22,"async"),l.bc(23,"getUserInfo"),l.bc(24,"async"),l.bc(25,"getUserInfo"),l.bc(26,"async"),l.bc(27,"getUserInfo"),l.Qb(),l.Qb(),l.Rb(28,"div"),l.uc(29,S,4,1,"div",4),l.uc(30,Q,2,0,"p",1),l.Qb(),l.uc(31,j,26,9,"div",5),l.Qb()),2&r&&(l.Ab(1),l.gc("ngIf",e.isLoading),l.Ab(1),l.gc("src",e.car.carImg,l.pc),l.Ab(3),l.xc(e.car.model),l.Ab(2),l.xc(e.car.year),l.Ab(2),l.xc(e.car.description),l.Ab(2),l.xc(e.car.price),l.Ab(1),l.gc("ngIf",e.ownerEmail==e.car.owner),l.Ab(2),l.xc(l.dc(15,16,e.car.date.toDate(),"dd.MM.yyyy")),l.Ab(3),l.gc("ngStyle",l.jc(39,V,l.cc(18,19,l.dc(19,21,e.car.owner,"userImg")))),l.Ab(4),l.Ac(" ",l.cc(22,24,l.dc(23,26,e.car.owner,"name"))," ",l.cc(24,29,l.dc(25,31,e.car.owner,"phoneCode"))," ",l.cc(26,34,l.dc(27,36,e.car.owner,"phone"))," ",e.car.owner," "),l.Ab(8),l.gc("ngIf",e.car.carImages),l.Ab(1),l.gc("ngIf",!e.car.carImages),l.Ab(1),l.gc("ngIf",e.isInEditMode))},directives:[t.l,t.m,h.a,R.a,s.q,s.l,s.g,s.b,s.k,s.e,s.n,t.k],pipes:[t.e,t.b,y.a],styles:[".test[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 50px;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100px;\n  }"]}),Y);function q(r,e){1&r&&(l.Rb(0,"div"),l.Mb(1,"app-loading-spinner"),l.Qb())}function _(r,e){1&r&&l.Mb(0,"app-buy-car-item",6),2&r&&l.gc("car",e.$implicit)}function B(r,e){if(1&r&&(l.Rb(0,"div",4),l.uc(1,_,1,1,"app-buy-car-item",5),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.gc("ngForOf",a.audiCars)}}function J(r,e){if(1&r&&(l.Rb(0,"p",7),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.errorMsg)}}var $,X=(($=function(){function e(a){r(this,e),this.firestore=a,this.isLoading=!0,this.errorMsg=null}return a(e,[{key:"ngOnInit",value:function(){var r=this;this.firestore.getSecondHandAudi().subscribe((function(e){r.audiCars=e.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.isLoading=!1,r.errorMsg=null}),(function(e){r.isLoading=!1,r.errorMsg=e.message}))}}]),e}()).\u0275fac=function(r){return new(r||$)(l.Lb(p.a))},$.\u0275cmp=l.Fb({type:$,selectors:[["app-audi"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(r,e){1&r&&(l.Rb(0,"div",0),l.uc(1,q,2,0,"div",1),l.uc(2,B,2,1,"div",2),l.uc(3,J,2,1,"p",3),l.Qb()),2&r&&(l.Ab(1),l.gc("ngIf",e.isLoading),l.Ab(1),l.gc("ngIf",!e.isLoading),l.Ab(1),l.gc("ngIf",e.errorMsg))},directives:[t.l,h.a,t.k,H],encapsulation:2}),$);function G(r,e){1&r&&(l.Rb(0,"div"),l.Mb(1,"app-loading-spinner"),l.Qb())}function K(r,e){1&r&&l.Mb(0,"app-buy-car-item",6),2&r&&l.gc("car",e.$implicit)}function W(r,e){if(1&r&&(l.Rb(0,"div",4),l.uc(1,K,1,1,"app-buy-car-item",5),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.gc("ngForOf",a.bmwCars)}}function z(r,e){if(1&r&&(l.Rb(0,"p",7),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.errorMsg)}}var Z,rr=((Z=function(){function e(a){r(this,e),this.firestore=a,this.isLoading=!0,this.errorMsg=null}return a(e,[{key:"ngOnInit",value:function(){var r=this;this.firestore.getSecondHandBMW().subscribe((function(e){r.bmwCars=e.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.isLoading=!1,r.errorMsg=null}),(function(e){r.isLoading=!1,r.errorMsg=e.message}))}}]),e}()).\u0275fac=function(r){return new(r||Z)(l.Lb(p.a))},Z.\u0275cmp=l.Fb({type:Z,selectors:[["app-bmw"]],decls:4,vars:3,consts:[[1,"cars-container"],[4,"ngIf"],["class","cars",4,"ngIf"],["class","error-msg",4,"ngIf"],[1,"cars"],[3,"car",4,"ngFor","ngForOf"],[3,"car"],[1,"error-msg"]],template:function(r,e){1&r&&(l.Rb(0,"div",0),l.uc(1,G,2,0,"div",1),l.uc(2,W,2,1,"div",2),l.uc(3,z,2,1,"p",3),l.Qb()),2&r&&(l.Ab(1),l.gc("ngIf",e.isLoading),l.Ab(1),l.gc("ngIf",!e.isLoading),l.Ab(1),l.gc("ngIf",e.errorMsg))},directives:[t.l,h.a,t.k,H],encapsulation:2}),Z),er=n("Wcq6"),ar=n("kmnG"),ir=n("FKr1");function nr(r,e){1&r&&l.Mb(0,"app-loading-spinner")}function cr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.getCarModelsError)}}function tr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.getCarManufactureYearError)}}function or(r,e){if(1&r&&(l.Rb(0,"mat-option",16),l.wc(1),l.Qb()),2&r){var a=e.$implicit;l.gc("value",a.name),l.Ab(1),l.yc(" ",a.name," ")}}function sr(r,e){if(1&r&&(l.Rb(0,"mat-option",16),l.wc(1),l.Qb()),2&r){var a=e.$implicit;l.gc("value",a.year),l.Ab(1),l.yc(" ",a.year," ")}}function ur(r,e){1&r&&(l.Rb(0,"div"),l.Mb(1,"img",17),l.Qb())}function lr(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div"),l.Mb(1,"img",6),l.Rb(2,"div",19),l.Yb("click",(function(){l.oc(a);var r=e.index;return l.ac(2).removeCarImg(r)})),l.wc(3,"X"),l.Qb(),l.Qb()}if(2&r){var i=e.$implicit;l.Ab(1),l.gc("src",i,l.pc)}}function gr(r,e){if(1&r&&(l.Rb(0,"div"),l.uc(1,lr,4,1,"div",18),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.gc("ngForOf",a.carImgLocalPaths)}}function br(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.sellCarError)}}function dr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.uploadCarImgToFirestoreError)}}function mr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.uploadCarImagesToFirestoreError)}}function fr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.getCarImgURLError)}}function pr(r,e){if(1&r&&(l.Rb(0,"p",15),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.getcarImgURLsError)}}var hr,Ir=((hr=function(){function e(a,i,n,c,t,o){r(this,e),this.formBuilder=a,this.firestore=i,this.additionUserInfoService=n,this.angularFireStorage=c,this.generateIdService=t,this.router=o,this.carDefaultImg="../../../assets/img/cell-car/upload-img.png",this.carImgLocalPath=this.carDefaultImg,this.carImgNames=[],this.carImgLocalPaths=[],this.carImgURLs=[],this.carModels=[],this.carManufactureYears=[],this.getCarModelsError=null,this.getCarManufactureYearError=null,this.sellCarError=null,this.uploadCarImgToFirestoreError=null,this.uploadCarImagesToFirestoreError=null,this.getCarImgURLError=null,this.getcarImgURLsError=null,this.isLoading=!1}return a(e,[{key:"ngOnInit",value:function(){var r=this;this.sellCarForm=this.formBuilder.group({model:new s.d(null,s.p.required),year:new s.d(null,s.p.required),carImg:new s.d(null,s.p.required),description:new s.d(null,s.p.required),price:new s.d(null,s.p.required),carImgs:new s.d(null)}),this.firestore.getSecondHandCarsLink().subscribe((function(e){r.carModels=e.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.getCarModelsError=null}),(function(e){r.getCarModelsError=e.message})),this.firestore.getCarManufactureYear().subscribe((function(e){r.carManufactureYears=e.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.getCarManufactureYearError=null}),(function(e){r.getCarManufactureYearError=e.message})),this.additionUserInfoService.getUserAdditionalData(),this.userAdditionalInfoSub=this.additionUserInfoService.userAdditionalDataSubject.subscribe((function(e){r.userAdditionalData=e}))}},{key:"ngOnDestroy",value:function(){this.userAdditionalInfoSub.unsubscribe()}},{key:"onSubmit",value:function(r){var e=this;if(r.valid){this.isLoading=!0;var a=this.generateIdService.generateId();this.onUploadCarImgToFirestore(a).then((function(){e.onUploadCarImagesToFirestore(a).then((function(){var i=r.value.model,n=r.value.year,c=r.value.carImg,t=r.value.description.trim(),o=r.value.price,s=e.userAdditionalData[0].email,u=er.firestore.Timestamp.now();e.firestore.setSecondHandCar({model:i,year:n,carImg:c,description:t,price:o,owner:s,id:a,date:u,carImages:r.value.carImgs}).then((function(){e.isLoading=!1,e.sellCarForm.reset(),localStorage.setItem("sell-buy-car/buy-LastVisitedLink",JSON.stringify("/sell-buy-car/buy/"+i.toLowerCase())),e.router.navigate(["/sell-buy-car/buy/"+i.toLowerCase()]),e.carImgNames=[],e.carImgLocalPaths=[],e.carImgURLs=[],e.carImgLocalPath=e.carDefaultImg,e.sellCarError=null})).catch((function(r){e.sellCarError=r.message}))}))}))}}},{key:"onChooseCarImg",value:function(r){var e=this;if(this.carFile=r.target.files[0],this.carFile){var a=new FileReader;a.onload=function(r){e.carImgLocalPath=r.target.result},a.readAsDataURL(r.target.files[0]),this.carImgName=this.carFile.name.substr(0,this.carFile.name.lastIndexOf("."))}else this.carImgLocalPath=this.carDefaultImg}},{key:"onUploadCarImgToFirestore",value:function(r){var e=this;return new Promise((function(a){e.angularFireStorage.upload("/carsForSell/"+e.sellCarForm.value.model+"/"+e.userAdditionalData[0].email+"/"+r+"/"+e.carImgName+"-"+e.generateIdService.generateId(),e.carFile).then((function(r){r.ref.getDownloadURL().then((function(r){e.sellCarForm.value.carImg=r,e.getCarImgURLError=null,a()})).catch((function(r){e.getCarImgURLError=r})),e.uploadCarImgToFirestoreError=null})).catch((function(r){e.uploadCarImgToFirestoreError=r.message}))}))}},{key:"onChooseCarImgs",value:function(r){var e=this;if(this.carFiles=r.target.files,this.carFiles.length>0)for(var a=0;a<this.carFiles.length;a++){var i=new FileReader;i.onload=function(r){e.carImgLocalPaths.push(r.target.result)},i.readAsDataURL(r.target.files[a]),this.carImgNames.push(this.carFiles[a].name.substr(0,this.carFiles[a].name.lastIndexOf(".")))}else this.carFiles=null,this.carImgLocalPaths=[],this.carImgNames=[]}},{key:"onUploadCarImagesToFirestore",value:function(r){var e=this;return new Promise((function(a){0==e.carImgNames.length&&a();for(var i=0;i<e.carImgNames.length;i++)e.angularFireStorage.upload("/carsForSell/"+e.sellCarForm.value.model+"/"+e.userAdditionalData[0].email+"/"+r+"//carImages/"+e.carImgNames[i]+"-"+e.generateIdService.generateId(),e.carFiles[i]).then((function(r){r.ref.getDownloadURL().then((function(r){e.carImgURLs.push(r),e.carImgURLs.length==e.carImgNames.length&&(e.sellCarForm.value.carImgs=e.carImgURLs,e.getcarImgURLsError=null,a())})).catch((function(r){e.getcarImgURLsError=r.message})),e.uploadCarImagesToFirestoreError=null})).catch((function(r){e.uploadCarImagesToFirestoreError=r.message}))}))}},{key:"removeCarImg",value:function(r){this.carImgLocalPaths.splice(r,1),this.carImgNames.splice(r,1),0==this.carImgLocalPaths&&0==this.carImgNames&&(this.sellCarForm.value.carImgs=null)}}]),e}()).\u0275fac=function(r){return new(r||hr)(l.Lb(s.c),l.Lb(p.a),l.Lb(v.a),l.Lb(C.a),l.Lb(L.a),l.Lb(o.b))},hr.\u0275cmp=l.Fb({type:hr,selectors:[["app-sell-car"]],decls:40,vars:15,consts:[[4,"ngIf"],["class","error-msg",4,"ngIf"],[3,"formGroup","ngSubmit"],["formControlName","model"],[3,"value",4,"ngFor","ngForOf"],["formControlName","year"],[3,"src"],["formControlName","carImg","type","file","accept",".png,.jpg,.jpeg,.svg,.heic",2,"display","none",3,"change"],["chooseCarImg",""],["type","button",1,"btn-default","narrow-btn","ng-star-inserted",3,"click"],["placeholder","Description...","formControlName","description"],["type","number","name","price","formControlName","price"],["formControlName","carImgs","type","file","accept",".png,.jpg,.jpeg,.svg,.heic","multiple","multiple",2,"display","none",3,"change"],["chooseCarImgs",""],["type","submit",3,"disabled"],[1,"error-msg"],[3,"value"],["src","../../../assets/img/cell-car/upload-img.png"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(r,e){if(1&r){var a=l.Sb();l.Rb(0,"div"),l.uc(1,nr,1,0,"app-loading-spinner",0),l.Rb(2,"div"),l.uc(3,cr,2,1,"p",1),l.uc(4,tr,2,1,"p",1),l.Qb(),l.Rb(5,"form",2),l.Yb("ngSubmit",(function(){return e.onSubmit(e.sellCarForm)})),l.Rb(6,"div"),l.Rb(7,"mat-form-field"),l.Rb(8,"mat-select",3),l.uc(9,or,2,2,"mat-option",4),l.Qb(),l.Qb(),l.Rb(10,"mat-form-field"),l.Rb(11,"mat-select",5),l.uc(12,sr,2,2,"mat-option",4),l.Qb(),l.Qb(),l.Qb(),l.Rb(13,"div"),l.Rb(14,"div"),l.Mb(15,"img",6),l.Qb(),l.Rb(16,"input",7,8),l.Yb("change",(function(r){return e.onChooseCarImg(r)})),l.Qb(),l.Rb(18,"button",9),l.Yb("click",(function(){return l.oc(a),l.mc(17).click()})),l.wc(19,"Ch\u043eose Image"),l.Qb(),l.Qb(),l.Rb(20,"div"),l.Mb(21,"textarea",10),l.Qb(),l.Rb(22,"div"),l.Mb(23,"input",11),l.Qb(),l.Rb(24,"div"),l.uc(25,ur,2,0,"div",0),l.Rb(26,"button",9),l.Yb("click",(function(){return l.oc(a),l.mc(30).click()})),l.wc(27,"Ch\u043eose Images"),l.Qb(),l.uc(28,gr,2,1,"div",0),l.Rb(29,"input",12,13),l.Yb("change",(function(r){return e.onChooseCarImgs(r)})),l.Qb(),l.Qb(),l.Rb(31,"div"),l.Rb(32,"button",14),l.wc(33,"Add to the Shop"),l.Qb(),l.Qb(),l.Rb(34,"div"),l.uc(35,br,2,1,"p",1),l.uc(36,dr,2,1,"p",1),l.uc(37,mr,2,1,"p",1),l.uc(38,fr,2,1,"p",1),l.uc(39,pr,2,1,"p",1),l.Qb(),l.Qb(),l.Qb()}2&r&&(l.Ab(1),l.gc("ngIf",e.isLoading),l.Ab(2),l.gc("ngIf",e.getCarModelsError),l.Ab(1),l.gc("ngIf",e.getCarManufactureYearError),l.Ab(1),l.gc("formGroup",e.sellCarForm),l.Ab(4),l.gc("ngForOf",e.carModels),l.Ab(3),l.gc("ngForOf",e.carManufactureYears),l.Ab(3),l.gc("src",e.carImgLocalPath,l.pc),l.Ab(10),l.gc("ngIf",0==e.carImgLocalPaths.length),l.Ab(3),l.gc("ngIf",e.carImgLocalPaths.length>0),l.Ab(4),l.gc("disabled",!e.sellCarForm.valid),l.Ab(3),l.gc("ngIf",e.sellCarError),l.Ab(1),l.gc("ngIf",e.uploadCarImgToFirestoreError),l.Ab(1),l.gc("ngIf",e.uploadCarImagesToFirestoreError),l.Ab(1),l.gc("ngIf",e.getCarImgURLError),l.Ab(1),l.gc("ngIf",e.getcarImgURLsError))},directives:[t.l,s.q,s.l,s.g,ar.b,u.a,s.k,s.e,t.k,s.b,s.n,h.a,ir.f],encapsulation:2}),hr),vr=n("XupT");function Cr(r,e){if(1&r&&(l.Rb(0,"p",2),l.wc(1),l.Qb()),2&r){var a=l.ac();l.Ab(1),l.xc(a.getCarLinksErrorMsg)}}var Lr,Rr,yr=((Lr=function(){function e(a,i,n){r(this,e),this.firestore=a,this.subjectsService=i,this.router=n,this.carLinks=[]}return a(e,[{key:"ngOnInit",value:function(){var r=this;this.isLoadingSub=this.subjectsService.isLoadingSubject.subscribe((function(e){r.isLoading=e})),this.firestore.getSecondHandCarsLink().subscribe((function(e){r.carLinks=e.map((function(r){return Object.assign({id:r.payload.doc.id},r.payload.doc.data())})),r.subjectsService.loaded(),r.getCarLinksErrorMsg=null}),(function(e){r.subjectsService.loaded(),r.getCarLinksErrorMsg=e.message}));var e=JSON.parse(localStorage.getItem("sell-buy-car/buy-LastVisitedLink"));e&&this.router.navigate([e])}},{key:"ngOnDestroy",value:function(){this.isLoadingSub.unsubscribe()}}]),e}()).\u0275fac=function(r){return new(r||Lr)(l.Lb(p.a),l.Lb(I.a),l.Lb(o.b))},Lr.\u0275cmp=l.Fb({type:Lr,selectors:[["app-buy-car"]],decls:3,vars:3,consts:[["class","error-msg",4,"ngIf"],[3,"carLinks","currentLink"],[1,"error-msg"]],template:function(r,e){1&r&&(l.Rb(0,"div"),l.uc(1,Cr,2,1,"p",0),l.Mb(2,"app-categories-router",1),l.Qb()),2&r&&(l.Ab(1),l.gc("ngIf",e.getCarLinksErrorMsg),l.Ab(1),l.gc("carLinks",e.carLinks)("currentLink","sell-buy-car/buy"))},directives:[t.l,vr.a],encapsulation:2}),Lr),wr=n("PCNd"),Fr=((Rr=function e(){r(this,e)}).\u0275mod=l.Jb({type:Rr}),Rr.\u0275inj=l.Ib({factory:function(r){return new(r||Rr)},imports:[[t.c,s.o,wr.a,u.b,o.e.forChild([{path:"",component:m,canActivate:[f.a],children:[{path:"buy",component:yr,children:[{path:"audi",component:X},{path:"bmw",component:rr},{path:"**",redirectTo:"audi"}]},{path:"sell",component:Ir},{path:"**",redirectTo:"buy"}]}])]]}),Rr)}}])}();