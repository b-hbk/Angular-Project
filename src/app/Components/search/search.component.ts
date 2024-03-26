import { Component, OnInit } from '@angular/core';
import { CarlistService } from 'src/app/Services/carlist.service';
import { Cars } from 'src/app/Classes/cars';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  cars:Cars[]=[];
constructor(private mycars:CarlistService){

}
ngOnInit(): void {

  this.cars=this.mycars.cars
}



}
