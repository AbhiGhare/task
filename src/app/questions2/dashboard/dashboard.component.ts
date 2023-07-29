import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  componentXDataList: any[] = [];

  addComponentX() {
    const newComponentXData = { tabName: 'Default Tab Name', componentYDataList: [] };
    this.componentXDataList.push(newComponentXData);
  }
}
