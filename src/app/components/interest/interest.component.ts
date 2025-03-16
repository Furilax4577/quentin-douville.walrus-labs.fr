import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  imports: [],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss',
})
export class InterestComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) picto!: string;
}
