import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {

  @Input() data: any;

  addComponentY() {
    const newComponentYData = { text: '' };
    this.data.componentYDataList.push(newComponentYData);
  }
}
