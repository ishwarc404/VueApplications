import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import definedRoutes from "./router/index";

Vue.config.productionTip = false;
Vue.use(VueRouter); //enabling routing



const router = new VueRouter({
  routes: definedRoutes,
  mode: "history"
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
