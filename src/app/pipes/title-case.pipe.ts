import { Pipe, PipeTransform } from '@angular/core';

// Converts strings to Title Case
@Pipe({ name: 'titleCase', pure: true })
export class TitleCasePipe implements PipeTransform {
  public transform(sentence: string): string {
    return sentence.split(' ').map((s: string) => {
      return `${s[0].toUpperCase()}${s.substring(1).toLowerCase()}`;
    }).join(' ');
  }
}
