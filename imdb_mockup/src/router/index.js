import HomePage from "../components/HomePage.vue";
import ActorsPage from "../components/ActorsPage.vue";
import ReviewPage from "../components/ReviewPage.vue";
import AddData from "../components/AddData.vue";

const definedRoutes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/actors",
    component: ActorsPage,
  },
  {
    path: "/reviews",
    component: ReviewPage,
  },
  {
    path: "/add",
    component: AddData,
  },
  {
    path: "/*",
    component: HomePage,
  },
];

export default definedRoutes;
