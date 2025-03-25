import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor() {}

  trackEvent(action: 'click', category: string, label: string = '') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
}
