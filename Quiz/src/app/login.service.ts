import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 // private url:string;

  getPassword(){
    return this.http.get("/assets/JsonData/Contestant.json");
  }
}
