import ApiServiceBase from "../ApiServiceBase";
import {
  IUserRegisterRequest,
  IUserLoginRequest,
  IUserLoginResponse,
} from "./UserServiceModel";

class UserService extends ApiServiceBase {
  constructor(accessToken: string = "") {
    super(accessToken);
  }
  userRegister(request: IUserRegisterRequest) {
    return this.API.post("/user", request);
  }
  userLogin(request: IUserLoginRequest) {
    return this.API.post<IUserLoginResponse>("/auth", request);
  }
}
export default UserService;
