<template>
  <v-app>
    <NavBar />
    <h1 class="top10text">IMDb Top 10</h1>
    <v-container>
      <MovieCards v-bind:movieData="movieData" />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import MovieCards from "./components/MovieCards";
import database from "./components/assets/db.json";

console.log(database);
export default {
  name: "App",

  components: {
    NavBar,
    MovieCards
  },

  data() {
    return {
      movieData: database.movies
    };
  }
};
</script>

<style scoped>
.top10text {
  font-family: Helvetica;
  font-size: 50px;
  text-align: center;
}
</style>
