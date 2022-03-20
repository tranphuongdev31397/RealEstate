import axiosClient from "./axiosClient";

export const propertiesApi = {
  getAll: (params) => {
    const url = "properties/list";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const params = {
      externalID: `${id}`,
    };
    const url = `properties/detail`;
    return axiosClient.get(url, { params });
  },
};
