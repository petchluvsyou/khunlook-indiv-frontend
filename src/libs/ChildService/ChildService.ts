import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import { IAddChildRequest } from "./ChildServiceModel";
class ChildService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  getChildByID(user_id: number) {
    return this.API.get(`/:${user_id}`);
  }
  addChild(request: IAddChildRequest) {
    return this.API.post("/child", request);
  }
}
export default ChildService;
