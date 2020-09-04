<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="">TodoList</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">New</router-link>
        <router-link class="nav-link" to="/todo">ToDo</router-link>
        <router-link class="nav-link" to="/done">Done</router-link>
        <router-link class="nav-link" to="/list">List</router-link>   
      </b-navbar-nav>
    </b-collapse>   
  </b-navbar>    
</template>