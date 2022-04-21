import { Component, OnInit } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
public myId:string = "test ID";
public myBool:boolean = false;
public myVal:string = "the value was set in component"


  constructor() { }

  ngOnInit(): void {
  }

}
