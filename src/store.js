import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Actions = {
  FIND_STOCK: 'FIND_STOCK',
  REMOVE_INDIVIDUAL_STOCK: 'REMOVE_INDIVIDUAL_STOCK',
}

export const store = new Vuex.Store({

  // initial state
  state: {
    socket: {
      isReconnectionFailed: false,
    },
    stocks: [],
    prices: {},
  },

  mutations: {

    [Actions.FIND_STOCK](state, addNewStock) {
      if (!state.stocks.includes(addNewStock)) {
        state.stocks = [...state.stocks, addNewStock]
      }
    },

    [Actions.REMOVE_INDIVIDUAL_STOCK](state, removeStock) {
      state.stocks = state.stocks.filter(stock => stock !== removeStock)
    },

    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget

      state.socket = {
        isOpen: true,
        isReconnectionFailed: false,
      }
    },

    SOCKET_ONMESSAGE(state, message) {
      state.prices = {
        ...state.prices,
        [message.isin]: {
          ...message
        },
      }
    },

    SOCKET_ONCLOSE(state) {

      Vue.prototype.$socket = null
      state.socket.isOpen = false
    }
  },

  actions: {
    [Actions.FIND_STOCK]({ commit }, stock) {
      commit(Actions.FIND_STOCK, stock)
      // send data in format `{"subscribe": "{isin}"}`
      Vue.prototype.$socket.send(JSON.stringify({ subscribe: stock }))
    },

    [Actions.REMOVE_INDIVIDUAL_STOCK]({ commit }, stock) {
      commit(Actions.REMOVE_INDIVIDUAL_STOCK, stock)
      Vue.prototype.$socket.send(JSON.stringify({ unsubscribe: stock }))
    },
  },
})
