<template>
  <div id="app">
    <!-- <HelloWorld></HelloWorld> -->
    <!-- msg is a prop -->
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// importing the HelloWorld component
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
   
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo one",
          completed: false
        },
        {
          id: 2,
          title: "Todo two",
          completed: false
        },
        {
          id: 3,
          title: "Todo three",
          completed: false
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
