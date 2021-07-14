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
    user_id:4,
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    userId(state, payload) {
      state.user_id = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password}) {
      const responseLogin = await axios.post(
        "http://127.0.0.1:8000/api/v1/login",
        {
          email: email,
          password: password,
        }
      );
      // const responseUser = await axios.get(
      //   "http://127.0.0.1:8000/api/v1/users/"
      //   );
        
      commit("auth", responseLogin.data.auth);
      // commit("user", responseUser.data.id);
      console.log(responseLogin);
      // console.log(responseUser.data);
      router.replace("/");
    },
    logout({ commit }) {
      axios
        .post("http://127.0.0.1:8000/api/v1/logout", {
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
