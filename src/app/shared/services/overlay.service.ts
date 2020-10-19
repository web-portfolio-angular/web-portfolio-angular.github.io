import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OverlayService {
	userInfoMenuStateSubject = new BehaviorSubject <string>(null);
	userInfoMenuState: string = 'out';

	navigationMenuStateSubject = new BehaviorSubject <string>(null);
	navigationMenuState: string = 'out';

	overlaySubject = new BehaviorSubject <boolean>(null);
	isOverlayShown: boolean = false;

	constructor() {
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.overlaySubject.next(this.isOverlayShown);
	}

	swithcUserInfoState() {
		if (this.navigationMenuState == 'in') {
			this.navigationMenuState = 'out';
		}

		this.userInfoMenuState == 'out' ? 
			[this.userInfoMenuState = 'in', this.isOverlayShown = true] :	
			[this.userInfoMenuState = 'out', this.isOverlayShown = false];
		
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.overlaySubject.next(this.isOverlayShown);
	}

	navigationInfoState() {
		if (this.userInfoMenuState == 'in') {
			this.userInfoMenuState = 'out';
		}

		this.navigationMenuState == 'out' ? 
			[this.navigationMenuState = 'in', this.isOverlayShown = true] :	
			[this.navigationMenuState = 'out', this.isOverlayShown = false];

		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.overlaySubject.next(this.isOverlayShown);
	}

	overlayClick() {
		this.userInfoMenuState = 'out';
		this.navigationMenuState = 'out';
		this.isOverlayShown = false;

		this.navigationMenuStateSubject.next(this.navigationMenuState);
		this.userInfoMenuStateSubject.next(this.userInfoMenuState);
		this.overlaySubject.next(this.isOverlayShown);
	}
}