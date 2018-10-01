import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private url:string = '/assets/JsonData/'; 
  
  constructor (private http: HttpClient) {}

  getPasswd(user:string){
    this.url = this.url+ user +".json";

    return this.http.get(this.url);
            
     }

}
