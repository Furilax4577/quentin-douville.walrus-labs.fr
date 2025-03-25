import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, TagComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  @Input() tags: string[] = [];
  @Input() title?: string;
  @Input() bgColor?: string;
  @Input() textColor?: string;
  @Input() centering?: boolean;
}
