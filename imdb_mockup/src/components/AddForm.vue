<template>
  <div class="formClass">
    <v-select :items="this.items" label="Select your addition" v-model="DatabaseAccess" solo></v-select>
    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Movie'">
      <v-text-field v-model="movieData.name" label="Movie name" required outlined></v-text-field>
      <v-text-field v-model="movieData.yearOfRelease" label="Year" required outlined></v-text-field>
      <v-textarea v-model="movieData.plot" label="Plot" required outlined></v-textarea>
      <v-text-field v-model="movieData.poster" label="Poster URL" required outlined></v-text-field>
      <v-btn color class="mr-4" @click="submitData(movieData,'Movie')">Add Movie</v-btn>
    </v-form>
    <v-form ref="form" lazy-validation v-if="DatabaseAccess!=null && DatabaseAccess=='Actor'">
      <v-text-field v-model="actorData.name" label="Actor name" required outlined></v-text-field>
      <v-text-field v-model="actorData.dateOfBirth" label="Date of Birth" required outlined></v-text-field>
      <v-textarea v-model="actorData.bio" label="Bio" required outlined></v-textarea>
      <v-btn color class="mr-4" @click="submitData(actorData,'Actor')">Add Actor</v-btn>
    </v-form>
  </div>
</template>

<script>
import ApiServices from "../services/apiServices";

export default {
  data() {
    return {
      movieData: {
        name: "",
        yearOfRelease: "",
        plot: "",
        poster: ""
      },
      actorData: {
        name: "",
        dateOfBirth: "",
        bio: ""
      },
      items: ["Movie", "Actor"],
      DatabaseAccess: null
    };
  },
  methods: {
    async submitData(data, type) {
      console.log("got it", data);
      //lets send all this data to the rest API service
      let APIobj = new ApiServices();
      let response = await APIobj.writeToDatabase(data, type);
      if (response === 200) {
        this.$router.push("/"); //going back to home screen
      }
    }
  }
};
</script>

<style scoped>
.formClass {
  width: 70%;
  padding-left: 30%;
}
</style>
