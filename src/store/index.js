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
    user_id:"",
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
      const responseLogin = await axios
        .post(
          "http://127.0.0.1:8000/api/v1/login",{
            email: email,
            password: password,
        })
        .catch((error) => {
          console.log(error);
        });
      const responseUser = await axios
        .get(
          "http://127.0.0.1:8000/api/v1/users/"
          )
        .then((response) => {
          return response.data.data.find((v) => v.email === email);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log('responseUser', responseUser);
      console.log('responseLogin', responseLogin);
      if (responseUser && responseLogin) {
        commit("userId", responseUser.id);
        commit("auth", responseLogin.data.auth);
        router.replace("/");
      } else {
        alert("メールアドレス、またはパスワードが違います。")
      }
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
