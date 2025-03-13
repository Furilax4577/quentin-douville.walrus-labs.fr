import { Component } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule, KeyValuePipe } from '@angular/common';

interface Groups {
  [key: string]: GroupsGroup[];
}

interface GroupsGroup {
  category: string;
  keywords: string[];
}

@Component({
  selector: 'app-skills',
  imports: [TagsComponent, KeyValuePipe, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  groups: Groups = {
    Frontend: [
      {
        category: 'Frameworks',
        keywords: ['Angular', 'AngularJS', 'Angular Universal'],
      },
      {
        category: 'UI/UX',
        keywords: [
          'Angular Material',
          'Figma',
          'Bulma',
          'Bootstrap',
          'Storybook',
          'Atomic Design',
        ],
      },
      {
        category: 'Langages',
        keywords: [
          'TypeScript',
          'JavaScript',
          'HTML/CSS',
          'SCSS',
          'LESS',
          'SASS',
        ],
      },
      {
        category: 'Performance & SEO',
        keywords: ['Lazy loading', 'Webpack', 'GraphQL'],
      },
    ],
    'Backend & API': [{ category: '', keywords: [] }],
    'DevOps & Outils': [{ category: '', keywords: [] }],
    'RGPD & Tracking': [{ category: '', keywords: [] }],
    Autres: [{ category: '', keywords: [] }],
  };

  private _selectedGroupKey = 'Frontend';

  isSelected(key: string) {
    return this._selectedGroupKey === key;
  }

  selectGroup(key: string) {
    this._selectedGroupKey = key;
  }

  selectedGroup(): GroupsGroup[] {
    return this.groups[this._selectedGroupKey];
  }
}
