import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  imports: [],
  templateUrl: './point.component.html',
  styleUrl: './point.component.scss',
})
export class PointComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) picto!: string;
}
