import { Component } from '@angular/core';
import { TextSharingService } from '../text-sharing.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  inputText = '';

  constructor(private textSharingService: TextSharingService) {}

  onInputChange() {
    this.textSharingService.updateText(this.inputText);
  }
}
