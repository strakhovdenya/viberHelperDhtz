export interface IButton {
  Columns: number;
  Rows: number;
  BgColor: string;
  Text: string;
  TextSize: string;
  ActionType: string;
  ActionBody: string;
}

export interface IMenu {
  level: string;
  Type: string;
  Buttons: IButton[];
  Revision: number;
}

export interface IDtoForEditButton {
  level: string;
  button: IButton;
  buttonIndex: number;
}
