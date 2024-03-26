import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingComponent } from './Components/booking/booking.component';
import { SearchComponent } from './Components/search/search.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalbookingComponent } from './Components/finalbooking/finalbooking.component';
import { DataService } from './Services/data.service';
import { CarlistService } from './Services/carlist.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterService } from './Services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SearchComponent,
    RegisterComponent,
    LoginComponent,
    FinalbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,CarlistService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
