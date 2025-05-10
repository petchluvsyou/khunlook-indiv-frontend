import ApiServiceBase from "../ApiServiceBase";
import {
  IUserRegisterRequest,
  IUserLoginRequest,
  IUserLoginResponse,
  IGetUser,
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
  userGet(request: IGetUser) {
    return this.API.get(`/user/${request.userId}`);
  }
}
export default UserService;
