import { Component, OnInit } from '@angular/core';
import {DisplayService} from '../display.service';
 
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private displayService : DisplayService) { }

  ngOnInit() {

     this.displayService.getDetails().subscribe(data=>this.obj=data.MobileData
)
  }
    obj:any;
    
  

  onDelete(i):void{

    this.obj.splice(i,1);

  }

  sortbyId():void{
      this.obj.sort(function(a,b){
        return (a.mobId-b.mobId);
      })

  }

  sortbyName():void{
    this.obj.sort(function(a,b){
      return (''+a.mobName).localeCompare(b.mobName);
    })
  }

  sortbyPrice():void{
      this.obj.sort(function(a,b){
        return (a.mobPrice-b.mobPrice);
      })

  }
}
