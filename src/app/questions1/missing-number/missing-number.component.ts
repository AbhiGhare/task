import { Component } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css']
})
export class MissingNumberComponent {

  inputIndex!: number;
  result: number | null = null;

  findMissingNumber(): void {
    if (this.inputIndex === null || this.inputIndex < 1 || this.inputIndex % 1 !== 0) {
      this.result = null;
      return;
    }

    if (this.inputIndex % 2 === 0) {
      // Even-indexed number (pattern: consecutive odd numbers)
      // this.result = 1 + (this.inputIndex / 2) * (this.inputIndex - 1);
      this.result = 3 + (this.inputIndex / 2) * 12;
    } else {
      // Odd-indexed number (pattern: consecutive square numbers)
      // this.result = this.inputIndex * this.inputIndex + 1;
      this.result = 2 + Math.floor(this.inputIndex / 2) * 8;
    }
  }
}
