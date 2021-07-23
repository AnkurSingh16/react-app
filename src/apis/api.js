import axios from "axios";

// create instance of axios
const instance = axios.create({
  baseURL: "http://localhost:8001/v1",
});

export default {
  getData: (resource) =>
    instance({
      method: "GET",
      url: resource,
    }),
  postData: (resource, data) =>
    instance({
      method: "POST",
      url: resource,
      data: data,
    }),
};
