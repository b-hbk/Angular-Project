import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<boolean> {
    // Fetch the JSON data from the server
    return this.http.get<any[]>('http://localhost:3000/User').pipe(
      tap(customers => {
        console.log('Customers Data:', customers);
        // Check if the provided email and password match any doctor's credentials
        const authenticatedCustomer = customers.find(customer => customer.email === email && customer.password === password);
        console.log('Authenticated Customer:', authenticatedCustomer);
      }),
      map(customers => {
        // Check if the provided email and password match any doctor's credentials
        const authenticatedCustomer = customers.find(customer => customer.email === email && customer.password === password);
        if (authenticatedCustomer) {
          // Store the username in session storage
          sessionStorage.setItem('email', email);
          return true; // Authentication successful
        } else {
          return false; // Authentication failed
        }
      })
    );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email');
    console.log(!(user === null))
    return !(user === null); // Return true if a email is stored in session storage
  }

  // logOut() {
  //   sessionStorage.removeItem('email'); // Remove the email from session storage
  // }

}
