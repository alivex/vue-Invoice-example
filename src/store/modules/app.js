const state = {
  device: "desktop",
  dialogOpen: false,
  dialogStatus: "create"
};

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  TOGGLE_DIALOG: (state, dialogOpen) => {
    state.dialogOpen = dialogOpen;
  },
  TOGGLE_DIALOG_STATUS: (state, dialogStatus) => {
    state.dialogStatus = dialogStatus;
  }
};

const actions = {
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
  toggleDialog({ commit }, dialogOpen) {
    commit("TOGGLE_DIALOG", dialogOpen);
  },
  toggleDialogStatus({ commit }, dialogStatus) {
    commit("TOGGLE_DIALOG_STATUS", dialogStatus);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
