import { Component } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-introduction',
  imports: [TagsComponent, RouterModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  constructor(private analyticsService: AnalyticsService) {}

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
  }
}
