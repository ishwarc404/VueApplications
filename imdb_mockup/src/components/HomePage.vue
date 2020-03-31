<template>
  <v-app>
    <NavBar />
    <br />
    <!-- <div class="d-flex justify-center"> replace this -->
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Our favourites on</h1>
      </div>
      <div>
        <img src="./assets/netflix_logo.png" style="width:100px;" alt />
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
import ApiServices from "../services/apiServices";

export default {
  name: "HomePage",
  components: {
    NavBar,
    MovieCards
  },

  data() {
    return {
      movieData: null
    };
  },
  async mounted() {
    let APIobj = new ApiServices(); //calling the api service function
    this.movieData = await APIobj.readFromDatabase("movies");
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
