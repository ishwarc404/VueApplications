<template>
  <v-app>
    <NavBar />
    <br />
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Our favourites actors</h1>
      </div>
    </div>

    <v-container v-if="movieData !== null">
      <ActorCards v-bind:movieData="movieData"/>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import ActorCards from "./ActorCards";
import ApiServices from "../services/apiServices";

export default {
  name: "HomePage",
  components: {
    NavBar,
    ActorCards
  },

  data() {
    return {
      movieData: null
    };
  },
  async mounted() {
    let APIobj = new ApiServices(); //calling the api service function
    this.movieData = await APIobj.readFromDatabase();
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
