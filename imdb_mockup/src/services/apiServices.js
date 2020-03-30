import axios from "axios";

export default class ApiServices {
  async readFromDatabase() {
    let returnedData;
    returnedData = await axios
      .get("http://127.0.0.1:5000/readMovieData")
      .then(function(result) {
        return result.data;
      });

    return returnedData;
  }

  async writeToDatabase(data, type) {
    let returnedData;
    returnedData = await axios
      .post(`http://127.0.0.1:5000/add${type}Data`, data)
      .then(function() {
        return 200;
      });

    return returnedData;
  }
}
