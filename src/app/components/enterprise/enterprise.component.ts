import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enterprise',
  imports: [],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss',
})
export class EnterpriseComponent {
  @Input({ required: true }) imageAlt!: string;
  @Input({ required: true }) imageName!: string;
}
