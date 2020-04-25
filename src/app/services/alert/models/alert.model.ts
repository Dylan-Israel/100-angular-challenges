import { AlertTypes } from './enums/alert-types.enum';

export class Alert {
  public type: AlertTypes;
  public title: string;
  public content: string;

  constructor(data: any = {}) {
    this.type = data.type ? data.type : AlertTypes.Info;
    this.title = data.title ? data.title : '';
    this.content = data.content ? data.content : '';
  }
}
