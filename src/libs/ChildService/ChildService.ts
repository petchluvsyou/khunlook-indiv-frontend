import axios from "axios";
import ApiServiceBase from "../ApiServiceBase";
import { IAddChildRequest } from "./ChildServiceModel";
class ChildService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  addChild(request: IAddChildRequest) {
    console.log(request);
    return this.API.post("/child", request);
  }
}
export default ChildService;
