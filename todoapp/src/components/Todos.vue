<template>
  <div>
    <h1>TO DOs</h1>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"],
  components: {}
};
</script>


<style lang="stylus" scoped></style>