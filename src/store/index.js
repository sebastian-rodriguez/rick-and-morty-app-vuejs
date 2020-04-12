import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: []
  },
  mutations: {
    loadCharacters(state, characters){
      state.characters = characters
    },
    loadEpisodes(state, episodes){
      state.episodes = episodes
    }
  },
  actions: {
    async  getCharacters(context){
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const data = await response.json();

      context.commit('loadCharacters',data.results)
    },
    async getEpisodes(context){
      const response = await fetch('https://rickandmortyapi.com/api/episode/')
      const data = await response.json()

      context.commit('loadEpisodes', data.results)
    }
  },
  modules: {
  },
  getters: {
    getCharacter(state, id){
      return state.characters.filter( character => character.id == id)
    }
  }
})
