export interface IGetDevelopmentRequest {
  ageMin: number;
  ageMax: number;
  childpid: string;
  childbirth: string;
  childcorrectedbirth: string;
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
