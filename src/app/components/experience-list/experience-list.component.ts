import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { Curriculum } from '../../interfaces';

@Component({
  selector: 'app-experience-list',
  imports: [CommonModule, ExperienceDetailsComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss',
})
export class ExperienceListComponent {
  public curriculum?: Curriculum;
  public competences: string[] = [
    'Home Assistant',
    'Arduino',
    'Nginx Proxy Manager',
    'Portainer',
    'DiskStation Manager',
    'Open Media Vault',
    'WSL 2',
    "Let's Encrypt",
    'DNS',
    'CDN',
    'VPS',
    'MQTT',
    'SQLite',
    'Jest',
    'Websockets',
    'JWT',
    'Windows',
    'Linux',
    'SSH',
    'HTTP',
    'HTTPS',
    'SSL',
    'HelmetJS',
    'Date FNS',
    'MomentJS',
  ];

  constructor(http: HttpClient) {
    http.get<Curriculum>('data.json').subscribe((res) => {
      this.curriculum = res;

      const competences = res.experiences.flatMap((item) => item.competences);

      this.competences = [...this.competences, ...new Set(competences)];
      console.log(this.competences);
    });
  }
}
