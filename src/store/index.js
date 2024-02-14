import { createStore } from 'vuex'

export default createStore({
  state: {
    isPopupVisible: false,
    isFormSubmitted: false,
    result: '',
    currentCityId: '',
    cities: [
      {
        id: 1,
        name: 'Москва'
      },
      {
        id: 2,
        name: 'Санкт-Петербург'
      },
      {
        id: 3,
        name: 'Казань'
      }
    ]
  },
  mutations: {
    showPopup(state) {
      state.isPopupVisible = true
    },
    closePopup(state) {
      state.isPopupVisible = false
      state.isFormSubmitted = false
    },
    setCurrentCityId(state, payload) {
      state.currentCityId = payload
    },
    setResult(state, payload) {
      state.result = payload
    },
    showResult(state) {
      state.isFormSubmitted = true
    }
  },
  getters: {
    getPopupVisibility: state => state.isPopupVisible,
    getCities: state => state.cities,
    getCurrentCityId: state => state.currentCityId,
    getResult: state => state.result
  }
})
