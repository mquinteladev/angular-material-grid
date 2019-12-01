import { DomSanitizer } from '@angular/platform-browser';

export class MaterialGridColumn {
  public sanitizer: DomSanitizer;
  commandButtons: any;
  columnCSSClass: any;
  constructor(public name: string, public field: string, public sort: boolean = false) {

  }

  getHtmlSort() {

    if (this.sort) {
      return 'mat-sort-header';
    }

    return '';

  }

}
