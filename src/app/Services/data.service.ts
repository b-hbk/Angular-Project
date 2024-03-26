import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {



  bookingDetails: any = {};
  constructor() { }

  setBookingDetails(details: any) {
    this.bookingDetails = details;
  }
 

  getBookingDetails():any {
    return this.bookingDetails;
  }

}
