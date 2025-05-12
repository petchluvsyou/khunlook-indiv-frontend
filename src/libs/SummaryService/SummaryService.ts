import ApiServiceBase from "../ApiServiceBase";
import { ISummaryRequest, ISummaryResponse } from "./SummaryServiceModel";

class SummaryService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getSummaryInfo(request: ISummaryRequest) {
    return this.API.post<ISummaryResponse>(
      "/summary/development-vaccine/info",
      request
    );
  }
}
export default SummaryService;
