<template>
  <div>
    <v-form ref="form" lazy-validation class="formClass">
      <v-text-field
        v-model="movieName"
        label="Movie name"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="yearOfRelease"
        label="Year"
        required
        outlined
      ></v-text-field>
      <v-textarea v-model="plot" label="Plot" required outlined></v-textarea>
      <v-text-field
        v-model="poster"
        label="Poster URL"
        required
        outlined
      ></v-text-field>

      <v-btn color="" class="mr-4" @click="submitMovieData">
        Add Movie
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieName: "",
      yearOfRelease: "",
      plot: "",
      poster: ""
    };
  },
  methods: {
    submitMovieData() {
      //lets send all this data to the rest API
      let currentObj = this;
        this.axios
          .post("http://127.0.0.1:5000/addMovieData", {
            movieName: this.movieName,
            yearOfRelease: this.yearOfRelease,
            plot: this.plot,
            poster: this.poster
          })
          .then(function(response) {
            currentObj.output = response.data;
          })
          .catch(function(error) {
            currentObj.output = error;
          });

      console.log("DONE");

  

      //   this.$router.push("/"); //going back to home screen
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
