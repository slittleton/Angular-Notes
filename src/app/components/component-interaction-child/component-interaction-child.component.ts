import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.css']
})
export class ComponentInteractionChildComponent implements OnInit {

  //@Input property expects info from parent component
  @Input() public parentData:string ='';

  //Use EventeEmitter to send info to parent component from child
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  
  fireEvent(){
    this.childEvent.emit("To Parent from Child Component")
  }
}
