import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    email = '';
    password = '';
    invalidLogin = false;
    src='/assets/images/bg-desktop.png';


    
constructor(private Authservice:AuthenticationService,private router:Router) {} 

ngOnInit(): void {
  
}
  
CustLogin()
{  
  
    this.Authservice.authenticate(this.email,this.password).subscribe((authenticated: boolean) => {
  if (authenticated) {
    alert(`login successful! `)
    this.router.navigate(['search']);
    this.invalidLogin = false;
  } else {
    this.invalidLogin = true;
    alert("Either filled wrong credentials or not registered yet");
}

});
}

}
  
