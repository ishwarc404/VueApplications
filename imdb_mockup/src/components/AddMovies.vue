<template>
  <v-app>
    <NavBar />
    <br />
    <div class="d-flex justify-center">
      <h1 class="top10text">Add Movies</h1>
    </div>
    <br>
    
    <AddForm/>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import AddForm from "./AddForm";

export default {
  name: "AddMovies",
  components: {
    NavBar,
    AddForm
  }
};
</script>

<style scoped></style>
