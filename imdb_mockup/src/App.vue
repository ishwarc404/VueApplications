<template>
  <v-app>
    <NavBar />
    <br />
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Our favourites on</h1>
      </div>
      <div>
        <img
          src="./assets/netflix_logo.png"
          style="width:100px;"
          alt=""
        />
      </div>
    </div>

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
      movieData: database
    };
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
