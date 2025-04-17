import ApiServiceBase from "../ApiServiceBase";
import {
  ICreateChildVaccineRequest,
  IGetChildVaccineRequest,
  IGetHospital,
  IUpdateVaccineRequest,
} from "./VaccineServiceModel";
class VaccineService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getInformation(request: IGetChildVaccineRequest) {
    return this.API.post("/vaccine/information", request);
  }
  getHospital(request: IGetHospital) {
    return this.API.post("/vaccine/hospitals", request);
  }
  createChildVaccine(request: ICreateChildVaccineRequest) {
    return this.API.post("/vaccine/create", request);
  }
  updateChildVaccine(request: IUpdateVaccineRequest) {
    return this.API.put("/vaccine/", request);
  }
}
export default VaccineService;
