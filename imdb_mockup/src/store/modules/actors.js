import ApiServices from "../../services/apiServices";
let APIobj = new ApiServices();

const state = {
  actors: [],
  original: []
};
const getters = {
  allActors(state) {
    return state.actors;
  }
};

const actions = {
  async fetchActors({ commit }) {
    let actorData = await APIobj.readFromDatabase("actors");
    commit("setActors", actorData);
    commit("original", actorData);
  },
  filterActorFunction({ commit },value) {
    let actorData = state.original;
    let filteredData = [];
    for(var i=0;i<actorData.length;i++){
      if(actorData[i].name.includes(value)||actorData[i].bio.includes(value)||actorData[i].movies.includes(value)||actorData[i].dateOfBirth.includes(value)){
        filteredData.push(actorData[i]);
      }
    }
    commit("setActors", filteredData);
  },
};

const mutations = {
  setActors(state, actors) {
    state.actors = actors;
  },
  original(state, actors) {
    state.original = actors;
  }
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
