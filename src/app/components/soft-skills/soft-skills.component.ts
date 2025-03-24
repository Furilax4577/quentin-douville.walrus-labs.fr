import { Component } from '@angular/core';
import { SoftSkillComponent } from '../soft-skill/soft-skill.component';
import { InterestComponent } from '../interest/interest.component';

@Component({
  selector: 'app-soft-skills',
  imports: [SoftSkillComponent, InterestComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss',
})
export class SoftSkillsComponent {}
