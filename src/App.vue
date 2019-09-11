<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <h1>
      {{ msg }}
    </h1>
    <router-link to="/people">All People in the Star Wars Universe</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import peopleList from '../components/people-list.vue'

export default {
  name: 'app',

  components: {
    peopleList
  },

  data() {
    return {
      msg: 'the Star Wars Universe'
    }
  }
}
</script>

<style>
  #app {
    transition: all 0.5s;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    color: #42b983;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  div>a {
    display: block;
    font-size: 20px;
    margin: 10px;
  }
</style>
