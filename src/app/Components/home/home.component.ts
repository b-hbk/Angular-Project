import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  findcar=new FormGroup({

    Pickup: new FormControl('', [Validators.required, Validators.minLength(4)]),
     Drop:new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
 
  constructor(private router:Router){
  }
  onSubmit() {
    this.router.navigate(['/search']);

  }
 

}
