import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }
