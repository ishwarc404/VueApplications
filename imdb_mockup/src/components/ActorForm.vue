<template>
   <v-form >
      <v-text-field v-model="actorData.name" label="Actor name" required outlined></v-text-field>
      <v-text-field
        v-model="actorData.dateOfBirth"
        label="Date of Birth"
        type="date"
        required
        outlined
      ></v-text-field>
      <v-textarea v-model="actorData.bio" label="Bio" auto-grow required outlined></v-textarea>
      <v-select
        :items="this.movieList"
        label="Select movie"
        v-model="actorData.movies"
        multiple
        outlined
      ></v-select>
      <v-btn color class="mr-4" v-on:click="sendDataToParent">Add Actor</v-btn>
    </v-form>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name: "actorForm",
  props:["movieList"],
  data() {
    return {
      actorData: {
        name: "",
        dateOfBirth: "",
        bio: "",
        movies: []
      }
    };
  },
  methods: {
    sendDataToParent() {
      alert("Sending to Parent");
      this.$emit('actorToParent',this.actorData,"actors");
    }
  }
};
</script>

<style>
</style>