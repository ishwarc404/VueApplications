<template>
  <v-container fluid>
    <v-row>
      <v-col v-bind:key="actor.id" v-for="actor in actorData">
        <v-card width="300">
          <div>
            <div>
              <v-card-text>
                <div>Actor Name</div>
                <p class="display-1 text--primary">{{ actor.name }}</p>
                <p>Date of Birth: {{ actor.dateOfBirth }}</p>
                <div>Bio:</div>
                <div class="text--primary">{{ actor.bio }}</div>
                <div>Movies:</div>
                <div
                  class="text--primary"
                  v-bind:key="movieID"
                  v-for="movieID in actor.movies"
                >{{ referenceData[movieID] }}</div>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import keyValueConversion from "../services/conversionService";
let conversionServiceObj = new keyValueConversion();

export default {
  name: "MovieCards",
  components: {},
  props: ["actorData"],
  data() {
    return {
      referenceData: null
    };
  },
  async created() {
    this.referenceData = await conversionServiceObj.keyToValue("movies");
  }
};
</script>

<style scoped>
.container {
  justify-content: space-around;
}
</style>
