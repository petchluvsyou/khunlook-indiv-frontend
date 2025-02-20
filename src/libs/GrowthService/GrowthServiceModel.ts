export interface IGrowthInformationRequest {
  childpid: string;
}
export interface IGrowthValidateRequest {
  date: string;
  weight: number;
  height: number;
  hcir: number;
  hopsCode: string;
  childPid: string;
}

export interface IGrowthQueryResultRequest {
  sex: string;
  typeGraph: number;
  maxFirstGL?: number;
  minFirstGL?: number;
  maxSecondGL?: number;
  minSecondGL?: number;
  maxThirdGL?: number;
  minThirdGL?: number;
  HC_WHO?: number;
  HC?: number;
}
