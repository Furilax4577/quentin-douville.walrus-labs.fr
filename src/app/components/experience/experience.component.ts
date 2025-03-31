import { Component } from '@angular/core';
import { EnterpriseComponent } from '../enterprise/enterprise.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-experience',
  imports: [EnterpriseComponent, TagsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
