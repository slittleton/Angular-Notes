import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public greeting:string = "";
  public customMessage:string="";
  public twoWayBindingVal:string="";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    if(this.greeting===''){
      this.greeting = "Hello"
    } else{
      this.greeting = ""
    }
  }
  showCustomMessage(customMessage:any){
    this.customMessage=customMessage.value;
  }
}
