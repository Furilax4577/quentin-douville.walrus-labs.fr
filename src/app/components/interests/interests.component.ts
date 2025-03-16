import { Component } from '@angular/core';
import { InterestComponent } from '../interest/interest.component';

@Component({
  selector: 'app-interests',
  imports: [InterestComponent],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
})
export class InterestsComponent {}
