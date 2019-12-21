import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  /* TODO: Need to update baseUrl*/
  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token
    }
  });
};
