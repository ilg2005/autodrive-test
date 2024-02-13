import { createStore } from 'vuex'

export default createStore({
  state: {
    isPopupVisible: false
  },
  mutations: {
    showPopup(state) {
      state.isPopupVisible = true
    },
    closePopup(state) {
      state.isPopupVisible = false
    }
  },
  actions: {},
  getters: {
    getPopupVisibility: state => state.isPopupVisible
  }
});
