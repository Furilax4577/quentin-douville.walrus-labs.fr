import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenceTagListComponent } from '../competence-tag-list/competence-tag-list.component';
import { Experience } from '../../interfaces';

@Component({
  selector: 'app-experience-details',
  imports: [CommonModule, CompetenceTagListComponent],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.scss',
})
export class ExperienceDetailsComponent {
  experience = input<Experience>();
}
