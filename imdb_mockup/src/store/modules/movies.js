import ApiServices from "../../services/apiServices";
let APIobj = new ApiServices();

const state = {
  movies: [],
  original:[]
};
const getters = {
  allMovies: state => state.movies
};

const actions = {
  async fetchMovies({ commit }) {
    let movieData = await APIobj.readFromDatabase("movies");
    commit("setMovies", movieData);
    commit("original", movieData);
  },
  filterFunction({ commit },value) {
    let movieData = state.original;
    let filteredData = [];
    for(var i=0;i<movieData.length;i++){
      if(movieData[i].name.includes(value)||movieData[i].plot.includes(value)||movieData[i].actors.includes(value)||movieData[i].yearOfRelease.includes(value)){
        filteredData.push(movieData[i]);
      }
    }
    commit("setMovies", filteredData);
  },
  unfilterFunction({ commit }) {
    let movieData = state.original;
    commit("setMovies", movieData);
  }
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  original:(state,movies) => (state.original = movies)
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
