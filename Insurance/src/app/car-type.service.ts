import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  constructor(private http:HttpClient) { }

  private cartypUrl:string;

  getcarType(){
   
    return this.http.get("assets/JsonData/cartype.json");
  }
}
