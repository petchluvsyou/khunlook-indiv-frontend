export interface ISummaryRequest {
  ageMin: number;
  ageMax: number;
  childpid: string;
  childbirth: string;
  childcorrectedbirth: string;
  loggedin: number;
  previous_chosen: string;
  tableName: string;
  childlowbtweigth: string;
}

export interface ISummaryResponse {
  success: boolean;
  development: Development;
  vaccine: Vaccine;
}

interface Vaccine {
  history: IVaccineHistoryItem[];
}

interface Development {
  content: ISummaryDevelopmentContentItem[];
  history: ISummaryDevelopmentHistoryItem[];
}

interface IVaccineHistoryItem {
  DESCRIPTION: string;
  DESCRIPTION_TH: string;
  DESCRIPTION_TABLE: string;
  IN_PLAN: number;
  VACCINETYPE: string;
  DATE_SERV: string;
  CODE: string;
  WEB_GRP_NAME: string;
  WEB_GRP_ORDER: number;
  GRP_NAME: string;
  AGE: number;
  AGE_MAX: number;
  HOSPITAL: string;
  HOSPITALCODE: string;
  AGE_MONTH: number;
}

export interface ISummaryDevelopmentContentItem {
  MIN_AGE_MONTH: number;
  MAX_AGE_MONTH: number;
  CODE: string;
  TYPE: number;
  AGE_MONTH_DESCRIPTION: string;
  DESCRIPTION: string;
  INFORMATION: string;
  TYPE_DESCRIPTION: string;
  TBName: string;
  SCREENING: number;
}

interface ISummaryDevelopmentHistoryItem {
  MAX_AGE_MONTH: number;
  CODE: string;
  TYPE: number;
  DATE_OCCURRED: string;
  MONTH_AT_OCCURRED: number;
  MONTH_AT_OCCURRED_CORRECTED: number;
}
