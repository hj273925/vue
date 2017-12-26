import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    message: {
      title: 'success',
      info: '操作成功',
      description: ''
    },
    todos: [
      { id: 1, text: 'work', done: true },
      { id: 2, text: 'home', done: false }
    ]
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.count
    },
    setmessage(state, payload) {
      state.message = {...payload}
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state, getters) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    increment({ commit }, payload) {
      commit('increment', payload)
    }
  }
})

export default store
