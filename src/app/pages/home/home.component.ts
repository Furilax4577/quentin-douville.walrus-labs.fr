import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { SoftSkillsComponent } from '../../components/soft-skills/soft-skills.component';
import { WhoIAmComponent } from '../../components/who-iam/who-iam.component';
import { StudiesComponent } from '../../components/studies/studies.component';
import { TheyTrustMeComponent } from '../../components/they-trust-me/they-trust-me.component';
import { StayInTouchComponent } from '../../components/stay-in-touch/stay-in-touch.component';
import { NewProjectComponent } from '../../components/new-project/new-project.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    IntroductionComponent,
    WhoIAmComponent,
    SoftSkillsComponent,
    StudiesComponent,
    TheyTrustMeComponent,
    StayInTouchComponent,
    TitleComponent,
    NewProjectComponent,
    SkillsComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
