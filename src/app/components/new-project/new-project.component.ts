import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-new-project',
  imports: [],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
})
export class NewProjectComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
