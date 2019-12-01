import { IButtonCommandOperation } from './material-grid-ibutton-Command.operation';
export class ButtonCommand {
  // tslint:disable-next-line:max-line-length
  constructor(public buttonText: string, public operations: IButtonCommandOperation, public btnCssClass: string = '', public materialIcon: string = '') { }
}
