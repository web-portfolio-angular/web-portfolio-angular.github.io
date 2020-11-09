export class SellBuyCar {
	constructor(
		public model: string,
		public year: number,
		public carImg: string,
		public description: string,
		public price: string,
		public userEmail: string,
		public carImages?: string
	) {}
}