import { inject } from '@angular/core';
import { JsonLoaderService } from './services/json-loader.service';

export function jsonInitializer(): () => Promise<void> {
  return () => inject(JsonLoaderService).load();
}
