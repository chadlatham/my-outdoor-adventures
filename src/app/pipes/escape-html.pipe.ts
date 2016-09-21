import { Pipe, PipeTransform } from '@angular/core';

// Escapes HTML string before using the inner-html binding
@Pipe({name: 'escapeHtml', pure: false})
export class EscapeHtmlPipe implements PipeTransform {
  public transform(value: any, args: any[] = []): string {
     return this.escapeHtml(value.toString());
  }

  private escapeHtml(unsafe: any) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//, '&#x2F;');
  }
}
