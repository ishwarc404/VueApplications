<template>
  <v-app>
    <NavBar />
    <br />
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Our favourites actors</h1>
      </div>
    </div>

    <v-container>
      <v-text-field v-model="search" label="Search" single-line outlined v-on:input="filter"></v-text-field>
      <br />
    </v-container>

    <v-container v-if="actorData !== null">
      <ActorCards v-bind:actorData="allActors" />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import ActorCards from "./ActorCards";
import ApiServices from "../services/apiServices";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",
  methods: {
    ...mapActions(["fetchActors", "filterActorFunction"]),
    filter() {
      this.filterActorFunction(this.search);
    }
  },
  computed: mapGetters(["allActors"]),
  components: {
    NavBar,
    ActorCards
  },

  data() {
    return {
      actorData: null,
      search: ""
    };
  },
  async mounted() {
    this.fetchActors();

    let APIobj = new ApiServices(); //calling the api service function
    this.actorData = await APIobj.readFromDatabase("actors");
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
