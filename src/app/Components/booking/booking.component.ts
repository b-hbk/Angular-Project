
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarlistService } from 'src/app/Services/carlist.service';
import { Cars } from 'src/app/Classes/cars';
import { DataService } from 'src/app/Services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Carid:string|null=null;
  drop:string="";
  pickup:string="";
  time:Number=0;
  date:string= '';
  address:string="";
  mobile:Number=0;
 cars:Cars[]=[];
 car: Cars | undefined;
 

  constructor(private route :ActivatedRoute ,
    private userserve:DataService,
    private mycars:CarlistService,
    private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Carid = params.get('CarId');
      this.cars = this.mycars.cars;

      // Fetch car details by carid
       this.car = this.cars.find(car => car.CarId.toString() === this.Carid);

    });  
  }

  bookCar(): void {
    if(this.Carid && this.date && this.pickup &&this.drop){
      console.log('Booking Token for Car ID:', this.Carid);
      console.log('Selected time:', this.date);
      console.log('Selected Pickup:', this.pickup);
      console.log('Selected Drop:', this.drop);
      const isConfirmed=window.confirm('Are you sure')
      if(isConfirmed==true){
        this.router.navigate(['/finalbooking']);
      }
      else{
        alert('Booking canceled by user.');
      }

    // Save the booking details to the service
   const booked = {
      Carid: this.Carid,
      pickup: this.pickup,
      drop: this.drop,
      date: this.date,
      time: this.time,
      address: this.address,
      mobile: this.mobile,
      
    };
    this.userserve.setBookingDetails(booked);
    
  
  }
}

}

