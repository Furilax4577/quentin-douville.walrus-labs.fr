import { Component } from '@angular/core';
import { EnterpriseComponent } from '../enterprise/enterprise.component';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-they-trust-me',
  imports: [EnterpriseComponent, RouterModule],
  templateUrl: './they-trust-me.component.html',
  styleUrl: './they-trust-me.component.scss',
})
export class TheyTrustMeComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
