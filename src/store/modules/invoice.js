const state = {
  temp: {
    id: undefined,
    created_on: new Date(),
    amount: {
      type: Number
    },
    name: {
      type: String
    },
    bank: {
      type: String
    }
  },
  refresh: Object
};

const mutations = {
  RESET_TEMP: state => {
    state.temp = {
      id: undefined,
      created_on: new Date(),
      amount: "",
      name: "",
      bank: ""
    };
  },
  SET_TEMP: (state, temp) => {
    state.temp = temp;
  },
  REFRESH_TABLE: (state, refresh) => {
    state.refresh = refresh;
  }
};

const actions = {
  resetTemp({ commit }) {
    commit("RESET_TEMP");
  },
  setTemp({ commit }, data) {
    commit("SET_TEMP", data);
  },
  refreshTable({ commit }, refresh) {
    commit("REFRESH_TABLE", refresh);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
