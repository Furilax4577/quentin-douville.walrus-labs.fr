import { Component, HostListener } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { CommonModule } from '@angular/common';
import { isDevMode } from '@angular/core';
import { GridElementComponent } from './components/grid-element/grid-element.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WhoIAmComponent } from './components/who-iam/who-iam.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { InterestsComponent } from './components/interests/interests.component';

@Component({
  selector: 'app-root',
  imports: [
    TitleComponent,
    CommonModule,
    GridElementComponent,
    InterestsComponent,
    EnterpriseComponent,
    SkillsComponent,
    ExperienceComponent,
    BurgerMenuComponent,
    IntroductionComponent,
    WhoIAmComponent,
    SoftSkillsComponent,
    InterestsComponent,
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
