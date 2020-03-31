import ApiServices from "./apiServices";

let APIobj = new ApiServices(); //calling the api service function

export default class keyValueConversion {
  //this function will be used while displaying the movie and actor cards
  async keyToValue(type) {
    //ID is the ID for which we need the value
    //type is the type of parent db for that ID
    let dataRead = await APIobj.readFromDatabase(type);
    //we need to find name where id == ID in dataRead
    var i;
    let modifiedData = {};
    //looping through the dataRead list
    for (i = 0; i < dataRead.length; i++) {
      modifiedData[dataRead[i].id] = dataRead[i].name;
    }

    return modifiedData; // {1:SRk,2:amitabh}
  }
  //this function will be used while adding movies and actors to DB
  async valueToKey(type) {
    //ID is the ID for which we need the value
    //type is the type of parent db for that ID
    let dataRead = await APIobj.readFromDatabase(type);
    //we need to find name where id == ID in dataRead
    var i;
    let modifiedData = {};
    //looping through the dataRead list
    for (i = 0; i < dataRead.length; i++) {
      modifiedData[dataRead[i].name] = dataRead[i].id;
    }

    return modifiedData; // {1:SRk,2:amitabh}
  }
}
