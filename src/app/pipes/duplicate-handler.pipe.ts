import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duplicateHandler' })
export class DuplicateHandlerPipe implements PipeTransform {
  transform(name: string): string {
    // very very lost
  return null;
  }
}
