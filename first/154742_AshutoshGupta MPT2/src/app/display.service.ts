import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get("/assets/mobile.json");
  }
}


