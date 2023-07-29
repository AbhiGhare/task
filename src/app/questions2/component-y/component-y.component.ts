import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css']
})
export class ComponentYComponent {

  @Input() data: any;

  constructor(private http: HttpClient) {}

  // saveData() {
  //   this.http.post('/api/save', this.data).subscribe(
  //     () => alert('Data saved successfully!'),
  //     (error) => console.error('Error saving data:', error)
  //   );
  // }
  saveData() {
    this.http.post('http://localhost:3000/api/save', this.data).subscribe(
      () => alert('Data saved successfully!'),
      (error) => console.error('Error saving data:', error)
    );
  }
  
}
