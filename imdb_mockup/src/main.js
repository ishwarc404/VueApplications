import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import HomePage from "./components/HomePage.vue"
import AddMovies from "./components/AddMovies.vue"

//axios for sending and receiving data
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueAxios, axios)
   
// ApiServices.testfunction()

Vue.config.productionTip = false;
Vue.use(VueRouter); //enabling routing

const routes = [
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/add",
    component: AddMovies
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
