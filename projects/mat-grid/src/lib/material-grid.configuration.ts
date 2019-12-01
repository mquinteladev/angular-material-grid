
import { MaterialViewGridColumn } from './material-grid-view.column';
import { MaterialGridColumn } from './material-grid.column';
import { MaterialGridColumnCommand } from './material-grid-column.command';
import { ColumnType } from './ColumnType';

export class MaterialGridConfiguration {


  private data: any;

  viewColumns: MaterialViewGridColumn[] = [];

  displayedColumns: string[] = [];

  fieldsColumns: string[] = [];

  constructor(
    public columns: (MaterialGridColumn | MaterialGridColumnCommand)[],
    private pageSizeOptions: number[]) {
    this.setColumns();
  }

  setColumns() {
    const scope = this;
    this.displayedColumns = [];
    this.fieldsColumns = [];
    this.columns.forEach((column) => {
      if ((column as MaterialGridColumnCommand).columnCSSClass === undefined) {
        scope.displayedColumns.push((column as MaterialGridColumn).columnName);
        scope.fieldsColumns.push((column as MaterialGridColumn).field);

        // tslint:disable-next-line:max-line-length
        scope.viewColumns.push(new MaterialViewGridColumn((column as MaterialGridColumn).columnName, (column as MaterialGridColumn).field, (column as MaterialGridColumn).sort, [], (column as MaterialGridColumn).columnCSSClass));
      } else {
        const commonValue = (column as MaterialGridColumnCommand).title;
        scope.displayedColumns.push(commonValue);
        scope.fieldsColumns.push(commonValue);
        // tslint:disable-next-line:max-line-length
        scope.viewColumns.push(new MaterialViewGridColumn(commonValue, commonValue, false, (column as MaterialGridColumn).commandButtons, (column as MaterialGridColumnCommand).columnCSSClass, ColumnType.Command));
      }
    });
  }

  getColumnsName(): string[] {
    return this.displayedColumns;
  }

  getColumnsFieldsName(): string[] {
    return this.fieldsColumns;
  }

  getPageSizeOptions(): number[] {
    return this.pageSizeOptions;
  }

  getColumns(): MaterialViewGridColumn[] {
    if (this.viewColumns) {
      return this.viewColumns;
    }
    return [];
  }

  dataSource(): any {
    return this.data;
  }

}
