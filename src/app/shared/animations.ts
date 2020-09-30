import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
	slideRightLeft: trigger('slideRightLeft', [
		state('in', style({
			'transform': 'translate3d(-100%, 0, 0)'
		})),
		state('out', style({
			'transform': 'translate3d(0)'
		})),
		transition('in => out', [
			animate('200ms ease-in-out'),
		]),
		transition('out => in', [
			animate('200ms ease-in-out'),
		])
	])
}
