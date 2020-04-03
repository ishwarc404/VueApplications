<template>

  <v-row v-if="referenceData!=null">
    <v-col v-bind:key="movie.id" v-for="movie in movieData">
      <v-card class="mx-start" width="500">
        <div class="d-flex">
          <div>
            <v-card-text>
              <div>Movie Name</div>
              <p class="display-1 text--primary">{{ movie.name }}</p>

              <p>Year of Release: {{ movie.yearOfRelease }}</p>
              <!-- <div class="movieBio">{{ movie.plot }}</div> -->
              <v-expansion-panels flat class="expansionPanel">
                <v-expansion-panel>
                  <v-expansion-panel-header>Bio:</v-expansion-panel-header>
                  <v-expansion-panel-content>{{ movie.plot }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <br />
              <div>
                <b>Actors:</b>
              </div>
              <span v-bind:key="actor" v-for="actor in movie.actors">{{ referenceData[actor]}} </span>
            </v-card-text>
          </div>
          <div>
            <img
              :src="movie.poster"
              style="width:170px; height:240px; padding-top:10px; padding-right:10px;"
            />
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

<style scoped>
.expansionPanel {
  width: 300px;
}
</style>
