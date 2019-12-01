import { DomSanitizer } from '@angular/platform-browser';
import { MaterialGridGenericColumn } from './material-grid-generic.column';

export class MaterialGridColumn extends MaterialGridGenericColumn {
  public sanitizer: DomSanitizer;
  commandButtons: any;
  columnCSSClass: any;
  constructor(private name: string, public field: string, public sort: boolean = false) {
    super(name);
  }

  getHtmlSort() {

    if (this.sort) {
      return 'mat-sort-header';
    }

    return '';

  }

}
