import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import { IAddChildRequest, IGetChildResponse } from "./ChildServiceModel";
class ChildService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getChildByID(user_pid: string) {
    return this.API.get<IGetChildResponse>(`/child/${user_pid}`);
  }
  addChild(request: IAddChildRequest) {
    console.log(request);
    return this.API.post("/child", request);
  }
}
export default ChildService;
