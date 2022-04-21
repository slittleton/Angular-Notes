import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './component-interaction-parent.component.html',
  styleUrls: ['./component-interaction-parent.component.css']
})
export class ComponentInteractionParentComponent implements OnInit {
public name:string = 'From parent Component'
public fromChild = '';

  constructor() { }

  ngOnInit(): void {
  }


}
