import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeHttpService {

  constructor(private http: HttpClient) { }

  search(zipcode: string) {
    return this.http.get(`http://viacep.com.br/ws/${zipcode}/json/unicode/`);
  }
}
