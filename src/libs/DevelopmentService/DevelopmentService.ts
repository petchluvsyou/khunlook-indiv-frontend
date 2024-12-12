import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import {
  IGetDevelopmentRequest,
  ISaveDevelopmentRequest,
  IDeleteDevelopmentRequest,
} from "./DevelopmentServiceModel";
class DevelopmentService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getDevelopment(request: IGetDevelopmentRequest) {
    return this.API.post("/development/information", request);
  }
  saveDevelopment(request: ISaveDevelopmentRequest) {
    return this.API.post("/development/save", request);
  }
  deleteDevelopment(request: IDeleteDevelopmentRequest) {
    return this.API.delete(
      `/development/${request.childpid}/${request.devcode}`
    );
  }
}
export default DevelopmentService;
