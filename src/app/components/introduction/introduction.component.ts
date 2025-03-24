import { Component } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [TagsComponent, RouterModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {}
