import { Component } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-introduction',
  imports: [TagsComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {}
