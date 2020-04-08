<template>
  <v-form>
    <v-text-field
      v-model="actorData.name"
      label="Actor name"
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
          v-model="actorData.dateOfBirth"
          label="Date of Birth"
          outlined
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="actorData.dateOfBirth" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>

    <v-textarea v-model="actorData.bio" label="Bio" auto-grow required outlined></v-textarea>
    <v-select :items="movieList" label="Select movie" v-model="actorData.movies" multiple outlined></v-select>
    <v-btn color class="mr-4" @click="submitData(actorData,'actors')">Add Actor</v-btn>
  </v-form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import submitDataServices from "../services/submitData";
import ApiServices from "../services/apiServices";

export default {
  name: "actorForm",
  data() {
    return {
      actorData: {
        name: "",
        dateOfBirth: "",
        bio: "",
        movies: []
      },
      movieList: [],
      moviesCompleteData: null
    };
  },
  methods: {
    async submitData(data, type) {
      let submitObj = new submitDataServices();
      let response  = await submitObj.SubmitFormData(data, type);
      this.$emit("refreshActors",response.data.id);
    }
  },
  async created() {
    let APIobj = new ApiServices(); //calling the api service function
    this.moviesCompleteData = await APIobj.readFromDatabase("movies");
    var i;
    for (i = 0; i < this.moviesCompleteData.length; i++) {
      this.movieList.push(this.moviesCompleteData[i].name);
    }
  }
};
</script>

<style>
</style>