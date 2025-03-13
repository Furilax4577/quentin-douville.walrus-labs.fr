import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input({ required: true }) num = 0;
  @Input({ required: true }) title = 'Title';

  formatToTwoDigits(num: number) {
    return num.toString().padStart(2, '0');
  }
}
