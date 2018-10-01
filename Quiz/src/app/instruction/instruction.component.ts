import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  DontAgree():void{
    this.router.navigateByUrl('login');
  }
  onAgree():void{
    this.router.navigateByUrl('questions');
  }
}
