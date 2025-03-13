import { Component, HostListener } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { CommonModule } from '@angular/common';
import { isDevMode } from '@angular/core';
import { LeftAssideComponent } from './components/left-asside/left-asside.component';
import { RightAssideComponent } from './components/right-asside/right-asside.component';
import { GridComponent } from './components/grid/grid.component';
import { GridElementComponent } from './components/grid-element/grid-element.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { PointComponent } from './components/point/point.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TagsComponent } from './components/tags/tags.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [
    TitleComponent,
    CommonModule,
    LeftAssideComponent,
    RightAssideComponent,
    GridComponent,
    GridElementComponent,
    SoftSkillComponent,
    PointComponent,
    EnterpriseComponent,
    SkillsComponent,
    TagsComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isGridVisible = false;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (isDevMode()) {
      if (event.key === 'G' && event.shiftKey) {
        this.isGridVisible = !this.isGridVisible;
      }
    }
  }
}
