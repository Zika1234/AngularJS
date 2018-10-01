import { Component, OnInit } from '@angular/core';

import {EvaluationService} from '../evaluation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private evaluateService:EvaluationService) { }
 
   score:string[];
    showScore:Boolean=true;
  ngOnInit() {
  
     this.evaluateService.answer().subscribe(data=>this.score=data.Answer
    
     )
     
  }
 
j:number;

 num:number;
finalArray:any;


calculate(){
this.num=0;
this.finalArray=this.evaluateService.response;
 this.showScore=false;
 
  for(this.j=0;this.j<10;this.j++)
   {
    
     if(this.finalArray[this.j]==this.score[this.j].answer)
     {
       
       this.num++;
       

       
     }
     
    
   }
    return this.num;
    
  }





}
 


