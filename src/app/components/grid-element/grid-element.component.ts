import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-grid-element',
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrl: './grid-element.component.scss',
})
export class GridElementComponent {
  @Input() startAt?: number = 1;
  @Input() col?: number = 1;
  @Input() horizontalAlign?: 'start' | 'center' | 'end';
  @Input() verticalAlign?: 'start' | 'center' | 'end';
  @Input() direction: 'column' | 'row' = 'row';
  @Input() bgColor?: string;

  @HostBinding('style.grid-column')
  get gridColumn(): string {
    return `${this.startAt} / span ${this.col}`;
  }

  @HostBinding('style.justify-content')
  get justifyContent(): string {
    return (
      (this.direction === 'row' ? this.verticalAlign : this.horizontalAlign) ||
      ''
    );
  }

  @HostBinding('style.align-items')
  get alignItems(): string {
    return (
      (this.direction === 'row' ? this.horizontalAlign : this.verticalAlign) ||
      ''
    );
  }

  @HostBinding('style.flex-direction')
  get flexDirection(): string {
    return this.verticalAlign || '';
  }
}
