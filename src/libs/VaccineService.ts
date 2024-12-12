import axios from "axios";
import ApiServiceBase from "./ApiServiceBase";
class VaccineService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
}
