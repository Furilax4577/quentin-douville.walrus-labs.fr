import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-stay-in-touch',
  imports: [TitleComponent],
  templateUrl: './stay-in-touch.component.html',
  styleUrl: './stay-in-touch.component.scss',
})
export class StayInTouchComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
