import Vue from 'vue'
import VueRouter from 'vue-router'
import AddForm from '../components/AddForm.vue'
import TodoList from '../components/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AddForm },
  { path: '/list', component: TodoList, props: {whatToDisplay: "all"}},
  { path: '/done', component: TodoList, props: {whatToDisplay: "done"}},
  { path: '/todo', component: TodoList, props: {whatToDisplay: "todo"}}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
