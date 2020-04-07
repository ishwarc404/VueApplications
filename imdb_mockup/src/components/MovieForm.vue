<template>
  <form action>
    <v-text-field
      v-model="movieData.name"
      label="Movie name"
      name="name"
      :error-messages="errors.first('name')"
      v-validate="'required'"
      outlined
    ></v-text-field>

    <v-menu
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="movieData.yearOfRelease"
          label="Date of Release"
          outlined
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="movieData.yearOfRelease" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
    <v-textarea v-model="movieData.plot" label="Plot" auto-grow required outlined></v-textarea>

    <v-select
      label="Select actor"
      :items="actorsList"
      v-model="movieData.actors"
      multiple
      outlined
      v-validate="'required'"
      name="Actors"
      :error-messages="errors.first('Actors')"
    ></v-select>

    <v-text-field
      v-model="movieData.poster"
      label="Poster URL"
      v-validate="'required|url'"
      name="Pos"
      :error-messages="errors.first('Pos')"
      outlined
    ></v-text-field>

    <v-btn color class="mr-4" v-on:click="sendDataToParent">Add Movie</v-btn>
  </form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name: "movieForm",
  props:["actorsList"],
  data() {
    return {
      movieData: {
        name: "",
        yearOfRelease: "",
        plot: "",
        poster: "",
        actors: []
      }
    };
  },
  methods: {
    sendDataToParent() {
      alert("Sending to Parent");
      this.$emit('movieToParent',this.movieData,"movies");
    }
  }
};
</script>

<style>
</style>