<template>
    <!-- <ul class="b-list-group">
      <singleTodo v-for="todo in todos" :key="todo.name" :item='todo'/>
    </ul>  -->
  <div class="container">
    <draggable v-model="myList" ghost-class="ghost"  @end="onEnd">
      <transition-group>
        <singleTodo class="sortabel" v-for="todo in todos" :key="todo.id" :item='todo'>
          {{todo.name}}
        </singleTodo>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import SingleTodo from './SingleTodo'
import draggable from 'vuedraggable'

export default {
  name: 'todoList',
  components: {
    SingleTodo,
    draggable
  },
  props: {
    whatToDisplay: String
  },
  data(){
    return {
      oldIndex: '',
      newIndex: ''
    }
  },
  methods: {
    onEnd: function(evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex
      this.newIndex = evt.newIndex
    }
  },
  computed: {
    todos () {
      return this.$store.getters.getTodos(this.whatToDisplay)
    },
    myList: {
        get() {
            return this.$store.state.myList
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
  }
}
</script>

<style>
.sortabel{
  width: 70%;
  padding: .7em;
  margin: 4px auto;
  text-align: left;
  background: white;
  border-radius: 3px;
  cursor: move;
  /* border-left: 5px solid rgb(79, 128, 79); */
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.05);
}

.ghost {
  border-left: 5px solid rgb(79, 128, 79);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
}
</style>