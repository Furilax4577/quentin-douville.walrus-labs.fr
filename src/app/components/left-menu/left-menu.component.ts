import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-left-menu',
  imports: [RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
