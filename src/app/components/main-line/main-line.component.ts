import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-main-line',
  imports: [],
  templateUrl: './main-line.component.html',
  styleUrl: './main-line.component.scss',
})
export class MainLineComponent {
  @Input() hasBackground: boolean = false;

  @HostBinding('class.has-background')
  get activeClass(): boolean {
    return this.hasBackground;
  }
}
