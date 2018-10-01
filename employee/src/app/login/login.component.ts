import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
First:string;
  Last:string;
  id:number;
   First1:string;
  Last1:string;
  id1:number;
  index:number;
  index2:number;

employee=[];
obj={};


count:number=0;
hide:boolean=true;
  
  constructor() { }

  ngOnInit() {

  }

  onClick():void{
    let tempFN = this.First;
    let tempLN = this.Last;
    let tempid =this.id;

    this.obj={
      id:tempid,
      First:tempFN,
      Last:tempLN,
      
    }   

    this.employee[this.count]=this.obj;
  
 
      this.count++;
  }

  onDelete(i):void{
    this.count--;
     this.employee.splice(i,1);

  }

  onUpdate(i):void{
    this.hide=false;
    this.index=i;
  
    
  }
 

  onUpdateItem():void{

    this.index2=this.index; 

    
     this.employee[this.index2].id=this.id1;
    this.employee[this.index2].First=this.First1;
      this.employee[this.index2].Last=this.Last1;
      this.hide=true;

    


  }

  sortById(){
    this.employee.sort(function(a,b){
      return (a.id-b.id);
    })
  }

  sortByName(){
    this.employee.sort(function(a,b){
      return (''+a.First).localeCompare(b.First);
    })
  }
}
