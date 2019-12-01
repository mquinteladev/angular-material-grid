import { ButtonCommand } from './material-grid-button.command';
import { MaterialGridGenericColumn } from './material-grid-generic.column';

export class MaterialGridColumnCommand extends MaterialGridGenericColumn {

  public title: string;

  constructor(public commandButtons: ButtonCommand[], private name: string, public columnCSSClass: string = '') {
    super(name);
    const random = Math.random();
    this.title = this.columnName === '' ? 'Action_Hidden_Empty_Title' + random.toString() : this.columnName;
  }


}



