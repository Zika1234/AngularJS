import { Component, OnInit } from '@angular/core';
import { CarTypeService} from '../car-type.service';

@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.css']
})
export class CarTypeComponent implements OnInit {

  constructor(private cartype :CarTypeService) { }

  cartypeArray:any;



  ngOnInit() {
    this.cartype.getcarType().subscribe(data=>this.cartypeArray=data.Car);
  }

}
