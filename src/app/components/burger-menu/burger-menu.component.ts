import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-burger-menu',
  imports: [RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @HostBinding('class.active') isActive = false;

  constructor(private analyticsService: AnalyticsService) {}

  toggleActive(category: string) {
    this.trackEvent(category, 'toggle_burger_menu');
    this.isActive = !this.isActive;
  }

  getImagePath() {
    return this.isActive
      ? './assets/svg/burger-close.svg'
      : './assets/svg/burger-open.svg';
  }

  close() {
    this.isActive = false;
  }

  trackEvent(category: string, label: string) {
    this.analyticsService.trackEvent('click', category, label);
    this.close();
  }
}
