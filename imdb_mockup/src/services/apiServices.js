// import axios from "axios";
import Api from "../api/index";
let apiInstance = new Api();

export default class ApiServices {
  async readFromDatabase() {
    let returnedData;
    returnedData = await apiInstance.instance.get("readMovieData");

    return returnedData.data;
  }

  async writeToDatabase(data, type) {
    let returnedData;
    returnedData = await apiInstance.instance.post(`add${type}Data`, data);

    return returnedData;
  }
}
