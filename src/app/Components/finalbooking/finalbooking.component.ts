import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-finalbooking',
  templateUrl: './finalbooking.component.html',
  styleUrls: ['./finalbooking.component.css']
})
export class FinalbookingComponent implements OnInit {
  bookingDetails: any;
  constructor(private bookingservice: DataService) {}

  ngOnInit(): void {
    // Retrieve the booking details from the service
    this.bookingDetails = this.bookingservice.getBookingDetails();
    console.log('Booking Details:', this.bookingDetails);
  }
  printTicket(): void {
    window.print(); // Trigger the browser's print dialog
  }
}
