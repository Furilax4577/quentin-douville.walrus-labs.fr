import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competence-tag-list',
  imports: [CommonModule],
  templateUrl: './competence-tag-list.component.html',
  styleUrl: './competence-tag-list.component.scss',
})
export class CompetenceTagListComponent {
  techColors: { [key: string]: string } = {
    'HTML/CSS': '#E44D26',
    Angular: '#DD0031',
    'Angular Material': '#1976D2',
    SCRUM: '#793BA3',
    Figma: '#F24E1E',
    TypeScript: '#3178C6',
    Javascript: '#F7DF1E',
    SCSS: '#CF649A',
    PDF: '#FF0000',
    'Angular Universal': '#0093C4',
    'AWS Lambda': '#FF9900',
    'AWS S3': '#FF9900',
    'AWS CloudFront': '#A243DD',
    Shopify: '#7AB55C',
    NodeJS: '#339933',
    ExpressJS: '#000000',
    Postman: '#FF6C37',
    PostgreSQL: '#336791',
    Docker: '#2496ED',
    'NodeJS Cluster': '#68A063',
    'Nginx Reverse Proxy': '#009639',
    'Load Balancing': '#666666',
    MongoDB: '#47A248',
    Mongoose: '#880000',
    SonarQube: '#4E9BCD',
    'API Restful': '#666666',
    Microservices: '#8759DF',
    KoaJS: '#33333D',
    Insomnia: '#4000BF',
    'Apollo GraphQL': '#311C87',
    GraphQL: '#E10098',
    'Bulma CSS': '#00D1B2',
    'Atomic Design': '#FFB8BB',
    Wordpress: '#21759B',
    '.NET': '#5C2D91',
    Kanban: '#007ACC',
    'Google Analitics': '#E37400',
    'Google Optimize': '#EA4335',
    'Google Tag Manager': '#246FDB',
    'A/B Testing': '#999999',
    'AT Internet Xiti': '#29357C',
    'Wonder Push': '#00B4FF',
    AngularJS: '#E23237',
    PHP: '#777BB4',
    Symfony: '#000000',
    MySQL: '#4479A1',
    Go: '#00ADD8',
    BoltDB: '#76B900',
    Webpack: '#8DD6F9',
    LESS: '#1D365D',
    SASS: '#CC6699',
    'Home Assistant': '#41BDF5',
    Arduino: '#00979D',
    'Nginx Proxy Manager': '#009639',
    Portainer: '#13B5EA',
    'DiskStation Manager': '#0082C9',
    'Open Media Vault': '#0390BD',
    'WSL 2': '#0078D4',
    "Let's Encrypt": '#003A70',
    DNS: '#666666',
    CDN: '#999999',
    VPS: '#3E5060',
    'Story Book': '#FF4785',
    Logstash: '#00A69B',
    Kibana: '#E8468B',
    Elastic: '#005571',
    Winston: '#6D6D6D',
    Pino: '#3BB143',
  };

  competences = input<string[]>();

  getTechColor(competence: string): string {
    return this.techColors[competence];
  }

  getContrastingTextColor(competence: string): string {
    const color = this.getTechColor(competence).replace('#', '');
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186 ? '#000000' : '#FFFFFF';
  }
}
