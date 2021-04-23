import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_movies: [],
    genres: [],
    slider: [],
    idGenre: null,
    sortBy: 'popularity.desc',
    keyword: '',
    reviews: []
  },
  mutations: {
    SET_LIST_MOVIES (state, payload) {
      state.list_movies = payload
    },
    SET_GENRES (state, payload) {
      state.genres = payload
    },
    SET_SLIDER (state, payload) {
      state.slider = payload
    },
    SET_ID (state, payload) {
      state.idGenre = payload
    },
    SORT_BY (state, payload) {
      state.sortBy = payload
    },
    SET_SEARCH (state, payload) {
      state.keyword = payload
    },
    SET_REVIEWS (state, payload) {
      state.reviews = payload
    }
  },
  actions: {
    dispatchReviews ({state, commit}, id) {
      return axios({
        url: `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US&page=1`,
        method: 'GET'
      }).then((response) => {
        console.log('reviews', response)
        commit('SET_REVIEWS', response.data.results)
        return Promise.resolve(response.data)
      })
    },
    dispatchDetails ({state, commit}, id) {
      return axios({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US`,
        method: 'GET'
      }).then((response) => {
        console.log('details', response)
        return Promise.resolve(response.data)
      })
    },
    dispatchSearch ({state, commit}, key) {
      return axios({
        url: `https://api.themoviedb.org/3/search/movie?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US&query=${key}&page=1&include_adult=false`,
        method: 'GET'
      }).then((response) => {
        console.log('search', response)
        commit('SET_SEARCH', response.data.results)
        return Promise.resolve(response.data.results)
      })
    },
    dispatchSlider ({state, commit}) {
      return axios({
        url: 'https://api.themoviedb.org/3/trending/all/day?api_key=6f3cb07e268dd21ad1dee49c775edf79',
        method: 'GET'
      }).then((response) => {
        console.log('slider', response)
        commit('SET_SLIDER', response.data.results)
        return Promise.resolve(response.data.results)
      })
    },
    getList ({ state, commit }, id) {
      if(id !== undefined) {
        id = id.toString()
      }
      console.log('pass id', id)
      return axios({
        url: id === undefined ? 'https://api.themoviedb.org/3/discover/movie?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' : `https://api.themoviedb.org/3/discover/movie?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US&sort_by=${state.sortBy}&include_adult=false&include_video=false&page=1&with_genres=${id}`,
        method: 'GET'
      }).then((response) => {
        console.log('getList', response)
        commit('SET_LIST_MOVIES', response.data.results)
        return Promise.resolve(response.data.results)
      })
    },
    getGenres ({ state, commit }, payload) {
      return axios({
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=6f3cb07e268dd21ad1dee49c775edf79&language=en-US',
        method: 'GET'
      }).then((response) => {
        console.log('gene', response)
        commit('SET_GENRES', response.data.genres)
        return Promise.resolve(response.data.genres)
      })
    },
    
  },
  getters: {
    getListMovies: state => state.list_movies,
    gettersGenres: state => state.genres,
    gettersSlider: state => state.slider,
    getReviews: state => state.reviews
  },
  modules: {
  }
})
