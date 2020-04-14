import ApiServices from "../../services/apiServices";
let APIobj = new ApiServices();


const state = {
  actors: []
};
const getters = {
  allActors(state){
      return state.actors
  }
};

const actions = {
  async fetchActors({commit}){
    let actorData = await APIobj.readFromDatabase("actors");
    commit('setActors',actorData)
  }
};

const mutations = {
  setActors(state,actors){
      (state.actors = actors) 
  }
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
