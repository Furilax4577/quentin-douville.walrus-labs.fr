import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() bgColor?: string;
  @Input() textColor?: string;

  @HostBinding('style.background-color')
  get backgroundColor(): string {
    return this.bgColor || '';
  }

  @HostBinding('style.color')
  get getColor(): string {
    return this.textColor || '';
  }
}
