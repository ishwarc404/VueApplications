<template>
  <div class="formClass">
    <v-select :items="this.items" label="Select your addition" v-model="DatabaseAccess" solo></v-select>
    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Movie'">
      <v-text-field v-model="movieData.name" label="Movie name" v-validate="'required'" outlined></v-text-field>
      <v-text-field v-model="movieData.yearOfRelease" label="Year" type="date" required outlined></v-text-field>
      <v-textarea v-model="movieData.plot" label="Plot" required outlined></v-textarea>
      <v-select
        :items="this.actorList"
        label="Select actor"
        v-model="movieData.actors"
        multiple
        outlined
      ></v-select>
      <v-text-field v-model="movieData.poster" label="Poster URL" required outlined></v-text-field>
      <v-btn color class="mr-4" @click="submitData(movieData,'movies')">Add Movie</v-btn>
    </v-form>

    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Actor'">
      <v-text-field v-model="actorData.name" label="Actor name" required outlined></v-text-field>
      <v-text-field
        v-model="actorData.dateOfBirth"
        label="Date of Birth"
        type="date"
        required
        outlined
      ></v-text-field>
      <v-textarea v-model="actorData.bio" label="Bio" required outlined></v-textarea>
      <v-select
        :items="this.movieList"
        label="Select movie"
        v-model="actorData.movies"
        multiple
        outlined
      ></v-select>
      <v-btn color class="mr-4" @click="submitData(actorData,'actors')">Add Actor</v-btn>
    </v-form>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import ApiServices from "../services/apiServices";
import keyValueConversion from "../services/conversionService";
let conversionServiceObj = new keyValueConversion();

export default {
  data() {
    return {
      movieData: {
        name: "",
        yearOfRelease: "",
        plot: "",
        poster: "",
        actors: []
      },
      actorData: {
        name: "",
        dateOfBirth: "",
        bio: "",
        movies: []
      },
      items: ["Movie", "Actor"],
      DatabaseAccess: null,
      movieList: [],
      actorList: [],
      moviesIDReference: null,
      actorsIDReference: null,
      moviesCompleteData: null,
      actorsCompleteData: null
    };
  },
  methods: {
    async submitData(data, type) {
      console.log("got it", data);
      //lets send all this data to the rest API service
      //need to replace names with values in data.type
      console.log("got it again", type);
      var i;
      let tempData = [];
      if (type == "movies") {
        for (i = 0; i < data.actors.length; i++) {
          tempData.push(this.actorsIDReference[data.actors[i]]);
        }
        data.actors = tempData; //replacing it
      } else {
        for (i = 0; i < data.movies.length; i++) {
          // console.log("MOVIE NAME IS: ", data.movies[i]);
          // console.log("REFERENCE IS: ", this.moviesIDReference);
          // console.log("ID IS:", this.moviesIDReference[data.movies[i]]);
          tempData.push(this.moviesIDReference[data.movies[i]]);
        }
        data.movies = tempData; //replacing it
      }

      let APIobj = new ApiServices();
      let response = await APIobj.writeToDatabase(data, type);
      console.log(response);
      if (type == "actors") {
        for (i = 0; i < data.movies.length; i++) {
          //but we also need to update the contrary database
          //if we add a new actor and select a movie, his name should also be added to the movies database
          //we need to update each of these movies in the movies db
          let tempMovie = this.moviesCompleteData.filter(function(
            specificMovie
          ) {
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
          let tempActor = this.actorsCompleteData.filter(function(
            specificActor
          ) {
            if (specificActor.id == data.actors[i]) {
              return specificActor;
            }
          });
          tempActor[0].movies.push(response.data.id);
          console.log("ACTOR TO BE UPDATED:", tempActor[0]);
          await APIobj.updateDatabase(tempActor[0], "actors");
        }
      }

      this.$router.push("/"); //going back to home screen
    }
  },
  async created() {
    this.moviesIDReference = await conversionServiceObj.valueToKey("movies"); //{movieName: movieID}
    this.actorsIDReference = await conversionServiceObj.valueToKey("actors"); //{actorName: actorID}
  },
  watch: {
    DatabaseAccess: async function() {
      console.log(
        "Test watcher function for DatabaseAccess variable, new value is:",
        this.DatabaseAccess
      );
      let APIobj = new ApiServices(); //calling the api service function
      if (this.DatabaseAccess == "Actor") {
        this.moviesCompleteData = await APIobj.readFromDatabase("movies");
        var i;
        for (i = 0; i < this.moviesCompleteData.length; i++) {
          this.movieList.push(this.moviesCompleteData[i].name);
        }
      } else {
        this.actorsCompleteData = await APIobj.readFromDatabase("actors");
        for (i = 0; i < this.actorsCompleteData.length; i++) {
          this.actorList.push(this.actorsCompleteData[i].name);
        }
      }
    }
  }
};
</script>

<style scoped>
.formClass {
  width: 70%;
  padding-left: 30%;
}
</style>
