import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {EvaluationService} from '../evaluation.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quesArray:any;

  constructor(private questionService : QuestionsService,private evaluationService:EvaluationService,private router:Router) { }
count:number;
  ngOnInit() {
    this.questionService.getQuestions().subscribe(data=>this.quesArray=data.Questions);
    this.count=0;
    
  }
  p=0;
  array:any[]=[0,1,2,3,4,5,6,7,8,9];
  showHTML:Boolean=true;
  showButton:boolean=false;
  onBegin(){
    this.showHTML=false;
    this.showButton=true;
    if(this.count==0)
    {
     this.question=this.quesArray[0].ques1;
      this.option1 =this.quesArray[0].op1;
      this.option2 =this.quesArray[0].op2;
       this.option3 =this.quesArray[0].op3;
        this.option4 =this.quesArray[0].op4;
    }
  }
  

  selectedOption:string;
  question:string;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  
  responseArray:any[10]=[];
  showNext:boolean=false;


  onNext():void{
    if(this.count==9)
    {
      this.showNext=true;
    }
    this.count++;
    if(this.count<10)
    {
      this.question=this.quesArray[this.count].ques1;
      this.option1 =this.quesArray[this.count].op1;
      this.option2 =this.quesArray[this.count].op2;
       this.option3 =this.quesArray[this.count].op3;
        this.option4 =this.quesArray[this.count].op4;
    }

    let a1:string=null;
    // let a2:string=null;
    // let a3:string=null;
    // let a4:string=null;

    let x1:any;
    let x2:any;
    let x3:any;
    let x4:any;


    x1=document.getElementById('1');
    x2=document.getElementById('2');
    x3=document.getElementById('3');
    x4=document.getElementById('4');

    if(x1.checked){
      a1=x1.value;
    }
    if(x2.checked){
      a1=x2.value;
    }
    if(x3.checked){
      a1=x3.value;
    }
    if(x4.checked){
      a1=x4.value;
    }


    this.responseArray[this.count-1]=a1;
      // alert(this.responseArray);


    this.selectedOption='';

  }

  onSubmit():void{
   
    this.evaluationService.evaluate(this.responseArray);
     this.router.navigateByUrl('result');

  }

   onBack():void{
    this.count--;
    this.responseArray.splice(this.count,1);
    if(this.count>0)
    {
      this.question=this.quesArray[this.count].ques1;
      this.option1 =this.quesArray[this.count].op1;
      this.option2 =this.quesArray[this.count].op2;
       this.option3 =this.quesArray[this.count].op3;
        this.option4 =this.quesArray[this.count].op4;
    }
   
  }

  buttonChange(index):void{
    this.count=index;
     this.question=this.quesArray[index].ques1;
      this.option1 =this.quesArray[index].op1;
      this.option2 =this.quesArray[index].op2;
       this.option3 =this.quesArray[index].op3;
        this.option4 =this.quesArray[index].op4;


  }
  
