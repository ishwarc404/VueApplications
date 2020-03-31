<template>
  <v-row v-if="referenceData!=null">
    <v-col v-bind:key="movie.id" v-for="movie in movieData">
      <v-card class="mx-auto" width="500" maxheight="410">
        <div class="d-flex">
          <div>
            <v-card-text>
              <div>Movie Name</div>
              <p class="display-1 text--primary">{{ movie.name }}</p>
              <p>Year of Release: {{ movie.yearOfRelease }}</p>
              <div class="text--primary">{{ movie.plot }}</div>
              <br />
              <div>
                <b>Actors:</b>
              </div>
              <p v-bind:key="actor" v-for="actor in movie.actors">{{ referenceData[actor] }}</p>
            </v-card-text>
          </div>
          <div>
            <img :src="movie.poster" style="width:170px; padding-top:10px; padding-right:10px;" />
          </div>
        </div>
        <v-card-actions>
          <v-btn text>WATCH</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
//for id to value translation
import keyValueConversion from "../services/conversionService";
let conversionServiceObj = new keyValueConversion();

export default {
  name: "MovieCards",
  components: {},
  props: ["movieData"],
  data() {
    return {
      referenceData: null
    };
  },
  async created() {
    this.referenceData = await conversionServiceObj.keyToValue("actors");
  }
};
</script>

<style scoped></style>
