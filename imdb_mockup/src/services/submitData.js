import ApiServices from "../services/apiServices";
import keyValueConversion from "../services/conversionService";

export default class submitData {
  async SubmitFormData(data, type) {
    let conversionServiceObj = new keyValueConversion();
    let moviesIDReference = await conversionServiceObj.valueToKey("movies"); //{movieName: movieID}
    let actorsIDReference = await conversionServiceObj.valueToKey("actors"); //{actorName: actorID}

    let APIobj = new ApiServices();
    let moviesCompleteData = await APIobj.readFromDatabase("movies");
    let actorsCompleteData = await APIobj.readFromDatabase("actors");

    var i;
    let tempData = [];
    if (type == "movies") {
      for (i = 0; i < data.actors.length; i++) {
        tempData.push(actorsIDReference[data.actors[i]]);
      }
      data.actors = tempData; //replacing it
    } else {
      for (i = 0; i < data.movies.length; i++) {
        tempData.push(moviesIDReference[data.movies[i]]);
      }
      data.movies = tempData; //replacing it
    }


    let response = await APIobj.writeToDatabase(data, type);

    console.log(response);
    if (type == "actors") {
      for (i = 0; i < data.movies.length; i++) {
        //but we also need to update the contrary database
        //if we add a new actor and select a movie, his name should also be added to the movies database
        //we need to update each of these movies in the movies db
        let tempMovie = moviesCompleteData.filter(function(specificMovie) {
          if (specificMovie.id == data.movies[i]) {
            return specificMovie;
          }
        });
        // tempMovie now store a single dictionary of that movie
        //response containes the newly added data
        tempMovie[0]["actors"].push(response.data.id);
        console.log("MOVIE TO BE UPDATED:", tempMovie[0]);
        await APIobj.updateDatabase(tempMovie[0], "movies");
      }
    } else {
      for (i = 0; i < data.actors.length; i++) {
        let tempActor = actorsCompleteData.filter(function(specificActor) {
          if (specificActor.id == data.actors[i]) {
            return specificActor;
          }
        });
        tempActor[0].movies.push(response.data.id);
        console.log("ACTOR TO BE UPDATED:", tempActor[0]);
        await APIobj.updateDatabase(tempActor[0], "actors");
      }
    }

    return response;
  }
}
