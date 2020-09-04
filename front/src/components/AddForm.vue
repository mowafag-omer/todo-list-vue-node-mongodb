<template>
  <b-form v-on:submit.prevent="addTask" action='/'>
    <b-input-group prepend="New Task" class="mb-2 mx-auto w-50">
      <b-input id="inline-form-input-username" v-model="task" placeholder="Todo Name" required/>
      <b-button type="submit"><b-icon-file-plus></b-icon-file-plus> Add</b-button>
    </b-input-group>
  </b-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addForm',
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTask: async function() {
      try{ 
        await axios.post('http://localhost:3030/todo', {
          id: Date.now(),
          name: this.task,
          createdAt: new Date(),
          todo: true
        })
        // this.$alert(`the todo ${this.task} has been added successfully !`)
        await this.$fire({title: "New todo", text: `${this.task} has been added to your list !`,type: "success",timer: 2500})
        this.$store.dispatch('addTodo',{id: Date.now(), name: this.task, createdAt: new Date(), todo: true})
        this.task = ''
      } 
      catch(err) { console.error(err) }
    }
  }
}
</script>

<style scoped>

</style>