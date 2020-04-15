<template>
  <div class="formClass">
    <v-select :items="this.items" label="Select your addition" v-model="DatabaseAccess" solo></v-select>
    <v-container v-if="DatabaseAccess!=null && DatabaseAccess=='Movie'">
      <movieForm/>
    </v-container>

    <v-container v-if="DatabaseAccess!=null && DatabaseAccess=='Actor'">
      <actorForm/>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import movieForm from "./MovieForm";
import actorForm from "./ActorForm";

export default {
  components: {
    movieForm,
    actorForm
  },
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
      reviewData: {
        nameOfMovie: "",
        review: "",
        rating: null
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
    testFunc() {
      alert("SOMETHING");
      alert("Data received from movie form");
    },
    validation() {
      this.$validator.validateAll();
      if (this.errors.any()) {
        alert("Please fill in the form.");
        return;
      }
    }
  },
  watch: {
    DatabaseAccess: async function() {
      console.log(
        "Test watcher function for DatabaseAccess variable, new value is:",
        this.DatabaseAccess
      );
    }
  }
};
</script>

<style scoped>
.error {
  color: #9f3a38;
}

.formClass {
  width: 70%;
  padding-left: 30%;
}
</style>




1. Componentize
add form -submit(ishwar, 12/1/12, plot)
  - movie form --  ishwar, 12/1/12, plot
               - actor form 
  - actor form

2.VueX
