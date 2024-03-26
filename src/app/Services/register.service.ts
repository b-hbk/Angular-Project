import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private User:HttpClient) { }
 
registeruser(body:any){
  return this.User.post("http://localhost:3000/User",body);
}

}
