export interface IGetDevelopmentRequest {
  ageMin: number;
  ageMax: number;
  childpid: string | null;
  childbirth: string | null;
  childcorrectedbirth: string | null;
  loggedin: number;
  tableName: string;
}
export interface ISaveDevelopmentRequest {
  dateocc: string;
  childpid: string;
  childbirth: string;
  childcorrectedbirth: string;
  devcode: string;
  isUpdate: number;
}

export interface IDeleteDevelopmentRequest {
  childpid: string;
  devcode: string;
}

export interface ICurrentData {
  MIN_AGE_MONTH: string;
  MAX_AGE_MONTH: string;
  CODE: string;
  TYPE: string;
  AGE_MONTH_DESCRIPTION: string;
  DESCRIPTION: string;
  INFORMATION: string;
  TYPE_DESRIPTION: string;
  TBName: string;
  SCREENING: string;
}

export interface ICurrentSkills {
  CODE: string;
  TYPE: string;
  MIN_AGE_MONTH: string;
  MAX_AGE_MONTH: string;
  AGE_MONTH_DESCRIPTION: string;
  MONTH_AT_OCCURRED: string;
  DATE_OCCURRED: string;
  TBName: string;
}

export interface IGetDevelopmentChildrenRequest {
  mom_pid: string;
}
