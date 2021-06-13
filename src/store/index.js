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
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password}) {
      const responseLogin = await axios.post(
        "http://localhost:3000/api/v1/login",
        {
          email: email,
          password: password,
        }
      );
      commit("auth", responseLogin.data.auth);
      router.replace("/");
    },
    logout({ commit }) {
      axios
        .post("http://localhost:3000/api/v1/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  }
})
