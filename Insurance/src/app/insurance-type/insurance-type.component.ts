import { Component, OnInit } from '@angular/core';
import { InsuranceTypeService } from '../insurance-type.service'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.css']
})
export class InsuranceTypeComponent implements OnInit {

  constructor(private insuranceType:InsuranceTypeService, private router:Router) { }
  typeArray:any;


  ngOnInit() {
    this.insuranceType.getinsuranceType().subscribe(data=>this.typeArray=data.Type);
  }

  selectedOption:string;
  onClick():void{

    if(this.selectedOption=="car"){
this.router.navigateByUrl('car-type');
    }
   else
   {
     document.getElementById("demo").innerHTML="Select Car option";
   }
    
  }

}
