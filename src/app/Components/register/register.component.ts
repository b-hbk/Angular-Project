
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name="";
  email="";
  contact="";
  password="";
  city="";
  src='/assets/images/bg-desktop.png'
  constructor(private Adduser:RegisterService,private router:Router){}

  register(registerdata:NgForm){

    if(registerdata.valid){
      const postBody={
        name:registerdata.value.name,
        email:registerdata.value.email,
        contact:registerdata.value.contact,
        password:registerdata.value.password,
        city:registerdata.value.city,

      }
      this.Adduser.registeruser(postBody).subscribe((data)=>{
        console.log(data);
        alert(`Registered Successfully ${this.name}`)
        this.router.navigate(['search']);
      },(err)=>{
        console.log("Data cannot be Added",err)
      })
    
    }
    else {
      // Form is invalid, log an error message
      console.log('Form validation errors:', registerdata.controls);
      console.log('Form is not valid. Please fill in all required fields.');
    }
  }
  

  }

 

