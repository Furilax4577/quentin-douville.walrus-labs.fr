import { Component } from '@angular/core';
import { EnterpriseComponent } from '../enterprise/enterprise.component';
import { CenteringComponent } from '../centering/centering.component';

@Component({
  selector: 'app-experience',
  imports: [EnterpriseComponent, CenteringComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
