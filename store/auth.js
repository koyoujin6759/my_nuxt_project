export const state = () => ({
  name: "",
  email: "",
  _id: "",
});

export const getters = {
  getUser(state) {
    return state;
  },
};

export const mutations = {
  setUser(state, payload) {
    state.name = payload.name;
    state.email = payload.email;
    state._id = payload._id;
  },
};
