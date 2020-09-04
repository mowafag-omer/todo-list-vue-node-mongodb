import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [
      // {id:1598814602429, name: "sdfsdfsdf", createdAt: "2020-08-30T19:10:02.429Z", todo: true},
      // {id:1598815602429, name: "shhhhhhmdf", createdAt: "2020-08-30T19:10:02.429Z", todo: true}
    ]
  },
  getters: {
    getTodos: (state) => (whatToDisplay) => {
      if(whatToDisplay == 'all') return state.todoList
      if(whatToDisplay == 'todo') return state.todoList.filter(elm => elm.todo == true && elm)
      if(whatToDisplay == 'done') return state.todoList.filter(elm => elm.todo == false && elm)
    }
  },
  mutations: {
    setState: (state, list) => {
      state.todoList = list
    },
    addTodo: (state, todo) => {
      state.todoList.push(todo)
    },
    updateTodo: (state, id) => {
      const index = state.todoList.findIndex(elem => elem.id === id)
      state.todoList[index].todo = !state.todoList[index].todo
    },
    deleteTodo: (state, id) => {
      const index = state.todoList.findIndex(elem => elem.id === id)
      state.todoList.splice(index, 1)
    }
  },
  actions: {
    getList: (context, list) => {
      context.commit('setState', list)
    },
    addTodo: (context, list) => {
      context.commit('addTodo', list)
    },
    updateTodo: (context, id) => {
      context.commit('updateTodo', id)
    },
    deleteTodo: (context, id) => {
      context.commit('deleteTodo', id)
    }
  }
})