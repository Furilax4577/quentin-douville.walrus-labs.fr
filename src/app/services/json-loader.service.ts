// json-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, tap } from 'rxjs';
import { Curriculum } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class JsonLoaderService {
  private curriculum!: Curriculum;
  private competences: string[] = [];

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this.curriculum = await firstValueFrom(
      this.http.get<Curriculum>('/data.json').pipe(
        tap((curriculum) => {
          curriculum.experiences.forEach((experience) => {
            this.competences = [
              ...new Set([...this.competences, ...experience.competences]),
            ];
          });
        })
      )
    );
  }

  getCurriculum(): Curriculum {
    return this.curriculum;
  }

  getCompetences(): string[] {
    return this.competences;
  }
}
