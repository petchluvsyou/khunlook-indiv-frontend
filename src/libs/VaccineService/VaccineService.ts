import ApiServiceBase from "../ApiServiceBase";
import {
  ICreateChildVaccineRequest,
  IGetChildVaccineRequest,
  IUpdateVaccineRequest,
} from "./VaccineServiceModel";
class VaccineService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getInformation(request: IGetChildVaccineRequest) {
    return this.API.post("/vaccine/information", request);
  }
  getHospital() {
    return this.API.post("/vaccine/hospital");
  }
  createChildVaccine(request: ICreateChildVaccineRequest) {
    return this.API.post("/vaccine/create", request);
  }
  updateChildVaccine(request: IUpdateVaccineRequest) {
    return this.API.put("/vaccine/", request);
  }
}
export default VaccineService;
