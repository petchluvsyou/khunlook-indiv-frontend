import ApiServiceBase from "../ApiServiceBase";
import {
  IGrowthInformationRequest,
  IGrowthQueryResultRequest,
  IGrowthValidateRequest,
} from "./GrowthServiceModel";

class GrowthService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  growthInformation(request: IGrowthInformationRequest) {
    return this.API.post("/growth/information", request);
  }
  validate(request: IGrowthValidateRequest) {
    return this.API.post("/growth/validate", request);
  }
  queryResult(request: IGrowthQueryResultRequest) {
    return this.API.post("/growth/query-result", request);
  }
}
export default GrowthService;
