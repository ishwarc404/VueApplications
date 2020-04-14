import Vuex from "vuex";
import Vue from "vue";
import movies from "./modules/movies";
import actors from "./modules/actors";

//load
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
    actors
  }
});
