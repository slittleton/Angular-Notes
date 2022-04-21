import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
public successClass: string = "text-success"
public dangerClass: string = "text-danger"
public hasError = false;
public isItalic = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-italic": this.isItalic
}


  constructor() { }

  ngOnInit(): void {
  }

}
