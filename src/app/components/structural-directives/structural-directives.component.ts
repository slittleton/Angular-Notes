import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
public myBool:boolean = true;
public color = "red";
public sizes:string[] = ['small','medium','large']

  constructor() { }

  ngOnInit(): void {
  }

}
