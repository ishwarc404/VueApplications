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
   <v-container class="d-flex ">
      <v-row>
        <v-col>
    <v-select
      label="Select actor"
      :items="actorList"
      v-model="movieData.actors"
      multiple
      outlined
      v-validate="'required'"
      name="Actors"
      :error-messages="errors.first('Actors')"
    ></v-select></v-col>
      &nbsp; &nbsp;
      <v-col>
      <v-btn color="secondary" dark v-on:click="dialog=true">ADD ACTORS</v-btn>
      </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" height="500" width="600" class="d-flex justidy-content-centre">
      <v-card width="450">
        <v-card-text>
          <actorForm v-on:refreshActors="refreshActors" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-text-field
      v-model="movieData.poster"
      label="Poster URL"
      v-validate="'required|url'"
      name="Pos"
      :error-messages="errors.first('Pos')"
      outlined
    ></v-text-field>

    <v-btn color class="mr-4" @click="submitData(movieData,'movies')">Add Movie</v-btn>
  </form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import submitDataServices from "../services/submitData";
import ApiServices from "../services/apiServices";
import actorForm from "./ActorForm";

export default {
  name: "movieForm",
  components: {
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
      dialog: false,
      actorList: [],
      actorsCompleteData: null
    };
  },
  methods: {
    async submitData(data, type) {
      let submitObj = new submitDataServices();
      await submitObj.SubmitFormData(data, type);
      this.$router.push("/"); //going back to home screen
    },
    async refreshActors(id) {
      console.log(" ID RECEIVED IS:", id);
      this.dialog = false;
      let APIobj = new ApiServices(); //calling the api service function
      this.actorsCompleteData = await APIobj.readFromDatabase("actors");

      //use id to find makes
      var i;
      for (i = 0; i < this.actorsCompleteData.length; i++) {
        if (this.actorsCompleteData[i].id == id) {
          this.actorList.push(this.actorsCompleteData[i].name);
          this.movieData.actors.push(this.actorsCompleteData[i].name);
        }
        
      }
    }
  },
  async created() {
    let APIobj = new ApiServices(); //calling the api service function
    this.actorsCompleteData = await APIobj.readFromDatabase("actors");
    var i;
    for (i = 0; i < this.actorsCompleteData.length; i++) {
      this.actorList.push(this.actorsCompleteData[i].name);
    }
  }
};
</script>

<style>
</style>