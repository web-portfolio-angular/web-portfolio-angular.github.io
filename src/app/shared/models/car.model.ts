export class Car{
  carImg: string;
  carHoverImg: string;
  carInfo: string;
  carPrice: number;
  dateCreation: firebase.firestore.Timestamp;
  carImgs?: any;
  id?: string;
}

export class SellBuyCar {
  model: string;
  year: number;
  carImg: string;
  description: string;
  price: string;
  userEmail: string;
  id: string;
  carImages?: any [];
}

export class CarModel {
	car: string;
}

export class CarManufactureYear {
	year: number;
}