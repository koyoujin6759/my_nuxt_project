export const state = () => ({
  name: "test",
  email: "test@naver.com",
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
  },
};
