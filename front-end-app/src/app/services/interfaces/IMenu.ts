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

export interface IDtoForEditButtonPart {
  button: IButton;
  buttonIndex: number;
}

export interface IDtoForEditButton {
  level: string;
  old: IDtoForEditButtonPart;
  new: IDtoForEditButtonPart;
}
