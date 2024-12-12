import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import { IUpdateVaccine } from "./VaccineServiceModel";
class VaccineService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getInformation() {
    return this.API.post("/vaccine/information");
  }
  getHospital() {
    return this.API.post("/vaccine/hospital");
  }
  updateChildVaccine(request: IUpdateVaccine) {
    return this.API.put("/vaccine/", request);
  }
}
export default VaccineService;
