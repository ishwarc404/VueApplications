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

    <v-container>
      <v-text-field v-model="search" label="Search" single-line outlined="" v-on:input="filter"></v-text-field>
      <br/>
    </v-container>

    <v-container v-if="movieData !== null">
      <MovieCards v-bind:movieData="allMovies" />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import MovieCards from "./MovieCards";
import ApiServices from "../services/apiServices";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",
  components: {
    NavBar,
    MovieCards
  },
  computed: mapGetters(["allMovies"]),

  data() {
    return {
      search:null,
      movieData: null
    };
  },
  methods: {
    ...mapActions(["fetchMovies", "filterFunction", "unfilterFunction"]),
    filter() {
      this.filterFunction(this.search);
    },
    unfilter() {
      this.unfilterFunction();
    }
  },
  async created() {
    this.fetchMovies();
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
.v-text-field{
      width: 400px;
}
</style>
