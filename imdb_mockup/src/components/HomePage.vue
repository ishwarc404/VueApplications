<template>
  <v-app>
    <NavBar />
    <br />
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Our favourites on</h1>
      </div>
      <div>
        <img src="./assets/netflix_logo.png" style="width:100px;" alt="" />
      </div>
    </div>

    <v-container v-if="movieData !== null">
      <MovieCards v-bind:movieData="movieData" />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import MovieCards from "./MovieCards";
// import database from "./assets/db.json";
import axios from "axios";
// let dataBaseReceived = {};
export default {
  name: "HomePage",
  components: {
    NavBar,
    MovieCards
  },

  data() {
    return {
      // dataBaseReceived: {},
      movieData: null
    };
  },
  async mounted() {
    let output = await axios.get("http://3.218.28.207/readMovieData");
    this.movieData = output.data;
    // .then(function(response) {
    //   this.movieData = response.data;
    //   // console.log(dataBaseReceived);
    // })
    // .catch(function(error) {
    //   // currentObj.output = error;
    //   console.log(error);
    // });
  }
};
</script>

<style scoped>
.top10text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  font-style: inherit;
  color: black;
  text-align: center;
}
</style>
