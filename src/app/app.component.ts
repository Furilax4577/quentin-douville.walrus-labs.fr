import { Component, HostListener } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { CommonModule } from '@angular/common';
import { isDevMode } from '@angular/core';
import { GridElementComponent } from './components/grid-element/grid-element.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { PointComponent } from './components/point/point.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TagsComponent } from './components/tags/tags.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    TitleComponent,
    CommonModule,
    GridElementComponent,
    SoftSkillComponent,
    PointComponent,
    EnterpriseComponent,
    SkillsComponent,
    TagsComponent,
    ExperienceComponent,
    BurgerMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  test: any[] = [];
  isGridVisible = false;

  constructor() {
    for (var i = 1; i < 400; i++) {
      this.test.push(i);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (isDevMode()) {
      if (event.key === 'G' && event.shiftKey) {
        this.isGridVisible = !this.isGridVisible;
      }
    }
  }
}
