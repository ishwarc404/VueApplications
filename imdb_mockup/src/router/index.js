import HomePage from "../components/HomePage.vue";
import ActorsPage from "../components/ActorsPage.vue";
import AddData from "../components/AddData.vue";


const definedRoutes = [
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/actors",
    component: ActorsPage
  },
  {
    path: "/add",
    component: AddData
  }
];

export default definedRoutes;
