import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  response:string[];

  constructor(private http:HttpClient) { }
    j:number=0;
   score:any=0;
   
  evaluate(data):void{
   
    this.response=data;
   }

  answer(){
    return this.http.get("/assets/JsonData/answers.json");
  }




  // answer:any[]=['1','3','4','2','3','2','3','3','2','2'];

  // displayResult(){
    
  //  for(this.j=0;this.j<10;this.j++)
  //  {
  //    if(this.response[this.j]==this.answer[this.j])
  //    {
  //      this.score++;
  //    }
    
  //  }
  //   return this.score;
  }

