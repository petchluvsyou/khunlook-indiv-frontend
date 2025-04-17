export interface IUpdateVaccineRequest {
  vaccineplace: string;
  childpid: string;
  vaccinetype: string;
  vaccinated_date: string;
  prev_dateserv: string;
  months?: string;
}

export interface ICreateChildVaccineRequest {
  vaccineplace: string;
  childpid: string;
  vaccinetype: string;
  vaccinated_date: string;
  months?: string;
}

export interface IGetChildVaccineRequest {
  childpid?: string;
  isinplan: string;
  loggedin: number;
  previous_chosen?: string;
}

export interface IGetVaccine {
  AGE: number;
  AGE_MAX: number;
  AGE_MONTH: number;
  CODE: string;
  DATE_SERV: string;
  DESCRIPTION: string;
  DESCRIPTION_TABLE: string;
  DESCRIPTION_TH: string;
  GRP_NAME: string;
  HOSPITAL: string;
  HOSPITALCODE: string;
  IN_PLAN: string;
  VACCINETYPE: string;
  WEB_GRP_NAME: string;
  WEB_GRP_ORDER: number;
}

export interface VaccineInterval {
  name: string;
  startAge: number;
  endAge: number;
  [key: string]: any;
}

export interface Vaccine {
  groupName: string;
  intervals: VaccineInterval[];
}

export interface IGetHospital {
  search: string;
  momcid: string;
}

export interface IHospital {
  id: string;
  text: string;
}
