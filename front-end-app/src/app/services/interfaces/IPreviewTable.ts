export interface ITableTD {
  rez: number;
  col: number;
  row: number;
  text: string;
  bgColor: string;
  indexInMenu?: number;
}

export type TableTR = ITableTD[];
