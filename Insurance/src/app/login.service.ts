import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string;  

  constructor(private http: HttpClient){ }

  getPassword(user:string){
    this.url = '/assets/JsonData/' + user +'.json';
    return this.http.get(this.url);
  }
}
