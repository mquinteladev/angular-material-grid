import { ButtonCommand } from './material-grid-button.command';

export class MaterialGridColumnCommand {

  public title: string;

  constructor(public commandButtons: ButtonCommand[], public columnName: string, public columnCSSClass: string = '') {

    const random = Math.random();

    this.title = columnName === '' ? 'Action_Hidden_Empty_Title' + random.toString() : columnName;
  }


}



