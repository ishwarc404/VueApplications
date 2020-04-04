<template>
  <v-app>
    <NavBar />
    <br />
    <!-- <div class="d-flex justify-center"> replace this -->
    <div class="d-flex justify-center">
      <div>
        <h1 class="top10text">Movie Reviews</h1>
      </div>
    </div>

    <v-container>
      <ReviewCards v-bind:reviewData="reviewData" />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./NavBar";
import ReviewCards from "./ReviewCards";
import ApiServices from "../services/apiServices";

export default {
  name: "ReviewPage",
  components: {
    NavBar,
    ReviewCards
  },

  data() {
    return {
      reviewData: null
    };
  },
  async created() {
    let APIobj = new ApiServices(); //calling the api service function
    this.reviewData = await APIobj.readFromDatabase("reviews");
  }
};
</script>

<style>
</style>