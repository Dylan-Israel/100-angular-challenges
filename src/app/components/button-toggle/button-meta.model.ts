export class ButtonMeta {
  public readonly id: string;
  public title: string;
  public isActive: boolean;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title ? data.title : '';
    this.isActive = data.isActive ? data.isActive : false;
  }
}
