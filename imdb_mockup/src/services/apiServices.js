
import Api from "../api/index";
let apiInstance = new Api();

export default class ApiServices {
  async readFromDatabase(type) {
    let returnedData;
    returnedData = await apiInstance.instance.get(`${type}`);

    return returnedData.data;
  }

  async writeToDatabase(data, type) {
    let returnedData;
    returnedData = await apiInstance.instance.post(`${type}`, data);

    return returnedData;
  }

  async updateDatabase(data, type) {
    let returnedData;
    returnedData = await apiInstance.instance.put(`${type}/${data.id}`, data);

    return returnedData;
  }
}
