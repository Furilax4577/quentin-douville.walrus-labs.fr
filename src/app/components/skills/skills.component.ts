import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TagsComponent } from '../tags/tags.component';
import { JsonLoaderService } from '../../services/json-loader.service';

@Component({
  selector: 'app-skills',
  imports: [TitleComponent, TagsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  competences!: string[];

  constructor(private jsonLoaderService: JsonLoaderService) {
    this.competences = this.jsonLoaderService.getCompetences();
  }
}
