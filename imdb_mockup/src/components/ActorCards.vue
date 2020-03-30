<template>
  <v-row>
    <v-col v-bind:key="actor.id" v-for="actor in movieData.actors">
      <v-card class="mx-auto" width="300" maxheight="350">
        <div class="d-flex">
          <div>
            <v-card-text>
              <div>Actor Name</div>
              <p class="display-1 text--primary">{{ actor.name }}</p>
              <p>Date of Birth: {{ actor.dateOfBirth }}</p>
              <div>Bio:</div>
              <div class="text--primary">{{ actor.bio }}</div>
              <div>Movies:</div>
              <div class="text--primary" v-bind:key="movie.id" v-for="movie in actor.movies">{{ movie }}</div>

            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MovieCards",
  components: {},
  props: ["movieData"]
};
</script>

<style scoped></style>
