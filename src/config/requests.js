import axios from "axios";

export const HTTP_METHOD = {
  get: "GET",
  put: "PUT",
  post: "POST",
  delete: "DELETE",
  patch: "PATCH",
};

const getHeaders = () => ({});

export function call(method, url, data = {}) {
  return axios({
    method,
    url,
    data,
    headers: getHeaders(),
  });
}
