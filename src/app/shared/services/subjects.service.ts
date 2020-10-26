import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
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

	shownUserSubject = new BehaviorSubject <string>(null);
	shownUser: string = null;

	windowWidthSubject = new BehaviorSubject <number>(null);
	windowWidthSub: Subscription;
	windowWidth: number = null;

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
		if (this.windowWidth > 767){
			this.isOverlayShown = false

			this.userInfoMenuStateSubject.next(this.userInfoMenuState);
			this.showUserInfoSubject.next(this.showUserInfo);
			this.overlaySubject.next(this.isOverlayShown);
			return			
		}

		this.navigationMenuState == 'out' ? 
			[this.navigationMenuState = 'in', this.isOverlayShown = true] :	
			[this.navigationMenuState = 'out', this.isOverlayShown = false];

		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.overlaySubject.next(this.isOverlayShown);
		this.showUserInfoSubject.next(this.showUserInfo);
	}

	onShowUserInfo(email: string) {
		this.showUserInfo = true;
		this.shownUser = email;
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
}