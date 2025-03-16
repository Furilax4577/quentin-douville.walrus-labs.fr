import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-studies',
  imports: [TitleComponent, TagsComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent {}
