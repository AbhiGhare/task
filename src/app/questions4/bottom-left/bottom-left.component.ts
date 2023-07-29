import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextSharingService } from '../text-sharing.service';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnDestroy {
  componentName: string = '';
  text: string = '';
  private subscription: Subscription;

  constructor(private textSharingService: TextSharingService) {
    // Set the component name based on the selector
    this.componentName = this.constructor.name.replace('Component', '');

    // Subscribe to the text data from the service
    this.subscription = this.textSharingService.text$.subscribe((text) => {
      this.text = text;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the service to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
