import { JsonLoaderService } from './../../services/json-loader.service';
import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TagsComponent } from '../tags/tags.component';
import { Study } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studies',
  imports: [TitleComponent, TagsComponent, CommonModule],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent {
  studies: Study[];
  constructor(private jsonLoaderService: JsonLoaderService) {
    this.studies = this.jsonLoaderService.getCurriculum().studies;
  }
}
