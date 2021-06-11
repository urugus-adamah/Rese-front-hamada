import Vue from 'vue';
import Vuex from 'vuex';
import createPresistedState from 'vuex-persistedstate';
import axios from 'axios';
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPresistedState()],
  state: {
    auth: "",
    user:"",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password}) {
      // console.log(email);
      // console.log(password);
      const responseLogin = await axios.get(
        "http://localhost:3000/api/v1/login",
        {
          email: email,
          password: password,
        }
      );
      commit("auth", responseLogin.data.auth);
      router.replace("/");
    }
  },
  modules: {
  }
})
