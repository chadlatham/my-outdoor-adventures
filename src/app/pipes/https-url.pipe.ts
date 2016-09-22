import { Pipe, PipeTransform } from '@angular/core';

// Rounds numbers
@Pipe({ name: 'httpsUrl', pure: true })
export class HttpsUrlPipe implements PipeTransform {
  public transform(url: string): string {
    return url.replace(/^http:/, 'https:');
  }
}
