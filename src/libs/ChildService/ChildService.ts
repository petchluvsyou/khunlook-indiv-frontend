import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import {
  IAddChildRequest,
  IEditChildRequest,
  IGetChildResponse,
} from "./ChildServiceModel";
class ChildService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getChildByID(user_pid: string) {
    return this.API.get<IGetChildResponse>(`/child/${user_pid}`);
  }
  addChild(request: IAddChildRequest) {
    return this.API.post("/child", request);
  }
  editChild(request: IEditChildRequest) {
    return this.API.post("/child/edit", request);
  }
}
export default ChildService;
