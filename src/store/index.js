import { createStore } from 'vuex'

export default createStore({
  state: {
    isPopupVisible: false,
    currentCityId: '',
    cities: [
      {
        id: 1,
        name: "Москва"
      },
      {
        id: 2,
        name: "Санкт-Петербург"
      },
      {
        id: 3,
        name: "Казань"
      }
    ]
  },
  mutations: {
    showPopup(state) {
      state.isPopupVisible = true
    },
    closePopup(state) {
      state.isPopupVisible = false
    },
    setCurrentCityId(state, payload) {
      state.currentCityId = payload;
    }
  },
  actions: {},
  getters: {
    getPopupVisibility: state => state.isPopupVisible,
    getCities: state => state.cities,
    getCurrentCityId: state => state.currentCityId
  }
});
