import axios from "axios";

class AbstractService {
  constructor() {
    const token = sessionStorage.getItem("@App:token");

    let _service = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
      headers: {
        accept: "application/vnd.api+json",
        Authorization: `Bearer ${token}`,
      }
    });
    _service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = _service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    //console.log(error);
    if (401 === error.response.status) {
      
      sessionStorage.removeItem("@App:user");
      sessionStorage.removeItem("@App:access");
      sessionStorage.removeItem("@App:token");
      // window.location.reload();

      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error);
    }
  };

  get(path, payload) {
    return this.service.get(path, payload);
  }

  getIDI(path, payload) {
    return this.service.get(path, payload);
  }

  patch(path, payload) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        data: payload,
      });
  }

  post(path, payload) {
    return this.service
      .request({
        method: "POST",
        url: path,
        data: payload,
      });
  }

  put(path, payload) {
    return this.service
      .request({
        method: "PUT",
        url: path,
        data: payload,
      });
  }
}

export default AbstractService;