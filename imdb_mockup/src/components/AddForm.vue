<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation class="formClass">
      <v-text-field
        v-model="name"
        label="Movie name"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Year"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Plot"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Poster URL"
        required
        outlined
      ></v-text-field>

      <v-btn color="success" class="mr-4">
        Add Movie
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.formClass {
  width: 70%;
  padding-left: 30%;
}
</style>
