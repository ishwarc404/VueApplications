import ApiServices from "../../services/apiServices";
let APIobj = new ApiServices();
this.movieData = APIobj.readFromDatabase("movies");

const state = {
  movies: [
    {
      id: 1,
      name: "12 Monkeys",
      yearOfRelease: "1995",
      plot:
        "Inspired by the 1962 French short La Jetée, a prisoner (Bruce Willis) is sent back in time to learn more about the virus that wiped out nearly all of humanity. Terry Gilliam directs.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Twelve_monkeysmp.jpg",
      actors: [1, 2, 5, 5],
      producer: 1
    }
  ]
};
const getters = {
  allMovies: state => state.movies
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
