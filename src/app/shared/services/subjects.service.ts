import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { UserAdditionalInfo } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class SubjectsService implements OnDestroy {
	defaultUserImg: string = 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/userImages%2Fdefault-user.jpg?alt=media&token=7487f1ec-16b1-4814-9943-cb30c8ce1eab';

	userInfoMenuStateSubject = new BehaviorSubject <string>(null);
	userInfoMenuState: string = 'out';

	navigationMenuStateSubject = new BehaviorSubject <string>(null);
	navigationMenuState: string = 'out';

	overlaySubject = new BehaviorSubject <boolean>(null);
	isOverlayShown: boolean = false;

	disableButtonSubject = new BehaviorSubject <boolean>(null);
	disableButton: boolean = false;

	showUserInfoSubject = new BehaviorSubject <boolean>(null);
	showUserInfo: boolean = false;

	shownUserSubject = new BehaviorSubject <any>(null);
	shownUser: UserAdditionalInfo;

	windowWidthSubject = new BehaviorSubject <number>(null);
	private windowWidthSub: Subscription;
	windowWidth: number = null;

	carShowImagesSubject = new BehaviorSubject <boolean>(null);
	carShowImages: boolean = false;

	carIdSubject = new BehaviorSubject <string>(null);
	carId: string = null;

	isLoadingSubject = new BehaviorSubject<boolean>(null);
	isLoading: boolean = true;
	

	constructor() {
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.overlaySubject.next(this.isOverlayShown);
		this.showUserInfoSubject.next(this.showUserInfo);
		this.shownUserSubject.next(this.shownUser);

		this.windowWidth = window.innerWidth;
		this.windowWidthSubject.next(this.windowWidth);
		this.windowWidthSub = this.windowWidthSubject.subscribe(windowWidth => {
			this.windowWidth = windowWidth;
		})

		this.carShowImagesSubject.next(this.carShowImages);
		this.carIdSubject.next(this.carId);

		this.isLoadingSubject.next(this.isLoading);
	}

	ngOnDestroy(): void {
		this.windowWidthSub.unsubscribe();
	}

	swithcUserInfoState() {
		if (this.navigationMenuState == 'in') {
			this.navigationMenuState = 'out';			
		}
		if (this.showUserInfo) {
			this.showUserInfo = false;
		}

		this.userInfoMenuState == 'out' ? 
			[this.userInfoMenuState = 'in', this.isOverlayShown = true] :	
			[this.userInfoMenuState = 'out', this.isOverlayShown = false];
		
		this.onHideCarImages();
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.overlaySubject.next(this.isOverlayShown);
		this.showUserInfoSubject.next(this.showUserInfo);
	}

	swithcNavigationMenuState() {
		if (this.userInfoMenuState == 'in') {
			this.userInfoMenuState = 'out';
		}
		if (this.showUserInfo) {
			this.showUserInfo = false;
		}
		if (this.windowWidth >= 767){
			this.isOverlayShown = false

			this.userInfoMenuStateSubject.next(this.userInfoMenuState);
			this.showUserInfoSubject.next(this.showUserInfo);
			this.overlaySubject.next(this.isOverlayShown);
			this.onHideCarImages();
			return			
		}

		this.navigationMenuState == 'out' ? 
			[this.navigationMenuState = 'in', this.isOverlayShown = true] :	
			[this.navigationMenuState = 'out', this.isOverlayShown = false];

		this.onHideCarImages();
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.overlaySubject.next(this.isOverlayShown);
		this.showUserInfoSubject.next(this.showUserInfo);
	}

	onShowUserInfo(shownUser: UserAdditionalInfo) {
		this.showUserInfo = true;
		this.shownUser = shownUser;
		this.isOverlayShown = true		

		this.showUserInfoSubject.next(this.showUserInfo);
		this.shownUserSubject.next(this.shownUser);
		this.overlaySubject.next(this.isOverlayShown);
	}

	overlayClick() {
		this.userInfoMenuState = 'out';
		this.navigationMenuState = 'out';
		this.showUserInfo = false;
		this.shownUser = null;
		this.isOverlayShown = false

		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.showUserInfoSubject.next(this.showUserInfo);
		this.shownUserSubject.next(this.shownUser);
		this.overlaySubject.next(this.isOverlayShown);
	}

	onDisableButton() {
		this.disableButton = true;
		this.disableButtonSubject.next(this.disableButton);
	}

	onEnableButton() {
		this.disableButton = false;
		this.disableButtonSubject.next(this.disableButton);
	}

	onShowCarImages(carId) {
		this.carShowImages = true;
		this.carId = carId;

		this.carShowImagesSubject.next(this.carShowImages);
		this.carIdSubject.next(this.carId);
	}

	onHideCarImages() {
		this.carShowImages = false;
		this.carId = null;

		this.carShowImagesSubject.next(this.carShowImages);
		this.carIdSubject.next(this.carId);
	}

	loaded() {
		this.isLoading = false;
		this.isLoadingSubject.next(this.isLoading);
	}
}