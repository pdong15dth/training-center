import { ILoginResponse, TReqLogin } from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class AdminRequestService {
  constructor() {}

  loginMethod(data: TReqLogin) {
    const uri = "admin/system/login";
    return axiosService.postMethod<TReqLogin, ILoginResponse, TReqLogin>(uri, data);
  }

  //News Page
  getListCategories(id) {
    //https://api.dtc-project.tk/api/admin/child_category/1/views
    const uri = `admin/child_category/${id}/views`;
    return axiosService.getMethod(uri);

  }
  createNewsMethod(data) {
    const uri = "admin/article/create";
    return axiosService.postMethod(uri, data);
  }
}

const adminReqService = new AdminRequestService();
export default adminReqService;
