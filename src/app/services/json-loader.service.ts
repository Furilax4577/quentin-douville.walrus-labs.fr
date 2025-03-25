// json-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Curriculum } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class JsonLoaderService {
  private content!: Curriculum;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this.content = await firstValueFrom(
      this.http.get<Curriculum>('/data.json')
    );
  }

  getAll(): Curriculum {
    return this.content;
  }
}
