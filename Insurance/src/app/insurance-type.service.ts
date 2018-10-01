import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceTypeService {

  private typeUrl:string;

  constructor(private http:HttpClient) { }

  getinsuranceType(){
    this.typeUrl='/assets/JsonData/type.json';
    return this.http.get(this.typeUrl);
  }
}
