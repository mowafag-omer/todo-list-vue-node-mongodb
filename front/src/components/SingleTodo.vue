<template>
  <div v-if="item.todo == false" class="done"><span @click="toggle"><b-icon-check-circle-fill/> {{ item.name }} </span><b-icon-trash @click="deleteTodo" /></div> 
  <div v-else><span @click="toggle"><b-icon-check2-circle/> {{ item.name }} </span><b-icon-trash  @click="deleteTodo" /></div> 
</template>

<script>
import axios from 'axios'

export default {
  name: 'SingleTodo',
  props: ['item'],
  methods: {
    toggle: async function() {
      try{ 
        await axios.put('http://localhost:3030/todo', {
          id: this.item.id,
          todo: this.item.todo
        })
        this.$store.dispatch('updateTodo', this.item.id)
      } 
      catch(err) { console.error(err) }
    },
    deleteTodo: async function() {
      try{ 
        const conf = await this.$confirm("Are you sure?")
        if(conf != true)  return
        await axios.delete(`http://localhost:3030/todo/${this.item.id}`)
        this.$store.dispatch('deleteTodo', this.item.id)
      } 
      catch(err) { console.error(err) }
    }  
  }  
}
</script>

<style lang="scss" scoped>
svg.bi-trash.b-icon.bi{
  float: right;
  color: rgb(182, 72, 72);
  cursor: pointer;
}
span{
  cursor: pointer;
}
.done{
  text-decoration: line-through;
  // border-left: 5px solid rgb(201, 105, 105);
  color: gray;
}
</style>