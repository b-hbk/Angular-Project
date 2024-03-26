import { Injectable } from '@angular/core';
import { Cars } from '../Classes/cars';
@Injectable({
  providedIn: 'root'
})
export class CarlistService {
  cars:Cars[]=[
    new Cars(1,'/assets/images/ertiga.jpg',4.7,'Maruti Suzuki Ertiga Model-2023','Manual - Petrol- 7 Seats','180/hr','Mumbai'),
    new Cars(2,'/assets/images/mh.jpg',4.5,'Maruti Suzuki XL-6 Model-2023','Manual - Petrol- 7 Seats','180/hr','Mumbai'),
    new Cars(3,'/assets/images/triber.jpg',4.4,'Renault Triber  Model-2021','Manual - Petrol- 7 Seats','160/hr','Navi Mumbai'),
    new Cars(4,'/assets/images/nexon.webp',4.8,'Tata Nexon  Model-2023','Manual - Petrol- 5 Seats','180/hr','Navi Mumbai'),
    new Cars(5,'/assets/images/i10.jpg',4.3,'Hyundai i10 Model-2020','Manual - Petrol- 4 Seats','150/hr','Mumbai'),
    new Cars(6,'/assets/images/amaze.jpg',4.8,'Honda Amaze  Model-2023','Manual - Petrol- 4 Seats','180/hr','Navi Mumbai'),
    new Cars(7,'/assets/images/baleno.jpeg',4.8,'Maruti Suzuki Baleno  Model-2022','Manual - Petrol- 4 Seats','170/hr','Mumbai'),
    new Cars(8,'/assets/images/dzire.jpeg',4.7,'Maruti Suzuki Swift Dzire  Model-2021','Manual - Petrol- 4 Seats','200/hr','Mumbai'),
    new Cars(9,'/assets/images/swift.jpeg',4.4,'Maruti Suzuki Swift Dzire  Model-2021','Manual - Petrol- 7 Seats','180/hr','Mumbai'),
    new Cars(10,'/assets/images/innova.jpeg',4.5,'Tata Innova  Model-2019','Manual - Petrol- 7 Seats','250/hr','Mumbai'),

    
  ]

  constructor() { }

getAllCar():Cars[]{
  return this.cars;
}

getAllCarById(CarId:Number): Cars | undefined{
return this.cars.find(cars=>cars.CarId===CarId);
}

}
