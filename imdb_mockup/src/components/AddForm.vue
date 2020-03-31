<template>
  <div class="formClass">
    <v-select :items="this.items" label="Select your addition" v-model="DatabaseAccess" solo></v-select>
    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Movie'">
      <v-text-field v-model="movieData.name" label="Movie name" required outlined></v-text-field>
      <v-text-field v-model="movieData.yearOfRelease" label="Year" required outlined></v-text-field>
      <v-textarea v-model="movieData.plot" label="Plot" required outlined></v-textarea>
      <v-select
        :items="this.actorList"
        label="Select actor"
        v-model="movieData.actors"
        multiple
        outlined
      ></v-select>
      <v-text-field v-model="movieData.poster" label="Poster URL" required outlined></v-text-field>
      <v-btn color class="mr-4" @click="submitData(movieData,'Movie')">Add Movie</v-btn>
    </v-form>
    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Actor'">
      <v-text-field v-model="actorData.name" label="Actor name" required outlined></v-text-field>
      <v-text-field v-model="actorData.dateOfBirth" label="Date of Birth" required outlined></v-text-field>
      <v-textarea v-model="actorData.bio" label="Bio" required outlined></v-textarea>
      <v-select
        :items="this.movieList"
        label="Select movie"
        v-model="actorData.movies"
        multiple
        outlined
      ></v-select>
      <v-btn color class="mr-4" @click="submitData(actorData,'Actor')">Add Actor</v-btn>
    </v-form>
  </div>
</template>

<script>
import ApiServices from "../services/apiServices";

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
      actorList: []
    };
  },
  methods: {
    async submitData(data, type) {
      console.log("got it", data);
      //lets send all this data to the rest API service
      let APIobj = new ApiServices();
      let response = await APIobj.writeToDatabase(data, type);
      if (response === 200) {
        this.$router.push("/"); //going back to home screen
      }
    }
  },
  async created() {
    let APIobj = new ApiServices(); //calling the api service function
    let Data = await APIobj.readFromDatabase("movies");
    var i;
    for (i = 0; i < Data.length; i++) {
      this.movieList.push(Data[i].name);
    }
     Data = await APIobj.readFromDatabase("actors");
    for (i = 0; i < Data.length; i++) {
      this.actorList.push(Data[i].name);
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
