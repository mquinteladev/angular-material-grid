import { ButtonCommand } from './material-grid-button.command';


export class MaterialViewGridColumn {
  // tslint:disable-next-line:max-line-length
  constructor(
    public columnName: string = '',
    public field: string = '',
    public sort: boolean = false,
    public commandButtons: ButtonCommand[],
    public columnCSSClass: string = '',
    public columnType: ColumnType = ColumnType.Column) {
  }
}

export enum ColumnType {
  Column = 'Column',
  Command = 'Command'
}
