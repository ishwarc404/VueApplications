<template>
  <div class="navbar">
    <v-app-bar flat dark>
      <img
        src="./assets/IMDB_logo.png"
        style="width:80px; padding-right:15px;"
        alt=""
      />

      <h1>
        Ratings, Reviews and Where to watch the best movies
      </h1>
      <v-spacer></v-spacer>
      <v-btn text color="white" to="/">MOVIES</v-btn>
      <v-btn text color="white" to="actors">ACTORS</v-btn>
      <v-btn text color="white" to="reviews">REVIEWS</v-btn>
      <v-btn text color="white" to="add">ADD MORE</v-btn>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
}
</style>
