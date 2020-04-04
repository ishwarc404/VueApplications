<template>
  <v-row>
    <v-col v-bind:key="review.id" v-for="review in reviewData">
      <v-card class="mx-start" width="500">
        <div class="d-flex">
          <div>
            <v-card-text>
              <p class="display-1 text--primary">{{ review.nameOfMovie }}</p>
              <!-- <div class="reviewBio">{{ review.plot }}</div> -->
              <h3>Review:</h3>
              {{ review.review }}
              <br />
              <br />
              <div>
                <h3>Rating: {{review.rating}}</h3>
                <v-rating v-model="review.rating" length="5"  color="yellow accent-4" readonly></v-rating>
              </div>
            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "reviewCards",
  components: {},
  props: ["reviewData"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.expansionPanel {
  width: 300px;
}
</style>
