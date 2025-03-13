import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soft-skill',
  imports: [],
  templateUrl: './soft-skill.component.html',
  styleUrl: './soft-skill.component.scss',
})
export class SoftSkillComponent {
  @Input({ required: true }) picto!: string;
}
