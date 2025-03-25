import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isDevMode } from '@angular/core';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WhoIAmComponent } from './components/who-iam/who-iam.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { TheyTrustMeComponent } from './components/they-trust-me/they-trust-me.component';
import { StayInTouchComponent } from './components/stay-in-touch/stay-in-touch.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { TitleComponent } from './components/title/title.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { GridComponent } from './components/grid/grid.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    BurgerMenuComponent,
    IntroductionComponent,
    WhoIAmComponent,
    SoftSkillsComponent,
    StudiesComponent,
    TheyTrustMeComponent,
    StayInTouchComponent,
    LeftMenuComponent,
    RightMenuComponent,
    TitleComponent,
    NewProjectComponent,
    GridComponent,
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isGridVisible = false;

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (isDevMode()) {
      if (event.key === 'G' && event.shiftKey) {
        this.isGridVisible = !this.isGridVisible;
      }
    }
  }
}
