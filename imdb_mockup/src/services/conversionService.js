import ApiServices from "./apiServices";

let APIobj = new ApiServices(); //calling the api service function

export default class keyValueConversion {
  async keyToValue(ID, type) {
    //ID is the ID for which we need the value
    //type is the type of parent db for that ID
    let dataRead = await APIobj.readFromDatabase(type);
    //we need to find name where id == ID in dataRead
    var i;
    //looping through the dataRead list
    for (i = 0; i < dataRead.length; i++) {
      if (dataRead[i].id == ID) {
        console.log("in loop: ",dataRead[i].name);
        return dataRead[i].name;
      }
    }
  }
}
