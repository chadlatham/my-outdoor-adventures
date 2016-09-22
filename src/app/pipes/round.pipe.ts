import { Pipe, PipeTransform } from '@angular/core';

// Rounds numbers
@Pipe({ name: 'round', pure: true })
export class RoundPipe implements PipeTransform {
  public transform(value: number, place: number): number {
    const factor = Math.pow(10, place);
    const tempNumber = value * factor;
    const roundedTempNumber = Math.round(tempNumber);

    return roundedTempNumber / factor;
  }
}
