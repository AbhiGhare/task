// text-sharing.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSharingService {
  private textSource = new Subject<string>();
  text$ = this.textSource.asObservable();

  updateText(text: string) {
    this.textSource.next(text);
  }
}
