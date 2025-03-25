import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-right-menu',
  imports: [RouterModule],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.scss',
})
export class RightMenuComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
