export interface IAddChildRequest {
  momcid: number;
  childcid: number;
  childpid: string;
  childhospcode: string;
  childname: string;
  datepickerchild: string;
  sexchild: string;
  gaweek: number;
  childfullname: string;
  childbtime: string;
  childabo: string;
  childrh: string;
  childmemo: string;
  lowbtweigth: number;
  birthAsphyxia: string;
}

export interface IGetChildResponse {
  message: string;
  data: IChildData[];
  success: number;
}
export interface IChildData {
  HOSPCODE: string;
  CID: string;
  PID: string;
  NAME: string;
  LNAME: string;
  SEX: string; // Assuming SEX is a string, you can change it to a number if needed
  BIRTH: string; // ISO 8601 date string (can be Date type if you prefer parsing it)
  ABOGROUP: string; // Assuming ABO blood group is stored as a string
  RHGROUP: string; // Assuming RH group is stored as a string
  GA: number; // Gestational age (assumed to be a number)
  BTIME: string; // Assuming this is a time string in 'HHMMSS' format
  MEMO: string;
  BWEIGHT: number; // Birth weight (assumed to be a number)
  ASPHYXIA: string; // Assuming asphyxia is stored as a string
}
